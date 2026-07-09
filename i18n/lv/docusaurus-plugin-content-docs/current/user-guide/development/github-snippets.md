---
title: GitHub skripti
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Kā kārtu lietot Ultimate Multisite snipetus mūsu GitHub repozitorijā {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

GitHub repozitorijā ir pieejami koda snipeturi, ko bieži lūdz Ultimate Multisite lietotāji, kuri vēlas pievienot mazas funkcijas, piemēram, uzlabot Google Analytics skriptu pie reģistrācijas lapām vai slüstēt meta box no admin dashboard.

Šajā rakstā atrodas, kā izmantot šos kodu vai kur to precīzi iestatīt.

Snipetus var atrast šajā linkā:

https://github.com/next-press/wp-ultimo-snippets/

Jums ir 2 veidi snipetu pievienot:

  1. Uz jūsu tēmas `functions.php` failu.

  2. Must-Use Plugins (mu-plugins).

# Kā snipetu pievienot savai tēmas `functions.php` failā. {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  1. Logojieties uz savu WordPress Network admin dashboard un dodieties uz Tēmas > Theme Editor (skatīt attēlu zemāk).

  2. "Edit Themes" lapā pārliecinieties, ka izvēlēts jūsu aktīvais tēmas fail ir atvērs no dropdown menu, kas atrodas saskrītā skenēji virsvelkārā (skatīt attēlu zemāk).

  3. Nospiediet `functions.php` failu "Theme Files" sadaļā, lai ielādētu failu. Scrollieties lejā un ievadite Ultimate Multisite snipetu, ko jūs saņēmusi no GitHub repozitorijas.

<!-- Attēls nav pieejams: WordPress Tēmas redaktors, kas parāda `functions.php` faila rediģitēšanu -->

# Kā izveidot Must-Use Plugins (mu-plugins) {#how-to-create-must-use-plugins-mu-plugins}

WordPress ir funkcija, kas ļauj ielādēt pielāgotu funkcionalitāti, ko sauc "Must-Use Plugins" vai īsi "mu-plugins".

Šie īpaši mu-plugins tiek ielādēti pirms visiem citām regulārām pluginām un tos nevar desactivēt. Multisite tīklā šajos mu-plugins kodas koda ielādēšana notiek visos vietnēs jūsu instalācijā.

1. Izmantojiet FTP vai SSH, lai piekļūtu savas WordPress instalācijas failu sistēmai (filesystem).

2. Atrod WordPress instalācijas `wp-content` direktorijā izveido jaunu direktoriju ar nosaukumu: `mu-plugins`.

<!-- Iejaums nepieejams: Failu manizators, kas redz `wp-content` direktoriju ar folderi `mu-plugins` -->

3. Izveido datorā jaunu PHP failu ar nosaukumu `wu-snippet.php` Notepad vai jebkuram kodu rediģētā ar.

4. Ievadi Ultimate Multisite koda snippetu, ko saņēmu no GitHub repozitorija, šim failā un saglabajiet to. Jūs varat arī pievienot šo kodu uz sniegto snippetu, lai norādītu, kur tas ir jūsu `mu` pluginam.
