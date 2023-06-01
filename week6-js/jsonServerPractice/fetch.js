//데이터조회를 비동기식으로 !
async function fetchSignupInfo(){
    try {
       const response= await fetch("http://localhost:3000/users");
        if (!response.ok) {
            throw new Error("회원정보를 가져오는데 실패했습니다");
        }

        const data = await response.json(); //데이터 조회하는 단계
        displaySignupInfo(data); //데이터를 표시하는 함수호출!
    }
    catch (error){
        console.log(error);
    }
}


function displaySignupInfo(data){
    const signupInfoDiv = document.querySelector("#signupInfo");
    signupInfoDiv.innerHTML = `
    <h2>회원가입 정보</h2>`;

data.forEach((info) => {
    const signupData = document.createElement("div");
    signupData.innerHTML =`
    <p>사용자명: ${info.username}</p>
    <p>이메일: ${info.email}</p>
    <p>비밀번호: ${info.password}</p>
    <hr> 
`; //hr=한줄분리태그

signupInfoDiv.appendChild(signupData);
});
}


async function addSignupInfo(newSignupInfo){
    try{
        const response = await fetch("http://localhost:3000/users", {
            method: "POST", //fetch는기본이get이라 명시해야함
            headers: { //전달할파일이 어떤타입인지 명시
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newSignupInfo),
        });

        if (!response.ok){
            throw new Error("회원가입 정보를 전송하는데 실패하였습니다.");
        }
        console.log("회원가입 완료");
    }
    catch(error){
        console.log(error);
    }
}
//처음부터회원정보 표시하기위함
fetchSignupInfo(); 

const signupForm = document.querySelector("#signupForm");
signupForm.addEventListener("submit", async(e) =>{
    e.preventDefault();
    const username =document.getElementById("username").value;
    const email =document.getElementById("email").value;
    const password =document.getElementById("password").value;

    const newSignupInfo= {
        username : username, //변수라서 ""안해도되고 키벨류에서 벨류값이 있으면 " "로 표기
        email: email,
        password: password,
    };//객체화 시켜서 addsign함수에 전달해줘서 추가시킴!!

    await addSignupInfo(newSignupInfo);

    await fetchSignupInfo();

});

