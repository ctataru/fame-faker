/*
---- USER KEYS
1 - boy
2 - woman with balloon
3 - cute woman
4 - hipster dude
5 - cute woman
6 - cat
7 - colors
8 - cute woman
9 - cute woman
10 - cute woman
11 - woman
12 - man
13 - woman
14 - man
15 - woman

*/

const USERS = [
  '_kylexxy',
  'wonderluust',
  'kate_takeslife40',
  'sini501',
  'byleth_xc', // 5
  'roro__',
  'drew_hairymore',
  'jessicallmemaybe',
  '_liv_12',
  'clairedelunee', // 10
  'lorniemathews_',
  'jason_arnothaga',
  '~~catherinexox1',
  'joshclements', // 14
  'pastrellitaa'
];

export const DEFAULT_COMMENTS = [
  {
    name: getUser(1),
    message: 'this is so cool!!',
    photo: getPhoto(1)
  },
  {
    name: getUser(2),
    message: 'heyyyy where have u been',
    photo: getPhoto(2)
  },
  {
    name: getUser(3),
    message: '😍😍😍😍',
    photo: getPhoto(3)
  },
  {
    name: getUser(4),
    message: 'bruhh',
    photo: getPhoto(4)
  },
  {
    name: getUser(5),
    message: 'where are you??',
    photo: getPhoto(5)
  },
  {
    name: getUser(6),
    message: 'omg lol',
    photo: getPhoto(6)
  },
  {
    name: getUser(7),
    message: 'WHADUPPPPPPPP',
    photo: getPhoto(7)
  },
  {
    name: getUser(8),
    message: '🔥🔥',
    photo: getPhoto(8)
  },
  {
    name: getUser(9),
    message: '💙💚🖤',
    photo: getPhoto(9)
  },
  {
    name: getUser(10),
    message: 'love uuuu',
    photo: getPhoto(10)
  },
  {
    name: getUser(11),
    message: 'awwww',
    photo: getPhoto(11)
  },
  {
    name: getUser(12),
    message: 'what\'s happening around u lol',
    photo: getPhoto(12)
  },
  {
    name: getUser(13),
    message: 'hi sweetie',
    photo: getPhoto(13)
  },
  {
    name: getUser(14),
    message: '💪',
    photo: getPhoto(14)
  },
  {
    name: getUser(15),
    message: '😘😘😘😘😘😘',
    photo: getPhoto(15)
  },
];

function getUser(num) {
  return USERS[num - 1]
}

function getPhoto(num) {
  return `/profile_photos/${num}.png`
}
