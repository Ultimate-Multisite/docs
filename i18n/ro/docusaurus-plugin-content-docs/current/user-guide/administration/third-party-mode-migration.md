---
title: Migrare în Modul Terță Parte
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migrarea în Modul de Terță Parte

Superdav AI Agent v1.12.0 modifică modul în care sunt gestionate abilitățile de terță parte. **Modul de Terță Parte (Third-party mode) folosește acum implicit setarea "auto"**, permițând integrarea nativă cu Abilities API în WordPress pe versiunile 7.0+ fără configurare manuală.

## Ce s-a schimbat? {#what-changed}

### Înainte de v1.12.0 {#before-v1120}

Abilitățile de terță parte necesitau o configurare manuală:

- Trebuia să activați explicit "Modul de Terță Parte" (third-party mode)
- Abilitățile erau încărcate dintr-un registru personalizat
- Integrarea cu WordPress Abilities API era opțională
- Modul Legacy (vechi) era setarea implicită

### După v1.12.0 {#after-v1120}

Abilitățile de terță parte funcționează automat:

- Modul de Terță Parte folosește implicit setarea "auto"
- Abilitățile se integrează nativ cu WordPress Abilities API
- Nu mai este necesară configurare manuală pe WordPress 7.0+
- Modul Legacy este tot disponibil pentru versiunile mai vechi de WordPress

## Cine este afectat? {#who-is-affected}

### Instalări Noi (WordPress 7.0+) {#new-installations-wordpress-70}

**Nu este necesară nicio acțiune.** Modul de Terță Parte este setat automat pe "auto", iar abilitățile funcționează "out of the box" (gata de utilizare).

### Instalări Existente {#existing-installations}

**Setările dumneavoastră sunt păstrate.** Dacă folosiți:

- **Modul Legacy**: Rămâneți în Modul Legacy (fără schimbări)
- **Modul de Terță Parte Manual**: Rămâneți în modul manual (fără schimbări)
- **Modul Auto**: Continuați cu modul auto (fără schimbări)

### Versiuni WordPress Înainte de 7.0 {#wordpress-versions-before-70}

**Modul Legacy este tot disponibil.** Dacă folosiți WordPress 6.x sau o versiune mai veche:

- Modul de Terță Parte folosește implicit setarea "legacy"
- Puteți activa manual Modul de Terță Parte, dacă doriți
- Actualizați-vă la WordPress 7.0+ pentru a folosi Abilities API nativ

## Înțelegerea Modurilor {#understanding-the-modes}

### Modul Auto (Setarea implicită nouă) {#auto-mode-new-default}

**Modul Auto** folosește integrarea nativă cu WordPress Abilities API:

- Abilitățile sunt înregistrate prin hook-uri WordPress
- Compatibilitate completă cu Abilities API WordPress 7.0+
- Descoperire automată a abilităților de terță parte
- Nu este necesară configurare manuală

**Când să îl folosiți**: WordPress 7.0+ cu abilități de terță parte

### Modul Manual {#manual-mode}

**Modul Manual** necesită o configurare explicită:

- Specificați ce abilități de terță parte trebuie încărcate
- Utile pentru testare sau pentru încărcarea selectivă a abilităților
- Necesită editarea fișierelor de configurare
- Mai mult control, dar și mai multă configurare

**Când să îl folosiți**: Testare, încărcare selectivă a abilităților sau configurații personalizate

### Modul Legacy {#legacy-mode}

**Modul Legacy** folosește sistemul vechi de abilități de terță parte:

- Registru de abilități personalizat (nu Abilities API WordPress)
- Compatibil cu versiunile mai vechi de WordPress
- Fără integrare nativă WordPress
- Depreciat, dar încă suportat

**Când să îl folosiți**: WordPress 6.x sau mai vechi, sau când aveți nevoie de compatibilitate Legacy

## Verificarea Modului Curent {#checking-your-current-mode}

### Prin Dashboard-ul Admin {#via-admin-panel}
1. Mergeți la **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Căutați setarea **Third-Party Mode**
3. Veți vedea modul curent și opțiunile de schimbare

