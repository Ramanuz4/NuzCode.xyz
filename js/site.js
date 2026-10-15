(() => {
  const clock = document.querySelector("[data-clock]");
  function tick() {
    if (clock) {
      clock.textContent =
        "Guwahati · " +
        new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }).format(new Date());
    }
  }
  tick();
  setInterval(tick, 30000);
  const toggle = document.querySelector("[data-theme-toggle]");
  try {
    if (localStorage.getItem("nuzcode-theme") === "light")
      document.body.classList.add("light");
  } catch (e) {}
  toggle?.addEventListener("click", () => {
    document.body.classList.toggle("light");
    try {
      localStorage.setItem(
        "nuzcode-theme",
        document.body.classList.contains("light") ? "light" : "dark",
      );
    } catch (e) {}
  });
})();
document
  .querySelectorAll("[id=year]")
  .forEach((el) => (el.textContent = new Date().getFullYear()));
