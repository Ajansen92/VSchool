const colors = ["red", "blue", "green"]

document.getElementById("add").addEventListener("click", function(e){

    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input").value;
    subItem.textContent = subItemValue
    const dropDown = createDropDown(colors)
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    //const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
})


function createDropDown(colors) {
    const dropDown = document.createElement("select");
    
    for (let i = 0; i < colors.length; i++) {
        const option = document.createElement("option");
        option.innerHTML = colors[i];
        option.value = colors[i];
        dropDown.appendChild(option);
    }
    const subItem = document.querySelector('.subitem');
    subItem.style.backgroundColor = colors[0];
    
    dropDown.addEventListener("change", function(e) {
        e.target.parentElement.style.backgroundColor = e.target.value;
    });
    
    return dropDown;
}

function createSubItem(e){
    // const subItem = document.createElement("div")
    // var subItemValue = document.getElementById("input")
    // subItem.textContent = subItemValue
    // const dropDown = createDropDown()
    // subItem.appendChild(dropDown)
    // subItem.setAttribute("class", "subItem")
    return subItem
}


