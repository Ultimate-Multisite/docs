---
title: Notkunarleiðbeiningar
sidebar_position: 11
_i18n_hash: 0259b88b319090b358483322ad97fc2d
---
# Samræmiinnarleiðslur

Þessi síða fangar leiðslur sem hafa áhrif á dagleg stjórnun og nýlegar breytingar í þróunni fyrir Ultimate Multisite.

## Örðrum valkostningum

Meðmið er **Örðrum valkostningar** (Other Options) undir **Ultimate Multisite > Settings > Login & Registration**.

| Leiðsl | Skjalði |
|---|---|
| **Enable Jumper** | Sýnir Jumper hraðaferlið í stjórnunarstöðu. Notað til að spretta beint yfir á skärmir Ultimate Multisite, netverkstafandi og stöðu fyrir stjórnun. Skilaðu það af því ef þú vilt ekki þetta hraðaferli sýnt. |

## Villastjórnun og telemetri

Forinn leiðslinn til að samþykkja villastjórnun er fjuttar úr leiðslunum fyrir stjórnun. Anonym telemetri er afskipt í, og er ekki til UI-töglun til að aktíva það.

Ef þú heldur inn á innri leiðslur eða skýringar fyrir leiðsluna við stjórnunarstöðu, fjarlæg referansar til forinn leiðslinni til samþykktar villastjórnunar í leiðslunni svo að stjórnendur ekki leita eftir leiðslum sem eru ekki lengur til staðar.

## Leiðslur fyrir innbringing/útbringing (Import/Export settings)

Leiðslan **Import/Export** skýr hvern leiðslurinn stýrir og tengist beint við **Ultimate Multisite > Site Export** fyrir arkíva síða og netverk. Notaðu leiðsluna til innbringing/útbringunar leiðslunnar, notaðu **Tools > Export & Import** fyrir ferli útbringing/innbringing eins eina staðar, og notaðu verkfæri Site Export þegar þú þarft fullan arkíva Netverk Útbringing.

## Leiðslur fyrir tengil leiðslur AI-hugbæka (AI provider connector settings)

Leiðslur fyrir tengil leiðslur AI-hugbæka sýna nú aðeins stöðuð OAuth reikningaflokkunar:

| Einskaflari | Oppsetningarpraksis |
|---|---|
| **Anthropic Max** | Kopla einn eða fleiri Anthropic Max reikning með OAuth-knappinni. Notaðu manuelle OAuth-fallback þegar sandboxed brauzar ekki getur fullfærð leiðréttinguna sjálf um. |
| **OpenAI ChatGPT/Codex** | Kopla ChatGPT reikningar í samræmi við sama OAuth pool flóð. Áferðarverð opnunarferli (Connector-supported operations) geta notað ChatGPT Codex tool calls eftir að reikningurinn er koplað. |
| **Google AI Pro** | Kopla Google AI Pro reikningar með OAuth, og uppfrísdu samband ef lista reikninga ekki uppfærst strax. |

Cursor Pro er ekki lengur stöðugt settur einskaflari. Fjörðu fornu innri skýrslur, runbooks eða uppsetningsteglan sem nefna uppsetningarpólum eða leiðir fyrir Cursor Pro.

Þegar þú hefur að leggja viðskipti eða fjarlægja einskaflar reikningar, nota rétt tölvupóstnúmer fyrir reikninginn sem uppfrísast eða fjarlægis og fær settar einskaflar settir áður en þú testar ferli með samband.
