---
title: የሶስተኛ ወገን ሁነኛ ዝውውር
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# የሶስተኛ ወገን ሁነታ ዝውውር (Third-Party Mode Migration)

Superdav AI Agent v1.12.0 የሶስተኛ ወገን አቅሞችን (abilities) የሚይዝበትን መንገድ ቀይሯል። **የሶስተኛ ወገን ሁነታ አሁን በራስ-ሰር (auto) ላይ ነው የሚቀመጠው**፣ ይህም ያለ በእጅ ማዋቀር በWordPress 7.0+ ላይ ተወላጅ WordPress Abilities API ውህደትን ያስችላል።

## ምን ተቀየረ? {#what-changed}

### ከ v1.12.0 በፊት {#before-v1120}

የሶስተኛ ወገን አቅሞች በእጅ መቅረጽ ያስፈልጋቸው ነበር፦

- "የሶስተኛ ወገን ሁነታ"ን በግልጽ ማብራት ነበረብዎ
- አቅሞቹ ከበየየው መመዝገቢያ (custom registry) ይጫኑ ነበር
- ከWordPress Abilities API ጋር መዋሃድ አማራጭ ነበር
- አሮጌው ሁነታ (Legacy mode) መደበኛው ነበር

### ከ v1.12.0 በኋላ {#after-v1120}

የሶስተኛ ወገን አቅሞች በራስ-ሰር ይሰራሉ፦

- የሶስተኛ ወገን ሁነታ ወደ "auto" መደበኛ ይሆናል
- አቅሞቹ ከWordPress Abilities API ጋር በተፈጥሮ ይዋሃዳሉ
- በWordPress 7.0+ ላይ በእጅ ማዋቀር አያስፈልግም
- አሮጌው ሁነታ (Legacy mode) ለቀድሞ የWordPress ስሪቶች አሁንም ይገኛል

## ማን ተጽዕኖበታል? {#who-is-affected}

### አዲስ ተከላዎች (WordPress 7.0+) {#new-installations-wordpress-70}

**ምንም እርምጃ አያስፈልግም።** የሶስተኛ ወገን ሁነታ በራስ-ሰር ወደ "auto" ተቀምጧል፣ እና አቅሞቹ ወዲያውኑ ይሰራሉ።

### ያሉ ተከላዎች {#existing-installations}

**ቅንብሮችዎ ጥበቃ ተደርጓል።** የሚጠቀሙበት ከሆነ፦

- **አሮጌ ሁነታ (Legacy mode)**: በአሮጌው ሁነታ ይቀጥላሉ (ለውጥ የለም)
- **በእጅ የሶስተኛ ወገን ሁነታ (Manual third-party mode)**: በእጅ ሁነታ ይቀጥላሉ (ለውጥ የለም)
- **በራስ-ሰር ሁነታ (Auto mode)**: በአውቶ ሁነታ ይቀጥላሉ (ለውጥ የለም)

### ከ 7.0 በፊት የሆኑ የWordPress ስሪቶች {#wordpress-versions-before-70}

**አሮጌው ሁነታ (Legacy mode) አሁንም ይገኛል።** በWordPress 6.x ወይም ቀደምት ላይ ከሆኑ፦

- የሶስተኛ ወገን ሁነታ ወደ "legacy" መደበኛ ይሆናል
- በሚፈለግበት ጊዜ የሶስተኛ ወገን ሁነታን በእጅ ማብራት ይችላሉ
- ተወላጅ Abilities APIን ለመጠቀም ወደ WordPress 7.0+ ያሻሽሉ።

## ሁነታዎችን መረዳት {#understanding-the-modes}

### አውቶ ሁነታ (Auto Mode) (አዲሱ መደበኛ) {#auto-mode-new-default}

**የአውቶ ሁነታ (Auto mode)** ተወላጅ WordPress Abilities API ውህደትን ይጠቀማል፦

- አቅሞቹ በWordPress hooks ይመዘገባሉ
- ከWordPress 7.0+ Abilities API ጋር ሙሉ ተኳሃኝነት አለው
- የሶስተኛ ወገን አቅሞችን በራስ-ሰር ይለያል
- በእጅ ማዋቀር አያስፈልግም

**መቼ መጠቀም ይቻላል**: WordPress 7.0+ ሲሆን የሶስተኛ ወገን አቅሞች ሲኖሩ

