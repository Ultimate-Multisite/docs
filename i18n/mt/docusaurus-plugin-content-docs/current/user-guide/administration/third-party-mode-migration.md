---
title: Migrazzjoni tal-Mod Third-Party
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migrazzjoni għall-Mod Estern (Third-Party Mode Migration)

Il-Superdav AI Agent v1.12.0 jgħatti bħal kif jintraddu l-abbilti esterni (third-party abilities). **Il-mod esterno jiddeċied il-auto** (auto), li jippermettix integrazzjoni nativa mal-WordPress Abilities API fuq WordPress 7.0+ b'mod automatiku, b'mod li ma għandekx tiġi konfigurata manualment.

## X'għadja kien? {#what-changed}

### Qabel v1.12.0 {#before-v1120}

Il-abbilti esterni kien għandhom konfigurarja manuali:

- Kien irriżuq b'espressjoni li għandek tivveglio "third-party mode"
- Il-abbilti kien jiġu karikati min żmien personalifikat (custom registry)
- L-integrazzjoni mal-WordPress Abilities API kien opzjonali
- Il-mod legacy kien il-default

### Wara v1.12.0 {#after-v1120}

Il-abbilti esterni jgħandu jworku b'mod awtomatiku:

- Il-mod esterno jiddeċied il-auto (auto)
- Il-abbilti jintegrazzżzaw nativament mal-WordPress Abilities API
- Ma għandekx konfigurarja manuali fuq WordPress 7.0+
- Il-mod legacy hija disponibbli għall-버żjonijiet qasra (older) ta WordPress

## Kien il-affettati? {#who-is-affected}

### Installazzjonijiet Nuwwa (WordPress 7.0+) {#new-installations-wordpress-70}

**Ma għandekx taf'el xogħol.** Il-mod esterno jiddeċied it-auto, u l-abbilti jgħandu jworku b'mod nativ (out of the box).

### Installazzjonijiet Eżistenti {#existing-installations}

**Il-settings tiegħek jitqassmu.** Jekk kien qed tiffaqa:

- **Mod legacy**: Tikkien f'mod legacy (ma għandu xi mudelli)
- **Mod esterno manuali**: Tikkien f'mod manuali (ma għandu xi mudelli)
- **Mod auto**: Tikkien jkompli b'mod auto (ma għandu xi mudelli)

### Verżjonijiet ta WordPress Qabel 7.0 {#wordpress-versions-before-70}

**Il-mod legacy hija disponibbli.** Jekk qed tiffaqa fuq WordPress 6.x jew aqcquer,

- Il-mod esterno jiddeċied il-legacy
- Tista' tgħallis il-mod esterno manuali se għandek biex
- Upgrade għal WordPress 7.0+ biex tiffaqa mal-Abilities API nativa

## Iffهم l-Modi {#understanding-the-modes}

### Mod Auto (Il-Default Nuwwa) {#auto-mode-new-default}

**Il-mod auto** jintegra nativament mal-WordPress Abilities API:

- Il-abbilti jiġu registrati b'hookijiet ta WordPress
- Kompatibbiltà kumplita mal-Abilities API ta WordPress 7.0+
- Diskoperfiment awtomatiku tal-abbilti esterni
- Ma għandekx konfigurarja manuali

**Meta l-uża**: WordPress 7.0+ مع capacità tad-third party

### Manual Mode (Mod Manual) {#manual-mode}

**Manual mode** għandu konfigurazzjoni espliċita:

- Tsegni li quali tad-third party li għandek laħaqqu
- Jien utlu għall-testing jew għall-loading selettiv tal-abilità
- Jiddeq bxejja b'filtri tal-configurazzjoni
- Più kontroll, iżda aktar preparazzjoni

**Meta l-uża**: Testing, loading selettiv tal-abilità, jew konfigurazzjonijiet kustomi

### Legacy Mode (Mod Legħa) {#legacy-mode}

**Legacy mode** jista'xxi is-sistema qadima tad-third party:

- Registry ta'abilità kustom (m'għandux WordPress Abilities API)
- Jien kompatibbli mal-versjonijiet qadime tal-WordPress
- M'għandux integrazzjoni nativa ma' WordPress
- Qad imminat, iżda jinkludi support

**Meta l-uża**: WordPress 6.x jew qad qadim, jew meta għandek bżonn kompatibilitaj legata

