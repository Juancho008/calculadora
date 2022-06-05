const inputName = document.getElementById("inputName");
const inputCost = document.getElementById("inputCost");
const list = document.getElementById("list-p");
let ArrayPeople = [];
let restAcum = 0

function validar() {
    ArrayPeople.push([inputName.value, inputCost.value]);
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerText = ArrayPeople.at(-1)[0] + ": " + ArrayPeople.at(-1)[1]
    li.append(closeButton());
    list.append(li);

    totalValue();
}
function closeButton() {
    let Close = document.createElement("button");
    Close.addEventListener('click', function deteleItem() {
        const str = this.parentElement.textContent;
        const name = str.slice(0, str.indexOf(':'));
        ArrayPeople = ArrayPeople.filter(elem => elem[0] !== name)
        console.log(ArrayPeople)
        this.parentElement.remove();
        totalValue();
    }, false);
    Close.classList.add("btn-close");
    return Close;
}

function totalValue() {
    let acum = 0;
    for (const people of ArrayPeople) {
        acum += (people[1] - 0) - restAcum;
        console.log(acum);
    }

    let total = acum / ArrayPeople.length;
    let div = document.getElementById("total");
    div.innerText = "A pagar cada uno: " + total;
}