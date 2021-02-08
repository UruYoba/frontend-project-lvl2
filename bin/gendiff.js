#!/usr/bin/env node
import commander from 'commander';
import gendiff from '../src/index.js';

const program = new commander.Command();
program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-v, --version', 'output the current output the version number')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    const ans = gendiff(filepath1, filepath2);
    console.log(ans);
  })
  .parse();
