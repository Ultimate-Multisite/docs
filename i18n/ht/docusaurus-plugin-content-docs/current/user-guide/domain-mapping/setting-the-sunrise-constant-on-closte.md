---
title: Règleman Konstanta Solèy sou Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Mete konstan Sunrise a true sou Closte

Gen kèk fournisseur anjeneral bloke `wp-config.php` pou rezon sekirite. Sa vle di ke Ultimate Multisite pa ka otomatikman edite dos la pou mete konstante ki nesesè yo pou fè maper domain ak lòt fonksyon yo travay. Closte se yon gwo egzanp sa a.

Sepandan, Closte of pase yon fason pou ajoute konstante nan `wp-config.php` nan yon fason ki sekirize. Ou jis bezwen swiv etap sa yo:

## Sou dashboard Closte la {#on-the-closte-dashboard}

Premye bagay, [log in kont Closte ou](https://app.closte.com/), klike sou mennu Sites, epi apre sa klike sou link Dashboard sou sit ou ap travay la:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Ou pral montre anpil nouvo mennu sou bò mouvman an nan ekran an. Navige sou paj **Settings** (Konfigirasyon) lè w itilize mennu sa a:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Lè ou rive sou **Settings**, chèche onglet WP-Config, epi apre sa chèche fye "Additional wp-config.php content" (Kontni `wp-config.php` ki ajoute) sou onglet sa a:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Nan kontèks enstalasyon Ultimate Multisite, ou pral bezwen ajoute konstante sunrise la nan fye sa a. Senplisman ajoute yon nouvo liy epi kole liy anba a. Apre sa, klike sou bouton **Save All** (Sauve Tout).

define('SUNRISE', true);

Sa se tout! Retounen nan wizard enstalasyon Ultimate Multisite la epi rafraîchi paj la pou kontinye pwosesis la.
