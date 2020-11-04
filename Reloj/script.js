const hr = document.getElementById('hr')
const mn = document.getElementById('mn')
const sc = document.getElementById('sc')
const noct = document.getElementById('noct')
const deg = 6;

const hour = document.getElementById('hour')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const ampm = document.getElementById('ampm')

setInterval (() => {
    
let day = new Date();
let HH = day.getHours() * 30;
let MM = day.getMinutes() * deg;
let SS = day.getSeconds() * deg;

hr.style.transform = `rotateZ(${HH + (MM/12)}deg)`
mn.style.transform = `rotateZ(${MM}deg)`
sc.style.transform = `rotateZ(${SS}deg)`


})

function hora(){
    let DAY = new Date();
    let h = DAY.getHours();
    let m = DAY.getMinutes();
    let s = DAY.getSeconds();
    let am ='am'

    //convertir de 24hr a 12 hrs con AM y PM
    if(h > 12){
    }if (m > 0) {
        //h = h-12
        ampm.innerHTML = 'PM'
        am ='pm'
    } else {
       am ='am'
    }

    //Cambiando el color de fondo dependiendo del horario
    if (h>=19 & am == 'pm'  ) {
        noct.classList.add('noct')
    }else{
        noct.classList.remove('noct')
    }

    //Agregar el 0 antes de que el contador llegue a 10

    h = (h < 10) ? '0' + h : h
    m = (m < 10) ? '0' + m : m
    s = (s < 10) ? '0' + s : s

    ampm.innerHTML = 'PM'
    hour.innerHTML = h
    minutes.innerHTML = m
    seconds.innerHTML = s
}


 setInterval(hora);
let day = new Date();
//console.log(day.getHours());
//console.log(`rotateZ(${HH + (MM/12)}deg)`);
//console.log(HH+' : '+MM+' : '+SS);
//hr.style.transform =`rotateZ()`
