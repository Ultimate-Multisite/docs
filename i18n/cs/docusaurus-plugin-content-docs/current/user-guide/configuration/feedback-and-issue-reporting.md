---
title: Zpětná vazba zákazníků a hlášení problémů
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Zpětná vazba a hlášení problémů zákazníků

Gratis AI Agent v1.5.0 zavádí vestavěný systém pro sběr zpětné vazby a hlášení problémů, který uživatelům umožní označit neuspokojivé odpovědi a hlášit problémy přímo z chatového rozhraní. Tento systém zahrnuje správu souhlasu, automatizovaný příkaz pro hlášení a asistovanou třídění (triage) na backendu.

## Tlačítko „Ne“ (Thumbs-Down Button)

Každá zpráva odeslaná asistenta zobrazuje tlačítko **„Ne“** (👎). Když uživatel na něj klikne, může odpověď označit jako neuspokojivou nebo chybnou.

- Tlačítko se objeví při přejezdu myší vedle každé zprávy asistenta.
- Kliknutí na něj otevře **Modální okno pro souhlas se sběrem zpětné vazby** (Feedback Consent Modal).
- Zpětná vazba je spojena s konverzačním vláknem a konkrétní zprávou.

## Modální okno pro souhlas se sběrem zpětné vazby (Feedback Consent Modal)

Když uživatel klikne na tlačítko „Ne“, před odesláním jakýchkoli dat se zobrazí modální okno pro souhlas. Toto okno:

- Vysvětlí, jaké informace budou sbírány (výňatek z konverzace, kontext prohlížeče).
- Požádá uživatele o potvrzení, že souhlasí se sdílením těchto dat.
- Poskytne textové pole, kde uživatel může popsat, co šlo špatně.
- Nabídne možnost **Zrušit** k zavření okna bez odeslání.

Žádná zpětná vazba není zaznamenána, dokud uživatel výslovně nezíská souhlas.

## Banner pro zpětnou vazbu z automatického dotazu (Auto-Prompt Feedback Banner)

Na konci konverzace může asistent zobrazit **banner pro zpětnou vazbu z automatického dotazu** – neinvazivní zprávu, která se ptá, zda byla sezení užitečné.

Tento banner se zobrazí automaticky na základě délky a výsledku konverzace (heuristiky). Odkazuje na stejný tok zpětné vazby jako tlačítko „Ne“. Uživatelé mohou banner zavřít bez poskytnutí zpětné vazby.

## Příkaz `/report-issue`

Uživatelé mohou spustit tok zpětné vazby přímo zadáním `/report-issue` do vstupního pole chatu. Tento příkaz:

- Okamžitě otevře Modální okno pro souhlas se sběrem zpětné vazby.
- Předplní pole popisu kontextem aktuální konverzace.
- Umožní uživatelům přidat další detaily před odesláním.

Příkaz `/report-issue` je k dispozici ve všech režimech chatu (inline, plovoucí widget, plná obrazovka).

## Asistované třídění (AI-Assisted Triage)

Odeslaná zpětná vazba je směrována do vrstvy AI třídění, která:

- Kategorizuje zprávu (faktická chyba, neuspokojivá odpověď, nevhodný obsah atd.).
- Připojí relevantní metadata konverzace.
- Posílá shrnutí třídění do nakonfigurovaného **Endpointu pro zpětnou vazbu** (viz [Nastavení > Pokročilé](#settings-advanced)).

Tím se snižuje čas manuální revize, protože nejkritičější problémy jsou identifikovány jako první.

## Nastavení > Pokročilé {#settings-advanced}

Pro aktivaci backendu pro zpětnou vazbu nakonfigurujte následující pole v sekci **Gratis AI Agent → Nastavení → Pokročilé**:

| Pole | Popis |
|---|---|
| **Feedback Endpoint URL** | URL, která přijímá POST požadavky s payloady zpětné vazby (JSON). |
| **Feedback API Key** | Bearer token odesílaný v hlavičce `Authorization` pro ověření odesílání zpětné vazby. |

Nechat oba pole prázdné deaktivuje sběr zpětné vazby. Individuální tlačítka pro zpětnou vazbu zůstanou pro uživatele viditelná, ale odesílání nebude posíláno.

:::tip
Endpoint pro zpětnou vazbu musí přijímat JSON tělo s alespoň poli `message_id`, `conversation_id`, `feedback_text` a `triage_category`. Podrobnosti o očekávaném schématu zjistíte u poskytovatele vašeho endpointu.
:::
