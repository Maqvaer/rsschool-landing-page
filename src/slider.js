//------------------slider----------------------
const left = document.getElementById('left-arrow');
const right = document.getElementById('right-arrow');
const slide = document.querySelectorAll('.slide');
const scrollMarker = document.querySelectorAll('.scroll-marker');
const slideCount = document.querySelectorAll('.slide').length;

let currentIndex = 0;

function goToSlide(index) {
        if (index < 0) {
            index = slideCount - 1;
        } else if (index >= slideCount) {
            index = 0; 
        }
 currentIndex = index;
        for(let i=0; i<slideCount;i++){
          if(i === currentIndex){
            slide[i].classList.remove('hide');
            scrollMarker[i].classList.add('scroll-marker-active');
          }
          else {
            slide[i].classList.add('hide');
          scrollMarker[i].classList.remove('scroll-marker-active');
         }
        }
       }

left.addEventListener('click', function() {
	goToSlide(currentIndex - 1);
});
right.addEventListener('click', function() {
		goToSlide(currentIndex + 1);
});

goToSlide(0);
