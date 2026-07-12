const characters = [
  { number: '01', title: 'каузация', label: 'персонаж', action: 'войти', href: 'kauzatsiya/' },
  { number: '02', title: 'ALYA', label: 'персонаж', action: 'войти', href: 'alya/' },
];

const releaseList = document.querySelector('#release-list');

releaseList.innerHTML = characters.map(({ number, title, label, action, href }) => `
  <article class="release">
    <span class="release__number">${number}</span>
    <h3 class="release__title">${title}</h3>
    <span class="release__year">${label}</span>
    <a class="release__status" href="${href}">${action} <span aria-hidden="true">↗</span></a>
  </article>
`).join('');
