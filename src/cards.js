fetch('./src/jsons/products.json')
  .then(response => response.json())
  .then(result => {
const modalBg = document.querySelector('.modal-bg');
const modalWin = document.querySelector('.modal-win');
const scrnWdth = document.documentElement.clientWidth;
document.querySelectorAll('.card').forEach((elem,ind) => {
  elem.addEventListener('click',function(){
    modalBg.classList.add('modal-display');
    document.querySelector('body').classList.add('modal-display-body');
    if(scrnWdth > 380){
    const modalImg =  document.createElement('img');
    modalImg.setAttribute('class','modal-img');
    modalImg.setAttribute('id','modal-img');
    modalWin.appendChild(modalImg);
    modalImg.src = elem.querySelector('img').src;
    }
    modalWin.querySelector('.product-name').textContent = `${result[ind].name}`;
    modalWin.querySelector('.product-description').textContent = `${result[ind].description}`;
    modalWin.querySelector('#volS').textContent = `${result[ind].sizes.s.size}`;
    modalWin.querySelector('#volM').textContent = `${result[ind].sizes.m.size}`;
    modalWin.querySelector('#volL').textContent = `${result[ind].sizes.l.size}`;
    modalWin.querySelector('#addOne').textContent = `${result[ind].additives[0].name}`;
    modalWin.querySelector('#addTwo').textContent = `${result[ind].additives[1].name}`;
    modalWin.querySelector('#addThree').textContent = `${result[ind].additives[2].name}`;

    document.querySelector('.modal-btn-close').addEventListener('click', function(){
    modalBg.classList.remove('modal-display');
    document.querySelector('body').classList.remove('modal-display-body');
     if(modalWin.getElementsByTagName('img')){
      document.getElementById('modal-img').remove();
     }
    });
   
   let price =  result[ind].price;
   let priceAddVol = 0;
   let priceAdditives = 0;
   let totalPrice = 0;
    
   document.querySelectorAll('.size').forEach((elmnt,indx)=>{
    elmnt.addEventListener('click', function(){
         if(!elmnt.classList.contains('product-param-checked')){
          document.querySelectorAll('.size').forEach(el => el.classList.remove('product-param-checked'));
              const vol = elmnt.firstElementChild.textContent.toLowerCase();
              priceAddVol = result[ind].sizes[vol]['add-price'];
          elmnt.classList.add('product-param-checked');
         }else if(elmnt.classList.contains('product-param-checked')){
          elmnt.classList.remove('product-param-checked');
        }
    })       
   })
  
   document.querySelectorAll('.additives').forEach((el) => {
       el.addEventListener('click', function(){
        el.classList.toggle('product-param-checked');
        const additive = el.lastElementChild.textContent;
        const additives = result[ind].additives;
        if(el.classList.contains('product-param-checked')){
        additives.forEach((elmt, index) => {
          if(elmt.name === additive){
            priceAdditives += Number(additives[index]['add-price']);
          }
        })
        } else{
           additives.forEach((elmt, index) => {
          if(elmt.name === additive){
            priceAdditives -= Number(additives[index]['add-price']);
            console.log(priceAdditives);
          }
        })
        }

       })   
   })
   
 document.getElementById('TotalPrise').textContent = `${price} $`;
 document.querySelectorAll('.product-params').forEach(el => el.addEventListener('click', function(){
 totalPrice = Number(price) + Number(priceAddVol) + priceAdditives;   
 document.getElementById('TotalPrise').textContent = `${totalPrice.toFixed(2)} $`;
 }))
  })
})
}
) 