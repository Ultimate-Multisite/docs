---
title: දෘශ්‍ය හැකියාව
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# හැකියාව දෘශ්‍යතාව (Ability Visibility)

Superdav AI Agent v1.12.0 හි **Ability Visibility** පාලන හඳුන්වා දී ඇත. මේවා එක් එක් හැකියාව කුමන මතුපිටවල් (surfaces) වලට ප්‍රදර්ශනය කළ යුතුද යන්න පාලනය කරයි. මෙයින් පරිපාලකයින්ට REST API, MCP සේවාදායකයන්, WooCommerce ඒකාබද්ධ කිරීම් සහ වෙනත් අතුරුමුහුණත් හරහා කුමන ඇගන්තුම් හැකියාවන් (agent capabilities) ලබා ගත හැකිද යන්න සියුම් ලෙස සැකසිය හැක.

## Ability Visibility යනු කුමක්ද? {#what-is-ability-visibility}

Ability Visibility යනු පහත දේ පාලනය කරන අවසර පද්ධතියකි:

- **කුමන හැකියාවන්** ඇගන්තුම් සඳහා තිබේද
- **කොහේද ප්‍රදර්ශනය කරන්නේ** (REST API, MCP, WooCommerce, ආදිය)
- **කවුරුන්ට ඒවාට ප්‍රවේශ විය හැකිද** (සහකකරුවන්ගේ අවසර ලැයිස්තු හරහා)
- **ඒවා වර්ගීකරණය කර ඇත්තේ කෙසේද** (පිළිගත් දේ vs. වර්ගීකරණය නොකළ දේ)

එක් එක් හැකියාවට විවිධ මතුපිටවල් පුරා එහි ලබා ගත හැකි බව තීරණය කරන දෘශ්‍යතා මට්ටමක් ඇත.

## දෘශ්‍යතා මට්ටම් (Visibility Levels) {#visibility-levels}

### පොදු (Public) {#public}

**පොදු හැකියාවන්** සෑම තැනකම ලබා ගත හැක:

- REST API endpoints
- MCP සේවාදායකයන්
- WooCommerce ඒකාබද්ධ කිරීම්
- චැට් අතුරුමුහුණත්
- සියලු පරිශීලක භූමිකා (අනුවර්ත අවසර සහිතව)

උදාහරණ: `scaffold-block-theme`, `activate-theme`, `send-email`

### අභ්‍යන්තර (Internal) {#internal}

**අභ්‍යන්තර හැකියාවන්** ඔබේ WordPress ස්ථාපනය තුළ පමණක් ලබා ගත හැක:

- චැට් අතුරුමුහුණත්
- පරිපාලක පැනල (Admin panels)
- ලොග් වී සිටින පරිශීලකයින්ට පමණි
- REST API හෝ බාහිර ඒකාබද්ධ කිරීම් හරහා ප්‍රදර්ශනය නොවේ

උදාහරණ: `manage-settings`, `view-analytics`, `export-data`

### සහකරු (Partner) {#partner}

**සහකරු හැකියාවන්** සුදුසුකම් ලත් සහකරුවන්ට පමණක් ලබා ගත හැක:

- පැහැදිලි සහකරු අවසර ලැයිස්තුවට ඇතුළත් කිරීම අවශ්‍ය වේ
- සහකරු තොරතුරු භාවිතයෙන් REST API හරහා ලබා ගත හැක
- සහකරු認証 (authentication) මගින් MCP හරහා ලබා ගත හැක
- සාමාන්‍ය පරිශීලකයින්ට ලබා නොදේ

උදාහරණ: `bulk-import-users`, `modify-billing`, `access-analytics`

### අක්‍රිය (Disabled) {#disabled}

**අක්‍රිය හැකියාවන්** කිසිම තැනක ලබා ගත නොහැක:

- කිසිදු මතුපිටකින් ප්‍රදර්ශනය නොවේ
- චැට් වල ලබා ගත නොවේ
- පරිපාලක පැනලවල ලබා ගත නොවේ
- පැරණි හෝ අත්හදා බැලීමේ හැකියාවන් සඳහා මෙය ප්‍රයෝජනවත් වේ

