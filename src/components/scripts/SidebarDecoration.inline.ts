// ============================================================================
// Example Inline Script for Quartz Community Plugin
// ============================================================================
// This file demonstrates patterns commonly used in Quartz plugin client-side code.
// It is bundled as a string and injected via Component.afterDOMLoaded.
//
// Key patterns demonstrated:
// 1. Listening to Quartz navigation events ('nav', 'prenav', 'render')
// 2. Fetching content index data
// 3. DOM manipulation with cleanup
// 4. State persistence (localStorage/sessionStorage)
// 5. Keyboard shortcut handling
// 6. Proper event listener cleanup
// ============================================================================

let animationTime: number | null = null;

document.addEventListener("prenav", () => {
  const animation = document.querySelector<HTMLElement>(".sidebar-decoration")?.getAnimations()[0];

  if (animation?.currentTime != null) {
    animationTime = Number(animation.currentTime);
  }
});

// Main initialization function
function init() {
  const component = document.querySelector(".sidebar-decoration");
  if (!component) return;

  const componentImg = document.querySelector<HTMLImageElement>(".sidebar-decoration > img");
  if (!componentImg) return;

  // Example: Track cleanup functions for event listeners
  const cleanupFns: Array<() => void> = [];

  const animation = component.animate(
    [
      { transform: "rotateY(18deg) translateY(0)" },
      { transform: "rotateY(5deg) translateY(-16px)" },
    ],
    { duration: 2500, iterations: Infinity, direction: "alternate", easing: "ease-in-out" },
  );

  const bounceAnimation = componentImg.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(0.9)", offset: 0.3 },
      { transform: "scale(1.05)", offset: 0.7 },
      { transform: "scale(1)" },
    ],
    {
      duration: 300,
      easing: "ease-out",
    },
  );

  if (animationTime !== null) {
    animation.currentTime = animationTime;
  }

  function speedUpAnimation() {
    animation.playbackRate = 15.0;
  }

  function resetAnimationSpeed() {
    animation.playbackRate = 1.0;
  }

  function doBounceAnimation() {
    bounceAnimation.cancel();
    bounceAnimation.play();
  }

  bounceAnimation.pause();

  component.addEventListener("mouseenter", speedUpAnimation);
  cleanupFns.push(() => component.removeEventListener("mouseenter", speedUpAnimation));

  component.addEventListener("mouseleave", resetAnimationSpeed);
  cleanupFns.push(() => component.removeEventListener("mouseleave", resetAnimationSpeed));

  componentImg.addEventListener("click", doBounceAnimation);
  cleanupFns.push(() => componentImg.removeEventListener("click", doBounceAnimation));

  function changeImage(theme: "light" | "dark") {
    componentImg!.src =
      theme == "light" ? componentImg!.dataset.lightSrc! : componentImg!.dataset.darkSrc!;
  }

  const theme = document.documentElement.getAttribute("saved-theme") === "dark" ? "dark" : "light";

  changeImage(theme);

  const handleThemeChange = (e: CustomEvent<{ theme: "light" | "dark" }>) => {
    changeImage(e.detail.theme);
  };

  document.addEventListener("themechange", handleThemeChange);
  cleanupFns.push(() => document.removeEventListener("themechange", handleThemeChange));

  // Register cleanup with Quartz's cleanup system
  if (typeof window !== "undefined" && window.addCleanup) {
    window.addCleanup(() => {
      cleanupFns.forEach((fn) => fn());
    });
  }
}

// Listen to Quartz navigation events
// 'nav' fires after page navigation (including initial load)
// 'render' fires when DOM content changes in-place (e.g. after decryption, dynamic content)
document.addEventListener("nav", (e) => {
  init();
});

// 'render' fires when DOM content changes in-place and components need re-initialization
document.addEventListener("render", () => {
  init();
});
