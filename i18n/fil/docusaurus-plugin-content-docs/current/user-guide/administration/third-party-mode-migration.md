---
title: Paglipat sa Third-Party Mode
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Paglipat sa Third-Party Mode {#third-party-mode-migration}

Binabago ng Superdav AI Agent v1.12.0 ang paraan ng paghawak sa mga third-party abilities. **Ang third-party mode ay default na naka-auto ngayon**, na nagpapahintulot ng native WordPress Abilities API integration sa WordPress 7.0+ nang hindi na kailangan ng manual na pag-configure.

## Ano ang Nagbago? {#what-changed}

### Bago ang v1.12.0 {#before-v1120}

Kailangan ng manual na pag-configure ang third-party abilities:

- Kailangan mong i-enable nang eksakto ang "third-party mode"
- Ang abilities ay kinukuha mula sa isang custom registry
- Opsyonal lang ang integration sa WordPress Abilities API
- Ang legacy mode ang default

### Pagkatapos ng v1.12.0 {#after-v1120}

Awtomatikong gumagana ang third-party abilities:

- Ang third-party mode ay default na "auto"
- Ang abilities ay nag-i-integrate nang native sa WordPress Abilities API
- Hindi na kailangan ng manual na pag-configure sa WordPress 7.0+
- Ang legacy mode ay available pa rin para sa mas lumang bersyon ng WordPress

## Sino ang Apektado? {#who-is-affected}

### Mga Bagong Installation (WordPress 7.0+) {#new-installations-wordpress-70}

**Walang aksyon na kailangan.** Ang third-party mode ay awtomatikong naka-set sa "auto," at gumagana ang abilities nang walang dagdag na setup.

### Mga Existing Installation {#existing-installations}

**Napananatili ang iyong mga settings.** Kung ginagamit mo ang:

- **Legacy mode**: Mananatili ka sa legacy mode (walang pagbabago)
- **Manual third-party mode**: Mananatili ka sa manual mode (walang pagbabago)
- **Auto mode**: Magpapatuloy ka sa auto mode (walang pagbabago)

### Mga Bersyon ng WordPress Bago ang 7.0 {#wordpress-versions-before-70}

**Available pa rin ang legacy mode.** Kung nasa WordPress 6.x o mas mababa ka:

- Ang third-party mode ay default na "legacy"
- Maaari mong i-enable nang manual ang third-party mode kung gusto mo
- Mag-upgrade sa WordPress 7.0+ para gamitin ang native Abilities API

## Pag-unawa sa mga Modes {#understanding-the-modes}

### Auto Mode (Bagong Default) {#auto-mode-new-default}

Gumagamit ang **Auto mode** ng native WordPress Abilities API integration:

- Ang abilities ay nire-register sa pamamagitan ng WordPress hooks
- Buong compatibility sa WordPress 7.0+ Abilities API
- Awtomatikong pagtuklas (discovery) ng third-party abilities
- Hindi kailangan ng manual na pag-configure

**Kailan gagamitin**: WordPress 7.0+ na may third-party abilities

### Manual Mode {#manual-mode}

Ang **Manual mode** ay nangangailangan ng explicit na pag-configure:

- Ikaw ang magtatakda kung aling third-party abilities ang i-lo-load
- Kapaki-pakinabang para sa pag-test o selective ability loading
- Nangangailangan ng pag-edit ng configuration files
- Mas maraming kontrol, ngunit mas maraming setup

**Kailan gagamitin**: Pag-test, selective ability loading, o custom configurations

### Legacy Mode {#legacy-mode}

Gumagamit ang **Legacy mode** ng lumang third-party ability system:

- Custom ability registry (hindi WordPress Abilities API)
- Backward compatible sa mas lumang bersyon ng WordPress
- Walang native WordPress integration
- Deprecated ngunit sinusuportahan pa rin

**Kailan gagamitin**: WordPress 6.x o mas mababa, o kapag kailangan mo ng legacy compatibility

## Pag-check sa Iyong Kasalukuyang Mode {#checking-your-current-mode}

### Sa Admin Panel {#via-admin-panel}

1. Pumunta sa **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Hanapin ang setting na **Third-Party Mode**
3. Makikita mo ang kasalukuyan mong mode at ang mga opsyon para baguhin ito

### Sa Code {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', or 'legacy'
```

## Pagpapalit ng Iyong Mode {#changing-your-mode}

### Paglipat sa Auto Mode {#switch-to-auto-mode}

Kung nasa WordPress 7.0+ ka at gusto mong gumamit ng auto mode:

1. Pumunta sa **Superdav AI Agent** → **Settings**
2. Hanapin ang **Third-Party Mode**
3. Piliin ang **Auto (WordPress Abilities API)**
4. I-click ang **Save**

Awtomatikong matutukoy at maire-register ng Superdav AI Agent ang third-party abilities.

### Paglipat sa Manual Mode {#switch-to-manual-mode}

Kung gusto mong manual na kontrolin kung aling abilities ang i-lo-load:

1. Pumunta sa **Superdav AI Agent** → **Settings**
2. Hanapin ang **Third-Party Mode**
3. Piliin ang **Manual**
4. I-click ang **Save**
5. I-edit ang iyong configuration file para tukuyin kung aling abilities ang i-lo-load

### Paglipat sa Legacy Mode {#switch-to-legacy-mode}

Kung kailangan mo ng legacy compatibility:

1. Pumunta sa **Superdav AI Agent** → **Settings**
2. Hanapin ang **Third-Party Mode**
3. Piliin ang **Legacy**
4. I-click ang **Save**

## Mga Benepisyo ng Auto Mode {#benefits-of-auto-mode}

### Automatic Discovery {#automatic-discovery}

Awtomatikong natutukoy ang abilities mula sa:

- Installed plugins
- Active theme
- Must-use plugins
- Drop-in plugins

Hindi na kailangan ng manual na pag-register.

### Native Integration {#native-integration}

Nag-i-integrate ang abilities sa WordPress Abilities API:

- Consistent sa WordPress core
- Gumagana sa WordPress admin
- Compatible sa ibang plugins na gumagamit ng Abilities API
- Future-proof habang nagbabago ang WordPress

### Simplified Management {#simplified-management}

- Walang configuration files na kailangang i-edit
- Walang manual ability registration
- Awtomatikong gumagana ang Ability Visibility controls
- Nagpapaalala sa admin notices tungkol sa mga abilities na hindi nakakategorya

### Better Performance {#better-performance}

- Ang abilities ay naka-cache
- Lazy-loaded on demand
- Optimized para sa WordPress 7.0+

## Migration Path {#migration-path}

### Kung Nasa WordPress 6.x Ka {#if-youre-on-wordpress-6x}

1. **Mag-upgrade sa WordPress 7.0+** (kapag handa na)
2. **I-update ang Superdav AI Agent** sa v1.12.0+
3. **Baguhin ang third-party mode sa Auto** (opsyonal; gumagana pa rin ang legacy mode)
4. **Suriin ang ability visibility** para masigurong tama ang access controls

### Kung Nasa WordPress 7.0+ Ka {#if-youre-on-wordpress-70}

1. **I-update ang Superdav AI Agent** sa v1.12.0+
2. **Beripikahin na ang third-party mode ay naka-set sa Auto** (dapat ito ang default)
3. **Suriin ang ability visibility** para masigurong tama ang access controls
4. **Subukan ang third-party abilities** para kumpirmahin na gumagana ang mga ito

## Troubleshooting {#troubleshooting}

### Hindi naglo-load ang abilities sa auto mode {#abilities-arent-loading-in-auto-mode}

- Beripikahin na nasa WordPress 7.0+ ka
- Tiyakin na ang third-party mode ay naka-set sa "Auto"
- Beripikahin na active ang plugin na nagbibigay ng ability
- Tingnan ang WordPress error logs para sa mga registration errors

### Gusto kong panatilihin ang legacy mode {#i-want-to-keep-legacy-mode}

- Pumunta sa **Settings** → **Third-Party Mode**
- Piliin ang **Legacy**
- I-click ang **Save**
- Magpapatuloy pa rin ang paggana ng legacy mode

### Hindi lumalabas ang aking custom abilities {#my-custom-abilities-arent-showing}

- Beripikahin na nire-register ang mga ito sa pamamagitan ng WordPress hooks
- Tiyakin na tama nilang ginagamit ang Abilities API
- Suriin ang WordPress error logs
- Gamitin ang admin page na **Ability Visibility** para makita ang lahat ng nire-register na abilities

### Nakakatanggap ako ng "unclassified ability" notices {#im-getting-unclassified-ability-notices}

- Normal ito para sa mga bagong third-party abilities
- Suriin at i-classify ang mga ito sa admin notice
- Tingnan ang **Ability Visibility** para sa detalye tungkol sa classification

## Backward Compatibility {#backward-compatibility}

### Existing Configurations {#existing-configurations}

Kung mayroon kang umiiral na third-party ability configurations:

- **Legacy mode**: Magpapatuloy ang paggana ng iyong configuration
- **Manual mode**: Magpapatuloy ang paggana ng iyong configuration
- **Auto mode**: Hindi gagamitin ang iyong configuration (ang auto mode ang magpapatakbo)

Para mapanatili ang iyong custom configuration, manatili sa Manual o Legacy mode.

### Deprecation Timeline {#deprecation-timeline}

- **v1.12.0**: Ang Legacy at Manual modes ay ganap na sinusuportahan pa rin
- **v1.13.0+**: Maaaring magpakita ng deprecation notices ang Legacy mode
- **v2.0.0**: Maaaring tanggalin ang Legacy mode (TBD)

## Best Practices {#best-practices}

### Para sa Bagong Installation {#for-new-installations}

- Gamitin ang Auto mode (ito ang default)
- Hayaan ang Superdav AI Agent na awtomatikong matukoy ang abilities
- Gamitin ang Ability Visibility para kontrolin ang access

### Para sa Existing Installation {#for-existing-installations}

- Mag-upgrade sa WordPress 7.0+ kung maaari
- Lumipat sa Auto mode para sa mas simpleng pamamahala
- Suriin at i-classify ang abilities gamit ang Ability Visibility

### Para sa Custom Abilities {#for-custom-abilities}

- I-register ang abilities sa pamamagitan ng WordPress hooks (Abilities API)
- Iwasan ang custom ability registries
- Subukan sa WordPress 7.0+ gamit ang Auto mode

## Next Steps {#next-steps}

1. **Tingnan ang iyong WordPress version**: Beripikahin na nasa 7.0+ ka para sa Auto mode
2. **Suriin ang iyong third-party mode**: Pumunta sa Settings at tingnan ang kasalukuyan mong mode
3. **I-update kung kinakailangan**: Lumipat sa Auto mode kung nasa WordPress 7.0+ ka
4. **I-classify ang abilities**: Suriin at i-classify ang anumang unclassified abilities
5. **Subukan**: Beripikahin na gumagana nang tama ang iyong third-party abilities

## Related Topics {#related-topics}

- **Ability Visibility**: Kontrolin kung aling abilities ang ipinapakita saan
- **WordPress Abilities API**: Matuto tungkol sa native WordPress ability registration
- **Third-Party Ability Development**: Gumawa ng abilities na gumagana sa Auto mode
