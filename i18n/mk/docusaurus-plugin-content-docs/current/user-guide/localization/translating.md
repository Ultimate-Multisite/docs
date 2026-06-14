---
title: Преведување на Ultimate Multisite
sidebar_position: 19
_i18n_hash: a433d81386db16579adeb9a60f6af240
---
# Преведување на Ultimate Multisite

Ultimate Multisite е развиен на англиски јазик, но плагинот е целосно преводим и активно го прифаќаме доприносите од преводители.

## Преводи на главниот плагион (Core Plugin Translations)

Главниот Ultimate Multisite плагион се преведува преку официјалната платформа за преводи **WordPress.org**:

**[translate.wordpress.org/projects/wp-plugins/ultimate-multisite/](https://translate.wordpress.org/projects/wp-plugins/ultimate-multisite/)**

Ова е стандардната система за преводи на кумунита на WordPress. Кога преводите достигнаат доволно ниво на одобрување, тие автоматски се дистрибираат на сите корисници на Ultimate Multisite преку ажурирања на плагинот WordPress.

**Навди треба нашата помош!** Ако зборувате јазик друг од англиски, ве молам размислете за допринос со преводи. Дури и преведување на неколку реченици помага. За да започнете:

1. Посетете [translate.wordpress.org](https://translate.wordpress.org/projects/wp-plugins/ultimate-multisite/)
2. Изберете ја вашата јазик
3. Кликнете на „Contribute Translation“ (Допринесување со превод)
4. Ќе ви треба безбеден акаунт на WordPress.org

Ако би сакавте да станете уредник за преводи за вашиот јазик (со способност да одобрувате преводи), контактирајте ги преку [GitHub Discussions](https://github.com/Ultimate-Multisite/ultimate-multisite/discussions).

## Преводи на дополнителни плагиони (Addon Translations)

Преводите на дополнителните плагиони се правиат одделно на:

**[translate.ultimatemultisite.com](https://translate.ultimatemultisite.com/)**

Преводите на дополнителните плагиони во моментот се генерираат со AI како почетна точка. Тие покриваат сите поддржани јазици, но може да содржат неприродно формулирање или неточности. Мислиме дека ќе биде одлично ако ги прегледаат и предложат подобрувања луѓе кои го преведуваат за да ги прават поприродни и точни.

## Локални преводи (Local Translations)

Ако предпочитате да правите преводи локално за свој сопствен проект наместо да допринесувате на основната верзија, има две опции:

### Користење Poedit

Можете да користите десктоп апликацијата **[Poedit](https://poedit.net)** за да ја преведете `.pot` филтот:

1. Преземете Poedit од [poedit.net](https://poedit.net)
2. Отворете го `.pot` филтот од `wp-content/plugins/ultimate-multisite/lang/`
3. Преведете ги текстовите во интерфејсот на Poedit
4. Зачувајте -- Poedit ќе генерира `.po` и `.mo` филтови
5. Ставете ги излезените филтови во папката `lang`

### Користење Loco Translate

Плагинот **[Loco Translate](https://wordpress.org/plugins/loco-translate/)** за WordPress ви овозможува директен превод од административниот панел без потреба од десктоп алатки. Тој го управува со креирање и компилација на преводните филтови за вас.
