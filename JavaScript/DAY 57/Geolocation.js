function getPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

getPosition()
  .then((pos) => console.log(pos))        // success: position object
  .catch((err) => console.error(err));    // error: user denied, etc.
