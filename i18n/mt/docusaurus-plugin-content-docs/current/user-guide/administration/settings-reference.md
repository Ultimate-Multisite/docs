---
title: Referenza tas-settings
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Referenza tas-Settings

Din il-paġna ssegwi settings li jaffettwaw l-amministrazzjoni ta’ kuljum u bidliet reċenti fl-imġiba f’Ultimate Multisite.

## Għażliet Oħra

Iż-żona **Għażliet Oħra** tidher taħt **Ultimate Multisite > Settings > Login & Registration**.

| Setting | Deskrizzjoni |
|---|---|
| **Enable Jumper** | Turi l-għodda ta’ navigazzjoni rapida Jumper fiż-żona tal-amministratur. Użaha biex taqbeż direttament għall-iskrins ta’ Ultimate Multisite, oġġetti tan-network, u destinazzjonijiet tal-amministratur appoġġjati. Iddiżattivaha jekk ma tridx li dan is-shortcut ikun viżibbli. |

## Rappurtar ta’ żbalji u telemetrija

Is-setting preċedenti ta’ opt-in għar-rappurtar ta’ żbalji tneħħa mill-paġna tas-settings. It-telemetrija anonima hija ddiżattivata u m’hemm l-ebda toggle tal-UI biex tattivaha.

Jekk iżżomm runbooks interni jew screenshots għall-paġna tas-settings, neħħi referenzi għall-field il-qadim ta’ opt-in għar-rappurtar ta’ żbalji sabiex l-amministraturi ma jfittxux setting li m’għadux preżenti.

## Settings ta’ Import/Export

It-tab tas-settings **Import/Export** tiddeskrivi liema settings tikkontrolla u torbot direttament ma’ **Ultimate Multisite > Site Export** għall-arkivji tas-sit u tan-network. Uża t-tab tas-settings għall-konfigurazzjoni ta’ import/export, uża **Tools > Export & Import** għall-workflow ta’ esportazzjoni/importazzjoni għal sit wieħed, u uża l-għodda Site Export meta jkollok bżonn arkivju sħiħ ta’ Network Export.

## Twissija dwar il-bilanċ ta’ Domain Seller HostAfrica

Meta l-addon Domain Seller ikun imqabbad ma’ HostAfrica, l-amministraturi tan-network issa jaraw twissija li tista’ titwarrab dwar bilanċ baxx meta l-bilanċ tal-account tar-reseller ikun baxx wisq għal proċessar affidabbli ta’ reġistrazzjoni jew tiġdid ta’ domains.

Ittratta dan l-avviż bħala twissija operattiva: żid il-bilanċ tar-reseller HostAfrica qabel ma taċċetta aktar reġistrazzjonijiet ta’ domains imħallsa, imbagħad erġa’ lura għas-settings ta’ Domain Seller jew għall-iskrin tal-monitoraġġ tad-domains biex tikkonferma li r-reġistrazzjonijiet u t-tiġdid jistgħu jkomplu b’mod normali.

## Settings tal-connectors tal-fornituri tal-AI

Is-settings tal-connectors tal-fornituri tal-AI issa jesponu biss il-pools ta’ accounts OAuth appoġġjati:

| Fornitur | Fluss tas-setup |
|---|---|
| **Anthropic Max** | Qabbad account wieħed jew aktar ta’ Anthropic Max bil-buttuna OAuth. Uża l-fallback manwali ta’ OAuth meta browser sandboxed ma jkunx jista’ jtemm ir-redirect awtomatikament. |
| **OpenAI ChatGPT/Codex** | Qabbad accounts ta’ ChatGPT permezz tal-istess workflow tal-pool OAuth. Operazzjonijiet appoġġjati mill-connector jistgħu jużaw sejħiet tal-għodda ChatGPT Codex wara li l-account ikun imqabbad. |
| **Google AI Pro** | Qabbad accounts ta’ Google AI Pro permezz ta’ OAuth, imbagħad aġġorna l-connector jekk il-lista tal-accounts ma tiġġeddidx minnufih. |

Cursor Pro m’għadux fornituri appoġġjat. Neħħi screenshots interni qodma, runbooks, jew passi ta’ onboarding li jsemmu fields tas-setup ta’ Cursor Pro jew paths tal-connector.

Meta żżid jew tneħħi accounts tal-fornituri, daħħal indirizz tal-email validu għall-account li qed jiġi aġġornat jew imħassar u ssejvja s-settings tal-fornitur qabel ma tittestja operazzjonijiet appoġġjati mill-connector.
