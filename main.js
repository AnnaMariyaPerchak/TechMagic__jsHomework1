let queueElements = new Array();
let queue = document.getElementById("queue");
let deleteItem = document.getElementById("deleteItem");
let addItem = document.getElementById("addItem");
let inputText = document.getElementById("inputText");

window.onload = () => {
  queueElements = JSON.parse(localStorage.getItem("Queue elements"));
  for (let i = 0; i < queueElements.length; i++) {
    document.querySelector("#queue ul").innerHTML += `
            <li id="taskname"> ${queueElements[i]} </li>
        `;
  }
};

let deleteElem = () => {
  if (queueElements.length == 0) {
    alert("Anything to delete");
  }
  queueElements.shift();
  window.localStorage.setItem("Queue elements", JSON.stringify(queueElements));
  document.querySelector("#queue ul").innerHTML = ``;
  for (let i = 0; i < queueElements.length; i++) {
    document.querySelector("#queue ul").innerHTML += `
            <li id="taskname"> ${queueElements[i]} </li>
        `;
  }
};
let addElem = () => {
  if (document.querySelector("#inputText").value.length == 0) {
    alert("Enter something");
  } else {
    if (JSON.parse(localStorage.getItem("Queue elements")).length == 20) {
      alert("You can add only 20 elements");
    } else {
      document.querySelector("#queue ul").innerHTML += `
        <li id="taskname"> ${document.querySelector("#inputText").value} </li>`;
      queueElements.push(document.querySelector("#inputText").value);
      window.localStorage.setItem(
        "Queue elements",
        JSON.stringify(queueElements)
      );
    }
  }
  document.querySelector("#inputText").value = "";
};
let addWithKey=(event) => {
    if (event.keyCode === 13) {
        addItem.click();
    }
}
let deleteWithKey=(event)=>{
    if (event.keyCode == 46){
        deleteItem.click()
    }
}

deleteItem.addEventListener("click", deleteElem);
addItem.addEventListener("click", addElem);
inputText.addEventListener("keyup", addWithKey);
window.addEventListener('keydown',deleteWithKey)