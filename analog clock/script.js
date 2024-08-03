let numberhours = document.querySelector('.number-hours');
let numberelement = [];


for (let i = 1; i <= 12; i++) {
    numberelement.push(
        `<span style="--index:${i};"><p>${i}</p></span>`
    );
}

numberhours.insertAdjacentHTML("afterbegin", numberelement.join(""));