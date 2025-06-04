function navOpen() {
    var x = document.getElementById("menu-reponsive");
    if (x.className === "site-navigation") {
        x.className += " navigation-open";
    } else {
        x.className = "site-navigation";
    }
}

function handleSelectionChange() {
    var dropdown = document.getElementById("myDropdown");
}

// Js Swiper carousel
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';
import { register } from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.mjs';

register();

window.addEventListener('DOMContentLoaded', () => {
  const swiperEl = document.querySelector('.mySwiper');

  if (swiperEl) {
    swiperEl.slidesPerView = 1.2;
    swiperEl.spaceBetween = 12;

    swiperEl.breakpoints = {
        0: {
            slidesPerView: 1.3,
            spaceBetween: 12,
        },
        575: {
            slidesPerView: 1.5,
            spaceBetween: 16,
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3.5,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4.6,
            spaceBetween: 24,
        }
    };
  }
});


// Js Search box
document.addEventListener('DOMContentLoaded', function () {
    function toggleDropdown(id) {
        document.querySelectorAll('.dropdown').forEach(d => d.style.display = 'none');
        const dropdown = document.getElementById('dropdown-' + id);
        if (dropdown) dropdown.style.display = 'block';
    }

    function selectValue(fieldId, value) {
        document.getElementById(fieldId).innerText = value;
        document.getElementById('dropdown-' + fieldId).style.display = 'none';
    }

    window.toggleDropdown = toggleDropdown;
    window.selectValue = selectValue;

    // Click ngoài để đóng dropdown
    window.addEventListener('click', function(e) {
        const fields = document.querySelectorAll('.field');
        let clickedInside = false;
        fields.forEach(field => {
            if (field.contains(e.target)) clickedInside = true;
        });
        if (!clickedInside) {
            document.querySelectorAll('.dropdown').forEach(d => d.style.display = 'none');
        }
    });
});


// Js Popup image
document.addEventListener("DOMContentLoaded", function () {
    const iconBtns = document.querySelectorAll('.gallery-icon');
    const popup = document.getElementById('imagePopup');
    const popupImg = document.getElementById('popupImage');
    const closeBtn = document.querySelector('.popup-close');

    iconBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const imgSrc = btn.getAttribute('data-img');
          popupImg.src = imgSrc;
          popup.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});


// // JS Popup
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("reviewPopup");
    const closeBtn = popup.querySelector(".close");

    document.querySelectorAll(".btn-icon-dot").forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            popup.style.display = "block";
        });
    });

    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});

// Js Dropdown-booking
document.addEventListener('click', function (e) {
    const button = e.target.closest('.btn-icon-dot');
    const container = e.target.closest('.dropdown-container');

    // Đóng tất cả dropdown
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        if (!container || !container.contains(menu)) {
          menu.style.display = 'none';
        }
    });

    // Mở dropdown tương ứng nếu click vào nút
    if (button && container) {
        const dropdown = container.querySelector('.dropdown-menu');
        dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
    }
});



