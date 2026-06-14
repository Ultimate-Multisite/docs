---
title: Kollayoyin Asali
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Ƙwararwar na Asali

Ga wani mai amfani na WordPress Multisite na sabon kuma wanda kawai ya fara amfani da Ultimate Multisite, akwai kalmomi da jumloli da dama da za ka samu a farko. Kaɗai ne muhimmin aikin koyon su domin ka fahimci tsarin da ke aiki gaba ɗaya da yadda yake aiki.

A wannan makale, za mu gwada in ba da ma'ana da bayanin wasu ra'ayoyi masu mahimmanci a WordPress. Wasu daga cikinsu suna da alaƙa sosai ga masu amfani, wasu ga masu haɓaka (developers), kuma wasu ga duka.

## WordPress Multisite

**Multisite** na WordPress wani nau'i ne na shigarwar WordPress wanda ke ba ka damar samar da gida hankali da sarrafa yanayin shafuka da dama daga wuri ɗaya, wato dashboard ɗin WordPress. Za ka iya sarrafa komai, kamar yawan shafuka, ƙarin ƙwarewa (features), themes, da kuma matsayin masu amfani (user roles). Yana aini da ake sarrafa watanni da yawa da liyan kuɗi.

## Network

A cikin WordPress, wani multisite network shi ne inda za a iya sarrafa yawan **subsites** daga dashboard ɗin ɗaya. Duk da cewa samar da multisite network yana bambanta tsakanin masu gudanar da hosting, sakamakon shi yawanci ƙarin takaitaccen bayanan a cikin fayil ɗin **wp-config.php** don ba WordPress ilimi cewa yana aiki a wannan hanya ta musamman.

Akwai wasu bambance-bambancen da ke tsakanin multisite network da shigarwar WordPress wadda take kusa, wanda za mu tattauna shi cikin sauri.

## Database

**Database** wani nau'i ne na bayanan da aka tsara sosai kuma an shirya. A harshen kwamfuta, database yana nufin software da ake amfani da shi don ajiye da tsara bayanai. Ka tun shi a matsayin wani cabinet na fayil inda kake ajiye bayanai a sassa daban-daban da ake kira tables (jadawali).

WordPress Multisite yana amfani da wani database kuma duk subsite tana samun jadawalin ta kanta tare da ƙara blog idan a cikin prefix, don cewa lokacin da ka shigar shigarwar network, database ɗinka da samar da subsite zai yi wa ka waɗannan tables:

_wp_1_options_ \- jadawalin bayan na farko ga yaidan subsite

_wp_2_options_ \- jadawalin bayan na farko ga yaidan subsite

## Gudanar da wuri (Hosting provider)

Gudanar da wuri (hosting provider) wani kamfani ne wanda ke ba kasuwanni da mutane damar samar da shafuka (websites) a kan Intanet. Wannan ayyukan da masu gudanar da wuri suke bayarwa za su iya bambanta, amma yawanci suna haɗawa da zane shafi, wurin ajiye data a wurin host, da kuma haɗi da Intanet.

## Domain (Wurin Shafi)

