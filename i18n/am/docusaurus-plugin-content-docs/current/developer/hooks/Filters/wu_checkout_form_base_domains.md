---
id: wu_checkout_form_base_domains
title: ማጣሪያ - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# ማጣሪያ: wu_checkout_form_base_domains {#filter-wucheckoutformbasedomains}

ወደ mapped-domain መዝገቦች መሆን የሌላቸውን የተጋሩ የcheckout-form መሠረታዊ domains ያጣራል።

አንድ integration ለcheckout form **Site URL** fields ተጨማሪ መሠረታዊ domains ሲያቀርብ ይህን ማጣሪያ ይጠቀሙ። በዚህ ማጣሪያ የተመለሱ domains እንደ ለእያንዳንዱ ጣቢያ የተለዩ custom domains ሳይሆኑ እንደ የተጋሩ የምዝገባ አስተናጋጆች ይቆጠራሉ።

## መለኪያዎች {#parameters}

| ስም | ዓይነት | መግለጫ |
|------|------|-------------|
| $domains | `array` | ከcheckout form ውቅር የተሰበሰቡ የተጋሩ መሠረታዊ domains። |

### ከስሪት {#since}

- 2.13.0

### ምንጭ {#source}

በ`inc/functions/domain.php` ውስጥ ተገልጿል።


## የሚመልሰው {#returns}

የተመደበኛ የcheckout-form መሠረታዊ domains ድርድር።
