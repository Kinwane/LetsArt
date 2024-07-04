let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
    let slides = document.querySelectorAll('.card');
    let slideContainer = document.querySelector('.slides');
    let totalSlides = slides.length;
    let maxVisibleSlides = 3;
    let offset;

    if (window.innerWidth <= 768) {
        maxVisibleSlides = 2;
    }
    if (window.innerWidth <= 480) {
        maxVisibleSlides = 1;
    }

    if (n >= totalSlides / maxVisibleSlides) { slideIndex = 0; }
    if (n < 0) { slideIndex = Math.floor(totalSlides / maxVisibleSlides) - 1; }

    offset = -slideIndex * 100 / maxVisibleSlides;
    slideContainer.style.transform = `translateX(${offset}%)`;
}

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function toggleMoreInfo(infoId) {
    var moreInfo = document.getElementById(infoId);
    if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block";
    } else {
        moreInfo.style.display = "none";
    }
}

window.addEventListener('resize', function() {
    showSlides(slideIndex);
});
