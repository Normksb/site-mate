

const addBtn = document.querySelector("#addBtn");
const loginBtn = document.querySelector("#signUpBtn");
const signModal = document.querySelector(".signModal");
const hero = document.querySelector(".Employee-hero");
const closeSign = document.querySelector("#closeSign");
const signUpBtn = document.querySelector("#signBtn");
const deleteSiteModal = document.querySelector(".deleteSiteModal");
const deleteBtn = document.querySelector("#deleteBtn");
const closeSign2 = document.querySelector("#closeSign2");

deleteBtn.addEventListener("click", showDelete);
closeSign2.addEventListener("click", hideDelete);
addBtn.addEventListener("click", showSignUp);
closeSign.addEventListener("click", hideSignUp);

function showDelete() {
  deleteSiteModal.classList.add("display");
  }
  
  function hideDelete() {
  deleteSiteModal.classList.remove("display");
  hero.classList.remove("blur");
  }

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

  const deleteSite = async (event) => {
    event.preventDefault();
  
    const site = document.querySelector("#site").value.trim();
    console.log("here is site ", site)

    if (site) {
      const response = await fetch("/api/users/sites", {
        method: "DELETE",
        body: JSON.stringify({ site }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/sites");
      } else {
        alert("Failed to delete site.");
      }
    }
  };

document.querySelector(".deleteSiteBtn").addEventListener('click', deleteSite);

  document
.querySelector('.submitBtn')
.addEventListener('click', addSiteHandler);