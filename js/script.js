const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    slide.style.transform = `translateX(${(i - index) * (100 + 20)}%)`;
  });

  slides[index].classList.add('active');
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

showSlide(currentIndex);
setInterval(nextSlide, 3000);

// SHOP

const fsttab = document.querySelector('#fst_tab');
const sndtab = document.querySelector('#snd_tab');
const trdtab = document.querySelector('#trd_tab');
const fthtab = document.querySelector('#fth_tab');
const ffstab = document.querySelector('#ffs_tab');

const tabs = document.querySelectorAll('.shop_tab');

if (window.innerWidth > 1075) {
  const shopImg = document.querySelector('.d_img');
  fsttab.addEventListener('click', () => {
    shopImg.src = 'img/shop/enclomiphene.webp';
    tabs.forEach((item) => {
      item.classList.remove('activated');
    });
    fsttab.classList.add('activated');
  });
  sndtab.addEventListener('click', () => {
    shopImg.src = 'img/shop/semaglutide.webp';
    tabs.forEach((item) => {
      item.classList.remove('activated');
    });
    sndtab.classList.add('activated');
  });
  trdtab.addEventListener('click', () => {
    shopImg.src = 'img/shop/tirzepatide.webp';
    tabs.forEach((item) => {
      item.classList.remove('activated');
    });
    trdtab.classList.add('activated');
  });
  fthtab.addEventListener('click', () => {
    shopImg.src = 'img/shop/tadalafil.webp';
    tabs.forEach((item) => {
      item.classList.remove('activated');
    });
    fthtab.classList.add('activated');
  });
  ffstab.addEventListener('click', () => {
    shopImg.src = 'img/shop/sermorelin.webp';
    tabs.forEach((item) => {
      item.classList.remove('activated');
    });
    ffstab.classList.add('activated');
  });
} else {
  const shopImg = document.querySelector('.m_img');
  fsttab.addEventListener('click', () => {
    shopImg.src = 'img/shop/enclomiphenemob.webp';
    tabs.forEach((item) => {
      item.classList.remove('activated');
    });
    fsttab.classList.add('activated');
  });
  sndtab.addEventListener('click', () => {
    shopImg.src = 'img/shop/semaglutidemob.webp';
    tabs.forEach((item) => {
      item.classList.remove('activated');
    });
    sndtab.classList.add('activated');
  });
  trdtab.addEventListener('click', () => {
    shopImg.src = 'img/shop/tirzepatidemob.webp';
    tabs.forEach((item) => {
      item.classList.remove('activated');
    });
    trdtab.classList.add('activated');
  });
  fthtab.addEventListener('click', () => {
    shopImg.src = 'img/shop/tadalafilmob.webp';
    tabs.forEach((item) => {
      item.classList.remove('activated');
    });
    fthtab.classList.add('activated');
  });
  ffstab.addEventListener('click', () => {
    shopImg.src = 'img/shop/sermorelinmob.webp';
    tabs.forEach((item) => {
      item.classList.remove('activated');
    });
    ffstab.classList.add('activated');
  });
}
