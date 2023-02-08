//
//
//

function contact(event) {
  event.preventDefault();
  // emailjs
  //     .sendForm(
  //         "service_ugf29b9",
  //         "template_rrosfjr",
  //         event.target,
  //         "vjPbQBxuwuYwq5kLv"
  //     ).then(() => {
  //         console.log("this worked1")
  //     })

  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  var hideElements = document.getElementsByClassName("hide");
  loading.classList.add("modal__overlay--visible");
  for (var i = 0; i < hideElements.length; i++) {
    hideElements[i].style.display = "none";
  }
  setTimeout(() => {
    loading.classList.remove("modal__overlay--visible")
    success.classList.add("modal__overlay--visible")
    document.querySelector(".fa-times").style.color = "#16262e"
    console.log("it worked1");
  }, 1000);
}
