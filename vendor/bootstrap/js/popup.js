// Show the popup after 5 seconds and disable scroll
window.onload = function() {
    setTimeout(function() {
      document.getElementById('popup').style.display = 'flex'; // Show the popup
      document.body.classList.add('no-scroll'); // Disable scrolling
    }, 5000); // Delay of 5 seconds
  
    // Close the popup and enable scrolling
    window.closePopup = function() {
      document.getElementById('popup').style.display = 'none'; // Hide the popup
      document.body.classList.remove('no-scroll'); // Enable scrolling
      document.getElementById("donationPopup").style.display = "none";
    }
  };

  // Open popup
  function openPopup() {
    document.getElementById("donationPopup").style.display = "flex";
}

// Close popup
function closePopup() {
    document.getElementById("donationPopup").style.display = "none";
}






// Optional: Add interactivity (e.g., smooth scroll to contact section)
document.querySelector('.floating-panel a').addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});






