//
//
//

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  var hideElements = document.getElementsByClassName("hide");
  loading.classList.add("modal__overlay--visible");
  for (var i = 0; i < hideElements.length; i++) {
    hideElements[i].style.display = "none";
  }

  emailjs
    .sendForm(
      "service_ugf29b9",
      "template_rrosfjr",
      event.target,
      "vjPbQBxuwuYwq5kLv"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
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

let isModalOpen = false
function toggleModalOn() {
  if (isModalOpen) {
    isModalOpen = false
    return document.body.classList.remove("modal__open")
  }
  isModalOpen = true
  document.body.classList += " modal__open"
}

function toggleModalOff() {
  document.body.classList.remove("modal__open")
  isModalOpen = false
}

function isContactHover() {
  if (document.querySelector("body > .modal__contact:hover") != null) {
    console.log("hovered");
}
}

isContactHover()