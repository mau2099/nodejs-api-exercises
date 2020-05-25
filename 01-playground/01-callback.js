const asyncCallback = (cb) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      return cb(null, 'callback resolved');
    }
    return cb(new Error('fatal error'));
  }, 1000);
};

asyncCallback((err, res) => {
  if (err) {
    console.log('Reason -> ', err);
  } else {
    console.log('Success -> ', res);
  }
});
