---
title: Integriĝo de plurluanteco
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Plurluanteca Integriĝo {#multi-tenancy-integration}

Ultimate Multisite: Plurluanteco 1.2.0 ŝanĝas plurajn integriĝajn kontaktopunktojn por suverenaj luantoj, migra kontrolado, kaj aŭtomatigo de la vivociklo de luantoj.

## Startiga fluo de luanto {#tenant-bootstrap-flow}

Integriĝoj kiuj kreas aŭ modifas luantojn devus sekvi ĉi tiun ordon:

1. Solvu la registran rikordon de la luanto kaj la izolan modelon.
2. Kreu aŭ kontrolu la datumbazan skribilon de la luanto.
3. Startigu la skemon de la luanto.
4. Provizu uzantojn de la luanto.
5. Registru vojigon de la luanto kaj dosiersistemajn vojojn.
6. Rulu migran kontroladon antaŭ ol elmontri la luanton.

Ne supozu, ke suverena luanto povas reuzi la retan datumbazan konekton. Uzu la registron de luantoj kaj skribilajn abstraktaĵojn provizitajn de la aldonaĵo.

## SSO kaj REST hokoj {#sso-and-rest-hooks}

Senstata aŭtomata ensaluto de luanto uzas mallongdaŭrajn tokenojn kun cela aserto, JTI kontraŭ-ripeta protekto, eksvalidiĝa limo, kaj origina fiksado. Integriĝoj kiuj aldonas ensalutajn butonojn aŭ forajn mastrumajn ligilojn devus generi luantajn vizitojn per la subtenata SSO-fluo anstataŭ rekte konstrui URL-ojn por luanta ensaluto.

Retflankaj API-reviziaj eventoj kaj ĉiutagaj resumoj disponeblas por suverenaj luantaj enirejoj. Uzu tiujn protokolojn dum sencimigado de eksteraj sistemoj kiuj vokas vivociklajn endpoint-ojn de luantoj.

## URL-oj por suverenaj klientaj agoj {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 vojigas klientajn agojn de suverenaj luantoj reen al la ĉefa site por account, checkout, fakturado, fakturo, site, ŝablonŝanĝaj, kaj domajn-mapaj fluoj. Integriĝoj kiuj bildigas mastrumajn ligilojn ĉe la luanta flanko devus direkti tiujn agojn al la klienta panelo de la ĉefa site kaj inkluzivi validigitan revenan celon kiam la uzanto devus povi navigi reen al la luanto post kompletigo de la ago.

Uzu la kernan SSO-envolvilon por transdomajnaj mastrumaj ligiloj:

```php
$url = wu_with_sso($main_site_customer_url);
```

La generita URL restas filtrebla per `wu_sso_url`, kiu ricevas la SSO-URL-on, aktualan uzanton, celan site-ID, kaj alidirektan kuntekston. Aldonaĵoj povas uzi tiun filtrilon por aldoni provizant-specifan kuntekston aŭ por anstataŭigi la broker-URL-on konservante la tokenan validigon de Ultimate Multisite.

Ne duobligu membrecan, fakturan, fakturadresan, ŝablonan, aŭ domajn-mastruman staton ene de la suverena luanto. Traktu la tenant dashboard kiel la lanĉilon kaj la klientan panelon de la ĉefa site kiel la sistemon de registro por mastrumataj agoj.

## Migra kontrolado {#migration-verification}

Post kiam migrado aŭ vivocikla integriĝo ŝanĝas datumojn de luanto, rulu la kontrolajn barilojn:

- `wp tenant verify-no-legacy --site=<site-id>` konfirmas ke la luanto ne plu dependas de heredaj retflankaj vojoj.
- `wp tenant verify-sovereign-push --site=<site-id>` konfirmas ke suverenaj push-taskoj povas prilabori kaj malplenigi.

Integriĝoj devus trakti malsukcesintan kontroladon kiel deplojan blokilon kaj eviti marki luanton aktiva ĝis la malsukceso estas solvita.

## Forigo de luanto {#tenant-deletion}

Forigaj fluoj devus voki la malkonstruan vojon de la aldonaĵo por ke datumbazaj akreditaĵoj de luanto estu purigitaj. Eksteraj integriĝoj povas forigi provizantajn rimedojn post kiam malkonstruo sukcesas, sed ne devus forigi gastigajn datumbazojn aŭ dosierujojn dum kontrolado aŭ nesinkronaj push-taskoj ankoraŭ ruliĝas.

## Malrekomendita datumbaza vojigilo {#deprecated-database-router}

La hereda `Database_Router` estis anstataŭigita per malrekomendiga stumpo. Novaj integriĝoj devus solvi luantojn per la aktualaj site-vojigilo kaj API-oj de la registro de luantoj anstataŭ dependi de la malnova vojigila klaso.
