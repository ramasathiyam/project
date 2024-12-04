// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di select
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk hilang navabr
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const searchOverlay = document.getElementById('searchOverlay');

document.addEventListener("click", function (e) {
  if (!searchOverlay.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

function toggleSearchOverlay() {
    if (searchOverlay.style.display === 'flex') {
        searchOverlay.style.display = 'none';
    } else {
        searchOverlay.style.display = 'flex';
    }
}

// Pastikan untuk memanggil fungsi ini saat ikon search ditekan
document.querySelector('.search-icon').addEventListener('click', toggleSearchOverlay);


