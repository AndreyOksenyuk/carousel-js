let prev = document.querySelector('.prev'),
   next = document.querySelector('.next'),
   sliderItem = document.querySelector('.slider__item'),
   arrImg = document.querySelectorAll('.slider__img');

let position = 0;
let widthImg,
   widthSlider;

arrImg.forEach(img => widthImg = img.offsetWidth);

widthSlider = (arrImg.length - 1) * widthImg;

next.addEventListener('click', () => {
    if (position < 0 - (widthSlider - widthImg)) {    
       position += (widthSlider + widthImg);
    }
   position -= widthImg;
   sliderItem.style.transform = `translateX(${position}px)`
});

prev.addEventListener('click', () => {
   if(position >= 0){
      position -= (widthSlider + widthImg);
   } 
   position += widthImg;
   sliderItem.style.transform = `translateX(${position}px)`
    
})