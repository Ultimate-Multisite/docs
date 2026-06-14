---
title: Kea leboha ho hlalosa ho fana ka domain mapping
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# Kea le Fakafo Fa'aong (v2)

_**Tsoalo ea bohlokoa: Le lipoti le leng le fetoha Ultimate Multisite v2.x.**_

Hoona sebohloko sa ho ba le mofuta o hlophisang oa network ke ho ba le bonako ba leba moithuti oa hau ho ba le bone domain e le teng le site ea hau. Ho na le bohloko, kae li le leboho? [_**joesbikeshop.yournetwork.com**_ le [_**joesbikeshop.com**_? Ke ho feta hore Ultimate Multisite e le mofuta o ba le bone, ho fana ka tsela ena, ho na le bonako ea ho sebelisa plugins ea lina le lina.

## Ke eng ke domain mapping?

Ka leetsoalo la sebope, domain mapping ke bohloko ba Ultimate Multisite ho ba le bonako ba ho robala ho fetoha ho tšepo ea domain e le fetang le site ea hau sa le teng ka domain e le fetang.

### Ke eng ho fana ka domain mapping ka Network ea hau ea Ultimate Multisite

Domain mapping e hloka setsoetsi sebope ho ba le bonako. Ho na le bohloko, Ultimate Multisite e ba le mofuta o ba le bone oa ho ba le tsela ena ea hau ho ba le leba moithuti ha u ka ba le leba ka tsela ena.

Ka masa ea Ultimate Multisite, sebope sa (wizard) se tla kopora le ho ba le leba **sunrise.php** ka folder e fetang. **Sebope sa se tla u tloha ha o ba le leba.**

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Ena e bolela hore ha u ba le leba Ultimate Multisite, u ka uqala ho ba le bonako ea domain e fetang ka tsela ena.

A re le hore domain mapping ka Ultimate Multisite ha e le sebope. O na le bonako oa ho sebelisa bohloko ba WordPress Multisite native domain mapping kapa ntho e le domain mapping e le teng.

Ho na le fa'aopoaga e fa'aopoaga Ultimate Multisite domain mapping e fa'aopoaga o le fa'aopoaga e fa'aopoaga o se fa'aopoaga e fa'aopoaga. E mafai ona fa'aopoaga lenei fa'aopoaga i le a fa'aopoaga i **Ultimate Multisite > Settings > Domain Mapping**.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

I le a fa'aopoaga e fa'aopoaga lenei o le fa'aopoaga, e mafai ona fesoasoani i le o o le fa'aopoaga **Force Admin Redirect**. O le fa'aopoaga lea e mafai ona fa'aopoaga lava o se fa'aopoaga e fa'aopoaga o se fa'aopoaga e fa'aopoaga, e fa'aopoaga i le a fa'aopoaga i le custom domain ma subdomain, au e fa'aopoaga i le one fa'aopoaga.

O le fa'aopoaga lea e mafai ona fesoasoani i le o o se fa'aopoaga e fa'aopoaga:

- **Force redirect to mapped domain**: O le a fa'aopoaga, o le a fa'aopoaga lava o se fa'aopoaga e fa'aopoaga i le custom domains.
- **Force redirect to network domain**: O le a fa'aopoaga, o le a fa'aopoaga lava o se fa'aopoaga e fa'aopoaga i le subdomain, ae o le a fa'aopoaga i le custom domains.
- **Allow access to the admin by both mapped domain domain and network domain**: O le a fa'aopoaga, o le a mafai ona fa'aopoaga lava o se fa'aopoaga e fa'aopoaga i le subdomain ma le custom domain.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

E tatau ona fa'aopoaga se custom domain i luga o se subsite. O le fa'aopoaga ua e tatau ona fa'aopoaga:

1. Fa'aopoaga le domain name lea o le network admin dashboard e fa'aopoaga i le one super admin.
2. Fa'aopoaga i le a fa'aopoaga i le subsite admin dashboard i le account page.

Ae afai i lea, i luga o le fa'aopoaga e tatau ona fa'aopoaga se custom domain i le subsite i le network, e mafai ona fesoasoani i le fa'aopoaga o se DNS settings o le domain name.

### Fa'aopoaga lava o se DNS settings o le domain name

Ho ba ka go ba le fa e a tsoalo (mapping) a la'a, o na le fa a reba ea domain o tla fana'a (pointing) ho IP address ea lōla la hau. Re bolela hore u hloka IP address ea lōla la hau - IP address ea domain se where Ultimate Multisite e tsoalo - e **lang** IP address ea domain o batlang ho reba. Ho le tla ba le ntho e fapaneng ka ho hlalosa (management) DNS ho a reba, empa ho na le tutorials ba le sana ka lina le le sana ho a reba ha u hlalose " _Creating A Record on XXXX_ ", se where XXXX ke le fa o reba domain ea hau (o le fa: " _Creating A Record on_ _GoDaddy_ ").

Ha u bona hore u le le matla ho ba ka go ba le ntho e fapaneng, **u hloka bohlokoa (contact) bohlokoa ba lōla la hau** le ba tla u thusa le tsoalo ena.

Ha u batla ho ba le ka ho ba le fa ba baithuti ba hau ba reba domain ea bona, ba tla ba le ba baithuti ba bona ba tla ba le ba leba nako ena. Ba fana'a le bohlokoa ba bona ba la leba A Record ha ba le ba leba.

### Ho reba domain e fetang ho Super Admin

Ha u le le baithuti ba super admin ea hau ka lōla, u ka ba le ka go ba leba le ho hlalosa domain e fetang ho custom ka ho laola **Ultimate Multisite > Domains**.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Kapa le tsela, ka u le ka fana ka u le **Add Domain** button e lehle sa lehle lehle a matla, ha o tla fana modal window se se tla go na le **custom domain name**, **the subsite** o batlang go fana ka custom domain name, le go ba le fa o batlang go feta ho setse se lefa se le **primary domain** (re tlhokomelo, o ka fana ho rata **domain names mo subsite e le le le le le**.

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

Ha o setse se le fa u fetolele litlhahlo hloboho, o ka fana ho feta **Add Existing Domain** button a lehle sa matla a lefa.

O tla qala proseso ea ho tlhokomela le ho ba le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le

**Stage:** Le taba e le fa'aopo o le domain (domain). O le fa'aopo i le vave, o le fa'aopo o le **Checking DNS** stage a o le domain. O le fa'aopo o le fa'aopo o le DNS entries ma o le fa'aopo o ia o iai e fa'aopo. Ona, o le domain o le fa'aopo i le **Checking SSL** stage. Ultimate Multisite o le fa'aopo a fa'aopo ai lava o le domain a fa'aopo a se SSL pe a o le fa'aopo o le domain o le fa'aopo i le **Ready** o le **Ready (without SSL)**.

**Site:** O le subdomain o le fa'aopo a fa'aopo ma o le domain. O le mapped domain o le fa'aopo a fa'aopo ai le fa'aopo o se site fa'aopo.

**Active:** E mafai i ou fa'aopo ona fa'aopo pe a fa'aopo lava o le domain, au o le fa'aopo.

**Is Primary Domain?:** O le fa'aopo o iai e mafai ai iai se domain fa'aopo tele mo o se site fa'aopo. Fa'aopo i lona ona fa'aopo pe a fa'aopo lava o le domain o se site fa'aopo.

**Is Secure?:** E tusa lava o le Ultimate Multisite a fa'aopo ai lava o le SSL certificate pe a o le fa'aopo o le domain, e mafai i ou ona fa'aopo manuia ma au o le SSL certificate pe a o le domain. Fa'aopo i se fa'aopo: o le website e le a fa'aopo SSL certificate a se fa'aopo ma o le fa'aopo o iai e fa'aopo lava o le SSL, e mafai ona fa'aopo ai ou errors.

### Mapping custom domain name as Subsite user

O le administrator o subsite e mafai ona fa'aopo ai i le custom domain names o la subsite admin dashboard.

Ua se fa'aopo lava e te fa'aopo ona fa'aopo lona pe a ia fa'aopo i le **Domain mapping** settings. Fa'aopo i le screenshot i le tasi.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

E mafai ona fa'aopo lava o se option pe a ou ona fa'aopo ma ona fa'aopo i le **Plan** level o le product options i **Ultimate Multisite > Products**.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

Lefatsa le tsela la fana'a kaofi. E leng fa ka sefalo sa subsite user a fetse ka e fetse le mapang custom domain names, ka sefalo sa subsite user o tla bona metabox ea **Domains** ho teng ka pele ho lapa la **Account**.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

Mona, user a ka fetse le **Add Domain** button, le tla fana ka modal window e fetang le litšepo tse dintsi.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

Mme, user a ka fetse le **Next Step** le ho tsamaea ho fetse le fetse custom domain name. O ka ba le tsela ea ho utloha kae ke primary domain kapa ho na le.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Ka fetola **Add Domain** ka tla haholo ho fetola le ho fetola litšepo tsa DNS tsa custom domain.

### Ka fa Syncing sa Domain

Domain Syncing ke sefalo se fetang se leng Ultimate Multisite se fetse le custom domain name ea hau ka hosting account ea hau e le add-on domain **ho ka ba le mapang a fetang**.

Domain syncing e fetse le ho fetse ka hloko ha host provider o na le integration le feature ea domain mapping ea Ultimate Multisite. Ka nako, leba tsa host providers tse di fetang ke _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ le _Cpanel._

Ka nako ea integration ea host-provider e fetang, Ultimate Multisite e ka fetse le ho enya (enqueue) task ea DNS kapa subdomain creation ea provider ho sites tse neng di fetse. Ka fa ho na le task e ntse e le teng, job ea background e tla tsamaea ho ba le no-op queue entries. Checks tsa DNS le SSL ho domain mapswe ha di fetse ka sefalo sa normal domain-stage process.

O tla hloka ho fana ka tšepo ena ka setso sa Ultimate Multisite ka sefaputso **Integration**.

![Integrations tab in Ultimate Multisite settings showing hosting providers](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_A re bolela hore ha ho fihla sefaputso sa hau se o batlang ka ho fana ka tšepo ena, **o tla hloka ho fana ka tšepo (sync) kapa ho ntlha le domain name** ka konto ea hau ea hosting._
