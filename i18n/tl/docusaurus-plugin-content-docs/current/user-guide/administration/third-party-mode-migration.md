---
title: Migrasyon ng Third-Party Mode
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migrasyon sa Third-Party Mode {#third-party-mode-migration}

Ang Superdav AI Agent v1.12.0 ay nagbabago kung paano hinahandle ang mga kakayahan ng third-party. **Ang third-party mode ngayon ay default na "auto",** na nagbibigay-daan para sa native WordPress Abilities API integration sa WordPress 7.0+ nang walang manual na pag-configure.

## Ano ang Nagbago? {#what-changed}

### Bago ang v1.12.0 {#before-v1120}

Kailangan ng manual na pag-configure ang mga third-party abilities:

- Kailangan mong pilitin ang "third-party mode"
- Ang mga abilities ay ina-load mula sa isang custom registry
- Ang integrasyon sa WordPress Abilities API ay optional lang
- Ang legacy mode ang default

### Pagkatapos ng v1.12.0 {#after-v1120}

Awtomatikong gumagana ang mga third-party abilities:

- Ang third-party mode ay default na "auto"
- Ang mga abilities ay direktang nakakabit (natively integrate) sa WordPress Abilities API
- Walang manual na configuration na kailangan sa WordPress 7.0+
- Ang legacy mode ay available pa rin para sa mas lumang bersyon ng WordPress

## Sino ang Apektado? {#who-is-affected}

### Mga Bagong Instalasyon (WordPress 7.0+) {#new-installations-wordpress-70}

**Walang kailangang gawin.** Ang third-party mode ay awtomatikong itinakda sa "auto", at gumagana agad ang mga abilities nang walang anumang pagbabago.

### Mga Kasalukuyang Instalasyon {#existing-installations}

**Ang iyong settings ay mapapanatili.** Kung ginagamit mo dati ang:

- **Legacy mode**: Mananatili ka sa legacy mode (walang pagbabago)
- **Manual third-party mode**: Mananatili ka sa manual mode (walang pagbabago)
- **Auto mode**: Magpapatuloy ka sa auto mode (walang pagbabago)

### Mga Bersyon ng WordPress Bago ang 7.0 {#wordpress-versions-before-70}

**Available pa rin ang legacy mode.** Kung nasa WordPress 6.x o mas luma ka:

- Ang third-party mode ay default na "legacy"
- Maaari mo itong i-enable nang manual kung gusto mo
- Mag-upgrade sa WordPress 7.0+ para gamitin ang native Abilities API

## Pag-unawa sa mga Modes {#understanding-the-modes}

### Auto Mode (Bagong Default) {#auto-mode-new-default}

**Auto mode** ay gumagamit ng native WordPress Abilities API integration:

- Ang mga abilities ay ini-register gamit ang WordPress hooks
- Buong compatibility sa WordPress 7.0+ Abilities API
- Awtomatikong pagtuklas ng mga third-party abilities
- Walang manual na configuration na kailangan

**Kailan Gagamitin**: WordPress 7.0+ na may third-party abilities

### Manual Mode {#manual-mode}

Ang **manual mode** ay nangangailangan ng malinaw na pag-configure:

- Tinutukoy mo kung aling mga third-party ability ang i-load
- Nakakatulong ito para sa testing o piniling pag-load ng ability
- Nangangailangan itong pag-edit ng configuration files
- Mas maraming kontrol, pero mas maraming setup

**Kailan Gagamitin**: Testing, piniling pag-load ng ability, o mga custom na configuration

### Legacy Mode {#legacy-mode}

Ang **legacy mode** ay gumagamit ng lumang sistema ng third-party ability:

- Custom ability registry (hindi WordPress Abilities API)
- Backward compatible sa mas lumang bersyon ng WordPress
- Walang native WordPress integration
- Napapabayaan na pero sinusuportahan pa rin

**Kailan Gagamitin**: WordPress 6.x o mas luma, o kapag kailangan mo ng legacy compatibility

## Pagtingin sa Kasalukuyang Mode Mo {#checking-your-current-mode}

### Sa Pamamagitan ng Admin Panel {#via-admin-panel}

1. Pumunta sa **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Hanapin ang setting na **Third-Party Mode**
3. Makikita mo ang kasalukuyan mong mode at mga opsyon para baguhin ito

### Sa Pamamagitan ng Code {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', o 'legacy'
```

## Pagbabago sa Iyong Mode {#changing-your-mode}

### Lumipat sa Auto Mode {#switch-to-auto-mode}

Kung nasa WordPress 7.0+ ka at gusto mong gamitin ang auto mode:

1. Pumunta sa **Superdav AI Agent** → **Settings**
2. Hanapin ang **Third-Party Mode**
3. Piliin ang **Auto (WordPress Abilities API)**
4. I-click ang **Save**

Awtomatikong madidiskubre at ire-register ng Superdav AI Agent ang mga third-party abilities.

### Lumipat sa Manual Mode {#switch-to-manual-mode}

Kung gusto mong manu-manong kontrolin kung aling mga ability ang maglo-load:

1. Pumunta sa **Superdav AI Agent** → **Settings**
2. Hanapin ang **Third-Party Mode**
3. Piliin ang **Manual**
4. I-click ang **Save**
5. I-edit ang iyong configuration file para tukuyin kung aling mga ability ang i-load

### Lumipat sa Legacy Mode {#switch-to-legacy-mode}

Kung kailangan mo ng legacy compatibility:

1. Pumunta sa **Superdav AI Agent** → **Settings**
2. Hanapin ang **Third-Party Mode**
3. Piliin ang **Legacy**
4. I-click ang **Save**

## Mga Benepisyo ng Auto Mode {#benefits-of-auto-mode}

### Awtomatikong Paghahanap (Automatic Discovery) {#automatic-discovery}

Awtomatikong natutuklasan ang mga kakayahan mula sa:

- Mga naka-install na plugin
- Aktibong theme
- Must-use plugins
- Drop-in plugins

Walang kailangang manual na pagrehistro.

### Katutubong Integrasyon (Native Integration) {#native-integration}

Ang mga kakayahan ay nakikipag-ugnayan sa WordPress Abilities API:

- Pareho ng WordPress core
- Gumagana sa WordPress admin
- Compatible sa ibang plugins na gumagamit ng Abilities API
- Future-proof habang nagbabago ang WordPress

### Pinadaling Pamamahala (Simplified Management) {#simplified-management}

- Walang configuration files na kailangang i-edit
- Walang manual na pagrehistro ng ability
- Awtomatikong gumagana ang Ability Visibility controls
- Nagbibigay ng alerto sa Admin notices kung may mga hindi nakaklasipikadong abilities

### Mas Magandang Performance (Better Performance) {#better-performance}

- Ang mga Abilities ay naka-cache
- Lazy-loaded on demand
- Pinamahalaan para sa WordPress 7.0+

## Daan Patungo sa Migrasyon (Migration Path) {#migration-path}

### Kung nasa WordPress 6.x Ka Pa {#if-youre-on-wordpress-6x}

1. **Mag-upgrade sa WordPress 7.0+** (kapag handa na)
2. **I-update ang Superdav AI Agent** patungong v1.12.0+
3. **Baguhin ang third-party mode sa Auto** (opsyonal; gumagana pa rin ang legacy mode)
4. **Suriin ang ability visibility** para masigurado ang tamang access controls

### Kung nasa WordPress 7.0+ Ka Pa {#if-youre-on-wordpress-70}

1. **I-update ang Superdav AI Agent** patungong v1.12.0+
2. **Beripikahin na naka-set ang third-party mode sa Auto** (karaniwan itong default)
3. **Suriin ang ability visibility** para masigurado ang tamang access controls
4. **Subukan ang third-party abilities** para kumpirmahin na gumagana sila

## Pag-troubleshoot (Troubleshooting) {#troubleshooting}

### Hindi naglo-load ang Abilities sa auto mode {#abilities-arent-loading-in-auto-mode}

- Siguraduhin na nasa WordPress 7.0+ ka
- Tingnan kung naka-set ang third-party mode sa "Auto"
- Beripikahin na aktibo ang plugin na nagbibigay ng ability
- Suriin ang WordPress error logs para sa mga registration errors

### Gusto ko pang panatiliin ang legacy mode {#i-want-to-keep-legacy-mode}

- Pumunta sa **Settings** → **Third-Party Mode**
- Piliin ang **Legacy**
- I-click ang **Save**
- Ang legacy mode ay magpapatuloy na gumagana

### Hindi hindi lumalabas ang mga custom abilities ko {#my-custom-abilities-arent-showing}

- Siguraduhin na naka-register sila gamit ang WordPress hooks
- Tingnan kung tama ang implementasyon nila ng Abilities API
- Suriin ang WordPress error logs
- Gamitin ang admin page na **Ability Visibility** para makita lahat ng naka-register na abilities

### Nakakakuha ako ng mga "unclassified ability" notices {#im-getting-unclassified-ability-notices}

- Normal ito para sa mga bagong third-party abilities
- Suriin at i-classify sila sa admin notice
- Tingnan ang **Ability Visibility** para sa detalye tungkol sa pag-classify

## Backward Compatibility {#backward-compatibility}

### Mga Kasalukuyang Configuration {#existing-configurations}

Kung mayroon kang mga existing third-party ability configurations:

- **Legacy mode**: Patuloy na gumagana ang iyong configuration
- **Manual mode**: Patuloy na gumagana ang iyong configuration
- **Auto mode**: Hindi binibigyan ng pansin ang iyong configuration (ang auto mode ang uunahin)

Para mapanatili ang iyong custom configuration, manatili sa Manual o Legacy mode.

### Timeline ng Deprecation {#deprecation-timeline}

- **v1.12.0**: Ang Legacy at Manual modes ay buo pa ring sinusuportahan
- **v1.13.0+**: Maaaring magpakita ng mga deprecation notices ang Legacy mode
- **v2.0.0**: Maaaring tanggalin ang Legacy mode (TBD)

## Mga Best Practices {#best-practices}

### Para sa Bagong Instalasyon {#for-new-installations}

- Gamitin ang Auto mode (ito ang default)
- Hayaan ang Superdav AI Agent na tuklasin ang mga abilities nang awtomatiko
- Gamitin ang Ability Visibility para kontrolin ang access

### Para sa mga Existing Installation {#for-existing-installations}

- Mag-upgrade sa WordPress 7.0+ kung maaari
- Lumipat sa Auto mode para sa mas simpleng pamamahala
- Suriin at i-classify ang mga abilities gamit ang Ability Visibility

### Para sa Custom Abilities {#for-custom-abilities}

- I-register ang mga abilities gamit ang WordPress hooks (Abilities API)
- Iwasan ang paggawa ng sariling custom ability registries
- Mag-test sa WordPress 7.0+ na may Auto mode

## Mga Susunod na Hakbang {#next-steps}

1. **Tingnan ang bersyon ng iyong WordPress**: Siguraduhin na nasa 7.0+ ka para sa Auto mode
2. **Suriin ang iyong third-party mode**: Pumunta sa Settings at tingnan kung anong mode ang kasalukuyan mo
3. **Mag-update kung kailangan**: Lumipat sa Auto mode kung ikaw ay nasa WordPress 7.0+
4. **Iuri ang mga kakayahan (Classify abilities)**: Suriin at iuri ang anumang hindi pa nauri o klasipikahin na kakayahan
5. **Subukan (Test)**: Siguraduhin na gumagana nang tama ang iyong third-party abilities
