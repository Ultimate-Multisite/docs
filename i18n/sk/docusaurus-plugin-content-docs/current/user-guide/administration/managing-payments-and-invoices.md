---
title: Správa platieb a faktúr
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Správa platieb a faktúrování

## Nastavení plateb {#payment-settings}

Než začnete přijímat platby budete muset nakonfigurovat nastavení související s platbami. Přejděte do **Ultimate Multisite → Settings** a klikněte na záložku **Payment**.

![Payment settings tab](/img/admin/settings-payments-top.png)

Zde je kompletní přehled stránky se nastavením plateb:

![Payment settings full page](/img/admin/settings-payments-full.png)

### Obecné možnosti platby {#general-payment-options}

V obecných nastavení můžete nakonfigurovat:

- **Měnu** — Měna, která je používána pro transakce
- **Pozice měny** — Kde se zobrazí symbol měny (před/po částce)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Platební brány (Payment Gateways) {#payment-gateways}

Ultimate Multisite podporuje více platebních brány. Každou můžete zapnout a nakonfigurovat z záložky Payment.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

K dispozici jsou následující brány:

- **Stripe** — Platby kartou přes Stripe
- **PayPal** — Platby přes PayPal
- **Manuální** — Pro offline nebo vlastní zpracování platby

Každá brána má svou vlastní sekci pro konfiguraci, kde zadáte API klíče a další nastavení.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox režim (Sandbox Mode) {#sandbox-mode}

Můžete zapnout **Sandbox Mode**, abyste mohli testovat svou integraci plateb před aktivací v reálném provozu. Když je sandboxový režim aktivní, se žádné skutečné poplatky nebudou účtovány.

## Zobrazení platbych {#viewing-payments}

Přejděte na stránku **Payments** pod Ultimate Multisite, abyste viděli všechny transakce z celé vaší sítě.

![Payments list](/img/admin/payments-list.png)

Můžete filtry platby podle stavu (dokončeno, čeká, neúspěšné, vrácené) a vyhledávat konkrétní transakce.

Kliknite na platbu, aby ste videli jej všetky detaily vrátane položiek, pridaného členstva, informácií o zákazníkovi a údajov o platobnom brániteľstve (payment gateway).

## Faktúry (Invoices) {#invoices}

Ultimate Multisite môže faktúry automaticky generovať pre platby. Môžete si prispôsobiť šablon faktúry a formát číselovania z nastavení platob (Payment settings).

Možnosti prispôsobenia faktúry zahŕňajú:

- **Názov a adresa firmy** uvedené na faktúrach
- **Formát a sekvencia číselovania faktúr**
- **Logo**, ktoré sa zobrazuje v hlavičke faktúry
- **Prispôsobený text v spodnej časti (footer)** pre podmienky, poznámky alebo právne informácie

Aby ste prispôsobili šablon faktúry, prejdite do **Ultimate Multisite → Settings → Payment** a pozrite si nastavenia súvisiace s faktúrami.
