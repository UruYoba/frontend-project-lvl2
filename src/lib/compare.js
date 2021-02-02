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
const compare = (filePath1, filePath2) => {
  const json1 = JSON.parse(fs.readFileSync(getPath(filePath1), 'utf-8'));
  const json2 = JSON.parse(fs.readFileSync(getPath(filePath2), 'utf-8'));
  const keys = _.union([...Object.keys(json1), ...Object.keys(json2)]).sort();
  const caseGenerator = (obj, key) => (_.has(obj, key) ? 'y' : 'n');
  console.log('{');
  keys.forEach((key) => {
    const ans = caseGenerator(json1, key) + caseGenerator(json2, key);
    if (ans === 'yy') {
      if (json1[key] === json2[key]) console.log(`    ${key}: ${json1[key]}`);
      else {
        console.log(`  - ${key}: ${json1[key]}`);
        console.log(`  + ${key}: ${json2[key]}`);
      }
    } else if (ans === 'yn') console.log(`  - ${key}: ${json1[key]}`);
    else console.log(`  + ${key}: ${json2[key]}`);
  });
  console.log('}');
};
export default compare;
