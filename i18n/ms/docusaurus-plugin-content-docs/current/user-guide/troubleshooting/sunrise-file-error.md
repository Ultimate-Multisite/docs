---
title: Ralat Fail Sunrise
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Ralat Memasang Fail Sunrise

Fail sunrise.php ialah fail khas yang WordPress cari semasa ia memulakan dirinya. Untuk WordPress dapat mengesan fail sunrise.php, fail tersebut perlu berada di dalam **folder wp-content**.

Apabila anda mengaktifkan Ultimate Multisite dan melalui wizard persediaan seperti yang ditunjukkan dalam tangkapan skrin, Ultimate Multisite akan cuba menyalin fail sunrise.php kami ke folder wp-content.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

Kebanyakan masa, kami berjaya menyalin fail tersebut dan semuanya berfungsi dengan baik. Walau bagaimanapun, jika sesuatu tidak disediakan dengan betul (kebenaran folder, contohnya), anda mungkin menghadapi situasi di mana Ultimate Multisite tidak dapat menyalin fail tersebut.

Jika anda membaca mesej ralat yang Ultimo berikan, anda akan lihat itulah yang berlaku di sini: **Salinan Sunrise gagal**.

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

Untuk membetulkan masalah ini, anda boleh menyalin fail sunrise.php di dalam folder plugin wp-ultimo dan tampalkannya ke folder wp-content anda. Selepas anda melakukan itu, muat semula halaman wizard dan semakan sepatutnya akan lulus.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> Walau apa pun, keadaan ini mungkin memerlukan semakan umum terhadap kebenaran folder anda untuk mengelakkan masalah pada masa hadapan (bukan sahaja dengan Ultimate Multisite tetapi dengan plugin dan tema lain juga).

**Alat Health Check** yang merupakan sebahagian daripada WordPress (anda boleh mengaksesnya melalui **panel admin laman utama > Tools > Health Check**) mampu memberitahu anda jika kebenaran folder anda ditetapkan kepada nilai yang mungkin menyebabkan masalah dengan WordPress.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
