const asyncPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      return resolve('resolved');
    } else {
      reject(new Error('rejected'));
    }
  }, 1000);
});

asyncPromise
  .then((res) => res.toUpperCase())
  .then((resp) => console.log('then success -> ', { resp }))
  .catch((error) => console.log('catch -> ', error));
