---
title: Dejinta Xaddiga Qorraxda ee Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Deebiyeynta badankooda Sunrise oo ah true-ga Closte {#setting-the-sunrise-constant-to-true-on-closte}

Waxaa jira server-host-yada qaar oo xiraya faylka wp-config.php sababta amniga. Tani waxay ka hor imacsanaysaa Ultimate Multisite in si toos ah u wax ka beddelo faylka si loo darto badankooda (constants) ee loo baahan yahay si isbeddellada domain-ka iyo astaamaha kale ay shaqeeyaan. Closte waa mid ka mid ah host-yadan.

Si kastaba ha ahaatee, Closte wuxuu bixiyaa hab lagu daro badankooda faylka wp-config.php si ammaan ah. Waxaad kaliya u baahan tahay inaad raacdo talaabooyinkan:

## Dashboard-ka Closte-ka {#on-the-closte-dashboard}

Marka hore, [geli (log in) akoonkaaga Closte](https://app.closte.com/), ka dib riix qaybta Sites, ka dibna riix xiriirka Dashboard ee website-ka aad hadda shaqaynayso:

<!-- Sawirka ma lahayn: Dashboard-ka Closte-ka oo muujinaya menu-ga Sites iyo xiriirka Dashboard -->

Waxaad arki doontaa qaar cusub oo menu-ga dhinaca bidix ee shaashadda ah. Ujeeddooyinkaas u socda bogga **Settings** (Dejinta) adiga ayaa ka heli doona.

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Marka aad hesho bogga **Settings**, raadi tab-ka WP-Config, ka dibna meesha lagu qoraa "Additional wp-config.php content" (Waxyaabaha dheeraadka ah ee wp-config.php).

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Marka aad ku samaynayso installation-ka Ultimate Multisite, waxaad u baahan doontaa inaad ku darid isticmaalka constant-ka sunrise ee meeshaas. Si fudud, ku dari cashar cusub oo ku dheji casharka hoose:

define('SUNRISE', true);

Kadibna, riix badhanka **Save All** (Wax kasta oo la kaydiyo).

Waa hagaag, hadda waa dhammaan. Ku soo laabso macluumaadka cusub ee installation-ka Ultimate Multisite oo dib u soo celiso bogga si aad u sii wadidda habkaas.
