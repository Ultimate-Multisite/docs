---
title: Enviament d'emails i comunicats de massa
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# Enviar correos electrónicos y transmisiones (v2)

_**NOTA IMPORTANTE: Este artículo se refiere a Ultimate Multisite versión 2.x.**_

Ultimate Multisite viene con una función que te permite comunicarte con tus clientes enviándoles un correo electrónico a un usuario específico o a un grupo de usuarios, además de enviar avisos en su panel de administración para hacer anuncios masivos.

## Añadir avisos de administrador al panel de control de tus clientes con Transmisiones (Broadcasts)

Usando la función de transmisiones de Ultimate Multisite, puedes añadir **avisos de administrador** al panel de administración del subdominio de tu usuario.

Esto es extremadamente útil si necesitas hacer un anuncio como mantenimiento del sistema o para ofrecer nuevos productos o servicios a tus usuarios existentes. Así es como se verá el aviso de administrador en el panel de control de tu usuario.

![Broadcast de aviso de administrador mostrado en el panel de control de un subdominio de cliente](/img/frontend/broadcast-customer-dashboard.png)

Para empezar un aviso de administrador, ve a tu panel de administración de red y, bajo el menú **Ultimate Multisite**, encontrarás la opción **Broadcasts** (Transmisiones).

![Página de lista de transmisiones en Ultimate Multisite admin](/img/admin/broadcasts-list.png)

También puedes editar las transmisiones existentes:

![Interfaz de edición de transmisiones](/img/admin/broadcast-edit.png)

Desde esta página, haz clic en el botón **Add Broadcast** (Añadir Transmisión) en la parte superior.

Esto abrirá la ventana modal "Add broadcast" donde podrás elegir qué tipo de transmisión deseas enviar.

Selecciona **Message** (Mensaje) y luego haz clic en el botón **Next Step** (Siguiente paso).

