---
title: WooCommerce انٽيگريشن تبديلي لاگ
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# WooCommerce انٽيگريشن تبديلي نامو {#woocommerce-integration-changelog}

نسخو 2.2.0 - 2026-07-01 تي جاري ڪيو ويو
* نئون: Ultimate Multisite ٽيڪس رقمون هاڻي checkout تي الڳ WooCommerce فيس لائينن طور ظاهر ٿين ٿيون، جنهن سان ادائيگي کان اڳ ٽيڪس ڪل وڌيڪ واضح ٿين ٿا.
* نئون: هڪ اختياري "ناڪام تجديدن تي Memberships کي فوري معطل ڪريو" سيٽنگ ۽ `wu_woo_suspend_on_payment_failure` فلٽر شامل ڪيو ويو انهن سائيٽن لاءِ جيڪي WooCommerce Subscriptions جي ٻيهر ڪوشش واري ونڊو دوران ناڪام-تجديد معطلي چاهين ٿيون.
* درستگي: WooCommerce Subscription حالتون هم آهنگ ڪيون ويون جيڪي ناڪام يا بحال ٿيل تجديدن کان پوءِ Ultimate Multisite memberships سان هم وقتي کان ٻاهر رهي سگهن ٿيون.
* درستگي: WooCommerce اسٽور ڪرنسي کي Ultimate Multisite ڪرنسي فهرست ۾ شامل ڪيو ويو جڏهن اها موجود نه هئي.
* درستگي: subscribers کي WooCommerce checkout ڏانهن ريڊائريڪٽ ڪرڻ وقت گراهڪ جا بلنگ تفصيل محفوظ رکيا ويا.
* بهتر: Jetpack Autoloader 5 سان مطابقت شامل ڪئي وئي.
* بهتر: رليز پيڪيج ٺهڻ صاف ڪيو ويو ته جيئن GitHub ۽ مارڪيٽ پليس zips nested staging ڊائريڪٽرين ۽ ترقياتي فائلن کان پاسو ڪن.

نسخو 2.0.6 - 2026-01-16 تي جاري ڪيو ويو
* بهتري: addon ۾ بنيادي subscriptions شامل ڪريو. هاڻي Woocommerce Subscriptinos extension جي ضرورت نه رهي.

نسخو 2.0.5 - 2026-01-09 تي جاري ڪيو ويو
* بهتري: glotpress API مان ترجما لوڊ ڪريو.
* درستگي: ڪجهه page builders ۾ fatal error.
* درستگي: جڏهن گراهڪ main site جو member هجي ته لامحدود redirect.

نسخو 2.0.4 - 2025-11-14 تي جاري ڪيو ويو
* شامل ڪيو ويو: گهڻين وڌيڪ ٻولين لاءِ ترجما.
* تبديل ڪيو ويو: نالو Ultimate Multisite: Woocommerce Integration رکيو ويو.
* شامل ڪيو ويو: Woocommerce 10.2.1 سان مطابقت.
* شامل ڪيو ويو: Woocommerce Subscriptions 7.7.0 سان مطابقت.
* درستگي: PHP 8.4 سان مطابقت
* درستگي: redirect پر جڏهن ڪا WC account page موجود نه هجي.

نسخو 2.0.3 - 2025-08-13 تي جاري ڪيو ويو
* تبديل ڪيو ويو: نئين marketplace سان خودڪار اپڊيٽس فعال ڪيون ويون.

نسخو 2.0.2 - 2025-07-05 تي جاري ڪيو ويو
* تبديل ڪيو ويو: نالو Multisite Ultimate: Woocommerce Integration رکيو ويو.
* شامل ڪيو ويو: Woocommerce 9.8.1 سان مطابقت.
* شامل ڪيو ويو: Woocommerce Subscriptions 7.3.0 سان مطابقت.
* درستگي: گراهڪ طرفان subscription منسوخ ڪرڻ.
* درستگي: checkout block استعمال ڪرڻ وقت fatal error.
* بهتري: هاڻي Woocommerce high performance custom order tables سان مطابقت رکي ٿو.
* درستگي: WooCommerce checkout تي منسوخي اڃا به membership کي upgrade ڪري سگهي ٿي.

نسخو 2.0.1 - 2023-08-09 تي جاري ڪيو ويو

* شامل ڪيو ويو: Woocommerce 7.9.0 سان مطابقت.
* شامل ڪيو ويو: Woocommerce Subscriptions 5.3.0 سان مطابقت.
* شامل ڪيو ويو: membership updates لاءِ مدد.
* شامل ڪيو ويو: Woocommerce ۾ trials ۽ setup fees بابت notices.
* شامل ڪيو ويو: Ultimate Multisite Woocommerce products جي meta value سان سڃاڻپ.
* شامل ڪيو ويو: سڀني Ultimate Multisite سان لاڳاپيل Woocommerce products کي mark ڪرڻ لاءِ هڪ ڀيرو واري درستگي داخل ڪئي وئي.
* شامل ڪيو ويو: Ultimate Multisite ٺاهيل products کي Woocommerce فهرست مان هٽايو ويو.
* بهتري: cart تي لاڳو ڪرڻ لاءِ non-recurring Woocommerce discount ٺاهيو ويو.
* بهتري: Woocommerce product تي recurring discount بحال ڪيو ويو.
* بهتري: Woocommerce product تي recurring discount label شامل ڪيو ويو.
* بهتري: checkout تي product type کي يقيني بڻايو ويو.
* درستگي: downgrade عمل دوران membership status برقرار رکيو ويو.
* درستگي: cancellation عمل دوران errors کان بچڻ لاءِ subscription موجود آهي يا نه چيڪ ڪيو ويو.
* درستگي: Woocommerce subscriptions ۾ استعمال ڪرڻ لاءِ start subscription date شامل ڪئي وئي.
* اندروني: نئون PHP 8.1 build process لاڳو ڪيو ويو.

