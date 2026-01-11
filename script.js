const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const diceBtn = document.getElementById("dice-btn");

async function getAdviceById(id) {
  const response = await fetch(
    `https://api.adviceslip.com/advice/${id}?ts=${Date.now()}`
  );
  const data = await response.json();

  adviceId.textContent = data.slip.id;
  adviceText.textContent = `"${data.slip.advice}"`;
}

async function getRandomAdvice() {
  const response = await fetch(
    "https://api.adviceslip.com/advice?ts=" + Date.now()
  );
  const data = await response.json();

  adviceId.textContent = data.slip.id;
  adviceText.textContent = `"${data.slip.advice}"`;
}

// On load → 117
getAdviceById(117);

// On click → random
diceBtn.addEventListener("click", getRandomAdvice);
