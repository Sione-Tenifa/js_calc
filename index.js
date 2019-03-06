var leftHand = []
var rightHand = []
var op_sym = []



var numbers = document.getElementsByClassName("numbers")
var action = document.getElementsByClassName("action")
var decimal = document.getElementsByClassName("decimal")
var equal = document.getElementsByClassName("equal")
var allClear = document.getElementsByClassName("allClear")


function numbers() {
  for (i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function())
    debugger
  }
}





// var blankButt = document.getElementsByClassName('blank')
// var count = 0
// var blankButts = false

// function callButton() {
//     for (i = 0; i < blankButt.length; i++) {
//         blankButt[i].addEventListener('click', buttPress)
//     }
// }
// callButton();

// function buttPress() {
//     blankButts = !blankButts
//     if (blankButts) {
//         this.children[0].src = './assets/images/x.png';
//     } else {
//         this.children[0].src = './assets/images/o.png';
//     }
// }