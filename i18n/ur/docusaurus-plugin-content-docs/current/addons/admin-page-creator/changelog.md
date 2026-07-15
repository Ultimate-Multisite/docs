---
title: ایڈمن پیج کریٹر چینج لاگ
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Admin Page Creator تبدیلیوں کا ریکارڈ (Changelog)

### Version 1.9.0 - Released on 2026-01-18 {#version-190---released-on-2026-01-18}

* ٹھیک کیا گیا: فعال (activating) کرتے وقت فیتل ایررز (Fatal errors)۔
* دوبارہ ترتیب دیا گیا: Content source classes کو Singleton trait استعمال کرنے کے لیے، اور parent constructor کو صحیح طریقے سے initialize کرنے کے لیے۔
* ٹھیک کیا گیا: Vue.js template compilation errors کو ٹھیک کیا گیا، جس کی وجہ سے content type selector render نہیں ہو رہا تھا۔
* ٹھیک کیا گیا: گمشدہ Vue data properties (template_id, external_link_url_embedable, external_link_url_checking)۔
* ٹھیک کیا گیا: Page load پر TinyMCE editor صحیح طریقے سے initialize نہیں ہو رہا تھا۔
* ٹھیک کیا گیا: Divi support file Composer کے ذریعے autoload نہیں ہو رہی تھی۔
* ٹھیک کیا گیا: Divi support class میں خراب PHP syntax۔
* بہتر بنایا گیا: JavaScript asset organization اور minification۔
* بہتر بنایا گیا: تازہ ترین WordPress اور page builder versions کے ساتھ مطابقت (Compatibility)۔

= Version: 1.8.8 - Released on 2025-09-28

* Prefix کو ultimate-multisite میں تبدیل کیا؛ text domain کو اپ ڈیٹ کیا؛ اور ورژن نمبر بڑھایا۔

### Version 1.8.7 - 04/10/2023 {#version-187---04102023}

* ٹھیک کیا گیا: نئی admin page شامل کرنے کی کوشش پر فیتل ایرر۔
* ٹھیک کیا گیا: Oxygen stylesheets prefix کے ساتھ ٹکراؤ (Conflict)۔

### Version 1.8.6 - 09/08/2023 {#version-186---09082023}

* شامل کیا گیا: مرکزی سائٹ یا موجودہ سب-سائٹ سے ڈیٹا دکھانے کا آپشن شامل کیا گیا۔
* شامل کیا گیا: WordPress Block Editor (Gutenberg) کے لیے سپورٹ شامل کیا گیا۔
* ٹھیک کیا گیا: Brizy page assets لوڈ نہ ہونے کا مسئلہ حل کیا گیا۔

### Version 1.8.5 - 09/12/2020 {#version-185---09122020}

* ٹھیک کیا گیا: Screen Options میں مینو کو چھپانے کا مسئلہ جو ختم نہیں ہو رہا تھا۔

### Version 1.8.4 - 11/11/2020 {#version-184---11112020}

* ٹھیک کیا گیا: Multisite Ultimate v2 کے لیے سپورٹ۔

### Version 1.8.3 - 01/10/2020 {#version-183---01102020}

* ٹھیک کیا گیا: پچھلے build کے Beaver Builder کے ساتھ عدم مطابقت (Incompatibilities)۔
* ٹھیک کیا گیا: WP 5.5 کے ساتھ مارجن میں عدم مطابقت۔

### Version 1.8.2 - 21/09/2020 {#version-182---21092020}

* ٹھیک کیا گیا: WP 5.5 کے ساتھ چھوٹے عدم مطابقت کے مسائل۔

### Version 1.8.1 - 05/08/2020 {#version-181---05082020}

* ٹھیک کیا گیا: Brizy 2.0 کے ساتھ عدم مطابقت۔
* ٹھیک کیا گیا: مینو لسٹ بنانے پر چھوٹے کارکردگی کے مسائل۔

### Version 1.8.0 - 27/04/2020 {#version-180---27042020}

