---
title: Migrar de la V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migrar de la V1

## Ultimate Multisite ha pasado de su familia original de versiones 1.x a la familia de versiones 2.x. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Ultimate Multisite versión 2.0 y posteriores son una reescritura completa de la base de código, lo que significa que hay muy poco material compartido entre la versión antigua y la nueva. Por esa razón, al actualizar de 1.x a 2.x, tendrás que migrar tus datos a un formato que las nuevas versiones puedan entender.

Afortunadamente, Ultimate Multisite 2.0+ **incluye un migrador** integrado en el núcleo que es capaz de detectar los datos de la versión antigua y convertirlos al nuevo formato. Esta migración ocurre durante el **Asistente de Configuración (Setup Wizard)** de la versión 2.0+.

Esta lección explica cómo funciona el migrador, qué hacer en caso de fallos y cómo solucionar problemas que puedan surgir durante este proceso.

_**IMPORTANTE: Antes de comenzar a actualizar de la versión 1.x a la versión 2.0, asegúrate de crear una copia de seguridad de la base de datos de tu sitio**_

## Primeros pasos {#first-steps}

El primer paso es descargar el archivo .zip del plugin e instalar la versión 2.0 en el panel de administración de tu red.

Después de [instalar y activar la versión 2.0](../getting-started/installing-ultimate-multisite.md), el sistema detectará automáticamente que tu Multisite está ejecutándose en la versión heredada y verás este mensaje en la parte superior de la página del plugin.

_**NOTA:** Si tens instal·lat Ultimate Multisite 1.x en el teu Multisite, tindràs l'opció de substituir el plugin per la versió que acabes de descarregar. Per favor, pots anar i fer clic a **Substituir actual amb la subida**._

<!-- Captura d'écran no disponible: Pàgina del plugin mostrant l'opció de substituir v1 per la versió subida -->

La següent pàgina et dirà què tens instal·lat com add-ons legacy juntament amb la versió 1.x. Ténarà instruccions sobre si la versió que estàs utilitzant és compatible amb la versió 2.0 o si necessites instal·lar una versió actualitzada de l'add-on després de la migració.

<!-- Captura d'écran no disponible: Mensatge a la part superior de la pàgina dels plugins sobre la actualització a v2.0, amb llista d'add-ons que necessiten actualització -->

Una vegada estiguis preparat per continuar, pots fer clic al botó que diu **Visitar el instal·lador per acabar la actualització**.

<!-- Captura d'écran no disponible: Botó que diu Visitar el instal·lador per acabar la actualització -->

Això et conduirà a la pàgina del wizard d'instal·lació amb alguns missatges de benvinguda. Només cal fer clic a **Començar** per passar a la següent pàgina.

<!-- Captura d'écran no disponible: Pàgina de benvinguda del Setup Wizard amb el botó Començar -->

Després de fer clic a **Començar**, et redirigirà al Pre-install Checks._ Aquesta teva mostrarà la informació del teu sistema i l'instal·lació de WordPress, i et dirà si compleix els requisits d'**Ultimate Multisite**.

<!-- Captura d'écran no disponible: Pàgina Pre-install Checks mostrant la confirmació dels requisits del sistema -->

El siguiente paso és introduir la teva clau de llicència d'Ultimate Multisite i activar el plugin. Això assegurarà que totes les funcions, incloses els add-ons, estiguin disponibles al teu site.

<!-- Screenshot unavailable: Pàgina d'activació de llicència amb entrada de clau de llicència i botó Agree and Activate -->

Després de introduir la teva clau, fes clic a **Agree & Activate** (Acordar i Activar).

Després de activar la llicència, pots començar la instal·lació fent clic a **Install** (Instalar) a la següent pàgina. Això crearà automàticament els fitxers i la base de dades necessaris per fer funcionar la versió 2.0.

<!-- Screenshot unavailable: Pàgina d'instal·lació que mostra el que es actualitzarà amb el botó Install -->

## Ara, la migració {#now-the-migration}

El migrador té una funció de seguretat integrada on comprèn tot el teu multisite per assegurar-se de que tots els teus dades d'Ultimate Multisite poden migrar sense cap problema. Fes clic al botó **Run Check** (Executar Comprobació) per començar el procés.

<!-- Screenshot unavailable: Pàgina de migració amb el botó Run Check per verificar si les dades es poden convertir -->

Després d'executar la comprobació, tens dues possibilitats: el resultat pot ser **amb** error o **sense** error.

### Amb Error {#with-error}

Si obtins un missatge d'error, cal que contactis al nostre equip de suport per poder ajudar-vos a solucionar el problema. Asegureu-vos de **proporcionar el log de l'error** quan creïs un ticket. Pots baixar el log o pots fer clic al llink que diu "contacte el nostre equip de suport". Això obrirà el widget d'ajuda a la dreta del teu pàgina amb els camps ja poblat per tu, incloent els logs d'error sota la descripció.

_**Com que el sistema ha trobat un error, no podràs procedir a migrar a la versió 2.0. Pots fer *rollback* a la versió 1.x per continuar amb la màquina fins que es ressoluti l'error.**_

### Sense Error {#without-error}

Si el sistema no troba cap error, veuràs un missatge de contingut i un botó **Migrar** al fons que t'permetrà procedir amb la migració. En aquesta pàgina, et recordaran crear una còpia de seguretat de la teva base de dades abans de continuar, cosa que recomanem molt. Fes clic a **Migrar** si ja tens una còpia de seguretat.

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

I això és tot!

Pots continuar amb la configuració del Wizard per actualitzar el teu logotip i altres coses a la teva xarxa, o pots començar a navegar pel menú de la teva versió 2.0 d'Ultimate Multisite i la seva nova interfície. Ambicia i gaudeix-te!
