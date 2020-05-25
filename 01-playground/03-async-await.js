const asyncPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve('resolved') : reject(new Error('rejected'));
    }, 500);
  });
};

(async () => {
  try {
    const message = await asyncPromise();
    console.log('await success', message);
  } catch (error) {
    console.log('await error -> ', error);
  }
})();

// asyncFunction();
