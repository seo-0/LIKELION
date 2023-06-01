const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const button = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME= "hidden";
const USERNAME_KEY= "username";

// onLoginClick()=>{
//     const username = loginForm.value;
//     if (username === ""){
//         alert("Please write your name");
//     }else if(username.length > 15){
//         alert("Your name is too long");
//     }
// }// 브라우저 html안에서 할 수 있으므로 전체 주석처리

function paintGreeting(username){
// onloginsubmit과 if-else에서 히든클래스 제거가 반복되므로 함수화!
greeting.innerText = `Hello ${username}`;
greeting.classList.remove(HIDDEN_CLASSNAME);

}

function onLoginSubmit(event){
    event.preventDefault(); //submit할때 발생하는 기본동작 제지, 즉 우리가 이후에 원하는데로 컨트롤가능
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username= loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);//mini database역할! 
    // greeting.innerText = `Hello ${username}`;
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreeting(username);
}
loginForm.addEventListener("submit", onLoginSubmit);

const saveUsername = localStorage.getItem("USERNAME_KEY");
if (saveUsername === null){
//form을 보여주기
loginForm.classList.remove(HIDDEN_CLASSNAME);
loginForm.addEventListener("submit", onLoginSubmit);
}else{
//greeting을 보여주기 
    paintGreeting(saveUsername);
}//지금존재하는건 save유저네임이니까!주의!
