
const container = document.getElementById("container")
const sizeButton = document.getElementById("sizeButton")


function makeGridDivs(total) {

    container.replaceChildren()

    for (i=0 ; i < total; i++) {

        let rowDiv = document.createElement("div")

        rowDiv.classList.add("row")

        for (h=0; h < total; h++) {

            let newDiv = document.createElement("div")
            newDiv.classList.add("square")
            newDiv.style.opacity = 1
            rowDiv.appendChild(newDiv)
            newDiv.addEventListener('mouseenter', function(){

                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                newDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                newDiv.style.opacity -= .10
            })
        }
        container.appendChild(rowDiv)
    }
}

makeGridDivs(16)

sizeButton.addEventListener('click', function(){


    let userPrompt = prompt("Enter number for box amount. Size limit is 100.")
    if (userPrompt <= 100) {

        makeGridDivs(userPrompt)

    } 
})