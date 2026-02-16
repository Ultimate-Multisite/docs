---
title: Configurarea PayPal
sidebar_position: 10
_i18n_hash: cb5153acc4c60b39af9d73311a5b3b44
---
# Configurarea gateway-ului PayPal (v2)

_**NOTĂ IMPORTANTĂ: Acest articol se referă la Ultimate Multisite versiunea 2.x.**_

Poți activa până la patru metode de plată în pagina noastră de setări pentru plăți: Stripe, Stripe Checkout, PayPal și Manual. În acest articol, vom vedea cum să integrezi **PayPal**.

La fel ca Stripe, PayPal este folosit pe scară largă pentru plăți online, în special pe site-urile WordPress. Acest articol te va ghida în configurarea PayPal ca metodă de plată disponibilă în rețeaua ta.

Reține că ai nevoie de un **cont PayPal Business** pentru a obține credențialele API necesare acestei integrări.

## Activarea PayPal în rețeaua ta

Pentru a activa PayPal ca metodă de plată disponibilă în rețeaua ta, mergi la **Ultimate Multisite > Settings > Payments** și bifează căsuța de lângă PayPal.

![Activarea PayPal în gateway-urile de plată active](/img/config/settings-payment-gateways.png)

## Obținerea credențialelor API PayPal

După ce PayPal este activat ca gateway de plată, va trebui să completezi câmpurile pentru **Username** API PayPal, **Password** API PayPal și **Signature** API PayPal.

Poți obține aceste date conectându-te la contul tău PayPal [Live](https://www.paypal.com/home) sau [Sandbox](https://www.sandbox.paypal.com/home).

(Nu uita că poți folosi **modul sandbox** pentru a testa plățile și a verifica dacă gateway-ul este configurat corect. Activează pur și simplu secțiunea corespunzătoare.)

![Câmpurile pentru credențialele API PayPal și comutatorul pentru modul sandbox](/img/config/settings-payment-gateways.png)

Pentru a solicita credențiale API Signature sau Certificate pentru contul tău PayPal:

  1. Mergi la [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. În secțiunea **API access**, dă clic pe **Update**.  
![Setările contului PayPal cu secțiunea API access](/img/config/settings-payment-gateways.png)

  3. Sub **NVP/SOAP API integration (Classic)**, dă clic pe **Manage API credentials**.  
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Dacă ai generat deja un API Signature sau Certificate, vei fi redirecționat către o pagină unde îți poți găsi credențialele.

     * _**Notă:** Dacă ți se cere să îți verifici contul PayPal, urmează instrucțiunile de pe ecran._

  4. Selectează _una_ dintre următoarele opțiuni, apoi dă clic pe **Agree and Submit**.

     * **Request API Signature** – Selectează pentru autentificare prin API Signature.

     * **Request API Certificate** – Selectează pentru autentificare prin API Certificate.

  5. PayPal generează credențialele tale API astfel:  
![Credențialele API generate de PayPal](/img/config/settings-payment-gateways.png)

     * **Credențialele API Signature** includ un API Username, API Password și Signature, care nu expiră. Aceste valori sunt ascunse implicit pentru securitate suplimentară. Dă clic pe **Show/Hide** pentru a le afișa sau ascunde. Când ai terminat, dă clic pe **Done**.

     * **Credențialele API Certificate** includ un API Username, API Password și Certificate, care expiră automat după trei ani. Dă clic pe **Download Certificate** pentru a salva certificatul API pe desktop.

Asta e tot, integrarea ta PayPal pentru plăți este completă!

Dacă ai întrebări despre setările PayPal, poți consulta [Centrul de asistență](https://www.paypal.com/br/smarthelp/home) PayPal.
