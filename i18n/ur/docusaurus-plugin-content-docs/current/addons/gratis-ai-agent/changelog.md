---
title: تغیّرات کی فہرست
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# تبدیلیوں کا ریکارڈ (Changelog)

## 1.9.0 — جاری کیا گیا: 2026-04-28

### نئی خصوصیات (New)

- **`create_contact_form` کی صلاحیت** — یہ فعال فارم پلگ ان (Contact Form 7, WPForms, Fluent Forms, یا Gravity Forms) کا استعمال کرتے ہوئے ایک رابطہ فارم (contact form) بناتا ہے اور ایک شارٹ کوڈ (shortcode) واپس کرتا ہے جسے کسی بھی پوسٹ یا پیج میں شامل کیا جا سکتا ہے۔
- **`set_featured_image` کی صلاحیت** — یہ کسی موجودہ Media Library attachment ID یا دور کے URL سے کسی پوسٹ یا پیج کے لیے فیچرڈ امیج (featured image) مقرر کرتا ہے؛ اگر URL فراہم کیا جاتا ہے تو یہ خود بخود امیج کو امپورٹ کر لیتا ہے۔
- **`batch_create_posts` کی صلاحیت** — یہ ایک ہی صلاحیت کال (ability call) میں متعدد پوسٹ بناتی ہے۔ یہ `create_post` کے ہی پیرامیٹرز کو سپورٹ کرتی ہے، ہر پوسٹ کی کامیابی/ناکامی کی رپورٹ دیتی ہے، اور اس میں ایک اختیاری `stop_on_error` موڈ بھی ہے۔
- **`page_template` پیرامیٹر** — اسے `create_post` اور `update_post` میں شامل کیا گیا ہے۔ یہ تخلیق یا اپ ڈیٹ کے وقت ایک PHP پیج ٹیمپلیٹ فائل (جیسے `page-full-width.php`) مقرر کرتا ہے۔ `update_post` میں تھیم کے ڈیفالٹ پر واپس جانے کے لیے خالی سٹرنگ (empty string) پاس کریں۔
- **کلائنٹ-سائیڈ اسکرین شاٹ کی صلاحیتیں** — `capture_screenshot`, `compare_screenshots`, اور `review_page_design`۔ یہ سرور-سائیڈ ہیڈ لیس براؤزر کے ذریعے لائیو پیجز کے مکمل یا Viewport اسکرین شاٹس کیپچر کرتا ہے، دو اسکرین شاٹس کا فرق (diff) نکالتا ہے، اور لے آؤٹ، ٹائپوگرافی، رنگ، اور رسائی (accessibility) کا احاطہ کرتے ہوئے AI سے تیار کردہ ڈیزائن ریویو حاصل کرتا ہے۔
- **پانچ بلٹ اِن ایجنٹس** — Content Writer, Site Builder, Design Studio, Plugin Manager, اور Support Assistant۔ ہر ایجنٹ کے پاس ٹولز کا ایک مخصوص سیٹ، ایک مخصوص سسٹم پرامپٹ، اور شروع کرنے کے لیے تجاویز ہوتی ہیں۔ یہ نئے **Agent Picker** کے ذریعے چیٹ ہیڈر میں تبدیل کیے جا سکتے ہیں۔ مزید [Built-in Agents](../../user-guide/configuration/built-in-agents) دیکھیں۔
- **فیچر فلگز (Feature flags)** — ایک نیا **Settings → Feature Flags** ٹیب، جس میں رسائی کنٹرول ٹوگلز (صرف ایڈمنسٹریٹرز کے لیے محدود کریں، نیٹ ورک ایڈمنسٹریٹرز کے لیے محدود کریں، سبسکرائبر رسائی، غیر ممبرز کے لیے غیر فعال کریں) اور برانڈنگ کے آپشنز (فوٹر کی ایٹریبیوشن چھپائیں، کسٹم ایجنٹ نام، ایجنٹ پیکر چھپائیں، چیٹ اوتار کے طور پر سائٹ آئیکن استعمال کریں) موجود ہیں۔ مزید [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings) دیکھیں۔
- **آخری سیشن بحال کرنا (Restore last session)** — چیٹ پینل اب پیج لوڈ ہونے پر اور وِجٹ کھلنے پر خود بخود حالیہ گفتگو کو دوبارہ لوڈ کرتا ہے، تاکہ پیج نیویگیشن کے دوران سیاق و سباق (context) کبھی کھو نہ جائے۔
- **پلگ ان ایکشن لنکس (Plugin action links)** — سیٹنگز اور Abilities Registry کے لیے فوری لنکس اب ورڈپریس کے **Plugins → Installed Plugins** سکرین پر پلگ ان کی تفصیل کے نیچے ظاہر ہوتے ہیں۔

