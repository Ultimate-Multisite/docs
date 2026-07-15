---
title: සයිට් විස්තර කුසලතාව
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# වෙබ් අඩවි විස්තර කිරීමේ කුසලතාව

**Site Specification skill** කියන්නේ ඔබේ වෙබ් අඩවියේ අරමුණු, ප්‍රේක්ෂකයන් සහ සන්නාම අනන්‍යතාවය (brand identity) ග්‍රහණය කරගන්න ක්‍රමානුකූල ක්‍රමයකි. මේ තොරතුරු ඔබේ **site_brief** මත සුරැකේ. සැසි වෙනස් වුවත් ඒ අතරින් ඇගයන්ට (agents) එකම, සන්දර්භයට අනුව උදව් කරන්න අවශ්‍ය තොරතුරු ලබා දීමට මේක පාවිච්චි කරනවා.

## Site Specification කියන්නේ මොකක්ද? {#what-is-site-specification}

Site Specification කියන්නේ පහත දේවල් ලේඛනගත කිරීමේ ක්‍රියාවලියයි:

- **වෙබ් අඩවි අරමුණ (Site purpose)**: ඔබේ වෙබ් අඩවිය කරන්නේ මොනවද සහ ඒක ඇයි පවතින්නේ.
- **ඉලක්ක ප්‍රේක්ෂකයින් (Target audience)**: ඔබේ වෙබ් අඩවියට කවුරුන් එනවාද සහ ඔවුන්ට අවශ්‍ය දේ මොනවද කියලා.
- **සන්නාම අනන්‍යතාවය (Brand identity)**: ඔබේ වර්ණ, ස්වරය (tone) සහ දෘශ්‍ය ශෛලිය.
- **ව්‍යාපාරික අරමුණු (Business goals)**: ඔබේ වෙබ් අඩවිය සඳහා සාර්ථකත්වය පෙනෙන්නේ කොහොමද කියලා.
- **අන්තර්ගත ව්‍යුහය (Content structure)**: ඔබේ වෙබ් අඩවිය සංවිධානය කරලා තියෙන්නේ කොහොමද කියන එක.

මේ විස්තරය තමයි ඔබේ **site_brief** බවට පත් වෙන්නේ, ඒ කියන්නේ ඇගයන්ට ඔබේ වෙබ් අඩවියේ සන්දර්භය (context) තේරුම් ගැනීමට භාවිතා කරන ස්ථිර මතකයක් (persistent memory).

## Site Specification භාවිතා කළ යුත්තේ ඇයි? {#why-use-site-specification}

### සැසි අතර ස්ථාවරත්වය (Consistency Across Sessions) {#consistency-across-sessions}

site_brief නැතිව, ඔබ සෑම නව සැසියක් ආරම්භ කරන විට ඔබේ වෙබ් අඩවියේ අරමුණ නැවත පැහැදිලි කරන්න වෙනවා. ඒත් මේක තිබුණොත්, ඇගයන්ට වහාම තේරුම් ගන්න පුළුවන්:

- ඔබේ වෙබ් අඩවියේ අරමුණු සහ ප්‍රේක්ෂකයින්
- ඔබේ සන්නාම වර්ණ සහ ස්වරය
- ඔබේ අන්තර්ගත ව්‍යුහය
- ඔබේ ව්‍යාපාරික අරමුණු

### වඩා හොඳ නිර්දේශ (Better Recommendations) {#better-recommendations}

ඇගයන් ඔබේ site_brief භාවිතා කරන්නේ:

- ඔබේ වෙබ් අඩවියේ අරමුණට ගැලපෙන විශේෂාංග යෝජනා කිරීමට.
- ඔබේ අරමුණු වලට ගැලපෙන අන්තර්ගත ව්‍යුහයන් නිර්දේශ කිරීමට.
- ඔබේ සන්නාමයට ගැලපෙන නිර්මාණ (designs) යෝජනා කිරීමට.
- නොගැලපෙන විශේෂාංග යෝජනා කිරීමෙන් වැළකීමට.

### වේගවත් ආරම්භය (Faster Onboarding) {#faster-onboarding}

නව ඇගයන්ට (හෝ නව සැසිවල ඇගයන්ට) පැහැදිලි කරන ප්‍රශ්න අසනවා වෙනුවට ඔබේ site_brief කියවලා ඉක්මනින් වැඩ පටන් ගන්න පුළුවන්.

## Site Specification ආරම්භ කිරීම {#initiating-site-specification}

### Theme Builder Onboarding අතරතුර {#during-theme-builder-onboarding}

Site Specification කුසලතාව ස්වයංක්‍රීයව **Theme Builder onboarding flow** එකේදී ආරම්භ කරනවා. Setup Assistant ඇගයා ප්‍රශ්න අසලා ඔබේ site_brief එක ගොඩනඟනවා.

