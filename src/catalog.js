//------------tab catalog------------------
const tabBtn = document.querySelectorAll('.catalog-tab');
const tabCards = document.querySelectorAll('.cards');

tabBtn.forEach((elem,ind) => {
   elem.addEventListener('click', function(){
      if(tabCards[ind].classList.contains('hidden')){
        for(let i=0;i<tabBtn.length;i++){
         if(i === ind){
         tabBtn[i].classList.add('catalog-tab-active');
         tabCards[i].classList.remove('hidden');
         }
         else{
          tabBtn[i].classList.remove('catalog-tab-active');
         tabCards[i].classList.add('hidden');  
         }
        }
      }
   })
})

