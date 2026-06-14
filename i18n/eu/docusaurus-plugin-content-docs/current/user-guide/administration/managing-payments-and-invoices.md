---
title: Pagamentak eta fakturak eskaintzea
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Pagamendu eta Kontabilitateak Eskatzea

## Pagamendu Kontseilua

Pagamenduen hartzea hasten denian, pagamendu-er garrantzaria kontseilua konfiguratzea behar duzu. **Ultimate Multisite → Settings** funtziokoan jarraitu eta **Payment** tabira klik egin.

![Payment settings tab](/img/admin/settings-payments-top.png)

Hau da pagamendu kontseilua lapurtuaren burok:

![Payment settings full page](/img/admin/settings-payments-full.png)

### General Pagamendu Opsioak

Kontseiluen umumbat, hauek konfiguratuko dituztezu:

- **Currency** — Transaksionetan erabilgarria default currencya
- **Currency Position** — Currency simboloaren jardura lekuan (sarrera/gainaren aurrera edo ondoren)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Pagamendu Lehenagileak (Payment Gateways)

Ultimate Multisite-ek pagamendu lehenagile batzuk eskaintzen du. Harri eta konfiguratzea tabean egin dezakezu.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Eskaintzak arau hauek dira:

- **Stripe** — Stripe bidez credit card pagamenduak
- **PayPal** — PayPal pagamenduak
- **Manual** — Offline edo espezial pagamendu prosesamentuaren bitartean

Lehenagile baten konfiguratzeko zehaztasuneko sektiona dago, hori da API keys eta beste kontseilua sartzen dituzu.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox Modu (Sandbox Mode)

Pagamendu integrazioa "live" funtziatuko aurretik jartzeko, **Sandbox Mode** aktiboa izan daiteke. Sandbox modu aktibo dagoenean, ez dira pertsonal pagamenduak egin dira.

## Pagamenduen Erakundea (Viewing Payments)

Ultimate Multisite-aren eskoldearen ondorioz, network-eko txikiko transaksion guztietara ikusteko **Payments** lapurtuaren funtziokoan jarraitu.

![Payments list](/img/admin/payments-list.png)

Pagamenduak status (konplikatuta, espera, ezarrituta, itzultu) edo transaksionak zehatz batzuk bilatzeko filtrazio egin dezakezu.

Pagamentu baten kopuratuan klik egin behar duzu jakinarazpenaren guztizko detaliak ikusteko, zehaztasunak, taldeak, kliunturri informazioa eta galdera-gaindutako datuak.

## Invoices (Jakinarazpenak)

Ultimate Multisite-ek kopuratu artean automatikoki jakinarazpenak ematen dituzte. Jakinarazpenaren mallu (template) eta numerazio formatua maila "Payment settings" (Pagamentu aukerak) dauden bat uste dezakezu.

Jakinarazpenaren modifikazio opsioak hauek barne dira:

- **Kompañiaren irudi eta adresak** jakinarazpenetan eragiten
- **Jakinarazpenaren numerazio formatua eta urdina**
- **Logo** jakinarazpenaren lortuarekin (header) eragiten
- **Adotua testu footerra** terminoak, noturiarak edo lege informazioa egiteko

Jakinarazpenaren mallua modifikatzeko, **Ultimate Multisite → Settings (Aplikazioak/Konfigurazioa) → Payment (Pagamentu)** funtziara jarraitu eta jakinarazpenarekin lotutako aukerak ikustu.
