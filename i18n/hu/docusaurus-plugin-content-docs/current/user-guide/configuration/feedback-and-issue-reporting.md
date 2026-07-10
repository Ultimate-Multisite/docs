---
title: Ügyfél visszajelzése és problémajelzés
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Ügyfél visszajelzése és problémajelentés {#customer-feedback--issue-reporting}

A Gratis AI Agent v1.5.0 bevezet egy beépített visszajelzési és problémajelentési rendszert, amely lehetővé teszi az end-user-ek számára, hogy jelöljék ki a nem hasznos válaszokat, és közvetlenül a chat felületéről jelentek problémákat. Ez a rendszer magában foglalja a hozzájáruláskezelést, egy automatizált jelentési parancsot, és AI-segített szűrést (triage) a háttérben.

## A "Nem tetszett" gomb {#thumbs-down-button}

Az AI asszisztens által küldött minden üzenethez egy **nem tetszett** (👎) gomb jelenik meg. Amikor egy felhasználó rákattint rá, jelölheti ki a válaszát mint nem hasznos vagy helytelen.

- A gomb megjelenik az asszisztens üzenetei mellett, amikor rámutatnak.
- Kattintással megnyílik a **Visszajelzési Hozzájárulás Modálja**.
- A visszajelzés az üzenetkülderi szálhoz és az adott üzenethez társul.

## Visszajelzési Hozzájárulás Modál {#feedback-consent-modal}

Amikor egy felhasználó rákattint a nem tetszett gombra, adatküldés előtt egy hozzájárulásmodál jelenik meg. A modál:

- Elmagyarázza, milyen információkat fog gyűjteni (az üzenetkirakmazás, a böngésző kontextusa).
- Kéri a felhasználót, hogy megerősítse, hogy hozzájárul-e az ilyen adatok megosztásához.
- Üzenetmezővel biztosítja a felhasználónak, hogy leírja, mi ment el.
- **Mégsem** opciót biztosít, hogy bezárja a modált anélkül, hogy elküldené.

Nincs visszajelzés rögzítve, amíg a felhasználó nem erősíti meg ezt kifejezetten.

## Automatikus Visszajelzési Banner {#auto-prompt-feedback-banner}

Egy beszélgetés végén az asszisztens egy **automatikus visszajelzési banneret** jeleníthet meg – egy nem zavaró üzenetet, amely megkérdezi, hasznos volt-e a munkamenet.

Ez a banner automatikusan jelenik meg a beszélgetés hosszától és az eredményeinek heurisztikai értéke alapján. Ugyanaz a visszajelzési folyamot használja, mint a nem tetszett gomb. A felhasználók bezárhatják a banneret anélkül, hogy visszajelzést adnának.

## `/report-issue` Slash Parancs {#report-issue-slash-command}

A felhasználók közvetlenül a chat input mezőjébe írva a `/report-issue` parancsot tudják elindítani a visszajelzési folyamatot. Ez a parancs:

- Ekkor azonnal megnyitja a Visszajelzési Hozzájárulás Modálját.
- Elő-tölti a leíró mezőt a jelenlegi beszélgetés kontextusával.
- Lehetővé teszi a felhasználónak, hogy további részleteket adjon hozzá a küldés előtt.

Az `/report-issue` parancs minden chat módban elérhető (inline, floating widget, full-screen).

## AI-Segített Szűrés (Triage) {#ai-assisted-triage}

A küldött visszajelzéseket egy AI szűrési réteg fogadja, amely:

- Kategóriába sorolja a jelentést (tényháromság, nem hasznos válasz, inapropriális tartalom stb.).
- Mellékel releváns beszélgetési metadatokat.
- Elküldi a szűrési összefoglalót a konfigurált **Visszajelzési Endpoint**-re (lásd [Settings > Advanced](#settings-advanced)).

Ez csökkenti a kézi áttekintési időt, mivel először a legkritikusabb problémákat emeli ki.

## Settings > Advanced {#settings-advanced}

Ahhoz, hogy aktiválják a visszajelzési háttérrendszert, a következő mezőket kell konfigurálni a **Gratis AI Agent → Settings → Advanced** alatt:

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | Az URL, amely fogadja a visszajelzési adatok (payload) POST kéréseit (JSON). |
| **Feedback API Key** | Bearer token, amelyet az `Authorization` fejben küldnek a visszajelzés elküldésének hitelesítéséhez. |

Ha mindkét mezőt üresen hagyják, kikapcsolják a visszajelzés gyűjtését. Az egyedi visszajelzési gombok továbbra is láthatóak a felhasználók számára, de a küldések nem kerülnek továbbításra.

:::tip
A visszajelzési endpointnek JSON testet kell elfogadnia, amely legalább `message_id`, `conversation_id`, `feedback_text` és `triage_category` mezőket tartalmaz. Látogasson el a visszajelzési endpoint szolgáltatójának dokumentációjához a várható skémához.
:::