## හැකියාවන් දෘශ්‍යතාව කළමනාකරණය කිරීම {#managing-ability-visibility}

### හැකියාවන් දෘශ්‍යතා සැකසුම් වෙත පිවිසීම {#accessing-ability-visibility-settings}

1. **WordPress Admin** → **Superdav AI Agent** → **Settings** වෙත යන්න
2. **Abilities** ටැබයට ක්ලික් කරන්න
3. ස්ථාපනය කර ඇති සියලුම හැකියාවන් සහ ඒවායේ දෘශ්‍යතා මට්ටම් සහිත ලැයිස්තුවක් ඔබට පෙනේ

### හැකියාවන් විස්තර බැලීම {#viewing-ability-details}

ඕනෑම හැකියාවක් මත ක්ලික් කිරීමෙන් පහත දෑ බැලිය හැක:

- **Name**: හැකියාවේ හඳුනාගැනීමේ නාමය
- **Description**: එම හැකියාව කරන්නේ කුමක්ද යන්න
- **Current visibility**: පොදු (Public), අභ්‍යන්තර (Internal), සහකරු (Partner) හෝ අක්‍රිය (Disabled)
- **Partner allow-list**: සහකරු දෘශ්‍යතාව තිබේ නම්, ප්‍රවේශ විය හැකි සහකරුවන් (partners)
- **Last updated**: දෘශ්‍යතාව අවසන් වරට වෙනස් කළ දිනය
- **Status**: හඳුනාගෙන ඇත (Recognized) හෝ වර්ගීකරණය කර නැත (Unclassified)

### දෘශ්‍යතා මට්ටම් වෙනස් කිරීම {#changing-visibility-levels}

ඕනෑම හැකියාවක දෘශ්‍යතාව වෙනස් කිරීමට:

1. ලැයිස්තුවේ ඇති හැකියාව මත ක්ලික් කරන්න
2. 드롭다운 එකෙන් නව දෘශ්‍යතා මට්ටමක් තෝරන්න
3. "Partner" තෝරා ගන්නේ නම්, අවසර ලේඛනයේ (allow-list) සහකරු හඳුනාගැනීම් (partner identifiers) එක් කරන්න
4. **Save** මත ක්ලික් කරන්න

උදාහරණයක්:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### සමූහ මෙහෙයුම් (Bulk Operations) {#bulk-operations}

බොහෝ හැකියාවන් සඳහා දෘශ්‍යතාව වෙනස් කිරීමට:

1. හැකියාවන් අසල ඇති කොටු තබන්න (check the boxes)
2. සමූහ ක්‍රියාවේ 드롭다운 එකෙන් නව දෘශ්‍යතා මට්ටමක් තෝරන්න
3. **Apply** මත ක්ලික් කරන්න

## සහකරු අවසර ලේඛනය (Partner Allow-List) {#partner-allow-list}

**partner allow-list** යනු අභිප්‍රාය සහිත හැකියාවන් වෙත ප්‍රවේශ විය හැකි බාහිර සහකරුවන් පාලනය කරන දෙයයි.

### සහකරුවන් එකතු කිරීම {#adding-partners}

1. **Superdav AI Agent** → **Settings** → **Partners** වෙත යන්න
2. **Add Partner** මත ක්ලික් කරන්න
3. සහකරු හඳුනාගැනීම (සාමාන්‍යයෙන් API key හෝ සංවිධාන ID) ඇතුළත් කරන්න
4. අවශ්‍ය නම්, සහකරුවගේ නම සහ විස්තර එකතු කරන්න
5. **Save** මත ක්ලික් කරන්න

### හැකියාවන් සහ සහකරුවන් සම්බන්ධ කිරීම {#assigning-abilities-to-partners}

සහකරුවෙකු එක් කළ පසු:

1. **Abilities** ටැබයට යන්න
2. Partnerr visibility එකක් තියෙන ability එකක් සොයා ගන්න
3. සංස්කරණය කිරීමට ක්ලික් කරන්න
4. "Partner allow-list" කොටසේ, ප්‍රවේශය තිබිය යුතු partnerr සඳහා පෙට්ටි සලකුණු කරන්න
5. **Save** ක්ලික් කරන්න

