---
title: Nastavení Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Nastavení Gratis AI Agent

Obrazovka **Settings → Advanced** v Gratis AI Agent poskytuje konfiguraci na úrovni administrátora pro backendové integrace. Tato stránka dokumentuje předávání zpětné vazby, klíče poskytovatelů vyhledávání, nastavení spravované služby Superdav, ovládací prvky Google Calendar, nastavení SMS TextBee a příznaky funkcí pro celou síť.

## Přístup k nastavení {#accessing-settings}

1. V administraci WordPress přejděte na **Gratis AI Agent → Settings**.
2. Klikněte na kartu **Advanced**.

## Konfigurace endpointu zpětné vazby {#feedback-endpoint-configuration}

Endpoint zpětné vazby přijímá požadavky POST od AI agenta vždy, když uživatel odešle zpětnou vazbu pomocí tlačítka palce dolů, banneru s automatickou výzvou nebo příkazu `/report-issue`.

| Pole | Popis |
|---|---|
| **Feedback Endpoint URL** | URL, která přijímá odeslání zpětné vazby jako HTTP POST požadavky s tělem JSON. |
| **Feedback API Key** | bearer token odesílaný v `Authorization` header každého požadavku zpětné vazby. Pokud váš endpoint nevyžaduje ověření, ponechte prázdné. |

### Očekávaný JSON Payload {#expected-json-payload}

Váš endpoint zpětné vazby musí přijmout tělo JSON alespoň s následujícími poli:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

V payloadu mohou být přítomna další pole v závislosti na kontextu konverzace.

### Hodnoty `triage_category` {#triagecategory-values}

Vrstva AI třídění přiřadí `triage_category` jednu z následujících hodnot před předáním payloadu:

| Hodnota | Význam |
|---|---|
| `factual_error` | Asistent poskytl nesprávné faktické informace. |
| `unhelpful_answer` | Odpověď byla technicky správná, ale nebyla užitečná. |
| `inappropriate_content` | Odpověď obsahovala obsah, který by se neměl zobrazovat uživatelům. |
| `other` | Zpětná vazba neodpovídala známé kategorii. |

### Ověření {#authentication}

Pokud váš endpoint vyžaduje ověření, nastavte pole **Feedback API Key** na svůj bearer token. Agent odesílá:

```
Authorization: Bearer <your-api-key>
```

Pokud je pole **Feedback API Key** prázdné, neodesílá se žádný `Authorization` header.

### Zakázání shromažďování zpětné vazby {#disabling-feedback-collection}

Ponechte pole **Feedback Endpoint URL** i **Feedback API Key** prázdná. Tlačítko palce dolů a UI zpětné vazby zůstanou pro uživatele viditelné, ale odeslání se nepředávají žádné externí službě.

## Brave Search API Key {#brave-search-api-key}

Také na kartě **Advanced** pole **Brave Search API Key** povoluje schopnost [Internet Search](../configuration/internet-search).

| Pole | Popis |
|---|---|
| **Brave Search API Key** | Váš API klíč z vývojářského Dashboard Brave Search. Vyžaduje se pro povolení internetového vyhledávání v AI asistentovi. |

Popisek pole obsahuje klikací odkaz na registrační stránku Brave Search API. Ponechte prázdné pro zakázání internetového vyhledávání.

Viz [Internet Search](../configuration/internet-search) pro dokumentaci k této funkci určenou koncovým uživatelům.

## Spravovaná služba Superdav {#managed-superdav-service}

Superdav AI Agent v1.18.0 přidává endpointy spravované služby Superdav a automatické zřizování připojení pro podporované weby. Tyto ovládací prvky použijte, když se váš web má připojit k hostovanému poskytovateli místo ručně nakonfigurovaného endpointu služby.

| Pole | Popis |
|---|---|
| **Managed Superdav Service** | Povoluje připojení k hostované službě Superdav pro podporované weby. |
| **Provision Connection** | Spustí automatické zřizování endpointu a přihlašovacích údajů. Použijte po potvrzení, že web má používat spravovaného poskytovatele. |
| **Service Endpoint / Connection Status** | Zobrazuje aktuální endpoint nebo stav připojení po zřízení. |

Po zřízení uložte nastavení a ověřte stav připojení, než se začnete spoléhat na workflow spravované služby. Pokud se zřízení nezdaří, projděte zobrazené pokyny k opakování a potvrďte, že web má oprávnění používat hostovaného poskytovatele.

## Konfigurace Google Calendar {#google-calendar-configuration}

Když jsou povoleny funkce kalendáře Superdav AI Agent v1.18.0, agent může číst nakonfigurované kalendáře a podrobnosti událostí. Nástroje kalendáře jsou orientované na čtení a jsou užitečné pro připomínky zohledňující harmonogram, navazující komunikaci s účastníky a párování kontaktů.

| Pole | Popis |
|---|---|
| **Google Calendar Credentials** | Ukládá přihlašovací údaje nebo připojení tokenu potřebné ke čtení dat kalendáře. |
| **Calendar Selection** | Omezuje, které nakonfigurované kalendáře smí agent kontrolovat. |
| **Calendar Connection Status** | Potvrzuje, zda aktuální přihlašovací údaje mohou číst kalendáře a události. |

