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
    let employeeArray = [];
    employeeData.forEach((Data) => {
        employeeArray.push(Data.value)
    });


    const week = document.querySelector("#week").value.trim();
    const site = document.querySelector("#site").value.trim();
    
    // console.log("here is employee", employee)
    // console.log("week is", week)
    // console.log("here is site", site)
    console.log(JSON.parse(JSON.stringify(employeeArray)))
   
    // if (first_name && last_name && email && password) {
    //   const response = await fetch("/api/users", {
    //     method: "POST",
    //     body: JSON.stringify({ first_name, last_name, email, password }),
    //     headers: { "Content-Type": "application/json" },
    //   });
  
    //   if (response.ok) {
    //     document.location.replace("/");
    //   } else {
    //     alert("Failed to sign up.");
    //   }
    // }
  };




  document
  .querySelector('.submitBtn')
  .addEventListener('click', newRosterHandler);