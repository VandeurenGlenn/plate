import { exec as _exec } from 'child_process';
import { promisify } from 'util';
import { join } from 'path';
import ora from 'ora';

const log = ora('plate');

export const exec = promisify(_exec);

const cp = async (source, dest, arg = '') => {
  await exec(`cp ${source} ${dest} ${arg}`);
  return;
}

const templateDir = target => join(__dirname, '..', `${target}-plate`);

export const writeTemplate = async target => {
  try {
    log.start(`${target}-plate initializing @ ${process.cwd()}`);
    await cp(`${templateDir(target)}/**`, process.cwd(), '-r');
    log.succeed(`${target}-plate initialized @ ${process.cwd()}`);
  } catch (error) {
    throw error;
  }

}
