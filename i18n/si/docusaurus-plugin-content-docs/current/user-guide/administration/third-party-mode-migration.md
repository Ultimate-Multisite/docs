---
title: තෙවන පාර්ශව මාදිලිය සංක්‍රමණය
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# තෙවන පාර්ශවීය මාදිලිය වෙත සංක්‍රමණය (Third-Party Mode Migration)

Superdav AI Agent v1.12.0 මගින් තෙවන පාර්ශවීය හැකියාවන් හැසිරවෙන ආකාරය වෙනස් කර ඇත. **තෙවන පාර්ශවීය මාදිලිය දැන් පෙරනිමියෙන් "auto" (ස්වයංක්‍රීය) ලෙස සකසා ඇත**, එමඟින් WordPress 7.0+ හි අතින් සැකසීම් නොමැතිව, native WordPress Abilities API සමඟ ඒකාබද්ධ කිරීමට ඉඩ ලැබේ.

## වෙනස් වූ දේ? {#what-changed}

### v1.12.0 ට පෙර {#before-v1120}

තෙවන පාර්ශවීය හැකියාවන් සඳහා අතින් සැකසීම් අවශ්‍ය විය:

- "third-party mode" පැහැදිලිව සක්‍රිය කිරීමට ඔබ සිදු කළ යුතු විය
- හැකියාවන් custom registry එකකින් පටවා ගනු ලැබුවා
- WordPress Abilities API සමඟ ඒකාබද්ධ වීම විකල්ප විය
- Legacy මාදිලිය පෙරනිමිය විය

### v1.12.0 න් පසු {#after-v1120}

තෙවන පාර්ශවීය හැකියාවන් ස්වයංක්‍රීයව ක්‍රියා කරයි:

- තෙවන පාර්ශවීය මාදිලිය පෙරනිමියෙන් "auto" ලෙස සකසා ඇත
- හැකියාවන් WordPress Abilities API සමඟ ස්වභාවිකව ඒකාබද්ධ වේ
- WordPress 7.0+ හි අතින් සැකසීම් අවශ්‍ය නොවේ
- පැරණි WordPress සංස්කරණ සඳහා Legacy මාදිලිය තවමත් තිබේ

## කවුරුන්ට බලපාන්නේ? {#who-is-affected}

### නව ස්ථාපනයන් (WordPress 7.0+) {#new-installations-wordpress-70}

**කිසිදු ක්‍රියාවක් අවශ්‍ය නැත.** තෙවන පාර්ශවීය මාදිලිය ස්වයංක්‍රීයව "auto" ලෙස සකසා ඇත, සහ හැකියාවන් Box එකෙන්ම ක්‍රියා කරයි.

### පවතින ස්ථාපනයන් {#existing-installations}

**ඔබේ සැකසුම් ආරක්ෂා වේ.** ඔබ භාවිතා කළේ:

- **Legacy mode**: ඔබ legacy මාදිලියේ සිටිනු ඇත (වෙනසක් නැත)
- **Manual third-party mode**: ඔබ manual මාදිලියේ සිටිනු ඇත (වෙනසක් නැත)
- **Auto mode**: ඔබ auto මාදිලිය සමඟ ඉදිරියට ගමන් කරයි (වෙනසක් නැත)

### 7.0 ට පෙර WordPress සංස්කරණ {#wordpress-versions-before-70}

**Legacy මාදිලිය තවමත් තිබේ.** ඔබ WordPress 6.x හෝ ඊට පෙර භාවිතා කරන්නේ නම්:

- තෙවන පාර්ශවීය මාදිලිය පෙරනිමියෙන් "legacy" ලෙස සකසා ඇත
- ඔබට අවශ්‍ය නම් අතින් third-party mode සක්‍රිය කළ හැකිය
- native Abilities API භාවිතා කිරීමට WordPress 7.0+ වෙත උසස් කරන්න

## මාදිලි තේරුම් ගැනීම {#understanding-the-modes}

### Auto Mode (නව පෙරනිමිය) {#auto-mode-new-default}

**Auto mode** මගින් native WordPress Abilities API ඒකාබද්ධ කිරීම භාවිතා කරයි:

- හැකියාවන් WordPress hooks හරහා ලියාපදිංචි කරනු ලැබේ
- WordPress 7.0+ Abilities API සමඟ සම්පූර්ණ අනුකූලතාව
- තෙවන පාර්ශවීය හැකියාවන් ස්වයංක්‍රීයව සොයා ගැනීම
- අතින් සැකසීම් අවශ්‍ය නොවේ

**කවදා භාවිතා කළ යුතුද**: WordPress 7.0+ සහ තෙවන පාර්ශවීය හැකියාවන් (third-party abilities) සමඟ

### අතින් ක්‍රියාත්මක කරන මාදිලිය (Manual Mode) {#manual-mode}

