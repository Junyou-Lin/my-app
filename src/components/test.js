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
