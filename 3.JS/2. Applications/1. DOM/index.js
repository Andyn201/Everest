const list = document.querySelector("#list");
const background_btn = document.getElementById("background-btn");
const list_input = document.querySelector("#list-input");
const add_btn = document.querySelector("#add-btn");
const delete_btn = document.querySelector("#delete-btn");





let background = false;


background_btn.addEventListener('click', (e) => {

    background = !background;

    if(background === true){
        document.body.style.backgroundColor = "#494DB6";
    }
    else{
        document.body.style.backgroundColor = 'white';
    }
});





let text;

list_input.addEventListener('input', (e) => {
    text = e.target.value;
})


add_btn.addEventListener('click', (e) => {
    let list_item = document.createElement('li');
    list_item.textContent = text;

    list.appendChild(list_item);

});
