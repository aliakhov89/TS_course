const skills: string[] = ['Dev', 'DevOps', 'TS', 1]; //  отримуємо помилку так як 1 не стрінга

//рішення проблеми з tuples:

const skill: [number, string] = [1, 'Dev'];

const id = skill[0];
const skillName = skill[1];

skill.push('sdfsf');

console.log(skillName);
console.log(id);


