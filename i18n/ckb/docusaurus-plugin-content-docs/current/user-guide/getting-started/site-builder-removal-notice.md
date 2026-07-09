---
title: ئەنجامی ڕەتکردنەوەی režیمی دروستکردنی سایت
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# ڕاگەیاندنی لە کاتێکدا Mode-ی دروستکردنی سایتەکە لەناوچوونەوە {#site-builder-mode-removal-notice}

**Mode-ی دروستکردنی سایت (Site Builder mode) لە Superdav AI Agent v1.12.0 دا لەناوچووە.** ئەگەر ئێستا لە کاردانەوە بەکارهێنا، دەبێت گواستنەوە بۆ **Setup Assistant agent** بۆ دروستکردنی قالب و سیستەمی سایتەکە بکەیت.

## چی ڕوودەدات؟ {#what-happened}

### Mode-ی دروستکردنی سایت (Legacy) {#site-builder-mode-legacy}

Mode-ی دروستکردنی سایت ئامرازێکی پڕۆسەیی بوو بۆ:

- دروستکردنی سایت لەسەر بنەمای template'ەکان
- ڕێکخستنی سیستەمی سەرەکی
- هەڵبژاردنی قالب
- ڕێکخستنی ناوەڕۆک البدراوەیی

### چی وەک ئەوە جێگەی گرت؟ {#what-replaced-it}

**Setup Assistant agent** ئێستا هەموو کارکردنەکانی Mode-ی دروستکردنی سایت دەگرێتەوە بە:

- ڕێکخستنی زیاتر پڕپۆشتر لەلایەن Agent یەوە
- بژاردنی وردتر بۆ قالبەکان
- یەکگرتووویی لەگەڵ Onboarding ی Theme Builder
- بیرەوەری دائم (persistent site_brief memory) بۆ جلسەکانی داهاتوو

## ئەگەر ئێستا Mode-ی دروستکردنی سایت بەکارهێنا {#if-you-were-using-site-builder-mode}

### سایتەکانت ئاسایینن {#your-sites-are-safe}

- سایتەکان کە پێشتر لەگەڵ Mode-ی دروستکردنی سایت دروست کردووە، بەردەوام دەبن کار بکەن
- هیچ زیانی لە داتاکان یان کێشەیەک لە سیستەمەکە ڕوودەدات
- دەتوانیت بە ئاسانکاری بەڕێوەبەر و بەکارهێنانی سایتەکانت بەردەوام بیت

### گواستنەوە بۆ Setup Assistant Agent {#migrate-to-setup-assistant-agent}

بۆ دروستکردنی سایت نوێ یان گۆڕینی قالب، لەگەڵ Setup Assistant agent کار بکە:

```
"Help me set up a new site"
```

یان

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent هەمان کارایی دەدات بە پڕۆسەی زیاتر پڕپۆشتر.

## تێ比ھاتن: Site Builder بەرامبەر Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| تایبەتمەندی | Site Builder (لەناوچووە) | Setup Assistant (نوێ) |
|---------|----------------------|----------------------|
| ڕێگەی دروستکردن | فۆرم پڕۆسەیی (Wizard form) | گفتوگۆی Agent |
| هەڵبژاردنی قالب | template'ە پێشوەختەکان | دروستکردنی تایبەت |
| وردکردنەوە | بژاردەکانی سنووردار | سیستەمی دیزاینێکی تەواو |
| site brief | ناتوانێت هەڵبسلات بکات | بیرەوەری دائم (Persistent memory) |
| جلسەکانی داهاتووی | درێژکاری پڕۆسەی دووبارەپێکرن | بەکارهێنانی site_briefی 저장کراوە |
| پڕپۆشتربوون | کارکردنی فیکس (Fixed workflow) | گفتوگۆی دەگونجێت (Adaptive conversation) |

## گواستنەوە بۆ Setup Assistant Agent {#migrating-to-setup-assistant-agent}

### بۆ سایتە نوێکان {#for-new-sites}

لەبری بەکارهێنانی مۆدی دروستکردنی سایت (Site Builder mode):

۱. داواکاری: "تکایە یارمەتیم بدەن سایتێکی نوێ ڕابگرێنم"
۲. ئاسیساری دانان (Setup Assistant agent) دەبێت لێ بکات بەم شێوەیە:
   - مەبەستی و ئامانجەکانی سایتەکە
   - خەڵکی نیشاندنی (Target audience)
   - ناسنامەی براندەکە (Brand identity)
   - دروستکردنی قالب (Theme generation)
   - ڕێکخستنی سەرەتایی

### بۆ سایتەکان کە پێشتر لە مۆدی Site Builder دابوو: {#for-existing-sites}

۱. دەتوانیت بەکاریان بە شێوەیەک وەک خۆی بەردەوام بیت
۲. بۆ نوێکردنەوەی قالبەکە، داواکاری بکە: "سایتی من دەبێت بگۆڕم"
۳. ئاسیساری دانان (Setup Assistant agent) یارمەتیت دەدات کە قالبێکی نوێ دروست بکات
۴. داتاکانی سایتەکەت وەک خۆی دەمێننەوە

### بۆ گۆڕینی قالبەکان: {#for-theme-changes}

لەبری هەڵبژاردنی قالب لە مۆدی Site Builder:

۱. داواکاری بکە: "قالبەکەم بگۆڕم"
۲. ئاسیساری دانان (Setup Assistant agent) ئەنجام دەدات:
   - پرسیار بکات سەبارەت بە پێداویستی وایگریت بۆ دیزاینکردن
   - قالبێکی تایبەتی دروست بکات
   - لەسەر سایتەکە چالاک بکات

## جیاوازییە سەرەکییەکان {#key-differences}

