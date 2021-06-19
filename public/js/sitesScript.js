

const addBtn = document.querySelector("#addBtn");
const loginBtn = document.querySelector("#signUpBtn");
const signModal = document.querySelector(".signModal");
const hero = document.querySelector(".hero");
const closeSign = document.querySelector("#closeSign");
const signUpBtn = document.querySelector("#signBtn");


addBtn.addEventListener("click", showSignUp);
closeSign.addEventListener("click", hideSignUp);

function showSignUp() {
signModal.classList.add("display");
}

function hideSignUp() {
signModal.classList.remove("display");
hero.classList.remove("blur");
}

const addSiteHandler = async (event) => {
    event.preventDefault();
  
    const siteName = document.querySelector("#siteName").value.trim();
    const siteAddress = document.querySelector("#siteAddress").value.trim();
    const siteNotes = document.querySelector("#siteNotes").value.trim();
    const siteContact = document.querySelector("#siteContact").value.trim();
    const contactPhone = document.querySelector("#contactPhone").value.trim();
  
    if (siteName && siteAddress && siteNotes && siteContact && contactPhone) {
      const response = await fetch("/api/users/sites", {
        method: "POST",
        body: JSON.stringify({ siteName, siteAddress, siteNotes, siteContact, contactPhone }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/sites");
      } else {
        alert("Failed to add site.");
      }
    }
  };

  document
.querySelector('.submitBtn')
.addEventListener('click', addSiteHandler);