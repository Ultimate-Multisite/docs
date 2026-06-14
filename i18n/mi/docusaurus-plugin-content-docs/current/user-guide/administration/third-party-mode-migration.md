---
title: Whakaawe Mode Pāramatanga Tuarua
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Whakaeke i te Mode Pāramatanga Tuarua (Third-Party Mode Migration)

Te Superdav AI Agent v1.12.0 mārie i te mea e whakahaa i te whakamahi o ngā āhua atu (third-party abilities). **Ko te mode pāramatanga tuarua (third-party mode) e whakaatanga ana ki "auto" (tūmā), e tino whaihi ana ki te whaiaro API Abilities o WordPress 7.0+ i runga i a WordPress, i roto i te waenganui o te whakamahi manu. **

## He aha te whakawhiti?

### I te wae v1.12.0

Ngā āhua atu (third-party abilities) e hiahia ana ki te whaiaro manu:

- E tika ana koe e whaiaro manu "third-party mode"
- E tae mai ngā āhua atu i te wāhi whakaaturia (custom registry)
- Ko te whaiaro API Abilities o WordPress he mea nui (optional)
- Ko te mode legacy (legacy mode) ko te mode pūrere (default)

### I te wae v1.12.0

E tino pai ngā āhua atu tuarua:

- Ko te mode pāramatanga tuarua e whakaatanga ana ki "auto"
- E whaiaro ngā āhua atu i te API Abilities o WordPress i te wāhi tūmā (natively)
- He tino nui te whakamahi i a WordPress 7.0+ i roto i te whakawhiti manu
- Ko te mode legacy ka mau ana mō ngā phiên WordPress purini

## Ka uaua ki te kua hua?

### Ngā Whakawhiti Hou (WordPress 7.0+)

**Koa mea e hiahia atu.** Ko te mode pāramatanga tuarua e whakaatanga ana ki "auto" i runga i te tūmā, ā, ngā āhua atu e pai i te whakamahi i roto i te whakatō (out of the box).

### Ngā Whakawhiti Kua Hou (Existing Installations)

**Ko ngā whakaritenga mo koe ka mau ana.** Ko te mea i runga i ahau i te whaiaro:

- **Mode legacy**: Ka mau ana koe i te mode legacy (ko atu nei, ko te mea i pūrere).
- **Manual third-party mode**: Ka mau ana koe i te mode manu.
- **Auto mode**: Ka mau ana koe i te auto mode (ko atu nei, ko te mea i pūrere).

### Ngā Phi-pī WordPress I te wae 7.0

**Ko te mode legacy ka mau ana mō.** Ko te mea i runga i ahau i a WordPress 6.x he taroa:

- Ko te mode pāramatanga tuarua e whakaatanga ana ki "legacy"
- Ka taea e koe te whaiaro manu manually ko te mea i hiahia atu.
- Whakaora ki WordPress 7.0+ kia mau i te API Abilities o tūmā (native)

## Te Whakaritenga i ngā Mode

### Auto Mode (Te Mode Pūrere Hou)

**Auto mode** e whaiaro ana i te whaiaro API Abilities o WordPress i runga i a tūmā:

- E rite ai ngā āhua atu ki te whakamahi i ngā hook o WordPress
- He tino pai te whaiaro me te API Abilities o WordPress 7.0+
- Ko te whakatipu (discovery) o ngā āhua atu tuarua he tūmā
- Ko te mea e hiahia atu i te whakawhiti manu

**Kāore i te wā mea:** WordPress 7.0+ me ngā āhua o tūmanako pōuri (third-party abilities)

### Mode Manau (Manual Mode)

**Mode manau** e hiahia atu ki whakamahi whakamahi manuia:

- E tino whai whakaaro ana i te āhua o ngā āhua o tūmanako pōuri (abilities) kua whai whakamahi
- Whakarite mō te whakamārama (testing) hena, hewhai i te whai whakamahi i ngā āhua o tūmanako pōuri
- E hiahia atu ki te whakawhiti i ngā file o whakaritanga (configuration files)
- He tino whakatika, engari e hiahia atu ki te whakamaoritanga (setup)

**Kāore i te wā mea:** Whakamārama (testing), hewhai i te whai whakamahi i ngā āhua o tūmanako pōuri, hena te whakaritanga mō te manuia.

### Mode Legacy (Legacy Mode)

**Mode legacy** e whai i te system o āhua o tūmanako pōuri (abilities) purine:

- Registry o āhua o tūmanako pōuri kua whakarite (kāore he WordPress Abilities API)
- Whakawhiti mō ngā wera (backward compatible) ki ngā wera o WordPress purine
- Kāore i hoatu whakamahi i te whai whakamahi o WordPress
- He pōuri, engari e hiahia atu ki te whakamahi

