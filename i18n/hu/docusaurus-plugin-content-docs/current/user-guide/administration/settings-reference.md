---
title: Beállítási referencia
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Beállítások referenciája

Ez az oldal azokat a beállításokat követi, amelyek befolyásolják a napi adminisztrációt és az Ultimate Multisite legutóbbi viselkedésbeli változásait.

## Egyéb beállítások

Az **Egyéb beállítások** terület az **Ultimate Multisite > Settings > Login & Registration** alatt jelenik meg.

| Beállítás | Leírás |
|---|---|
| **Enable Jumper** | Megjeleníti a Jumper gyors navigációs eszközt az admin területen. Használd arra, hogy közvetlenül az Ultimate Multisite képernyőire, hálózati objektumokra és támogatott admin célokra ugorj. Tiltsd le, ha nem szeretnéd, hogy ez a parancsikon látható legyen. |

## Hibajelentés és telemetria

A korábbi hibajelentési feliratkozási beállítás el lett távolítva a beállítások oldaláról. Az anonim telemetria le van tiltva, és nincs UI kapcsoló az engedélyezéséhez.

Ha belső runbookokat vagy képernyőképeket tartasz karban a beállítások oldalához, távolítsd el a régi hibajelentési feliratkozási mezőre való hivatkozásokat, hogy az adminisztrátorok ne keressenek egy már nem létező beállítást.

## Import/Export beállítások

Az **Import/Export** beállítási fül leírja, mely beállításokat vezérli, és közvetlenül az **Ultimate Multisite > Site Export** oldalra hivatkozik a site- és hálózati archívumokhoz. Használd a beállítási fület az import/export konfigurációhoz, használd a **Tools > Export & Import** részt az egyetlen site-os export/import munkafolyamathoz, és használd a Site Export eszközt, ha teljes Network Export archívumra van szükséged.

## Domain Seller HostAfrica egyenlegfigyelmeztetés

Amikor a Domain Seller addon csatlakozik a HostAfrica szolgáltatáshoz, a hálózati adminisztrátorok most elvethető alacsony egyenlegre figyelmeztető üzenetet látnak, ha a viszonteladói Account egyenlege túl alacsony a megbízható domainregisztrációs vagy megújítási feldolgozáshoz.

Kezeld ezt az értesítést működési figyelmeztetésként: töltsd fel a HostAfrica viszonteladói egyenleget, mielőtt további fizetős domainregisztrációkat fogadnál el, majd térj vissza a Domain Seller beállításaihoz vagy a domainfigyelő képernyőre annak megerősítéséhez, hogy a regisztrációk és megújítások normálisan folytatódhatnak.

## AI-szolgáltatói csatlakozó beállításai

Az AI-szolgáltatói csatlakozó beállításai mostantól csak a támogatott OAuth Account poolokat jelenítik meg:

| Szolgáltató | Beállítási folyamat |
|---|---|
| **Anthropic Max** | Csatlakoztass egy vagy több Anthropic Max Accountot az OAuth gombbal. Használd a manuális OAuth tartalékmegoldást, ha egy sandboxolt böngésző nem tudja automatikusan befejezni az átirányítást. |
| **OpenAI ChatGPT/Codex** | Csatlakoztass ChatGPT Accountokat ugyanazon az OAuth pool munkafolyamaton keresztül. A csatlakozó által támogatott műveletek ChatGPT Codex eszközhívásokat használhatnak, miután az Account csatlakoztatva lett. |
| **Google AI Pro** | Csatlakoztass Google AI Pro Accountokat OAuth-on keresztül, majd frissítsd a csatlakozót, ha az Account-lista nem frissül azonnal. |

A Cursor Pro már nem támogatott szolgáltató. Távolítsd el a régi belső képernyőképeket, runbookokat vagy onboarding lépéseket, amelyek Cursor Pro beállítási mezőket vagy csatlakozóútvonalakat említenek.

Szolgáltatói Accountok hozzáadásakor vagy eltávolításakor adj meg egy érvényes e-mail-címet a frissítendő vagy törlendő Accounthoz, és mentsd a szolgáltatói beállításokat, mielőtt tesztelnéd a csatlakozó által támogatott műveleteket.
