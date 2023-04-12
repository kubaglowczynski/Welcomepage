var buttonSub: HTMLButtonElement = document.querySelector("#submit");
var inputEnter: HTMLInputElement = document.querySelector("#name");

buttonSub.addEventListener("click", function(){
    var input = document.querySelector(".input-name");
    input.classList.add("input-name-scale");

    setTimeout(() => { input.classList.add("input-name-display")}, 1000);
    
    let nameVal: string = (<HTMLInputElement>document.querySelector("#name")).value;
    const name: HTMLElement = document.querySelector(".hello");
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
    
    let nameVal: string = (<HTMLInputElement>document.querySelector("#name")).value;
    const name: HTMLElement = document.querySelector(".hello");
    name.innerHTML = 'hello '+nameVal;

    window.scrollTo({
        top: name.offsetTop,
        left: 0,
        behavior: 'smooth'
    });
    };
});