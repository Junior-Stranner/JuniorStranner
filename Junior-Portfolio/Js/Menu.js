const header = document.querySelector("header");
const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");
const mobileLinks = document.querySelectorAll(".mobile-navlist a");
const topButton = document.getElementById("top");

function toggleHeaderState() {
  if (!header) return;

  header.classList.toggle("scrolled", window.scrollY > 50);
}

function toggleTopButton() {
  if (!topButton) return;

  topButton.classList.toggle("show-top", window.scrollY > 500);
}

function closeMobileMenu() {
  if (!mobileMenu) return;

  mobileMenu.classList.remove("active");
  document.body.style.overflow = "auto";
}

function setupMobileMenu() {
  if (!menuIcon || !mobileMenu || !closeMenu) return;

  menuIcon.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  closeMenu.addEventListener("click", closeMobileMenu);
  mobileLinks.forEach((link) => link.addEventListener("click", closeMobileMenu));
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const targetElement = document.querySelector(targetId);

      if (!targetElement) return;

      event.preventDefault();

      const headerOffset = 100;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });
}

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    }
  });
}, observerOptions);

function observeAnimatedElements() {
  const animatedElements = document.querySelectorAll(".timeline .container, .box, .row");

  animatedElements.forEach((element) => {
    if (element.dataset.observed === "true") return;

    element.dataset.observed = "true";
    element.classList.add("animate-on-scroll");
    observer.observe(element);
  });
}

function setupAnimationStyles() {
  const style = document.createElement("style");
  style.textContent = `
    .animate-on-scroll {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .animate-on-scroll.in-view {
      opacity: 1;
      transform: translateY(0);
    }
  `;

  document.head.appendChild(style);
}

window.addEventListener("scroll", () => {
  toggleHeaderState();
  toggleTopButton();
});

document.addEventListener("DOMContentLoaded", () => {
  setupMobileMenu();
  setupSmoothScroll();
  setupAnimationStyles();
  toggleHeaderState();
  toggleTopButton();
  observeAnimatedElements();
});

document.addEventListener("portfolio:content-rendered", observeAnimatedElements);
