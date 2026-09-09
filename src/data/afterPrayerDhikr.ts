// Dhikr recited after the five daily prayers (Salaah), Arabic with Oromo
// translation. Source: Hisnul Muslim (Fortress of the Muslim) by
// Sa'id bin Ali bin Wahf Al-Qahtani, chapter "Al-Adhkaar ba'da as-Salaam
// min as-Salaah" — the same text used across the Islamic Society of
// Victoria and Hisnul Muslim apps in this project. Editable via the CMS
// at src/content/after-prayer-dhikr.json.
import dhikrData from '@/content/after-prayer-dhikr.json';

export interface DhikrSlide {
  id: number;
  label: string;
  arabic: string;
  oromo: string;
}

export const afterPrayerDhikr: DhikrSlide[] = dhikrData.dhikr;