### بہتر کیا گیا (Improved)

- **امیج سورس ریٹرائی (Image source retry)** — ڈاؤن لوڈ کی ناکامی کی صورت میں، ایجنٹ اب AI سے تیار کردہ امیج پر واپس جانے سے پہلے تمام ترتیب شدہ مفت امیج سورسز کو دوبارہ کوشش کرتا ہے۔
- **ماڈل انفارمیشن پینل (Model info panel)** — یہ چیٹ ہیڈر میں ہمیشہ نظر آتا ہے؛ اب یہ پہلے پیغام کے بعد چھپتا نہیں ہے۔
- **آٹو-اسکرول رویہ (Auto-scroll behaviour)** — آٹو-اسکرول اس وقت رُک جاتا ہے جب صارف پڑھنے کے لیے اوپر سکرول کرتا ہے؛ ایک تیرتا ہوا **Scroll to bottom** بٹن ظاہر ہوتا ہے اور جب صارف تازہ ترین پیغام تک پہنچ جاتا ہے تو خود بخود غائب ہو جاتا ہے۔
- **Agent Picker UI** — اسے ایک فارم-ٹیبل اوورلے کے طور پر دوبارہ ڈیزائن کیا گیا ہے جس میں ہر ایجنٹ کے آئیکنز ہیں، جس سے ایجنٹس کی شناخت کرنا اور انہیں دیکھ کر تبدیل کرنا آسان ہو گیا ہے۔
- **Lazy-loaded JS chunks** — چیٹ وِجٹ کا ابتدائی جاوا اسکرپٹ بنڈل اب لیزی-لوڈڈ چنکس میں تقسیم ہو گیا ہے، جس سے ابتدائی بنڈل کے سائز میں 75–90% کمی آئی ہے۔
- **Chat widget redesign** — یونیفائی AI آئیکن نے پچھلے کسٹم اوتار کی جگہ لے لی ہے؛ یہ بلٹ اِن ایجنٹ سسٹم کے ساتھ مطابقت رکھتا ہے۔
- **URL لنکفیکیشن (URL linkification)** — سسٹم پیغامات اور ایرر میسج بلبلز میں ظاہر ہونے والے URLs کو اب کلک کرنے کے قابل لنکس کے طور پر دکھایا جاتا ہے۔

### ٹھیک کیا گیا (Fixed)

- **Ability discoverability** — تفصیلات، سسٹم پرامپٹ کے حوالہ جات، اور namespace alignment کو درست کیا گیا ہے تاکہ تمام صلاحیتیں (abilities) ایجنٹ کی ٹول لسٹ میں قابل اعتماد طریقے سے ظاہر ہوں۔
- **Providers cache** — پرووائڈرز کو اب ایک ورژن کاؤنٹر کے ذریعے سائٹ-واڈے کیش کیا جاتا ہے، جس سے ملٹی سائیٹ نیٹ ورکس پر پرانے پرووائڈر کے مسائل (stale-provider issues) کو روکا جاتا ہے۔
- **`ability_invalid_output`** — 12 ایبیلٹی ہینڈلرز میں حل کیا گیا؛ سب اب مناسب ساخت والے JSON جوابات واپس کرتے ہیں۔
- **`pending_client_tool_calls` pipeline** — اسے اینڈ-ٹو-اینڈ وائر کیا گیا ہے تاکہ کلائنٹ-سائیڈ ٹول کالز صحیح طریقے سے مکمل ہوں اور نتائج ماڈل کو واپس کر سکیں۔
- **History drawer** — ناقابل واپسی تبدیلیوں کو ریورٹ لسٹ سے خارج کیا گیا ہے؛ **View full history** لنک اب صحیح طریقے سے کام کرتا ہے۔
- **Changes/revert system** — پانچ الگ الگ بگس کو ٹھیک کیا گیا اور نئے ایڈمن انٹرفیس کے تحت یکجا کیا گیا۔
- **Save Settings toast** — **Save Settings** پر کلک کرنے کے بعد اب اسنیک بار نوٹیفکیشن قابل اعتماد طریقے سے ظاہر ہوتا ہے۔
- **Trash context menu** — **Delete Permanently** آپشن شامل کیا گیا تاکہ آئٹمز کو ٹراش ویو میں چھوڑے بغیر ہارڈ-ڈیلیٹ کیا جا سکے۔
- **Edit & resend** — ایڈیٹ آئیکن پر کلک کرنے سے اب صرف کلک کیے گئے پیغام کے لیے ایڈیٹ موڈ میں داخل ہوتا ہے، نہ کہ تھریڈ میں تمام پیغامات کے لیے۔
- **Chat layout height** — چیٹ پینل اپنی اونچائی کو ایڈجسٹ کرتا ہے جب پلگ ان سے شامل مواد (ایڈمن نوٹس، بینرز) پیج کے اوپر ظاہر ہوتا ہے، جس سے ان پٹ ایریا کو اسکرین سے ہٹایا جانے سے روکا جاتا ہے۔

