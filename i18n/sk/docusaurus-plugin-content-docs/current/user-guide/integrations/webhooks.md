---
title: Webhooky
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Prvý pohľad na webhooks (v2)

_**POZOR: Tento príspevok alebo funkcia je určená pre pokročilých používateľov.**_

**Webhook** je spôsob, ako aplikácia alebo softvér ako Ultimate Multisite poskytne iným aplikáciám informácie v reálnom čase. Webhook posiela údaje alebo nálohy (payloads) iným aplikáciám hneď, čo znamená, že **obtenie údajov je okamžité.**

Toto je užitočné, ak potrebujete integrovať alebo predať určité údaje z Ultimate Multisite do iného CRM alebo systému pri každom spustení udalosti. Napríklad potrebujete poslať meno a e-mail používateľa na mailing list pri každom vytvorení nového účtu používateľa.

## Ako vytvoriť webhook {#how-to-create-a-webhook}

Aby ste vytvorili webhook, prejdite do dashboardu administrátora vašej siete (network admin dashboard). Kliknite na **Ultimate Multisite > Webhooks > Pridať nový webhook**.

![Prázdne zoznam webhooks s tlačidlom Pridať nový webhook](/img/admin/webhooks-list-empty.png)

Potom môžete upraviť konfiguráciu webhooku:

![Form pridania nového webhooku s polmi Názov, Udženie a URL](/img/admin/webhook-add-modal.png)

Pri vytváraní nového webhooku budete vyzvaný za informáciami ako **Názov, URL** a **Udženie (Event)**. Môžete si dať akýkoľvek názov pre váš webhook. Najdôležitejšie polia sú URL a Udženie (Event).

![Rozhranie úpravy webhooku zobrazujúce pole URL a predglédku nálohy](/img/admin/webhook-url-field.png)

URL je **bod konca alebo destinácia**, kde Ultimate Multisite pošle **nálohu alebo údaje**. Je to aplikácia, ktorá tieto údaje prijme.

Zapier je najbežnejšie riešenie, ktoré používajú na uľahčenie integrácie s externými aplikáciami. Bez platformy ako Zapier budete musieť manuálne vytvoriť prispôsobenú funkciu, ktorá zachytí údaje a spracuje ich. Prečítajte si tento článok o tom, **ako použiť webhook Ultimate Multisite s Zapierom.**

V tomto článku si zameriame na základné pojmy toho, ako funguje webhook a aké udalosti sú k dispozícii v Ultimate Multisite. Použijeme externú stránku [requestbin.com](https://requestbin.com/). Táto stránka nám umožní vytvoriť endpoint a zachytiť payload bez toho, aby sme mali pýtať o kódovanie. _**Vedenie: všetko, čo to urobí, je namáčať nám, že údaje boli prijaté.**_ Na payload sa nič nebuduje ani neuskupuje žiadna akcia.

Prejdite na [requestbin.com](https://requestbin.com/) a kliknite na Create Request Bin (Vytvoriť binu požiadavky).

Po kliknutí na tu vás bude pýtať, či máte už účet alebo sa zaregistrujete. Ak máte už účet, presmerne vás presmeruje na ich dashboard. Na ich dashboard okamžite uvidíte endpoint alebo URL, ktorý môžete použiť pri vytváraní vášho webchka v Ultimate Multisite.

Kopírujte URL a vráťte sa do Ultimate Multisite. Endpoint vložte do polia URL a vyberte udalosti z rozbaľovacieho menu. V tomto príklade si vyberieme **Payment Received** (Prijatý platba).

Táto udalosť sa spustí, keď používateľ urobí platbu. V spodnej časti stránky sú uvedené všetky dostupné udalosti, ich popis a payloady. Kliknite na tlačidlo **Add New Webhook** (Pridať nový webhook), aby ste zachytili webhook.

![Rozbaľovacie menu udalosť webchka s vybraným Payment Received](/img/admin/webhook-event-picker.png)

Teraz môžeme poslať testovú udal os endpoint, aby sme videli, či funguje webhook, ktorý sme vytvorili. Môžeme to urobiť kliknutím na **Send Test Event** (Odoslať testovú udalosť) pod vytvoreným webchkom.

![Zoznam webchkov zobrazujúci jeden skonfigurovaný webhook a akciu Send Test](/img/admin/webhooks-list-populated.png)

Toto zobrazuje okno potvrdenia, že test bol úspešný.

![Výsledok testovej udalosti webchka po odoslaní testového payloadu](/img/admin/webhook-test-result.png)

Keď sa v súbore _Requestbin_ vráťe, uvidíte, že náklad (payload) bol prijato so z triedenými dátami.

Toto je základný princíp toho, ako fungujú webhooky a endpointy. Ak chcete vytvoriť vlastný endpoint, budete musieť vytvoriť vlastnú funkciu na spracovanie dát, ktoré dostávate od Ultimate Multisite.
