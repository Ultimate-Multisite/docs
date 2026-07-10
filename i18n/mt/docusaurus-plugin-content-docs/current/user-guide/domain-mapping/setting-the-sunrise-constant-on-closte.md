---
title: Ażwina l-Konstanta Sunrise fuq Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Aħedda l-konstanta Sunrise biex tkun aktiva fuq Closte {#setting-the-sunrise-constant-to-true-on-closte}

Certaini fornitori ta host jlockaw il `wp-config.php` għall-sigurtà. Dan significa li Ultimate Multisite ma jistax jidittifikaw l-file awtomatik biex jinkludu l-konstanti nepreża biex jgħinaw mapping tal-domeni u oħra funksjonalitajiet jgħaddu b'opera. Closte huwa wieħed minn dan fornitori.

Madankollu, Closte joffie mod biex tansi konstanti f `wp-config.php` b'mod sigurtan. Għandek biss li tmur il-istepji taħt:

## Fu dashboard tal-Closte {#on-the-closte-dashboard}

Firma l-log in għall-account tiegħek fuq [https://app.closte.com/](https://app.closte.com/), għalfejn tikkliċċja fuq il-menu Sites, u poi tikkliċċja fuq il-link Dashboard fuq il-site li qed taxxiex tiġi xogħol:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Tidir għandek l-anzija ta nuwara menu ġdida fuq il-mejjuq tal-screen. Naviga għall-pagina **Settings** b'użu ta’ dan menu:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Imkien, fuq **Settings**, issa tikkunsidixxi l-tab WP-Config, u poi il-field "Additional wp-config.php content" fuq dan tab:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

F'kontekst ta installazzjoni tal-Ultimate Multisite, għandek biex tansi l-konstanta sunrise f dan field. Sempli, aġixxi linja ġdida u ikopja linja taħt:

define('SUNRISE', true);

Dan huwa kien. Qed jgħidha. Ritorja għall-wizard ta installazzjoni tal-Ultimate Multisite u rifrescha l-pagina biex tkompli il-proċess.
