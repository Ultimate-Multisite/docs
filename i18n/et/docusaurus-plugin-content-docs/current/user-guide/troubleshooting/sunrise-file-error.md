---
title: Auringu faili viga
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Sunrise faili installimise {#error-installing-the-sunrise-file}

sunrise.php fail on eriti file on eriti WordPress otsi otsi, kui see itse bootstráibib. Et WordPress saaks sunrise.php failit tuvastada, tuleb see asukohtada **wp-content** folderi all.

Kui aktiveerite Ultimate Multisite ja lähete seadistusjuhendil läbi nagu selle, mida teie screenshotsel on, proovib Ultimate Multisite meie sunrise.php failit kopienda wp-content folderi sisema.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

Suurema osa ajastest saame faili õnnestult kopienda ja kõik toimib. Kuid kui midagi ei ole korralikult seadistatud (nt folderi lubaolekused), võib tekkida olukord, kus Ultimate Multisite ei saa failit kopienda.

Kui lugute Ultimo antud vigaotsing, näete, et see on genau see, mis siin juhtus: **Sunrise copy failed** (Sunrise kopimine ebaõnnestus).

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

See parandamiseks saate lihtsalt kopienda sunrise.php faili wp-ultimo plugin folderi sisse ja liiga see oma wp-content folderi sisse. Teie pärast seda laadige uuesti juhendile ja kontrollid peaksid läbima.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> Kogu juhul võib see nõuda üldist kontrolli teie folderi lubaolekust, et vältida probleeme tulevikus (ei ainult Ultimate Multisitega, vaid ka teiste pluginate ja teemidega).

WordPressi osa **Health Check tool** (keda saate pääseda oma peale **admin panel > Tools > Health Check** abil) suutab teil teada, kas teie folderi lubaolekused on seaditud väärtustele, mis võivad põhjustada probleeme WordPressile.

<!-- Estonian screenshot puudub: WordPress terviklik kontrolljuhtimise tööriist näitab failiõigustatus -->
