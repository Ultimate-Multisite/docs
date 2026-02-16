---
title: Webhooky
sidebar_position: 15
_i18n_hash: b4ccc66ecddbe88bc85f562e32e5dca8
---
# První pohled na webhooky (v2)

_**UPOZORNĚNÍ: Tato funkce či článek je určen pro pokročilé uživatele.**_

**Webhook** je způsob, jakým může aplikace nebo software jako Ultimate Multisite předávat jiným aplikacím informace v reálném čase. Webhook doručuje data nebo payloady dalším aplikacím okamžitě, což znamená, že **data získáte ihned.**

To se hodí, když potřebujete předávat určitá data z Ultimate Multisite do jiného CRM nebo systému pokaždé, když nastane nějaká událost. Například potřebujete odeslat jméno a e-mailovou adresu uživatele do mailing listu pokaždé, když je vytvořen nový uživatelský účet.

## Jak vytvořit webhook

Pro vytvoření webhooku přejděte do administrace vaší sítě. Klikněte na **Ultimate Multisite > Webhooks > Add New Webhook.**

![Stránka se seznamem webhooků s tlačítkem Add New Webhook](/img/admin/webhooks-list.png)

Při vytváření nového webhooku budete požádáni o informace jako **Name, URL** a **Event**. Pro svůj webhook můžete použít jakýkoliv název. Nejdůležitějšími poli jsou URL a Event.

![Formulář nového webhooku s poli Name, URL a Event](/img/admin/webhooks-list.png)

URL je **endpoint neboli cílová adresa**, na kterou Ultimate Multisite odešle **payload nebo data**. Jedná se o aplikaci, která data přijme.

Zapier je nejběžnější řešení, které uživatelé používají pro jednodušší integraci s aplikacemi třetích stran. Bez platformy jako je Zapier byste museli ručně vytvořit vlastní funkci, která data zachytí a zpracuje. Podívejte se na článek o tom, **jak používat webhook Ultimate Multisite se Zapierem.**

V tomto článku se podíváme na základní princip fungování webhooků a na události dostupné v Ultimate Multisite. Budeme používat web třetí strany [requestbin.com](https://requestbin.com/). Tento web nám umožní vytvořit endpoint a zachytit payload bez nutnosti programování. _**Upozornění: jediné, co udělá, je, že nám ukáže, že data byla přijata.**_ Payload nebude nijak zpracován ani s ním nebude provedena žádná akce.

Přejděte na [requestbin.com](https://requestbin.com/) a klikněte na Create Request Bin.

![Tlačítko Create Request Bin na webu RequestBin](/img/admin/webhooks-list.png)

Po kliknutí na toto tlačítko budete vyzváni k přihlášení, pokud již máte účet, nebo k registraci. Pokud již účet máte, budete přesměrováni přímo na jejich dashboard. Na dashboardu okamžitě uvidíte endpoint nebo URL, kterou můžete použít při vytváření webhooku v Ultimate Multisite.

![Dashboard RequestBin zobrazující URL endpointu](/img/admin/webhooks-list.png)

Zkopírujte URL a vraťte se do Ultimate Multisite. Vložte endpoint do pole URL a vyberte událost z rozbalovacího seznamu. V tomto příkladu vybereme **Payment Received**.

Tato událost se spustí pokaždé, když uživatel provede platbu. Všechny dostupné události, jejich popisy a payloady jsou uvedeny v dolní části stránky. Klikněte na tlačítko **Add New Webhook** pro uložení webhooku.

![Webhook nakonfigurovaný s událostí Payment Received](/img/admin/webhooks-list.png)

Nyní můžeme odeslat testovací událost na endpoint, abychom zjistili, zda vytvořený webhook funguje. To provedeme kliknutím na **Send Test Event** pod vytvořeným webhookem.

![Možnost Send Test Event pod webhookem](/img/admin/webhooks-list.png)

Zobrazí se potvrzovací okno s informací, že test proběhl úspěšně.

![Potvrzení úspěšné testovací události webhooku](/img/admin/webhooks-list.png)

Když se nyní vrátíme na web _Requestbin_, uvidíme, že payload byl přijat a obsahuje testovací data.

![RequestBin zobrazující přijatá data payloadu webhooku](/img/admin/webhooks-list.png)

Toto je základní princip fungování webhooků a endpointů. Pokud chcete vytvořit vlastní endpoint, budete muset vytvořit vlastní funkci pro zpracování dat, která obdržíte z Ultimate Multisite.
