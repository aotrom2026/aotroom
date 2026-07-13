export const entries = [
  { key: 'kauzatsiya', number: '01', title: 'каузация', type: 'артист', href: 'kauzatsiya/', image: 'assets/characters/kauzatsiya.jpg', monochrome: true },
  { key: 'alya', number: '02', title: 'ALYA', type: 'артист', href: 'alya/', image: 'assets/characters/alya.jpg', monochrome: true },
  { key: 'viktoriya-solomakhina', number: '03', title: 'Виктория Соломахина', type: 'артист', href: 'viktoriya-solomakhina/', image: 'assets/characters/viktoriya-solomakhina.jpg', monochrome: true },
  { key: 'nablyudateli', number: '04', title: 'Наблюдатели', type: 'артист', href: 'nablyudateli/', image: 'assets/characters/nablyudateli.jpg', monochrome: true },
  { key: 'golos', number: '05', title: 'Голос', type: 'проект', href: 'golos/', image: 'assets/projects/golos.png', monochrome: false },
  { key: 'bravo-bis', number: '06', title: 'Браво Бис', type: 'проект', href: 'bravo-bis/', image: 'assets/projects/bravo-bis.png', monochrome: false },
];

const link = (title, url) => ({ title, url });

export const portfolioGroups = [
  {
    key: 'viktoriya-solomakhina', title: 'Виктория Соломахина', kind: 'музыка',
    links: [
      link('Полюшко', 'https://band.link/__polushko'),
      link('Русалочка', 'https://bnd.lc/rusalochkaa'),
      link('Унеси', 'https://vikso.band.link/_unesi'),
      link('Проснись со мной', 'https://band.link/prosnissomnoy'),
      link('Прощай', 'https://band.link/proshay'),
      link('Мой городок', 'https://band.link/moygorodok'),
    ],
  },
  {
    key: 'kauzatsiya', title: 'каузация', kind: 'музыка',
    links: [
      link('альбом', 'https://aliy-mayak.band.link/otdt'),
      link('Научиться', 'https://band.link/nauchitsya'),
      link('Рано-рано', 'https://band.link/ranorano'),
    ],
  },
  {
    key: 'alya', title: 'ALYA', kind: 'музыка',
    links: [
      link('релиз 01', 'https://band.link/8Kxmc'),
      link('релиз 02', 'https://band.link/Zqv4j'),
      link('релиз 03', 'https://band.link/Xo9Ts'),
      link('релиз 04', 'https://band.link/2cXdt'),
      link('релиз 05', 'https://band.link/nnkQj'),
      link('релиз 06', 'https://band.link/MpXBr'),
      link('Ближе', 'https://aliy-mayak.bnd.lc/blizhee'),
      link('релиз 08', 'https://band.link/rztpq'),
    ],
  },
  {
    key: 'aotrom', title: 'aotrom', kind: 'музыка',
    links: [
      link('Взрослый', 'http://lnk.embers.digital/remixed'),
      link('Exposure', 'https://band.link/exposure?fbclid=PAZXh0bgNhZW0CMTEAAaY0xzLidKeyibymPVt1IPZ5uf4wNVWkUfV_o-khjTcl-UrdQbtd5WAOb6I_aem_WgGBvwBXBr_GXN6AUII5ZA'),
      link('Loss', 'https://band.link/lossaotrom'),
      link('Sympathy', 'https://band.link/sympathyaotrom'),
    ],
  },
  {
    key: 'laren', title: 'LAREN', kind: 'музыка',
    links: [
      link('релиз 01', 'https://zvonko.link/204890A'),
      link('релиз 02', 'https://zvonko.link/20F9445'),
      link('релиз 03', 'https://zvonko.link/214A93B'),
      link('релиз 04', 'https://zvonko.link/2450304'),
    ],
  },
  {
    key: 'vladimir-shirokov', title: 'Владимир Широков', kind: 'музыка',
    links: [
      link('Ты танцуешь одна / Дыхание', 'https://band.link/DYHANIE_ALBUM'),
      link('релиз 02', 'https://music.yandex.ru/album/36334657/track/138468675?utm_source=web&utm_medium=copy_link'),
    ],
  },
  {
    key: 'nablyudateli', title: 'Наблюдатели', kind: 'музыка',
    links: [
      link('релиз 01', 'https://band.link/mjGPe'),
      link('релиз 02', 'https://band.link/r0Ofj'),
    ],
  },
  {
    key: 'altro-coro', title: 'ALTRO CORO', kind: 'музыка',
    links: [
      link('Мой городок', 'https://band.link/moygorodok'),
      link('релиз 02', 'https://band.link/_dryg'),
    ],
  },
  {
    key: 'other-projects', title: 'Остальные проекты', kind: 'музыка',
    links: [
      link('релиз 01', 'https://band.link/XY8Vf'),
      link('релиз 02', 'https://band.link/keirafire'),
      link('релиз 03', 'https://onerpm.link/902558270024?fbclid=PAAaaL8po36c9IoUv8oKC7uqG4Z_ISgOUNExysskmrLGhZ9Nb-qMdJip3TiKo_aem_AZH4Vq1xjNXrq4dsc3luA3Uz9z7mroiXfwwEeHjqD5q-DMxAB8hdz7voULFoW5mlJv0'),
      link('релиз 04', 'https://band.link/U6sIy'),
      link('релиз 05', 'http://allstarmusic.link/vita_lotereya'),
    ],
  },
  {
    key: 'golos', title: 'Голос', kind: 'видео',
    links: [
      link('видео 01', 'https://www.1tv.ru/-/eqgkx'),
      link('Выше', 'https://www.1tv.ru/shows/golos-11/vystupleniya/viktoriya-solomahina-vyshe-golos-11-chetvertfinal-fragment-vypuska-ot-19-05-2023'),
      link('видео 03', 'https://www.1tv.ru/-/sesqmi'),
      link('видео 04', 'https://www.1tv.ru/-/lrzwdr'),
      link('видео 05', 'https://www.1tv.ru/-/dxceoo'),
      link('видео 06', 'https://www.1tv.ru/-/tercbf'),
      link('видео 07', 'https://www.1tv.ru/-/jvwpcu'),
      link('видео 08', 'https://1tv.ru/-/mbqbkf'),
      link('видео 09', 'https://1tv.ru/-/cvbljs'),
      link('Метелица', 'https://www.1tv.ru/shows/golos-13/vystupleniya/valentina-yanshina-metelica-nokauty-golos-vypusk-ot-04-04-2025'),
      link('видео 11', 'https://1tv.ru/-/cbxmde'),
      link('видео 12', 'https://1tv.ru/-/gpupyv'),
      link('видео 13', 'https://1tv.ru/-/vupmof'),
    ],
  },
  {
    key: 'bravo-bis', title: 'Браво Бис', kind: 'видео',
    links: [
      link('видео 01', 'https://vkvideo.ru/video-232371204_456239286?pl=-232371204_1&t=19s'),
      link('видео 02', 'https://vkvideo.ru/video-232371204_456239227?pl=-232371204_1&t=29s'),
    ],
  },
];

export const entryByKey = Object.fromEntries(entries.map((entry) => [entry.key, entry]));
export const groupByKey = Object.fromEntries(portfolioGroups.map((group) => [group.key, group]));
