---
title: تغییرات کی فہرست
sidebar_position: 5
_i18n_hash: d18a5d0a6c766913ed5d348b54dd6acc
---
# Changelog

## 1.16.0 — Released on 2026-05-20

### نئی خصوصیات (New)

- **لوگو SVG بنانے کی صلاحیت (Generate Logo SVG ability)** — Theme Builder اب namespace-safe sanitisation کے ساتھ کسٹم لوگو SVG بنا اور شامل کر سکتا ہے۔
- **ڈسکوری انٹرویو میں تصویر اپ لوڈ کرنا (Photo upload in discovery interview)** — Theme Builder کے ڈسکوری انٹرویو میں اب زیادہ بہتر ڈیزائن سیاق و سباق کے لیے تصویر اپ لوڈ کرنے کا مرحلہ شامل ہے۔
- **پیلیٹ کنٹراسٹ کی جانچ کرنے کی صلاحیت (Validate Palette Contrast ability)** — تھیم پر لاگو کرنے سے پہلے رنگ کے جوڑوں کو WCAG کی تعمیل کے لیے چیک کریں۔
- **مہمان نوازی کے مینو (Hospitality menus)** — Theme Builder اب ہوٹل/مہمان نوازی کے کاروباروں کے لیے منظم فوڈ اور بیوریج مینو پیجز بنا سکتا ہے۔
- **ڈیسک ٹاپ اور موبائل پریویو دکھانا (Desktop and mobile preview rendering)** — ڈیزائن کی سمت کا انتخاب کرتے وقت اپنے ڈیزائن کو ڈیسک ٹاپ اور موبائل دونوں آلات پر پریویو کریں۔
- **نیویگیشن لیبل پیرامیٹر (Navigation label parameter)** — Create Menu کی صلاحیت اب پیج کے عنوان سے الگ ایک مخصوص `navigation_label` کو سپورٹ کرتی ہے۔
- **ٹائر 1 ٹول کی دستیابی (Tier 1 tool availability)** — sd-ai-agent/site-scrape اب ایک ٹائر 1 ٹول ہے جو Theme Builder میں ڈیفالٹ طور پر دستیاب ہے۔

### درست کیا گیا (Fixed)

- **AI Client cache** — اب cross-request persistence کے لیے transients سے سپورٹ کیا جاتا ہے، جس سے طویل چلنے والے agent tasks پر ڈیٹا کا نقصان نہیں ہوتا۔
- **Plugin row action links** — وضاحت کے لیے درست کیا گیا اور نام تبدیل کیا گیا۔

## 1.10.0 — Released on 2026-05-05

### نئی خصوصیات (New)

- **Tavily انٹرنیٹ سرچ (Tavily internet search)** — Brave Search کے ساتھ ساتھ بہتر انٹرنیٹ سرچ نتائج کے لیے Tavily کو ایک سرچ فراہم کنندہ کے طور پر شامل کیا گیا ہے۔
- **تھیم کے مطابق بلٹ ان سکلز (Theme-aware built-in skills)** — Block Themes، Classic Themes، Kadence Blocks، اور Kadence Theme skill guides اب plugin کے ساتھ آتے ہیں۔
- **سائٹ بلڈر میں رابطہ فارم شامل کرنے کی صلاحیت (Site builder contact form ability)** — چیٹ انٹرفیس سے براہ راست کسی بھی پیج پر رابطہ فارم شامل کریں۔

### بہتر کیا گیا (Improved)

- **WooCommerce انٹیگریشن کو بہتر بنایا گیا (WooCommerce integration refactored)** — اب بہتر قابل اعتمادیت اور مطابقت کے لیے مقامی WooCommerce APIs استعمال کرتا ہے۔
- **فراہم کنندہ کی فہرست خود بخود تازہ ہو جاتی ہے (Provider list refreshes automatically)** — جب کوئی بھی plugin activate یا deactivate کیا جاتا ہے۔

### درست کیا گیا (Fixed)

- **navigate-to کی صلاحیت (navigate-to ability)** — کچھ admin pages پر infinite reload loop کو ٹھیک کیا گیا۔
- **list-posts کی صلاحیت (list-posts ability)** — اب category اور tag کے ناموں کو درست طریقے سے slugs میں حل کرتا ہے۔
- **WP-CLI کمانڈز (WP-CLI commands)** — پچھلے refactor کے بعد گم شدہ namespace aliases کو بحال کیا گیا۔
- **ایونٹ آٹومیشن (Event automation)** — ان سائٹس کو gracefully handle کرتا ہے جہاں آٹومیشن ٹیبلز ابھی تک نہیں بنائے گئے ہیں۔
- **memory-save کی صلاحیت (memory-save ability)** — اب system instruction builder میں صحیح namespace prefix استعمال کرتا ہے۔
- **اسکیلر ٹول کے نتائج (Scalar tool results)** — اب AI کو واپس بھیجنے سے پہلے صحیح طریقے سے wrap کیا جاتا ہے۔
- **استعمال کے اعداد و شمار (Usage statistics)** — اب پرانے ورژن سے اپ گریڈ کرتے وقت legacy ability key format کو درست طریقے سے handle کرتا ہے۔
