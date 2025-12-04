const promise = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) resolve("operation completed successfully");
    else reject("something went wrong");
  }, 2000);
});

promise
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("operation completed"));