Omezte přihlašovací údaje kalendáře pouze na kalendáře, které agent potřebuje. Pokud stav ukazuje na vypršený token, znovu připojte nebo obměňte přihlašovací údaje.

## TextBee SMS oznámení {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 přidává TextBee jako poskytovatele SMS pro nakonfigurované workflow oznámení. SMS oznámení by měla být u citlivých zpráv nebo zpráv určených uživatelům spárována s branami lidského schválení.

| Pole | Popis |
|---|---|
| **TextBee API Key** | Ověřuje požadavky na poskytovatele SMS TextBee. |
| **TextBee Device / Sender** | Vybírá odesílatele nebo zařízení TextBee používané pro odchozí zprávy, pokud to poskytovatel vyžaduje. |
| **SMS Notifications Enabled** | Umožňuje schváleným workflow odesílat oznámení textovými zprávami. Ponechte vypnuto, abyste zabránili odesílání SMS. |

Odešlete testovací zprávu pouze na číslo vlastněné administrátorem a poté potvrďte chování schvalovací brány před povolením plánovaných připomínek nebo připomínek určených účastníkům.

## Příznaky funkcí {#feature-flags}

Karta **Settings → Feature Flags**, také zavedená ve v1.9.0, poskytuje přepínače pro volitelné funkce. Každý příznak je buď povolen, nebo zakázán pro celou síť; v tuto chvíli neexistuje přepsání pro jednotlivé weby.

### Přístup k příznakům funkcí {#accessing-feature-flags}

1. V administraci WordPress přejděte na **Gratis AI Agent → Settings**.
2. Klikněte na kartu **Feature Flags**.

### Příznaky řízení přístupu {#access-control-flags}

| Příznak | Výchozí | Popis |
|---|---|---|
| **Omezit na administrátory** | Vypnuto | Když je zapnuto, panel chatu AI Agent mohou otevřít pouze uživatelé s rolí `administrator`. Všechny ostatní role místo toho uvidí zprávu „Kontaktujte svého administrátora“. |
| **Omezit na Network Admins** | Vypnuto | Když je zapnuto v multisite síti, agenta mohou používat pouze Super Admins. Administrátoři jednotlivých webů jsou zablokováni. Má přednost před „Omezit na administrátory“, pokud jsou zapnuté obě možnosti. |
| **Povolit přístup Subscriberům** | Vypnuto | Když je zapnuto, uživatelé s rolí `subscriber` mohou používat rozhraní chatu, ale jsou omezeni pouze na možnosti pro čtení (bez vytváření příspěvků nebo změn nastavení). |
| **Zakázat pro nečleny** | Vypnuto | Integruje se se stavem členství Ultimate Multisite. Když je zapnuto, chat je skrytý pro weby, které nemají aktivní členství. |

### Příznaky brandingu {#branding-flags}

| Příznak | Výchozí | Popis |
|---|---|---|
| **Skrýt patičku „Powered by Gratis AI Agent“** | Vypnuto | Odstraní řádek s uvedením brandingu zobrazený ve spodní části chatovacího widgetu. Doporučeno pro nasazení pod vlastní značkou. |
| **Vlastní název agenta** | *(prázdné)* | Nahradí výchozí popisek „Gratis AI Agent“ v záhlaví chatu a administrátorském menu vaším vlastním názvem produktu. Ponechte prázdné pro použití výchozího nastavení. |
| **Skrýt výběr agenta** | Vypnuto | Když je zapnuto, uživatelé nemohou přepínat mezi pěti vestavěnými agenty. Aktuální agent je pevně nastaven podle toho, co je nakonfigurováno jako výchozí v Nastavení → Obecné. |
| **Použít ikonu webu jako avatar chatu** | Vypnuto | Nahradí výchozí ikonu AI v záhlaví chatovacího widgetu ikonou webu WordPress (nastavenou v Vzhled → Přizpůsobit → Identita webu). |

### Bezpečnostní příznaky automatizace {#automation-safety-flags}

Superdav AI Agent v1.18.0 zavádí brány pro lidské schválení a záznamy připomenutí pro bezpečnější běhy automatizace. Tyto ovládací prvky se mohou zobrazit v příznacích funkcí nebo pokročilých nastaveních automatizace, podle nainstalovaného balíčku.

| Příznak | Výchozí | Popis |
|---|---|---|
| **Vyžadovat lidské schválení** | Doporučeno zapnout | Pozastaví citlivé automatizace, dokud oprávněný uživatel nezkontroluje a nepotvrdí navrhovanou akci. |
| **Deduplikace připomenutí** | Zapnuto | Zaznamenává odeslaná připomenutí, aby opakování nebo naplánovaná spuštění neposílala duplicitní oznámení. |
| **Povolit nástroje kalendáře** | Vypnuto, dokud není nakonfigurováno | Umožňuje agentovi číst nakonfigurované kalendáře a události Google. |
| **Povolit SMS oznámení** | Vypnuto, dokud není nakonfigurováno | Umožňuje schváleným workflow odesílat SMS oznámení TextBee po uložení přihlašovacích údajů. |

### Použití změn {#applying-changes}

Po přepnutí libovolného příznaku klikněte na **Uložit nastavení**. Změny se projeví okamžitě — není potřeba vyprázdnit cache ani znovu aktivovat plugin.
