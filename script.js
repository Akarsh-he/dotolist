let add = document.querySelector(".img");
let items = document.querySelector(".items")
let alerting = document.querySelector(".alert")

add.addEventListener("click", () => {
    let txt = document.getElementById('textbox_id').value;
    
    if (txt == '') {
        alerting.innerText = "Please enter a value";
    } else {
        const list = document.createElement("div");
        list.className = "item";
        list.innerHTML = `<h1>${txt}</h1><img src="delete.svg" alt="delete">`;
        items.appendChild(list);
        document.getElementById('textbox_id').value = ''; // Clear input after adding
        alerting.innerText = ''; // Clear any previous alert
    }
});

// Add this after the existing code
items.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG' && e.target.alt === 'delete') {
        e.target.parentElement.remove();
    }
});