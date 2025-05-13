let count = 0;

const count_el = document.getElementById("count");
const entries_el = document.getElementById("entries");

function increment() {
    count += 1;
    count_el.textContent = count;
}

function save() {
    entries_el.textContent += count + " - ";
    count = 0;
    count_el.textContent = count;
}
