---
title: Mokėjimo ir paskolos valdymo<channel|>
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Apmontų ir įsipareigojimų valdymas

## Mokyklos nustatymai {#payment-settings}

Prieš pradėdami gauti mokėjimus, turite nustatyti mokėjimo susijusias nustatymus. Eikite į **Ultimate Multisite → Nustatymai** ir paspauskite **Mokėjimas** (Payment) posėdį.

![Mokėjimo nustatymų posėdysis](/img/admin/settings-payments-top.png)

Štai mokėjimo nustatymų puslapio visiškai apibūdintasis vaizdas:

![Mokėjimo nustatymų visiškai apibūdintasis puslapis](/img/admin/settings-payments-full.png)

### Bendros mokėjimo opsijos {#general-payment-options}

Bendros nustatymuose galite nustatyti:

- **Valuta** — Pagrindinė valuta, naudojama transakcijoms
- **Valutų pozicija** — Kurai pasitaiko valiutos simbolis (prieš/po sumamos)

![Mokėjimo įgaminimų nustatymai](/img/admin/settings-payments-options.png)

### Mokėjimo įgaminimai (Payment Gateways) {#payment-gateways}

Ultimate Multisite palaiko kelis mokėjimo įgaminimus. Jūs galite įjungti ir nustatyti kiekvieną iš jų nustatymai Mokėjimo posėdijos puslapyje.

![Mokėjimo įgaminimų konfigūracija](/img/admin/settings-payments-gateways.png)

Paskutini tersedia mokėjimo įgaminimai:

- **Stripe** — Kreditinių kortelės mokėjimai per Stripe
- **PayPal** — PayPal mokėjimai
- **Rankinis (Manual)** — Offline ar pritaikytam mokėjimo apdorojimui

Kiekvienas įgaminimas turi savo nustatymų sekciją, kurioje įrašote API slaptažodžius ir kitus nustatymus.

![Papildomi įgaminimų nustatymai](/img/admin/settings-payments-gateways-2.png)

### Sandbox režimas (Sandbox Mode) {#sandbox-mode}

Galite įjungti **Sandbox režimą**, kad išbandytum mokėjimo integraciją prieš įvedant sistemą į veiksmą. Kai sandbox režimas yra aktyvus, nebus atlikta realių sumamos.

## Mokėjimų peržiūra {#viewing-payments}

Eikite į **Mokėjimai** (Payments) puslapį Ultimate Multisite, kad pamatytum visus transakcijas po savo tinklu.

![Mokėjimo sąrašas](/img/admin/payments-list.png)

Galite filtruoti mokėjimais pagal statusą (pabaigta, laukoma, nesėkminga, atsiųsta grąžtes) ir ieškoti specifinių transakcijų.

Spauskite mokamą transakciją, kad pamatyt jos visus detales, įskaitant sąskaitos eilutes, susijusię nuskaitą, klientų informaciją ir mokėjimo terminalo duomenis.

## Sąskaitos {#invoices}

Ultimate Multisite gali automatiškai generuoti sąskaitas už mokėjimą. Jūs galite pritaikyti sąskaitos šablono ir numeravimo formatą nustabdykite Mokėjimo nustatymuose (Payment settings).

Sąskaitų pritaikymo opsijos apima:

- **Kompanijos vardas ir adresas**, kuriuos bus pateikta sąskaitose
- **Sąskaitos numeravimo** formatą ir sekacinį reikalavimą
- **Logotipą**, kuris bus pateiktas sąskaitos galvos viršuje
- **Pridėtą tekstą sąskaitos pabaigoje** (pvz., taisyklės, pastabos ar teisės informacija)

Sąskaitų šablono pritaikymui nustatykite: eiti į **Ultimate Multisite → Settings → Payment** ir ieškoti sąskaitai susijusių nustatymų.
