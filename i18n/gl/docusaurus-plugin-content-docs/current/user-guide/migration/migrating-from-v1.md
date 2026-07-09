---
title: Migración de V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migración de V1 {#migrating-from-v1}

## Ultimate Multisite pasou da familia de lançamentos original 1.x para a família 2.x. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

A versão 2.0 e superior do Ultimate Multisite é unha reescrita completa do código, o que significa que há pouca colaboración entre a versión antiga e a nova. Por esta razón, ao actualizar de 1.x a 2.x, os tus datos terás de ser migrados para un formato que as novas versiones cozan.

Felizmente, Ultimate Multisite 2.0+ **inclúe un migrador** incorporado no núcleo que é capaz de detectar os datos da versión antiga e convertilos ao novo formato. Esta migración ocorre durante o **Asistente de Configuración (Setup Wizard)** da versión 2.0+.

Esta liña explica como funciona o migrador, que debes hacer en caso de fallo e como solucionar problemas que puido aparecer durante este proceso.

_**IMPORTANTE: Antes de empezar a actualizar da versión 1.x á versión 2.0, asegúrate de crear un backup do banco de datos do teu sitio**_

## Primeiros pasos {#first-steps}

O primeiro paso é descargar o ficheiro .zip do plugin e instalar a versión 2.0 no dashboard administrativo da tua rede.

Tras [instalar e activar a versión 2.0](../getting-started/installing-ultimate-multisite.md), o sistema detectará automáticamente que o teu Multisite está en a versión antiga e verás esta mensaxe na parte superior da páxina do plugin.

_**NOTA:** Se atopes con Ultimate Multisite 1.x instalado no teu Multisite, terás a opción de reemplazar o plugin pola versión que acabas de descargar. Por favor, pulsa para **Reemplazar actual con cargado**._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

A próxima páxina dirá que add-ons legados hai instalados coa versión 1.x. Terás instrucións sobre se a versión que estás usando é compatible coa versión 2.0 ou se necesitas instalar unha versión actualizada do add-on despois da migración.

<!-- Screenshot unavailable: Mensaxe na parte superior da páxina de plugins sobre actualización para v2.0, con lista de add-ons que necesitan actualización -->

Cando esteas listo para continuar, podes clicar no botón que di que **Visitar o Instalador para finalizar a actualización**.

<!-- Screenshot unavailable: Botón que di Visitar o Instalador para finalizar a actualización -->

Despois te levará á páxina do asistente de instalación con algunhas mensaxes de boas vindes. Só terás de clicar en **Comenzar** para pasar á seguinte páxina.

<!-- Screenshot unavailable: Páxina de boas vindes do Asistente de Configuración con botón Comenzar -->

Despois de clicar en **Comenzar**, te redirixará ao Pre-install Checks_._ Isto mostrará a ti a información do teu Sistema e da instalación de WordPress e dirá se cumpre os **requisitos de Ultimate Multisite**.

<!-- Screenshot unavailable: Páxina de Pre-install Checks que mostra a confirmación dos requisitos do sistema -->

O próximo paso é introducir a clave de licenza de Ultimate Multisite e activar o plugin. Isto asegurará que todas as características, incluidos os add-ons, estarán dispoñibles no teu sitio.

<!-- Screenshot unavailable: Páxina de activación da licenza con entrada da clave e botón Concordar e Activar -->

Despois de introducir a clave, clica en **Concordar e Activar**.

Despois da activación da licenza, podes empezar a instalación real facendo clic en **Instalar** na seguinte páxina. Isto creará automáticamente os arquivos e o banco de datos necesarios para que a versión 2.0 funcione.

## Agora, a migración {#now-the-migration}

O migrador ten unha característica de seguridade incorporada: comprobará todo o teu multisite para asegurarse de que todos os teus datos Ultimate Multisite poden ser migados sen ningún problema. Clica no botón **Run Check** (Executar Verificación) para iniciar o proceso.

### Con Errores {#with-error}

Se recibes unha mensaxe de erro, terás que contactar a nosa equipa de soporte para que te axuden a arranxar o erro. Asegúrate de **facilitar o log de erro** ao crear un ticket. Podes descargar o log ou podes clicar no enlace que di "contactar a nosa equipa de soporte". Abrirá o widget de axuda na parte derecha da páxina con os campos preenchidos para ti, que incluíron os logs de erro na descripción.

_**Como o sistema encontrou un erro, non poderás continuar co migración á versión 2.0. Aínda podes volver á versión 1.x para continuar operando a tua rede en espera da reparación do erro.**_

### Sen Errores {#without-error}

Se o sistema non encontra ningún erro, verás unha mensaxe de éxito e un botón **Migrate** (Migrar) na parte inferior que te permitirá continuar co proceso de migración. Nesta páxina, te recordarán crear un backup da túa base de datos antes de seguir, o que recomendamos fortemente. Pulsa en **Migrate** se ya tes un backup.

E é todo o que hai necesario!

Podes continuar con a configuración do Wizard para actualizar o teu logo e outras cousas na tua rede, ou podes empezar a navegar pelo menú da versión 2.0 do teu Ultimate Multisite e a súa nova interfaz. Vinde e dóna-te uns divertimentos!
