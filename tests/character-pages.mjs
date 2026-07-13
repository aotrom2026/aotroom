import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const home = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const character = await readFile(new URL('../kauzatsiya/index.html', import.meta.url), 'utf8');
const alya = await readFile(new URL('../alya/index.html', import.meta.url), 'utf8');
const viktoriya = await readFile(new URL('../viktoriya-solomakhina/index.html', import.meta.url), 'utf8');
const nablyudateli = await readFile(new URL('../nablyudateli/index.html', import.meta.url), 'utf8').catch(() => '');
const styles = await readFile(new URL('../styles.css', import.meta.url), 'utf8');
const app = await readFile(new URL('../app.js', import.meta.url), 'utf8');
const portfolioData = await readFile(new URL('../portfolio-data.js', import.meta.url), 'utf8').catch(() => '');

assert.match(home, /id=["']release-list["']/);
assert.match(home, /<h2 id=["']releases-title["']>артисты<br>и проекты<\/h2>/);
assert.match(app, /import \{ entries, portfolioGroups \} from '\.\/portfolio-data\.js';/);
assert.match(app, /class="artist-row"/);
assert.match(app, /class="portfolio-group"/);
assert.match(character, /каузация/);
assert.match(character, /\.\.\/assets\/characters\/kauzatsiya\.jpg/);
assert.match(alya, /ALYA/);
assert.match(alya, /\.\.\/assets\/characters\/alya\.jpg/);
assert.match(viktoriya, /Виктория Соломахина/);
assert.match(viktoriya, /\.\.\/assets\/characters\/viktoriya-solomakhina\.jpg/);
assert.match(nablyudateli, /Наблюдатели/);
assert.match(nablyudateli, /\.\.\/assets\/characters\/nablyudateli\.jpg/);
assert.doesNotMatch(`${home}${character}${alya}${viktoriya}${nablyudateli}`, /AOTROOM|aotroom/);
assert.doesNotMatch(`${home}${character}${alya}${viktoriya}${nablyudateli}`, /персонаж/);
assert.doesNotMatch(`${character}${alya}${viktoriya}${nablyudateli}`, /logo-(main|small)\.png/);
assert.match(`${character}${alya}${viktoriya}${nablyudateli}`, /\.\.\/assets\/aotrom-logo\.png/);
for (const label of ['Виктория Соломахина', 'каузация', 'ALYA', 'aotrom', 'LAREN', 'Владимир Широков', 'Наблюдатели', 'ALTRO CORO', 'Голос', 'Браво Бис']) {
  assert.match(portfolioData, new RegExp(label));
}
assert.match(portfolioData, /https:\/\/band\.link\/__polushko/);
assert.match(portfolioData, /https:\/\/www\.1tv\.ru\/-\/eqgkx/);
assert.match(portfolioData, /https:\/\/vkvideo\.ru\/video-232371204_456239286/);
assert.match(styles, /filter:\s*grayscale\(1\)/);
assert.match(styles, /\.polaroid img \{[\s\S]*?aspect-ratio: 3 \/ 4;[\s\S]*?object-fit: contain;/);
assert.doesNotMatch(styles, /\.person-card:nth-child\(3\) \.polaroid \{ grid-column:/);
assert.match(styles, /@media \(max-width: 700px\)[\s\S]*?\.polaroid figcaption strong \{ font-size: clamp\(16px, 4\.7vw, 21px\); \}/);
assert.match(styles, /@media \(max-width: 700px\)[\s\S]*?\.hero__image \{ object-position: center center; filter: none; \}/);
assert.match(styles, /@media \(max-width: 700px\)[\s\S]*?\.contact__content \{ gap: 24px; \}/);
console.log('character page contract passes');
