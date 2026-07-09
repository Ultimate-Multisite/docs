---
title: Jere Peman ak Faktur
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Jere Mantyeman ak Faktur {#managing-payments-and-invoices}

## Konfigirasyon Pwòpèman {#payment-settings}

Anvan ou kòmanse resevwa pwòpèman yo, ou pral bezwen configure tout bagay ki gen rapò ak pwòpèman an. Ale nan **Ultimate Multisite → Settings** epi klike sou onglet **Payment**.

![Payment settings tab](/img/admin/settings-payments-top.png)

Men yon gade konplè paj konfigirasyon pwòpèman an:

![Payment settings full page](/img/admin/settings-payments-full.png)

### Opsyon Pwòpèman Jeneral {#general-payment-options}

Nan tout opsyon jeneral yo, ou ka configure sa yo:

- **Currency** — Monè ki itilize kòm defòt pou transaksyon yo
- **Currency Position** — Kote simbl la vini (anvan/apou kantite a)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Payment Gateways {#payment-gateways}

Ultimate Multisite sipòte plizyè payment gateway. Ou ka aktive epi configure chak nan onglet Payment settings la.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Gateway ki disponib yo gen ladan:

- **Stripe** — Pwòpèman kat kredi atravè Stripe
- **PayPal** — Pwòpèman PayPal
- **Manual** — Pou pwosesis paman an offline o konti espesyal

Chak gateway gen li tèt li seksyon konfigirasyon kote ou mete API keys ak lòt tout bagay.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox Mode {#sandbox-mode}

Ou ka aktive **Sandbox Mode** pou w teste entegrasyon pwòpèman ou anvan ou lanse l anba piblik. Lè sandbox mode a aktif, pa gen okenn chaj reyèl ki pral fèt.

## Gade Pwòpèman yo {#viewing-payments}

Ale nan paj **Payments** anba Ultimate Multisite pou w wè tout transaksyon yo sou tout rezo ou an.

![Payments list](/img/admin/payments-list.png)

Ou ka filtre pwòpèman yo pa estati (konplè, ap tann, echwe, refi) epi chèche transaksyon espesifik yo.

Klike sou yon paman pou w wè tout detay li yo, ki gen ladan liy yo (line items), manmship ki asosye a, enfòmasyon kliyan an, ak enfòmasyon pòtman paman an.

## Faktura (Invoices) {#invoices}

Ultimate Multisite ka otomatikman jenere faktura pou paman yo. Ou ka personalize modèl faktura ak fòma numèrikasyon li nan paramèt Paman (Payment settings).

Opsyon kustomizasyon faktura yo gen ladan:

- **Non konpayi ak adrès** ki parèt sou faktura
- Fòma ak serye numèrikasyon faktura a
- **Logo** ki parèt nan tèt faktura a
- **Teks pye (footer text) koutim** pou kondisyon, not, oswa enfòmasyon legal

Pou kòmile modèl faktura a, ale nan **Ultimate Multisite → Settings → Payment** epi chèche paramèt ki gen rapò ak faktura yo.