## Kontrolla Mod Attwali {#checking-your-current-mode}

### Via Admin Panel (Attra Pannell Administrazzjoni) {#via-admin-panel}

1. Irridi għal **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Iċċekkja għall-setting **Third-Party Mode**
3. Taraw il-mode attwali tiegħek u opzioni biex tgħmlih

### Via Code (Attra Kodu) {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', jew 'legacy'
```

## Bidla Mod Tajjeb {#changing-your-mode}

### Switch to Auto Mode (Bidla għal Auto Mode) {#switch-to-auto-mode}

Jekk qed fuq WordPress 7.0+ u tixtieq is-sistema auto mode:

1. Irridi għal **Superdav AI Agent** → **Settings**
2. Iċċekkja għall-setting **Third-Party Mode**
3. Sigli **Auto (WordPress Abilities API)**
4. Iċċekkja **Save**

Superdav AI Agent jikkawża u jisarja is-sistema tad-third party b'mod awtomatiku.

### Switch to Manual Mode (Bidla għal Manual Mode) {#switch-to-manual-mode}

Jekk tixtieq tista't kontrolli manuali quali li jidħlu:

1. Irridi għal **Superdav AI Agent** → **Settings**
2. Iċċekkja għall-setting **Third-Party Mode**
3. Sigli **Manual**
4. Iċċekkja **Save**
5. Edita il-file ta'configurazzjoni tiegħek biex tgħid quali li għandek laħaqqu

### Switch to Legacy Mode (Bidla għal Legacy Mode) {#switch-to-legacy-mode}

Jekk għandek bżonn kompatibilitaj legata:

1. Id-direttiva għall-**Superdav AI Agent** → **Settings**
2. Iċċekkja l-**Third-Party Mode** (Mod tal-Ttal-Tali)
3. Sigliġġi għal **Legacy** (Il-Qasir/L-Qasir)
4. Klikja fuq **Save** (Saħħa)

## Benefizzju ta' Auto Mode {#benefits-of-auto-mode}

### Skop Automatic {#automatic-discovery}

Il-Abilità (Abilities) jiġu skopati awtomatik min:

- Plugin li jkun installati
- Theme attivi
- Plugins li għandhom l-isteqs (Must-use plugins)
- Plugins b'drop-in

Ma għandux registrazzjoni manuali.

### Integrazzjoni Nativja {#native-integration}

Il-Abilità jiġu integrati mal-WordPress Abilities API:

- Kongruenti mal-core tal-WordPress
- Jidiru x-x-x mal-WordPress admin
- Kompatib ma' plugin oħra li jgħandu l-Abilities API
- Prepara għall-futur meta WordPress jikbir

### Aġġustament Semplifikat {#simplified-management}

- Ma hemm file ta konfigurarja biex tgħmli xi ħaġa
- Ma hemm registrazzjoni manuali tal-abilità
- Kontrolli l-Abilità Visibility jaħdmu awtomatik
- Notifikazzjonijiet tal-Admin jgħidlek fuq l-abilità li ma hija klasifikat

### Prestazzjoni Miglijor {#better-performance}

- Il-Abilità jiġu cache (cache)
- Jidiru lazy-loaded meta jkun għandhom bżonn
- Optimizati għal WordPress 7.0+

## Ittira ta' Migrazzjoni {#migration-path}

### Jekk qed tqemm il-WordPress 6.x {#if-youre-on-wordpress-6x}

1. **Upgrade għal WordPress 7.0+** (meta tkun jista')
2. **Iċċekkja l-Superdav AI Agent** għall-versjon v1.12.0+
3. **Biddil il-third-party mode għal Auto** (opzjonali; il-legacy mode jidiru wkoll)
4. **Riviedi l-ability visibility** biex tsegwu kontrolli aċċess appropriati

### Jekk qed tqemm il-WordPress 7.0+ {#if-youre-on-wordpress-70}

1. **Iċċekkja l-Superdav AI Agent** għall-versjon v1.12.0+
2. **Verifika li il-third-party mode huwa set għal Auto** (jista' jkun hemm minn dejjem)
3. **Riviedi l-ability visibility** biex tsegwu kontrolli aċċess appropriati
4. **Test il-third-party abilities** biex ti conferma li jaħdmu

## Problemi u Soluzzjonijiet (Troubleshooting) {#troubleshooting}

### Il-Abilità ma qed tqemm fil-auto mode {#abilities-arent-loading-in-auto-mode}

- Verifika li qed tqemm fuq WordPress 7.0+
- Iċċekkja li il-third-party mode set għal "Auto"
- Verifika li il-plugin li jgħid l-abilità attiv
- Iċċekkja l-WordPress error logs biex ti tkun għandek errori ta' registrazzjoni

### Jifxxi l-legacy mode {#i-want-to-keep-legacy-mode}

- Id-direttiva għall-**Settings** → **Third-Party Mode** (Mod tal-Ttal-Tali)
- Sigliġġi għal **Legacy** (Il-Qasir/L-Qasir)
- Klikja fuq **Save** (Saħħa)
- Il-legacy mode jidiru wkoll

### Il-Abilità Kustoma Mitta Ma Ma Qellu {#my-custom-abilities-arent-showing}

- Verifika li sò registrati tramite WordPress hooks
- Kontrolla li implementaw l'Abilities API correttamente
- Rivisita i log di errore ta WordPress
- Usa la pagina admin **Ability Visibility** per veder tutte l-abilità registrate

### Jidda "unclassified ability" (Abilità non classificata) {#im-getting-unclassified-ability-notices}

- Questo è normale per le nuove abilità di terzi
- Rivisita e classifica li nell'avviso admin
- Vidi **Ability Visibility** per dettagli sulla classificazione

## Backward Compatibility (Compatibilità all'indietro) {#backward-compatibility}

### Configurazioni Esistenti {#existing-configurations}

Se hai configurazioni esistenti di abilità di terzi:

- **Legacy mode (Modo Legacy)**: La tua configurazione continua a funzionare
- **Manual mode (Modo Manuali)**: La tua configurazione continua a funzionare
- **Auto mode (Modo Automatico)**: La tua configurazione viene ignorata (il modo automatico prende il controllo)

Per mantenere la tua configurazione kustoma, resta nel Modo Manuali o Legacy.

### Timeline di Deprecazione {#deprecation-timeline}

- **v1.12.0**: I modi Legacy e Manuali sono ancora pienamente supportati
- **v1.13.0+**: Il modo Legacy potè mostrare avvisi di deprecazione
- **v2.0.0**: Il modo Legacy potè veni rimosso (Da definire)

## Best Practices (Migliori Pratiche) {#best-practices}

### Per Nuvi Installazzjoni {#for-new-installations}

- Uża il Auto mode (għandu l-default)
- Lascia li Superdav AI Agent tiskopri l-abilità automaticament
- Uża Ability Visibility biex tkontrolli l-access

### Per Installazzjonijiet Esistenti {#for-existing-installations}

- Upgrade għal WordPress 7.0+ meta itkunsidra
- Switch għall-Auto mode biex tmur l-ġestjoni semplifika
- Rivisita u classifica l-abilità uża Ability Visibility

### Per Abilità Kustoma {#for-custom-abilities}

- Iscrivi l-abilità tramite WordPress hooks (Abilities API)
- Evita registri kustomi tal-abilità
- Testi fuq WordPress 7.0+ مع Auto mode

## Prossimu Passi {#next-steps}

1. **Kontrolli versjoni WordPress:** Assicurati li sei fuq 7.0+ għall-Auto mode
2. **Riviedi il modalità tat-terzji (third-party mode):** Irrivi għall-Settings u kontrolli il-mode li qed tikkunsidixxi
3. **Ipprovvdi aggiorna jekk hu għad ir-abbliż:** Switch għall-Auto mode se sei fuq WordPress 7.0+
4. **Klassifika l-abbliż:** Irrivi u klassifika jid-diffikult abliżi li ma huma klasifikati
5. **Testi:** Verifika li l-abbliżi tat-terzji tieħu funksi b'mod korrett

## Temi Relatati {#related-topics}

- **Abliżi Viżibbli (Ability Visibility):** Kontrolli li qed tispjetti abliżi f'fejn
- **WordPress Abilities API:** Imparati dwar ir-registrazzjoni nativa tal-WordPress tal-abilities
- **Applikazzjoni tat-terzji tal-abilities (Third-Party Ability Development):** Icrea abilities li jgħandu jaffu ma' Auto mode
