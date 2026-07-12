import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const home = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const character = await readFile(new URL('../kauzatsiya/index.html', import.meta.url), 'utf8');
const styles = await readFile(new URL('../styles.css', import.meta.url), 'utf8');
const app = await readFile(new URL('../app.js', import.meta.url), 'utf8');

assert.match(home, /id=["']release-list["']/);
assert.match(app, /href:\s*'kauzatsiya\/'/);
assert.match(app, /title:\s*'каузация'/);
assert.match(character, /каузация/);
assert.match(character, /\.\.\/assets\/characters\/kauzatsiya\.jpg/);
assert.match(styles, /filter:\s*grayscale\(1\)/);
console.log('character page contract passes');
