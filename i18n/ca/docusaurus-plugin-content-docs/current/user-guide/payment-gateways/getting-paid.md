---
title: Com cobrar
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Rebre pagaments (v2)

_**NOTA IMPORTANT: Aquest article fa referència a Ultimate Multisite versió 2.x.**_

Ultimate Multisite té un sistema integrat de membresia i facturació. Perquè el nostre sistema de facturació funcioni, hem integrat les passarel·les de pagament més habituals utilitzades en el comerç electrònic. Les passarel·les de pagament predeterminades a Ultimate Multisite són _Stripe_ , _PayPal_ , i Pagament manual. També podeu utilitzar _WooCommerce_ , _GoCardless_ i _Payfast_ per rebre pagaments instal·lant els seus complements respectius.

## Configuració bàsica

Podeu configurar qualsevol d’aquestes passarel·les de pagament a la configuració de pagaments de Ultimate Multisite. La podeu trobar anant a **menú Ultimate Multisite > Configuració > Pagaments.**

![Pàgina de configuració de pagaments a Ultimate Multisite que mostra el plafó de Pagaments](/img/config/payments-settings-page.png)

Abans de configurar la vostra passarel·la de pagament, feu una ullada a la configuració bàsica de pagaments que podeu configurar:

**Força la renovació automàti** **ca:** Això assegurarà que el pagament es repeteixi automàticament al final de cada cicle de facturació segons la freqüència de facturació que hagi seleccionat l’usuari.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 comprova si la passarel·la activa té una credencial de renovació reutilitzable abans de desar una membresia recurrent amb la renovació automàtica activada. Una credencial de renovació pot ser una subscripció de la passarel·la, un acord de facturació, un token de caixa forta desat o un mètode de pagament reutilitzable equivalent. Si la passarel·la informa que no existeix cap credencial utilitzable, Ultimate Multisite desa la membresia però desactiva la renovació automàtica i registra l’estat de credencial absent perquè un administrador o un flux de suport pugui demanar al client que torni a autoritzar el pagament abans de la data de renovació.

Això evita que una membresia sembli renovar-se automàticament quan la passarel·la només pot cobrar pagaments únics. Els complements de passarel·la haurien de confirmar que els processos de pagament recurrents desen una credencial reutilitzable, especialment quan la passarel·la admet tant la captura única com els modes de pagament amb caixa forta/subscripció.

**Permet proves sense mètode de pagament:** Amb aquesta opció activada, el vostre client no haurà d’afegir cap informació financera durant el procés de registre. Això només serà necessari un cop caduqui el període de prova.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Envia factura en confirmar el pagament:** Això us dona l’opció d’enviar o no una factura després del pagament. Tingueu en compte que els usuaris tindran accés al seu historial de pagaments al Dashboard del seu sublloc. Aquesta opció no s’aplica a la passarel·la manual.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Esquema de numeració de factures:** Aquí podeu seleccionar un codi de referència de pagament o un esquema de numeració seqüencial. Si trieu utilitzar un codi de referència de pagament per a les vostres factures, no cal que configureu res. Si trieu utilitzar un esquema de numeració seqüencial, haureu de configurar el **següent número de factura** (Aquest número s’utilitzarà com a número de factura per a la propera factura generada al sistema. S’incrementa en un cada vegada que es crea una nova factura. Podeu canviar-lo i desar-lo per restablir el número seqüencial de factura a un valor específic) i el **prefix del número de factura.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## On trobar les passarel·les:

Podeu configurar les passarel·les de pagament a la mateixa pàgina ( **Ultimate Multisite > Configuració > Pagaments**). Just a sota de **passarel·les de pagament actives** , podreu veure: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ i _Manual_.

![Secció de passarel·les de pagament actives que llista Stripe, Stripe Checkout, PayPal i Manual](/img/config/payments-active-gateways.png)

Tenim un article dedicat per a cada passarel·la de pagament que us guiarà pels passos per configurar-la, que podeu trobar als enllaços següents.

Podeu veure i editar els detalls del pagament:

![Interfície d’edició de pagament](/img/admin/payment-edit.png)

Aquí teniu una vista completa de la pàgina d’edició de pagament:

![Interfície completa d’edició de pagament](/img/admin/payment-edit-full.png)

Aquí també teniu una vista completa de la configuració de les passarel·les de pagament:

![Pàgina completa de configuració de passarel·les de pagament](/img/config/settings-payments-gateways-full.png)

**Configurar la passarel·la Stripe**

**Configurar la passarel·la PayPal**** **

