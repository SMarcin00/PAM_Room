let lights = 1;
let painting = 1;
let color = 1;

document.getElementById("Lights-1").addEventListener("click", function () {
    lights = 1;
    this.classList.add("active");
    document.getElementById("Lights-2").classList.remove("active");
    document.getElementById("Lights-3").classList.remove("active");
    updatePic();
});


document.getElementById("Lights-2").addEventListener("click", function () {
    lights = 2;
    this.classList.add("active");
    document.getElementById("Lights-1").classList.remove("active");
    document.getElementById("Lights-3").classList.remove("active");
    updatePic();
});

document.getElementById("Lights-3").addEventListener("click", function () {
    lights = 3;
    this.classList.add("active");
    document.getElementById("Lights-1").classList.remove("active");
    document.getElementById("Lights-2").classList.remove("active");
    updatePic();
});




document.getElementById("Painting-1").addEventListener("click", function () {
    painting = 1;
    this.classList.add("active");
    document.getElementById("Painting-2").classList.remove("active");
    document.getElementById("Painting-3").classList.remove("active");
    updatePic();
});


document.getElementById("Painting-2").addEventListener("click", function () {
    painting = 2;
    this.classList.add("active");
    document.getElementById("Painting-1").classList.remove("active");
    document.getElementById("Painting-3").classList.remove("active");
    updatePic();
});

document.getElementById("Painting-3").addEventListener("click", function () {
    painting = 3;
    this.classList.add("active");
    document.getElementById("Painting-1").classList.remove("active");
    document.getElementById("Painting-2").classList.remove("active");
    updatePic();
});

document.getElementById("Color-1").addEventListener("click", function () {
    color = 1;
    this.classList.add("active");
    document.getElementById("Color-2").classList.remove("active");
    document.getElementById("Color-3").classList.remove("active");
    updatePic();
});

document.getElementById("Color-2").addEventListener("click", function () {
    color = 2;
    this.classList.add("active");
    document.getElementById("Color-1").classList.remove("active");
    document.getElementById("Color-3").classList.remove("active");
    updatePic();
});

document.getElementById("Color-3").addEventListener("click", function () {
    color = 3;
    this.classList.add("active");
    document.getElementById("Color-1").classList.remove("active");
    document.getElementById("Color-2").classList.remove("active");
    updatePic();
});

function updatePic() {
    let picPath = "../img/" + lights + "-" + painting + "-" + color + ".png";
    document.getElementById("pic").src=picPath;
}