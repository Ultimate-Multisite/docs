---
title: Configurar PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Configurar la Pasarela de Pago PayPal (v2)

_**NOTA IMPORTANTE: Este artículo se refiere a Ultimate Multisite versión 2.x.**_

Puedes activar hasta cuatro métodos de pago en nuestra página de configuración de pagos: Stripe, Stripe Checkout, PayPal y Manual. En este artículo, veremos cómo integrarse con **PayPal**.

Al igual que Stripe, PayPal se utiliza ampliamente para pagos en línea, especialmente en sitios web de WordPress. Este artículo te guiará sobre cómo usar PayPal como método de pago disponible en tu red.

Ten en cuenta que necesitas tener una **cuenta de PayPal Business** para obtener las credenciales de la API necesarias para esta integración.

## Habilitar PayPal en tu red {#enabling-paypal-on-your-network}

Para habilitar PayPal como método de pago disponible en tu red, ve a **Ultimate Multisite > Settings > Payments** y marca la casilla junto a PayPal.

![Habilitando PayPal en pasarelas de pago activas](/img/config/settings-payment-gateways.png)

## Usar el asistente de configuración guiado {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 añade un asistente de configuración guiado para PayPal en la configuración de la pasarela de pago. Después de habilitar PayPal, usa el asistente en **Ultimate Multisite > Settings > Payments** para elegir cómo quieres conectar la pasarela y confirmar qué credenciales aún se necesitan antes de guardar.

El asistente admite dos rutas de configuración:

* **Introducció manual de credencials**: Utilitza aquesta ruta si ja tens les credencials API de PayPal, si no hi és disponible la configuració OAuth per a la teva compte, o si prefereixes copiar les credencials directament des de PayPal. Introduix el Nom d'usuari API (API Username), la Contrasenya API (API Password) i la Firma API (API Signature) als camps de PayPal, i després guarda les configuracions de pagament.
* **Portera de connexió OAuth**: Utilitza aquesta ruta només quan l'opció OAuth sigui disponible i activada per a la teva instal·lació. El wizard mostra el flux OAuth detrás d'un feature flag (una marca de caracter), així que les xarxes sense aquest flag continuaran utilitzant els camps d'introducció manual de credencials.

Si no veus l'opció OAuth al wizard, completa el flux d'introducció manual de credencials a continuació. El gateway funciona amb les mateixes credencials API de PayPal Business que es van utilitzar en les anteriors versions Ultimate Multisite 2.x.

## Obtenció de les credencials API de PayPal {#getting-the-paypal-api-credentials}

Una vegada has activat PayPal com a gateway de pagaments, t'ho cal complir els camps per al **Nom d'usuari API** (Username), la **Contrasenya API** (Password) i la **Firma API** (Signature) de PayPal.

 Pots obtenir-les iniciant sessió en la teva compte [Live](https://www.paypal.com/home) o [Sandbox](https://www.sandbox.paypal.com/home).

(Recorda que pots utilitzar el **mode sandbox** per provar pagaments i veure si el gateway està configurat correctament. Simplement activa la secció corresponent.)

![Campos de credencials API de PayPal i interruptor del mode sandbox](/img/config/settings-payment-gateways.png)

Per sol·licitar la Firma API o les credencials de certificat per a la teva compte de PayPal:

1. Ve a les configure de compte [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. A la secció **API access**, fes clic en **Update** (Actualitzar).
![PayPal Account Settings with API access section](/img/config/settings-payment-gateways.png)

  3. Sota **NVP/SOAP API integration (Classic)**, fes clic en **Manage API credentials** (Gestionar credencials API).
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Si ja has generat una Firma d'API o un Certificat, et redirigiran a una pàgina on podrà trobar les teves credencials.

     * _**Nota:** Si es solicita la verificació del teu compte PayPal, segueix les instruccions que apareixen a pantalla._

  4. Selecciona *una* de les següents opcions i fes clic en **Agree and Submit** (Acordar i Submetre).

     * **Request API Signature** – Selecciona per a l'autenticació amb Firma d'API.

     * **Request API Certificate** – Selecciona per a l'autenticació amb Certificat d'API.

  5. PayPal genera les teves credencials d'API de la següent manera:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * Les **credencials de Firma d'API** inclou un Nom d'usuari d'API (API Username), una Contrasenya d'API (API Password) i una Firma (Signature), que no expira. A aquests valors es oculta per defecte per a més seguretat. Fes clic en **Show/Hide** (Mostrar/Ocultar) per activar-los o desactivar-los. Quan acuis, fes clic en **Done** (Fes-ho).

* **Credencials del certificat API** inclou un Nom d'usuari API (API Username), una Contrasenya API (API Password) i el Certificat, que expira automàticament després de tres anys. Clica a **Descarregar Certificat** per guardar el Certificat API al teu descridori.

¡ Això és tot! La teva integració de pagaments amb PayPal està completada!

Si tens qualsevol dubte sobre la configuració de PayPal, pots consultar el [Help Center](https://www.paypal.com/br/smarthelp/home) de PayPal.
