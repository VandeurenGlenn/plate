import { writeTemplate, exec } from './util.js';

const argv = process.argv;
argv.splice(0, 2);

(async () => {
  try {
    if (argv[0] === 'add') {
      await exec(`npm i -g ${argv[1]}-plate`);
      return;
    };
    const target = argv[0];
    await writeTemplate(target);
  } catch (error) {
    console.error(error);
  }
})()
