---
title: Nastavení PayPal
sidebar_position: 10
_i18n_hash: cb5153acc4c60b39af9d73311a5b3b44
---
# Nastavení platební brány PayPal (v2)

_**DŮLEŽITÁ POZNÁMKA: Tento článek se týká Ultimate Multisite verze 2.x.**_

Na stránce nastavení plateb můžete aktivovat až čtyři platební metody: Stripe, Stripe Checkout, PayPal a Manuální. V tomto článku se podíváme na integraci s **PayPal**.

Stejně jako Stripe je PayPal široce používán pro online platby, zejména na WordPress webech. Tento článek vás provede nastavením PayPal jako dostupné platební metody ve vaší síti.

Pro získání API přihlašovacích údajů potřebných k této integraci musíte mít **PayPal Business účet**.

## Povolení PayPal ve vaší síti

Pro povolení PayPal jako dostupné platební metody ve vaší síti přejděte na **Ultimate Multisite > Settings > Payments** a zaškrtněte políčko vedle PayPal.

![Povolení PayPal v aktivních platebních branách](/img/config/settings-payment-gateways.png)

## Získání PayPal API přihlašovacích údajů

Po povolení PayPal jako platební brány budete muset vyplnit pole pro PayPal API **Username**, PayPal API **Password** a PayPal API **Signature**.

Tyto údaje získáte přihlášením do svého PayPal účtu [Live](https://www.paypal.com/home) nebo [Sandbox](https://www.sandbox.paypal.com/home).

(Pamatujte, že můžete použít **sandbox režim** pro testování plateb a ověření správného nastavení brány. Stačí přepnout odpovídající přepínač.)

![Pole pro PayPal API přihlašovací údaje a přepínač sandbox režimu](/img/config/settings-payment-gateways.png)

Pro vyžádání API Signature nebo Certificate přihlašovacích údajů pro váš PayPal účet:

  1. Přejděte do [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. V sekci **API access** klikněte na **Update**.  
![PayPal Account Settings se sekcí API access](/img/config/settings-payment-gateways.png)

  3. Pod **NVP/SOAP API integration (Classic)** klikněte na **Manage API credentials**.  
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Pokud jste již vygenerovali API Signature nebo Certificate, budete přesměrováni na stránku, kde najdete své přihlašovací údaje.

     * _**Poznámka:** Pokud budete vyzváni k ověření vašeho PayPal účtu, postupujte podle pokynů na obrazovce._

  4. Vyberte _jednu_ z následujících možností a klikněte na **Agree and Submit**.

     * **Request API Signature** – Vyberte pro API Signature autentizaci.

     * **Request API Certificate** – Vyberte pro API Certificate autentizaci.

  5. PayPal vygeneruje vaše API přihlašovací údaje následovně:  
![Vygenerované PayPal API přihlašovací údaje](/img/config/settings-payment-gateways.png)

     * **API Signature přihlašovací údaje** zahrnují API Username, API Password a Signature, které nemají expiraci. Tyto hodnoty jsou ve výchozím nastavení skryté pro vyšší bezpečnost. Klikněte na **Show/Hide** pro jejich zobrazení nebo skrytí. Po dokončení klikněte na **Done**.

     * **API Certificate přihlašovací údaje** zahrnují API Username, API Password a Certificate, který automaticky vyprší po třech letech. Klikněte na **Download Certificate** pro uložení API Certificate na váš počítač.

To je vše, vaše PayPal platební integrace je dokončena!

Pokud máte jakékoliv dotazy ohledně nastavení PayPal, můžete se obrátit na PayPal [Help Center](https://www.paypal.com/br/smarthelp/home).
