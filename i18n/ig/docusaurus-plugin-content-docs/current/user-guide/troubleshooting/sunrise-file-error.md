---
title: Eri na-akụziri File
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Error Installing the Sunrise File

File sunrise.php na file special nke WordPress jiaka ọkụ (bootstraps) ya. Ka WordPress nwere ike ịgụ ihe a bụ sunrise.php, ọ ga-adị n'ụlọ **wp-content folder**.

Ọ bụrụ na ị chọta Ultimate Multisite ma ị gụ egwu setup wizard dị ka e ji screenshot ahụ, Ultimate Multisite na-eji ịgba file sunrise.php our kọwa n'ụlọ wp-content.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

Nchekwa ọtụtụ nke a, anyị na-agbaje file ahụ ma ihe dị mma. Mana, ọ bụrụ na ihe ọ bụla na-enweghị ike ịkwado (folder permissions, onyi), ị ga-anọ n'ụzọ ọ bụla na Ultimate Multisite na-aga ịgba file ahụ.

Ọ bụrụ na ị chere edemede error message Ultimo ji gị, ị ga-anọ n'ihi ihe a bụ ihe mere dịghị mma: **Sunrise copy failed**.

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

Ọ bụrụ na ị chọrọ ịgbanwe nke ahụ, ị chine file sunrise.php ọkụ n'ụlọ wp-ultimo plugin ma ị paste ya n'ụlọ wp-content folder-ị. A kpọrọ ihe a onye ji gị, ọ ga-anọ na checks dị mma.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> Ọ bụrụ na ọ bụla, ị chine ihe ndị a ma ọ bụ n'ụlọ permissions folder ahụ nke ọma maka ịgba ọsọ ọma na ọ bụla ihe dị mma na ọdịnihu (onyi) (na Ultimate Multisite ma ọ bụ plugin na-enweghị ike ịgụ ihe dị mma).

**Health Check tool** na WordPress (ị ga-anọ n'ihi gị ya via main site **admin panel > Tools > Health Check**) na-agbaje gị ihe a bụrụ na folder permissions ahụ dị n'aka ndị ga-enweghị ike ịgbara ọsọ ọma na WordPress.

<!-- Screenshot unavailable: Ntchọp (WordPress) Health Check tool đang cho thấy trạng thái quyền thư mục -->
