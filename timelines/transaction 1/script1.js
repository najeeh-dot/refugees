let currentStatus = 1; // Initial status

function updateTimeline(status) {
  const statuses = document.querySelectorAll(".status");
  const progressLine = document.querySelector(".progress-line");

  statuses.forEach((statusItem, index) => {
    const statusNumber = parseInt(statusItem.getAttribute("data-status"), 10);
    
    // If status is completed or before
    if (statusNumber <= status) {
      statusItem.classList.add("completed");
      statusItem.classList.remove("blink"); // Remove the blink class if it was already applied
    } else {
      statusItem.classList.remove("completed");
      statusItem.classList.remove("blink"); // Ensure blink class is removed when status is not completed
    }

    // Apply the blinking effect to the current status
    if (statusNumber === status) {
      statusItem.classList.add("blink"); // Apply blink effect on the current status
    }
  });

  // Smoothly increase the height of the progress line
  const progressHeight = (status / statuses.length) * 100;
  progressLine.style.height = `${progressHeight}%`;
}

// Initial setup: Update the timeline to status 1
updateTimeline(currentStatus);

// Example: Change status dynamically after a timeout
setTimeout(() => {
  currentStatus = 2;
  updateTimeline(currentStatus);
}, 2000);

setTimeout(() => {
  currentStatus = 3;
  updateTimeline(currentStatus);
}, 4000);

// setTimeout(() => {
//   currentStatus = 4;
//   updateTimeline(currentStatus);
// }, 6000);

// setTimeout(() => {
//   currentStatus = 5;
//   updateTimeline(currentStatus);
// }, 8000);
