---
title: Konfigire PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Konfigirasyon Gateway PayPal (v2)

_**NOTE ENTRANTA: Sa tèks sa a ref refere a Ultimate Multisite v2.x.**_

Ou ka aktive jounye char ak kat metò pou paman an paj konfigirasyon paman ou yo: Stripe, Stripe Checkout, PayPal ak Manual. Nan tèks sa a, nou pral wè kijan pou nou intègre ak **PayPal**.

Men jan Stripe, PayPal itilize anpil pou paman sou entènèt, sitou sou WordPress websites. Tèks sa a ap gide ou sou kijan pou w itilize PayPal kòm yon metò paman ki disponib nan rezo ou an.

Note ke ou bezwen gen yon **kont Biznis PayPal** pou jwenn kredyans API ki nesesè pou entegrasyon sa a.

## Aktive PayPal sou rezo ou an

Pou aktive PayPal kòm yon metò paman ki disponib sou rezo ou an, ale nan **Ultimate Multisite > Settings > Payments** tab la epi mete bouchon an bò kote PayPal la.

![Aktive PayPal nan gateway paman aktif](/img/config/settings-payment-gateways.png)

## Itilize wizard konfigirasyon ki gide a

Ultimate Multisite 2.10.0 ajoute yon wizard konfigirasyon PayPal ki gide sou konfigirasyon gateway paman an. Apre ou aktive PayPal la, itilize wizard la sou **Ultimate Multisite > Settings > Payments** pou chwazi kijan ou vle konekte gateway la epi konfime ki kredyans yo toujou bezwen anvan ou kayann li.

Wizard la sipò de wout konfigirasyon:

* **Entrer les identifiants manuellement**: Fè wout sa chemen lè ou genyen deja les credentials PayPal API, lè OAuth setup pa disponib pou kont ou, oswa lè ou prefere copie les credentials de PayPal ou menm. Mete l'API Username, l'API Password, ak l'API Signature nan champs PayPal la, epi save les settings paiement yo.
* **Porte koneksyon OAuth**: Fè sa chemen sa sèlman lè opsyon OAuth disponib e aktif pou instalasyon ou a. Wizard la montre flwa OAuth dèyann yon feature flag, donk rezo ki pa gen flag la kontinye itilize champs entri credential manman yo.

Si ou pa wè opsyon OAuth nan wizard la, fini pwosesis entri credential manman an anba la. Gateway la travay ak menm credentials PayPal Business API tankou vèsyon Ultimate Multisite 2.x ki te pase yo.

## Jwenn kredensyal PayPal API

Yon fwa ou aktif PayPal kòm yon gateway paiement, ou pral bezwen ranpli champs pou **Username** API PayPal, **Password** API PayPal, ak **Signature** API PayPal.

Ou ka jwenn sa lè ou konekte nan kont [Live](https://www.paypal.com/home) oswa [Sandbox](https://www.sandbox.paypal.com/home) ou a.

(Sonje ke ou ka itilize **mode sandbox** pou teste paiement yo epi wè si gateway la configure kòrèkteman. Sen jis toggler seksyon ki koresponn ak li.)

![Champs kredensyal API PayPal ak toggle mode sandbox](/img/config/settings-payment-gateways.png)

Pou mande API Signature oswa credential Sersèt pou kont ou nan kont PayPal ou a:

  1. Ale nan [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) ou.

  2. Nan seksyon **API access**, klike sou **Update**.

3. Anba **NVP/SOAP API integration (Classic)** la, klike sou **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Si ou genyen deja API Signature oubyen Certificate, yo ap dirije ou nan yon paj kote ou ka jwenn kredyal ou yo.

     * _**Nòt:** Si yo mande ou pou ou verifye kont PayPal ou a, apre sa swiv enstriksyon ki sou ekran an._

  4. Chwazi **yon** nan opsyon sa a, epi klike sou **Agree and Submit**.

     * **Request API Signature** – Chwazi sa pou autentifikasyon API Signature.

     * **Request API Certificate** – Chwazi sa pou autentifikasyon API Certificate.

  5. PayPal pral jenere kredyal API ou yo tankou sa a:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** genyen yon API Username, API Password, ak Signature, ki pa expire. Valè sa yo ka rete kache dekouvè pou plis sekirite. Klike sou **Show/Hide** pou ou mete yo an oswa fè yo disparèt. Lè w fini, klike sou **Done**.

     * **API Certificate credentials** genyen yon API Username, API Password, ak Certificate, ki ap expire otomatikman apre twa lane. Klike sou **Download Certificate** pou w mete API Certificate la sou desktop ou a.

Sa se tout! Entegrasyon paiement PayPal ou a fini!

Si ou gen nenpòt kesyon konsènan paramèt PayPal, ou ka referans nan [Help Center](https://www.paypal.com/br/smarthelp/home) PayPal la.
