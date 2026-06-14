---
title: |+
  Manual Pagmentak konpondu

sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Manual Pagamendu Konponbidea (v2)

_**IMPORTANTE NOTA: Hego deskari Ultimate Multisite bertsio 2.x-ean referentzia da.**_

Manual pagamenduen da, erabiltzaile funaletako iradokizun edo **Stripe** edo **PayPal** ez dutenean andrego erabilera andreko erabiltzaileei andre payment metodo hauek emateko bidea da. Horra wire transfer bat edo banku transfer bat edo andre payment metodo bat izan da, erabiltzaile funaletako lekuan disponible jakin dituztenak.

## Manual Pagamenduen aktiboa egitea

Manual pagamenduak konponbidea ez da. Merkea "Payment Gateways" (Pagamendu Bidea) arauaren ondorioz, **Manual**-a onartu behar duzu eta erabiltzaileari zer eratu behar duen informazio detallatua emate behar duzu.

Lehenik, **Ultimate Multisite > Settings > Payments** (Konfigurazioa > Pagamenduak) funtziara jarraitu. "Payment Gateways" (Pagamendu Bidea) eskatzearen ondorioz, **Manual**-a onartu behar duzu. Horrek dailean informazio bat emateko "Payment Instructions" (Pagamendu Instrucciones) bokikoa erakusten du.

Horra, klienteak pagamendu egin dezaten informazioa jodezatu behar duen informazioa hasi ditu. Horren artean banku kontua datuak eta emaila izan daiteke, gai iradokizun bat bidali nahi du erabiltzaileari, adibidez.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Hau da manual gateway konponbidea:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Konponbidea egindatzen ari zenean, "Save Settings" (Konfigurazioak saldatu) klik egin eta gertu da. Erabiltzaileek andreko networkan emateko iradokizunak hartuko duela esaten testu bat ikusten du.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

Aurrera egin eta pagamendu instruksioak erabilera daiteke, **Thank You** (Eskerrik asko) lapian ere iradokizunak hartuko duela esaten testu bat ikusten du.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Manual pagamenduen konponbidea egitea

Manual koordino bat konprimatu eta, eskerrikun, esku-leraren **Payments** menuku jarraitu. Honek dauden network-eko guztia koordenak eta gehiago datu-dira ikusi nahi duzu, status-ek barne. Manual koordenak, manuel aldatzen pena txiki bat edo ez dutenean, **Pending** (Ez dago) statusan egondu eta hori jarraituko du.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

**reference code** (referentzia kodea) klikizik koordenaren lapera sartu. Honek dauden pending koordian guztia datu-dira duzu, status ID referentzia, produkzioak, orduak eta gehiago.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Adiak kolona (right column)-ean, koordenaren statusa aldatu dezakezu. **Completed** (Konpletu) statusan jarraitzea eta **Activate Membership** (Membership aktibatu) opsioa onartzea, klientearen lapera aktiboa izango da eta membership-ek aktibo izango dira.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
