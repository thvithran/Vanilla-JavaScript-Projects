// create a variable with start & get the value id name start from HTML document [Button]
let start = document.getElementById('start');
// create a variable with reset & get the value id name reset from HTML document [Reset]
let reset = document.getElementById('reset');


// create variable for hours, minutes, seconds by using id in HTML document
let h = document.getElementById('hour');
let m = document.getElementById('minute');
let s = document.getElementById('second');

// create variable for start the timer which has null value
let startTimer = null;

// create a addEventListener function to set timer to start
// the start variable before addEventListener is referred to the Start button in the HTML doc
start.addEventListener('click' , () => {
    // initialize the variable
    function startInterval(){
        startTimer = setInterval(function(){
            timer();
        },1000);
    }
    startInterval();
})


// create a addEventListener function to reset the timer
// the reset variable before addEventListener is referred to the Reset button in the HTML doc
// when the reset button click,the entire time will back to zero
reset.addEventListener('click' , () =>{
    h.value = 0;
    m.value = 0;
    s.value = 0;

    //stop the timer after pressing 'reset'
    stopInterval();
})

function timer(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0;
    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
    }
    return;
}

function stopInterval(){
    clearInterval(startTimer);
}