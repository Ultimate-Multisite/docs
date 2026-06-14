---
title: Pejy Kaontin'ny Mpanjifa
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Pejy Ka Kaontina An'ny Mpanjaka (v2)

_**FANAM-BAHANA MANAN-DAN-DAN: Io lahatsoratra io dia manondro ny Ultimate Multisite v2.x.**_

Rehefa misoratra (subscribe) ny mpanjaka iray amin'ny toromarika (plan) ao anatin'ny tambajotra (network) anao, dia hahazo fidirana amin'ny tranokala sy ny dashboard-ny izay ahitana vaovao manan-danja momba ny famatsiana azy, ny fandraisana anjara (memberships), ny domain, ny fetran'ny toromarika, sns...

Amin'ity tutorial ity, dia hitarika anareo amin'ny pejy kaontina mpanjaka isika ary ho hitanareo izay vitan'izy ireo sy ataony ao anatin'izany.

## Ny Pejy Kaontina (The Account Page)

Afaka miditra amin'ity pejy kaontina ity ianao amin'ny alalan'ny tsindrim-peo **Account** ao anatin'ny dashboard an'ilay mpanjaka.

![Menu kaonty ao anatin'ny dashboard an'ny mpanjaka](/img/account-page/account-menu.png)

Amin'ny tambajotra (tenant networks) manana ny fananana soban'ny (sovereign tenant), ny Ultimate Multisite v2.13.0 dia mitazona ity traikefa fitantanana mpanjaka ity eo amin'ny tranokala lehibe (main site). Raha misintakatra kaonty, checkout, fandoavam-bola (billing), facture, fitantanana toerana (site-management), fanovana template, na fametrahana domain avy amin'ny soban'ny tenant iray ny mpanjaka, dia hiverina ao anatin'ny panel mpanjaka an'ny tranokala lehibe izany mba hahazoana antoka fa ny fandraisana anjara sy ny fampahafantarana momba ny tambajotra dia mitazona ny maha-manan-danja azy.

Rehefa tonga amin'ity panel mpanjaka ity ny mpanjaka avy amin'ny soban'ny tenant iray, afaka misy rohy hiverina (return link) mankany amin'ny toerana an'ilay soban'ny tenant izany. Azo hasehony io rohy io rehefa afaka manamarina ny toerana ho tratra ianao fa tranokala ao anatin'ny mpanjaka, izay miantoka tsy hisy fampitsoana tsy nampoizina (arbitrary redirects) nefa mitazona ny fomba fiasan'ny soban'ny tenant.

![Fahafantaran'ny pejy kaontin'ny mpanjaka](/img/account-page/overview.png)