### Prin Cod {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', sau 'legacy'
```

## Schimbarea Modului {#changing-your-mode}

### Comutarea în Modul Auto {#switch-to-auto-mode}

Dacă sunteți pe WordPress 7.0+ și doriți să folosiți modul auto:

1. Mergeți la **Superdav AI Agent** → **Settings**
2. Găsiți **Third-Party Mode**
3. Selectați **Auto (WordPress Abilities API)**
4. Apăsați **Save**

Superdav AI Agent va descoperi și va înregistra automat abilitățile de terță parte.

### Comutarea în Modul Manual {#switch-to-manual-mode}

Dacă doriți să controlați manual ce abilități se încarcă:

1. Mergeți la **Superdav AI Agent** → **Settings**
2. Găsiți **Third-Party Mode**
3. Selectați **Manual**
4. Apăsați **Save**
5. Editați fișierul de configurare pentru a specifica ce abilități trebuie încărcate

### Comutarea în Modul Legacy {#switch-to-legacy-mode}

Dacă aveți nevoie de compatibilitate Legacy:

1. Mergeți la **Superdav AI Agent** → **Settings**
2. Găsiți **Third-Party Mode**
3. Selectați **Legacy**
4. Apăsați **Save**

## Beneficiile Modului Auto {#benefits-of-auto-mode}

### Descoperire Automată {#automatic-discovery}

Abilitățile sunt descoperite automat din:

- Plugin-urile instalate
- Tema activă
- Plugin-urile must-use
- Plugin-urile drop-in

Nu este necesară înregistrare manuală.

### Integrare Nativă {#native-integration}

Abilitățile se integrează cu WordPress Abilities API:

- Consistent cu nucleul WordPress
- Funcționează cu admin-ul WordPress
- Compatibil cu alte plugin-uri care folosesc Abilities API
- Rezistent la viitor, pe măsură ce WordPress evoluează

### Management Simplificat {#simplified-management}

- Nu există fișiere de configurare de editat
- Nicio înregistrare manuală a abilităților
- Controalele de Vizibilitate a Abilităților funcționează automat
- Notificările din admin vă avertizează despre abilitățile neclasificate

### Performanță Îmbunătățită {#better-performance}

- Abilitățile sunt cache-uite
- Sunt încărcate în mod lazy (la nevoie)
- Optimizate pentru WordPress 7.0+

## Calea de Migrare {#migration-path}

### Dacă sunteți pe WordPress 6.x {#if-youre-on-wordpress-6x}

1. **Actualizați-vă la WordPress 7.0+** (când sunteți pregătiți)
2. **Actualizați Superdav AI Agent** la v1.12.0+
3. **Schimbați Modul de Terță Parte în Auto** (opțional; modul legacy funcționează tot)
4. **Revizuiți vizibilitatea abilităților** pentru a vă asigura că controlul accesului este corect

### Dacă sunteți pe WordPress 7.0+ {#if-youre-on-wordpress-70}

1. **Actualizați Superdav AI Agent** la v1.12.0+
2. **Verificați că Modul de Terță Parte este setat pe Auto** (ar trebui să fie implicit)
3. **Revizuiți vizibilitatea abilităților** pentru a vă asigura că controlul accesului este corect
4. **Testați abilitățile de terță parte** pentru a confirma că funcționează

## Depanșare {#troubleshooting}

### Abilitățile nu se încarcă în modul auto {#abilities-arent-loading-in-auto-mode}

- Verificați că sunteți pe WordPress 7.0+
- Asigurați-vă că Modul de Terță Parte este setat pe "Auto"
- Verificați dacă plugin-ul care oferă abilitatea este activ
- Verificați log-urile de eroare WordPress pentru erori de înregistrare

### Vreau să păstrez modul legacy {#i-want-to-keep-legacy-mode}

- Mergeți la **Settings** → **Third-Party Mode**
- Selectați **Legacy**
- Apăsați **Save**
- Modul Legacy va continua să funcționeze

### Abilitățile mele personalizate nu apar {#my-custom-abilities-arent-showing}

- Verificați că sunt înregistrate prin hook-uri WordPress
- Asigurați-vă că implementează corect Abilities API
- Revizuiți log-urile de eroare WordPress
- Folosiți pagina admin **Ability Visibility** pentru a vedea toate abilitățile înregistrate

### Primesc notificări "abilitate neclasificată" {#im-getting-unclassified-ability-notices}

- Acest lucru este normal pentru abilitățile noi de terță parte
- Revizuiți-le și clasificați-le în notificarea din admin
- Vedeți **Ability Visibility** pentru detalii despre clasificare

## Compatibilitatea cu Versiunile Vechi {#backward-compatibility}

### Configurațiile Existente {#existing-configurations}

Dacă aveți configurații existente pentru abilități de terță parte:

- **Modul Legacy**: Configurația dumneavoastră continuă să funcționeze
- **Modul Manual**: Configurația dumneavoastră continuă să funcționeze
- **Modul Auto**: Configurația dumneavoastră este ignorată (modul auto preia controlul)

Pentru a păstra configurația personalizată, rămâneți în modul Manual sau Legacy.

### Cronologia Deprecierii {#deprecation-timeline}

- **v1.12.0**: Modurile Legacy și Manual sunt încă complet suportate
- **v1.13.0+**: Modul Legacy ar putea afișa notificări de depreciere
- **v2.0.0**: Modul Legacy ar putea fi eliminat (De stabilit)

## Cele mai bune practici {#best-practices}

### Pentru Instalări Noi {#for-new-installations}

- Folosiți Modul Auto (este setarea implicită)
- Lăsați Superdav AI Agent să descopere abilitățile automat
- Folosiți Ability Visibility pentru a controla accesul

### Pentru Instalări Existente {#for-existing-installations}

- Actualizați-vă la WordPress 7.0+ când este posibil
- Comutați în Modul Auto pentru un management simplificat
- Revizuiți și clasificați abilitățile folosind Ability Visibility

### Pentru Abilități Personalizate {#for-custom-abilities}

- Înregistrați abilitățile prin hook-uri WordPress (Abilities API)
- Evitați registrele personalizate de abilități
- Testați pe WordPress 7.0+ cu Modul Auto

## Pași Următori {#next-steps}

1. **Verificați versiunea WordPress**: Asigurați-vă că sunteți pe 7.0+ pentru modul Auto
2. **Revizuiți Modul de Terță Parte**: Mergeți la Settings și verificați modul curent
3. **Actualizați dacă este necesar**: Comutați în Modul Auto dacă sunteți pe WordPress 7.0+
4. **Clasificați abilitățile**: Revizuiți și clasificați orice abilități neclasificate
5. **Testați**: Verificați că abilitățile de terță parte funcționează corect

## Subiecte Conexe {#related-topics}

- **Ability Visibility**: Controlați ce abilități sunt expuse unde
- **WordPress Abilities API**: Aflați despre înregistrarea nativă a abilităților WordPress
- **Third-Party Ability Development**: Creați abilități care funcționează cu modul Auto
