async function st() {
  return await Promise.resolve('async is working');
}

st().then(console.log);

class Util {
  static id = Date.now();
}

console.log('Util', Util.id);