### በእጅ ሁነታ (Manual Mode) {#manual-mode}

**የበእጅ ሁነታ (Manual mode)** ግልጽ ማዋቀር ይጠይቃል፦

- የትኞቹ የሶስተኛ ወገን አቅሞችን መጫን እንዳለብዎ ይገልጻሉ
- ለሙከራ ወይም ለአቅም ምርጫ መጫን ጠቃሚ ነው
- የቅንብር ፋይሎችን ማርትዕ ይጠይቃል
- ብዙ ቁጥጥር ይሰጣል፣ ግን ብዙ ዝግጅት ይጠይቃል

**መቼ መጠቀም ይቻላል**: ሙከራ፣ ለአቅም ምርጫ መጫን፣ ወይም ለበይበል ጥምረቶች

### አሮጌ ሁነታ (Legacy Mode) {#legacy-mode}

**የአሮጌ ሁነታ (Legacy mode)** የድሮ የሶስተኛ ወገን አቅም ስርዓትን ይጠቀማል፦

- የቅንብር አቅም መመዝገቢያ (የWordPress Abilities API አይደለም)
- ከቀድሞ የWordPress ስሪቶች ጋር ተኳሃኝ ነው
- ተወላጅ የWordPress ውህደት የለውም
- ተሰረዘ ቢልም ድጋፍ አለው

**መቼ መጠቀም ይቻላል**: WordPress 6.x ወይም ቀደምት ሲሆን፣ ወይም አሮጌ ተኳሃኝነት ሲያስፈልግ

## የአሁኑን ሁነታዎን መፈተሽ {#checking-your-current-mode}

### በዳሽቦርድ (Admin Panel) በኩል {#via-admin-panel}

1. ወደ **WordPress Admin** → **Superdav AI Agent** → **Settings** ይሂዱ
2. **Third-Party Mode** ቅንብሩን ይፈልጉ
3. የአሁኑን ሁነታዎ እና ሊቀይሩበት የሚችሉባቸው አማራጮች ይታያሉ።

