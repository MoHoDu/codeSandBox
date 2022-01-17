const generate_form = document.querySelector("#generate_form");
const generate_input = generate_form.querySelector("#generate");

const guess_form = document.querySelector("#guess_form");
const guess_input = guess_form.querySelector("#guess");

const result_form = document.querySelector("#result_form");
const result = result_form.querySelector("#result");
const my_chosen = result_form.querySelector("#chosen_form #my_chosen");
const mc_chosen = result_form.querySelector("#chosen_form #mc_chosen");

let generate_num = -1;
let my_num = -1;

function notabled(e) {
  e.preventDefault();
}

function generate() {
  if (generate_input.value !== "") {
    generate_num = Math.floor(
      Math.random() * (parseInt(generate_input.value) + 1)
    );
    mc_chosen.innerHTML = " " + generate_num;
  } else {
    alert("Please insert the generate number!!");
    generate_num = -1;
  }
}

function guess(event) {
  notabled(event);
  generate();
  if (generate_num >= 0) {
    my_chosen.innerHTML = " " + guess_input.value;
    my_num = parseInt(guess_input.value);
    result_form.classList.remove("hidden");
    if (my_num === generate_num) {
      result.innerHTML = "You won!";
    } else {
      result.innerHTML = "You lost!";
    }
  }
}

generate_form.addEventListener("submit", notabled);
guess_form.addEventListener("submit", guess);
