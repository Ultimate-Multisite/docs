---
title: گەڕانی دۆمەینی سەرپەڕە
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# گەڕانی دۆمەین لە Header

ئەم ڕێکخستنە بەکاربهێنە کاتێک دەتەوێت فۆرمێکی بچووکی Header هەبێت کە گەڕانی دۆمەین دەست پێ بکات، پاشان ڕێگا بە کڕیار بدات لەناو checkout ـی Ultimate Multisite دۆمەینە بەردەستەکان هەڵبژێرێت.

## پێداویستییەکان

- Ultimate Multisite network-active.
- Multisite Ultimate Domain Seller network-active.
- لانیکەم یەک بەرهەمی چالاکی تۆمارکردنی دۆمەین لەگەڵ:
  - `domain_provider` دانراوە بۆ دابینکەرێکی ڕێکخراو.
  - TLD ـە پشتگیری‌کراوەکان ڕێکخراون، بۆ نموونە `com`، `net`، و `org`.
- فۆرمێکی دروستی checkout کە خانەی **هەڵبژاردنی دۆمەین**ی تێدایە.

## فۆرمی checkout

1. فۆرمی checkout ـی بەکارهاتوو لەلایەن پەڕەی تۆمارکردن دروست بکە یان دەستکاری بکە.
2. خانە ئاساییە پێویستەکانی checkout/account زیاد بکە، لەوانە **Username**. فۆرمی checkout ـێک کە تەنها خانەی دۆمەینی تێدا بێت، لەلایەن پشتڕاستکردنەوەی Ultimate Multisite ڕەت دەکرێتەوە.
3. خانەی **هەڵبژاردنی دۆمەین** زیاد بکە.
4. دۆخی Domain Selection بخەرە سەر **تەنها تۆمارکردن** کاتێک ڕەوتەکە دەبێت سەرنج بخاتە سەر دۆمەینە تۆمارکراوەکان نەک ساب‌دۆمەینی خۆڕایی یان دۆمەینی هەبوو.
5. بەرهەمی تۆمارکردنی دۆمەین بدە بەو خانەیە.

پەڕەی تۆمارکردن پێویستە فۆرمی checkout پیشان بدات، بۆ نموونە:

```text
[wu_checkout slug="domain-form"]
```

## فۆرمی Header

فۆرمێکی بچووکی `GET` زیاد بکە لە Header ـی ماڵپەڕدا کە زاراوەی گەڕانی نووسراو دەنێرێت بۆ پەڕەی checkout وەک `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

لە JavaScript ـی تایبەتی Header دا هیچ دۆمەینێک پێشوەختە هەڵمەبژێرە. Header پێویستە تەنها زاراوەی گەڕان بنێرێت. سکریپتی checkout ـی Domain Seller، `?domain_name=example` دەخوێنێتەوە، سندووقی گەڕانی checkout پڕ دەکاتەوە، و گەڕانی بەردەستبوون بەڕێوە دەبات بۆ ئەوەی کڕیار بتوانێت لە دۆمەینە گەڕاوەکان هەڵبژێرێت.

## هەڵسوکەوتی چاوەڕوانکراو

گەڕان بە `example` لە Header پێویستە ئەمە بکاتەوە:

```text
/register/?domain_name=example
```

پاشان checkout پێویستە ئەنجامە هەڵبژێردراوەکان پیشان بدات وەک:

- `example.com`
- `example.net`
- `example.org` بەردەست نییە
- TLD ـەکانی تر کە لەلایەن دابینکەرەوە پشتگیری دەکرێن

دوای هەڵبژاردنی ئەنجامێکی بەردەست، پوختەی داواکاری پێویستە بەرهەمی تۆمارکردنی دۆمەین و ناوی دۆمەینی هەڵبژێردراو لەخۆ بگرێت.

## پشتڕاستکردنەوە

1. پەڕەی سەرەکی بکەرەوە.
2. بۆ ناوێکی ڕووت بگەڕێ، بۆ نموونە `example`.
3. دڵنیا ببە checkout URL ـەکە `?domain_name=example` لەخۆ دەگرێت.
4. دڵنیا ببە خانەی دۆمەینی checkout، `example` لەخۆ دەگرێت.
5. دڵنیا ببە لیستێک لە هەڵبژاردەکانی دۆمەین دەردەکەوێت.
6. کلیک لە **هەڵبژێرە** بکە بۆ دۆمەینێکی بەردەست.
7. دڵنیا ببە پوختەی داواکاری `Domain Registration - example.com` یان دۆمەینی هەڵبژێردراو لەخۆ دەگرێت.

## چارەسەرکردنی کێشە

- ئەگەر هیچ لیستێک دەرنەکەوت، تابی تۆڕی وێبگەڕ بپشکنە بۆ `admin-ajax.php?action=wu_domain_search` و دڵنیا ببە `domains` یان `results` ـی نابەتاڵ دەگەڕێنێتەوە.
- ئەگەر فۆرمی checkout لە کاتی پاشەکەوتکردندا لە پشتڕاستکردنەوە شکستی هێنا، خانە پێویستەکانی account وەک **Username** زیاد بکە.
- ئەگەر هەڵبژاردنی دۆمەینێک cart نوێ نەکاتەوە، دڵنیا ببە `window.wu_checkout_form` هەیە و assets ـەکانی checkout ـی Domain Seller لەسەر پەڕەی checkout بارکراون.
