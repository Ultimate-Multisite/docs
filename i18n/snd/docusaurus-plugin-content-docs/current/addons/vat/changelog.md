---
title: VAT تبديلين جو لاگ
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# VAT تبديلي نامو

نسخو 1.0.7 - 2026-02-03 تي جاري ڪيو ويو

* درستي: German (DE) VAT نمبر VIES SOAP service MS_MAX_CONCURRENT_REQ غلطين سبب تصديق ۾ ناڪام ٿي رهيا هئا. وڌيڪ ڀروسي لائق تصديق لاءِ legacy SOAP API کان سرڪاري EU VIES REST API ڏانهن منتقل ڪيو ويو.
* درستي: VAT نمبر هاڻي تڏهن قبول ڪيا وڃن ٿا جڏهن VIES service عارضي طور دستياب نه هجي، بجاءِ ان جي جو غلط طور رد ڪيا وڃن. بعد واري جائزي لاءِ هڪ لاگ داخلا ٺاهي وڃي ٿي.
* درستي: VAT/Tax ID فيلڊ هاڻي سڀني ملڪن لاءِ نظر اچي ٿي، رڳو EU ميمبرن لاءِ نه. غير-EU tax IDs (مثال طور Swiss CHE نمبر) VIES تصديق کانسواءِ انوائس ڏيکاءَ لاءِ محفوظ ڪيا وڃن ٿا.
* درستي: Greece (GR)، Monaco (MC)، ۽ Isle of Man (IM) لاءِ VAT prefix ڳولا غلط array lookup logic سبب خراب هئي.
* بهتري: غير ضروري wp-cli-bundle dev dependency هٽائي وئي، جيڪا Site Exporter addon سان گڏ استعمال ڪرڻ وقت fatal errors جو سبب بڻجي سگهي ٿي.
* بهتري: جامع unit test suite (53 tests) شامل ڪيو ويو.

نسخو 1.0.6 - 2026-01-25 تي جاري ڪيو ويو

* درستي: Domestic B2B transactions هاڻي صحيح نموني VAT چارج ڪن ٿا. EU VAT ضابطن موجب، reverse charge رڳو cross-border B2B transactions تي لاڳو ٿئي ٿو، نه جڏهن گراهڪ جو ملڪ ڪمپني جي ملڪ سان ملي ٿو.

نسخو 1.0.5 - 2026-01-22 تي جاري ڪيو ويو

* درستي: Addon لوڊ نه ٿي رهيو هو يا صحيح ڪم نه ڪري رهيو هو.
* تبديلي: وڌيڪ ڀروسي لائق ۽ فعال طور سنڀاليل ڊيٽا لاءِ VAT rate data source کي euvatrates.com کان ibericode/vat-rates repository ڏانهن منتقل ڪيو ويو.
* درستي: super_reduced_rates option value جي ٽائپو درست ڪئي وئي.
* بهتري: غلطين کان بچڻ لاءِ country code handling لاءِ null checks شامل ڪيا ويا.
* تبديلي: Traduttore ذريعي خودڪار updates جي حق ۾ bundled translation files هٽايون ويون.

نسخو: 1.0.3 - 2025-09-28 تي جاري ڪيو ويو

* prefix جو نالو بدلائي ultimate-multisite ڪيو؛ text domain اپڊيٽ ڪيو؛ version bump.

نسخو 1.0.0-beta.4 - 2021-09-24

* شامل ڪيو ويو: mu-plugins تي ٻڌل setups لاءِ filter wp_ultimo_skip_network_active_check;

نسخو 1.0.0 - 05/08/2021 - شروعاتي جاري ٿيڻ
