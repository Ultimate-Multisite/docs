---
title: Kugadzirisa Mhando Yechitatu
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migrasheni ku Modu ya Tatu (Third-Party Mode Migration) {#third-party-mode-migration}

Superdav AI Agent v1.12.0 inengei nzira sei zvinhu zvinogadzirwa nevanhu (third-party abilities). **Modu ya tatu (third-party mode) ndichibva inoshandiswa nekuti "auto" (kufanana nekuenda kwawo), izviro izvi zvinoita WordPress Abilities API integration yakaita WordPress 7.0+ pane kuita, uye haunoda kutaura kuti uingire configuration.**

## Zvinotevera? {#what-changed}

### Usati v1.12.0 {#before-v1120}

Zviro zvinogadzirwa nevanhu (third-party abilities) zvandinoda kutora configuration yakaita izvo:

- Unenge ukasimba "third-party mode" (modu ya tatu).
- Zviro zvinogadzirwa kubva mumapuro (custom registry).
- Integration ne WordPress Abilities API inoshandiswa nekuti chii chinogona kuenda kana haunoda.
- Modu ya zamu (legacy mode) ndiyo inoshandiswa.

### Pangu v1.12.0 {#after-v1120}

Zviro zvinogadzirwa nevanhu zvinoita nekuti:

- Modu ya tatu inoshandiswa nekuti "auto".
- Zviro zvinogadzirwa nekubatsira (integrate) ne WordPress Abilities API yakaita izvo.
- Haunoda kutora configuration yakaita WordPress 7.0+ pane kuita.
- Modu ya zamu inobva kuva yakaita kuti iwe uende munyanya (legacy mode).

## Vanhu Vachiri Kuti Vangatsanana? {#who-is-affected}

### Kuratidza Kubva (New Installations) (WordPress 7.0+) {#new-installations-wordpress-70}

**Haunoda kutora kuti uingire zvinhu.** Modu ya tatu inoshandiswa nekuti "auto" nekuita, uye zviro zvinogadzirwa zvinoita kubva kunyanya (out of the box).

### Kuratidza Kubva (Existing Installations) {#existing-installations}

**Settings dzako dzinobva kuenda.** Kana uingine:

- **Modu ya zamu (Legacy mode)**: Uingakubva munyanya (legacy mode) (haunoda kutaura).
- **Modu ya tatu yakaita kuti iwe utore configuration**: Uingakubva modunhu (manual mode) (haunoda kutaura).
- **Modu ya auto**: Unenge uende nemodu ya auto (haunoda kutaura).

### WordPress Versions Zvinotevera 7.0 {#wordpress-versions-before-70}

**Modu ya zamu inobva kuenda.** Kana uchiti munyanya we WordPress 6.x kana kupfuura:

- Modu ya tatu inoshandiswa nekuti "legacy".
- Unenge ukasimba modu ya tatu nekuti unoda.
- Uingire (upgrade) ku WordPress 7.0+ kuti uende nemuseya we Abilities API yakaita izvo.

## Kutaura Modu Dzai {#understanding-the-modes}

### Modu ya Auto (New Default) {#auto-mode-new-default}

**Modu ya auto** inoshandiswa neintegration yakaita WordPress Abilities API:

- Zviro zvinogadzirwa kubva mumapuro (hooks).
- Kubatsira kwakakosha ne Abilities API yakaita WordPress 7.0+ pane kuita.
- Kuti zvigadzirwa nekubatsira zviro zvevanhu (third-party abilities) zvinoita.
- Haunoda kutora configuration yakaita izvo.

**Nenzanai**: WordPress 7.0+ neine zvinhuita nemaitiro ekunzwisisa (third-party abilities)

### Manual Mode {#manual-mode}

**Manual mode** inoda kuti uingire configuration yakakwana:

- Unozivisa kuti upfungira maitiro anonyanya (abilities) anozivisa
- Inenge inonaka kune kuona kana kuingira maitiro zvako zvichinguva kana kuingira maitiro zvakasiendeki
- Inoda kunge unogara munenge uendeka configuration files
- Unodiwa zvakawanda, asi unoda kuratidza zvakawanda

**Nenzanai**: Kuona (testing), kuingira maitiro anonyanya zvichinguva kana kuingira maitiro zvakasiendeki, kana kuratidza configurations dzako dzinogara.

### Legacy Mode {#legacy-mode}

**Legacy mode** inoshandisa nzira yakare ya maitiro anonyanya:

- Registry ya maitiro yakakwana (siyana ne WordPress Abilities API)
- Inenge inobva nekubatsirwa neWordPress versions dzakare
- Haina kugara neintegration ya native yaWordPress
- Inoda kuva yakare asi inogara kubatsirwa

**Nenzanai**: WordPress 6.x kana yakare, kana kana unoda kuratidza compatibility ya legacy

## Kuona Mode Yako Yekuru {#checking-your-current-mode}

### NeAdmin Panel {#via-admin-panel}

1. Panda **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Unozviona chii cha **Third-Party Mode** setting
3. Uona mode yako yekuru uye zvinhu dzinogona kuva pachangu

### NeCode {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', kana 'legacy'
```

## Kusimbisa Mode Yako {#changing-your-mode}

### Kuti Ungeita Auto Mode {#switch-to-auto-mode}

Kana uri munzira WordPress 7.0+ uye unoda kuti uendise auto mode:

1. Panda **Superdav AI Agent** → **Settings**
2. Tsvaga **Third-Party Mode**
3. Chibvumira **Auto (WordPress Abilities API)**
4. Click **Save**

Superdav AI Agent inozivisa uye inogara kuingira maitiro anonyanya zvakasiendeki nekuda yeauto.

### Kuti Ungeita Manual Mode {#switch-to-manual-mode}

Kana unoda kuti uongore manually maitiro anonyanya anozivisa:

1. Panda **Superdav AI Agent** → **Settings**
2. Tsvaga **Third-Party Mode**
3. Chibvumira **Manual**
4. Click **Save**
5. Edit configuration file yako kuti uingire maitiro anonyanya anozivisa

### Kuti Ungeita Legacy Mode {#switch-to-legacy-mode}

Kana unoda compatibility ya legacy:

1. Penda ku **Superdav AI Agent** → **Settings**
2. Tsvaka **Third-Party Mode** (Mode wemwe weita)
3. Chibvura **Legacy** (Kuti chokwadi/Chikuru)
4. Click **Save** (Chibvura)

## Mufudzo we Auto Mode (Auto Mode Benefits) {#benefits-of-auto-mode}

### Kufundwa kwa Moto (Automatic Discovery) {#automatic-discovery}

Mufudzo wese wakafundwa nekuvaka:

- Plugins dzakare nedzidzo (Installed plugins)
- Theme inotarisirwa (Active theme)
- Plugins dzinotarisirwa kuti zvinofanira kuenda (Must-use plugins)
- Plugins dzine zvinhu dzinogona kutarisirwa (Drop-in plugins)

Haunoda kuratidzwa nekuita zvakare.

### Kuratidza Kuti Zvinhu Zvinotarisirwa (Native Integration) {#native-integration}

Zvinotarisirwa zvinotarisirwa nemapuro (Abilities API) ya WordPress:

- Zinodzidzwa nekugadzirisa kweWordPress core
- Zinogona kutarisirwa neadmin ya WordPress
- Zinokwanisa kuenda nemapuro anonyanya (Compatible with other plugins using Abilities API)
- Zvinotarisirwa kuti zvinobva zvakanaka kana WordPress inenge inotambura

### Kuratidza Kuti Zvinhu Zvinogadzirwa (Simplified Management) {#simplified-management}

- Hauna files dzinofanira kuendesa (No configuration files to edit)
- Hauna kuratidzwa kwemabhudzo (No manual ability registration)
- Controls dzemabhudzo dzinotarisirwa zvinoreva zvinhu zvakare (Ability Visibility controls work automatically)
- Admin notices dzine zvinhu dzinogona kuita kuti uve nezvinhu dzine kuratidzwa (Admin notices alert you to unclassified abilities)

### Kufamba Nemakore Anokosha (Better Performance) {#better-performance}

- Abilities dzine caching (Abilities are cached)
- Dziri kuenda nekuti zvichifambira kana kudzidza nekuvaka (Lazy-loaded on demand)
- Zinogadzirwa kuti zvinofamba zvakanaka muWordPress 7.0+

## Mhando Yekutanga Kuti Uende (Migration Path) {#migration-path}

### Kana Usi WordPress 6.x {#if-youre-on-wordpress-6x}

1. **Upgrade ku WordPress 7.0+** (kana unenge uine)
2. **Update Superdav AI Agent** kune v1.12.0+
3. **Change third-party mode ku Auto** (optional; legacy mode kunenge uchifamba zvakare)
4. **Review ability visibility** kuti uve nekuona zvinhu zvinofanira kuenda (to ensure proper access controls)

### Kana Usi WordPress 7.0+ {#if-youre-on-wordpress-70}

1. **Update Superdav AI Agent** kune v1.12.0+
2. **Verify third-party mode is set to Auto** (inogona kuva iAuto nekuita zvakare)
3. **Review ability visibility** kuti uve nekuona zvinhu zvinofanira kuenda (to ensure proper access controls)
4. **Test third-party abilities** kuti uve nekuona kuti dziri kunge dzinofamba

## Kuti Usi Kuratidza Zvinhu (Troubleshooting) {#troubleshooting}

### Abilities hazvinogadzirwa mu auto mode {#abilities-arent-loading-in-auto-mode}

- Tsvaka kuti unenge uine WordPress 7.0+
- Tsvaka kuti third-party mode inenge iAuto
- Tsvaka kuti plugin inotarisirwa inenge inotarisirwa (active)
- Tsvaka error logs ya WordPress kuti uve nezvinhu zvinogadzirwa

### Ndinoda kuenda nemode Legacy {#i-want-to-keep-legacy-mode}

- Penda ku **Settings** → **Third-Party Mode**
- Chibvura **Legacy**
- Click **Save**
- Legacy mode kunenge uchifamba zvakare

### Zvinhu zvinodiwe dzako chineonekwa {#my-custom-abilities-arent-showing}

- Simbisa kuti zviri kuitwa kuparamusika neWordPress hooks
- Simbisa kuti zvinoremekedza Abilities API zvakanaka
- Simbisa logs dzinobva neWordPress
- Shandisa admin page ya **Ability Visibility** kuona abilities zonoseka

### Ndinobona "unclassified ability" notices {#im-getting-unclassified-ability-notices}

- Izvi ndizvinhu zvakakosha kuti zvinoregeredza abilities dzakare
- Simbisa uye simbisa izvi mu notice ya admin
- Shandisa **Ability Visibility** kuona zvinotevera nezveclassification

## Kuti zvigadzirwa zviri kuitika (Backward Compatibility) {#backward-compatibility}

### Configurations dzakarepo {#existing-configurations}

Kana uri neconfigurations dzakarepo dzine abilities dzakare:

- **Legacy mode**: Configuration yako inodzivirira kunge iweyi
- **Manual mode**: Configuration yako inodzivirira kunge iweyi
- **Auto mode**: Configuration yako inodzidzwa (auto mode inodzivirira)

Kuti usimbise configuration yako yakagadzirwa, tsvaka mu Manual kana Legacy mode.

### Mhando yekupera (Deprecation Timeline) {#deprecation-timeline}

- **v1.12.0**: Legacy and Manual modes zvichivimbika zvakakosha
- **v1.13.0+**: Legacy mode inogona kuonekwa kuti inoda kuparwa
- **v2.0.0**: Legacy mode inogona kuondwa (inodiwa)

## Mhinduro dzakanaka (Best Practices) {#best-practices}

### Kuti zvinoregeredza zvakare {#for-new-installations}

- Shandisa Auto mode (iri yakanaka)
- Chidzivire Superdav AI Agent kuti izviro zvinoregeredza nekuti zvinhu zvine kudzidza nekuita zvinhu zvake
- Shandisa Ability Visibility kuita kuratidza zvinhu

### Kuti zvinoregeredza dzakarepo {#for-existing-installations}

- Simbisa WordPress 7.0+ kana iweyi unogona
- Shandisa Auto mode kuti usimbise kuratidza (management)
- Simbisa uye simbisa abilities neAbility Visibility

### Kuti zvinoregeredza zvinhu dzakagadzirwa {#for-custom-abilities}

- Simbisa abilities kuparamusika neWordPress hooks (Abilities API)
- Usimbise ability registries dzakagadzirwa
- Simbisa kuita WordPress 7.0+ neAuto mode

## Zvinhu Zvinotevera (Next Steps) {#next-steps}

1. **Chinjeni versheni ya WordPress yako**: Chiona kuti uko pa 7.0+ kuti uwe nemode wa Auto.
2. **Chinjeni mode wako we third-party**: Penda Settings uye chinjeni mode wako unenge uri.
3. **Update kana kune zvinhu**: Chinja kuAuto mode kana kungava pa WordPress 7.0+.
4. **Tsvaga zvinoreva (Classify abilities)**: Shinjisa uye tsanidza zvinhu zvakasiita asi haziwe nemode wako.
5. **Chinjeni (Test)**: Chiona kuti zvinhu zve third-party dzako dzinogona kuenda zvakanaka.

## Zvinogonei Kuti Uone (Related Topics) {#related-topics}

- **Ability Visibility**: Shinjisa kuti zvinoreva (abilities) zvakasiita zvakasiita kwazvo paunenge uchigona kuona.
- **WordPress Abilities API**: Funga nezve registration ya abilities dzakareta WordPress.
- **Third-Party Ability Development**: Tsvaga abilities dzinogona kushandiswa nemode wa Auto.
