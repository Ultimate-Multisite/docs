---
title: GitHub fragmentoj
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Kiel uzu utiliz Ultima Multisite snippets sur nia GitHub repository

En GitHub repository existe kod snippet'o ki ofte petas de utilizatoroj de Ultimate Multisite kiuj vola aji pli malaj funkcio kiel aji skript Google Analytics sur paĝoj de registriĝo aŭ aji ŝuti meta box din de la admin dashboard.

Tiot artikolo montros al vi, kiel uzi ti kod aŭ pli specifike kie plazmi ti kodoj.

Vi povas trovi la snippets sur la linka:

https://github.com/next-press/wp-ultimo-snippets/

Ekzistas 2 manoj por vi aji kodon aji.

  1. Sur via temo's functions.php filiro.

  2. Must-Use Plugins (mu-plugins)

# Kiel aji la snippet sur via temo's functions.php filiro aji.

  1. Logas al via WordPress Network admin dashboard kaj diras Themes > Theme Editor (Vidare screenshotan alt).

  2. Sur la paĝo "Edit Themes", certigu, ke vi havas vian aktivan temon elektitan sur la dropdown-campo situita sur la super destra de via skrimi (#3 sur la screenshotan alt).

  3. Klikas sur la functions.php filiron sub la seksio "Theme Files" por diri la filiron. Scrollas al la bazsupero kaj pastejas la Ultimate Multisite snippet, ki vi ricevis de GitHub repository.

<!-- Screenshot ne estas disponabla: WordPress Theme Editor montras la edicion de functions.php filiro -->

# Kiel krei Must-Use Plugins (mu-plugins)

WordPress havas funkcion, kiu permesas al vi diri specialan funkcion nomitan "Must-Use Plugins", aŭ "mu-plugins" por kuro.

Ti specialaj mu-plugins estas loaditaj antaŭ ĉiuj aliaj regularaj plugins, kaj ili ne povas esti deaktiva. En multisite networko la kodoj en ti mu-plugins loadĝas sur ĉiuj paĝoj de via instalita sistemo.

1. Uzu FTP aŭ SSH por akcesi la filesystem de via WordPress instalita.

2. Kreiach novan direktion nomitan: `mu-plugins` en la direktorio `wp-content` de via instalacio de WordPress.

<!-- Skrinit ne estas disponabla: File manager montrant la direktorio wp-content kun la folder mu-plugins -->

3. Kreiach novan PHP filon sur via komputero nomitan `wu-snippet.php` uz Notepad aŭ iu ajn kodoeditoro.

4. Placiach la Ultimate Multisite kodo snippet, ki vi ricevis de GitHub repository, en la filo kaj sauvegardu ĝin. Vi ankaŭ povas diri ĉi tiun kodon supren la kodo snippet por etiketigi via mu plugin.
