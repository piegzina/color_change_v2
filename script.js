const colorChange = document.getElementById('colors');
const box = document.querySelector('.box');

const change = (e) => {
    const btn = e.target.nodeName === "BUTTON";
    if (!btn) {
        return
    }
    box.style.backgroundColor = e.target.value;
    e.target.style.backgroundColor = e.target.value;
}

colorChange.addEventListener('click', change);