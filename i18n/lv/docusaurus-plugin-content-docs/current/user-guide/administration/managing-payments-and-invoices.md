---
title: Platīju un faktūru pārvaldība
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Grāmatu maksājumu un fakturētu informācijas pārvaldīšana

## Maksājumu iestatījumi

Pirms sāciet saņemt maksājumus, jums būs jākonfigūrujasi maksājumu saistītie iestatījumi. Navigējieties uz **Ultimate Multisite → Iestatījumi** un noklikšķiniet uz posma **Maksājumi (Payment)**.

![Maksājumu iestatījumu posms](/img/admin/settings-payments-top.png)

Šeit ir pilna skats uz maksājumu iestatījumu lapu:

![Pilna skats uz maksājumu iestatījumiem](/img/admin/settings-payments-full.png)

### Vispārējie maksājumu opcijas

Vispārajos iestatījumos var konfigūruēt:

- **Valuta (Currency)** — default valuta, kas tiek izmantota transakcijās
- **Valutas pozīcija (Currency Position)** — kur parādās valutas simbols (pirms/pēc summas)

![Maksājumu portāla iestatījumi](/img/admin/settings-payments-options.png)

### Maksājuma portāli (Payment Gateways)

Ultimate Multisite atbalsta vairākus maksājuma portālus. Jūs varat ieslēgt un konfigūruēt katru no posma Maksājumi (Payment).

![Maksājuma portāla konfigurēšana](/img/admin/settings-payments-gateways.png)

Pieejami portāli ietver:

- **Stripe** — kredītu kartes maksājumi ar Stripe
- **PayPal** — PayPal maksājumi
- **Manuāls (Manual)** — offline vai pielāgotajiem maksājumu apstrādei

Katram portālam ir savas konfigūras sekcijas, kurā jūs ievadiet API kļūdes un citas iestatījumus.

![Papildu portāla iestatījumi](/img/admin/settings-payments-gateways-2.png)

### Sandbox režīms (Sandbox Mode)

Jūs varat ieslēgt **Sandbox režīmu**, lai pārbaudītu savu maksājumu integrāciju pirms reālas lietošanas. Kad sandbox režīms ir aktīvs, nepiecieti nekādas reādas maksas tiek veiktas.

## Maksājumu skatīšana

Navigējieties uz **Maksājumi (Payments)** lapu Ultimate Multisite ziņā, lai redzētu visus transakcijas savā tīklā.

![Maksājumu saraksts](/img/admin/payments-list.png)

Jūs varat filtrēt maksājumus pēc statusa (pabeigta, gaidīta, neizveikta, atgriešana) un meklēt konkrētus transakcijas.

Spiediet uz maksājumu, lai redzētu viņa pilnus detaļas, tostarp lietojumus, saistīto pievienošanos, klientu informāciju un maksājuma portāla datus.

## Fakturas (Invoices)

Ultimate Multisite var automātiski izveidot faktūras maksājumiem. Jūs varat pielāgot faktūras šabli un numurēšanas formātu no Maksājumu iestatījumiem.

Faktūras pielāgošanas iespējas ietver:

- **Uzņēmuma nosaukums un adrese**, kas tiek izveidotas faktūrās
- **Faktūras numurēšanas** formats un sekvence
- **Logo**, kas tiek izveidots faktūras galvenajā daļā (header)
- **Pielaugsmas teksts** (footer), kurā ir noteikumi, paziņojumi vai juridiskā informācija

Lai pielāgotu faktūras šabli, pārvietojieties uz **Ultimate Multisite → Settings → Payment** un meklējiet faktūrām saistīto iestatījumu.
