function createCard(
  question,
  answer,
  tag,
  tag2,
  tag3,
  tag4,
  bookmarked,
  bookmarkCallback
) {
  const card = document.createElement("div");
  card.classList.add("card-section__card");
  card.innerHTML = `
        <button
        type="button"
        class="card-section__card__bookmark ${
          bookmarked ? "card-section__card__bookmark--saved" : ""
        }"
            data-js="bookmarkButton"
        >
            <i class="fa-solid fa-bookmark" data-js-="test"></i>
        </button>
        <div class="card-section__card__question">
            <p>${question}</p>
        </div>
        <div class="card-section__card__button">
        <button
          class="card-section__card__button__link button"
          data-js="buttonShowAnswer"
        >
          Show Answer
        </button>
        <div class="quizAnswer" data-js="quizAnswer">
          <p>
        ${answer}
          </p>
            </div>
        </div>
        <div class="card-section__card__tags-container">
            <ul class="card-section__card__tags-container__list">
          <li>
            <a
              href="http://lostthecow.com"
              class="card-section__card__tags-container__list__item__link yellow"
            >
              ${tag}</a
            >
          </li>
          <li>
            <a
              href="http://lostthecow.com"
              class="card-section__card__tags-container__list__item__link red"
            >
            ${tag2}</a
            >
          </li>
          <li>
            <a
              href="http://lostthecow.com"
              class="card-section__card__tags-container__list__item__link blue"
            >
            ${tag3}</a
            >
          </li>
          <li>
            <a
              href="http://lostthecow.com"
              class="card-section__card__tags-container__list__item__link green"
            >
            ${tag4}</a
            >
            </li>
            </ul>
            </div>`;
  //

  console.log("ausgeführt");

  const answerButton = card.querySelector('[data-js="buttonShowAnswer"]');
  const answerElement = card.querySelector('[data-js="quizAnswer"]');
  const BookmarkButtons = card.querySelector('[data-js="bookmarkButton"]');

  answerButton.addEventListener("click", () => {
    if (answerElement.classList.contains("quizAnswer--active")) {
      answerElement.classList.remove("quizAnswer--active");
      answerButton.textContent = "Show Answer";
    } else {
      answerElement.classList.add("quizAnswer--active");
      answerButton.textContent = "Show Answer";
    }
  });
  // answerButton.addEventListener("click", () => {
  //   if (answerElement.classList.contains("card__answer--active")) {
  //     answerElement.classList.remove("card__answer--active");
  //     answerButton.textContent = "Show answer";
  //   } else {
  //     answerElement.classList.add("card__answer--active");
  //     answerButton.textContent = "Hide answer";
  //   }
  // });

  BookmarkButtons.addEventListener("click", () => {
    BookmarkButtons.classList.toggle("card-section__card__bookmark--saved");
    bookmarkCallback();
  });
  return card;
}
export default createCard;
