---
title: Enviament de correus electrònics i difusions
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# Enviament de correus electrònics i difusions (v2)

_**NOTA IMPORTANT: Aquest article fa referència a Ultimate Multisite versió 2.x.**_

Ultimate Multisite inclou una funció que et permetrà comunicar-te amb els teus clients enviant un correu electrònic a un usuari concret o a un grup d’usuaris, així com enviant avisos al seu Dashboard d’administració per difondre anuncis

## Afegeix avisos d’administració al Dashboard dels teus clients amb difusions {#add-admin-notices-to-your-customers-dashboard-with-broadcasts}

Amb la funció de difusió d’Ultimate Multisite, pots afegir **avisos d’administració** al Dashboard d’administració del sublloc del teu usuari.

Això és extremadament útil si necessites fer un anunci, com ara manteniment del sistema, o oferir nous productes o serveis als teus usuaris existents. Així és com es veurà l’avís d’administració al Dashboard del teu usuari.

<!-- Captura de pantalla no disponible: avís d’administració de difusió mostrat al Dashboard del sublloc d’un client -->

Per iniciar un avís d’administració, ves al Dashboard d’administració de la xarxa i, sota el menú **Ultimate Multisite**, trobaràs l’opció **Difusions**.

![Pàgina de llista de difusions a l’administració d’Ultimate Multisite](/img/admin/broadcasts-list.png)

També pots editar difusions existents:

![Interfície d’edició de difusions](/img/admin/broadcast-edit.png)

Des d’aquesta pàgina, fes clic al botó **Afegeix una difusió** de la part superior.

Això obrirà la finestra modal per afegir una difusió, on pots triar quin tipus de difusió vols enviar.

Selecciona **Missatge** i després fes clic al botó **Pas següent**.

![Modal d’afegir difusió amb l’opció Missatge seleccionada](/img/admin/broadcast-add-message.png)

La finestra següent et demanarà el **client objectiu** o el **producte objectiu**. Tingues en compte que pots seleccionar més d’un usuari o més d’un producte.

Per cercar un compte d’usuari o un producte, has de començar a escriure la paraula clau dins del camp.

Sota el camp **Tipus de missatge**, pots seleccionar el color de l’avís. Això remarcarà la urgència del teu missatge.

Després pots fer clic a **Pas següent**.

![Camps de clients objectiu, producte objectiu i tipus de missatge per a una difusió de missatge](/img/admin/broadcast-message-targets.png)

La finestra següent és on pots començar a redactar el missatge introduint l’assumpte i el contingut/missatge que vols difondre als usuaris.

![Assumpte del missatge de difusió i editor de contingut al pas de redacció](/img/admin/broadcast-edit.png)

Després de crear el missatge, pots prémer el botó **Envia**.

I això és tot. L’avís d’administració hauria d’aparèixer immediatament al Dashboard del teu usuari.

## Envia correus electrònics als teus clients {#send-emails-to-your-customers}

Amb la funció de difusió d’Ultimate Multisite, pots enviar un correu electrònic als teus usuaris. Tens l’opció d’enviar el correu electrònic només a usuaris específics o d’adreçar-lo a un grup d’usuaris concret en funció del producte o pla al qual estan subscrits.

Per iniciar una difusió per correu electrònic, ves al Dashboard d’administració de la xarxa i, sota el menú Ultimate Multisite, trobaràs l’opció Difusió.

![Pàgina de llista de difusions utilitzada com a punt de partida per a una difusió per correu electrònic](/img/admin/broadcasts-list.png)

Des d’aquesta pàgina, fes clic al botó **Afegeix una difusió** de la part superior.

Això obrirà la finestra modal per afegir una difusió, on pots triar quin tipus de difusió vols enviar. Selecciona **Correu electrònic** i després fes clic al botó **Pas següent**.

![Modal d’afegir difusió amb l’opció Correu electrònic seleccionada](/img/admin/broadcast-add-email.png)

La finestra següent et demanarà el **client objectiu** o el **producte objectiu**. Tingues en compte que pots seleccionar més d’un usuari o més d’un producte.

Per cercar un compte d’usuari o un producte, has de començar a escriure la paraula clau dins del camp.

