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

  //handle modal form
  const newRosterHandler = async (event) => {
    event.preventDefault();
    const employeeData = document.querySelectorAll('input[name="employee"]:checked');
    console.log('employee list:', employeeData)
    let employeeArray = [];
    employeeData.forEach((Data) => {
        employeeArray.push(Data.value)
    
    });
    console.log('employee Array:', employeeArray)

    const week = document.querySelector("#week").value.trim();
    const site = document.querySelector("#site").value.trim();

    if (week && site && employeeArray) {
      const response = await fetch("/api/users/schedule", {
        method: "POST",
        body: JSON.stringify({ week, site, employeeArray }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/schedule");
      } else {
        alert("Failed to add schedule.");
      }
    }

    console.log('week Array:', week)
    console.log('site Array:', site)






   

  };




  document
  .querySelector('.submitBtn')
  .addEventListener('click', newRosterHandler);