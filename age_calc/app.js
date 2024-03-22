let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let res = document.getElementById("res");

function calcAge(){
    let birthDate = new Date(userInput.value);
    
    let d1 = birthDate.getDate();
    let n1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let n2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, n3;
    let y3 = y2 - y1;

    if(n2 >= n1){
        n3 = n2 - n1;
    } else{
        y3--;
        n3 = 12 + n2 - n1;
    }

    if(d2 >= d1){
        d3 = d2 - d1;
    } else{
        n3--;
        d3 = getDays(y1, n1) + d2 - d1;
    }
    if(n3 < 0){
        n3 - 11;
        y3--;
    }

    res.innerHTML = `Ты проживаешь свой <span style="color: #73B1D6;">${y3}</span> год, <span style="color: #73B1D6;">${n3}</span> месяц, <span style="color: #73B1D6;">${d3}</span> день.`;
}

function getDays(year, month){
    return new Date(year, month, 0).getDate();
}

