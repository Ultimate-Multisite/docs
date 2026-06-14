---
title: Kontribuari kontua
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Itzako Klientaren Kontua Pagelua (v2)

_**GARRAPEN ESENTZIALA: Hau artikulu Ultimate Multisite bertsio 2.x-era referentzia egiten du.**_

Eskaintarileak irralditzen dutenean plan bat networkan ematen dituztenak, kabiz une website batekin eta bere dashboard batekin erabilgar da, zehat informazioa hartuz (aldeak, membership-ak, domain-ak, planaren limitazioak, etc.).

Hau tutorial-an, bizitzeko kontuaren pagelua bidez gurekin eginduko da eta zerler irikusten duzu eta egin dezakezu horrek handiagoa.

## Kontua Pagelua

Kontua pagelua, customer-en dashboard-ean **Account** (Kontua) funtziala klikizenean erabil da.

![Customer dashboard-eko Account menua](/img/account-page/account-menu.png)

Sovereign tenant networketan, Ultimate Multisite v2.13.0 hori kontu administrazioaren esperientzia handiagoan jarraitzen du. Customer bat kontua irakusten du, sovereign tenant batetik checkout, billing, invoice, site-management, template-switching edo domain-mapping akzio bat egin du, akzioak main-site customer panelera itzultzen da, nahiz ulertzeko sistema eta membership-aren rekordeak networkaren billing eta membership-aren rekordeak autoritatibo geratu behar dira.

Customer bat sovereign tenant batetik iruztelakoan, main-site customer panelera tenant site-era itzultzeko linku bat barne hartzen da. Hau itzultzeko linkua Ultimate Multisite-ek erabilera targeta (customer-en website bat) bertsioa bidez eskaintzen duenean gaurkiz erabil da, horrek arbitrary redirects ezarri eta tenant workflow-aren aukera geratu egiten du.

![Customer account page overview](/img/account-page/overview.png)

Hau klik egin ondoren, bere membership-aren, billing address-aren, invoice-ak, domain-ak, site-aren limitazioak eta **Site Template** (networkan ematen dutenean) aldatzeko aukera izango duzu.

Erakunde bat edo beste plan batean membership aldatu dezakezu, edo sizkaintzen duten beste package edo serbizio bat eritzu dezakezu. Harri lehen lehen parte guztietan erabilizten dugu.

### Zerbitzuaren Membentasun Kontrolua:

Zerbitzariak website-arenak ondoren dagoen lehen blokoan, horiek erabiliko plan eta zerbitzu/paketak zehazten duenean eritzeko da. Blokoan membentasunaren numeroa, beregunean iragitzitako gordoia, plan eta zerbitzua/paketak zer kostatzen duen eta membruntasunari buruzko iragitzak zerbait egin daiko datu-erregistroa ere erakusten da. Membentasunaren **Aktibo** (Active), **Ezdatuta** (Expired) edo **Cancelatu** (Canceled) dagoela ere ikusi joateke.

![Membership overview showing plan, amount, and billing details](/img/account-page/membership-card.png)

Hor blokoaren hemenan, zerbitzariak **Hau Sitea Ez da** (About This Site) eta **Site Limitazioak** (Site Limits) blokuekin ikusi joateke. Horrek bere planeko guztietako limitazioak erakusten du: disko espazioa, posts, lapuak, bisitatzak, etc... Horren limitazioak **Ultimate Multisite > Products** dauden plan-erregistroan konfiguratzen doli dira.

![About This Site and Site Limits blocks showing plan limitations](/img/account-page/site-limits.png)

**Zerbitzariak** (Your Membership) duen hakugarren bokoan, zerbitzariak **Gehiago Aldatu** (Change) klik egin dezake. Horrek zehazten duenean, disponibile diren guztietako plan eta paketak/zerbitzu hauek erakusten dira. Plan batekin aukeratu beharko luke, membruntasunaren limitazioak orainko limitazioetan oinarritzen da - zerbaitatu edo hautatzea (downgrading) dela ere ez da.

Aurrera, zerbitzariak orainko membruntasunarekin paketak edo zerbitzu hauek erabiliz (adibidez, gehiago disko espazio edo bisitatzak), orainko membruntasuna aldatu ez da, baina berria paketak-ek haserako da.

