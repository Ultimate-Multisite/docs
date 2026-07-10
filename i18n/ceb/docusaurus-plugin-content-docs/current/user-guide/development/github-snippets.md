---
title: Mga GitHub Snippets
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Unsaon paggamit sa Ultimate Multisite snippets sa among GitHub repositoryo {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

Naa'y mga code snippets sa GitHub repository nga kanunay gipangayo sa mga Ultimate Multisite users nga gusto magdugang og gagmay nga mga functionality sama sa pag-add og Google Analytics script sa sign-up pages o pagtago og meta box gikan sa admin dashboard.

Kini nga article ipakita nimo kung unsaon paggamit ni o mas espesipiko, asa kini i-place.

Makita nimo ang mga snippets sa link sa ubos.

https://github.com/next-press/wp-ultimo-snippets/

Naa'y 2 ka paagi para magdugang og code

  1. Sa imong theme's functions.php file.

  2. Must-Use Plugins (mu-plugins)

# Unsaon pag-add sa snippet sa imong theme's functions.php file. {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  1. Log in sa imong WordPress Network admin dashboard ug adto sa Themes > Theme Editor (Tan-awa ang screenshot sa ubos).

  2. Sa pahina nga "Edit Themes", siguruha nga na-select nimo ang imong active theme sa dropdown field nga naa sa kanang taas nga bahin sa tuo nga kilid sa imong screen (#3 sa screenshot sa ubos).

  3. I-click ang functions.php file ubos sa seksyon nga "Theme Files" para i-load ang file. Mag-scroll pababa sa ubos ug i-paste ang Ultimate Multisite snippet nga nakuha nimo gikan sa GitHub repository.

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Unsaon paghimo og Must-Use Plugins (mu-plugins) {#how-to-create-must-use-plugins-mu-plugins}

Naa'y feature sa WordPress nga nagtugot kanimo sa pag-load og custom functionality nga gitawag og "Must-Use Plugins", o "mu-plugins" para mubo.

Kini mga espesyal nga mu-plugins ang gi-load una sa tanang regular plugins, ug dili kini mahimong i-deactivate. Sa usa ka multisite network, ang code sa mga mu-plugins ni gi-load sa tanang sites sa imong installation.

1. Gamita ang FTP o SSH para ma-access ang filesystem sa imong WordPress install.

2. Sa sulod sa wp-content directory sa imong WordPress install, maghimo og bag-ong folder nga gitawag og: mu-plugins.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3. Paghimo og bag-ong PHP file sa imong computer nga gitawag og wu-snippet.php gamit ang Notepad o bisan unsang code editor.

4. Ibutang ang Ultimate Multisite code snippet nga nakuha nimo gikan sa GitHub repository sa file ug i-save kini. Mahimo usab nimong iapil kining code sa ibabaw sa code snippet aron ma-label nimo ang imong mu plugin.
