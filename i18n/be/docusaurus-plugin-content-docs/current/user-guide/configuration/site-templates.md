---
title: Шаблоны сайта
sidebar_position: 4
_i18n_hash: da303a4b11e2b54bb7892c08b88a4d24
---
# Site Templates (v2)

_**ПАМЫЖЖАДЗЕ: Гэты артыкул адносіцца да версіі Ultimate Multisite 2.x. Калі вы выкарыстоўваеце версію 1.x,**_ **глядзіце гэты артыкул** _**.**_

Наша мэта пры стварэнні прэміум-сеткі з Ultimate Multisite — аўтаматызаваць якомагнабольшую колькасць працэсаў, надавай damsтрэльнікам гнуткасць і розныя варыянты выбару пры стварэнні сваіх сайтаў. Лепшым спосабам дасягнуць гэтага балансу з'яўляецца выкарыстанне функцыі Site Templates ў Ultimate Multisite.

## Што такое Site Template?

Як паказвае назва, Site Template — гэта "шаблон" сайта, які можна выкарыстоўваць як база пры стварэнні новых сайтаў у вашай сетцы.

Гэта азначае, што вы можаце стварыць базавы сайт, актываваць розныя plugins, ўсталяваць актыўны theme і наладзіць яго ў любым для вас парадку. Пасля гэтага, калі ваш кліент стварае новы кант, замест таго, каб атрымаць стандартны сайт WordPress без ніякага значнага кантэнту, ён атрымае копію вашага базавага сайта, дзе ўжо ўсе наладжанні і кантэнт прысутнічаюць.

Гэта гучыць крута, але як мне стварыць новы site template? Гэта прост, як толькі можа быць.

## Стваৰэнне і рэдагаванне новага Site Template

Site Templates — гэта проста звычайныя сайты ў вашай сетцы. Каб стварыць новы шаблон, вам проста трэба зайдзець у **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Add site button in the Sites list page](/img/config/site-templates-list.png)**

Гэта адкрые модальнае акно, дзе вам будзе патрабавана ўказаць **Site title, Site Domain/path** і **Site type**. У выпадаўным полі **Site Type** пераканайцеся, што вы выбілі **Site Template** *.*

_![Add site template modal with site type dropdown](/img/config/site-templates-list.png)_

Вы таксама можаце паглядзець апісанне site template:

![Site template description](/img/config/site-template-description.png)

Унізе ў форме вы ўбачыце перамычляк **Copy Site**. Гэта дазволіць вам стварыць новы site template на аснове існуючага шаблону, што паслужыць вам адправным пунктам і экагначыць час, замясто таго, каб ствараць шаблон з нуля.

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### Наладка кантэнту Site Template

Каб наладзіць свой site template, проста зайдзіце ў яго панэль адміні strataцыі і змяніце тое, што вам патрэбна. Вы можаце ствараць новыя posts, pages, актываваць plugins і змяняць актыўны theme. Вы нават можаце зайдзець у Customizer і змяніць усе практычна ўсе наладкі.

![Site template edit interface](/img/config/site-template-edit.png)

Усе гэтыя дадзеныя будуць скопіяваны, калі кліент стварэнне новы сайт на аснове гэтага Site Template.

### Падстаўныя варыянты (Advanced Options)

Калі вы ведаеце, як працаваць з камп'ютарным кадэmam, вы можаце выкарыстоўваць наш Search and Replace API, каб аўтаматычна замяняць інфармацыю на новым сайце пасля яго стварэння. Гэта карысна для такіх рэчаў, як замена назваў кампаній на адканнявой старонцы, замена адрасы на кантакцевай старонцы і г. д.

### Выкарыстанне Site Templates

Добра, вы стварылі шмат розных Site Templates з рознымі дызайном, themes і наладкамі. Як мне іх выкарыстоўваць на сетцы?

Па сутнасці, зараз вы можаце выкарыстоўваць два парады (але не адначасова):

  * Павешкаць адзін Site Template на кожны ваш Plan

**АБО**

  * Дазволіць вашымі кліентам выбіраць site templates самі падчас рэгістрацыі.

