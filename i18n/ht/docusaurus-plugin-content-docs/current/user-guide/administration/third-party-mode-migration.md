---
title: Migrasyon Mod Pwovizyon Twa
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migrasyon Mod Pwòtè (Third-Party Mode Migration)

Superdav AI Agent v1.12.0 chanje kijan yo jere abitye pwòtè (third-party abilities). **Mod pwòtè kounye a default pou "auto",** sa ki pèmèt integrasyon natif ak WordPress Abilities API sou WordPress 7.0+ san bezwen okenn konfigirasyon manmanèl.

## Kisa Ki Chanje? {#what-changed}

### Anvan v1.12.0 {#before-v1120}

Abitye pwòtè te mande yon konfigirasyon manmanèl:

- Ou te dwe aktif "third-party mode" (mod pwòtè) eksplisite
- Abitye yo te telechaje soti nan yon registry koutim (custom registry)
- Integrasyon ak WordPress Abilities API te opsyonèl
- Mod legacy te default la

### Apre v1.12.0 {#after-v1120}

Abitye pwòtè fonksyone otomatikman:

- Third-party mode a default pou "auto"
- Abitye yo entegre natif ak WordPress Abilities API
- Pa gen okenn konfigirasyon manmanèl ki nesesè sou WordPress 7.0+
- Mod legacy la toujou disponib pou vèsyon WordPress pi anvan

## Kisa Ki Afekte? {#who-is-affected}

### Nouvo Enstalasyon (WordPress 7.0+) {#new-installations-wordpress-70}

**Pa bezwen fè anyen.** Third-party mode a otomatikman mete sou "auto", epi abitye yo fonksyone san okenn pwoblèm.

### Enstalasyon Ezan (Existing Installations) {#existing-installations}

**Konfigirasyon ou rete menm.** Si ou t'ap itilize:

- **Legacy mode**: Ou rete nan mod legacy (pa gen chanjman)
- **Manual third-party mode**: Ou rete nan mod manmanèl (pa gen chanjman)
- **Auto mode**: Ou kontinye ak mod auto (pa gen chanjman)

### Vèsyon WordPress Anvan 7.0 {#wordpress-versions-before-70}

**Mod legacy la toujou disponib.** Si ou ap itilize WordPress 6.x oswa anvan:

- Third-party mode a default pou "legacy"
- Ou ka aktif mod pwòtè manmanèl si ou vle
- Fè upgrade sou WordPress 7.0+ pou w ka itilize natif Abilities API la

## Konprann Mod yo {#understanding-the-modes}

### Auto Mode (Nouvo Default) {#auto-mode-new-default}

**Auto mode** itilize integrasyon natif ak WordPress Abilities API:

- Abitye yo rejantre atravè WordPress hooks
- Konpatibilite total ak WordPress 7.0+ Abilities API
- Dekouvè otomatik abitye pwòtè yo
- Pa gen okenn konfigirasyon manmanèl ki nesesè

**Lè pou itilize**: WordPress 7.0+ ak kapasite twazy (third-party)

### Mod Manual {#manual-mode}

**Mod manual** mande ou fè yon konfigirasyon klè:

- Ou di ki kapasite twazy yo pou chaje (load).
- Li itil pou teste oswa pou chaje kapasite nan yon fason selektif.
- Li mande w edite fichye konfigirasyon an.
- Ou gen plis kontwòl, men ou bezwen fè pi anpil preparasyon.

**Lè pou itilize**: Test, chaje kapasite selektif, oswa pou konfigirasyon espesyalize.

### Mod Legacy (Anvan) {#legacy-mode}

**Mod legacy** itilize sistèm kapasite twazy ki te genyen:

- Registre kapasite koutim (pa WP Abilities API).
- Li koresponn ak vèsyon WordPress pi anvan yo.
- Li pa gen okenn entegrasyon natif ak WordPress la.
- Li deja deparè, men li toujou sipòte.

