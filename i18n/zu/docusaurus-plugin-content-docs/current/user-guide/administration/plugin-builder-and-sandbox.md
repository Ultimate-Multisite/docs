---
title: Umakhi we-Plugin & Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Umakhi wama-Plugin & Sandbox

Gratis AI Agent v1.5.0 yethula **Uhlelo Lomakhi wama-Plugin & Sandbox**, oluvumela umsizi we-AI ukuthi akhiqize, asebenzise, futhi aphathe ama-plugin e-WordPress kunethiwekhi yakho — konke lokhu ngendawo ye-sandbox ephephile, ehlukanisiwe.

## Uhlolojikelele

Umakhi wama-Plugin uvumela umsizi we-AI ukuthi abhale ama-plugin e-WordPress enziwe ngokwezifiso ngokuphendula izicelo zolimi lwemvelo. Ama-plugin akhiqiziwe ayaqinisekiswa, agcinwe, futhi asetshenziswe ngaphakathi kongqimba lwe-sandbox ngaphambi kokuthi athinte ukusebenza kwesayithi elibukhoma.

Izimo zokusetshenziswa zihlanganisa:

- Ukukhiqiza ama-plugin amancane awusizo ngaphandle kokubandakanyeka konjiniyela.
- Ukwenza izibonelo zokuqala zezici ezidinga ama-hook e-WordPress noma izinhlobo zokuthunyelwe ezenziwe ngokwezifiso.
- Ukwakha izikripthi zokuzenzakalela zesikhashana zemisebenzi yeqoqo.

## Ukukhiqiza i-Plugin nge-AI

Ukuze ukhiqize i-plugin, vula isikhombimsebenzisi sengxoxo se-Gratis AI Agent bese uchaza okudingayo. Isibonelo:

> "Dala i-plugin engeza isaziso se-admin esenziwe ngokwezifiso ku-dashboard."

I-AI izokwenza lokhu:

1. Ikhiqize ikhodi ye-PHP ye-plugin isebenzisa ukukhiqizwa kwekhodi okuhlelekile.
2. Iqinisekise okukhiqiziwe ukuze kutholakale amaphutha e-syntax namaphethini angaphephile.
3. Igcine i-plugin ekhiqiziwe esitolo se-sandbox.
4. Ibuyise isiqinisekiso esine-plugin slug nenkinobho ethi **Sebenzisa ku-Sandbox**.

Ungawucwenga umphumela ngokulandela ngomlayezo ochungechungeni lwengxoxo olufanayo ngaphambi kokuwusebenzisa.

## Ukusebenzisa ku-Sandbox

Ukusebenzisa i-plugin ekhiqiziwe ku-sandbox kwehlukile ekuyisebenziseni kunethiwekhi ebukhoma. I-sandbox:

- Isebenzisa i-plugin endaweni ye-WordPress ehlukanisiwe (`wp-env`).
- Ibamba noma yimaphi amaphutha e-PHP, izixwayiso, noma ukungqubuzana kwama-hook.
- Ibika umphumela wokusebenzisa emuva esikhombimsebenzisini sengxoxo.

Ukuze usebenzise i-plugin ku-sandbox, chofoza inkinobho ethi **Sebenzisa ku-Sandbox** empendulweni yengxoxo ye-AI, noma sebenzisa umyalo we-slash:

```
/activate-plugin <plugin-slug>
```

Umlayezo wesimo uqinisekisa ukuthi ukusebenzisa kuphumelele noma kwehlulekile. Uma kwehluleka, i-log yephutha iboniswa ochungechungeni lwengxoxo.

## Ukuphatha ama-Plugin Akhiqiziwe

Ama-plugin akhiqiziwe afakwe ohlwini ku-**Gratis AI Agent → Umakhi wama-Plugin → Phatha ama-Plugin**. Kulesi sikrini ungakwazi:

| Isenzo | Incazelo |
|---|---|
| **Buka umthombo** | Buyekeza ikhodi ye-PHP ephelele ye-plugin. |
| **Phinda usebenzise ku-sandbox** | Phinda wenze ukuhlolwa kokusebenzisa ku-sandbox. |
| **Faka kunethiwekhi** | Thumela i-plugin kunethiwekhi ebukhoma (kudinga ukuqinisekiswa ngesandla). |
| **Buyekeza** | Nikeza inguqulo entsha nge-AI, eshintsha ikhodi ekhona. |
| **Susa** | Susa i-plugin esitolo se-sandbox. Iqala ngokuyiyekisa ukusebenza kuwo wonke amasayithi. |

:::warning
**Install on network** deploys the generated plugin to your live WordPress multisite. Review the plugin code before proceeding. Gratis AI Agent will prompt for confirmation before completing a live install.
:::

## Ukufaka i-Plugin Ekhiqiziwe Kunethiwekhi

Uma usenelisekile nge-plugin esesandbox, ungayifaka kunethiwekhi ebukhoma:

1. Iya ku-**Gratis AI Agent → Umakhi wama-Plugin → Phatha ama-Plugin**.
2. Chofoza **Faka ku-Network** eduze kwe-plugin ofuna ukuyithumela.
3. Qinisekisa ibhokisi lengxoxo. I-plugin ifakwa ku-`wp-content/plugins/` futhi yenziwe isebenze kunethiwekhi.

Kungenjalo, sebenzisa umyalo we-slash esikhombimsebenzisini sengxoxo:

```
/install-plugin <plugin-slug>
```

## Izibuyekezo ze-Plugin

Ukuze ubuyekeze i-plugin ekhiqiziwe, chaza ushintsho kumsizi we-AI engxoxweni entsha:

> "Buyekeza i-plugin ethi dashboard-notice ukuze ibonise isaziso kubaphathi kuphela."

I-AI ikhiqiza inguqulo entsha, ebonakala ku-sandbox eceleni kwenguqulo yamanje. Ubuyekeza umehluko bese uqinisekisa ngaphambi kokuthi isibuyekezo sisetshenziswe.

## Ukuhlanganiswa kwe-HookScanner

Umakhi wama-Plugin usebenzisa **HookScanner** ehlanganisiwe ukuze ahlaziye ama-hook nama-filter abhaliswe yi-plugin ngayinye ekhiqiziwe. Okukhishwa yi-HookScanner kuboniswa empendulweni yengxoxo futhi kuhlanganisa:

- Ama-action hook abhalisiwe (izingcingo ze-`add_action`).
- Ama-filter hook abhalisiwe (izingcingo ze-`add_filter`).
- Noma yimaphi ama-hook atholakala kokuncikile kwe-plugin (kweqa izinkomba ze-`vendor/` ne-`node_modules/`).

Lokhu kukusiza ukuthi uqonde ukuziphatha kwe-plugin ngaphambi kokuyisebenzisa.

## Okucatshangwayo Kwezokuphepha

- Ama-plugin akhiqiziwe agcinwa ngokwehlukana nama-plugin afakwe ngesandla futhi awatholakali ngesikrini esijwayelekile sokuphatha ama-plugin e-WordPress kuze kube yilapho uwafaka ngokusobala kunethiwekhi.
- I-sandbox isebenzisa ukuqinisekiswa kwendlela ukuvimbela ukuhamba phakathi kwezinkomba lapho kubhalwa amafayela e-plugin.
- Ama-plugin anezingcingo zemisebenzi eyingozi (isb., `eval`, `exec`, `system`) ayamakwa ngesikhathi sokuqinisekisa futhi ngeke asetshenziswe.
