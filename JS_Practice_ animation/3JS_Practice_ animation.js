
window.onload = function () {
    //起始位置
    var pos = 0;

    //theBox element 先找出來
    var theBox = document.getElementById("theBox");

    //move 每0.05秒區間執行每次 秒數越少動作越快
    var t = setInterval(move,50);

    //初始funcion讓它動
    function move() {
        if (pos >= 170) { //起始0走170後，30px接剛好200
            clearInterval(t)
        }
        else {
            pos += 1; //動一次動1
            theBox.style.left = pos + "px"; //動的單位1px
        }

    }
}; //function一定要記的加  ;  


function myFunction() {
    document.getElementById('show').style.display = 'block';
};

var image = ["3JS_Practice_ animation/blooming.jpg", "3JS_Practice_ animation/branches.jpg", "3JS_Practice_ animation/crab.jpg"];


