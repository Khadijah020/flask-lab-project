window.onload = async () => {
  const statusEl = document.getElementById("health");
  const responseEl = document.getElementById("response");
  const form = document.getElementById("dataForm");

  try {
    const health = await fetch("/health");
    statusEl.textContent = await health.text();
    statusEl.style.color = "#90ee90";
  } catch (err) {
    statusEl.textContent = "Offline";
    statusEl.style.color = "#ff6b6b";
  }

  form.onsubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    if (!name) return;

    responseEl.textContent = "Sending...";

    try {
      const response = await fetch("/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      const result = await response.json();
      responseEl.textContent = JSON.stringify(result, null, 2);
    } catch (err) {
      responseEl.textContent = "Error: Could not reach server.";
    }
  };
};
