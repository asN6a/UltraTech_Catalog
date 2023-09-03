let smartphoneDiv = document.querySelector("#smartphone");

fetch("smartphones.json").then((response) => {
    response.json().then((r_note_12) => {
        console.log(r_note_12)
        smartphoneDiv.innerHTML += r_note_12.r_note_12.storage
    })
})

