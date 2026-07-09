---
title: GitHub šnuptai
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Kaip naudoti Ultimate Multisite skriptus jūsų GitHub repozitoriume {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

GitHub repozitoriume yra skirti kodų skriptai, kuriuos dažnai prašo Ultimate Multisite vartotojai, norint pridėti mažas funkcijas, pabaigiantis, pavyzdžiui, įdėję Google Analytics script ant registracijos puslapis ar sukleidžiant admin panelio meta box.

Šiame straipsnyje pateiksime instrukcijas, kaip naudoti šiuos kodus arba, tiksiau, kur juos nustatyti.

Skriptai galite rasti šio nuorodos:

https://github.com/next-press/wp-ultimo-snippets/

Yra dvi būdai pridėti šį kodą:

  1. Jūsų temo `functions.php` failui.

  2. Must-Use Plugins (mu-plugins).

# Kaip pridėti skriptą į jūsų temo functions.php failą. {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  1. Prisijunkite prie admin panelio jūsų WordPress tinklo ir einkite į Themes > Theme Editor (priežmatas matyti šio paveikslėlyje).

  2. Ant „Edit Themes“ puslapio patikrinkite, kad pasirinktas jūsų aktyviai naudojamas tema yra išskirtas dropdown mygtake, esantame dešinėje viršutinėje pusėje ekrano (#3 šio paveikslėlyje).

  3. Spauskite failą `functions.php` „Theme Files“ sekcijoje, kad įkaltumytumėte failą. Pasirinkite žemiau ir įdėkite Ultimate Multisite skriptą, kurį gausite iš GitHub repozitoriume.

<!-- Paveikslas nepateiktas: WordPress Theme Editor rodo functions.php failo redaguojimą -->

# Kaip sukurti Must-Use Plugins (mu-plugins) {#how-to-create-must-use-plugins-mu-plugins}

WordPress turi funkciją, leidžiančią įkaltimo pritaikyti funkcijas, kurias vadinami „Must-Use Plugins“ arba skaičiais „mu-plugins“.

Šie specialūs mu-plugins įkaltomi prieš visus kitus įprastus plugins ir jie negali būti deaktyvuoti. Multisite tinkluje šių mu-pluginų kodas bus įkaltomas į visus jūsų instalaciją puslapis.

1. Naudokite FTP arba SSH prieigą, kad pasiektumėtumėte jūsų WordPress instalacijos fizinį diskretą (filesystem).

2. Jūsų WordPress instalacijos `wp-content` katalogasje (directory) sukurkite naują katalogą vadinant: `mu-plugins`.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3. Naudojami Notepad arba bet kokį redaktoriui, sukurkite naują PHP failą kompiuterija vadinant `wu-snippet.php`.

4. Įdėkite Ultimate Multisite kodą snippetą, kurį turite iš GitHub repozitorijų, į šį failą ir išsauveikite jį. Galite nusiplėsti šį kodą virš kitų kode snippetų, kad pažymėtum savo mu pluginą.
