function countDown(seconds) {
  const intervalId = setInterval(() => {
    seconds--;
    if (seconds > 0) {
      console.log("Timer : ", seconds);
    } else {
      console.log("Ring Ring Ring");
      clearInterval(intervalId);
    }
  }, 1000);
}

countDown(10);
