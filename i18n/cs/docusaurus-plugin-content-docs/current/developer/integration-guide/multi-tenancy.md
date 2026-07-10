---
title: Integrace víceklientské architektury
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Integrace Multi-Tenancy {#multi-tenancy-integration}

Ultimate Multisite: Multi-Tenancy 1.2.0 mění několik integračních bodů pro suverénní tenanty, ověření migrace a automatizaci životního cyklu tenantů.

## Tok bootstrapu tenanta {#tenant-bootstrap-flow}

Integrace, které vytvářejí nebo upravují tenanty, by měly dodržovat toto pořadí:

1. Vyřešte záznam registru tenanta a izolační model.
2. Vytvořte nebo ověřte zapisovač databáze tenanta.
3. Proveďte bootstrap schématu tenanta.
4. Zřiďte uživatele tenanta.
5. Zaregistrujte směrování tenanta a cesty v souborovém systému.
6. Před zpřístupněním tenanta spusťte ověření migrace.

Nepředpokládejte, že suverénní tenant může znovu použít databázové připojení sítě. Použijte registr tenanta a abstrakce zapisovače poskytované addonem.

## SSO a REST hooky {#sso-and-rest-hooks}

Bezestavové automatické přihlášení tenanta používá tokeny s krátkou životností s tvrzením o účelu, ochranou JTI proti opakovanému použití, limitem expirace a připnutím původu. Integrace, které přidávají tlačítka pro přihlášení nebo odkazy pro vzdálenou správu, by měly generovat návštěvy tenanta prostřednictvím podporovaného toku SSO místo přímého sestavování přihlašovacích URL tenanta.

Události auditu API na straně sítě a denní souhrny jsou dostupné pro brány suverénních tenantů. Používejte tyto logy při ladění externích systémů, které volají endpointy životního cyklu tenanta.

## URL zákaznických akcí suverénního tenanta {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 směruje zákaznické akce suverénního tenanta zpět na hlavní web pro toky účtu, pokladny, fakturace, faktury, webu, přepínání šablon a mapování domén. Integrace, které vykreslují odkazy pro správu na straně tenanta, by měly tyto akce směrovat na zákaznický panel hlavního webu a zahrnout ověřený cílový návrat, pokud by uživatel měl mít možnost po dokončení akce přejít zpět k tenantovi.

Použijte základní SSO wrapper pro odkazy správy napříč doménami:

```php
$url = wu_with_sso($main_site_customer_url);
```

Vygenerovaná URL zůstává filtrovatelná přes `wu_sso_url`, který přijímá SSO URL, aktuálního uživatele, ID cílového webu a kontext přesměrování. Addony mohou tento filtr použít k připojení kontextu specifického pro poskytovatele nebo k nahrazení URL brokera při zachování ověřování tokenu Ultimate Multisite.

Neduplikujte stav členství, faktur, fakturační adresy, šablon ani správy domén uvnitř suverénního tenanta. Berte dashboard tenanta jako spouštěč a zákaznický panel hlavního webu jako systém záznamu pro spravované akce.

## Ověření migrace {#migration-verification}

Po migraci nebo poté, co integrace životního cyklu změní data tenanta, spusťte ověřovací brány:

- `wp tenant verify-no-legacy --site=<site-id>` potvrzuje, že tenant už nezávisí na starších cestách na straně sítě.
- `wp tenant verify-sovereign-push --site=<site-id>` potvrzuje, že suverénní push úlohy lze zpracovat a vyprázdnit.

Integrace by měly považovat neúspěšné ověření za blokátor nasazení a vyhnout se označení tenanta jako živého, dokud nebude selhání vyřešeno.

## Odstranění tenanta {#tenant-deletion}

Toky odstranění by měly volat cestu teardownu addonu, aby byly přihlašovací údaje k databázi tenanta vyčištěny. Externí integrace mohou po úspěšném teardownu odstranit zdroje poskytovatele, ale neměly by mazat databáze hostitele ani složky, dokud stále běží ověření nebo asynchronní push úlohy.

## Zastaralý databázový router {#deprecated-database-router}

Starší `Database_Router` byl nahrazen deprekačním stubem. Nové integrace by měly tenanty řešit prostřednictvím aktuálních API směrovače webu a registru tenantů místo závislosti na staré třídě routeru.
