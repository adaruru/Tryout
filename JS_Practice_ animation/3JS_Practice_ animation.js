
window.onload = function () {
    //�_�l��m
    var pos = 0;

    //theBox element ����X��
    var theBox = document.getElementById("theBox");

    //move �C0.05��϶�����C�� ��ƶV�ְʧ@�V��
    var t = setInterval(move,50);

    //��lfuncion������
    function move() {
        if (pos >= 170) { //�_�l0��170��A30px����n200
            clearInterval(t)
        }
        else {
            pos += 1; //�ʤ@����1
            theBox.style.left = pos + "px"; //�ʪ����1px
        }

    }
}; //function�@�w�n�O���[  ;  


function myFunction() {
    document.getElementById('show').style.display = 'block';
};

var image = ["3JS_Practice_ animation/blooming.jpg", "3JS_Practice_ animation/branches.jpg", "3JS_Practice_ animation/crab.jpg"];


