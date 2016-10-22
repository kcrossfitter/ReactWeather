getTempCallback = (location, callback) => {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('Philadelphia', (error, temp) => {
  if (error) {
    console.log('error', error);
  } else {
    console.log('success', temp);
  }
});

getTempPromise = (location) => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(79);
      reject('City not found');
    }, 1000);
  });
}

getTempPromise('Philadelphia')
  .then((temp) => {
    console.log('Promise success', temp);
  })
  .catch((error) => {
    console.log('Promise error', error);
  });


// challenge area
addPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('a & b must be numbers');
    }
  });
};

addPromise(2, 3)
  .then((sum) => {
    console.log(`The sum of two numbers: ${sum}`);
  })
  .catch((error) => {
    console.log(`error: ${error}`);
  });

addPromise('andrew', 9)
  .then((sum) => {
    console.log(`This should not show up`);
  })
  .catch((error) => {
    console.log(`This should appear: ${error}`);
  });
