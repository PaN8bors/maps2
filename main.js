import input from 'input';

async function prompt(grades) {
    while (true) {
      let name = await input.text('Enter student name or "cancel"');
      if (name === "cancel") {
          break;
      } else {
          let grde = await input.text('What is their grade?')
      grades.set(name, grde)
      }
    }
}

function display(grades) {
  for (const [name, grde] of grades) {
      console.log(`${name} has a ${grde}%`);
  }
}

async function main() {
    const grades = new Map();

    await prompt(grades);
    display(grades);
}

main();