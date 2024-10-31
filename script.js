document.addEventListener("DOMContentLoaded", function () {
  const message = "Wishing you a day filled with love, laughter, and happiness! 🎉🎂🥳";
  const typedMessage = document.getElementById("typedMessage");
  let index = 0;

  // Typing effect function
  function typeText() {
    if (index < message.length) {
      typedMessage.innerHTML += message.charAt(index);
      index++;
      setTimeout(typeText, 50);
    }
  }

  // Start typing effect on load
  typeText();

  // Gift animation and surprise message reveal
  const surpriseButton = document.getElementById("surpriseButton");
  const giftBox = document.getElementById("giftBox");
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("closePopup");
  const sorryPopup = document.getElementById("sorryPopup");
  const closeSorryPopup = document.getElementById("closeSorryPopup");

  surpriseButton.addEventListener("click", function () {
    // Show the gift container
    document.getElementById("giftContainer").classList.remove("hidden");
  });

  // Open the birthday message popup when gift box is clicked
  giftBox.addEventListener("click", function () {
    popup.classList.remove("hidden");
  });

  // Show the "sorry" popup when the first popup is closed
  closePopup.addEventListener("click", function () {
    popup.classList.add("hidden");
    sorryPopup.classList.remove("hidden");
  });

  // Close the "sorry" popup when done
  closeSorryPopup.addEventListener("click", function () {
    sorryPopup.classList.add("hidden");
  });
});
