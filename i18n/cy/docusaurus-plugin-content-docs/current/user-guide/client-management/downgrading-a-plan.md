---
title: Gofio'r Plan
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Downgrading un plan (v2) {#downgrading-a-plan-v2}

_**NOTYNWID: Mae'r ail ddefnyddiol hwn yn cyfeiriad i Ultimate Multisite ffurf 2.x.**_

Mae gwahanu neu ddefnyddio plan neu chwarae yn gweithredol ystodol sydd â'u cyddeeirion gallai wneud os oes gennych buddsodau hanfodol neu os wedi penderfynu nad angen nhw llawer resurs i gyflwyno eu subsite.

## Sut i gwahanu plan {#how-to-downgrade-a-plan}

Gall eich cyddeeirion gwahanu eu plan unrhyw amser gan ddefnyddio'r dashboard admin y subsite eu a chwarae **Change** (Gwahanu) o hyd i'r peidiad eu cyfrifau.

![Peidiad cyddeeirion gyda'ch card Cyfathrebu ac arbedd Change](/img/account-page/membership-change-button.png)

Ar ôl clisiad y boten **Change**, bydd y borthwr/cyddeeir yn cael ei ddefnyddio i ddychwelyd i'r peidiad cyfrifau lle gallu eu dewis y plan sydd â'u chwarae eu chwarae.

![Peidiad opsiynau gwahanu plan ar ochr cyddeeirion](/img/account-page/downgrade-picker.png)

Yn y مثال hwn, rydyn ni yn gwahanu'r plan o **Premium** i **Free**.

I ddeall y borthwr angen gwahanu yw clisiad y boten **Complete Checkout** (Cyflwyno Cyfrifau). Yn y dyfod, bydd hi'n cael eu han yn ôl i'r peidiad cyddeeirion gan dangos mesgar am y newid sydd wedi'i chwarae ar y chwarae. Bydd y newidiadau'n gweithio ar **cyfrifau cyfrifau nesaf** o'r cyddeeirion.

![Peidiad peidiad gan dangos newid yn cael ei chwarae](/img/account-page/pending-change.png)

### Beth sydd wedi digwydd pan mae unig yn gwahanu eu plan {#what-happens-when-a-user-downgrades-their-plan}

Mae'n bwysig nodi bod gwahanu'r plan nid yn newid y cyfrifau sydd ar gael yn y subsite ystodol.

Ni newid y template y site'n cael ei newid yn awt gan newidiad y template y site, oherwydd bydd y newidiad y template y site yn llwyr ddwyn ac ail-setlo'r subsite. Mae hyn i ddarganfod colli data angen. Felly, bydd cyfathrebu disc, themau, pluginau neu'r pathonion (posts) yn gwrthodol heb fod ychwanegau.

Rydyn ni'n deall bod eich bwysigrwydd canol yn gymryd o ddefnyddio'r cyflenau a gyflenau sydd wedi'u setio o dan y plan hwnnw, ond rhaid iêmiddio'r effaith a fyddai'n cael ar y subsite o'r benw yn dod â'r gwahaniaeth neu ei newid unrhyw un o'i cyflenau.

Ar gyfer y postau sydd yn dros y cyflenau wedi'u setio ar y plan, mae gennych chi 3 opsiynau: **Rwy'n cadw y postau fel ydynt** *,* **Rwy'n symud y postau i'r dras** *,* neu **Rwy'n symud y postau i'r draf** *.* Gallwch chi gyflenhau hyn yn ystod setegau Ultimate Multisite.

![Network Admin Settings Sites page showing post-limit-exceeded behaviour options](/img/account-page/settings-sites-post-limit.png)

### Beth sydd â'r pwylliant {#what-happens-to-the-payment}

Yn fersiwn 2.0, nid yw'n angen unrhyw adeiladu ar y pwylliant yn ystod proration.

Mae hyn yn digwydd oherwydd bod y system yn aros i'r cyfrifau sydd wedi'u cael eu cyflwyno i **cyflawio ei chwarae ar gyfer y cyfrifau cyn** y plan/chwarae newydd fydd yn gael ei effaith. Bydd y amlgen pwylliant newydd ar gyfer y chwarae newydd yn cael ei ddefnyddio a'i chwarae'n cael ei chyflwyno ar y cyfrifau nesaf.
