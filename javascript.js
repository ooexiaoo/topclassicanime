// Mobile menu toggle
window.onload = function () {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });
}

var currentPage = window.location.pathname;
console.log(currentPage);
// Background image randomization
if (currentPage === 'https://classicanime.pages.dev/berserk' || currentPage === 'https://classicanime.pages.dev/cowboy' || currentPage === 'https://classicanime.pages.dev/gate' || currentPage === 'https://classicanime.pages.dev/fullmetal') {
document.addEventListener("DOMContentLoaded", function () {
    function pic() {
        var bgm = [
            '/images/img1.webp',
            '/images/img2.webp',
            '/images/img3.webp',
            '/images/img4.webp',
            '/images/img5.webp',
            '/images/img6.webp',
            '/images/img7.webp',
            '/images/img8.webp',
        ];

        // Get a random index from the array
        var randomIndex = Math.floor(Math.random() * bgm.length);

        // Set the background image of the body
        document.body.style.background = 'url(' + bgm[randomIndex] + ') no-repeat';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundAttachment = 'fixed';
        document.body.style.backgroundColor = 'black';
    }

    pic();
});
}
