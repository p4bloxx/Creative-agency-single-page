const nav = document.querySelector('.primary-nav');
const navActive = nav.getAttribute('data-active');
const btnBox = [document.querySelector('#hamb'), document.querySelector('#cross')];
console.log(nav)

btnBox.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if(e.target === btnBox[0]){
      btnBox[0].style.display = 'none'
      btnBox[1].style.display = 'block'
      nav.setAttribute('data-active', 'true')
      document.querySelector('body').style.overflowY = 'hidden'
    } else if(e.target === btnBox[1]){
      btnBox[0].style.display = 'block'
      btnBox[1].style.display = 'none'
      nav.setAttribute('data-active', 'false')
      document.querySelector('body').style.overflowY = 'auto';
    }
  })
})

///Slider
const prevBtn = document.querySelector('.prevbtn');
const nextBtn = document.querySelector('.nextbtn');
const allSlide = document.querySelectorAll('.slide')

const sliderText = document.querySelector('.slider-container');
const sliderImage = document.querySelector('.slider-img');
const slideTxt = document.querySelectorAll('.slide-text')
const slideImg = document.querySelectorAll('.slide-img')

let counter = 0;


prevBtn.addEventListener('click', () => {
  counter--;
  slider();
})

document.addEventListener('keydown', (e) => {
  if(e.key === 'ArrowLeft'){
    counter--;
    slider();
  }
})


nextBtn.addEventListener('click', () => {
  counter++;
  slider();
})

document.addEventListener('keydown', (e) => {
  if(e.key === 'ArrowRight'){
    counter++;
    slider();
  }
})

function slider(){

  if(counter < 2){
    nextBtn.style.pointerEvents = 'auto'
    nextBtn.style.opacity = '1'
  }
    else{
      nextBtn.style.pointerEvents = 'none'
      nextBtn.style.opacity = '0.5'
    } 
 

  if(counter > 0){
    prevBtn.style.pointerEvents = 'auto'
    prevBtn.style.opacity = '1'
  } else{
    prevBtn.style.pointerEvents = 'none'
    prevBtn.style.opacity = '0.5'
  }

  slideTxt.forEach((txt) => {
    txt.style.transform = `translateX(-${counter * 100}%)`;
  })

  slideImg.forEach((img) => {
    img.style.transform = `translateX(-${counter * 100}%)`;
  })  
}

prevBtn.style.pointerEvents = 'none';
prevBtn.style.opacity = '0.5';