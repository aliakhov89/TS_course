const devSkills: string[] = ['Dev', 'DevOps', 'TS'];

for(const skill of devSkills) {
    console.log(skill);
    console.log(skill.toLowerCase());
}

const resSkills : string = devSkills
    .filter(s  => s !== 'DevOps')
    .map(s => s + '! ')
    .reduce((a, b) => a + b);
console.log(resSkills);