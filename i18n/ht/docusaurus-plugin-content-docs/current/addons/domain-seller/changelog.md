---
title: Jounal chanjman Vandè Domèn
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Changelog Domain Seller

Vèsyon 1.3.0 - Lage 2026-06-02
- Nouvo: Ajoute yon avètisman network-admin lè balans revandè HostAfrica vin twò ba
- Nouvo: Ajoute katografi otomatik domèn ki fèk anrejistre yo sou sit rezo a
- Koreksyon: Aplike egzijans chan anrejistran yo sèlman lè y ap anrejistre yon nouvo domèn
- Koreksyon: Fè avi balans siveyans yo kapab fèmen
- Koreksyon: Asire detay bòdwo anrejistran WooCommerce yo konsève
- Koreksyon: Fè respekte egzijans kontak anrejistran yo pandan anrejistreman
- Koreksyon: Anpeche pwodwi anrejistreman domèn yo kreye ak 0% maj
- Koreksyon: Konsève seleksyon domèn yo ak pri yo atravè koule sesyon checkout la
- Koreksyon: Amelyore afichaj lajan pou pri domèn HostAfrica yo
- Koreksyon: Amelyore konpòtman aksyon fòm checkout la pou anpeche dezakò query-var WP-core
- Amelyore: Lye dokimantasyon konfigirasyon revandè HostAfrica nan gid konfigirasyon an

Vèsyon 1.2.0 - Lage 2026-05-25
- Nouvo: Ajoute HostAfrica kòm yon entegrasyon vann domèn ak sipò pou checkout, sòsye konfigirasyon, rechèch, TLD/pri, anrejistreman, renouvèlman, transfè, nameserver, DNS, kòd EPP, bloke rejistrè, ak pwoteksyon ID
- Nouvo: Ajoute Openprovider kòm yon entegrasyon vann domèn ak sipò pou pri revandè, anrejistreman, renouvèlman, transfè, nameserver, DNS, kòd EPP, bloke rejistrè, vi prive WHOIS, ak senkronizasyon TLD
- Nouvo: Ajoute Hostinger kòm yon entegrasyon vann domèn ki itilize token Hostinger API pataje a ki soti nan entegrasyon debaz la pou verifikasyon disponiblite, anrejistreman, mizajou nameserver, bloke rejistrè, ak vi prive WHOIS
- Amelyore: Ajoute docblocks pou aksyon ak filtè sik lavi domèn pou gid entegrasyon devlopè
- Amelyore: Mete metadata konpatibilite plugin lan ajou pou WordPress 7.0 nan readme addon lan
- Amelyore: Mete modèl planifikasyon yo itilize pou kowòdinasyon pwochen lage yo ajou

Vèsyon 1.1.0 - Lage 2026-05-08
- Nouvo: Kreyasyon dosye DNS (add_dns_record) aplike pou rejistrè ResellerClub, Enom, ak OpenSRS
- Koreksyon: Analizè Default DNS Records la kounye a tolere token {DOMAIN} ak {SITE_URL}
- Koreksyon: Slug chan checkout seleksyon domèn yo namespaced pou anpeche kolizyon ak site_url

Vèsyon 1.0.8 - Lage 2026-05-07
- Koreksyon: Pri domèn ResellerClub yo kounye a pran pri koute aktyèl yo nan endpoint API ki kòrèk la

