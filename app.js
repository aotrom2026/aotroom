import { entries, portfolioGroups } from './portfolio-data.js';

const releaseList = document.querySelector('#release-list');
const portfolioGroupsRoot = document.querySelector('#portfolio-groups');

releaseList.className = 'artist-list';

releaseList.innerHTML = entries.map(({ number, title, type, href }) => `
  <article class="artist-row">
    <span class="artist-row__number">${number}</span>
    <h3 class="artist-row__title">${title}</h3>
    <span class="artist-row__type">${type}</span>
    <a class="artist-row__action" href="${href}">войти <span aria-hidden="true">↗</span></a>
  </article>
`).join('');

portfolioGroupsRoot.innerHTML = portfolioGroups.map(({ title, kind, links }) => {
  const action = kind === 'видео' ? 'смотреть' : 'слушать';
  return `
    <section class="portfolio-group" aria-label="${title}">
      <header class="portfolio-group__heading">
        <h3>${title}</h3>
        <span>${kind}</span>
      </header>
      <ol class="portfolio-group__links">
        ${links.map(({ title: linkTitle, url }, index) => `
          <li>
            <span>${String(index + 1).padStart(2, '0')}</span>
            <a href="${url}" target="_blank" rel="noreferrer">${linkTitle} <em>${action} ↗</em></a>
          </li>
        `).join('')}
      </ol>
    </section>
  `;
}).join('');
