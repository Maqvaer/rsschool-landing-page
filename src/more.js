//------------------button more card-------------------------
const scrnWidth = document.documentElement.clientWidth;
const grpCards = document.querySelectorAll('.cards');
const countGrpCards = grpCards.length;
const btnMore = document.getElementById('button-more');

if(scrnWidth <= 768 && scrnWidth > 380){
   for(let i=0; i < countGrpCards; i++){
      btnMore.addEventListener('click', function(){
      if(!grpCards[i].classList.contains('hidden')){
            grpCards[i].classList.remove('hide-cards');
            btnMore.classList.add('btn-hide');
             }
         });
     
   }
}

if(scrnWidth <= 380){
     for(let i=0; i < countGrpCards; i++){
      if(!grpCards[i].classList.contains('hidden')){
         const card = grpCards[i].querySelectorAll('.card');
         for(let j = 1; j < card.length; j++){
            card[j].classList.add('card-hide');
         }
        let k = 1;
        btnMore.addEventListener('click', function(){
         for(k; k < card.length; ){
               if(!card[k-1].classList.contains('card-hide')){
                  card[k].classList.remove('card-hide');
                   k = k+1; 
               }
            break;    
            }
            });
         }
      }
   }


//------------------------------------------------
