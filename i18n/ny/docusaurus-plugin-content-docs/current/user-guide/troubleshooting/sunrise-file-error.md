---
title: Chidwe cha file chifukwa kwa kudzera
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Kufungula Kufungula File la Sunrise {#error-installing-the-sunrise-file}

File la sunrise.php ndi file iliyonse la WordPress iliyofuna kukhala m'moyo walo pamene imapulogera (bootstraps) yake. Ili WordPress liyesangalala kuti likumbukire file la sunrise.php, linenera likho m'moyo wa **wp-content folder**.

Pamene muli ndi Ultimate Multisite ndipo muli ndi setup wizard monga momwe muli m'screenshot, Ultimate Multisite limakuti kopyera file la sunrise.php lathu ku wp-content folder.

<!-- Screenshot is not available: Setup wizard page showing sunrise.php installation step -->

Monga nthawi zambiri, tikho ndi kuyendera bwino ndipo zonse zimakukonza. Komabe, ngati kuli kukhala kopyera bwino (folder permissions, mwachitsanitsetse), muli ndi sitira lomwe Ultimate Multisite sikuti likopyere file.

Ngati muli ndi kusunga meseji ya error yomwe Ultimo imapereka, mudzindikira kuti ndilo zomwe kumayamba: **Sunrise copy failed**.

<!-- Screenshot is not available: Error message showing Sunrise copy failed -->

Kuti mutsekeze izi, muli ndi kuyendera bwino kopyera file la sunrise.php m'moyo wa wp-ultimo plugin folder ndipo muli ndi kopyera ku wp-content folder yanu. Ndipo muli ndi kuyendera bwino, ndipo zikufuna kuti checks zikukonze.

<!-- Screenshot is not available: File manager showing sunrise.php inside wp-ultimo plugin folder --> M'moyo wosati woyenera, izi mungyenera kukhala ndi kusankha m'moyo wanu wosati woyenera (folder permissions) kuti muphatikani mavuto m'moyo wanu m'moyo wosati woyenera (not only with Ultimate Multisite but with other plugins and themes as well).

**Health Check tool** yomwe ndi chinthu cha WordPress (muli ndi kuyendera bwino m'main site **admin panel > Tools > Health Check**) imayenera kukuphunzitsa kuti muli ndi folder permissions zomwe mungone kuti zimakutha kusangalala ndi WordPress.

<!-- Kukhala kwa pikhala: Zitsanzo za WordPress Health Check zikusonyeza kukhala kwa ulamuliro wa folder -->
