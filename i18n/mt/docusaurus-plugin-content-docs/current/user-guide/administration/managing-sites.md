---
title: Id-Diskussjoni tal-Siti
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Aħjar l-Sitji

Is-sitji (o subsitji) huma l-qalb tal-bizness tiegħek WaaS. Ultimate Multisite għandu 3 tipijiet ta sitji:

- **Customer-owned** — Sitji li jappartjenu lil kliemti speċifi
- **Site Templates** — Sitji predefiniti li il-kliemti jistgħu jgħażlu bħala punkt aħħar
- **Main Site** — Is-sitju primari tal-rete tiegħek

## Viewing Sites

Naviga għal **Ultimate Multisite → Sites** biex tara kull subsitji fil-rete tiegħek. Kulle sitj huwa mmarkat b tip u tista' tfiltra b All Sites, Customer-Owned, Templates, jew Pending.

![Sites list page](/img/admin/sites-list.png)

## Adding a New Site

Iċ클ik fuq buttan **Add Site** biex tgħmli sitj جديد. Tista' tiddir fornit:

- **Site Title** — Il-isim tal-sitj جديد
- **Site URL** — Id-domain/path għall-sitj
- **Site Type** — Je jkun sitj ta kliemt, template, jew sitj regolari

L-opzjoni **Copy Site** tista' tkun biex tgħmli sitj جديد bbażi fuq template esistenti. Meta hija aktiva, tista' tagħżel qabel li u għandu jkun bbażi. Assigurah li **Copy Media on Duplication** hija aktiva biex inklużi l-file media.

## Managing an Existing Site

Iċ클ik fuq **Manage** fuq sitj kulla biex tuftahja l-paġna **Edit Site**. Hemm fejn tista' tikkung:

### Basic Information

Is-isim tal-sitj, tipu, site ID, u deskrizzjoni. Tista' tqabbilha wkoll id-domain mappat, is-sħubija (membership) assoċjata, u l-account tal-kliemt li jappartien lil sitj.

### Site Options

Konfigura l-kapabilitajiet u l-limitijiet tal-sitj:

- **Visit limits** — Il-numru massimu ta żiżizi għas-sitji
- **User account limits** — Limitijiet per ruolo tal-utenti
- **Disk space** — Quota speċali għall-sitj
- **Custom domain** — Aktiva mappatura tal-domain għal sitj dan
- **Plugin and theme visibility** — Kontrolli li quali plugin u temi huma magħrufin, mhux magħrufin, jew predefiniti

בי default, האתרים עוקבים אחרי המגבלות שהוגדרו ברמת החברות (membership level). הגדרת מגבלות לרמת האתר תעדיף את הגדרות החברות.

### קישורים (Associations)

מתחת לאפשרויות האתר תמצא מידע על:

- **Mapped domains** (דומיינים מקושרים) הקשורים לאתר
- **Membership** (חברות) שאליו שייך האתר
- **Customer account** (חשבון לקוח) המקושר לאתר

### ה-Sidebar הימני (Right Sidebar)

בצד ימין תוכל:

- **Enable/disable the site** (להפעיל/לכבות את האתר) באמצעות כפתור מתג
- **Change the site type** (לשנות את סוג האתר) או להקצות מחדש בעלות (ownership)
- **Set a site image/thumbnail** (להגדיר תמונה/תמונת קטנה לאתר) (מוצגת על ה-frontend עבור תבניות אתרים)
- **Delete the site** (למחוק את האתר) לצמיתות

:::warning
מחיקת אתר אינה ניתנת לביטול. האתר וכל התוכן שלו יימחקו לצמיתות.
:::
