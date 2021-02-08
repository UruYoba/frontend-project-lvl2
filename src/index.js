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
const gendiff = (filePath1, filePath2) => {
  const json1 = JSON.parse(fs.readFileSync(getPath(filePath1), 'utf-8'));
  const json2 = JSON.parse(fs.readFileSync(getPath(filePath2), 'utf-8'));
  const keys = _.union([...Object.keys(json1), ...Object.keys(json2)]).sort();
  const caseGenerator = (obj, key) => (_.has(obj, key) ? 'y' : 'n');
  let answer = '{\n';
  // answer += ('{');
  keys.forEach((key) => {
    const ans = caseGenerator(json1, key) + caseGenerator(json2, key);
    if (ans === 'yy') {
      if (json1[key] === json2[key]) answer += `    ${key}: ${json1[key]}\n`;
      else {
        answer += (`  - ${key}: ${json1[key]}\n`);
        answer += (`  + ${key}: ${json2[key]}\n`);
      }
    } else if (ans === 'yn') answer += (`  - ${key}: ${json1[key]}\n`);
    else answer += (`  + ${key}: ${json2[key]}\n`);
  });
  answer += ('}');
  return answer;
};
export default gendiff;
