// select the output elements

const output_year = document.querySelector(".output-year")
const output_month = document.querySelector(".output-month")
const output_day = document.querySelector(".output-day")
const submit_btn = document.querySelector(".submit-btn")

// select the input elements
const input_year = document.querySelector("#year")
const input_month = document.querySelector("#month")
const input_day = document.querySelector("#day")
//const submit_btn = document.querySelector(".submit-btn")


// select the error elements
const error_year = document.querySelector(".error-year")
const error_month = document.querySelector(".error-month")
const error_day = document.querySelector(".error-day")


let isValid = false

input_day.addEventListener("input", e => {

    if (input_day.value.trim() === "") {
        error_day.textContent = "The Field Can Not Be Empty";
        isValid = false;

    }
    else if (input_day.value > 31 || input_day.value <= 0) {
       error_day.textContent = "Must be a valid Date"
       isValid = false
    }

    else {
        isValid = true
        error_day.textContent = ""
    }
})

input_month.addEventListener("input", e => {

    if (input_month.value.trim() === "") {
        error_month.textContent = "The Field Can Not Be Empty";
        isValid = false;

    }
    else if (input_month.value > 12 || input_month.value <= 0) {
        error_month.textContent = "Must be a valid Month"
        isValid = false
    }
   
    else {
        isValid = true
        error_month.textContent = ""
    }
})

input_year.addEventListener("input", e => {

    const currentYear = new Date().getFullYear()

    if (input_year.value.trim() === "") {
        error_year.textContent = "The Field Can Not Be Empty";
        isValid = false;

    }
    else if (input_year.value > currentYear || input_year.value <= 0) {
        error_year.textContent = "Must be a valid Year"
        isValid = false
    }

    else {
        isValid = true
        error_year.textContent = ""
    }
})

function CalculateDate() {
    if (isValid) {
        let birthday = `${input_month.value} / ${input_day.value} / ${input_year.value}`
        console.log(birthday)
        let birthdayObj = new Date(birthday)
        
        let ageDiffMill = Date.now() - birthdayObj
        let ageDate = new Date(ageDiffMill)
        let ageYear = ageDate.getUTCFullYear() -1970
        let ageMonth = ageDate.getUTCMonth()
        let ageDay = ageDate.getUTCDay() -1

        output_day.textContent = ageDay
        output_month.textContent = ageMonth
        output_year.textContent = ageYear
    }
    else {
        alert("error")
    }


}

submit_btn.addEventListener("click", CalculateDate )