#### Рэжым 1: Павешкаць Site Template (Assign Site Template)

У гэтым рэжыме вашыя кліенты не змогуць выбраць шаблон, калі ствараюць кант, але вы ўсталяеце, які шаблон павінен быць выкарыстованы для кожнага з вашага Plans.

Для гэтага вам трэба зайдзець у **Ultimate Multisite > Products > Edit**.

![Edit product to assign site template](/img/config/product-site-templates.png)

Гэта прыведзе вас на старонку **Edit Product**. У секцыі **Product Options** знайдзіце тэчку **Site template** і выберыце варыянт **Assign Site** **Template** з выпадаўнага поля. Гэта адкарыць спіс даступных site templates і дазволіць вам выбраць толькі адзін шаблон, прызначаны для гэтага прадукту.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Рэжым 2: Выбраны Site Template (Choose Available Site Template)

У гэтым рэжыме вы даеце вашымі кліентам выбар падчас рэгістрацыі. Яны змогуць выбіраць з розных site templates, якія вы вызначаеце ў наладках прадукту. У вас ёсць магчымасць абмежыць site template, які яны могуць выбраць для выбранага прадукту. Гэта дазволіць вам мець розныя наборы site templates для кожнага прадукту, што ідэальна падыходзіць, каб падкрэсліць розныя функцыі і магчымасці для прадукту больш высокай цэны.

На старонцы **Edit Product**. У секцыі **Product Options** знайдзіце тэчку **Site template** і выберыце варыянт **Choose Available Site Template** з выпадаўнага поля. Гэта адкарыць спіс даступных site templates і дазволіць вам выбраць шаблон, які вы жадаеце, каб ён быў даступны. Вы можаце гэта зрабіць, выбрав яго паводзіны: **Available**, калі вы хочаце, каб site template быў у спісе. _**Not Available**_, калі вы не хочаце, каб site template быў паказаны як варыянт. І **Pre-selected**, калі вы жадаеце, каб адзін з пералічаных site templates быў па спічатку па замаўчанні.

![Choose available site templates with behavior options](/img/config/product-site-templates.png)

### Па спічатку (Default Mode): Выбар site template у форме Checkout

Калі вы хочаце, каб усе вашыя site templates былі даступныя падчас рэгістрацыі, або, магчыма, не пераважваеце дадатковай працы па прызначанні або ўказванні site templates для кожнага створанага прадукту. Тое вы можаце проста ўсталяваць выбар site template у сваёй **Checkout Form**. Для гэтага вам проста трэба зайдзець у **Ultimate Multisite > Checkout Forms**. Пасля гэтага націсніце **Edit** пад фармай, якую вы хочаце наладзіць.

![Checkout forms list page](/img/config/checkout-forms-list.png)

Гэта прыведзе вас на старонку **Edit Checkout Form**. Знайдзіце поле **Template Selection** і націсніце **Edit** пад ім.

![Checkout form editor with template selection field](/img/config/checkout-form-editor.png)

Паявіцца модальнае акно. У полі **Template Sites** вы можаце выбраць і пералічыць усе site templates, якія вы хочаце, каб яны былі даступныя падчас рэгістрацыі. Site templates, якія вы ўказуеце тут, будуць даступныя незалежна ад таго, які прадукт выбраў карыстальнік.

![Template sites field in checkout form editor](/img/config/checkout-form-step.png)

### Варыянты Site Template

Існуюць іншыя функцыі site templates, якія вы можаце ўключыць або выключыць у наладках Ultimate Multisite.

![Site template options in Ultimate Multisite settings](/img/config/settings-sites.png)

#### Дазволіць пераключэнне шаблону (Allow Template Switching)

Уключэнне гэтага варыянту дазволіць вашымі кліентам пераключыць шаблон, які яны выбралі падчас рэгістрацыі, пасля стварэння канта і сайта. Гэта карысна з пункта ​​з гледжання кліента, бо гэта дазваляе ім перавыбраць шаблон, калі яны пазней выявяць, што іх першавы выбар не быў 최 лепшым для іх асабістых патрэбаў.

