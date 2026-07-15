---
title: Ukusetha i-Sunrise Constant ku-Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Ukusetha i-Sunrise constant ibe yi-true ku-Closte

Abanye abahlinzeki bokusingatha bakhiya i-wp-config.php ngezizathu zokuphepha. Lokhu kusho ukuthi Ultimate Multisite ayikwazi ukuhlela ngokuzenzakalelayo ifayela ukuze ifake ama-constants adingekayo ukuze domain mapping nezinye izici zisebenze. I-Closte ingomunye wabasingathi abanjalo.

Nokho, i-Closte inikeza indlela yokwengeza ama-constants ku-wp-config.php ngendlela evikelekile. Udinga nje ukulandela izinyathelo ezingezansi:

## Ku-Closte dashboard {#on-the-closte-dashboard}

Okokuqala, [ngena ku-akhawunti yakho ye-Closte](https://app.closte.com/), chofoza entweni yemenyu ethi Sites, bese uchofoza kusixhumanisi se-Dashboard kusayithi osebenza kulo njengamanje:

<!-- Isithombe-skrini asitholakali: Closte dashboard ebonisa imenyu ye-Sites nesixhumanisi se-Dashboard -->

Uzokwethulelwa izinto zemenyu ezintsha eziningi ohlangothini lwesokunxele lwesikrini. Zulazulela ekhasini le-**Settings** usebenzisa leyo menyu:

<!-- Isithombe-skrini asitholakali: Imenyu eseceleni kwesokunxele ye-Closte ebonisa inketho ye-Settings -->

Bese, ku-**Settings**, thola ithebhu ye-WP-Config, bese uthola inkambu ethi "Additional wp-config.php content" kuleyo thebhu:

<!-- Isithombe-skrini asitholakali: Ikhasi le-Closte Settings elinethebhu ye-WP-Config ebonisa inkambu ethi Additional wp-config.php content -->

Esimweni sokufaka Ultimate Multisite, kuzodingeka wengeze i-sunrise constant kuleyo nkambu. Mane wengeze umugqa omusha bese unamathisela umugqa ongezansi. Ngemva kwalokho, chofoza inkinobho ethi **Save All**.

define('SUNRISE', true);

Yilokho kuphela, usulungile. Buyela ku-wizard yokufaka ye-Ultimate Multisite bese uvuselela ikhasi ukuze uqhubeke nenqubo.
