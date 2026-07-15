---
title: GitHub Fragmentes
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Com utilitzar els snippets d'Ultimate Multisite al nostre repòsitori de GitHub

Hi ha snippets de codi disponibles al repòsitori de GitHub que són freqüentment sol·licitats pels usuaris d'Ultimate Multisite que desitgen afegir petites funcionalitats, com ara afegir un script de Google Analytics a les pàgines de registre o amagar una meta caixa del *dashboard* d'administració.

Aquest article et mostrarà com utilitzar, o més específicament, on col·locar aquests codis.

Pots trobar els snippets en el enllaç de més avall.

https://github.com/next-press/wp-ultimo-snippets/

Hi ha 2 maneres de que tu puguis afegir el codi:

1. Al fitxer `functions.php` del teu tema.

2. Plugins Must-Use (mu-plugins).

# Com afegir el snippet al fitxer functions.php del teu tema.

1. Accedeix al *dashboard* d'administració de la teva xarxa WordPress i veu a Temes > Editor de Temes (Veure la captura de pantalla de més avall).

2. A la pàgina "Editar Temes", assegura't de que tens el teu tema actiu seleccionat al desplegable situat a la cantonada superior dreta de la pantalla (#3 a la captura de pantalla de més avall).

3. Fai clic al fitxer `functions.php` sota la secció "Fitxers del Tema" per carregar el fitxer. Desplaça-te fins al fons i afegeixa el snippet d'Ultimate Multisite que has obtingut del repòsitori de GitHub.

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Com crear Plugins Must-Use (mu-plugins)

WordPress té una funcionalitat que et permet carregar funcionalitats personalitzades anomenades "Must-Use Plugins", o "mu-plugins" per aturar.

Aquests mu-plugins especials es carreguen abans de tots els altres plugins regulars i no es poden desactivar. En una xarxa multisite, el codi d'aquests mu-plugins es carregarà a tots els llocs de la teva instal·lació.

1. Utilitza FTP o SSH per accedir al sistema de fitxers de la teva instal·lació de WordPress.

2. A l'interior del directori `wp-content` de la teva instal·lació de WordPress, crea un nou directori amb el nom: `mu-plugins`.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3. Crea un nou fitxer PHP a la teva màquina amb el nom `wu-snippet.php` utilitzant Notepad o qualsevol editor de codi.

4. Col·loca el snippet de codi d'Ultimate Multisite que has obtingut del repòsitori de GitHub al fitxer i guarda'l. També pots afegir aquest codi al cap de l'snippet de codi per etiquetar el teu mu plugin.