Rehefa tsindrin'izy ireo izany, dia hahita famintinana ny fandraisana anjara (membership), ny adiresy famatsiana (billing address), ny facture, ny domain, ny fetran'ny toerana (site limitations), ary afaka manova ny ****Site Template**** (raha azo atao ao amin'ny tambajotranareo) izy.

Afaka manova ny fandraisana anjara ho toromarika hafa izy, na mividy paketra na serivisy hafa izay atolotra anareo. Andao hijery tsirairay ny faritra.

### Fampanana ny Fandraisana Anarana (Membership Overview):

Ny tabilao voalohany eo ambaninny anaran'ny tranokalan'ny mpanjifa dia mampiseho fampahafantarana momba ny toromarika (plan) sy ny serivisy/package izay nividianareo tamin'izany. Mampiseho ihany koa io tabilao io ny laharanon-dikan'ny fandraisana anarana, ny vola voalohany nampanofana azy, ny vidin'ilay toromarika sy ny serivisy/package ary ny indray mandeha nampanofana azy ho fandraisana anarana. Afaka mahita ihany koa izy raha **Active** (mavitrika), **Expired** (tapitra) na **Canceled** (voafetra) no toerana misy ilay fandraisana anarana.

![Membership overview showing plan, amount, and billing details](/img/account-page/membership-card.png)

Eo ambanin'ity tabilao ity, dia afaka mahita ny tabilao **About This Site** (Momoko an'ity Tranokala ity) sy ny **Site Limits** (Fitondran-tena ho an'ny Tranokala). Ireo tabilao ireo dia mampiseho ny fetra rehetra azo atao amin'ilay toromarika: ny toerana fitahirizana (disk space), ny lahatsoratra (posts), ny pejy (pages), ny fidirana (visits), sns... Afaka manova ireny fetra ireny eo amin'ny pejy toromarika tsirairay ianao ao amin'ny **Ultimate Multisite > Products**.

![About This Site and Site Limits blocks showing plan limitations](/img/account-page/site-limits.png)

Eo an-daniny (any havia) amin'ny **Your Membership** (Ny Fandraisana Anarana), dia afaka tsindrina ny **Change** (Manova) ny mpanjifa. Izany dia haneho ny toromarika sy ny package/serivisy rehetra azo atao. Raha misafidy toromarika hafa izy, dia ho lasa fetran'ilay toromarika no ho mandeha fa tsy ny fetran'ny fandraisana anarana ankehitriny – tsy zava-dehibe raha manambady na manitsy (downgrading or upgrading) ianao.

Ary raha misafidy ny mpanjifa ny fividianana package na serivisy ho an'ity fandraisana anarana ankehitriny ity izy – toy ny toerana fitahirizana bebe kokoa na ny fidirana (visits) – dia tsy hovana ilay fandraisana anarana ankehitriny fa ny package vaovao ihany no ho ampiana azy.

Tandremo fa tsy azo ampiana code coupon amin'ity pejy manova fandraisana anarana ity. Raha nampiasa code coupon mpanjifa tamin'ny fividianana voalohany dia hampiasaina koa ilay code amin'ity fandraisana anarana vaovao ity.

### Fanavaozana ny Adiresy Fandrefana (Updating the Billing Address):

Amin'ny pejy kaonty, afaka manavao ny adiresin'ny fandraisana vola ny mpanjifa anareo koa izy ireo. Mila tsapahina fotsiny ny **Update** eo anilan'ny _Billing Address_ noho.

![Billing Address section with Update button](/img/account-page/billing-address.png)

Ho hiseho varavarankely vaovao ho an'ilay mpanjifa. Ny tokony hataony dia ny famafazana ny adiresy vaovao sy ny kely fotsiny ny **Save Changes**.

![Update billing address form](/img/account-page/billing-address-form.png)

### Fanovana ny Site Template:

Mba ahafahanao mamela ny mpanjifanao manova ny site template ananany, mila mandeha any amin'ny **Ultimate Multisite > Settings > Sites** ianao ary ataovy **on** ilay safidy hoe **Allow Template Switching**.

Ary koa, eo amin'ny **Ultimate Multisite > Products**, safidio ireo plan-nao ary mandehana any amin'ny tabilao **Site Templates**. Ataovy azo antoka fa voafafana ny safidy hoe **Allow Site Templates** ary eo amin'ny **Site Template Selection Mode**, dia safidio ny safidy hoe **Choose Available Site Templates**.

![Product site templates tab with template selection mode](/img/config/product-site-templates.png)

Afaka mahita ny site template rehetra azo atao ianao ao amin'ny tranokalanareo. Safidio izay tianao ho azo ampiasaina sy izay tsy tianao ho azo ampiasain'ireo mpanjifa mifandray amin'ity plan ity. Tsy maintsy fantatrao fa misy fiantraikany amin'ny forms fandraisana vola iz ireo, ka ny template izay safidina hoe **Not Available** dia tsy hiseho eo amin'ny pejy famarihana ho an'ity plan ity.

Ity no ahafahanareo mpanjifanao manindry ny **Change Site Template** ao anatin'ny pejy kaontiny.

![Change Site Template button on account page](/img/account-page/change-template-button.png)

Ny Ultimate Multisite 2.10.0 dia mampiseho panel fanovana template vaovao. Manomboka amin'ny **current-template card** izy io mba hahafahan'ireo mpanjifa mahita hoe iza no template mandeha aloha alohan'ny safidy azy ho hafa.

Misy sarintany fanaovana grid misy vola azo ampiasaina amin'ny site (site templates) izay mijanona eo mba hijerena ny mpanjifa mandinika ireo safidy. Izany dia manampy azy ireo hahatantana ny template azo ampiasana ho an'ny plan-nao nefa tsy very ny fijerena ilay safidy efa misafidy.

![Listan'ny site templates azo ampiasaina ho an'ilay plan](/img/config/site-templates-list.png)

Rehefa misafidy ilay tian'izy ireo ovaina, dia ho fantatra azy mba hanamafisana ny fanovana.

![Fampahafantarana ny fovana site template](/img/account-page/template-switch-confirm.png)

Rehefa mandoro an-tsipika (toggle on) ilay fampahafantarana ary manindry ny **Process Switch**, dia hampiasaina amin'ny website an'ilay mpanjifa ny site template vaovao.

Afaka mampiasa ny **Reset current template** avy amin'ity panel ity koa ny mpanjifa rehefa mila averina amin'ny site efa voatendry azy ilay template. Toy ny manova template hafa, ny famerenana template dia mety hanova ny votoatin'ny site, ka tokony hanamafisana izany ny mpanjifa rehefa mazava tsara ny fomba fiasan'ilay asa fanorenana (reset).

### Fampidiana Domain Manokana (Adding Custom Domains):

Afaka manana safidy ny mpanjifanao koa mba hanampy domain manokana ho an'ity plan ity amin'ny pejy an'ny kaonty azy. Mba ahafahana mampiasa domain manokana ireo mpanjifanao, mandehana any amin'**Ultimate Multisite > Settings > Domain Mapping**.

Atafaho ny safidy **Enable Domain Mapping**. Izany dia ahafahana mampiasa domain manokana ho an'ny tambajotra (network level) ireo mpanjifanao.

Aza adino koa ny manamarina raha voafetra amin'ny vokatra (product basis) ny mapping domain - satria afaka manala fetra ilay vokatra mba tsy ahafahan'ny mpanjifanao mampiasa domain manokana.

Mandehana any amin'**Ultimate Multisite > Products**. Safidio ilay plan tianao ary mandehana any amin'ny fizarana **Custom Domains**. Atafaho ny safidy **Allow Custom Domains**.

![Fizarana Custom Domains miaraka amin'ny toggle Allow Custom Domains](/img/config/product-custom-domains.png)

Ity ahafahana ny mpanjifa rehetra nifidy ity plan manokana ity hampiasa domain manokana (custom domains). Ankehitriny, eo amin'ny pejy kaonty (Account page), afaka manampy domain manokana ny mpanjifanao amin'ny alalan'ny tsindrim-peo **Add Domain**.

![Add Domain button on the account page](/img/account-page/add-domain-button.png)

Ny varavara voalohany izay ho misokatra dia haneho ny hafatra iray ho an'ireo mpanjifanao mitendry azy toy ny fomba hanavaozana ireo DNS records mba hahafahana miasa amin'ny tambajotra (network) anareo ity domain manokana ity.

![DNS instructions shown when adding a custom domain](/img/account-page/add-domain-dns.png)

Ity hafatra ity dia azo ovaina (amin'ny alalan'ny fanaovana izany ianao) ao amin'ny **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Add New Domain Instructions setting in Domain Mapping](/img/config/settings-domain-mapping.png)

Ity ny fomba fijery feno an'ilay pejy fandrindrana domain (domain mapping settings page):

![Domain mapping settings full page](/img/config/settings-domain-mapping-full.png)

Aorian'ny tsindrim-peo **Next Step**, afaka manampy ny anaran'ny domain manokana ny mpanjifanao ary misafidy raha io domain manokana io no iray amin'ireo voalohany (primary one). Tsy maintsy fantatra fa afaka mampiasa domain manokana maromaro ny mpanjifanao ho an'ny tranonkalazany, ka afaka mifidy izay ho iray amin'ireo voalohany.

![Custom domain name entry with primary domain option](/img/account-page/add-domain-primary.png)

Aorian'ny tsindrim-peo **Add Domain**, dia ho ampiana ao anaty kaontin'ny mpanjifanao ilay domain. Ny tokony hataonareo dia ny fanovana ireo DNS records an'io domain manokana io eo amin'ny domain registrar an'izy ireo.

### Fanovana teny (Changing Password):

Ao anatin'ny dashboard an'ny kaonty, afaka manova ny teny (password) ihany koa ny mpanjifanao amin'ny alalan'ny tsindrim-peo **Change Password**.

![Change Password button on account page](/img/account-page/change-password-button.png)

Ity dia hane fomba vaovao izay mila ny mpanjifa anareo hampiasa ny teny resaka (password) nampiasainy aloha ary avy eo hampiasa ny teny resaka vaovao tian'izy ireo ampiasaina.

![Change password form with current and new password fields](/img/account-page/change-password-form.png)

### Faritra Mampidi-doza (Danger Zone):

Misy safidy roa koa izay haseho eo amin'ny faritra **Danger Zone**: ny **Manapaka Ny Tranokala (Delete Site)** sy ny **Manapaka ny Kaonty (Delete Account)**. Eto ireo dia ao anatin'ny Danger Zone satria tsy azo averina intsony ireo asa roa ireo. Raha manapaka toerana na kaonty ny mpanjifanao, dia tsy afaka averina azy ireo indray izany.

![Danger Zone with Delete Site and Delete Account options](/img/account-page/danger-zone.png)

Raha kilefa anisan'ireo safidy roa ireo ny mpanjifanao, dia haseho masoandro iray izay mila manao fepetra (toggle on) mba hanesorana ny tranokala na kaonty ary ho voalaza azy fa tsy azo averina intsony io asa io.

![Delete Site confirmation dialog](/img/account-page/delete-site-confirm.png)

![Delete Account confirmation dialog](/img/account-page/delete-account-confirm.png)

Raha manapaka ny tranokala izy, dia tsy ho voaova ny kaonty sy ny fandraisana anjara (membership) azy. Ho very fotsiny ny votoaty rehetra ao amin'ny tranokalanya. Raha manapaka ny kaonty izy, dia ho very ny tranokala rehetra, ny fandraisana anjara ary ny fampahalalana momba ity kaonty ity.
