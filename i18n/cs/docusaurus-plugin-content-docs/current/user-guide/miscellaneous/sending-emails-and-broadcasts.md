---
title: Odesílání e-mailů a hromadných rozesílek
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# Odesílání e-mailů a Broadcasts (v2)

_**DŮLEŽITÁ POZNÁMKA: Tento článek se vztahuje k Ultimate Multisite verze 2.x.**_

Ultimate Multisite obsahuje funkci, která vám umožní komunikovat se zákazníky odesláním e-mailu cílenému uživateli nebo skupině uživatelů, stejně jako odesíláním oznámení na jejich admin dashboard pro vysílání oznámení

## Přidání admin oznámení na dashboard vašich zákazníků pomocí Broadcasts {#add-admin-notices-to-your-customers-dashboard-with-broadcasts}

Pomocí funkce Broadcast Ultimate Multisite můžete přidat **admin oznámení** na admin dashboard subsitu vašeho uživatele.

To je mimořádně užitečné, pokud potřebujete učinit oznámení, například o údržbě systému nebo nabídce nových produktů či služeb vašim stávajícím uživatelům. Takto bude admin oznámení vypadat na dashboardu vašeho uživatele.

<!-- Snímek obrazovky není k dispozici: Vysílané admin oznámení zobrazené na dashboardu subsitu zákazníka -->

Chcete-li spustit admin oznámení, přejděte na svůj síťový admin dashboard a v nabídce **Ultimate Multisite** najdete možnost **Broadcasts**.

![Stránka seznamu Broadcasts v administraci Ultimate Multisite](/img/admin/broadcasts-list.png)

Můžete také upravovat stávající Broadcasts:

![Rozhraní pro úpravu Broadcast](/img/admin/broadcast-edit.png)

Na této stránce klikněte nahoře na tlačítko **Add Broadcast**.

Tím se otevře modální okno Add broadcast, kde můžete zvolit, jaký typ Broadcast chcete odeslat.

Vyberte **Message** a poté klikněte na tlačítko **Next Step**.

![Modální okno Add broadcast s vybranou možností Message](/img/admin/broadcast-add-message.png)

Další okno vás vyzve k zadání buď **Target customer**, nebo **Target product**. Všimněte si, že můžete vybrat více než jednoho uživatele nebo více než jeden produkt.

Chcete-li vyhledat uživatelský Account nebo produkt, musíte začít psát klíčové slovo do pole.

V poli **Message type** můžete vybrat barvu oznámení. Tím zdůrazníte naléhavost své zprávy.

Poté můžete kliknout na **Next Step**.

![Pole Target customers, Target product a Message type pro Message Broadcast](/img/admin/broadcast-message-targets.png)

V dalším okně můžete začít psát svou zprávu zadáním předmětu a obsahu/zprávy, kterou chcete uživatelům odeslat jako Broadcast.

![Předmět Broadcast zprávy a editor obsahu v kroku sestavení](/img/admin/broadcast-edit.png)

Po vytvoření zprávy můžete kliknout na tlačítko **Send**.

A to je vše. Admin oznámení by se mělo okamžitě zobrazit na dashboardu vašeho uživatele.

## Odesílání e-mailů zákazníkům {#send-emails-to-your-customers}

Pomocí funkce Broadcast Ultimate Multisite můžete svým uživatelům odeslat e-mail. Máte možnost odeslat e-mail pouze konkrétním uživatelům nebo zacílit na konkrétní skupinu uživatelů podle produktu nebo plánu, ke kterému jsou přihlášeni.

Chcete-li spustit e-mailový Broadcast, přejděte na svůj síťový admin dashboard a v nabídce Ultimate Multisite najdete možnost Broadcast.

![Stránka seznamu Broadcasts použitá jako výchozí bod pro e-mailový Broadcast](/img/admin/broadcasts-list.png)

Na této stránce klikněte nahoře na tlačítko **Add broadcast**.

Tím se otevře modální okno Add broadcast, kde můžete zvolit, jaký typ Broadcast chcete odeslat. Vyberte **Email** a poté klikněte na tlačítko **Next Step**.