**Kāore i te wā mea:** WordPress 6.x hena, hena ko te whakahirahira (legacy compatibility) kua roa.

## Whakawātea Mode Kua Hou

### I te Pāru Admin Panel

1. Pāinga ki **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Kia kōrero mō te whakaritanga **Third-Party Mode** (Mode Tūmanako Pōuri)
3. Ka whakaatu i a koe i te mode kua whai whakamahinga kia ora, me ngā ohana mō te whakawhiti i ai

### I te Kōrero (Via Code)

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', or 'legacy'
```

## Whakawhiti Mode Kua Hou

### Whakawhiti ki Auto Mode

Ko i roto i WordPress 7.0+ he tino hiahia atu ki te whakamahi auto mode:

1. Pāinga ki **Superdav AI Agent** → **Settings**
2. Kia whakatika mō te whakaritanga **Third-Party Mode** (Mode Tūmanako Pōuri)
3. Whakarite i **Auto (WordPress Abilities API)**
4. Whakawhiti i **Save**

Ko Superdav AI Agent ka mau i ngā āhua o tūmanako pōuri kua whai whakamahinga kia ora, me te whakarite ai i ahau.

### Whakawhiti ki Manual Mode

Ko koe e hiahia atu ki te whakahaere manuia i ngā āhua o tūmanako pōuri (abilities) kua whai whakamahi:

1. Pāinga ki **Superdav AI Agent** → **Settings**
2. Kia whakatika mō te whakaritanga **Third-Party Mode** (Mode Tūmanako Pōuri)
3. Whakarite i **Manual**
4. Whakawhiti i **Save**
5. Whakawhiti i tō file o whakaritanga kia whai whakaaro ki ngā āhua kua e hiahia atu ki te whakamahi

### Whakawhiti ki Legacy Mode

Ko koe e hiahia atu ki te whakawhiti mō ngā wera (legacy compatibility):

1. Pā no **Superdav AI Agent** → **Settings**
2. Khoi **Third-Party Mode** (Mode Whakamahi Tuarua)
3. Whakarite i **Legacy** (Mauri/Pūrere)
4. Whakawātea **Save**

## Manawa o te Auto Mode (Benefits of Auto Mode)

### Whakawātea Otomato (Automatic Discovery)

Kia tino whakatika ngā Whakawātea (Abilities) i roto i te auto, e pēnei:

- Plugin-a e whai anga ana
- Theme e active ana
- Plugins e whakamahia (Must-use plugins)
- Plugins e taea te whai anga (Drop-in plugins)

Kua kore e hiahia atu ki te whakatira manu manu (manual registration).

### Whakawhanaungatanga Māori (Native Integration)

Kia whakahou i ngā Whakawātea (Abilities) me WordPress Abilities API:

- Kia tino tika ana ki WordPress core
- Mahi ana me WordPress admin
- Pātai ana ki ngā plugins kia whakamahi te Abilities API
- Kia kaha ai i te whakatika i te korero o WordPress

### Whakawātea Whakamahara (Simplified Management)

- Kua kore ahau e hiahia atu ki mga file configuration kia whakawātea
- Kua kore ahau e hiahia atu ki te whakatira manu manu (manual ability registration)
- Ngā Whakawātea Visibility (Ability Visibility controls) e mahi ana i roto i te auto
- Ngā Admin notices e whakamōhihi ana koe i ngā Whakawātea e kore tika kia whakawātea

### Mahi Whakamahi Whakaaro (Better Performance)

- Kua kaha ai i ngā Whakawātea (Abilities)
- E whai whakaaro ana ki te demand (Lazy-loaded on demand)
- Kia tino whakamōhihi ana ki WordPress 7.0+

## Te Onua o te Whakatika (Migration Path)

### Ko koe i runga i WordPress 6.x

1. **Whakahou ki WordPress 7.0+** (i roto i te wā e tika ana)
2. **Whakahou i Superdav AI Agent** ki v1.12.0+
3. **Whakawārite i third-party mode ki Auto** (optional; ka kaha te mahi i legacy mode)
4. **Ki te whakaaro i ngā Whakawātea Visibility** kia whakahou i ngā whakahaere mō te whai access tika

### Ko koe i runga i WordPress 7.0+

1. **Whakahou i Superdav AI Agent** ki v1.12.0+
2. **Kia pēnei te whakatika i third-party mode ki Auto** (kia pēnei ana eke ana)
3. **Ki te whakaaro i ngā Whakawātea Visibility** kia whakahou i ngā whakahaere mō te whai access tika
4. **Whakawātea i third-party abilities** kia kore ahau e hiahia atu ki te whakamārama ana

## Whakamārama (Troubleshooting)

### Kua kore ngā Abilities e pūmau i auto mode

- Kia tino whakaaro koe i runga i WordPress 7.0+
- Kia kaha ai i te third-party mode ki "Auto"
- Kia whakaaro i te plugin e pūmau ana i te ability he active ana
- Kia whakaaro i ngā error logs o WordPress kia whakatika i ngā error o te registration

### He hiahia ahauKia mau legacy mode

- Pā no **Settings** → **Third-Party Mode**
- Whakarite i **Legacy** (Mauri/Pūrere)
- Whakawātea **Save**
- Ka kaha te mahi i legacy mode

### Ka taea e au ngā mea tino whaiaro ahau i whakawhiti?

- Kia titi ki te whakamahi i WordPress hooks mō te whakatakī (register) i ahau
- Kia tiaki i te whakamahi o ahau i te Abilities API i te tika
- Titi ki ngā error logs o WordPress
- Whakarongo ki te admin page **Ability Visibility** kia whakaahua i ngā ability katoa e whakawhiti

### Ka pēhea ahau e pēhea ana "unclassified ability" (ability whakahou) e pēhea?

- He pēhea tēnei mō ngā ability hou o pihakpi
- Whakarongo ki te whakamahi i te admin notice kia whakaahua me te whakawhiti i ahiahi
- Titi ki **Ability Visibility** mō whakamārama atu mō te whakahou

## Backward Compatibility (Whakawātea i te whakatika)

### Ngā Configuration e Whakahaerehia

Ko ahau e hiahia ana koe mō ngā configuration o ability pihakpi e whai ake nei:

- **Legacy mode**: Ko tō configuration e pēhea e mahi ana
- **Manual mode**: Ko tō configuration e pēhea e mahi ana
- **Auto mode**: Ko tō configuration e whakawhiti (ko auto mode e whakahaere)

Kia mau i tō configuration whaiaro, kia mau i te Manual or Legacy mode.

### Whakaaro o te Wāwhara (Deprecation Timeline)

- **v1.12.0**: Ko ngā Legacy and Manual modes e pēhea e mahi ana
- **v1.13.0+**: Ko ngā Legacy mode e pēhea e mahi ana i whakaatu ngā notis o whakahou (deprecation notices)
- **v2.0.0**: Ko ngā Legacy mode e pēhea e whakawhiti (TBD - E tika ana ki te tino whakatau)

## Ngā Whakamahi Whakaaro (Best Practices)

### Mō Ngā Whakahaere Hou

- Whakarongo ki Auto mode (he ko te default)
- Kia ai i Superdav AI Agent kia whakaahua ngā ability automatically
- Whakarongo ki Ability Visibility mō whakakawhiti access

### Mō Ngā Whakahaere e Whakahouhia

- Whakahou ki WordPress 7.0+ inā e taea ana
- Whakatika ki Auto mode mō whakahaere e pēhea e whaiaro (simplified management)
- Whakarongo ki ngā ability me te whakawhiti i ahiahi using Ability Visibility

### Mō Ngā Ability Whaiaro

- Whakatakī ngā ability via WordPress hooks (Abilities API)
- Whakarongo ki te registry o ability whaiaro (custom ability registries)
- Whakahaere i te whakamārama ki WordPress 7.0+ me Auto mode

1. **Kihei i te wera o au WordPress (Check your WordPress version)**: Kia whakapā i te whakamārama o au WordPress he 7.0+ mō Auto mode.
2. **Titi i te mode o au third-party (Review your third-party mode)**: Pā no te Settings ā muri i te whakaaro i te mode o au.
3. **Whakaaro ki te whai whakamudane ana (Update if needed)**: Whakaaro ki te Auto mode ko te whai whakamahi koe i WordPress 7.0+
4. **Whakawhanaungatanga ngā kaha (Classify abilities)**: Pā no me te whakawhanaunga me te whakarite i ngā kaha e hāpai ana i te whakaaro.
5. **Whakawātea (Test)**: Kia whakapumahi ko ngā kaha o au third-party mō te mahi i runga i te tika.

## Ngā Tautai Whakaritenga (Related Topics)

- **Māhi Kaha Whakaaro (Ability Visibility)**: Whakamahinga me te whakakawhanaunga i ko ngā kaha kua whakahou ana i te wāhi e hihanga ana.
- **WordPress Abilities API**: Whakarongo ki te whakamārama o te registration o abilities o WordPress mō te whenua.
- **Whakapeete Kaha Third-Party (Third-Party Ability Development)**: Whakapeete ngā kaha kua tino pai ana me te mahi i runga i Auto mode.
