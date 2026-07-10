---
title: የራስጌ ዶሜይን ፍለጋ
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# የራስጌ ዶሜይን ፍለጋ {#header-domain-search}

ትንሽ የራስጌ ቅጽ የዶሜይን ፍለጋን እንዲጀምር፣ ከዚያም ደንበኛው በUltimate Multisite ክፍያ መጨረሻ ውስጥ ካሉ ዶሜይኖች እንዲመርጥ ሲፈልጉ ይህን ማዋቀር ይጠቀሙ።

## መስፈርቶች {#requirements}

- Ultimate Multisite በኔትወርክ ላይ ንቁ።
- Multisite Ultimate Domain Seller በኔትወርክ ላይ ንቁ።
- ቢያንስ አንድ ንቁ የዶሜይን ምዝገባ ምርት ከሚከተሉት ጋር፦
  - `domain_provider` ወደ ተዋቀረ አቅራቢ ተቀናብሯል።
  - የሚደገፉ TLDs ተዋቅረዋል፣ ለምሳሌ `com`፣ `net` እና `org`።
- **የዶሜይን ምርጫ** መስክ ያለው ትክክለኛ የክፍያ መጨረሻ ቅጽ።

## የክፍያ መጨረሻ ቅጽ {#checkout-form}

1. በምዝገባ ገጹ የሚጠቀምበትን የክፍያ መጨረሻ ቅጽ ይፍጠሩ ወይም ያርትዑ።
2. **Username**ን ጨምሮ መደበኛ የሚያስፈልጉ የክፍያ መጨረሻ/Account መስኮችን ያክሉ። የዶሜይን መስክ ብቻ ያለው የክፍያ መጨረሻ ቅጽ በUltimate Multisite ማረጋገጫ ውድቅ ይደረጋል።
3. **የዶሜይን ምርጫ** መስክ ያክሉ።
4. ፍሰቱ ከነጻ ንዑስ ዶሜይኖች ወይም ከነባር ዶሜይኖች ይልቅ በተመዘገቡ ዶሜይኖች ላይ እንዲያተኩር ሲፈለግ የዶሜይን ምርጫ ሁነታን ወደ **ለምዝገባ ብቻ** ያቀናብሩ።
5. የዶሜይን ምዝገባ ምርቱን ለዚያ መስክ ይመድቡ።

የምዝገባ ገጹ የክፍያ መጨረሻ ቅጹን ማቅረብ አለበት፣ ለምሳሌ፦

```text
[wu_checkout slug="domain-form"]
```

## የራስጌ ቅጽ {#header-form}

በጣቢያው ራስጌ ውስጥ የገባውን የፍለጋ ቃል ወደ ክፍያ መጨረሻ ገጽ እንደ `domain_name` የሚልክ ትንሽ `GET` ቅጽ ያክሉ፦

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

በብጁ የራስጌ JavaScript ውስጥ ዶሜይን ቀድመው አይምረጡ። ራስጌው የፍለጋ ቃሉን ብቻ መላክ አለበት። የDomain Seller ክፍያ መጨረሻ ስክሪፕት `?domain_name=example`ን ያነባል፣ የክፍያ መጨረሻ ፍለጋ ሳጥኑን ይሞላል፣ እና ደንበኛው ከተመለሱት ዶሜይኖች መምረጥ እንዲችል የመገኘት ፍለጋውን ያስኬዳል።

## የሚጠበቅ ባህሪ {#expected-behaviour}

በራስጌው ውስጥ `example`ን መፈለግ ይህን መክፈት አለበት፦

```text
/register/?domain_name=example
```

ከዚያ የክፍያ መጨረሻው እንደሚከተሉት ያሉ ሊመረጡ የሚችሉ ውጤቶችን ማሳየት አለበት፦

- `example.com`
- `example.net`
- `example.org` አይገኝም
- ሌሎች በአቅራቢው የሚደገፉ TLDs

የሚገኝ ውጤት ከተመረጠ በኋላ፣ የትዕዛዝ ማጠቃለያው የዶሜይን ምዝገባ ምርቱን እና የተመረጠውን የዶሜይን ስም ማካተት አለበት።

## ማረጋገጫ {#verification}

1. የመነሻ ገጹን ይክፈቱ።
2. ባዶ ስም ይፈልጉ፣ ለምሳሌ `example`።
3. የክፍያ መጨረሻ URL `?domain_name=example`ን እንደሚያካትት ያረጋግጡ።
4. የክፍያ መጨረሻ ዶሜይን መስክ `example`ን እንደያዘ ያረጋግጡ።
5. የዶሜይን ምርጫዎች ዝርዝር እንደሚታይ ያረጋግጡ።
6. ለሚገኝ ዶሜይን **ምረጥ**ን ጠቅ ያድርጉ።
7. የትዕዛዝ ማጠቃለያው `Domain Registration - example.com` ወይም የተመረጠውን ዶሜይን እንደያዘ ያረጋግጡ።

## ችግር መፍታት {#troubleshooting}

- ምንም ዝርዝር ካልታየ፣ የአሳሹን የኔትወርክ ትር ለ`admin-ajax.php?action=wu_domain_search` ይፈትሹ እና ባዶ ያልሆኑ `domains` ወይም `results` እንደሚመልስ ያረጋግጡ።
- የክፍያ መጨረሻ ቅጹ በማስቀመጥ ጊዜ ማረጋገጫ ካልተሳካ፣ እንደ **Username** ያሉ የሚያስፈልጉ የAccount መስኮችን ያክሉ።
- ዶሜይን መምረጥ ጋሪውን ካላዘመነ፣ `window.wu_checkout_form` እንዳለ እና የDomain Seller ክፍያ መጨረሻ ንብረቶች በክፍያ መጨረሻ ገጹ ላይ እንደተጫኑ ያረጋግጡ።
