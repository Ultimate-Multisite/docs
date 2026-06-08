---
title: Exportar i Importar
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Exportar i Importar

Ultimate Multisite 2.9.0 afegeix una eina d'**Exportació i Importació** de site únic dins de **Tools > Export & Import**. Utilitza aquesta eina quan necessites empaquetar un site de WordPress com a fitxer ZIP, restaurar aquest ZIP, o moure un site entre instal·lacions compatibles de Ultimate Multisite i WordPress de site únic.

## Permisos requerits

Has de connectar-te com un administrador que pugui accedir al menú **Tools** de WordPress del site que es va exportar o importar. En una xarxa multisite, utilitza una compte d'administrador de xarxa quan exportes o importes subsites utilitzant les eines de Ultimate Multisite a nivell de xarxa.

Les descàrretes ZIP d'exportació es serveixen mitjançant un punt d'acció de descàrrega autenticat, així que mantén la sessió d'administració activa fins que es termini la descàrrega i no comparteixis les URL de descàrrega generades públicament.

## Exportar un site a un ZIP

1. A l'administració de WordPress del site que vols copiar, veu a **Tools > Export & Import**.
2. Obre l'àrea d'exportació i tria el site que vols empaquetar.
3. Selecciona el contingut opcional que vols incloure, com a caricatures, plugins i temes, quan aquestes opcions estan disponibles.
4. Comença l'exportació i espera que el procés es termini. Els sites grans poden necessitar acabar en el fons abans que el ZIP estigui preparat.
5. Descarrega el ZIP acabat de la llista d'exportacions.

Guarda el ZIP en una ubicació segura. Pot contenir el contingut del site, configuracions, fitxers multimèdia i els assets de codi seleccionats.

## Què inclou l'exportació

Un ZIP d'exportació pot incloure:

- El contingut de la base de dades i la configuració del site seleccionat.
- Fitxers multimèdia caricats quan s'inclou l'upload.
- Plugins i temes quan es seleccionen aquestes opcions.
- Metadades d'importació utilitzades per l'eina Export & Import per reconstruir el site a la instal·lació de destinació.

La mida exacta del ZIP depèn de la quantitat de multimèdia, els plugins i temes seleccionats, i la mida de les taules de la base de dades del site.

## Importar un site des d'un ZIP

1. Veu a **Tools > Export & Import** al site de WordPress de destinació.
2. Obre l'àrea d'importació i carrega el ZIP creat per l'eina Export & Import.
3. Introduce una URL de substitució si el site hauria de utilitzar una adreça nova, o deixa el camp buit per mantenir l'URL original.
4. Tria si has de eliminar el ZIP carregat després que s'acombi l'importació.
5. Fes clic a **Begin Import**.
6. Monitoritza l'importació pendent fins que es termini. Utitza **Cancel Import** només si has de parar el procés abans de la finalització.
7. Revisa el site importat abans de permetre trànsit normal o accés al client.

En una instal·lació de WordPress de site únic, importar un ZIP substitueix el site actual per l'importat. Crea una còpia de segureta completa del site de destinació abans de començar, i evita iniciar múltiples importacions per al mateix site al mateix temps.

## Limitacions i notes de compatibilitat

- Els directòrius d'uploads o les biblioteques multimèdia molt grans poden generar fitxers ZIP grans. Confirma els límits d'uploads de PHP, els límits d'execució, l'espai de disc, la memòria i les configuracions de timeout del servidor abans d'exportar o importar sites grans.
- Les biblioteques multimèdia molt grans poden necessitar ser traslladades durant una finestra de manteniment de baix trànsit.
- L'instal·lació de WordPress de destinació hauria de funcionar amb versions compatibles de WordPress, PHP, Ultimate Multisite, plugins i temes.
- Una importació de site únic substitueix el site de destinació. No és una eina de fusió.
- Les trasllades de multisite a site únic i de site únic a multisite només estan suportades quan l'entorn de destinació pot executar els plugins, temes, URL i components requerits d'Ultimate Multisite de l'exportat site.
- Mantén el ZIP privat. Pot contenir contingut de base de dades, fitxers carregats i detalls de configuració del site exportat.

Per als fluxos de treball de exportació de xarxa més antics, veu [Site Export](/user-guide/administration/site-export).
