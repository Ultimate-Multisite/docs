---
title: Kutanga kuV1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Kuuta ku V1 {#migrating-from-v1}

## Ultimate Multisite yakagadzirwa kubva kune familia ya chidzidzo chechinhu 1.x kune familia ya chidzidzo chechinhu 2.x. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Ultimate Multisite ndiyo inengei reweka nguva dzose, uye version 2.0 na kupfuura inengei rekugadzirwa kubva, zvichipa nzira yekuita (rewrite) yakare, izviro chinobva kune chero chero chekuti kuna version ya dzamba 1.x neya 2.x, kunenge kuonekwa zvakasiyana pane zvinhu zviri kugara. Nekuti izviro zvakasiyana, kana uchigadzirisa kubva kune 1.x kuita kubva kune 2.x, zvinhu dzako dzinogona kuendesa (data) dzinofanira kuenda mu chine chinogona kunzwisisa (format) kuti version dzine 2.x dzinogone kuziva.

Kuti zvinhu zvakaita izviro, Ultimate Multisite 2.0+ **inengei inengei ne migrator** inotanga kune core inosimbisa (built into the core) inogona kuona data kubva kuna version ya dzamba yakare uye inogona kuya mu chine chinobva kunoita (convert) kuti chine chinobva. Izviro inengei inengei inengei ne migrator iyi inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei inengei in

Ipeji ipapo iye itaurisa kuti uone zvinhu zvinogona kuva vashandi (legacy add-ons) zvako zvakaita neversion 1.x. Izviro dzinotaurisa kuti version inoshandiswa inoshanda nekubatsira kana uchida kuita upgrade ya add-on apo.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Ngekuva unenge uya kuteerera, unogona kukutanga button inosvika **Visit the Installer to finish the upgrade**.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Panguva iye, itaurisa ku page ya installation wizard nekuita zvinhu zvakare. Unofanira kuteerera **Get Started** kuti uende ku page yechipiro chekare.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Panguva uita **Get Started**, itaurisa ku Pre-install Checks_._ Izviro dzinotaurisa zvinhu zvinogona kubatsira (System Information) uye WordPress installation yako, uye dzokutaurisa kuti inoshanda zvinhu zvinodzidzwa neUltimate Multisite.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Chii chii chii chinotaurisa kuti uingise license key ya Ultimate Multisite uye utange plugin. Izviro dzinotaurisa kuti zvose zvinhu, kuongeza (add-ons) nekuita zvinogona kuva vashandi, zvichakwanisa kuva pamwe nesite yako.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Panguva uingise key yako, ungaita **Agree & Activate**.

Panguva utange activation ya license, unogona kuita installation yakanaka nekutanga kukutanga **Install** pa page inotaurisa. Izviro dzinogona kuita zvinhu zvinodzidzwa nedatabase dzine kudzidzwa (database) dzine kudzidzwa kuti version 2.0 itaurise.

## Ndizvo, migrasheni {#first-steps}

Ino migrator inenge ne feature ya kuenda neusoro (safety feature) inosimbisa kuti inocheka nzira yose ye multisite yako kuti inenge ikumbatsira kuitira migration chete. Chibvumire button **Run Check** kuti uanže prosesi iye.

Nachikumbira check, unenge uri nechimwe chii: zvinhu zvinogona kuva **ne error** kana **zvisingazvi kuva neerror**.

### Ne Error {#now-the-migration}

Kana uchida kuona message ya error, unofanira kutaura nemakwanisa edu (support team) kuti vaveine kugona kukubatsira kuenda neerror iye. Zviona kuti uyu **provide the error log** kana uchigadzira ticket. Unogona ku download log kana ukapfiri link inosimbisa "contact our support team". Izvirozo izo dzachivhara help widget pamusoro wepage yako nemazwi anowanikwa (fields) akaita kuti zvinhu zvakakosha, uye error logs zvinotanga pangu neongororo.

_**Chiti: Kana nzira inaziva error, haunozvova kuenda kuitira migration chete kune version 2.0. Unogona kuenda kuremu (roll back) kune version 1.x kuti uende kunge ungarura network yako pansi sezvinenge zvinhu zvinotanga kubva neerror.**_

### Usina Error {#with-error}

Kana nzira inaziva kuti haona error, ungaona message ya success uye button **Migrate** pamusoro yechiitiko chiri mupfupi (bottom). Iyi button inozovaka kuenda nemigration. Pamushuru wepage iye, uingwa kuti utanga backup yakanzvimbo yako (database) pangu nedzidzo rine kudzidzisa (strongly recommend), uye unogona kuita iye kana uine backup. Chibvumire **Migrate** kana uine backup.

Iyi ndiyo nzira yakakosha!

Ungava kuende kuenda neWizard setup kuti uupde logo yako uye zvinhu zvakasiyana-nyanya pamweya wako kana kune network yako, kana kuti utange kuenda kuona menu yakare ya Ultimate Multisite version 2.0 uye interface yake yakare. Chii chiri chinokosha, tanga kuenda nekuvuda!