### Partnerr ප්‍රවේශය ඉවත් කිරීම (Revoking Partner Access) {#revoking-partner-access}

Partnerr කෙනෙකුගේ ප්‍රවේශය ඉවත් කිරීමට:

1. ability එක සංස්කරණය කරන්න
2. allow-list එකේ partnerr ගේ පෙට්ටිය අතහැර දමන්න (Uncheck කරන්න)
3. **Save** ක්ලික් කරන්න

එවිට එම ability එකට Partnerr කෙනාට ප්‍රවේශය වහාම නැති වේ.

## වර්ගීකරණය නොකළ abilities (Unclassified Abilities) {#unclassified-abilities}

Superdav AI Agent හඳුනා නොගන්නා තුන්වන පාර්ශවීය ability එකක් ඔබ ස්ථාපනය කරන විට, එය **Unclassified** ලෙස සලකුණු කෙරේ.

### Unclassified Abilities සඳහා පරිපාලක දැනුම්දීම (Admin Notice for Unclassified Abilities) {#admin-notice-for-unclassified-abilities}

ඔබට පහත පරිදි පරිපාලක දැනුම්දීමක් පෙනෙනු ඇත:

```
⚠️ Unclassified Abilities Detected

මෙම ability එකතු කර තිබුණ නමුත් හඳුනාගෙන නොමැති ඒවා:
- custom-import-tool
- external-api-wrapper

මෙම ability වල ආරක්ෂක හෝ අනුකූලතා අවදානම් ඇති විය හැකිය.
කරුණාකර ඒවා සමාලෝචනය කර වර්ගීකරණය කරන්න.

[Review Abilities] [Dismiss]
```

### Unclassified Abilities සමාලෝචනය කිරීම (Reviewing Unclassified Abilities) {#reviewing-unclassified-abilities}

1. දැනුම්දීමේදී **Review Abilities** ක්ලික් කරන්න
2. වර්ගීකරණය නොකළ සෑම ability එකක් සඳහාම ඔබට පහත දේ පෙනෙනු ඇත:
   - Ability නාමය සහ විස්තරය
   - මූලාශ්‍රය (එය ස්ථාපනය කළ plugin/addon)
   - යෝජිත visibility මට්ටම
   - ආරක්ෂක ඇගයීම

3. ප්‍රවේශ මට්ටමක් තෝරන්න:
   - **Public**: ability එක විශ්වාස කරන්න; එය සෑම තැනකම නිරාවරණය කරන්න
   - **Internal**: අභ්‍යන්තර භාවිතයට පමණක් සීමා කරන්න
   - **Partner**: නිශ්චිත partnerr සඳහා සීමා කරන්න
   - **Disabled**: මෙම ability එක භාවිතා නොකරන්න

4. ඔබේ තීරණය සුරැකීමට **Classify** ක්ලික් කරන්න

### Unclassified Abilities වර්ගීකරණය කරන්නේ ඇයි? (Why Classify Unclassified Abilities?) {#why-classify-unclassified-abilities}

ability වර්ගීකරණය කිරීම:

- **ආරක්ෂාව වැඩි කරයි**: නිරාවරණය කරන දේ ඔබ පැහැදිලිව අනුමත කරයි
- **අනතුරු වළක්වයි**: වර්ගීකරණය නොකළ ability මූලික වශයෙන් අක්‍රිය කර ඇත
- **විශේෂාංග සක්‍රීය කරයි**: වර්ගීකරණය කළ පසු, එම ability එක ලබා ගත හැකිය
- **තීරණ ලේඛනගත කරයි**: විගණනය කිරීම සඳහා ඔබේ තේරීම් වාර්තා වේ

## විවිධ මතුපිට වල දෘශ්‍යතාව (Visibility in Different Surfaces) {#visibility-in-different-surfaces}

### REST API {#rest-api}

