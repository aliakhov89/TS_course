const skills: string[] = ['Dev', 'DevOps', 'TS'];

for(const skill of skills) {
    console.log(skill);
    console.log(skill.toLowerCase());
}

const resSkills : string = skills
    .filter(s  => s !== 'DevOps')
    .map(s => s + '! ')
    .reduce((a, b) => a + b);
console.log(resSkills);