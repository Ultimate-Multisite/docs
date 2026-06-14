---
title: Преводим Ultimate Multisite
sidebar_position: 19
_i18n_hash: a433d81386db16579adeb9a60f6af240
---
# Преводи Ultimate Multisite

Ultimate Multisite је развијен на енглеском, али плагин се потпуно преводи и активно смо оДобро долазимо до приступају за преводе.

## Преводи основних плагина (Core Plugin)

Основни Ultimate Multisite плагин се преводи кроз званичну **платформу за превод WordPress.org**:

**[translate.wordpress.org/projects/wp-plugins/ultimate-multisite/](https://translate.wordpress.org/projects/wp-plugins/ultimate-multisite/)**

Ово је стандардни систем за превод у заједници WordPress-а. Када преводи достигну довољну порогну вредност одобрења, они се аутоматски дистрибутирају свим корисницима Ultimate Multisite кроз ажурирање плагина WordPress-а.

**Треба нам ваша помоћ!** Ако говорите језиком другим него енглеским, молим вас размислите о донођењу превода. Чак и превод неколико строга помогает. За почетак:

1. Посетите [translate.wordpress.org](https://translate.wordpress.org/projects/wp-plugins/ultimate-multisite/)
2. Избери језик
3. Кликните на "Contribute Translation" (Донеси превод)
4. Потреба ће вам бесплатни акаунт на WordPress.org

Ако желите да postanete редатич за свој језик (могући одобрење превода), обратите се кроз [GitHub Discussions](https://github.com/Ultimate-Multisite/ultimate-multisite/discussions).

## Преводи додатка (Addon Translations)

Преводи додатка се прелазе одвојено на:

**[translate.ultimatemultisite.com](https://translate.ultimatemultisite.com/)**

Преводи додатка су тренутно генеришени вештачки интелектом као почетна тачка. Они покривају све подржаване језике, али могу садржати незграђене фразе или нетачности. Долази нам помоћ од људских превода речима за преглед и сугестију урадити их природнији и прецизније.

## Локални преводи

Ако жете да креирате преводи локално за свој власних пројекта уместо да доприносите на основну верзију, постоји два начина:

### Коришћење Poedit-а

Можете користити десктоп апликацију **[Poedit](https://poedit.net)** да преведете `.pot` 파일을:

1. Преузмите Poedit са [poedit.net](https://poedit.net)
2. Отвори `.pot` файл из директоријума `wp-content/plugins/ultimate-multisite/lang/`
3. Преведите строке у интерфејсу Poedit-а
4. Сачувај -- Poedit ће генерисати `.po` и `.mo` фајлове
5. Поставите излазни фајлове у фолдер `lang`

### Коришћење Loco Translate

Плагин WordPress **[Loco Translate](https://wordpress.org/plugins/loco-translate/)** омогућава вам да преводите директно из административне панели без потребе за десктоп алатима. Он ће за вас ручно креирати и компилирати преводне фајлове.
