---
title: Exportació de site
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Exportació de lloc

La pàgina d'administració **Exportació de lloc** permet als administradors de xarxa empaquetar un lloc, o tota la xarxa, en un arxiu de descàrrega per a migració, còpia de seguretat o transferència.

## Exportar un lloc

Vageu a **Ultimate Multisite > Exportació de lloc** i seleccioneu **Generar nova Exportació de lloc**. Trieu el subloc que voleu exportar i després seleccioneu si l'arxiu ha de contenir les vàlides, els plugins i els temes.

Quan l'exportació es completi, descarregueu el ZIP de la llista d'**Exportacions existents**. Els ZIP d'exportació ja inclouen un `index.php` d'autoinici i un `readme.txt`, de manera que l'arxiu es pot carregar en un allotjament nou i començar sense haver d'instal·lar abans un plugin d'importador separat.

## Exportar tota la xarxa

Utilitzeu **Exportació de xarxa** a la pàgina d'Exportació de lloc quan necessiteu un únic arxiu que contingui tots els sublocs de la xarxa. Això és útil abans de migracions d'allotjament, simulacions de recuperació de desastres o reconstruccions de *staging* on cada subloc ha de viatjar junts.

Com que una exportació de xarxa pot ser molt més gran que una exportació d'un únic lloc, executeu-la durant un període de baix trànsit i confirmeu que l'emmagatzematge objectiu té suficient espai de sobra per vàlides, plugins, temes i els arxius ZIP generats.

### Paquets d'importació de xarxa

A partir d'Ultimate Multisite 2.12.0, Site Exporter pot generar **paquets d'importació de xarxa** (network import bundles), arxius especialitzats dissenyats per a una restauració de llocs a nivell de xarxa simplificada. Un paquet d'importació de xarxa conté tots els fitxers i metadades necessàries per restaurar múltiples llocs en una nova instal·lació de xarxa.

#### Generar un paquet d'importació de xarxa

1. Vageu a **Ultimate Multisite > Exportació de lloc**
2. Cliqueu a **Generar nova Exportació de xarxa**
3. Seleccioneu **Paquet d'importació de xarxa** com a tipus d'exportació
4. Trieu si s'inclou vàlides, plugins i temes
5. Cliqueu a **Generar**
6. Descarregueu el ZIP del paquet de la llista d'**Exportacions existents**

#### Restaurar des d'un paquet d'importació de xarxa

Per restaurar llocs des d'un paquet d'importació de xarxa:

1. Instal·leu Ultimate Multisite a l'allotjament objectiu
2. Completeu el assistent de configuració multisite
3. Vageu a **Ultimate Multisite > Exportació de lloc** al nou lloc
4. Cliqueu a **Importar Paquet de Xarxa**
5. Carregueu el fitxer ZIP del paquet d'importació de xarxa
6. Seguiu les instruccions d'importació a la pantalla
7. El procés d'importació restaurarà tots els llocs, el seu contingut i les seves configuracions

Els paquets d'importació de xarxa preserven:
- Contingut del lloc (publicacions, pàgines, tipus de publicacions personalitzats)
- Configuració i opcions del lloc
- Rol i permisos d'usuari
- Plugins i temes (si s'inclouen al paquet)
- Vàlides multimèdia (si s'inclouen al paquet)
- Taules i dades personalitzades de la base de dades

## Instal·lar un ZIP d'exportació d'autoinici

Per restaurar un ZIP d'autoinici en un allotjament nou:

1. Carregueu el contingut del ZIP exportat a la carpeta *web root* objectiu.
2. Obreu l'`index.php` carregat en un navegador.
3. Seguiu les instruccions d'instal·lació de l'arborescence de paquets d'exportació.
4. Reviseu el `readme.txt` del paquet per notes específiques d'exportació abans de eliminar els fitxers temporals.

Per detalls d'instal·lació i importació específics d'addon, veureu la [documentació de l'addon Site Exporter](/addons/site-exporter).

Per l'eina de lloc únic afegida en Ultimate Multisite 2.9.0, veureu [Exportació i Importació](/user-guide/administration/export-import).
