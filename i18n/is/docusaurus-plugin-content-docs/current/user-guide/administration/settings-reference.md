---
title: Tilvísun fyrir stillingar
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Stillingatilvísun

Þessi síða heldur utan um stillingar sem hafa áhrif á daglega stjórnun og nýlegar breytingar á hegðun í Ultimate Multisite.

## Aðrir valkostir

Svæðið **Aðrir valkostir** birtist undir **Ultimate Multisite > Settings > Login & Registration**.

| Setting | Description |
|---|---|
| **Enable Jumper** | Sýnir Jumper-flýtileiðsagnartólið á stjórnunarsvæðinu. Notaðu það til að hoppa beint á Ultimate Multisite-skjái, nethluti og studda stjórnunaráfangastaði. Slökktu á því ef þú vilt ekki hafa þessa flýtileið sýnilega. |

## Villutilkynningar og fjarmælingar

Fyrri opt-in stilling fyrir villutilkynningar hefur verið fjarlægð af stillingasíðunni. Nafnlaus fjarmæling er óvirk og enginn UI-rofi er til að virkja hana.

Ef þú viðheldur innri verklagsgögnum eða skjámyndum fyrir stillingasíðuna skaltu fjarlægja tilvísanir í gamla opt-in reitinn fyrir villutilkynningar svo stjórnendur leiti ekki að stillingu sem er ekki lengur til staðar.

## Import/Export stillingar

Stillingaflipinn **Import/Export** lýsir hvaða stillingum hann stýrir og tengir beint í **Ultimate Multisite > Site Export** fyrir vef- og netasöfn. Notaðu stillingaflipann fyrir import/export stillingar, notaðu **Tools > Export & Import** fyrir export/import vinnuflæði eins vefs, og notaðu Site Export tólið þegar þú þarft heilt Network Export safn.

## Viðvörun um stöðu Domain Seller HostAfrica

Þegar Domain Seller viðbótin er tengd við HostAfrica sjá netstjórnendur nú lokanlega viðvörun um lága stöðu þegar staða endursölureikningsins er of lág fyrir áreiðanlega skráningu léna eða vinnslu endurnýjana.

Líttu á þessa tilkynningu sem rekstrarviðvörun: bættu inneign á HostAfrica endursölustöðuna áður en þú samþykkir fleiri greiddar lénaskráningar, farðu síðan aftur í Domain Seller stillingarnar eða lénavöktunarskjáinn til að staðfesta að skráningar og endurnýjanir geti haldið áfram eðlilega.

## Stillingar fyrir AI provider connector

Stillingar fyrir AI provider connector birta nú aðeins studdu OAuth-reikningasöfnin:

| Provider | Setup flow |
|---|---|
| **Anthropic Max** | Tengdu einn eða fleiri Anthropic Max reikninga með OAuth-hnappnum. Notaðu handvirka OAuth-varaleið þegar sandkassavafri getur ekki lokið tilvísuninni sjálfkrafa. |
| **OpenAI ChatGPT/Codex** | Tengdu ChatGPT reikninga í gegnum sama OAuth pool vinnuflæði. Aðgerðir sem connector styður geta notað ChatGPT Codex verkfæraköll eftir að reikningurinn er tengdur. |
| **Google AI Pro** | Tengdu Google AI Pro reikninga í gegnum OAuth og endurhlaðaðu síðan connector ef reikningalistinn uppfærist ekki strax. |

Cursor Pro er ekki lengur studdur provider. Fjarlægðu gamlar innri skjámyndir, verklagsgögn eða innleiðingarskref sem nefna Cursor Pro uppsetningarreiti eða connector-slóðir.

Þegar provider reikningum er bætt við eða þeir fjarlægðir skaltu slá inn gilt netfang fyrir reikninginn sem verið er að endurhlaða eða eyða og vista provider stillingarnar áður en aðgerðir sem byggja á connector eru prófaðar.
