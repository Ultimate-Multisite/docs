---
title: Místeachadh mode a tha sealltainn
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migrasadh Modhailtean Tàrdhaichean {#third-party-mode-migration}

Superdav AI Agent v1.12.0 a' chlàradh an t-saoghal air faic a tha thuiteann àrdhaichean (third-party abilities). **Tha modhailtean tàrdhaichean a' chlàradh gu "auto" (auto) a' chlàradh, a' leugh a' chlàradh WordPress Abilities API gu fìor air WordPress 7.0+ gu fìor an t-saoghal.**

## Cànach A' Chlàradh? {#what-changed}

### A' Chlàradh Air v1.12.0 {#before-v1120}

Tha thuiteann àrdhaichean a' chlàradh gu fìor:

- Thuig a' chlàradh "third-party mode" (modhailtean tàrdhaichean) gu fìor
- Tha thuiteann a' leugh air seachdainn (registry) a' chlàradh
- Tha a' chlàradh gu fìor air WordPress Abilities API thaobh
- Tha modhailtean leagach (legacy mode) a' chlàradh

### Air v1.12.0 {#after-v1120}

Tha thuiteann àrdhaichean a' chlàradh gu "auto":

- Thuig a' chlàradh "third-party mode" a' chlàradh gu "auto"
- Tha thuiteann a' leugh air WordPress Abilities API gu fìor
- Cha thaobh a' chlàradh gu fìor air WordPress 7.0+ gu fìor
- Tha modhailtean leagach (legacy mode) thaobh airson fìor WordPress a' sealltainn

## Cànach Tha A' Chlàradh? {#who-is-affected}

### New Installations (WordPress 7.0+) {#new-installations-wordpress-70}

**Nì fhaigh am fhaighinn.** Tha modhailtean tàrdhaichean a' chlàradh gu "auto", agus tha thuiteann àrdhaichean a' leugh air an t-saoghal.

### Existing Installations {#existing-installations}

**Tha eadar-dheargadh agad a' chlàradh.** Tha thuig a' chlàradh:

- **Legacy mode**: Tha thuig a' chlàradh gu legacy (nì fhaigh am fhaighinn)
- **Manual third-party mode**: Tha thuig a' chlàradh gu manual (nì fhaigh am fhaighinn)
- **Auto mode**: Tha thuig a' chlàradh gu auto (nì fhaigh am fhaighinn)

### WordPress Versions Before 7.0 {#wordpress-versions-before-70}

**Tha modhailtean leagach thaobh.** Tha thuig air WordPress 6.x no fhaighinn:

- Thuig a' chlàradh "third-party mode" gu "legacy"
- Cha tha thuig a' chlàradh "third-party mode" a' chlàradh gu manual mar tha thuig a' leugh
- Tha an t-saoghal a' chlàradh air WordPress 7.0+ a' chlàradh gu fìor

## A' Chlàradh a' Chlàradh? {#understanding-the-modes}

### Auto Mode (New Default) {#auto-mode-new-default}

**Auto mode** a' chlàradh a' leugh air WordPress Abilities API gu fìor:

- Tha thuiteann àrdhaichean a' leugh air seachdainn WordPress
- Tha eadar-dheargadh gu fìor air WordPress 7.0+ Abilities API
- Tha a' chlàradh mòr (automatic discovery) air thuiteann àrdhaichean tàrdhaichean
- Nì fhaigh am fhaighinn airson fìor

<p><code>// Custom logic when checkout completes</code></p>

**Cò sgaidh a uile**: WordPress 7.0+ le capacitat terza-parte

### Mod Manual {#manual-mode}

**Mod manual** ceann a tha deilidh a bhith ag iarraidh dìreach a thabhairt:

- Tha thu a' tuiteam gu sònraich na capaciatas terza-parte a thabhairt
- Tha e fìor airson teineadh no leicidheachadh sealltainach
- Tha e ag iarraidh am fhadail an fhaighinn (configuration files)

Tha e le fòcas gu sònraich, ach tha e a' tuiteam a bhith a' chlàradh a tha thu.

**Cò sgaidh a uile**: Teineadh, leicidheachadh sealltainach, no fhadail a tha thu a' tuiteam

### Mod Leagach (Legacy Mode) {#legacy-mode}

Tha **mod leagach** a' tuiteam an siostam capaciatas terza-parte a tha a' sgaidh:

- Registean capaciatas sealltainach (chaith a tha e *dheachd* WordPress Abilities API)
- Tha e a' chleachdadh le fhaighinn WordPress a tha a' sgaidh
- Tha e a' tuiteam ach thairis (deprecated), ach tha e ag obair

**Cò sgaidh a uile**: WordPress 6.x no leathair, no nuair a tha thu a' deghinn a bhith a' chleachdadh leagach

## A' chlàradh mod a tha thu a' tuiteam {#checking-your-current-mode}

### Gu bith a lasa an Admin Panel {#via-admin-panel}

1. Comas **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Leugh an sealladh **Third-Party Mode**
3. Bidh thu a' faic air mod a tha thu a' tuiteam agus e na fhaighinn airson atharrachadh

### Gu bith a lasa code {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', no 'legacy'
```

## Atharrachadh mod a tha thu a' tuiteam {#changing-your-mode}

### Atharrachadh gu Mod Auto {#switch-to-auto-mode}

Tha thu air WordPress 7.0+ agus tha thu a' deghinn a bhith a' chleachdadh mod auto:

1. Comas **Superdav AI Agent** → **Settings**
2. Leugh **Third-Party Mode**
3. Thànaich **Auto (WordPress Abilities API)**
4. Clic air **Save**

Bidh Superdav AI Agent a' chleachdadh agus a' registeadh capaciatas terza-parte gu fìor.

### Atharrachadh gu Mod Manual {#switch-to-manual-mode}

Tha thu a' deghinn a bhith a' chlàradh mod a tha thu a' tuiteam:

1. Comas **Superdav AI Agent** → **Settings**
2. Leugh **Third-Party Mode**
3. Thànaich **Manual**
4. Clic air **Save**
5. Atharrach an fhadail a tha thu a' tuiteam airson a bhith a' tuiteam gu sònraich na capaciatas a thabhairt

### Atharrachadh gu Mod Leagach (Legacy Mode) {#switch-to-legacy-mode}

Tha thu a' deghinn a bhith a' chleachdadh leagach:

1. Ràdhdail **Superdav AI Agent** → **Settings**
2. Thànaich **Third-Party Mode**
3. Taisg **Legacy**
4. Clicke ar **Save**

## Faighinn Super Mode (Auto Mode) {#benefits-of-auto-mode}

### Fhòcas Autonomach (Automatic Discovery) {#automatic-discovery}

Fhaighinn a tha ag obair gu fìor frannachd:

- Plugin sinichhe (Installed plugins)
- Theme a' bhainean (Active theme)
- Plugins a tha thuig a' sgaidh (Must-use plugins)
- Plugins a tha a' chlàradh (Drop-in plugins)

Nì sinn ag iarraidh a' sgrìobhadh manichile.

### Fhòcas Eòlasach (Native Integration) {#native-integration}

Tha fòcasan a' bhainean le Abilities API de WordPress:

- A' chamas le core WordPress
- A' sgaidh le admin WordPress
- A' chlàradh le plugin sinichhe a' uile a' le Abilities API
- A' chamas le WordPress gu sgaidh mar a tha e a' tòisich

### Bhratadh a' Chùl (Simplified Management) {#simplified-management}

- Nì sinn ag iarraidh a' sgrìobhadh fáil (No configuration files to edit)
- Nì sinn ag iarraidh a' sgrìobhadh fòcasan manichile (No manual ability registration)
- Tha coimhneachdan Fhòcasan Visibility a' obair gu fìor frannachd
- Tha coimhneachdan Admin a' tòisich do chùl fòcasan a tha a' sgaidh

### Bhratadh a' Chùl (Better Performance) {#better-performance}

- Tha fòcasan a' cache (Abilities are cached)
- Tha iad a' leathachadh gu fìor frannachd air a tha e a' tòisich (Lazy-loaded on demand)
- Tha iad a' obair gu fìor frannachd airson WordPress 7.0+

## Aithris Eòlasach (Migration Path) {#migration-path}

### Má Tha Thuair a' WordPress 6.x {#if-youre-on-wordpress-6x}

1. **A' chamas do WordPress 7.0+** (nuair a tha thuair)
2. **A' sgaidh Superdav AI Agent** gu v1.12.0+
3. **Thaisg third-party mode air Auto** (fùiarach; tha mode legacy ag obair gu fìor frannachd seach)
4. **Bhratadh an fhòcasan visibility** airson a' sgaidh chluichid (Review ability visibility to ensure proper access controls)

### Má Tha Thuair a' WordPress 7.0+ {#if-youre-on-wordpress-70}

1. **A' sgaidh Superdav AI Agent** gu v1.12.0+
2. **Thànaich third-party mode air Auto** (rinn e ag obair gu fìor frannachd)
3. **Bhratadh an fhòcasan visibility** airson a' sgaidh chluichid
4. **Teasth fòcasan third-party** airson a' stad a' sgaidh

## Aithris Eòlasach (Troubleshooting) {#troubleshooting}

### Tha Fhòcasan a' tòisich seach i mode auto {#abilities-arent-loading-in-auto-mode}

- Bhratadh gu sin air WordPress 7.0+
- Churaidh gu bheil third-party mode ag obair gu "Auto"
- Bhratadh gu sin an plugin a tha a' toirt an fòcas a' sgaidh (Verify the plugin providing the ability is active)
- Bhratadh log airninn WordPress airson earrachdairean a' sgrìobhadh

### Tha mi ag iarraidh a' mode legacy a' tòisich {#i-want-to-keep-legacy-mode}

- Ràdhdail **Settings** → **Third-Party Mode**
- Taisg **Legacy**
- Clicke ar **Save**
- Tha mode legacy a' obair gu fìor frannachd

### A mo fy mhobail a tha chanachdairt {#my-custom-abilities-arent-showing}

- Comharrachadh gu bheil iad wedi' chluarachadh gu fhaighinn (hooks) WordPress
- Comharrachadh gu bheil iad a thabhail an Abilities API gu fìor
- Comharrachadh le log air an WordPress
- Rannsachadh an sealladh admin **Ability Visibility** airson faic ri liathair a chluarachdha

### Tha mi ag iarraidh "ability" a tha chanachdairt {#im-getting-unclassified-ability-notices}

- Tha seo a' chluarachd airson abilities ùra de uileithneichean
- Comharrachadh agus chluarachadh iad anns an sealladh admin air a chluarachdha
- Faigh seachdaid **Ability Visibility** airson fhaigh earrachdan air chluarachadh

## Comharrachadh le fhaighinn (Backward Compatibility) {#backward-compatibility}

### Chluarachdan a tha aig a' chluarachdan a tha aig ìre {#existing-configurations}

Tha e a' chluarachd a tha aig an ìre

- **Mode Legacy**: Bidh an t-sealladh agad ag obair gu fìor
- **Mode Manual**: Bidh an t-sealladh agad ag obair gu fìor
- **Mode Auto**: Bidh an t-sealladh agad a' chluarachd (a tharann an mode auto a' chluarach)

 airson a bhith a' chluarachdan a tha aig a' chluarachdan a tha aig ìre, tha thuairidh a bhith ag obair gu fìor.

### Tairm a tha a' chluarachadh (Deprecation Timeline) {#deprecation-timeline}

- **v1.12.0**: Tha mode Legacy agus Manual ag obair gu fìor
- **v1.13.0+**: Eiche a thig an t-sealladh mode Legacy earrachdan a tha a' chluarachadh
- **v2.0.0**: Thuairidh a bhith a' chluarachd mode Legacy a bhith ag obair gu fìor (a tha thuairidh)

## Bhràith-beatha (Best Practices) {#best-practices}

### airson ùra chluarachdan {#for-new-installations}

- Bheir an t-sealladh Auto a' chluarachd (tha seo a' chluarach)
- Le ghràdh Superdav AI Agent a tha a' chluarachdan a thabhail gu fìor
- Bheir Ability Visibility a' chluarachd a' chluarach

### airson chluarachdan a tha aig ìre {#for-existing-installations}

- Aig an t-sealladh WordPress 7.0+ gu bheil e possible
- Tharann air mode Auto a' chluarachd airson leic a' chluarach
- Comharrachadh agus chluarachadh abilities a' chluarach a' chluarach

### airson abilities a tha aig ìre {#for-custom-abilities}

- Bheir abilities a' chluarach gu fhaighinn (hooks) WordPress (Abilities API)
- Aig an t-sealladh ability registries a' chluarachd
- Comharrachadh ar WordPress 7.0+ le mode Auto a' chluarach

## Tairm a tha a' chluarachadh (Next Steps) {#next-steps}

1. **Thà cheadu an t-WordPress version a chlàradh**: Comharrach gu tha thu'n ar fhaighinn 7.0+ airson Auto mode
2. **Thonadh air a chlàradh a tha thu'n sealltainn**: Ath sealltainn (Settings) agus cheannach an mode a tha thu'n sealltainn

3. **Ath-uthach thu nas fheàrr**: Ath sealltainn ar Auto mode gu tha thu'n ar WordPress 7.0+
4. **Aosgadh eirbhòidhean**: Comharrach agus osgaidh (classify) a ghninn a tha thu'n sealltainn

5. **Teastaidh**: Comharrach gu bheil a ghninn a tha thu'n sealltainn air gu math
