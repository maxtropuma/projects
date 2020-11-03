const imgBx = document.getElementById('imaBx')
const contBx = document.getElementById('contBx')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const slides = imgBx.getElementsByTagName('img')
const slidesText = contBx.getElementsByTagName('div')
let i = 0
let j = 0

/////////////////      Creando Funciones     /////////////////////////////
function nextSlide(){
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active')
    
}

function prevSlide(){
    slides[i].classList.remove('active');
    i = (i - 1 + slides.length) % slides.length;
    slides[i].classList.add('active')
    
}
/////////////       Cambiando el contenido del texto    ///////////////////////////////

function nextSlideText(){
    slidesText[j].classList.remove('active');
    j = (j + 1) % slidesText.length;
    slidesText[j].classList.add('active');
    
}

function prevSlideText(){
    slidesText[j].classList.remove('active');
    j = (j - 1 + slidesText.length) % slidesText.length;
    slidesText[j].classList.add('active');
    
}

/////////////////      Creando los eventos para llamar a las funciones     /////////////////////////////

next.addEventListener('click', () =>{
    nextSlide();
    nextSlideText();
})

prev.addEventListener('click', () =>{
    prevSlide();
    prevSlideText();
})
