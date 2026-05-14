const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transition = '0.3s';
  });
});
// スライダー
const mainImage = document.getElementById("mainImage");
const thumbs = document.querySelectorAll(".thumb");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

function changeImage(index) {
  currentIndex = index;
  mainImage.src = thumbs[currentIndex].src;

  thumbs.forEach(thumb => thumb.classList.remove("active"));
  thumbs[currentIndex].classList.add("active");
}

thumbs.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    changeImage(index);
  });
});

prevBtn.addEventListener("click", () => {
  const newIndex = currentIndex === 0 ? thumbs.length - 1 : currentIndex - 1;
  changeImage(newIndex);
});

nextBtn.addEventListener("click", () => {
  const newIndex = currentIndex === thumbs.length - 1 ? 0 : currentIndex + 1;
  changeImage(newIndex);
});