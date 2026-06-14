---
title: Snippets GitHub
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Kijan pou itilize Ultimate Multisite snippets sou repo GitHub nou an

Gen kèk code snippet ki disponib nan repo GitHub la ki souvan mande pa itilizatè Ultimate Multisite yo lè yo vle ajoute fonksyonalite piti tankou ajoute script Google Analytics sou paj kayman (sign-up pages) oswa ka fè yon meta box disparèt nan admin dashboard.

Artikel sa a pral montre w kijan pou itilize yo o pi espesyalman kote pou mete koude sa yo.

Ou ka jwenn snippet yo sou lyen anba la.

https://github.com/next-press/wp-ultimo-snippets/

Gen 2 fason ou ka ajoute koude a:

  1. Sou fichye `functions.php` nan thèm ou a.

  2. Must-Use Plugins (mu-plugins)

# Kijan pou ajoute snippet la sou fichye functions.php thèm ou a.

  1. Log in nan admin dashboard rezo WordPress ou an epi ale Themes > Theme Editor (Gade screenshot anba).

  2. Sou paj "Edit Themes", asire w ke thèm aktif ou a chwazi sou mennou drop-down ki nan bò dwat senpè a nan ekran ou la (#3 sou screenshot anba).

  3. Klike sou fichye `functions.php` anba seksyon "Theme Files" pou chaje fichye a. Desann anba epi kole Ultimate Multisite snippet ou te jwenn nan repo GitHub la.

<!-- Screenshot pa disponib: WordPress Theme Editor montre edisyon fichye functions.php -->

# Kijan pou kreye Must-Use Plugins (mu-plugins)

WordPress gen yon fonksyon ki pèmèt ou chaje fonksyonalite koutim ki rele "Must-Use Plugins", oswa "mu-plugins" an kout.

Mu-plugins espesyal sa yo chaje anvan tout lòt plugin regilye, epi yo pa ka deaktive yo. Nan yon rezo multisite, koude nan mu-plugins sa yo pral chaje sou tout sit ki nan enstalasyon ou a.

1. Itilize FTP o SSH pou jwenn aksè nan sistem fichye (filesystem) enstalasyon WordPress ou an.

2. Nan direktwa `wp-content` nan enstalasyon WordPress ou an, kreye yon nouvo direktwa ki rele: `mu-plugins`.

<!-- Screenshot pa disponib: File manager k ap montre direktwa wp-content ak foldè mu-plugins -->

3. Kreye yon nouvo dosye PHP sou òdinatè ou a ki rele `wu-snippet.php` itilize Notepad oswa nenpòt editeur kòd ou genyen.

4. Mete kòd Ultimate Multisite ou te jwenn nan repo GitHub la nan dosye sa a epi kayete l pou w fè yon label pou plugin mu ou la. Ou ka ajoute kòd sa a anwo kòd snippet la pou bay li yon non pou plugin mu ou.
