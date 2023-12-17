var mongoose=require("mongoose");
var dbURI = 'mongodb+srv://mekan32:mekan32@mekanbul.0u8h4w2.mongodb.net/';
mongoose.connect(dbURI);
mongoose.connection.on("connected",function(){
    console.log(dbURI+" adresindeki veritabanına bağlandı");
});
mongoose.connection.on("error",function(){
    console.log(dbURI+" bağlantı sağlanamadı");
});    
mongoose.connection.on("disconnected",function(){
    console.log(dbURI+" bağlantı kesildi");
}); 

kapat = function(msg,callback){
    mongoose.connection.close(function(){
        console.log("Bağlantı kapatıldı: " + msg)
        callback();
    });

    process.on("SIGINT", function(){
        kapat("Uygulama kapatıldı", function(){
            process.exit(0);
        });
    });
}
require("./venue");