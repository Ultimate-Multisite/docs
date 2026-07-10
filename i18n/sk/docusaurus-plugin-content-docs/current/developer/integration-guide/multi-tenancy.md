---
title: Integrácia multitenantnosti
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Integrácia multi-tenancy {#multi-tenancy-integration}

Ultimate Multisite: Multi-Tenancy 1.2.0 mení viaceré integračné styčné body pre suverénnych tenantov, overovanie migrácie a automatizáciu životného cyklu tenantov.

## Tok bootstrapu tenanta {#tenant-bootstrap-flow}

Integrácie, ktoré vytvárajú alebo upravujú tenantov, by mali postupovať v tomto poradí:

1. Vyriešte záznam v registri tenanta a model izolácie.
2. Vytvorte alebo overte zapisovač databázy tenanta.
3. Spustite bootstrap schémy tenanta.
4. Zabezpečte používateľov tenanta.
5. Zaregistrujte smerovanie tenanta a cesty súborového systému.
6. Spustite overenie migrácie pred sprístupnením tenanta.

Nepredpokladajte, že suverénny tenant môže znova použiť pripojenie k sieťovej databáze. Použite register tenantov a abstrakcie zapisovača poskytované addonom.

## SSO a REST hooky {#sso-and-rest-hooks}

Bezstavové automatické prihlásenie tenanta používa krátkodobé tokeny s účelovým claimom, ochranou JTI proti opätovnému použitiu, limitom expirácie a pripnutím pôvodu. Integrácie, ktoré pridávajú tlačidlá prihlásenia alebo odkazy na vzdialenú správu, by mali generovať návštevy tenanta prostredníctvom podporovaného toku SSO namiesto priameho zostavovania prihlasovacích URL tenanta.

Auditné udalosti API na strane siete a denné súhrny sú dostupné pre brány suverénnych tenantov. Použite tieto logy pri ladení externých systémov, ktoré volajú endpointy životného cyklu tenanta.

## URL akcií suverénneho zákazníka {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 smeruje zákaznícke akcie suverénneho tenanta späť na hlavnú stránku pre toky účtu, checkoutu, fakturácie, faktúry, stránky, prepínania šablón a mapovania domén. Integrácie, ktoré vykresľujú odkazy na správu na strane tenanta, by mali smerovať tieto akcie na zákaznícky panel hlavnej stránky a zahrnúť overený cieľ návratu, keď má mať používateľ možnosť prejsť späť na tenanta po dokončení akcie.

Použite jadrový SSO wrapper pre odkazy na správu medzi doménami:

```php
$url = wu_with_sso($main_site_customer_url);
```

Vygenerovaná URL zostáva filtrovateľná cez `wu_sso_url`, ktorý prijíma SSO URL, aktuálneho používateľa, ID cieľovej stránky a kontext presmerovania. Addony môžu použiť tento filter na pripojenie kontextu špecifického pre poskytovateľa alebo na nahradenie URL brokera pri zachovaní validácie tokenu Ultimate Multisite.

Neduplikujte stav členstva, faktúry, fakturačnej adresy, šablóny ani správy domény v rámci suverénneho tenanta. Dashboard tenanta považujte za spúšťač a zákaznícky panel hlavnej stránky za systém záznamu pre spravované akcie.

## Overenie migrácie {#migration-verification}

Po tom, ako migrácia alebo integrácia životného cyklu zmení dáta tenanta, spustite overovacie brány:

- `wp tenant verify-no-legacy --site=<site-id>` potvrdí, že tenant už nezávisí od starších ciest na strane siete.
- `wp tenant verify-sovereign-push --site=<site-id>` potvrdí, že úlohy suverénneho pushu sa dajú spracovať a vyprázdniť.

Integrácie by mali považovať neúspešné overenie za blokátor nasadenia a vyhnúť sa označeniu tenanta za live, kým sa zlyhanie nevyrieši.

## Odstránenie tenanta {#tenant-deletion}

Toky odstránenia by mali volať cestu teardownu addonu, aby sa prihlasovacie údaje k databáze tenanta vyčistili. Externé integrácie môžu odstrániť zdroje poskytovateľa po úspešnom teardowne, ale nemali by mazať databázy hostiteľa ani priečinky, kým stále beží overovanie alebo asynchrónne push úlohy.

## Zastaraný databázový router {#deprecated-database-router}

Starší `Database_Router` bol nahradený deprekačným stubom. Nové integrácie by mali tenantov riešiť cez aktuálny router stránok a API registra tenantov namiesto závislosti od starej triedy routera.
