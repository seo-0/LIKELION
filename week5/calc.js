const num= document.querySelectorAll(".num");
let result= document.querySelector("#result");
let calcResult ="" //숫자를 빈문자열로 바꿔서 쌓이도록한것
const zero = document.querySelector(".ac");
const operator = document.querySelectorAll(".op");
const calc = document.querySelector(".calc-op");

num.forEach((number) => {
    number.addEventListener("click", (e)=>{
        calcResult += e.target.value;
        result.innerText = calcResult;
    })
});

zero.addEventListener("click", ()=>{
    calcResult = ""; //눌러진 숫자배열을 다시 초기화 시켜준 후
    result.innerText= 0; //결과창을 0으로 초기화 해주는 작업
})

// operator.addEventListener("click", (e)=>{
//    calcResult = e.target.value;
//    result.innerText= calcResult;
// })

operator.forEach((op) => op.addEventListener("click", (e) => {
    calcResult += e.target.value;
    result.innerText = calcResult;

}));

calc.addEventListener("click", ()=>{
    result.innerText = eval(calcResult);
    calcResult = eval(calcResult); //다음 연산시 계산식이 아니라 계산 결과값을 보여주는 것
})





