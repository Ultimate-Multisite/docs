---
title: Uhamisho wa Hali ya Upande Tatu
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Uhamisho wa Hali ya Nje ya Tatu {#third-party-mode-migration}

Superdav AI Agent v1.12.0 inabadilisha jinsi uwezo wa nje ya tatu (third-party abilities) unavyoshughulikiwa. **Hali ya Nje ya Tatu sasa inaanza kwa 'auto' (kiotomatiki)**, ikiruhusu kuunganishwa na API ya Uwezo ya WordPress (WordPress Abilities API) moja kwa moja kwenye WordPress 7.0+ bila kuhitaji mipangilio ya mikono.

## Nini Kilobadilika? {#what-changed}

### Kabla ya v1.12.0 {#before-v1120}

Uwezo wa nje ya tatu ulihitaji mipangilio ya mikono:

- Ili lazima uweze kuwezesha wazi "hali ya nje ya tatu"
- Uwezo ulijazwa kutoka kwenye rejista maalum
- Kuunganishwa na WordPress Abilities API kulikuwa hiari
- Hali ya zamani (Legacy mode) ndiyo ilikuwa chaguo la kiima

### Baada ya v1.12.0 {#after-v1120}

Uwezo wa nje ya tatu unafanya kazi kiotomatiki:

- Hali ya nje ya tatu inaanza kwa "auto"
- Uwezo unajumuishwa moja kwa moja na WordPress Abilities API
- Hakuna mipangilio ya mikono inayohitajika kwenye WordPress 7.0+
- Hali ya zamani (Legacy mode) bado inapatikana kwa matoleo ya zamani ya WordPress

## Nani Anahusu? {#who-is-affected}

### Usakinishaji Mpya (WordPress 7.0+) {#new-installations-wordpress-70}

**Hakuna hatua yoyote inayohitajika.** Hali ya nje ya tatu imewekwa kiotomatiki kwenye "auto", na uwezo unafanya kazi bila shida.

### Usakinishaji Zilizopo {#existing-installations}

**Mipangilio yako inahifadhiwa.** Ikiwa ulikuwa unatumia:

- **Hali ya Zamani (Legacy mode)**: Unabaki katika hali ya zamani (hakuna mabadiliko)
- **Hali ya Nje ya Tatu ya Mikono (Manual third-party mode)**: Unabaki katika hali ya mikono (hakuna mabadiliko)
- **Hali ya Kiotomatiki (Auto mode)**: Unaendelea na hali ya kiotomatiki (hakuna mabadiliko)

### Matoleo ya WordPress Kabla ya 7.0 {#wordpress-versions-before-70}

**Hali ya zamani bado inapatikana.** Ikiwa uko kwenye WordPress 6.x au kabla yake:

- Hali ya nje ya tatu inaanza kwa "legacy"
- Unaweza kuwezesha hali ya nje ya tatu kwa mikono ikiwa unatamani
- Bonyeza kuboresha hadi WordPress 7.0+ kutumia Abilities API ya asili

## Kuelewa Hali Tatu {#understanding-the-modes}

### Hali ya Kiotomatiki (Auto Mode) (Chaguo la Kiima Kipya) {#auto-mode-new-default}

**Hali ya kiotomatiki** inatumia kuunganishwa na WordPress Abilities API ya asili:

- Uwezo unarejistrashe kupitia WordPress hooks
- Upatanisho kamili na WordPress 7.0+ Abilities API
- Kugundua kiotomatiki uwezo wa nje ya tatu
- Hakuna mipangilio ya mikono inayohitajika

**Lini kutumia**: WordPress 7.0+ na uwezo wa nje ya tatu

### Hali ya Mikono (Manual Mode) {#manual-mode}

**Hali ya mikono** inahitaji mipangilio ya wazi:

- Unabainisha ni uwezo gani wa nje ya tatu unapaswa kupakuliwa
- Inafaa kwa majaribio au kupakuliwa kwa uwezo kwa kuchagua
- Inahitaji kuhariri faili za mipangilio
- Udhibiti zaidi, lakini inahitaji maandalizi zaidi

**Lini kutumia**: Majaribio, kupakuliwa kwa uwezo kwa kuchagua, au mipangilio maalum

### Hali ya Zamani (Legacy Mode) {#legacy-mode}

**Hali ya zamani** inatumia mfumo wa zamani wa uwezo wa nje ya tatu:

- Rejista ya uwezo maalum (si WordPress Abilities API)
- Inafaa kwa matoleo ya zamani ya WordPress
- Hakuna kuunganishwa na asili ya WordPress
- Imepunguzwa (Deprecated) lakini bado inusaidiwa

**Lini kutumia**: WordPress 6.x au kabla yake, au unapohitaji ufanano wa hali ya zamani

## Kuangalia Hali Yako ya Sasa {#checking-your-current-mode}

### Kupitia Admin Panel {#via-admin-panel}

1. Nenda kwa **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Tafuta mipangilio ya **Third-Party Mode**
3. Utaona hali yako ya sasa na chaguo za kubadilisha

### Kupitia Code {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', or 'legacy'
```

## Kubadilisha Hali Yako {#changing-your-mode}

### Kubadilisha kwa Hali ya Kiotomatiki (Auto Mode) {#switch-to-auto-mode}

Ikiwa uko kwenye WordPress 7.0+ na unataka kutumia hali ya kiotomatiki:

1. Nenda kwa **Superdav AI Agent** → **Settings**
2. Tafuta **Third-Party Mode**
3. Chagua **Auto (WordPress Abilities API)**
4. Bonyeza **Save**

Superdav AI Agent itagundua na kurekebisha uwezo wa nje ya tatu kiotomatiki.

### Kubadilisha kwa Hali ya Mikono (Manual Mode) {#switch-to-manual-mode}

Ikiwa unataka kudhibiti kwa mikono ni uwezo gani unapaswa kupakuliwa:

1. Nenda kwa **Superdav AI Agent** → **Settings**
2. Tafuta **Third-Party Mode**
3. Chagua **Manual**
4. Bonyeza **Save**
5. Hariri faili yako ya mipangilio ili kubainisha ni uwezo gani unapaswa kupakuliwa

### Kubadilisha kwa Hali ya Zamani (Legacy Mode) {#switch-to-legacy-mode}

Ikiwa unahitaji ufanano wa hali ya zamani:

1. Nenda kwa **Superdav AI Agent** → **Settings**
2. Tafuta **Third-Party Mode**
3. Chagua **Legacy**
4. Bonyeza **Save**

## Faida za Hali ya Kiotomatiki (Auto Mode) {#benefits-of-auto-mode}

### Kugundua Kiotomatiki (Automatic Discovery) {#automatic-discovery}

Uwezo unagunduliwa kiotomatiki kutoka kwa:

- Plugins zilizosakinishwa
- Theme inayotumika
- Plugins za lazima (Must-use plugins)
- Plugins za kuingizwa (Drop-in plugins)

Hakuna usajili wa mikono unaohitajika.

### Uunganisho wa Asili (Native Integration) {#native-integration}

Uwezo unajumuishwa na WordPress Abilities API:

- Unalingana na msingi wa WordPress
- Unafanya kazi na admin wa WordPress
- Unapatana na plugins zingine zinazotumia Abilities API
- Unahakikisha uwezo wa baadaye kadri WordPress inavyoendelea

### Usimamizi Rahisi (Simplified Management) {#simplified-management}

- Hakuna faili za mipangilio kuhariri
- Hakuna usajili wa uwezo wa mikono
- Udhibiti wa Uonekano wa Uwezo (Ability Visibility) unafanya kazi kiotomatiki
- Taarifa za admin zinakufahamisha kuhusu uwezo ambao haujapangwa

### Utendaji Bora (Better Performance) {#better-performance}

- Uwezo unahifadhiwa (cached)
- Unapakuliwa kwa utaratibu (Lazy-loaded) wakati unahitajika
- Umeboreshwa kwa WordPress 7.0+

## Njia ya Uhamisho (Migration Path) {#migration-path}

### Ikiwa Uko kwenye WordPress 6.x {#if-youre-on-wordpress-6x}

1. **Bonyeza kuboresha hadi WordPress 7.0+** (wakati uko tayari)
2. **Sasisha Superdav AI Agent** hadi v1.12.0+
3. **Badilisha hali ya nje ya tatu kuwa Auto** (hiari; hali ya zamani bado inafanya kazi)
4. **Kagua uonekano wa uwezo** kuhakikisha udhibiti wa ufikiaji ni sahihi

### Ikiwa Uko kwenye WordPress 7.0+ {#if-youre-on-wordpress-70}

1. **Sasisha Superdav AI Agent** hadi v1.12.0+
2. **Thibitisha kwamba hali ya nje ya tatu imewekwa kwenye Auto** (inapaswa kuwa kiotomatiki)
3. **Kagua uonekano wa uwezo** kuhakikisha udhibiti wa ufikiaji ni sahihi
4. **Jaribu uwezo wa nje ya tatu** kuthibitisha kwamba zinafanya kazi

## Kutatua Matatizo (Troubleshooting) {#troubleshooting}

### Uwezo haupakuliwi katika hali ya kiotomatiki {#abilities-arent-loading-in-auto-mode}

- Thibitisha kwamba uko kwenye WordPress 7.0+
- Angalia kwamba hali ya nje ya tatu imewekwa kwenye "Auto"
- Thibitisha kwamba plugin inayotoa uwezo ni hai
- Angalia kumbukumbu za makosa za WordPress kwa makosa ya usajili

### Nataka kuendelea na hali ya zamani (legacy mode) {#i-want-to-keep-legacy-mode}

- Nenda kwa **Settings** → **Third-Party Mode**
- Chagua **Legacy**
- Bonyeza **Save**
- Hali ya zamani itaendelea kufanya kazi

### Uwezo wangu maalum hawaonekani {#my-custom-abilities-arent-showing}

- Thibitisha kwamba zimejisajili kupitia WordPress hooks
- Angalia kwamba zinatekeleza Abilities API kwa usahihi
- Kagua kumbukumbu za makosa za WordPress
- Tumia ukurasa wa admin wa **Ability Visibility** kuona uwezo wote zilizosajiliwa

### Ninapata taarifa za "uwezo ambao haujapangwa" {#im-getting-unclassified-ability-notices}

- Hii ni kawaida kwa uwezo wa nje ya tatu mpya
- Kagua na kuzipanga katika taarifa ya admin
- Angalia **Ability Visibility** kwa maelezo kuhusu kupanga

## Ufanano wa Hali ya Zamani (Backward Compatibility) {#backward-compatibility}

### Mipangilio Iliyopo {#existing-configurations}

Ikiwa una mipangilio ya uwezo wa nje ya tatu iliyopo:

- **Hali ya Zamani (Legacy mode)**: Mipangilio yako inaendelea kufanya kazi
- **Hali ya Mikono (Manual mode)**: Mipangilio yako inaendelea kufanya kazi
- **Hali ya Kiotomatiki (Auto mode)**: Mipangilio yako inatumiwa kupuuzwa (auto mode inachukua nafasi)

Ili kuhifadhi mipangilio yako maalum, kaa katika hali ya Mikono au Zamani.

### Ratiba ya Kupunguzwa (Deprecation Timeline) {#deprecation-timeline}

- **v1.12.0**: Hali ya Zamani na ya Mikono bado zinaungwa mkono kikamilifu
- **v1.13.0+**: Hali ya Zamani inaweza kuonyesha taarifa za kupunguzwa
- **v2.0.0**: Hali ya Zamani inaweza kuondolewa (Inajadiliwa)

## Mazoea Bora (Best Practices) {#best-practices}

### Kwa Usakinishaji Mpya {#for-new-installations}

- Tumia hali ya kiotomatiki (ni chaguo la kiima)
- Mwachie Superdav AI Agent kugundua uwezo kiotomatiki
- Tumia Ability Visibility kudhibiti ufikiaji

### Kwa Usakinishaji Zilizopo {#for-existing-installations}

- Bonyeza kuboresha hadi WordPress 7.0+ inapowezekana
- Badilisha kwa hali ya kiotomatiki kwa usimamizi rahisi
- Kagua na kupanga uwezo kwa kutumia Ability Visibility

### Kwa Uwezo Maalum {#for-custom-abilities}

- Sajili uwezo kupitia WordPress hooks (Abilities API)
- Epuka rejista za uwezo maalum
- Jaribu kwenye WordPress 7.0+ na hali ya kiotomatiki

## Hatua Zijazo {#next-steps}

1. **Angalia toleo lako la WordPress**: Thibitisha kwamba uko kwenye 7.0+ kwa hali ya kiotomatiki
2. **Kagua hali yako ya nje ya tatu**: Nenda kwa Settings na angalia hali yako ya sasa
3. **Sasisha ikiwa ni lazima**: Badilisha kwa hali ya kiotomatiki ikiwa uko kwenye WordPress 7.0+
4. **Panga uwezo**: Kagua na panga uwezo wowote ambao haujapangwa
5. **Jaribu**: Thibitisha kwamba uwezo wako wa nje ya tatu unafanya kazi kwa usahihi

## Mada Zinazohusiana {#related-topics}

- **Ability Visibility**: Kudhibiti ni uwezo gani unawashirikisha wapi
- **WordPress Abilities API**: Jifunze kuhusu usajili wa uwezo wa asili wa WordPress
- **Third-Party Ability Development**: Tengeneza uwezo ambao unafanya kazi na hali ya kiotomatiki