**පොදු හැකියාවන් (Public abilities)** REST endpoints හරහා ලබා ගත හැක:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**අභ්‍යන්තර සහ හවුල්කරුවන්ගේ හැකියාවන් (Internal and Partner abilities)** REST API හරහා ලබා ගත නොහැක.

### MCP Servers {#mcp-servers}

**පොදු හැකියාවන් (Public abilities)** MCP හරහා ලබා ගත හැක:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**අභ්‍යන්තර හැකියාවන් (Internal abilities)** MCP හරහා නිරාවරණය නොවේ.

**හවුල්කරුවන්ගේ හැකියාවන් (Partner abilities)** හවුල්කාරී තොරතුරු (credentials) සමඟ පමණක් ලබා ගත හැක.

### WooCommerce ඒකාබද්ධ කිරීම (WooCommerce Integration) {#woocommerce-integration}

**WooCommerce හා සම්බන්ධ පොදු හැකියාවන් (Public abilities)** පහත පරිදි ලබා ගත හැක:

- නිෂ්පාදන කළමනාකරණය (Product management)
- ඇණවුම් සැකසීම (Order processing)
- පාරිභෝගික සන්නිවේදනය (Customer communication)

**අභ්‍යන්තර හැකියාවන් (Internal abilities)** WooCommerce වෙත නිරාවරණය නොවේ.

### චැට් අතුරුමුහුණත (Chat Interface) {#chat-interface}

පරිශීලක අවසරයන් අනුව **සියලුම හැකියාවන්** (පොදු, අභ්‍යන්තර, හවුල්කාරී) චැට් තුළ ලබා ගත හැක:

- පරිපාලකයින් සියලු හැකියාවන් දකී
- සාමාන්‍ය පරිශීලකයින් පොදු හැකියාවන් පමණක් දකී
- හවුල්කරුවන් (whitelist එකේ ඇත්නම්) පොදු + හවුල්කාරී හැකියාවන් දකී

## ආරක්ෂක හොඳම භාවිතයන් (Security Best Practices) {#security-best-practices}

### අවම වරප්‍රසාද මූලධර්මය (Principle of Least Privilege) {#principle-of-least-privilege}

- භාවිතා කිරීමට ඉඩ සලසන වඩාත්ම සීමිත දෘශ්‍යතාවය (visibility) හැකියාවන් සඳහා සැකසිය යුතුය.
- සංවේදී මෙහෙයුම් සඳහා හවුල්කාරී දෘශ්‍යතාව (Partner visibility) භාවිතා කරන්න.
- ඔබ භාවිතා නොකරන හැකියාවන් අක්‍රිය කරන්න.

### නිත්‍යානුකූල විගණනයන් (Regular Audits) {#regular-audits}

- මාසිකව හැකියාවන්ගේ දෘශ්‍යතාව සමාලෝචනය කරන්න.
- වර්ගීකරණය නොකළ හැකියාවන් තිබේදැයි පරීක්ෂා කරන්න.
- භාවිත නොකරන හවුල්කරුවන් සඳහා ප්‍රවේශය ඉවත් කරන්න.

### ලොග් කිරීම සහ නිරීක්ෂණය (Logging and Monitoring) {#logging-and-monitoring}

- වඩාත්ම භාවිතා වන හැකියාවන් නිරීක්ෂණය කරන්න.
- හවුල්කාරී ප්‍රවේශ රටා (partner access patterns) නිරීක්ෂණය කරන්න.
- අසාමාන්‍ය හැකියාවන් භාවිතයන් පිළිබඳ අනතුරු ඇඟවීම් ලබා දෙන්න.

### තුන්වන පාර්ශවීය හැකියාවන් (Third-Party Abilities) {#third-party-abilities}

- සක්‍රිය කිරීමට පෙර තුන්වන පාර්ශවීය හැකියාවන් සමාලෝචනය කරන්න.
- ඒවා පැහැදිලිව වර්ගීකරණය කරන්න.
- අභ්‍යන්තර හෝ හවුල්කාරී දෘශ්‍යතාවයෙන් ආරම්භ කරන්න.
- පරීක්ෂා කිරීමෙන් පසු පමණක් පොදු (Public) වෙත ප්‍රවර්ධනය කරන්න.

