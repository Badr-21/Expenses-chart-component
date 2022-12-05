import data from '/data.json' assert { type: 'json'}

const days = document.querySelectorAll(".day");
const daySpent = document.querySelectorAll(".day-spent");
const dayName = new Date();
console.log(dayName.getUTCDay() - 1)

days.forEach((day, index) => {   
    day.style.height = `${data[index].amount * 11.5 / 100}rem`;
    if(index === dayName.getUTCDay() - 1) {
        day.style.backgroundColor = "var(--Cyan)"
    }
});

daySpent.forEach((day, index) => {   
    day.innerText= `$${data[index].amount}`
});


// days.forEach(day => {   
//     day.addEventListener("mouseover", function(e)  {
//         day.previousSibling.classList = "active"
//     })
// })


console.log(daySpent)
