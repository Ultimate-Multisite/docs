---
title: Cyflogau a Gwrthdrefnu Autoddef yn Adranau Siat
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Auto Search a Chwarae a Gwahanion yn Site Templates (v2)

_**Mae angen i'r WP UItimo ffurfennau 2.x.**_

Un o'r gymharuau sydd yn gweithredolestruest Ultimate Multisite yw'r gallu ychwanegu text, colore, a ffurfau wedi'u sceisio i ffurf y cyfrifoldeb. Un o'r data hyn sydd yn cael ei ddefnyddio, gallwn ei ddefnyddio i gyflwyno'r cynnwys mewn rhai argyngau o'r template site a ddylid. Yna, pan fydd y site newydd yn cael ei gluddu, bydd Ultimate Multisite yn gwahanu'r placeholderau gyda'r wybodaeth cywir a ddefnyddiwyd yn y cyfrifoldeb.

Ar enw, gallwch gyflwyno eich site templates gyda placeholders. Caiffio'r placeholders wedi'u chwarae gan ddwysg ddwyllgorau - {{placeholder_name}}.

Yna, gallwch sicr yn unig ychwanegu ffurf cyfrifoldeb sydd yn cyfyngedig i gael y data hwn.

Bydd Ultimate Multisite yn gwahanu'r placeholders gyda'r data a rhoi'n cael ei ddefnyddio gan y cydweithredwr.

## **Cyflwyno'r problem "template llawn o placeholders"**

Mae pob hyn yn dda, ond mae gennyfynnu'r problem anhygoel: mae ein template site - sydd wedi eu cyffwrdd gan ein cydweithredwyr - yn llawn o placeholderau anhygoel sydd â chwarae ddefnyddiol.

I gyflwyno hyn, rydym yn cynnig y opsiwn i setio gwerthau palsam ar y placeholders, ac byddwn yn defnyddio'r gwerthau hyn i chwilio a gwahanu eu cynnwys ar y site templates pan fydd y cydweithredwyr yn mynd.

Gallwch cael cyffurfio i'r redshwll placeholderau template gan ddod i **Ultimate Multisite > Settings > Sites**, sychu i'r ardal Site Template Options, aethau i'r linc **Edit Placeholders**.

![Site Template Options area in the Sites settings page](/img/config/settings-sites-templates-section.png)

Bydd hyn yn rhoi chi i'r redshwll cynnwys y placeholders, lle gallwch ddefnyddio placeholderau a'u cynnwys cywir.

![Pethau y redactor o ffurfiau](https://example.com/img/config/settings-sites-templates-section.png)