**අතින් ක්‍රියාත්මක කරන මාදිලියට** පැහැදිලි සැකසුම් අවශ්‍යයි:

- ඔබ බාගත කිරීමට අවශ්‍ය තෙවන පාර්ශවීය හැකියාවන් (third-party abilities) කුමක්ද යන්න සඳහන් කළ යුතුයි.
- පරීක්ෂා කිරීම සඳහා හෝ තෝරාගත් හැකියාවන් පමණක් පටවීමට මෙය ප්‍රයෝජනවත් වේ.
- සැකසුම් ගොනු සංස්කරණය කිරීමට අවශ්‍ය වේ.
- වැඩි පාලනයක් ලැබුණත්, setup වැඩියි.

**කවදා භාවිතා කළ යුතුද**: පරීක්ෂා කිරීම සඳහා, තෝරාගත් හැකියාවන් පමණක් පටවීමට හෝ අභිරුචි සැකසුම් සඳහා.

### පැරණි මාදිලිය (Legacy Mode) {#legacy-mode}

**පැරණි මාදිලිය** භාවිතා කරන්නේ පැරණි තෙවන පාර්ශවීය හැකියාවන් ක්‍රමයයි:

- අභිරුචි හැකියාව ලේඛනයක් (WordPress Abilities API නොවේ).
- පැරණි WordPress අනුවාද සමඟ පසුපසට අනුකූල වේ.
- ස්වදේශීය WordPress ඒකාබද්ධතාවයක් නොමැත.
- එය අවසන් වී ඇතත් තවමත් සහාය දක්වයි.

**කවදා භාවිතා කළ යුතුද**: WordPress 6.x හෝ ඊට පෙර, නැතහොත් පැරණි අනුකූලතාව අවශ්‍ය වූ විට.

## ඔබේ වත්මන් මාදිලිය පරීක්ෂා කිරීම {#checking-your-current-mode}

### පරිපාලක පැනලය හරහා (Via Admin Panel) {#via-admin-panel}

1. **WordPress Admin** → **Superdav AI Agent** → **Settings** වෙත යන්න.
2. **Third-Party Mode** සැකසුම සොයන්න.
3. ඔබේ වත්මන් මාදිලිය සහ එය වෙනස් කිරීමට ඇති විකල්ප ඔබට පෙනේවි.

