#!/usr/bin/env node
import commander from 'commander';

const program = new commander.Command();
program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-v, --version', 'output the current output the version number')
  .parse();
