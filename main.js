fetch("./data.json")
.then(response => {
    return response.json()
})
.then(data => {
    const days = document.querySelectorAll(".day");
    const daySpent = document.querySelectorAll(".day-spent");
    const dayName = new Date();

    days.forEach((day, index) => {   
        day.style.height = `${data[index].amount * 11.5 / 100}rem`;
        if(index === dayName.getUTCDay() - 1) {
            day.style.backgroundColor = "var(--Cyan)"
        }
    });

    daySpent.forEach((day, index) => {   
        day.innerText= `$${data[index].amount}`
    });
});


