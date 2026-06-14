---
title: He aha te ara ki te whakarite whakamārama o domain?
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# He aha te whakamahi mō te Whakawāhi o Aotearoa (v2)

_**TŪPAHUA WHAKANGA: Ko tēnei tikanga he tino pai mō Ultimate Multisite v2.x.**_

He paitanga nui i te whānau premium, ko te mea e taea ai tātou te ofiri i te mea ki ngā waka māmate (clients) kia puta mai i te mea hei āwhina atu i te domain rangatira (top-level domain) ki ngā waka o rā. He aha, he tino whakahua? Ko te mea waiho ana i te tino whakahua: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) he tino professional, ahau ko [_**joesbikeshop.com**_](http://joesbikeshop.com)? He tēnei te mea e ofiri ana i Ultimate Multisite, ā, he mea nui hoki, he tautoko ana i te mahi, i roto i te whakamahi plugin o tūai (third-party plugins).

## He aha te whakatōwhito domain mapping?

Ahakoa te ingoa, te whakatōwhito domain mapping he te mea e taea ai e Ultimate Multisite kia whakakotahitanga i te tangata e tino whakahua (custom domain) me te whakapā i te waka o te whānau (network) ki te waka hoki, me te whai i te domain tuatahi tuatahi.

### He aha te whakamahi mō te whakarite domain mapping i runga i tō Ultimate Multisite Network?

He mea e pēnei ana ia te whakawāhi domain mapping, he mea e pēnei ana ia te whakarite i tō ngā. Engari he tino pai ahau ki te whai i te mahi nui mo koe, ko Ultimate Multisite e whakamahi te mahi nui (automates) mō koe kia taea ai i a koe te whakatika i ngā āhuatanga i runga i te tika.

I taro i te installation o Ultimate Multisite, ka whakakihia te wizard (māhi whakamārama) ana te **sunrise.php** ki te folder e whai ake nei. **Ka wona ia koe kiawhiri i tēnei mahi i roto i te mahi.**

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

He reira, i raro i te whakamahi o te wizard o Ultimate Multisite ki whakatōwhito i tō waka (network), ka taea e koe te whakaatu i te domain rangatira i runga i te tika.

He mea nui hoki, he mea ana i te domain mapping i Ultimate Multisite he mea e tino pēnei ana ia. He option ana koe ki te whakamahi i te function o WordPress Multisite native domain mapping, ahau ko he mahi whakatōwhito domain mapping anya.

He mea e hiahia koe ki te whakatau i te mapping o te domain Ultimate Multisite kia taea ai i a tātou whakamahi i āhua mapping domain anya, he tino pai tō mahi. Kei te taea te whakatau i tēnei feature i runga i **Ultimate Multisite > Settings > Domain Mapping**.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

I tō pō, he tino pai te whakaaro i te option **Force Admin Redirect** (Whakawātea Admin Redirect). Ko tēnei option e hiahia koe ki te whakahaere kia whai whakaaro ahau i te mea, ko ka taea ai i ngā wakaahine (customers) te whai access ki te dashboard admin o rātou custom domain me subdomain, he tino pai, he ka taea te whai access ana i tāmaga i tēnei akoranga.

Ko te option **Force redirect to mapped domain** (Whakawātea i te domain e mapu) he ka taea ai ki ngā wakaahine te whai access ki te dashboard admin o rātou custom domain anake.

Ko te option **Force redirect to network domain** (Whakawātea i te domain network) he ka taea te whakamaoritanga i te mea, ko ka taea te whai access ana i ngā dashboard o ngā wakaahine ana i tāmaga i ngā subdomain anake, he tino pai, he he kitea i ngā custom domain.

Me te option **Allow access to the admin by both mapped domain domain and network domain** (Whakarongo ai te whai access ki te admin e rua o te domain mapu me te domain network) he ka taea ana i ngā wakaahine te whai access ki ngā dashboard admin o ngā subdomain me ngā custom domain.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

He tuata me te tuata (two ways) kia mapu i tō custom domain. Ko te tuata he te mapu i te ingoa o te domain mai i tō network admin dashboard ko super admin, ā, ko te tuata he mahinga i runga i te subsite admin dashboard i roto i te account page.

Engari i tēnei mea, i tēnei mea, i ka e pūrākau koe ki te mapu i tō custom domain ki tētahi o ngā subsites i tō network, ka taea ana ahau te whakatika i te **DNS settings** o te ingoa o te domain kia tika.

###

### Whakarongo ai i te DNS settings o te domain



Mōhio ki te mahi i te mapping (whakamārama), me tino pai anō he tino tika ana kua whai ake i te domain e hiahia koe kiawhakamārama, he mea nui tēnei. He tino nui te whakamahi atu i te IP address o te Wāhi Whakahaere (Network) – he IP address o te domain i roto i te pango i whakaurua ai te Ultimate Multisite – akorua ki te IP address o te custom domain e hiahia koe kiawhakamārama. Hei whakatopa i te IP address o domain-specific, he tino mōhio atu tēnā: he tino mōhio atu ki te [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), hei whakamārama i te IP address o te wāhi web.

Kia tika koe e whakamārama te domain, me tino āwhitu i **A RECORD** ki te whakaritenga **DNS** mo te IP address tuatahi. He tino whakawhiti i te whakahaere DNS i roto i ngā domain registrar (whakare) haere mai, engari he tino pai ngā tutorial online e whai ake ana i tēnei, ko kia whakatopa koe i " _Creating A Record on XXXX_ " i te where XXXX he te domain registrar o koe (ex: " _Creating A Record on_ _GoDaddy_ ").

Ko omaiti i runga i te mahi i te mea he tino pēnei i te whakamahi, **whakawhanaungatanga ki te whaiaro o te support o tō domain registrar** ā, ka taea e rawa atu ia te mōhio atu i tēnei mea.

Kia hiahia koe kia whai whakaae ki ngā wāhi mo te mapping o ngā domain o ngā kliens, he tino tika ana kua hei te kaha ia te mahi i tēnei mea. Kia whakatopa ia ki te whaiaro o te support o te registrar i roto i te where ka taea e ia te whakamahi i te A Record.

### Whakamārama i te custom domain name mō Super Admin

I roto i te wā kua whai i te super admin mo tō network, he tino tika ana koe e whānui i te whakatika me te whakamaoritanga o ngā custom domain names i te whakatipu i **Ultimate Multisite > Domains**.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

I roto i tēnei manawa, i taea e koe klik atu ki te puapi **Add Domain** i runga i te whero (top), ā, ka whakawhiti i te wāhi he whānui (modal window) i roto i koenga-iwi kia rite i te **custom domain name**, te **subsite** he tino tika ana e koe e hiahia atu ki te whai i te custom domain name, me te Whakarite a koe mō ā i te whai i te whakamahi i te **primary domain name** ahau. (he tino tika ana, he taea ai i te whakapā i domain names maha ki te subsite whetūahua).

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

I taiao i ngā mōhio katoa i runga i te whai, i taea e koe klik atu ki te puapi **Add Existing Domain** i runga i te whero (bottom).

Ka whakatika i tēnei tino whakamohana i te mahi whakapā me te whaikōrero DNS o te custom domain. Ka taea ai i a koe te whakahti i te log i te pō (bottom of the page) kia whai i te mahi e ka whakahou ana i te mahi. He taea ai tēnei mahi i whakawhanake i ngā pito (a few minutes).

Ultimate Multisite v2.13.0 ka puta mai i te whakamahi o te tikanga domain internal automatically i roto i te wā he pito hou e whakahou ana i te host kua tika atu te whakaaro ahau ia mō pito domain per-site. Ko te host he pito domain primary o te whenua, he pito domain base shared checkout-form e whakahou ana i te field **Site URL**, ka whakawhanake i te tikanga mapped-domain automatic kia whakatika i te pito domain base shared mō every site e whai i ai.

Ka whakarongo i te **Stage** ahau, he ka whakawhanake i te status mai i **Checking DNS** ki **Ready** ko he tino tika ana katoa i te whakatau.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Ko i klik atu ki te domain name, ka taea e koe te whakahti i ngā whai maha i roto i ihi i. Kia whakawhanake mātou i tēnei mea:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Māramatanga:** He mea he whakatutai (stage) ko te wā o te domain. I roto i roto i te wā koe e pōwhiri i te domain, he tino pai ona i te wā e hoako ana i te **Checking DNS**. Ka whakamaoritia tēnei whakataunga mō ngā entry o DNS me te whakaae ana i te tika o āna. I tēnei wā, ka puta te domain ki te wā **Checking SSL**. Ka hiahia Ultimate Multisite kia whakačia akorua ko he SSL ahau au nei, ā, ka whakatutai i tō domain ki te wā **Ready** (Māori: Pākeha) me te **Ready (without SSL)**.

**Site:** He subdomain e whakahihia ana ki tēnei domain. Ka whakaatu te domain e whakatutai ko te mōhaka o tēnei site-ā.

**Active:** Kei te tino pai koe ki te whakamaoritia i tēnei option (toggle) he pēnei au, he pēnei ahau, kia whakatika akorua ko te domain.

**Is Primary Domain?:** He taea ai mō i ngā mea e whakapūmau ana i tēnei site, he tino pai ona i te whakamahi i tēnei option ki te whutaku akorua ko he primary domain ahau mō tēnei site-ā.

**Is Secure?:** Engari he tino pai ona i te whakamaoritia i tēnei option (toggle) he pēnei au, he pēnei ahau, kia whakatika manu atu ko he SSL certificate ahau me te ka puta ake te domain me te ka puta ake i te SSL certificate. He tino nui: engari he hiahia koe ki te whakatutai akorua ko he website e hiahia ana i te SSL certificate ahau, he pēnei au, he taea ai i a ia te give errors (whakamārama).

### Whakatutai ingoa domain mō user o subsite

He tino pai ona i ngā administrator o subsite kia whakatutai ingoa domain mō rā i tēnei dashboard o te subsite admin.

I muri i tēnei, he tino nui ona i te whakatika akorua ko e taea ai koe te whakahou (enable) tēnei option ki te whakataunga **Domain mapping**. He tino pai ona i te whakaahua i runga i te whakataungatanga o te screenshot.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

He taea ai mō koe ki te whakamaoritia he option (toggle) me te whakarite ana i tēnei option ki te wā **Plan** ahau, he option o te puta mai i **Ultimate Multisite > Products**.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

Ko he aha i ko ngā optionahi ei whakatika ana me te tino whaiaro (enabled) me te e taea te whakamahi ai nga user o te subsite ki te mapu ngā domain manawa (custom domain names), kia taea ai mō te user o te subsite te whakaatu i he metabox i runga i te puta mai o te **Account** page, ā, ko te ingoa o ia i te **Domains**.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

Ko te user e taea te whakatipu i te button **Add Domain**, ā, ka whakawhiti i he modal window (window o whakamārama) me ngā whakamārama mōna.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

I tēnei wā, ko te user e taea te whakatipu i **Next Step** ā, ka whakawhiti ki te whakamahi i te domain manawa. Ko koa he taea ai i a ia te whiri i ahau he te domain pūrākau (primary domain) ana au nei, ā, ahau i te whiri i ahau i te whiri ana au nei.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Ko te whakatipu i **Add Domain** ka pūrongo i te mahi o te whakamārama me te whaiaro i ngā mōhio DNS o te domain manawa.

### Mātauranga mō te Whakawhiti Domain (About Domain Syncing)

He whakaahua o te Whakawhiti Domain he heahi, ko e whai ake ana i te Ultimate Multisite ki te whaiaro i te ngā domain manawa ki te account hosting ahau hei domain add-on **mō te mahi o te mapping**.

Ka hua te Whakawhiti Domain automatically akorua ko ko te provider o koe he tino whakatika (integration) me te āhuatanga o te mapping domain o Ultimate Multisite. I tēnei wā, ko ngā provider hosting kei _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ me _Cpanel._

I tēnei wā, he taea ai i te Ultimate Multisite te whakatipu i te mahi DNS ahau o te provider ā-akoho (provider-side) mō ngā sites hou. Ko ko te mahi ahau e pakihi (background job) ka whakahoki ake ana akorua ko he tino whakatika ana ahau mō tēnei mahi, kia whakatū i te queue entries noa. Ka pai ai ngā DNS me SSL checks mō ngā domain manawa e kaha ki te haere i te whakataunga o te stage o te domain (domain-stage process) i te pūrākau.

Kua perlu ativa i te integration (whakawhanaungatanga) ko i te whakamahi ana i te Ultimate Multisite settings i te tab **Integration**.

![Integrations tab in Ultimate Multisite settings showing hosting providers](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_He whakamārama: Ko te mea nui, ko ahau e tino pai ana ki te whai whakaaro, he tino pai ana ki te whai whakaaro._ _Ko te mea nui, ko ahau e tino pai ana ki te whai whakaaro, he tino pai ana ki te whai whakaaro._ _He whakamārama: Ko te mea nui, ko ahau e tino pai ana ki te whai whakaaro, he tino pai ana ki te whai whakaaro._
