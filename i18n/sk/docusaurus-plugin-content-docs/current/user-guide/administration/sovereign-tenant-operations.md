---
title: Operácie pre suverénneho najemcu
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Operácie s suverénnymi najemcami

Ultimate Multisite: Multi-Tenancy 1.2.0 pridáva operačné nástroje pre suverénne najemce: subsity, ktoré sa bežia so svojou vlastnou databázou, koreňovým systémom súborov a kontextom smerovania (routing), pričom zostávajú viditeľné pre administrátora siete.

Použite túto stránku pri správe izolovaných zákazníckych sítí, prechodech na vzdialené sity alebo migráciách, ktoré pres move štandardnej subsity do suverénnej infraštruktúry.

## Zmeny pre administrátorov

- **Stateless tenant autologin** — Administratéři siete môžu navštíviť suverénneho najemcu bez toho, aby sa spoliehali na dlhodobý stav spracovania (session state). Token SSO je určený pre konkrétny účel, zadaný originálom, chránený pred opakovaním a obmedzený krátkou expiráciou.
- **Sovereign-aware routing** — Staré izolované siete a suverénne najemci sa riešia cez rovnakú cestu v routere stránky (site router path), čo zníži rozdielov pri štartovaní medzi starými a novými izolovanými inštalámi.
- **Verified migration state** — Verifikácia migrácie kontroluje poskytovanie používateľských účtov, prístupové práva spisovateľov databázy, stav vyčerpania kolejky (queue drain status) a chýbajúce tabuľky z dôvodu starých systémov, než sa najemca považuje za kompletný.
- **Safer teardown** — Odstránenie suverénneho najemcu teraz čistí sprístupnené údaje najemcu, aby neostali v starších databázach po odstránení najemcov.

## Navštiekanie suverénneho najemcu

1. Otvorte **Network Admin > Ultimate Multisite > Sites**.
2. Vyberte suverénneho najemcu.
3. Použite **Visit (SSO)**, ak je to možné, namiesto kopírovania hesiel alebo vytvárania dočasných admin účtov.

Tento proces navštívenia vytvorí krátkodobý login token pre daného najemcu a zaznamená udar SSO v auditovom zázname najemcu. Ak sa tlačidlo neprejde, skontrolujte, či doména najemcu rieši očakávanú inštaláciu a či môže najemca prístupť k bodovi SSO na strane siete.

## Kontrolný zoznam operácií vzdialeného sity

Pred zmenou suverénneho alebo vzdialeného najemcu potvrďte:

- Doména najmu ukazuje na host, ktorý vlastní súborový systém najmu.
- Host pre databázu najmu zodpovedá nastavenému pripojeniu hosta pre túto instaláciu.
- Komandáre overovania migrácie pre najma sú úspešné.
- Asynchrónne vákuové riadky migrácie sa vyčerpania, než sa vykonajú zmeny DNS alebo vlastníctva.
- Používateľ administrátor najmu bol vytvorený počas migrácie a môže sa prihlásiť cez SSO.

## Odstránenie suverénnych najmovateľov (sovereign tenants)

Odstránenie suverénneho najma je zničujúce. Prv si uistite, že máte zálohu a export, potom ho odstráňte z obrazovky správy siete. Tok flow odstraňovania verzie 1.2.0 odstráni hesla pre databázy najmu ako súčasť čistenia, ale administrátor by mal stále overiť, či sú už odstránené používatelia a adresá v systéme databázy na úrovni hosta pri používaní externých panelov pre hostovanie.

:::warning
Neodstrániavajte suverénneho najma, ak je verifikácia migrácie ešte v priebehu alebo ak sú vákuové úlohy push stále v riadku. Čakajte, aby si verifikácia dokončila, aby odstraňovanie neodstránilo hesla potrebná pre čakané úlohy.
:::
