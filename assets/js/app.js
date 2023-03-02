let img = document.querySelector("img");
let html = document.querySelector("h2");
let percent = 100;
let interval_count = setInterval(() => {
    percent--;
    img.style.filter = `blur(${percent}px)`;
    html.style.opacity = `${percent}%`;
    html.innerText = `${percent}%`;
    console.log(percent);
    if (percent <= 0) {
        clearInterval(interval_count);
    }
}, 30);

window.addEventListener("load", () => {
    interval_count;
});
