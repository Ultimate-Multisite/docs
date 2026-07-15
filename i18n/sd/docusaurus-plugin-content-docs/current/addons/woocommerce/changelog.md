---
title: WooCommerce انضمام جي تبديلين جو رڪارڊ
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# WooCommerce انٽيگريشن تبديلي لاگ

ورزن 2.2.0 - 2026-07-01 تي جاري ڪيو ويو
* نئون: Ultimate Multisite ٽيڪس رقمون هاڻي checkout تي الڳ WooCommerce فيس لائينن طور ظاهر ٿين ٿيون، جنهن سان ادائيگي کان اڳ ٽيڪس ڪل وڌيڪ واضح ٿين ٿا.
* نئون: انهن سائيٽن لاءِ opt-in "ناڪام تجديدن تي رڪنيتون فوري طور معطل ڪريو" سيٽنگ ۽ `wu_woo_suspend_on_payment_failure` filter شامل ڪيو ويو، جيڪي WooCommerce رڪنيتن جي ٻيهر ڪوشش واري مدي دوران ناڪام-تجديد معطلي چاهين ٿيون.
* درستگي: WooCommerce رڪنيتن جون حالتون هم آهنگ ڪيون ويون، جيڪي ناڪام يا بحال ٿيل تجديدن کان پوءِ Ultimate Multisite رڪنيتن سان هم وقتي کان ٻاهر رهي سگهن ٿيون.
* درستگي: جڏهن Ultimate Multisite ڪرنسي فهرست ۾ WooCommerce اسٽور ڪرنسي موجود نه هئي، تڏهن اها شامل ڪئي وئي.
* درستگي: subscribers کي WooCommerce checkout ڏانهن موڙيندي گراهڪ جي بلنگ تفصيلن کي محفوظ رکيو ويو.
* بهتر ڪيو ويو: Jetpack Autoloader 5 سان مطابقت شامل ڪئي وئي.
* بهتر ڪيو ويو: رليز پيڪيج ٺهڻ کي صاف ڪيو ويو ته جيئن GitHub ۽ marketplace zips ۾ nested staging directories ۽ ترقياتي files نه اچن.

ورزن 2.0.6 - 2026-01-16 تي جاري ڪيو ويو
* بهتري: addon ۾ core رڪنيتون شامل ڪريو. هاڻي Woocommerce Subscriptinos extension جي ضرورت ناهي.

ورزن 2.0.5 - 2026-01-09 تي جاري ڪيو ويو
* بهتري: ترجما glotpress API مان لوڊ ڪريو.
* درستگي: ڪجهه page builders ۾ Fatal error.
* درستگي: جڏهن گراهڪ main site جو ميمبر هجي ته لامحدود redirect.

ورزن 2.0.4 - 2025-11-14 تي جاري ڪيو ويو
* شامل ڪيو ويو: گهڻين وڌيڪ ٻولين لاءِ ترجما.
* تبديل ڪيو ويو: نالو Ultimate Multisite: Woocommerce Integration رکيو ويو.
* شامل ڪيو ويو: Woocommerce 10.2.1 سان مطابقت.
* شامل ڪيو ويو: Woocommerce Subscriptions 7.7.0 سان مطابقت.
* درستگي: PHP 8.4 سان مطابقت
* درستگي: Redirect پر جڏهن ڪو WC account page موجود نه هجي.

ورزن 2.0.3 - 2025-08-13 تي جاري ڪيو ويو
* تبديل ڪيو ويو: نئين marketplace سان خودڪار اپڊيٽس فعال ڪيون ويون.

ورزن 2.0.2 - 2025-07-05 تي جاري ڪيو ويو
* تبديل ڪيو ويو: نالو Multisite Ultimate: Woocommerce Integration رکيو ويو.
* شامل ڪيو ويو: Woocommerce 9.8.1 سان مطابقت.
* شامل ڪيو ويو: Woocommerce Subscriptions 7.3.0 سان مطابقت.
* درستگي: گراهڪ پاران subscription منسوخ ڪرڻ.
* درستگي: checkout block استعمال ڪرڻ وقت Fatal error.
* بهتري: هاڻي Woocommerce high performance custom order tables سان مطابقت رکي ٿو.
* درستگي: WooCommerce checkout تي منسوخ ڪرڻ اڃا به membership کي upgrade ڪري سگهي ٿو.

ورزن 2.0.1 - 2023-08-09

* شامل ڪيو ويو: Woocommerce 7.9.0 سان مطابقت.
* شامل ڪيو ويو: Woocommerce Subscriptions 5.3.0 سان مطابقت.
* شامل ڪيو ويو: membership updates لاءِ support.
* شامل ڪيو ويو: Woocommerce ۾ trials ۽ setup fees بابت notices.
* شامل ڪيو ويو: Ultimate Multisite Woocommerce products جي meta value سان سڃاڻپ.
* شامل ڪيو ويو: سڀني Ultimate Multisite سان لاڳاپيل Woocommerce products کي mark ڪرڻ لاءِ هڪ ڀيرو واري fix داخل ڪئي وئي.
* شامل ڪيو ويو: Ultimate Multisite پاران ٺاهيل products کي Woocommerce فهرست مان هٽايو ويو.
* بهتري: cart تي لاڳو ڪرڻ لاءِ non-recurring Woocommerce discount ٺاهيو ويو.
* بهتري: Woocommerce product تي recurring discount بحال ڪيو ويو.
* بهتري: Woocommerce product تي recurring discount label شامل ڪيو ويو.
* بهتري: checkout تي product type کي يقيني بڻايو ويو.
* درستگي: downgrade عمل دوران membership status برقرار رکيو ويو.
* درستگي: cancellation عمل دوران errors کان بچڻ لاءِ چڪاس ڪيو ويو ته subscription موجود آهي يا نه.
* درستگي: Woocommerce subscriptions ۾ استعمال لاءِ start subscription date شامل ڪئي وئي.
* اندروني: نئون PHP 8.1 build process لاڳو ڪيو ويو.

