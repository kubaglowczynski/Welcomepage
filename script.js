const nameVal = document.getElementById("name").value;
const buttonSub = document.getElementById("submit");

buttonSub.addEventListener("click", function(){
    var input = document.querySelector(".input-name");
    input.classList.add("input-name-scale");

    setTimeout(() => { input.classList.add("input-name-display")}, 1000);
    
    var nameVal = document.getElementById("name").value;
    var name = document.querySelector(".hello");
    name.innerHTML = 'hello '+nameVal;

    window.scrollTo({
        top: name.offsetTop,
        left: 0,
        behavior: 'smooth'
    });

});