---
title: Часта задаваныя пытанні
sidebar_position: 18
_i18n_hash: 2aae003605ca306aebc782d92f605d7c
---
# Часта задаваныя пытанні

Вось некаторыя **Часта задаваныя пытанні**, якія часта паступаюць падчас запытаў у службу падтрымкі.

  * **Што такое Ultimate Multisite?**

Ultimate Multisite — гэта plugin для WordPress, створаны для ўстаноў на WordPress multisite, які пераўтварае вашу ўстанову WordPress ў прыватны сетку сайтаў — падобна да [WordPress.com](https://WordPress.com) — дазваляючы кліентам ствараць сайты праз штомесячныя, квартальныя або гадольныя платы (вы таксама можаце ствараць бясплатныя планы).

  * **Прапрацуе ці Ultimate Multisite без Multisite?**

Ня. Ultimate Multisite патрабуе WordPress multisite, subdirectory або subdomain.

  * **Якія патрабаванні для Ultimate Multisite?**

Ultimate Multisite патрабуе:

**WordPress Version** : v5.3+ (Рэкамендуецца: апошняя стабільная версія)
**PHP Version** : 7.4.x (Падтрымка > 8.0 набліжаецца)
**MySQL Version** : v5+ (Рэкамендуецца: версія 5.6, на ўпадок, калі ў вас няма 8.0 на вашым хостингу)

_Multisite (subdomain або subdirectory) таксама павінен быць актываваны._ [Як усталяваць WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite).

  * **Прапрацуе ці Ultimate Multisite з Multisite з subdirectory?**

Так. Ultimate Multisite падтрымлівае як subdirectory, так і subdirectory.

  * **Прапрацуе ці Ultimate Multisite з Multisite з subdomain?**

Так. Ultimate Multisite падтрымлівае як subdirectory, так і subdomain.

  * **Ці магу я выкарыстоўваць Ultimate Multisite, каб абмежаваць, якія Plugins і Themes могуць выкарыстоўваць карыстальнікі?**

Так. З Ultimate Multisite вы можаце выбраць, якія plugins і themes доступныя для кожнага плана на вашым сетцы.

  * **Ці магу я выкарыстоўваць Ultimate Multisite, каб абмежаваць колькасць posts, якія карыстальнік можа стварыць на сваім сайце?**

Так. З Ultimate Multisite вы можаце ўсталяваць квоты на posts для **кожнага доступнага post type** на вашым сетцы. Вы таксама можаце абмежаваць колькасць карыстальнікаў, якіх можа zaprasit admin, **кількісць месца на дыску** і многа іншага.

  * **Падтрымлівае Ultimate Multisite Site Templates?**

Так. З Ultimate Multisite вы можаце стварыць колькі галіў Site Templates захочаце. Site Templates — гэта не themes, гэта звычайныя сайты на вашым сетцы. Вы можаце актываваць plugins, themes і наладзіць гэты Site Template любым спосабам. Калі карыстальнік выбірае гэты шаблон, яго сайт будзе створаны як копія гэтага шаблону, з усімі наладжанымі рэаленнямі.

Вы таксама можаце ўсталяваць пэўны шаблон для плана. Зрабіўшы гэта, кожны карыстальнік, які рэгіструецца па гэтым плане, будзе мець свой сайт, створаны як дублікат гэтага Site Template.

  * **Ці інтэгруецца Ultimate Multisite з WooCommerce?**

Так!

Калі вы хочаце, каб вашым карыстальнікам сеткі быў доступ да WooCommerce, дазваляючы ім наладзіць крамы, гэта магчыма выкарыстоўваць Ultimate Multisite. Вы можаце нават абмежаваць колькасць produkтаў, якія вашы кліенты змогуць стварыць на кожным ўзроўні плана.

У адносінах да плацяжаў за падпіску для Ultimate Multisite, вы можаце выкарыстоўваць [Ultimate Multisite: WooCommerce Integration Add-on](https://ultimatemultisite.com/addons/wp-ultimo-woocommerce/), каб дазволіць вашым кліентам Ultimate Multisite плаціць выкарыстоўваючы шлюзы WooCommerce на вашым асноўным сайце. Такім чынам, вы можаце падключыцца да вялікай бібліятэкі шлюзаў плацяжаў, распрацаваных для WooCommerce, і выкарыстоўваць іх для выстаўлення рахункаў вашым кліентам Ultimate Multisite.

  * **Ці ёсць спосаб міграцыі падпісак з WPMUDEV Pro Sites?**

Так, Ultimate Multisite цяпер прапануе вам [камфортны інструмент для міграцыі](https://ultimatemultisite.com/addons/wp-ultimo-pro-sites-migrator/) вашай сеткі Pro Sites.

  * **Чым патомі пуст будзе табеля "Allowed Plugins" на маёй странеці рэдактавання плана?**

Ultimate Multisite дазваляе вам дазваляць або адмаўляць доступ да plugins, якія не актываваны на сетцы на вашым сетцы. Калі plugin актываваны на сетцы, па самім сваім патрабаваннях, ён будзе загружаны па спецы яка на кожным сайце вашай сеткі.

Калі вы не бачыце ніякіх plugins у табелі "Allowed Plugins", праверце, ці ёсць патрэбны plugin актываваны на сетцы ці nie.

  * **Ці магу я выкарыстоўваць свой ўласны дызайн Pricing Table?**

Так. З версіі 1.4.0, Ultimate Multisite падтрымлівае перавышэнне шаблонаў (template overrides).

  * **Прапрацуе ці Ultimate Multisite з WP Engine?**

Так. Ultimate Multisite заўсёды падтрымліваўся WP Engine, але прапрацаванне мапінг-доменаў патрабавала ручных дадатковых крокаў ад адміна (дадавання домена ў панэль WP Engine). **Гэта больш не адбываецца з версіі 1.6.0.** Ultimate Multisite інтэгруецца непасрэдна з API WP Engine, і домены дадаюцца ў панэль аўтаматычна пасля мапінгу.

  * **Які хостынг-провайдар вы рэкамендуеце?**

Ultimate Multisite павінен прапрацаваць з любым хостынг-провайдарам. Адна адрозненне ў тым, што некаторыя хостынг-кампаніі, такія як Closte, Serverpilot, WPMUDEV, WP Engine, Cloudways, Gridpane і [Runcloud.io](http://Runcloud.io), маюць больш тугун інтэграцыю для магчымасцей мапінгу доменаў, таму яны працуюць "з канца". Для іншых хостынг-провайдараў. вам можа быць неабходна ўручную наладзіць мапінг доменаў.
