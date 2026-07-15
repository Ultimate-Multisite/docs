---
title: Ukuseta i-Sunrise Constant kwi-Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Ukuseta i-Sunrise constant ibe true kwi-Closte

Abanye ababoneleli be-host bavala i-wp-config.php ngezizathu zokhuseleko. Oku kuthetha ukuba Ultimate Multisite ayinakuhlela ngokuzenzekelayo ifayile ukuze ifake ii-constants eziyimfuneko ukuze domain mapping nezinye iimpawu zisebenze. I-Closte ngomnye wabo baboneleli be-host.

Nangona kunjalo, i-Closte inika indlela yokongeza ii-constants kwi-wp-config.php ngendlela ekhuselekileyo. Kufuneka nje ulandele amanyathelo angezantsi:

## Kwi-Closte dashboard {#on-the-closte-dashboard}

Okokuqala, [ngena kwi-Closte account yakho](https://app.closte.com/), cofa into yemenyu ethi Sites, emva koko ucofe ikhonkco le-Dashboard kwisiza osebenza kuso ngoku:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Uza kuboniswa izinto ezininzi ezintsha zemenyu kwicala lasekhohlo lesikrini. Yiya kwiphepha le-**Settings** usebenzisa loo menyu:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Emva koko, kwi-**Settings** , fumana ithebhu ye-WP-Config, emva koko ifildi ethi "Additional wp-config.php content" kuloo thebhu:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Kwimeko yokufaka Ultimate Multisite, kuya kufuneka wongeze i-sunrise constant kuloo field. Yongeza nje umgca omtsha uze uncamathisele umgca ongezantsi. Emva koko, cofa iqhosha le-**Save All**.

define('SUNRISE', true);

Kuphelele apho, sele ulungile. Buyela kwi-wizard yokufaka Ultimate Multisite uze uhlaziye iphepha ukuze uqhubeke nenkqubo.
