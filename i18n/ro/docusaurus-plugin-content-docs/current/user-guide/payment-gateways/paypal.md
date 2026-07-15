---
title: Configurarea PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Configurarea gateway-ului PayPal (v2)

_**NOTĂ IMPORTANTĂ: Acest articol se referă la Ultimate Multisite versiunea 2.x.**_

Poți activa până la patru metode de plată pe pagina noastră de setări pentru plăți: Stripe, Stripe Checkout, PayPal și Manual. În acest articol, vom vedea cum să integrezi cu **PayPal**.

La fel ca Stripe, PayPal este utilizat pe scară largă pentru plăți online, mai ales pe site-uri WordPress. Acest articol te va ghida despre cum să folosești PayPal ca metodă de plată disponibilă în rețeaua ta.

Reține că trebuie să ai un **cont PayPal Business** pentru a obține credențialele API necesare pentru această integrare.

## Activarea PayPal în rețeaua ta {#enabling-paypal-on-your-network}

Pentru a activa PayPal ca metodă de plată disponibilă în rețeaua ta, mergi la fila **Ultimate Multisite > Settings > Payments** și bifează caseta de lângă PayPal.

![Activarea PayPal în gateway-urile de plată active](/img/config/settings-payment-gateways.png)

## Utilizarea asistentului de configurare ghidată {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 adaugă un asistent de configurare ghidată PayPal la setările gateway-ului de plată. După ce activezi PayPal, folosește asistentul din **Ultimate Multisite > Settings > Payments** pentru a alege cum vrei să conectezi gateway-ul și pentru a confirma ce credențiale mai sunt necesare înainte de salvare.

Asistentul acceptă două căi de configurare:

* **Introducerea manuală a credențialelor**: Folosește această cale când ai deja credențiale PayPal API, când configurarea OAuth nu este disponibilă pentru contul tău sau când preferi să copiezi singur credențialele din PayPal. Introdu API Username, API Password și API Signature în câmpurile PayPal, apoi salvează setările de plată.
* **Poarta de conectare OAuth**: Folosește această cale doar când opțiunea OAuth este disponibilă și activată pentru instalarea ta. Asistentul afișează fluxul OAuth în spatele unui feature flag, astfel încât rețelele fără flag continuă să folosească câmpurile pentru introducerea manuală a credențialelor.

Dacă nu vezi opțiunea OAuth în asistent, finalizează fluxul de introducere manuală a credențialelor de mai jos. Gateway-ul funcționează cu aceleași credențiale API PayPal Business ca versiunile anterioare Ultimate Multisite 2.x.

## Obținerea credențialelor PayPal API {#getting-the-paypal-api-credentials}

După ce PayPal este activat ca gateway de plată, va trebui să completezi câmpurile pentru PayPal API **Username** , PayPal API **Password** și PayPal API **Signature**.

Le poți obține autentificându-te în contul tău PayPal [Live](https://www.paypal.com/home) sau [Sandbox](https://www.sandbox.paypal.com/home).

(Reține că poți folosi **modul sandbox** pentru a testa plățile și a vedea dacă gateway-ul este configurat corect. Doar activează secțiunea corespunzătoare.)

![Câmpurile pentru credențiale PayPal API și comutatorul pentru modul sandbox](/img/config/settings-payment-gateways.png)

Pentru a solicita credențiale API Signature sau Certificate pentru contul tău PayPal:

  1. Mergi la [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. În secțiunea **API access**, fă clic pe **Update**.
![PayPal Account Settings cu secțiunea API access](/img/config/settings-payment-gateways.png)

  3. Sub **NVP/SOAP API integration (Classic)** , fă clic pe **Manage API credentials**.
![Integrarea PayPal NVP/SOAP API Manage API credentials](/img/config/settings-payment-gateways.png)

     * Dacă ai generat deja un API Signature sau Certificate, vei fi redirecționat către o pagină unde îți poți găsi credențialele.

     * _**Notă:** Dacă ți se solicită să verifici contul PayPal, urmează instrucțiunile de pe ecran._

  4. Selectează _una_ dintre următoarele opțiuni, apoi fă clic pe **Agree and Submit**.

     * **Request API Signature** – Selectează pentru autentificarea cu API Signature.

     * **Request API Certificate** – Selectează pentru autentificarea cu API Certificate.

  5. PayPal generează credențialele tale API după cum urmează:
![Credențiale API generate de PayPal](/img/config/settings-payment-gateways.png)

     * **Credențialele API Signature** includ un API Username, API Password și Signature, care nu expiră. Aceste valori sunt ascunse implicit pentru securitate suplimentară. Fă clic pe **Show/Hide** pentru a le comuta între afișat și ascuns. Când ai terminat, fă clic pe **Done**.

     * **Credențialele API Certificate** includ un API Username, API Password și Certificate, care expiră automat după trei ani. Fă clic pe **Download Certificate** pentru a salva API Certificate pe desktopul tău.

Asta este, integrarea ta de plată PayPal este completă!

Dacă ai întrebări privind setările PayPal, poți consulta [Help Center](https://www.paypal.com/br/smarthelp/home) PayPal.
