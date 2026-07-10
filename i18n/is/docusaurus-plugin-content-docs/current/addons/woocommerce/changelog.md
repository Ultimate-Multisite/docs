---
title: Breytingaskrá WooCommerce-samþættingar
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# Breytingaskrá WooCommerce-samþættingar {#woocommerce-integration-changelog}

Útgáfa 2.2.0 - Gefin út 2026-07-01
* Nýtt: Skattupphæðir Ultimate Multisite birtast nú sem aðskildar WooCommerce gjaldalínur í checkout, sem gerir skattasamtölur skýrari fyrir greiðslu.
* Nýtt: Bætt við valkvæðri stillingu "Fresta Memberships strax við misheppnaðar endurnýjanir" og `wu_woo_suspend_on_payment_failure` filter fyrir site sem vilja frestun við misheppnaða endurnýjun á meðan WooCommerce Subscriptions endurtilraunagluggi er opinn.
* Lagfæring: Samræmdi stöður WooCommerce Subscription sem gátu haldist ósamstilltar við Ultimate Multisite memberships eftir misheppnaðar eða endurheimtar endurnýjanir.
* Lagfæring: Bætti gjaldmiðli WooCommerce-verslunarinnar við gjaldmiðlalista Ultimate Multisite þegar hann vantaði.
* Lagfæring: Varðveitti reikningsupplýsingar viðskiptavina þegar áskrifendum er beint áfram í WooCommerce checkout.
* Bætt: Bætt við samhæfni við Jetpack Autoloader 5.
* Bætt: Hreinsaði gerð útgáfupakka svo GitHub- og markaðstorgs-zip forðist hreiðraðar staging-möppur og þróunarskrár.

Útgáfa 2.0.6 - Gefin út 2026-01-16
* Bæting: Innifela kjarnaáskriftir í addon. Krefst ekki lengur WooCommerce Subscriptinos-viðbótarinnar.

Útgáfa 2.0.5 - Gefin út 2026-01-09
* Bæting: Hlaða þýðingum úr glotpress API.
* Lagfæring: Banvæn villa í sumum page builders.
* Lagfæring: Óendanleg endurbeining þegar viðskiptavinurinn er meðlimur á aðal-site.

Útgáfa 2.0.4 - Gefin út 2025-11-14
* Bætt við: Þýðingar fyrir mun fleiri tungumál.
* Breytt: Endurnefnt í Ultimate Multisite: WooCommerce Integration.
* Bætt við: Samhæfni við WooCommerce 10.2.1.
* Bætt við: Samhæfni við WooCommerce Subscriptions 7.7.0.
* Lagfæring: Samhæfni við PHP 8.4
* Lagfæring: Endurbeining þegar engin WC account-síða er til.

Útgáfa 2.0.3 - Gefin út 2025-08-13
* Breytt: Virkjaði sjálfvirkar uppfærslur með nýju markaðstorgi.

Útgáfa 2.0.2 - Gefin út 2025-07-05
* Breytt: Endurnefnt í Multisite Ultimate: WooCommerce Integration.
* Bætt við: Samhæfni við WooCommerce 9.8.1.
* Bætt við: Samhæfni við WooCommerce Subscriptions 7.3.0.
* Lagfæring: Viðskiptavinur hættir við áskrift.
* Lagfæring: Banvæn villa þegar checkout-block er notað.
* Bæting: Nú samhæft við sérsniðnar WooCommerce pöntunartöflur með mikilli afköst.
* Lagfæring: Að hætta við í WooCommerce checkout getur enn uppfært membership.

Útgáfa 2.0.1 - Gefin út 2023-08-09

* Bætt við: Samhæfni við WooCommerce 7.9.0.
* Bætt við: Samhæfni við WooCommerce Subscriptions 5.3.0.
* Bætt við: Stuðningur við uppfærslur á membership.
* Bætt við: Tilkynningar um prufutímabil og uppsetningargjöld í WooCommerce.
* Bætt við: Auðkenning á Ultimate Multisite WooCommerce vörum með meta-gildi.
* Bætt við: Setti inn einu sinni lagfæringu til að merkja allar WooCommerce vörur tengdar Ultimate Multisite.
* Bætt við: Fjarlægði vörur búnar til af Ultimate Multisite úr WooCommerce-listanum.
* Bæting: Bjó til einnota WooCommerce afslátt til að beita á körfuna.
* Bæting: Endurheimti endurtekna afsláttinn á WooCommerce vöruna.
* Bæting: Bætti endurteknu afsláttarmiði við WooCommerce vöruna.
* Bæting: Tryggði vörutegund í checkout.
* Lagfæring: Viðhélt stöðu membership í niðurfærsluferlinu.
* Lagfæring: Athugaði hvort áskrift væri til til að forðast villur í niðurfellingarferlinu.
* Lagfæring: Bætti upphafsdegi áskriftar við til notkunar í WooCommerce subscriptions.
* Innra: Innleiddi nýtt PHP 8.1 smíðaferli.

