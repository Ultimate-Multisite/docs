---
title: Апрацоўка податкаў
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Апрацоўка падаткаў

Ultimate Multisite мае модуль збору падаткаў, ўбудаваны ў наш асноўны plugin, таму калі вам трэба збіраць падаткі з продажаў па вашых планах, пакетах і паслугах, вы можаце лёгка гэта зрабіць, не ўсталёўшы ніякіх аддоткаў (add-ons).

Для кампаній, якія знаходзяцца ў Еўропе, мы прапануем **add-on**, які дадае інструменты і функцыі для лепшай **падтрымкі VAT** (падатку на гандле).

Ultimate Multisite не адпраўляе і не выплачвае падаткі ад вашых імя ў правярджаванні; мы проста дапамагаем вам збіраць адпаведныя падаткі ў момант транзакцыі. **Вамсё ж будзе неабходна сабраць падаткі са сваёй бакі.**

## Укрэславанне збору падаткаў

Збор падаткаў не ўключаны па спецыяльнасці. каб яго ўключыць, вам трэба зайдзе ў **Ultimate Multisite > Settings > Taxes** і пераключыць на ўключэнне ў наступным настройцы «Enable Taxes».

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Вось поўны прагляд старонкі з настройкамі падаткаў:

![Tax settings full page](/img/config/settings-taxes-full.png)

Вы таксама можаце прагледзець падатковыя настройкі для адрознейых прадуктаў:

![Tax settings for products](/img/config/settings-taxes.png)

### Падаткі, выключэнныя з падаткаў vs. Падаткі, ўключаныя ў падаткі

Па спецыяльнасці ўсе вашыя падатковыя цэны ўсталяваны без падаткаў, што азначае, што падаткі **не ўключаны** ў цэну прадукту. Калі мы вызначаем, што ад кліента трэба збіраць падаткі за дадзеную пакупку, мы дадамо падаткі **да вялікай сумы**.

Калі вы пераканаўваецеся, што падаткі павінны быць уключаны ў цэну прадукту, вы можаце гэта зрабіць, актываваўшы настройку **Inclusive Tax**.

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Не забывайце **захаваць** змены, якія вы зрабілі.

###

## Стваৰэнне падатковых ста{:rate}

Пасля таго, як вы ўключыце збор падаткаў, вам трэба стварыць падатковыя ста{:rate} для абрадоўных месцаў, выкарыстоўваючы наш рэдактар падатковых ста{:rate}.

Вы можаце атрымаць доступ да рэдактара, націснуўшы кнопку **Manage Tax Rates** у боковым меню на старонцы з настройкамі падаткаў.

![Manage Tax Rates link in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

На старонцы рэдактара падатковых ста{:rate} вы можаце дадаць новыя падатковыя ста{:rate}, націснуўшы кнопку **Add new Row**.

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

Вам трэбі перадаць кожнай падаткай ста{:rate} **назву** (якая выкарыстоўваецца ў рахункавых паказах). Пасля гэтага вы можаце выбраць **край** (неабходна), **паўлак** і **горад** (абае па жаданні), дзе будзе збірацца гэты падатак. Нарэад вазьміце **падатковую ста{:rate} у процентах**.

### Падатковыя катэгорыі

Вы таксама можаце стварыць некалькі Падатковых катэгорый, каб дадаць розныя падатковыя ста{:rate} для розных тыпаў прадуктаў.

Націсніце, каб **Add new Tax Category**, пасля чаго напішыце назву катэгорыі і націснецце **Create**.

![Add new Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field in the create category modal](/img/config/tax-categories-create-modal.png)

Каб прагледзець катэгорыі, націсніце **Switch** і выберыце катэгорыю, да якой вы хочаце дадаць новыя падаткі.

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

Вы можаце ўсталяваць падатковую катэгорыю для пэўднага прадукту, зайдзе ў **Product edit page**, а потым на ўкладку Taxes.

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

На гэтым жа экране вы можаце выключыць пераключальнік **Is Taxable?**, каб дапусціць Ultimate Multisite ведаць, што не трэба збіраць падаткі з гэтага прадукту.

## Падтрымка VAT Еўропы

Як і раней гаварылася, у нас ёсць add-on для кліентаў у ЕС, якія маюць дадатковыя патрабаванні з-за рэгламентацыі VAT Еўропы.

Нашы інструменты VAT дапамагаюць з некалькі важных рэчаў:

*   Лёгкае загружання падатковых ста{:rate} ЕС;
*   Збор і праверка номера VAT — і механізм зваротнага падатку для суб'ектў, якія вальна падаткова ўжывальнікі (такія як кампаніі з валіднамі номерамі VAT);

Каб ўсталяваць гэты add-on, зайдзіце ў **Ultimate Multisite > Settings**, а потым націсніце на спасылку ў боковым меню **Check our Add-ons**.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Вас перанакіруе на нашу старонку аддоткаў. Там вы можаце знайсці **Ultimate Multisite VAT add-on** і ўсталяваць яго.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Затым, зайдзіце ў **Network Admin > Plugins** і актывуйце гэты add-on на ўсім сетцы.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Калі вы вернёцеся на **Tax Settings tab**, вы ўбачыце новыя магчымасці. Пераключыце пераключальнік **Enable VAT Support**, каб актывуваць новыя інструменты VAT. Не забывайце **захаваць** свае настройкі!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Загрузка падатковых ста{:rate} VAT

Адной з функцый, якія дадае наша інтэграцыя, з'яўляецца магчымасць загружаць падатковыя ста{:rate} для дзяржаў-членаў ЕС. Гэта можна зрабіць, наведаўшы старонку рэдактара падатковых ста{:rate} пасля ўкрэслівання падтрымкі VAT ЕС.

Унізе на старонцы вы ўбачыце магчымасці загрузкі VAT. Выбар тыпу ста{:rate} і націску на кнопку **Update EU VAT Rates** загрузіць і аўтаматычна зафармуе ў праборнік падатковыя ста{:rate} для кожнай дзяржавы-членаў ЕС. Пасля гэтага вам трэба толькі захаваць.

![Update EU VAT Rates button at the bottom of the tax rates editor](/img/config/tax-rates-vat-pull.png)

Вы таксама можаце рэдагаваць значэнні пасля іх загрузкі. Для гэтага проста рэдагаруйце пацёртку ў праборні, якую вам трэба, і націсніце, каб захаваць новыя значэнні.

### Праверка VAT

Калі ўкрэслена падтрымка VAT, Ultimate Multisite дадасць дадатковае поле ў форму кассы, пад паляй адрасы для выстаўлення рахункаў. Гэта поле будзе бачна толькі для кліентаў, якія знаходзяцца ў ЕС.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Затым Ultimate Multisite праверыць Номер VAT, і калі ён будзе спаўдалены як валідна, будзе прымянены механізм зваротнага падатку, і падатковая ста{:rate} будзе ўсталена на 0% для гэтага замовы.