Domain name wani adireshin ne da mutane ke amfani da shi don ziyartar shafin ku. Yana nuna ga browser inda ya nemo shafinka. Kamar yadda adireshin hanya yake, domain shine yadda mutane ke zuwa shafin ku a Intanet. Kuma kamar samun alamar a gaban duk ko. Idan kana so ka ziyarci shafin mu, dole ne ka rubuta adireshin wajen browser ɗinka a wurin da ake kira [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _, inda [**ultimatemultisite.com**](http://ultimatemultisite.com) shine domain name.

## Subdomain (Wurin Shafi na Sauyi)

Subdomain wani nau'in tsarin shafuka a ƙarƙashin domain na gaba, amma maimakon amfani da folders don shirya abubuwan da ke kan shafin, yana samar da wuri na shafi na musamman. Ana bayyana shi kamar [**https://site1.domain.com/**](https://site1.domain.com/) inda _site1_ shine sunan subdomain kuma [_domain.com_](http://domain.com) shine domain na gaba.

## Subdirectory (Wurin Shafi na Lokaci)

Subdirectory wani nau'in tsarin shafuka a ƙarƙashin domain na asali wanda ke amfani da folders don shirya abubuwan da ke kan shafin. Subdirectory shi ne babban folder kuma sunayen su za a iya amfani da su gaba ɗaya. Ana bayyana shi kamar [**https://domain.com/site1**](https://domain.com/site1) inda _site1_ shine sunan subdirectory kuma [_domain.com_](http://domain.com) shine domain na gaba.

## Subsite

Subsite wuri wuri site ce ne wuri site kake kaɗai da kake ƙirƙira a cikin Multisite network. Zai iya zama **subdomain** ko **subdirectory** dangane yadda aka tsara saida WordPress Multisite ɗinka.

## Super Admin

WordPress Super Admin wani nau'in kai (user role) ne da cikakken ikon sarrafa dukkan subsites a cikin Multisite network. Don masu amfani da Multisite, wannan shi ne **ma'aikacin matsayi mafi girma** da kake iya ba shi ga saida WordPress ɗinka.

## Plugin

A gaba, plugin wani nau'in kod (code) ne wanda ke ƙara sabon ayyuka ga wajen yanar gizo (WordPress site). Wannan zai iya zama mai sauƙi kamar canza logo na shiga ko mai rikitarwa kamar ƙara ayyukan sayarwar kayayyaki. _Woocommerce and Contact Form_ sune misalai na plugin.

A WordPress Multisite, ana iya installin plugins ne kawai daga dashboard na admin network ta Super Admin. Subsite Admins za su iya aiki (activate) da kuma tsayawa (deactivate) plugins cikin subsiten ɗin su kawai.

## Themes

WordPress theme wani nau'i ne na fayiloli (_graphics, style sheets, da code_) wanda ke bayyana dukkan bayanan yanar gizo. Yana ba duk kayan aikin saida (front-end stylings) kamar yadda ake rubuta font, tsarin shafin, launi, da sauransu.

Maganar sama da plugins, themes a WordPress Multisite ana iya installin su ne kawai daga Super Admin kuma ana iya aiki (activate) su a matsayin subsite level daga Subsite admins.

## Site Template

**Site Template** wani nau'i ne na saƙo (boilerplate site) wanda za a iya amfani da shi a matsayin asali lokacin ƙirƙirar sabbin sites a cikin network ɗinka.

Wannan yana nufin za ka iya ƙirƙirar wuri site na asali, aiki daban-daban plugins, tsara theme mai aiki, kuma ka gyara shi yadda kake so. Sannan, lokacin da abokin kai ya ƙirƙira sabon asusun sa, ba zai samu wuri WordPress na asali da babu abubuwa masu ma'ana a ciki ba, sai ya samu dubawa (copy) na wuri site ɗin ka na asali tare da duk dukkan gyaran da aka yi da kayan aikin da ke cikin shi.

## Domain Mapping

**Domain mapping** tare da WordPress wajibi ne hanyar da kuma canza inda masu zuwa suke tafiya, ta hanyar adireshin gidan yanar gizo (website). A WordPress Multisite, ana ƙirƙirar subsites ta amfani da ko direktori na ƙasa (subdirectory) ko subdomain. Ma'anar domain mapping ita ce tana ba masu amfani na subsite damar amfani da domain na sama kamar [**joesbikeshop.com**](http://joesbikeshop.com) don sa adireshin gidan su ya yi kyau sosai.

## SSL

SSL yana nufin **Secure Sockets Layer**. Wannan wani takardar shaidar dijital ce da ke tabbatar da gaskiya na wajen yanar gizo kuma tana ba damar haɗi mai tsaro (encrypted connection). A yau, ana amfani da shi a matsayin fasahar asali don kare haɗin internet daga rashin tsaro da kuma kiyaye duk wani bayanin da ake aiki tsakanin lokutan biyu, yana hana masu cin zarafi karanta ko canza duk wani bayani da aka tura, wanda hakan ke samar da damar sirri na kai. Masu gogawa (browsers) na zamani suna buƙatar SSL wanda ke sa shi zama mai mahimmanci lokacin ƙirƙirar da aiki wajen wajen yanar gizo.

## Media

Media sune hotuna, sautunan, bidiyo, da wasu fayiloli da ke samar da wajen yanar gizo.

Wurin yanar gizo na gida (Network sites) yana raba wani database ɗaya a WordPress Multisite, suna kiyaye hanyoyin tsakanin fayiloli (paths on the filesystem) na musamman don fayilolin media.

Wurin asali na WordPress (wp-content/uploads) yana nan kamar yadda yake, amma hanyarsa ta shafi don nuna ID na wajen yanar gizo na gida. A ƙarshe, fayilolin media na wajen yanar gizo na gida suna bayyana a matsayin wp-contents/uploads/site/[id].

## Permalinks

Permalinks sune adireshin da ya dore (permanent URLs) na kowane blog post ko shafi na kai a cikin wajen yanar gizo. Ana kuma ambata su da **pretty links**. A matsayin asali, WordPress URLs suna amfani da format na query string wanda ke nuna wani abu kamar haka:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite هي افزونه‌ای برای وردپرس است که برای نصب‌های وردپرس چند سایت (Multisite) ساخته شده و نصب وردپرس شما را به یک شبکه حرفه‌ای از سایت‌ها تبدیل می‌کند – شبیه به [WordPress.com] – که به مشتریان اجازه می‌دهد با پرداخت حق اشتراک ماهانه، فصلی یا سالانه سایت ایجاد کنند (شما می‌توانید طرح‌های رایگان هم بسازید).

## فرم تسویه حساب (Checkout Form)

فرم تسویه حساب یک فرم سفارش تک مرحله‌ای یا چند مرحله‌ای است که شامل ایجاد زیرسایت، عضویت و حساب کاربری از طریق ثبت‌نام Ultimate Multisite می‌شود. این فرم شامل فیلدها و فرم‌های پرداخت مختلفی است که کاربر باید در طول فرآیند ثبت‌نام آن‌ها را ارسال کند.

## Webhook (هوک وب)

یک webhook (که به آن web callback یا HTTP push API هم می‌گویند) راهی برای اینکه یک اپلیکیشن اطلاعات لحظه‌ای را به برنامه‌های دیگر ارائه دهد، است. یک webhook داده‌ها را همان لحظه‌ای که اتفاق می‌افتد به برنامه‌های دیگر ارسال می‌کند، یعنی شما بلافاصله داده دریافت می‌کنید.

**Ultimate Multisite webhooks** امکانات بی‌شماری را باز می‌کنند و به مدیران شبکه اجازه می‌دهند انواع ادغام‌های دیوانه‌وار اما مفید را انجام دهند، مخصوصاً اگر با سرویس‌هایی مانند _Zapier و IFTTT_ استفاده شوند.

## Events (رویدادها)

یک Event یک عمل است که در نتیجه یک اقدام کاربر یا منبع دیگر رخ می‌دهد، مثلاً کلیک کردن ماوس. Ultimate Multisite سوابق تمام رویدادها و لاگ‌هایی را که در کل شبکه شما اتفاق می‌افتند نگه می‌دارد. این افزونه فعالیت‌های مختلفی را در سایت چند سایتی شما، مثل تغییر طرح‌ها (plan changes)، ردیابی می‌کند.
