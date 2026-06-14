---
title: Closte-тағы Шығыс тұрақтысын орнату
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Sunrise константасын Closte-те `true` деп орнату

Кейбір хост провайдерлері қауіпсіздік үшін wp-config.php файлына бұғат жасайды. Бұл Ultimate Multisite-тың домен картасы және басқа мүмкіндіктері жұмыс істеу үшін қажетті константаларды қосу үшін файлды автоматты түрде өзгерте алмауына себеп болады. Closte осындай хосттардың бірі.

Алайда, Closte wp-config.php-ке константаларды қауіпсіздікпен қосу жолын ұсынады. Сізге келесі қадамдарды орындау жеткілікті:

## Closte дашбордында

Ең алдымен, [Closte hesabыңызға кіріңіз](https://app.closte.com/), содан кейін Sites мәзіріне басыңыз, адан кейін қазір жұмыс істеп жатқан сайтқа Dashboard сілтемесіне басыңыз:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Экранның сол жақ жағында бірнеше жаңа мәзір элементтері көрінеді. Осы мәзір арқылы **Settings** (Реттіліктер) парақшасына өтіңіз:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Содан кейін, **Settings**-те WP-Config табын табыңыз және сол табтағы "Additional wp-config.php content" (Қосымша wp-config.php мазмұны) өрісіне көз жеткізіңіз:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisite-ты орнату контекстінде, сізге сол өріске sunrise константасын қосу қажет. Жаңа жол қосып, астындағы жолды көшіріп қойыңыз. Содан кейін **Save All** (Барлығын сақтау) батымен салыңыз.

define('SUNRISE', true);

Міне, бәрі дайын. Ultimate Multisite орнату wizard-ына қайтып оралыңыз және процесті жалғастыру үшін бетті жаңартыңыз.
