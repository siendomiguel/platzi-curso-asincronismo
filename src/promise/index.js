const promise = new Promise(function (resolve, reject) {
  resolve('Hey!')
});

const cows = 15;

const countCows = new Promise(function (resolve, reject) {
  if ( cows > 10) {
    resolve(`Si tenemos las vacas que necesitamos`);
  } else {
    reject('Estamos jodidos, no tenemos suficientes vacas')
  }
});

countCows.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
}).finally(() => {
  console.log('finally');
})