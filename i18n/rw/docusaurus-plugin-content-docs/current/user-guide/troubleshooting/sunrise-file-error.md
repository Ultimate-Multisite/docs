---
title: Gukoresha Sunrise File Error
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Error ya ko Kuraho Sunrise File {#error-installing-the-sunrise-file}

File ya sunrise.php ni file iko kwa mambo maalum ambayo WordPress inatafuta wakati inajipanga (bootstraps). Ili WordPress iweze kuona file ya sunrise.php, lazima iwe ndani ya **folder wp-content**.

Wakati unapoactivate Ultimate Multisite na kupitia mwongozo wa kuanza kama unao kwenye picha, Ultimate Multisite inajaribu kunakili file yetu ya sunrise.php kwenda folder wp-content.

<!-- Screenshot is not available: Setup wizard page showing sunrise.php installation step -->

Kila mara, tunaweza kukopi file hiyo kwa mafanikio na kila kitu kinakuwa sawa. Hata hivyo, ikiwa kuna jambo halijaliwe vizuri (kama vile idhini za folder), unaweza kukumbana na hali ambapo Ultimate Multisite hawezi kunakili file hiyo.

Ikiwa utaangalia ujumbe wa kosa ambao Ultimo inakupa, utaona kuwa hapo ndipo ilivyotokea: **Sunrise copy failed** (Kupandikiza Sunrise kuliwa).

<!-- Screenshot is not available: Error message showing Sunrise copy failed -->

Ili kusahihisha hilo, unaweza tu kunakili file ya sunrise.php ndani ya folder ya plugin wp-ultimo na kuiweka kwenye folder yako ya wp-content. Baada ya kufanya hivyo, jaribu tena ukurasa wa mwongozo (wizard page) na majapisho yatafanya kazi vizuri.

<!-- Screenshot is not available: File manager showing sunrise.php inside wp-ultimo plugin folder --> Kwa hali yoyote, hii inaweza kukufanya uache ukagua idhini za folder zako kwa ujumla ili kuepuka matatizo ya baadaye (si tu na Ultimate Multisite bali pia na plugins na themes zingine).

**Health Check tool** ambayo inapatikana ndani ya WordPress (unaweza kuifungua kupitia **admin panel > Tools > Health Check** kwenye tovuti yako kuu) ina uwezo wa kukujulisha kama una idhini za folder zimepangwa kwa thamani zinazoweza kusababisha matatizo na WordPress.

<!-- Icyo cy'umwihariko ntabwo ari umwihariko: Umwujiza w'Ubwiyongere bw'Urugero rwo gukoreshwa mu kumenya uburenganzira bwo mu gihe (folder permissions status) -->
