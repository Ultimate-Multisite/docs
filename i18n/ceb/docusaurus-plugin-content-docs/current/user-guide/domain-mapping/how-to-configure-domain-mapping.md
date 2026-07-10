---
title: Unsaon Pag-configure sa Domain Mapping
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Unsaon Pag-configure sa Pag-map sa Domain (v2) {#how-to-configure-domain-mapping-v2}

_**MAHINUNGDANONG PAHINUMDOM: Kini nga artikulo nagtumong sa Ultimate Multisite bersyon 2.x.**_

Usa sa labing gamhanang mga bahin sa usa ka premium nga network mao ang abilidad sa pagtanyag sa atong mga kliyente og kahigayonan nga itaod ang usa ka top-level domain sa ilang mga sityo. Human sa tanan, asa ang mas tan-awong propesyonal: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) o [_**joesbikeshop.com**_](http://joesbikeshop.com)? Mao kini ang hinungdan nga ang Ultimate Multisite nagtanyag niana nga bahin nga built-in, nga walay kinahanglan nga mogamit og third-party nga mga plugin.

## Unsa ang pag-map sa domain? {#whats-domain-mapping}

Sama sa gisugyot sa ngalan, ang pag-map sa domain mao ang abilidad nga gitanyag sa Ultimate Multisite sa pagdawat og request alang sa usa ka custom domain ug i-map kana nga request ngadto sa katugbang nga sityo sa network nga naay naka-attach nga partikular nga domain.

### Unsaon pag-setup sa pag-map sa domain sa imong Ultimate Multisite Network {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Ang pag-map sa domain nagkinahanglan og pipila ka pag-setup gikan nimo aron molihok. Maayo na lang, gi-automate sa Ultimate Multisite ang lisod nga trabaho para nimo aron dali nimo matuman ang mga requirement.

Atol sa pag-install sa Ultimate Multisite, awtomatikong kopyahon ug i-install sa wizard ang **sunrise.php** ngadto sa gitakdang folder. **Dili ka tugotan sa wizard nga mopadayon hangtod makompleto kini nga lakang**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Kini nagpasabot nga sa dihang mahuman na sa Ultimate Multisite installation wizard ang pag-setup sa imong network, mahimo ka nang magsugod dayon sa pag-map sa custom domain.

Timan-i nga ang pag-map sa domain sa Ultimate Multisite dili mandatory. Aduna kay opsyon nga gamiton ang native domain mapping function sa WordPress Multisite o bisan unsang lain nga domain mapping solution.

Kung kinahanglan nimo i-disable ang pag-map sa domain sa Ultimate Multisite aron hatagan og dalan ang ubang mga domain mapping solution, mahimo nimo i-disable kini nga bahin ilalom sa **Ultimate Multisite > Mga Setting > Pag-map sa Domain**.

![Panid sa mga setting sa Pag-map sa Domain nga nagpakita sa admin redirect, mensahe sa mapping ug mga opsyon sa DNS](/img/config/domain-mapping-settings.png)

Sa ubos dayon niini nga opsyon, makita usab nimo ang opsyon nga **Pugsang Admin Redirect**. Kini nga opsyon motugot nimo sa pagkontrol kung ang imong mga customer maka-access ba sa ilang admin dashboard sa ilang custom domain ug subdomain o sa usa lang niini.

Kung pilion nimo ang **Pugsang i-redirect ngadto sa na-map nga domain** , ang imong mga customer maka-access lang sa ilang admin dashboard sa ilang mga custom domain.

Ang opsyon nga **Pugsang i-redirect ngadto sa** **network domain** mohimo gyud sa kaatbang - ang imong mga customer tugotan lang nga maka-access sa ilang mga dashboard sa ilang subdomain, bisan pa og mosulay sila og sign in sa ilang mga custom domain.

Ug ang opsyon nga **Tugoti ang access sa admin pinaagi sa parehong na-map nga domain ug network domain** motugot kanila nga maka-access sa ilang mga admin dashboard sa subdomain ug sa custom domain.

![Admin Redirect dropdown nga gi-expand nga nagpakita sa tulo ka opsyon sa redirect](/img/config/domain-mapping-redirect-options.png)

Adunay duha ka paagi sa pag-map sa usa ka custom domain. Ang una mao ang pag-map sa domain name gikan sa imong network admin dashboard isip super admin ug ang ikaduha mao ang pinaagi sa sub-sityo admin dashboard ilalom sa account page.

Apan sa dili pa ka magsugod sa pag-map sa custom domain ngadto sa usa sa mga sub-sityo sa imong network, kinahanglan nimo siguruhon nga ang **mga setting sa DNS** sa domain name husto nga na-configure.

###

### Pagsiguro nga ang mga setting sa DNS sa domain husto nga na-configure {#making-sure-the-domain-dns-settings-are-properly-configured}

Aron molihok ang usa ka mapping, kinahanglan nimo siguruhon nga ang domain nga imong plano nga i-map nagtudlo ngadto sa IP address sa imong Network. Timan-i nga kinahanglan nimo ang Network IP address - ang IP address sa domain diin gi-install ang Ultimate Multisite - dili ang IP address sa custom domain nga gusto nimo i-map. Aron mangita sa IP address sa usa ka espesipikong domain, among gisugyot ang pag-adto sa [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), pananglitan.

Aron husto nga ma-map ang domain, kinahanglan nimo idugang ang usa ka **A RECORD** sa imong configuration sa **DNS** nga nagtudlo ngadto niana nga **IP address**. Ang pagdumala sa DNS lahi-lahi kaayo tali sa lainlaing domain registrars, apan daghan kaayong mga tutorial online nga naghisgot niana kung mangita ka og " _Paghimo og A Record sa XXXX_ " diin ang XXXX mao ang imong domain registrar (pananglitan: " _Paghimo og A Record sa_ _GoDaddy_ ").

Kung makasinati ka og kalisod sa pagpaandar niini, **kontaka ang support sa imong domain registrar** ug makatabang sila nimo niini nga bahin.

Kung nagplano ka nga tugotan ang imong mga kliyente nga i-map ang ilang kaugalingong mga domain, sila mismo ang kinahanglan mohimo sa trabaho niini nga bahin. Itudlo sila ngadto sa support system sa ilang registrar kung dili sila makahimo og A Record.

### Pag-map sa custom domain name isip Super Admin {#mapping-custom-domain-name-as-super-admin}

Kung naka-log in ka isip super admin sa imong network, dali ra nimo madugang ug madumala ang mga custom domain name pinaagi sa pag-adto ilalom sa **Ultimate Multisite > Mga Domain**.

![Panid sa listahan sa mga Domain sa Ultimate Multisite](/img/admin/domains-list.png)

Ilalom niini nga panid, mahimo nimo i-click ang button nga **Idugang ang Domain** sa ibabaw ug magpakita kini og modal window diin mahimo nimo i-set ug pun-an ang **custom domain name** , **ang sub-sityo** nga gusto nimo applyan sa custom domain name, ug modesisyon kung gusto ba nimo nga i-set kini isip **primary nga domain** name o dili (timan-i nga mahimo nimo i-map ang **daghang domain name ngadto sa usa ka sub-sityo**).

![Add Domain modal nga naay domain name, site picker ug primary domain toggle](/img/admin/domain-add-modal.png)

Human ibutang ang tanang impormasyon, mahimo dayon nimo i-click ang button nga **Idugang ang Existing Domain** sa ubos.

Kini magsugod sa proseso sa pag-verify ug pagkuha sa impormasyon sa DNS sa custom domain. Makakita usab ka og log sa ubos sa panid aron masundan nimo ang prosesong giagian niini. Kini nga proseso mahimong molungtad og pipila ka minuto aron makompleto.

Ultimate Multisite v2.13.0 naghimo usab awtomatiko sa internal domain record kung ang bag-ong site gihimo sa usa ka host nga angay isipon nga per-site domain. Kung ang host mao ang primary domain sa network, o usa sa shared checkout-form base domains nga gi-configure sa usa ka **Site URL** field, laktawan ang awtomatikong mapped-domain record aron kana nga shared base domain magpabiling magamit sa matag site nga mogamit niini.

Kung ang customer magparehistro og bag-ong domain pinaagi sa Domain Seller v1.3.0 o mas bag-o, awtomatikong i-map sa Ultimate Multisite ang narehistrong domain ngadto sa network site sa customer isip default. Dili na kinahanglan sa mga administrador nga magdugang og bulag nga mapped-domain record human sa malampusong pagparehistro gawas kung gusto nila usbon ang mga opsyon sama sa primary-domain flag, activation state, o SSL handling.

Ang **Stage** o ang status kinahanglan mausab gikan sa **Checking DNS** ngadto sa **Ready** kung husto nga na-set up ang tanan.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Kung imong i-click ang domain name, makita nimo ang pipila ka opsyon sulod niini. Atong tan-awon kini sa madali:

![Pahina sa detalye sa domain nga adunay stage, site, active, primary ug SSL toggles](/img/admin/domain-edit.png)

**Stage:** Kini ang stage diin naa ang domain. Kung una nimo idugang ang domain, posible nga naa kini sa **Checking DNS** nga stage. Susihon sa proseso ang mga DNS entry ug kumpirmahon nga husto kini. Dayon, ibutang ang domain sa **Checking SSL** nga stage. Susihon sa Ultimate Multisite kung ang domain adunay SSL o wala ug i-kategorya ang imong domain isip **Ready** o **Ready (without SSL)**.

**Site:** Ang subdomain nga nalambigit niini nga domain. Ang mapped domain magpakita sa sulod sa espesipikong site.

**Active:** Mahimo nimo i-toggle kini nga opsyon on o off aron i-activate o i-deactivate ang domain.

**Is Primary Domain?:** Ang imong mga customer mahimong adunay labaw sa usa ka mapped domain alang sa matag site. Gamita kini nga opsyon aron pilion kung kini ba ang primary domain alang sa espesipikong site.

**Is Secure?:** Bisan pa og susihon sa Ultimate Multisite kung ang domain adunay SSL certificate o wala sa wala pa kini i-enable, mahimo nimo manual nga pilion nga i-load ang domain nga adunay o walay SSL certificate. Timan-i nga kung ang website walay SSL certificate ug sulayan nimo nga pugson ang pag-load niini gamit ang SSL, mahimo kini maghatag kanimo og mga sayop.

### Pag-map sa custom domain name isip Subsite user {#mapping-custom-domain-name-as-subsite-user}

Ang mga administrador sa subsite mahimo usab mag-map og custom domain names gikan sa ilang subsite admin dashboard.

Una, kinahanglan nimo sigurohon nga i-enable nimo kini nga opsyon ilalom sa **Domain mapping** settings. Tan-awa ang screenshot sa ubos.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Mahimo usab nimo i-set o i-configure kini nga opsyon ilalom sa **Plan** level o mga opsyon sa product sa **Ultimate Multisite > Products**.

![Seksyon sa Custom Domains sa product edit page](/img/config/product-custom-domains.png)

Kung bisan asa niadtong mga opsyon gi-enable ug ang subsite user gitugotan nga mag-map og custom domain names, kinahanglan makita sa subsite user ang usa ka metabox ilalom sa **Account** page nga gitawag **Domains**.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

Mahimo i-click sa user ang **Add Domain** button ug magpakita kini og modal window nga adunay pipila ka instruksyon.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

Dayon mahimo i-click sa user ang **Next Step** ug magpadayon sa pagdugang sa custom domain name. Mahimo usab nilang pilion kung kini ba ang primary domain o dili.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Ang pag-click sa **Add Domain** magsugod sa proseso sa pag-verify ug pagkuha sa DNS information sa custom domain.

### Bahin sa Domain Syncing {#about-domain-syncing}

Ang Domain Syncing usa ka proseso diin ang Ultimate Multisite modugang sa custom domain name ngadto sa imong hosting account isip add-on domain **aron molihok ang domain mapping**.

Awtomatikong mahitabo ang domain syncing kung ang imong hosting provider adunay integration sa Ultimate Multisite domain mapping feature. Sa pagkakaron, kini nga mga hosting provider mao ang _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ ug _Cpanel._

Kung aktibo ang host-provider integration, mahimo usab sa Ultimate Multisite nga i-enqueue ang provider-side DNS o subdomain creation task alang sa bag-ong gihimong mga site. Kung walay integration nga naminaw alang niana nga task, laktawan ang background job aron malikayan ang no-op queue entries. Ang DNS ug SSL checks alang sa mapped domains magpadayon nga modagan pinaagi sa normal nga domain-stage process.

Kinahanglan nimo i-activate kini nga integration sa Ultimate Multisite settings ilalom sa **Integration** tab.

![Integrations tab sa Ultimate Multisite settings nga nagpakita sa hosting providers](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Timan-i nga kung ang imong hosting provider dili usa niadtong mga provider nga gihisgotan sa taas,**kinahanglan nimo manual nga i-sync o idugang ang domain name** ngadto sa imong hosting account._
