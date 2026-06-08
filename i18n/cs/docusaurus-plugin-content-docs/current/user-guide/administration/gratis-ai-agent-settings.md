---
title: Zdarma nastavení AI agenta
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Nastavení Gratis AI Agent

Ekran **Nastavení → Pokročilé** v Gratis AI Agent poskytuje administrátorská úroveň konfigurace pro backend integrace, které byly přidány ve verzi v1.5.0. Tato stránka dokumentuje pole **Feedback Endpoint** a jejich očekávaný formát.

## Přístup k nastavení

1. V administraci WordPress se přihlaste na **Gratis AI Agent → Nastavení**.
2. Klikněte na záložku **Pokročilé**.

## Konfigurace Feedback Endpointu

Feedback endpoint přijímá POST požadavky od AI agenta, když uživatel odešle zpětnou vazbu pomocí tlačítka s ukazováčkem dolů, bannera pro automatické dotazy nebo příkazu `/report-issue`.

| Pole | Popis |
|---|---|
| **Feedback Endpoint URL** | URL, která přijímá odesílané zpětnou vazbu jako HTTP POST požadavky s tělem ve formátu JSON. |
| **Feedback API Key** | Bearer token odesílaný v hlavičce `Authorization` každého požadavku na zpětnou vazbu. Nechte pole prázdné, pokud váš endpoint autentizaci nevyžaduje. |

### Očekávané JSON tělo

Váš feedback endpoint musí přijímat tělo ve formátu JSON, které obsahuje alespoň následující pole:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Odpověď byla špatná ohledně cen.",
  "triage_category": "factual_error"
}
```

Další pole mohou být v těle přítomna v závislosti na kontextu konverzace.

### Hodnoty `triage_category`

AI vrstvení (triage layer) při předávání těla nastaví jednu z následujících hodnot pro `triage_category`:

| Hodnota | Význam |
|---|---|
| `factual_error` | Asistent poskytl špatné faktické informace. |
| `unhelpful_answer` | Odpověď byla technicky správná, ale nepřídatná. |
| `inappropriate_content` | Odpověď obsahovala obsah, který uživatelům neměl být zobrazen. |
| `other` | Zpětná vazba neodpovídala známé kategorii. |

### Autentizace

Pokud váš endpoint vyžaduje autentizaci, nastavte pole **Feedback API Key** na váš bearer token. Agent odešle:

```
Authorization: Bearer <your-api-key>
```

Pokud je pole **Feedback API Key** prázdné, žádná hlavička `Authorization` není odeslána.

### Vypnutí sběru zpětné vazby

Nechte pole **Feedback Endpoint URL** i **Feedback API Key** prázdné. Tlačítko s ukazováčkem dolů a rozhraní pro zpětnou vazbu zůstanou pro uživatele viditelná, ale odesílání nebude posíláno do žádné externí služby.

## Brave Search API Key

Na záložce **Pokročilé** se pole **Brave Search API Key** také umožňuje schopnost [Internetového vyhledávání](../configuration/internet-search).

| Pole | Popis |
|---|---|
| **Brave Search API Key** | Váš API klíč z vývojářského dashboardu Brave Search. Je vyžadován k povolení internetového vyhledávání v AI asistentovi. |

Název pole obsahuje klikatelný odkaz na stránku pro registraci API klíče Brave Search. Nechte pole prázdné, abyste internetové vyhledávání deaktivovali.

Podrobnější dokumentaci pro konečné uživatele naleznete na [Internet Search](../configuration/internet-search).

## Funkční přepínače (Feature Flags)

Funkční přepínače, které byly také přidány ve verzi v1.9.0, na záložce **Nastavení → Funkční přepínače** poskytují přepínače pro volitelné funkce. Každý přepínač je globálně zapnutý nebo vypnutý; v tuto chvíli neexistuje možnost nadřazeného nastavení na úrovni konkrétní stránky.

### Přístup k funkčním přepínačům

1. V administraci WordPress se přihlaste na **Gratis AI Agent → Nastavení**.
2. Klikněte na záložku **Funkční přepínače**.

### Přístupové přepínače

| Flag | Default | Description |
|---|---|---|
| **Restrict to Administrators** | Off | Když je zapnut, pouze uživatelé s rolí `administrator` mohou otevřít panel chatu AI agenta. Všechny ostatní role uvidí zprávu „Kontaktujte svého administrátora“. |
| **Restrict to Network Admins** | Off | Když je zapnut na multisite síti, agent může používat pouze Super Administrátor. Individuální administrátorů stránky je zablokováno. Má přednost před „Restrict to Administrators“, pokud jsou oba zapnuty. |
| **Allow Subscriber Access** | Off | Když je zapnut, uživatelé s rolí `subscriber` mohou používat chatovací rozhraní, ale jsou omezeni na čtecké schopnosti (nemohou vytvářet příspěvky ani měnit nastavení). |
| **Disable for Non-Members** | Off | Integruje se se statusem členství Ultimate Multisite. Když je zapnut, chat je skrytý pro stránky, které nemají aktivní členství. |

### Branding přepínače

| Flag | Default | Description |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | Odstraní řádek atribuce značky zobrazený v dolní části widgetu chatu. Doporučeno pro nasazení typu white-label. |
| **Custom Agent Name** | *(blank)* | Nahradí výchozí název „Gratis AI Agent“ v hlavičce chatu a v menu administrace vaším vlastním názvem produktu. Nechte prázdné, abyste použili výchozí. |
| **Hide Agent Picker** | Off | Když je zapnut, uživatelé nemohou přepínat mezi pěti vestavěnými agenty. Aktuální agent je fixován na to, co je nastaveno jako výchozí v Nastavení → Obecné. |
| **Use Site Icon as Chat Avatar** | Off | Nahradí výchozí ikonu AI v hlavičce widgetu chatu ikonou stránky WordPress (nastavené pod Vzhled → Přizpůsobit → Identita stránky). |

### Aplikace změn

Klikněte na **Save Settings** po přepnutí jakéhokoli přepínače. Změny platí okamžitě – není nutné vymazávat cache ani reaktivovat plugin.
