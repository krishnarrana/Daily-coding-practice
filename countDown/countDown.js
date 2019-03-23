function countDown(time) {
  const setTimeoutId = setInterval(() => {
    console.log(time);
    time = time - 1;
    if (time < 0) {
      console.log("Ring Ring Ring");
      clearInterval(setTimeoutId);
    }
  }, 1000);
}

countDown(10);
