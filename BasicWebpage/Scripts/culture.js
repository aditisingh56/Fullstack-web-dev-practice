document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll(".culture-card video");

  videos.forEach((video) => {
    video.addEventListener("mouseenter", () => {
      if (video.readyState >= 2) {
        video.play().catch((e) => console.warn("Playback failed:", e));
      }
    });

    video.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });
  });
});
