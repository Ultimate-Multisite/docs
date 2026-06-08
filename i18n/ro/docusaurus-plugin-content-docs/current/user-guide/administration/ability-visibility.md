---
title: Vizibilitatea abilităților
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Vizibilitatea Abilităților

Superdav AI Agent v1.12.0 introduce controale de **Vizibilitate a Abilităților** care determină pe ce interfețe va fi expusă fiecare abilitate. Acest lucru permite administratorilor să își ajusteze detaliile în ceea ce privește capacitățile agenților care sunt disponibile prin REST API-uri, servere MCP, integrari WooCommerce și alte interfețe.

## Ce este Vizibilitatea Abilităților?

Vizibilitatea Abilităților este un sistem de permisiuni care controlează:

- **Ce abilități** sunt disponibile pentru agenți
- **Unde sunt expuse** (REST API, MCP, WooCommerce etc.)
- **Cine poate accesa-le** (prin liste de permisiuni alocate partenerilor)
- **Cum sunt clasificate** (recunoscute vs. nerecunoscute)

Fiecare abilitate are un nivel de vizibilitate care determină disponibilitatea acesteia pe diferite interfețe.

## Niveluri de Vizibilitate

### Public

**Abilitățile publice** sunt disponibile oriunde:

- Endpoint-uri REST API
- Servere MCP
- Integrari WooCommerce
- Interfețe de chat
- Toate rolurile de utilizator (cu permisiunile adecvate)

Exemplu: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internă

**Abilitățile interne** sunt disponibile doar în cadrul instalării dvs. WordPress:

- Interfețe de chat
- Panouri de administrare
- Doar pentru utilizatorii logați
- Nu sunt expuse prin REST API sau integrari externe

Exemplu: `manage-settings`, `view-analytics`, `export-data`

### Partener

**Abilitățile partener** sunt disponibile doar pentru partenerii în lista alb-neagră:

- Necesită o intrare explicită în lista de permisiuni a partenerilor
- Disponibile prin REST API cu credențialele partenerului
- Disponibile prin MCP cu autentificarea partenerului
- Nu sunt disponibile pentru utilizatorii obișnuiți

Exemplu: `bulk-import-users`, `modify-billing`, `access-analytics`

### Dezactivată

**Abilitățile dezactivate** nu sunt disponibile nicăieri:

- Nu sunt expuse prin nicio interfață
- Nu sunt disponibile în chat
- Nu sunt disponibile în panourile de administrare
- Utile pentru abilități învechite sau experimentale

## Gestionarea Vizibilității Abilităților

### Accesarea Setărilor Vizibilității Abilităților

1. Mergeți la **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Faceți clic pe tab-ul **Abilities**
3. Veți vedea o listă cu toate abilitățile instalate și nivelurile lor de vizibilitate

### Vizualizarea Detaliilor Abilității

Faceți clic pe orice abilitate pentru a vedea:

- **Name**: Identificatorul abilității
- **Description**: Ce face abilitatea
- **Current visibility**: Public, Internal, Partner sau Disabled
- **Partner allow-list**: Ce parteneri pot accesa (dacă vizibilitatea este Partner)
- **Last updated**: Când a fost modificată ultima dată vizibilitatea
- **Status**: Recognized sau Unclassified

### Schimbarea Nivelurilor de Vizibilitate

Pentru a schimba vizibilitatea unei abilități:

1. Faceți clic pe abilitate în listă
2. Selectați un nou nivel de vizibilitate din meniul derulant
3. Dacă selectați "Partner", adăugați identificatorii partenerilor în lista de permisiuni
4. Faceți clic pe **Save**

Exemplu:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Operațiuni în Masă

Pentru a schimba vizibilitatea mai multor abilități:

1. Bifați căsuțele de lângă abilități
2. Selectați un nou nivel de vizibilitate din meniul derulant de acțiune în masă
3. Faceți clic pe **Apply**

## Lista de Permisiuni a Partenerilor

**Lista de permisiuni a partenerilor** controlează ce parteneri externi pot accesa abilitățile de nivel Partner.

### Adăugarea Partenerilor

1. Mergeți la **Superdav AI Agent** → **Settings** → **Partners**
2. Faceți clic pe **Add Partner**
3. Introduceți identificatorul partenerului (de obicei o cheie API sau un ID de organizație)
4. Opțional, adăugați un nume și o descriere a partenerului
5. Faceți clic pe **Save**

### Asignarea Abilităților Partenerilor

După ce ați adăugat un partener:

1. Mergeți la tab-ul **Abilities**
2. Găsiți o abilitate cu vizibilitate Partner
3. Faceți clic pentru a edita
4. În secțiunea "Partner allow-list", bifați căsuțele pentru partenerii care ar trebui să aibă acces
5. Faceți clic pe **Save**

### Revocarea Accesului Partenerului

Pentru a elimina accesul unui partener:

1. Editați abilitatea
2. Debifați căsuța partenerului din lista de permisiuni
3. Faceți clic pe **Save**

Partenerul va pierde imediat accesul la acea abilitate.

## Abilitățile Nerecunoscute

Când instalați o abilitate de la un terț pe care Superdav AI Agent nu o recunoaște, aceasta este marcată ca **Unclassified** (Nerecunoscută).

### Notificare de Administrare pentru Abilitățile Nerecunoscute

Veți vedea o notificare de administrare:

