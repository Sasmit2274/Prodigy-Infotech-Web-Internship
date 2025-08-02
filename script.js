// Typing Animation
const text = ["Web Developer", "UI/UX Enthusiast", "MERN Stack Learner"];
let i = 0, j = 0, currentText = "", isDeleting = false;

function type() {
  if (i < text.length) {
    if (!isDeleting && j <= text[i].length) {
      currentText = text[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentText = text[i].substring(0, j--);
    }

    document.getElementById("typed-text").innerHTML = currentText;

    if (!isDeleting && j === text[i].length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i++;
      if (i === text.length) i = 0;
      setTimeout(type, 200);
    } else {
      setTimeout(type, isDeleting ? 50 : 100);
    }
  }
}
type();

// Dynamic Year
document.getElementById("year").innerText = new Date().getFullYear();

// Scroll To Top Button
const scrollBtn = document.getElementById("scrollToTop");
window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
};
scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
