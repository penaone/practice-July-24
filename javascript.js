

document.getElementById("Growbtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "250px";

});

document.getElementById("Fadebtn").addEventListener("click", function(){
    document.getElementById("box").style.opacity = ".5";
});

  
document.getElementById("Colorbtn").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "blue";
});

document.getElementById("Resetbtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "150px";document.getElementById("box").style.opacity = "1.0";document.getElementById("box").style.backgroundColor= "orange";

});

