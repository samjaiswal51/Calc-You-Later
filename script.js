const input = document.getElementById("inputbox");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    button.classList.add("clicked");
    setTimeout(() => button.classList.remove("clicked"), 150);

    if (value === "AC") {
      expression = "";
      input.value = "";
    } else if (value === "DEL") {
      expression = expression.slice(0, -1);
      input.value = expression;
    } else if (value === "=") {
      try {
        expression = eval(expression).toString();
        input.value = expression;
        input.classList.add("pulse");
        setTimeout(() => input.classList.remove("pulse"), 200);
      } catch {
        input.value = "Error";
        expression = "";
      }
    } else {
      expression += value;
      input.value = expression;
      input.classList.add("pulse");
      setTimeout(() => input.classList.remove("pulse"), 200);
    }
  });
});
