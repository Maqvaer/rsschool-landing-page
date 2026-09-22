
//-------------switch theme-----------------
const button = document.querySelector('.switch-theme');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

button.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    document.getElementById('light-theme').classList.remove('action-theme');
  } else {
    localStorage.setItem('theme', 'light');
    document.getElementById('light-theme').classList.add('action-theme');
  }
});

//------------------slider----------------------
const left = document.getElementById('left-arrow');
const right = document.getElementById('right-arrow');
const slide = document.querySelectorAll('.slide');
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
          }
          else slide[i].classList.add('hide');
        }
       
       }

left.addEventListener('click', function() {
	goToSlide(currentIndex - 1);
});
right.addEventListener('click', function() {
		goToSlide(currentIndex + 1);
});

goToSlide(0);


//----------------------

