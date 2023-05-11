const addBtn= document.getElementById("add"); /*둘이 같은 함수지만 얘는 id에서만 사용가져오기*/ 
const subBtn= document.querySelector("#sub");
let number= document.querySelector("p");

let count= number.innerHTML;

addBtn.addEventListener("click", ()=> {
    count++;
    // console.log(count);
    number.innerHTML= count;
});
subBtn.addEventListener("click", ()=> {
    count--;
    number.innerHTML= count;
});

const title= document.querySelector("h1");

function changeColor(){
    title.style.color= "blue";
    title.style.fontSize = "20px";
    title.style.backgroundColor= "yellow";
}
// const changeColor =() =>{
//     title.style.color= "tomato";
// } // fuction 이랑 같은 뜻 다른 방식 코드 

title.addEventListener("click", changeColor);