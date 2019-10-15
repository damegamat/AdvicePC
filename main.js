let possibilities = ["Fight", "Think about it"];

const add = document.querySelector(".add");
const clean = document.querySelector(".clean");
const input = document.querySelector("input");
const message = document.querySelector("h1");
const showAdvice = document.querySelector(".showAdvice");
const showOptions = document.querySelector(".showOptions");

const addPossibility = e => {
  e.preventDefault();
  const possibilityValue = input.value;
  if (possibilityValue) {
    for (possibility of possibilities) {
      if (possibility === possibilityValue) {
        alert("Possibility Already Exists");
        return;
      }
    }
    possibilities.push(possibilityValue);
    input.value = "";
    alert(`dodałeś ${possibilityValue}`);
  }
};

add.addEventListener("click", addPossibility);

const cleanPossibility = e => {
  e.preventDefault();
  possibilities.length = 0;
  message.textContent = "";
  input.value = "";
};

clean.addEventListener("click", cleanPossibility);

const Advice = () => {
  const indexPossibility = Math.floor(Math.random() * possibilities.length);
  message.textContent = possibilities[indexPossibility];
};

showAdvice.addEventListener("click", Advice);

const Options = () => {
  alert(possibilities);
};

showOptions.addEventListener("click", Options);