Útgáfa 2.0.0 - Algjör endurskrifun.

* Bætt við: Vinnsluaðferð fyrir niðurfellingu til að fjarlægja woo-áskrift þegar gateway er breytt eða membership er sagt upp;
* Bætt við: Handler til að niðurfæra og uppfæra memberships;
* Bæting: Hlaða WooCommerce-háðum á uppfærsluformi viðskiptavinar í undir-site til að leyfa account-uppfærslu;
* Bæting: Rétt hleðsla á WooCommerce-körfu ef hún er ekki til;
* Bæting: Tryggja að við séum á töflum aðal-site þegar checkout er unnið;
* Bæting: Láta Ultimo endurnýjunarpöntun byggjast á pöntunargildi WooCommerce subscription en ekki síðustu greiðslu;
* Lagfæring: Hlekkur á WU Membership-hnapp;
* Lagfæring: Merkja Ultimo-pöntun sem greidda þegar endurnýjun WooCommerce subscriptions hefur verið greidd;
* Smíði: Bæta MPB við sem builder;

Útgáfa 2.0.0-beta-5 - Gefin út 2022-01-21

* Innra: Bætt við hooks- og filters-generator;
* Innra: Bætt við Ultimate Multisite stubs fyrir betri lífsgæði þróunaraðila;
* Lagfært: Koma í veg fyrir að margar vörur séu búnar til þegar þess er ekki þörf;

Útgáfa 2.0.0-beta.4 - 2021-09-23

* Lagfæring: krefjast þess að WooCommerce sé virkt á neti í stað þess að vera aðeins virkt á aðal-site;
* Bæting: bætti við filter til að leyfa að addon sé notað sem mu-plugin;

Útgáfa 2.0.0-beta.3 - 2021-05-28

* Lagfæring: aðgangsstýring dashboard var of ágeng;
* Bæting: Bætti WooCommerce hjálparhlekkjum við efstu valmynd Ultimate Multisite;

Útgáfa 2.0.0-beta.2 - 2021-05-04

* Bæting: býr til óafgreiddar greiðslur í Ultimo við stofnun WCS endurnýjunarpöntunar;
* Bæting: fyllir út reikningsreiti fyrirfram með viðskiptavinagögnum Ultimate Multisite;
* Bæting: bætir reikningsreitum aftur við fyrir gateways;

Útgáfa 2.0.0-beta.1 - 2021-05-04

* Fyrsta beta-útgáfa

-- Eldri útgáfur --

Útgáfa 1.2.6 - 26/03/2020

* Lagfært: Lítið ósamræmi við nýrri útgáfur af WooCommerce Subscriptions;

Útgáfa 1.2.5 - 26/08/2019

* Lagfært: Villa í fyrri útgáfu;

Útgáfa 1.2.4 - 22/08/2019

* Bætt: Bætt við valkosti til að beina strax á WooCommerce checkout-skjá eftir samþættingu;

Útgáfa 1.2.3 - 26/05/2019

* Lagfært: Greiðslutölvupóstur fyrir WooCommerce hvarf í sumum jaðartilvikum;

Útgáfa 1.2.2 - 27/02/2019

* Bætt við: Stuðningur við uppsetningargjöld í WooCommerce Subscription-samþættingunni;

Útgáfa 1.2.1 - 17/11/2018

* Lagfært: Samhæfnisvandamál við Ultimate Multisite útgáfu 1.9.0;

Útgáfa 1.2.0 - 10/09/2018

* Bætt: Ný updates URL fyrir add-ons;
* Bætt við: Beta-stuðningur við WooCommerce Subscription;

Útgáfa 1.1.2 - 11/02/2018

* Lagfært: Hlekkur til greiðslu er myndaður kvikt til að bregðast við breytingum á WooCommerce endpoints;
* Bætt: Við þvingum nú lokna stöðu fyrir pantanir okkar þegar payment_completed er kallað til að tryggja að endurnýjunar-hooks okkar keyri þegar þeir eiga að gera það;

Útgáfa 1.1.1 - 24/01/2018

* Lagað: Nú athugar það einnig hvort WooCommerce sé nývirkjað á aðalsíðunni;
* Lagað: Yfirhleðslur teknar með til að leyfa stofnun pantana með sköttum;

Útgáfa 1.1.0 - 04/11/2017

* Lagað: Nú breytist merking samþættingarhnappsins í raun til að endurspegla stillingarnar. Krefst Ultimate Multisite 1.5.0;
* Lagað: WooCommerce Integration virkar nú jafnvel þótt WooCommerce sé ekki virkt á netinu og aðeins virkjað á aðalsíðunni;

1.0.0 - Upphafleg útgáfa
