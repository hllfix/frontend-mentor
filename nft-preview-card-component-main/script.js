const eyeIcon = document.querySelector(".eye-icon")
const blueImage = document.querySelector(".img__card")

blueImage.addEventListener("mouseover", () => {
    blueImage.classList.add("blue-img-hover")
    eyeIcon.classList.add("block")
})

blueImage.addEventListener("mouseleave", () => {
    blueImage.classList.remove("blue-img-hover")
    eyeIcon.classList.remove("block")

})


