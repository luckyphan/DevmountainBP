let range = Array.from({length: 50}, (_, i) => i + 1)
console.log(range)
range.forEach(n => {
  if(n % 3 === 0 && n % 5 === 0)
  console.log('fizzbuzz');
  else if(n % 3 === 0)
  console.log('fizz');
  else if(n % 5 === 0)
  console.log('buzz');
  else
  console.log(n);
});