### අතින් ආරම්භ කිරීම (Manual Initiation) {#manual-initiation}

ඔබට ඕනෑම වේලාවක වෙබ් අඩවි විස්තරය (Site Specification) ආරම්භ කළ හැකිය:

```
"මගේ වෙබ් අඩවි විස්තරය නිර්වචනය කරමු"
```

හෝ

```
"මට වෙබ් බ්‍රීෆ් එකක් සෑදීමට උදව් කරන්න"
```

## වෙබ් අඩවි විස්තර කිරීමේ ක්‍රියාවලිය (The Site Specification Process) {#the-site-specification-process}

### පියවර 1: වෙබ් අඩවියේ අරමුණ (Site Purpose) {#step-1-site-purpose}

ඒ ඒජන්ට් එක ඔබෙන් අසනු ඇත:

```
ඔබේ වෙබ් අඩවියේ ප්‍රධාන අරමුණ කුමක්ද?
- E-commerce store (ඊ-වාණිජ්‍ය වෙළඳසැලක්)
- Blog or content site (බ්ලොග් හෝ අන්තර්ගත වෙබ් අඩවියක්)
- Portfolio or showcase (පෝට්ෆෝලියක් හෝ ප්‍රදර්ශනයක්)
- SaaS application (SaaS යෙදුමක්)
- Community or forum (සමූහයක් හෝ සංසදයක්)
- Other: [විස්තර කරන්න]
```

ඔබට කාණ්ඩයක් තෝරාගත හැකියි නැතිනම් ඔබේම අරමුණ විස්තර කළ හැකියි.

### පියවර 2: ඉලක්කගත ප්‍රේක්ෂකයින් (Target Audience) {#step-2-target-audience}

```
ඔබේ ප්‍රධාන ප්‍රේක්ෂකයින් කවුද?
- Consumers / general public (පාරිභෝගිකයින් / සාමාන්‍ය ජනතාව)
- Business professionals (ව්‍යාපාරික වෘත්තිකයන්)
- Developers / technical users (සංවර්ධකයින් / තාක්ෂණික පරිශීලකයන්)
- Students / educators (සිසුන් / අධ්‍යාපනඥයින්)
- Other: [විස්තර කරන්න]

ඔවුන්ගේ ප්‍රධාන අවශ්‍යතා මොනවාද?
```

### පියවර 3: වෙළඳ නාම අනන්‍යතාව (Brand Identity) {#step-3-brand-identity}

```
ඔබේ වෙළඳ නාමේ වර්ණ මොනවාද?
- Primary color: [වර්ණ තෝරන්න හෝ හෙක්සadecimal කේතයක්]
- Secondary color: [වර්ණ තෝරන්න හෝ හෙක්සadecimal කේතයක්]
- Accent color: [විකල්පයි]

ඔබේ වෙළඳ නාම ස්වරය (tone) ඔබට විස්තර කළ හැකි ආකාරය කුමක්ද?
- Professional / corporate (වෘත්තීය / ආයතනික)
- Creative / artistic (නිර්මාණශීලී / කලාත්මක)
- Playful / casual (ක්‍රීඩාශීලී / අනියම්)
- Minimal / modern (අවම / නූතන)
- Warm / friendly (උණුසුම් / මිත්‍රශීලී)
```

### පියවර 4: ව්‍යාපාරික අරමුණු (Business Goals) {#step-4-business-goals}

```
ඔබේ වෙබ් අඩවිය සාර්ථක වන්නේ කෙසේද?
- Generate leads (අයදුම්පත් ජනනය කිරීම)
- Sell products (නිෂ්පාදන විකිණීම)
- Build community (සමූහයක් ගොඩනැගීම)
- Share knowledge (දැනුම බෙදා හැරීම)
- Establish authority (අවබෝධය ස්ථාපිත කිරීම)
- Other: [විස්තර කරන්න]

ඔබේ ප්‍රධාන මිනුම (metric) කුමක්ද?
- Revenue (ආදායම)
- User engagement (පරිශීලක සම්බන්ධතාව)
- Content reach (අන්තර්ගතය ළඟා වීම)
- Conversions (වර්ණනයන්/ක්‍රියාකාරකම්)
- Other
```

### පියවර 5: අන්තර්ගත ව්‍යුහය (Content Structure) {#step-5-content-structure}

```
ඔබේ අන්තර්ගතය සංවිධානය කර ඇත්තේ කෙසේද?
- Flat (සියලුම අන්තර්ගතයන් එකම මට්ටමේ තිබීම)
- Hierarchical (වර්ග සහ උප-වර්ග)
- Chronological (බ්ලොග් ශෛලියෙන්)
- Product-based (පරිශිෂ්ට ලේඛනයක් ලෙස)
- Other: [විස්තර කරන්න]

ඔබ භාවිතා කරන අන්තර්ගත වර්ග මොනවාද?
- Blog posts (බ්ලොග් සටහන්)
- Product pages (නිෂ්පාදන පිටු)
- Case studies (අත්දැකීම් අධ්‍යයන)
- Documentation (ලේඛනගත කිරීම්)
- Videos (වීඩියෝ)
- Other
```

