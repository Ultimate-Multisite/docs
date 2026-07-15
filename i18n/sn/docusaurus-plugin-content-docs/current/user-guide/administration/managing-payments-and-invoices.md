---
title: Kugadzira Zvinhaka uye Zvinotora
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Kurudzera neKufamba kweZvinovhu

## Zvinhanganiso zveKutanga KweMhando {#payment-settings}

Panguva unenge uchatanga kuita zvinovhu, unoda kuita zvinhanganiso zvekuita mhando dzakutanga. Ndosvika pakati pe **Ultimate Multisite → Settings** uye utange kuita kliki pa tab ya **Payment**.

![Payment settings tab](/img/admin/settings-payments-top.png)

Iyi ndiyo nzira yakare ye kuratidza zvinovhu zvekuita mhando:

![Payment settings full page](/img/admin/settings-payments-full.png)

### Zvinhanganiso ZveKutanga KweMhando {#general-payment-options}

Mu settings dzakutanga, unogona kuita izvi:

- **Currency** — Mhando yakatarwa inoshandiswa kune zvinovhu zvakaita kuti zvigadzirwa.
- **Currency Position** — Kuratidza munzvimbo ipi chishoko chekufamba (panguva/pachishoma kuita).

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Mhando Dzekutanga KweMhando (Payment Gateways) {#payment-gateways}

Ultimate Multisite inoshandisa mhando dzakutanga dzinogona kuonekwa. Unogona kuitira uye kuratidza zvinhasi zvinogona kubva pa tab ya Payment settings.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Mhando dzakatarwa ndiyo:

- **Stripe** — Zvinovhu zvecard kupfungwa neStripe
- **PayPal** — Zvinovhu zvePayPal
- **Manual** — Kune kunzwisisa kana kuita zvinovhu zvakare kana kuti kune kutanga kwakasiyana.

Mhando dzese inenge nechikamu chacho chekuita, unowanikira API keys uye zvinhanganiso zvakasiyana.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox Mode (Kutanga KweKutsimbisa) {#sandbox-mode}

Unogona kuita **Sandbox Mode** kuti utsimbise kutanga kwezvinovhu zvaunoda kuita panguva haunenge uchitanga. Kana Sandbox mode inoratidzorwa, hauta kuita zvinovhu zvakasiyana.

## Kuratidza Zvinovhu zveKutanga KweMhando (Viewing Payments) {#viewing-payments}

Ndosvika pa page ya **Payments** pakati pe Ultimate Multisite kuti utange kuona zvinovhu zvose zvaunoda kuita munzvimbo dzako.

![Payments list](/img/admin/payments-list.png)

Unogona kuratidza zvinovhu nestatus (completed, pending, failed, refunded) uye kutsvaga zvinovhu zvakasiyana.

Kupfuura kuitika kuona zvinotevera kwakawanda pamusoro pe chitsananguro chekufufudza, zvichisinga nezvinhu zviri kutanga (line items), membership inosimbisa, mahengetsi ekubhadhara, uye data ya payment gateway.

## Invoices (Chitsananguro) {#invoices}

Ultimate Multisite inogona kuita chitsananguro chekufufudza (invoices) nekuti kune payments. Unogona kungeura template yekuchengetedza nekuita numbering format kubva muPayment settings.

Zvinosanganisira zvinoreva invoice customization:

- **Zvinoda kuone kwemudziko uye address ye company** pamusoro pe invoices
- **Format uye sequence ya invoicing** (numbering)
- **Logo** inotevera pamusoro pe header ye invoice
- **Custom footer text** yakanaka kune terms, notes, kana matanho ekugadzirisa.

Kuti usimbise template yekuchengetedza, ndichida kuti uenda ku **Ultimate Multisite → Settings → Payment** uye uone settings dzakakosha neinvoice.
