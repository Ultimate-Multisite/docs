---
title: Otu esi ahazi Njikọ Ngalaba
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Otu esi ahazi Ijikọ Ngalaba (v2) {#how-to-configure-domain-mapping-v2}

_**IHE NDỊ DỊ MKPA: Edemede a na-ezo aka na Ultimate Multisite ụdị 2.x.**_

Otu n’ime njirimara kachasị ike nke netwọkụ premium bụ ikike inye ndị ahịa anyị ohere ijikọ ngalaba dị n’ọkwa elu na saịtị ha. N’ikpeazụ, nke na-adị ka nke ọkachamara karịa: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) ma ọ bụ [_**joesbikeshop.com**_](http://joesbikeshop.com)? Ọ bụ ya mere Ultimate Multisite ji enye njirimara ahụ n’ime ya, na-enweghị mkpa iji ngwa mgbakwunye ndị ọzọ.

## Gịnị bụ ijikọ ngalaba? {#whats-domain-mapping}

Dị ka aha ahụ na-egosi, ijikọ ngalaba bụ ikike Ultimate Multisite na-enye iji nata arịrịọ maka ngalaba omenala ma jikọọ arịrịọ ahụ na saịtị kwekọrọ na netwọkụ ahụ nke ejikọtara ngalaba ahụ pụrụ iche na ya.

### Otu esi ahazi ijikọ ngalaba na Ultimate Multisite Network gị {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Ijikọ ngalaba chọrọ ụfọdụ nhazi n’aka gị ka ọ rụọ ọrụ. Ọ dabara nke ọma, Ultimate Multisite na-eme ka ọrụ siri ike bụrụ akpaaka maka gị ka ị nwee ike izute ihe achọrọ n’ụzọ dị mfe.

N’oge nrụnye Ultimate Multisite, wizard ga-edegharị ma wụnye **sunrise.php** na folda e kenyere. **Wizard agaghị ekwe ka ị gaa n’ihu ruo mgbe emechara nzọụkwụ a**.

<!-- Enweghị screenshot: wizard nrụnye Ultimate Multisite nwere nzọụkwụ sunrise.php -->

Nke a pụtara na ozugbo wizard nrụnye Ultimate Multisite mechara ịhazi netwọkụ gị, ị nwere ike ịmalite ijikọ ngalaba omenala ozugbo.

Rịba ama na ijikọ ngalaba na Ultimate Multisite abụghị iwu. Ị nwere nhọrọ iji ọrụ ijikọ ngalaba nke WordPress Multisite n’onwe ya ma ọ bụ ngwọta ijikọ ngalaba ọ bụla ọzọ.

Ọ bụrụ na ịchọrọ gbanyụọ ijikọ ngalaba Ultimate Multisite iji nye ohere maka ngwọta ijikọ ngalaba ndị ọzọ, ị nwere ike gbanyụọ njirimara a n’okpuru **Ultimate Multisite > Settings > Ijikọ Ngalaba**.

![Peeji ntọala Ijikọ Ngalaba na-egosi ntụgharị admin, ozi ijikọ na nhọrọ DNS](/img/config/domain-mapping-settings.png)

Kpọmkwem n’okpuru nhọrọ a, ị nwekwara ike ịhụ nhọrọ **Manye Ntugharị Admin**. Nhọrọ a na-enye gị ohere ijikwa ma ndị ahịa gị ga-enwe ike ịbanye na dashboard admin ha ma na ngalaba omenala ha ma na subdomain ha, ma ọ bụ naanị n’otu n’ime ha.

Ọ bụrụ na ịhọrọ **Manye ntugharị gaa na ngalaba ejikọtara** , ndị ahịa gị ga-enwe ike ịbanye na dashboard admin ha naanị na ngalaba omenala ha.

Nhọrọ **Manye ntugharị gaa na** **ngalaba netwọkụ** ga-eme kpọmkwem ihe megidere ya - a ga-ekwe ka ndị ahịa gị banye na dashboard ha naanị na subdomain ha, ọbụna ma ọ bụrụ na ha na-agbalị ịbanye na ngalaba omenala ha.

Ma nhọrọ **Kwe ka ịbanye na admin site ma na ngalaba ejikọtara ma na ngalaba netwọkụ** na-enye ha ohere ịbanye na dashboard admin ha ma na subdomain ma na ngalaba omenala.

![Dropdown Ntugharị Admin gbasapụrụ na-egosi nhọrọ ntugharị atọ ahụ](/img/config/domain-mapping-redirect-options.png)

E nwere ụzọ abụọ iji jikọọ ngalaba omenala. Nke mbụ bụ site n’ijikọ aha ngalaba site na dashboard admin netwọkụ gị dịka super admin, nke abụọ bụ site na dashboard admin subsite n’okpuru peeji account.

Mana tupu ịmalite ijikọ ngalaba omenala na otu n’ime subsites dị na netwọkụ gị, ị ga-achọ ijide n’aka na **ntọala DNS** nke aha ngalaba ahụ ahazirila nke ọma.

###

### Ijide n’aka na ntọala DNS nke ngalaba ahazirila nke ọma {#making-sure-the-domain-dns-settings-are-properly-configured}

Ka ijikọ rụọ ọrụ, ị ga-ejide n’aka na ngalaba ị na-eme atụmatụ ijikọ na-atụ aka na adreesị IP nke Network gị. Rịba ama na ịchọrọ adreesị IP nke Network - adreesị IP nke ngalaba ebe etinyere Ultimate Multisite - ọ bụghị adreesị IP nke ngalaba omenala ịchọrọ ijikọ. Iji chọọ adreesị IP nke ngalaba pụrụ iche, anyị na-atụ aro ịga na [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), dịka ọmụmaatụ.

Iji jikọọ ngalaba ahụ nke ọma, ị ga-agbakwunye **A RECORD** na nhazi **DNS** gị na-atụ aka na **adreesị IP** ahụ. Njikwa DNS na-adịgasị iche nke ukwuu n’etiti ndị na-edebanye ngalaba dị iche iche, mana e nwere ọtụtụ nkuzi n’ịntanetị na-ekpuchi nke ahụ ma ọ bụrụ na ịchọọ " _Ịmepụta A Record na XXXX_ " ebe XXXX bụ onye na-edebanye ngalaba gị (dịka: " _Ịmepụta A Record na_ _GoDaddy_ ").

Ọ bụrụ na ị hụta na ị na-enwe nsogbu ime ka nke a rụọ ọrụ, **kpọtụrụ nkwado onye na-edebanye ngalaba gị** ma ha ga-enwe ike inyere gị aka na akụkụ a.

Ọ bụrụ na ị na-eme atụmatụ ikwe ka ndị ahịa gị jikọọ ngalaba nke ha, ha ga-eme ọrụ dị n’akụkụ a n’onwe ha. Duga ha gaa na usoro nkwado nke onye na-edebanye ha ma ọ bụrụ na ha hụta na ha enweghị ike ịmepụta A Record.

### Ijikọ aha ngalaba omenala dịka Super Admin {#mapping-custom-domain-name-as-super-admin}

Mgbe ị banyere dịka super admin na netwọkụ gị, ị nwere ike ịgbakwunye ma jikwaa aha ngalaba omenala n’ụzọ dị mfe site n’ịga n’okpuru **Ultimate Multisite > Ngalaba**.

![Peeji ndepụta Ngalaba na Ultimate Multisite](/img/admin/domains-list.png)

N’okpuru peeji a, ị nwere ike pịa bọtịnụ **Tinye Ngalaba** n’elu, nke a ga-eweta windo modal ebe ị nwere ike ịhazi ma dejupụta **aha ngalaba omenala** , **subsite** ịchọrọ itinye aha ngalaba omenala ahụ na ya, ma kpebie ma ịchọrọ ịhazi ya dịka aha **ngalaba mbụ** ma ọ bụ na ị chọghị (rịba ama na ị nwere ike ijikọ **ọtụtụ aha ngalaba na otu subsite**).

![Modal Tinye Ngalaba nwere aha ngalaba, onye nhọpụta saịtị na toggle ngalaba mbụ](/img/admin/domain-add-modal.png)

Mgbe itinyere ozi niile, ị nwere ike pịa bọtịnụ **Tinye Ngalaba Dị Adị** n’ala.

Nke a ga-amalite usoro ịlele ma weta ozi DNS nke ngalaba omenala ahụ. Ị ga-ahụkwa log n’ala peeji ahụ ka ị soro usoro ọ na-agafe. Usoro a nwere ike iwe nkeji ole na ole iji mechaa.

Ultimate Multisite v2.13.0 na-emekwa ndekọ domain dị n’ime na-akpaghị aka mgbe e mepụtara site ọhụrụ n’elu host a ga-ewere dị ka domain nke site ọ bụla. Ọ bụrụ na host ahụ bụ domain bụ isi nke network ahụ, ma ọ bụ otu n’ime shared checkout-form base domains ahaziri na field **Site URL**, a ga-ahapụ ndekọ mapped-domain akpaghị aka ka shared base domain ahụ wee nọgide dịịrị site ọ bụla na-eji ya.

Mgbe customer debanyere domain ọhụrụ site na Domain Seller v1.3.0 ma ọ bụ nke ọhụrụ karịa, Ultimate Multisite na-map domain edebanyere aha ahụ na network site nke customer ahụ na ndabara. Administrators agaghịzi achọ itinye ndekọ mapped-domain ọzọ mgbe registration gara nke ọma, belụsọ ma ha chọrọ ịgbanwe options dịka primary-domain flag, activation state, ma ọ bụ SSL handling.

**Stage** ma ọ bụ status kwesịrị ịgbanwe site na **Checking DNS** gaa **Ready** ma ọ bụrụ na e haziri ihe niile nke ọma.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Ọ bụrụ na ị pịa aha domain ahụ, ị ga-enwe ike ịhụ ụfọdụ options n’ime ya. Ka anyị lelee ha ngwa ngwa:

![Peeji nkọwa domain nwere stage, site, active, primary na SSL toggles](/img/admin/domain-edit.png)

**Stage:** Nke a bụ stage domain ahụ nọ na ya. Mgbe ị gbakwunyere domain ahụ nke mbụ, o yikarịrị ka ọ ga-adị na stage **Checking DNS**. Usoro ahụ ga-elele entries DNS ma kwado na ha ziri ezi. Mgbe ahụ, a ga-etinye domain ahụ na stage **Checking SSL**. Ultimate Multisite ga-elele ma domain ahụ nwere SSL ma ọ bụ na ọ nweghị, ma kee domain gị dị ka **Ready** ma ọ bụ **Ready (without SSL)**.

**Site:** Subdomain ejikọtara na domain a. Mapped domain ahụ ga-egosi ọdịnaya nke site a kpọmkwem.

**Active:** Ị nwere ike ịgbanye ma ọ bụ gbanyụọ option a iji mee ka domain rụọ ọrụ ma ọ bụ kwụsị ya.

**Is Primary Domain?:** Customers gị nwere ike inwe ihe karịrị otu mapped domain maka site ọ bụla. Jiri option a họrọ ma nke a bụ primary domain maka site ahụ kpọmkwem.

**Is Secure?:** Ọ bụ ezie na Ultimate Multisite na-elele ma domain ahụ nwere SSL certificate ma ọ bụ na ọ nweghị tupu o mee ka ọ rụọ ọrụ, ị nwere ike iji aka họrọ ka a load domain ahụ na SSL certificate ma ọ bụ na-enweghị ya. Rịba ama na ọ bụrụ na website ahụ enweghị SSL certificate ma ị nwaa ịmanye ya ka ọ load na SSL, ọ nwere ike inye gị errors.

### Ime mapping aha custom domain dịka onye ọrụ Subsite {#mapping-custom-domain-name-as-subsite-user}

Subsite administrators nwekwara ike ime mapping aha custom domain site na admin dashboard nke subsite ha.

Nke mbụ, ị ga-ahụrịrị na ị gbanyere option a n'okpuru settings **Domain mapping**. Lee screenshot dị n'okpuru.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Ị nwekwara ike ịtọ ma ọ bụ hazie option a n'okpuru ọkwa **Plan** ma ọ bụ product options na **Ultimate Multisite > Products**.

![Ngalaba Custom Domains na peeji edit product](/img/config/product-custom-domains.png)

Mgbe agbanyere otu n’ime options ndị ahụ ma kwe ka onye ọrụ subsite mee mapping aha custom domain, onye ọrụ subsite ahụ kwesịrị ịhụ metabox n'okpuru peeji **Account** a na-akpọ **Domains**.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

Onye ọrụ ahụ nwere ike pịa button **Add Domain**, ọ ga-eweta windo modal nwere ụfọdụ ntụziaka.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

Onye ọrụ ahụ nwere ike pịa **Next Step** wee gaa n’ihu tinye aha custom domain. Ha nwekwara ike họrọ ma nke a ga-abụ primary domain ma ọ bụ na ọ bụghị.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Ịpị **Add Domain** ga-amalite usoro nyocha na ịweta ozi DNS nke custom domain ahụ.

### Banyere Domain Syncing {#about-domain-syncing}

Domain Syncing bụ usoro ebe Ultimate Multisite na-agbakwunye aha custom domain na hosting account gị dịka add-on domain **ka domain mapping wee rụọ ọrụ**.

Domain syncing na-eme na-akpaghị aka ma ọ bụrụ na hosting provider gị nwere integration na feature domain mapping nke Ultimate Multisite. Ugbu a, hosting providers ndị a bụ _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ na _Cpanel._

Mgbe integration nke host-provider nọ n’ọrụ, Ultimate Multisite nwekwara ike itinye task DNS ma ọ bụ subdomain creation n'akụkụ provider n’queue maka sites emepụtara ọhụrụ. Ọ bụrụ na integration ọ bụla anaghị ege ntị maka task ahụ, background job ahụ ga-agafe ya iji zere queue entries na-enweghị ọrụ. Nlele DNS na SSL maka mapped domains na-aga n’ihu ịrụ ọrụ site na usoro domain-stage nkịtị.

Ị ga-achọ ime ka integration a rụọ ọrụ na settings Ultimate Multisite n'okpuru tab **Integration**.

![Tab Integrations na settings Ultimate Multisite na-egosi hosting providers](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Rịba ama na ọ bụrụ na hosting provider gị abụghị otu n’ime providers ndị a kpọrọ aha n’elu,**ị ga-achọ iji aka sync ma ọ bụ tinye aha domain** na hosting account gị._
