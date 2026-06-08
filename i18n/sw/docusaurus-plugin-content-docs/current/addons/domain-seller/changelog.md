---
title: Rekodi ya Mabadiliko ya Muuzaji wa Domain
sidebar_position: 99
_i18n_hash: bc3ab4e3f0076e80e8c38ed313f4430d
---
# Kumbukumbu za Mabadiliko za Muuzaji wa Nyanja (Domain Seller)

Toleo 1.1.0 - Iliachishwa tarehe 2026-05-08
- Jipya: Kuweka rekodi za DNS (add_dns_record) kimeanzishwa kwa registrars wa ResellerClub, Enom, na OpenSRS
- Marekebisho: Kifuatilia (parser) cha rekodi za DNS za kawaida sasa kinatoa ushirikiano na tokens za {DOMAIN} na {SITE_URL}
- Marekebisho: Slugs za sehemu ya kuchagua nyanja wakati wa malipo zimepangwa (namespaced) kuzuia migogoro na site_url

Toleo 1.0.8 - Iliachishwa tarehe 2026-05-07
- Marekebisho: Bei za nyanja za ResellerClub sasa zinachukua bei halisi za gharama kutoka kwa API endpoint sahihi

Toleo 1.0.7 - Iliachishwa tarehe 2026-05-06
* Marekebisho: ResellerClub test_connection inatuma thamani ya thamani ya tlds inayohitajika (#224)

Toleo 1.0.6 - Iliachishwa tarehe 2026-05-05
* Marekebisho: Usajili wa nyanja za ResellerClub sasa unafanya kazi vizuri kwa kuboresha usimamizi wa majibu ya API na upitishaji wa provider unaotokana na registry.
* Marekebisho: Kuboresha uzoefu wa mtumiaji (UX) kwenye ukurasa wa admin wa Register Domain.
* Imetolewa: Uunganishaji wa registrar wa CyberPanel

Toleo 1.0.5 - Iliachishwa tarehe 2026-04-02
* Jipya: Uunganishaji wa registrar wa GoDaddy kwa ajili ya usajili na usimamizi wa nyanja.
* Jipya: Uunganishaji wa registrar wa NameSilo.
* Jipya: Uunganishaji wa registrar wa ResellerClub.
* Jipya: Uhakiki wa kiotomatiki wa nyanja inayotumwa na SES wakati wa kununua na kuifanya iendane (mapping).
* Marekebisho: Thamani za mara kwa mara (constants) za plugin ya Guard dhidi ya kufafanuliwa upya katika mazingira ya majaribio.
* Marekebisho: MySQL inagawanya maneno kwa usahihi katika install-wp-tests.sh.

Toleo 1.0.4 - Iliachishwa tarehe 2026-03-14
* **Marekebisho:** Baadhi ya mali za CSS zilikuwa zimepotea.
* **Marekebisho:** Hitilafu inayohusiana na tlds zisizopatikana.

Toleo 1.0.3 - Iliachishwa tarehe 2026-03-09
* **Marekebisho:** Hitilafu za mali za Vue reactive (domain_option, selected_domain, domain_provider) wanapotumia muundo wa usajili wa zamani na shortcode ya malipo.
* **Marekebisho:** Sehemu ya kuingiza subdomain haikuendana na ukubwa wa maandishi kwenye sehemu ya kuchagua nyanja wakati wa malipo.
* **Marekebisho:** Ificha sehemu ya "Your URL will be" wakati sehemu ya kuchagua nyanja ipo.

Toleo 1.0.2 - Iliachishwa tarehe 2026-03-01
* **Kuboresha:** Imeondolewa mipangilio ya global markup kutoka kwenye ukurasa wa mipangilio — bei sasa ni kwa bidhaa moja tu.
* **Kuboresha:** Kuongeza kiungo cha "Manage Domain Products" kwenye ukurasa wa mipangilio kwa urambazaji wa haraka.
* **Kuboresha:** Maelezo ya sehemu na tooltips za mipangilio ya bidhaa za nyanja (catch-all vs TLD-specific, aina za markup, bei za kuanzia).
* **Kuboresha:** Maelezo bora katika ukurasa mzima wa mipangilio (tafuta TLDs, upya, DNS, arifa).

Toleo 1.0.1 - Iliachishwa tarehe 2026-02-27

* **Jipya:** Zana ya kuingiza TLD kwa usimamizi wa bei kwa wingi.
* **Jipya:** Usaidizi wa bei za kuanzia kwa bidhaa za nyanja.
* **Jipya:** Seti ya majaribio ya E2E na Cypress.
* **Jipya:** Muundo wa barua pepe kwa arifa za mzunguko wa maisha ya nyanja.
* **Jipya:** Sehemu za anwani ya msajili (Registrant address fields) kwenye modal ya usajili wa nyanja ya admin, zikiwa zimejaza awali kutoka kwenye mipangilio.
* **Jipya:** Kiolesura cha usimamizi wa DNS cha mteja na usaidizi wa kuongeza, kuhariri, na kufuta rekodi.
* **Jipya:** Chaguo la malipo la "Bring your own domain" na uifanyaji iendano wa kiotomatiki wa nyanja.
* **Jipya:** Kuunda kiotomatiki cha URL ya tovuti kutoka kwa jina la nyanja wakati wa malipo.
* **Jipya:** Namba ya nameserver na usanidi wa rekodi za DNS za kawaida kwenye mipangilio.
* **Jipya:** Taarifa za usajili wa nyanja na usimamizi wa DNS kwenye ukurasa mkuu wa kuhariri nyanja.
* **Jipya:** Setup wizard inaunda kiotomatiki bidhaa ya nyanja ya kawaida na mipangilio ya msingi.
* **Jipya:** Muunganisho wa TLD wa kila siku kiotomatiki kupitia cron katika providers zote zilizowekwa.
* **Jipya:** Ulinzi wa faragha ya WHOIS na usanidi kwa kila bidhaa (daima wazi, chaguo la mteja, au imezimishwa).
* **Jipya:** Sanduku la kuchagua WHOIS privacy na kuonyesha bei na usaidizi wa dark mode.
* **Jipya:** Ukurasa wa admin wa Register Domain kwa ajili ya usajili wa nyanja kwa mikono.
* **Jipya:** Sasisho la plugin kiotomatiki kupitia Ultimate Multisite update server.
* **Jipya:** Tab ya filter ya aina ya bidhaa ya nyanja kwenye jedwali la orodha ya bidhaa na mtindo wa badge wa rangi ya zambarau.
* **Jipya:** Sehemu za anwani ya msajili (jina, anwani, mji, jimbo, nambari ya posta, nchi, simu) kwenye fomu ya malipo ya nyanja.
* **Jipya:** Uhakiki wa sehemu za msajili kabla ya kuita API ya registrar na ujumbe wa makosa wazi.
* **Jipya:** Michango ya log ya provider maalum kwa matukio ya usajili wa nyanja (k.m. domain-seller-namecheap.log).
* **Jipya:** Sehemu za anwani ya msajili kwenye fomu kuu ya usajili/malipo (zinaonekana wakati wa usajili wa nyanja).
* **Kuboresha:** Sehemu ya kuchagua nyanja ya Domain Search ya malipo imebadilishwa na sehemu moja ya Kuchagua Nyanja inayounga mkono tabs za subdomain, register, na nyanja iliyopo.
* **Kuboresha:** Mipangilio ya bidhaa za nyanja inatokea ndani (render inline) kwenye ukurasa wa kuhariri bidhaa kupitia mfumo wa widget wa msingi.
* **Kuboresha:** Taarifa za nyanja za mteja zimeunganishwa na widget ya nyanja ya msingi badala ya metabox inayojitenga.
* **Kuboresha:** Wizard ya kuingiza TLD imefupishwa kuwa muunganisho wa kubofya mara moja kutoka kwa providers zote.
* **Kuboresha:** Upataji wa nyanja ya Namecheap unatumia wito wa API wa kundi kwa utafutaji wa haraka.
* **Kuboresha:** API ya bei ya Namecheap inatumia thamani sahihi na kuchakata majibu.
* **Kuboresha:** Uhifadhi wa TLD uliotengenezwa katikati katika chaguo moja la mtandao.
* **Kuboresha:** Kuandika shughuli za nyanja kwa ajili ya mabadiliko ya DNS, uhamisho, na utekelezaji wa usanidi.
* **Kuboresha:** Muunganisho kamili wa TLD kwa OpenSRS kwa kutumia orodha kuu ya IANA na uhakiki wa kundi.
* **Kuboresha:** Muunganisho kamili wa TLD kwa Namecheap kwa maombi ya API yanayopangwa (paginated).
* **Kuboresha:** Imebadilishwa kwa classes za provider za zamani na mfumo wa Integration Registry.
* **Kuboresha:** Paneli ya mipangilio na usanidi wa DNS na uhamisho.
* **Kuboresha:** Namba za simu zimefanyiwa muundo kiotomatiki kuwa +CC.NNN ya format ya registrar.
* **Kuboresha:** Uhakiki wa sehemu ya simu huondoa herufi za muundo kabla ya kuwasilishwa.
* **Kuboresha:** Hitaji la toleo limeongezwa hadi Ultimate Multisite 2.4.12 na arifa wazi zaidi.
* **Kuboresha:** Mzunguko wa CI unatumia malipo sahihi kwa plugin ya ziada na ya msingi.
* **Kuboresha:** prepare_registrant_info() inasoma kutoka kwa meta ya mtumiaji iliyohifadhiwa wakati wa malipo na kuangalia anwani ya malipo kama mbadala.
* **Kurekebisha:** AJAX ya utafutaji wa nyanja inashindwa kwa watumiaji ambao hawajeingia wakati wa malipo.
* **Kurekebisha:** AJAX ya bei ya nyanja inashindwa kwa watumiaji ambao hawajeingia wakati wa malipo.
* **Kurekebisha:** Hitilafu ya kufafanua upya ya class ya Spyc inapotekeleza amri za WP-CLI.
* **Kurekebisha:** Timeout ya API ya sandbox ya Namecheap ni fupi sana.
* **Kurekebisha:** maandishi ya kitufe cha Domain Search Select hayoonekani kwenye background ya kijani.
* **Kurekebisha:** Usajili wa nyanja unashindwa na hitilafu ya "RegistrantFirstName is Missing" kutokana na kutokuwepo kwa taarifa za mawasiliano.
* **Kurekebisha:** Rekodi ya nyanja imeundwa na blog_id=0 wakati tovuti haikuwepo bado wakati wa malipo.
* **Kurekebisha:** Mipangilio ya TLD za kawaida inarejeshwa kama string badala ya array iliyosomwa.
* **Imetolewa:** Ukurasa wa admin wa Usimamizi wa Nyanja uliotenganishwa — sasa unashughulikiwa kupitia kurasa za nyanja za msingi.

Toleo 1.0.0 - Iliachishwa tarehe 2025-09-28

**Kuandika upya kwa Kiwango Kikuu kwa Ultimate Multisite v2**

* **Jipya:** Kuandikwa upya kabisa kwa usanifu wa PHP wa kisasa 7.4+
* **Jipya:** Uunganishaji laini na mfumo wa malipo wa Ultimate Multisite v2
* **Jipya:** Usimamizi wa bidhaa za nyanja na chaguo mbalimbali za bei.
* **Jipya:** Usanifu wa usaidizi wa providers nyingi za nyanja.
* **Jipya:** Ufungaji upya na usaidizi wa usajili.
* **Jipya:** Kiolesura cha usimamizi wa nyanja za mteja.
* **Jipya:** Ufuatiliaji na log za nyanja za admin.
* **Jipya:** Usaidizi wa kupona (Coupon) kwa bidhaa za nyanja.
* **Jipya:** Usimamizi wa mipangilio inayofaa kwa kina.
* **Jipya:** Msingi wa msimbo unaoweza kupanuzwa na rafiki kwa developer.
* **Kuboresha:** Provider ya OpenSRS iliyosasishwa na usaidizi kamili wa vipengele.
* **Kuboresha:** UI ya kisasa inayolingana na Ultimate Multisite v2.
* **Kurekebisha:** Kila msimbo wa v1 uliopitwa umesasishwa kwa viwango vya v2.
* **Imetolewa:** Upatanisho wa v1 wa zamani (mabadiliko yanayovunja).

### Toleo za Zamani (v1 Legacy)

### Toleo 0.0.3 - 20/08/2019

* Marekebisho: Kutokuendana na Groundhogg CRM
* Kumbukumbu: Hili lilikuwa toleo la mwisho linalolingana na v1

### Toleo 0.0.2 - 07/12/2018

* Marekebisho: Sehemu ya License Key imeondolewa.
* Marekebisho: Tabs za mpango zilikuwa zimepotea wakati plugin ya kipengele ilipo hai.
* Kuboresha: Kuongeza kitufe cha kupita (skip button) kwenye sehemu ya usajili.

### Toleo 0.0.1 - Toleo la Awali

* Uunganishaji wa msingi wa OpenSRS kwa WP Ultimo v1.
* Utafutaji na usajili rahisi wa nyanja.
* Ruhusa za nyanja kulingana na mpango.
