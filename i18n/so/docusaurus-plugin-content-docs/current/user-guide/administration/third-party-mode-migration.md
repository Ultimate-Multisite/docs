---
title: Udhbinta Mode-ka Dhiga Dhinacyada Saddexda
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Ganacabashka Mode-ga Isbeddelka

Superdav AI Agent v1.12.0 waxay beddeshaa sida loo maamulo awoodaha saddexaad (third-party abilities). **Ganacabashka saddexaad hadda wuxuu si toos ah u socdaa "auto"**, taasoo kuu oggolaanaysa in WordPress 7.0+ ku shaqeeyso API-ga Awoodaha ee WordPress iyada oo aan loo baahnayn hagaajin gacanta lagu sameeyo.

## Maxay Isbeddelatay? {#what-changed}

### Ka hor v1.12.0 {#before-v1120}

Awoodaha saddexaad waxay u baahdeen hagaajin gacanta:

- Waxaad si cad ugu furteen "third-party mode"
- Awoodaha waxaa la soo qaaday diiiraha gaarka ah (custom registry)
- Isdhexgalka API-ga Awoodaha ee WordPress wuxuu ahaa mid ixtiraaf ah (optional)
- Mode-ka hore (legacy mode) wuxuu ahaa kan default

### Ka dib v1.12.0 {#after-v1120}

Awoodaha saddexaad waxay si toos ah u shaqeeyaan:

- Ganacabashka saddexaad wuxuu si toos ah u socdaa "auto"
- Awoodaha waxaa si dabiici ah ugu dhex muuqda API-ga Awoodaha ee WordPress
- Ma loo baahnayn hagaajin gacanta oo ku saabsan WordPress 7.0+
- Mode-ka hore (legacy mode) weli wuxuu diyaar yahay noocyada WordPress ee hore

## Qofka Waxaa Saamaynta? {#who-is-affected}

### Warbixinta Cusub (WordPress 7.0+) {#new-installations-wordpress-70}

**Ma baahnayn wax qaban.** Ganacabashka saddexaad si toos ah ayaa loo dejiyay "auto", waxayna shaqeeyaan iyada oo aan la hagaajin.

### Warbixinta Hore (Existing Installations) {#existing-installations}

**Dejintaada waxaa lagu ilaalinayaa.** Haddii aad isticmaalay:

- **Mode-ka hore (Legacy mode)**: Waxaad weli ku jirtaa mode-ka hore (ma jiraan isbeddel)
- **Ganacabashka saddexaad gacanta (Manual third-party mode)**: Waxaad weli ku jirtaa mode-ka gacanta (ma jiraan isbeddel)
- **Mode-ka auto**: Waxaad sii wadi doontaa mode-ka auto (ma jiraan isbeddel)

### Noocyada WordPress Ka Hor v7.0 {#wordpress-versions-before-70}

**Mode-ka hore weli diyaar yahay.** Haddii aad ku jirto WordPress 6.x ama ka hor:

- Ganacabashka saddexaad wuxuu si toos ah u socdaa "legacy"
- Waxaad hagaajin kartaa mode-ka saddexaad gacanta haddii aad rabto
- Si aad isticmaasho API-ga Awoodaha ee dabiiciga ah (native Abilities API), waa inaad u qaadataa WordPress 7.0+

## Fahamka Mode-yada {#understanding-the-modes}

### Mode-ka Auto (Default-ka Cusub) {#auto-mode-new-default}

**Mode-ka auto** wuxuu isticmaalaa isdhexgalka API-ga Awoodaha ee dabiiciga ah ee WordPress:

- Awoodaha waxaa lagu diiwaangelinayaa iyadoo la adeegsanayo hooks-yada WordPress
- Isdhexgalka buuxda ee API-ga Awoodaha ee WordPress 7.0+
- Helitaanka awoodaha saddexaad (third-party abilities) si toos ah
- Ma loo baahnayn hagaajin gacanta

**Inta la isticmaal**: WordPress 7.0+ iyo awoodda saddexaad ee dhinaca saddexaad (third-party)

### Habka gacanta lagu maamulo (Manual Mode) {#manual-mode}

Habka gacanta lagu maamulo wuxuu u baahan yahay in la dejiyo si cad:

- Waxaad qeexaysaa nooca awoodda saddexaad ee aad rabto inaad soo qaaddo
- Waa wax faa'iido leh oo lagu isticmaalo tijaabinta ama in la doorbidayo awoodaha gaarka ah ee la soo qaadayo
- Waxay u baahan tahay in la beddelo faylasha dejinta (configuration files)
- Waxaad heli doontaa xakamayn badan, laakiin waxay u baahan yihiin habka ugu horreeya

**Inta la isticmaalo**: Tijaabinta, doorbinta awoodaha gaarka ah ee la soo qaadayo, ama dejimaya gaar ah oo aad rabto

### Habka hore (Legacy Mode) {#legacy-mode}

Habka hore wuxuu adeegsadaa nidaamka awoodda saddexaad ee hore:

