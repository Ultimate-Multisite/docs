---
title: Operace suverénního nájemce
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Operace s suverénními nájemci {#sovereign-tenant-operations}

Ultimate Multisite: Multi-Tenancy 1.2.0 přidává operativní nástroje pro suverénní nájemce: subsity, které běží se svým vlastním databází, kořenovým systémem souborů a kontextem routování, zatímco zůstávají viditelné pro administrátory sítě.

Použijte tuto stránku při správě izolovaných zákaznických sítí, přenosu remote-site nebo migrací, která přesouvá standardní subsite do suverénní infrastruktury.

## Co se mění pro administrátory {#what-changes-for-administrators}

- **Stateless tenant autologin** — Administrátoři sítě mohou navštívit suverénního nájemce bez spoléhání na dlouhodobý stav sdílených sezení. Token SSO je určen pro konkrétní účel, pevně závislý na origině, chráněn proti opakování a omezen na krátké vypršení platnosti.
- **Sovereign-aware routing** — Stará izolovaná sítě a suverénní nájemci se řeší přes stejnou cestu routingu stránky, což snižuje rozdíly při spouštění mezi starými a novými izolovanými instalacemi.
- **Verified migration state** — Ověření migrace kontroluje přidělování uživatelů, oprávnění zápisu do databáze, stav vyprázdnění fronty (queue drain) a chybějící tabulky starých systémů předtím, než se nájemce považuje za dokončený.
- **Safer teardown** — Odstranění suverénního nájemce nyní čistě odstraní учетné údaje nájemce tak, aby po smazání nebyly za sebou zastaralé přístupy k databázi.

## Navštívání suverénního nájemce {#visiting-a-sovereign-tenant}

1. Otevřete **Network Admin > Ultimate Multisite > Sites**.
2. Vyberte suverénního nájemce.
3. Použijte **Visit (SSO)**, pokud je to možné, místo kopírování hesla nebo vytváření dočasných účtů pro administrátory.

Proces navštívání vytvoří krátkodobý přihlašovací token pro tento nájemce a zaznamená událost SSO v auditním záznamu nájemce. Pokud se tlačítko nepodaří, zkontrolujte, zda doména nájemce odpovídá očekávané instalaci a zda může nájemce dosáhnout bodového okružení (endpoint) pro SSO na straně sítě.

## Kontrolní seznam operací remote-site {#remote-site-operations-checklist}

Před změnou suverénního nebo vzdáleného nájemce potvrďte:

Doména nájemce směřuje na host, který vlastní souborový systém nájemce.
Host databáze nájemce odpovídá nastavenému přiřazení hosta pro tuto instalaci.
Kommandy pro ověření migrace pro nájemce probíhají úspěšně.
Asynchronní fronty migrace jsou vyprázdněny před provedením změn DNS nebo vlastnictví.
Používatel administrátor nájemce byl vytvořen během migrace a může se přihlásit přes SSO.

## Smazání suverénních nájemců {#deleting-sovereign-tenants}

Smazání suverénního nájemce je destruktivní. Nejdříve potvrďte stav zálohy a exportu, poté smazat z obrazovky správy webu. Tok 1.2.0 pro ukončení (teardown) odstraní přihlašovací údaje databáze nájemce jako součást čištění, ale administrátoři by měli stále ověřit, že uživatelé databáze a adresáře na úrovni hosta jsou odstraněny při používání externích panelů pro hosting.

:::warning
Nezmazávej suverénního nájemce, dokud není migrace ověřena nebo zatím nejsou v řadě asynchronní úkoly k odeslání (push jobs). Čekejte na dokončení ověření, abyste se neodebraly údaje potřebné pro pending úkoly při ukončení.
:::
