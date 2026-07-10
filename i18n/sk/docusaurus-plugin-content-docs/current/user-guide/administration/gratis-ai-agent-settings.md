---
title: Nastavenia Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Nastavenia Gratis AI Agent {#gratis-ai-agent-settings}

Obrazovka **Nastavenia → Pokročilé** v Gratis AI Agent poskytuje konfiguráciu na úrovni administrátora pre backendové integrácie. Táto stránka dokumentuje preposielanie spätnej väzby, kľúče poskytovateľov vyhľadávania, nastavenie spravovanej služby Superdav, ovládacie prvky Google Calendar, nastavenia SMS TextBee a príznaky funkcií platné pre celú sieť.

## Prístup k nastaveniam {#accessing-settings}

1. V administrácii WordPress prejdite na **Gratis AI Agent → Nastavenia**.
2. Kliknite na kartu **Pokročilé**.

## Konfigurácia endpointu spätnej väzby {#feedback-endpoint-configuration}

Endpoint spätnej väzby prijíma POST požiadavky od AI agenta vždy, keď používateľ odošle spätnú väzbu cez tlačidlo palca nadol, banner automatickej výzvy alebo príkaz `/report-issue`.

| Pole | Popis |
|---|---|
| **URL endpointu spätnej väzby** | URL, ktorá prijíma odoslania spätnej väzby ako HTTP POST požiadavky s telom JSON. |
| **Feedback API Key** | bearer token odoslaný v `Authorization` headeri každej požiadavky spätnej väzby. Nechajte prázdne, ak váš endpoint nevyžaduje autentifikáciu. |

### Očakávaný JSON payload {#expected-json-payload}

Váš endpoint spätnej väzby musí akceptovať telo JSON aspoň s nasledujúcimi poľami:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

V payloade môžu byť prítomné ďalšie polia v závislosti od kontextu konverzácie.

### Hodnoty `triage_category` {#triagecategory-values}

Vrstva AI triedenia priradí jednu z nasledujúcich hodnôt do `triage_category` pred preposlaním payloadu:

| Hodnota | Význam |
|---|---|
| `factual_error` | Asistent poskytol nesprávne faktické informácie. |
| `unhelpful_answer` | Odpoveď bola technicky správna, ale nebola užitočná. |
| `inappropriate_content` | Odpoveď obsahovala obsah, ktorý by sa používateľom nemal zobrazovať. |
| `other` | Spätná väzba nezodpovedala známej kategórii. |

### Autentifikácia {#authentication}

Ak váš endpoint vyžaduje autentifikáciu, nastavte pole **Feedback API Key** na svoj bearer token. Agent odošle:

```
Authorization: Bearer <your-api-key>
```

Ak je pole **Feedback API Key** prázdne, neodošle sa žiadny `Authorization` header.

### Vypnutie zberu spätnej väzby {#disabling-feedback-collection}

Nechajte polia **URL endpointu spätnej väzby** aj **Feedback API Key** prázdne. Tlačidlo palca nadol a používateľské rozhranie spätnej väzby zostanú pre používateľov viditeľné, ale odoslania sa neprepošlú do žiadnej externej služby.

## Brave Search API Key {#brave-search-api-key}

Na karte **Pokročilé** pole **Brave Search API Key** povoľuje schopnosť [internetového vyhľadávania](../configuration/internet-search).

| Pole | Popis |
|---|---|
| **Brave Search API Key** | Váš API kľúč z vývojárskeho dashboardu Brave Search. Vyžaduje sa na povolenie internetového vyhľadávania v AI asistentovi. |

Popis poľa obsahuje klikateľný odkaz na stránku registrácie Brave Search API. Nechajte prázdne, ak chcete vypnúť internetové vyhľadávanie.

Pozrite si [Internetové vyhľadávanie](../configuration/internet-search) pre dokumentáciu k tejto funkcii určenú koncovým používateľom.

## Spravovaná služba Superdav {#managed-superdav-service}

Superdav AI Agent v1.18.0 pridáva endpointy spravovanej služby Superdav a automatické provisionovanie pripojenia pre podporované stránky. Použite tieto ovládacie prvky, keď sa má vaša stránka pripojiť k hostovanému poskytovateľovi namiesto manuálne nakonfigurovaného endpointu služby.

| Pole | Popis |
|---|---|
| **Spravovaná služba Superdav** | Povoľuje pripojenie k hostovanej službe Superdav pre podporované stránky. |
| **Provisionovať pripojenie** | Spustí automatické provisionovanie endpointu a prihlasovacích údajov. Použite to po potvrdení, že stránka má používať spravovaného poskytovateľa. |
| **Endpoint služby / Stav pripojenia** | Zobrazuje aktuálny endpoint alebo stav pripojenia po provisionovaní. |

Po provisionovaní uložte nastavenia a overte stav pripojenia skôr, než sa spoľahnete na pracovné postupy spravovanej služby. Ak provisionovanie zlyhá, skontrolujte zobrazené pokyny na opakovanie a potvrďte, že stránka má povolenie používať hostovaného poskytovateľa.

## Konfigurácia Google Calendar {#google-calendar-configuration}

Keď sú povolené funkcie kalendára v Superdav AI Agent v1.18.0, agent môže čítať nakonfigurované kalendáre a podrobnosti udalostí. Nástroje kalendára sú orientované na čítanie a sú užitočné pre pripomienky zohľadňujúce rozvrh, následnú komunikáciu s účastníkmi a párovanie kontaktov.

| Pole | Popis |
|---|---|
| **Prihlasovacie údaje Google Calendar** | Ukladá prihlasovacie údaje alebo token pripojenia potrebný na čítanie údajov kalendára. |
| **Výber kalendára** | Obmedzuje, ktoré nakonfigurované kalendáre môže agent kontrolovať. |
| **Stav pripojenia kalendára** | Potvrdzuje, či aktuálne prihlasovacie údaje dokážu čítať kalendáre a udalosti. |

Obmedzte prihlasovacie údaje kalendára iba na kalendáre, ktoré agent potrebuje. Znova pripojte alebo vymeňte prihlasovacie údaje, ak stav naznačuje expirovaný token.

## SMS notifikácie TextBee {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 pridáva TextBee ako poskytovateľa SMS pre nakonfigurované notifikačné pracovné postupy. SMS notifikácie by mali byť pri citlivých alebo používateľom zobrazovaných správach spárované s bránami ľudského schválenia.

| Pole | Popis |
|---|---|
| **TextBee API Key** | Autentifikuje požiadavky na poskytovateľa SMS TextBee. |
| **Zariadenie / odosielateľ TextBee** | Vyberá odosielateľa alebo zariadenie TextBee používané pre odchádzajúce správy, ak to poskytovateľ vyžaduje. |
| **SMS notifikácie povolené** | Umožňuje schváleným pracovným postupom odosielať notifikácie textovými správami. Nechajte vypnuté, aby ste zabránili odosielaniu SMS. |

Odošlite testovaciu správu iba na číslo vlastnené administrátorom a potom potvrďte správanie schvaľovacej brány pred povolením plánovaných pripomienok alebo pripomienok určených účastníkom.

## Príznaky funkcií {#feature-flags}

Karta **Nastavenia → Príznaky funkcií**, takisto predstavená vo v1.9.0, poskytuje prepínače pre voliteľné funkcie. Každý príznak je buď povolený, alebo vypnutý v celej sieti; v súčasnosti neexistuje prepísanie pre jednotlivé stránky.

### Prístup k príznakom funkcií {#accessing-feature-flags}

1. V administrácii WordPress prejdite na **Gratis AI Agent → Nastavenia**.
2. Kliknite na kartu **Príznaky funkcií**.

### Príznaky riadenia prístupu {#access-control-flags}

| Príznak | Predvolené | Popis |
|---|---|---|
| **Obmedziť na administrátorov** | Vypnuté | Keď je zapnuté, panel chatu AI Agent môžu otvoriť iba používatelia s rolou `administrator`. Všetky ostatné roly namiesto toho uvidia správu „Kontaktujte svojho administrátora“. |
| **Obmedziť na Network Admins** | Vypnuté | Keď je zapnuté v multisite sieti, agenta môžu používať iba Super Admins. Administrátori jednotlivých stránok sú zablokovaní. Má prednosť pred „Obmedziť na administrátorov“, ak sú zapnuté obe možnosti. |
| **Povoliť prístup Subscriberom** | Vypnuté | Keď je zapnuté, používatelia s rolou `subscriber` môžu používať rozhranie chatu, ale sú obmedzení iba na možnosti na čítanie (bez vytvárania príspevkov alebo zmien nastavení). |
| **Zakázať pre nečlenov** | Vypnuté | Integruje sa so stavom členstva Ultimate Multisite. Keď je zapnuté, chat je skrytý pre stránky, ktoré nemajú aktívne členstvo. |

### Príznaky brandingu {#branding-flags}

| Príznak | Predvolené | Popis |
|---|---|---|
| **Skryť pätu „Powered by Gratis AI Agent“** | Vypnuté | Odstráni riadok s označením značky zobrazený v spodnej časti chat widgetu. Odporúča sa pre nasadenia s vlastnou značkou. |
| **Vlastný názov agenta** | *(prázdne)* | Nahradí predvolený štítok „Gratis AI Agent“ v hlavičke chatu a admin menu vaším vlastným názvom produktu. Ak chcete použiť predvolené nastavenie, nechajte prázdne. |
| **Skryť výber agenta** | Vypnuté | Keď je zapnuté, používatelia nemôžu prepínať medzi piatimi vstavanými agentmi. Aktuálny agent je pevne nastavený na čokoľvek, čo je nakonfigurované ako predvolené v Settings → General. |
| **Použiť ikonu stránky ako avatar chatu** | Vypnuté | Nahradí predvolenú ikonu AI v hlavičke chat widgetu ikonou WordPress stránky (nastavenou v Appearance → Customize → Site Identity). |

### Príznaky bezpečnosti automatizácie {#automation-safety-flags}

Superdav AI Agent v1.18.0 zavádza brány ľudského schválenia a záznamy pripomienok pre bezpečnejšie behy automatizácie. Tieto ovládacie prvky sa môžu zobraziť v príznakoch funkcií alebo v pokročilých nastaveniach automatizácie, v závislosti od nainštalovaného balíka.

| Príznak | Predvolené | Popis |
|---|---|---|
| **Vyžadovať ľudské schválenie** | Odporúčané zapnuté | Pozastaví citlivé automatizácie, kým oprávnený používateľ neskontroluje a nepotvrdí navrhovanú akciu. |
| **Deduplikácia pripomienok** | Zapnuté | Zaznamenáva odoslané pripomienky, aby opakované pokusy alebo naplánované behy neposielali duplicitné upozornenia. |
| **Povoliť nástroje kalendára** | Vypnuté, kým nebude nakonfigurované | Umožňuje agentovi čítať nakonfigurované Google kalendáre a udalosti. |
| **Povoliť SMS upozornenia** | Vypnuté, kým nebude nakonfigurované | Umožňuje schváleným pracovným postupom odosielať TextBee SMS upozornenia po uložení prihlasovacích údajov. |

### Použitie zmien {#applying-changes}

Po prepnutí ľubovoľného príznaku kliknite na **Uložiť nastavenia**. Zmeny sa prejavia okamžite — nie je potrebné vyprázdniť cache ani znovu aktivovať plugin.