### በኮድ (Code) በኩል {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', ወይም 'legacy'
```

## ሁነታዎን መቀየር {#changing-your-mode}

### ወደ አውቶ ሁነታ (Auto Mode) መቀየር {#switch-to-auto-mode}

በWordPress 7.0+ ላይ ከሆኑ እና አውቶ ሁነታን መጠቀም ከፈለጉ፦

1. ወደ **Superdav AI Agent** → **Settings** ይሂዱ
2. **Third-Party Mode**ን ይፈልጉ
3. **Auto (WordPress Abilities API)** ይምረጡ
4. **Save** ላይ ይጫኑ

Superdav AI Agent የሶስተኛ ወገን አቅሞችን በራስ-ሰር ይለያል እና ይመዘግባል።

### ወደ በእጅ ሁነታ (Manual Mode) መቀየር {#switch-to-manual-mode}

የትኞቹ አቅሞች መጫን እንዳለብዎ በእጅ መቆጣጠር ከፈለጉ፦

1. ወደ **Superdav AI Agent** → **Settings** ይሂዱ
2. **Third-Party Mode**ን ይፈልጉ
3. **Manual** ይምረጡ
4. **Save** ላይ ይጫኑ
5. የትኞቹ አቅሞች መጫን እንዳለብዎ ለመግለጽ የቅንብር ፋይልዎን ያርትዑ

### ወደ አሮጌ ሁነታ (Legacy Mode) መቀየር {#switch-to-legacy-mode}

የአሮጌ ተኳሃኝነት የሚያስፈልግዎ ከሆነ፦

1. ወደ **Superdav AI Agent** → **Settings** ይሂዱ
2. **Third-Party Mode**ን ይፈልጉ
3. **Legacy** ይምረጡ
4. **Save** ላይ ይጫኑ

## የአውቶ ሁነታ ጥቅሞች {#benefits-of-auto-mode}

### በራስ-ሰር መለያ (Automatic Discovery) {#automatic-discovery}

አቅሞች በራስ-ሰር ይገኛሉ ከ፦

- የተጫኑ ፕልጊኖች (plugins)
- ንቁ ቴም (theme)
- የግድ የሚያስፈልጉ ፕልጊኖች (must-use plugins)
- ድራፕ-ኢን ፕልጊኖች (drop-in plugins)

በእጅ መመዝገብ አያስፈልግም።

### ተወላጅ ውህደት (Native Integration) {#native-integration}

አቅሞች ከWordPress Abilities API ጋር ይዋሃዳሉ፦

- ከWordPress core ጋር ወጥ የሆነ ነው
- ከWordPress admin ጋር ይሰራል
- Abilities APIን የሚጠቀሙ ሌሎች ፕልጊኖች ጋር ተኳሃኝ ነው
- WordPress እያደገ ያለበት ጊዜ ለወደፊት ዝግጅት አለው

### ቀላል አስተዳደር (Simplified Management) {#simplified-management}

- የሚያርትዑባቸው የቅንብር ፋይሎች የሉም
- በእጅ የአቅም ምዝገባ የለም
- የአቅም ታይባሊቲ (Ability Visibility) ቁጥጥሮች በራስ-ሰር ይሰራሉ
- የአስተዳሚ ማሳሰቢያዎች ያልተመደቡ አቅሞችን ያስጠነቅቃሉ

### የተሻለ አፈጻጸም (Better Performance) {#better-performance}

- አቅሞቹ በካሽ (cached) ይደረጋሉ
- በጠየቁበት ጊዜ በዝግታ ይጫናሉ (Lazy-loaded)
- ለWordPress 7.0+ ተመጣጣኝ ነው

## የዝውውር መንገድ (Migration Path) {#migration-path}

### በWordPress 6.x ላይ ከሆኑ {#if-youre-on-wordpress-6x}

1. **ወደ WordPress 7.0+ ያሻሽሉ** (በሚዘጋጁበት ጊዜ)
2. **Superdav AI Agent** ወደ v1.12.0+ ያዘምኑ
3. **የሶስተኛ ወገን ሁነታን ወደ Auto ይቀይሩ** (አማራጭ ነው፤ አሮጌው ሁነታ አሁንም ይሰራል)
4. **የአቅም ታይባሊቲን (ability visibility) ይገምግሙ** ትክክለኛ የመዳረሻ ቁጥጥሮችን ለማረጋገጥ

### በWordPress 7.0+ ላይ ከሆኑ {#if-youre-on-wordpress-70}

1. **Superdav AI Agent** ወደ v1.12.0+ ያዘምኑ
2. **የሶስተኛ ወገን ሁነታ ወደ Auto የተቀመጠ መሆኑን ያረጋግጡ** (በመደበኛነት መሆን አለበት)
3. **የአቅም ታይባሊቲን (ability visibility) ይገምግሙ** ትክክለኛ የመዳረሻ ቁጥጥሮችን ለማረጋገጥ
4. **የሶስተኛ ወገን አቅሞችን ይሞክሩ** እነሱ እንደሚሰሩ ለማረጋገጥ

## ችግር መፍታት (Troubleshooting) {#troubleshooting}

### አቅሞች በአውቶ ሁነታ አይጫኑም {#abilities-arent-loading-in-auto-mode}

- በWordPress 7.0+ ላይ መሆናችሁን ያረጋግጡ
- የሶስተኛ ወገን ሁነታ ወደ "Auto" የተቀመጠ መሆኑን ያረጋግጡ
- አቅምን የሚያቀርበው ፕልጊን ንቁ መሆኑን ያረጋግጡ
- የመመዝገቢያ ስህተቶችን ለማግኘት የWordPress የስህተት መዝገቦችን (error logs) ይመልከቱ

### አሮጌው ሁነታ (Legacy mode) ማስቀጠል እፈልጋለሁ {#i-want-to-keep-legacy-mode}

- ወደ **Settings** → **Third-Party Mode** ይሂዱ
- **Legacy** ይምረጡ
- **Save** ላይ ይጫኑ
- የአሮጌው ሁነታ (Legacy mode) መስራቱን ይቀጥላል

### የእኔ የቅንብር አቅሞች አይታዩም {#my-custom-abilities-arent-showing}

- በWordPress hooks መመዝገባቸውን ያረጋግጡ
- Abilities APIን በትክክል መተግበራቸውን ያረጋግጡ
- የWordPress የስህተት መዝገቦችን ይመልከቱ
- ሁሉንም የተመዘገቡ አቅሞች ለማየት **Ability Visibility** የአስተዳሚ ገጽ ይጠቀሙ

### "ያልተመደበ አቅም" ማሳሰቢያዎችን እያየሁ ነው {#im-getting-unclassified-ability-notices}

- ይህ ለአዲስ የሶስተኛ ወገን አቅሞች መደበኛ ነው።
- በማስተዳደር ማሳሰቢያው ውስጥ ይገምግሙ እና ምድብ ይስጧቸው
- ስለ ምደባ ዝርዝሮች **Ability Visibility** ይመልከቱ

## ወደ ኋላ ተኳሃኝነት (Backward Compatibility) {#backward-compatibility}

### ያሉ ቅንብሮች (Existing Configurations) {#existing-configurations}

የሶስተኛ ወገን አቅም ቅንብሮች ካሉዎት፦

- **አሮጌ ሁነታ (Legacy mode)**: የእርስዎ ቅንብር መስራቱን ይቀጥላል
- **በእጅ ሁነታ (Manual mode)**: የእርስዎ ቅንብር መስራቱን ይቀጥላል
- **አውቶ ሁነታ (Auto mode)**: የእርስዎ ቅንብር ችላ ይባላል (አውቶ ሁነታ ይረከባል)

የእራስዎን ቅንብር ለማቆየት፣ በእጅ ወይም በአሮጌ ሁነታ ውስጥ ይቆዩ።

### የሰረዘበት የጊዜ ሰሌዳ (Deprecation Timeline) {#deprecation-timeline}

- **v1.12.0**: አሮጌ እና በእጅ ሁነታዎች ሙሉ በሙሉ ድጋፍ አላቸው
- **v1.13.0+**: አሮጌው ሁነታ የሰረዘበት ማሳሰቢያ ሊያሳይ ይችላል
- **v2.0.0**: አሮጌው ሁነታ ሊሰረዝ ይችላል (TBD)

## ምርጥ ልምዶች (Best Practices) {#best-practices}

### ለአዲስ ተከላዎች {#for-new-installations}

- አውቶ ሁነታን ይጠቀሙ (መደበኛው ነው)
- Superdav AI Agent አቅሞችን በራስ-ሰር እንዲያገኝ ይፍቀዱ
- መዳረሻን ለመቆጣጠር Ability Visibility ይጠቀሙ

### ለ ያሉ ተከላዎች {#for-existing-installations}

- በተቻለ መጠን ወደ WordPress 7.0+ ያሻሽሉ
- ቀላል አስተዳደር ለማግኘት ወደ አውቶ ሁነታ ይቀይሩ
- Ability Visibility በመጠቀም አቅሞችን ይገምግሙ እና ምድብ ይስጧቸው

### ለየቅንብር አቅሞች (Custom Abilities) {#for-custom-abilities}

- አቅሞችን በWordPress hooks (Abilities API) መመዝገብ
- የቅንብር አቅም መመዝገቢያዎችን ያስወግዱ
- በWordPress 7.0+ ላይ በአውቶ ሁነታ ይሞክሩ

## ቀጣይ እርምጃዎች (Next Steps) {#next-steps}

1. **የWordPress ስሪትዎን ይፈትሹ**: ለአውቶ ሁነታ 7.0+ ላይ መሆናችሁን ያረጋግጡ
2. **የሶስተኛ ወገን ሁነታዎን ይገምግሙ**: ወደ Settings ይሂዱ እና የአሁኑን ሁነታዎ ይፈትሹ
3. **እንደ አስፈላጊነቱ ያዘምኑ**: በWordPress 7.0+ ላይ ከሆኑ ወደ አውቶ ሁነታ ይቀይሩ
4. **አቅሞችን ምድብ ይስጧቸው**: ያልተመደቡ አቅሞችን ይገምግሙ እና ምድብ ይስጧቸው
5. **ይሞክሩ**: የሶስተኛ ወገን አቅሞችዎ በትክክል እንደሚሰሩ ያረጋግጡ

## ተዛማጅ ርዕሶች (Related Topics) {#related-topics}

- **Ability Visibility**: የትኞቹ አቅሞች የት እንደሚታዩ መቆጣጠር
- **WordPress Abilities API**: ስለ ተወላጅ የWordPress አቅም ምዝገባ መማር
- **Third-Party Ability Development**: ከአውቶ ሁነታ ጋር የሚሰሩ አቅሞችን መፍጠር
