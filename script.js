const header = document.querySelector(".container");
let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY || document.documentElement.scrollTop;
  const threshold = window.innerHeight * 0.2;

  if (currentScroll > threshold) {
    if (currentScroll > lastScrollTop) {
      header.classList.add("nav-hidden");
    } else if (currentScroll < lastScrollTop) {
      header.classList.remove("nav-hidden");
    }
  } else {
    header.classList.remove("nav-hidden");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

function filterProjects(category) {
  const activeBtn = document.querySelectorAll(
    ".project-toggle-btn button.active"
  );
  activeBtn.forEach((btn) => btn.classList.remove("active"));
  document.getElementById(`${category}`).classList.add("active");

  const cards = document.querySelectorAll(
    ".other-projects .projects-container .card"
  );
  const projectsContainer = document.querySelector(
    ".other-projects .projects-container"
  );

  const existingNoResults = document.querySelector(".no-results-message");
  if (existingNoResults) {
    existingNoResults.remove();
  }

  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transition = "opacity 0.3s ease-out";
  });

  setTimeout(() => {
    let visibleCards = 0;

    cards.forEach((card) => {
      const cardWrapper = card.parentElement;

      if (category === "all" || card.classList.contains(category)) {
        cardWrapper.style.display = "";
        visibleCards++;
        setTimeout(() => {
          card.style.opacity = "1";
        }, 50); 
      } else {
        cardWrapper.style.display = "none";
      }
    });

    if (visibleCards === 0) {
      const noResultsMessage = document.createElement("div");
      noResultsMessage.className = "no-results-message";
      noResultsMessage.textContent = "No results found";

      projectsContainer.appendChild(noResultsMessage);

      // Fade in the no results message
      setTimeout(() => {
        noResultsMessage.style.opacity = "1";
      }, 50);
    }
  }, 300);
}

