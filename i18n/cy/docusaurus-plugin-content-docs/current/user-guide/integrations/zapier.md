---
title: Ymddygiad Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ymddio'r Ultimate Multisite gyda Zapier {#integrating-ultimate-multisite-with-zapier}

 mewn un o'r anghylchenau, ddebethau ni ddysgwylch [Webhooks](webhooks.md) ac sut gallai eu defnyddio i gysylltu â ffurfau allweddol (3rd party applications).

Mae defnyddio webhooks yn rhy gymhleth oherwydd ei bod angen gwybodaeth awyr yn y codi a chwilio am y payload. Mae **Zapier** yn ffordd i chi ddod yn ddefnyddiol ar gyfer hyn.

Mae Zapier gyda chyfathriant â'r adeiladu orefn (5000+ app) sydd â'r cyfathrebu rhwng rhywfaint o appiau yn hanfodol.

Gallwch creu **Triggers** aros y byth i fod yn cael eu gweithredu pan fydd ei frolau ar eich rheol (e.e., cael cyfle a gwthio'r digwyddiad account_create) neu ddefnyddio **Actions** ar eich rheol yn ateb i frolau allweddol (e.e., creu newydd cyfle a chwarae mewn rhwydwaith Ultimate Multisite).

Mae hyn yn bosibl oherwydd bod y **triggers a actions o'r Ultimate Multisite Zapier** yn cael eu gweithredu trwy'r [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Sut i entynnu {#how-to-start}

Cyndd, chwilio am Ultimate Multisite mewn llyfr appiau Zapier. Fel alternatiw, gallwch chi clisi'r [llink hwn](https://zapier.com/apps/wp-ultimo/integrations).

Ymddangos i'ch dashboard a clywed y bot **+** **Create Zap** ar yr eithaf i setio un Zap newydd.

![Zapier dashboard gyda chwilio Create Zap](/img/admin/webhooks-list.png)

Byddwch yn cael eich cyflwyno i'r dogfennol creu Zap.

Ymddangos mewn box chwilio "wp ultimo". Clisi i ddwylo'r opsiwn **Beta**.

![Chwilio am WP Ultimo mewn llyfr appiau Zapier](/img/admin/webhooks-list.png)

Ar ôl cael eich dewis, dewis y digwyddiad a ddefnyddi: **New Ultimate Multisite Event**.

![Dewis New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Mae angen iêm yn rhoi cyfathriant i Zapier gyda **eich rheol**. Clisi mewn **Sign in** bydd yn agor gwndyn newydd sydd â'r **API credentials**.

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

Rydychwch y panel admin eich rheol cyd-llwybr ac mynd i **Ultimate Multisite > Settings** > **API & Webhooks** a chwilio am y sef API Settings.

Dechrau ar y opsiwn **Enable API** (Gofyn API) fel mae angenrheidiol i fod y cyfyngedig hwn yn gweithio.

![API and Webhooks settings with API Settings and Enable API options](/img/admin/settings-api-webhooks.png)

Defnyddiwch y cyfathrebu **Copy to Clipboard** ar gyfer y fieldau API Key a API Secret ac gwneud ystod y gaelau hyn ar y gryn yn ywch.

Ar y field URL, rhoi eich llwybr cyd-llwybr rheol yn llawn, gan gynnwys y protocol (HTTP neu HTTPS).

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

Cliciw ar y bot **Yes, Continue** i symud i'r cynllun nesaf. Os bydd pob hyn yn gweithio'n dda, bydd eich cyfrifau newydd a chysylltiedig yn cael eu cyflwyno! Clicwch ar **Continue** i creu rhywbeth newydd fel trigger.

## Sut i creu trigger newydd {#how-to-create-a-new-trigger}

Nydyn fy nghyddu eich cyfrif wedi'i cysylltu, gallwch gweld y digwyddiadau sydd ar gael. Gadewch y digwyddiad **payment_received** (deimlo'r cyflwyniad) ar gyfer y tutorial hwn.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

Ar ôl cael digwyddiad wedi'i dechrau ac clic i **continue**, bydd ystafell **test step** yn dangos.

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

Yn y stad hwn, bydd Zapier yn gwneud gwylio os oes capacol eich Zap gallu **gwynhau'r payload penodol i'r digwyddiad hwn**. Yn y digwyddiadau nesaf o'r un gwrth, bydd y cyflym gyda'r stratig yr un gyfrif hon yn cael ei anfon.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

Yn eurol yn y tutorial, roedd y gwylio wedi'i **cyflawio'n iawn** ac wedi dod â phryd o ffurfiad enw. Bydd y ddata hyn yn ddefnyddiol i'r cyfarwyddo i ni pan byddwn yn creu gweithredoedd (actions). Mae eich triger yn cael ei creu ac yn barod i'w cysylltu â chwaraeon eraill.

## Sut i creu Actions {#how-to-create-actions}

Mae actions yn defnyddio wybodaeth o trigerau eraill i creu cyflwyniadau newydd yn y rhwydwaith eich.

Yn **creu un cynllun action** byddwch yn debyg yr Ultimate Multisite **Beta** a'r opsiwn **Create Items on Ultimate Multisite**.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Yn y cynllun nesaf, gallwch creu eich cyfathriant (authentication), fel yr oeddwn yn ei wneud yn **Sut i entynnu** , neu ddewis gwylio un cyfathriant wedi'i creu. Yn y tutorial hwn, byddwn yn debyg yr un cyfathriant wedi'i creu.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Cyflwyniad y Action {#setting-up-the-action}

Mae hyn yn **y cynllun canol y action** ac mae pethau yn rhywfaint yn ddiwethaf. Y wybodaeth cyntaf y byddwch yn debyg yw'r **Item**. Mae'r Item yn **model wybodaeth** o'ch rhwydwaith fel **Customers, Payments, Sites, Emails** a chwaraeon eraill.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Pan byddwch yn debyg un item, bydd y ffurf yn **reglan i dod â'r ffeiliau sydd angen ac allweddol** ar gyfer y item a ddewiswyd.

Ar enw, pan byddwch yn debyg yr item **Customer**, bydd y ffeiliau ffurfiol yn dod â'r holl ddatblygiad sydd angen i gweithio i creu Customer newydd yn y rhwydwaith.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

Ar ôl gwbl ffurfio pob ffeiliau wedi'u darnau fel **angen** ac clisi ar dilyn, bydd un screen olaf yn dangos eich ffurfio wedi'i ffurfio a'r ffeiliau sydd wedi'u gadael.

![Zapier action test wnaethau a fwytaedd yn llwybly ac yn ddwfn](/img/admin/webhooks-list.png)

Ar ôl ychwanegu'r test eich bod yn llwyddiannus, mae eich gweithrediad wedi'i cyflwyno. Mae'n bwysig hefyd gweld ar eich rheol (network) i ddarganfod os roedd y item wedi'i creu gyda'r test eich gweithrediad.
