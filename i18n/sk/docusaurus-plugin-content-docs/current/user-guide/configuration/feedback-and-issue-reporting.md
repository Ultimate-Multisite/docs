---
title: Spätná väzba zákazníkov a reportovanie problémov
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Spracovanie sprievodných dosad a reportov problémov

Gratis AI Agent v1.5.0 obsahuje vbudovaný systém pre spracovanie sprievodných dosad a reportov problémov, ktorý umožňuje koncovým používateľom označovať nepomocné odpovede a priamo nahlásiť problémy z chatu. Tento systém zahŕňa správu súhlasu, automatický príkaz na report a AI-pomáchaný triáž v pozadí.

## Tlačidlo "Ne" (Thumbs-Down Button)

Každú správu od AI asistentov zobrazuje tlačidlo **ne** (👎). Keď používateľ klikne na toto tlačidlo, môže odpoveď označiť ako nepomocnú alebo nesprávnu.

- Tlačidlo sa zobrazí pri prejeđaní myšou vedľa každej správy asistenta.
- Kliknutím na nie sa otvorí **Modal pre súhlas so sprievodnou dosad**.
- Sprievodná dosada je spojená s konverzačným vláknom a konkrétnou správou.

## Modal pre súhlas so sprievodnou dosad

Keď používateľ klikne na tlačidlo "ne", pred odoslaním akýchkoľvek dát sa zobrazí modal pre súhlas. Tento modal:

- Vysvetlí, aké informácie budú zbierané (vypredanie konverzácie, kontext prehliadača).
- Požiada používateľa o potvrdenie, že súhlasíte s zdieľaním týchto dát.
- Poskytuje textové pole pre používateľa na popis toho, čo sa zistilo ako problém.
- Ponúka možnosť **Zrušiť**, aby sa modal bez odoslania zavrie.

Sprievodná dosada sa neukladá, kým používateľ explicitne nepotvrdí.

## Banner pre automatický sprievodný report

Na konci konverzácie môže asistent zobraziť **banner pre automatický sprievodný report** — neinvazívnu správu, ktorá pýta, či bola sesia pomocná.

Tento banner sa zobrazuje automaticky na základe dĺžky konverzácie a heuristik výsledku. Spojený je s tým istým toku spracovania ako tlačidlo "ne". Používatelia môžu banner zrušiť bez poskytnutia sprievodnej dosady.

## Príkaz `/report-issue`

Používatelia si môžu plynule spustiť tok spracovania, napríklad v chatu zadaniu `/report-issue`. Tento príkaz:

Otváča modál okrušení souhlasu s zpětnou vazbou okamžitě.
Predpripravuje pole popisu kontextom aktuálnej konverzácie.
Umožňuje používateľom pridať ďalšie detaily pred odoslaním.

Cmd `/report-issue` je k dispozícii vo všetkých chatiach (inline, plávajúci widget, plný obrazovky).

## AI-Assisted Triage (Triáž s pomocou AI)

Odoslaná spätná väzba je presmerovaná na vrstvu triáže AI, ktorá:

- Kategorializuje report (faktickú chybu, nepomocnú odpoveď, nevhodný obsah atď.).
- Pridá príslušné metadát konverzácie.
- Predosiela súhrn triáže na skonfigurovaný **Feedback Endpoint** (vidieť [Settings > Advanced](#settings-advanced)).

To znížuje manuálnu čas potrebnú pre prehodnotenie, pretože najdôležitejšie problémy sa objavia prvej.

## Settings > Advanced {#settings-advanced}

Aby ste aktivovali backend spätných väzieb, nakonfigurujte nasledujúce pole pod **Gratis AI Agent → Settings → Advanced**:

| Pole | Popis |
|---|---|
| **Feedback Endpoint URL** | URL adresa, ktorá prijíma POST požiadavky s náhradnými údajmi (JSON). |
| **Feedback API Key** | Bearer token odoslaný v hlavičke `Authorization` na autentifikáciu odosielania spätných väzieb. |

Nechajte obojdie pole prázdne, aby ste deaktivovali zbieranie spätných väzieb. Individuálne tlačidlá pre spätnú väzbu zostávajú viditeľné pre používateľov, ale odoslania sa nepredosielajú.

:::tip
Feedback endpoint musí prijímať JSON telo s minimálnymi polami `message_id`, `conversation_id`, `feedback_text` a `triage_category`. Pre očakávanú schému si pozrite dokumentáciu vášho poskytovateľa endpointu.
