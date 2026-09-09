// Dhikr recited after the five daily prayers (Salaah), Arabic with Oromo
// translation. Source: Hisnul Muslim (Fortress of the Muslim) by
// Sa'id bin Ali bin Wahf Al-Qahtani, chapter "Al-Adhkaar ba'da as-Salaam
// min as-Salaah" — the same text used across the Islamic Society of
// Victoria and Hisnul Muslim apps in this project.
export interface DhikrSlide {
  id: number;
  label: string;
  arabic: string;
  oromo: string;
}

export const afterPrayerDhikr: DhikrSlide[] = [
  {
    id: 1,
    label: 'Astagfirullah (x3) & Allahumma Antas-Salam',
    arabic:
      '((أَسْتَغْفِرُ اللَّهَ (ثَلاَثَاً) اللَّهُمَّ أَنْتَ السَّلاَمُ، وَمِنْكَ السَّلاَمُ، تَبَارَكْتَ يَا ذَا الْجَلاَلِ وَالْإِكْرَامِ)).',
    oromo:
      '"Yaa Allaah naaf araarami" si’a sadii jedha. Ergasii "yaa Rabbi situ nagaadha. Nageenyi si biraa argamas. Yaa abbaa guddinaafi kabajaa khayriin kee baay’ateera."',
  },
  {
    id: 2,
    label: 'La ilaha illallah (Tahlil)',
    arabic:
      '((لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ [ثلاثاً]، اللَّهُمَّ لاَ مَانِعَ لِمَا أَعْطَيْتَ، وَلاَ مُعْطِيَ لِمَا مَنَعْتَ، وَلاَ يَنْفَعُ ذَا الْجَدِّ مِنْكَ الجَدُّ)).',
    oromo:
      '"Dhugaan gabbaramaan Rabbiin malee hin jiru. Inni tokkicha hiriyaa hin qabneedha. Mootummaan kan isaati. Faaruunis kan Isaati. Inni waan hundaa danda’aadha. Yaa Rabbi waan ati kennite dhorgataan hin jiru. Waan ati dhorgatte immoo kennaan hin jiru. Abbaa qabeenyaa adabbii kee irraa qabeenyi isaa hin fayyadu."',
  },
  {
    id: 3,
    label: 'La ilaha illallah (Mukhlisin)',
    arabic:
      '((لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ، وَلَهُ الْحَمدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ، وَلاَ نَعْبُدُ إِلاَّ إِيَّاهُ, لَهُ النِّعْمَةُ وَلَهُ الْفَضْلُ وَلَهُ الثَّنَاءُ الْحَسَنُ، لاَ إِلَهَ إِلاَّ اللَّهُ مُخْلِصِينَ لَهُ الدِّينَ وَلَوْ كَرِهَ الكَافِرُونَ)).',
    oromo:
      '"Dhugaan gabbaramaan Rabbiin malee hin jiru. Inni tokkicha hiriyaa hin qabneedha. Mootummaan kan isaati. Faaruunis kan Isaati. Inni waan hunda irratti danda’aadha. Tooftaafi humni Rabbiin biraa malee hin argamu. Dhugaan gabbaramaan Allaah malee hin jiru. Isa malee hin gabbarru. Qananiin kan isaati. Tollis kan Isaati. Faaruun gaariinis kan isaati. Dhugaan gabbaramaan Isa malee hin jiru. Odoma kaafiroonni jibbanuu keessaan qulqulleessaa [kana ragaa baana]."',
  },
  {
    id: 4,
    label: 'Subhanallah, Alhamdulillah, Allahu Akbar (x33)',
    arabic:
      '((سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَاللَّهُ أَكْبَرُ (ثلاثاً وثلاثين) لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ)).',
    oromo:
      '"Rabbiin qulqullina [isaan malu qulqullaa’e]; Faaruun kan Rabbiiti. Rabbiin waan hundarra guddate." Si’a soddomii sadii jedha. "Dhugaan gabbaramaan Rabbiin malee hin jiru. Inni tokkicha hiriyaa hin qabneedha. Mootummaan kan isaati. Faaruunis kan Isaati. Inni waan hundaa danda’aadha."',
  },
  {
    id: 5,
    label: "Ayatul Kursi",
    arabic: 'آية الكرسي',
    oromo:
      '"Rabbiin Isa malee haqaan gabbaramaan hin jiru. Inni jiraataadha; waan hundaan dhaabbataadha. Mugaatiis ta’ee hirribni Isa hin qabatu. Wanti samii keessa jiruufi wanti dachii keessa jiru hundi kan Isaati. Inni hayyama Isaatiin ala Isa biratti araarsu eenyuma? Waan fuuldura isaaniitiifi waan duuba isaaniis ni beeka. Beekumsa Isaa irraas waan Inni fedhetti malee hin marsanu. Kursiin Isaa samiifi dachii irra bal’ateera. Isaan lamaan tiksuun Isa hin dadhabsiisu. Inni ol ta’aa, guddaadha." Salaata hunda booda jedhama.',
  },
  {
    id: 6,
    label: 'La ilaha illallah (x10 after Fajr & Maghrib)',
    arabic:
      '((لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ)) عَشْرَ مَرّاتٍ بَعْدَ صَلاةِ',
    oromo:
      '"Dhugaan gabbaramaan Rabbiin malee hin jiru. Inni tokkicha hiriyaa hin qabneedha. Mootummaan kan Isaati. Faaruunis kan Isaati. Ni jiraachisa ni ajjeesas. Inni waan hunda irratti danda’aadha." Booda salaata Maghribaafi Subhii si’a kudhan jedhama.',
  },
  {
    id: 7,
    label: 'Du’aa’ii after Fajr',
    arabic:
      '((اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْماً نافِعاً، وَرِزْقاً طَيِّباً، وَعَمَلاً مُتَقَبَّلاً)) بَعْدَ السّلامِ مِنْ صَلاَةِ الفَجْرِ.',
    oromo:
      '"Yaa Rabbi ani beekumsa fayyadu, soorata gaariifi hojii qeebalamaan si kadha." Booda salaata Maghribaa irraa salaamtaa bahee jedha.',
  },
];
