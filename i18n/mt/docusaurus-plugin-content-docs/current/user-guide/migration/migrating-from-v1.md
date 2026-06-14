---
title: Migrazzja min V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migrazz tal-V1

## Ultimate Multisite għandu mħolq mill-famija orizzontali biex jkun 1.x għall-famija ta l-rilizzijiet 2.x.

Il-versjoni 2.0 u aktar ta' Ultimate Multisite hija rilett tal-kod bażil, li jampel biex jgħid li hemm ħafna ħejja bejn il-versjoni qadira u l-ġdida. Għal peress dan, meta tgħmli upgrade min 1.x għal 2.x, il-data tiegħek għandha titlob biex titbiegħ lil format li l-버żjonijiet ġodda tistgħu tfihmu.

Fortunat, Ultimate Multisite 2.0+ **tkompli ma jista' (comes with a migrator)** mhux integrat f'il-core li huwa qabel biex jitdetect il-data mill-버żjoni qadira u jgħidha għal format ġdid. Il-migrazzjon dan jiġi applikat durante l-**Setup Wizard** ta' versjoni 2.0+.

Dan l-lezzjoni tikkawża kif jservu il-migrator, x'inqasla għall-każijiet tal-fajla (failure), u kif tista' tgħmli troubleshooting biex tiġi żviluppat xi problemi li jistgħu jiġu evidenti durant dan il-proċess.

_**IMPORTANTI: Qabel ma tibda l-upgrade min versjoni 1.x għal versjoni 2.0, jkun importanti li tista' tikkunsidix backup tal-database tal-sajt tiegħek**_

## Epilji ewliem

Il-epilji ewliem huwa li tgħmli download tal-file .zip tal-plugin u tinstalla l-versjoni 2.0 fuq dashboard il-admin tal-network tiegħek.

Wara ma [tinstalla u tagħmel aktiva l-versjoni 2.0](../getting-started/installing-ultimate-multisite.md), is-sistema tistabli awtomatik li l-Multisite tiegħek qed jservu fuq il-버żjoni legacy u tista' tara dan l-messa fuq l-pajs bl-plugin.

_**NOTA:** Jekk għandek Ultimate Multisite 1.x installat fuq il-Multisite tiegħek, tkun għandek l-opzione biex tiġi sostitwija il-plugin bel versjoni li qed tmur download. Jekk jogħġbok, għinnikla u tikkli għal **Replace current with uploaded**._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

D'pagina seguente ti farà sapere quali add-ons legacy (vjers antichi) għandek installati mal-versjoni 1.x. Fejn tkun il-istruzzjonijiet kif jekk il-versjoni li qed tiffaħqil qed tkun kumpatibbli mal-versjoni 2.0 jew se għandek installa versjoni innejjha tal-add-on dopo l-migrazzjoni.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Mda tkun pronti li tmur avanti, tista' tikkliq il-botton li jgħid **Visit the Installer to finish the upgrade**.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Immenso, se jġibkixx lejn l-pagina tal-wizard ta l-installazzjoni mal-msgħaġġamenti ta benzin. Għandek biss tikkliq **Get Started** biex tmur għall-pagina prossma.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Dopo li tikkliq **Get Started**, se jreidirek lejn Pre-install Checks_._ Dan se juri lik informazzjoni fuq il-Sistema tiegħek u l-installazzjoni ta WordPress u jgħidlik se tiġi kumplu bix **Ultimate Multisite's requirements**.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Il-pass prossimu huwa li ti tikkri l-chiave tal-licenza (license key) ta Ultimate Multisite u attiva l-plugin. Dan se jassigurah li kull feature, inkluż add-ons, tkun disponibbli fuq sitk.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Dopo li ti tikkri l-chiave tiegħek, tikkliq **Agree & Activate**.

Dopo l-attivazzjoni tal-licenza, tista' tibda l-installazzjoni effettiva biex tikkliq **Install** fuq il-pagina prossma. Dan se jikunċċa automaticamente l-file u il-database li għandek biex versjoni 2.0 tiffaħaqil.

## Illa l-migrazzjoni

Il-migrator għandu feature ta sigurtà integrata li jikkontrolla l-multisite kollu tiegħek biex jiġi assiguratu li ma tistaqsi xieħa data tal-Ultimate Multisite. Klikja fuq buttan **Run Check** biex tibda il-proċess.

Wara li tgħmli l-check, għandek żgħar possibilita: il-risultatu jista' jkun **ma'** famsu jew **ma'** famsu.

### Ma' Famsu (With Error)

Jekk tibqa' b'messaġġ ta famsu, għandek li titħalli l-support tagħna biex jgħinlek biex tfixxi l-error. Assigurah li **tfornis il-error log** meta tgħmli ticket. Tista' tnedix il-log jew tikkliq is-link li jgħid "contact our support team". Jidherha l-widget ta help fuq il-mejju tagħha tal-laqgħa mal-latajn, u għandek field pre-populati li jinkludu l-error logs sotto d-deskrizzjoni.

_**Jekk is-sistema telfa famsu, ma tista'x tmur għall-migrazzjoni għall-versjoni 2.0. Immen l-meħtieġ, tista' tirrolli għall-versjoni 1.x biex tkompli t-qiegħed tal-network tiegħek fin li l-error jitfixxet.**_

### Ma' Famsu (Without Error)

Jekk is-sistema ma telfa xieħa famsu, tibqa' b'messaġġ ta ħsaru u buttan **Migrate** fuq il-bottom li jippermeni ليك tmur għall-migrazzjoni. Fuq dan l-paġna, tinfajmati biex tgħmli backup tal-database qabel ma tkompli, u nħassu li għandu jkun it-tħejja. Iċċekkja **Migrate** jekk għandek backup.

U dan huwa kollhu li għandek!

Tista kontinwi biex tservi l-Wizard setup biex t aggiorna il logġogħ tiegħek u altri aspetti fuq la rete tiegħek, jew tibda navigà f'menu u interfaccia tal-versjoni 2.0 ta Ultimate Multisite. Id-għandek l-opportunità biex tfarxi xi divertenza!
