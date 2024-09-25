let vibrationInterval;
let isVibrating = false;

function startVibrationRapid() {
  if ("vibrate" in navigator && !isVibrating) {
    isVibrating = true;
    navigator.vibrate([500]);
    vibrationInterval = setInterval(() => {
      navigator.vibrate([500]);
    }, 100);
  } else {
    alert("Il tuo dispositivo non supporta la vibrazione");
  }
}

function startVibrationContinuos() {
  if ("vibrate" in navigator && !isVibrating) {
    isVibrating = true;
    navigator.vibrate([10000]);
    vibrationInterval = setInterval(() => {
      navigator.vibrate([10000]);
    }, 1000); // Ogni secondo
  } else {
    alert("Il tuo dispositivo non supporta la vibrazione");
  }
}

function stopVibration() {
  if (isVibrating) {
    isVibrating = false;
    clearInterval(vibrationInterval);
    navigator.vibrate(0);
    location.reload();
  }
}

// Aggiungere gli eventi ai pulsanti
document
  .getElementById("startVibrationContinuos")
  .addEventListener("click", startVibrationContinuos);
document
  .getElementById("startVibrationRapid")
  .addEventListener("click", startVibrationRapid);
document
  .getElementById("stopVibration")
  .addEventListener("click", stopVibration);
