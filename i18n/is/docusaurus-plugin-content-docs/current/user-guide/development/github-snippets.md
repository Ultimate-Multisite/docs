---
title: GitHub Snippets
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Hvernig notað til að nota Ultimate Multisite snippets í GitHub-tölvufærslunni okkar {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

Í GitHub-tölvufærslunni eru tilgjandi kóða sniðnir sem Ultimate Multisite notendur oft fært yfir, þegar þeir vilja bæta smá möguleika við, eins og að bæta Google Analytics skript á sign-up síðum eða hýða meta box frá admin dashboard.

Þessi grein mun sýna þér hvernig notað til að setja þessar kóða.

Þú getur finna sniðnir í linknum hér:

https://github.com/next-press/wp-ultimo-snippets/

Er 2 hátt fyrir þér að bæta kódinni við:

  1. functions.php skriptið á þema þitt.

  2. Must-Use Plugins (mu-plugins)

# Hvernig nota sniðni á functions.php skriptinu þitt {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  1. Logga inn í WordPress Network admin dashboard og gae til Themes > Theme Editor (sjá mynd undir).

  2. Á síðu "Edit Themes" þurfaðu að tryggja það að þú hefur valdi á aktivum þeminu þínu í dropdown-feltum sem er á uppu sjálfshöndlu á skýrslu þinni (#3 á mynd undir).

  3. Klikka á functions.php file under "Theme Files" til að ladda skriptið. Skrolla niður í botn og setja sniðni Ultimate Multisite sem þú hefur farið frá GitHub repository-nni.

<!-- Mynd er ekki tilgjandi: WordPress Theme Editor sýnir að búa á functions.php file -->

# Hvernig skapa Must-Use Plugins (mu-plugins) {#how-to-create-must-use-plugins-mu-plugins}

WordPress hefur möguleika sem leyfir þér að ladda sérstaklega sniðna möguleika nefndu "Must-Use Plugins", eða "mu-plugins" fyrir stund.

Þessar sérstök mu-plugins eru lada áður en allar övrar reglulegar plugins, og þeir geta ekki deaktað. Í multisite netverkinn er kódin í þessum mu-plugins lada á öllum sítum í innreiðslu þinni.

1. Nota FTP eða SSH til að aðgangast myndir skipti þín WordPress innreiðslunni.

2. Í `wp-content` for WordPress innreiðslu þinni, skapa nýja lausnandi (directory) með nafni: `mu-plugins`.

<!-- Skjólfóstri ekki til að sýna: File manager sem sýnir wp-content lausnandi með mu-plugins fólki -->

3. Skapa nýtt PHP skript á tölvunum þinni með nafni `wu-snippet.php` notað Notepad eða hvaða kóðaefnið sem þú vélir.

4. Leggdu Ultimate Multisite kód snippetinn sem þú hefur fann í GitHub repository í skriptinu og sparaðu það. Þú getur einnig lagt þennan kód á uppi snippetin til að merka mu plugin-inn þinn.
