---
title: Ṣíṣètò Sunrise Constant lórí Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Ṣíṣètò Sunrise constant sí true lórí Closte

Àwọn olùpèsè host kan máa ń ti wp-config.php pa fún ìdí ààbò. Èyí túmọ̀ sí pé Ultimate Multisite kò lè ṣàtúnṣe fáìlì náà laifọwọyi láti fi àwọn constants tó ṣe pàtàkì kún un kí domain mapping àti àwọn ẹya míì lè ṣiṣẹ́. Closte jẹ́ ọ̀kan lára irú host bẹ́ẹ̀.

Síbẹ̀, Closte ń pèsè ọ̀nà láti fi constants kún wp-config.php ní ọ̀nà tó ní ààbò. O kan nílò láti tẹ̀lé àwọn ìgbésẹ̀ tó wà nísàlẹ̀:

## Lórí Closte dashboard {#on-the-closte-dashboard}

Kọ́kọ́, [wọlé sínú Account Closte rẹ](https://app.closte.com/), tẹ ohun èlò menu Sites, lẹ́yìn náà tẹ link Dashboard lórí site tí o ń ṣiṣẹ́ lé lórí báyìí:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

A ó fi ọ̀pọ̀ ohun èlò menu tuntun hàn ọ́ ní apá òsì iboju. Lọ sí ojú-ewé **Settings** nípa lílo menu yẹn:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Lẹ́yìn náà, lórí **Settings** , wá taabu WP-Config, lẹ́yìn náà wá field "Additional wp-config.php content" lórí taabu yẹn:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Nípa fífi Ultimate Multisite sílẹ̀, ìwọ yóò nílò láti fi sunrise constant kún field yẹn. Kan fi laini tuntun kún un kí o sì lẹ̀ laini tó wà nísàlẹ̀. Lẹ́yìn náà, tẹ bọ́tìnì **Save All**.

define('SUNRISE', true);

Ó ti parí, gbogbo rẹ ti ṣètò. Padà sí Ultimate Multisite install wizard kí o sì tún ojú-ewé náà sọ láti tẹ̀síwájú ilana náà.
