---
title: Príbeh migračného pracovného toku Sovereign
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Príbeh migrácie suverénnej architektúry

Ultimate Multisite: Multi-Tenancy 1.2.0 pridáva brány pre verifikáciu migrácie pri presmove sa štandardného subportálu do infraštruktúry suverénneho tenanta.

## Pred začiatkom {#before-you-start}

Uistite sa, že máte:

- Aktuálnu zálohu pôvodného portálu.
- Pridaný addon Multi-Tenancy je aktívny.
- Cílovou databázu tenanta, kořenový systém súborov a doménu je pripravená.
- Pripravku pre databázového hosta, ktorá zodpovedá cieľovej produkčnej среde.
- Prístup k vykonávaniu WP-CLI príkazov pre siatku (network).

## Doporučený postup {#recommended-workflow}

1. Priprava cieľovej databázy tenanta a súborového systému.
2. Registrácia alebo aktualizácia nastavení izolácie tenantov.
3. Vykonanie migrácie tenanta.
4. Konfigurácia alebo overenie používateľov tenanta.
5. Oprázdnenie asynchrozných migracyjnych prác (jobs).
6. Vykonanie verifikácie suverénnej migrácie.
7. Navštipovanie tenanta s SSO.
8. Zmena DNS alebo smerovania len po úspešnom prechodu verifikácie.

## Brány pre verifikáciu {#verification-gates}

Postup verifikácie kontroluje migrácia z niekoľkých strán:

- Existuje schéma tenanta a môže byť písaná spisovateľom databázy tenanta.
- Konfigurovaný databázový host má platné prístupy (grants).
- Používatelia tenanta sú prítomní a zodpovedajú očakávanej počtočnú štruktúre používateľov suverénnej instalácie.
- Asynchrozná diaľková váza (push queue) sa môže úspešne oprániť.
- Staré cesty dát na siatku sú už pre tenanta suverénny nepožiadavky.

V prípade neúspokojených verifikácií považujte ich za blokujúce faktory pred spusteniu. Opravte zistený problém s databázou, používateľmi, diaľkovou vázou alebo smerovaním a potom vykonajte verifikáciu znova, než tenanta vystavíte zákazníkom.

## Prvý produkčný návšteva {#first-production-visit}

Po úspešnom prechodu verifikácie použite **Navštipovanie (SSO)** zo obrazovky správy portálu na prvú administratívnu návštevu. Toto potvrdí smerovanie tenanta, spracovanie tokenov SSO, origin pinning a konfiguráciu používateľov na strane tenanta v jednom kontrolovanom kroku.