- Diyaari awood (Custom ability registry) (ma aha WordPress Abilities API)
- Waa mid la tacaalayn karo (backward compatible) dhammaan noocyada WordPress ee hore
- Ma lahayn isdhaafsi (integration) dabiici ah oo WordPress ah
- Waxay tahay mid la tacaalayn (deprecated) laakiin weli waxaa taageeraya

**Inta la isticmaalo**: WordPress 6.x ama ka hor, ama marka aad u baahan tahay in la isdhaafsi la helo ee hore

## In La Hubiyo Habkaaga Hadda ah {#checking-your-current-mode}

### Iyada oo loo marayo Admin Panel (Dashboard) {#via-admin-panel}

1. Tag **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Raadi dejinta **Third-Party Mode**
3. Waxaad arki doontaa habkaaga hadda ah iyo doorooyinka aad ku beddeli karto

### Iyada oo loo marayo Code (PHP) {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', ama 'legacy'
```

## Beddelidda Habkaaga {#changing-your-mode}

### Ku beddel Auto Mode {#switch-to-auto-mode}

Haddii aad ku jirto WordPress 7.0+ oo aad rabto inaad isticmaasho auto mode:

1. Tag **Superdav AI Agent** → **Settings**
2. Raadi **Third-Party Mode**
3. Dooro **Auto (WordPress Abilities API)**
4. Click **Save**

Superdav AI Agent wuxuu si toos ah u oga xiisaha saddexaad ee la soo qaadayo oo wuxuu ku diiwaangelin doonaa.

### Ku beddel Manual Mode {#switch-to-manual-mode}

Haddii aad rabto inaad gacanta ku maamushid awoodaha la soo qaadaya:

1. Tag **Superdav AI Agent** → **Settings**
2. Raadi **Third-Party Mode**
3. Dooro **Manual**
4. Click **Save**
5. Beddel faylka dejinta (configuration file) si aad u qeexdo awoodaha aad rabto inaad soo qaaddo

### Ku beddel Legacy Mode {#switch-to-legacy-mode}

Haddii aad u baahan tahay in la isdhaafsi la helo ee hore:

1. Tag **Superdav AI Agent** $\rightarrow$ **Settings**
2. Find **Third-Party Mode**
3. Select **Legacy**
4. Click **Save**

## Faayidaoyinka Auto Mode (Auto Mode) {#benefits-of-auto-mode}

### Ogaanshooyin Iska-dhasha (Automatic Discovery) {#automatic-discovery}

Awoodaha ayaa si toos ah u ogaanshaha oo ka soo qaadaya:

- Plugins-ka la rakibay
- Theme-ka socda
- Plugins-ka waaweyn (Must-use plugins)
- Drop-in plugins

Ma baahna in la diiwaangeliyo gacanta.

### Isdhexgalka Dabiiciga ah (Native Integration) {#native-integration}

Awoodaha ayaa isdhexgala WordPress Abilities API:

- Wuxuu la mid yahay waxa aasaasiga ah ee WordPress
- Waxay shaqaysaa admin-ka WordPress
- Wuxuu la jaanqaadaa plugins kale oo isticmaala Abilities API
- Wuxuu mustaqbalka u baahan yahay sida WordPress ay horumarsan doonto

### Maamul fudud (Simplified Management) {#simplified-management}

- Ma jirto faylasha aad wax ka beddesho
- Ma jirto diiwaangelin gacanta oo awood ah
- Xakamaynta aragtida Awoodda waxay si toos ah u shaqaysaa
- Wararrada Admin waxay kuu soo bandhigaan awoodaha aan la kala saarin

### Waxa Ugu wanaagsan ee Waxqabadka (Better Performance) {#better-performance}

- Awoodaha waxaa lagu kaydiyaa (cached)
- Waxay si degdeg ah u soo muuqda marka loo baahdo (Lazy-loaded on demand)
- Waxay hagaagsan tahay WordPress 7.0+

## Waddooyinka Ku Marinta (Migration Path) {#migration-path}

### Haddii aad ku jirto WordPress 6.x {#if-youre-on-wordpress-6x}

1. **Wax ka qaad WordPress 7.0+** (marka diyaar u noqoto)
2. **Beddel Superdav AI Agent** oo uu yahay v1.12.0+
3. **Beddel third-party mode si Auto ah** (wax iska doorbidayn; legacy mode weli shaqayn doonaa)
4. **Dib u eeg aragtida Awoodda** si loo hubiyo xakamaynta helitaanka saxda ah

### Haddii aad ku jirto WordPress 7.0+ {#if-youre-on-wordpress-70}

1. **Beddel Superdav AI Agent** oo uu yahay v1.12.0+
2. **Hubi in third-party mode ay tahay Auto** (waxay inta badan tahay)
3. **Dib u eeg aragtida Awoodda** si loo hubiyo xakamaynta helitaanka saxda ah
4. **Test awoodaha third-party** si aad u hubiso inay shaqeeyaan

## Xallinta Dhibaatooyinka (Troubleshooting) {#troubleshooting}

### Awoodaha ma soo muuqan Auto Mode-ka {#abilities-arent-loading-in-auto-mode}

- Hubi inaad ku jirto WordPress 7.0+
- Hubi in third-party mode ay tahay "Auto"
- Hubi in plugin-ka bixinaya awoodda uu socdo (active) yahay
- Hubi log-yada error-ka WordPress si aad u ogaato qaladkii diiwaangelinta

### Waxaan rabaa in aan ilaaliyo legacy mode {#i-want-to-keep-legacy-mode}

- Tag **Settings** $\rightarrow$ **Third-Party Mode**
- Dooro **Legacy**
- Click **Save**
- Legacy mode wuxuu sii socon doonaa shaqaynta

### Awooddaabtayga aan sameeyay ma muuqato {#my-custom-abilities-arent-showing}

- Hubi in ay ku jiraan hook-yada WordPress-ka
- Hubi in ay si sax ah u fuliyaan Abilities API-ga
- Eeg faylasha qaladka (error logs) ee WordPress-ka
- Isticmaal bogga admin-ka **Ability Visibility** si aad u aragto dhammaan abilities-ka la diiwaangeliyay

### Waxaan helayaa ogeysiisyo "ability aan la kala saarin" (unclassified ability) {#im-getting-unclassified-ability-notices}

- Tani waa caadi ah kuwa cusub ee abilities-ka saddexaad
- Eeg oo kala saar admin notice-ka si aad u hesho faahfaahin ku saabsan kala saarista (**Ability Visibility**)

## Isku dhafka hore (Backward Compatibility) {#backward-compatibility}

### Istaraatiyadda hore (Existing Configurations) {#existing-configurations}

Haddii aad leedahay isku dhafka hore ee abilities-ka saddexaad:

- **Legacy mode**: Isku dhafkaaga wuxuu sii shaqaynayaa
- **Manual mode**: Isku dhafkaaga wuxuu sii shaqaynayaa
- **Auto mode**: Isku dhafkaagu la tixgelin doono (auto mode ayaa ka qaadaya)

Si aad u ilaashato isku dhafkaaga gaarka ah, ku sii ahaado Manual ama Legacy mode.

### Xilliga joojinta (Deprecation Timeline) {#deprecation-timeline}

- **v1.12.0**: Labada mode-ka Legacy iyo Manual waxay si buuxda taageeraan
- **v1.13.0+**: Mode-ka Legacy wuu soo bandhigi karaa ogeysiisyo joojin (deprecation notices)
- **v2.0.0**: Mode-ka Legacy waxaa laga yaabaa in la saaro (Waxa la go'aamin doonaa)

## Hababka ugu wanaagsan (Best Practices) {#best-practices}

### Kuwa cusub ee Installation-ka {#for-new-installations}

- Isticmaal Auto mode (wuxuu yahay kan default-ka ah)
- U oggolaansho Superdav AI Agent in si toos ah u helo abilities-ka
- Isticmaal Ability Visibility si aad u maamushid helitaanka

### Kuwa hore ee Installation-ka {#for-existing-installations}

- Kor u qaad WordPress 7.0+ haddii suurtagal tahay
- U beddel Auto mode si loo fududeeyo maamulka
- Eeg oo kala saar abilities-ka adiga oo isticmaalaya Ability Visibility

### Abilities-ka gaarka ah (For Custom Abilities) {#for-custom-abilities}

- Diiwaangelinta abilities-ka iyadoo la adeegsanayo WordPress hooks (Abilities API)
- Ka fogaansho diiwaangalka gaarka ah ee abilities-ka
- Isku day inaad ku baari karto WordPress 7.0+ adigoo isticmaalaya Auto mode

## Tallaabooyinka xiga (Next Steps) {#next-steps}

1. **Hubi versionkaada ku hubi**: Hubi 7.0+ ah ku jiro in aad isticmaasho Auto mode (Mode-ga tooska ah).
2. **Mode-ga saddexaad ee aad isticmaalayso dib u eeg**: Tag Settings-ka oo hubi mode-ga aad hadda isticmaalayso.
3. **Wax ka beddel haddii loo baahnaa**: Haddii aad ku jiro WordPress 7.0+ ah, u badal Auto mode.
4. **Qaybaha awoodda kala saar**: Dib u eeg oo kala saar dhammaan awoodaha aan la qeexin.
5. **Tijaabi**: Hubi in awoodaha saddexaad ee aad isticmaalayso si sax ah u shaqeeyo.

## Mawduucyada La Xidhiidha {#related-topics}

- **Aragti Awoodda (Ability Visibility)**: Hubi meel kasta oo la soo bandhigayo awoodaha ay ku kala go'aansataa.
- **WordPress Abilities API**: Baro sida WordPress u kaydinta awoodaha asalka ah.
- **Horumarinta Awoodaha Saddexaad (Third-Party Ability Development)**: Samee awoodaha shaqeynaya Auto mode.
