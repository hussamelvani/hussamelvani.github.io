document.querySelector("#blazor-error-ui .dismiss")?.addEventListener("click", () => {
  const errorNotice = document.querySelector("#blazor-error-ui");
  if (errorNotice) {
    errorNotice.style.display = "none";
  }
});