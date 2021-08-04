let scrollToTopBtn = document.getElementById("scrollToTopBtn")
scrollToTopBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
    // window.scroll(0, 0)
    scrollToSmoothly(0, 800)
}

function scrollToSmoothly(pos, time) {
    var currentPos = window.pageYOffset;
    var start = null;
    if(time == null) time = 500;
    pos = +pos, time = +time;
    window.requestAnimationFrame(function step(currentTime) {
        start = !start ? currentTime : start;
        var progress = currentTime - start;
        if (currentPos < pos) {
            window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos);
        } else {
            window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time));
        }
        if (progress < time) {
            window.requestAnimationFrame(step);
        } else {
            window.scrollTo(0, pos);
        }
    });
}


function toggleOpacity() {
    let menu = document.getElementById("menu");
    if (menu.classList.contains("fade-in")) {
        menu.classList.remove("fade-in");
    } else {
        menu.classList.add("fade-in");
    }
}


let mySlider = new rSlider({
    target: '#sampleSlider',
    values: [
        100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 
        1100, 1200,1300,1400, 1500, 1600, 1700, 1800, 1900, 2000, 
        2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 
        3100, 3200, 3300, 3400, 3500, 3600, 3700, 3800, 3900, 4000, 
        4100
    ],
    range: true,
    tooltip: true,
    scale: true,
    labels: false,
    set: [400, 3000]
});