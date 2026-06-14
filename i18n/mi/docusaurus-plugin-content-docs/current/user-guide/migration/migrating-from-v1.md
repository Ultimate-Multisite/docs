---
title: Te whaihi i te V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migrating mō V1

## He whakahoki o Ultimate Multisite ihi no whānau 1.x ki te whānau 2.x o whakahoki

He whakatika nui e tino whakamarama ana ko he whakawhiti o Ultimate Multisite mai i te whānau 1.x o ngā whakahoki i runga i te whānau 2.x.

Ko te Ultimate Multisite version 2.0 me pai ake he whakaawhatanga paku (complete rewrite) o te codebase, ahau te mea e tino kaha ana ko he tino kaha te whakawhiti i waenga i te whānau luma me te whānau hou. I tēnei wā, i roto i te whakahoki mai i 1.x ki 2.x, ka taea te whai whakaaro ana ko ka taea eke ai i ngā data ki te format he tino whakamārama ai e ngā whakahoki hou.

He mea nui, ko Ultimate Multisite 2.0+ **heke ana me heke ana i te core** (comes with a migrator) he kaha ki te mōhaka i ngā data mai i te whānau luma me te whakawhiti i te format hou. Ka tōtōtō tēnei whakahoki i te **Setup Wizard** o version 2.0+.

Ko tēnei pūrongo e whakatipu ana i te mahi a te migrator, ko te mea hei whakamahinga i roto i ngā wākehe o te pēto (cases of failure), me te waiata i ngā mea e taea te whakahau (troubleshoot) he tino pai ai i te mahi i tēnei whakataunga.

_**TŪPŪA: I roto i te whakatika mai i version 1.x ki version 2.0, kia kore koe i te whakamārama ana ko ka taea e koe te whakamaoritia (create a backup) o te database o tō site.**_

## Ngā mahi tīmatanga

Ko te mahi tīmatanga he te whai noho i te file .zip o te plugin me te whakauru i version 2.0 i runga i tō network admin dashboard.

I taiao koe [install and activate version 2.0](../getting-started/installing-ultimate-multisite.md), ka mōhaka ai te system ana ko he running ehua legacy (legacy version) ko tō Multisite, me ka whakaatu i tēnei message i te pirau o te plugin page.

_**TŪPŪA: Ko koe e hara Ultimate Multisite 1.x i runga i tō Multisite, ka hou koe i te option hei whakamaoritia (replace) te plugin ki te version he tino whai noho ana koe.**_

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

I te puta no koe i te puta no koe i te mea e hoki mai ana i te legacy add-ons (add-ons purine) he tino nui, me te vērā 1.x. Ka hou ia ngā whakamārama mō ā te vērā e roto i te vao e roto i te whakahou, me te whakaahuatanga mō te mea e hiahia ana koe ki te whakahou i te add-on e taea ana i te migration (whakaora).

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

I te wā kua e noa koe ki te whakatika, ka taea e koe te whakatipu i te button e hoki mai ana ki te installer mō te whakamua o te whakahou.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Ka whakawhanake ia atu i a koe ki te puta o te whakatau (wizard) installation me ngā pēpi whakamohana. Ka hiahia koe ki te whakatipu i **Get Started** kia whai i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta no koe i te puta

## I te whakawhiti (Migration)

He mea tino nui, he heta āhua ana i te migrator. Ka whakachi i te whakamārama ana ia he mea amanāhui āhua ana, ko ka whakačaka i te multisite katoa mo te whakapūmau ana kua e taea ai te whakawhiti i ngā data o Ultimate Multisite katoa i roto i te mea eke ana atu ki te whakamahinga. Whakawatea i te pilisi **Run Check** kia tīmata i te mahi.

Moana i te whakačaka, he hai pōwhiri mo koe: ka taea te whai i te result he **mā** error he **kāore** i hoatu error.

### Mā Error

Ko te mea e hiahia ana koe he tino whai i te whānau mātou i te whakatutuki i te error, kia taea ai ia te tūnga atu ki te whakamōhio i a koe mo te whakaora o te error. Kia tiaki i te **whakaahua log** i roto i te wā e ka puta koe i te ticket. Ka taea e koe te whakahaere i te log he ka whai i te link e hiahia ana ki te whakatutuki i a tātou i te whānau. Ka whakaatu ai ia te widget o tauira i te upoko i te taha, me ngā rohe e pōwhiri mo koe e whai i te error logs i roto i te whakatutuki.

_**Ko i te mea kua mau te system he error, ka taea te whakawhiti ki te version 2.0 koe. Ka taea e koe te whakaora ki te version 1.x kia tīmata i te whakamahi i tō wāhi i roto i te whānau ko te error e whakatutuki.**_

### Kāore i Hoatu Error

Ko i te mea ka āwhi te system he error, ka whakaatu koe i he pōwhiri o te whai, me he pilisi **Migrate** i te pōwhiri i te pōwhiri kia taea ai koe te whakawhiti ki te migrator. Mo tēnei pōwhiri, ka whakatū i a koe mo te whakamahi i te backup o tō database mō te whakaputa i te mahi i te mea he tino whai ana mātou. Whakawatea i **Migrate** ko i roto i te wā e kua mau koe i te backup.

Moana i te whakačaka:

He aha, he tino pai ana ki e kaha ki te whakamahi i te Wizard setup kia whakatau i tō logo me ngā mea hou i tō wāhi. Āwhi, he kaha ki te whakaatu i te menu o tō Ultimate Multisite version 2.0 me te interface hou. Kia kaha, he pēhea koe e pai?
