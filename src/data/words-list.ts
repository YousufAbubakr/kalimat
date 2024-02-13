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
  "طماطم",
  "عاصمة",
  "ألوان",
  "أسواق",
  "فاكهة",
  "فواكه",
  "الجري",
  "الرقص",
  "هواية",
  "كانوا",
  "عندها",
  "عندنا",
  "عندكم",
  "عندهم",
  "واحدة",
  "اثنان",
  "اثنين",
  "الرسم",
  "مرحوم",
  "الحاج",
  "فعلنا",
  "فعلتم",
  "فعلوا",
  "أرادت",
  "أردنا",
  "أردتم",
  "الرفض",
  "الأكل",
  "الشرب",
  "العمل",
  "الفعل",
  "الحفظ",
  "الكون",
  "القول",
  "الموت",
  "العيش",
  "السفر",
  "ألتحق",
  "خمسون",
  "سبعون",
  "تسعون",
  "عشرون",
  "شركات",
  "بحاجة",
  "تأخرت",
  "الجذر",
  "الوزن"
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
  const rndInt = Math.floor(Math.random() * 61) + 1
  return wordsList[rndInt];
};
