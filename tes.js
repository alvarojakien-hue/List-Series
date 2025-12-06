const toggle = document.querySelector("#btn1");
toggle.style.position = "fixed";
toggle.style.top = "20px";
toggle.style.right = "20px";
toggle.style.fontSize = "25px";
toggle.style.padding = "10px";
toggle.style.borderRadius = "200%";
toggle.style.cursor = "pointer";
toggle.style.border = "none";
toggle.style.boxShadwo = "0 0 10px rgba(0,0,0,0,3)";

toggle.addEventListener("click", function() {
    if(document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

        toggle.innerText = "🌙";
        toggle.style.backgroundColor = "black";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";

        toggle.innerText = "☀️";
        toggle.style.backgroundColor = "yellow"
    }
});

const gambar = document.querySelector("#gambar");
gambar.src = "https://image.tmdb.org/t/p/original/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg";

app.use((req, res, next) => {
    res.setHeader("ngrok-skip-browser-warning", 
"true");
    next();
});
