function makeFuncs() {
  const funcs = [];
  for (let i = 0; i < 3; i++) {
    console.log("inside block scope of the loop", i);
    funcs[i] = function () {
      console.log(`func ${i}: ${i}`);
    };
  }
  return funcs;
}

const functions = makeFuncs();

for (let j = 0; j < 3; j++) {
  functions[j]();
}