#### Дазволіць карыстальнікам выкарыстоўваць свой сайт як шаблоны (Allow Users to use their Site as templates)

Калі карыстальнікі субсайтаў патрацілі час на стварэнне і дызайн сваёй ўласнай сайта, яны могуць захоцець клонаваць і выкарыстоўваць яго як адзін з site templates, даступных пры стварэнні іншага субсайта на вашай сетцы. Гэты варыянт дазволіць ім гэта зрабіць.

#### Капіяванне медыя пры дублікаванні шаблону (Copy Media on Template Duplication)

Уключэнне гэтага варыянту скапіруе медыя, загружанае на шаблонны сайт, на новае створаны. Гэта можна пераўтварыць для кожнага плана.

#### **Захаванне пошукавых сіл не індэксаваць Site Templates**

Site templates, як абмеркавана ў гэтым артыкуле, з'яўляюцца шаблонамі, але ўсё ж часткай вашай сеткі, што азначае, што яны ўсё яшчэ даступныя для пошукавых сіл. Гэта дазволіць вам схаваць site templates, каб пошукавыя сілы не маглі іх індэксаваць.

## Падпаўненне Site Templates аўтаматычным пошукам і заменай (Pre-populating Site Templates with auto search-and-replace)

Адной з самых магутных функцый Ultimate Multisite з'яўляецца магчымасць дадаваць свавольна тэкст, колеры і выбіраць поля ў форму рэгістрацыі. Калі мы атрымаем гэтыя дадзеныя, мы можам выкарыстоўваць іх для падпаўнення кантэнту ў певных частках выбранага site template. Пасля гэтага, калі публікуецца новы сайт, Ultimate Multisite замяніць плейсхолдеры на сапраўдную інфармацыю, уведзеную падчас рэгістрацыі.

Напрыклад, калі вы хочаце атрымаць назву кампаніі карыстальніка падчас рэгістрацыі і аўтаматычна паставіць назву кампаніі на галоўную старонку. На галоўнай старонцы вашага шаблоннага сайта вам трэба дадаць плейсхолдеры, як на прыклад у спісе (плейсхолдеры трэба дадаваць, аблічваючы двойныя фігурныя дужкі - {{placeholder_name}}).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

Затым вы можаце проста дадаць адпаведны поле рэгістрацыі на сваёй форме checkout, каб атрымаць гэтыя дадзеныя:

![Checkout form with matching registration field](/img/config/checkout-form-editor.png)

Ваш кліент тама выхадзе зарэгістравацца.

![Registration field filled by customer](/img/config/checkout-form-step.png)

![Preview of the registration form](/img/config/checkout-form-editor.png)

Ultimate Multisite тама аўтаматычна замяніць плейсхолдеры на дадзеныя, прадастаўленыя кліентам.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### Выпраўленне праблемы "шаблон, напоўнены плейсхолдерамі" (Solving the "template full of placeholders" problem)

Усё гэта крута, але мы стаўнышыся з прыгожым праблемай: нашаяя site templates — якія могуць наведаць нашы кліенты — напоўнены прыгожным плейсхолдерамі, якія не шмат нічога не кажаць.

Каб гэта вырашыць, мы прапануе варыясць ўсталяваць вымышленыя значэнні для плейсхолдэраў, і мы выкарыстоўваем гэтыя значэнні, каб знайсці і замяніць іх кантэнт на шаблонных сайтах, калі вашыя кліенты іх наводзяць.

Вы можаце атрымаць доступ да рэдактара плейсхолдэраў, зайдзеўшы ў **Ultimate Multisite > Settings > Sites**, а затым, у боковым меню, націснуўшы на спасылку **Edit Placeholders**.

![Placeholder settings under Sites settings page](/img/config/settings-sites.png)

Гэта прыведзе вас да рэдактара кантэнту плейсхолдэраў, дзе вы можаце дадаць плейсхолдеры і іх адпаведны кантэнт.

![Template placeholders content editor](/img/config/settings-sites.png)
