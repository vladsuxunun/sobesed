function solveEquation(a, b, c) {
  let arr;
  let sqrt = []
  let di = b^2-4*a*c;
  if (di  == 0){
    sqrt.push(-b/(2*a))

  }
  else if(di  > 0){
    sqrt.push((-b + Math.sqrt(di) )/(2*a))
    sqrt.push((-b - Math.sqrt(di) )/(2*a))

  }
  else{

  }
   
  // код для задачи №1 писать здесь
  return sqrt; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