![Modální okno Add broadcast s vybranou možností Email](/img/admin/broadcast-add-email.png)

Další okno vás vyzve k zadání buď **Target customer**, nebo **Target produc** t. Všimněte si, že můžete vybrat více než jednoho uživatele nebo více než jeden produkt.

Chcete-li vyhledat uživatelský Account nebo produkt, musíte začít psát klíčové slovo do pole.

Jakmile je vybrána vaše cílová skupina, můžete kliknout na **Next Step**.

![Výběr Target customers a Target product pro Email Broadcast](/img/admin/broadcast-email-targets.png)

V dalším okně můžete začít psát svůj e-mail zadáním předmětu a obsahu/zprávy, kterou chcete uživatelům odeslat.

<!-- Snímek obrazovky není k dispozici: Předmět e-mailového Broadcast a editor obsahu v kroku sestavení -->

Po vytvoření zprávy můžete kliknout na tlačítko **Send**.

A tak snadné je odeslat e-mail vašim koncovým uživatelům pomocí funkce Broadcast.

## Systémové e-maily {#system-emails}

Systémové e-maily v Ultimate Multisite jsou **automatická oznámení** odesílaná systémem po určitých akcích, jako je registrace, platba, mapování domény atd. Tyto e-maily lze upravovat nebo měnit v nastaveních Ultimate Multisite. Obsahuje také funkci, která vám umožní resetovat a importovat stávající nastavení z jiné instalace Ultimate Multisite.

### Resetování a import {#resetting--importing}

Nové verze Ultimate Multisite, stejně jako add-ony, mohou a budou čas od času registrovat nové e-maily.

Abychom předešli konfliktům a dalším problémům, **nepřidáme nové e-mailové šablony jako System Emails do vaší instalace automaticky**, pokud nejsou zásadní pro správné fungování dané funkce.

Super admini a agenti však mohou tyto nově registrované e-maily importovat pomocí nástroje pro import. Tento proces vytvoří nový systémový e-mail s obsahem a konfigurací nové e-mailové šablony, což super adminovi umožní provést libovolné úpravy nebo je ponechat tak, jak jsou.

#### Jak importovat systémové e-maily {#how-to-import-system-emails}

Přejděte na stránku Ultimate Multisite Settings a otevřete kartu **Emails**.

![Karta Emails v nastaveních Ultimate Multisite zobrazující sekci System Emails](/img/config/settings-emails-tab.png)

Poté v postranním panelu klikněte na tlačítko **Customize System Emails**.

<!-- Snímek obrazovky není k dispozici: Tlačítko Customize System Emails na postranním panelu System Emails -->

Na stránce System Emails uvidíte nahoře akční tlačítko **Reset & Import**. Kliknutí na toto tlačítko by mělo otevřít modální okno pro import a resetování.

![Akční tlačítko Reset nebo Import na administrační stránce System Emails](/img/admin/system-emails-reset-import.png)

Poté můžete přepnout možnosti Import Emails a zobrazit, které systémové e-maily jsou k dispozici k importu.

<!-- Snímek obrazovky není k dispozici: Modální okno Obnovit a importovat s rozbalenými možnostmi Importovat e-maily -->

#### Obnovení systémových e-mailů {#reseting-system-emails}

Jindy si uvědomíte, že změny, které jste provedli v dané šabloně e-mailu, vám už nevyhovují a chcete ji obnovit do jejího **výchozího stavu**.

V takových případech máte dvě možnosti: můžete systémový e-mail jednoduše smazat a znovu jej importovat (podle pokynů výše) – tím se však vymažou metriky odesílání a další věci, takže tato metoda je nejméně preferovaná.

Nebo můžete k obnovení této šablony e-mailu použít **nástroj Obnovit a importovat**.

Chcete-li obnovit šablonu e-mailu, postupujte podle kroků výše, dokud se nedostanete k nástroji Obnovit a importovat, a poté přepněte možnost **Obnovit** a vyberte e-maily, které chcete obnovit zpět na jejich výchozí obsah.

<!-- Snímek obrazovky není k dispozici: Modální okno Obnovit a importovat s rozbalenými možnostmi Obnovit e-maily -->
