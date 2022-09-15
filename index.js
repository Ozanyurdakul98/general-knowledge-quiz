import createCard from "./components/card/card.js";
import { loadCards, saveCards } from "./utilities/localstorage.js";

const cardSection = document.querySelector('[data-js="cardsSection"]');

let cards = loadCards();

function toggleBookmark(id) {
  const toggledCardArray = cards.map((card) =>
    card.id === id ? { ...card, bookmarked: !card.bookmarked } : card
  );
  cards = toggledCardArray;
  saveCards(toggledCardArray);
}

cards.forEach((card) => {
  const cardElement = createCard(
    card.question,
    card.answer,
    card.tag,
    card.tag2,
    card.tag3,
    card.tag4,
    card.bookmarked,
    () => toggleBookmark(card.id)
  );
  cardSection.append(cardElement);
});

//Charakter Counter
const question = document.querySelector('[data-js="quizQuestionInput"]');
const questionCounter = document.querySelector('[data-js="question-counter"]');
const answer = document.querySelector('[data-js="quizAnswerInput"]');
const answerCounter = document.querySelector('[data-js="answer-counter"]');

function initializeCounter(element, elementCounter) {
  const maxLength = parseInt(element.getAttribute("maxlength"));
  element.addEventListener("input", () => {
    const length = element.value.length;
    const remainingCharacters = maxLength - length;
    elementCounter.textContent = `${remainingCharacters} characters left`;
  });
}

initializeCounter(question, questionCounter);
initializeCounter(answer, answerCounter);