* ٹھیک کیا گیا: جب کوئی مارجن موڈ منتخب نہیں ہوتا تو ٹاپ-بار کے نیچے نوٹس چھپ جاتے تھے۔
* شامل کیا گیا: اب کسٹم پیجز ایک ہی وقت میں متعدد WordPress admin top-level اور sub-pages کو تبدیل کر سکتے ہیں۔
* شامل کیا گیا: Admins اب WP Admin Pages PRO کا استعمال کرتے ہوئے admin pages کو چھپا سکتے ہیں۔

### Version 1.7.9 - 01/04/2020 {#version-179---01042020}

* ٹھیک کیا گیا: Brizy 1.10.118 اور اس سے اوپر کے ورژن admin pages پر SVG سپورٹ کو خراب کر رہے تھے۔

### Version 1.7.8 - 26/03/2020 {#version-178---26032020}

* ٹھیک کیا گیا: فرینچ زبان استعمال کرتے وقت Editor page کو خراب کرنے والی escaping error۔

### Version 1.7.7 - 04/03/2020 {#version-177---04032020}

* ٹھیک کیا گیا: Brizy Builder کے ساتھ چھوٹا عدم مطابقت۔
* بہتر بنایا گیا: Freemius SDK کو 2.3.2 تک اپ ڈیٹ کیا گیا۔

### Version 1.7.6 - 10/02/2020 {#version-176---10022020}

* ٹھیک کیا گیا: Dashboard Widgets پر Admin Page edit button دائیں نچلے کونے میں کام نہیں کر رہا تھا۔
* ٹھیک کیا گیا: Astra کے ساتھ چھوٹا عدم مطابقت۔
* ٹھیک کیا گیا: Brizy کے نئے ورژن نے مطابقت کو خراب کر دیا تھا۔

### Version 1.7.5 - 14/12/2019 {#version-175---14122019}

* ٹھیک کیا گیا: Replace Page آپشن پر مینو آئٹمز کو بھرنے کے لیے ایک نیا edge-case handler شامل کیا گیا۔
* ٹھیک کیا گیا: Elementor fonts کام نہیں کر رہے تھے۔
* بہتر بنایا گیا: Account page سے حساس معلومات کو چھپانے کے لیے Freemius SDK کو اپ ڈیٹ کیا گیا۔

### Version 1.7.4 - 29/11/2019 {#version-174---29112019}

* ٹھیک کیا گیا: WooCommerce Memberships کے ساتھ عدم مطابقت۔
* ٹھیک کیا گیا: Oxygen Builder tab component کام نہیں کر رہا تھا۔
* ٹھیک کیا گیا: Beaver Themer کام نہیں کر رہا تھا۔

### Version 1.7.3 - 12/07/2019 {#version-173---12072019}

* ٹھیک کیا گیا: جب کسی پیج کے parent کو کسی دوسرے admin page type میں تبدیل کیا جاتا ہے تو پیجز غائب ہو جاتے تھے۔
* بہتر بنایا گیا: Admin Page types کے درمیان list table dividers کو بہتر بنایا گیا۔
* بہتر بنایا گیا: پورے codebase کا Security Review کیا گیا۔
* بہتر بنایا گیا: Separator tab warning پر نوٹ دیا گیا جب یہ خصوصیت کسی دیے گئے مینو/content source type کے لیے دستیاب نہیں ہوتی۔

### Version 1.7.2 - 01/07/2019 {#version-172---01072019}

* ٹھیک کیا گیا: Freemius SDK ورژن کو 2.3.0 تک اپ ڈیٹ کیا گیا۔
* ٹھیک کیا گیا: Flywheel کے ساتھ عدم مطابقت کا مسئلہ۔

### Version 1.7.1 - 27/06/2019 {#version-171---27062019}

