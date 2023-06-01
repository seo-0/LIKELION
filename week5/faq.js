const faqQuestions = document.querySelectorAll(".faq-container-item");
const faqAnswer = document.querySelectorAll(".faq-answer");
const button = document.querySelector("#button");
const faqtitle= document.querySelectorAll(".faq-title");
const span= document.querySelectorAll("span");

for(let i=0; i< faqQuestions.length; i++){
    faqQuestions[i].addEventListener("click", () => {
        if(faqAnswer[i].classList.contains("showfaq-answer"))
        {
            faqtitle[i].style.backgroundColor="white";
            faqAnswer[i].classList.remove("showfaq-answer");
            span[i].innerText="▼" ;

        }
        else 
        {
            faqtitle[i].style.backgroundColor= "blue";
            faqAnswer[i].classList.add("showfaq-answer");
            span[i].innerText="▲" ;
        }

    });
}

for(let i=0; i< faqQuestions.length; i++){
  button.addEventListener("click", () => {
    faqAnswer[i].classList.remove("showfaq-answer");
    faqtitle[i].style.backgroundColor="white";
    span[i].innerText="▼";
 })
};