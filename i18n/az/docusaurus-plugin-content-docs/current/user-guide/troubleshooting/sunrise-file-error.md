---
title: Şəfəq Faylı Xətası
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Sunrise Dosyasının Qurulması Zamanı Yaranan Xəta

`sunrise.php` faylı, WordPress özünü işə salarkən (bootstraps) axtardığı xüsusi bir fayldır. WordPress-in `sunrise.php` faylını aşkar edə bilməsi üçün onun **wp-content** qovluğunun içində yerləşməsi lazımdır.

Ultimate Multisite-i aktivləşdirdiyinizdə və ekranda göstərilən qurulma siuvarından (setup wizard) keçərkən, Ultimate Multisite bizim `sunrise.php` faylını `wp-content` qovluğuna köçürməyə çalışır.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

Əksər hallarda, faylı uğurla köçürməyə və hər şeyin düzgün işləməsinə nail oluruq. Lakin əgər nə isə düzgün qurulmayıbsa (məsələn, qovluq icazələri), belə bir vəziyyətlə qarşılaşa bilərsiniz ki, Ultimate Multisite faylı köçürməyə qadir deyil.

Ultimate Multisite-in sizə göstərdiyi xəta mesajını oxusanız, dəqiq olaraq nə baş verdiyini görəcəksiniz: **Sunrise copy failed**.

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

Bunu düzəltmək üçün, sadəcə olaraq `sunrise.php` faylını `wp-ultimo` plugin qovluğunun içinə köçürün və onu `wp-content` qovluğunuzun içinə yapışdırın. Bunu etdikdən sonra, siuvar səhifəsini yeniləyin və yoxlamaların keçməli olması lazımdır.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> Hər halda, gələcəkdə problem yaşamamaq üçün (yalnız Ultimate Multisite ilə deyil, digər pluginlər və mövzularla da) qovluq icazələrinizin ümumi yoxlanılmasını təmin etmək məsləhət görülə bilər.

WordPress-in bir hissəsi olan **Health Check** aləti (bunu əsas saytınızın **admin panel > Tools > Health Check** yolu ilə əldə edə bilərsiniz) qovluq icazələrinizin WordPress üçün problem yarada biləcək dəyərlərə qurulub-qurulmadığını bilməyinizə kömək edir.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
