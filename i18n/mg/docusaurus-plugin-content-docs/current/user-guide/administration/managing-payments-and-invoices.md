---
title: Fitantanana ny Fandoavam-bola sy ny Nota
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Fitera ny Fandoana Fandoavam-bola sy Taratasy Fandoavam-bola {#managing-payments-and-invoices}

## Fandrefesana Fandoavam-bola {#payment-settings}

Alohan'ny fandraisana vola ianao, mila mametraka ireo fepetra mifandraika amin'ny fandoavam-bola ianao. Mandehana any amin'ny **Ultimate Multisite → Settings** ary tsindrio ny tabilao **Payment**.

![Payment settings tab](/img/admin/settings-payments-top.png)

Ity misy endrika feno an'ilay pejy fandrefesana fandoavam-bola:

![Payment settings full page](/img/admin/settings-payments-full.png)

### Safidy Fandoavam-bola Ankapobeny {#general-payment-options}

Ao amin'ny fandrefesana ankapobeny dia afaka mametraka ireto zavatra ireto ianao:

- **Currency** — Ny vola fototra ampiasaina amin'ny fifanakalozana
- **Currency Position** — Aiza no miseho ny marika vola (alohan'ny/aorian'ny vola)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Payment Gateways {#payment-gateways}

Manohana fandoavam-bola maro i Ultimate Multisite. Afaka manao activé sy mametraka tsirairay amin'izy ireo avy amin'ny tabilao Payment ianao.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Ireto misy fitaovana azo ampiasaina:

- **Stripe** — Fandoavam-bola amin'ny credit card mampiasa Stripe
- **PayPal** — Fandoavam-bola PayPal
- **Manual** — Ho an'ny famahana fandoavam-bola tsy mitondra vola na manokana

Ny fitaovana tsirairay dia manana faritra manokana ho an'ny fandrefesana izay ametrahana ny API keys sy ireo fepetra hafa.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox Mode {#sandbox-mode}

Afaka mametraka **Sandbox Mode** ianao mba hanandrana ny fampifandraisana fandoavam-bola alohan'ny hampiasana azy amin'ny tena izy. Rehefa miasa ny sandbox mode, tsy hisy vola tena izy ho voahena.

## Fijerena ny Fandoavam-bola {#viewing-payments}

Mandehana any amin'ny pejy **Payments** eo ambanin'ny Ultimate Multisite mba hijerena ny fifanakalozana rehetra ao anatin'ny tambajotrao.

![Payments list](/img/admin/payments-list.png)

Afaka manao fitadiavana fandoavam-bola araka ny sata (completed, pending, failed, refunded) ary mitady fifanakalozana manokana ianao.

Tsindrio ny fandoavam-bola iray mba hahitana ny antsipiriany rehetra azy, anisan'izany ireo zavatra voarakitra (line items), ny fandraisana anjara (membership) mifandray, ny fampahalalana momba ny mpanjifa ary ny data avy amin'ny payment gateway.

## Invoices (Fanamarihana Fandoavam-bola) {#invoices}

Afaka mamorona taratasy fandoavam-bola ho azy ny Ultimate Multisite rehefa misy fandoavam-bola. Afaka manova ny endrika (template) sy ny fomba fametrahana laharana (numbering format) an'io taratasy io ianao amin'ny Payment settings.

Ny safidy hanovana ny invoice dia ahitana:

- **Anaran'ny orinasa sy adiresy** haseho ao amin'ny invoice
- **Fomba fametrahana laharana** sy ny fiafaran'izy ireo
- **Logo** haseho eo amin'ny lohatenin'ny invoice
- **Teny footer manokana** ho an'ny fitsipika, fampahafantarana na fampahalalana ara-dalàna

Mba hanovana ny endrika invoice dia mandehin'ny lalana: **Ultimate Multisite → Settings → Payment** ary mitady ireo fepetra mifandraika amin'ny invoice.
