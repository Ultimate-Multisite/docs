---
title: GitHub-udsnit
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Sådan bruger du Ultimate Multisite snippets i dit GitHub repository

Der findes kodeudsnit i GitHub repository, som ofte bliver anmodet af brugere af Ultimate Multisite, der ønsker at tilføje små funktioner som f.eks. at indsætte Google Analytics script på registreringssider eller skjule en meta box fra admin-dashboardet.

Denne artikel viser dig, hvordan du bruger dem eller mere specifikt hvor du skal placere disse koder.

Du kan finde udskrifterne på linket nedenfor:

https://github.com/next-press/wp-ultimo-snippets/

Der er 2 måder, du kan tilføje koden på:

  1. I din themes functions.php fil.

  2. Must-Use Plugins (mu-plugins).

# Sådan tilføjer du udskriften i din themes functions.php fil.

  1. Log ind på dit WordPress Network admin dashboard og gå til Themes > Theme Editor (se skærmbillede nedenfor).

  2. På siden "Edit Themes" skal du sikre dig, at du har din aktive tema valgt i rullemenuen øverst til højre på din skærm (#3 på skærmbilledet nedenfor).

  3. Klik på functions.php filen under sektionen "Theme Files" for at indlæse filen. Scroll ned til bunden og indsæt Ultimate Multisite udskriften, du har fået fra GitHub repository.

<!-- Skærmbillede utilgængeligt: WordPress Theme Editor der viser redigering af functions.php fil -->

# Sådan opretter du Must-Use Plugins (mu-plugins)

WordPress har en funktion, der lader dig indlæse specialfunktionalitet kaldet "Must-Use Plugins", eller forkortet "mu-plugins".

Disse særlige mu-plugins indlæses før alle andre almindelige plugins, og de kan ikke deaktiveres. I et multisite netværk vil koden i disse mu-plugins blive indlæst på alle sider i din installation.

1. Brug FTP eller SSH til at få adgang til filsystemet på din WordPress-installation.

2. Inde i wp-content mappen på din WordPress-installation skal du oprette en ny mappe med navnet: `mu-plugins`.

<!-- Skærmbillede utilgængeligt: Filadministrator viser wp-content mappen med mu-plugins mappen -->

3. Opret en ny PHP-fil på din computer ved navn `wu-snippet.php` ved hjælp af Notepad eller et hvilket som helst kodeeditor.

4. Indsæt det Ultimate Multisite kode-snippet, du har fået fra GitHub-repository'et, i filen og gem den. Du kan også tilføje denne kode oven på kode-snippet'et for at mærke din mu plugin.
