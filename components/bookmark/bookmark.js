import createCard from "../card/card.js";
import { loadCards, saveCards } from "../../utilities/localstorage.js";

const cardSection = document.querySelector('[data-js="cardsSection"]');

let cards = loadCards();
function toggleBookmark(id) {
  const toggledCardArray = cards.map((card) =>
    card.id === id ? { ...card, bookmarked: !card.bookmarked } : card
  );
  cards = toggledCardArray;
  saveCards(toggledCardArray);
}

// const cards1 = [
//   {
//     question: "Question 1",
//     answer: "Answer 1",
//     tag: "Tag 1",
//     tag2: "Tag 1",
//     tag3: "Tag 1",
//     tag4: "Tag 1",
//   },
// ];

function renderCards() {
  cardSection.innerHTML = "";
  cards
    .filter((card) => card.bookmarked)
    .forEach((card) => {
      const cardElement = createCard(
        card.question,
        card.answer,
        card.tag,
        card.tag2,
        card.tag3,
        card.tag4,
        card.bookmarked,
        () => {
          toggleBookmark(card.id);
          renderCards();
        }
      );
      cardSection.append(cardElement);
    });
}
renderCards();
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
