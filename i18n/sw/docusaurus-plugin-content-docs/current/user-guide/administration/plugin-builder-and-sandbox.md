---
title: Jengo la Plugins na Sanduku la Jaribio
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 inatambulisha **Plugin Builder & Sandbox System**, ambayo inaruhusu msaidizi wa AI kutengeneza, kuwezesha, na kusimamia plugins za WordPress kwenye mtandao wako—yote kupitia mazingira salama, yaliyotengwa (sandbox).

## Muhtasari

Plugin Builder inamwezesha msaidizi wa AI kuandika plugins za WordPress maalum kwa kujibu maelezo kwa lugha ya kawaida. Plugins zilizotengenezwa hupitiwa (validated), kuhifadhiwa, na kuwezeshwa ndani ya tabaka la sandbox kabla hata za kuathiri utendaji wa tovuti halisi.

Matumizi yanajumuisha:

- Kutengeneza plugins rahisi za kutumia bila kuhitaji msaada wa developer.
- Kuunda mifumo (prototypes) inayohitaji WordPress hooks au custom post types.
- Kuunda scripts za kiotomatiki zenye muda mfupi kwa ajili ya operesheni za kundi (batch operations).

## Kutengeneza Plugin kupitia AI

Ili kutengeneza plugin, fungua kiolesura cha mazungumzo (chat interface) cha Gratis AI Agent na kuelezea unachohitaji. Kwa mfano:

> "Tengeneza plugin ambayo inaongeza taarifa maalum ya kiutawala (admin notice) kwenye dashboard."

AI itafanya yafuatayo:

1. Kutengeneza msimbo wa PHP wa plugin kwa kutumia utengenezaji wa msimbo wenye muundo.
2. Kupitia matokeo kwa makosa ya sintaks na mifumo hatari.
3. Kuhifadhi plugin iliyotengenezwa kwenye ghala la sandbox.
4. Kurudisha uthibitisho pamoja na slug ya plugin na kitufe cha **Activate in Sandbox**.

Unaweza kuboresha matokeo kwa kuendelea na mazungumzo hayo kabla ya kuwezesha.

## Kuwezesha Sandbox

Kuwezesha plugin iliyotengenezwa kwenye sandbox ni tofauti na kuwezesha kwenye mtandao halisi (live network). Sandbox:

- Inatendesha plugin katika mazingira yaliyotengwa ya WordPress (wp-env).
- Inakamata makosa yoyote ya PHP, maonyo, au migogoro ya hooks.
- Inaripoti matokeo ya uwezeshaji kwenye kiolesura cha mazungumzo.

Ili kuwezesha plugin kwenye sandbox, bonyeza kitufe cha **Activate in Sandbox** kwenye jibu la AI chat, au tumia amri ya slash:

```
/activate-plugin <plugin-slug>
```

Ujumbe wa hali unathibitisha kama uwezeshaji umefanikiwa au umeshindikana. Ikiwa kuna kushindika, rekodi ya makosa itaonyeshwa kwenye mazungumzo.

## Kusimamia Plugins Zilizotengenezwa

Plugins zilizotengenezwa zimeorodheshwa kwenye **Gratis AI Agent → Plugin Builder → Manage Plugins**. Kutoka skrini hii unaweza:

| Kitendo | Maelezo |
|---|---|
| **View source** | Pitia msimbo kamili wa PHP wa plugin. |
| **Re-activate in sandbox** | Rudia ukaguzi wa uwezeshaji wa sandbox. |
| **Install on network** | Toa plugin kwenye mtandao halisi (inahitaji uthibitisho wa kibinadamu). |
| **Update** | Toa toleo jipya kupitia AI, likabadilisha msimbo uliopo. |
| **Delete** | Ondoa plugin kutoka kwenye ghala la sandbox. Kwanza inazifuta uwezeshaji kutoka kwa tovuti zote. |

:::warning
**Install on network** inatoa plugin iliyotengenezwa kwenye WordPress multisite yako halisi. Pitia msimbo wa plugin kabla ya kuendelea. Gratis AI Agent itakuomba uthibitisho kabla ya kukamilisha usakinishaji halisi.
:::

## Kusakinisha Plugin Iliyotengenezwa kwenye Mtandao

Unapokidhiwa na plugin iliyo kwenye sandbox, unaweza kuisakinisha kwenye mtandao halisi:

1. Nenda kwenye **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Bonyeza **Install on Network** kando ya plugin unayotaka kuitoa.
3. Thibitisha dirija. Plugin inasakinishwa kwenye `wp-content/plugins/` na kuwezeshwa kiwango cha mtandao.

Njia mbadala, tumia amri ya slash kwenye kiolesura cha mazungumzo:

```
/install-plugin <plugin-slug>
```

## Sasisho la Plugin

Ili kusasisha plugin iliyotengenezwa, elezea mabadiliko kwa msaidizi wa AI katika mazungumzo mapya:

> "Sasisha plugin ya dashboard-notice ili ionyeshe taarifa hiyo kwa wasimamizi tu."

AI inatengeneza toleo jipya, ambalo linaonekana kwenye sandbox pamoja na toleo la sasa. Unapitia tofauti (diff) na kuthibitisha kabla ya sasisho kuwekwa.

## HookScanner Integration

Plugin Builder inatumia **HookScanner** iliyojumuishwa kuchanganua hooks na filters zilizosajiliwa na kila plugin iliyotengenezwa. Matokeo ya HookScanner yanaonyeshwa kwenye jibu la chat na yanajumuisha:

- Action hooks zilizosajiliwa (`add_action` calls).
- Filter hooks zilizosajiliwa (`add_filter` calls).
- Hooks yoyote zilizopatikana katika dependencies za plugin (inapuuza directories za `vendor/` na `node_modules/`).

Hii inakusaidia kuelewa tabia ya plugin kabla ya kuwezeshwa.

## Kuzingatia Usalama

- Plugins zilizotengenezwa huhifadhiwa kando na plugins zilizosakinishwa kwa mikono na hazina ufikiaji kupitia skrini ya kawaida ya usimamizi wa plugins ya WordPress mpaka unazoisakinisha wazi kwenye mtandao.
- Sandbox inatumia path validation kuzuia kupita kwenye directories wakati wa kuandika faili za plugin.
- Plugins zenye wito hatari wa kazi (k.m., `eval`, `exec`, `system`) zinawekwa alama wakati wa uthibitisho na hazitaweza kuwezeshwa.
