const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const diceBtn = document.getElementById("dice-btn");

// Fetch advice by ID
async function getAdviceById(id) {
  const response = await fetch(
    `https://api.adviceslip.com/advice/${id}?ts=${Date.now()}`
  );
  const data = await response.json();

  adviceId.textContent = data.slip.id;
  adviceText.textContent = `"${data.slip.advice}"`;
}

// Fetch random advice
async function getRandomAdvice() {
  const response = await fetch(
    "https://api.adviceslip.com/advice?ts=" + Date.now()
  );
  const data = await response.json();

  adviceId.textContent = data.slip.id;
  adviceText.textContent = `"${data.slip.advice}"`;
}


window.onload = getRandomAdvice;

// On click → random advice
diceBtn.addEventListener("click", getRandomAdvice);
