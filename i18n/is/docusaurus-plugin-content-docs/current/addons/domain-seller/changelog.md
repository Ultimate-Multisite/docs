---
title: Breytingaskrá lénasala
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Breytingaskrá Domain Seller

Útgáfa 1.3.0 - Gefin út 2026-06-02
- Nýtt: Bætti við viðvörun fyrir netkerfisstjóra þegar HostAfrica reseller-inneign verður of lág
- Nýtt: Bætti við sjálfvirkri vörpun nýskráðra léna á netkerfissíðuna
- Lagfæring: Beitti kröfum fyrir skráningaraðilasvæði aðeins þegar nýtt lén er skráð
- Lagfæring: Gerði tilkynningar um vöktunarstöðu inneignar lokanlegar
- Lagfæring: Tryggði að WooCommerce greiðsluupplýsingar skráningaraðila varðveitist
- Lagfæring: Framfylgdi kröfum um tengiliðaupplýsingar skráningaraðila við skráningu
- Lagfæring: Kom í veg fyrir að vörur fyrir lénaskráningu væru búnar til með 0% álagningu
- Lagfæring: Varðveitti lénaval og verðlagningu í gegnum ferli greiðslulotu
- Lagfæring: Bætti birtingu gjaldmiðils fyrir HostAfrica lénaverð
- Lagfæring: Bætti hegðun form-action í greiðsluferli til að koma í veg fyrir misræmi í WP-core query-var
- Bætt: Tengdi skjölun um uppsetningu HostAfrica reseller í uppsetningarleiðbeiningum

Útgáfa 1.2.0 - Gefin út 2026-05-25
- Nýtt: Bætti HostAfrica við sem samþættingu fyrir lénasölu með stuðningi við greiðsluferli, uppsetningarálf, leit, TLD/verðlagningu, skráningu, endurnýjun, flutning, nameserver, DNS, EPP code, registrar lock og ID vernd
- Nýtt: Bætti Openprovider við sem samþættingu fyrir lénasölu með stuðningi við reseller-verðlagningu, skráningu, endurnýjun, flutning, nameserver, DNS, EPP code, registrar lock, WHOIS privacy og TLD sync
- Nýtt: Bætti Hostinger við sem samþættingu fyrir lénasölu með sameiginlega Hostinger API token frá kjarnasamþættingunni fyrir aðgengisathuganir, skráningu, uppfærslur á nameserver, registrar lock og WHOIS privacy
- Bætt: Bætti við docblocks fyrir aðgerðir og síur í líftíma léna til leiðbeiningar fyrir samþættingu þróunaraðila
- Bætt: Uppfærði samhæfnilýsigögn viðbótar í WordPress 7.0 í readme viðbótarinnar
- Bætt: Uppfærði skipulagssniðmát sem notuð eru fyrir samhæfingu næstu útgáfu

Útgáfa 1.1.0 - Gefin út 2026-05-08
- Nýtt: Stofnun DNS færslna (add_dns_record) innleidd fyrir ResellerClub, Enom og OpenSRS skráningaraðila
- Lagfæring: Sjálfgefinn DNS Records þáttari þolir nú {DOMAIN} og {SITE_URL} tákn
- Lagfæring: Sluggar fyrir lénavalssvæði í greiðsluferli settir í nafnrými til að koma í veg fyrir árekstur við site_url

Útgáfa 1.0.8 - Gefin út 2026-05-07
- Lagfæring: ResellerClub lénaverð sækir nú lifandi kostnaðarverð frá réttum API endpoint

