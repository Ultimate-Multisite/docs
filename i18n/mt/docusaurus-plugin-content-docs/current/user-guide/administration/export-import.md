---
title: Eksport u Import
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Export & Import

Ultimate Multisite 2.9.0 aggiunge un unico strumento di **Export & Import** sotto **Tools > Export & Import**. Usalo quando ti serve impacchettare un sito WordPress come file ZIP, ripristinare quel ZIP o spostare un sito tra installazioni Ultimate Multisite e single-site WordPress compatibili.

## Permessi necessari

Devi accedere come amministratore che ha accesso al menu **Tools** di WordPress sul sito che stai esportando o importando. Su una rete multisite, usa un account di amministratore della rete quando esporti o importi sottositi utilizzando gli strumenti Ultimate Multisite a livello di rete.

I download ZIP dell'esportazione vengono serviti tramite un endpoint di download autenticato, quindi tieni attiva la sessione admin finché il download non è terminato e non condividere pubblicamente le URL di download generate.

## Esportare un sito in un ZIP

1. Nell'admin di WordPress del sito che vuoi copiare, vai su **Tools > Export & Import**.
2. Apri l'area di esportazione e scegli il sito che vuoi impacchettare.
3. Seleziona il contenuto opzionale da includere, come caricamenti (uploads), plugin e temi, quando queste opzioni sono disponibili.
4. Avvia l'esportazione e aspetta che il processo finisca. I siti grandi potrebbero aver bisogno di terminare in background prima che il ZIP sia pronto.
5. Scarica il ZIP finito dall'elenco delle esportazioni.

Tieni il ZIP in una posizione sicura. Può contenere contenuti del sito, impostazioni, file multimediali e asset di codice selezionati.

## Cosa include l'esportazione

Un ZIP di esportazione può includere:

- Il contenuto del database e la configurazione del sito selezionato.
- I file multimediali caricati se sono inclusi i caricamenti (uploads).
- Plugin e temi se queste opzioni sono selezionate.
- I metadati di importazione utilizzati dallo strumento Export & Import per ricostruire il sito sull'installazione di destinazione.

Il-għadd ta' dimensione tal-ZIP jikkontrolla l-importazzjoni ta' media, il-pluginijiet u temi li saltu, u l-dimizzjoni tal-tabeli tal-database tal-sitemap.

## Importa siti min ZIP

1. Idħol għal **Tools > Export & Import** fuq sit WordPress destinazzjonat.
2. Iftah il-applikazzjoni ta' import u l-upload il-ZIP li għandu jkun kunsidrat mill-Export & Import tool.
3. Iscrivi URL sostitut tal-sit jekk is-sit għandu jippurti indirizz newVal, jew aħjar il-field blakk biex tħalli l-URL oriġinali.
4. Iżgħar se tieħiel tal-ZIP li uploadat wara li l-importazzjoni tippurti.
5. Klikka fuq **Begin Import**.
6. Monitorja l-importazzjoni pendenti fin ma tiġi konklu. Uża **Cancel Import** biss jekk għandek uħud biex tneqqas il-proċess qabel li jkonklu.
7. Rivisja is-sit li importat qabel ma tħalli l-traffiku normali jew l-aċċess tal-klijenti.

Fuq installazzjoni WordPress ta' sit waħda, l-importa tal-ZIP tistabbilixxi is-sit الحالي b'is-sit li importat. Iżgħar backup kumpre fuq is-sit target qabel ma tibda, u evita li tibda importi multipli għas-sit isiem fl-istess ħin.

## Limitazzjonijiet u nota kompatibilitaj



יכולות העלאות גדולות מאוד או ספריות מדיה יכולות לייצר קבצי ZIP גדולים. ודא את מגבלות ההעלאה של PHP, מגבלות הביצוע, שטח דיסק, זיכרון והגדרות זמן ריצה של השרת לפני ייצוא או ייבוא של אתרים גדולים.
ספריות מדיה גדולות מאוד עשויות להזדקק להעברה במהלך חלון תחזוקה עם תנועה נמוכה.
ההתקנה של WordPress היעד צריכה להריץ גרסאות תואמות של WordPress, PHP, Ultimate Multisite, plugin וtheme.
ייבוא באתר בודד מחליף את האתר היעד. הוא אינו כלי למיזוג (merge tool).
העברות מ-Multisite לאתר בודד ומאתר בודד למ-Multisite נתמכות רק כאשר הסביבה היעד יכולה להריץ את הplugins, themes, URLs והרכיבים הנדרשים של Ultimate Multisite מהאתר המיוצא.
שמור על קובץ הZIP פרטי. הוא עשוי להכיל תוכן מסד נתונים, קבצים שהועלו ופרטי הגדרות מאתר המיוצא.

עבור זרימות ייצוא ברמת הרשת ישנות יותר, ראה [Site Export](/user-guide/administration/site-export).