**Configurar pagaments manuals**

Ara bé, si voleu utilitzar _WooCommerce_ , _GoCardless_ o _Payfast_ com a passarel·la de pagament, haureu d’**instal·lar i configurar els seus complements**.

### Com instal·lar el complement WooCommerce:

Entenem que _Stripe_ i _PayPal_ no estan disponibles en alguns països, cosa que limita o dificulta que els usuaris de Ultimate Multisite utilitzin el nostre plugin de manera efectiva. Per això vam crear un complement per integrar _WooCommerce,_ que és un plugin de comerç electrònic molt popular. Desenvolupadors de tot el món van crear complements per integrar-hi diferents passarel·les de pagament. Vam aprofitar això per ampliar les passarel·les de pagament que podeu utilitzar amb el sistema de facturació de Ultimate Multisite.

_**IMPORTANT:** Ultimate Multisite: WooCommerce Integration requereix que WooCommerce estigui activat almenys al vostre lloc principal._

Primer, aneu a la pàgina de complements. La podeu trobar anant a **Ultimate Multisite > Configuració**. Hauríeu de veure la taula **Complements**. Feu clic a **Consulteu els nostres complements**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Després de fer clic a **Consulteu els nostres complements** , se us redirigirà a la pàgina de complements. Aquí podeu trobar tots els complements de Ultimate Multisite. Feu clic al complement **Ultimate Multisite: WooCommerce Integration**.

![Pàgina de complements que llista els complements de Ultimate Multisite, inclosa WooCommerce Integration](/img/addons/addons-page.png)

Apareixerà una finestra amb els detalls de l’add-on. Només cal que facis clic a **Install Now**.

<!-- Captura de pantalla no disponible: diàleg de detalls de l’add-on Ultimate Multisite WooCommerce Integration amb el botó Install Now -->

Quan la instal·lació hagi acabat, se’t redirigirà a la pàgina de plugins. Aquí, només cal que facis clic a **Network Activate** i l’add-on de WooCommerce s’activarà a la teva xarxa.

<!-- Captura de pantalla no disponible: pàgina de plugins amb l’enllaç Network Activate per a l’add-on WooCommerce Integration -->

Després d’activar-lo, si encara no tens el plugin WooCommerce instal·lat i activat al teu lloc web, rebràs un recordatori.

<!-- Captura de pantalla no disponible: avís d’administració que recorda a l’administrador que instal·li i activi el plugin WooCommerce -->

Per llegir més sobre l’add-on WooCommerce Integration, **fes clic aquí**.

### Com instal·lar l’add-on GoCardless:

Els passos per instal·lar l’add-on _GoCardless_ són pràcticament els mateixos que per a l’add-on _WooCommerce_. Ves a la pàgina d’add-ons i selecciona l’add-on **Ultimate Multisite: GoCardless Gateway**.

<!-- Captura de pantalla no disponible: pàgina d’add-ons amb l’add-on Ultimate Multisite GoCardless Gateway ressaltat -->

Apareixerà la finestra de l’add-on. Fes clic a **Install Now**.

<!-- Captura de pantalla no disponible: diàleg de detalls de l’add-on Ultimate Multisite GoCardless Gateway amb el botó Install Now -->

Quan la instal·lació hagi acabat, se’t redirigirà a la pàgina de plugins. Aquí, només cal que facis clic a **Network Activate** i l’add-on _GoCardless_ s’activarà a la teva xarxa.

<!-- Captura de pantalla no disponible: pàgina de plugins amb l’enllaç Network Activate per a l’add-on GoCardless Gateway -->

Per aprendre com començar amb la passarel·la _GoCardless_, **llegeix aquest article**.

### Com instal·lar l’add-on Payfast:

Ves a la pàgina d’add-ons i selecciona l’add-on **Ultimate Multisite: Payfast Gateway**.

<!-- Captura de pantalla no disponible: pàgina d’add-ons amb l’add-on Ultimate Multisite Payfast Gateway ressaltat -->

Apareixerà la finestra de l’add-on. Fes clic a **Install Now.**

<!-- Captura de pantalla no disponible: diàleg de detalls de l’add-on Ultimate Multisite Payfast Gateway amb el botó Install Now -->

Quan la instal·lació hagi acabat, se’t redirigirà a la pàgina de plugins. Aquí, només cal que facis clic a **Network Activate** i l’add-on _Payfast_ s’activarà a la teva xarxa.

<!-- Captura de pantalla no disponible: pàgina de plugins amb l’enllaç Network Activate per a l’add-on Payfast Gateway -->
