---
title: ප්‍රතිකාර පෝරම
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# චෙක්අවුට් ෆෝම්ස් (Checkout Forms) {#checkout-forms}

නව පාරිභෝගිකයන් පරිවර්තනය කිරීමට විවිධ ක්‍රම අත්හදා බැලීමට පහසු සහ නම්‍යශීලී ක්‍රමයකි චෙක්අවුට් ෆෝම්ස්.

Ultimate Multisite 2.0 හි Checkout Form editor එකක් තිබෙනවා, ඒකෙන් ඔබට අවශ්‍ය ඕනෑම ආකාරයක පෝරම (forms) නිර්මාණය කරගත හැකියි; විවිධ ක්ෂේත්‍ර (fields), දීමනා කරන නිෂ්පාදන වැනි දේවල් එක් කළ හැකියි.

මෙම විශේෂාංගයට පිවිසීමට, වම් පැත්තේ ඇති side-bar එකේ Checkout Forms මෙනුවට යන්න.

![Checkout Forms list](/img/config/checkout-forms-list.png)

මෙම පිටුවේ ඔබට ඔබ සතු සියලුම checkout forms දැකගත හැකියි.

ලැයිස්තු වගුවේ **Status** (තත්ත්වය) තීරුවක් ඇතුළත් කර තිබෙනවා, ඒ නිසා එක් එක් form පාරිභෝගිකයින්ට දැනට ලබා ගත හැකිද යන්න ඔබට තහවුරු කරගත හැකියි:

| Status | අර්ථය |
|---|---|
| **Active** (ක්‍රියාකාරී) | එහි shortcode හෝ registration page ප්‍රකාශයට පත් කළ ඕනෑම තැනක එම form භාවිතා කළ හැකියි. |
| **Inactive** (ක්‍රියා විරහිත) | එම form සුරැකී තිබුණද අක්‍රිය කර ඇත. ඔබට එය නැවත සක්‍රිය කරන තුරු පාරිභෝගිකයින්ට checkout කිරීමට නොහැකිය. |

විශේෂයෙන් ඔබ ඔබේ ප්‍රධාන forms සමඟ කෙටුම්පත් (draft) හෝ 계절ային checkout forms තබා ගන්නා විට, සංස්කරණය කිරීමට පෙර status තීරුව භාවිතා කරන්න.

ඔබට අලුත් එකක් නිර්මාණය කිරීමට අවශ්‍ය නම්, පිටුවේ ඉහළින් Add Checkout Form ක්ලික් කරන්න.

ඔබේ ආරම්භක ලක්ෂ්‍යය ලෙස මෙම විකල්ප තුනෙන් එකක් තෝරාගත හැකියි: single step (එක් පියවර), multi-step (බහු පියවර) හෝ blank (හිස්). ඉන්පසු Editor වෙත යාමට ක්ලික් කරන්න.

ඔබ **single step** හෝ **multi-step** ආරම්භක ලක්ෂ්‍යය ලෙස තෝරා ගන්නේ නම්, form template එකේ පෙරනිමියෙන් **Template Selection** (Template තේරීම) ක්ෂේත්‍රයක් ඇතුළත් වේ. මෙම ක්ෂේත්‍රයෙන් පාරිභෝගිකයින්ට registration ක්‍රියාවලියේදී වෙබ් අඩවි Template එකක් තෝරා ගැනීමට අවස්ථාව ලැබේ. ඔබට එය තිබිය හැකියි, ඉවත් කළ හැකියි, නැතිනම් editor එකේ වෙනත් ඕනෑම field එකක් මෙන් ස්ථානය වෙනස් කළ හැකියි.

![Checkout Form editor](/img/config/checkout-form-editor.png)

