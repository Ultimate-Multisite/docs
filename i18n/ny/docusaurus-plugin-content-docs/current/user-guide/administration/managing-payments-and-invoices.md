---
title: Kuyendetsa Mapemba ndi Zina
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Kufunira Mapempha ndi Invo

## Zinthu za Mapempha (Payment Settings) {#payment-settings}

Mmodzi mwa kukhulupirira mapempha, mukufunika kuti muipatsire zinthu za mapempha. Ndipo mupita ku **Ultimate Multisite → Settings** ndipo mupitira tab ya **Payment**.

![Payment settings tab](/img/admin/settings-payments-top.png)

Izi ndi chithunzi chake cha tsiku lino la zinthu za mapempha:

![Payment settings full page](/img/admin/settings-payments-full.png)

### Zinthu Zomwe Zili Kuti Mapempha (General Payment Options) {#general-payment-options}

M'malo wosangalala, muli ndi ulemu wopatsa:

- **Currency** — Ulemu woperekedwa woperekedwa kwa mapempha.
- **Currency Position** — M'malo momwe chithunzi cha ulemu kuli (m'malo mwa ndalama kapena m'malo mwa ndalama).

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Mapempha Awo (Payment Gateways) {#payment-gateways}

Ultimate Multisite imapatsa mapempha omwe ndi ena. Muli ndi ulemu wopatsa ndi kukhazikitsa monga momwe mungukonze m'malo wa Payment settings tab.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Mapempha omwe muli ndiwo ndi:

- **Stripe** — Mapempha a kachito kwa Stripe
- **PayPal** — Mapempha a PayPal
- **Manual** — Kwa kupanga mapempha ofuskana kapena zinthu zina zomwe mumapanga.

Kukonza la mapempha lonse limuli ndi m'malo wopatsa pamene mukuwerenga API keys ndi zinthu zina.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox Mode {#sandbox-mode}

Mungathe kukhazikitsa **Sandbox Mode** kuti mupatsa mapempha m'malo monga momwe mungayambe kupanga. Pamene Sandbox mode imaphatikizidwa, kulibe ndalama zosiyanasiyana kudziwika.

## Kukhudza Mapempha (Viewing Payments) {#viewing-payments}

Mupita ku tsiku la **Payments** m'malo wa Ultimate Multisite kuti mufunse mapempha onse m'malo wanu wosiyanasiyana.

![Payments list](/img/admin/payments-list.png)

Mungathe kuperekera mapempha monga momwe mungayambe (completed, pending, failed, refunded) ndipo mupatsa mapulogolo omwe muli ndiwo.

Chonza kukhala mwayi wopempa kuti muone zinthu zonse za mwayi wopempa, kuphatikiza zinthu zomwe zimene, membership yomwe imaphatikiza, maphunziro a mwanawo, ndi data ya gateway ya mwayi wopempa.

## Invoices (Mwayi Wopempa) {#invoices}

Ultimate Multisite imaphatikiza mwayi wopempa kuti ipereke invoices (mwayi wopempa). Mumwezi mungayesulure template ya invoice ndi njira yoperekera nkhani (numbering format) kuchokera kwa Payment settings.

Zinthu zomwe mungupatsire ku customize invoice zikuphatikiza:

- **Dzina la kampani ndi boma** lomwe limaphatikizidwa pa invoices
- **Njira ya numbering ya invoice** ndi njira yoperekera (sequence)
- **Logo** lomwe limaphatikizidwa m'header ya invoice
- **Text ya footer yomwe imaphatikiza** kuti mwayi, zolemba, kapena zinthu za shahi.

Kuti mungupatsire ku customize template ya invoice, ndi mutera kwa **Ultimate Multisite → Settings → Payment** ndipo mwayi wopempa zomwe zimene.
