import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);

test('should get right diff', () => {
  const path1 = getFixturePath('file1.json');
  const path2 = getFixturePath('file2.json');
  const expected = fs.readFileSync(getFixturePath('expected1'), 'utf-8');
  const recieved = gendiff(path1, path2);
  expect(recieved).toBe(expected);
});