Ez dut ezartu behar: coupon kodeak membruntasunaren aldaketa lapurialdean ez dira gehitu dezake. Zerbitzariak lehen membruntasun bokoan coupon koda erabiltu zuela, koda honekin ere aplikatzen da.

### Iragitzaren Adresaren Aldatzea:

Kontu lapean, irkiastulari ere eskaintzen dituzte dira billing addressa aldatzeko. Berria, _Billing Address_ (Irkiastularen Adresa) erabilizik **Update** (Aldatu) duen klik egin behar dute.

![Billing Address section with Update button](/img/account-page/billing-address.png)

Berria finestra bat eratu da irkiastularia. Horrek egin behar duena da aderazkia ditu, eta _Save Changes_ (Aldakuntzak Saldu) duen klik egin.

![Update billing address form](/img/account-page/billing-address-form.png)

### Site Templatea Aldatzea:

Irkiastulari site templateak aldatzeko aukera emateko, **Ultimate Multisite > Settings > Sites** (Konfigurazioa > Siteak) funtziokoan aurkitu behar duzu eta **Allow Template Switching** (Template-ak Aldatzea Eskaintzea) opsioa onartu behar duzu.

Mendean, **Ultimate Multisite > Products** (Produktoak) funtziokoan, planak aukeratu eta **Site Templates** (Site Templateak) tabera jarri. **Allow Site Templates** (Site Templateak Eskaintzea) opsioa onartu duzu eta **Site Template Selection Mode** (Site Template Alegarazio Modua) anbean, **Choose Available Site Templates** (Eskaintzak Aurreratu Site Templateak Alegaratu) opsioa aukeratu duzu.

![Product site templates tab with template selection mode](/img/config/product-site-templates.png)

Websitean aurkitu nahi duten site template guztiek ikusten dituzte duzu. Zer batzuk eskaintzeko eta zerbat ez eskaintzen duzun, horiek aukeratu duzu. Ez aldatu behar duzu, baina merkataritza (checkout) formulari ere erabilizten duzu, zein template bat **Not Available** (Ez Eskaintzen da) olarak aukeratzen ari den bat ez dago planaren irekitze lapean.

Aurrerkin irkiastulariek bere kontu lapean **Change Site Template** (Site Templatea Aldatu) klik egin dezaketak.

