---
title: Àwọn Snippets GitHub
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Bí o ṣe lè lo àwọn snippet Ultimate Multisite lórí repository GitHub wa {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

Àwọn snippet code wà nínú repository GitHub tí àwọn oníṣe Ultimate Multisite máa ń béèrè fún léraléra, tí wọ́n fẹ́ fi àwọn iṣẹ́ kéékèèké kún un bí fífi script Google Analytics sí àwọn ojúewé ìforúkọsílẹ̀ tàbí fífi meta box pamọ́ kúrò ní dashboard admin.

Àpilẹ̀kọ yìí yóò fi hàn ọ bí o ṣe lè lò wọ́n tàbí ní pàtó jù lọ ibi tí o yẹ kí o fi àwọn code wọ̀nyí sí.

O lè rí àwọn snippet náà lórí link tó wà nísàlẹ̀.

https://github.com/next-press/wp-ultimo-snippets/

Ọ̀nà 2 ló wà fún ọ láti fi code náà kún un

  1. Lórí fáìlì functions.php ti theme rẹ.

  2. Must-Use Plugins (mu-plugins)

# Bí o ṣe lè fi snippet náà kún fáìlì functions.php ti theme rẹ. {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  1. Wọlé sí dashboard admin WordPress Network rẹ kí o sì lọ sí Themes >Theme Editor (Wo screenshot nísàlẹ̀).

  2. Lórí ojúewé "Edit Themes", rí i dájú pé o ti yan theme tó ń ṣiṣẹ́ lórí dropdown field tó wà ní apá ọ̀tún òkè iboju rẹ (#3 lórí screenshot nísàlẹ̀).

  3. Tẹ fáìlì functions.php lábẹ́ abala "Theme Files" láti load fáìlì náà. Yi lọ sísàlẹ̀ ní ìsàlẹ̀, kí o sì lẹ snippet Ultimate Multisite tí o gba láti repository GitHub mọ́ ibẹ̀.

<!-- Screenshot unavailable: Theme Editor WordPress tó ń fi àtúnṣe fáìlì functions.php hàn -->

# Bí o ṣe lè ṣẹ̀dá Must-Use Plugins (mu-plugins) {#how-to-create-must-use-plugins-mu-plugins}

WordPress ní ẹya kan tó jẹ́ kí o load iṣẹ́ àdáni tí a ń pè ní "Must-Use Plugins", tàbí "mu-plugins" ní kúkúrú.

Àwọn mu-plugins pàtàkì wọ̀nyí ni a máa ń load ṣáájú gbogbo àwọn plugin deede míì, wọ́n kò sì lè jẹ́ deactivated. Nínú network multisite, code nínú àwọn mu-plugins wọ̀nyí yóò jẹ́ loaded lórí gbogbo àwọn site nínú ìfisílẹ̀ rẹ.

1\. Lo FTP tàbí SSH láti wọle sí filesystem ti WordPress install rẹ.

2\. Nínú directory wp-content ti WordPress install rẹ, ṣẹ̀dá directory tuntun tí orúkọ rẹ jẹ́: mu-plugins.

<!-- Screenshot unavailable: Olùṣàkóso fáìlì tó ń fi directory wp-content hàn pẹ̀lú folder mu-plugins -->

3\. Ṣẹ̀dá fáìlì PHP tuntun lórí computer rẹ tí orúkọ rẹ jẹ́ wu-snippet.php ní lílo Notepad tàbí code editor èyíkéyìí.

4\. Fi snippet code Ultimate Multisite tí o gba láti repository GitHub sínú fáìlì náà kí o sì save rẹ. O tún lè fi code yìí sí òkè snippet code náà láti fi ààmì sí mu plugin rẹ.
