---
title: Migrasyon sa Third-Party Mode
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migration sa Third-Party Mode {#third-party-mode-migration}

Ang Superdav AI Agent v1.12.0 nagbag-o kung paano giatiman ang mga third-party ability. **Ang third-party mode karon default na "auto",** nga nagtugot sa native WordPress Abilities API integration sa WordPress 7.0+ para dili na kinahanglan og manual setup.

## Unsa'y Nagbag-o? {#what-changed}

### Sa Una kay v1.12.0 {#before-v1120}

Kinahanglan nimo og manual configuration ang mga third-party ability:

- Kinahanglan nimong i-enable ang "third-party mode"
- Ang mga ability gikuha gikan sa usa ka custom registry
- Ang integration sa WordPress Abilities API pwedeng optional lang
- Ang legacy mode mao ang default

### Human kay v1.12.0 {#after-v1120}

Ang mga third-party ability nagtrabaho na automatic:

- Ang third-party mode default na "auto"
- Ang mga ability nag-integrate natural sa WordPress Abilities API
- Walay manual configuration nga kinahanglan buhaton sa WordPress 7.0+
- Ang legacy mode pwedeng gamiton gihapon para sa mas daan nga mga bersyon sa WordPress

## Kinsa ang Maapektuhan? {#who-is-affected}

### Bag-ong Instalasyon (WordPress 7.0+) {#new-installations-wordpress-70}

**Walay kinahanglan buhaton.** Ang third-party mode awtomatikong gi-set sa "auto", ug ang mga ability molihok na gikan sa una ra.

### Nag-exist na nga Instalasyon {#existing-installations}

**Ang imong settings gipreserba.** Kung gigamit nimo:

- **Legacy mode**: Magpabilin ka sa legacy mode (walay kausaban)
- **Manual third-party mode**: Magpabilin ka sa manual mode (walay kausaban)
- **Auto mode**: Magpadayon ka sa auto mode (walay kausaban)

### Mga Bersyon sa WordPress Sa Una kay 7.0 {#wordpress-versions-before-70}

**Ang legacy mode pwedeng gamiton gihapon.** Kung anaa ka sa WordPress 6.x o mas daan:

- Ang third-party mode default na "legacy"
- Pwede nimo i-enable ang third-party mode manually kung gusto nimo
- Mag-upgrade ngadto sa WordPress 7.0+ para gamiton ang native Abilities API

## Pagkasabot sa mga Modes {#understanding-the-modes}

### Auto Mode (Bag-ong Default) {#auto-mode-new-default}

**Auto mode** naggamit sa native WordPress Abilities API integration:

- Ang mga ability gi-register pinaagi sa WordPress hooks
- Bug-os nga compatibility sa WordPress 7.0+ Abilities API
- Awtonom nga pagkadiskubre sa third-party abilities
- Walay manual configuration nga kinahanglan buhaton

**Kanusog gamiton**: WordPress 7.0+ uban sa mga third-party nga abilidad

### Manual Mode {#manual-mode}

Ang **manual mode** nagkinahanglan og klaro nga pag-configure:

- Ikaw magisipon kung unsang third-party abilities ang i-load
- Makatabang kini para sa testing o pilion nga pag-load sa ability
- Kinahanglan nimo i-edit ang configuration files
- Mas daghan og kontrol, pero mas daghan pud og setup

**Kanusog gamiton**: Testing, pilion nga pag-load sa ability, o custom configurations

### Legacy Mode {#legacy-mode}

Ang **legacy mode** naggamit sa daan nga sistema sa third-party ability:

- Custom ability registry (dili WordPress Abilities API)
- Backwards compatible sa mas daan nga mga bersyon sa WordPress
- Walay native integration sa WordPress
- Deprecated na pero gi-support gihapon

**Kanusog gamiton**: WordPress 6.x o mas sayon pa, o kung kinahanglan nimo ang legacy compatibility

## Pag-check sa Imong Kasamtangang Mode {#checking-your-current-mode}

### Pinaagi sa Admin Panel {#via-admin-panel}

1. Adto sa **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Pangitaa ang setting nga **Third-Party Mode**
3. Makita nimo ang imong kasamtangang mode ug mga option para usbon kini

### Pinaagi sa Code {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', o 'legacy'
```

## Pag-usab sa Imong Mode {#changing-your-mode}

### Switch ng Auto Mode {#switch-to-auto-mode}

Kung anaa ka sa WordPress 7.0+ ug gusto nimo gamiton ang auto mode:

1. Adto sa **Superdav AI Agent** → **Settings**
2. Pangitaa ang **Third-Party Mode**
3. Pilia ang **Auto (WordPress Abilities API)**
4. I-click ang **Save**

Ang Superdav AI Agent awtomatikong makadiskubre ug magparehistro sa mga third-party abilities.

### Switch ng Manual Mode {#switch-to-manual-mode}

Kung gusto nimo i-control manually kung unsang abilities ang i-load:

1. Adto sa **Superdav AI Agent** → **Settings**
2. Pangitaa ang **Third-Party Mode**
3. Pilia ang **Manual**
4. I-click ang **Save**
5. I-edit ang imong configuration file para isulti kung unsang abilities ang i-load

### Switch ng Legacy Mode {#switch-to-legacy-mode}

Kung kinahanglan nimo ang legacy compatibility:

1. Padulong sa **Superdav AI Agent** → **Settings**
2. Pangitaa ang **Third-Party Mode**
3. Piliha ang **Legacy**
4. I-click ang **Save**

## Mga Benepisyo ng Auto Mode {#benefits-of-auto-mode}

### Awtomatikong Paghukom (Automatic Discovery) {#automatic-discovery}

Ang mga abilidad awtomatikong matutuklasan gikan sa:

- Mga naka-install nga plugin
- Aktibong theme
- Must-use plugins
- Drop-in plugins

Walay kinahanglan nga manual registration.

### Katilingban nga Integrasyon (Native Integration) {#native-integration}

Ang mga abilidad nag-integrate sa WordPress Abilities API:

- Pareho sa WordPress core
- Nagtrabaho sa WordPress admin
- Compatible sa ubang mga plugin gamit ang Abilities API
- Future-proof samtang nag-uswag ang WordPress

### Ginhawa nga Pagdumala (Simplified Management) {#simplified-management}

- Walay configuration files nga kinahanglan i-edit
- Walay manual registration sa abilidad
- Ang Ability Visibility controls awtomatikong molihok
- Ang Admin notices maghatag kanimo og alerto bahin sa mga abilidad nga wala giclassifya

### Mas Maayo nga Performance (Better Performance) {#better-performance}

- Ang mga abilities gipahimutang (cached)
- Lazy-loaded kung kinahanglan lang kini gamiton
- Gi-optimize para sa WordPress 7.0+

## Dalan sa Migrasyon (Migration Path) {#migration-path}

### Kung Anaa Ka sa WordPress 6.x {#if-youre-on-wordpress-6x}

1. **I-upgrade ngadto sa WordPress 7.0+** (pagkaandam na)
2. **I-update ang Superdav AI Agent** ngadto sa v1.12.0+
3. **Usbon ang third-party mode ngadto sa Auto** (optional; nagtrabaho gihapon ang legacy mode)
4. **Susiha ang ability visibility** aron masiguro ang husto nga access controls

### Kung Anaa Ka sa WordPress 7.0+ {#if-youre-on-wordpress-70}

1. **I-update ang Superdav AI Agent** ngadto sa v1.12.0+
2. **Siguraduhon nga ang third-party mode gi-set sa Auto** (kinahanglan na kini default)
3. **Susiha ang ability visibility** aron masiguro ang husto nga access controls
4. **I-test ang third-party abilities** aron makumpirma nga nagtrabaho sila

## Pag-troubleshoot (Troubleshooting) {#troubleshooting}

### Wala mag-load ang mga Abilities sa auto mode {#abilities-arent-loading-in-auto-mode}

- Siguraduhon nga anaa ka sa WordPress 7.0+
- Susiha kung ang third-party mode gi-set sa "Auto"
- Siguraduhon nga ang plugin nga naghatag sa abilidad aktibo
- Susiha ang WordPress error logs para sa mga sayop sa registration

### Gusto nako ipadayon ang legacy mode {#i-want-to-keep-legacy-mode}

- Padulong sa **Settings** → **Third-Party Mode**
- Piliha ang **Legacy**
- I-click ang **Save**
- Ang legacy mode magpadayon nga molihok

### Wala akong makita sa akong mga custom abilities {#my-custom-abilities-arent-showing}

- Siguraduhon nga naka-register sila pinaagi sa WordPress hooks
- Siguraduhon nga tama ang pag-implementar nila sa Abilities API
- I-review ang WordPress error logs
- Gamita ang admin page nga **Ability Visibility** para makita ang tanang na-register nga abilities

### Nakakuha ko og mga "unclassified ability" notices {#im-getting-unclassified-ability-notices}

- Normal ni para sa bag-ong third-party abilities
- I-review ug i-classify sila sa admin notice
- Makita ang **Ability Visibility** para sa detalye bahin sa classification

## Backward Compatibility {#backward-compatibility}

### Nagigulang nga mga Configuration {#existing-configurations}

Kung naa kay existing third-party ability configurations:

- **Legacy mode**: Ang imong configuration nagpadayon sa pagtrabaho
- **Manual mode**: Ang imong configuration nagpadayon sa pagtrabaho
- **Auto mode**: Ang imong configuration gi-ignore (ang auto mode ang molihok)

Para mapadayon ang imong custom configuration, magpabilin sa Manual o Legacy mode.

### Timeline sa Deprecation {#deprecation-timeline}

- **v1.12.0**: Ang Legacy ug Manual modes nagpadayon pa og bug-os nga suporta
- **v1.13.0+**: Ang Legacy mode mahimong ipakita ang mga deprecation notices
- **v2.0.0**: Ang Legacy mode mahimong mawala (TBD)

## Best Practices {#best-practices}

### Para sa Bag-ong Instalasyon {#for-new-installations}

- Gamita ang Auto mode (ini ang default)
- Pabayaan ang Superdav AI Agent nga makadiskubre og abilities awtomatiko
- Gamita ang Ability Visibility para kontrolon ang access

### Para sa Nagigulang nga mga Instalasyon {#for-existing-installations}

- I-upgrade ng WordPress 7.0+ kung posible
- Switch sa Auto mode para sa mas simple nga pag-manage
- I-review ug i-classify ang abilities gamit ang Ability Visibility

### Para sa Custom Abilities {#for-custom-abilities}

- I-register ang abilities pinaagi sa WordPress hooks (Abilities API)
- Iwasan ang custom ability registries
- I-test sa WordPress 7.0+ uban sa Auto mode

## Sunod nga mga Lakang {#next-steps}

1. **Suri sa imong bersyon sa WordPress**: Siguraduhon nga naa ka sa 7.0+ para sa Auto mode
2. **Susi sa imong third-party mode**: Adto sa Settings ug tan-awa kung unsa ang imong kasamtangang mode
3. **Update kung kinahanglan**: Switch sa Auto mode kung ikaw anaa sa WordPress 7.0+
4. **Klasipika ang mga abilidad**: Tan-awa ug klasipika ang bisan unsang wala pa gi-classify nga mga abilidad
5. **Testi**: Siguraduhon nga maayo ang pagtrabaho sa imong third-party abilities

## Mga May Kalabotan (Related Topics) {#related-topics}

- **Ability Visibility**: Kontrolar kung asa ipakita ang mga abilidad
- **WordPress Abilities API**: Magtuon bahin sa natural nga pagparehistro sa WordPress ability
- **Third-Party Ability Development**: Paghimo og mga abilities nga molihok uban sa Auto mode
