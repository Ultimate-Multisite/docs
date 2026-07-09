---
title: WooCommerce انضمام کی تبدیلیوں کی فہرست
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# WooCommerce Integration تبدیلیوں کا ریکارڈ {#woocommerce-integration-changelog}

Version 2.2.0 - 2026-07-01 کو جاری کیا گیا
* نیا: Ultimate Multisite ٹیکس رقوم اب checkout پر علیحدہ WooCommerce fee لائنوں کے طور پر ظاہر ہوتی ہیں، جس سے payment سے پہلے ٹیکس کے مجموعے زیادہ واضح ہو جاتے ہیں۔
* نیا: "Suspend Memberships Immediately on Failed Renewals" setting اور `wu_woo_suspend_on_payment_failure` filter شامل کیا گیا، ان sites کے لیے جو WooCommerce Subscriptions retry window کے دوران failed-renewal suspension چاہتے ہیں۔
* درستگی: WooCommerce Subscription statuses کو ہم آہنگ کیا گیا جو ناکام یا بحال شدہ renewals کے بعد Ultimate Multisite memberships کے ساتھ sync سے باہر رہ سکتے تھے۔
* درستگی: جب Ultimate Multisite currency list میں WooCommerce store currency موجود نہیں تھی تو اسے شامل کیا گیا۔
* درستگی: subscribers کو WooCommerce checkout پر redirect کرتے وقت customer billing details محفوظ رکھی گئیں۔
* بہتری: Jetpack Autoloader 5 کے ساتھ compatibility شامل کی گئی۔
* بہتری: release package generation کو صاف کیا گیا تاکہ GitHub اور marketplace zips میں nested staging directories اور development files شامل نہ ہوں۔

Version 2.0.6 - 2026-01-16 کو جاری کیا گیا
* بہتری: addon میں core subscriptions شامل کریں۔ اب Woocommerce Subscriptinos extension کی ضرورت نہیں رہی۔

Version 2.0.5 - 2026-01-09 کو جاری کیا گیا
* بہتری: glotpress API سے translations load کریں۔
* درستگی: کچھ page builders میں fatal error۔
* درستگی: جب customer main site کا member ہو تو infinite redirect۔

Version 2.0.4 - 2025-11-14 کو جاری کیا گیا
* شامل کیا گیا: بہت سی مزید زبانوں کے لیے translations۔
* تبدیل کیا گیا: نام بدل کر Ultimate Multisite: Woocommerce Integration رکھا گیا۔
* شامل کیا گیا: Woocommerce 10.2.1 کے ساتھ compatibility۔
* شامل کیا گیا: Woocommerce Subscriptions 7.7.0 کے ساتھ compatibility۔
* درستگی: PHP 8.4 کے ساتھ compatibility
* درستگی: Redirect مگر جب کوئی WC account page موجود نہ ہو۔

Version 2.0.3 - 2025-08-13 کو جاری کیا گیا
* تبدیل کیا گیا: نئے marketplace کے ساتھ automatic updates فعال کیے گئے۔

Version 2.0.2 - 2025-07-05 کو جاری کیا گیا
* تبدیل کیا گیا: نام بدل کر Multisite Ultimate: Woocommerce Integration رکھا گیا۔
* شامل کیا گیا: Woocommerce 9.8.1 کے ساتھ compatibility۔
* شامل کیا گیا: Woocommerce Subscriptions 7.3.0 کے ساتھ compatibility۔
* درستگی: customer کی طرف سے subscription منسوخ کرنا۔
* درستگی: checkout block استعمال کرتے وقت fatal error۔
* بہتری: اب Woocommerce high performance custom order tables کے ساتھ compatible ہے۔
* درستگی: WooCommerce checkout پر منسوخی پھر بھی membership کو upgrade کر سکتی ہے۔

Version 2.0.1 - 2023-08-09 کو جاری کیا گیا

* شامل کیا گیا: Woocommerce 7.9.0 کے ساتھ compatibility۔
* شامل کیا گیا: Woocommerce Subscriptions 5.3.0 کے ساتھ compatibility۔
* شامل کیا گیا: membership updates کے لیے support۔
* شامل کیا گیا: Woocommerce میں trials اور setup fees کے بارے میں notices۔
* شامل کیا گیا: meta value کے ساتھ Ultimate Multisite Woocommerce products کی identification۔
* شامل کیا گیا: تمام Ultimate Multisite related Woocommerce products کو mark کرنے کے لیے ایک one-time fix داخل کیا گیا۔
* شامل کیا گیا: Ultimate Multisite کے created products کو Woocommerce list سے removed کیا گیا۔
* بہتری: cart پر apply کرنے کے لیے ایک non-recurring Woocommerce discount بنایا گیا۔
* بہتری: recurring discount کو Woocommerce product پر بحال کیا گیا۔
* بہتری: Woocommerce product پر recurring discount label شامل کیا گیا۔
* بہتری: checkout پر product type کو یقینی بنایا گیا۔
* درستگی: downgrade process کے دوران membership status برقرار رکھا گیا۔
* درستگی: cancellation process کے دوران errors سے بچنے کے لیے چیک کیا گیا کہ subscription موجود ہے یا نہیں۔
* درستگی: Woocommerce subscriptions میں استعمال کے لیے start subscription date شامل کی گئی۔
* داخلی: نیا PHP 8.1 build process نافذ کیا گیا۔

