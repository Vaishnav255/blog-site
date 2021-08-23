var like = 0;
document.querySelector(".btn").addEventListener("click", function(){
    like=like+1;
    document.querySelector(".inc").innerHTML = like;
});

var like1 = 0;
document.querySelectorAll(".btn")[1].addEventListener("click", function(){
    like1=like1+1;
    document.querySelector(".dec").innerHTML = like1;
});
