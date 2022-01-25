// const slowMotion = {
//   action: "jump of the building...",
//   play: function () {
//     setTimeout(() => {
//       console.log(this.action);
//     }, 2000);
//   },
//   play2: function () {
//     setTimeout(
//       function () {
//         console.log(this.action);
//       }.bind(this),
//       2000
//     );
//   },
//   play3: function () {
//     setTimeout(
//       function () {
//         console.log(this.action);
//       }.bind(this),
//       2000
//     );
//   },
// };

// slowMotion.play();
// slowMotion.play2();
// slowMotion.play3();

// const man = {
//   message: "This is madness, This is Sparta!",
//   speak: function (arg = "") {
//     console.log(this.message, arg);
//   },
// };
// man.speak.apply({ message: "This is Javascript" }, ["from apply"]);
// man.speak.call({ message: "This is Javascript" }, "from call");

// const anotherSpeak = man.speak.bind({ message: "test1" });
// anotherSpeak();

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("foo");
//   }, 3000);
// });

// promise1
//   .then((value) => {
//     console.log(value);
//     return 1;
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .then(() => {
//     throw new Error("some error");
//   })
//   .catch((e) => {
//     console.log(e);
//   })
//   .finally((value) => {
//     console.log("promise final section", value);
//   });

function resolveAfter2Seconds() {
  console.log("starting slow promise");
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("slow");
      console.log("slow promise is done");
    }, 2000);
  });
}

function resolveAfter1Second() {
  console.log("starting fast promise");
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("fast");
      console.log("fast promise is done");
    }, 1000);
  });
}

async function sequentialStart() {
  console.log("==SEQUENTIAL START==");
  const startTime = Date.now();

  // 1. Execution gets here almost instantly
  // const slow = await resolveAfter2Seconds();
  // console.log(slow, Date.now() - startTime); // 2. this runs 2 seconds after 1.

  // const fast = await resolveAfter1Second();
  // console.log(fast, Date.now() - startTime); // 3. this runs 3 seconds after 1.

  console.log("==SEQUENTIAL START==");
  resolveAfter2Seconds().then((res) => {
    console.log(Date.now() - startTime); // 4. this runs 2 seconds after 1
    console.log("resolveAfter2Seconds", res);
  });
  resolveAfter1Second().then((res) => {
    console.log(Date.now() - startTime); // 5. this runs 1 second after 1
    console.log("resolveAfter1Second", res);
  });
}

sequentialStart();
