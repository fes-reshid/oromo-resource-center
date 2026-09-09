// Jumu'ah (Friday) prayer starts at the same time as the fixed Zuhr Iqama,
// since it takes Zuhr's place that day. Daily Salah/Iqama times are no
// longer a static table — see src/lib/livePrayerTimes.ts, which
// calculates them live for Mount Cottrell, VIC. Editable via the CMS at
// src/content/azan.json.
import azanContent from '@/content/azan.json';

export const jumuahTime = azanContent.jumuahTime;
