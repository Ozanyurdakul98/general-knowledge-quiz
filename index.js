//const bookmarkButton = document.querySelector('[data-js="bookmarkButton"]');
// function handleLikeButtonClick(event) {
//   const buttonElement = event.target;
//   buttonElement.classList.toggle("card-section__card__bookmark--saved");
// }
// bookmarkButton.addEventListener("click", handleLikeButtonClick);
//
//
//
//
// ______________________BookmarkButton_________________________
const allBookmarkButtons = document.querySelectorAll(
  '[data-js="bookmarkButton"]'
);

allBookmarkButtons.forEach((element) =>
  element.addEventListener("click", (event) => {
    //console.log(el.getAttribute("data-js"));
    //console.log(element);
    const buttonElement = event.target;
    buttonElement.classList.toggle("card-section__card__bookmark--saved");
  })
);
// ____________________createCardForm_______________________
const form = document.querySelector('[data-js="createCardForm"]');
const quizAnswer_p = document.querySelector('[data-js="quizAnswer-p"]');
const quizAnswerInput = document.querySelector('[data-js="quizAnswerInput"]');
const quizQuestion_p = document.querySelector('[data-js="quizQuestion-p"]');
const quizQuestionInput = document.querySelector(
  '[data-js="quizQuestionInput"]'
);
//
const tag_a = document.querySelector("[data-js='tagA']");
const newTagInput = document.querySelector("[data-js='newTagInput']");
const tag_a2 = document.querySelector("[data-js='tagA2']");
const newTagInput2 = document.querySelector("[data-js='newTagInput2']");
const tag_a3 = document.querySelector("[data-js='tagA3']");
const newTagInput3 = document.querySelector("[data-js='newTagInput3']");
const tag_a4 = document.querySelector("[data-js='tagA4']");
const newTagInput4 = document.querySelector("[data-js='newTagInput4']");
//
const createdCard = document.querySelector('[data-js ="createdCard"]');
const cardsSection = document.querySelector('[data-js="cardsSection"]');
//
//
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

form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.reset();
  form.quizQuestion.focus();
  //
  //cardsSection.append(createdCard.value);
  //
  cardsSection.append(createdCard.cloneNode(true));
  // const cardHTML = createdCard.innerHTML;
  // cardsSection.insertAdjacentHTML(
  //   "beforeend",
  //   `<div class="card-section__card" data-js="createdCard">${cardHTML}</div>`
  // );
  //
  console.log("contributed");
});
