---
title: Mga Snippet sa GitHub
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Paano gamitin ang Ultimate Multisite snippets sa ating GitHub repository

May mga code snippets na available sa GitHub repository na madalas hinahanap ng mga Ultimate Multisite users para magdagdag ng maliliit na functionality tulad ng pagdaragdag ng Google Analytics script sa sign-up pages o pagtatago ng isang meta box mula sa admin dashboard.

Ipapakita sa artikulong ito kung paano gamitin ang mga code na ito o mas partikular, saan mo dapat ilagay ang mga ito.

Makikita mo ang mga snippets sa link sa ibaba.

https://github.com/next-press/wp-ultimo-snippets/

May dalawang paraan para magdagdag ng code:

  1. Sa iyong theme's functions.php file.

  2. Must-Use Plugins (mu-plugins)

# Paano idagdag ang snippet sa iyong theme's functions.php file.

  1. Mag-log in sa iyong WordPress Network admin dashboard at pumunta sa Themes > Theme Editor (Tingnan ang screenshot sa ibaba).

  2. Sa pahinang "Edit Themes", siguraduhing napili mo ang active theme mo sa dropdown field na nasa kanang itaas ng screen mo (#3 sa screenshot sa ibaba).

  3. I-click ang functions.php file sa ilalim ng seksyong "Theme Files" para i-load ang file. Mag-scroll pababa at i-paste ang Ultimate Multisite snippet na nakuha mo mula sa GitHub repository.

<!-- Hindi available ang Screenshot: WordPress Theme Editor na nagpapakita ng pag-edit ng functions.php file -->

# Paano gumawa ng Must-Use Plugins (mu-plugins)

May feature sa WordPress na nagpapahintulot sa iyo na mag-load ng custom functionality na tinatawag na "Must-Use Plugins", o "mu-plugins" para mas maikli.

Ang mga espesyal na mu-plugin na ito ay naka-load bago ang lahat ng ibang regular plugins, at hindi sila pwedeng i-deactivate. Sa isang multisite network, ang code sa mga mu-plugin na ito ay naka-load sa lahat ng sites sa iyong installation.

1. Gamitin ang FTP o SSH para ma-access ang filesystem ng iyong WordPress install.

2. Sa loob ng wp-content directory ng iyong WordPress install, gumawa ng bagong folder na pinangalanang: mu-plugins.

<!-- Hindi magagamit ang screenshot: File manager na nagpapakita ng wp-content directory na may mu-plugins folder -->

3. Gumawa ng bagong PHP file sa iyong computer na pinangalanang wu-snippet.php gamit ang Notepad o anumang code editor.

4. Ilagay doon ang Ultimate Multisite code snippet na nakuha mo mula sa GitHub repository at i-save ito. Maaari mo ring idagdag ang code na ito sa itaas ng code snippet para lagyan ng label ang iyong mu plugin.
