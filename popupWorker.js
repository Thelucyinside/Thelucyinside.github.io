// popupWorker.js
setInterval(function () {
  self.postMessage('openPopup'); // Sende eine Nachricht an den Hauptthread
}, 500); // Sende alle 5 Sekunden eine Nachricht
