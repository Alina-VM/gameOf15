const MainArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", ""];
const MainNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", ""];
let currentArr = [];
function addNumbers() {
    let reset = document.querySelector('.main__reset-button');
    reset.addEventListener('click', setNumbers)    
}
function setNumbers(){
    currentArr = [];
    winpic.classList.remove('winpictureOn');
    winpic.classList.add('winpictureOff');
    MainNumber.sort(() => Math.random() - 0.5);
    let fieldsArr = document.getElementsByClassName('main__field');
    for (let i =0; i < fieldsArr.length;  i++) {
        fieldsArr[i].innerHTML = MainNumber[i];
        currentArr.push(MainNumber[i]);
    }     
}
addNumbers()
setNumbers()

function replaceNumber() {
    let numbers = document.querySelectorAll('.main__field');    
    for(let i = 0; i < numbers.length; i ++) {
        numbers[i].addEventListener('click', function(event){
            if(numbers[i].textContent !== "") {
                let number = event.target.textContent;
                let indexNum = currentArr.indexOf(number);
                let indexSpace = currentArr.indexOf('');              
                if(Math.abs(indexNum - indexSpace) === 4 || Math.abs(indexNum - indexSpace) === 1) {                   
                    let temp = currentArr[indexNum];
                    currentArr[indexNum] = currentArr[indexSpace];
                    currentArr[indexSpace] = temp; 
                    // console.log(currentArr.join())
                    // console.log(MainArr.join())
                    if (currentArr[3] === MainArr[3]) {
                        let winpic = document.getElementById('winpic');
                        winpic.classList.remove('winpictureOff');
                        winpic.classList.add('winpictureOn');
                        console.log("congrats")
                    }                  
                    for(elem of numbers) {                    
                        if(elem.textContent === "") {                       
                            elem.textContent = number;
                            event.target.textContent = '';                         
                        }
                    }          
                }
            }
            });       
        }    
}
replaceNumber()


