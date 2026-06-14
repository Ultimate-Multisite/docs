---
title: Ahoana ny fomba hanamboarana ny fametrahana domain mapping
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# Ahoana ny Fandrefesana Domain Mapping (v2)

_**FANAMARIHANA MANAN-DANJA: Ity lahatsoratra ity dia manondro ny dikan'ny Ultimate Multisite v2.x.**_

Iray amin'irefa matanjaka indrindra an'ny tambajotra premium dia ny fahafahana manome ny mpanjifa antsika fotoana mba hampifandray domain ambony (top-level domain) amin'ny tranonkalazany. Aoka ho fantatrao fa izay no toa matihanina kokoa: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) ve sa [_**joesbikeshop.com**_](http://joesbikeshop.com)? Izany no antony nampanome ny Ultimate Multisite io fahaizana io, tsy mila mampiasa plugin hafa ianao.

## Inona no domain mapping?

Araka ny anarany, ny domain mapping dia ny fahaizana omen'ny Ultimate Multisite mba handray fangatahana domain manokana ary hampifandray ilay fangatahana amin'ilay tranonkala ao amin'ny tambajotra misy io domain manokana.

### Ahoana no fanamboarana domain mapping amin'ny Ultimate Multisite Network anao

Mila fametrahana zavatra avy aminao mba hiara-miasa ny domain mapping. Betsaka dia manao azy ho anao ny Ultimate Multisite, ka afaka manome anao ny asa sarotra dia mora atao ny fenoana ireo fepetra ilaina.

Mandritra ny fametrahana ny Ultimate Multisite, ny wizard (fitaovana fanampiana) dia hamerina sy hifindra ho toerana voatendry ny **sunrise.php**. Tsy afaka mandroso ianao raha tsy vita io dingana io.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Midika izany fa rehefa vita ny fametrahana ny Ultimate Multisite, dia afaka manomboka amin'ny domain mapping an-tsokosoko ianao avy eo.

Tandremo fa tsy voatery ny domain mapping ao amin'ny Ultimate Multisite. Manana safidy ianao mba hampiasana ny fiasa domain mapping an'ny WordPress Multisite na fomba hafa rehetra azo atao.

Ultimate Multisite-n'ny isika fomba ahafahanao manakana ny fametrahana mapping anarana domena (domain mapping) ho an'ny domain hafa, raha mila izany ianao. Afaka manakana ity fahaizana ity ianao ao amin'ny **Ultimate Multisite > Settings > Domain Mapping**.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

Eo ambanin'ity safidy ity dia afaka mahita koa ny safidy hoe **Force Admin Redirect** (Manery ny famindrana an'ny admin). Ity safidy ity dia ahafahanao mitantana raha ho afaka miditra amin'ny dashboard an'ny mpanjifa ao amin'ny domain manokana sy subdomain izy na amin'ny iray ihany.

