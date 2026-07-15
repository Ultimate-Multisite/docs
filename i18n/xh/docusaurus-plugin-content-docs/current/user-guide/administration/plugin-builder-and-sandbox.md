---
title: Umakhi we-Plugin & Indawo yovavanyo
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Umakhi we-Plugin & Sandbox

Gratis AI Agent v1.5.0 yazisa **iNkqubo yoMmakhi we-Plugin & Sandbox**, evumela umncedisi we-AI ukuba enze, asebenzise, aze alawule ii-plugin ze-WordPress kwinethiwekhi yakho — konke oko kusenziwa kwindawo ekhuselekileyo, eyahluliweyo ye-sandbox.

## Isishwankathelo {#overview}

Umakhi we-Plugin wenza ukuba umncedisi we-AI akwazi ukubhala ii-plugin ze-WordPress ezenzelwe wena ngokuphendula kwizicelo zolwimi lwendalo. Ii-plugin ezenziweyo ziyaqinisekiswa, zigcinwe, zize zenziwe zisebenze ngaphakathi komaleko we-sandbox ngaphambi kokuba zichaphazele ukusebenza kwesayithi ephilayo.

Iimeko zokusetyenziswa ziquka:

- Ukwenza ii-plugin ezilula zezixhobo ngaphandle kokubandakanyeka komphuhlisi.
- Ukwenza iiprototype zeempawu ezifuna ii-hook ze-WordPress okanye iintlobo zeeposti ezenzelwe wena.
- Ukwenza izikripthi ezimfutshane zokuzenzekelayo kwimisebenzi yeqela.

## Ukwenza i-Plugin nge-AI {#generating-a-plugin-via-ai}

Ukwenza i-plugin, vula ujongano lwencoko lwe-Gratis AI Agent uze uchaze into oyifunayo. Umzekelo:

> "Yenza i-plugin eyongeza isaziso se-admin esenzelwe wena kwi-dashboard."

I-AI iya:

1. Kuvelisa ikhowudi ye-PHP ye-plugin isebenzisa ukuveliswa kwekhowudi okwakhiweyo.
2. Kuqinisekisa imveliso ngeempazamo zesintaksi kunye neepateni ezingakhuselekanga.
3. Kugcinwe i-plugin eyenziweyo kwindawo yokugcina ye-sandbox.
4. Kubuyiswe isiqinisekiso kunye ne-slug ye-plugin kunye neqhosha elithi **Yenza isebenze kwi-Sandbox**.

Ungayiphucula iziphumo ngokulandela kuloo msonto wencoko mnye ngaphambi kokuyenza isebenze.

## Ukwenza isebenze kwi-Sandbox {#sandbox-activation}

Ukwenza i-plugin eyenziweyo isebenze kwi-sandbox kwahlukile ekuyenziseni kwinethiwekhi ephilayo. I-sandbox:

- Iqhuba i-plugin kwindawo ye-WordPress eyahluliweyo (wp-env).
- Ibamba naziphi na iimpazamo ze-PHP, izilumkiso, okanye iingxabano zee-hook.
- Inika ingxelo yesiphumo sokwenza isebenze emva kujongano lwencoko.

Ukwenza i-plugin isebenze kwi-sandbox, cofa iqhosha elithi **Yenza isebenze kwi-Sandbox** kwimpendulo yencoko ye-AI, okanye usebenzise umyalelo we-slash:

```
/activate-plugin <plugin-slug>
```

Umyalezo wesimo uqinisekisa ukuba ukwenza isebenze kuphumelele okanye kusilele. Xa kusilela, ilog yempazamo iboniswa kumsonto wencoko.

## Ukulawula ii-Plugin ezenziweyo {#managing-generated-plugins}

Ii-plugin ezenziweyo zidweliswe ku-**Gratis AI Agent → Umakhi we-Plugin → Lawula ii-Plugin**. Kwesi sikrini unako:

