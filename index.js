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
quizQuestionInput.addEventListener("input", (event) => {
  quizQuestion_p.textContent = quizQuestionInput.value;
});
quizAnswerInput.addEventListener("input", (event) => {
  console.log(quizAnswerInput.value);
  quizAnswer_p.textContent = quizAnswerInput.value;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.reset();
  form.quizQuestion.focus();
  console.log("contributed");
});
