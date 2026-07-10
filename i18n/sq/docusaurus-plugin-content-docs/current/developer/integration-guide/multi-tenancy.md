---
title: Integrimi i shumë-qiramarrjes
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Integrimi Multi-Tenancy {#multi-tenancy-integration}

Ultimate Multisite: Multi-Tenancy 1.2.0 ndryshon disa pika integrimi për qiramarrës sovranë, verifikimin e migrimit dhe automatizimin e ciklit jetësor të qiramarrësit.

## Rrjedha e nisjes së qiramarrësit {#tenant-bootstrap-flow}

Integrimet që krijojnë ose modifikojnë qiramarrës duhet të ndjekin këtë rend:

1. Zgjidhni regjistrin e qiramarrësit dhe modelin e izolimit.
2. Krijoni ose verifikoni shkruesin e bazës së të dhënave të qiramarrësit.
3. Nisni skemën e qiramarrësit.
4. Siguroni përdoruesit e qiramarrësit.
5. Regjistroni rrugëzimin dhe shtigjet e sistemit të skedarëve të qiramarrësit.
6. Ekzekutoni verifikimin e migrimit përpara se ta ekspozoni qiramarrësin.

Mos supozoni se një qiramarrës sovran mund të ripërdorë lidhjen e bazës së të dhënave të rrjetit. Përdorni regjistrin e qiramarrësve dhe abstraksionet e shkruesit të ofruara nga shtesa.

## SSO dhe REST hooks {#sso-and-rest-hooks}

Autologin pa gjendje i qiramarrësit përdor tokenë jetëshkurtër me një pretendim qëllimi, mbrojtje nga ripërdorimi JTI, kufi skadimi dhe fiksim të origjinës. Integrimet që shtojnë butona hyrjeje ose lidhje menaxhimi në distancë duhet të gjenerojnë vizita të qiramarrësit përmes rrjedhës së mbështetur SSO, në vend që të ndërtojnë drejtpërdrejt URL hyrjeje të qiramarrësit.

Ngjarjet e auditimit të API-së në anën e rrjetit dhe përmbledhjet ditore janë të disponueshme për gateway-t e qiramarrësve sovranë. Përdorni ato regjistra kur diagnostikoni sisteme të jashtme që thërrasin endpoint-e të ciklit jetësor të qiramarrësit.

## URL-të e veprimeve të klientit sovran {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 i rrugëzon veprimet e klientit të qiramarrësit sovran përsëri te sajti kryesor për rrjedhat e llogarisë, checkout, faturimit, faturës, sajtit, ndërrimit të shabllonit dhe hartëzimit të domenit. Integrimet që shfaqin lidhje menaxhimi në anën e qiramarrësit duhet t’i drejtojnë ato veprime te paneli i klientit në sajtin kryesor dhe të përfshijnë një objektiv kthimi të validuar kur përdoruesi duhet të jetë në gjendje të kthehet te qiramarrësi pas përfundimit të veprimit.

Përdorni mbështjellësin bazë SSO për lidhjet e menaxhimit ndër-domain:

```php
$url = wu_with_sso($main_site_customer_url);
```

URL-ja e gjeneruar mbetet e filtrueshme përmes `wu_sso_url`, i cili merr URL-në SSO, përdoruesin aktual, ID-në e sajtit të synuar dhe kontekstin e ridrejtimit. Shtesat mund ta përdorin atë filtër për të shtuar kontekst specifik për ofruesin ose për të zëvendësuar URL-në e brokerit duke ruajtur validimin e tokenit të Ultimate Multisite.

Mos dyfishoni gjendjen e anëtarësimit, faturës, adresës së faturimit, shabllonit ose menaxhimit të domenit brenda qiramarrësit sovran. Trajtojeni dashboard-in e qiramarrësit si nisësin dhe panelin e klientit në sajtin kryesor si sistemin e të dhënave zyrtare për veprimet e menaxhuara.

## Verifikimi i migrimit {#migration-verification}

Pas një migrimi ose pasi një integrim i ciklit jetësor ndryshon të dhënat e qiramarrësit, ekzekutoni portat e verifikimit:

- `wp tenant verify-no-legacy --site=<site-id>` konfirmon se qiramarrësi nuk varet më nga shtigjet e vjetra në anën e rrjetit.
- `wp tenant verify-sovereign-push --site=<site-id>` konfirmon se punët sovereign push mund të përpunohen dhe të zbrazen.

Integrimet duhet ta trajtojnë verifikimin e dështuar si bllokues shpërndarjeje dhe të shmangin shënimin e një qiramarrësi si aktiv derisa dështimi të zgjidhet.

## Fshirja e qiramarrësit {#tenant-deletion}

Rrjedhat e fshirjes duhet të thërrasin shtegun e çmontimit të shtesës në mënyrë që kredencialet e bazës së të dhënave të qiramarrësit të pastrohen. Integrimet e jashtme mund të heqin burimet e ofruesit pasi çmontimi të ketë sukses, por nuk duhet të fshijnë bazat e të dhënave ose dosjet e hostit ndërkohë që verifikimi ose punët asinkrone push janë ende duke u ekzekutuar.

## Router-i i vjetëruar i bazës së të dhënave {#deprecated-database-router}

`Database_Router` i vjetër është zëvendësuar nga një stub vjetërsimi. Integrimet e reja duhet t’i zgjidhin qiramarrësit përmes API-ve aktuale të router-it të sajtit dhe regjistrit të qiramarrësve, në vend që të varen nga klasa e vjetër e router-it.
