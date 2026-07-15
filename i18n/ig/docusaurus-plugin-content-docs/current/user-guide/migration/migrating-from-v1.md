---
title: Mụrụ n'ụ V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migrating from V1

## Ultimate Multisite dijiye n'ụrụ na ebe 1.x family nke releases ya ọ bụ 2.x family of releases. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Ultimate Multisite version 2.0 and up bụ ịgbanwe (rewrite) code-base ọ bụ la, nke ahịichị dị n'ime version ọ bụla a na version ọhụrụ. Oge n'ụzọ ahụ, ọ bụ ihe ọma dị n'etiti version ọ bụla a na ọhụrụ. Maka nchekwa nke ahụ, mgbe ị chọpụta (upgrading) n'ime 1.x zu 2.x, ị ga-agbanwe data gị n'ụzọ ndị ọhụrụ nwere ike ịghọta.

Nche, Ultimate Multisite 2.0+ **nwere migrator** dị n'ime core nke abụghị ịghọta data n'ime version ọ bụla a na ịgba ya n'ụzọ ọhụrụ. Migrasyon a na-eme mgbe **Setup Wizard** nke version 2.0+.

Nle a gbasara ihe migrator ahụ na ọ dị n'aka anọ n'ebe ọ bụrụ na ewu, na ọ dị n'ime ịgba ihe ndị dị n'etiti wannan nkwarịta ahụ.

_**IMPORTANT: Ma ọ bụrụ na ị  ọ bụghị abụghị ịgba chọpụta (backup) database site gị mgbe ị chọpụta n'ime version 1.x zu version 2.0, biko jikọta nke ahụ.**_

## Ihe ndị dị n'etiti {#first-steps}

Ihe ọkụ dị bụ ịgba file .zip na install version 2.0 ọrụ gị n'ime dashboard admin network-nwa gị.

Ọ bụrụ na ị [install and activate version 2.0](../getting-started/installing-ultimate-multisite.md), anọchịta ahụ ga-agba ihe dị n'ime Multisite gị na-ere n'ime version ọ bụla a na ị ga-ekwu ihe ndị a n'ebe ọkụ nke plugin ahụ.

_**NOTE:** Ma ọ bụrụ na ị nwere Ultimate Multisite 1.x n'ime Multisite gị, ị ga-anọchịta ike ịgba plugin ahụ n'ime version ị vừaere. Biko, jikọta site na **Replace current with uploaded**._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

Nẹpa trang a ga-akọ ka ị chọrọ add-ons ndị ọzọ (legacy) ị nwere na version 1.x. Oga ji leme gị ihe ị chọrọ, bụ ma version ị nwere ahụ dị mma pụrụ ị nwere na version 2.0, ma ọ bụ ka ị chọrọ ịse version add-on ahụ nke aịghị mụrụ (upgraded) onwe ya n'akaa migration ahụ.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Ọ bụrụ na ị chọrọ ịgba ọsọ, ị ga-akọ button a nke na-azụta **Visit the Installer to finish the upgrade**.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Ọ ga-akọ ka ọ ga nọ n'ere gị trang installation wizard ahụ na ihe ndị nwere ike ịgba ọsọ. Ị ga-akọ **Get Started** ka ị chọrọ ịgụ akụkọ ahụ.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Ọ bụrụ na ị chọrọ ịgba ọsọ, ọ ga-akọ ka ọ ga nọ n'ere gị Pre-install Checks_._ A ga-akọ ihe nwere ike ịle gị System Information ahụ na WordPress installation ahụ ma ọ bụ ka ọ dị mma agbaje **Ultimate Multisite's requirements**.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Ihe ndị daalọọ bụ ịgba key license Ultimate Multisite ahụ ma ị chọrọ ịgbakọ plugin ahụ. Oge a ga-arụ ọrụ na ihe niile, onye nwere ike ịle gị add-ons ahụ, dị ka features ndị ọzọ, na site gị.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Ọ bụrụ na ị chọrọ ịgba key ahụ, ị ga-akọ **Agree & Activate**.

Ọ bụrụ na ịgbakọ license ahụ, ị nwere ike ịgụ ọrụ installation a by anya ma ọ bụ ka ị chọrọ ịgba ọsọ site **Install** na trang tupu. Oge a ga-arụ ihe ndị dị mma na database nke a dị mma pụtara version 2.0 ịrụ ọrụ.

## Bây giờ, di migração (Now, the migration) {#now-the-migration}

Migrator-nya na-built-in safety feature. E ji ga ọchị ọchị n'aka mme check your entire multisite make sure say all your Ultimate Multisite data can be migrated without any issues. Click the **Run Check** button to start the process.

### Na Oge Error (With Error) {#with-error}

Ọ bụrụ na ị chọta error message, ị ga-agba aka team support anyị so they fit help you fix the error. Make sure ị **provide the error log** when you create a ticket. You can download the log or you can click the link that says contact our support team. It will open the help widget on the right-hand side of your page with the fields pre-populated for you that include the error logs under the description.

_**Since the system found an error, you won't be able to proceed to migrate to version 2.0. You can then roll back to version 1.x to resume running your network until the error is fixed.**_

### Na Oge Error (Without Error) {#without-error}

Ọ bụrụ na system ahụ la m nchekị anyị, ị ga-chọta success message and a **Migrate** button at the bottom that will allow you to proceed with the migration. On this page, they go remind you create a backup of your database before moving forward, which we strongly recommend. Hit **Migrate** if you already have a backup.

And this is all it takes!

Ka ozi ịgụbere na ị nwere ihe ndị ọzọ na network Enugu, ma ọ bụ bế cái nọ và bắt đầu đi qua menu phiên bản 2.0 của Ultimate Multisite và giao diện mới của nó. Cứ thử xem sao nhé.