* ٹھیک کیا گیا: Welcome Widget اب تمام roles کو دکھایا جاتا ہے۔
* ٹھیک کیا گیا: Screen Option جو Admin Pages مینو کو چھپانے/دکھانے کے لیے ہے، وہ شامل نہیں ہوتا اگر مینو کو https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/ پر بیان کردہ filter کے ذریعے چھپایا جا رہا ہو۔
* بہتر بنایا گیا: Admin Pages مینو کو چھپانے سے اب Beaver Builder saved templates list سے بنائے گئے templates کو بھی چھپایا جاتا ہے۔
* شامل کیا گیا: admin pages کو bulk activate اور deactivate کرنے کے آپشن۔
* شامل کیا گیا: مرکزی سائٹ پر پیجز دکھانے کا آپشن۔
* شامل کیا گیا: Replace mode میں top اور sub level مینو labels کو دوبارہ نام دینے کا آپشن۔

### Version 1.7.0 - 04/06/2019 {#version-170---04062019}

* ٹھیک کیا گیا: Oxygen templates کے دکھ نہ ہونے کے مسائل۔
* شامل کیا گیا: Widget Creation کے لیے سپورٹ!

### Version 1.6.1 - 22/05/2019 {#version-161---22052019}

* ٹھیک کیا گیا: ٹائپوز (Typos)۔
* ٹھیک کیا گیا: Sub-menu pages جو ایک ہی order value کے ساتھ پچھلے sub-menu items کو اووررائڈ کر رہے تھے۔
* ٹھیک کیا گیا: Duplication اب duplicated page کا slug reset کر دیتا ہے۔
* بہتر بنایا گیا: pt_BR اور es_ES po files کو اپ ڈیٹ کیا گیا۔
* بہتر بنایا گیا: list table اب کسٹم پیجز کے نام کو parent pages کے طور پر بھی دکھاتا ہے۔

### Version 1.6.0 - 21/05/2019 {#version-160---21052019}

* شامل کیا گیا: External Links اب iframe loading کو بھی سپورٹ کرتے ہیں۔

### Version 1.5.5 - 17/05/2019 {#version-155---17052019}

* ٹھیک کیا گیا: جب کوئی پیج delete یا duplicate کیا جاتا ہے تو warning message آ رہا تھا۔
* ٹھیک کیا گیا: Admins کو permission settings لاگو نہیں ہو رہی تھیں۔

### Version 1.5.4 - 08/05/2019 {#version-154---08052019}

* ٹھیک کیا گیا: Sliced Invoices کے ساتھ عدم مطابقت۔
* ٹھیک کیا گیا: Oxygen کے ساتھ چھوٹا مسئلہ۔
* ٹھیک کیا گیا: نئے admin page title field پر placeholder key-up پر ختم نہیں ہو رہا تھا۔

### Version 1.5.3 - 03/05/2019 {#version-153---03052019}

* ٹھیک کیا گیا: Advanced Custom Field option pages کے ساتھ عدم مطابقت۔
* شامل کیا گیا: کسٹم admin pages کے ہدف (targets) کے طور پر مخصوص صارفین کو شامل کرنے کا آپشن۔

### Version 1.5.2 - 30/04/2019 {#version-152---30042019}

* ٹھیک کیا گیا: Brizy کے نئے ورژن کے ساتھ عدم مطابقت۔
* شامل کیا گیا: ہسپانوی ترجمہ شامل کیا گیا - John Rozzo کی مہربانی۔ شکریہ، جان!
* شامل کیا گیا: Oxygen Builder کے لیے بیٹا سپورٹ۔

### Version 1.5.1 - 15/04/2019 {#version-151---15042019}

* ٹھیک کیا گیا: Normal اور HTML editors پر placeholders کا مسئلہ۔
* ٹھیک کیا گیا: Admin Pages Tools -> Export پر دکھ نہیں رہے تھے۔
* ٹھیک کیا گیا: صرف ہمارے اپنے پیجز پر scripts اور styles لوڈ کرنا۔
* شامل کیا گیا: Super Admins اب Admin Pages کو duplicate کر سکتے ہیں۔

### Version 1.5.0 - 29/03/2019 {#version-150---29032019}

