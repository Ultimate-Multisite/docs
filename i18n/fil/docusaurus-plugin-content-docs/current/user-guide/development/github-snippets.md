---
title: GitHub Snippets
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Paano Gamitin ang mga Ultimate Multisite Snippet sa Aming GitHub Repository

May mga code snippet na makukuha sa GitHub repository na madalas hinihiling ng mga gumagamit ng Ultimate Multisite na gustong magdagdag ng maliliit na functionality tulad ng paglalagay ng Google Analytics script sa mga sign-up page o pagtatago ng meta box sa admin dashboard.

Ituturo sa artikulong ito kung paano gamitin o mas partikular kung saan ilalagay ang mga code na ito.

Makikita mo ang mga snippet sa link sa ibaba.

https://github.com/next-press/wp-ultimo-snippets/

May 2 paraan para magdagdag ng code

  1. Sa functions.php file ng iyong theme.

  2. Must-Use Plugins (mu-plugins)

# Paano Magdagdag ng Snippet sa functions.php File ng Iyong Theme

  1. Mag-log in sa iyong WordPress Network admin dashboard at pumunta sa Themes > Theme Editor (Tingnan ang screenshot sa ibaba).

  2. Sa "Edit Themes" na page, siguraduhing napili mo ang iyong active na theme sa dropdown field na nasa kanang itaas ng iyong screen (#3 sa screenshot sa ibaba).

  3. I-click ang functions.php file sa ilalim ng "Theme Files" na section para ma-load ang file. Mag-scroll pababa at i-paste ang Ultimate Multisite snippet na nakuha mo mula sa GitHub repository.

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Paano Gumawa ng Must-Use Plugins (mu-plugins)

May feature ang WordPress na nagbibigay-daan sa iyong mag-load ng custom na functionality na tinatawag na "Must-Use Plugins", o "mu-plugins" sa maikli.

Ang mga espesyal na mu-plugins na ito ay nilo-load bago ang lahat ng ibang regular na plugin, at hindi sila maaaring i-deactivate. Sa isang multisite network, ang code sa mga mu-plugins na ito ay ilo-load sa lahat ng site sa iyong installation.

1\. Gumamit ng FTP o SSH para ma-access ang filesystem ng iyong WordPress install.

2\. Sa loob ng wp-content directory ng iyong WordPress install, gumawa ng bagong directory na may pangalang: mu-plugins.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3\. Gumawa ng bagong PHP file sa iyong computer na may pangalang wu-snippet.php gamit ang Notepad o anumang code editor.

4\. Ilagay ang Ultimate Multisite code snippet na nakuha mo sa GitHub repository sa file at i-save ito. Maaari mo ring idagdag ang code na ito sa itaas ng code snippet para lagyan ng label ang iyong mu plugin.
