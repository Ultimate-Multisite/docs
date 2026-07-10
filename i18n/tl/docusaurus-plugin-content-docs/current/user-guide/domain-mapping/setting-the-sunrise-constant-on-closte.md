---
title: Pagtatakda ng Sunrise Constant sa Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Pag-set ng Sunrise constant sa true sa Closte {#setting-the-sunrise-constant-to-true-on-closte}

May mga host provider na naka-lock ang wp-config.php para sa seguridad. Ibig sabihin, hindi kayang awtomatikong i-edit ng Ultimate Multisite ang file para maglagay ng mga kinakailangang constants para gumana ang domain mapping at iba pang features. Ang Closte ay isa sa mga ganitong host.

Gayunpaman, nag-aalok ang Closte ng paraan para idagdag ang mga constants sa wp-config.php nang ligtas. Kailangan mo lang sundin ang mga hakbang na ito:

## Sa dashboard ng Closte {#on-the-closte-dashboard}

Una, [mag-log in sa iyong Closte account](https://app.closte.com/), i-click ang Sites menu item, pagkatapos ay i-click ang Dashboard link sa site na kasalukuyan mong ginagawa:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Makikita ka ng iba't ibang bagong menu items sa kaliwang bahagi ng screen. Mag-navigate sa **Settings** page gamit ang menu na iyon:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Pagkatapos, sa **Settings**, hanapin ang WP-Config tab, at pagkatapos ay ang field na "Additional wp-config.php content" sa tab na iyon:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Sa konteksto ng pag-install ng Ultimate Multisite, kailangan mong idagdag ang sunrise constant sa field na iyan. Magdagdag lang ng bagong linya at i-paste ang linya sa ibaba. Pagkatapos, i-click ang **Save All** button.

define('SUNRISE', true);

Tapos na, handa ka na. Bumalik sa Ultimate Multisite install wizard at i-refresh ang page para ipagpatuloy ang proseso.
