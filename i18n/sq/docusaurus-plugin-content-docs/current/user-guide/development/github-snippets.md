---
title: Fragmentet GitHub
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Siç si përdorni snippetet Ultimate Multisite në repositorin tuaj të GitHub

Në repositorin e GitHub janë të disponueshme kode snippet që kërkohen shpesh nga përdoruesit e Ultimate Multisite që duan të shtojnë funksionalitete të vogla si shtimin e skriptës Google Analytics në faqet e regjistrimit ose fshehjen e një meta box-i nga dashboard-i i adminit.

Ky artikull do t'ju tregojë se si të përdorni, ose më specifikisht ku ta vendosni këto kode.

Kodi snippet-ët mund ta gjeni në linkin më poshtë:

https://github.com/next-press/wp-ultimo-snippets/

Ka 2 mënyra për t'u shtuar kodin:

  1. Në skedarin functions.php të temës suaj.

  2. Must-Use Plugins (mu-plugins)

# Si të shtoni snippet-in në skedarin functions.php të temës suaj.

  1. Logojuni në dashboard-in tuaj admin i rrjetit WordPress dhe shkoni te Themes > Theme Editor (Shikoni ekranin e poshtë).

  2. Në faqen "Edit Themes", sigurohuni që keni zgjedhur temën aktuale tënde në fushën me derdhje (dropdown) që ndodhet në pjesën e djathtë të sipërme të ekranit (#3 në ekranin e poshtë).

  3. Klikoni mbi skedarin functions.php në seksionin "Theme Files" për ta ngarkuar skedarin. Shkoni poshtë dhe ngjiten (paste) snippet-in Ultimate Multisite që keni marrë nga repositori i GitHub.

<!-- Ekran i shfaqur jo i disponueshëm: WordPress Theme Editor duke treguar redaktimin e skedarit functions.php -->

# Si të krijoni Must-Use Plugins (mu-plugins)

WordPress ka një veçori që ju lejon të ngarkoni funksionalitet të veçantë të quajtur "Must-Use Plugins", ose shkurtimisht "mu-plugins".

Këta mu-plugins speciale ngarkohen para se çdo plugin tjetër i zakonshëm, dhe nuk mund të deaktarohen. Në një rrjet multisite, kodi në këto mu-plugins do të ngarkohet në të gjitha faqet e instalimit tuaj.

1. Përdorni FTP ose SSH për të aksesuar sistemin e skedarëve të instalimit tuaj WordPress.

2. Në direktorin `wp-content` të instalimit tuaj WordPress, krijoni një direktori të ri me emrin: `mu-plugins`.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3. Krijoni një skript PHP të ri në kompjuterin tuaj me emrin `wu-snippet.php` duke përdorur Notepad ose ndonjë redaktues kod.

4. Vendosni fragmentin e kodit Ultimate Multisite që keni marrë nga repository i GitHub brenda kësaj skripte dhe ruani atë. Ju mund të vendosni edhe këtë kod sipër fragmentit të kodit për ta etiketuar si plugin mu juaj.
