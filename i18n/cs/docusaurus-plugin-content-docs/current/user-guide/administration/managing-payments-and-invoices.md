---
title: Správa plateb a faktur
sidebar_position: 15
_i18n_hash: fc6e16106af648bfca0812d24168b582
---
# Správa plateb a faktur

## Nastavení plateb

Než začnete přijímat platby, je třeba nakonfigurovat nastavení týkající se plateb. Přejděte do **Ultimate Multisite → Nastavení** a klikněte na záložku **Platby**.

![Záložka nastavení plateb](/img/admin/settings-payments-top.png)

### Obecné možnosti plateb

V obecném nastavení můžete nakonfigurovat:

- **Měna** — Výchozí měna používaná pro transakce
- **Pozice měny** — Kde se zobrazuje symbol měny (před/za částkou)

![Nastavení platební brány](/img/admin/settings-payments-options.png)

### Platební brány

Ultimate Multisite podporuje více platebních bran. Každou z nich můžete aktivovat a nakonfigurovat v záložce Nastavení plateb.

![Konfigurace platební brány](/img/admin/settings-payments-gateways.png)

Dostupné platební brány zahrnují:

- **Stripe** — Platby kartou přes Stripe
- **PayPal** — Platby přes PayPal
- **Ruční** — Pro offline nebo vlastní zpracování plateb

Každá brána má vlastní sekci konfigurace, kde zadáváte API klíče a další nastavení.

![Další nastavení platebních bran](/img/admin/settings-payments-gateways-2.png)

### Testovací režim

Můžete aktivovat **Testovací režim** pro otestování integrace plateb před ostrým spuštěním. Když je testovací režim aktivní, nebudou prováděny žádné skutečné platby.

## Zobrazení plateb

Přejděte na stránku **Platby** v sekci Ultimate Multisite, kde uvidíte všechny transakce napříč vaší sítí.

![Seznam plateb](/img/admin/payments-list.png)

Platby můžete filtrovat podle stavu (dokončené, čekající, neúspěšné, vrácené) a vyhledávat konkrétní transakce.

Kliknutím na platbu zobrazíte její úplné podrobnosti včetně jednotlivých položek, přiřazeného členství, informací o zákazníkovi a údajů o platební bráně.

## Faktury

Ultimate Multisite může automaticky generovat faktury k platbám. Šablonu faktury a formát číslování můžete přizpůsobit v nastavení plateb.

Možnosti přizpůsobení faktur zahrnují:

- **Název a adresa společnosti** zobrazené na fakturách
- **Formát číslování faktur** a číselná řada
- **Logo** zobrazené v záhlaví faktury
- **Vlastní text v zápatí** pro podmínky, poznámky nebo právní informace

Pro přizpůsobení šablony faktury přejděte do **Ultimate Multisite → Nastavení → Platby** a vyhledejte nastavení týkající se faktur.
