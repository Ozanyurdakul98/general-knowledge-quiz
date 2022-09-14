import createCard from "./components/card/card.js";

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
