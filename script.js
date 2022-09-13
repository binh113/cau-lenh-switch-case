let thang1 = 1;
let thang2 = 2;
let thang3 = 3;
let thang4 = 4;
let thang5 = 5;
let thang6 = 6;
let thang7 = 7;
let thang8 = 8;
let thang9 = 9;
let thang10 = 10;
let thang11 = 11;
let thang12 = 12;
let mounth;

function check_mounth() {
    let mounth = parseInt(document.getElementById("mounth").value)
    switch (mounth) {
        case thang1 :
        case thang3 :
        case thang5 :
        case thang7 :
        case thang8 :
        case thang10 :
        case thang12 :
            alert("tháng " + mounth + " có 31 ngày");
            break;
        case thang4 :
        case thang6 :
        case thang9 :
        case thang11 :
            alert("tháng " + mounth + " có 30 ngày");
            break;
        case thang2 :
            alert("tháng " + mounth + "có 29 hoặc 28 ngày");
            break;
        default :
            alert("vui lòng nhập lại tháng");
            break;
    }
}

