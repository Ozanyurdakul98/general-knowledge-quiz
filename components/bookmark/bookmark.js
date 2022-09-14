import createCard from "../card/card.js";

const cardSection = document.querySelector('[data-js="cardsSection"]');

const cards = [
  {
    question: "Question 1",
    answer: "Answer 1",
    tag: "Tag 1",
    tag2: "Tag 1",
    tag3: "Tag 1",
    tag4: "Tag 1",
  },
  {
    question: "Question 2",
    answer: "Answer 2",
    tag: "Tag 1",
    tag2: "Tag 1",
    tag3: "Tag 1",
    tag4: "Tag 1",
  },
  {
    question: "Question 3",
    answer: "Answer 3",
    tag: "Tag 1",
    tag2: "Tag 1",
    tag3: "Tag 1",
    tag4: "Tag 1",
  },
];

cards.forEach((card) => {
  const cardElement = createCard(
    card.question,
    card.answer,
    card.tag,
    card.tag2,
    card.tag3,
    card.tag4
  );
  cardSection.append(cardElement);
});
///////////////////////////////////

// ______________________BookmarkButton_________________________
// const allBookmarkButtons = document.querySelectorAll(
//   '[data-js="bookmarkButton"]'
// );

// allBookmarkButtons.forEach((element) =>
//   element.addEventListener("click", (event) => {
//     const buttonElement = event.target;
//     buttonElement.classList.toggle("card-section__card__bookmark--saved");
//   })
// );

// ____________________ShowAnswerHideAnswer_______________________
const CardSectionWrapper = document.getElementById("wrapper");

CardSectionWrapper.addEventListener("click", (event) => {
  const isButton = event.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
    //
  } else if (
    event.target.textContent !== "Hide Answer" &&
    event.target.parentNode
      .querySelector(".quizAnswer")
      .classList.contains("quizAnswer")
  ) {
    event.target.textContent = "Hide Answer";
    event.target.parentNode
      .querySelector(".quizAnswer")
      .classList.remove("hideAnswer");
    //
  } else if (event.target.textContent === "Hide Answer") {
    event.target.textContent = "Show Answer";
    event.target.parentNode
      .querySelector(".quizAnswer")
      .classList.add("hideAnswer");
    //
  } else if (event.target.parentNode.querySelector(".quizAnswer")) {
    e.target.parentNode.querySelector(".quizAnswer").classList.add("Example");
  } else if (
    event.target.parentNode
      .querySelector(".quizAnswer")
      .classList.contains(".quizAnswer")
  ) {
  } else {
    e.target.parentNode.style.background = "white";
  }
});
