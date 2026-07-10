---
title: Ho lula le moetsi o tla fana ka ho tsamaea
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migration e Mode Third-Party {#third-party-mode-migration}

Superdav AI Agent v1.12.0 di changa se le fihla (third-party) abilities e a tlhogo. **Mode third-party e nna le auto**, e e tlhogo WordPress 7.0+ ho fetoga, e e tlhogo API ya Abilities ya WordPress ho feta ho le fa le tlhogo.

## Enga E Ntshweng? {#what-changed}

### Le Fa Le v1.12.0 {#before-v1120}

Le fihla abilities di tlhoka tlhogo ho fetoga:

- Ho ba lefetoga ka lefa "third-party mode"
- Abilities di fetoga ka le fa (custom registry)
- Le fa le API ya WordPress Abilities e ntsha e ne le tlhoko
- Mode legacy o ne le mola (default)

### Le Fa Le v1.12.0 Ho Fela {#after-v1120}

Le fihla abilities di feta ka le auto:

- Mode third-party e nna le "auto" ho fetoga
- Abilities di fetoga ka le fa API ya WordPress Abilities
- Le tlhogo manual a fetoga a ntse a tsamaya ka WordPress 7.0+
- Mode legacy o ne ho le fa ho WordPress versions e fela

## Boina Ba Letso? {#who-is-affected}

### Le Fetoga Le Tlhaloso (WordPress 7.0+) {#new-installations-wordpress-70}

**Ke nna le tlhogo.** Mode third-party o na le "auto" ka le auto, le abilities di fetoga ka lefa.

### Le Fetoga Le Fa {#existing-installations}

**Le fihla tsa hau di tsamaya.** Ho feta ho le:

- **Mode legacy**: O tla tsamaya ka mode legacy (ngoe e ntsha)
- **Mode third-party manual**: O tla tsamaya ka mode manual (ngoe e ntsha)
- **Mode auto**: O tla tsamaya ka mode auto (ngoe e ntsha)

### WordPress Versions Le Fa 7.0 {#wordpress-versions-before-70}

**Mode legacy o ne ho le fa.** Ho feta ha u na WordPress 6.x kgolo:

- Mode third-party o na le "legacy"
- U ka fetoga mode third-party manual ka u batla
- Ho fetoga ka WordPress 7.0+ ho fetoga API ya Abilities e ntsha

## Ho Lefatsa Modes {#understanding-the-modes}

### Mode Auto (Mode Le Nna) {#auto-mode-new-default}

**Mode auto** o fetoga ka le fa API ya WordPress Abilities:

- Abilities di fetoga ka hooks ya WordPress
- Le fihla le fetoga ka lefa API ya WordPress Abilities 7.0+
- Ho hlalosa le auto le fihla abilities
- Le tlhogo manual a fetoga a ntse a tsamaya

**Kapa go sebelisa**: WordPress 7.0+ le boitswalo tsa ba tlhaloganyo (third-party)

### Mode ya Manalo (Manual Mode) {#manual-mode}

**Mode ya manalo** e hloka ho fana ka tsela e ntle:

- O bolela eng ya itswalo tsa ba tlhaloganyo (abilities) o tla leka
- E thusa ho dira testing kapa ho leka ho leka se se fetileng sa itswalo
- E hloka ho fetola mgafile ea configuration
- Ho na le botshelo le thata, empa ho fana ka setso le thata

**Kapa go sebelisa**: Testing, ho leka ho leka se se fetileng sa itswalo, kapa setso se se fetileng sa ho ba le (custom configurations)

### Mode ya Ho Ba Le (Legacy Mode) {#legacy-mode}

**Mode ya ho ba le** e sebelisa setso se se fetileng sa itswalo:

- Registry ea itswalo e fetileng (e ne eba API ea WordPress Abilities)
- E tsamaea ka versions e fetileng ea WordPress
- Ha na ho ba le ho ba le (native WordPress integration)
- E ntse e fetileng empa e fana

**Kapa go sebelisa**: WordPress 6.x kapa se fetileng, kapa ha u hloka ho ba le ho ba le (legacy compatibility)

## Ho Ba Hlalosa Mode ea hau e Hloka {#checking-your-current-mode}

### Ka Morero ea Admin Panel {#via-admin-panel}

1. La **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Leha ho hlalosa setso sa **Third-Party Mode**
3. O tla bona mode oa hau o lula le tsela ho fetola

### Ka Code {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', kapa 'legacy'
```

## Ho Fetola Mode ea hau {#changing-your-mode}

### Ho Fetola ho Auto Mode {#switch-to-auto-mode}

Ha u le WordPress 7.0+ u batla ho sebelisa auto mode:

1. La **Superdav AI Agent** → **Settings**
2. Hlalosa **Third-Party Mode**
3. Select **Auto (WordPress Abilities API)**
4. Click **Save**

Superdav AI Agent o tla leka ho bona le ho ba le itswalo tsa ba tlhaloganyo ka tsela e ntle.

### Ho Fetola ho Manual Mode {#switch-to-manual-mode}

Ha u batla ho leka ho leka se fetileng sa ho ba le:

1. La **Superdav AI Agent** → **Settings**
2. Hlalosa **Third-Party Mode**
3. Select **Manual**
4. Click **Save**
5. Fetola mgafile ea configuration oa hau ho bolela eng ya itswalo o tla leka

### Ho Fetola ho Legacy Mode {#switch-to-legacy-mode}

Ha u hloka ho ba le ho ba le (legacy compatibility):

1. Go to **Superdav AI Agent** → **Settings** → **Settings**
2. Find **Third-Party Mode** → **Mode Third-Party**
3. Select **Legacy** → **Select Legacy**
4. Click **Save**

## Manfaat Auto Mode (Benefits of Auto Mode) {#benefits-of-auto-mode}

### Khujula Kapa (Automatic Discovery) {#automatic-discovery}

Boikotse (Abilities) bo ikopotsa ka tsela:

- Plugins tse di tsamaisang
- Theme e le fetileng
- Plugins tse di tlwaetseng ho batla
- Plugins tse di fana ka botshelo

Ha na ho nang le registration manually.

### Ho Baola Le Tlhaloso (Native Integration) {#native-integration}

Boikotse bo ikopotsa le Abilities API ea WordPress:

- Bo ikopotsa le core ea WordPress
- Bo ba lehle le admin ea WordPress
- Bo fana ka plugins tse dingwe tse ba u leboga le Abilities API
- Bo fana ho tloha ha WordPress e fetola

### Ho Baola Le Tlhaloso (Simplified Management) {#simplified-management}

- Ha na configuration files tse di fetileng
- Ha na registration manual ea ability
- Controls tsa Ability Visibility di ba lehle ka botshelo
- Admin notices di u ba lehle ho bona abilities tse ha di fana

### Boitshwaro Boikotso (Better Performance) {#better-performance}

- Abilities di cache (di tsamaisang)
- Di loadetseng ka tsela e fetileng (Lazy-loaded) ka botshelo
- Di o ikopotsa ho WordPress 7.0+

## Leano la Ho Fana (Migration Path) {#migration-path}

### Ha U na WordPress 6.x {#if-youre-on-wordpress-6x}

1. **Upgrade ho WordPress 7.0+** (ha u le fetileng)
2. **Update Superdav AI Agent** ho v1.12.0+
3. **Change third-party mode ho Auto** (ho fana; legacy mode ha se fetileng ho ba lehle)
4. **Review ability visibility** ho tloha ho ba lehle ka control ea tsamaisang

### Ha U na WordPress 7.0+ {#if-youre-on-wordpress-70}

1. **Update Superdav AI Agent** ho v1.12.0+
2. **Verify third-party mode e fetileng ho Auto** (e tla ba lehle ka botshelo)
3. **Review ability visibility** ho tloha ho ba lehle ka control ea tsamaisang
4. **Test third-party abilities** ho bona hore di ba lehle

## Ho Baola Le Tlhaloso (Troubleshooting) {#troubleshooting}

### Boikotso bo ikopotsa ha mode Auto {#abilities-arent-loading-in-auto-mode}

- Verify hore u na WordPress 7.0+
- Check hore third-party mode e fetileng ho "Auto"
- Verify hore plugin ea fana le ability e fetileng ho ba lehle
- Check WordPress error logs ho bona errors ea registration

### Ke batla ho ba le legacy mode {#i-want-to-keep-legacy-mode}

- Go to **Settings** → **Third-Party Mode** → **Mode Third-Party**
- Select **Legacy** → **Select Legacy**
- Click **Save**
- Legacy mode ha se fetileng ho ba lehle

### Boitsobo boitho ba kae e ne kae a reka {#my-custom-abilities-arent-showing}

- Re kea hore ka e le kae ho WordPress hooks ka e reka
- Re kea ka e le kae e fana ka e API ya Abilities ka e reka
- Re kea ka e le kae logs ya error ya WordPress
- Re kea ka e le kae page ya Ability Visibility ka e reka ka e reka

### Ke ka e le kae "unclassified ability" notices a reka {#im-getting-unclassified-ability-notices}

- Ke ka e le kae normal ho ka e fana ka e abilities ya third-party
- Re kea ka e reka ka e reka ka e admin notice
- Re kea ka e le kae Ability Visibility ka e reka ka e reka details ya classification

## Boikgwa boitho ba kae a reka (Backward Compatibility) {#backward-compatibility}

### Configurations e fapaneng {#existing-configurations}

Ka e le ka e fana ka e configurations ya third-party abilities:

- **Legacy mode**: Ka e fana ka e configuration ya ka e reka
- **Manual mode**: Ka e fana ka e configuration ya ka e reka
- **Auto mode**: Ka e fana ka e configuration ya ka e reka (auto mode o tla ba le)

Ka e fana ka e fana ka e configuration ya ka e reka, ka reka ka e le Manual kapa Legacy mode.

### Tlhaloso ya tsela ya ho fapaneng (Deprecation Timeline) {#deprecation-timeline}

- **v1.12.0**: Legacy and Manual modes ka e fana ka e fana
- **v1.13.0+**: Legacy mode ka e le kae a reka notices ya deprecation
- **v2.0.0**: Legacy mode ka e le kae a reka (a tla ba le)

## Boikgwa boitho ba kae a reka (Best Practices) {#best-practices}

### Ho kae ho fapaneng {#for-new-installations}

- Use Auto mode (ke e le default)
- Le Superdav AI Agent a reka abilities ka e reka ka e reka automatically
- Use Ability Visibility ka e reka access

### Ho kae e fana ka e fana {#for-existing-installations}

- Upgrade ka WordPress 7.0+ ka e ka e fana
- Switch ka Auto mode ka e le kae management ya ka e fana
- Re kea ka e reka ka e reka ka e reka using Ability Visibility

### Ho kae a reka abilities {#for-custom-abilities}

- Register abilities via WordPress hooks (Abilities API)
- Le ka e le kae ability registries ka e reka
- Test ka WordPress 7.0+ ka e Auto mode

## Tsela ya tsela ya ho fana (Next Steps) {#next-steps}

1. **Tseka versian ya WordPress**: Re tlhoka hore o le 7.0+ ho goba ka Mode a Auto
2. **Go bala Mode ya lapa la molao (third-party)**: Laola Settings le bala mode ya hau e le teng

3. **Lula haholo haholo tse a hlokang**: Thabela ka Mode a Auto ha u le WordPress 7.0+

4. **Letsa boitshwaro ba boitshwaro (Classify abilities)**: Bala le letsa boitshwaro bja bo ne ba le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo le mo
