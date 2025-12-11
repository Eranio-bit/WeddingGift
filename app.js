// --------------------
// INTRO PAGE HANDLING
// --------------------
const introEl = document.getElementById("intro");
const introGif = document.getElementById("introGif");
const mainEl = document.getElementById("main");

// Only run intro animation if these elements exist
if (introEl && introGif && mainEl) {

  // Start hidden
  introEl.style.opacity = "0";
  introGif.style.opacity = "0";

  // Step 1 — wait 1 second and fade in GIF
  setTimeout(() => {
    introEl.style.transition = "opacity 1s ease";
    introGif.style.transition = "opacity 1s ease";

    introEl.style.opacity = "1";
    introGif.style.opacity = "1";

    // Step 2 — fade-out after 1800ms
    setTimeout(() => {
      introEl.style.opacity = "0";
      introGif.style.opacity = "0";

      // Step 3 — after fade-out, hide intro and show main
      setTimeout(() => {
        introEl.style.display = "none";
        mainEl.classList.remove("hidden");
      }, 1000); // matches fade-out duration

    }, 1800); // delay before fade-out

  }, 1000); // initial delay
}



// -------------------------
// INVITATION PAGE HANDLING
// -------------------------
const qrImage = document.getElementById("qrImage");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeBtn");

// Run modal logic only if invitation elements exist
if (qrImage && modal && modalImg && closeBtn) {

  qrImage.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = qrImage.src;
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
}
