---
title: Maitiro Ekumisikidza Kubatanidzwa kweDomain
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Maitiro Ekugadzirisa Kubatanidza Domain (v2)

_**CHIZIVISO CHAKAKOSHA: Chinyorwa ichi chinoreva Ultimate Multisite vhezheni 2.x.**_

Chimwe chezvinhu zvine simba zvikuru panetiweki yepremium kugona kupa vatengi vedu mukana wekubatanidza domain yepamusoro-soro kumasaiti avo. Pakupedzisira, ndeipi inotaridzika sehunyanzvi zvikuru: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) kana [_**joesbikeshop.com**_](http://joesbikeshop.com)? Ndokusaka Ultimate Multisite ichipa chinhu ichocho chakavakirwa-mukati, pasina kudiwa kwekushandisa maplugin echitatu-bato.

## Chii chinonzi kubatanidza domain?

Sezvinoratidzwa nezita, kubatanidza domain kugona kunopihwa neUltimate Multisite kugamuchira chikumbiro chedomain yakasarudzika uye kubatanidza chikumbiro ichocho nesaiti inoenderana munetiweki ine domain iyoyo yakabatanidzwa.

### Maitiro ekuseta kubatanidza domain paUltimate Multisite Network yako

Kubatanidza domain kunoda kumwe kuseta kwaunoita kuti kushande. Nerombo rakanaka, Ultimate Multisite inozviitira basa rakaoma kuitira kuti ugone kuzadzisa zvinodiwa zviri nyore.

Panguva yekuisa Ultimate Multisite, wizard ichakopa otomatiki uye kuisa **sunrise.php** kufolda yakatarwa. **Wizard haizokutenderi kuenderera kusvikira danho iri rapera**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Izvi zvinoreva kuti kana wizard yekuisa Ultimate Multisite yapedza kuseta netiweki yako, unogona kutanga kubatanidza domain yakasarudzika ipapo ipapo.

Cherechedza kuti kubatanidza domain muUltimate Multisite hakusi kwekumanikidzwa. Une sarudzo yekushandisa basa reWordPress Multisite rekuzvarwa rekubatanidza domain kana chero imwe mhinduro yekubatanidza domain.

Kana uchida kudzima kubatanidza domain kweUltimate Multisite kuti upe mukana kune dzimwe mhinduro dzekubatanidza domain, unogona kudzima chinhu ichi pasi pe**Ultimate Multisite > Zvirongwa > Kubatanidza Domain**.

![Peji rezvirongwa zveKubatanidza Domain rinoratidza kutungamira admin, meseji yekubatanidza uye sarudzo dzeDNS](/img/config/domain-mapping-settings.png)

Pasi chaipo pesarudzo iyi, unogonawo kuona sarudzo **Manikidza Kutungamira Admin**. Sarudzo iyi inokubvumira kudzora kana vatengi vako vachikwanisa kuwana admin dashboard yavo pazvose domain yavo yakasarudzika nesubdomain kana pane chimwe chete chazvo.

Kana ukasarudza **Manikidza kutungamira kudomain yakabatanidzwa** , vatengi vako vachangokwanisa kuwana admin dashboard yavo pamadomain avo akasarudzika chete.

Sarudzo **Manikidza kutungamira ku** **domain yenetiweki** ichaita zvinopesana chaizvo - vatengi vako vachangobvumidzwa kuwana madashboard avo pasubdomain yavo chete, kunyangwe vachiedza kusaina pamadomain avo akasarudzika.

Uye sarudzo **Bvumira kupinda kuadmin kuburikidza nezvose domain yakabatanidzwa uye domain yenetiweki** inovabvumira kuwana admin dashboards dzavo pazvose subdomain nedomain yakasarudzika.

![Dropdown yeKutungamira Admin yakavhurwa ichiratidza sarudzo nhatu dzekutungamira](/img/config/domain-mapping-redirect-options.png)

Pane nzira mbiri dzekubatanidza domain yakasarudzika. Yekutanga ndeyekubatanidza zita redomain kubva kunetwork admin dashboard yako se super admin uye yechipiri iri kuburikidza nesubsite admin dashboard pasi pepeji reakaundi.

Asi usati watanga kubatanidza domain yakasarudzika kune imwe yemasubsite munetiweki yako, uchafanira kuva nechokwadi chekuti **zvirongwa zveDNS** zvezita redomain zvakagadziriswa nemazvo.

###

### Kuva nechokwadi chekuti zvirongwa zveDNS zvedomain zvakagadziriswa nemazvo

Kuti kubatanidza kushande, unofanira kuva nechokwadi chekuti domain yauri kuronga kubatanidza iri kunongedzera kuIP address yeNetwork yako. Cherechedza kuti unoda IP address yeNetwork - IP address yedomain kwakaiswa Ultimate Multisite - kwete IP address yedomain yakasarudzika yaunoda kubatanidza. Kuti utsvage IP address yedomain chaiyo, tinokurudzira kuenda ku[Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), semuenzaniso.

Kuti ubatanidze domain nemazvo, unofanira kuwedzera **A RECORD** pakugadzirisa kwako kwe**DNS** inonongedzera ku**IP address** iyoyo. Kutungamira DNS kunosiyana zvikuru pakati pevanyoresi vemadomain vakasiyana, asi kune matutorial mazhinji online anotsanangura izvi kana ukatsvaga " _Kugadzira A Record paXXXX_ " apo XXXX ari munyoresi wedomain yako (semuenzaniso: " _Kugadzira A Record pa_ _GoDaddy_ ").

Kana ukazviwana uchinetseka kuita kuti izvi zvishande, **taura nerutsigiro rwemunyoresi wedomain yako** uye vachakwanisa kukubatsira pachikamu ichi.

Kana uchironga kubvumira vatengi vako kubatanidza madomain avo pachavo, vachafanira kuita basa pachikamu ichi ivo pachavo. Vatungamire kusisitimu yerutsigiro rwemunyoresi wavo kana vakazviwana vasingakwanisi kugadzira A Record.

### Kubatanidza zita redomain yakasarudzika seSuper Admin

Paunenge wakapinda se super admin panetiweki yako, unogona kuwedzera nekutarisira mazita emadomain akasarudzika zviri nyore nekuenda pasi pe**Ultimate Multisite > Domains**.

![Peji yerondedzero yeDomains muUltimate Multisite](/img/admin/domains-list.png)

Pasi pepeji iri, unogona kudzvanya bhatani re**Wedzera Domain** pamusoro uye izvi zvichaunza hwindo remodal kwaunogona kuseta nekuzadza **zita redomain yakasarudzika** , **subsite** yaunoda kushandisa zita redomain yakasarudzika pairi, uye kusarudza kana uchida kurimisa se**zita redomain guru** kana kwete (cherechedza kuti unogona kubatanidza **mazita emadomain akawanda kune subsite imwe**).

![Modal yeWedzera Domain ine zita redomain, sarudzo yesaiti uye toggle yedomain guru](/img/admin/domain-add-modal.png)

Mushure mekuisa ruzivo rwese, unogona kubva wadzvanya bhatani re**Wedzera Domain Iripo** pazasi.

Izvi zvichatanga maitiro ekusimbisa uye kutora ruzivo rweDNS rwedomain yakasarudzika. Uchaonawo log pazasi pepeji kuti utevere maitiro airi kufamba nawo. Maitiro aya anogona kutora maminitsi mashoma kuti apere.

Ultimate Multisite v2.13.0 inogadzirawo rekodhi yedomain yemukati otomatiki kana saiti itsva yagadzirwa pa host inofanira kubatwa sedomain yesaiti imwe neimwe. Kana host iri domain huru yenetiweki, kana imwe yemadomain ekutanga efomu rekubhadhara akagovaniswa akagadzirirwa pa **Saiti URL** field, rekodhi yedomain yakamapwa otomatiki inosvetukwa kuitira kuti domain yekutanga yakagovaniswa irambe ichiwanikwa kusaiti yega yega inoishandisa.

Kana mutengi achinyoresa domain itsva kuburikidza ne Domain Seller v1.3.0 kana itsva kupfuura iyoyo, Ultimate Multisite inobva yamapira domain yakanyoreswa kusaiti yenetiweki yemutengi nekusarudzika. Vatongi havachadi kuwedzera rekodhi yakaparadzana yedomain yakamapwa mushure mekunyoresa kwabudirira kunze kwekunge vachida kugadzirisa sarudzo dzakadai semureza wedomain huru, mamiriro ekushanda, kana kubatwa kweSSL.

**Danho** kana mamiriro anofanira kuchinja kubva pa **Kuongorora DNS** kuenda pa **Yagadzirira** kana zvese zvakagadzirwa zvakanaka.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Kana ukadzvanya pazita redomain, uchakwanisa kuona dzimwe sarudzo mukati maro. Ngatitarisei nekukurumidza kwadziri:

![Peji reruzivo rwedomain rine danho, saiti, zvinoshanda, huru uye matoggles eSSL](/img/admin/domain-edit.png)

**Danho:** Iri ndiro danho riri padomain. Paunotanga kuwedzera domain, ingangove iri padanho re **Kuongorora DNS**. Maitiro acho achaongorora zvinyorwa zveDNS uye asimbise kuti zvakarurama. Zvadaro, domain ichaiswa padanho re **Kuongorora SSL**. Ultimate Multisite ichaongorora kana domain iine SSL kana kuti kwete uye icharonga domain yako se **Yagadzirira** kana **Yagadzirira (pasina SSL)**.

**Saiti:** Subdomain yakabatana nedomain iyi. Domain yakamapwa icharatidza zvirimo zvesaiti iyi chaiyo.

**Inoshanda:** Unogona kuchinja sarudzo iyi on kana off kuti ushandise kana kudzima domain.

**Iri Domain Huru Here?:** Vatengi vako vanogona kuva nemadomain akamapwa anopfuura rimwe pasaiti yega yega. Shandisa sarudzo iyi kusarudza kana iri domain huru yesaiti chaiyo.

**Yakachengeteka Here?:** Kunyangwe Ultimate Multisite ichiongorora kana domain iine SSL certificate kana kuti kwete isati yaigonesa, unogona kusarudza nemaoko kurodha domain iine kana isina SSL certificate. Cherechedza kuti kana webhusaiti isina SSL certificate uye ukaedza kuimanikidza kurodha neSSL, inogona kukupa zvikanganiso.

### Kumapa zita redomain rakasarudzika semushandisi weSubsite

Vatongi veSubsite vanogonawo kumapa mazita edomain akasarudzika kubva pa dashboard yekutonga ye subsite yavo.

Kutanga, unofanira kuva nechokwadi chekuti wagonesa sarudzo iyi pasi pezvirongwa zve **Kumapa domain**. Ona mufananidzo uri pazasi.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Unogonawo kuseta kana kugadzirisa sarudzo iyi pasi pechikamu che **Plan** kana sarudzo dzechigadzirwa pa **Ultimate Multisite > Products**.

![Chikamu cheMadomain Akasarudzika papeji rekugadzirisa chigadzirwa](/img/config/product-custom-domains.png)

Kana chero dzesarudzo idzodzo dzagoneswa uye mushandisi we subsite achibvumidzwa kumapa mazita edomain akasarudzika, mushandisi we subsite anofanira kuona metabox pasi pepeji re **Account** rinonzi **Madomain**.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

Mushandisi anogona kudzvanya bhatani re **Wedzera Domain** uye richaunza hwindo remodal rine mimwe mirayiridzo.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

Mushandisi anogona kuzodzvanya **Danho Rinotevera** uye oenderera mberi nekuwedzera zita redomain rakasarudzika. Vanogonawo kusarudza kana iyi ichava domain huru kana kuti kwete.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Kudzvanya **Wedzera Domain** kuchatanga maitiro ekuongorora uye kutora ruzivo rweDNS rwedomain yakasarudzika.

### Nezve Kuwiriranisa Domain

Kuwiriranisa Domain inzira apo Ultimate Multisite inowedzera zita redomain rakasarudzika ku account yako yehosting sedomain yekuwedzera **kuti kumapa domain kushande**.

Kuwiriranisa domain kunoitika otomatiki kana mupi wako wehosting aine integration nechinhu chekumapa domain cheUltimate Multisite. Parizvino, vapi vehosting ava ndivo _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ uye _Cpanel._

Kana integration yemupi wehost yashanda, Ultimate Multisite inogona zvakare kuisa mutsetse basa rekugadzira DNS kana subdomain kudivi remupi kumasaiti achangobva kugadzirwa. Kana pasina integration iri kuteerera basa iroro, basa rekumashure rinosvetukwa kudzivirira zvinyorwa zvemutsetse zvisina zvazvinoita. Kuongororwa kweDNS neSSL kwemadomain akamapwa kunoramba kuchimhanya kuburikidza nemaitiro akajairwa edanho redomain.

Uchafanira kugonesa integration iyi pazvirongwa zveUltimate Multisite pasi petabhu ye **Integration**.

![Tabhu yeIntegrations muzvirongwa zveUltimate Multisite inoratidza vapi vehosting](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Cherechedza kuti kana mupi wako wehosting asiri mumwe wevapi vataurwa pamusoro,**uchafanira kuwiriranisa nemaoko kana kuwedzera zita redomain** ku account yako yehosting._
