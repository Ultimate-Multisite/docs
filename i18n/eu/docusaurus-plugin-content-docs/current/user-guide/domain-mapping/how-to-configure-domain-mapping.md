---
title: |+
  Domain mapping-a konfiguratzeko

sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# Domain Mapaketa Konfiguratu (v2)

_**IMPORTANTE NOTA: Hauko testu hau Ultimate Multisite 2.x-ean referentzia egiten du.**_

Premium network bat oso potentziala duen funtuna da, client-ek gai-lehiak (top-level domain) bere web-datuak hartzeko aukera ematean. Hau da, zer pareki da: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) edo [_**joesbikeshop.com**_](http://joesbikeshop.com)? Orain Ultimate Multisite-ek hori funtuna ezarritzen du, trinetza plugin bat erebutera ez du behar.

## Domain mapaketa hau da?

Euskal irakurriari ondorioztatzen duen bezala, domain mapaketa da Ultimate Multisite-ek emateko funtuna, gai-lehiak (custom domain) eskatzen aurretik eta hori network-eko web-datuarekin parekia egitea, horrek gai-lehia hartuta.

### Domain mapaketa onartzeko gaitasuna Ultimate Multisite Networkan

Domain mapaketa funtzionatzeko, siznak parte dezake konfiguratzea. Barkatu, Ultimate Multisite-ek zorrotza duten ez-garrantzitsuagoa gaur egun, gai-lehiak (custom domain) eskatzeko beharrezko jarduerak automatico egiten du, gure irudien edo erantzunak.

Ultimate Multisite instalazioan, wizard-ek **sunrise.php**-a automatikoki kopiatu eta emateko datu-gunean instalatzen du. **Ez dago hori amaitzen aurretik ez da konponbidea jarraitzeko**.

<!-- Screenshot unavailable: Ultimate Multisite instalazio wizardarekin sunrise.php irudiak -->

Hau da, Ultimate Multisite instalazio wizard-ek siznak networka konfiguratzen duenean, gai-lehia mapatzea hemen aurkitu ez da.

Ez aldatu: Ultimate Multisitean domain mapaketa ez da obligazioa. WordPress Multisite-ren natiboa domain mapaketa funtzionari edo beste domain mapaketa soluzion bat erebutzeko aukera duzu.

Ultimate Multisite-aren domain mapinga deshabilitatzeko, beste domain maping solution berekin iraditzen nahi duzu, hori **Ultimate Multisite > Settings > Domain Mapping**-an deshabilitatuta da.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

Horren opszioaren hemenaldean, **Force Admin Redirect** opszioa ere begiritu da. Horrek kontrolatzen duzu zehazteko, klienteak bere admin dashboard-era erabiliko baizik, bere domain-a edo subdomain-era, edo batari-k gabe.

**Force redirect to mapped domain** (Mapatu domainan fortua rediritu) opszioa aipatzen duzu, klienteak bere custom domain-ekean beste admin dashboard-era erabiliko baizik.

**Force redirect to network domain** (Network domainan fortua rediritu) opszioa ezberdina egin du - klienteak subdomain-ekean beste dashboard-era erabiliko baizik, bere custom domain-ekean saiatzen jakinarazteko ere, baina hori dakar.

Eta **Allow access to the admin by both mapped domain domain and network domain** (Mapatu domain eta network domain batdu aksesan aukeratu) opszioa ematen du, klienteak subdomain eta custom domain gehiago erabiliko baizik bere admin dashboard-ekean.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

Custom domain bat mapatzeko bitartean, bi modua daiteke. Lehenak, network admin dashboard-era domain naizlearen (super admin) mapatzea da eta ikusteko, bigarrenak, account page-aren eskolde administratoraren (subsite admin) dashboard-a través.

Baina custom domain bat bere network-eko subsite bat mapatzea hasten duzian, domain naizlearen **DNS settings** (DNS aukerak) barne zuzenean konfiguratuta dagoela ziurtatu behar duzu.

###

### Domain DNS aukerak barne zuzenean konfiguratuta dagoela ziurtatu



Maping funtzi eta lan egin dezake, den domaina mapatzea planatu duzu behar da bere Network-ren IP adresa zuzenean apuntatu duen. Ez zure custom domainaren IP adrestia behar duzu - Ultimate Multisite instalatutako domainaren IP adrestia behar duzu. Ezin daitezke ezagutzeko IP adrestia eratzeko, gure eskatzen dituz: [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) (adibidez).

Domaina zuzenean mapatzea, DNS konfiguratziaraan **A RECORD** bat gehitu behar duzu ze IP adrestia apuntatu duen. DNS administrazioa domain registrarrak ezberdinetan handiagoa da, baina internetan tutorial asko dago eta hori ezagutzeko " _Creating A Record on XXXX_ " (XXXX-ekoa zure domain registrarra da, adibidez: " _Creating A Record on_ _GoDaddy_ ").

Ez jartzen duzu hori funtzionatzeko hasterako problema izan zen, **zure domain registrarren suportuarekin jarraitu** eta hori ez duzu hori parte batean laguntzeko.

Zure klientak bere domainak mapatzea uste duzu, horiek hori partea berehala egin behar dute. A Record ez daite ere ezartzen duen iragatik, hori partea bere registrarren suportu sistema zehala.

### Custom domain name-a Super Admin gisa mapatzea

Zure networkan super admin gisa logatuta dagoenean, **Ultimate Multisite > Domains** menuaren ondoren custom domainak lehiak eta administrazio dezake luetan.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Hau daura lapuriko daurean, üstiaren **Add Domain** (Domaine Zaharlik) botoian klik egin dezakezu eta horrek modal bukletu bat iradokitzi du, horretan **custom domain name** (solusiak domain-naiz), custom domain-naiz aplikatzea nahi duzu duen **subsite** (subsitua) eta horrek **primary domain name** (primaria domain-naiz) gisa emateko nahi duzu edo ez duzu (ez zure subsite batrekin domain-naizak mapatu dezakezu).

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

Informazio guztia ematen ondoren, lehen daurrian **Add Existing Domain** (Eskurtu Domaine Zaharlik) botoian klik egin dezakezu.

Horrek custom domain-naizaren DNS informazioa binarri eta hartzeko prozesua hasten du. Prozesuan jarraitzen dituzteko daurean lehen daurrian log bat ere erabiliko duzu. Horrek gutxiago minutu bat egin dezake.

Ultimate Multisite v2.13.0-ek, host-a per-site domain gisa tratatzea diren lekuan, leku batean leku bat lekuak dira (Site URL) edo **Site URL** lekuan konfiguratutako shared checkout-form base domain bat dela, automatikoki internal domain record bat ere ematen du. Host-a network-aren primari domain dela, edo Site URL lekuan konfiguratutako shared checkout-form base domain bat dela, automatikoki mapatutako domain recorda ez daiteko, horrek share domainak erabiltzen duen guztietan erabilera jarraitzen duela.

**Stage** (Fasea) edo statusak **Checking DNS** (DNS Binarri) gogintzen da **Ready** (Preparatu) iridian bat dela, guztia ondorioz gutxiago minutu bat egin behar duzu.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Domain-naizaren klik egin ondoren, horren beldurako opsioak ikusi ez duzu. Zer daude, lehen daurrian ezagutuz:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Fasea:** Hau daura da dago domainak. Lehen aldiz domain bat gehitu dutenean, gogoin da **DNS Kontrolatzeko** faza. Prozesuak DNS entry-ak ikusten du eta zuzena jakinarazten du. Horrekik gero, domainak **SSL Kontrolatzeko** faza laitzen da. Ultimate Multisitea ikusten du lehen domaineko SSL (SSL) dago nola edo ez dago, eta domainak **Preparatua** edo **Preparatua (ez SSL-ditu)** bezala kategoria egiten du.

**Site:** Domainarekin lotuta dagoen subdomaina. Domainak mapatu beharko du honela sitearen kontentua ikusten da.

**Aktibo (Active):** Domainak aktiboa edo deaktiboa egiteko, lehen aurrera egin dezakezu hori onartu edo deshabilitatu.

**Domaina Nagusia (Is Primary Domain?):** Kontratueriek site batekin domain bat edo gehiago mapatuta dutelako. Horrek erabiltu duzu honetan jakinarazteko, hau site-bere domain nagusia da non erabiltzen duzu.

**Segura da (Is Secure?):** Ultimate Multisitea SSL sertifikatua dago nola edo ez dago nola ikusten du domainak aktiboa egitean aurretik, baina manuel olarak aukeratu dezakezu domainak SSL-ditu edo ez ditu eta loadatzeko. Ezberdintasuna da, websteina SSL sertifikatua ez dutenean eta SSL-ditu loadatzeko eskatzen duzu, errorrak emateko nahia izan daiteke.

### Subsite erabiltzailearen bitartean domaina nagusia (custom domain name) mapatzea

Subsite administratorrek ere subsite admin dashboard-etik custom domainak mapatuta ezartzen dituz.

Lehenik, **Domain mapping** aukera onartu behar duzu hori Domain mapping heniaren ondorioz. Lehenen ikuspenan ikusi:

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Mendu edo konfiguratuta ere baduzu, hori **Ultimate Multisite > Products**-eko Plan maila edo produkzio aukeretan onartu dezakezu.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

Gaur duz hori guztiak ondarekin eta subsite erabiltzaileari ez daingoa domainak osoa (custom domain names) mapatu, horrek aktiboa jakin dituzenean, subsite erabiltzailearen Account lapuriko ondorekin **Domains** metabox bat ikusten du.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

Erabiltzaileak **Add Domain** botoia klik egin dezake eta horrek zehaztasunezko modal bukleta bat iradokituz aurkituko du.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

Gero, erabiltzaileak **Next Step** (Irudi lehen) klik egin dezake eta domain osoa mapatzeko prozesua jarraitu dezake. Hau ere zer izango da primario domaina (primary domain) edo ez izango da, hori ere aukeratu dezake.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

**Add Domain** (Domaina gehiago) klik egin beharko du domain osoaren informazioa bideratzea eta jartzen duen prozesua hasi nahi du.

### Domain Syncing (Domainak sinxetzea)

Domain Syncing da prozesua hori da dagoen Ultimate Multisite-ek domain osoa hosting kontuan gehiago domain bat gisa (add-on domain) ezartzen du **domain mapping** (domainak mapatzea) funtzionatzeko.

Hosting proviziorrek Ultimate Multisite-ko domain mapping funtzioarekin integrazioa dutenean, Domain Syncing automatically geratzen da. Aktualena, hauek hosting proviziorrak dira _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways_ eta _Cpanel._

Hosting proviziorren integrazioa aktibo dagoenean, Ultimate Multisite-ek lehiak domainak (newly created sites) beste task bat da DNS edo subdomain sortzeko prozesua emateko. Task hori ez duten integrazioak esleitzen duen ikustera ez duenean, background joba (taska bakarra) desbatzen da eta no-op queue entries ez dute aurkitu nahi du. Mapatutako domainak dira normal domain-stage prozesuaren bidez DNS eta SSL kontrolak jarraitzen ditu.

Ultimate Multisite hengaiaren **Integration** (Integrazioa) taban, Ultimate Multisite sailkioetan aktibatu behar duzu.

![Ultimate Multisite sailkioetan Integrazioak tab-a erakusten duen eskuragarri irudi](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Integrazioaren sailkioetan hosting provider konfiguratzeko linkak irudi -->

_Ez zure hosting providera aipatutako hori ez dela, **zure domain naiz manualean sinkronizatu edo domainaren namena gehiago ematu behar duzu**._
