---
title: Ahoana ny fanefena ny Fampifandraisana sehatra
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Ahoana ny fanamboarana ny fampifandraisana anaran-tsehatra (v2) {#how-to-configure-domain-mapping-v2}

_**FANAMARIHANA MANAN-DANJA: Ity lahatsoratra ity dia miresaka ny Ultimate Multisite kinova 2.x.**_

Iray amin'ireo endri-javatra mahery indrindra amin'ny tambajotra premium ny fahafahana manolotra amin'ny mpanjifantsika safidy hampifandray anaran-tsehatra ambaratonga ambony amin'ny tranonkalany. Raha ny marina, iza no miseho ho matihanina kokoa: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) sa [_**joesbikeshop.com**_](http://joesbikeshop.com)? Izany no antony anoloran'ny Ultimate Multisite io endri-javatra io efa tafiditra ao anatiny, tsy mila mampiasa plugin avy amin'ny antoko fahatelo.

## Inona ny fampifandraisana anaran-tsehatra? {#whats-domain-mapping}

Araka ny asehon'ny anarany, ny fampifandraisana anaran-tsehatra dia ny fahafahana atolotry ny Ultimate Multisite handray fangatahana ho an'ny anaran-tsehatra namboarina manokana ary hampifandray izany fangatahana izany amin'ilay tranonkala mifanaraka aminy ao amin'ny tambajotra izay manana io anaran-tsehatra manokana io.

### Ahoana ny fametrahana ny fampifandraisana anaran-tsehatra amin'ny tambajotra Ultimate Multisite-nao {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Mila fanamboarana kely avy aminao ny fampifandraisana anaran-tsehatra mba hiasa. Soa ihany fa ataon'ny Ultimate Multisite ho mandeha ho azy ny asa sarotra ho anao, ka afaka mahafeno mora foana ireo fepetra takiana ianao.

Mandritra ny fametrahana Ultimate Multisite, ny wizard dia handika sy hametraka ho azy ny **sunrise.php** ao amin'ny lahatahiry voatondro. **Tsy hamela anao hanohy ny wizard raha tsy vita ity dingana ity**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Midika izany fa rehefa vitan'ny wizard fametrahana Ultimate Multisite ny manangana ny tambajotrao, dia afaka manomboka mampifandray avy hatrany ny anaran-tsehatra namboarina manokana ianao.

Mariho fa tsy voatery ny fampifandraisana anaran-tsehatra ao amin'ny Ultimate Multisite. Manana safidy ianao hampiasa ny fiasa fampifandraisana anaran-tsehatra natoraly an'ny WordPress Multisite na vahaolana hafa amin'ny fampifandraisana anaran-tsehatra.

Raha mila manafoana ny fampifandraisana anaran-tsehatra an'ny Ultimate Multisite ianao mba hanomezana toerana ho an'ny vahaolana hafa amin'ny fampifandraisana anaran-tsehatra, dia azonao vonoina ity endri-javatra ity eo ambanin'ny **Ultimate Multisite > Fikirana > Fampifandraisana anaran-tsehatra**.

![Pejin'ny fikirana Fampifandraisana anaran-tsehatra mampiseho famerenana mitodika admin, hafatra fampifandraisana ary safidy DNS](/img/config/domain-mapping-settings.png)

Eo ambanin'io safidy io avy hatrany, azonao jerena ihany koa ny safidy **Terena ny Famerenana mitodika ny Admin**. Ity safidy ity dia ahafahanao mifehy raha afaka miditra amin'ny Dashboard fitantanan'izy ireo amin'ny anaran-tsehatra namboarina manokana sy amin'ny zana-tsehatra izy ireo, na amin'ny iray amin'ireo ihany.

Raha misafidy **Terena hiverina mitodika amin'ny anaran-tsehatra nampifandraisina** ianao, dia amin'ny anaran-tsehatra namboarina manokana ihany no hahafahan'ny mpanjifanao miditra amin'ny Dashboard fitantanan'izy ireo.

Ny safidy **Terena hiverina mitodika amin'ny** **anaran-tsehatra tambajotra** dia hanao ny mifanohitra tanteraka - amin'ny zana-tsehatra ihany no avela hidiran'ny mpanjifanao amin'ny Dashboard-ny, na dia manandrana miditra amin'ny anaran-tsehatra namboarina manokana aza izy ireo.

Ary ny safidy **Avelao ny fidirana amin'ny admin amin'ny alalan'ny anaran-tsehatra nampifandraisina sy ny anaran-tsehatra tambajotra** dia mamela azy ireo hiditra amin'ny Dashboard fitantanan'izy ireo amin'ny zana-tsehatra sy amin'ny anaran-tsehatra namboarina manokana.

![Lisitra midina Admin Redirect nosokafana mampiseho ireo safidy famerenana mitodika telo](/img/config/domain-mapping-redirect-options.png)

Misy fomba roa hampifandraisana anaran-tsehatra namboarina manokana. Ny voalohany dia amin'ny fampifandraisana ny anaran-tsehatra avy amin'ny Dashboard fitantanana ny tambajotrao amin'ny maha-mpitantana ambony anao, ary ny faharoa dia amin'ny alalan'ny Dashboard fitantanan'ny tranonkala madinika eo ambanin'ny pejin'ny Account.

Saingy alohan'ny hanombohanao mampifandray ny anaran-tsehatra namboarina manokana amin'ny iray amin'ireo tranonkala madinika ao amin'ny tambajotrao, dia mila mahazo antoka ianao fa voarindra tsara ny **fikirana DNS** an'ilay anaran-tsehatra.

###

### Fiantohana fa voarindra tsara ny fikirana DNS an'ilay anaran-tsehatra {#making-sure-the-domain-dns-settings-are-properly-configured}

Mba hiasan'ny fampifandraisana, mila mahazo antoka ianao fa manondro ny adiresy IP an'ny tambajotrao ilay anaran-tsehatra kasainao hampifandraisina. Mariho fa ny adiresy IP an'ny tambajotra no ilainao - ny adiresy IP an'ilay anaran-tsehatra nametrahana ny Ultimate Multisite - fa tsy ny adiresy IP an'ilay anaran-tsehatra namboarina manokana tianao hampifandraisina. Mba hitadiavana ny adiresy IP an'ny anaran-tsehatra manokana iray, dia manoro hevitra izahay ny handeha amin'ny [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), ohatra.

Mba hampifandraisana tsara ilay anaran-tsehatra, dia mila manampy **A RECORD** amin'ny fanamboarana **DNS**-nao ianao izay manondro io **adiresy IP** io. Miovaova be ny fitantanana DNS eo amin'ireo mpisoratra anaran-tsehatra samihafa, saingy betsaka ny torolalana an-tserasera mandrakotra izany raha mitady ny " _Creating A Record on XXXX_ " ianao, izay XXXX no mpisoratra anaran-tsehatra ampiasainao (oh.: " _Creating A Record on_ _GoDaddy_ ").

Raha sendra manana olana amin'ny fampandehanana izany ianao, **mifandraisa amin'ny fanohanan'ny mpisoratra anaran-tsehatra anao** ary afaka hanampy anao amin'ity ampahany ity izy ireo.

Raha mikasa ny hamela ny mpanjifanao hampifandray ny anaran-tsehatra azy manokana ianao, dia izy ireo ihany no tsy maintsy manao ny asa amin'ity ampahany ity. Tondroy any amin'ny rafitra fanohanan'ny mpisoratra anaran-tsehatra azy izy ireo raha toa ka tsy mahavita mamorona ny A Record.

### Fampifandraisana anaran-tsehatra namboarina manokana amin'ny maha Super Admin {#mapping-custom-domain-name-as-super-admin}

Rehefa tafiditra amin'ny maha super admin anao ao amin'ny tambajotrao ianao, dia afaka manampy sy mitantana mora foana anaran-tsehatra namboarina manokana amin'ny alalan'ny fandehanana eo ambanin'ny **Ultimate Multisite > Anaran-tsehatra**.

![Pejin'ny lisitry ny anaran-tsehatra ao amin'ny Ultimate Multisite](/img/admin/domains-list.png)

Eo ambanin'ity pejy ity, azonao tsindriana ny bokotra **Ampio anaran-tsehatra** eo ambony, ary hampiseho varavarankely modal izany izay ahafahanao mametraka sy mameno ny **anaran-tsehatra namboarina manokana**, **ilay tranonkala madinika** tianao hampiharana ilay anaran-tsehatra namboarina manokana, ary manapa-kevitra raha tianao hapetraka ho **anaran-tsehatra voalohany** izany na tsia (mariho fa afaka mampifandray **anaran-tsehatra maro amin'ny tranonkala madinika iray** ianao).

![Modal Ampio anaran-tsehatra misy anaran-tsehatra, mpifidy tranonkala ary bokotra fifandimbiasana anaran-tsehatra voalohany](/img/admin/domain-add-modal.png)

Rehefa avy nampiditra ny fampahalalana rehetra ianao, dia azonao tsindriana ny bokotra **Ampio anaran-tsehatra efa misy** eo ambany.

Hanomboka ny fizotry ny fanamarinana sy fakana ny fampahalalana DNS an'ilay anaran-tsehatra namboarina manokana izany. Hahita firaketana eo ambanin'ny pejy ihany koa ianao mba hanarahana ny fizotra lalovany. Mety haharitra minitra vitsivitsy vao vita ity fizotra ity.

Ultimate Multisite v2.13.0 dia mamorona ho azy ihany koa ny firaketana domain anatiny rehefa misy site vaovao noforonina amin’ny host izay tokony horaisina ho domain isaky ny site. Raha ny host dia domain fototry ny tambajotra, na iray amin’ireo domain fototra iombonana ho an’ny checkout-form voarindra amin’ny saha **Site URL**, dia tsipahina ny firaketana mapped-domain mandeha ho azy mba hitoeran’ilay domain fototra iombonana ho azo ampiasain’ny site rehetra mampiasa azy.

Rehefa misoratra domain vaovao amin’ny alalan’ny Domain Seller v1.3.0 na vaovao kokoa ny mpanjifa, Ultimate Multisite dia mametraka ho azy amin’ny alàlan’ny mapping ilay domain voasoratra amin’ny site tambajotran’ilay mpanjifa amin’ny alàlan’ny default. Tsy mila manampy firaketana mapped-domain misaraka intsony ny administratera aorian’ny fisoratana nahomby, raha tsy hoe te hanitsy safidy toy ny primary-domain flag, activation state, na SSL handling izy ireo.

Ny **Stage** na ny sata dia tokony hiova avy amin’ny **Checking DNS** ho **Ready** raha voarindra tsara avokoa ny zava-drehetra.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Raha tsindrinao ny anaran’ny domain, dia ho afaka hahita safidy sasantsasany ao anatiny ianao. Andeha hojerentsika haingana izy ireo:

![Pejy antsipirian’ny domain misy stage, site, active, primary ary SSL toggles](/img/admin/domain-edit.png)

**Stage:** Ity no dingana misy ilay domain. Rehefa vao manampy ilay domain ianao dia mety ho ao amin’ny dingana **Checking DNS** izy. Ny dingana dia hanamarina ny fidirana DNS ary hanamarina fa marina izy ireo. Avy eo, hapetraka amin’ny dingana **Checking SSL** ilay domain. Ultimate Multisite dia hanamarina raha manana SSL ilay domain na tsia ary hanasokajy ny domain-nao ho **Ready** na **Ready (without SSL)**.

**Site:** Ny subdomain mifandray amin’ity domain ity. Ny domain voa-mapping dia hampiseho ny votoatin’io site manokana io.

**Active:** Azonao avadika on na off ity safidy ity mba hampandeha na hampiato ilay domain.

**Is Primary Domain?:** Afaka manana domain voa-mapping mihoatra ny iray ho an’ny site tsirairay ny mpanjifanao. Ampiasao ity safidy ity hisafidianana raha ity no domain fototra ho an’ilay site manokana.

**Is Secure?:** Na dia manamarina aza ny Ultimate Multisite raha manana taratasy fanamarinana SSL ilay domain na tsia alohan’ny hampandehanana azy, dia azonao fidina amin’ny tanana ny hampiditra ilay domain miaraka na tsy miaraka amin’ny taratasy fanamarinana SSL. Mariho fa raha tsy manana taratasy fanamarinana SSL ilay tranonkala ary manandrana manery ny hampidirana azy amin’ny SSL ianao, dia mety hiteraka hadisoana izany.

### Mapping anarana domain manokana amin’ny maha mpampiasa Subsite {#mapping-custom-domain-name-as-subsite-user}

Afaka manao mapping anarana domain manokana avy amin’ny admin dashboard an’ny subsite ihany koa ny administratera Subsite.

Voalohany, mila ataonao azo antoka fa alefanao ity safidy ity eo ambanin’ny firafitry ny **Domain mapping**. Jereo ny pikantsary etsy ambany.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Azonao atao ihany koa ny mametraka na mandrindra ity safidy ity eo amin’ny ambaratonga **Plan** na safidin’ny vokatra ao amin’ny **Ultimate Multisite > Products**.

![Fizarana Custom Domains ao amin’ny pejy fanitsiana vokatra](/img/config/product-custom-domains.png)

Rehefa alefa ny iray amin’ireo safidy ireo ary avela hanao mapping anarana domain manokana ny mpampiasa subsite, dia tokony hahita metabox eo ambanin’ny pejy **Account** antsoina hoe **Domains** ilay mpampiasa subsite.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

Afaka manindry ny bokotra **Add Domain** ilay mpampiasa ary hampiseho varavarankely modal misy toromarika sasantsasany izany.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

Avy eo afaka manindry **Next Step** ilay mpampiasa ary manohy manampy ilay anarana domain manokana. Afaka misafidy ihany koa izy ireo raha ho domain fototra izany na tsia.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Ny fanindriana **Add Domain** dia hanomboka ny dingana fanamarinana sy fakana ny fampahalalana DNS an’ilay domain manokana.

### Momba ny Domain Syncing {#about-domain-syncing}

Domain Syncing dia dingana iray izay anampian’ny Ultimate Multisite ny anarana domain manokana ao amin’ny kaonty fampiantranoanao ho add-on domain **mba hiasa ny domain mapping**.

Mitranga ho azy ny domain syncing raha manana fampifandraisana amin’ny endri-javatra domain mapping an’ny Ultimate Multisite ny mpanome hosting-nao. Amin’izao fotoana izao, ireo mpanome hosting ireo dia _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ ary _Cpanel._

Rehefa mavitrika ny fampifandraisana host-provider, Ultimate Multisite dia afaka mampiditra anaty filaharana ihany koa ny asa famoronana DNS na subdomain amin’ny lafin’ny provider ho an’ireo site vao noforonina. Raha tsy misy fampifandraisana mihaino izany asa izany, dia tsipahina ny asa ao ambadika mba hialana amin’ny fidirana filaharana tsy manao na inona na inona. Ny fanamarinana DNS sy SSL ho an’ireo domain voa-mapping dia mbola mandeha amin’ny alalan’ny dingana domain-stage mahazatra.

Mila mampandeha ity fampifandraisana ity ianao ao amin’ny firafitry ny Ultimate Multisite eo ambanin’ny kiheba **Integration**.

![Kiheba Integrations ao amin’ny firafitry ny Ultimate Multisite mampiseho mpanome hosting](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Mariho fa raha tsy iray amin’ireo mpanome voalaza etsy ambony ny mpanome hosting-nao, **dia mila manao sync amin’ny tanana na manampy ny anarana domain** ao amin’ny kaonty fampiantranoanao ianao._
