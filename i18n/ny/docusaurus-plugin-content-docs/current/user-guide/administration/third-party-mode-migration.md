---
title: Kuyenda kwa Mfeso Wopambiri
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Kusoka ya Mfano wa Tatu (Third-Party Mode Migration) {#third-party-mode-migration}

Superdav AI Agent v1.12.0 imebadilisha jinsi uwezo wa watu wengine (third-party abilities) unavyoshughulikiwa. **Sasa, third-party mode inaanza kwa "auto"**, ikiruhusu WordPress Abilities API kuungana moja kwa moja kwenye WordPress 7.0+ bila kuhitaji mipangilio ya manual.

## Kile Kilichobadilika? {#what-changed}

### Kabla ya v1.12.0 {#before-v1120}

Uwezo wa watu wengine ulihitaji mipangilio ya manual:

- Ililazimika kuwasha wazi "third-party mode"
- Uwezo huo ulipandikizwa kutoka kwenye registry maalum (custom registry)
- Uunganisho na WordPress Abilities API lilikuwa chaguo tu (optional)
- Legacy mode ilikuwa inaanza (default)

### Baada ya v1.12.0 {#after-v1120}

Uwezo wa watu wengine unafanya kazi kiotomatiki:

- Third-party mode inaanza kwa "auto"
- Uwezo huo unaunganisha moja kwa moja na WordPress Abilities API
- Hakuna haja ya mipangilio ya manual kwenye WordPress 7.0+
- Legacy mode bado inapatikana kwa toleo la zamani la WordPress

## Nani Atapata Athari? {#who-is-affected}

### Mash installi Mpya (WordPress 7.0+) {#new-installations-wordpress-70}

**Hakuna hatua inayohitajika.** Third-party mode inaanza kwa "auto", na uwezo huo unafanya kazi bila kuhitaji mipangilio yoyote.

### Mash installi Yaliyopo {#existing-installations}

**Mipangilio yako itabaki sawa.** Ikiwa ulikuwa unatumia:

- **Legacy mode**: Utabaki katika legacy mode (hakuna mabadiliko)
- **Manual third-party mode**: Utabaki katika manual mode (hakuna mabadiliko)
- **Auto mode**: Utahidi kutumia auto mode (hakuna mabadiliko)

### Toa la WordPress Kabla ya 7.0 {#wordpress-versions-before-70}

**Legacy mode bado inapatikana.** Ikiwa uko kwenye WordPress 6.x au chini:

- Third-party mode inaanza kwa "legacy"
- Unaweza kuwasha third-party mode mwenyewe ikiwa unataka
- Upgrade kwenda WordPress 7.0+ ili kutumia Abilities API ya asili (native)

## Kuelewa Modes {#understanding-the-modes}

### Auto Mode (Default Mpya) {#auto-mode-new-default}

**Auto mode** inatumia uunganisho wa moja kwa moja na WordPress Abilities API:

- Uwezo huo unarejesteri kupitia WordPress hooks
- Ulinganifu kamili na WordPress 7.0+ Abilities API
- Kutambua uwezo wa watu wengine kiotomatiki
- Hakuna haja ya mipangilio ya manual

**Kati muli**: WordPress 7.0+ ndi ulemu wosayenera wina chinthu cha zinthu zina (third-party abilities)

### Manual Mode {#manual-mode}

**Manual mode** imayenera kukhala ndi kukonza kwa maganizo:

- Mumaliza kuti muli ndi zinthu zina za third-party monga zimene muli kuyesa
- Yenera kwambiri poyesa kapena kuyesa zinthu zina zinenera
- Imayenera kukhala ndi kusintha kwa files za kukonza (configuration files)
- Kodi muli ndi ulemu wambiri, koma muli ndi chinthu chanu chokonda kutanthauza

**Kati muli**: Kuyesa, kuyesa zinthu zina zinenera, kapena kusintha kwa zinthu zina zomwe mumayenera

### Legacy Mode {#legacy-mode}

**Legacy mode** imayenera kukhala ndi system ya third-party ability yomwe imapita:

- Registry ya ability yomwe imayenera (siyenera WordPress Abilities API)
- Imayenera kwa WordPress zosiyanasiyana zomwe zinali zikulu kwambiri
- Simili ndi kukhala ndi WordPress monga momwe zimene zinali
- Imayenera, koma imapita

**Kati muli**: WordPress 6.x kapena zosiyanasiyana, kapena pamene mukuwoneka kuti muli ndi compatibility ya legacy

## Kuti Muli ndi Mode Yanu Iye {#checking-your-current-mode}

### Kupambana kwa Admin Panel {#via-admin-panel}

1. Rendani ku **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Kodi muli ndi setting la **Third-Party Mode**?
3. Mudzindikira mode yanu yomwe muli bwanji ndipo muli ndi zochopulira kuti muli kuyesa

### Kupambana kwa Code {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', kapena 'legacy'
```

## Kusintha Mode Yanu {#changing-your-mode}

### Kukhala ndi Auto Mode {#switch-to-auto-mode}

Ngati muli pa WordPress 7.0+ ndipo mukuwoneka kuti muli kuyesa auto mode:

1. Rendani ku **Superdav AI Agent** → **Settings**
2. Kodi muli ndi **Third-Party Mode**?
3. Siyeni **Auto (WordPress Abilities API)**
4. Rendani **Save**

Superdav AI Agent imapambana ndimayenera zinthu zina za third-party ndikuyesa.

### Kukhala ndi Manual Mode {#switch-to-manual-mode}

Ngati mukuwoneka kuti muli kuyesa manual kodi mukuwoneka kuti muli kuyesa abilities zomwe zimene:

1. Rendani ku **Superdav AI Agent** → **Settings**
2. Kodi muli ndi **Third-Party Mode**?
3. Siyeni **Manual**
4. Rendani **Save**
5. Sinthani file yanu la kukonza kuti muli ndi zinthu zina zomwe zimene

### Kukhala ndi Legacy Mode {#switch-to-legacy-mode}

Ngati mukuwoneka kuti muli ndi compatibility ya legacy:

1. Tenda ku **Superdav AI Agent** → **Settings**
2. Tenda **Third-Party Mode**
3. Selektira **Legacy**
4. Kulela **Save**

## Manfaat ya Auto Mode (Auto Mode Benefits) {#benefits-of-auto-mode}

### Ufumbulira kwa Kujiriwa (Automatic Discovery) {#automatic-discovery}

Mwayi wote wa uwezo utafumbulika bwino kutokana na:

- Plugins zilizowekwa
- Theme iliyopo
- Plugins zinazohitajika (Must-use plugins)
- Plugins zinazoweza kuingia moja kwa moja (Drop-in plugins)

Hakuna ufunguo wa kujisajili kwa mkono.

### Ufumbulizo wa Asili (Native Integration) {#native-integration}

Mwayi wote wa uwezo utafanya kazi na WordPress Abilities API:

- Unaendana na core ya WordPress
- Hutumika na admin ya WordPress
- Unaendana na plugins zingine zinazotumia Abilities API
- Utakuwa salama kwa wakati mwingine kadiri WordPress inavyobadilika

### Usimamizi Unaorushwa (Simplified Management) {#simplified-management}

- Hakuna faili za kuandika (configuration files) unazozishindika
- Hakuna usajili wa uwezo kwa mkono
- Udhibiti wa uwazi wa uwezo (Ability Visibility controls) utafanya kazi kiotomatiki
- Admin notices zitaeleza mambo ya uwezo usiowekwa

### Utendaji Bora (Better Performance) {#better-performance}

- Uwezo utawekwa cache (cached)
- Utaingizwa kwa wakati unaohitaji tu (Lazy-loaded on demand)
- Umeundwa kwa ajili ya WordPress 7.0+

## Njia ya Kuhamishwa (Migration Path) {#migration-path}

### Ukipo kwenye WordPress 6.x {#if-youre-on-wordpress-6x}

1. **Ongeza hadi WordPress 7.0+** (unapokuwa tayari)
2. **Ongeza Superdav AI Agent** hadi v1.12.0+
3. **Badilisha third-party mode kuwa Auto** (hiyo ni hiari; legacy mode bado inafanya kazi)
4. **Pitia uwazi wa uwezo (ability visibility)** ili kuhakikisha udhibiti sahihi wa kuingia

### Ukipo kwenye WordPress 7.0+ {#if-youre-on-wordpress-70}

1. **Ongeza Superdav AI Agent** hadi v1.12.0+
2. **Thibitisha third-party mode imewekwa Auto** (inapaswa kuwa hivyo kwa kiotomatiki)
3. **Pitia uwazi wa uwezo (ability visibility)** ili kuhakikisha udhibiti sahihi wa kuingia
4. **Jaribu abilities za third-party** ili kuthibitisha zinafanya kazi

## Kutatua Matatizo (Troubleshooting) {#troubleshooting}

### Uwezo haunaingizwa katika auto mode {#abilities-arent-loading-in-auto-mode}

- Thibitisha una WordPress 7.0+
- Angalia kwamba third-party mode imewekwa "Auto"
- Thibitisha plugin inayotoa uwezo inafanya kazi
- Angalia error logs za WordPress kwa makosa ya usajili (registration errors)

### Nataka kuendelea na legacy mode {#i-want-to-keep-legacy-mode}

- Nenda kwenye **Settings** → **Third-Party Mode**
- Selektira **Legacy**
- Kulela **Save**
- Legacy mode itaendelea kufanya kazi

### Zomwezi zangamene za zangu zikupereka {#my-custom-abilities-arent-showing}

- Tsatsa kuti zikarekeledwa m'WordPress hooks
- Tsatsa kuti zikufuna API ya Abilities zvakanaka
- Tsatsa logs dzakareva WordPress
- Gitaura pa **Ability Visibility** admin page kuti uone abilities zonosekawe

### Ndinobona "unclassified ability" notices {#im-getting-unclassified-ability-notices}

- Iyi nzira yakakwanisa kune abilities dzinotsika kwemweya (third-party) dzine zvakare
- Tsatsa uye tsika zvinosikawo mu admin notice
- One **Ability Visibility** kuti uone zvinotariswa nezvechikara

## Kuti zvinhu zvakarekuva {#backward-compatibility}

### Zvinoregeredza (Existing Configurations) {#existing-configurations}

Kana uri neconfigurations dzine abilities dzinotsika kwemweya dzakare:

- **Legacy mode**: Configuration yako inodzivirira
- **Manual mode**: Configuration yako inodzivirira
- **Auto mode**: Configuration yako idzidzwa (auto mode idzidzwa)

Kuti usimbise configuration yako yakanaka, tsvaka mu Manual kana Legacy mode.

### Mhando Yekuti Zvinoregeredza (Deprecation Timeline) {#deprecation-timeline}

- **v1.12.0**: Legacy and Manual modes dzine support zvakare
- **v1.13.0+**: Legacy mode inogona kuone notices dzinotsika kwemweya
- **v2.0.0**: Legacy mode inogona kuondwa (inotsatsa) (TBD)

## Zvinoregeredza zvakanaka (Best Practices) {#best-practices}

### Kune Kuratidza Kwakare (For New Installations) {#for-new-installations}

- Gitaura Auto mode (iyi yakanaka)
- Shanda Superdav AI Agent kuti idzidzwe abilities nekuti
- Gitaura Ability Visibility kuti uonde access

### Kune Kuratidza Kwakare (For Existing Installations) {#for-existing-installations}

- Shanda ku WordPress 7.0+ kana zvichizokwanisa
- Gitaura Auto mode kuti usimbise management
- Tsatsa uye tsika abilities zvinotsika kwemweya neAbility Visibility

### Kune Abilities Dzinotsika Kwemweya (For Custom Abilities) {#for-custom-abilities}

- Rege abilities kubva m'WordPress hooks (Abilities API)
- Usimbise ability registries dzakare
- Shanda ku WordPress 7.0+ nekuti Auto mode

## Zvinotariswa (Next Steps) {#next-steps}

1. **Tenga version ya WordPress yako**: Tenga kuti uko kwenye 7.0+ ukuti utumie Auto mode
2. **Tenga mambo ya third-party yako**: Unapita ku Settings na tenga mode yako iliyopo

3. **Update ngati ndi kuyenera**: Gadzira ku Auto mode ngati ukulibe WordPress 7.0+

4. **Gawanyira zochitika (Classify abilities)**: Tenga kuti mambo osalimbikizidwa (unclassified abilities) onse, ndipo mwagwiritse mwayi wanu.

5. **Tenga**: Tenga kuti mambo ya third-party yako yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe y