## ඔබේ site_brief මතකය (Your site_brief Memory) {#your-sitebrief-memory}

Site Specification සම්පූර්ණ කිරීමෙන් පසු, ඔබ ලබා දුන් තොරතුරු **site_brief** ලෙස ඔබේ ඒජන්ට් මතකයේ ගබඩා කරනු ලැබේ. මෙය පහත සඳහන්

## ඔබේ වෙබ් අඩවිය බැලීම සහ යාවත්කාලීන කිරීම {#viewing-and-updating-your-sitebrief}

### ඔබේ site_brief එක බැලීම {#view-your-sitebrief}

ඔබේ agent ට මෙසේ අසන්න:

```
"Show me my site brief"
```

හෝ

```
"What do you know about my site?"
```

එවිට agent එක ඔබ ගබඩා කර ඇති විස්තරය පෙන්වනු ඇත.

### ඔබේ site_brief එක යාවත්කාලීන කිරීම {#update-your-sitebrief}

ඔබේ වෙබ් අඩවිය වෙනස් වන විට, ඔබට එය යාවත්කාලීන කළ හැකිය:

```
"Update my site brief: we're now targeting B2B customers"
```

හෝ

```
"Refresh my site specification"
```

මෙය ඔබ දැනට පවතින තොරතුරු ආරම්භක ලක්ෂ්‍යයක් ලෙස ගෙන Site Specification skill එක නැවත ක්‍රියාත්මක කරනු ඇත.

## Agents මගින් site_brief භාවිතා කරන ආකාරය {#how-agents-use-sitebrief}

### නිර්මාණ යෝජනා (Design Recommendations) {#design-recommendations}

ඔබ නිර්මාණ වෙනස් කිරීම් ඉල්ලා සිටින විට, agents ඔබේ site_brief එක උපුටා දක්වයි:

```
ඔබ: "Redesign my homepage"
Agent: "Based on your site brief, you're targeting women aged 25-45
with a warm, artisanal tone. I'll create a design that emphasizes
your handmade jewelry and sustainable values."
```

### විශේෂාංග යෝජනා (Feature Suggestions) {#feature-suggestions}

ඔබේ අරමුණු සමඟ ගැලපෙන features agents යෝජනා කරයි:

```
ඔබ: "What features should I add?"
Agent: "For an e-commerce store focused on customer loyalty,
I'd recommend: loyalty program, customer reviews, email newsletter,
and product recommendations."
```

### අන්තර්ගත ව්‍යුහය (Content Structure) {#content-structure}

ඔබේ ව්‍යුහය මත පදනම්ව agents අන්තර්ගත සංවිධානය යෝජනා කරයි:

ඔබ: "මගේ බ්ලොග් එක මට කොහොමද සංවිධානය කරන්නේ?"
ඒජන්ට්: "ඔබ නිෂ්පාදන કેટලොගයක් සමඟ බ්ලොග් භාවිතා කරන නිසා, පෝස්ට් වර්ගීකරණය කිරීමට නිෂ්පාදන කාණ්ඩ අනුව සහ විවිධ නිෂ්පාදන එකට පෙන්වන 'ස්ටයිලින් ගයිඩ්' (styling guides) නිර්මාණය කිරීමට මම යෝජනා කරන්නේ."

## හොඳම භාවිතයන් (Best Practices) {#best-practices}

### නිශ්චිතව සිටින්න (Be Specific) {#be-specific}

"සාමාන්‍ය පාඨකයන්" වෙනුවට, ඔබේ සැබෑ ප්‍රේක්ෂකයින් විස්තර කරන්න:

- ✓ "තිරසාර විලාසිතාව ගැන උනන්දුවක් දක්වන 25-45 හැවිරිදි කාන්තාවන්"
- ✗ "හැමෝම"

### නිරන්තරයෙන් යාවත්කාලීන කරන්න (Update Regularly) {#update-regularly}

ඔබේ වෙබ් අඩවිය පරිණාමය වන විට, ඔබේ `site_brief` යාවත්කාලීන කරන්න:

- ඔබ නව ප්‍රේක්ෂකයින් වෙත මාරු වන විට
- ඔබ නව නිෂ්පාදන පෙළක් එකතු කරන විට
- ඔබේ සන්නාම අනන්‍යතාව වෙනස් වන විට
- ඔබේ ව්‍යාපාරික අරමුණු වෙනස් වන විට

### ස්ථාවර නාමකරණය භාවිතා කරන්න (Use Consistent Terminology) {#use-consistent-terminology}