### مۆدی Site Builder: {#site-builder-mode}

```
۱. هەڵبژاردنی قالبێک (template)
۲. هەڵبژاردنی قالب (theme)
۳. ڕێکخستنی سیستەمەکانی بنەڕەتی (basic settings)
۴. تەواو بوو
```

### ئاسیساری دانان (Setup Assistant Agent): {#setup-assistant-agent}

```
۱. مەبەستی سایتەکەت باس بکە
۲. خەڵکی نیشاندنی خۆت دیاری بکە
۳. هەڵبژاردنی پێداویستی دیزاینکردن بکە
۴. ئاسیساری دانان قالبێکی تایبەتی دروست دەکات
۵. ئاسیساری دانان قالبەکە چالاک دەکات
۶. کورتەی سایتەکە بۆ جلسەکانی داهاتووی هەڵگرتراوە (stored)
```

## سوودەکانی ئاسیساری دانان (Setup Assistant Agent) {#benefits-of-setup-assistant-agent}

### زیاتر گۆڕانکاری (More Flexible): {#more-flexible}

- سایتەکەت بە زمانی سروشتی باس بکە
- پێشنیارە تایبەتی وەربگرە
- بۆ پێداویستیی تایبەتت بگۆڕە

### گۆڕانکاری باشتر (Better Customization): {#better-customization}

- دروستکردنی قالبێکی تایبەتی
- بڕیاری دیزاینی سیستەم (Design system decisions)
- تۆکنە دیزاینیەکان کە بەردەوامن (Persistent design tokens)

### بیرەوەری بەردەوام (Persistent Memory): {#persistent-memory}

- `site_brief` یەکەت هەڵگرتراوە
- ئاسیساری دانانی داهاتوو سایتەکەت دەزانێت
- پێویستی بە دووبارەکرانەوەی زانیاری ڕێکخستن نییە

### کارکردنی یەکگرتوو (Integrated Workflow): {#integrated-workflow}

- سەرەتایی دروستکردنی قالب (Theme Builder onboarding)
- توانای فنۆری دیزاین سیستەم (Design System Aesthetics skill)
- توانای کۆنتڕۆڵی بینراو (Ability Visibility controls)
- هەموویان بە شێوەیەکی یەکگرتوو کار دەکەن

## چارەسەرکردنی کێشەکان (Troubleshooting) {#troubleshooting}

### ناتوانم مۆدی Site Builder-ی بدۆزمەوە: {#i-cant-find-site-builder-mode}

مۆدی Site Builder لەناوچووتر بووە. لەبری ئەوە، داواکاری ئاسیساری دانان (Setup Assistant agent) بەکاربهێنە:

"Help me set up a new site"

### من د پلاتفێکی نو ڕێک بخەمەوە {#i-want-to-recreate-a-site-from-site-builder}

دەتوانی بە ئاسانکاریی ئەژماری Setup Assistant بیکەیت:

1. داواکاری: "تکایە یارمەتیم بدات بۆ دامەزراندنی سایتێکی نوێ"
2. ڕوونبکرێنەوە مەبەست و دیزاینی سایتەکەت پێشوو
3. ئەژمارەکە تیۆمێکی دوێنێ دروست دەکات کە هاوشێوەیەتی سایتەکەت هەبێت
4. `site_brief` یەکەم بۆ بیرەوەریی داهاتووی بەکار دەهێنرێت

### سایتەکەی پێشوو لە Site Builder کار ناکات {#my-existing-site-builder-site-isnt-working}

سایتەکان کە بە Mode ی Site Builder دروستکراون، بەردەوامن کار دەکەن. ئەگەر کێشەیەکی هەستت کرد، ئەم خشتانە بکە:

1. چۆنی تێبینی بکە کە تێمەکەت هێشتا چالاکە
2. پشکنینی ئەوەی پلەگینەکانت چالاکن و ناتوانن کار بکەن
3. لۆگەکانی هەڵەی WordPress (WordPress error logs) بگرە چاودێری
4. ئەگەر کێشەکە بەردەوام بوو، پەیوەندی بە پشتیوانیی سایت بکە

### ئایا دەتوانم لەسەر نُوانەکانی Site Builder پێشوەم بەکاربهێنم؟ {#can-i-still-use-my-old-site-builder-templates}

نوانەکانی Site Builder زیاتر نییە. بەڵام:

- سایتەکانت کە پێشتر دروستکراون، بەردەوامن کار دەکەن
- دەتوانیت سایتە هاوشێوەکان بە ئامۆژگاری Setup Assistant دروست بکەیت
- ئەژماری Setup Assistant زیاتر ڕێگە بۆ گۆڕینی تایبەتمەندییەکان دەدات

## هەنگاوەکانی دوای ئەمە (Next Steps) {#next-steps}

1. **بۆ سایتە نوێکان**: بەکاربهێنە Setup Assistant agent
2. **بۆ سایتەکان کە پێشتر هەن**: بەکاری بهێنە وەک خۆیان
3. **بۆ گۆڕینی تێم**: داواکاری یارمەتی لە Setup Assistant agent بکە
4. **بۆ باشترکردنی دیزاین**: توانای Design System Aesthetics بەکاربهێنە

## بابەتە پەیوەندیدارەکان (Related Topics) {#related-topics}

- **Theme Builder Onboarding**: دامەزراندنی ڕێنمایی بۆ تێمە تایبەتەکان
- **Setup Assistant Agent**: دامەزراندنی سایت بە ڕێنمایی ئەژمارەکە
- **Site Specification Skill**: ئامادەکردنی ئامانج و خەڵکی سایتەکەت
- **Design System Aesthetics Skill**: باشترکردنی ناسنامەی بینراو (visual identity)ی سایتەکەت
