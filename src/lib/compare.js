import _ from 'lodash';
import fs from 'fs';
import path from 'path';
// import os from 'os';
import process from 'process';

const getPath = (filePath) => {
  if (path.isAbsolute(filePath)) {
    return filePath;
  }
  return path.join(process.cwd(), filePath);
};

const f = (filePath1, filePath2) => {
  const json1 = JSON.parse(fs.readFileSync(getPath(filePath1), 'utf-8'));
  const json2 = JSON.parse(fs.readFileSync(getPath(filePath2), 'utf-8'));
  const keys = _.union([...Object.keys(json1), ...Object.keys(json2)]).sort();
  console.log(keys);
  console.log('{');
  // keys.forEach((key) => {
  //   if (_.has(json1, key)) {
  // });
};

f('/home/uru/hex-projects/frontend-project-lvl2/file1.json', '/home/uru/hex-projects/frontend-project-lvl2/file2.json');
