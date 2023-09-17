
const arrow16 = document.getElementById("arrow16");
const arrow1 = document.getElementById("arrow1");
const arrow2 = document.getElementById("arrow2");
const arrow3 = document.getElementById("arrow3");
const arrow4 = document.getElementById("arrow4");
const arrow5 = document.getElementById("arrow5");
const arrow6 = document.getElementById("arrow6");
const arrow7 = document.getElementById("arrow7");
const arrow8 = document.getElementById("arrow8");
const arrow9 = document.getElementById("arrow9");
const arrow10 = document.getElementById("arrow10");
const arrow11 = document.getElementById("arrow11");
const arrow12 = document.getElementById("arrow12");
const arrow13 = document.getElementById("arrow13");
const arrow14 = document.getElementById("arrow14");
const arrow15 = document.getElementById("arrow15");

const question = document.querySelector(".question");
const answer = document.querySelector(".answer");

const question1 = document.querySelector(".question1");
const answer1 = document.querySelector(".answer1");

const question2 = document.querySelector(".question2");
const answer2 = document.querySelector(".answer2");

const question3 = document.querySelector(".question3");
const answer3 = document.querySelector(".answer3");

const question4 = document.querySelector(".question4");
const answer4 = document.querySelector(".answer4");

const question5 = document.querySelector(".question5");
const answer5 = document.querySelector(".answer5");

const question6 = document.querySelector(".question6");
const answer6 = document.querySelector(".answer6");

const question7 = document.querySelector(".question7");
const answer7 = document.querySelector(".answer7");

const question8 = document.querySelector(".question8");
const answer8 = document.querySelector(".answer8");

const question9 = document.querySelector(".question9");
const answer9 = document.querySelector(".answer9");

const question10 = document.querySelector(".question10");
const answer10 = document.querySelector(".answer10");

const question11 = document.querySelector(".question11");
const answer11 = document.querySelector(".answer11");

const question12 = document.querySelector(".question12");
const answer12 = document.querySelector(".answer12");

const question13 = document.querySelector(".question13");
const answer13 = document.querySelector(".answer13");

const question14 = document.querySelector(".question14");
const answer14 = document.querySelector(".answer14");

const question15 = document.querySelector(".question15");
const answer15 = document.querySelector(".answer15");

const question16 = document.querySelector(".question16");
const answer16 = document.querySelector(".answer16");

function handleAccordion() {
  answer.classList.toggle("answer");
}

function handleAccordion1() {
  answer1.classList.toggle("answer1");
  if (arrow1.id == "arrow1") {
    arrow1.id = "arrow1-active";
  } else {
    arrow1.id = "arrow1";
  }
}
function handleAccordion2() {
  answer2.classList.toggle("answer2");
  if (arrow2.id == "arrow2") {
    arrow2.id = "arrow2-active";
  } else {
    arrow2.id = "arrow2";
  }
}
function handleAccordion3() {
  answer3.classList.toggle("answer3");
  if (arrow3.id == "arrow3") {
    arrow3.id = "arrow3-active";
  } else {
    arrow3.id = "arrow3";
  }
}
function handleAccordion4() {
  answer4.classList.toggle("answer4");
  if (arrow4.id == "arrow4") {
    arrow4.id = "arrow4-active";
  } else {
    arrow4.id = "arrow4";
  }
}
function handleAccordion5() {
  answer5.classList.toggle("answer5");
  if (arrow5.id == "arrow5") {
    arrow5.id = "arrow5-active";
  } else {
    arrow5.id = "arrow5";
  }
}
function handleAccordion6() {
  answer6.classList.toggle("answer6");
  if (arrow6.id == "arrow6") {
    arrow6.id = "arrow6-active";
  } else {
    arrow6.id = "arrow6";
  }
}

function handleAccordion7() {
  answer7.classList.toggle("answer7");
  if (arrow7.id == "arrow7") {
    arrow7.id = "arrow7-active";
  } else {
    arrow7.id = "arrow7";
  }
}

function handleAccordion8() {
  answer8.classList.toggle("answer8");
  if (arrow8.id == "arrow8") {
    arrow8.id = "arrow8-active";
  } else {
    arrow8.id = "arrow8";
  }
}

function handleAccordion9() {
  answer9.classList.toggle("answer9");
  if (arrow9.id == "arrow9") {
    arrow9.id = "arrow9-active";
  } else {
    arrow9.id = "arrow9";
  }
}

function handleAccordion10() {
  answer10.classList.toggle("answer10");
  if (arrow10.id == "arrow10") {
    arrow10.id = "arrow10-active";

  } else {
    arrow10.id = "arrow10";

  }
}

function handleAccordion11() {
  answer11.classList.toggle("answer11");
  if (arrow11.id == "arrow11") {
    arrow11.id = "arrow11-active";

  } else {
    arrow11.id = "arrow11";

  }
}

function handleAccordion12() {
  answer12.classList.toggle("answer12");
  if (arrow12.id == "arrow12") {
    arrow12.id = "arrow12-active";
  } else {
    arrow12.id = "arrow12";
  }
}

function handleAccordion13() {
  answer13.classList.toggle("answer13");
  if (arrow13.id == "arrow13") {
    arrow13.id = "arrow13-active";

  } else {
    arrow13.id = "arrow13";

  }
}

function handleAccordion14() {
  answer14.classList.toggle("answer14");
  if (arrow14.id == "arrow14") {
    arrow14.id = "arrow14-active";

  } else {
    arrow14.id = "arrow14";

  }
}

function handleAccordion15() {
  answer15.classList.toggle("answer15");
  if (arrow15.id == "arrow15") {
    arrow15.id = "arrow15-active";

  } else {
    arrow15.id = "arrow15";

  }
}

function handleAccordion16() {
  answer16.classList.toggle("answer16");
  if (arrow16.id == "arrow16") {
    arrow16.id = "arrow16-active";

  } else {
    arrow16.id = "arrow16";

  }
}

question.addEventListener("click", handleAccordion); 
question1.addEventListener("click", handleAccordion1);
question2.addEventListener("click", handleAccordion2);
question3.addEventListener("click", handleAccordion3);
question4.addEventListener("click", handleAccordion4);
question5.addEventListener("click", handleAccordion5);
question6.addEventListener("click", handleAccordion6);
question7.addEventListener("click", handleAccordion7);
question8.addEventListener("click", handleAccordion8);
question9.addEventListener("click", handleAccordion9);
question10.addEventListener("click", handleAccordion10);
question11.addEventListener("click", handleAccordion11);
question12.addEventListener("click", handleAccordion12);
question13.addEventListener("click", handleAccordion13);
question14.addEventListener("click", handleAccordion14);
question15.addEventListener("click", handleAccordion15);
question16.addEventListener("click", handleAccordion16);