Raha misafidy ny **Force redirect to mapped domain** (Manery ny famindrana any amin'ny domain voamarina), dia afaka miditra amin'ny dashboard an'ny mpanjifa ao amin'ny domain manokana ihany izy ireo.

Ny safidy hoe **Force redirect to network domain** (Manery ny famindrana any amin'ny domain tambajotra) kosa dia manao ny antony mifaninana—afaka miditra amin'ny dashboard an'izy ireo ao amin'ny subdomain ihany izy ireo, na dia miezaka miditra amin'ny domain manokana aza.

Ary ny safidy hoe **Allow access to the admin by both mapped domain domain and network domain** (Amona fidirana amin'ny admin avy amin'ny domain voamarina sy ny domain tambajotra) dia ahafahany miditra amin'ny dashboard an'ny admin ao amin'ny subdomain sy ny domain manokana.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

Misy fomba roa ianao mba hametrahana domain manokana (custom domain). Ny voalohany dia amin'ny alalan'ny fametrahana ny anaran'ny domain avy ao amin'ny dashboard admin an'ny tambajotra ho super admin, ary ny faharoa kosa dia amin'ny alalan'ny dashboard admin an'ny subsite eo ambanin'ny pejy kaonty.

Saingy alohan'ny hanombohanao ny fametrahana domain manokana amin'ny subsite iray ao amin'ny tambajotram-piara-miasa (network), dia mila antoka ianao fa voarafitra tsara ny **DNS settings** an'ilay anaran'ny domain.

###

### Fanamarihana ny fepetra DNS an'ny domain ho voarafitra tsara

Mba hiatrehana ny mapping ho mandeha tsara, mila manamarina fa ny domaine tianao atao mapping dia mitondra (pointing) amin'ny adiresy IP an'ny tambajotra (Network) anao izany. Tsy maintsy fantatrao ny adiresy IP an'ilay tambajotra - ilay adiresy IP an'ilay domaine izay nampiana WordPress Ultimate Multisite - fa tsy ny adiresy IP an'ilay domain manokana tianao atao mapping. Raha mitady ny adiresy IP ho an'ny domain manokana ianao, dia manoro anareo hiakatra any amin'i [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), ohatra.

Mba hanaovana mapping marina ny domaine, mila manampy **A RECORD** eo amin'ny fametrahana anareo ny **DNS** izay mitondra ilay **adiresy IP** io ianao. Ny fitantanana DNS dia miova be samihafa eo amin'ireo mpamatsy domain (domain registrars) samihafa, fa misy toromarika maro an-tserasera momba izany raha mitady " _Creating A Record on XXXX_ " izay ny XXXX no mpamatsy domain anareo (ohatra: " _Creating A Record on_ _GoDaddy_ ").

Raha toa ka mahatonga anao ho sarotra ity, dia **miantso ny fanohanana an'ny mpamatsy domain anareo** ary afaka manampy anareo amin'ity ampahany ity izy ireo.

Raha nanana drafitra ianao mba hahafahan'ny mpanjifa anareo atao mapping ny domaine ananany, dia tsy maintsy ataon'izy ireo io asa io. Arahaho azy ireo any amin'ny rafitry ny fanohanana an'ny mpamatsy domain raha toa ka tsy afaka mamorona ny A Record izy ireo.

### Fampiasana anarana domaine manokana ho Super Admin

Rehefa miditra ianao ho super admin ao amin'ny tambajotra anareo, dia mora atao ny manampy sy mitantana anarana domaine manokana amin'ny alalan'ny fidinana any amin'i **Ultimate Multisite > Domains**.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Ity anaty pejy ity, afaka tsindriana ny bokotra **Add Domain** eo ambony ary hivoaka fomba modal iray izay ahafahanao mametraka sy mameno ny **custom domain name**, ny **subsite** tianao hampiasaina amin'io custom domain io, ary manapa raha hatao ho **primary domain** ve sa tsy izany (tahaka ny fampitahana ireo domain maromaro ho an'ny subsite iray).

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

Rehefa vita ny fametrahana ny vaovao rehetra, dia afaka tsindriana ny bokotra **Add Existing Domain** eo ambany ianao.

Izany no hanombohana ny dingana fanamarinana sy fitadiavana ny fampahalalana DNS an'ilay custom domain. Ho hitanao koa ny logy eo amin'ny farany an'ny pejy mba hanaranao ny dingana ataony izany. Mety mandritra minitra vitsivitsy io dingana io hatramin'ny fisaorana.

Ny Ultimate Multisite v2.13.0 dia mamorona ny bokizana domain anatiny ho azy rehefa misy toerana vaovao no namboarina tamin'ny host izay tokony ho toy ny domain isaky ny toerana (per-site domain). Raha toa ka io host io no domain lehibe an'ny tambajotra, na iray amin'ireo base domains ho an'ny checkout form izay voafidy ao amin'ny champ **Site URL**, dia tsy hatao ny fampidirana bokizana mapped-domain ho azy mba hahazoana ny base domain iohany ho azo ampiasaina amin'ny toerana rehetra mampiasa azy.

Ny **Stage** na ny sata dia tokony ovaina avy amin'ny **Checking DNS** ho **Ready** raha voarafitra tsara ny zavatra rehetra.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Raha tsindriana ny anaran'ilay domain, dia afaka mahita safidy vitsivitsy ao anatiny ianao. Andao hijerena azy ireo fohy:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Stage:** Io no dingana izay e tokoa ny toerana misy an'ilay domain. Rehefa voafindra aloha ianao, dia mety ho eo amin'ny dingana **Checking DNS** (Fanamarihana DNS). Ny fizotran'ity dia manamarina raha marina ireo fampidirana DNS ary manome antoka fa marina izy ireo. Avy eo, ny domain dia apetaka ao amin'ny dingana **Checking SSL** (Fanamarihana SSL). Ny Ultimate Multisite dia hanontany raha misy SSL ve ilay domain na tsia ary hanome fametrahana anao ho **Ready** (Vonona) na **Ready (without SSL)** (Vonona nefa tsy misy SSL).

**Site:** Io subdomain io mifandray amin'ity domain ity. Ny domain voafindra dia haneho ny votoatin'ity site manokana ity.

**Active:** Afaka manao toggling an-tsokosoko io safidy io ianao mba hampandehanana na hanakana ny domain.

**Is Primary Domain?:** Afaka manana domain voafindra maro kokoa ny mpanjifa ho an'ny site tsirairay. Ampiasao ity safidy ity mba hisafidianana raha ity no domain lehibe (primary domain) ho an'ity site manokana ity.

**Is Secure?:** Na dia manamarina aza ny Ultimate Multisite raha misy mari-pahaizana SSL ve ilay domain mialoha ny fanondroana azy, dia afaka mifidy manokana ianao mba hampandehanana ny domain amin'ny fampidirana na tsy fampidirana mari-pahaizana SSL. Tsy maintsy fantatrao fa raha tsy misy mari-pahaizana SSL ilay website ary miezaka hampandeha azy amin'ny alalan'ny SSL ianao, dia mety hisy fahadisoana (errors) ho anao izany.

### Fampidirana anarana domain manokana ho Subsite user

Afaka manao fampidirana anarana domain manokana avy amin'ny dashboard an'ny subsite administrator koa ianao.

Voalohany, mila antoka fa ampiasana ity safidy ity eo ambanin'ny **Domain mapping** (Fampidirana domain) settings ianao. Jereo ny sary etsy ambany.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Afaka mametraka na manao fanamboarana ity safidy ity ianao eo ambanin'ny **Plan** level na ny safidy vokatra (product options) ao amin'ny **Ultimate Multisite > Products**.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

Raha toa ka voaondro an'ilay ireo safidy ireo ary avela ho afaka manamboatra domain manokana ny mpampiasa subsite, dia hahita metabox iray eo ambanin'ny pejy **Account** antsoina hoe **Domains** ilay mpampiasa.

<!-- Screenshot unavailable: Metabox Domains amin'ny pejy Account an'ny subsite miaraka amin'ny bokotra Add Domain -->

Afaka tsindrio ny bokotra **Add Domain** ary hiseho fomba iray (modal window) misy toromarika vitsivitsy.

<!-- Screenshot unavailable: Modal Add Domain mampiseho toromarika DNS A-record ho an'ny mpampiasa subsite -->

Avy eo dia afaka tsindrio ny **Next Step** ary mandroso amin'ny fanampiana anarana domain manokana. Afaka misafidy koa raha ho domain lehibe (primary domain) izany na tsy izany.

<!-- Screenshot unavailable: Form Add Domain miaraka amin'ny champ anarana domain manokana sy ny toggle primary domain -->

<!-- Screenshot unavailable: Dingana fanamafisana Add Domain izay mamporisika ny fanamarinana DNS -->

Tsindrio ny **Add Domain** dia hanomboka ny dingana fanamarinana sy famoahana ny fampahalalana DNS an'ilay domain manokana.

### Momba ny Fampifangaroan'ny Domain (About Domain Syncing)

Ny Domain Syncing dia dingana izay atao amin'ny alalan'ny Ultimate Multisite mba hanampiana anarana domain manokana ao amin'ny kaontry ny hosting ho domain fanampiny **mba hiatoana ny fametrahana ny mapping**.

Misy fampifangaroana automatique raha toa ka misy fifandraisana (integration) eo amin'ny mpamatsy hosting sy ny fomba mapping domain an'ny Ultimate Multisite. Amin'izao fotoana izao, ireo mpamatsy hosting ireo dia _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ ary _Cpanel._

Rehefa misy fifandraisana amin'ny mpamatsy hosting, afaka manome asa (enqueue) ny Ultimate Multisite koa ny asa famoronana DNS na subdomain ho an'ny tranonkala vaovao. Raha tsy misy fampifangaroana mihaino ilay asa, dia atao an-tsokosoko ny asa mialoha (background job) mba hisorohana ireo entry ao amin'ny queue izay tsy misy asan'ny zavatra iray (no-op). Ny fanamarinana DNS sy SSL ho an'ireo domain voafidy dia mitohy mandalo amin'ny dingana fandrindrana ny domain ara-dalàna.

Aza adidio fa mila mampiasa ity integration ity ianao ao amin'ny fandraisana an-tanana (settings) an'ny Ultimate Multisite eo ambanin'ny tabilao **Integration**.

![Tabilao Integrations ao amin'ny fandraisana an-tanana an'ny Ultimate Multisite mampiseho ireo mpamatsy hosting](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Link Configuration ho an'ny mpamatsy hosting eo amin'ny tabilao Integrations mampiseho ny mpamatsy hosting -->

_Tandremo fa raha tsy ao amin'ireo mpamatsy hosting voalaza etsy ambony no hosting anao, **mila manao sync na manampy ny anaran'ny domain** mivantana amin'ny kaontina hosting anao ianao._