---

## 1.4.0 — جاری کیا گیا: 2026-04-09

### نئی خصوصیات (New)

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — یہ CI پائپ لائنز اور ماڈل ایویلیویشن ورک فلو کے لیے کمانڈ لائن سے Agent Capabilities v1 benchmark suite چلاتا ہے۔ یہ ہر سوال کے لیے چلانے، پرووائڈر/ماڈل کو اووررائڈ کرنے، اور JSON/CSV آؤٹ پٹ کو سپورٹ کرتا ہے۔
- **Agent Capabilities v1 benchmark suite** — یہ پیچیدہ، کثیر-مرحلہ پرامپٹس کا ایک منظم سیٹ ہے جو پوری صلاحیت کی سطح کا استعمال کرتا ہے، جس میں اسکورنگ اور ٹوکن/دورانیہ کی رپورٹنگ شامل ہے۔
- **Custom Post Type abilities** — `register_post_type`, `list_post_types`, `delete_post_type`۔ رجسٹریشن آپشنز ٹیبل کے ذریعے دوبارہ شروع ہونے پر بھی برقرار رہتی ہے۔
- **Custom Taxonomy abilities** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`۔ یہ اختیاری ری رائٹ سلگز کے ساتھ ہائیرارکیکل اور فلیٹ ٹاکسونومیز کو سپورٹ کرتا ہے۔
- **Design System abilities** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`۔ اس میں پانچ منتخب پری سیٹس شامل ہیں: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`۔
- **Global Styles abilities** — `get_global_styles`, `set_global_styles`, `reset_global_styles`۔ یہ ورڈپریس Global Styles API کے ذریعے theme.json ویلیوز کو پڑھتا اور لکھتا ہے۔
- **Navigation Menu management ability** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`۔ یہ گھونسلے والے مینیوز (nested menus) اور تھیم لوکیشن کی تفویض کو سپورٹ کرتا ہے۔
- **Options Management ability** — `get_option`, `set_option`, `delete_option`, `list_options`۔ اس میں ایک بلٹ اِن سیفٹی بلاک لسٹ شامل ہے جو اہم ورڈپریس آپشنز کو تبدیلی سے بچاتی ہے۔
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`۔ ورڈپریس پلگ انز کے طور پر تقسیم کیے گئے ایبیلٹی پیکز کو دریافت اور فعال کریں۔
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`۔ پلگ ان کی دریافت، مرحلہ آؤٹ پٹ ریفرنسز، پیش رفت کی ٹریکنگ، اور خودکار خرابی کی بازیابی کے ساتھ کثیر-مرحلہ سائٹ بلڈ پلان۔
- **Restaurant website benchmark question** (`q-restaurant-website`) — CPT رجسٹریشن، ڈیزائن سسٹم، نیویگیشن، اور پلگ ان کی دریافت کا احاطہ کرنے والا اینڈ-ٹو-اینڈ ٹیسٹ۔
- **AI provider connector plugins** کو تیز مقامی ڈویلپمنٹ سیٹ اپ کے لیے WordPress Playground blueprints میں شامل کیا گیا۔

### بہتر کیا گیا (Improved)

- README کو AI provider connector دستاویزات اور سیٹ اپ ہدایات کے ساتھ اپ ڈیٹ کیا گیا ہے۔

### ٹھیک کیا گیا (Fixed)

- `main` برانچ پر 25 PHPUnit ٹیسٹ کی ناکامیاں حل کی گئیں۔
- `blueprint.json` میں GitHub releases URL فارمیٹ کو درست کیا گیا۔
- پرانے IDs سے ٹکراؤ سے بچنے کے لیے ٹاسک ID کو دوبارہ نمبر کیا گیا۔

---

## 1.3.x

_پچھلے ریلیز نوٹس پلگ ان ریپوزٹری میں موجود ہیں۔_