Version 2.0.0 - مکمل دوبارہ تحریر۔

* شامل کیا گیا: gateway تبدیل کرتے وقت یا membership منسوخ کرتے وقت woo subscription کو remove کرنے کے لیے process cancellation method؛
* شامل کیا گیا: memberships کو downgrade اور upgrade کرنے کے لیے handler؛
* بہتری: account update کی اجازت دینے کے لیے subsites میں customer update form پر woocommerce dependencies load کریں؛
* بہتری: اگر موجود نہ ہو تو Woocommerce cart درست طور پر load کریں؛
* بہتری: checkout process کرتے وقت یقینی بنائیں کہ ہم main site tables پر ہیں؛
* بہتری: Ultimo renewal order کو Woocommerce subscription order value کی بنیاد پر بنائیں، last payment سے نہیں؛
* درستگی: WU Membership button link؛
* درستگی: جب Woocommerce subscriptions renewal paid ہو تو Ultimo order کو paid کے طور پر set کریں؛
* Build: MPB کو builder کے طور پر شامل کریں؛

Version 2.0.0-beta-5 - 2022-01-21 کو جاری کیا گیا

* داخلی: hooks اور filters generator شامل کیا گیا؛
* داخلی: developer quality of life کے لیے Ultimate Multisite stubs شامل کیے گئے؛
* درستگی: جب ضروری نہ ہو تو multiple products کی creation کو روکا گیا؛

Version 2.0.0-beta.4 - 2021-09-23

* درستگی: WooCommerce کو صرف main site کے بجائے network active ہونا required کیا گیا؛
* بہتری: add-on کو mu-plugin کے طور پر استعمال کرنے کی اجازت دینے کے لیے filter شامل کیا گیا؛

Version 2.0.0-beta.3 - 2021-05-28

* درستگی: dashboard access control بہت aggressive تھا؛
* بہتری: Ultimate Multisite top-menu میں WooCommerce help links شامل کیے گئے؛

Version 2.0.0-beta.2 - 2021-05-04

* بہتری: WCS renewal order creation پر Ultimo میں pending payments بناتا ہے؛
* بہتری: billing fields کو Ultimate Multisite customer data سے pre-fill کرتا ہے؛
* بہتری: gateways کے لیے billing fields واپس شامل کرتا ہے؛

Version 2.0.0-beta.1 - 2021-05-04

* ابتدائی beta release

-- Legacy Versions --

Version 1.2.6 - 26/03/2020

* درستگی: WooCommerce Subscriptions کے نئے versions کے ساتھ چھوٹی incompatibility؛

Version 1.2.5 - 26/08/2019

* درستگی: پچھلی release میں error؛

Version 1.2.4 - 22/08/2019

* بہتری: integration کے فوراً بعد WooCommerce checkout screen پر redirect کرنے کا option شامل کیا گیا؛

Version 1.2.3 - 26/05/2019

* درستگی: WooCommerce کے لیے payment email کچھ edge cases میں غائب ہو گیا تھا؛

Version 1.2.2 - 27/02/2019

* شامل کیا گیا: WooCommerce Subscription integration پر setup fees کے لیے support؛

Version 1.2.1 - 17/11/2018

* درستگی: Ultimate Multisite version 1.9.0 کے ساتھ compatibility issues؛

Version 1.2.0 - 10/09/2018

* بہتری: add-ons کے لیے نیا updates URL؛
* شامل کیا گیا: WooCommerce Subscription کے لیے beta support؛

Version 1.1.2 - 11/02/2018

* درستگی: WooCommerce endpoints میں changes کا جواب دینے کے لیے Pay کا link dynamically generate کیا جا رہا ہے؛
* بہتری: اب ہم اپنے orders کے لیے completed status force کرتے ہیں جب payment_completed called ہو تاکہ یقینی بنایا جا سکے کہ ہمارے renewal hooks اسی وقت run ہوں جب انہیں ہونا چاہیے؛

Version 1.1.1 - 24/01/2018

* درست کیا گیا: اب یہ یہ بھی چیک کرتا ہے کہ آیا WooCommerce صرف مرکزی سائٹ پر فعال کیا گیا ہے؛
* درست کیا گیا: آرڈر بنانے میں ٹیکس شامل کرنے کی اجازت دینے کے لیے over-loadings شامل کی گئیں؛

Version 1.1.0 - 04/11/2017

* درست کیا گیا: اب انٹیگریشن بٹن کا لیبل واقعی ترتیبات کی عکاسی کے لیے بدلتا ہے۔ Ultimate Multisite 1.5.0 درکار ہے؛
* درست کیا گیا: WooCommerce Integration اب اس صورت میں بھی کام کرتا ہے جب WooCommerce نیٹ ورک پر فعال نہ ہو اور صرف مرکزی سائٹ میں فعال کیا گیا ہو؛

1.0.0 - ابتدائی ریلیز