* ٹھیک کیا گیا: Sentry کے ذریعے پکڑے گئے چھوٹے bugs۔
* ٹھیک کیا گیا: Edit Admin page screen پر delete button کام نہیں کر رہا تھا۔
* بہتر بنایا گیا: BeaverBuilder button کو تبدیل کیا تاکہ یہ واضح ہو سکے کہ Standard BB license بھی سپورٹ کیا جاتا ہے۔
* شامل کیا گیا: Admins اب submenus کا order بھی سیٹ کر سکتے ہیں۔
* شامل کیا گیا: Replace page mode اب تمام مینو آئٹمز کو سپورٹ کرتا ہے۔

### Version 1.4.0 - 14/02/2019 (stand-alone) & 27/02/2019 (add-on) {#version-140---14022019-stand-alone--27022019-add-on}

* شامل کیا گیا: https://wpadminpagespro.com پر Stand-alone plugin کے طور پر لانچ ہوا۔
* شامل کیا گیا: page creation process مکمل ہونے کے بعد Admin Pages مینو آئٹم کو مینو سے ہٹانے کا آپشن۔
* شامل کیا گیا: admin pages سے admin notices کو ہٹانے کا آپشن۔
* شامل کیا گیا: Content processing، تاکہ آپ {{user:first_name}} جیسے placeholders لگا سکیں اور یہ خود بخود user first_name meta field سے تبدیل ہو جائے۔
* شامل کیا گیا: Inline Editor۔
* شامل کیا گیا: مستقبل میں نئے Page Builders/Content Sources کو آسانی سے شامل کرنے کے لیے consolidated content source parent class۔
* شامل کیا گیا: External URLs کے لیے سپورٹ۔

### Version 1.3.0 - 15/01/2019 {#version-130---15012019}

* ٹھیک کیا گیا: multisite environments پر Admin Pages main-site پر ظاہر نہیں ہو رہے تھے۔
* بہتر بنایا گیا: subsites کی export screen سے Multisite Ultimate custom post types کو ہٹایا گیا۔
* شامل کیا گیا: create pages پر network admins کے لیے quick actions کے ساتھ top-bar۔
* شامل کیا گیا: بہت بڑا! Elementor Support!
* شامل کیا گیا: بہت بڑا! Brizy Support!

### Version 1.2.1 - 17/11/2018 {#version-121---17112018}

* ٹھیک کیا گیا: پلاگ ان کو Multisite Ultimate 1.9.0 کے ساتھ مطابقت (compatible) بنانا۔

### Version 1.2.0 - 10/09/2018 {#version-120---10092018}

* شامل کیا گیا: اگر wp-config.php پر WU_APC_ALLOW_PHP_PROCESSING کو true سیٹ کیا جائے تو PHP سپورٹ شامل کیا گیا۔ یہ PHP کا eval استعمال نہیں کرتا، لیکن اس سے اب بھی سیکیورٹی کی خامی ہو سکتی ہے۔ اسے احتیاط سے استعمال کریں۔
* بہتر بنایا گیا: Add-on plugin updater۔
* بہتر بنایا گیا: updates server کے لیے نیا URL۔

### Version 1.1.2 - 16/08/2018 {#version-112---16082018}

* ٹھیک کیا گیا: WP Engine کے ساتھ چھوٹا مسئلہ۔

### Version 1.1.1 - 16/08/2018 {#version-111---16082018}

* ٹھیک کیا گیا: replace pages کو صحیح طریقے سے permissions نہیں مل رہی تھیں۔

### Version 1.1.0 - 15/08/2018 {#version-110---15082018}

* شامل کیا گیا: Beaver Builder templates اب سپورٹ کیے جاتے ہیں! آپ کسٹم admin pages بنانے کے لیے اپنے پسندیدہ page builder استعمال کر سکتے ہیں۔
* شامل کیا گیا: اب WordPress default admin pages کا content بھی replace کرنا ممکن ہے۔
* شامل کیا گیا: اب default WordPress admin pages کے اوپر یا نیچے content append کرنا بھی ممکن ہے۔

### 0.0.1 {#001}
- ابتدائی ریلیز
