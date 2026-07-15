---
title: Nye-e Setting the Sunrise Constant on Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Setting the constant Sunrise to true on Closte

Mkpụta ndị na-host (host providers) hie nwere ike ịkwalite file wp-config.php nyocha ihe à dị mma. Oge a na-eme ka Ultimate Multisite abụghị ịgbagba file ahụ ọtụtụ ụda dị mkpa nke na-agbanwe constant ndị dị mkpa iji ga-akwere domain mapping na ihe ndị ọzọ ịrụ. Closte bụ onye ọkụ ahụ.

Ọ bụaimanapun, Closte na-enwe ụzọ ịchukwu constant ndị a n'wp-config.php n'aka mgbe ọchịchị dị mma. Ị ga-akwado akụkọ ndị a:

## Ọnye dashboard Closte {#on-the-closte-dashboard}

Ma ọ bụ, [log in eziokwu Closte](https://app.closte.com/), click na menu Sites, sonra igba link Dashboard n'aka site ị nwere ahịichi ọrụ ahụ:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Ọ ga-akwado ụfọdụ new menu items n'aka akụkọ ahụ. Jupụ na page **Settings** (Ihe Ndị Aji) eziokwu onye menyu ahụ:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Ọ bụrụ na ị na **Settings**, jupụ tab WP-Config, sonra field "Additional wp-config.php content" n'aka tab ahụ:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

N'aka ịrụ Ultimate Multisite, ị ga-akwado constant sunrise ahụ n'aka field ahụ. Jupụ akụkọ ọhụrụ na paste akụkọ a: define('SUNRISE', true); Ruo n'ime ahụ, click na nút **Save All** (Sọọka All).

Ọ bụ ihe mere, ị gba ya. Jupụ geri n'aka Ultimate Multisite install wizard ma refresh page ahụ iji gbanwe ihe ọrụ ahụ.
