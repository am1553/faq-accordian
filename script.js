// SELECTORS
const quesBtn = document.getElementsByClassName("accordian-question");
const answerOpen = document.getElementsByClassName("open");

// const answerClose = document.getElementsByClassName("close");

for(var i = 0; i < quesBtn.length; i++) {
    const accordianAnswer = quesBtn[i].nextElementSibling;
    const questionHeading = document.getElementsByClassName("question-heading")[i];
    
    quesBtn[i].addEventListener("click", () => {
        // accordianAnswer.classList.toggle("close");
        
        if(accordianAnswer.classList != "close") {
            accordianAnswer.classList.toggle("close");
            questionHeading.classList.add("bold-text");
        } else if (accordianAnswer.classList === "close"){
  
            questionHeading.classList.remove("bold-text");
        } else {
            questionHeading.classList.remove("bold-text");
        }
    })
    

}
