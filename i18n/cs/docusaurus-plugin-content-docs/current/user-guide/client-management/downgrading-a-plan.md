---
title: Downgrade plánu
sidebar_position: 7
_i18n_hash: dc3ac67048002b04bfb952a01cf289c9
---
# Snížení tarifu (v2)

_**DŮLEŽITÁ POZNÁMKA: Tento článek se týká Ultimate Multisite verze 2.x.**_

Snížení tarifu nebo předplatného je běžná akce, kterou mohou vaši klienti provést, pokud mají omezený rozpočet nebo se rozhodli, že pro provoz svého podwebu nepotřebují tolik prostředků.

## Jak snížit tarif

Vaši klienti mohou svůj tarif snížit kdykoli – stačí se přihlásit do administrace svého podwebu a kliknout na tlačítko **Změnit** na stránce účtu.

![Stránka účtu s tlačítkem Změnit pod členstvím](/img/admin/memberships-list.png)

Po kliknutí na tlačítko **Změnit** bude uživatel/klient přesměrován na stránku pokladny, kde si může vybrat tarif, na který chce své předplatné změnit.

![Stránka pokladny zobrazující možnosti tarifů pro snížení](/img/admin/memberships-list.png)

V tomto příkladu snižujeme tarif z **Premium** na **Free**.

Pro pokračování stačí kliknout na tlačítko **Dokončit objednávku**. Uživatel se poté vrátí na stránku účtu, kde uvidí zprávu o čekající změně členství. Změny se projeví v **dalším fakturačním období** zákazníka.

![Stránka účtu zobrazující zprávu o čekající změně členství](/img/admin/memberships-list.png)

### Co se stane, když uživatel sníží svůj tarif

Je důležité vědět, že snížení tarifu nemění stávající konfiguraci podwebu uživatele.

Automaticky se nemění šablona webu, protože změna šablony by kompletně smazala a resetovala podweb. Tím se předchází zbytečné ztrátě dat. Diskový prostor, šablony vzhledu, pluginy atd. zůstanou nedotčené – s výjimkou příspěvků.

Chápeme, že vaší hlavní starostí budou limity a kvóty nastavené pro jednotlivé tarify, ale musíme brát v úvahu škody, které by způsobilo smazání nebo změna konfigurace podwebu uživatele.

Pro příspěvky překračující limit nastavený v tarifu máte 3 různé možnosti: **Ponechat příspěvky beze změny**, **Přesunout příspěvky do koše** nebo **Přesunout příspěvky do konceptů**. Toto můžete nastavit v nastavení Ultimate Multisite.

![Možnosti při překročení limitu příspěvků v nastavení Ultimate Multisite](/img/config/settings-sites.png)

### Co se stane s platbou

Ve verzi 2.0 již nejsou potřeba žádné úpravy plateb z hlediska poměrného účtování.

Je to proto, že systém počká, až stávající členství **dokončí své fakturační období**, a teprve poté se nový tarif/členství aktivuje. Nová fakturovaná částka za nové členství se automaticky použije a naúčtuje v dalším fakturačním období.