```
⚠️ Unclassified Abilities Detected

The following abilities were installed but are not recognized:
- custom-import-tool
- external-api-wrapper

These abilities may pose security or compatibility risks.
Please review and classify them.

[Review Abilities] [Dismiss]
```

### Revizuirea Abilităților Nerecunoscute

1. Faceți clic pe **Review Abilities** (Revizuirea Abilităților) din notificare
2. Pentru fiecare abilitate nerecunoscută, veți vedea:
   - Numele și descrierea abilității
   - Sursa (ce plugin/addon i-a instalat)
   - Nivelul de vizibilitate sugerat
   - Evaluarea de securitate

3. Alegeți un nivel de vizibilitate:
   - **Public**: Aveți încredere în abilitate; o expuneți oriunde
   - **Internal**: Restricționat doar pentru utilizare internă
   - **Partner**: Restricționat pentru parteneri specifici
   - **Disabled**: Nu folosiți această abilitate

4. Faceți clic pe **Classify** (Clasifică) pentru a salva decizia dumneavoastră

### De ce să Clasificați Abilitățile Nerecunoscute?

Clasificarea abilităților:

- **Îmbunătățește securitatea**: Aprobăți explicit ce este expus
- **Previne accidente**: Abilitățile nerecunoscute sunt dezactivate implicit
- **Permite funcționalități**: Odată clasificate, abilitatea devine disponibilă
- **Documentează deciziile**: Alegerile dumneavoastră sunt înregistrate pentru scopuri de audit

## Vizibilitatea în Diferite Interfețe

### REST API

**Abilitățile publice** sunt disponibile prin endpoint-uri REST:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Abilitățile interne și partener** nu sunt disponibile prin REST API.

### Serverele MCP

**Abilitățile publice** sunt disponibile prin MCP:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**Abilitățile interne** nu sunt expuse prin MCP.

**Abilitățile partener** sunt disponibile doar cu credențialele partenerului.

### Integrarea WooCommerce

**Abilitățile publice** legate de WooCommerce sunt disponibile:

- Managementul produselor
- Procesarea comenzilor
- Comunicarea cu clienții

**Abilitățile interne** nu sunt expuse către WooCommerce.

### Interfața de Chat

**Toate abilitățile** (Public, Internal, Partner) sunt disponibile în chat, în funcție de permisiunile utilizatorului:

- Administratorii văd toate abilitățile
- Utilizatorii obișnuiți văd doar abilitățile Publice
- Partenerii văd abilitățile Publice + Partener (dacă sunt în lista alb-neagră)

## Cele Mai Bune Practici de Securitate

### Principiul Privilegiului Minim

- Setați abilitățile la cea mai restrictivă vizibilitate care permite totuși utilizarea lor
- Folosiți vizibilitatea Partner pentru operațiunile sensibile
- Dezactivați abilitățile pe care nu le folosiți

### Audituri Periodice

- Revizuiți vizibilitatea abilităților lunar
- Verificați dacă există abilități nerecunoscute
- Eliminați accesul pentru partenerii nefolosiți

### Înregistrarea și Monitorizarea

- Monitorizați care abilități sunt folosite cel mai des
- Urmăriți tiparele de acces ale partenerilor
- Alertați în cazul unei utilizări neobișnuite a abilităților

### Abilitățile de la Terți

- Revizuiți abilitățile de la terți înainte de a le activa
- Clasificați-le explicit
- Începeți cu vizibilitate Internă sau Partner
- Promovați la Public doar după verificări

## Depanare

**O abilitate nu apare în listă**
- Verificați dacă abilitatea este instalată și activă
- Asigurați-vă că plugin-ul/addon-ul este activat
- Reîmprospătați pagina

**Nu pot schimba vizibilitatea unei abilități**
- Verificați că aveți permisiuni de administrator
- Asigurați-vă că abilitatea nu este blocată de un plugin
- Încercați să dezactivați plugin-uri conflictuale

**Un partener nu poate accesa o abilitate**
- Verificați dacă partenerul se află în lista de permisiuni
- Asigurați-vă că vizibilitatea abilității este setată pe Partner
- Confirmați că credențialele partenerului sunt corecte
- Verificați jurnalele API pentru erori de autentificare

**Abilitățile nerecunoscute continuă să apară**
- Revizuiți și clasificați-le în notificarea de administrare
- Verificați că clasificarea dumneavoastră a fost salvată
- Verificați dacă plugin-ul care oferă abilitatea este actualizat

## Migrarea de la Modul Legacy

Dacă vă actualizați de la o versiune mai veche de Superdav AI Agent:

- Toate abilitățile existente sunt clasificate automat ca Public
- Revizuiți și ajustați vizibilitatea după necesitate
- Nu este necesară nicio acțiune, cu excepția cazului în care doriți să restricționați accesul

Vedeți **Third-Party Mode Migration** (Migrarea Modului de Terță Parte) pentru mai multe detalii despre tranziția către integrarea native Abilities API.

## Pași Următori

După configurarea vizibilității abilităților:

1. **Revizuiți abilitățile**: Auditați toate abilitățile instalate
2. **Clasificați abilitățile nerecunoscute**: Răspundeți la notificările de administrare
3. **Setați partenerii**: Adăugați parteneri dacă folosiți vizibilitatea Partner
4. **Monitorizați utilizarea**: Urmăriți care abilități sunt folosite cel mai des
5. **Documentați deciziile**: Păstrați note despre motivul pentru care ați ales fiecare nivel de vizibilitate
