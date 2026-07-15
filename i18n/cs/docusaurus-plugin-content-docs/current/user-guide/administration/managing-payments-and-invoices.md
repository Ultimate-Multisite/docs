---
title: Správa plateb a faktur
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Správa plateb a faktur

## Nastavení plateb {#payment-settings}

Než začnete přijímat platby, budete muset nakonfigurovat nastavení související s platbami. Přejděte na **Ultimate Multisite → Settings** a klikněte na kartu **Payment**.

![Karta nastavení plateb](/img/admin/settings-payments-top.png)

Zde je úplný pohled na stránku nastavení plateb:

![Celá stránka nastavení plateb](/img/admin/settings-payments-full.png)

### Obecné možnosti plateb {#general-payment-options}

V obecných nastaveních můžete nakonfigurovat:

- **Měna** — Výchozí měna používaná pro transakce
- **Pozice měny** — Kde se zobrazuje symbol měny (před/za částkou)

![Nastavení platební brány](/img/admin/settings-payments-options.png)

### Platební brány {#payment-gateways}

Ultimate Multisite podporuje více platebních bran. Každou z nich můžete povolit a nakonfigurovat na kartě nastavení Payment.

![Konfigurace platební brány](/img/admin/settings-payments-gateways.png)

Dostupné brány zahrnují:

- **Stripe** — Platby kreditní kartou přes Stripe
- **PayPal** — Platby PayPal
- **Manual** — Pro offline nebo vlastní zpracování plateb

Každá brána má vlastní konfigurační sekci, kde zadáte API klíče a další nastavení.

![Další nastavení brány](/img/admin/settings-payments-gateways-2.png)

### Režim Sandbox {#sandbox-mode}

Můžete povolit **režim Sandbox** a otestovat integraci plateb, než ji spustíte do ostrého provozu. Když je režim sandbox aktivní, nebudou účtovány žádné skutečné poplatky.

## Zobrazení plateb {#viewing-payments}

Přejděte na stránku **Payments** v Ultimate Multisite a zobrazte všechny transakce napříč svou sítí.

![Seznam plateb](/img/admin/payments-list.png)

Platby můžete filtrovat podle stavu (dokončeno, čeká na zpracování, selhalo, vráceno) a vyhledávat konkrétní transakce.

Kliknutím na platbu zobrazíte její úplné podrobnosti včetně položek, souvisejícího členství, informací o zákazníkovi a dat platební brány.

## Faktury {#invoices}

Ultimate Multisite může automaticky generovat faktury pro platby. Šablonu faktury a formát číslování můžete přizpůsobit v nastavení Payment.

Možnosti přizpůsobení faktury zahrnují:

- **Název a adresa společnosti** zobrazené na fakturách
- **Číslování faktur** formát a sekvence
- **Logo** zobrazené v záhlaví faktury
- **Vlastní text zápatí** pro podmínky, poznámky nebo právní informace

Chcete-li přizpůsobit šablonu faktury, přejděte na **Ultimate Multisite → Settings → Payment** a vyhledejte nastavení související s fakturami.
