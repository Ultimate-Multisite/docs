---
title: GitHub Snippets
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Как да използвате Ultimate Multisite фрагментите от нашия GitHub репозиториум {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

В GitHub репозиториума има налични код фрагменти, които често се изискват от потребителите на Ultimate Multisite, които искат да добавят малки функционалности, като например добавяне на скрипт за Google Analytics на страниците за регистрация или скриване на мета поле от admin dashboard.

Този материал ще ви покаже как да използвате или по-точно къде да поставите тези кодове.

Фрагментите можете да намерите по линка по-долу.

https://github.com/next-press/wp-ultimo-snippets/

Има 2 начина за добавяне на кода:

  1. В файла functions.php на вашата тема.

  2. Must-Use Plugins (mu-plugins)

# Как да добавите фрагмента в файла functions.php на вашата тема. {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  1. Влезте в admin dashboard на вашата WordPress Network и отидете в Themes > Theme Editor (Вижте екранален запис по-долу).

  2. На страницата "Edit Themes", уверете се, че сте избрали активната си тема в падащото поле, разположено в горния десен ъгъл на екрана (#3 на екранален запис по-долу).

  3. Кликнете върху файла functions.php в секцията "Theme Files", за да заредите файла. Свилете надолу до дъното и поставете Ultimate Multisite фрагмента, който сте взели от GitHub репозиториума.

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Как да създадете Must-Use Plugins (mu-plugins) {#how-to-create-must-use-plugins-mu-plugins}

WordPress има функция, която ви позволява да зареждате персонализирана функционалност, наречена "Must-Use Plugins" или съкратено "mu-plugins".

Тези специални mu-plugins се зареждат преди всички други обикновени плагини и не могат да бъдат деактивирани. В мултисайт мрежа, кодът в тези mu-plugins ще бъде зареден във всички сайтове в вашата инсталация.

1. Използвайте FTP или SSH, за да получите достъп до файловата система на вашата WordPress инсталация.

2. В директорията wp-content на вашата WordPress инсталация, създайте нова директория с име: mu-plugins.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3. Създайте нов PHP файл на компютър, наречен wu-snippet.php, използвайки Notepad или друг код редактор.

4. Поставете Ultimate Multisite код фрагмент, който сте взели от GitHub репозиториума, във файла и го запазете. Можете също така да добавите този код в началото на код фрагмента, за да маркирате своя mu plugin.
