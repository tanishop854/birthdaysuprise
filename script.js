
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", () => {
    const i = Math.floor(Math.random() * 80);
    const j = Math.floor(Math.random() * 80);
    noBtn.style.position = "absolute";
    noBtn.style.left = i + "%";
    noBtn.style.top = j + "%";
});

yesBtn.addEventListener("click", () => {
    window.location.href = "countdown.html";
});
