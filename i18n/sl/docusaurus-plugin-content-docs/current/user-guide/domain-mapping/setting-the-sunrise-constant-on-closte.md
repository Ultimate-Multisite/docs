---
title: Ustavitev konconstante Sunrise na Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Ustavitev konstante Sunrise na true v Closte {#setting-the-sunrise-constant-to-true-on-closte}

Nekateri host provideri zaključujejo datoteko `wp-config.php` iz razlogov varnosti. To pomeni, da ne morete Ultimate Multisite samodejno urediti datoteke in dodati potrebne konconstante za delovanje mapiranja domen in drugih funkcij. Closte je en takšen host.

Vendar ponuja Closte način, kako lahko varno dodate konconstante do `wp-config.php`. Samo morate slediti naslednjim korakom:

## Na dashboardu Closte {#on-the-closte-dashboard}

Preden začnete, [vpišite se na svoj račun Closte](https://app.closte.com/), kliknite na meni Sites, nato pa kliknite na povezavo Dashboard na strani, na kateri trenutno delate:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Pred vami bo prikazano več novih meni stavkov na levi strani zaslona. Uporabite ta meni, da se premaknete na stran **Settings** (Nastavitve):

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Potem, na **Settings**, najdete tab WP-Config in nato polje "Additional wp-config.php content" (Dodatni vsebina wp-config.php) na tej tab:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

V kontekstu namestitve Ultimate Multisite boste morali dodati konconstanto sunrise na to polje. Preprosto dodajte nov red in vstavite red spodaj. Po tem kliknite na gumb **Save All** (Shrani vse).

define('SUNRISE', true);

To je vse, ste pripravljeni. Vrnite se na wizard namestitve Ultimate Multisite in osvežite stran, da nadaljujete z postopkom.