### කේත මගින් (Via Code) {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', හෝ 'legacy'
```

## ඔබේ මාදිලිය වෙනස් කිරීම {#changing-your-mode}

### Auto Mode වෙත මාරු වීම {#switch-to-auto-mode}

ඔබ WordPress 7.0+ භාවිතා කරන්නේ නම් සහ auto mode භාවිතා කිරීමට අවශ්‍ය නම්:

1. **Superdav AI Agent** → **Settings** වෙත යන්න.
2. **Third-Party Mode** සොයා ගන්න.
3. **Auto (WordPress Abilities API)** තෝරන්න.
4. **Save** ක්ලික් කරන්න.

Superdav AI Agent විසින් තෙවන පාර්ශවීය හැකියාවන් ස්වයංක්‍රීයව සොයාගෙන ලියාපදිංචි කරනු ඇත.

### Manual Mode වෙත මාරු වීම {#switch-to-manual-mode}

ඔබට කුමන හැකියාවන් පටවන්නේද යන්න අතින් පාලනය කිරීමට අවශ්‍ය නම්:

1. **Superdav AI Agent** → **Settings** වෙත යන්න.
2. **Third-Party Mode** සොයා ගන්න.
3. **Manual** තෝරන්න.
4. **Save** ක්ලික් කරන්න.
5. ඔබ බාගත කිරීමට අවශ්‍ය හැකියාවන් සඳහන් කිරීම සඳහා ඔබේ configuration file සංස්කරණය කරන්න.

### Legacy Mode වෙත මාරු වීම {#switch-to-legacy-mode}

ඔබට පැරණි අනුකූලතාව අවශ්‍ය නම්:

1. **Superdav AI Agent** වෙත යන්න → **Settings** (සැකසුම්)
2. **Third-Party Mode** (තෙවන පාර්ශවයේ මාදිලිය) සොයා ගන්න
3. **Legacy** (පරණ ක්‍රමය) තෝරන්න
4. **Save** (සුරකින්න) ක්ලික් කරන්න

## Auto Mode හි ප්‍රතිලාභ {#benefits-of-auto-mode}

### ස්වයංක්‍රීය සොයාගැනීම (Automatic Discovery) {#automatic-discovery}

පහත දේ වලින් හැකියාවන් ස්වයංක්‍රීයව සොයා ගනී:

- ස්ථාපනය කර ඇති plugin (ප්ලග්ඉන්)
- ක්‍රියාත්මක වන theme (තීමය)
- අනිවාර්යයෙන් භාවිතා කළ යුතු plugins (Must-use plugins)
- Drop-in plugins

අතින් ලියා පටලන අවශ්‍ය නැහැ.

### දේශීය ඒකාබද්ධතාව (Native Integration) {#native-integration}

මෙම හැකියාවන් WordPress Abilities API සමඟ ඒකාබද්ධ වේ:

- WordPress core සමඟ අනුකූලයි
- WordPress admin සමඟ ක්‍රියා කරයි
- Abilities API භාවිතා කරන වෙනත් plugins සමඟ වැඩ කරයි
- WordPress පරිණාමය වන විට අනාගතයට ඔරොත්තු දෙන (Future-proof)

### සරල කළ කළමනාකරණය (Simplified Management) {#simplified-management}

- සංස්කරණය කිරීමට configuration files (සංස්කරණ ගොනු) අවශ්‍ය නැහැ
- අතින් ability ලියා පටලන අවශ්‍ය නැහැ
- Ability Visibility controls ස්වයංක්‍රීයව ක්‍රියා කරයි
- Admin notices මගින් වර්ගීකරණය නොකළ abilities පිළිබඳ දැනුම් දීම් ලබා දෙයි

### වඩා හොඳ කාර්ය සාධනය (Better Performance) {#better-performance}

- Abilities cache කර ඇත
- අවශ්‍ය වූ විට Lazy-loaded වේ
- WordPress 7.0+ සඳහා ප්‍රශස්ත කර ඇත

## සංක්‍රමණ මාර්ගය (Migration Path) {#migration-path}

### ඔබ WordPress 6.x හි සිටී නම් {#if-youre-on-wordpress-6x}

1. **WordPress 7.0+ වෙත උසස් කරන්න** (සූදානම් වූ විට)
2. **Superdav AI Agent** v1.12.0+ දක්වා යාවත්කාලීන කරන්න
3. **third-party mode Auto වෙත වෙනස් කරන්න** (විකල්පයි; legacy mode තවමත් ක්‍රියා කරයි)
4. නිසි ප්‍රවේශ පාලනය (access controls) සහතික කිරීම සඳහා ability visibility සමාලෝචනය කරන්න

### ඔබ WordPress 7.0+ හි සිටී නම් {#if-youre-on-wordpress-70}

1. **Superdav AI Agent** v1.12.0+ දක්වා යාවත්කාලීන කරන්න
2. **third-party mode Auto ලෙස සකසා ඇති බව තහවුරු කරන්න** (එය පෙරනිමියෙන් තිබිය යුතුය)
3. නිසි ප්‍රවේශ පාලනය සහතික කිරීම සඳහා ability visibility සමාලෝචනය කරන්න
4. ඒවා ක්‍රියාත්මක වන බව තහවුරු කිරීමට third-party abilities පරීක්ෂා කරන්න

## ගැටළු නිරාකරණය (Troubleshooting) {#troubleshooting}

### auto mode හි abilities load නොවේ නම් {#abilities-arent-loading-in-auto-mode}

- ඔබ WordPress 7.0+ හි සිටින බව තහවුරු කර ගන්න
- third-party mode "Auto" ලෙස සකසා ඇති බව පරීක්ෂා කරන්න
- හැකියාව ලබා දෙන plugin ක්‍රියාත්මක දැයි පරීක්ෂා කරන්න
- registration errors සඳහා WordPress error logs පරීක්ෂා කරන්න

### මට legacy mode එක තබා ගැනීමට අවශ්‍ය නම් {#i-want-to-keep-legacy-mode}

- **Settings** → **Third-Party Mode** වෙත යන්න
- **Legacy** තෝරන්න
- **Save** ක්ලික් කරන්න
- Legacy mode දිගටම ක්‍රියාත්මක වනු ඇත

### මගේ කස්ටම් හැකියාවන් පෙන්වන්නේ නැහැ {#my-custom-abilities-arent-showing}

- ඒවා WordPress hooks හරහා ලියාපදිංචි කර තිබේදැයි තහවුරු කරන්න
- ඒවා Abilities API නිවැරදිව ක්‍රියාත්මක කරනවාදැයි පරීක්ෂා කරන්න
- WordPress error logs සමාලෝචනය කරන්න
- සියලුම ලියාපදිංචි හැකියාවන් බැලීමට **Ability Visibility** admin page එක භාවිතා කරන්න

### මට "unclassified ability" (වර්ගීකරණය නොකළ හැකියාව) පිළිබඳ දැනුම්දීම් ලැබෙනවා {#im-getting-unclassified-ability-notices}

- මෙය නව තුන්වන පාර්ශවීය හැකියාවන් සඳහා සාමාන්‍ය දෙයකි
- පරිපාලක දැනුම්දීමේදී ඒවා සමාලෝචනය කර වර්ගීකරණය කරන්න
- වර්ගීකරණය කිරීම පිළිබඳ විස්තර සඳහා **Ability Visibility** බලන්න

## පසුගාමී අනුකූලතාව (Backward Compatibility) {#backward-compatibility}

### පවතින සැකසුම් (Existing Configurations) {#existing-configurations}

ඔබට දැනටමත් තුන්වන පාර්ශවීය හැකියාවන්ගේ සැකසුම් තිබේ නම්:

- **Legacy mode**: ඔබේ සැකසුම ක්‍රියාත්මක වීම දිගටම සිදු වේ
- **Manual mode**: ඔබේ සැකසුම ක්‍රියාත්මක වීම දිගටම සිදු වේ
- **Auto mode**: ඔබේ සැකසුම නොසලකා හැරේ (auto mode විසින් එය භාර ගනී)

ඔබේ කස්ටම් සැකසුම ආරක්ෂා කර ගැනීමට, Manual හෝ Legacy mode එකේ රැඳී සිටින්න.

### අත්හැරීමේ කාලරට (Deprecation Timeline) {#deprecation-timeline}

- **v1.12.0**: Legacy සහ Manual modes සම්පූර්ණයෙන්ම සහාය වේ
- **v1.13.0+**: Legacy mode හි අත්හැරීමේ දැනුම්දීම් පෙන්විය හැක
- **v2.0.0**: Legacy mode ඉවත් විය හැක (තීරණය වෙමින් පවතී)

## හොඳම භාවිතයන් (Best Practices) {#best-practices}

### නව ස්ථාපනයන් සඳහා (For New Installations) {#for-new-installations}

- Auto mode භාවිතා කරන්න (එය පෙරනිමියයි)
- Superdav AI Agent ස්වයංක්‍රීයව හැකියාවන් සොයා ගැනීමට ඉඩ දෙන්න
- ප්‍රවේශය පාලනය කිරීමට Ability Visibility භාවිතා කරන්න

### පවතින ස්ථාපනයන් සඳහා (For Existing Installations) {#for-existing-installations}

- හැකි සෑම විටම WordPress 7.0+ වෙත උසස් කරන්න
- සරල කළ කළමනාකරණය සඳහා Auto mode එකට මාරු වන්න
- Ability Visibility භාවිතයෙන් හැකියාවන් සමාලෝචනය කර වර්ගීකරණය කරන්න

### කස්ටම් හැකියාවන් සඳහා (For Custom Abilities) {#for-custom-abilities}

- WordPress hooks හරහා හැකියාවන් ලියාපදිංචි කරන්න (Abilities API)
- කස්ටම් ability registries වලට ගොස් ඒවා භාවිතා කිරීමෙන් වළකින්න
- Auto mode සමඟ WordPress 7.0+ හි පරීක්ෂා කරන්න

## ඊළඟ පියවර (Next Steps) {#next-steps}

1. **ඔබේ WordPress අනුවාදය පරීක්ෂා කරන්න**: Auto මාදිලිය සඳහා ඔබ 7.0 හෝ ඊට වැඩි සංස්කරණයක් භාවිතා කරන බව තහවුරු කර ගන්න.
2. **ඔබේ තුන්වන පාර්ශවීය මාදිලිය සමාලෝචනය කරන්න**: Settings වෙත ගොස් ඔබේ වත්මන් මාදිලිය පරීක්ෂා කරන්න.
3. **අවශ්‍ය නම් යාවත්කාලීන කරන්න**: ඔබ WordPress 7.0 හෝ ඊට වැඩි සංස්කරණයක් භාවිතා කරන්නේ නම් Auto මාදිලියට මාරු වන්න.
4. **හැකියාවන් වර්ගීකරණය කරන්න**: වර්ගීකරණය නොකළ හැකියාවන් සමාලෝචනය කර වර්ගීකරණය කරන්න.
5. **පරීක්ෂා කරන්න**: ඔබේ තුන්වන පාර්ශවීය හැකියාවන් නිවැරදිව ක්‍රියාත්මක වේදැයි තහවුරු කරන්න.

## අදාළ මාතෘකා {#related-topics}

- **හැකියාවන් දෘශ්‍යතාව (Ability Visibility)**: කුමන ස්ථානවලදී කුමන හැකියාවන් ප්‍රදර්ශනය කළ යුතුද යන්න පාලනය කිරීම
- **WordPress Abilities API**: ස්වදේශීය WordPress හැකියාවන් ලියාපදිංචි කිරීම ගැන ඉගෙන ගන්න
- **තුන්වන පාර්ශවීය හැකියාවන් සංවර්ධනය (Third-Party Ability Development)**: Auto මාදිලිය සමඟ ක්‍රියා කරන හැකියාවන් නිර්මාණය කිරීම
