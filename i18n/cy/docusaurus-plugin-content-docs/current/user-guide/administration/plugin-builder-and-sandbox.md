---
title: Ymddygiwr Plugin a Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Gweithredigwr Plugin & Sandbox {#plugin-builder--sandbox}

Mae Gratis AI Agent v1.5.0 yn cyflwyno'r **Plugin Builder & Sandbox System**, sy'n sylw'r AI assistant i ddatblygu, gael ei chwarae, a’u’i rheoli pluginau WordPress ar eich rheini — pob yn ymlaen drwy ffoethafiad bach, wedi'i sicrhau mewn amgylchedd bach a'raddasu.

## Oglwyddictod {#overview}

Mae'r Plugin Builder yn gallu i'r AI assistant ddatblygu pluginau WordPress newydd yn gyfeiriad â chwarae'n naturiol. Mae pluginau a ddatblygu neu'n cael eu cyflwyno yn cael eu chyfeiriad, ei storio, a’u'i chwarae mewn amgylchedd bach قبل y bydd nhw yn effeithio ar ffurfion y safle byw.

Mae ganlyn y ddefnyddiau:

- Ddatblygu pluginau lite (bach yn llai) o hyd yn oed heb gymrydrol ddatblygwyr.
- Prototypa ffurfion sydd angen rhag hookau WordPress neu post-typerau custom.
- Creu scriptau awtomatig byr am ymarferion cyflwyniad.

## Cyflwyno Plugin drwy AI {#generating-a-plugin-via-ai}

I ddatblygu plugin, gwahanwch y ffurf chwarae chat o Gratis AI Agent a sylwi ar beth mae angen i chi. Ar enw, felly:

> "Creu plugin sydd yn ychwanegu cyflwyniad admin newydd ar y dashboard."

Bydd y AI yn:

1. Cynllun cod PHP y plugin gan ddatblygu cod sydd wedi'i sicrhau.
2. Gyfeiriad y output am erru syntactig a ffyrddion angyfrifol.
3. Storio'r plugin a ddatblygu mewn stor bach.
4. Cyflwyno cyfathryd â'r slug o'r plugin a botllen **Activate in Sandbox**.

Gallwch gwella'r enghyniad gan ddatblygu gan dilyn y cyfathryd yn yr un ffurf siarad ar gyfer ychwanegu قبل chwarae.

## Cyflwyniad mewn Sandbox {#sandbox-activation}

Mae cyflwyniad plugin a ddatblygu mewn sandbox yn gwrthosi'r cyflwyniad ei o mewn i rheini byw. Mae'r sandbox:

- Yn chwarae'r plugin mewn amgylchedd WordPress wedi'i sicrhau (wp-env).
- Yn cyfathreg unrhyw erru PHP, gairon neu ffyrddion hook.
- Yn cyflwyno'r rezultyd y cyflwyniad yn ôl i'r ffurf siarad.

I chwarae plugin mewn sandbox, cliwch ar botllen **Activate in Sandbox** yn y cyfathryd AI, neu defnyddiwch y barch:

`/activate-plugin <plugin-slug>`

Mae mesgarwch cyflwyniad yn cywir ystyr y cafodd neu ddim yn llwyddiannus. Ar dros y fail, mae'r log eror yn cael ei dangos yn y thrafen chat.

## Cyfathrebu Pluginau Aroswyd {#managing-generated-plugins}

Mae pluginau aroswyd yn cael eu listri mewn **Gratis AI Agent → Plugin Builder → Manage Plugins**. O'r screen hwn, gallwch:

| Gweithrediad | Disgrifiad |
|---|---|
| **View source** (Gweld y ffynon) | Ddychwio code PHP cyfan y plugin. |
| **Re-activate in sandbox** (Cyflwyni eto mewn sandbox) | Cyflwyni eto'r gwylio cyflwyniad sandbox. |
| **Install on network** (Instal ar y rheol) | Gyflwyni'r plugin i'r rheol WordPress sydd ar gael (mae angen cywedig manwl). |
| **Update** (Cyfathrebu) | Cyflwyno fersian newydd drwy AI, gan allw y code sydd ar gael. |
| **Delete** (Talybu) | Amlwch y plugin o'r stor sandbox. Mae'n de-activateio'nno o'r safleion cyfan. |

:::warning
Mae **Install on network** yn gyflwyno'r plugin aroswyd i'r rheol WordPress multisite sydd ar gael. Ddychwio'r code y plugin قبل ychwanegu. Bydd Gratis AI Agent yn cyhoeddi am ymgymorth i gyd-derbyniad cyn gwblhau'r chwarae live.
:::

## Cyflwyno Plugin Aroswyd ar y Rheol {#installing-a-generated-plugin-on-the-network}

Pan fyddwch chi ddigon gyda plugin aroswyd mewn sandbox, gallwch ei gyflwyno ar y rheol sydd ar gael:

1. Ymddangos i **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Clic ar **Install on Network** yn y cyflwyniad y mae angen i'r plugin sydd â chwilio.
3. Cyfathrebu'r dialog. Mae'r plugin wedi'i gyflwyno i `wp-content/plugins/` ac mae'n cael ei gweithredu ar y rheol.

Arall, defnyddiwch y ffurf slash yn y cyfathrebu chat:

```
/install-plugin <plugin-slug>
```

## Cyfathregiadau Pluginau {#plugin-updates}

I chwilio plugin aroswyd, sylwi ar newid i'r asiant AI mewn siarad newydd:

> "Cyfathregi'r dashboard-notice plugin i ddangos y cyflwyniad i'r admin yn unig."

Mae'r AI yn creu fersian newydd, sydd yn dangos yn y sandbox gyda'r fersian ar gyfer y fersian cyfredol. Byddwch yn ddigon y diff ac yn cyfathrebu cyn cael y cyfathregiad.

## Ymddianolwg HookScanner {#hookscanner-integration}

Mae'r Plugin Builder yn defnyddio **HookScanner** sydd wedi'i gysylltu i'r cyfathrebu'r hookau a'r filterau a ddefnyddir gan unrhyw plugin a gennych. Mae output y HookScanner yn cael ei dangos yn y cyfraddiad chat ac mae'n cynnwys:

- Hookau weithredol wedi'u regrhu (`add_action` calls).
- Hookau filter wedi'u regrhu (`add_filter` calls).
- unrhyw hookau a ddod yn cael eu gynnwys mewn cyfathregi pluginau (mae'n gwthio gyfrifau `vendor/` a `node_modules/`).

Mae hyn yn rhoi'n ddefnyddio'r gymryd o'r weithredol o'r plugin cyn ei chwarae.

## Cynllunio Diogelwch {#security-considerations}

- Mae'r pluginau a gennych wedi'u cyflwyno ar gyfer yn cael eu cadw yn rhydd o'r pluginau a ddefnyddir yn hanesydd, ac nid yw'n cyffredinol gan gael y canlyniad rheoli pluginau WordPress heb eich bod yn eu chwarae'n ddefnyddio'nwy.
- Mae'r sandbox yn defnyddio gyfathrebu llwybr i brofi'r gyfeiriad o'r dyfodol pan mae'n ysgrifennu ffiliadau pluginau.
- Mae'r pluginau gyda chwaraeifau ddwfn (e.e., `eval`, `exec`, `system`) yn cael eu cyflwyno yn y cyfathrebu ac nid yw'n cael eu chwarae.
