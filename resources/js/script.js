document.addEventListener("DOMContentLoaded", () => {
  const bannerTitle = document.getElementById("banner-title");
  const bannerBtn = document.getElementById("banner-btn");
  const navBand = document.getElementById("nav-band");
  bannerTitle.classList.add("title-animation");
  setTimeout(() => {
    bannerBtn.classList.add("btn-animation");
  }, 1000);

  // Toggle Button
  const toggle = document.getElementById("toggle");
  const toggleClose = document.getElementById("toggle-close");
  toggle.addEventListener("click", () => {
    navBand.style.display = "block";
    toggleClose.style.display = "block";
    toggle.style.display = "none";
  });

  toggleClose.addEventListener("click", () => {
    navBand.style.display = "none";
    toggleClose.style.display = "none";
    toggle.style.display = "block";
  });
  // Sticky Navigation
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("sticky");
    if (window.innerWidth > 768) {
      if (window.pageYOffset >= 640) {
        navbar.classList.add("sticky");
      }
      if (window.pageYOffset <= 130) {
        navbar.classList.remove("sticky");
      }
    } else {
      if (window.pageYOffset >= 100) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
  });

  // Animation on scroll
  window.addEventListener("scroll", () => {
    const featuresContent = document.getElementById("features-content");
    const phoneImage = document.getElementById("phone-image");
    const phoneCaption = document.getElementById("phone-caption");
    const city = document.getElementById("cities-content");
    const plansItem = document.getElementsByClassName("plans-item");

    if (window.innerWidth >= 1024) {
      window.pageYOffset >= 650
        ? featuresContent.classList.add("feature-animation")
        : featuresContent.classList.remove("feature-animation");

      if (window.pageYOffset >= 1800) {
        phoneImage.classList.add("phone-animation");
        phoneCaption.classList.add("caption-animation");
      }

      if (window.pageYOffset <= 1450) {
        phoneImage.classList.remove("phone-animation");
        phoneCaption.classList.remove("caption-animation");
      }

      window.pageYOffset >= 2600
        ? city.classList.add("feature-animation")
        : city.classList.remove("feature-animation");

      if (window.pageYOffset >= 3800) {
        plansItem[0].classList.add("plan-animation");
      } else {
        plansItem[0].classList.remove("plan-animation");
      }
    }

    if (window.innerWidth < 1024) {
      featuresContent.classList.add("feature-default");
      phoneImage.classList.add("phone-default");
      phoneCaption.classList.add("caption-default");
      city.classList.add("feature-default");
      plansItem[0].classList.add("plan-default");
    }
  });
});