සියලු සැසිවලදී එකම පද භාවිතා කරන්න:

- ✓ සෑම විටම "තිරසාර ආභරණ" (eco-friendly jewelry සහ green products නොවේ) යැයි කියන්න
- ✓ ඔබේ ප්‍රේක්ෂකයින් හැඳින්වීමට නිරන්තරයෙන් එකම ආකාරයකින් යොමු වන්න

### සන්දර්භය ඇතුළත් කරන්න (Include Context) {#include-context}

ඔබේ තීරණ අවබෝධ කර ගැනීමට සහාය වන පසුබිම් තොරතුරු ලබා දෙන්න:

- "අපි මිලට වඩා ගුණාත්මක භාවයට වටිනාකමක් දෙන වෘත්තිකයන් ඉලක්ක කරනවා"
- "අපේ ප්‍රේක්ෂකයින් තාක්ෂණය පිළිබඳ දැනුමක් ඇති අතර නවීන නිර්මාණ බලාපොරොත්තු වෙනවා"
- "අපි ආරම්භ කරන්නේ අඩු වියදම් සහිත ස්ටාර්ට්අප් එකක් නිසා, අපට පිරිවැය කළ හැකි විසඳුම් අවශ්‍යයි"

## Theme Builder Onboarding සමඟ සම්බන්ධතාවය (Relationship to Theme Builder Onboarding) {#relationship-to-theme-builder-onboarding}

Site Specification කුසලතාවය **Theme Builder onboarding flow** තුළ ඒකාබද්ධ කර ඇත. ඔබ ඔන්බෝඩින් කිරීම සම්පූර්ණ කරන විට, ඔබ ලබා දුන් තොරතුරු සමඟ ඔබේ `site_brief` ස්වයංක්‍රීයව නිර්මාණය වේ.

ඔබට පහත සඳහන් දේ කිරීමට අවශ්‍ය නම් Site Specification ස්වාධීනව ක්‍රියාත්මක කළ හැකිය:

- ආරම්භක සැකසුම් වලින් පසු ඔබේ විස්තරය වැඩිදියුණු කිරීමට
- ඔබේ වෙබ් අඩවිය පරිණාමය වන විට ඔබේ site brief යාවත්කාලීන කිරීමට
- Theme Builder ආරම්භ කිරීමට පෙර සවිස්තරාත්මක විස්තරයක් නිර්මාණය කිරීමට

## ගැටළු නිරාකරණය (Troubleshooting) {#troubleshooting}

**මගේ site_brief භාවිතා නොවේ**
- ඒජන්ට මතකය (memory) ප්‍රවේශ විය හැකිදැයි තහවුරු කරන්න
- ඒජන්ට "මගේ site brief එක මතක් කරගන්න" (recall my site brief) ලෙස අසන්න
- ඔබේ සැකසුම් වල මතකය සක්‍රීය කර තිබේදැයි පරීක්ෂා කරන්න

**මම අලුත් site\_brief එකකින් නැවත ආරම්භ කිරීමට කැමතියි**
- ඒ සඳහා ඇගෙන් අසන්න: "Clear my site brief and start fresh" (මගේ site brief එක මකා දමා අලුතින් පටන් ගන්න)
- ඉන්පසු Site Specification නැවත ක්‍රියාත්මක කරන්න

**ඒ වෙනුවෙන් නියෝජිතයා මගේ site\_brief එකට ගැලපෙන නිර්දේශ නොකරයි**
- ඒ සඳහා ඇගෙන් අසන්න: "review my site brief" (මගේ site brief එක සමාලෝචනය කරන්න)
- එය යල් පැන ගොස් තිබේ නම් ඔබේ site\_brief එක යාවත්කාලීන කරන්න
- ඔබේ ඉල්ලීම් වලට අමතර සන්දර්භයක් ලබා දෙන්න

## ඊළඟ පියවර {#next-steps}

ඔබේ site specification එක නිර්වචනය කිරීමෙන් පසු:

1. **Theme Builder භාවිතා කරන්න**: ඔබේ site\_brief එක මත පදනම් වූ කස්ටම් තේමක් (custom theme) සාදන්න
2. **Design Refine කරන්න**: විස්තරාත්මක සැලසුම් වැඩ සඳහා Design System Aesthetics කුසලතාව (skill) භාවිතා කරන්න
3. **Content Plan කරන්න**: අන්තර්ගත ව්‍යුහය පිළිබඳ නිර්දේශ ලබා ගැනීම සඳහා නියෝජිතයන්ගෙන් ඉල්ලීම් කරන්න
4. **Features ගොඩනඟන්න**: ඔබේ ව්‍යාපාරික අරමුණු සමඟ ගැලපෙන විශේෂාංග (features) ඉල්ලා සිටින්න
