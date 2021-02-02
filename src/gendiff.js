#!/usr/bin/env node
import commander from 'commander';
import compare from './lib/compare.js';

const program = new commander.Command();
program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-v, --version', 'output the current output the version number')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    compare(filepath1, filepath2);
  })
  .parse();
