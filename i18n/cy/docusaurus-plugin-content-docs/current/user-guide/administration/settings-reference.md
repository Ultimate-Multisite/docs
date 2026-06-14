---
title: Cyflwyniad ystyriedau
sidebar_position: 11
_i18n_hash: 0259b88b319090b358483322ad97fc2d
---
# Cyflenau'r Cwilioedd

Mae'r dudalen hwn yn gwylio'r setegau sy'n effeithio'r gweithredoedd dyddiol a newidiadau rhywfaint yn Ultimate Multisite.

## Mae'r Opsiadau Eraill

Mae'r ardal **Other Options** yn dangos o dan **Ultimate Multisite > Settings > Login & Registration**.

| Setedig | Disgrifiad |
|---|---|
| **Enable Jumper** | Cynalwch y tool cyflym navbiaeth Jumper yn y ardal admin. Defnyddiwch ei i gwmpasu'n dros ymlaen i gyfrifau Ultimate Multisite, oifau cyd-gynllunio (network objects), a destynau admin sydd wedi'u chymryd. Defnyddiwch ei os oes angen i'r cyffredinol hwn yn gweld. |

## Cyflwyniad o Erru a Telemetrefau

Mae setedig cyflwyniad o erru blaen wedi cael ei llywio o'r dudalen setegau. Mae telemetrefau anghyffredol (anonymous telemetry) wedi'i torri, ac nid oes ychwaneg UI i'w chynllunio.

Os ydych chi'n cadw runbooks neu llwybrachau ar gyfer y dudalen setegau, talybwch y cyfeiriadau i'r ffordd cyflwyniad o erru uchelol (error-reporting opt-in) yn ymlaen felly nid yw'r admin yn chwilio am setedig sydd wedi cael ei torri.

## Setedau Cyflwyniad/Cyffurfio (Import/Export settings)

Mae'r tab **Import/Export** yn disgrifio beth mae'n reoli hi ac yn cysylltu'n cyflwyniad i **Ultimate Multisite > Site Export** ar gyfer archwaith gwaith a rheol. Defnyddiwch y tab setedig ar gyfer cyflwyniad/cyffurfio, defnyddiwch **Tools > Export & Import** ar gyfer y ffordd cyffurfio/cyflwyniad o'r un-site, ac defnyddiwch y tool Site Export pan oes angen i chi archwaith Export rheol yn llawn.

## Setedau Cyflenwyr AI (AI provider connector settings)

Mae setedau cyflenwyr AI yn dangos yr adeiladau OAuth sydd wedi'u chymryd:

| Cyflennydd | Ffylfach y cyflwyniad |
|---|---|
| **Anthropic Max** | Cysylltu un neu fwy o cyfathregau Anthropic Max gyda'r botell OAuth. Defnyddiwch y ffordd OAuth manwl (manual) pan nad yw'r cyd-ddiffynol (sandboxed browser) yn gallu gwblhau'r redirect yn awtomatig. |
| **OpenAI ChatGPT/Codex** | Cysylltu cyfathregau ChatGPT trwy ffordd y samein OAuth. Gall y gweithgareddau a chynllunwyd gan y connector defnyddio tool calls o'r ChatGPT Codex ar ôl cysylltu'r cyfathreg. |
| **Google AI Pro** | Cysylltu cyfathregau Google AI Pro trwy OAuth, yna atal (refresh) y connector pan nad yw'r rheol cyfathreg yn cyflogi'n gyflym. |

Mae Cursor Pro nid yn ffurfi cyflwyniad a ddefnyddir. Amlwch ysbrygiadau angen i'r system (screenshots), runbooks neu adegau cynllunio sydd yn dangos ffordd ysbrygiad Cursor Pro neu gyfeiriadau'r connector.

Pan ychwanegu neu amlwch cyfathregau ysbrygiad, rhoi enw e-bostref gywir ar gyfer y cyfathreg a fydd yn cael ei atal neu amlwch, a chysw'r setegau ysbrygiad cyn gwneud gwyliau'r gweithgareddau sydd wedi'u cynnwys gan y connector.
