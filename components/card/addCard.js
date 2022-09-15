import createCard from "./card.js";
import { loadCards, saveCards } from "../../utilities/localstorage.js";

// ____________________cardForm_______________________
const form = document.querySelector('[data-js="createCardForm"]');
const quizAnswer_p = document.querySelector('[data-js="quizAnswer-p"]');
const quizAnswerInput = document.querySelector('[data-js="quizAnswerInput"]');
const quizQuestion_p = document.querySelector('[data-js="quizQuestion-p"]');
const quizQuestionInput = document.querySelector(
  '[data-js="quizQuestionInput"]'
);
const tag_a = document.querySelector("[data-js='tagA']");
const newTagInput = document.querySelector("[data-js='newTagInput']");
const tag_a2 = document.querySelector("[data-js='tagA2']");
const newTagInput2 = document.querySelector("[data-js='newTagInput2']");
const tag_a3 = document.querySelector("[data-js='tagA3']");
const newTagInput3 = document.querySelector("[data-js='newTagInput3']");
const tag_a4 = document.querySelector("[data-js='tagA4']");
const newTagInput4 = document.querySelector("[data-js='newTagInput4']");
const cardsSection = document.querySelector('[data-js="cardsSection"]');

quizQuestionInput.addEventListener("input", () => {
  quizQuestion_p.textContent = quizQuestionInput.value;
});
quizAnswerInput.addEventListener("input", () => {
  quizAnswer_p.textContent = quizAnswerInput.value;
});
newTagInput.addEventListener("input", () => {
  tag_a.textContent = newTagInput.value;
});
newTagInput2.addEventListener("input", () => {
  tag_a2.textContent = newTagInput2.value;
});
newTagInput3.addEventListener("input", () => {
  tag_a3.textContent = newTagInput3.value;
});
newTagInput4.addEventListener("input", () => {
  tag_a4.textContent = newTagInput4.value;
});
// ____________________SubmitAddCard_______________________

form.addEventListener("submit", (event) => {
  //const createdCard = document.querySelector('[data-js ="createdCard"]');
  // cardsSection.append(createdCard.cloneNode(true));
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const newCard = {
    id: Math.random() + "",
    question: data.quizQuestion,
    answer: data.quizAnswer,
    tag: data.newTag,
    tag2: data.newTag2,
    tag3: data.newTag3,
    tag4: data.newTag4,
    bookmarked: false,
  };
  console.log("submitted");
  const cards = loadCards();
  cards.push(newCard);
  saveCards(cards);
  alert("New Card created!");

  form.reset();
  form.quizQuestion.focus();
  //  for (var [key, value] of formData.entries()) {
  //   console.log(key, value);}
});

// // ____________________ShowAnswerHideAnswer_______________________
// const CardSectionWrapper = document.getElementById("wrapper");

// CardSectionWrapper.addEventListener("click", (event) => {
//   const isButton = event.target.nodeName === "BUTTON";
//   if (!isButton) {
//     return;
//     //
//   } else if (
//     event.target.textContent !== "Hide Answer" &&
//     event.target.parentNode
//       .querySelector(".quizAnswer")
//       .classList.contains("quizAnswer")
//   ) {
//     event.target.textContent = "Hide Answer";
//     event.target.parentNode
//       .querySelector(".quizAnswer")
//       .classList.remove("hideAnswer");
//     //
//   } else if (event.target.textContent === "Hide Answer") {
//     event.target.textContent = "Show Answer";
//     event.target.parentNode
//       .querySelector(".quizAnswer")
//       .classList.add("hideAnswer");
//     //
//   } else if (event.target.parentNode.querySelector(".quizAnswer")) {
//     e.target.parentNode.querySelector(".quizAnswer").classList.add("Example");
//   } else if (
//     event.target.parentNode
//       .querySelector(".quizAnswer")
//       .classList.contains(".quizAnswer")
//   ) {
//   } else {
//     e.target.parentNode.style.background = "white";
//   }
// });
