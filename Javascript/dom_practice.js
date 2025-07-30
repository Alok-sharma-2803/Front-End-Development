// Q) Change the div's header by appending a string to it

// console.log(window);
// console.dir(window.document);
// console.dir(window.document.body);
// console.dir(window.document.body.childNodes);
// let divNodeList = window.document.body.querySelector("#block_1_heading");
// console.dir(divNodeList);
// let divHeading = divNodeList.innerText;
// console.log(divHeading)

// window.document.body.querySelector("#block_1_heading").innerText += " Online";


// Create 3 divs with a common class and add unique text to each one
// console.dir(window.document.body.querySelectorAll(".div_block"));
// let divNodes = window.document.body.querySelectorAll(".div_block");

// V1 ans
// divNodes[0].innerText += "- Unique append 1";
// divNodes[1].innerText += "- Unique append 2";
// divNodes[2].innerText += "- Unique append 3";


// V2 ans
// for (let i = 0; i < divNodes.length; i++){
//     divNodes[i].innerText += `- Unique append ${i}`
// }


// Q) Create a button "Click me". Add it to the top of the body

// // Create the element
// let topButton = document.createElement("button");
// // Set element properties
// topButton.innerText =  "Click Me!";
// topButton.style.backgroundColor = "red";
// topButton.style.color = "white";
// topButton.style.border = "2px solid black"
// // Add element to page
// let bodyVar = window.document.querySelector("body")
// bodyVar.prepend(topButton);

// console.dir(topButton);


// Q) Create a paragraph in give it a class aand styling. Create a new styling for a new class in CSS and append this class to the paragraph using JS.

// let paraNode = window.document.querySelectorAll("p");
// console.dir(paraNode);
// for (let val of paraNode){
//     val.className += " para_content"
// }


// Q) Create a toggle button that switches the page between dark and light modes
// V1 Ans

// Create a toggle button with default styles
let toggleButton = window.document.createElement("button");
toggleButton.innerText = "Light Mode ON";
toggleButton.style.border = "1px solid black";
toggleButton.style.color = "black";
toggleButton.style.backgroundColor = "white";

// Add the button to body
let bodyVar = window.document.querySelector("body");
bodyVar.prepend(toggleButton);

// What happens when someone clicks on it?

function toggle_change (){
    if (toggleButton.innerText === "Light Mode ON"){
        bodyVar.setAttribute("class", "body_dark");
        toggleButton.innerText = "Dark Mode ON";
    } else if (toggleButton.innerText === "Dark Mode ON"){
        bodyVar.setAttribute("class", "body_light");
        toggleButton.innerText = "Light Mode ON";
    }
}

bodyVar.setAttribute("class", "body_light");
toggleButton.addEventListener("click", toggle_change);