ورزن 2.0.0 - مڪمل ٻيهر لکائي.

* شامل ڪيو ويو: gateway تبديل ڪرڻ يا membership منسوخ ڪرڻ وقت woo subscription کي هٽائڻ لاءِ cancellation method process؛
* شامل ڪيو ويو: memberships کي downgrade ۽ upgrade ڪرڻ لاءِ Handler؛
* بهتري: subsites ۾ customer update form تي woocommerce dependencies لوڊ ڪريو ته جيئن account update جي اجازت ملي؛
* بهتري: جيڪڏهن موجود نه هجي ته Woocommerce cart صحيح طرح لوڊ ڪريو؛
* بهتري: checkout process ڪرڻ وقت يقيني بڻايو ته اسان main site tables تي آهيون؛
* بهتري: Ultimo renewal order کي Woocommerce subscription order value جي بنياد تي ٺاهيو، last payment مان نه؛
* درستگي: WU Membership button link؛
* درستگي: جڏهن Woocommerce subscriptions renewal ادا ٿي وڃي ته Ultimo order کي paid طور set ڪريو؛
* Build: MPB کي builder طور شامل ڪريو؛

ورزن 2.0.0-beta-5 - 2022-01-21 تي جاري ڪيو ويو

* اندروني: hooks ۽ filters generator شامل ڪيو ويو؛
* اندروني: developer quality of life لاءِ Ultimate Multisite stubs شامل ڪيا ويا؛
* درست ڪيو ويو: جڏهن ضروري نه هجي ته ڪيترن products جي creation کي روڪيو ويو؛

ورزن 2.0.0-beta.4 - 2021-09-23

* درستگي: WooCommerce کي صرف main site بدران network active هجڻ لازمي ڪرڻ؛
* بهتري: add-on کي mu-plugin طور استعمال ڪرڻ جي اجازت لاءِ filter شامل ڪيو ويو؛

ورزن 2.0.0-beta.3 - 2021-05-28

* درستگي: dashboard access control تمام گهڻو سخت هو؛
* بهتري: Ultimate Multisite top-menu ۾ WooCommerce help links شامل ڪيا ويا؛

ورزن 2.0.0-beta.2 - 2021-05-04

* بهتري: WCS renewal order creation تي Ultimo ۾ pending payments ٺاهي ٿو؛
* بهتري: billing fields کي Ultimate Multisite customer data سان اڳواٽ ڀري ٿو؛
* بهتري: gateways لاءِ billing fields واپس شامل ڪري ٿو؛

ورزن 2.0.0-beta.1 - 2021-05-04

* شروعاتي beta release

-- پراڻا ورزن --

ورزن 1.2.6 - 26/03/2020

* درست ڪيو ويو: WooCommerce Subscriptions جي نون ورزنز سان ننڍي incompatibility؛

ورزن 1.2.5 - 26/08/2019

* درست ڪيو ويو: previous release تي Error؛

ورزن 1.2.4 - 22/08/2019

* بهتر ڪيو ويو: integration کان پوءِ فوري طور WooCommerce checkout screen ڏانهن redirect ڪرڻ لاءِ option شامل ڪيو ويو؛

ورزن 1.2.3 - 26/05/2019

* درست ڪيو ويو: WooCommerce لاءِ Payment email ڪجهه edge cases ۾ غائب ٿي ويو؛

ورزن 1.2.2 - 27/02/2019

* شامل ڪيو ويو: WooCommerce Subscription integration تي setup fees لاءِ support؛

ورزن 1.2.1 - 17/11/2018

* درست ڪيو ويو: Ultimate Multisite version 1.9.0 سان Compatibility issues؛

ورزن 1.2.0 - 10/09/2018

* بهتر ڪيو ويو: add-ons لاءِ نئون updates URL؛
* شامل ڪيو ويو: WooCommerce Subscription لاءِ Beta support؛

ورزن 1.1.2 - 11/02/2018

* درست ڪيو ويو: Pay لاءِ Link متحرڪ طور generate ٿي رهيو هو ته جيئن WooCommerce endpoints ۾ تبديلين جو جواب ڏئي سگهي؛
* بهتر ڪيو ويو: اسان هاڻي پنهنجي orders لاءِ completed status force ڪريون ٿا جڏهن payment_completed call ٿئي، ته جيئن يقيني بڻجي ته اسان جا renewal hooks تڏهن run ٿين جڏهن ٿيڻ گهرجن؛

Version 1.1.1 - 24/01/2018

* درست ڪيو ويو: هاڻي اهو به جانچي ٿو ته WooCommerce صرف مکيه سائيٽ تي چالو ٿيل آهي يا نه؛
* درست ڪيو ويو: آرڊر ٺاهڻ ۾ ٽيڪسن کي شامل ڪرڻ جي اجازت ڏيڻ لاءِ over-loadings شامل ڪيون ويون؛

Version 1.1.0 - 04/11/2017

* درست ڪيو ويو: هاڻي integration بٽڻ جو ليبل واقعي سيٽنگن جي عڪاسي ڪرڻ لاءِ تبديل ٿئي ٿو. Ultimate Multisite 1.5.0 گهربل آهي؛
* درست ڪيو ويو: WooCommerce Integration هاڻي تڏهن به ڪم ڪري ٿو جڏهن WooCommerce نيٽ ورڪ تي فعال نه هجي ۽ صرف مکيه سائيٽ ۾ چالو ٿيل هجي؛

1.0.0 - شروعاتي رليز
