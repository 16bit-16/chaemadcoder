let total = String("0");
const info = document.querySelector(".info")
let value = 0;

function num(su) {
    if(total == 0) {
        total = su;
        value = 0;
    } else {
        total = total + String(su);
        value = 0;
    }
    info.innerHTML = total;
};

function giho(su) {
    if(total == 0) {
        alert("먼저 수를 입력해주세요");
    } else {
        if (value == 0){
            total = total + su;
            value = 1;
        } else {
            alert("이미 연산자를 입력했습니다.");
        }
    }
    info.innerHTML = total;
};

function cac() {
    total = String((total));
    total = eval(total);
    info.innerHTML = total;
};

function reset() {
    total = String("0");
    value = 0;
    info.innerHTML = total;
}