---
title: Nastavenie PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Konfigurácia PayPal brány (v2) {#setting-up-the-paypal-gateway-v2}

_**DÔLEŽITÉU POZNÁDANIE: Tento článok sa týka Ultimate Multisite verzie 2.x.**_

Na našej stránke nastavení platob môžete aktivovať až štyri metódy platby: Stripe, Stripe Checkout, PayPal a Manuálna. V tomto článku si podrobne ukážeme, ako sa integruje s **PayPalom**.

Ako aj pri Stripe je PayPal široko používaný na online platby, najmä na webových stránkach WordPress. Tento článok vás naučí, ako použiť PayPal ako metódu platby dostupnú v vašej sieti.

Pozrite, že potrebujete mať **bizniscový účet PayPal**, aby ste získali API kredenciálne údaje potrebné pre túto integráciu.

## Aktivácia Paypala na vašej sieti {#enabling-paypal-on-your-network}

Aby ste aktivovali PayPal ako dostupnú metódu platby v sieti, prejdite do sekcie **Ultimate Multisite > Settings > Payments** a označte políčko vedľa PayPal.

![Aktivácia Paypala v aktívnych bránach platob](/img/config/settings-payment-gateways.png)

## Používanie prvej asistencie konfigurácie (wizard) {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 pridáva prvej asistencie konfigurácie PayPal do nastavení brány platby. Po aktivácii Paypala použite assistent na **Ultimate Multisite > Settings > Payments**, aby ste si vybrali, ako chcete pripojiť bránu a potvrdili, ktoré kredenciálne údaje stále potrebujete, než urobíte uložitie.

Asistent podporuje dve cesty konfigurácie:

* **Manuálne zadanie prihlasovacie údaje**: Použite túto cestu, ak máte už existujúce kredenciálne údaje pre PayPal API, ak nie je k vašej účtu k dispozícii OAuth nastavenie alebo ak si lípate kopírovať kredenciálne údaje sami z PayPal. V polochách PayPal zadajte **API Username**, **API Password** a **API Signature**, potom uložte nastavenia platobných metódb.
* **Bránenie pre pripojenie OAuth**: Použite túto cestu len vtedy, ak je možnosť OAuth k dispozícii a aktivovaná pre vašu instaláciu. Wizard zobrazuje tok OAuth za feature flagom, takže siety bez tohto flagu budú pokračovať v používaní poloch pre manuálne zadanie prihlasovacie údajov.

Ak nevidíte možnosť OAuth v wizardovi, dokončite postup manuálneho zadania prihlasovacích údajov nižšie. Bránenie funguje s rovnakými kredenciálnymi údajmi PayPal Business API ako v pôvodných verziách Ultimate Multisite 2.x.

## Ako získať kredenciálne údaje pre PayPal API {#getting-the-paypal-api-credentials}

Keď je PayPal aktivovaný ako platobné bránenie, budete musieť vyplniť poloch **Username** (Používateľské meno) pre PayPal API, **Password** (Heslo) pre PayPal API a **Signature** (Podpis) pre PayPal API.

Môžete si tieto údaje získať, prihlínajúc sa do vášho účtu na [Live](https://www.paypal.com/home) alebo [Sandbox](https://www.sandbox.paypal.com/home) účet.

(Pamätajte, že môžete v **sandbox režime** testovať platby a zistiť, či je bránenie správne nastavené. Len prepnite na príslušnú sekciu.)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Na požiadavku na API Signature alebo certifikátné kredenciálne údaje pre váš účet PayPal:

  1. Prejdite do [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. V sekcii **API access** (Prístup k API) kliknite na **Update** (Aktualizovať).
![PayPal Account Settings with API access section](/img/config/settings-payment-gateways.png)

3. Pri **NVP/SOAP API integrácii (Classic)** kliknite na **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Ak máte už generovanú API Signature alebo Certificate, budete presmerovaní na stránku, kde si nájdete svoje údaje.

     * _**Poznámka:** Ak vás vyzvedne k overeniu vášho účtu PayPal, postupujte podľa pokyn na obrazovke._

4. Vyberte **jednu** z nasledujúcich možností a potom kliknite na **Agree and Submit**.

     * **Request API Signature** – Vyberte pre autentizáciu pomocou API Signatúry (API Signature authentication).

     * **Request API Certificate** – Vyberte pre autentizáciu pomocou API Certifikátu (API Certificate authentication).

5. PayPal generuje vaše API údaje nasledovne:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** obsahujú API Username, API Password a Signature, ktorá sa nikdy neprepadá. Toto hodnoty sú štandardne skryté pre zvýšenú bezpečnosť. Kliknite na **Show/Hide**, aby ste ich mohli zapnúť alebo vypnúť. Keď dokončíte, kliknite na **Done**.

     * **API Certificate credentials** obsahujú API Username, API Password a Certificate, ktorá sa automaticky vyprípadne po troch rokoch. Kliknite na **Download Certificate**, aby ste si API Certifikát ulohile na svoj desktop.

To je to všetko, váš integrácia platob PayPal je dokončená!

Ak máte akékoľvek otázky týkajúce nastavení PayPal, môžete sa obrátiť na [Help Center](https://www.paypal.com/br/smarthelp/home) PayPal.