![Aix modal de transmissió amb l'opció Mensatge seleccionada](/img/admin/broadcast-add-message.png)

La següent finestra us preguntarà si vols seleccionar el **Client objectiu** o el **Product objectiu**. Nots que pots seleccionar més d'un usuari o més d'un producte.

Per buscar cap a un compte d'usuari o a un producte, has de començar a tancar la paraula clau dins del camp.

Sota el camp **Tip de missatge**, pots seleccionar el color de l'avís. Això enfatitzarà la urgència del teu missatge.

Després pots fer clic en **Pass següent**.

![Campos d'objectiu, client objectiu i tip de missatge per a una transmissió de missatges](/img/admin/broadcast-message-targets.png)

La següent finestra és on podràs començar a redactar el teu missatge introduint l'assumpte i el contingut/missatge que vols enviar als usuaris.

![Editor d'assumpte i contingut del missatge per al pas de composició](/img/admin/broadcast-edit.png)

Després de crear el teu missatge, pots pulsar el botó **Enviar**.

I això és tot. L'avís de l'administrador ha de mostrarse immediatament a la taula del teu usuari.

## Enviar correus als teus clients

Utilitzant la funció de transmissió de Ultimate Multisite, pots enviar un correu electrònic als teus usuaris. Tens l'opció d'enviar el correu només a usuaris específics o d'objectivar un grup d'usuaris basant-te del producte o pla al qual estan subscripcions.

Per començar una transmissió de correus, ve a la taula de administració de la teva xarxa i sota el menú Ultimate Multisite, trobaràs l'opció Transmissió (Broadcast).

![Pàgina de la llista de broadcasts utilitzada com a punt de partida per un broadcast d'email](/img/admin/broadcasts-list.png)

Desse període, fes clic al botó **AixBroadcast** en la part superior.

Aix cosa això t'obrirà la finestra modal "AixBroadcast" on podrà triar el tipus de broadcast que desitges enviar. Arriba, selecciona **Email** i fes clic al botó **Passa al següent pas**.

![Modal d'aixbroadcast amb l'opció Email seleccionada](/img/admin/broadcast-add-email.png)

La següent finestra us preguntarà per el **Client objectiu** o el **Product objectiu**. Nots que pots seleccionar més d'un usuari o més d'un producte.

Per buscar cap a un compte d'usuari o a un producte, has de començar a tancar la paraula clau dins del camp.

Una vegada hagués seleccionat el teu públic objectiu, pots fes clic al botó **Passa al següent pas**.

![Selecció dels clients objectius i del producte objectiu per un broadcast d'Email](/img/admin/broadcast-email-targets.png)

La següent finestra és on podrà començar a redactar el teu email ingressant el subject (assumpte) i el contingut/mensatge que vols enviar als usuaris.

![Editor de subject i contingut del broadcast d'Email en el pas de composició](/img/admin/broadcast-email-compose.png)

Després de crear el teu missatge, pots pulsar al botó **Enviar**.

I així és tan fàcil enviar un email als teus usuaris finals utilitzant la funció de broadcast.

## Emails del sistema

Els correus del sistema en Ultimate Multisite són aquells **avis automàtics** que el sistema envia després d'accions concretes com la registratció, el pagament, la mappatura de domini, etc. Aquests correus es poden editar o modificar des de les configuracions d'Ultimate Multisite. També inclou una funció que et permeti reiniciar i importar configuracions existents d'una altra instal·lació d'Ultimate Multisite.

### Reiniciar i Importar

Les noves versions d'Ultimate Multisite, així com els add-ons, poden i faran registrar correus nous de vegades.

Per evitar conflictes i altres problemes, **no afegiràs els templates de correu nous com a Correus del Sistema en la teva instal·lació automàticament**, a menos que són cruciaux per el bon funcionament d'una funció determinada.

No obstant això, els superadmins i agents poden importar aquests correus nou registrats mitjançant l'eina d'importador. Aquest procés crearà un nou correu del sistema amb el contingut i la configuració del template de correu nou, permetent al superadmin fer qualsevol modificació que vulgui o mantenir-los com estan.

#### Com importar els correus del sistema

Ves a la pàgina de Configuració d'Ultimate Multisite i anar a la pestaña **Emails**.

![Pestaña Emails en les configuracions d'Ultimate Multisite mostrant la secció System Emails](/img/config/settings-emails-tab.png)

Després, al lateral, fes clic al botó **Customize System Emails** (Personalitzar Correus del Sistema).

![Botó Customize System Emails al panel lateral de System Emails](/img/config/settings-emails-customize-button.png)

En la pàgina de correus del sistema (System Emails), veureu el botó d'acció **Reset & Import** a la part superior. Clicant en aquest botó s'obre la finestra modal d'import i reset.

![Botó d'acció Reset o Import a la pàgina admin de System Emails](/img/admin/system-emails-reset-import.png)

Després, podries activar les opcions d'Importar Correus (Import Emails) per veure quins correus del sistema estan disponibles per ser importats.

![Modal de Reset i Import amb les opcions d'Importar Correus expandides](/img/admin/system-emails-import-options.png)

#### Reset de Correu del Sistema

En altres moments, podràs notar que els canvis que has fet a un template de correu en particular ja no funcionen per tu i que vols reiniciar al seu **estat predefinit**.

En aquests casos, tens dues opcions: pots simplement borrar el correu del sistema i importarl per nou (utilitzant les instruccions anteriors), cosa que borra les métriques d'envia i altres coses, per què aquest és el mètode menys preferit.

O potser utilitzis l'eina **Reset & Import tool** per reiniciar aquell template de correu.

Per reiniciar un template de correu, pots seguir els passos anteriors fins que arribis a la Reset & Import tool, i després, activa l'opció **Reset** i selecciona els correus que vols reiniciar al seu contingut predefinit.

![Modal de Reset i Import amb les opcions de Reset de Correus expandides](/img/admin/system-emails-reset-options.png)