Un cop seleccionat el públic objectiu, pots fer clic a **Pas següent**.

![Selecció de clients objectiu i producte objectiu per a una difusió per correu electrònic](/img/admin/broadcast-email-targets.png)

La finestra següent és on pots començar a redactar el correu electrònic introduint l’assumpte i el contingut/missatge que vols enviar als usuaris.

<!-- Captura de pantalla no disponible: assumpte de la difusió per correu electrònic i editor de contingut al pas de redacció -->

Després de crear el missatge, pots prémer el botó **Envia**.

I així de fàcil és enviar un correu electrònic als teus usuaris finals mitjançant la funció de difusió.

## Correus electrònics del sistema {#system-emails}

Els correus electrònics del sistema a Ultimate Multisite són aquelles **notificacions automàtiques** enviades pel sistema després de determinades accions com ara el registre, el pagament, el mapatge de dominis, etc. Aquests correus electrònics es poden editar o modificar des de la configuració d’Ultimate Multisite. També inclou una funció que et permet restablir i importar configuracions existents d’una altra instal·lació d’Ultimate Multisite.

### Restablir i importar {#resetting--importing}

Les noves versions d’Ultimate Multisite, així com els complements, poden registrar i registraran nous correus electrònics de tant en tant.

Per evitar conflictes i altres problemes, **no afegirem automàticament les noves plantilles de correu electrònic com a correus electrònics del sistema a la teva instal·lació** , tret que siguin crucials per al funcionament correcte d’una funció determinada.

Tanmateix, els superadministradors i els agents poden importar aquests correus electrònics acabats de registrar mitjançant l’eina d’importació. Aquest procés crearà un nou correu electrònic del sistema amb el contingut i la configuració de la nova plantilla de correu electrònic, cosa que permetrà al superadministrador fer-hi qualsevol modificació que vulgui o mantenir-los tal com estan.

#### Com importar correus electrònics del sistema {#how-to-import-system-emails}

Ves a la pàgina de configuració d’Ultimate Multisite i dirigeix-te a la pestanya **Correus electrònics**.

![Pestanya Correus electrònics a la configuració d’Ultimate Multisite que mostra la secció Correus electrònics del sistema](/img/config/settings-emails-tab.png)

Després, a la barra lateral, fes clic al botó **Personalitza els correus electrònics del sistema**.

<!-- Captura de pantalla no disponible: botó Personalitza els correus electrònics del sistema al tauler lateral de Correus electrònics del sistema -->

A la pàgina Correus electrònics del sistema, veuràs el botó d’acció **Restableix i importa** a la part superior. En fer clic en aquest botó, s’hauria d’obrir la finestra modal d’importació i restabliment.

![Botó d’acció Restableix o importa a la pàgina d’administració de Correus electrònics del sistema](/img/admin/system-emails-reset-import.png)

Després, pots activar o desactivar les opcions d’importació de correus electrònics per veure quins correus electrònics del sistema estan disponibles per importar.

<!-- Captura de pantalla no disponible: modal Restableix i importa amb les opcions Importa correus electrònics desplegades -->

#### Restabliment dels correus electrònics del sistema {#reseting-system-emails}

En altres ocasions, t'adonaràs que els canvis que has fet en una plantilla de correu electrònic determinada ja no et funcionen i voldràs restablir-la al seu **estat predeterminat**.

En aquests casos, tens dues opcions: pots simplement suprimir el correu electrònic del sistema i tornar-lo a importar (seguint les instruccions anteriors), cosa que esborrarà les mètriques d'enviament i altres elements, motiu pel qual aquest mètode és el menys recomanable.

O bé pots utilitzar l'**eina Restableix i importa** per restablir aquesta plantilla de correu electrònic.

Per restablir una plantilla de correu electrònic, pots seguir els passos anteriors fins que arribis a l'eina Restableix i importa i, després, activar l'opció **Restableix** i seleccionar els correus electrònics que vols restablir al seu contingut predeterminat.

<!-- Captura de pantalla no disponible: modal Restableix i importa amb les opcions Restableix correus electrònics desplegades -->
