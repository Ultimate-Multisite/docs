---
title: Nastavení PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Nastavení PayPal brány (v2)

_**DŮLEŽITÁ POZNÁMKA: Tento článek se vztahuje k Ultimate Multisite verze 2.x.**_

Na naší stránce nastavení plateb můžete aktivovat až čtyři způsoby platby: Stripe, Stripe Checkout, PayPal a Manuální. V tomto článku se podíváme, jak integrovat **PayPal**.

Stejně jako Stripe je PayPal široce používán pro online platby, zejména na WordPress webech. Tento článek vás provede tím, jak používat PayPal jako platební metodu dostupnou ve vaší síti.

Upozorňujeme, že pro získání API přihlašovacích údajů potřebných pro tuto integraci musíte mít **PayPal Business účet**.

## Povolení PayPal ve vaší síti {#enabling-paypal-on-your-network}

Chcete-li povolit PayPal jako dostupnou platební metodu ve vaší síti, přejděte na kartu **Ultimate Multisite > Settings > Payments** a zaškrtněte políčko vedle PayPal.

![Povolení PayPal v aktivních platebních bránách](/img/config/settings-payment-gateways.png)

## Použití průvodce řízeným nastavením {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 přidává do nastavení platební brány průvodce nastavením PayPal. Po povolení PayPal použijte průvodce v **Ultimate Multisite > Settings > Payments**, abyste zvolili, jak chcete bránu připojit, a potvrdili, které přihlašovací údaje jsou před uložením ještě potřeba.

Průvodce podporuje dvě cesty nastavení:

* **Ruční zadání přihlašovacích údajů**: Tuto cestu použijte, když už máte PayPal API přihlašovací údaje, když nastavení OAuth není pro váš účet dostupné, nebo když si přihlašovací údaje raději zkopírujete z PayPal sami. Zadejte API Username, API Password a API Signature do polí PayPal a poté uložte nastavení plateb.
* **Brána připojení OAuth**: Tuto cestu použijte pouze tehdy, když je možnost OAuth dostupná a povolená pro vaši instalaci. Průvodce zobrazuje tok OAuth za feature flagem, takže sítě bez tohoto flagu nadále používají pole pro ruční zadání přihlašovacích údajů.

Pokud v průvodci nevidíte možnost OAuth, dokončete níže uvedený tok ručního zadání přihlašovacích údajů. Brána funguje se stejnými PayPal Business API přihlašovacími údaji jako předchozí vydání Ultimate Multisite 2.x.

## Získání PayPal API přihlašovacích údajů {#getting-the-paypal-api-credentials}

Jakmile je PayPal povolen jako platební brána, budete muset vyplnit pole pro PayPal API **Username** , PayPal API **Password** a PayPal API **Signature**.

Tyto údaje získáte přihlášením ke svému PayPal [Live](https://www.paypal.com/home) nebo [Sandbox](https://www.sandbox.paypal.com/home) účtu.

(Pamatujte, že můžete použít **sandbox mode** k otestování plateb a ověření, zda je brána správně nastavena. Stačí zapnout příslušnou sekci.)

![Pole přihlašovacích údajů PayPal API a přepínač sandbox mode](/img/config/settings-payment-gateways.png)

Chcete-li požádat o API Signature nebo Certificate přihlašovací údaje pro svůj PayPal účet:

  1. Přejděte do svých [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. V sekci **API access** klikněte na **Update**.
![PayPal Account Settings se sekcí API access](/img/config/settings-payment-gateways.png)

  3. V části **NVP/SOAP API integration (Classic)** klikněte na **Manage API credentials**.
![Integrace PayPal NVP/SOAP API Manage API credentials](/img/config/settings-payment-gateways.png)

     * Pokud jste už vygenerovali API Signature nebo Certificate, budete přesměrováni na stránku, kde najdete své přihlašovací údaje.

     * _**Poznámka:** Pokud budete vyzváni k ověření svého PayPal účtu, postupujte podle pokynů na obrazovce._

  4. Vyberte _jednu_ z následujících možností a poté klikněte na **Agree and Submit**.

     * **Request API Signature** – Vyberte pro ověřování pomocí API Signature.

     * **Request API Certificate** – Vyberte pro ověřování pomocí API Certificate.

  5. PayPal vygeneruje vaše API přihlašovací údaje takto:
![PayPal vygenerované API přihlašovací údaje](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** zahrnují API Username, API Password a Signature, která nevyprší. Tyto hodnoty jsou ve výchozím nastavení skryté kvůli zvýšení zabezpečení. Kliknutím na **Show/Hide** je můžete zobrazit nebo skrýt. Po dokončení klikněte na **Done**.

     * **API Certificate credentials** zahrnují API Username, API Password a Certificate, jehož platnost automaticky vyprší po třech letech. Klikněte na **Download Certificate** pro uložení API Certificate na plochu.

To je vše, vaše integrace plateb PayPal je dokončena!

Pokud máte jakékoli otázky týkající se nastavení PayPal, můžete se obrátit na [Help Center](https://www.paypal.com/br/smarthelp/home) PayPal.