Útgáfa 1.0.7 - Gefin út 2026-05-06
* Lagfæring: ResellerClub test_connection sendir nauðsynlega tlds breytu (#224)

Útgáfa 1.0.6 - Gefin út 2026-05-05
* Lagfæring: ResellerClub lénaskráning virkar nú rétt með bættri meðhöndlun API svars og registry-stýrðri leiðingu þjónustuveitanda
* Lagfæring: UX endurbætur á admin-síðu fyrir Register Domain
* Fjarlægt: CyberPanel registrar-samþætting

Útgáfa 1.0.5 - Gefin út 2026-04-02
* Nýtt: GoDaddy registrar-samþætting fyrir lénaskráningu og stjórnun
* Nýtt: NameSilo registrar-samþætting
* Nýtt: ResellerClub registrar-samþætting
* Nýtt: Sjálfvirk staðfesting á SES sendingarléni við kaup og vörpun léns
* Lagfæring: Varði plugin-fasta gegn endurskilgreiningu í prófunarumhverfi
* Lagfæring: MySQL flögg orðskiptast rétt í install-wp-tests.sh

Útgáfa 1.0.4 - Gefin út 2026-03-14
* **Lagfæring:** Nokkrar css eignir vantaði
* **Lagfæring:** Villa tengd óaðgengilegum tlds

Útgáfa 1.0.3 - Gefin út 2026-03-09
* **Lagfæring:** Vue reactive property villur (domain_option, selected_domain, domain_provider) þegar eldra skráningarsniðmát er notað með checkout shortcode
* **Lagfæring:** Röng jöfnun inntakssvæðis undirléns og of stór texti í lénavalssvæði greiðsluferlis
* **Lagfæring:** Fela forskoðunarblokkina „Vefslóðin þín verður“ þegar lénavalssvæðið er til staðar

Útgáfa 1.0.2 - Gefin út 2026-03-01
* **Bætt:** Fjarlægði alþjóðlegar álagningarstillingar af stillingasíðu — verðlagning er nú eingöngu fyrir hverja vöru
* **Bætt:** Bætti við tenglinum „Stjórna lénavörum“ á stillingasíðu fyrir fljótlega leiðsögn
* **Bætt:** Skýrari lýsingar á svæðum og verkfæraábendingar fyrir stillingar lénavöru (catch-all vs TLD-sértækt, álagningargerðir, kynningarverð)
* **Bætt:** Betri lýsingar um alla stillingasíðuna (leita í TLDs, endurnýjanir, DNS, tilkynningar)

Útgáfa 1.0.1 - Gefin út 2026-02-27

* **Nýtt:** TLD innflutningsverkfæri fyrir magnbreytingar á verðstjórnun
* **Nýtt:** Stuðningur við kynningarverð fyrir lénavörur
* **Nýtt:** E2E prófunarsvíta með Cypress
* **Nýtt:** Tölvupóstsniðmát fyrir tilkynningar um lífsferil léna
* **Nýtt:** Heimilisfangsreitir skráningaraðila í stjórnendamodal fyrir lénaskráningu, forútfylltir úr stillingum
* **Nýtt:** Viðmót fyrir DNS-stjórnun viðskiptavina með stuðningi við að bæta við, breyta og eyða færslum
* **Nýtt:** "Komdu með þitt eigið lén" valkostur í checkout með sjálfvirkri lénavörpun
* **Nýtt:** Sjálfvirk myndun á site URL úr lénaheiti í checkout
* **Nýtt:** Sjálfgefin uppsetning nameserver og DNS-færslna í stillingum
* **Nýtt:** Lénaskráningarupplýsingar og DNS-stjórnun á kjarnabreytingarsíðu léns
* **Nýtt:** Uppsetningarleiðarvísir býr sjálfkrafa til sjálfgefna lénavöru með skynsamlegum sjálfgefnum gildum
* **Nýtt:** Dagleg sjálfvirk TLD samstilling með cron yfir alla stillta þjónustuveitendur
* **Nýtt:** WHOIS persónuvernd með stillingum fyrir hverja vöru (alltaf kveikt, val viðskiptavinar eða óvirkt)
* **Nýtt:** WHOIS persónuverndarvalreitur í checkout með verðbirtingu og stuðningi við dökkan ham
* **Nýtt:** Stjórnendasíða fyrir skráningu léns fyrir handvirka lénaskráningu
* **Nýtt:** Sjálfvirkar plugin uppfærslur í gegnum Ultimate Multisite uppfærsluþjón
* **Nýtt:** Síunarflipi fyrir tegund lénavöru í vörulistatöflu með fjólublárri merkimiðastílfærslu
* **Nýtt:** Tengiliðareitir skráningaraðila (nafn, heimilisfang, borg, fylki, póstnúmer, land, sími) á eyðublaði fyrir lénacheckout
* **Nýtt:** Staðfesting á reitum skráningaraðila áður en kallað er á registrar API með skýrum villuboðum
* **Nýtt:** Þjónustuveitendasértækar log rásir fyrir lénaskráningaratburði (t.d. domain-seller-namecheap.log)
* **Nýtt:** Tengiliðareitir skráningaraðila á aðal skráningar-/signup checkout eyðublaði (sýnt þegar lén er skráð)
* **Bætt:** Skipt var út Domain Search checkout reit fyrir sameinaðan Domain Selection reit með flipum fyrir undirlén, skráningu og fyrirliggjandi lén
* **Bætt:** Stillingar lénavöru birtast innfelldar á vörubreytingarsíðu í gegnum kjarnawidget-kerfi
* **Bætt:** Upplýsingar um lén viðskiptavinar tengjast kjarnawidgeti fyrir lénavörpun í stað sjálfstæðs metabox
* **Bætt:** TLD innflutningsleiðarvísir einfaldaður í eins-smells samstillingu frá öllum þjónustuveitendum
* **Bætt:** Namecheap lénalausleiki notar runu-API-kall fyrir hraðari leit
* **Bætt:** Namecheap verðlagningar-API notar réttar breytur og svörunarúrvinnslu
* **Bætt:** Miðlæg TLD geymsla í einum netvalkosti
* **Bætt:** Skráning á lénavirkni fyrir DNS-breytingar, flutninga og beitingu stillinga
* **Bætt:** Full TLD samstilling fyrir OpenSRS með IANA aðallista og runustaðfestingu
* **Bætt:** Full TLD samstilling fyrir Namecheap með síðuskiptum API-beiðnum
* **Bætt:** Eldri þjónustuveitendaklössum skipt út fyrir Integration Registry mynstur
* **Bætt:** Stillingaspjald með DNS- og flutningsstillingum
* **Bætt:** Símanúmer eru sjálfkrafa sniðin í +CC.NNN registrar snið
* **Bætt:** Staðfesting símanúmersreits fjarlægir sniðstafi fyrir sendingu
* **Bætt:** Útgáfukrafa hækkuð í Ultimate Multisite 2.4.12 með skýrari tilkynningu
* **Bætt:** CI verkflæði notar rétt checkout fyrir bæði addon og kjarna-plugin
* **Bætt:** prepare_registrant_info() les úr notandalýsigögnum vistuðum í checkout með varaleið í reikningsheimilisfang
* **Lagað:** AJAX fyrir lénaleit bilaði hjá notendum sem ekki voru innskráðir í checkout
* **Lagað:** AJAX fyrir lénaverð bilaði hjá notendum sem ekki voru innskráðir í checkout
* **Lagað:** Banvæn villa vegna endurskilgreiningar á Spyc klasa við keyrslu WP-CLI skipana
* **Lagað:** Namecheap sandbox API tímamörk of stutt
* **Lagað:** Texti Select-hnapps í lénaleit sást ekki á grænum bakgrunni
* **Lagað:** Lénaskráning mistókst með villunni "RegistrantFirstName is Missing" vegna vantaðra tengiliðaupplýsinga
* **Lagað:** Lénaskrá var búin til með blog_id=0 þegar site var ekki enn til við checkout
* **Lagað:** Sjálfgefin TLDs stilling skilaðist sem strengur í stað þátta fylkis
* **Fjarlægt:** Sjálfstæð stjórnendasíða fyrir lénastjórnun — nú meðhöndlað í gegnum kjarnasíður léna

Útgáfa 1.0.0 - Gefin út 2025-09-28

**Stór endursmíði fyrir Ultimate Multisite v2**

* **Nýtt:** Algjör endursmíði með nútímalegri PHP 7.4+ arkitektúr
* **Nýtt:** Óaðfinnanleg samþætting við Ultimate Multisite v2 checkout kerfið
* **Nýtt:** Stjórnun lénavara með sveigjanlegum verðvalkostum
* **Nýtt:** Arkitektúr með stuðningi við marga lénaþjónustuveitendur
* **Nýtt:** Sjálfvirk endurnýjun og samþætting áskriftar
* **Nýtt:** Viðmót fyrir lénastjórnun viðskiptavina
* **Nýtt:** Vöktun léna og loggar fyrir stjórnendur
* **Nýtt:** Stuðningur við afsláttarmiða fyrir lénavörur
* **Nýtt:** Heildstæð stillingastjórnun
* **Nýtt:** Þróunarvænn og stækkanlegur kóðagrunnur
* **Bætt:** Uppfærður OpenSRS þjónustuveitandi með fullum stuðningi við eiginleika
* **Bætt:** Nútímalegt UI í samræmi við Ultimate Multisite v2
* **Lagað:** Allur úreltur v1 kóði uppfærður í v2 staðla
* **Fjarlægt:** Eldri v1 samhæfni (brjótandi breyting)

### Fyrri útgáfur (v1 eldri útgáfur)

### Útgáfa 0.0.3 - 20/08/2019

* Lagað: Ósamhæfni við Groundhogg CRM
* Athugið: Þetta var síðasta v1-samhæfa útgáfan

### Útgáfa 0.0.2 - 07/12/2018

* Lagað: License Key reiturinn fjarlægður
* Lagað: Plan flipar vantaði þegar eiginleika-plugin er virkt
* Bætt: Bætt við hnappi til að sleppa á skráningarreitnum

### Útgáfa 0.0.1 - Upphafleg útgáfa

* Grunnsamþætting OpenSRS fyrir WP Ultimo v1
* Einföld lénaleit og skráning
* Lénaleyfi byggð á planum
