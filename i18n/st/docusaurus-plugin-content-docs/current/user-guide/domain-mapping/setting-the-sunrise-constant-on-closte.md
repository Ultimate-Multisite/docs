---
title: Ho setse Constant ea Sunrise ka Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Set Constant Sunrise ho e true a Closte {#setting-the-sunrise-constant-to-true-on-closte}

Ho ba leba ba seba (host providers) ba go fana ka seba (security reasons). Le fa, Ultimate Multisite ha seba go bona seba (automatically edit) le seba (constants) tse di fetang go ba leba mapuo a domain le dipuo tse ding. Closte ke seba se se fetang.

Le fa Closte e na le tsela ya go fana ka seba (add constants) ba wp-config.php ka seba (secure manner). O tshwanetse go follow diketso dii:

## Le dashboard ya Closte {#on-the-closte-dashboard}

Le ntlha, [log in ka konto ya Closte ya gago](https://app.closte.com/), lefa ka menu ya Sites, lefa ka link ya Dashboard le seba (site) seo o le ba go dira:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

O tla bona dikotla tse di fetang tsa menu mo le lefa la lefelo la sefa. Lefa ka page ya **Settings** ka go rata menu eona:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Le fa, mo **Settings** ka ntlha, o tla bona tab ya WP-Config, le fa le field ya "Additional wp-config.php content" mo thatabeng ya tab eona:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Mo morao wa go ntsa Ultimate Multisite, o tla hloka go ntsa seba sa sunrise mo thateng eona. Le fa, tsena se ba leba lefa le fetoga. Le fa, ntsa line ya ntlha le fana ka line ya below. Morao wa feta, lefa ka **Save All** button.

define('SUNRISE', true);

Ke ntsa, o tla ba le baipuo (all set). Le fa, lefa ka install wizard ya Ultimate Multisite le fetoga le page go tloha go dira dipuo tse dii.
