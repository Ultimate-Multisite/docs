---
title: Fifi Ultimate Multisite sori ẹrọ
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Fifi Ultimate Multisite sori ẹrọ {#installing-ultimate-multisite}

:::note
Ẹ̀kọ́ yìí ro pé o ti fi WordPress Multisite sori ẹrọ tẹ́lẹ̀, o sì ti ṣètò rẹ̀. Láti kọ́ bí a ṣe ń ṣe é, wo [ẹ̀kọ́ yìí](https://www.wpbeginner.com/glossary/multisite/) láti ọwọ́ WP Beginner.
:::

## Fifi Plugin sori ẹrọ {#installing-the-plugin}

Ultimate Multisite wà ní ọ̀fẹ́ lórí [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Láti **Network Admin Dashboard** rẹ, lọ sí **Plugins → Add New Plugin**.

![Ojú-ìwé Network Admin Add New Plugin](/img/installation/add-new-plugin.png)

Wá **"Ultimate Multisite"** (pẹ̀lú àmì àyọkà fún ìbáramu gangan) yóò sì farahàn gẹ́gẹ́ bí èsì àkọ́kọ́. Tẹ **Install Now**.

![Àwọn èsì ìwádìí tí ń fi Ultimate Multisite hàn](/img/installation/search-ultimate-multisite.png)

Nígbà tí a bá ti fi í sori ẹrọ, tẹ **Network Activate** láti mú plugin náà ṣiṣẹ́ ká gbogbo nẹ́tíwọ́ọ̀kì rẹ.

![Plugin tí a ti fi sori ẹrọ pẹ̀lú bọ́tìnì Network Activate](/img/installation/plugin-installed.png)

Lẹ́yìn ìmúṣiṣẹ́, a ó darí rẹ laifọwọyi padà sí Setup Wizard.

![Plugin tí a ti mú ṣiṣẹ́ tí a sì darí padà sí wizard](/img/installation/plugin-activated.png)

## Setup Wizard {#setup-wizard}

Setup Wizard yóò tọ́ ọ sọ́nà ní ṣíṣe àtòpọ̀ Ultimate Multisite ní nǹkan bí ìṣẹ́jú mẹ́wàá.

### Káàbọ̀ {#welcome}

Tẹ **Get Started** láti bẹ̀rẹ̀.

![Ojú ìbẹ̀rẹ̀ Setup Wizard](/img/installation/wizard-welcome.png)

### Àwọn Àyẹ̀wò Ṣáájú Fifi Sori Ẹrọ {#pre-install-checks}

Ìgbésẹ̀ yìí ń ṣàyẹ̀wò ìwífún eto rẹ àti fifi WordPress sori ẹrọ láti rí dájú pé ó bá àwọn ohun tí Ultimate Multisite nílò mu. Tí ohun gbogbo bá dáa, tẹ **Go to the Next Step**.

![Àwọn àyẹ̀wò ṣáájú fifi sori ẹrọ tí ń fi àwọn àìní eto hàn](/img/installation/wizard-pre-install-checks.png)

:::note Bọ́tìnì Network Activate (v2.6.1+)
Tí a bá ti fi Ultimate Multisite sori ẹrọ ṣùgbọ́n **a kò tíì ṣe network-activate rẹ** — fún àpẹẹrẹ, tí o bá tẹ **Activate** (ojúlé kan ṣoṣo) dípò **Network Activate** láti ojú ìbojú plugins nẹ́tíwọ́ọ̀kì — ìgbésẹ̀ Àwọn Àyẹ̀wò Ṣáájú Fifi Sori Ẹrọ yóò rí èyí, yóò sì fi bọ́tìnì **Network Activate** hàn.

Títẹ **Network Activate** máa ń mú plugin náà ṣiṣẹ́ ká gbogbo nẹ́tíwọ́ọ̀kì multisite rẹ laifọwọyi. Nígbà tí a bá ti mú un ṣiṣẹ́, wizard náà máa tẹ̀síwájú bí ó ti yẹ sí ìgbésẹ̀ fifi sori ẹrọ. O kò nílò láti kúrò nínú wizard láti tún ipò ìmúṣiṣẹ́ náà ṣe.
:::

### Fifi sori ẹrọ {#installation}

Olùfi-sori-ẹrọ yóò dá àwọn tábìlì database tó yẹ sílẹ̀, yóò sì fi fáìlì `sunrise.php` sori ẹrọ, èyí tí Ultimate Multisite nílò láti ṣiṣẹ́. Tẹ **Install** láti tẹ̀síwájú.

![Ìgbésẹ̀ fifi sori ẹrọ tí ń fi àwọn tábìlì database àti sunrise.php hàn](/img/installation/wizard-installation.png)

### Ilé-iṣẹ́ Rẹ {#your-company}

Kún ìwífún ilé-iṣẹ́ rẹ, kí o sì ṣètò owó aiyipada rẹ. A ó máa lo ìwífún yìí jálẹ̀ pẹpẹ WaaS rẹ. Tẹ **Continue** nígbà tí o bá parí.

![Ìgbésẹ̀ àtòpọ̀ Ilé-iṣẹ́ Rẹ](/img/installation/wizard-your-company.png)

### Àkóónú Aiyipada {#default-content}

Ìgbésẹ̀ yìí jẹ́ kí o fi àwọn àdàkọ, àwọn ọja, àti àkóónú ìbẹ̀rẹ̀ mìíràn tí a ti ṣàtòjọ sílẹ̀ sori ẹrọ. Èyí jẹ́ ọ̀nà tó dára láti mọ àwọn ẹ̀yà ara Ultimate Multisite. Tẹ **Install** láti fi àkóónú aiyipada kún un, tàbí fo ìgbésẹ̀ yìí tí o bá fẹ́ bẹ̀rẹ̀ láti ìbẹ̀rẹ̀ pátápátá.

![Ìgbésẹ̀ fifi àkóónú aiyipada sori ẹrọ](/img/installation/wizard-default-content.png)

### Àwọn Plugin Tí A Dábàá {#recommended-plugins}

Fi àwọn plugin alábàákẹ́gbẹ́ tí a dábàá sori ẹrọ bí o bá fẹ́. Tẹ **Install** láti fi wọ́n kún un tàbí fo o láti tẹ̀síwájú.

![Ìgbésẹ̀ àwọn plugin tí a dábàá](/img/installation/wizard-recommended-plugins.png)

### Ó ti Ṣetán! {#ready}

Ìyẹn ni! Fifi Ultimate Multisite rẹ sori ẹrọ ti parí. O lè bẹ̀rẹ̀ sí í kọ pẹpẹ Website as a Service rẹ báyìí láti **Network Admin Dashboard**.

![Ìṣètò ti parí - Ojú ìbojú Ready](/img/installation/wizard-ready.png)

![Network Admin Dashboard pẹ̀lú Ultimate Multisite tó ń ṣiṣẹ́](/img/installation/network-dashboard.png)

Tẹ̀síwájú, kí o sì gbádùn díẹ̀!
