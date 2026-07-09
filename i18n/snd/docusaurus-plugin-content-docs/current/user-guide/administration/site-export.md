---
title: سائٽ ايڪسبوٽ
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# साइट एक्सपोर्ट (Site Export) {#site-export}

**साइट एक्सपोर्ट** एडमिन पेज نیٹवर्क एडमिनिस्ट्रेटर کي هڪ سائيٽ، يا پورو نیٹ ورک کي مڪمل ڪري ڈاؤنلوڊ ڪرڻ لاءِ آرڪائيف (archive) ۾ پيءَڻو ڏيکاري ٿو، جنه مڪمل نقل و منتقل ڪرڻ (migration)، بیک اپ، يا ڪم ڏيکارڻ جي ڪم لاءِ استعمال ٿيندو آهي.

## هڪ سائيٽ جو एक्सपोर्ट ڪرڻ {#exporting-one-site}

**Ultimate Multisite > Site Export** تي وڃو ۽ **Generate new Site Export** چونڊيو. ان همجي، ان سوبسائٽ کي چونڊيو جنه توهان پيءَڻو ڪرڻ چاهيو ٿا، ڇا ته آرڪائيف ۾ اپلوڊز (uploads)، پلگئنز (plugins)، ۽ ٿيمز (themes) شامل ڪجن يا نه.

جڏهن एक्सपोर्ट ختم ٿي وڃي، **Existing Exports** جي لسٹ کان ZIP ڈاؤنلوڊ ڪريو. موجوده ZIPs ۾ خود شروع ٿيندڙ `index.php` ۽ هڪ `readme.txt` شامل هوندا آهن، تنهن سان آرڪائيف کي نئين هاستنگ (host) تي اپلوڊ ڪيو جا سگهجي ٿو ۽ الگ کان ايپورٽ پلگئن نصب ڪرڻ جي ضرورت وٺي شروع ڪري سگهجي ٿو.

## پورو نیٹ ورک جو एक्सपोर्ट ڪرڻ {#exporting-the-whole-network}

جڏهن توهان کي هڪ ئي آرڪائيف گهرجي جنه نیٹ ورک ۾ موجود سڀني سوبسائٽن کي شامل ڪري، ته Site Export يا **Network Export** استعمال ڪريو. اهو هاستنگ مڪمل نقل و منتقل ڪرڻ کان اڳ، آفت جي مرمت (disaster-recovery) جي ريئلٽي تجربن، يا اسٽيجينگ ٻيهر ٺاهڻ لاءِ ڪارآمد آهي جتي هر سوبسائٽ کي هڪ ئي وقت سفر ڪرڻو پوندو.

چڱيءَ طرح، چونكه هڪ نیٹ ورک جو एक्सपोर्ट هڪ سائيٽ جي مقابلي وڌيڪ وڏو ٿي سگهي ٿو، ان کي گهٽ ڪارڪردگي (low-traffic) وارن وقت دوران چالو ڪريو ۽ تصديق ڪريو ته ٽارگيت اسٽورج ۾ اپلوڊز، پلگئنز، ٿيمز، ۽ جنريٽ ٿيل ZIP فائلن لاءِ ڪافي آزاد اسپيس موجود آهي.

### نیٹ ورک ايپورٽ بڪل (Network Import Bundles) {#network-import-bundles}

Ultimate Multisite 2.12.0 کان شروع ٿي، Site Exporter **network import bundles** يا **نیٹ ورک ايپورٽ بڪل** جن کي جنريٽ ڪري سگهي ٿو — جيڪي سڀني سوبسائٽن جي مڪمل بحالي لاءِ مخصوص آرڪائيف آهن جنهن کي آسان بنايو ويو آهي. هڪ نیٹ ورک ايپورٽ بڪل ۾ ان تمام تمام فائلون ۽ ميڊيٽا شامل هوندا آهن جن سان ڪيترائي سائيٽن کي نئين نیٹ ورک اسٽالشن تي بحال ڪري سگهجي ٿو.

#### NETWORK IMPORT BUNDLE جنريٽ ڪرڻ {#generating-a-network-import-bundle}

1. **Ultimate Multisite > Site Export** تي وڃو
2. **Generate new Network Export** تي ڪلڪ ڪريو
3. export type جي طور تي **Network Import Bundle** چونڊيو
4. چُنو ته uploads، plugins، ۽ themes شامل ڪرڻ گهرجي يا نه
5. **Generate** تي ڪلڪ ڪريو
6. **Existing Exports** لسٹ کان bundle ZIP download ڪريو

#### Network Import Bundle کان واپس وڃڻ (Restoring from a Network Import Bundle) {#restoring-from-a-network-import-bundle}

network import bundle کان sites واپس وٺڻ لاءِ:

1. پنهنجي target host تي Ultimate Multisite install ڪريو
2. multisite setup wizard کي ختم ڪريو
3. نئين network تي **Ultimate Multisite > Site Export** تي وڃو
4. **Import Network Bundle** تي ڪلڪ ڪريو
5. network import bundle ZIP فائل upload ڪريو
6. screen تي ڏنل import instructions جي عمل ۾ آيو
7. import process سڀني sites، انهن جي content، ۽ configurations کي واپس وٺندو

Network import bundles جو محفوظ رکڻ:
- Site content (posts، pages، custom post types)
- Site settings and options
- User roles and permissions
- Plugins and themes (if included in the bundle)
- Media uploads (if included in the bundle)
- Custom database tables and data

## خود چبوڻ واري export ZIP کي install ڪرڻ {#installing-a-self-booting-export-zip}

نئين host تي خود چبوڻ واري ZIP کي واپس وٺڻ لاءِ:

1. export ki وڃي واري ZIP جي contents کي target web root تي upload ڪريو
2. browser ۾ upload ڪيل `index.php` کي کيلڪ ڪريو
3. bundled export package کان screen تي ڏنل installer instructions جي عمل ۾ آيو
4. temporary files ختم ڪرڻ کان اڳ، export-specific notes لاءِ bundled `readme.txt` کي ڏسو

addon-specific installation ۽ import details لاءِ، [Site Exporter addon documentation](/addons/site-exporter) ڏسو.

Ultimate Multisite 2.9.0 ۾ شامل ڪيل single-site tool لاءِ، [Export & Import](/user-guide/administration/export-import) ڏسو.
