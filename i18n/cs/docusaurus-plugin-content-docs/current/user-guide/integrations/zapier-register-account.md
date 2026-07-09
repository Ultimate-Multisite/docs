---
title: Zaregistrovat Account přes Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Událost: Registrace Account přes Zapier

V článku [Integrace Ultimate Multisite se Zapier](zapier.md) jsme probrali, jak používat Zapier k provádění různých akcí v Ultimate Multisite na základě triggerů a událostí. V tomto článku ukážeme, jak můžete integrovat aplikace třetích stran. Jako zdroj dat použijeme Google Sheets a odešleme informace do Ultimate Multisite k registraci Account.

Před připojením Zapier přejděte do **Ultimate Multisite > Settings > API & Webhooks** a potvrďte, že API je povoleno. Zkopírujte API Key a API Secret z této obrazovky, až se Zapier zeptá na přihlašovací údaje k Ultimate Multisite Account.

![Nastavení API a Webhooks s možnostmi API Key, API Secret a Enable API](/img/admin/settings-api-webhooks.png)

Nejprve musíte vytvořit **Google Sheet** ve svém Google Drive. Ujistěte se, že správně definujete každý sloupec, abyste mohli data později snadno namapovat.

Po vytvoření Google sheet se můžete přihlásit ke svému Zapier Account a začít vytvářet zap.

Pod vyhledávacím polem pro **"App event"** vyberte **"Google Sheets"**


Poté pro pole "**Event** " vyberte "**New spreadsheet row** " a stiskněte "**Continue** "

V dalším kroku budete vyzváni k výběru **Google Account**, ve kterém je **Google Sheet** uložen. Jen se tedy ujistěte, že je zadán správný Google Account.


V části **"Set up trigger** " budete muset vybrat a zadat Google spreadsheet a worksheet, které budete používat a ze kterých budou data pocházet. Vyplňte je a stiskněte "**Continue** "

Dále je potřeba "**test your trigger** ", abyste se ujistili, že je váš Google sheet správně připojen.

Pokud je test úspěšný, měli byste vidět výsledek zobrazující některé hodnoty z vašich spreadsheetů. Klikněte na "**Continue** " a pokračujte.

Dalším krokem je nastavit druhou akci, která vytvoří nebo zaregistruje Account v Ultimate Multisite. Ve vyhledávacím poli vyberte "**Ultimate Multisite(2.0.2)** "


V poli "**Event** " vyberte "**Register an Account in Ultimate Multisite** " a poté klikněte na tlačítko "**Continue** ".

V části "**Set up an action** " uvidíte různá pole dostupná pro data zákazníků, memberships, produkty atd. Hodnoty z Google sheet můžete namapovat a přiřadit je ke správnému poli, kde se mají vyplnit, jak je znázorněno na snímku obrazovky níže.


Po namapování hodnot můžete akci otestovat.
