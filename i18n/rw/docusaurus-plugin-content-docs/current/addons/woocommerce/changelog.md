---
title: Urutonde rw'impinduka z'Ihuzwa rya WooCommerce
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# Amateka y’impinduka za WooCommerce Integration

Version 2.2.0 - Yasohotse ku 2026-07-01
* Gishya: Imibare y’imisoro ya Ultimate Multisite ubu igaragara nk’imirongo y’amafaranga ya WooCommerce atandukanye kuri checkout, bigatuma igiteranyo cy’imisoro kirushaho gusobanuka mbere yo kwishyura.
* Gishya: H added igenamiterere ryo guhitamo "Suspend Memberships Immediately on Failed Renewals" na filter `wu_woo_suspend_on_payment_failure` ku mbuga zishaka guhagarika membership igihe kongera kwishyura binaniranye mu gihe cya retry cya WooCommerce Subscriptions.
* Gukosora: Hahujwe statuses za WooCommerce Subscription zashoboraga kuguma zidahuye na memberships za Ultimate Multisite nyuma yo kongera kwishyura byananiranye cyangwa byagaruwe.
* Gukosora: H added amafaranga akoreshwa n’iduka rya WooCommerce ku rutonde rw’amafaranga rwa Ultimate Multisite igihe yaburagaho.
* Gukosora: Habitswe amakuru ya billing y’umukiriya igihe subscribers boherezwaga kuri WooCommerce checkout.
* Byanogejwe: H added guhuza na Jetpack Autoloader 5.
* Byanogejwe: Hasukuwe uburyo bwo gukora release package kugira ngo zips za GitHub n’amasoko birinde ububiko bwa staging bwinjiranamo na dosiye z’iterambere.

Version 2.0.6 - Yasohotse ku 2026-01-16
* Kunonosora: Shyiramo core subscriptions muri addon. Ntibigisaba extension ya Woocommerce Subscriptinos.

Version 2.0.5 - Yasohotse ku 2026-01-09
* Kunonosora: Tangiza translations zivuye kuri glotpress API.
* Gukosora: Ikosa rikomeye muri bamwe mu bubatsi b’impapuro.
* gukosora: Redirect idashira igihe umukiriya ari member w’urubuga nyamukuru.

Version 2.0.4 - Yasohotse ku 2025-11-14
* H added: Translations z’indimi nyinshi kurushaho.
* Byahinduwe: Yahinduriwe izina iba Ultimate Multisite: Woocommerce Integration.
* H added: Guhuza na Woocommerce 10.2.1.
* H added: Guhuza na Woocommerce Subscriptions 7.7.0.
* Gukosora: Guhuza na PHP 8.4
* Gukosora: Redirect ariko igihe nta paji ya WC account ihari.

Version 2.0.3 - Yasohotse ku 2025-08-13
* Byahinduwe: Hashyizweho updates zikora mu buryo bwikora hamwe n’isoko rishya.

Version 2.0.2 - Yasohotse ku 2025-07-05
* Byahinduwe: Yahinduriwe izina iba Multisite Ultimate: Woocommerce Integration.
* H added: Guhuza na Woocommerce 9.8.1.
* H added: Guhuza na Woocommerce Subscriptions 7.3.0.
* Gukosora: Gusesa subscription n’umukiriya.
* Gukosora: Ikosa rikomeye igihe ukoresha checkout block.
* Kunonosora: Ubu ihuza na custom order tables za Woocommerce zifite imikorere yihuse.
* Gukosora: Gusesa kuri WooCommerce checkout biracyashobora kuzamura membership.

Version 2.0.1 - Yasohotse ku 2023-08-09

* H added: Guhuza na Woocommerce 7.9.0.
* H added: Guhuza na Woocommerce Subscriptions 5.3.0.
* H added: Gushyigikira updates za membership.
* H added: Notices zerekeye trials na setup fees muri Woocommerce.
* H added: Kumenya products za Ultimate Multisite Woocommerce hakoreshejwe meta value.
* H added: Hashyizwemo igisubizo cya rimwe cyo gushyiraho ikimenyetso kuri products zose za Woocommerce zifitanye isano na Ultimate Multisite.
* H added: Hakuwe products zakozwe na Ultimate Multisite ku rutonde rwa Woocommerce.
* Kunonosora: Hakozwe discount ya Woocommerce idasubirwamo kugira ngo ikoreshwe kuri cart.
* Kunonosora: Hagaruwe discount isubirwamo kuri product ya Woocommerce.
* Kunonosora: H added label ya discount isubirwamo kuri product ya Woocommerce.
* Kunonosora: Hemejwe ubwoko bwa product kuri checkout.
* Gukosora: Hagumishijwe status ya membership mu gihe cya downgrade process.
* Gukosora: Hegenzuwe niba subscription ibaho kugira ngo hirindwe amakosa mu gihe cya cancellation process.
* Gukosora: H added itariki yo gutangira subscription ikoreshwa muri Woocommerce subscriptions.
* Imbere: Hashyizwe mu bikorwa uburyo bushya bwo kubaka bwa PHP 8.1.

