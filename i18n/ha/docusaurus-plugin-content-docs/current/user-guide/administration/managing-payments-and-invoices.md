---
title: Gudanar da Biya da Kwathara
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Idanin Kuɗi da Kwathara {#managing-payments-and-invoices}

## Bayanai na Kuɗi {#payment-settings}

Kafin ka fara karɓar kuɗi, dole ne ka yi tsarin bayanan da suka shafi kuɗi. Ka tura kanka zuwa **Ultimate Multisite → Settings** sannan ka danna tab ɗin **Payment**.

![Payment settings tab](/img/admin/settings-payments-top.png)

Ga bayani na cikakken shafin bayanan kuɗi:

![Payment settings full page](/img/admin/settings-payments-full.png)

### Zaɓuwar Kuɗin Na Umum {#general-payment-options}

A bayanan na gaba, za ka iya tsara abubuwa kamar haka:

- **Currency** — Wannan shi ne kuɗin da ake amfani da shi a cikin tayin kuɗi
- **Currency Position** — Inda alamar kuɗin za ta bayyana (kafin ko bayan yarjejeniyar kuɗi)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Gidan Kuɗi (Payment Gateways) {#payment-gateways}

Ultimate Multisite yana samun dama ga gidan kuɗi da yawa. Za ka iya samar da kowane ɗayansa da kuma tsara shi daga tab na Bayanai na Kuɗi.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Gidajin da ake samu sun haɗa:

- **Stripe** — Biya ta kadi ta hanyar Stripe
- **PayPal** — Biya ta PayPal
- **Manual** — Don gudanar da biya a waje ko tare da tsarin kuɗi na musamman

Kowane gidan kuɗi yana da sashi na tsara shi dace inda ka shigar API keys da wasu bayanan.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Yanayin Sandbox (Sandbox Mode) {#sandbox-mode}

Za ka iya samar da **Sandbox Mode** don gwada haɗin kuɗin ka kafin fara aiki na gaske. Lokacin da Sandbox mode ya kasance aiki, ba za a yi wani kuɗi a gaske ba.

## Gani Kuɗin {#viewing-payments}

Ka tura kanka zuwa shafin **Payments** a ƙarƙashin Ultimate Multisite don ganin duk ayyukan kuɗi a dukkan shafukan ka.

![Payments list](/img/admin/payments-list.png)

Za ka iya fassara ayyukan kuɗi bisa yanayin su (completed, pending, failed, refunded) sannan kuma bincika ayyuka na musamman.

Danna kan wani biyanara don ganin cikakken bayanan shi, wanda ya haɗa da sashi daban-daban (line items), shawarwar da aka samu, bayanai na abokan ciniki, da kuma bayanan gwamnatin biyanara.

## Invoices (Biya-biya) {#invoices}

Ultimate Multisite zai iya samar da in invoice (biya-biya) ne ba tare da ku yi wani abu ba don biyanar ku. Kuna iya gyara formatin template na invoice da kuma yadda ake rubuta lambar daga sassan Payment settings.

Zaɓuɓɓukan gyaran invoice sun haɗa da:

- **Sunan kamfashi da adireshin** da za a nuna a kan invoice
- **Formatin da aka rubuta lambar invoice** da tsarin da ake biye
- **Logo** da za a nuna a cikin sashi na invoice
- **Rubutu na ƙasa (footer text) na musamman** don bayanan dokoki, ra'ayoyi, ko bayanai na shari

Don gyara template na invoice, tafiya zuwa **Ultimate Multisite → Settings → Payment** kuma nemo ayyukan da suka shafi invoice.
