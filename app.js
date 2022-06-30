const inputName = document.getElementById("inputName");
const inputCost = document.getElementById("inputCost");
const list = document.getElementById("list-p");
let arrayP = [];
let restAcum = 0

function validar() {
    arrayP.push([inputName.value, inputCost.value]);
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerText = arrayP.at(-1)[0] + ": " + arrayP.at(-1)[1]
    li.append(closeButton());
    list.append(li);

    totalValue();
}
function closeButton() {
    let Close = document.createElement("button");
    Close.addEventListener('click', function deteleItem() {
        const str = this.parentElement.textContent;
        const name = str.slice(0, str.indexOf(':'));
        arrayP = arrayP.filter(elem => elem[0] !== name)
        console.log(arrayP)
        this.parentElement.remove();
        totalValue();
    }, false);
    Close.classList.add("btn-close");
    return Close;
}

function totalValue() {
    let acum = 0;
    for (const people of arrayP) {
        acum += (people[1] - 0) - restAcum;
        console.log(acum);
    }

    let total = acum / arrayP.length;
    let div = document.getElementById("total");
    div.innerText = "A pagar cada uno: " + total;
}
