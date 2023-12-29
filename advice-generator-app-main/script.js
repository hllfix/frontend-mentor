const adviceId = document.querySelector(".advice-id")
const adviceText = document.querySelector(".advice")
const button = document.querySelector(".btn")



function getAdvice() {
    fetch("https://api.adviceslip.com/advice").then(response => {

    return response.json().then(adviceData => {
        const adviceNum = adviceData.slip.id
        const advice = adviceData.slip.advice
        adviceId.textContent = adviceNum
        adviceText.innerHTML = `<p>${advice}</p>`
        
    }).catch(error => {
        console.log(error)
    })
})
}

button.addEventListener("click", function() {
    getAdvice()
})

window.onload = () => {
    getAdvice()
}


    

