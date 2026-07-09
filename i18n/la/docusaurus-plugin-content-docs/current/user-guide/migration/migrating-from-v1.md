---
title: Migrare a V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# De la V1 a la V2 Migrando {#migrating-from-v1}

## Ultimate Multisite ha cambiado de su familia original de lanzamientos 1.x a la familia 2.x. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Ultimate Multisite versión 2.0 y superior es una reescritura completa del código, lo que significa que hay muy poco compartido entre la versión antigua y la nueva. Por esa razón, al actualizar de 1.x a 2.x, tus datos deberán migrarse a un formato que las nuevas versiones puedan entender.

Afortunadamente, Ultimate Multisite 2.0+ **incluye un migrador** integrado en el núcleo que es capaz de detectar los datos de la versión antigua y convertirlos al nuevo formato. Esta migración ocurre durante el **Asistente de Configuración (Setup Wizard)** de la versión 2.0+.

Esta lección cubre cómo funciona el migrador, qué hacer en caso de fallo y cómo solucionar problemas que puedan surgir durante este proceso.

_**IMPORTANTE: Antes de comenzar a actualizar de la versión 1.x a la versión 2.0, asegúrate de crear una copia de seguridad de la base de datos de tu sitio**_

## Primeros pasos {#first-steps}

El primer paso es descargar el archivo .zip del plugin e instalar la versión 2.0 en el panel de administración de tu red.

Después de que [instales y actives la versión 2.0](../getting-started/installing-ultimate-multisite.md), el sistema detectará automáticamente que tu Multisite se está ejecutando en la versión heredada y verás este mensaje en la parte superior de la página del plugin.

_**NOTA:** Si tienes Ultimate Multisite 1.x instalado en tu Multisite, tendrás la opción de reemplazar el plugin con la versión que acabas de descargar. Por favor, procede y haz clic en **Reemplazar actual con subido**._

<!-- Captura de pantalla no disponible: Página del plugin mostrando la opción de reemplazar v1 con la versión subida v2 -->

In pagina prossima te dirá quali add-on legacy hai installati insieme alla versione 1.x. Ti fornirà istruzioni su se la versione che stai usando è compatibile con la versione 2.0 o se devi installare una versione aggiornata dell'add-on dopo la migrazione.

<!-- Screenshot unavailable: Messaggio in cima alla pagina degli add-on sull'aggiornamento a v2.0, con elenco degli add-on da aggiornare -->

Quando sei pronto per procedere, puoi cliccare sul pulsante che dice **Visit the Installer to finish the upgrade** (Visita l'Installatore per completare l'aggiornamento).

<!-- Screenshot unavailable: Pulsante che dice Visit the Installer to finish the upgrade -->

Ti verrà poi reindirizzato alla pagina con la procedura guidata di installazione, con alcuni messaggi di benvenuto. Devi solo cliccare su **Get Started** (Inizia) per passare alla pagina successiva.

<!-- Screenshot unavailable: Pagina di benvenuto della procedura guidata di configurazione con pulsante Get Started -->

Dopo aver cliccato su **Get Started**, verrai reindirizzato a Pre-install Checks\_ . Qui ti mostrerà le informazioni sul tuo Sistema e sull'installazione di WordPress e ti dirà se soddisfa i requisiti di **Ultimate Multisite**.

<!-- Screenshot unavailable: Pagina Pre-install Checks che mostra la conferma dei requisiti del sistema -->

Il passo successivo è inserire la tua chiave di licenza Ultimate Multisite e attivare il plugin. Questo assicurerà che tutte le funzionalità, inclusi gli add-on, siano disponibili sul tuo sito.

<!-- Screenshot unavailable: Pagina di attivazione della licenza con inserimento chiave e pulsante Agree and Activate -->

Dopo aver inserito la tua chiave, clicca su **Agree & Activate** (Accetta e Attiva).

Dopo l'attivazione della licenza, puoi iniziare l'installazione vera e propria cliccando su **Install** (Installa) sulla pagina successiva. Questo creerà automaticamente i file e il database necessari affinché la versione 2.0 funzioni.

## Nunc, migratio {#now-the-migration}

El migrator habet una característica de seguridad incorporada mediante la cual revisará todo tu multisite para asegurarse de que todos tus datos de Ultimate Multisite puedan migrarse sin ningún problema. Haz clic en el botón **Run Check** (Ejecutar Verificación) para comenzar el proceso.

Después de ejecutar la verificación, tienes dos posibilidades: el resultado puede ser **con** un error o **sin** error.

### Con Error {#with-error}

Si recibes un mensaje de error, deberás contactar a nuestro equipo de soporte para que te ayuden a solucionar el error. Asegúrate de **proporcionar el log de error** cuando crees un ticket. Puedes descargar el log o hacer clic en el enlace que dice "contact our support team" (contactar a nuestro equipo de soporte). Esto abrirá el widget de ayuda en el lado derecho de tu página con los campos ya rellenados para ti, que incluyen los logs de error bajo la descripción.

_**Dado que el sistema encontró un error, no podrás proceder a migrar a la versión 2.0. Entonces puedes volver a la versión 1.x para continuar ejecutando tu red hasta que se solucione el error.**_

### Sin Error {#without-error}

Si el sistema no encuentra ningún error, verás un mensaje de éxito y un botón **Migrate** (Migrar) en la parte inferior que te permitirá proceder con la migración. En esta página, se te recordará crear una copia de seguridad de tu base de datos antes de seguir adelante, lo cual recomendamos encarecidamente. Pulsa **Migrate** si ya tienes una copia de seguridad.

Y ¡eso es todo lo que necesitas!

Pudis continuare cum setup del Wizard ut actualizares logon et alia res in rete tua, vel incepta navigare per menum tuum Ultimate Multisite versio 2.0 et novam interfaciam eius. Fac ut ludere!
