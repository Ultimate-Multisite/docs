---
title: Odesílání e-mailů a hromadných zpráv
sidebar_position: 11
_i18n_hash: 2c1041bf76187ffc82978d1fa966fb23
---
# Odesílání e-mailů a hromadných oznámení (v2)

_**DŮLEŽITÁ POZNÁMKA: Tento článek se vztahuje k Ultimate Multisite verze 2.x.**_

Ultimate Multisite obsahuje funkci, která vám umožní komunikovat se zákazníky pomocí e-mailů zasílaných konkrétním uživatelům nebo skupinám uživatelů. Můžete také zobrazovat oznámení přímo v jejich administraci a informovat je o důležitých novinkách.

## Zobrazování oznámení v administraci zákazníků pomocí hromadných oznámení

Pomocí funkce hromadných oznámení v Ultimate Multisite můžete přidávat **administrátorská oznámení** do administrace podřízených webů vašich uživatelů.

To se hodí například tehdy, když potřebujete informovat o plánované údržbě systému nebo nabídnout stávajícím uživatelům nové produkty či služby. Takto bude oznámení vypadat v administraci uživatele.

![Hromadné oznámení zobrazené v administraci zákazníka](/img/admin/broadcasts-list.png)

Chcete-li vytvořit administrátorské oznámení, přejděte do administrace sítě a v menu **Ultimate Multisite** najdete položku **Broadcasts**.

![Menu Broadcasts v administraci Ultimate Multisite](/img/admin/broadcasts-list.png)

Na této stránce klikněte nahoře na tlačítko **Add Broadcast**.

Zobrazí se modální okno pro přidání oznámení, kde si můžete vybrat typ oznámení, které chcete odeslat.

Vyberte **Message** a klikněte na tlačítko **Next Step**.

![Modální okno pro přidání oznámení s vybraným typem Message](/img/admin/broadcasts-list.png)

V dalším okně vyberte buď **Target customer** (cílového zákazníka), nebo **Target product** (cílový produkt). Můžete vybrat více uživatelů nebo více produktů najednou.

Pro vyhledání uživatelského účtu nebo produktu začněte psát klíčové slovo do pole.

V poli **Message type** můžete vybrat barvu oznámení. Tím zdůrazníte naléhavost vaší zprávy.

Poté klikněte na **Next Step**.

![Výběr cílového zákazníka a produktu pro oznámení](/img/admin/broadcasts-list.png)

V dalším okně můžete začít psát zprávu – zadejte předmět a obsah oznámení, které chcete uživatelům zobrazit.

![Editor předmětu a obsahu hromadného oznámení](/img/admin/broadcasts-list.png)

Po vytvoření zprávy klikněte na tlačítko **Send**.

A to je vše. Oznámení se okamžitě zobrazí v administraci vašich uživatelů.

## Odesílání e-mailů zákazníkům

Pomocí funkce hromadných oznámení v Ultimate Multisite můžete svým uživatelům posílat e-maily. Můžete e-mail odeslat pouze konkrétním uživatelům, nebo zacílit skupinu uživatelů podle produktu či tarifu, který mají předplacený.

Chcete-li spustit hromadné rozesílání e-mailů, přejděte do administrace sítě a v menu Ultimate Multisite najdete položku Broadcast.

![Stránka Broadcasts v administraci Ultimate Multisite](/img/admin/broadcasts-list.png)

Na této stránce klikněte nahoře na tlačítko **Add broadcast**.

Zobrazí se modální okno pro přidání oznámení, kde si můžete vybrat typ oznámení, které chcete odeslat. Vyberte **Email** a klikněte na tlačítko **Next Step**.

![Modální okno pro přidání oznámení s vybraným typem Email](/img/admin/broadcasts-list.png)

V dalším okně vyberte buď **Target customer** (cílového zákazníka), nebo **Target product** (cílový produkt). Můžete vybrat více uživatelů nebo více produktů najednou.

Pro vyhledání uživatelského účtu nebo produktu začněte psát klíčové slovo do pole.

Jakmile máte cílovou skupinu vybranou, klikněte na **Next Step**.

![Výběr cílového zákazníka a produktu pro e-mailové oznámení](/img/admin/broadcasts-list.png)

V dalším okně můžete začít psát e-mail – zadejte předmět a obsah zprávy, kterou chcete uživatelům odeslat.

![Editor předmětu a obsahu e-mailového oznámení](/img/admin/broadcasts-list.png)

Po vytvoření zprávy klikněte na tlačítko **Send**.

A takto jednoduše můžete pomocí funkce hromadných oznámení posílat e-maily svým koncovým uživatelům.

## Systémové e-maily

Systémové e-maily v Ultimate Multisite jsou **automatická upozornění**, která systém odesílá po určitých akcích, jako je registrace, platba, mapování domény apod. Tyto e-maily můžete upravovat v nastavení Ultimate Multisite. K dispozici je také funkce pro reset a import existujícího nastavení z jiné instalace Ultimate Multisite.

### Reset a import

Nové verze Ultimate Multisite i doplňky mohou průběžně registrovat nové e-maily.

Abychom předešli konfliktům a dalším problémům, **nové e-mailové šablony se do systémových e-mailů na vaší instalaci nepřidávají automaticky**, pokud nejsou nezbytné pro správné fungování dané funkce.

Super administrátoři a agenti však mohou nově registrované e-maily importovat pomocí nástroje pro import. Tento proces vytvoří nový systémový e-mail s obsahem a konfigurací nové e-mailové šablony, což super administrátorovi umožní provést libovolné úpravy nebo ponechat vše beze změny.

#### Jak importovat systémové e-maily

Přejděte na stránku nastavení Ultimate Multisite a otevřete záložku **Emails**.

![Záložka Emails v nastavení Ultimate Multisite](/img/config/settings-emails.png)

Poté v postranním panelu klikněte na tlačítko **Customize System Emails**.

![Tlačítko Customize System Emails v postranním panelu](/img/config/settings-emails.png)

Na stránce System Emails uvidíte nahoře akční tlačítko **Reset & Import**. Kliknutím na něj otevřete modální okno pro import a reset.

![Akční tlačítko Reset and Import na stránce System Emails](/img/config/settings-emails.png)

Poté můžete přepnout možnosti Import Emails a zobrazit, které systémové e-maily jsou k dispozici pro import.

![Možnosti Import Emails zobrazující dostupné systémové e-maily](/img/config/settings-emails.png)

#### Resetování systémových e-mailů

Někdy zjistíte, že úpravy, které jste v e-mailové šabloně provedli, vám už nevyhovují a chtěli byste ji vrátit do **výchozího stavu**.

V takovém případě máte dvě možnosti: můžete systémový e-mail jednoduše smazat a znovu importovat (podle výše uvedeného postupu) – tím se však vymažou statistiky odesílání a další údaje, proto tato metoda není preferovaná.

Nebo můžete použít nástroj **Reset & Import** k resetování dané e-mailové šablony.

Chcete-li resetovat e-mailovou šablonu, postupujte podle výše uvedených kroků, dokud se nedostanete k nástroji Reset & Import. Poté přepněte možnost **Reset** a vyberte e-maily, které chcete vrátit do výchozího obsahu.

![Možnost Reset pro obnovení e-mailových šablon do výchozího stavu](/img/config/settings-emails.png)
