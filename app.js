//
//
//

function contact(event) {
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  var hideElements = document.getElementsByClassName("hide");
  event.preventDefault();

  loading.classList.add("modal__overlay--visible");
  for (var i = 0; i < hideElements.length; i++) {
    hideElements[i].style.display = "none";
  }

  emailjs
    .sendForm(
      "service_6p22tpd",
      "template_rrosfjr",
      event.target,
      "vjPbQBxuwuYwq5kLv"
    )
    .then(() => {
      loading.classList.remove(".modal__overlay--visible");
      document.getElementsByClassName("hover__opacity").style.display = none
        "hidden";
      success.classList.add("modal__overlay--visible");
      document.querySelector(".fa-times").style.color = "#16262e";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temoporarily unavailable. Please contact me directly on abdorruhman.abdelwahed@gmail.com"
      );
    });
}

let isModalOpen = false;
function toggleModalOn() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal__open");
  }
  isModalOpen = true;
  document.body.classList += " modal__open";
}

function toggleTheme() {
  console.log("worked")
  document.getElementById("body").classList.toggle("dark")
  // var logos = document.getElementsByClassName("personal-logo")
  // for (let i = 0; i < logos.length; i++) {
  //   const element = logos[i];
  //   element.src = "./assets/adv-portfolio-logo-white.png";
  // }
}

// function toggleModalOff() {
//   document.body.classList.remove("modal__open")
//   isModalOpen = false
// }
