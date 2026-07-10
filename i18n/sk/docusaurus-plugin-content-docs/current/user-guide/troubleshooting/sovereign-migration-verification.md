---
title: Vzťahová verifikácia migrácii
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Verifikácia migrácií suverénnych domén {#sovereign-migration-verification}

Ultimate Multisite: Multi-Tenancy 1.2.0 obsahuje WP-CLI príkazové možnosti verifikácie pre migráции suverénnych domén. Použite ich, ak sa migracia domény, návšteva s SSO alebo izolovaná inštalácia nebehá na cieľom.

## Príkazy na spustenie {#commands-to-run}

Spustite verifikáciu z nainštalovaného WordPressu v sieti:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Použite ID domény, ktorú migrujete. Prvý príkaz skontroluje, že doména už nezávisí na starých dátach z sieti. Druhý príkaz overuje, či sú úlohy sovereign push schopné sa spracovať a vyčistiť (drain).

## Často zastávajúce chyby {#common-failures}

### Granty v databáze sa neodpovedajú hostu {#database-grants-do-not-match-the-host}

Ak verifikácia ukazuje chyby pri grantoch alebo používateľmi scrittorov (writer-user), skontrolujte nastavený host databázy. `localhost`, `127.0.0.1` a názov služby kontajnera sú rôzne hosty MySQL grantov. Aktualizujte prispôsobenie hosta domény alebo granty v databáze, potom spustite verifikáciu znova.

### Bedrock alebo lokálne inštalácie sa nečupajú {#bedrock-or-local-installs-cannot-connect}

Bedrock a lokálne socket inštalácie môžu uvádzať, že databáza je `localhost`, zatiaľ čo runtime sa pripája cez normalizovaný adresný údaj. Verzia 1.2.0 normalizuje hostové príspevky na vedomých strojách, ale prispôsobené hostové predefinuť (custom host overrides) môžu stále kolíziť s grantmi v databáze.

### Asynná dia čerpadla sa nevyčisti (drain) {#async-push-queue-does-not-drain}

Ak `verify-sovereign-push` nedokončí, skontrolujte Action Scheduler alebo nastavený asynný runner. Vyčistite chybných úloh len po potvrdení, že sú bezpečné na ponovné spracovanie alebo odvrtenie.

### Počet používateľov domény je nesprávny {#tenant-user-count-is-wrong}

Migrácia má vytvoriť používateľov pre suverénnu doménu. Ak chýba očakávaný počet inštalovaných používateľov, spustite krok konfigurácie používateľov znova, pred tým ako sa pokúšate o SSO.

### Návšteva s SSO je odmietnutá {#sso-visit-is-rejected}

Prehľad: Automatické prihlasovanie si samostatného hostiteľov vyžaduje, aby sa doména, origin pin, účel tokenu, nonce a časový limit pokladania (expiry) zhodovali. Potvrďte, že URL hostiteľa je správny a pokladanie prihlasovacie akcia bude vykonané v krátkej dohodobe po generovaní linku na SSO navštívenie.

## Kľúčové momenty pre ponavodenie {#when-to-retry}

Po každom zmeny v infranštruktúre si prosím o ponavodenie verifikácie. Ne prechádzajte s produkčným trafikom, neobmazávajte zdrojové údaje a neodstraňujte spracovacie kredenciálne informácie, kým všetky vérifikačné kontrolné body neprejdú.
