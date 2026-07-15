---
title: Me pēhea te Whirihora i te Whakamahere Rohe
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Me pēhea te Whirihora i te Domain Mapping (v2)

_**TUHIPOKA NUI: E pā ana tēnei tuhinga ki Ultimate Multisite putanga 2.x.**_

Ko tētahi o ngā āhuatanga tino kaha o tētahi whatunga premium, ko te āhei ki te tuku ki ā tātou kiritaki i te whai wāhi ki te hono i tētahi top-level domain ki ā rātou pae. Ka mutu, ko tēhea te āhua ngaio ake: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com), ko [_**joesbikeshop.com**_](http://joesbikeshop.com) rānei? Koia te take ka tuku a Ultimate Multisite i taua āhuatanga kua whakaurua kē, me te kore e hiahia ki te whakamahi i ngā plugins rōpū-tuatoru.

## He aha te domain mapping? {#whats-domain-mapping}

E ai ki te ingoa, ko te domain mapping te āheitanga e tukuna ana e Ultimate Multisite ki te tango i tētahi tono mō tētahi custom domain, ā, ki te whakamahere i taua tono ki te pae hāngai i roto i te whatunga kua honoa ki taua domain motuhake.

### Me pēhea te whakarite i te domain mapping ki tō Ultimate Multisite Network {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Me whai whakariterite te domain mapping māu e mahi kia pai ai te mahi. Waimarie, ka aunoa a Ultimate Multisite i ngā mahi uaua māu, kia māmā ai tō whakatutuki i ngā whakaritenga.

I te wā o te tāutanga Ultimate Multisite, ka tārua, ka tāuta aunoatia e te ruānuku te **sunrise.php** ki te kōpaki kua tohua. **Kāore te ruānuku e tuku kia haere tonu koe kia oti rā anō tēnei hipanga**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Ko te tikanga o tēnei, ina oti i te ruānuku tāutanga Ultimate Multisite te whakarite i tō whatunga, ka taea e koe te tīmata tonu ki te mapping i te custom domain.

Kia mōhio ehara te domain mapping i Ultimate Multisite i te mea herea. He kōwhiringa tōu ki te whakamahi i te mahi domain mapping taketake o WordPress Multisite, i tētahi atu otinga domain mapping rānei.

Ki te hiahia koe ki te mono i te domain mapping a Ultimate Multisite kia wātea ai mō ētahi atu otinga domain mapping, ka taea te mono i tēnei āhuatanga i raro i **Ultimate Multisite > Settings > Domain Mapping**.

![Whārangi tautuhinga Domain Mapping e whakaatu ana i te admin redirect, te karere mapping me ngā kōwhiringa DNS](/img/config/domain-mapping-settings.png)

Kei raro tonu iho i tēnei kōwhiringa, ka kitea hoki e koe te kōwhiringa **Force Admin Redirect**. Mā tēnei kōwhiringa koe e āhei ai ki te whakahaere mēnā ka taea e ō kiritaki te uru ki tō rātou admin dashboard i runga i tō rātou custom domain me te subdomain, i runga rānei i tētahi anake o aua mea.

Ki te kōwhiri koe i **Force redirect to mapped domain** , ka taea noa e ō kiritaki te uru ki tō rātou admin dashboard i runga i ō rātou custom domains.

Ka mahi te kōwhiringa **Force redirect to** **network domain** i te ritenga kē - ka whakaaetia noa ō kiritaki ki te uru ki ā rātou dashboards i runga i tō rātou subdomain, ahakoa e ngana ana ki te takiuru i runga i ō rātou custom domains.

Ā, mā te kōwhiringa **Allow access to the admin by both mapped domain domain and network domain** e āhei ai rātou ki te uru ki ā rātou admin dashboards i runga i te subdomain me te custom domain hoki.

![Tahua taka-iho Admin Redirect kua whakawhānuitia e whakaatu ana i ngā kōwhiringa redirect e toru](/img/config/domain-mapping-redirect-options.png)

E rua ngā huarahi ki te map i tētahi custom domain. Ko te tuatahi mā te mapping i te ingoa domain mai i tō network admin dashboard hei super admin, ā, ko te tuarua mā te subsite admin dashboard i raro i te whārangi account.

Engari i mua i tō tīmata ki te mapping i te custom domain ki tētahi o ngā subsites i tō whatunga, me mātua whakarite koe kua tika te whirihora o ngā **DNS settings** o te ingoa domain.

###

### Te whakarite kia tika te whirihora o ngā tautuhinga DNS o te domain {#making-sure-the-domain-dns-settings-are-properly-configured}

Kia mahi ai tētahi mapping, me mātua whakarite koe kei te tohu te domain e whakamahere ana koe ki te map ki te wāhitau IP o tō Network. Kia mōhio me hiahia koe ki te wāhitau IP o te Network - arā, te wāhitau IP o te domain i tāutatia ai a Ultimate Multisite - ehara i te wāhitau IP o te custom domain e hiahia ana koe ki te map. Hei rapu i te wāhitau IP o tētahi domain motuhake, e tūtohu ana mātou kia haere ki [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), hei tauira.

Kia tika ai te map i te domain, me tāpiri koe i tētahi **A RECORD** ki tō whirihoranga **DNS** e tohu ana ki taua **wāhitau IP**. He rerekē rawa te whakahaere DNS i waenga i ngā domain registrars rerekē, engari he nui ngā akoranga tuihono e kapi ana i tēnei mēnā ka rapu koe mō " _Creating A Record on XXXX_ " arā ko XXXX tō domain registrar (hei tauira: " _Creating A Record on_ _GoDaddy_ ").

Ki te raru koe ki te whakakori i tēnei, **whakapā atu ki te tautoko a tō domain registrar**, ā, ka taea e rātou te āwhina i a koe ki tēnei wāhanga.

Ki te whakamahere koe ki te tuku i ō kiritaki kia map i ā rātou ake domains, mā rātou anō e mahi tēnei wāhanga. Tohua rātou ki te pūnaha tautoko a tō rātou registrar ki te kore rātou e āhei ki te waihanga i te A Record.

### Te mapping i te ingoa custom domain hei Super Admin {#mapping-custom-domain-name-as-super-admin}

Ina takiuru koe hei super admin ki tō whatunga, ka māmā tō tāpiri me te whakahaere i ngā ingoa custom domain mā te haere ki raro i **Ultimate Multisite > Domains**.

![Whārangi rārangi Domains i Ultimate Multisite](/img/admin/domains-list.png)

I raro i tēnei whārangi, ka taea e koe te pāwhiri i te pātene **Add Domain** i runga, ā, ka whakaputa tēnei i tētahi matapihi modal e taea ai e koe te tautuhi me te whakakī i te **ingoa custom domain** , **te subsite** e hiahia ana koe ki te hoatu i te ingoa custom domain ki a ia, me te whakatau mēnā e hiahia ana koe ki te tautuhi hei ingoa **primary domain** rānei, kāore rānei (kia mōhio ka taea e koe te map i **ngā ingoa domain maha ki tētahi subsite kotahi**).

![Modal Add Domain me te ingoa domain, te kōwhiri pae me te pana primary domain](/img/admin/domain-add-modal.png)

Whai muri i te whakauru i ngā mōhiohio katoa, ka taea e koe te pāwhiri i te pātene **Add Existing Domain** kei raro.

Ka tīmata tēnei i te tukanga manatoko me te tiki i ngā mōhiohio DNS o te custom domain. Ka kite hoki koe i tētahi rangitaki kei raro o te whārangi hei whai māu i te tukanga e haere ana. Tērā pea ka pau ētahi meneti kia oti ai tēnei tukanga.

Ultimate Multisite v2.13.0 ka waihanga aunoa hoki i te rekoata rohe ā-roto ina hangaia he pae hou ki runga i tētahi host e tika ana kia whakaarohia hei rohe mō ia pae. Mēnā ko te host te rohe matua o te whatunga, tētahi rānei o ngā rohe pūtake puka-checkout tiritahi kua whirihorahia ki tētahi āpure **Site URL**, ka pekehia te rekoata rohe-kua-maherehia aunoa kia noho wātea tonu taua rohe pūtake tiritahi ki ia pae e whakamahi ana i a ia.

Ina rēhita tētahi kiritaki i tētahi rohe hou mā Domain Seller v1.3.0, hou ake rānei, ka mahere aunoa a Ultimate Multisite i te rohe kua rēhitatia ki te pae whatunga a te kiritaki hei taunoa. Kāore ngā kaiwhakahaere e mate ki te tāpiri i tētahi rekoata rohe-kua-maherehia motuhake i muri i tētahi rēhitatanga angitu, engari mēnā e hiahia ana rātou ki te whakatika kōwhiringa pēnei i te haki rohe-matua, te tūnga whakahohe, te whakahaere SSL rānei.

Me huri te **Atamira**, te tūnga rānei, mai i **E arowhai ana i te DNS** ki **Kua Reri** mēnā kua tika te whakarite o ngā mea katoa.

<!-- Kāore te whakaahuamata i te wātea: Rārangi rohe e whakaatu ana i te atamira E arowhai ana i te DNS i te rārangi rohe -->

<!-- Kāore te whakaahuamata i te wātea: Rārangi rohe e whakaatu ana i te atamira Kua Reri me te tohu tūnga kākāriki -->

Mēnā ka pāwhiri koe i te ingoa rohe, ka taea e koe te kite i ētahi kōwhiringa kei roto. Me āta tiro wawe tātou ki aua mea:

![Whārangi taipitopito rohe me ngā takahuri atamira, pae, hohe, matua me te SSL](/img/admin/domain-edit.png)

**Atamira:** Koinei te atamira kei reira te rohe. Ina tāpiri tuatahi koe i te rohe, tērā pea kei te atamira **E arowhai ana i te DNS**. Ka arowhai te tukanga i ngā tāurunga DNS, ā, ka whakaū he tika. Kātahi ka tukuna te rohe ki te atamira **E arowhai ana i te SSL**. Ka arowhai a Ultimate Multisite mēnā he SSL tō te rohe, kāore rānei, ā, ka whakarōpū i tō rohe hei **Kua Reri**, hei **Kua Reri (kāore he SSL)** rānei.

**Pae:** Te rohe-iti e pā ana ki tēnei rohe. Ka whakaatu te rohe kua maherehia i ngā ihirangi o tēnei pae motuhake.

**Hohe:** Ka taea e koe te whakakā, te whakaweto rānei i tēnei kōwhiringa hei whakahohe, hei whakaweto rānei i te rohe.

**He Rohe Matua?:** Ka taea e ō kiritaki te whai neke atu i te kotahi rohe kua maherehia mō ia pae. Whakamahia tēnei kōwhiringa hei tīpako mēnā ko tēnei te rohe matua mō te pae motuhake.

**He Haumaru?:** Ahakoa ka arowhai a Ultimate Multisite mēnā he tiwhikete SSL tō te rohe, kāore rānei, i mua i te whakahohe i a ia, ka taea e koe te tīpako ā-ringa kia utaina te rohe me te tiwhikete SSL, kāore rānei. Kia mōhio, mēnā kāore he tiwhikete SSL tō te paetukutuku, ā, ka ngana koe ki te akiaki kia utaina mā SSL, tērā pea ka puta he hapa ki a koe.

### Te mahere i te ingoa rohe ritenga hei kaiwhakamahi Pae-iti {#mapping-custom-domain-name-as-subsite-user}

Ka taea hoki e ngā kaiwhakahaere pae-iti te mahere i ngā ingoa rohe ritenga mai i tā rātou Dashboard kaiwhakahaere pae-iti.

Tuatahi, me whakarite koe kia whakahohea tēnei kōwhiringa i raro i ngā tautuhinga **Mahere rohe**. Tirohia te whakaahuamata i raro nei.

<!-- Kāore te whakaahuamata i te wātea: Ngā tautuhinga mahere rohe e tuku ana i ngā kaiwhakamahi pae-iti ki te mahere rohe mā te takahuri Customer DNS Management -->

Ka taea hoki e koe te tautuhi, te whirihora rānei i tēnei kōwhiringa i raro i te taumata **Mahere**, i ngā kōwhiringa hua rānei i **Ultimate Multisite > Ngā Hua**.

![Wāhanga Rohe Ritenga i te whārangi whakatika hua](/img/config/product-custom-domains.png)

Ina whakahohea tētahi o aua kōwhiringa, ā, ka whakaaetia tētahi kaiwhakamahi pae-iti ki te mahere i ngā ingoa rohe ritenga, me kite te kaiwhakamahi pae-iti i tētahi metabox i raro i te whārangi **Account** e kīia ana ko **Ngā Rohe**.

<!-- Kāore te whakaahuamata i te wātea: Metabox Ngā Rohe i te whārangi Account pae-iti me te pātene Tāpiri Rohe -->

Ka taea e te kaiwhakamahi te pāwhiri i te pātene **Tāpiri Rohe**, ā, ka puta ake tētahi matapihi modal me ētahi tohutohu.

<!-- Kāore te whakaahuamata i te wātea: Modal Tāpiri Rohe e whakaatu ana i ngā tohutohu rekoata-A DNS mō ngā kaiwhakamahi pae-iti -->

Kātahi ka taea e te kaiwhakamahi te pāwhiri i **Hipanga Panuku**, ā, ka haere tonu ki te tāpiri i te ingoa rohe ritenga. Ka taea hoki e rātou te kōwhiri mēnā koinei te rohe matua, kāore rānei.

<!-- Kāore te whakaahuamata i te wātea: Puka Tāpiri Rohe me te āpure ingoa rohe ritenga me te takahuri rohe matua -->

<!-- Kāore te whakaahuamata i te wātea: Hipanga whakaū Tāpiri Rohe e whakaoho ana i te manatoko DNS -->

Mā te pāwhiri i **Tāpiri Rohe** ka tīmata te tukanga manatoko me te tiki i ngā mōhiohio DNS o te rohe ritenga.

### Mō te Tukutahi Rohe {#about-domain-syncing}

Ko te Tukutahi Rohe he tukanga e tāpiri ai a Ultimate Multisite i te ingoa rohe ritenga ki tō pūkete manaaki hei rohe tāpiri **kia mahi ai te mahere rohe**.

Ka puta aunoa te tukutahi rohe mēnā he kōmitimiti tō tō kaiwhakarato manaaki ki te āhuatanga mahere rohe a Ultimate Multisite. I tēnei wā, ko ēnei kaiwhakarato manaaki ko _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ me _Cpanel._

Ina hohe tētahi kōmitimiti kaiwhakarato-host, ka taea hoki e Ultimate Multisite te tāpiri ki te rārangi mahi i te mahi hanga DNS, rohe-iti rānei ā-taha kaiwhakarato mō ngā pae hou kua hangaia. Mēnā kāore he kōmitimiti e whakarongo ana mō taua mahi, ka pekehia te mahi papamuri kia kore ai e puta ngā tāurunga rārangi mahi kāore he hua. Ka haere tonu ngā arowhai DNS me SSL mō ngā rohe kua maherehia mā te tukanga atamira-rohe noa.

Me whakahohe koe i tēnei kōmitimiti i ngā tautuhinga Ultimate Multisite i raro i te ripa **Kōmitimiti**.

![Ripa Kōmitimiti i ngā tautuhinga Ultimate Multisite e whakaatu ana i ngā kaiwhakarato manaaki](/img/config/integrations-tab.png)

<!-- Kāore te whakaahuamata i te wātea: Ngā hononga Whirihoranga kaiwhakarato manaaki i te ripa tautuhinga Kōmitimiti -->

_Kia mōhio, mēnā ehara tō kaiwhakarato manaaki i tētahi o aua kaiwhakarato kua whakahuatia i runga ake nei, **me tukutahi ā-ringa koe, me tāpiri rānei i te ingoa rohe** ki tō pūkete manaaki._