| Isenzo | Inkcazo |
|---|---|
| **Jonga umthombo** | Phonononga ikhowudi epheleleyo ye-PHP ye-plugin. |
| **Yenza isebenze kwakhona kwi-sandbox** | Phinda uqhube uvavanyo lokwenza isebenze kwi-sandbox. |
| **Faka kwinethiwekhi** | Hambisa i-plugin kwinethiwekhi ephilayo (kufuna uqinisekiso ngesandla). |
| **Hlaziya** | Nika inguqulelo entsha nge-AI, endaweni yekhowudi ekhoyo. |
| **Cima** | Susa i-plugin kwindawo yokugcina ye-sandbox. Iyenza ingasebenzi kuqala kuzo zonke iisayithi. |

:::warning
**Faka kwinethiwekhi** kuhambisa i-plugin eyenziweyo kwi-WordPress multisite yakho ephilayo. Phonononga ikhowudi ye-plugin ngaphambi kokuqhubeka. Gratis AI Agent iya kucela uqinisekiso ngaphambi kokugqiba ukufaka okuphilayo.
:::

## Ukufaka i-Plugin eyenziweyo kwiNethiwekhi {#installing-a-generated-plugin-on-the-network}

Xa wanelisekile yi-plugin ekwi-sandbox, ungayifaka kwinethiwekhi ephilayo:

1. Yiya ku-**Gratis AI Agent → Umakhi we-Plugin → Lawula ii-Plugin**.
2. Cofa **Faka kwiNethiwekhi** ecaleni kwe-plugin ofuna ukuyihambisa.
3. Qinisekisa incoko. I-plugin ifakwa ku-`wp-content/plugins/` ize yenziwe isebenze kwinethiwekhi.

Kungenjalo, sebenzisa umyalelo we-slash kujongano lwencoko:

```
/install-plugin <plugin-slug>
```

## Uhlaziyo lwee-Plugin {#plugin-updates}

Ukuhlaziya i-plugin eyenziweyo, chaza utshintsho kumncedisi we-AI kwincoko entsha:

> "Hlaziya i-plugin ye-dashboard-notice ukuze ibonise isaziso kubalawuli kuphela."

I-AI ivelisa inguqulelo entsha, ebonakala kwi-sandbox ecaleni kwenguqulelo yangoku. Uphonononga umahluko uze uqinisekise ngaphambi kokuba uhlaziyo lusetyenziswe.

## Udibaniso lwe-HookScanner {#hookscanner-integration}

Umakhi we-Plugin usebenzisa **HookScanner** edityanisiweyo ukuhlalutya ii-hook kunye neefilter ezibhaliswe yi-plugin nganye eyenziweyo. Imveliso ye-HookScanner iboniswa kwimpendulo yencoko kwaye iquka:

- Ii-hook zesenzo ezibhalisiweyo (`add_action` calls).
- Ii-hook zesihluzi ezibhalisiweyo (`add_filter` calls).
- Naziphi na ii-hook ezifumaneka kwizinto ezixhomekeke kuzo i-plugin (itsiba iifolda ze-`vendor/` kunye ne-`node_modules/`).

Oku kukunceda uqonde indlela i-plugin eziphatha ngayo ngaphambi kokuyenza isebenze.

## Izinto zoKhuseleko ekufuneka ziqwalaselwe {#security-considerations}

- Ii-plugin ezenziweyo zigcinwa ngokwahlukileyo kwii-plugin ezifakwe ngesandla kwaye azifikeleleki ngesikrini esiqhelekileyo solawulo lwee-plugin ze-WordPress de uzifake ngokucacileyo kwinethiwekhi.
- I-sandbox isebenzisa ukuqinisekiswa kwendlela ukuthintela ukuhamba kwiifolda xa kubhalwa iifayile ze-plugin.
- Ii-plugin ezineefowuni zemisebenzi eziyingozi (umz., `eval`, `exec`, `system`) ziyaphawulwa ngexesha lokuqinisekisa kwaye azisayi kwenziwa zisebenze.
