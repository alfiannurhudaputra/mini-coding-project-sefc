// burger menu
$(document).ready(function () {
    $('.burgermenu').on('click', function () {
        $('.mob-nav').toggle();
    })
});

// sliders
let slideIndex = 1;
plusSlide(1);
function plusSlide(n) {
    showImg((slideIndex += n));
}

console.log(slideIndex);

function showImg(n) {
    let i;
    let imgList = document.getElementsByClassName("img-content");
    // console.log(imgList.length);
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }

    imgList[slideIndex - 1].style.display = "block";

    console.log(slideIndex);
}

// form validation
console.log('ok');

function send() {
    // array dari nama-nama bulan
    const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "Desember"];

    // membuat waktu yang sedang dilakukan
    let date = new Date();
    let tanggal = date.getDate() + " " + (bulan[date.getMonth()]) + " " + date.getFullYear();
    let jam = date.getHours() + ":" + date.getMinutes();

    waktu = jam + ", " + tanggal

    // mengambil data dari input form
    let name1 = document.forms["input-form"]["name1"].value;
    let date1 = document.forms["input-form"]["date1"].value;
    let gender1 = document.forms["input-form"]["gender1"].value;
    let message1 = document.forms["input-form"]["message1"].value;

    // validasi form ke-2 | validasi form pertama menggunakan atribut required pada tag input form
    if (name1 === "" || date1 === "" || gender1 === "" || message1 === "") {
        alert("Input form tidak boleh kosong!");
        return false;
    }

    // DOM element lalu diberi masukan dari form
    document.getElementById("time").innerText = waktu;
    document.getElementById("name2").innerText = name1;
    document.getElementById("date2").innerText = date1;
    document.getElementById("gender2").innerText = gender1;
    document.getElementById("message2").innerText = message1;
}

