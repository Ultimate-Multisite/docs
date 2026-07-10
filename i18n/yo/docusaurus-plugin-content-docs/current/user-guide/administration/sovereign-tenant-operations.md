---
title: Àwọn Iṣẹ́ Agbatọju Olómìnira
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Ìṣẹ́ Ṣíṣe Oníbùgbé Olóminira {#sovereign-tenant-operations}

Ultimate Multisite: Ìgbépọ̀ Ọ̀pọ̀ Oníbùgbé 1.2.0 ṣàfikún irinṣẹ́ iṣẹ́ ṣiṣe fún àwọn oníbùgbé olóminira: àwọn subsite tí ń ṣiṣẹ́ pẹ̀lú database tiwọn, gbòngbo filesystem, àti routing context tiwọn, nígbà tí wọ́n ṣì ń hàn láti ọ̀dọ̀ network admin.

Lo ojúewé yìí nígbà tí o bá ń ṣàkóso àwọn site oníbàárà tí a yà sọ́tọ̀, fífi remote-site lé ẹlòmíràn lọ́wọ́, tàbí àwọn migration tí ń gbe subsite boṣewa sínú amáyédẹrùn olóminira.

## Ohun tí ó yí padà fún àwọn alábòójútó {#what-changes-for-administrators}

- **Autologin oníbùgbé tí kò ní state** — Àwọn network admin lè ṣàbẹ̀wò sí oníbùgbé olóminira láì gbára lé shared session state tó pẹ́. SSO token náà jẹ́ ti àfojúsùn pàtó, a dì í mọ́ origin, a dáàbò bò ó kúrò ní replay, a sì fi ààlà sí i pẹ̀lú àkókò ìparí kúkúrú.
- **Routing tó mọ olóminira** — Àwọn network tí a yà sọ́tọ̀ tẹ́lẹ̀ àti àwọn oníbùgbé olóminira ń yanju nípasẹ̀ site router path kan náà, ó ń dín ìyàtọ̀ bootstrap kù láàárín àwọn fifi sori ẹrọ àtijọ́ àti tuntun tí a yà sọ́tọ̀.
- **Ipò migration tí a ti jẹ́rìí sí** — Ìjẹ́rìísí migration ń ṣàyẹ̀wò user provisioning, àwọn àṣẹ database writer, ipò queue drain, àti àìsí legacy table kí a tó ka oníbùgbé kan sí pé ó parí.
- **Teardown tó ní ààbò jù** — Sovereign teardown ń yọ àwọn ìwé-ẹ̀rí oníbùgbé kúrò lọ́nà tó mọ́ ní báyìí kí àwọn oníbùgbé tí a ti paarẹ́ má bàa fi ìwọlé database àtijọ́ sílẹ̀.

## Ṣíṣàbẹ̀wò sí oníbùgbé olóminira {#visiting-a-sovereign-tenant}

1. Ṣí **Network Admin > Ultimate Multisite > Sites**.
2. Yan oníbùgbé olóminira náà.
3. Lo **Ṣàbẹ̀wò (SSO)** nígbà tí ó bá wà dípò dídàkọ àwọn ọ̀rọ̀ aṣínà tàbí ṣíṣe àwọn Account admin fún ìgbà díẹ̀.

Ìṣàn ìbẹ̀wò náà ń ṣẹ̀dá login token tó máa pé díẹ̀ fún oníbùgbé yẹn, ó sì ń ṣàkọsílẹ̀ ìṣẹ̀lẹ̀ SSO náà sínú audit trail oníbùgbé. Bí bọ́tìnì náà bá kùnà, ṣàyẹ̀wò pé domain oníbùgbé náà ń yanju sí fifi sori ẹrọ tí a retí àti pé oníbùgbé náà lè dé network-side SSO endpoint.

## Àtòjọ-àyẹ̀wò ìṣẹ́ remote-site {#remote-site-operations-checklist}

Kí o tó yí oníbùgbé olóminira tàbí remote padà, jẹ́rìí sí i pé:

- Domain oníbùgbé náà tọ́ka sí host tí ó ní filesystem oníbùgbé náà.
- Host database oníbùgbé náà bá host binding tí a ṣètò fún fifi sori ẹrọ yẹn mu.
- Àwọn àṣẹ ìjẹ́rìísí migration kọjá fún oníbùgbé náà.
- Àwọn queue migration async ti ṣofo kí o tó ṣe DNS tàbí àwọn ìyípadà ownership.
- A ti pèsè user admin oníbùgbé náà nígbà migration, ó sì lè wọlé nípasẹ̀ SSO.

## Pípa àwọn oníbùgbé olóminira rẹ́ {#deleting-sovereign-tenants}

Pípa oníbùgbé olóminira rẹ́ jẹ́ ìgbésẹ̀ apanirun. Jẹ́rìí sí ipò backup àti export kọ́kọ́, lẹ́yìn náà paarẹ́ láti ojú-ìbòjú ìṣàkóso site. Ìṣàn teardown 1.2.0 ń yọ àwọn ìwé-ẹ̀rí database oníbùgbé kúrò gẹ́gẹ́ bí apá cleanup, ṣùgbọ́n àwọn alábòójútó gbọ́dọ̀ ṣì jẹ́rìí sí i pé àwọn user database àti folder ipele-host ti lọ nígbà tí wọ́n bá ń lo àwọn panel hosting ita.

:::warning
Má ṣe pa oníbùgbé olóminira rẹ́ nígbà tí ìjẹ́rìísí migration ṣì ń ṣiṣẹ́ tàbí nígbà tí àwọn iṣẹ́ async push wà lórí queue. Dúró de ìjẹ́rìísí kí ó parí kí teardown má bàa yọ àwọn ìwé-ẹ̀rí tí àwọn iṣẹ́ tó ń dúró dè nílò kúrò.
:::
