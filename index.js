const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const p = document.querySelector('p');
let flag = true;

startBtn.addEventListener('click', e => {
    console.log('strt clicked');
    let i = 1;
    // let id;
    while(flag){
        setInterval(() => {
            p.textContent = '00:00:' + i;
            i++;
        }, 1000);
    }
})

stopBtn.addEventListener("click", (e) => {
  console.log("stop clicked");
  flag = false;
});

resetBtn.addEventListener("click", (e) => {
  console.log("reset clicked");
  flag = true;
  p.innerHTML = '00:00:00';

});