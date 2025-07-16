let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerText;

        if (value === '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } else if (value === 'AC') {
            string = "";
            input.value = "";
        } else if (value === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else {
            string += value;
            input.value = string;
        }
    });
});
