'use strict';
const bcrypt = require('bcrypt'); 
const { Op } = require('sequelize'); 

let demoUsers = [
  {
    firstName: 'fname1',
    lastName: 'lname1',
    username: 'username1',
    email: 'email1@gmail.com',
    hashedPassword: '$2b$10$iHjI4j8DGyTng9LNvQ6bqOZ8/KM2xHCmQ.dQMlYTHdTLahveTVnCm',
    picturePath: 'p1',
    gotchaDate: '2015-3-11',
    breed: 'breed1',
    location: 'location1',
    bio: 'This is meant to serve as the bio for user1.',
    profileViews: 10863,
    impressions: 4726
  },
  {
    firstName: 'fname2',
    lastName: 'lname2',
    username: 'username2',
    email: 'email2@gmail.com',
    hashedPassword: '$2b$10$SXibxnFw6/LMXWNDMwYCkO3evEIkDaru3Q9w.umWyQEs4YLaQalHm',
    picturePath: 'p2',
    gotchaDate: '2022-4-24',
    breed: 'breed2',
    location: 'location2',
    bio: 'This is meant to serve as the bio for user2.',
    profileViews: 12331,
    impressions: 7586
  },
  {
    firstName: 'fname3',
    lastName: 'lname3',
    username: 'username3',
    email: 'email3@gmail.com',
    hashedPassword: '$2b$10$x8zpWu6hvhYyYbVmr2gH.OzyHlytXxuOPGm4zA5GuOevEnshPCDMq',
    picturePath: 'p3',
    gotchaDate: '2013-7-6',
    breed: 'breed3',
    location: 'location3',
    bio: 'This is meant to serve as the bio for user3.',
    profileViews: 19088,
    impressions: 6761
  },
  {
    firstName: 'fname4',
    lastName: 'lname4',
    username: 'username4',
    email: 'email4@gmail.com',
    hashedPassword: '$2b$10$WyPXs2MmZ8X92bxN9UpeE.pCWUDYvTbc.Kd7klESgXhHtSF6q2Epu',
    picturePath: 'p4',
    gotchaDate: '2013-10-9',
    breed: 'breed4',
    location: 'location4',
    bio: 'This is meant to serve as the bio for user4.',
    profileViews: 7929,
    impressions: 6136
  },
  {
    firstName: 'fname5',
    lastName: 'lname5',
    username: 'username5',
    email: 'email5@gmail.com',
    hashedPassword: '$2b$10$RRf3Wgou5BH7xLFDWigOyumfXJx6a0eRXFRtEq.OLtotS8DQeBsde',
    picturePath: 'p5',
    gotchaDate: '2016-3-30',
    breed: 'breed5',
    location: 'location5',
    bio: 'This is meant to serve as the bio for user5.',
    profileViews: 2341,
    impressions: 1835
  },
  {
    firstName: 'fname6',
    lastName: 'lname6',
    username: 'username6',
    email: 'email6@gmail.com',
    hashedPassword: '$2b$10$vMM8W2yIpx7oEGglpwGD5.AAOGgrhgBrLZG6fGyEit74eL/k6amGK',
    picturePath: 'p6',
    gotchaDate: '2015-7-20',
    breed: 'breed6',
    location: 'location6',
    bio: 'This is meant to serve as the bio for user6.',
    profileViews: 13673,
    impressions: 6563
  },
  {
    firstName: 'fname7',
    lastName: 'lname7',
    username: 'username7',
    email: 'email7@gmail.com',
    hashedPassword: '$2b$10$AyGRe.LDyzdaA7dtHyn1j.PfLulmd7xwpJNzvBA9yPn/L2G4TXvEC',
    picturePath: 'p7',
    gotchaDate: '2019-5-5',
    breed: 'breed7',
    location: 'location7',
    bio: 'This is meant to serve as the bio for user7.',
    profileViews: 3253,
    impressions: 1098
  },
  {
    firstName: 'fname8',
    lastName: 'lname8',
    username: 'username8',
    email: 'email8@gmail.com',
    hashedPassword: '$2b$10$rQTZvpUB54O9thsIx/NWtOsTKwStq9.tF/ZfGvPdbzXBWrLSscqTK',
    picturePath: 'p8',
    gotchaDate: '2019-8-1',
    breed: 'breed8',
    location: 'location8',
    bio: 'This is meant to serve as the bio for user8.',
    profileViews: 7692,
    impressions: 2839
  },
  {
    firstName: 'fname9',
    lastName: 'lname9',
    username: 'username9',
    email: 'email9@gmail.com',
    hashedPassword: '$2b$10$hwwJmqW52QSyITwgqwNXkeqz0.41YUxvq5dihf1bZOBplvRp7ezXW',
    picturePath: 'p9',
    gotchaDate: '2020-10-18',
    breed: 'breed9',
    location: 'location9',
    bio: 'This is meant to serve as the bio for user9.',
    profileViews: 2549,
    impressions: 985
  },
  {
    firstName: 'fname10',
    lastName: 'lname10',
    username: 'username10',
    email: 'email10@gmail.com',
    hashedPassword: '$2b$10$ozm1smcWAVkW4AFiFnSMJO22x1468Rin.qXwiLZVvlELj/kjc0SqG',
    picturePath: 'p10',
    gotchaDate: '2020-4-2',
    breed: 'breed10',
    location: 'location10',
    bio: 'This is meant to serve as the bio for user10.',
    profileViews: 4544,
    impressions: 2641
  },
  {
    firstName: 'fname11',
    lastName: 'lname11',
    username: 'username11',
    email: 'email11@gmail.com',
    hashedPassword: '$2b$10$ES1o.vWPyo1PtSqisI/KPeCGp/mdBMPsnrFXe.vMrggnZ6JKURkDq',
    picturePath: 'p11',
    gotchaDate: '2019-1-27',
    breed: 'breed11',
    location: 'location11',
    bio: 'This is meant to serve as the bio for user11.',
    profileViews: 12923,
    impressions: 6895
  },
  {
    firstName: 'fname12',
    lastName: 'lname12',
    username: 'username12',
    email: 'email12@gmail.com',
    hashedPassword: '$2b$10$75rE8nhG0UDWMMg1mNpO4.w6mVW3zQf2xqE.2mOmM7ieNXhB3kfRK',
    picturePath: 'p12',
    gotchaDate: '2016-12-17',
    breed: 'breed12',
    location: 'location12',
    bio: 'This is meant to serve as the bio for user12.',
    profileViews: 11868,
    impressions: 4399
  },
  {
    firstName: 'fname13',
    lastName: 'lname13',
    username: 'username13',
    email: 'email13@gmail.com',
    hashedPassword: '$2b$10$FyqTGwyZUYXLu.EvjlMyauqr1YPalSZQmBYeqEfsqApL5yNxv0Z4O',
    picturePath: 'p13',
    gotchaDate: '2021-2-21',
    breed: 'breed13',
    location: 'location13',
    bio: 'This is meant to serve as the bio for user13.',
    profileViews: 5563,
    impressions: 2992
  },
  {
    firstName: 'fname14',
    lastName: 'lname14',
    username: 'username14',
    email: 'email14@gmail.com',
    hashedPassword: '$2b$10$17kUEx7O0uf0Zh8TGA2SV.cjoPCRTkXKjfC/PTsG9h8TuVfZZu1fu',
    picturePath: 'p14',
    gotchaDate: '2012-7-9',
    breed: 'breed14',
    location: 'location14',
    bio: 'This is meant to serve as the bio for user14.',
    profileViews: 18360,
    impressions: 14590
  },
  {
    firstName: 'fname15',
    lastName: 'lname15',
    username: 'username15',
    email: 'email15@gmail.com',
    hashedPassword: '$2b$10$y9O.PReCUU6vEWcWBlqu7eD.3.ycQlXWyfidhAu/V1pnCo.DxFBT2',
    picturePath: 'p15',
    gotchaDate: '2019-5-11',
    breed: 'breed15',
    location: 'location15',
    bio: 'This is meant to serve as the bio for user15.',
    profileViews: 7145,
    impressions: 2885
  },
  {
    firstName: 'fname16',
    lastName: 'lname16',
    username: 'username16',
    email: 'email16@gmail.com',
    hashedPassword: '$2b$10$Ct8/h/53bbwUirBi4sn2mOZ2KNwDni9xkXlKYEpgpZk3wi1DdOPtC',
    picturePath: 'p16',
    gotchaDate: '2013-5-14',
    breed: 'breed16',
    location: 'location16',
    bio: 'This is meant to serve as the bio for user16.',
    profileViews: 14772,
    impressions: 11518
  },
  {
    firstName: 'fname17',
    lastName: 'lname17',
    username: 'username17',
    email: 'email17@gmail.com',
    hashedPassword: '$2b$10$DDv3M64WhzxYjCHmgbR73eSce9I5FpElg5bUrHLjyTJDQ3JK0ziLe',
    picturePath: 'p17',
    gotchaDate: '2019-6-6',
    breed: 'breed17',
    location: 'location17',
    bio: 'This is meant to serve as the bio for user17.',
    profileViews: 11183,
    impressions: 6987
  },
  {
    firstName: 'fname18',
    lastName: 'lname18',
    username: 'username18',
    email: 'email18@gmail.com',
    hashedPassword: '$2b$10$vmobsrs1LH9vhq5JaFgu.ejak7qqvoaKbnL6xd1DQOjXrFg4IH3Eu',
    picturePath: 'p18',
    gotchaDate: '2014-8-30',
    breed: 'breed18',
    location: 'location18',
    bio: 'This is meant to serve as the bio for user18.',
    profileViews: 7139,
    impressions: 4520
  },
  {
    firstName: 'fname19',
    lastName: 'lname19',
    username: 'username19',
    email: 'email19@gmail.com',
    hashedPassword: '$2b$10$M.0t90EBzZWxo9tKdPBi1eHKT98EUJRUfj4mVHHCM0VsiyiQ6QDmy',
    picturePath: 'p19',
    gotchaDate: '2014-1-27',
    breed: 'breed19',
    location: 'location19',
    bio: 'This is meant to serve as the bio for user19.',
    profileViews: 18497,
    impressions: 13449
  },
  {
    firstName: 'fname20',
    lastName: 'lname20',
    username: 'username20',
    email: 'email20@gmail.com',
    hashedPassword: '$2b$10$A1A1S2WEeogkPt8vSAuiBeGA5P9LJf/LtPg2cV20H0cyZNJYypMz.',
    picturePath: 'p20',
    gotchaDate: '2022-3-25',
    breed: 'breed20',
    location: 'location20',
    bio: 'This is meant to serve as the bio for user20.',
    profileViews: 11259,
    impressions: 5020
  },
  {
    firstName: 'fname21',
    lastName: 'lname21',
    username: 'username21',
    email: 'email21@gmail.com',
    hashedPassword: '$2b$10$B0Cv8IMpRArHHlcMRLQE7O92vV4OnuD992v1cwHxqYahbaCldBJNK',
    picturePath: 'p21',
    gotchaDate: '2015-9-26',
    breed: 'breed21',
    location: 'location21',
    bio: 'This is meant to serve as the bio for user21.',
    profileViews: 2198,
    impressions: 1120
  },
  {
    firstName: 'fname22',
    lastName: 'lname22',
    username: 'username22',
    email: 'email22@gmail.com',
    hashedPassword: '$2b$10$nrIpLfqOzKgLI7Md3vVHguRJkK8AsBqWxl16DVl/1i7LjBHeKjkcq',
    picturePath: 'p22',
    gotchaDate: '2020-9-2',
    breed: 'breed22',
    location: 'location22',
    bio: 'This is meant to serve as the bio for user22.',
    profileViews: 8539,
    impressions: 3039
  },
  {
    firstName: 'fname23',
    lastName: 'lname23',
    username: 'username23',
    email: 'email23@gmail.com',
    hashedPassword: '$2b$10$yhGDvEASV.LBE9Ec0OpKhOfhxnQMkQKliZIDnJroPQ5fTIV7lztOy',
    picturePath: 'p23',
    gotchaDate: '2015-9-19',
    breed: 'breed23',
    location: 'location23',
    bio: 'This is meant to serve as the bio for user23.',
    profileViews: 6902,
    impressions: 5433
  },
  {
    firstName: 'fname24',
    lastName: 'lname24',
    username: 'username24',
    email: 'email24@gmail.com',
    hashedPassword: '$2b$10$GlE0n2mYMQ4QP4WRhniTCO8LdfH/0fzrcB796942y5Fd6eIdvw61W',
    picturePath: 'p24',
    gotchaDate: '2012-7-28',
    breed: 'breed24',
    location: 'location24',
    bio: 'This is meant to serve as the bio for user24.',
    profileViews: 8657,
    impressions: 4097
  },
  {
    firstName: 'fname25',
    lastName: 'lname25',
    username: 'username25',
    email: 'email25@gmail.com',
    hashedPassword: '$2b$10$gW5bwuBBksHjW/7vaiDIEuKZfuObrZwXXYzvNE7JcRKtxIh2hinkK',
    picturePath: 'p25',
    gotchaDate: '2015-12-16',
    breed: 'breed25',
    location: 'location25',
    bio: 'This is meant to serve as the bio for user25.',
    profileViews: 10401,
    impressions: 8241
  },
  {
    firstName: 'fname26',
    lastName: 'lname26',
    username: 'username26',
    email: 'email26@gmail.com',
    hashedPassword: '$2b$10$j0VJNimjevyVfY2beJ0nLuzbWd/AB4AD6ZJqhNNlaC1idYDjKy9bK',
    picturePath: 'p26',
    gotchaDate: '2013-2-8',
    breed: 'breed26',
    location: 'location26',
    bio: 'This is meant to serve as the bio for user26.',
    profileViews: 18112,
    impressions: 7717
  },
  {
    firstName: 'fname27',
    lastName: 'lname27',
    username: 'username27',
    email: 'email27@gmail.com',
    hashedPassword: '$2b$10$/997aE2Q5kqV1Mui8Mgnn.GWhi7v9zs7O6gaIOHiB970NfO/S.Mx2',
    picturePath: 'p27',
    gotchaDate: '2021-9-26',
    breed: 'breed27',
    location: 'location27',
    bio: 'This is meant to serve as the bio for user27.',
    profileViews: 15556,
    impressions: 9422
  },
  {
    firstName: 'fname28',
    lastName: 'lname28',
    username: 'username28',
    email: 'email28@gmail.com',
    hashedPassword: '$2b$10$aGEB/26ga.60v8Qh1K/5DeVKrpziviWJIOh9kV6JaZ4EnDUrceKt2',
    picturePath: 'p28',
    gotchaDate: '2021-10-5',
    breed: 'breed28',
    location: 'location28',
    bio: 'This is meant to serve as the bio for user28.',
    profileViews: 2494,
    impressions: 1707
  },
  {
    firstName: 'fname29',
    lastName: 'lname29',
    username: 'username29',
    email: 'email29@gmail.com',
    hashedPassword: '$2b$10$Y.ZjwDsYTT0hUlVySDRw0eTh4ETugLFnqj8ja/DXQOC40K/biXfB6',
    picturePath: 'p29',
    gotchaDate: '2019-4-2',
    breed: 'breed29',
    location: 'location29',
    bio: 'This is meant to serve as the bio for user29.',
    profileViews: 11197,
    impressions: 4555
  },
  {
    firstName: 'fname30',
    lastName: 'lname30',
    username: 'username30',
    email: 'email30@gmail.com',
    hashedPassword: '$2b$10$E7Pp.IshIHB285l9OFbWpeu2vsZepfla8KZ7U2l7e8w9rmZ63YaNu',
    picturePath: 'p30',
    gotchaDate: '2020-1-11',
    breed: 'breed30',
    location: 'location30',
    bio: 'This is meant to serve as the bio for user30.',
    profileViews: 4476,
    impressions: 2450
  }
];

// script used to programatically generate demoUsers: 
// for (let i = 1; i <= 30; i++) { 
//   let profileViews = Math.floor(Math.random() * (20000 - 2000 + 1)) + 2000;
//   let impressions = Math.floor((Math.random() * (0.8 - 0.3) + 0.3) * profileViews)
//   let gotchaDate = `${Math.floor(Math.random() * (2022 - 2012 + 1)) + 2012}-${Math.floor(Math.random() * (12 - 1 + 1)) + 1}-${Math.floor(Math.random() * (30 - 1 + 1)) + 1}`;

//   demoUsers.push( 
//     { 
//       firstName: `fname${i}`, 
//       lastName: `lname${i}`, 
//       username: `username${i}`, 
//       email: `email${i}@gmail.com`, 
//       hashedPassword: bcrypt.hashSync(`password${i}`, 10), 
//       picturePath: `p${i}`, 
//       gotchaDate, 
//       breed: `breed${i}`, 
//       location: `location${i}`, 
//       bio: `This is meant to serve as the bio for user${i}.`, 
//       profileViews, 
//       impressions
//     }
//   ); 
// }; 
//
// console.log(demoUsers); 

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', demoUsers); 
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', { [Op.or]: demoUsers })
  }
};