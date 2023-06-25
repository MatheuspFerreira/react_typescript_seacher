const timeOutPromise: Promise<boolean> = new Promise((resolve) => {
    setTimeout(() => {
      resolve(false);
    }, 5000);
  });
  
export default timeOutPromise;
  