Vèsyon 1.0.7 - Lage 2026-05-06
* Koreksyon: ResellerClub test_connection voye paramèt tlds obligatwa a (#224)

Vèsyon 1.0.6 - Lage 2026-05-05
* Koreksyon: Anrejistreman domèn ResellerClub kounye a mache kòrèkteman ak pi bon jesyon repons API ak woutaj founisè ki baze sou rejis
* Koreksyon: Amelyorasyon UX paj admin Register Domain
* Retire: Entegrasyon rejistrè CyberPanel

Vèsyon 1.0.5 - Lage 2026-04-02
* Nouvo: Entegrasyon rejistrè GoDaddy pou anrejistreman ak jesyon domèn
* Nouvo: Entegrasyon rejistrè NameSilo
* Nouvo: Entegrasyon rejistrè ResellerClub
* Nouvo: Verifye otomatikman domèn voye SES la lè yo achte ak katografye domèn nan
* Koreksyon: Pwoteje konstan plugin yo kont redefinisyon nan anviwònman tès
* Koreksyon: Flag MySQL yo separe mo yo kòrèkteman nan install-wp-tests.sh

Vèsyon 1.0.4 - Lage 2026-03-14
* **Koreksyon:** Kèk resous css ki te manke
* **Koreksyon:** Erè ki gen rapò ak tlds ki pa disponib

Vèsyon 1.0.3 - Lage 2026-03-09
* **Koreksyon:** Erè pwopriyete reyaktif Vue (domain_option, selected_domain, domain_provider) lè w ap itilize ansyen modèl enskripsyon an ak shortcode checkout la
* **Koreksyon:** Move aliyman chan antre soudomèn ak tèks twò gwo nan chan checkout seleksyon domèn nan
* **Koreksyon:** Kache blòk aperçu "Your URL will be" la lè chan seleksyon domèn nan prezan

Vèsyon 1.0.2 - Lage 2026-03-01
* **Amelyore:** Retire anviwònman maj global yo nan paj anviwònman an — pri yo kounye a sèlman pou chak pwodwi
* **Amelyore:** Ajoute lyen "Manage Domain Products" sou paj anviwònman an pou navigasyon rapid
* **Amelyore:** Deskripsyon chan ak konsèy zouti pi klè pou anviwònman pwodwi domèn yo (catch-all kont espesifik pou TLD, kalite maj, pri entwodiksyon)
* **Amelyore:** Pi bon deskripsyon toupatou nan paj anviwònman an (chèche TLD yo, renouvèlman, DNS, notifikasyon)

Vèsyon 1.0.1 - Lage 2026-02-27

* **Nouvo:** Zouti enpòte TLD pou jesyon pri an mas
* **Nouvo:** Sipò pri entwodiksyon pou pwodwi domèn
* **Nouvo:** Seri tès E2E ak Cypress
* **Nouvo:** Modèl imèl pou notifikasyon sik lavi domèn
* **Nouvo:** Chan adrès anrejistran sou fenèt modal enskripsyon domèn admin, pre-ranpli apati anviwònman yo
* **Nouvo:** Entèfas jesyon DNS kliyan ak sipò pou ajoute, modifye, ak efase dosye
* **Nouvo:** Opsyon checkout "Pote pwòp domèn ou" ak katografi domèn otomatik
* **Nouvo:** Jenere URL sit otomatikman apati non domèn pandan checkout
* **Nouvo:** Konfigirasyon nameserver ak dosye DNS defo nan anviwònman yo
* **Nouvo:** Detay enskripsyon domèn ak jesyon DNS sou paj prensipal modifye domèn nan
* **Nouvo:** Asistan konfigirasyon an kreye otomatikman yon pwodwi domèn defo ak defo ki rezonab
* **Nouvo:** Senkronizasyon TLD otomatik chak jou via cron atravè tout founisè ki konfigire yo
* **Nouvo:** Pwoteksyon vi prive WHOIS ak konfigirasyon pa pwodwi (toujou aktive, chwa kliyan, oswa dezaktive)
* **Nouvo:** Kaz chwa vi prive WHOIS nan checkout ak afichaj pri ak sipò mòd nwa
* **Nouvo:** Paj admin Register Domain pou enskripsyon domèn manyèl
* **Nouvo:** Mizajou plugin otomatik via sèvè mizajou Ultimate Multisite
* **Nouvo:** Onglè filtè kalite pwodwi domèn nan tablo lis pwodwi ak estil badj vyolèt
* **Nouvo:** Chan kontak anrejistran (non, adrès, vil, eta, kòd postal, peyi, telefòn) sou fòm checkout domèn
* **Nouvo:** Validasyon chan anrejistran anvan rele API rejistrè a ak mesaj erè klè
* **Nouvo:** Chèn log espesifik pou founisè pou evènman enskripsyon domèn (eg. domain-seller-namecheap.log)
* **Nouvo:** Chan kontak anrejistran sou fòm checkout enskripsyon prensipal/enskri (parèt lè w ap anrejistre yon domèn)
* **Amelyore:** Ranplase chan checkout Domain Search ak yon chan Domain Selection inifye ki sipòte onglè subdomain, register, ak existing domain
* **Amelyore:** Anviwònman pwodwi domèn parèt anliy sou paj modifye pwodwi a via sistèm widget prensipal la
* **Amelyore:** Enfòmasyon domèn kliyan konekte ak widget katografi domèn prensipal la olye de yon metabox apa
* **Amelyore:** Asistan enpòte TLD senplifye pou senkronizasyon yon sèl klik apati tout founisè yo
* **Amelyore:** Disponibilite domèn Namecheap itilize apèl API an pakèt pou rechèch pi rapid
* **Amelyore:** API pri Namecheap itilize paramèt ak analiz repons kòrèk
* **Amelyore:** Depo TLD santralize nan yon sèl opsyon rezo
* **Amelyore:** Anrejistreman aktivite domèn pou chanjman DNS, transfè, ak aplikasyon konfigirasyon
* **Amelyore:** Senkronizasyon TLD konplè pou OpenSRS lè l sèvi ak lis mèt IANA ak validasyon an pakèt
* **Amelyore:** Senkronizasyon TLD konplè pou Namecheap ak demann API pajine
* **Amelyore:** Ranplase ansyen klas founisè yo ak modèl Integration Registry
* **Amelyore:** Panèl anviwònman ak konfigirasyon DNS ak transfè
* **Amelyore:** Nimewo telefòn fòmate otomatikman nan fòma rejistrè +CC.NNN
* **Amelyore:** Validasyon chan telefòn retire karaktè fòma anvan soumèt
* **Amelyore:** Kondisyon vèsyon monte a Ultimate Multisite 2.4.12 ak avi ki pi klè
* **Amelyore:** Workflow CI itilize checkout apwopriye pou tou de addon ak plugin prensipal
* **Amelyore:** prepare_registrant_info() li nan meta itilizatè ki sove nan checkout ak adrès faktirasyon kòm opsyon sekou
* **Korije:** AJAX rechèch domèn echwe pou itilizatè ki pa konekte pandan checkout
* **Korije:** AJAX pri domèn echwe pou itilizatè ki pa konekte pandan checkout
* **Korije:** Erè fatal redeklarasyon klas Spyc lè w ap kouri kòmand WP-CLI
* **Korije:** Delè API sandbox Namecheap te twò kout
* **Korije:** Tèks bouton Select nan rechèch domèn pa t vizib sou fon vèt
* **Korije:** Enskripsyon domèn echwe ak erè "RegistrantFirstName is Missing" akoz enfòmasyon kontak ki manke
* **Korije:** Dosye domèn kreye ak blog_id=0 lè sit la pa t egziste ankò nan moman checkout
* **Korije:** Anviwònman TLD defo yo te retounen kòm string olye de array analize
* **Retire:** Paj admin Domain Management apa — kounye a jere atravè paj domèn prensipal yo

Vèsyon 1.0.0 - Pibliye 2025-09-28

**Gwo Re-ekriti pou Ultimate Multisite v2**

* **Nouvo:** Re-ekriti konplè ak achitekti modèn PHP 7.4+
* **Nouvo:** Entegrasyon san pwoblèm ak sistèm checkout Ultimate Multisite v2
* **Nouvo:** Jesyon pwodwi domèn ak opsyon pri fleksib
* **Nouvo:** Achitekti sipò pou plizyè founisè domèn
* **Nouvo:** Entegrasyon renouvèlman otomatik ak subscription
* **Nouvo:** Entèfas jesyon domèn kliyan
* **Nouvo:** Siveyans ak logs domèn admin
* **Nouvo:** Sipò koupon pou pwodwi domèn
* **Nouvo:** Jesyon anviwònman konplè
* **Nouvo:** Baz kòd ekstansib ki favorab pou devlopè
* **Amelyore:** Mete founisè OpenSRS ajou ak sipò konplè pou fonksyonalite yo
* **Amelyore:** UI modèn ki konsistan ak Ultimate Multisite v2
* **Korije:** Tout kòd v1 demode mete ajou ak estanda v2 yo
* **Retire:** Konpatibilite ansyen v1 (chanjman ki kraze konpatibilite)

### Vèsyon anvan yo (v1 ansyen)

### Vèsyon 0.0.3 - 20/08/2019

* Korije: Enkonpatibilite ak Groundhogg CRM
* Nòt: Sa a te dènye piblikasyon ki konpatib ak v1

### Vèsyon 0.0.2 - 07/12/2018

* Korije: Retire chan License Key la
* Korije: Onglè plan yo manke lè plugin fonksyonalite a aktif
* Amelyore: Ajoute yon bouton sote sou chan enskripsyon an

### Vèsyon 0.0.1 - Premye Piblikasyon

* Entegrasyon OpenSRS debaz pou WP Ultimo v1
* Rechèch ak enskripsyon domèn senp
* Otorizasyon domèn ki baze sou plan
