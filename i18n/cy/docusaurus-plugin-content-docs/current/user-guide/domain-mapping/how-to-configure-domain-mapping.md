---
title: Sutaliad i ddefnyddio mapiadau domaint
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# Sut i'r Cyflenau Ddwyllian (v2)

_**NOTIADOLIA CRYTÔ: Mae'r ail-gorffennol hwn yn cyfeiriad i Ultimate Multisite versio 2.x.**_

Un o'r ffeithiau hanfodol ychwanegol mewn rheiniad pryderol yw'r gallu rhoi cyfle i'n cleientau eu chwilio i ddatblygu domain uchel ar ei safonau. Ar ôl hynny, beth sy'n dod yn ffurfiol: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) neu [_**joesbikeshop.com**_](http://joesbikeshop.com)? Dyma'r gallai Ultimate Multisite rhoi'r ffeithiau hyn yn ddefnyddiol, heb angen i ddefnyddio pluginau o'r trefn.

## Beth yw cyflenau domain (domain mapping)?

Fel y mae'n cael ei enw, mae cyflenau domain yn cyfathogh gan Ultimate Multisite i derbyn cais am domain uchel a chwarae y cais hwn i'r safle cywir yn y rheiniad gyda'r domain hwn wedi'i ddatblygu.

### Sut i sicrhau cyflenau domain ar eich Rheiniad Ultimate Multisite

Mae cyflenau domain yn angen rhywfaint o settaiddiad ar eich bod i fod yn gweithio. Fel chwarae, mae Ultimate Multisite'n awtomatig y gwaith hwn i chi felly i'ch ddefnyddio'r hanfodol yn llai.

During Ultimate Multisite installation, bydd y wizard yn cynnwys a chwarae **sunrise.php** i'r ffurf a gyfrifol. **Bydd y wizard nid yn sylw i chi ddarganfod i ddechrau heb fod y cynllun hwn wedi'i gwblhau.**

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Mae hyn yn ei golygu bod y wizard installaion Ultimate Multisite wedi gwblhau settaiddio eich rheiniad, gallwch chi ddechrau cyflenau'r domain uchel yn gyflym.

Rhaid i gydnabod bod cyflenau domain mewn Ultimate Multisite nid yn hanfodol. Mae gennych y wybodaeth i ddefnyddio ffurf cyflenau domain WordPress Multisite neu unrhyw ddefnyddiau cyflenau domain arall.

Byddwch yn angen i dysgu'r mapio (domain mapping) o Ultimate Multisite i gael ymlaen i ddefnyddio soluethau mapio eraill, gallwch osgoi'r fäfurfau hwn yn **Ultimate Multisite > Settings > Domain Mapping**.

![Page setigau mapio domain yn dangos redirect admin, message mapio a opsiyn DNS](/img/config/domain-mapping-settings.png)

Ar ôl y opsiwn hwn, gallwch hefyd gweld y opsiwn **Force Admin Redirect** (Gofal i'r redirect admin). Mae'r opsiwn hwn yn sylweddol i sicrhau a oes eich cleientau yn gallu cyrraedd eu dashboard admin ar eu domain custom a subdomain neu dim ond ar un o'u domainau.

Os gwahironwch **Force redirect to mapped domain** (Gofal i'r redirect i'r domain mapio), bydd y cleientau yn gallu cyrraedd eu dashboard admin dim ond ar eu domainau custom.

Bydd yr opsiwn **Force redirect to network domain** (Gofal i'r redirect i'r domain cyd-gynllunol) yn gwneud y chwarae yn gyflwyniad, bydd y cleientau yn cael eu gael cyrraedd eu dashboard dim ond ar eu subdomain, er i'r fath o ddeallu ar ei domainau custom.

A oedd yr opsiwn **Allow access to the admin by both mapped domain domain and network domain** (Gael cyrraedd y admin gan dros domain mapio a domain cyd-gynllunol) yn eu gael cyrraedd eu dashboard admin ar y subdomain a'r domain custom.

![Dropdown Admin Redirect wedi'i gyflwyno dangos y tri opsiyn redirect](/img/config/domain-mapping-redirect-options.png)

Mae rhai ddau o'r fforddau i mapio domain custom. Y cyntaf yw mapio'r enw domain o'r dashboard admin cyd-gynllunol eich neu'r super admin, a'r cyntaf arall yw trwy'r dashboard admin subsite yn y pethau cyfrifol (account page).

Ond cyn i chi entynnu'r mapio'r domain custom i un o'r subsites yn eich cyd-gynllunol, byddant yn angen i sicrhau bod **DNS settings** (setigau DNS) y enw domain wedi'i gyfrifol iawn.

###

### Sicrhu bod setigau DNS y domain wedi'u gyfrifol iawn

I'n rhaid i weithioch yn gweithio, rydych chi'n sicr y mae domaint y byddwch chi'n cyfathrebu yn pwyntio i'r adres IP o'r Network eich bod. Rhowch i'w sylw: rydych chi'n angen yr adres IP o'r Network - yr adres IP o'r domaint lle mae Ultimate Multisite wedi'i gweithredu, nid yr adres IP o'r domaint custom y byddwch chi'n cyfathrebu. I chwilio am adres IP o domaint penodol, rydych yn osgyfu i fynd i [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), felly.

I'raddwch y domaint yn dda, rydych chi angen ychwanegu **A RECORD** ar eich cyflenwiad **DNS** i'w cyfathrebu â'r **adres IP** hwnnw. Mae rheoli DNS yn gwahaniaeth iawn rhwng gweithredwyr domaint cyffredinol, ond mae ychwanegau online am hyn yn gyfoethu'n fawr os ydych chi'n chwilio " _Creating A Record on XXXX_ ", lle XXXX yw eich gweithredwr domaint (e.e., " _Creating A Record on_ _GoDaddy_ ").

Os ydych chi'n cael anwybyd yn dda i gael hyn i weithio, **cysylltu â chwaraeau cyd-derbyn eich gweithredwr domaint** ac bydd eu gaelch chi help gyda'r rhan hwn.

Os ydych chi'n teimlo bod chi'n gallu i'ch cleiention cyfathrebu eu domaint eu hunain, bydd eu hanes y gweithio ar yr rhan hwn eu hunain. Rhowch nhw i'r cysyllti â'r system chwaraeau cyd-derbyn eu hunain os oes gennych chi anwybyd i ddatblygu A Record.

### Cyfathrebu domaint custom fel Super Admin

Pan ydych chi'n cyflenwi fel super admin ar eich network, gallwch chi sicr ychwanegu a rheoli domaint custom yn dda gan fynd i **Ultimate Multisite > Domains**.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Ar ôl aradwn i'r peidiad hwnnw, gallwch chi gwchllt ar y bot **Add Domain** yn y ddefnyddiwr ac bydd hyn yn dangos gwyd-gwrth (modal window) lle gallwch setio a llenwi'r **enw domain cyfathrebu** (custom domain name), **y subsite** sy rydych chi eisiau cyflwyno'r enw domain cyfathrebu i, ac gwneud penderfynu o fewn ychwanegu'i fel **enw domain prynhawn** (primary domain) neu nid. (rwy'n sylwiwch fod gallwch chwarae **melyn domainau i un subsite**).

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

Ar ôl i ddefnyddio pob inform ei gynnwys, gallwch chi gwchllt ar y bot **Add Existing Domain** yn y cefn.

Bydd hyn yn dechrau'r proses o gyflwyno a cyfathrebu gair DNS o'r enw domain cyfathrebu. Gallwch hefyd gweld log yn y cefn y peidiad i chi dilyn y prosess sy'n mynd drwy ei chwarae. Gallai'r prosess hwn fod yn hanesydd o fewn minyf.

Mae Ultimate Multisite v2.13.0 hefyd yn creu'r record domain darnau yn awtomatig pan fydd site newydd yn cael ei creu ar host sydd i'w gael fel enw domain per-site. Os yw'r host yn enw domain prynhawn y rheol, neu un o'r enwau domain cyffredinol o ffurf checynau a'i gyflenwi ar field **Site URL**, bydd y record domain cyfathrebu awtomatig yn cael ei gwneud i fod y dain domain cyffredinol yn parhau i gydol ar bob site sy'n defnyddio'r.

Bydd y **Stage** neu'r statws yn newid o **Checking DNS** i **Ready** os oes angen gellau'r holl drefn yn cael ei setio'n iawn.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Os gwchllwch ar enw domain, gallwch chi weld rhai opsiynau yn ei ddefnyddio. Gallwn gweld ychwanegu'r holl ffurf:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Stade:** Mae'r stad y mae'r domaint yn. Pan mae'ch chi yn ychwanegu'r domaint, bydd yn ymddangos ar y stad **Checking DNS**. Bydd y proses yn gwera am y cyflenau DNS a sicr ydynt yn siaradol. Yna, bydd y domaint yn cael ei roi ar y stad **Checking SSL**. Bydd Ultimate Multisite'n gwera iddo os oes gynnwys SSL neu nid, ac fydd yn cyfeiriadwch eich domaint fel **Ready** neu **Ready (without SSL)**.

**Site:** Mae'r subdomain sy'n cael ei gysylltu â'r domaint hwnnw. Bydd y domaint a chyflenwyd yn dangos y cynnwys y site honno.

**Active:** Gallwch chi gwneud ystod y opsiwn hwn arôn neu allan i chynllunio neu ddeactivio'r domaint.

**Is Primary Domain?:** Gallai eich cleientau gynnwys mwy na un domaint a chyflenwyd ar gyfer pob site. Defnyddiwwch y opsiwn hwn i ddewiswch os yw hyn yn domaint prynhawn ar gyfer y site honno.

**Is Secure?:** Er mwyn yr hyn sy'n cael ei gwera gan Ultimate Multisite os oes gynnwys sertifig SSL neu nid قبل ychwanegu'r domaint, gallwch chi ddewis yn manwl i chwarae'r domaint gyda neu heb sertifig SSL. Rhowch i gyd yn oed fod y wefan nid oes ganddo sertifig SSL ac ydych chi'n ceisio chwarae'r domaint gyda SSL, gallai'n rhoi erosau i chi.

### Mae'r enw domaint manwl fel user subsite

Gall adeiladu subsiteau gynnwys cyflenwau domaint manwl o'u dashboard admin y subsite.

Ynno, rhaid i chi sicr bod chi wedi chynllunio'r opsiwn hwn yn cael ei chwarae o dan y setegau **Domain mapping**. Gweler y llwyniad isel.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Gallwch hefyd setio neu gyfarchnachu'r opsiwn hwn o dan y lefel **Plan** neu opsiynau produsg ar **Ultimate Multisite > Products**.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

Pan fydd ychwanegau hyn yn cael eu gael yn gaelog ac os oes gan ddynolwr subsite'n cael ei sylw'r mapio enwiau domain cyfathrebu, bydd y ddynolwr subsite'n gweld metabox o hyd ar y peidiad **Account** gyda'r enw **Domains**.

<!-- Screenshot unavailable: Metabox Domains ar peidiad Account y subsite gyda bot Add Domain -->

Gall yborydd chwarae ar y bot **Add Domain** ac bydd yn dangos gwydlyd (modal window) gyda rhai ddefnyddiau.

<!-- Screenshot unavailable: Ymddangos Add Domain modal gan ddefnyddwyr subsite am gyfarwyddiadau DNS A-record -->

Fe wneud yborydd ymlaen i **Next Step** ac osgoi i addo'r enw domain cyfathrebu. Gallai hefyd cryfalu a oes yma fydd yn domain prynhawn neu nid.

<!-- Screenshot unavailable: Ffurf Add Domain gyda field enw domain cyfathrebu a togg domain prynhawn -->

<!-- Screenshot unavailable: Cyflwyniad Add Domain sy'n gwellio gyfyngiad DNS -->

Ychwarae i **Add Domain** bydd yn dechrau y proses o chynllunio a cyfathregoli informadwyDNS o'r enw domain cyfathrebu.

### Am ystod Domain Syncing

Mae Domain Syncing yn broses lle mae Ultimate Multisite yn ychwanegu enw domain cyfathrebu i eich cyfrifau gweithredol fel domain addau **i'r mapio domain i weithredu**.

Mae sync domain yn digwydd yn awtomatig os oes gan eich darparwr gweithredol ychwanegiad â ffurf mapio domain Ultimate Multisite. Ar hyn o bryd, mae'r darparwyr gweithredol hyn yn _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ a _Cpanel._

Pan fydd ychwanegiad gan darparwr gweithredol yn weithredu, gall Ultimate Multisite hefyd ei ddefnyddio i chwarae'r gwaith DNS neu gyfathrebu subdomain o'r ochr ydarparwr gweithredol ar gyfer cyfrifau newydd a cael eu creu. Os nad oes unrhyw chwarae yn clywed â'r gwaith hwn, bydd y gwaith ystafell (background job) yn cael ei gwneud i ddarganfod ychwanegiadau o'r queue nes bod mae'n cael ei wneud. Mae chynllunio DNS a SSL ar gyfer domaina cyfathrebu yn parhau i gweithio trwy'r proses stadau domain normol.

Mae angen i chi gwneud ychwanegu'r cyfathrebu hwn ar gyfer setegau Ultimate Multisite o dan tab **Integration**.

![Tab Cyfathreg yn setegau Ultimate Multisite yn dangos prifau gweithredol](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Lienau Cysylltiadau Gweithredol ar tab Integration -->

_Rydych chi'n gwrthnos bod eich gweithredol nid yn un o'r gweithredolau a ddefnyddir isod, **mae angen i chi syncio neu ychwanegu'r enw domaint arall** i'ch cyfrifau gweithredol._
