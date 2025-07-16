const calculate = document.getElementById('calcolatore');

calculate.addEventListener('click',(e) => {
  e.preventDefault();


  const km = document.getElementById(km).Value;
  const età = document.getElementById(età).Value;



  const baseprice = 0.21 * km;
  let finalprice;


  if(age <18){
    finalprice = baseprice * 0.8;
  }
  else if (age > 65) {

  }
  else{
    finalprice = baseprice
  }
  results.innertext = `km percorsi: ${km}, età del passeggero: ${età}, prezzo finale: ${finalprrice}` 
})