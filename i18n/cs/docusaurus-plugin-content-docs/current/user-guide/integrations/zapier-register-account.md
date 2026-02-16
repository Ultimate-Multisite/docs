---
title: Zaregistrovat účet přes Zapier
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# Událost: Registrace účtu pomocí Zapier

V článku [Integrace Ultimate Multisite se Zapier](zapier.md) jsme si ukázali, jak pomocí Zapier provádět různé akce v Ultimate Multisite na základě triggerů a událostí. V tomto článku vám ukážeme, jak můžete integrovat aplikace třetích stran. Jako zdroj dat použijeme Google Sheets a informace odešleme do Ultimate Multisite pro registraci účtu.

Nejprve si na Google Drive vytvořte **Google Sheet**. Dbejte na správné pojmenování jednotlivých sloupců, abyste později mohli snadno namapovat data.

![Google Sheet se sloupci pro zákaznická data](/img/admin/webhooks-list.png)Po vytvoření Google Sheetu se přihlaste do svého účtu Zapier a začněte vytvářet zap.

![Dashboard Zapier pro vytvoření nového zapu](/img/admin/webhooks-list.png)Do vyhledávacího pole **„App event"** zadejte **„Google Sheets"**

![Výběr Google Sheets jako události aplikace](/img/admin/webhooks-list.png)

Poté v poli „**Event**" vyberte „**New spreadsheet row**" a klikněte na „**Continue**"

![Výběr události New spreadsheet row v Zapier](/img/admin/webhooks-list.png)V dalším kroku budete vyzváni k výběru **účtu Google**, kde je **Google Sheet** uložen. Ujistěte se, že je vybrán správný účet Google.

![Výběr účtu Google pro Google Sheet](/img/admin/webhooks-list.png)

V části „**Set up trigger**" vyberte a určete tabulku a list Google, ze kterých budou data pocházet. Vyplňte potřebné údaje a klikněte na „**Continue**"

![Nastavení triggeru s výběrem tabulky a listu](/img/admin/webhooks-list.png)Dalším krokem je „**test your trigger**", abyste se ujistili, že je váš Google Sheet správně propojený.

![Krok testování triggeru v Zapier](/img/admin/webhooks-list.png)Pokud je test úspěšný, měli byste vidět výsledek s některými hodnotami z vaší tabulky. Pokračujte kliknutím na „**Continue**".

![Úspěšný test triggeru zobrazující hodnoty z tabulky](/img/admin/webhooks-list.png)Dalším krokem je nastavení druhé akce, která vytvoří nebo zaregistruje účet v Ultimate Multisite. Do vyhledávacího pole zadejte „**Ultimate Multisite(2.0.2)**"

![Výběr Ultimate Multisite jako aplikace pro akci](/img/admin/webhooks-list.png)

V poli „**Event**" vyberte „**Register an Account in Ultimate Multisite**" a klikněte na tlačítko „**Continue**".

![Událost akce Register an Account in Ultimate Multisite](/img/admin/webhooks-list.png)V části „**Set up an action**" uvidíte různá pole pro zákaznická data, členství, produkty atd. Můžete namapovat hodnoty z vašeho Google Sheetu a přiřadit je do správných polí, kam mají být vyplněny, jak je znázorněno na obrázku níže.

![Mapování hodnot z Google Sheet do polí Ultimate Multisite](/img/admin/webhooks-list.png)

Po namapování hodnot můžete akci otestovat.

![Testování akce registrace účtu v Zapier](/img/admin/webhooks-list.png)
