---
title: |+
  Planaren eskaintza

sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Planaren eskaintzeko (v2) {#upgrading-a-plan-v2}

_**IMPORTANTE NOTA: Hau artikulu Ultimate Multisite bertsio 2.x-eraari referentzia egiten du.**_

Dugu klienteak planak gehiago eskaintzen dituzte dira edozean. Plan bat gehiago eskaintzeko, edo network-ean eskaintzen duten beste serbisu edo pakete bat eritzu dezakete.

Hau tutorial-an planaren eskaintzeko moduan eta eskaintzeko prozesuaren ondorioak zer egiten daiko eskatzen dituzte dira.

Planaren eskaintzeko, klienteak behar dute gehiago (dashboard) eratu eta **Account** lapera laitzen.

![Customer subsite dashboard with Account menu link visible](/img/account-page/account-menu.png)

Account laperaan, jakin dituzte dira bere membership-a aktualoa eta hori eta lotuta dagoen planak. Beste plan batean eskaintzeko, **Your Membership** (Beste Membership-a) seksioaren atzeko hakuriko (top-right corner) **Change** (Gehiago/Eskaintzea) klik egin behar dute.

![Account page Your Membership card with Change button](/img/account-page/membership-change-button.png)

Horrek checkout form batean irekituko dira, horretan plan guztiek erakusten dira.

Beste beste serbisu edo pakete bat eritzu dituzte dira bere plan aktualaren bitartean, oso garrantzitsu da, eskatzen ditzake zerbait serbisu edo pakete (bizianko aldean ez duzun irudi edo disk espazio jatorrizko) eta plan gehiago eskaintzea ez dutenean.

![Upgrade picker showing available plans and packages on the customer side](/img/account-page/upgrade-picker.png)

Eriztu behar dituzten produkzioa aukeratuta gtainen, zer aurrez ikustuko dute (eguneko credit bat ez duzun bitartean) eta zer aurrera egin dezakearen datua irakusten da.

Guztian, produktua plan bateki beste plan bat dela eta mugikorrak membership-a bitartean laburtu nahi duzuna, bere planaren aurrezko mugikorraren kopurua credit bat hartuko dute.

![Upgrade payment summary showing credit applied and next billing amount](/img/account-page/upgrade-summary.png)

Plan edo pakete irintzen dutenean, orainko abonazioari ez aldatzen duen plan edo paketea ematen du testu bat esaitzen du hori zer daingoa.

![Probatzen planak abonazioan aldatzen ez duela adierazpen](/img/account-page/upgrade-no-change.png)

Checkout amaituta gtainaren produktu(n) iragailduko dira irailatzariak eta berri produktu(n) guztien limitazio edo funtzioak ondoan ematen daiteke: bisitatasun, disk espazioa, postak, etc...

##

## Upgrade eta Downgrade Bideak {#upgrade-and-downgrade-paths}

Produktiapendu baten artean, **Up & Downgrades** tab bat izango du. Horren lehen opszioa da **Plan Group** (Plan Grupu) irizkia.

**Plan grupeak** da horrek Ultimate Multisite-i ematen duen orokitzen dena, eta horrek esaitzen duenez, upgrade/downgrade bideak opsioak gaurkizten dituzteko "familia" bat jakinarazten nahi du.

![Product edit Up and Downgrades tab with Plan Group field](/img/config/product-upgrades-plan-group.png)

Adibidez, **Free plan** (Plan Lehen), **Basic Plan** (Plan Lehen) eta **Premium Plan** (Plan Premium) iragaildu dira. Erabiltzaileak **Free Plan**-an abonatu dituztenak **Premium Plan**-era iragailu nahi du eta "Basic Plan"a upgrade opszio gisa ez ikusten nahi du. Zer egin behar duzu hori da, Free Plan eta Premium Plan guztietan berria plan grupu ematen, testuaren ondoreko eskaunak (screenshots) arau.

![Free Plan product page with High End plan group assigned](/img/config/product-upgrades-free.png)

![Premium Plan product page with High End plan group assigned](/img/config/product-upgrades-premium.png)

Hau da, Ultimate Multisite-i esan behar du que network-ean plan batzuk "High End" dela eta upgrade edo downgrade teklatzean, pertsona bereko planteamenduak (plans) berrekin High End familia-tik izango dira.
