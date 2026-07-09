---
title: 'Örnélküli 4: Niszéktémplatumok létrehozása'
sidebar_position: 5
_i18n_hash: 3ade990de5fd404a7f09a9d42d7535ee
---
# 4. Lesson: Nisza Alapú Oldaltípusok Létrehozása {#lesson-4-building-niche-templates}

Az oldaltípusok (templates) a nišza alapú értékajánlatának magját képezik. Egy fitness stúdió tulajdonosa, aki regisztrálódik, és lát egy olyan oldalt, amely már fitness weboldalnak tűnik – osztályrendelőkkel, edzői profilokkal és megfelelő képekkel – sokkal valószínűbben marad, mint egy olyan, aki egy üres vászonnal találkozik.

## Hol maradtunk? {#where-we-left-off}

Egy működő FitSite hálózatot hoztunk létre az Ultimate Multisite telepítésével és konfigurálásával. Most építjük azokat az oldaltípusokat, amelyek miatt a FitSite úgy érzi, mintha kifejezetten fitness vállalkozások számára készült volna.

## Miért fontosak a Nisza Oldaltípusok? {#why-niche-templates-matter}

Az általános oldaltípusok kényszerítik az ügyfeleket, hogy elvégezzék a nehéz munkát: meg kell derülniük, milyen oldalakre van szükségük, milyen tartalomstruktúra működik, és hogyan kell, hogy legyen megjelenése az iparának. A nišza oldaltípusok eliminálják ezt az akadályt.

Egy fitness stúdió tulajdonosnak, aki a FitSite-ra regisztrálódik, látnia kell:

- Egy kezdőlapot, amely egy fitness stúdió weboldalának tűnik
- Előre létrehozott oldaltípusokat az osztályoknak, az ütemrendeknek, az edzőknek és az áraknak
- Képeket és helyettes tartalmat, amelyek illeszkednek az iparázához
- Egy dizájnnal, amely professzionális és a fitness iparázónak megfelelő márkát sugall

Ők kitöltik a saját adataikat. Nem kezdnek ki kézzel.

## Tervezése a Oldaltípusok {#planning-your-templates}

Mielőtt építeni, eldöntse, milyen oldaltípusokat szeretne kínálni. A FitSite-hoz háromot fogunk létrehozni:

### Oldaltípus 1: Stúdió Alapvető (Studio Essential) {#template-1-studio-essential}

Kisebb stúdióknak és személyi edzőknek.

- **Kezdőlap** hősöképpel, osztálykiemelkedősségekkel és cselekvésre ösztönző elemmel
- **Rólunk** oldal a stúdió történetéről és küldetéséről
- **Osztályok** oldal az ütemrendelési felépetéssel
- **Edzők** oldal profilkártyákkal
- **Kapcsolat** oldal helyszíneképével és űrlapokkal
- **Tiszta, modern dizájn** fitness-megfelelő színekkel

### Oldaltípus 2: Gym Pro {#template-2-gym-pro}

Megtelepedett fitness edzőtermeknek, több szolgáltatással.

- Minden, ami a Stúdió Alapvető oldaltípusban van, plusz:
- **Tagság** oldal az árak táblázatával
- **Galéria** oldal az edzőterem fotóihoz
- **Blog** szekció fitness tippekre és hírekre
- **Tanúsítványok** szekció a kezdőlapon
- **Jobb kiemelt márkázási** lehetőségek

### Oldaltípus 3: Fitness Lánc (Fitness Chain) {#template-3-fitness-chain}

Multi-lokációjú működésnek.

- Minden, ami a Gym Pro oldaltípusban van, plusz:
- **Helyszínek** oldal több létesítmény listázójával
- **Franchise/helyszín** aloldaltípus
- **Centralizált márkázás** helyszínre specifikus adatokkal
- **Stabkönyv** több helyszínen keresztül

## Oldaltípus Oldalépítése {#building-a-template-site}

Az Ultimate Multisite-ban egy oldaltípus egyszerűen egy WordPress oldala, amelyet úgy konfiguráltunk, hogy az új ügyfél oldaltípusai így nézzenek ki. Így hozható létre:

### 1. Lépés: A Oldaltípus Oldal Létrehozása {#step-1-create-the-template-site}

1. Navigáljon a **Sites > Add New** menüpontra a hálózat admin felületén.
2. Létrehoz egy oldaltípus oldalt, nevével `template-studio-essential`.
3. Ez az oldal lesz a működő vászonja.

