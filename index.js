// const pattern = RegExp("<(\\w+)>(.*?)</\\1>", "gmi"); //gim;

// let str = `<li><p>Hi<span>there</span> welcome</p></li>`;
// let match = pattern.exec(str);
// while (match) {
//   console.log(match[2]);
//   str = match[2];
//   console.log(pattern);
//   pattern.lastIndex = 0;
//   match = pattern.exec(str);
// }

const singleton = (className) => {
  return new Proxy(className.prototype.constructor, {
    instance: null,
    construct: (target, argumentsList) => {
      if (this?.instance) {
        this.instance = new target(...argumentsList);
      }
      return this?.instance;
    },
  });
};

class Message {
  constructor(msg) {
    this.msg = msg;
  }

  printMsg() {
    console.log(`[MESSAGE]: ${this.msg}`);
  }
}
const SingletonObj = singleton(Message);
const message = new SingletonObj("Hi how are You");

message.printMsg();
