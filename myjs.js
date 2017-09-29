document.getElementById("open").addEventListener("click", function (){
    document.getElementById("control").style.left = "0px";
} );
document.getElementById("close").addEventListener("click", function (){
    document.getElementById("control").style.left = "-200px";
} );
document.getElementById("bg1").addEventListener("click", function (){
    document.getElementById("bgImage").style.backgroundImage = "url(img/bg1.jpg)";
});
document.getElementById("bg2").addEventListener("click", function (){
    document.getElementById("bgImage").style.backgroundImage = "url(img/bg2.jpg)";
});
document.getElementById("bg3").addEventListener("click", function (){
    document.getElementById("bgImage").style.backgroundImage = "url(img/bg3.jpg)";
});
document.getElementById("bg4").addEventListener("click", function (){
    
    document.getElementById("bgImage").style.backgroundImage = "url(img/bg4.jpg)";
});