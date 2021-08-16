const args = process.argv;
let a = args.slice(2);
for (let i = 0; i < a.length; i++) {
  let b = a[i];
  let c = "";
  for (let j = b.length - 1; j >= 0; j--) {
    c = c + b[j];
  }console.log(c);
}


