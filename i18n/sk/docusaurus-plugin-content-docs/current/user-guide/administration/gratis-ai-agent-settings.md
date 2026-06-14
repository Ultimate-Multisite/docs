---
title: Gratis nastavenia AI agentov
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Nastavenia AI Agent bez poplatku (Gratis)

Ekran **Nastavenia → Pokročilé** v Gratis AI Agent poskytuje konfiguráciu na úrovni administrátora pre integrácie v pozadí, ktoré boli pridané v verzii v1.5.0. Táto stránka dokumentuje pole **Feedback Endpoint** a jeho očakávaný formát.

## Prístup k nastaveniam

1. V adminom paneli WordPress prejdite do **Gratis AI Agent → Nastavenia**.
2. Kliknite na záložku **Pokročilé (Advanced)**.

## Konfigurácia Feedback Endpointu

Feedback endpoint prijíma POST požiadavky od AI agenta, keď používateľ posiela spätnú väzbu pomocou tlačidla s palcom dole, banneru automatického promptu alebo príkazu `/report-issue`.

| Pole | Popis |
|---|---|
| **Feedback Endpoint URL** | URL adresa, ktorá prijíma odoslania sprievodnej väzby ako HTTP POST požiadavky s JSON telom. |
| **Feedback API Key** | Bearer token posielaný v hlavičke `Authorization` každej žiadosti o spätnú väzbu. Nechajte prázdne, ak váš endpoint nevyžaduje autentifikáciu. |

### Očakávaný JSON náklad (Payload)

Váš feedback endpoint musí prijímať JSON telo s minimálne nasledujúcimi polami:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Odpoveď bola nesprávna ohľadom cien.",
  "triage_category": "factual_error"
}
```

Do nákladu môžu byť prítomné iné polia v závislosti od kontextu konverzácie.

### Hodnotky `triage_category`

AI vrstva triážuje (triage) príspevok a pred jeho poslaním mu присviava jednu z nasledujúcich hodnôt:

| Hodnota | Značka |
|---|---|
| `factual_error` | Asistent poskytol nesprávne fakty. |
| `unhelpful_answer` | Odpoveď bola technicky správna, ale nebola užitočná. |
| `inappropriate_content` | Odpoveď obsahovala obsah, ktorý nemal byť zobrazený používateľom. |
| `other` | Sprievodná väzba neodpadala do známej kategórie. |

### Autentifikácia

Ak ide endpoint vyžaduje autentifikáciu, nastavte pole **Feedback API Key** na váš bearer token. Agent pošle:

```
Authorization: Bearer <your-api-key>
```

Ak je pole **Feedback API Key** prázdne, žiadny hlavička `Authorization` sa neposiela.

### Vyhľadávanie Feedbacku (Disabling Feedback Collection)

Nechajte obojdie pole **Feedback Endpoint URL** a **Feedback API Key** prázdne. Tlačidlo s palcom dole a rozhranie pre dávanie feedbacku zostávajú viditeľné pre používateľov, ale odoslania sa neposielajú žiadnemu externému službe.

## Brave Search API Key

Na záľava **Advanced** tabu je pole **Brave Search API Key** aktívny a umožňuje funkciu [Internet Search](../configuration/internet-search).

| Pole | Popis |
|---|---|
| **Brave Search API Key** | Vaša API kľúč z dashboardu vývojára Brave Search. Požadovaný na aktiváciu internetového vyhľadávania v AI asistentovom systéme. |

Popis pole obsahuje klikateľný odkaz na stránku registrácii Brave Search API. Nechajte prázdne, aby ste deaktivovali internetové vyhľadávanie.

Pre podrobné informácie o tejto funkcii pre koncových používateľov si pozrite [Internet Search](../configuration/internet-search).

## Feature Flags (Flagy funkcií)

Povoliť tiež v verzii v1.9.0, tabu **Settings → Feature Flags** poskytuje vypínačky pre voliteľné funkcie. Každá flag je buď zapnutá alebo vypnutá na celom systéme; momentálne nie je možná nadpisová konfigurácia na úrovni konkrétnej stránky.

### Prístup k Flagám funkcií

1. V admini WordPressu prejdite do **Gratis AI Agent → Settings**.
2. Kliknite na tab **Feature Flags**.

### Flagy kontroly prístupu (Access Control Flags)

| Flag | Default | Popis |
|---|---|---|
| **Omeňovanie na administrátorov** | Vypnuté | Ak je zapnuté, iba používatelia s roľou `administrator` môžu otvoriť chat panel AI Agent. Všetci ostatní vidia správu typu „Kontaktujte svojho administrátora“. |
| **Omeňovanie na sieti adminov** | Vypnuté | Ak je zapnuté v siete multisite, iba Super Adminovia môžu používať agenta. Individuálne admini sit nie sú blokovaní. Toto má vyššiu platnosť ako „Omeňovanie na administrátorov“, ak sú obojcie zapnuté. |
| **Povoliť prístup pre predplatiteľov** | Vypnuté | Ak je zapnuté, používatelia s roľou `subscriber` môžu používať rozhranie chatu, ale sú obmedzeni na čítanie (nie môžu vytvárať príspevky ani menia nastavenia). |
| **Vypnúť pre nečlenov** | Vypnuté | Integruje sa s aktuálnym stavom členstva v Ultimate Multisite. Ak je zapnuté, chat sa skryje na sitách bez aktívneho členstva. |

### Flágy značky (Branding Flags)

| Flag | Default | Popis |
|---|---|---|
| **Skryť spodnú časť „Powered by Gratis AI Agent“** | Vypnuté | Odstráni atribúciu značky viditelnú na spodnej časti chatového widgetu. Doporučuje sa pre nasadenia s vlastnou značkou (white-label). |
| **Vlastný názov agenta** | *(prázdne)* | Nahradí štandardný popis „Gratis AI Agent“ v hlavičke chatu a v menu admina vašim vlastným názvom produktu. Nechajte prázdne, ak chcete použiť štandardný. |
| **Skryť výber agenta** | Vypnuté | Ak je zapnuté, používatelia nemôžu premieniť sa medzi päti vbuiltajúcimi agentmi. Aktuálny agent je zablokovaný na tom, čo je nastavené ako štandardné v Nastaveniach → Obecné (Settings → General). |
| **Použiť ikonu sita ako avatar chatu** | Vypnuté | Nahradí štandardnú AI ikonu v hlavičke chatového widgetu ikonou vášho WordPress sita (nastavenú pod Vzhľad → Prispôsobenie → Identita sita). |

### Aplikovanie zmien

Kliknite na **Uložiť nastavenia** po prepnutí akékoľvek flagy. Zmeny sa okamžite uplatnia — nie je potrebné vymazať cache ani ponovo aktivovať plugin.