### 2. Lépés: A Téma Telepítése és Konfigurálása {#step-2-install-and-configure-the-theme}

Váltás a oldaltípus oldal admin felületére, és:

1. Aktiváljon egy fitness vállalkozások számára megfelelő témát.
2. Konfigurálja a téma beállításait, színeit és tipográfiáját.
3. Állítsa be a fejléket és láblépéseket fitness-megfelelő navigációval.

:::tip Téma Kiválasztása
Válasszon egy olyan témát, amely elég rugalmas, hogy fitness-hez illeszkedjen, de nem olyan bonyolult, hogy az ügyfelei nem tudják kezelni. Témák, mint az Astra, GeneratePress vagy a Kadence jól működnek, mert könnyűek, testreszabhatóak és jól támogatottak.
:::

### 3. Lépés: Az Oldalak Létrehozása {#step-3-create-the-pages}

Építse ki az összes oldaltípusot:

- **Helyettes tartalom**, amely természetesen hangzik a fitness iparázónak ("Welcome to [Studio Name]" nem "Lorem ipsum")
- **Helyettes képek** ingyenes fotóbankokból, amelyek fitness tevékenységeket mutatnak
- **Funkcionális felépítések** az oldaltípus szerkesztővel vagy blokkoldal szerkesztővel

A helyettes tartalmat, ahol lehetséges, utasításként használja. Ne használjon általános töltő szöveget, hanem írjon tartalmat, például: "Cserélje ki ezt egy rövid leírással a stúdiójáról és arról, ami különleges. Említené az edző filozófiáját, az évek számát, vagy azt, amit az ügyfelek várhatnak."

### 4. Lépés: A Pluginok Konfigurálása {#step-4-configure-plugins}

Telepítse és aktiválja azokat a pluginokat, amelyekre a fitness stúdióknak szüksége van:

- Egy foglalási vagy ütemrendelési plugin (ha az ügyi tervének megfelel)
- Egy kapcsolatfelvételi űrlap plugin
- Egy SEO plugin (előkonfigurált fitness-releváns alapértelmezésekkel)

### 5. Lépés: Oldaltípusként Jelölés {#step-5-mark-as-template}

1. Navigáljon a **Ultimate Multisite > Sites** menüpontra.
2. Szerkésbolja a oldaltípus oldalt.
3. Aktiválja az **Oldaltípus (Site Template)** kapcsolót.

Ismételje meg ezt a folyamatot minden olyan oldaltípusra, amelyet kínálni szeretne.

## Oldaltípus Minőségellenőrző Lista {#template-quality-checklist}

Mielőtt egy oldaltípusot elérhetővé teszi, ellenőrizze:

- [ ] Minden oldal megfelelően töltő be és professzionális
- [ ] A helyettes tartalom hasznos és nišza alapú
- [ ] A képek megfelelőek és megfelelően licenceltek
- [ ] A mobilre válaszügy működik minden oldalon
- [ ] A navigáció logikus és teljes
- [ ] A kapcsolatfelvételi űrlapok működnek
- [ ] Nincs törött link vagy hiányzó eszköz
- [ ] Az oldal betöltési sebessége elfogadható

## A FitSite Hálózata Árnyéka {#the-fitsite-network-so-far}

```
FitSite Hálózat
├── WordPress Multisite (aldomain mód)
├── Ultimate Multisite (konfigurált)
├── Hosting wild card SSL-lel
├── Domain mapping konfigurálva
├── Oldaltípusok
│   ├── Stúdió Alapvető (kisebb stúdióknak, edzőknek)
│   ├── Gym Pro (megtelepedett edzőtermeknek)
│   └── Fitness Lánc (multi-lokációjú)
└── Kész a tervkonfigurációra (következő lecke)
```

## Amit Építettünk Ezen a Lecskén {#what-we-built-this-lesson}

- **Három nišza alapú oldaltípus**, különböző fitness vállalkozási méretekhez
- **Fitness-megfelelő tartalom és képek**, amelyek miatt a platform úgy érzi, mintha kifejezetten készült volna
- **Utasítási helyettes tartalom**, amely a vásárlókat a testreszabáson keresztül vezet
- **Egy minőségellenőrző lista**, biztosítva, hogy az oldaltípusok gyártásra készen álljanak

---

**Következő:** [Lesson 5: Tervek Dizájnálása](lesson-5-plans) – itt létrehozunk olyan termékcsoportokat, amelyek illeszkednek ahhoz, ahogyan a fitness vállalkozások ténylegesen működnek.