**Lè pou itilize**: WordPress 6.x o ki pi ansan, oswa lè ou bezwen konpatibilite legacy.

## Verify Mod Kouran Ou Ye {#checking-your-current-mode}

### Fòch nan Admin Panel la {#via-admin-panel}

1. Ale nan **WordPress Admin** → **Superdav AI Agent** → **Settings**.
2. Chèche opsyon **Third-Party Mode**.
3. Ou pral wè mod kouran ou ye ak opsyon pou chanje li.

### Fòch nan Kòd (Code) {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', o 'legacy'
```

## Chanje Mod Ou Ye {#changing-your-mode}

### Chanje pou Auto Mode {#switch-to-auto-mode}

Si ou ap itilize WordPress 7.0+ epi ou vle itilize auto mode:

1. Ale nan **Superdav AI Agent** → **Settings**.
2. Jwenn **Third-Party Mode**.
3. Chwazi **Auto (WordPress Abilities API)**.
4. Klike sou **Save**.

Superdav AI Agent ap otomatikman dekouvri epi mete kapasite twazy yo an rejis.

### Chanje pou Mod Manual {#switch-to-manual-mode}

Si ou vle kontwole menm ki kapasite yo dwe chaje:

1. Ale nan **Superdav AI Agent** → **Settings**.
2. Jwenn **Third-Party Mode**.
3. Chwazi **Manual**.
4. Klike sou **Save**.
5. Edite fichye konfigirasyon ou a pou di ki kapasite yo dwe chaje.

### Chanje pou Mod Legacy {#switch-to-legacy-mode}

Si ou bezwen konpatibilite legacy:

1. Ale **Superdav AI Agent** $\rightarrow$ **Settings**
2. Chèche **Third-Party Mode**
3. Selekte **Legacy**
4. Klike sou **Save**

## Benefis Auto Mode a {#benefits-of-auto-mode}

### Découverte Automatique {#automatic-discovery}

Les capacités s'découvrent automatiquement à partir de :

- Les plugins ki yo enpliye (Installed plugins)
- Le thème ki aktif (Active theme)
- Les plugins ki obligatwa pou itilize (Must-use plugins)
- Les plugins drop-in

Pa gen okenn registrasyon manuelle nesesè.

### Intégration Natif {#native-integration}

Les capacités intègrent ak WordPress Abilities API:

- Konpatib ak nò (WordPress core)
- Travay ak admin WordPress la
- Konpatib ak lòt plugins ki itilize Abilities API yo
- Lò pou futur paske WordPress ap evolye

### Jesyon Simplifie {#simplified-management}

- Pa gen okenn fichye konfigirasyon pou edite
- Pa gen registrasyon kapasite manuelle
- Kontwòl Visibilité Kapasite (Ability Visibility controls) travay otomatikman
- Les notifikasyon Admin ap alerte ou sou les kapasite ki pa klasifye

### Pèfòmans Pi Bon {#better-performance}

- Les capacités yo cache (cached)
- Lazy-loaded sou demann (on demand)
- Optimize pou WordPress 7.0+

## Wè Way la Migrasyon {#migration-path}

### Si Ou Ap itilize WordPress 6.x {#if-youre-on-wordpress-6x}

1. **Upgrade ou a WordPress 7.0+** (lè li pare)
2. **Update Superdav AI Agent** a v1.12.0+
3. **Chanje third-party mode a Auto** (opcional; legacy mode ap travay toujou)
4. **Revize visibilité kapasite yo** pou asire kontwòl aksè ki bon

### Si Ou Ap itilize WordPress 7.0+ {#if-youre-on-wordpress-70}

1. **Update Superdav AI Agent** a v1.12.0+
2. **Verify ke third-party mode se set a Auto** (li dwe deja la pa default)
3. **Revize visibilité kapasite yo** pou asire kontwòl aksè ki bon
4. **Test les capacités third-party yo** pou konfime yo travay

## Resousè Soublen (Troubleshooting) {#troubleshooting}

### Les capacités pa kòmanse telechaje nan auto mode {#abilities-arent-loading-in-auto-mode}

- Verify ke ou ap itilize WordPress 7.0+
- Kontweke ke third-party mode se set a "Auto"
- Verify ke plugin ki bay kapasite a aktif
- Kontweke les error log WordPress pou erè registrasyon

### Kapasite mwen pèsonèl mwen yo pa montre {#i-want-to-keep-legacy-mode}

- Verifye ke yo reyalize atravè WordPress hooks
- Kontwole ke yo implemente Abilities API kòrèktman
- Revize log erè WordPress la
- Itilize paj admin **Ability Visibility** pou wè tout abilities ki reyalize

### Mwen ap jwenn notifikasyon "unclassified ability" (ability ki pa klasifye) {#my-custom-abilities-arent-showing}

- Sa nòmal pou nouvo abilities de twazyèm pati
- Revize epi klasifye yo nan notifikasyon admin la
- Wè **Ability Visibility** pou plis detay sou klasifikasyon an

## Backward Compatibility (Konpatibilite pou vye) {#im-getting-unclassified-ability-notices}

### Konfigirasyon ki egziste deja {#backward-compatibility}

Si ou gen konfigirasyon abilities de twazyèm pati ki egziste:

- **Legacy mode (Mod vye)**: Konfigirasyon ou ap kontinye mache
- **Manual mode (Mod manèl)**: Konfigirasyon ou ap kontinye mache
- **Auto mode (Mod otomatik)**: Konfigirasyon ou ap ignorer (auto mode ap pran kontwòl)

Pou kenbe konfigirasyon koutim ou, rete nan Manual oswa Legacy mode.

### Timeline Deprecation (Liy tan pou retire) {#existing-configurations}

- **v1.12.0**: Legacy ak Manual modes yo toujou sipòte nèt
- **v1.13.0+**: Legacy mode ka montre notifikasyon depobrasyon
- **v2.0.0**: Legacy mode ka retire (ap detèmine)

## Best Practices (Me pratik) {#deprecation-timeline}

### Pou nouvo enstalasyon yo {#best-practices}

- Itilize Auto mode (li se defòt la)
- Kite Superdav AI Agent diskire abilities otomatikman
- Itilize Ability Visibility pou kontwole aksè a

### Pou enstalasyon ki egziste deja {#for-new-installations}

- Upgrade ou pou WordPress 7.0+ lè sa posib
- Chanje nan Auto mode pou jere li pi fasil
- Revize epi klasifye abilities yo itilize Ability Visibility

### Pou abilities koutim (Custom Abilities) {#for-existing-installations}

- Reyalize abilities yo atravè WordPress hooks (Abilities API)
- Evite registry ability koutim
- Test sou WordPress 7.0+ ak Auto mode

## Prochif Etap (Next Steps) {#for-custom-abilities}

1. **Kontwez la vèsyon WordPress ou a**: Asire w ke ou gen 7.0+ pou Mode Auto
2. **Revize ou mode tier-party**: Ale nan Settings epi gade ki se mode ou kounye a
3. **Mete a jour si nesesè**: Chanje pou Mode Auto si ou gen WordPress 7.0+
4. **Klasifye abitye yo**: Revize epi klasifye nenpòt abitye ki pa klasifye
5. **Teste**: Asire w ke abitye tier-party ou a fonksyone byen

## Topik Relatè {#next-steps}

- **Visibilité Abitye (Ability Visibility)**: Kontwole kote ki abitye yo montre la
- **WordPress Abilities API**: Aprann sou enrejistrasyon abitye WordPress natif la
- **Développement Abitye Tier-Party (Third-Party Ability Development)**: Kreye abitye ki fonksyone ak Mode Auto
