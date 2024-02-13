export const wordsList: string[] = [
  "باأنك",
  "خاتمه",
  "فاتكم",
  "إغاثة",
  "لاتقم",
  "وطاقم",
  "عــام",
  "رفضتي",
  "مظروف",
  "كوبون",
  "بسلطة",
  "بناؤه",
  "جبيرة",
  "رمسيس",
  "انفقت",
  "برميه",
  "ادخلت",
  "راجيش",
  "ايريس",
  "محجوب",
  "إطالة",
  "وأعثر",
  "نزلاء",
  "إبدئي",
  "وخائف",
  "فيفان",
  "لوسون"
];

export const day = (): number => {
  const TODAY = new Date();
  const start = new Date(2022, 0, 27);
  const diff = Number(TODAY) - Number(start);
  return Math.floor(diff / (1000 * 60 * 60 * 24));
};

export const getWordOfTheDay = (): string => {
  let theDay = day();
  while (theDay > wordsList.length) {
    theDay--;
  }
  return wordsList[theDay];
};
