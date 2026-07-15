---
title: Přechod na nižší tarif
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Přechod na nižší tarif (v2)

_**DŮLEŽITÁ POZNÁMKA: Tento článek se týká Ultimate Multisite verze 2.x.**_

Přechod na nižší tarif nebo subscription je běžná akce, kterou mohou vaši klienti provést, pokud mají omezený rozpočet nebo se rozhodli, že pro provoz svého subsite nebudou potřebovat mnoho zdrojů.

## Jak přejít na nižší tarif {#how-to-downgrade-a-plan}

Vaši klienti mohou svůj tarif kdykoli snížit tak, že se přihlásí do administračního dashboardu svého subsite a kliknou na **Změnit** na stránce svého Account.

![Stránka zákaznického Account s kartou Vaše členství a tlačítkem Změnit](/img/account-page/membership-change-button.png)

Po kliknutí na tlačítko **Změnit** bude uživatel/klient přesměrován na stránku checkout, kde si může vybrat tarif, na který chce svou subscription změnit.

![Stránka možností přechodu na nižší tarif na straně zákazníka](/img/account-page/downgrade-picker.png)

V tomto příkladu přecházíme z tarifu **Premium** na **Free**.

Pro pokračování stačí, aby uživatel klikl na tlačítko **Complete Checkout**. Poté bude přenesen zpět na stránku Account, kde se zobrazí zpráva o čekající změně membership. Změny se projeví v **dalším fakturačním cyklu** zákazníka.

![Stránka Account zobrazující banner čekající změny membership](/img/account-page/pending-change.png)

### Co se stane, když uživatel přejde na nižší tarif {#what-happens-when-a-user-downgrades-their-plan}

Je důležité poznamenat, že přechod na nižší tarif nemění stávající konfiguraci v subsite uživatele.

Automaticky se nezmění šablona site, protože změna šablony site by subsite zcela vymazala a resetovala. Je to proto, aby se zabránilo zbytečné ztrátě dat. Takže diskový prostor, motivy, pluginy atd. zůstanou beze změny, s výjimkou příspěvků.

Chápeme, že vaší hlavní starostí budou limity a kvóty nastavené u jednotlivých tarifů, ale musíme zvážit škody, které by vznikly na subsite uživatele, pokud bychom smazali nebo změnili některé jeho konfigurace.

Pro příspěvky překračující limit nastavený v tarifu máte 3 různé možnosti: **Ponechat příspěvky tak, jak jsou** *,* **Přesunout příspěvky do koše** *,* nebo **Přesunout příspěvky do konceptů** *.* Toto můžete nastavit v nastavení Ultimate Multisite.

![Stránka Network Admin Settings Sites zobrazující možnosti chování při překročení limitu příspěvků](/img/account-page/settings-sites-post-limit.png)

### Co se stane s platbou {#what-happens-to-the-payment}

Ve verzi 2.0 již nejsou u platby vyžadovány žádné úpravy z hlediska proration.

Je to proto, že systém počká, až stávající membership **dokončí svůj fakturační cyklus, než** nový tarif/membership vstoupí v platnost. Nová fakturovaná částka pro novou membership bude automaticky použita a stržena v dalším fakturačním cyklu.
