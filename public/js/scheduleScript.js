// Add schedule modal
const addScheduleModal = document.querySelector("#addSchedule")
const scheduleModal = document.querySelector(".addScheduleModal")
const closeSign = document.querySelector("#closeSign")

addScheduleModal.addEventListener("click", showAddSched)
closeSign.addEventListener("click", hideSignUp);

// Add Schedule functions
function showAddSched() {
    scheduleModal.classList.add("display");
    
  }
  
  function hideSignUp() {
    scheduleModal.classList.remove("display");
   
  }