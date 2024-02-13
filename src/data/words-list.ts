export const wordsList: string[] = [
  "ثانوي",
  "أجداد",
  "جدتات",
  "حوادث",
  "وزارة",
  "أمهات",
  "زيتون",
  "كمثرى",
  "جوافة",
  "مانجو",
  "مانجو",
  "ليمون",
  "بطاطس",
  "بامية",
  "طماطم"
];

export const day = (): number => {
  const TODAY = new Date();
  const start = new Date(2024, 1, 11);
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