## ගැටළු විසඳීම (Troubleshooting) {#troubleshooting}

**ලැයිස්තුවේ හැකියාවක් නොපෙන්වයි**
- එම හැකියාව ස්ථාපනය කර ක්‍රියාත්මක දැයි පරීක්ෂා කරන්න.
- එම plugin/addon සක්‍රීය කර ඇත්දැයි බලන්න.
- පිටුව නැවත රෙෆ්‍රෙෂ් (Refresh) කරන්න.

**මට හැකියාවක දෘශ්‍යතාව වෙනස් කළ නොහැක**
- ඔබට පරිපාලක (administrator) අවසර තිබේදැයි තහවුරු කරන්න.
- plugin එකක් මගින් එම හැකියාව අගුලු දමා ඇත්දැයි බලන්න.
- ගැටුම් ඇති කරන plugin ගැලපීම් (disabling) උත්සාහ කරන්න.

**සහකරුට හැකියාවකට ප්‍රවේශ විය නොහැක**
- සහකරු අවසර ලේඛනයේ (allow-list) ඇතුළත් වී ඇත්දැයි තහවුරු කරන්න.
- එම හැකියාවේ දෘශ්‍යතාව Partner ලෙස සකසා තිබේදැයි බලන්න.
- සහකරුවගේ විස්තර නිවැරදි දැයි තහවුරු කරන්න.
- අනන්‍යතා (authentication) දෝෂ සඳහා API logs පරීක්ෂා කරන්න.

**වර්ගීකරණය නොකළ හැකියාවන් දිගටම පෙන්වයි**
- පරිපාලක දැනුම්දීම් (admin notice) තුළ ඒවා සමාලෝචනය කර වර්ගීකරණය කරන්න.
- ඔබ කළ වර්ගීකරණය සුරැකී ඇත්දැයි තහවුරු කරන්න.
- එම හැකියාව සපයන plugin එක යාවත්කාලීනව තිබේදැයි පරීක්ෂා කරන්න.

## පැරණි මාදිලියෙන් සංක්‍රමණය (Migration from Legacy Mode) {#migration-from-legacy-mode}

Superdav AI Agent හි පැරණි අනුවාදයක සිට ඔබ උසස් කිරීමේදී:

- දැනට පවතින සියලුම හැකියාවන් ස්වයංක්‍රීයව Public ලෙස වර්ගීකරණය කරනු ලැබේ.
- අවශ්‍ය පරිදි දෘශ්‍යතාව සමාලෝචනය කර සකස් කරන්න.
- ප්‍රවේශය සීමා කිරීමට ඔබට අවශ්‍ය නැතිනම් කිසිදු ක්‍රියාවක් අවශ්‍ය නොවේ.

Native Abilities API ඒකාබද්ධ කිරීම පිළිබඳ වැඩි විස්තර සඳහා **Third-Party Mode Migration** බලන්න.

## ඊළඟ පියවර (Next Steps) {#next-steps}

හැකියාවේ දෘශ්‍යතාව වින්‍යාස කළ පසු:

1. **ඔබේ හැකියාවන් සමාලෝචනය කරන්න**: ස්ථාපනය කර ඇති සියලුම හැකියාවන් විග්‍රහ කරන්න.
2. **වර්ගීකරණය නොකළ හැකියාවන් වර්ගීකරණය කරන්න**: පරිපාලක දැනුම්දීම්වලට ප්‍රතිචාර දක්වන්න.
3. **සහකරුවන් සකස් කරන්න**: Partner දෘශ්‍යතාව භාවිතා කරන්නේ නම් සහකරුවන් එක් කරන්න.
4. **භාවිතය නිරීක්ෂණය කරන්න**: වඩාත්ම භාවිතා වන හැකියාවන් මොනවාදැයි ලුහුබඳින්න.
5. **තීරණ ලේඛනගත කරන්න**: ඔබ සෑම දෘශ්‍යතා මට්ටමක් තෝරා ගැනීමට හේතු පිළිබඳ සටහන් තබා ගන්න.
