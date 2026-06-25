const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = calculator.querySelector(".calculator__display");

keys.addEventListener("click",(e)=>{

    if(!e.target.matches("button")) return;
    const key=e.target;
    const action=key.dataset.action;
    const keyContent=key.textContent;
    const displayedNum=display.textContent;
    const previousKeyType=calculator.dataset.previousKeyType;
    Array.from(keys.children).forEach(btn=>{
        btn.classList.remove("is-depressed");
    });
    if(!action){

        if(displayedNum==="0" ||
            previousKeyType==="operator" ||
            previousKeyType==="calculate"){
                
            display.textContent=keyContent;
        }else{
            display.textContent=displayedNum+keyContent;
        }
        calculator.dataset.previousKeyType="number";
    }
    if(action==="decimal"){

        if(previousKeyType==="operator"||
            previousKeyType==="calculate"){
            display.textContent="0.";

        }else if(!displayedNum.includes(".")){
            display.textContent=displayedNum+".";
        }
        calculator.dataset.previousKeyType="decimal";
    }

});