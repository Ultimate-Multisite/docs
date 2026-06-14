---
title: Ndiri kuvaingira sei mapping ye domain?
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# Ndiri Kuti Kuratidzi Mapping ya Domain (v2)

_**CHINDIRA CHINDIRA: Iriweyi iri rinoreferira ku Ultimate Multisite version 2.x.**_

Chimwe chete chinekuura kwemakore anonyanyera kwepremium network ndiko kunenge kune chokwadi, kuti uone vana vako vanogona kuita chokwadi chekuti vange domain top-level kuvanhu vavo. Panguva dzose, izvi zvinhu zvinobuda sei: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) kana [_**joesbikeshop.com**_](http://joesbikeshop.com)? Iyi ndiyo chokwadi chinekuura Ultimate Multisite, saka hauna kune kutenda plugins dzine vanhu vose.

## Domain mapping ndiri iweyi?

Se zviri kuita kunoda, domain mapping ndiko uwezi waUltimate Multisite kuti uongere rurimi rwako rine custom domain uye uone rurimi runogone kuita mapping kune site yese munzvimbo (network) neuriwo domain.

### Sei kuratidza domain mapping mu Ultimate Multisite Network yako

Domain mapping inoda zvinhu zvinoreva kuti iwe unenge uri kuita. Saka, ndiri chokwadi kuti Ultimate Multisite chinogona kungekuita nzira yese yakakwana kwako, saka hauna sharo.

Panguva inoshandiswa Ultimate Multisite, wizard (mabasa) ichiita zvinhu zvinodawo, izvi zvichiri kuita sunrise.php uye kuitira folder inotariswa. **Wizard haizovaka kuti uende mberi mpfaro kunge iwe usina kukoma nguva iyi.**

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Iyi ndiyo, kana Ultimate Multisite installation wizard yakakoma kuita setup yenyika yako, unogona kuita mapping ya domain custom ngayeri.

Chii chinekuura kuti domain mapping mu Ultimate Multisite haina kune kunge kuita. Unenge uenda kuita function ya WordPress Multisite native domain mapping kana nzira inotra yanyanya dzinotariswa dzine mapping.

Kana uchida kuva ndikubatsira kuti ndikubatsire nemafungiro ako pamusoro pe WordPress.

Kana uchida kunyera (disable) mapping ya domain ya Ultimate Multisite kuti uonde kwemweya kune zvinoreta mapping dzine chinangwa chinotevera, unogona kuva nekuona ifeature iyi panguva **Ultimate Multisite > Settings > Domain Mapping**.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

Panguva iyi, unogona kutaurawo option ya **Force Admin Redirect** (Kutevera Admin Redirect). Option iyi inokubatsira kuti uonde kuona kuti vanhu vavo vanogona kuenda kwenye dashboard yavo ya admin pama domain dzavo dzinotevera kana subdomain chete, kana kuti pama dzine chinangwa chimiri.

Kana uri kuita **Force redirect to mapped domain** (Kutevera kune domain inotevera), vanhu vavo vanogona kuenda kwenye dashboard yavo ya admin pama custom domains chete.

Option ya **Force redirect to network domain** (Kutevera kune network domain) itaramba inogona kuti vanhu vavo vanogone kuenda kwenye dashboards yavo, kunyanya kana vanoda ku-sign in pama custom domains dzavo. Iyi inotevera zvinoreta chine chinangwa chimiri — vanhu vavo vanogone kuenda pama subdomain chete, pane vanoda ku-sign in pama custom domains dzavo.

Kana uri kuita **Allow access to the admin by both mapped domain domain and network domain** (Kubvumira kuenda kwenye admin nedomain inotevera uye network domain), vanhu vavo vanogone kuenda kwenye dashboards yavo ya admin pane subdomain uye pama custom domain chete.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

Kune nzira kubva kune mapping ya custom domain. Imwe ndiyo kuita mapping ye domain name yakatiye (mapa) kubva mu network admin dashboard se super admin, uye imwe inogona kuita kupamba pama subsite admin dashboard pane account page.

Asi munenge uchatanga kuita mapping ya custom domain kune subsites dzako mu network yako, unofanira kuona kuti **DNS settings** (mabasa ekutenderwa kwe DNS) ye domain name inowanikwa zvakanaka.

###

### Kuona kuti DNS settings ye domain inowanikwa zvakanaka

Kuti kuti kuti mapping iwe iwe kuitika, unofanira kuona kuti domain uyu uri kupfungwa kune IP address ye Network yako. Ndinonoda kuti uone IP address ye network - ip address ye domain inozivikanwa (where Ultimate Multisite inozivikanwa) - haina IP address ye custom domain uyo wantipa mapping. Kuti utsvaka IP address ye domain yakagadzirwa, tinonoda kuti uenda ku [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), kune misanidi, iwe vachikumbira.

Kuti mapping yekuonekane zvakanaka, unofanira kuita **A RECORD** munzvimbo inozivikanwa ye **DNS** yako kuti inopfungwa IP address iyo. DNS management inogara inotevera zvakawanda pakati pe domain registrars dzakasiyana-siyana, asi kune tutorials dzakawanda online dzinokubatsira kana uvaunoda kutsvaka " _Creating A Record on XXXX_ " where XXXX ndiyo registrar yako (ex.: " _Creating A Record on_ _GoDaddy_ ").

Kana uri kuona kuti unowanikwa zvinhu kubva pano, **taura support ye domain registrar yako** uye vanoita zvakanaka kune iwo munzvimbo iyi.

Kana uri kupfeka kuti vafana vako vaveone domain dzavo vekupfungwa (map), vachida kuita izvi vekuita vavo vekuti. Vamukumbire kuenda ku support ye registrar yavo kana vanokumbira kuti vaveone kuti vaingakwanisa kuita A Record.

### Kupfeka custom domain name se Super Admin

Kana uri kupfungwa se super admin munzvimbo yako, unogona kuita uye kuita management kwecustom domain names zvakatarisa kuenda kune **Ultimate Multisite > Domains**.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Pasi munyore pasi pano, unogona kuklikira button we **Add Domain** uyu upiwe mupfupi uye uyu uva modal window inotipa kuita nekuita uye kuisa **custom domain name**, **the subsite** unoda kuteerera custom domain name iye, uye kuita zvinhu zvinoda kuti uisa se **primary domain** kana chero. (ziva kuti unogona kuita mapping we **domain names dzakawanda kune subsite imwe**).

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

Panguva uyu wese waifamba nekuisa zvinhu, unogona kuklikira button we **Add Existing Domain** pamusoro.

Izvi zvinotanga kuratidza uye kuita verification nekugadzirisa DNS information ya custom domain. Ugoonawo log pamusoro paunyangwe kuti ufuwe process inozviva. Izvi zvinhu zvichakanaka kunge kuva kune miniti miviri kuti zvinokumbira.

Ultimate Multisite v2.13.0 inogadzira automatically internal domain record kana site yakachena yakagadzirwa pamusoro we host inotevera kuti itizwiswa se domain ya chero. Kana host iwe ndiyo primary domain yenyika, kana iye yeho base domains dzakashandiswa mu field ye **Site URL**, zvinhu zvinogadzirwa zvemapped-domain dzine automatic zvinogadzirwa kuti base domain inenge inoshandiswa nesite dzese dzinoshandisa.

**Stage** kana status inofanira kuva kubva **Checking DNS** kune **Ready** kana zvose zvakagadzirwa zvakanaka.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Kana uingine domain name, unogona kuona zvinhu zvakawanda pamusoro yayo. Unenge uchiramba uone zvakanaka:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Stage:** Ichi ndiri iye stage inozvisono domaini riri. Kana uchida domaini wako, zvichakaitika kuti ichiingave pamba **Checking DNS**. Kuratidzo, izvi zvichakutenderera kuita neDNS entries uye kuitira kuti zvinonzi zvino zvinhu zvacho zviri ndiri zvakanaka. Ndondzo, domaini ichaunganidzirwa pamba **Checking SSL**. Ultimate Multisite ichachinja kana domaini inenge inoratidza SSL kana haina, uye ichachinja domaini yako kuva **Ready** kana **Ready (without SSL)**.

**Site:** Ichi ndiri subdomain inozvinowanikwa nemu domain iye. Domain inozvinonzi izvi ichoichiratidza content ya site iye.

**Active:** Unogona kuita kuti option iyi ine kana haina kuti ufanane kana kufamba nedomaini.

**Is Primary Domain?:** Vamwe vana vakurudzwa (customers) vanogona kuva nemapamba anonyanyorwa (mapped domain) yakawanda pamba yese dzinowanikwa kune site iye. Shandisa option iyi kuti ufanane kana iye ndiri domaini inonyanyorwa (primary domain) yese dzinowanikwa kune site iye.

**Is Secure?:** Kunyangwe Ultimate Multisite ichichinja kana domaini inenge inoratidza SSL kana haina pamba itai, unogona kuita kuti ufanane kuti utangea domaini neine kana haina SSL certificate. Ndinonzi kuti zvinhu izvi: kana website haine SSL certificate uye unoda kuitira kuti utangea neine SSL, zvichakanaka kuti zvishandisa errors (matambudziko) anogona kuita.

### Kuita mapping custom domain name se Subsite user

Subsite administrators vanogonawo kuita mapping custom domain names kubva mu subsite admin dashboard yavo.

Mazuva akapfuma, unofanira kuona kuti ufanane option iyi pamba **Domain mapping** settings. Shoko screenshot:

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Unogonawo kuitira kana kuita configuration option iyi pamba **Plan** level kana product options mu **Ultimate Multisite > Products**.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

Nekuti iye nzira dzese optioni dziri kuonekwa uye kana mutsva we subsite anogone kuita mapping ye custom domain names, mutsva we subsite anogona kuona metabox yakaita **Account** page inosanganiswe ne **Domains**.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

Mutsva anogona kuita click pama button ye **Add Domain** uye izvi dzochiratidza modal window inosanganiswe neinstruktsa dzakasiyana.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

Mudzidzi anogona kuita click pama **Next Step** uye kuenda kuitira custom domain name. Anogonewo kunge anenge anaona kuti iwe ndiyo primary domain kana pane zvakasiyana.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Click pama **Add Domain** dzochiratidza kuratidza (verify) uye kuva neDNS information ye custom domain.

### Zvinhu Pamusoro PeDomain Syncing

Domain Syncing ndiyo nzira inosanganiswe inozuva kuti Ultimate Multisite inenge inowanikira custom domain name yako mu hosting account yako seadd-on domain **kuti mapping yone iwe ine zvibatsiri**.

Domain syncing inogona kuenda nekuti vendor ya hosting yako inenge inowanikira (integrate) nefeature ye domain mapping ya Ultimate Multisite. Hurei, vendor aya vanowanikwa kuti ndivo _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ uye _Cpanel._

Kana integration ya host-provider inenge yakati, Ultimate Multisite inogona kuitira (enqueue) DNS kana subdomain creation task yezvinhu zvakachengetedza nesite dzakachengetedza. Kana usina integration inosimbisa task iyi, background job inozviswa kuti isingave kuva nenzira dzinovaka queue entries. Checks dzineDNS uye SSL dzine mapped domains dziri kunge dziri kuenda zvakanaka kuparamusika pfungwa yezvinhu zvedomain (domain-stage process).

Iriro uchikoro uyu integration mu Ultimate Multisite settings under **Integration** tab.

![Integrations tab in Ultimate Multisite settings showing hosting providers](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Ziva kuti kana hosting provider yako hairi muuno wese weve vachangoperekedzi veupenyu veunoda, **unoda ku sync kana kuenda ku add domain name** kune akaunti yako yehosting._
