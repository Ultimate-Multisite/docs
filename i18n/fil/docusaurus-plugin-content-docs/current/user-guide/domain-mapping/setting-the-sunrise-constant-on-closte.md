---
title: Pagtakda ng Sunrise Constant sa Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Pagtatakda ng Sunrise Constant sa True sa Closte

Ang ibang mga hosting provider ay nagla-lock ng wp-config.php para sa seguridad. Ibig sabihin nito, hindi maaaring awtomatikong i-edit ng Ultimate Multisite ang file para maidagdag ang mga kinakailangang constant para gumana ang domain mapping at iba pang mga feature. Ang Closte ay isa sa mga ganitong host.

Gayunpaman, may paraan ang Closte para magdagdag ng mga constant sa wp-config.php nang ligtas. Sundin lang ang mga hakbang sa ibaba:

## Sa Closte dashboard

Una, [mag-log in sa iyong Closte account](https://app.closte.com/), i-click ang Sites sa menu, pagkatapos ay i-click ang Dashboard link ng site na kasalukuyan mong ginagawa:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Makakakita ka ng mga bagong menu item sa kaliwang bahagi ng screen. Pumunta sa **Settings** page gamit ang menu na iyon:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Pagkatapos, sa **Settings**, hanapin ang WP-Config tab, at ang "Additional wp-config.php content" field sa tab na iyon:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Para sa pag-install ng Ultimate Multisite, kailangan mong idagdag ang sunrise constant sa field na iyon. Magdagdag lang ng bagong linya at i-paste ang linya sa ibaba. Pagkatapos, i-click ang **Save All** button.

define('SUNRISE', true);

Tapos na, handa ka na. Bumalik sa Ultimate Multisite install wizard at i-refresh ang page para ipagpatuloy ang proseso.
