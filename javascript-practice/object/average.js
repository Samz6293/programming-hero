let scores = {
    math: 90,
    science: 85,
    arts: 95
}

let subject = 0;
let totalScore = 0;

for (let score in scores) {
    subject++;
    totalScore += scores[score];
}

console.log(subject);
console.log(totalScore);
console.log(`Average marks of ${subject} subjects is ${totalScore/subject}`);