විකල්පයක් ලෙස, ඔබ දැනටමත් ඇති පෝරම සංස්කරණය කිරීමට හෝ පිටපත් කිරීමට එහි නමේ පහළ ඇති විකල්ප ක්ලික් කිරීමෙන් කළ හැකිය. එහිදී ඔබට පෝරමයේ shortcode පිටපත් කිරීමට හෝ පෝරමය මකා දැමීමට ද විකල්ප සොයාගත හැක.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Checkout Form Editor පිළිබඳ දළ විශ්ලේෂණයක් {#checkout-form-editor-overview}

Checkout form editor එකෙන් ඔබේ ලියාපදිංචි කිරීමේ පෝරම ගොඩනැගීම සඳහා පුළුල් අතුරුමුහුණතක් (interface) ලබා දෙයි. මෙන්න සංස්කරණයේ සැකැස්ම පිළිබඳ දළ විශ්ලේෂණයක්:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Checkout Form එකක් සංස්කරණය කිරීම {#editing-a-checkout-form}

විවිධ අරමුණු සඳහා checkout forms නිර්මාණය කළ හැකියි. මෙම උදාහරණයේදී අපි ලියාපදිංචි කිරීමේ පෝරමක වැඩ කරමු.

checkout form editor වෙත ගිය පසු, ඔබේ පෝරමකට නමක් (එය අභ්‍යන්තර යොමු කිරීම් සඳහා පමණක් භාවිතා වේ) සහ slug එකක් (උදාහරණයක් ලෙස shortcodes නිර්මාණය කිරීමට භාවිතා කරන) ලබා දෙන්න.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Forms කොටස් (steps) සහ ක්ෂේත්‍ර (fields) වලින් සමන්විත වේ. Add New Checkout Step ක්ලික් කිරීමෙන් ඔබට නව පියවරක් (step) එකතු කළ හැකියි.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

මෝඩල් කවුළුවේ පළමු ටැබ් එකේ, ඔබේ පෝරමයේ පියවරේ අන්තර්ගතය පුරවන්න. එයට ID එකක්, නමක් සහ විස්තරයක් දෙන්න. මෙම දේවල් බොහෝ විට අභ්‍යන්තර භාවිතය සඳහා භාවිතා වේ.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

ඊළඟට, පියවරේ දෘශ්‍යතාව (visibility) සැකසීමට යොමු වන්න. ඔබට "항상 පෙන්වන්න" (Always show), "ලියාපදිංචි වූ පරිශීලකයින් සඳහා පමණක් පෙන්වන්න" (Only show for logged in users) හෝ "අමුත්තන් සඳහා පමණක් පෙන්වන්න" (Only show for guests) යන ඒවායින් තෝරා ගත හැකිය.

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

අවසාන වශයෙන්, පියවරයේ විලාසය (style) වින්‍යාස කරන්න. මේවා විකල්ප ක්ෂේත්‍ර වේ.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

දැන්, අපගේ පළමු පියවරට ක්ෂේත්‍ර (fields) එකතු කිරීමට කාලයයි. Add New Field ක්ලික් කර ඔබට අවශ්‍ය කොටසෙහි වර්ගය තෝරන්න.

![Checkout form step with fields](/img/config/checkout-form-step-with-fields.png)

සෑම ක්ෂේත්‍රයකටම පුරවන්න වෙනස් විවිධ පරාමිති තිබෙනවා. මේ පළමු ඇතුළුවීම සඳහා, අපි "Username" (පරිශීලක නාමය) ක්ෂේත්‍රය තෝරා ගනිමු.

![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

![Username field content settings](/img/config/checkout-form-username-content.png)

![Username field visibility settings](/img/config/checkout-form-username-visibility.png)

![Username field style settings](/img/config/checkout-form-username-style.png)

ඔබට අවශ්‍ය පරිදි ඔබට අවශ්‍ය තරම් පියවර සහ ක්ෂේත්‍ර එකතු කළ හැකියි. ඔබේ නිෂ්පාදන පාරිභෝගිකයින් තෝරා ගැනීමට දැක්වීමට, Pricing Table (මිල ගණන් වගුව) ක්ෂේත්‍රය භාවිතා කරන්න. ඔබ ඔබේ සේවාදායකයින්ට සැකිල්ලක් (template) තෝරා ගැනීමට ඉඩ දීමට කැමති නම්, Template Selection (සැකිල්ල තේරීම) ක්ෂේත්‍රය එකතු කරන්න. සහ ඒ වගේ දේවල්.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**සටහන:** checkout form එකක් නිර්මාණය කිරීමට username, email, password, site title (සයිට් නාමය), site URL (සයිට් ලිපිනය), order summary (ඇණවුම් සාරාංශය), payment (ගෙවීම්) සහ submit button (සමතුලිත බොත්තම) වැනි ක්ෂේත්‍ර අනිවාර්ය වේ._

ඔබ ඔබේ checkout form එක සමඟ වැඩ කරන අතරතුර, පාරිභෝගිකයින්ට එම form එක පෙනෙන ආකාරය බැලීමට Preview (පූර්ව දර්ශනය) බොත්තම භාවිතා කළ හැකියි. දැනටමත් පරිශීලකයෙකු ලෙස හෝ අමුත්තෙකු ලෙස දැකීම අතර වෙනස් විය හැකියි.

![Checkout Form preview button](/img/config/checkout-form-preview-button.png)

![Checkout Form preview modal](/img/config/checkout-form-preview-modal.png)

අවසාන වශයෙන්, Advanced Options (උසස් විකල්ප) තුළ ඔබ "Thank You" පිටුව සඳහා පණිවිඩ සැකසිය හැකියි, පරිවර්තන (conversions) නිරීක්ෂණය කිරීමට කොටස් (snippets) එකතු කළ හැකියි, ඔබේ checkout form එකට අමතර CSS එකක් එක් කළ හැකියි හෝ යම් රටවල් සඳහා එය සීමා කළ හැකියි.

![Advanced Options](/img/config/checkout-form-advanced.png)

දකුණු තීරුවේ ඇති මෙම විකල්පය ක්‍රියාත්මක කිරීමෙන් (toggle කිරීමෙන්) ඔබට ඔබේ checkout form එක අතින් ක්‍රියාත්මක කිරීමට හෝ අක්‍රිය කිරීමට (disable) හැකිය, නැතිනම් එය ස්ථිරවම මකා දැමිය හැකියි.

![Active toggle](/img/config/checkout-form-active.png)

ఫారం తొలగించడానికి, ఫారమ్ యాక్షన్స్ (form actions) లో ఉన్న డిలీట్ ఆప్షన్‌పై క్లిక్ చేయండి:

![Checkout form delete option](/img/config/checkout-form-delete.png)

మీ చెక్‌అవుట్ ఫారమ్‌ను సేవ్ చేయడం మర్చిపోవద్దు!

![Save button](/img/config/checkout-form-save.png)

మీ ఫారమ్ యొక్క shortcode పొందడానికి, 'Generate Shortcode' పై క్లిక్ చేసి, మోడల్ విండోలో చూపబడిన ఫలితాన్ని కాపీ చేయండి.

![Save button with shortcode](/img/config/checkout-form-save.png)

### ధరల పట్టిక ఫీల్డ్ (The Pricing Table Field) {#the-pricing-table-field}

**Pricing Table** ఫీల్డ్ చెక్‌అవుట్ ఫారమ్‌లో మీ ఉత్పత్తులను ప్రదర్శిస్తుంది, తద్వారా కస్టమర్‌లు ఒక ప్లాన్‌ను ఎంచుకోవచ్చు. మీరు ఈ ఫీల్డ్‌ను ఎడిట్ చేసినప్పుడు, మీరు అనేక ఆప్షన్‌లను కాన్ఫిగర్ చేయవచ్చు:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

프런트엔డ్ రిజిస్ట్రేషన్ ఫారమ్‌లో ధరల పట్టిక ఎలా కనిపిస్తుందో ఇక్కడ ఉంది:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products (ఉత్పత్తులు)**: ఏ ఉత్పత్తులను ప్రదర్శించాలో మరియు అవి ఏ క్రమంలో కనిపించాలో ఎంచుకోండి.
  * **Force Different Durations (విభిన్న కాల వ్యవధులను బలవంతం చేయండి)**: ఇది ఎనేబుల్ చేయబడితే, ప్రస్తుతం ఎంచుకున్న బిల్లింగ్ పీరియడ్‌కు సరిపోయే ధరల వైవిధ్యాలు ఉన్నప్పటికీ, అన్ని ఉత్పత్తులు చూపబడతాయి. ఇది డిసేబుల్ చేయబడితే (డిఫాల్ట్), ఎంచుకున్న కాలానికి వైవిధ్యం లేని ఉత్పత్తులు దాచబడతాయి.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected (ముందుగా ఎంపిక చేసినప్పుడు దాచండి)**: URL ద్వారా ఒక ప్లాన్ ఇప్పటికే ఎంచుకోబడితే (ఉదాహరణకు `/register/premium`), ధరల పట్టికను దాచిపెడుతుంది.
  * **Pricing Table Template (ధరల పట్టిక టెంప్లేట్)**: ధరల పట్టిక కోసం దృశ్య టెంప్లేట్‌ను (Simple List, Legacy వంటివి) ఎంచుకోండి.

ఏదైనా ఉత్పత్తిని ఫారమ్‌లో ఆ ఉత్పత్తి యొక్క చెక్‌అవుట్ ప్రవాడ్‌ను పూర్తి చేయడానికి అవసరమైన ఫీల్డ్‌లను చేర్చడానికి ముందు Pricing Table లో జోడిస్తే, ఎడిటర్ ఇప్పుడు ఒక హెచ్చరికను చూపుతుంది. లైవ్ రిజిస్ట్రేషన్ ఫారమ్ కోసం మార్పులను ప్రచురించడానికి లేదా సేవ్ చేయడానికి ముందు ఆ తప్పిపోయిన అవసరమైన ఫీల్డ్‌ను జోడించడానికి ఈ హెచ్చరికను ఉపయోగించండి.

### කාල සීමාව තෝරා ගැනීමට ස්විචයක් එකතු කිරීම {#adding-a-period-selection-toggle}

ඔබේ නිෂ්පාදන සඳහා [Price Variations](creating-your-first-subscription-product#price-variations) වැනි දේවල් (උදාහරණයක් ලෙස මාසික සහ වාර්ෂික මිල ගණන්) සකසා ඇත්නම්, ඔබට ඔබේ චෙක්අවුට් ෆෝම් එකට **Period Selection** ක්ෂේත්‍රයක් එක් කළ හැකිය. මෙම ක්ෂේත්‍රය පෙන්වන්නේ පාරිභෝගිකයින්ට බිල්පත් කාල පරිච්ඡේද අතර මාරු වීමට ඉඩ දෙන ටොගලයක් වන අතර, මිල ගණන් වගුව තත්‍ය වේලාවෙන් වෙනස් වේ.

#### පියවර 1: ඔබේ නිෂ්පාදනවල Price Variations සකසන්න {#step-1-set-up-price-variations-on-your-products}

Period Selection ක්ෂේත්‍රය එකතු කිරීමට පෙර, ඔබේ නිෂ්පාදන සඳහා මිල විචලනයන් (price variations) සකසා ඇති බවට වග බලා ගන්න. **Ultimate Multisite > Products** වෙත ගොස්, නිෂ්පාදනයක් සංස්කරණය කර, වෙනස් කළ බිල්පත් කාල පරිච්ඡේද (උදාහරණයක් ලෙස අඩු මිලකට වාර්ෂික) එක් කිරීමට **Price Variations** ටැබයට යන්න.

![Product-price variations tab on a product](/img/config/product-price-variations-tab.png)

#### පියවර 2: ඔබේ චෙක්අවුට් ෆෝම් එකට Period Selection ක්ෂේත්‍රය එක් කරන්න {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. **Ultimate Multisite > Checkout Forms** වෙත ගොස් ඔබේ චෙක්අවුට් ෆෝම් සංස්කරණය කරන්න.

2. ඔබේ **Pricing Table** ක්ෂේත්‍රය අඩංගු පියවරට පහළට ගොස් **Add new Field** ක්ලික් කරන්න.

3. ක්ෂේත්‍ර වර්ග තෝරා ගැනීමේ ද්වාරයේදී, **Period Select** ක්ලික් කරන්න.

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4. කාල පරිච්ඡේද විකල්ප සකසන්න. සෑම විකල්පයකටම පහත දේ අවශ්‍ය වේ:
   * **Duration**: සංඛ්‍යාව (උදාහරණයක් ලෙස `1`)
   * **Duration unit**: කාල පරිච්ඡේද වර්ගය (දින, සති, මාස හෝ වසර)
   * **Label**: පාරිභෝගිකයින් දකින පෙළ (උදාහරණයක් ලෙස "මාසික", "වාර්ෂික")

5. තවත් කාල පරිච්ඡේද විකල්ප එකතු කිරීමට **+ Add Option** ක්ලික් කරන්න. මෙම විකල්ප ඔබේ නිෂ්පාදනවල ඔබ සකසා ඇති මිල විචලනයන් සමඟ ගැලපිය යුතුය.

![Period Selection field settings](/img/config/period-selection-field-settings.png)

6. **Period Selector Template** එකක් තෝරන්න (Clean යනු පෙරනිමියයි, එය කස්ටම් CSS සඳහා සූදානම් වූ සරල විලාසිතා සහිත තේරීමක් පෙන්වයි).

७. **Save Field** ක්ලික් කරන්න.

#### පියවර 3: මිල ගණන් වගුවට ඉහළින් ක්ෂේත්‍රය පිහිටුවීම {#step-3-position-the-field-above-the-pricing-table}

හොඳම පරිශීලක අත්දැකීම සඳහා, ඔබේ චෙක්අවුට් (checkout) පියවරේදී Period Selection ක්ෂේත්‍රය Pricing Table ක්ෂේත්‍රයට **පෙර** දිස්වන බවට වග බලා ගන්න. ඔබට චෙක්අවුට් ෆෝම් එඩිටරයේ ඇති ක්ෂේත්‍ර නැවත සකස් කිරීමට ඒවා ඇදගත හැකියි. මෙලෙස, පාරිභෝගිකයින් මුලින්ම ගෙවීම් කාල පරිච්ඡේදයක් තෝරාගෙන, ඉන්පසු එම කාල පරිච්ඡේදයට අදාළ මිල ගණන් දැක බැලිය හැකියි.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### ඉදිරිපස (Frontend) ක්‍රියා කරන ආකාරය {#how-it-works-on-the-frontend}

එය වින්‍යාස කළ පසු, ඔබේ ලියාපදිංචි පිටුවට පැමිණෙන පාරිභෝගිකයින් මිල ගණන් වගුවේ ඉහළින් කාල පරිච්ඡේද තෝරන්නා දකී. ඔවුන් වෙනත් ගෙවීම් කාල පරිච්ඡේදයක් ක්ලික් කරන විට:

  * මිල ගණන් වගුව තෝරාගත් කාල පරිච්ඡේදයට අදාළ මිල ගණන් පෙන්වීමට ක්ෂණිකව යාවත්කාලීන වේ (පිටුව නැවත ආරම්භ කිරීම අවශ්‍ය නොවේ).
  * Pricing Table ක්ෂේත්‍රයේ **Force Different Durations** අක්‍රිය කර ඇත්නම්, තෝරාගත් කාල පරිච්ඡේදයට මිල වෙනස් වන නිෂ්පාදන වසනු ඇත.
  * **Force Different Durations** සක්‍රීය කර ඇත්නම්, තෝරාගත් කාල පරිච්ඡේදයකට වෙනස් වීමක් නොමැති නිෂ්පාදන පවා සියලුම නිෂ්පාදන දර්ශනය වේ (ඒවා ඒවායේ පෙරනිමි මිල පෙන්වනු ඇත).

#### URL හරහා ගෙවීම් කාල පරිච්ඡේදයක් පෙර තෝරා ගැනීම {#pre-selecting-a-billing-period-via-url}

ඔබට URL හරහා නිෂ්පාදනයක් සහ ගෙවීම් කාල පරිච්ඡේදයක් කලින් තෝරාගත හැකියි. Ultimate Multisite මෙම URL රටා සඳහා සහාය දක්වයි:

  * `/register/premium` — "Premium" නිෂ්පාදනය පමණ පෙර තෝරා ගැනීම
  * `/register/premium/12` — නිෂ්පාදනය සහ මාස 12ක කාලයක් පෙර තෝරා ගැනීම
  * `/register/premium/1/year` — වසරකට අදාළ කාල පරිච්ඡේදයකින් යුත් නිෂ්පාදනය පෙර තෝරා ගැනීම

### සැකිල්ල තේරීමේ ක්ෂේත්‍රය (The Template Selection Field) {#the-template-selection-field}

**Template Selection** ක්ෂේත්‍රය මගින් පාරිභෝගිකයින්ට චෙක්අවුට් කිරීමේදී වෙබ් අඩවි සැකිල්ලක් (site template) තෝරා ගැනීමට ඉඩ සලසයි. Ultimate Multisite v2.6.1 හි එක් පියවර සහ බහු-පියවර චෙක්අවුට් ෆෝම් සැකිලි වල පෙරනිමිතව ඇතුළත් කර ඇත.

#### ක්ෂේත්‍රය අතින් එකතු කිරීම {#adding-the-field-manually}

ඔබ v2.6.1 ට පෙර නිර්මාණය කරන ලද හෝ හිස් සැකිල්ලකින් ආරම්භ කරන ලද පෝරමයක් සමඟ වැඩ කරන්නේ නම්:

1. **Ultimate Multisite > Checkout Forms** වෙත ගොස් ඔබේ චෙක්අවුට් පෝරමය සංස්කරණය කරන්න.
2. වෙබ් අඩවි විස්තර එකතු කරන පියවරේ, **Add new Field** ක්ලික් කරන්න.
3. ෆීල්ඩ් වර්ග දialog එකෙන් **Template Selection** තෝරන්න.
4. ෆීල්ඩ් එක වින්‍යාස කරන්න:
   - **Label** — Template ජාලය (grid) උඩ පාරිභෝගිකයින් දකින ශීර්ෂය (උදාහරණයක් ලෙස, "සයිට් සැකිල්ලක් තෝරන්න").
   - **Required** — පාරිභෝගිකයින් ඉදිරියට යාමට පෙර සැකිල්ලක් තෝරාගත යුතුද යන්න.

#### එය ක්‍රියා කරන ආකාරය {#how-it-works}

පාරිභෝගිකයෙකු චෙක්අවුට් කිරීමේදී සැකිල්ලක් තෝරා ගත් විට, Ultimate Multisite ඔවුන්ගේ නව වෙබ් අඩවිය සකස් කිරීමේදී එය භාවිතා කරයි. මෙහි පෙන්වන සැකිලි ඔබේ **Site Templates** ලැයිස්තුවෙන් (**Ultimate Multisite > Site Templates**) ලබා ගනී. පාරිභෝගිකයින්ට ලබා ගත හැකි ලෙස සලකුණු කරන ලද සැකිලි පමණක් මෙහි දිස්වේ.

### Checkout-form base domains {#checkout-form-base-domains}

Ultimate Multisite v2.13.0 මගින් චෙක්අවුට් පෝරමයේ **Site URL** ක්ෂේත්‍රවල වින්‍යාස කරන ලද ડોමේන් ජාලීය මූලික ડોමේන් (network base domains) ලෙස සලකයි. `example.com` සහ `sites.example.com` වැනි බෙදාගත් ලියාපදිංචි කිරීමේ ડોමේන් යටතේ වෙබ් අඩවි නිර්මාණය කිරීමට ඔබට අවශ්‍ය විට, ෆීල්ඩ් එකේ available-domain සැකීම් භාවිතා කරන්න.

බෙදාගත් චෙක්අවුට් පෝරම මූලික ડોමේන් (Shared checkout-form base domains) එක් එක් වෙබ් අඩවිය සඳහා වෙන් කරන ලද කර්මාන්තශාලා සිතියම් (per-site custom domain mappings) ලෙස සැලකෙන්නේ නැත. එම මූලිකයන්ගෙන් එකක් මත පාරිභෝගිකයෙකු උප-දිස්ත්‍රික් වෙබ් අඩවියක් නිර්මාණය කළ විට, බෙදාගත් සත්කාරකයා (shared host) එක් වෙබ් අඩවියකට පමණක් අයත් වන පරිදි සිතියම් කරන ලද ડોමේන් වාර්තාවක් Ultimate Multisite විසින් නිර්මාණය නොකරයි. එම බෙදාගත් සත්කාරකය එකම චෙක්අවුට් පෝරමය මූලිකයක් භාවිතා කරන සහෝදර වෙබ් අඩවි සඳහා තිබිය හැක.

`customer-example.com` වැනි එක් එක් පාරිභෝගිකයා සඳහා වෙන් කරන ලද සත්කාරකයන් (per-customer mapped hosts) සඳහා කර්මාන්තශාලා මූලික ડોමේන් තබා ගන්න. බොහෝ වෙබ් අඩවි භාවිතා කළ හැකි බෙදාගත් ලියාපදිංචි කිරීමේ සත්කාරකයන් සඳහා චෙක්අවුට් පෝරම මූලිකයන් තබා ගන්න.

#### ෆීල්ඩ් එක ඉවත් කිරීම {#removing-the-field}

ඔබ වෙබ් අඩවි සැකසුම් (site templates) ලබා නොගන්නේ නම්, ඔබේ පෝරමෙන් Template Selection ක්ෂේත්‍රය ඉවත් කරන්න. එවිට පාරිභෝගිකයින්ට Ultimate Multisite > Settings > Site Templates යටතේ වින්‍යාස කර ඇති පෙරනිමි තේමා වලින් එකක් ලැබෙනු ඇත.