Version 2.0.0 - Kwandikwa bundi bushya byuzuye.

* H added: Uburyo bwo gukora cancellation kugira ngo ikureho woo subscription igihe uhinduye gateway cyangwa usesa membership;
* H added: Handler yo gukora downgrade na upgrade za memberships;
* Kunonosora: Tangiza dependencies za woocommerce kuri customer update form mu mbuga z’inyongera kugira ngo account update ishoboke;
* Kunonosora: Tangiza neza cart ya Woocommerce niba itabaho;
* Kunonosora: Emeza ko turi ku tables z’urubuga nyamukuru igihe dukora checkout;
* Kunonosora: Kora order yo kongera kwishyura ya Ultimo ishingiye ku gaciro ka order ya Woocommerce subscription atari ku kwishyura kwa nyuma;
* Gukosora: Ihuza rya buto ya Go to WU Membership;
* Gukosora: Shyira Ultimo order nka yishyuwe igihe renewal ya Woocommerce subscriptions yamaze kwishyurwa;
* Kubaka: H added MPB nka builder;

Version 2.0.0-beta-5 - Yasohotse ku 2022-01-21

* Imbere: H added generator ya hooks na filters;
* Imbere: H added stubs za Ultimate Multisite zigamije koroshya ubuzima bw’abakora development;
* Byakosowe: Irinde gukora products nyinshi igihe bidakenewe;

Version 2.0.0-beta.4 - 2021-09-23

* Gukosora: gusaba ko WooCommerce iba network active aho kuba ku rubuga nyamukuru gusa;
* Kunonosora: h added filter yemerera add-on gukoreshwa nka mu-plugin;

Version 2.0.0-beta.3 - 2021-05-28

* Gukosora: access control ya dashboard yari ikaze cyane;
* Kunonosora: H added amahuza y’ubufasha ya WooCommerce kuri top-menu ya Ultimate Multisite;

Version 2.0.0-beta.2 - 2021-05-04

* Kunonosora: ikora pending payments kuri Ultimo igihe WCS renewal order ikorwa;
* Kunonosora: yuzuza mbere billing fields ikoresheje amakuru y’umukiriya ya Ultimate Multisite;
* Kunonosora: isubizaho billing fields za gateways;

Version 2.0.0-beta.1 - 2021-05-04

* Isohoka rya mbere rya beta

-- Versions za kera --

Version 1.2.6 - 26/03/2020

* Byakosowe: Kudahuza gato na versions nshya za WooCommerce Subscriptions;

Version 1.2.5 - 26/08/2019

* Byakosowe: Ikosa ryo kuri release ibanziriza iyi;

Version 1.2.4 - 22/08/2019

* Byanogejwe: H added option yo guhita yohereza kuri screen ya WooCommerce checkout nyuma ya integration ako kanya;

Version 1.2.3 - 26/05/2019

* Byakosowe: Email yo kwishyura ya WooCommerce yaburaga mu bihe bimwe bidasanzwe;

Version 1.2.2 - 27/02/2019

* H added: Gushyigikira setup fees kuri WooCommerce Subscription integration;

Version 1.2.1 - 17/11/2018

* Byakosowe: Ibibazo byo guhuza na Ultimate Multisite version 1.9.0;

Version 1.2.0 - 10/09/2018

* Byanogejwe: URL nshya ya updates ya add-ons;
* H added: Gushyigikira WooCommerce Subscription mu buryo bwa beta;

Version 1.1.2 - 11/02/2018

* Byakosowe: Ihuza rya Pay rikorerwa mu buryo bwa dynamic kugira ngo risubize impinduka za endpoints za WooCommerce;
* Byanogejwe: Ubu duhatira status completed ku orders zacu igihe payment_completed ihamagawe kugira ngo twizere ko renewal hooks zacu zikora igihe bikwiye;

Version 1.1.1 - 24/01/2018

* Byakosowe: Ubu inagenzura niba WooCommerce imaze gufungurwa ku rubuga nyamukuru gusa;
* Byakosowe: Hashyizwemo over-loadings kugira ngo kurema itegeko bibashe kubamo imisoro;

Version 1.1.0 - 04/11/2017

* Byakosowe: Ubu label ya buto yo guhuza ihinduka koko kugira ngo igaragaze igenamiterere. Bisaba Ultimate Multisite 1.5.0;
* Byakosowe: WooCommerce Integration ubu ikora no mu gihe WooCommerce itari network active kandi yafunguwe gusa ku rubuga nyamukuru;

1.0.0 - Isohora rya mbere