نسخو 2.0.0 - مڪمل نئين سر لکت.

* شامل ڪيو ويو: gateway تبديل ڪرڻ يا membership منسوخ ڪرڻ وقت woo subscription هٽائڻ لاءِ cancellation method جو عمل؛
* شامل ڪيو ويو: memberships کي downgrade ۽ upgrade ڪرڻ لاءِ handler؛
* بهتري: subsites ۾ customer update form تي woocommerce dependencies لوڊ ڪريو ته جيئن account update جي اجازت ملي؛
* بهتري: جيڪڏهن موجود نه هجي ته Woocommerce cart صحيح نموني لوڊ ڪريو؛
* بهتري: checkout جو عمل ڪرڻ وقت پڪ ڪريو ته اسان main site tables تي آهيون؛
* بهتري: Ultimo renewal order کي Woocommerce subscription order value جي بنياد تي ٺاهيو، آخري ادائيگي مان نه؛
* درستگي: WU Membership button link ڏانهن وڃو؛
* درستگي: جڏهن Woocommerce subscriptions renewal ادا ٿي چڪي هجي ته Ultimo order کي paid طور set ڪريو؛
* Build: MPB کي builder طور شامل ڪريو؛

نسخو 2.0.0-beta-5 - 2022-01-21 تي جاري ڪيو ويو

* اندروني: hooks ۽ filters generator شامل ڪيو ويو؛
* اندروني: developer quality of life لاءِ Ultimate Multisite stubs شامل ڪيا ويا؛
* درست ڪيو ويو: ضرورت نه هجي ته ڪيترن products جي creation کي روڪيو؛

نسخو 2.0.0-beta.4 - 2021-09-23

* درستگي: WooCommerce کي صرف main site بدران network active هجڻ جي ضرورت؛
* بهتري: add-on کي mu-plugin طور استعمال ڪرڻ جي اجازت لاءِ filter شامل ڪيو ويو؛

نسخو 2.0.0-beta.3 - 2021-05-28

* درستگي: dashboard access control تمام گهڻو سخت هو؛
* بهتري: Ultimate Multisite top-menu ۾ WooCommerce help links شامل ڪيا ويا؛

نسخو 2.0.0-beta.2 - 2021-05-04

* بهتري: WCS renewal order creation تي Ultimo ۾ pending payments ٺاهي ٿو؛
* بهتري: billing fields کي Ultimate Multisite customer data سان اڳواٽ ڀري ٿو؛
* بهتري: gateways لاءِ billing fields واپس شامل ڪري ٿو؛

نسخو 2.0.0-beta.1 - 2021-05-04

* شروعاتي beta release

-- پراڻا نسخا --

نسخو 1.2.6 - 26/03/2020

* درست ڪيو ويو: WooCommerce Subscriptions جي نون نسخن سان ننڍي incompatibility؛

نسخو 1.2.5 - 26/08/2019

* درست ڪيو ويو: پوئين release تي error؛

نسخو 1.2.4 - 22/08/2019

* بهتر ڪيو ويو: integration کان پوءِ فوري طور WooCommerce checkout screen ڏانهن redirect ڪرڻ جو option شامل ڪيو ويو؛

نسخو 1.2.3 - 26/05/2019

* درست ڪيو ويو: ڪجهه edge cases ۾ WooCommerce لاءِ payment email غائب ٿي وئي؛

نسخو 1.2.2 - 27/02/2019

* شامل ڪيو ويو: WooCommerce Subscription integration تي setup fees لاءِ support؛

نسخو 1.2.1 - 17/11/2018

* درست ڪيو ويو: Ultimate Multisite version 1.9.0 سان compatibility issues؛

نسخو 1.2.0 - 10/09/2018

* بهتر ڪيو ويو: add-ons لاءِ نئون updates URL؛
* شامل ڪيو ويو: WooCommerce Subscription لاءِ beta support؛

نسخو 1.1.2 - 11/02/2018

* درست ڪيو ويو: Pay جو link WooCommerce endpoints ۾ تبديلين جو جواب ڏيڻ لاءِ dynamically generate ٿي رهيو هو؛
* بهتر ڪيو ويو: هاڻي اسان پنهنجن orders لاءِ completed status کي force ڪريون ٿا جڏهن payment_completed call ٿئي ٿو ته پڪ ٿئي اسان جا renewal hooks تڏهن هلن جڏهن انهن کي هلڻ گهرجي؛

نسخو 1.1.1 - 24/01/2018

* درست ڪيو ويو: هاڻي اهو پڻ جاچ ڪري ٿو ته ڇا WooCommerce رڳو مکيه سائيٽ تي فعال ڪيو ويو آهي؛
* درست ڪيو ويو: آرڊر ٺاهڻ ۾ ٽيڪس شامل ڪرڻ جي اجازت ڏيڻ لاءِ اوور-لوڊنگز شامل ڪيون ويون؛

نسخو 1.1.0 - 04/11/2017

* درست ڪيو ويو: هاڻي انٽيگريشن بٽڻ جو ليبل حقيقت ۾ سيٽنگز جي عڪاسي ڪرڻ لاءِ تبديل ٿئي ٿو. Ultimate Multisite 1.5.0 گهربل آهي؛
* درست ڪيو ويو: WooCommerce انٽيگريشن هاڻي تڏهن به ڪم ڪري ٿي، جڏهن WooCommerce نيٽورڪ تي فعال نه هجي ۽ رڳو مکيه سائيٽ ۾ فعال هجي؛

1.0.0 - شروعاتي رليز
