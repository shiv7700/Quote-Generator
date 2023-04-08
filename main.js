//random number from 0 to 9
const random = Math.floor(Math.random() * 10);

const quote = [
  `Any fool can write code that a computer can understand. Good programmers write code that humans can understand. ― Martin Fowler`,
  `Programming is the art of telling another human being what one wants the computer to do. ― Donald Ervin Knuth`,
  `Quality is a product of a conflict between programmers and testers. ― Yegor Bugayenk`,
  `Everybody should learn to program a computer because it teaches you how to think. – Steve Jobs`,
  `Web development is difficult, only then it is fun to do. You just have to set your standards. If it were to be easy, would anyone do it? ― Olawale Daniel`,
  `Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program. – Linus Torvalds`,
  `I’m not a great programmer; I’m just a good programmer with great habits. ― Kent Beck`,
  `Programming is learned by writing programs. ― Brian Kernighan`,
  `If debugging is the process of removing bugs, then programming must be the process of putting them in. – Sam Redwine`,
  `Computers are fast; developers keep them slow. – Anonymous`,
];

const quoteNow = quote[random];
console.log(`Quote Number ${random} ${quoteNow}`);

//predefined dom code
const quoteHeading = document.querySelector("#quote");
quoteHeading.textContent = `Quote Number ${random + 1}`;

const element = document.querySelector("#target");
element.textContent = `${quote[random]}`;
