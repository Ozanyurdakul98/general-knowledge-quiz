function loadCards() {
  const cards = localStorage.getItem("cards");
  if (cards === null) {
    console.log("cards null");
    return [];
  }
  console.log("return json parse");
  return JSON.parse(cards);
}

function saveCards(cards) {
  localStorage.setItem("cards", JSON.stringify(cards));
  console.log("savedCards");
}

export { loadCards, saveCards };
