---
title: Sut i Ffurfweddu Mapio Parthau
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Sut i Ffurfweddu Mapio Parthau (v2) {#how-to-configure-domain-mapping-v2}

_**NODYN PWYSIG: Mae’r erthygl hon yn cyfeirio at Ultimate Multisite fersiwn 2.x.**_

Un o nodweddion mwyaf pwerus rhwydwaith premiwm yw’r gallu i gynnig cyfle i’n cleientiaid atodi parth lefel uchaf i’w gwefannau. Wedi’r cyfan, pa un sy’n edrych yn fwy proffesiynol: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) neu [_**joesbikeshop.com**_](http://joesbikeshop.com)? Dyna pam mae Ultimate Multisite yn cynnig y nodwedd honno wedi’i chynnwys, heb yr angen i ddefnyddio ategion trydydd parti.

## Beth yw mapio parthau? {#whats-domain-mapping}

Fel y mae’r enw’n awgrymu, mapio parthau yw’r gallu a gynigir gan Ultimate Multisite i dderbyn cais am barth personol a mapio’r cais hwnnw i’r wefan gyfatebol yn y rhwydwaith gyda’r parth penodol hwnnw wedi’i atodi.

### Sut i sefydlu mapio parthau ar eich Rhwydwaith Ultimate Multisite {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Mae mapio parthau yn gofyn am rywfaint o sefydlu ar eich rhan er mwyn gweithio. Yn ffodus, mae Ultimate Multisite yn awtomeiddio’r gwaith caled i chi fel y gallwch fodloni’r gofynion yn hawdd.

Yn ystod gosodiad Ultimate Multisite, bydd y dewin yn copïo ac yn gosod **sunrise.php** yn awtomatig i’r ffolder dynodedig. **Ni fydd y dewin yn caniatáu i chi barhau nes bod y cam hwn wedi’i gwblhau**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Mae hyn yn golygu, unwaith y bydd dewin gosod Ultimate Multisite wedi cwblhau sefydlu eich rhwydwaith, gallwch ddechrau mapio’r parth personol ar unwaith.

Sylwch nad yw mapio parthau yn Ultimate Multisite yn orfodol. Mae gennych opsiwn i ddefnyddio swyddogaeth mapio parthau frodorol WordPress Multisite neu unrhyw ateb mapio parthau arall.

Os bydd angen i chi analluogi mapio parthau Ultimate Multisite er mwyn rhoi lle i atebion mapio parthau eraill, gallwch analluogi’r nodwedd hon o dan **Ultimate Multisite > Settings > Domain Mapping**.

![Tudalen gosodiadau Mapio Parthau yn dangos ailgyfeirio gweinyddol, neges fapio ac opsiynau DNS](/img/config/domain-mapping-settings.png)

Yn union o dan yr opsiwn hwn, gallwch hefyd weld yr opsiwn **Force Admin Redirect**. Mae’r opsiwn hwn yn caniatáu i chi reoli a fydd eich cwsmeriaid yn gallu cyrchu eu dangosfwrdd gweinyddol ar eu parth personol a’u his-barth, neu dim ond ar un ohonynt.

Os dewiswch **Force redirect to mapped domain** , dim ond ar eu parthau personol y bydd eich cwsmeriaid yn gallu cyrchu eu dangosfwrdd gweinyddol.

Bydd yr opsiwn **Force redirect to** **network domain** yn gwneud yr union gyferbyn - dim ond ar eu his-barth y caniateir i’ch cwsmeriaid gyrchu eu dangosfyrddau, hyd yn oed os ydynt yn ceisio mewngofnodi ar eu parthau personol.

Ac mae’r opsiwn **Allow access to the admin by both mapped domain domain and network domain** yn caniatáu iddynt gyrchu eu dangosfyrddau gweinyddol ar yr is-barth ac ar y parth personol.

![Cwymplen Ailgyfeirio Gweinyddol wedi’i hehangu yn dangos y tri opsiwn ailgyfeirio](/img/config/domain-mapping-redirect-options.png)

Mae dwy ffordd i fapio parth personol. Y cyntaf yw drwy fapio enw’r parth o ddangosfwrdd gweinyddol eich rhwydwaith fel yr uwch-weinyddwr, a’r ail yw drwy ddangosfwrdd gweinyddol yr is-wefan o dan dudalen y cyfrif.

Ond cyn i chi ddechrau mapio’r parth personol i un o’r is-wefannau yn eich rhwydwaith, bydd angen i chi sicrhau bod **gosodiadau DNS** enw’r parth wedi’u ffurfweddu’n gywir.

###

### Sicrhau bod gosodiadau DNS y parth wedi’u ffurfweddu’n gywir {#making-sure-the-domain-dns-settings-are-properly-configured}

Er mwyn i fapio weithio, mae angen i chi sicrhau bod y parth rydych yn bwriadu ei fapio yn pwyntio at gyfeiriad IP eich Rhwydwaith. Sylwch fod angen cyfeiriad IP y Rhwydwaith arnoch - cyfeiriad IP y parth lle mae Ultimate Multisite wedi’i osod - nid cyfeiriad IP y parth personol rydych am ei fapio. I chwilio am gyfeiriad IP parth penodol, rydym yn awgrymu mynd i [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), er enghraifft.

I fapio’r parth yn gywir, mae angen i chi ychwanegu **A RECORD** yn eich ffurfweddiad **DNS** sy’n pwyntio at y **cyfeiriad IP** hwnnw. Mae rheoli DNS yn amrywio’n fawr rhwng gwahanol gofrestrwyr parthau, ond mae digon o diwtorialau ar-lein yn ymdrin â hynny os chwiliwch am " _Creu A Record ar XXXX_ " lle XXXX yw’ch cofrestrydd parth (e.e.: " _Creu A Record ar_ _GoDaddy_ ").

Os ydych yn cael trafferth gwneud i hyn weithio, **cysylltwch â chymorth eich cofrestrydd parth** a byddant yn gallu eich helpu gyda’r rhan hon.

Os ydych yn bwriadu caniatáu i’ch cleientiaid fapio eu parthau eu hunain, bydd yn rhaid iddynt wneud y gwaith ar y rhan hon eu hunain. Cyfeiriwch nhw at system gymorth eu cofrestrydd os na allant greu’r A Record.

### Mapio enw parth personol fel Super Admin {#mapping-custom-domain-name-as-super-admin}

Pan fyddwch wedi mewngofnodi fel uwch-weinyddwr ar eich rhwydwaith, gallwch ychwanegu a rheoli enwau parthau personol yn hawdd drwy fynd o dan **Ultimate Multisite > Domains**.

![Tudalen rhestr Parthau yn Ultimate Multisite](/img/admin/domains-list.png)

O dan y dudalen hon, gallwch glicio ar y botwm **Add Domain** ar y brig a bydd hyn yn agor ffenestr foddol lle gallwch osod a llenwi’r **enw parth personol** , **yr is-wefan** rydych am gymhwyso’r enw parth personol iddi, a phenderfynu a ydych am ei osod fel yr **enw parth cynradd** ai peidio (sylwch y gallwch fapio **enwau parth lluosog i un is-wefan**).

![Modd ychwanegu Parth gydag enw parth, dewiswr gwefan a thogl parth cynradd](/img/admin/domain-add-modal.png)

Ar ôl rhoi’r holl wybodaeth i mewn, gallwch wedyn glicio’r botwm **Add Existing Domain** ar y gwaelod.

Bydd hyn yn dechrau’r broses o wirio a nôl gwybodaeth DNS y parth personol. Byddwch hefyd yn gweld log ar waelod y dudalen i chi ddilyn y broses y mae’n mynd drwyddi. Gall y broses hon gymryd ychydig funudau i’w chwblhau.

Mae Ultimate Multisite v2.13.0 hefyd yn creu'r cofnod parth mewnol yn awtomatig pan gaiff safle newydd ei greu ar westeiwr y dylid ei drin fel parth fesul safle. Os mai'r gwesteiwr yw prif barth y rhwydwaith, neu un o'r parthau sylfaen ffurflen dalu a rennir sydd wedi'u ffurfweddu ar faes **Site URL**, caiff y cofnod parth wedi'i fapio awtomatig ei hepgor fel bod y parth sylfaen a rennir yn parhau ar gael i bob safle sy'n ei ddefnyddio.

Pan fydd cwsmer yn cofrestru parth newydd drwy Domain Seller v1.3.0 neu'n fwy newydd, mae Ultimate Multisite yn mapio'r parth cofrestredig i safle rhwydwaith y cwsmer yn ddiofyn. Nid oes angen i weinyddwyr ychwanegu cofnod parth wedi'i fapio ar wahân mwyach ar ôl cofrestriad llwyddiannus oni bai eu bod am addasu opsiynau megis y faner prif barth, cyflwr actifadu, neu drin SSL.

Dylai'r **Cam** neu'r statws newid o **Checking DNS** i **Ready** os yw popeth wedi'i osod yn iawn.

<!-- Sgrinlun ddim ar gael: Rhes parth yn dangos y cam Checking DNS yn y rhestr parthau -->

<!-- Sgrinlun ddim ar gael: Rhes parth yn dangos y cam Ready gyda'r dangosydd statws gwyrdd -->

Os cliciwch ar enw'r parth, byddwch yn gallu gweld rhai opsiynau ynddo. Gadewch i ni edrych yn gyflym arnynt:

![Tudalen manylion parth gyda thoglau cam, safle, gweithredol, cynradd ac SSL](/img/admin/domain-edit.png)

**Cam:** Dyma'r cam y mae'r parth ynddo. Pan fyddwch yn ychwanegu'r parth gyntaf, mae'n debygol y bydd ar y cam **Checking DNS**. Bydd y broses yn gwirio'r cofnodion DNS ac yn cadarnhau eu bod yn gywir. Yna, bydd y parth yn cael ei roi ar y cam **Checking SSL**. Bydd Ultimate Multisite yn gwirio a oes gan y parth SSL ai peidio ac yn categoreiddio eich parth fel **Ready** neu **Ready (without SSL)**.

**Safle:** Yr is-barth sy'n gysylltiedig â'r parth hwn. Bydd y parth wedi'i fapio yn dangos cynnwys y safle penodol hwn.

**Gweithredol:** Gallwch doglo'r opsiwn hwn ymlaen neu i ffwrdd i actifadu neu ddadactifadu'r parth.

**Ai Prif Barth?:** Gall eich cwsmeriaid gael mwy nag un parth wedi'i fapio ar gyfer pob safle. Defnyddiwch yr opsiwn hwn i ddewis ai hwn yw'r prif barth ar gyfer y safle penodol.

**A yw'n Ddiogel?:** Er bod Ultimate Multisite yn gwirio a oes gan y parth dystysgrif SSL ai peidio cyn ei alluogi, gallwch ddewis â llaw i lwytho'r parth gyda thystysgrif SSL neu hebddi. Sylwch os nad oes gan y wefan dystysgrif SSL ac rydych yn ceisio ei gorfodi i lwytho gyda SSL, gall roi gwallau i chi.

### Mapio enw parth personol fel defnyddiwr Is-safle {#mapping-custom-domain-name-as-subsite-user}

Gall gweinyddwyr is-safle hefyd fapio enwau parth personol o ddangosfwrdd gweinyddu eu his-safle.

Yn gyntaf, mae angen i chi sicrhau eich bod yn galluogi'r opsiwn hwn o dan osodiadau **Domain mapping**. Gweler y sgrinlun isod.

<!-- Sgrinlun ddim ar gael: Gosodiadau Domain mapping sy'n caniatáu i ddefnyddwyr is-safle fapio parthau drwy dogl Customer DNS Management -->

Gallwch hefyd osod neu ffurfweddu'r opsiwn hwn ar lefel y **Plan** neu opsiynau cynnyrch ar **Ultimate Multisite > Products**.

![Adran Parthau Personol ar dudalen golygu'r cynnyrch](/img/config/product-custom-domains.png)

Pan fydd unrhyw un o'r opsiynau hynny wedi'u galluogi ac y caniateir i ddefnyddiwr is-safle fapio enwau parth personol, dylai'r defnyddiwr is-safle weld metabox o dan y dudalen **Account** o'r enw **Parthau**.

<!-- Sgrinlun ddim ar gael: Metabox Parthau ar dudalen Account yr is-safle gyda botwm Ychwanegu Parth -->

Gall y defnyddiwr glicio'r botwm **Ychwanegu Parth** a bydd yn agor ffenestr foddol gyda rhai cyfarwyddiadau.

<!-- Sgrinlun ddim ar gael: Modal Ychwanegu Parth yn dangos cyfarwyddiadau cofnod-A DNS i ddefnyddwyr is-safle -->

Yna gall y defnyddiwr glicio **Cam Nesaf** a bwrw ymlaen i ychwanegu'r enw parth personol. Gallant hefyd ddewis ai hwn fydd y prif barth ai peidio.

<!-- Sgrinlun ddim ar gael: Ffurflen Ychwanegu Parth gyda maes enw parth personol a thogl prif barth -->

<!-- Sgrinlun ddim ar gael: Cam cadarnhau Ychwanegu Parth sy'n sbarduno dilysu DNS -->

Bydd clicio i **Ychwanegu Parth** yn dechrau'r broses o wirio a nôl gwybodaeth DNS y parth personol.

### Ynghylch Cydamseru Parthau {#about-domain-syncing}

Mae Cydamseru Parthau yn broses lle mae Ultimate Multisite yn ychwanegu'r enw parth personol at eich cyfrif cynnal fel parth ychwanegol **er mwyn i'r mapio parth weithio**.

Mae cydamseru parthau yn digwydd yn awtomatig os oes gan eich darparwr cynnal integreiddiad â nodwedd mapio parth Ultimate Multisite. Ar hyn o bryd, y darparwyr cynnal hyn yw _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ a _Cpanel._

Pan fydd integreiddiad darparwr cynnal yn weithredol, gall Ultimate Multisite hefyd giwio'r dasg creu DNS neu is-barth ar ochr y darparwr ar gyfer safleoedd sydd newydd eu creu. Os nad oes unrhyw integreiddiad yn gwrando am y dasg honno, caiff y swydd gefndir ei hepgor i osgoi cofnodion ciw dim gweithred. Mae gwiriadau DNS ac SSL ar gyfer parthau wedi'u mapio yn parhau i redeg drwy'r broses cam parth arferol.

Bydd angen i chi actifadu'r integreiddiad hwn yng ngosodiadau Ultimate Multisite o dan y tab **Integration**.

![Tab Integreiddiadau yng ngosodiadau Ultimate Multisite yn dangos darparwyr cynnal](/img/config/integrations-tab.png)

<!-- Sgrinlun ddim ar gael: Dolenni Ffurfweddu darparwr cynnal ar dab gosodiadau Integrations -->

_Sylwch os nad yw eich darparwr cynnal yn un o'r darparwyr hynny a grybwyllwyd uchod,**bydd angen i chi gydamseru neu ychwanegu'r enw parth â llaw** at eich cyfrif cynnal._
