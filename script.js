const calculate = document.getElementById('calcolatore');
const results = document.getElementById('results')

calculate.addEventListener('click', (e) => {
  e.preventDefault();


  const km = document.getElementById(km).Value;
  const età = document.getElementById(età).Value;



  const baseprice = 0.21 * km;
  let finalprice;


  if(age === 'under-18' ){
    finalprice = baseprice * 0.8;
  }
  else if (age === 'over-65' ) {
    finalprice = baseprice * 0.6 
  }
  else{
    finalprice = baseprice
  }
  results.innertext = `km percorsi: ${km}, età del passeggero: ${età}, prezzo finale: ${finalprice.tofixed(2)}` 
})