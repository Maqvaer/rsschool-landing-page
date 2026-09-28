fetch('./src/jsons/products.json')
  .then(response => response.json())
  .then(result => console.log(result[0].name)

)

 