![Change Site Template button on account page](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 da, template switch panel bat rediseinado dagoen. Panelak **current-template card** (templatea aktuala kartela) batekin hasten da, oteera aldatzeko aukerio baino lehen template hau aktibo dagoela ikusteko irkiastulariek eskatzen da.

Ezinbestu iragibide dagoen erabilera duten web sailkioak (site templates) listaren ezberdinet ez dauden artean ikusten duzun bitartean, kliuntzak opsioak jartzen dute. Horrek eskatzen duzun plan-ekonbatzari ematutako sailkioak erakunde ditu, baina orain dagoen aukera ez hasi egiten duzun bitartean ere.

![Planaren erabilera duten web sailkioak listaren eskaera](/img/config/site-templates-list.png)

Batendu horrek jartzen duen bat ere, aldatzeko aukera ematen daiteke. Horren ondoren, aldatzea konformatu behar duzun bitartean, aldatzea konformatu dituzte.

![Web sailkioa aldatzeko konformatu dialogoa](/img/account-page/template-switch-confirm.png)

Konformatu onartu eta **Process Switch** (Aldatzea procesatu) klik egin ondoren, berria web sailkioa erabiliko da zure kliuntzakaren webgunean.

Kliuntzak ere panel hauetik **Reset current template** (Ordaurean dagoen sailkioa ordaindokoa) erabili ditzak duzun bitartean ordaurean dagoen sailkioa itxura dezaten dute. Beste sailkioa aldatzeko bidez, sailkioa ordaindokoa daiteke web-kontuentu onartzea, baina kliuntzak ordaurean dagoen Sailkioa ordaindokoa jakin duzun bitartean ere konformatu behar dute.

### Custom Domainak jodezpena:

Zure kliuntzak ere hori planaren bitartean web-kontuaren lapenbearekin custom domain bat jodezpen aukera izango da. Zure kliuntzak custom domainak erabil dezaten bitartean, **Ultimate Multisite > Settings >** **Domain Mapping** (Jodezpena domainak) funtziokoan jarraitu.

**Enable Domain Mapping** (Jodezpena domainak aktiboa izatea) aukera onartu. Horrek kliuntzak custom domainak erabil dezaten bitartean jaringanaren lehen zere.

Domain mappinga produkzio baten bitartean aktiboa izan daitezkeen ere kontrolatu, gogoratu ez duzun. Hau da, produkzio batzuk custom domainak erabiliz ez duten kliuntzak limitatzea posible daiteke.

**Ultimate Multisite > Products** (Produkzioak) funtziokoan jarraitu. Zure aukera duen plana desitu eta **Custom Domains** (Custom Domainak) tab-era jarraitu. **Allow Custom Domains** (Custom Domainak jartzea onartu) aukera onartu.

![Custom Domains tabarekin Allow Custom Domains aktiboa izatea](/img/config/product-custom-domains.png)

Honek daude guztiei abonatuutako kosturiet ez dute custom domainak erabilera. Aitzon, Account lapean, kosturiet ez dute **Add Domain** (Domainu gehitu) klikizten funtuz custom domain bat gehitzea.

![Add Domain button on the account page](/img/account-page/add-domain-button.png)

Ireki aukera gaurren irralakilean, kosturiet iraintzeko testua ematen du, DNS recordak nola udatu behar dute custom domain hau aaportuarekin lan egin dezaten.

![DNS instructions shown when adding a custom domain](/img/account-page/add-domain-dns.png)

Hau testua editatu daiteke (du) **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions** (Domain Maping > Hau lehen domainu iraintzeko aukera).

![Add New Domain Instructions setting in Domain Mapping](/img/config/settings-domain-mapping.png)

Hau da domain mappingaren allakidetza lapuen guztia:

![Domain mapping settings full page](/img/config/settings-domain-mapping-full.png)

**Next Step** (Irudia lehenen irudiari) klikizten sonra, kosturiet ez dute beraien custom domainaren namena gehitzea eta hori primary bat izango da non nahi duela aukeratu. Ez aldatu behar dute beraien website-ekara custom domain bat edo gehiago erabilera, gertatzen daiteke horiek bat izango da primary bat.

![Custom domain name entry with primary domain option](/img/account-page/add-domain-primary.png)

**Add Domain** (Domainu gehitu) klikizten ondoren, domain hau kosturietaren account-ean gehituko da. Horrek egin behar duena hori da, beraien domain registrarren DNS recordak udatu behar dute custom domain hauarekin.

### Paslora Aldatzea:

Account dashboardan, kosturiet ez dute **Change Password** (Paslora aldatu) klikizten funtuz paslora aldatzea ereiteke.

![Change Password button on account page](/img/account-page/change-password-button.png)

Hau da irkurri eta berria finestra bat erakusten da, non customer-ek password-a dagoen eta berria password-a erabiltzea behar dute.

![Change password form with current and new password fields](/img/account-page/change-password-form.png)

### Peligrosko zona:

Menduak iki bi opszio hauek ere erakusten duena **Peligrosko zohain** (Danger Zone) partean: **Sitea borratzea** (Delete Site) eta **Kontua borratzea** (Delete Account). Horrek gehiago Peligrosko zohain partean dago, koska hori bi akzio ez dira itxarri nahi duten. Hau iki bi akzioak ez dira itxarri nahi duten. Hau customer-ek bere websteina edo kontua borratzen duenean, ez dute itxarri nahi duten.

![Danger Zone with Delete Site and Delete Account options](/img/account-page/danger-zone.png)

Hau bi opszio bat klikatzen duenean, berria finestra bat erakusten da, non bere websteina edo kontua borratzeko opsioa onartzea behar dute eta hori ez dago itxarri nahi duten prozesu dela adierazten duena.

![Delete Site confirmation dialog](/img/account-page/delete-site-confirm.png)

![Delete Account confirmation dialog](/img/account-page/delete-account-confirm.png)

Bere websteina borratzen duenean, bere kontua eta membership-ek ez dira itxarri nahi duten. Berria, bere webstei guztia kontenientzia aldatu behar dute. Bere kontua borratzen duenean, bere websteiak, membership-ek eta hori kontua esaitzen informazioak guztiz borratuko dira.
