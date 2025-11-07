const startBtn = document.getElementById("startBtn");
const cancelBtn = document.getElementById("cancelBtn");
const statusDiv = document.getElementById("status");
const progressBar = document.getElementById("progress");
const mapVideo = document.getElementById("mapVideo");
const scanBtn = document.getElementById("scanBtn");
const scanVideo = document.getElementById("scanVideo");
const receiptSection = document.getElementById("receiptSection");
const doneBtn = document.getElementById("doneBtn");

// 1️⃣ Start Tracking
startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  cancelBtn.style.display = "none";
  statusDiv.style.display = "block";

  let progress = 0;
  const interval = setInterval(() => {
    progress += 10;
    progressBar.style.width = progress + "%";
    document.getElementById("statusText").textContent =
      progress < 100
        ? `Connecting to Google Maps... ${progress}%`
        : "Connection established!";
    if (progress >= 100) {
      clearInterval(interval);
      statusDiv.style.display = "none";

      // ✅ Corrected video path
      mapVideo.src = "map-simulation.mp4";
      mapVideo.style.display = "block";
      mapVideo.play();

      mapVideo.onended = () => {
        mapVideo.style.display = "none";
        scanBtn.style.display = "inline-block";
      };
    }
  }, 400);
});

// 2️⃣ QR Scan video
scanBtn.addEventListener("click", () => {
  scanBtn.style.display = "none";
  // ✅ Corrected video path
  scanVideo.src = "qr-scan-simulation.mp4";
  scanVideo.style.display = "block";
  scanVideo.play();

  scanVideo.onended = () => {
    scanVideo.style.display = "none";
    document.body.style.backgroundColor = "#c8f7c5";
    receiptSection.style.display = "block";

    // Confetti burst 🎉
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 }
    });
  };
});

// 3️⃣ Done button
doneBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

// 4️⃣ Cancel button
cancelBtn.addEventListener("click", () => {
  window.close();
});
