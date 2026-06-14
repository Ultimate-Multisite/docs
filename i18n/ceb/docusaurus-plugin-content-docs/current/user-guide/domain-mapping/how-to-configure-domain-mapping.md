---
title: Unsaon pag-configure sa domain mapping
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# Unsaon Pag-configure sa Domain Mapping (v2)

_**MAHINONG PAHIBALO: Kini nga article nagtumong sa Ultimate Multisite version 2.x.**_

Ang usa sa pinakasiguro nga feature sa premium network kay ang abilidad sa paghatag og higayon sa among mga kliyente nga magdugtong og top-level domain sa ilang mga site. Human sa tanan, unsa man ang mas propesyonal: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) o [_**joesbikeshop.com**_](http://joesbikeshop.com)? Mao na nganong ang Ultimate Multisite nagtanyag niini, nga gi-bake in na, walay kinahanglan nga mogamit og third-party plugins.

## Unsa man ang domain mapping?

Ingon sa ngalan niini, ang domain mapping kay mao ang abilidad nga gipahatag sa Ultimate Multisite aron dawaton ang request para sa custom domain ug i-map kini sa katumbas nga site sa network uban sa maong domain nga gidugtong.

### Unsaon pag-setup sa domain mapping sa imong Ultimate Multisite Network

Ang domain mapping nagkinahanglan og pipila ka setup gikan nimo aron molihok. Salamat, ang Ultimate Multisite nag-automate sa lisod nga trabaho para kanimo aron dali nimo matubag ang mga kinahanglanon.

Atol sa pag-install sa Ultimate Multisite, ang wizard awtomatikong magkopya ug mag-install sa **sunrise.php** sa gitakdang folder. **Dili kini tugotan sa wizard nga magpadayon hangtod nga makompleto kining lakang**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Nagpasabot ni nga pagkahuman sa pagtapos sa Ultimate Multisite installation wizard sa pag-set up sa imong network, pwede ka na magsugod sa pag-map sa custom domain dayon.

Ablihi nga ang domain mapping sa Ultimate Multisite dili mandatoryo. Aduna kay opsyon nga mogamit sa native WordPress Multisite domain mapping function o bisan unsang laing solusyon sa domain mapping.

Kung kinahanglan nimo i-disable ang domain mapping sa Ultimate Multisite aron maghatag og daan sa ubang mga solusyon sa domain mapping, pwede nimo i-disable kining feature diha sa **Ultimate Multisite > Settings > Domain Mapping**.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

Diretso ubos niini nga option, makita usab nimo ang option nga **Force Admin Redirect**. Kining option nagtugot kanimo sa pagkontrol kung ang imong mga customer maka-access sa ilang admin dashboard ba sa ilang custom domain ug subdomain o lang sa usa niini.

Kung piliha nimo ang **Force redirect to mapped domain**, ang imong mga customer makaka-access sa ilang admin dashboard lang sa ilang custom domains.

Ang option nga **Force redirect to** **network domain** maghimo gyud og kabaliktaran - ang imong mga customer dili tugotan nga ma-access ang ilang dashboards sa ilang subdomain, bisan kung nagtent sila sa pag-sign in sa ilang custom domains.

Ug ang option nga **Allow access to the admin by both mapped domain domain and network domain** nagtugot kanila nga maka-access sa ilang admin dashboards pareho sa subdomain ug sa custom domain.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

Naa duha ka paagi aron magmapa (mapa) og custom domain. Ang una mao ang pag-mapa sa ngalan sa domain gikan sa imong network admin dashboard isip super admin ug ang ikaduha pinaagi sa subsite admin dashboard ubos sa account page.

Apan sa dili pa magsugod sa pag-mapa sa custom domain ngadto sa usa sa mga subsites sa imong network, kinahanglan nimo sigurohon nga ang **DNS settings** sa ngalan sa domain maayo gyud i-configure.

###

### Siguraduhon nga maayo i-configure ang DNS settings sa domain

Para magtrabaho ang mapping, kinahanglan ninyong sigurohon nga ang domain nga plano ninyong i-map kay nag-pointing sa IP address sa inyong Network. Ampoan, kinahanglan ninyo ang Network IP address—ang IP address sa domain diin gipahimutang ang Ultimate Multisite—dili ang IP address sa custom domain nga gusto ninyong i-map. Aron mangita og IP address sa usa ka specific domain, sugyot namon nga moadto sa [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), pananglitan.

Para ma-mapa og tama ang domain, kinahanglan ninyong magdugang og **A RECORD** sa inyong **DNS** configuration nga nag-pointing niadto sa maong **IP address**. Nagkalain-laing ang DNS management depende sa nag-register sa domain, pero daghan ra kaayo og tutorials online nga naghatag bahin ni kung mangita mo og " _Creating A Record on XXXX_ " diin ang XXXX mao ang inyong domain registrar (pananglitan: " _Creating A Record on_ _GoDaddy_ ").

Kung maglisod mo sa paghimo niini nga molihok, **kontaka ang support sa inyong domain registrar** ug sila makatabang ninyo ni parte.

Kung plano ninyong tugotan ang inyong mga kliyente nga i-map ang ilang kaugalingon nga domains, sila mismo ang kinahanglan buhaton kini. I-guide sila ngadto sa ilang registrar support system kung dili sila makahimo og A Record.

### Pag-mapa og custom domain name isip Super Admin

Kung naka-login mo isip super admin sa inyong network, dali ra ninyong madugang ug ma-manage ang mga custom domain pinaagi sa pagadto sa **Ultimate Multisite > Domains**.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Sa ilalom ni pahina ani, pwede nimo i-click ang **Add Domain** button sa taas ug magabukas kini og modal window diin mahimo nimong i-set ug pun-on ang **custom domain name**, **ang subsite** nga gusto nimong iapil sa custom domain name, ug magdesisyon kung gusto ba nimo iposisyon kini isip **primary domain** o dili (palihog hinumdumi nga pwede ninyo magmapa og **daghang domain names ngadto sa usa ka subsite**).

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

Human i-input ang tanang impormasyon, mahimo na nimong i-click ang **Add Existing Domain** button sa ubos.

Magsugod kini sa proseso sa pag-verify ug pagkuha sa DNS information sa custom domain. Makita man ninyo ang log sa ubos sa pahina aron ma-follow ninyo ang proseso nga giagi niini. Ang prosesong kini mahimong molungtad og pipila ka minuto para matapos.

Ang Ultimate Multisite v2.13.0 naghimo usab sa internal domain record awtomatiko kung adunay bag-ong site nga gihimo sa usa ka host nga angay itraktar isip per-site domain. Kung ang host mao ang primary domain sa network, o usa sa mga shared checkout-form base domains nga gi-configure sa field nga **Site URL**, ang automatic mapped-domain record dili i-skip aron magpabilin nga available ang shared base domain para sa matag site nga naggamit niini.

Ang **Stage** o status kinahanglan magbag-o gikan sa **Checking DNS** ngadto sa **Ready** kung maayo na tanan nga setup.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Kung i-click ninyo ang domain name, makakita mo og pipila ka mga opsyon diha niini. Atong tan-awon kini sa dali:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Stage:** Kini ni ang stage nga naa ang imong domain. Kung una nimo i-add ang domain, lagmit anaa kini sa **Checking DNS** stage. Ang proseso mag-check para makita kung tama ba ang mga DNS entries ug mosusi kung husto sila. Dayon, ang domain ibutang sa **Checking SSL** stage. Ang Ultimate Multisite mag-check kung naa ba'y SSL ang imong domain ug i-categorize kini isip **Ready** o **Ready (without SSL)**.

**Site:** Kini ang subdomain nga konektado sa imong domain. Ang gipa-mapa nga domain ipakita ang content niining piho nga site.

**Active:** Mahimo nimong i-toggle kining option para ma-activate o ma-deactivate ang domain.

**Is Primary Domain?:** Ang imong mga customer mahimong adunay labaw pa sa usa ka gipa-mapa nga domain alang sa matag site. Gamita kini nga option aron pili-an kung kini ba ang primary domain para sa piho nga site.

**Is Secure?:** Bisan tuod gi-check sa Ultimate Multisite kung naa ba'y SSL certificate ang imong domain o wala, mahimo nimo manu-pili (manually select) aron i-load ang domain uban o walay SSL certificate. Paaliraa nga kung ang website walay SSL certificate ug mo-try ka nga piliton kini gamit ang SSL, mahimong maghatag kini kanimo og mga error.

### Pag-mapa sa custom domain name isip Subsite user

Mahimo usab sa mga subsite administrator nga mag-mapa og custom domain names gikan sa ilang subsite admin dashboard.

Una, kinahanglan nimo siguro nga i-enable kining option ubos sa **Domain mapping** settings. Tan-awa ang screenshot sa ubos.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Mahimo usab nimong i-set o i-configure kining option ubos sa **Plan** level o product options sa **Ultimate Multisite > Products**.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

Kung ablihan ninyo ang bisan unsang option ug gitugotan ang subsite user nga mag-map og custom domain names, makakita ang subsite user og usa ka metabox sa ubos sa **Account** page nga gitawag og **Domains**.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

Mahimo ninyong i-click ang **Add Domain** button ug magdala kini og usa ka modal window nga adunay pipila ka instruksyon.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

Dayon, mahimo ninyong i-click ang **Next Step** ug padayon sa pag-add sa custom domain name. Mahimo usab kamo mopili kung kini ba ang primary domain o dili.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Ang pag-click sa **Add Domain** magsugod na sa proseso sa pag-verify ug pagkuha sa impormasyon sa DNS sa custom domain.

### Bahin sa Domain Syncing

Ang Domain Syncing kay usa ka proseso diin ang Ultimate Multisite mag-add sa inyong custom domain name sa inyong hosting account isip add-on domain **aron molihok ang domain mapping**.

Ang domain syncing awtomatikong mahitabo kung ang inyong hosting provider adunay integration sa feature sa domain mapping sa Ultimate Multisite. Sa pagkakaron, kining mga hosting provider kay _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ ug _Cpanel._

Kung aktibo ang host-provider integration, mahimo usab sa Ultimate Multisite nga i-enqueue ang task sa DNS o subdomain creation sa provider side alang sa bagong mga site. Kung walay integration nga nagpaminaw niini nga task, ang background job dili ma-skip aron malikayan ang no-op queue entries. Ang DNS ug SSL checks para sa mga gipa-map nga domains padayon nga molihok pinaagi sa normal nga domain-stage process.

Kinahanglan nimo i-activate ni integration sa Ultimate Multisite settings ubos sa **Integration** tab.

![Integrations tab in Ultimate Multisite settings showing hosting providers](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Ablihi nga kung ang imong hosting provider dili among gihisgutan sa mga provider sa ibabaw, **kinahanglan nimo i-sync o i-add manual ang domain name** sa imong hosting account._
