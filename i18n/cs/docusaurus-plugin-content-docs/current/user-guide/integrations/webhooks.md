---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# První pohled na Webhooks (v2) {#a-first-look-on-webhooks-v2}

_**POZOR: Upozorňujeme, že tato funkce nebo článek je určen pro pokročilé uživatele.**_

**webhook** je způsob, jak může aplikace nebo software jako Ultimate Multisite poskytovat jiným aplikacím informace v reálném čase. Webhook doručuje data nebo payloady jiným aplikacím v okamžiku, kdy k tomu dojde, což znamená, že **data získáte okamžitě.**

To je užitečné, pokud potřebujete integrovat nebo předat určitá data z Ultimate Multisite do jiného CRM nebo systému pokaždé, když je spuštěna událost. Například potřebujete odeslat jméno a e-mailovou adresu uživatele do mailing listu pokaždé, když je vytvořen nový uživatelský účet.

## Jak vytvořit webhook {#how-to-create-a-webhook}

Chcete-li vytvořit webhook, přejděte do administračního dashboardu sítě. Klikněte na **Ultimate Multisite > Webhooks > Add New Webhook.**

![Prázdná stránka se seznamem Webhooks s tlačítkem Add New Webhook](/img/admin/webhooks-list-empty.png)

Poté můžete upravit konfiguraci webhooku:

![Formulář Add New Webhook s poli Name, Event a URL](/img/admin/webhook-add-modal.png)

Při vytváření nového webhooku budete požádáni o informace jako **Name, URL,** a **Event**. Pro svůj webhook můžete použít libovolný název. Nejdůležitější pole jsou URL a Event.

![Rozhraní pro úpravu webhooku zobrazující pole URL a náhled payloadu](/img/admin/webhook-url-field.png)

URL je **endpoint nebo cíl**, kam Ultimate Multisite odešle **payload nebo data**. Toto je aplikace, která data přijme.

Zapier je nejběžnější řešení, které uživatel používá k usnadnění integrace s aplikací třetí strany. Bez platformy jako Zapier budete muset ručně vytvořit vlastní funkci, která data zachytí a zpracuje. Viz tento článek o tom, **jak používat webhook Ultimate Multisite se Zapierem.**

V tomto článku se podíváme na základní koncept toho, jak webhook funguje, a na události dostupné v Ultimate Multisite. Budeme používat web třetí strany s názvem [requestbin.com](https://requestbin.com/). Tento web nám umožní vytvořit endpoint a zachytit payload bez psaní kódu. _**Upozornění: vše, co udělá, je, že nám ukáže, že data byla přijata.**_ Payload nebude nijak zpracován ani s ním nebude provedena žádná akce.

Přejděte na [requestbin.com](https://requestbin.com/) a klikněte na Create Request Bin.

Po kliknutí na toto tlačítko budete vyzváni k přihlášení, pokud již máte účet, nebo k registraci. Pokud již účet máte, přesměruje vás to přímo na jejich dashboard. Na jejich dashboardu okamžitě uvidíte endpoint nebo URL, kterou můžete použít při vytváření webhooku Ultimate Multisite.

Pokračujte zkopírováním URL a vraťte se do Ultimate Multisite. Vložte endpoint do pole URL a z rozbalovací nabídky vyberte událost. V tomto příkladu vybereme **Payment Received**.

Tato událost se spustí pokaždé, když uživatel provede platbu. Všechny dostupné události, jejich popis a payloady jsou uvedeny dole na stránce. Kliknutím na tlačítko **Add New Webhook** webhook uložíte.

![Rozbalovací nabídka událostí webhooku s vybranou možností Payment Received](/img/admin/webhook-event-picker.png)

Nyní můžeme do endpointu odeslat testovací událost, abychom viděli, zda webhook, který jsme vytvořili, funguje. To můžeme udělat kliknutím na **Send Test Event** pod webhookem, který jsme vytvořili.

![Seznam Webhooks zobrazující jeden nakonfigurovaný webhook a akci Send Test](/img/admin/webhooks-list-populated.png)

Zobrazí se potvrzovací okno s informací, že test byl úspěšný.

![Výsledek testovací události webhooku po odeslání testovacího payloadu](/img/admin/webhook-test-result.png)

Nyní, pokud se vrátíme na web _Requestbin_, uvidíme, že payload byl přijat a obsahuje některá testovací data.

Toto je základní princip fungování webhooku a endpointů. Pokud chcete vytvořit vlastní endpoint, budete muset vytvořit vlastní funkci pro zpracování dat, která obdržíte z Ultimate Multisite.
