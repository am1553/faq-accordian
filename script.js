// SELECTORS
const quesBtn = document.getElementsByClassName("accordian-question");
const answerOpen = document.getElementsByClassName("open");
// const answerClose = document.getElementsByClassName("close");

for(var i = 0; i < quesBtn.length; i++) {
    const btnArrow = quesBtn[i].childNodes[1].children[1];
    const accordianAnswer = quesBtn[i].nextElementSibling;
    const questionHeading = document.getElementsByClassName("question-heading")[i];
    
    quesBtn[i].addEventListener("click", () => {
        // accordianAnswer.classList.toggle("close");
        
        
        if(accordianAnswer.classList != "close") {
            accordianAnswer.classList.toggle("close");
            questionHeading.classList.toggle("bold-text");
            btnArrow.classList.toggle("btn-arrow");
        }
    })
    

}
