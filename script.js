var nameVal = document.getElementById("name").value;
var buttonSub = document.getElementById("submit");
var inputEnter = document.getElementById("name");

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

inputEnter.addEventListener("keypress", function(event){
    if(event.key === 'Enter'){
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
    };
});