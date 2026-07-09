---
title: Àkọọlẹ̀ Ìyípadà Olùtajà Domain
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Àkọsílẹ̀ Àyípadà Domain Seller {#domain-seller-changelog}

Ẹ̀yà 1.3.0 - Tu sílẹ̀ ní 2026-06-02
- Tuntun: Ṣafikun ìkìlọ̀ network-admin nígbà tí bálánsì reseller HostAfrica bá lọ kéré jù
- Tuntun: Ṣafikun ìṣàpẹẹrẹ aládàáṣiṣẹ́ ti àwọn domain tí a ṣẹ̀ṣẹ̀ forúkọsílẹ̀ sí site nẹ́tíwọ́ọ̀kì
- Àtúnṣe: Lo àwọn àìní field registrant nìkan nígbà tí a bá ń forúkọsílẹ̀ domain tuntun
- Àtúnṣe: Jẹ́ kí àwọn ìfitónilétí bálánsì monitor lè jẹ́ kí a pa tì
- Àtúnṣe: Rí dájú pé àwọn àlàyé billing registrant WooCommerce wà ní pípa mọ́
- Àtúnṣe: Fipá mú àwọn àìní ìkànìyàn registrant nígbà ìforúkọsílẹ̀
- Àtúnṣe: Dènà kí àwọn ọjà ìforúkọsílẹ̀ domain má ṣe dá pẹ̀lú markup 0%
- Àtúnṣe: Pa àwọn yíyàn domain àti ìdíyelé mọ́ jálẹ̀ ìṣàn session checkout
- Àtúnṣe: Ṣe àfihàn owó domain pricing HostAfrica dára síi
- Àtúnṣe: Ṣe ìhùwàsí form-action checkout dára síi láti dènà àwọn àìbáramu query-var WP-core
- Ṣe dára síi: So ìwé ìtọ́nisọ́nà ìṣètò reseller HostAfrica mọ́ ìtọ́nisọ́nà ìṣètò

Ẹ̀yà 1.2.0 - Tu sílẹ̀ ní 2026-05-25
- Tuntun: Ṣafikun HostAfrica gẹ́gẹ́ bí integration títà-domain pẹ̀lú àtìlẹ́yìn checkout, setup wizard, lookup, TLD/pricing, registration, renewal, transfer, nameserver, DNS, EPP code, registrar lock, àti ID protection
- Tuntun: Ṣafikun Openprovider gẹ́gẹ́ bí integration títà-domain pẹ̀lú àtìlẹ́yìn reseller pricing, registration, renewal, transfer, nameserver, DNS, EPP code, registrar lock, WHOIS privacy, àti TLD sync
- Tuntun: Ṣafikun Hostinger gẹ́gẹ́ bí integration títà-domain tí ń lo token API Hostinger tí a pín láti core integration fún àwọn àyẹ̀wò availability, registration, nameserver updates, registrar lock, àti WHOIS privacy
- Ṣe dára síi: Ṣafikun action domain lifecycle àti filter docblocks fún ìtọ́nisọ́nà integration developer
- Ṣe dára síi: Ṣe àfikún metadata ìbámu plugin sí WordPress 7.0 nínú readme addon
- Ṣe dára síi: Ṣe àfikún àwọn template ìṣètò tí a ń lò fún ìṣọ̀kan release tó ń bọ̀

Ẹ̀yà 1.1.0 - Tu sílẹ̀ ní 2026-05-08
- Tuntun: Ṣíṣẹ̀dá DNS record (add_dns_record) ni a ṣe fún àwọn registrar ResellerClub, Enom, àti OpenSRS
- Àtúnṣe: Parser Default DNS Records ti ń fara da token {DOMAIN} àti {SITE_URL} báyìí
- Àtúnṣe: Àwọn slug field checkout yíyàn domain ti jẹ́ namespaced láti dènà ìkọlu pẹ̀lú site_url

Ẹ̀yà 1.0.8 - Tu sílẹ̀ ní 2026-05-07
- Àtúnṣe: Ìdíyelé domain ResellerClub ń gba àwọn iye owó gidi láti endpoint API tó tọ́ báyìí

Ẹ̀yà 1.0.7 - Tu sílẹ̀ ní 2026-05-06
* Àtúnṣe: ResellerClub test_connection fi parameter tlds tí ó jẹ́ dandan ránṣẹ́ (#224)

Ẹ̀yà 1.0.6 - Tu sílẹ̀ ní 2026-05-05
* Àtúnṣe: Ìforúkọsílẹ̀ domain ResellerClub ń ṣiṣẹ́ dáadáa báyìí pẹ̀lú ìmúra response API tó dára síi àti provider routing tí registry ń darí
* Àtúnṣe: Àwọn ìmúdára UX ojú-ìwé admin Register Domain
* Yọ kúrò: Integration registrar CyberPanel

Ẹ̀yà 1.0.5 - Tu sílẹ̀ ní 2026-04-02
* Tuntun: Integration registrar GoDaddy fún ìforúkọsílẹ̀ àti ìṣàkóso domain
* Tuntun: Integration registrar NameSilo
* Tuntun: Integration registrar ResellerClub
* Tuntun: Ṣàyẹ̀wò-fúnra rẹ domain fífi SES ránṣẹ́ nígbà rírà àti mapping domain
* Àtúnṣe: Dáàbò bo àwọn constant plugin kí wọ́n má ṣe jẹ́ atúnsọ ní ayíká ìdánwò
* Àtúnṣe: Àwọn flags MySQL word-split dáadáa nínú install-wp-tests.sh

Ẹ̀yà 1.0.4 - Tu sílẹ̀ ní 2026-03-14
* **Àtúnṣe:** Díẹ̀ nínú àwọn asset css tó sọnù
* **Àtúnṣe:** Àṣìṣe tó ní í ṣe pẹ̀lú àwọn tlds tí kò sí

Ẹ̀yà 1.0.3 - Tu sílẹ̀ ní 2026-03-09
* **Àtúnṣe:** Àwọn àṣìṣe Vue reactive property (domain_option, selected_domain, domain_provider) nígbà lílo template signup legacy pẹ̀lú shortcode checkout
* **Àtúnṣe:** Àìtọ́ ìlà input field subdomain àti ọrọ̀ tó tóbi jù nínú field checkout yíyàn domain
* **Àtúnṣe:** Fi block àwòrán-tẹ́lẹ̀ "URL rẹ yóò jẹ́" pamọ́ nígbà tí field yíyàn domain bá wà

Ẹ̀yà 1.0.2 - Tu sílẹ̀ ní 2026-03-01
* **Ṣe dára síi:** Yọ àwọn settings markup àgbáyé kúrò ní ojú-ìwé settings — ìdíyelé jẹ́ ti ọjà-kọọkan nìkan báyìí
* **Ṣe dára síi:** Ṣafikun link "Ṣàkóso Àwọn Ọjà Domain" sí ojú-ìwé settings fún ìrìnàjò yára
* **Ṣe dára síi:** Àwọn àpèjúwe field àti tooltips tó ṣe kedere síi fún settings ọjà domain (catch-all vs TLD-specific, àwọn irú markup, ìdíyelé ìbẹ̀rẹ̀)
* **Ṣe dára síi:** Àwọn àpèjúwe tó dára síi káàkiri ojú-ìwé settings (wa TLDs, renewals, DNS, notifications)

Ẹ̀yà 1.0.1 - Tu sílẹ̀ ní 2026-02-27

* **Tuntun:** Irinṣẹ́ import TLD fún ìṣàkóso ìdíyelé bulk
* **Tuntun:** Àtìlẹ́yìn ìdíyelé ìbẹ̀rẹ̀ fún àwọn ọjà domain
* **Tuntun:** Suite ìdánwò E2E pẹ̀lú Cypress
* **Tuntun:** Àwọn template email fún àwọn ìfitónilétí domain lifecycle
* **Tuntun:** Àwọn field address registrant lórí modal ìforúkọsílẹ̀ domain admin, tí a ti kọ́kọ́ kún láti settings
* **Tuntun:** Interface ìṣàkóso DNS oníbàárà pẹ̀lú àtìlẹ́yìn fífikún, ṣíṣàtúnṣe, àti píparẹ́ record
* **Tuntun:** Àṣàyàn checkout "Mú domain tirẹ wá" pẹ̀lú mapping domain aládàáṣiṣẹ́
* **Tuntun:** Ṣẹ̀dá URL site láti orúkọ domain nígbà checkout fúnra rẹ
* **Tuntun:** Ìṣètò nameserver àti DNS record default nínú settings
* **Tuntun:** Àwọn àlàyé ìforúkọsílẹ̀ domain àti ìṣàkóso DNS lórí ojú-ìwé àtúnṣe domain core
* **Tuntun:** Setup wizard ṣẹ̀dá ọjà domain default pẹ̀lú àwọn default tó bójú mu fúnra rẹ
* **Tuntun:** Sync TLD aládàáṣiṣẹ́ ojoojúmọ́ nípasẹ̀ cron jákèjádò gbogbo àwọn provider tí a ti ṣètò
* **Tuntun:** Ààbò WHOIS privacy pẹ̀lú ìṣètò ọjà-kọọkan (wà ní titan nígbà gbogbo, yíyàn oníbàárà, tàbí disabled)
* **Tuntun:** Checkbox checkout WHOIS privacy pẹ̀lú àfihàn ìdíyelé àti àtìlẹ́yìn dark mode
* **Tuntun:** Ojú-ìwé admin Register Domain fún ìforúkọsílẹ̀ domain ọwọ́
* **Tuntun:** Àwọn àfikún plugin aládàáṣiṣẹ́ nípasẹ̀ server àfikún Ultimate Multisite
* **Tuntun:** Tab filter irú ọjà domain nínú tábìlì àtòkọ ọjà pẹ̀lú aṣa badge aláwọ̀ àlùkò
* **Tuntun:** Àwọn field ìkànìyàn registrant (orúkọ, address, ìlú, state, postal code, orílẹ̀-èdè, phone) lórí form checkout domain
* **Tuntun:** Ìmúṣẹ̀rí field registrant kí a tó pe API registrar pẹ̀lú àwọn ìfiránṣẹ́ àṣìṣe tó ṣe kedere
* **Tuntun:** Àwọn channel log tí ó jẹ́ ti provider-kọọkan fún àwọn ìṣẹ̀lẹ̀ ìforúkọsílẹ̀ domain (àpẹẹrẹ domain-seller-namecheap.log)
* **Tuntun:** Àwọn field ìkànìyàn registrant lórí form checkout ìforúkọsílẹ̀/signup àkọ́kọ́ (tí a fi hàn nígbà tí a bá ń forúkọsílẹ̀ domain)
* **Ṣe dára síi:** Rọ́pò field checkout Domain Search pẹ̀lú field Domain Selection kan ṣoṣo tó ń ṣe àtìlẹ́yìn àwọn tab subdomain, register, àti domain tó wà tẹ́lẹ̀
* **Ṣe dára síi:** Settings ọjà domain ń render inline lórí ojú-ìwé àtúnṣe ọjà nípasẹ̀ system widget core
* **Ṣe dára síi:** Àwọn hook info domain oníbàárà sínú widget mapping domain core dípò metabox tó dá dúró lọ́tọ̀
* **Ṣe dára síi:** Wizard import TLD ti rọrùn sí sync tẹ̀-ẹ́-lọ́kan láti gbogbo àwọn provider
* **Ṣe dára síi:** Availability domain Namecheap ń lo call API batch fún ìwá tó yára síi
* **Ṣe dára síi:** API ìdíyelé Namecheap ń lo àwọn parameter tó tọ́ àti parsing response
* **Ṣe dára síi:** Ìpamọ́ TLD tí a ṣàkóso sí ibi kan ṣoṣo nínú option nẹ́tíwọ́ọ̀kì kan
* **Ṣe dára síi:** Logging ìgbòkègbodò domain fún àwọn àyípadà DNS, transfers, àti ìlò config
* **Ṣe dára síi:** Sync TLD kíkún fún OpenSRS ní lílo master list IANA pẹ̀lú ìmúṣẹ̀rí batch
* **Ṣe dára síi:** Sync TLD kíkún fún Namecheap pẹ̀lú àwọn ìbéèrè API paginated
* **Ṣe dára síi:** Rọ́pò àwọn class provider legacy pẹ̀lú àpẹẹrẹ Integration Registry
* **Ṣe dára síi:** Panel settings pẹ̀lú ìṣètò DNS àti transfer
* **Ṣe dára síi:** Àwọn nọ́ńbà phone ni a ń format sí format registrar +CC.NNN fúnra rẹ
* **Ṣe dára síi:** Ìmúṣẹ̀rí field phone yọ àwọn character formatting kúrò kí a tó submit
* **Ṣe dára síi:** Àìní ẹ̀yà ni a gbé sókè sí Ultimate Multisite 2.4.12 pẹ̀lú ìfitónilétí tó ṣe kedere síi
* **Ṣe dára síi:** Workflow CI ń lo checkout tó yẹ fún addon àti plugin core méjèèjì
* **Ṣe dára síi:** prepare_registrant_info() ń kà láti user meta tí checkout fipamọ́ pẹ̀lú fallback billing address
* **Ti túnṣe:** AJAX ìwá domain ń kuna fún àwọn olumulo tí kò wọlé nígbà checkout
* **Ti túnṣe:** AJAX ìdíyelé domain ń kuna fún àwọn olumulo tí kò wọlé nígbà checkout
* **Ti túnṣe:** Àṣìṣe fatal redeclaration class Spyc nígbà ṣíṣe àwọn command WP-CLI
* **Ti túnṣe:** Timeout API sandbox Namecheap kuru jù
* **Ti túnṣe:** Ọrọ̀ bọtìnì Select ìwá domain kò hàn lórí abẹ́lẹ̀ aláwọ̀ ewé
* **Ti túnṣe:** Ìforúkọsílẹ̀ domain ń kuna pẹ̀lú àṣìṣe "RegistrantFirstName is Missing" nítorí info ìkànìyàn tó sọnù
* **Ti túnṣe:** Record domain ni a ṣẹ̀dá pẹ̀lú blog_id=0 nígbà tí site kò tíì wà ní àkókò checkout
* **Ti túnṣe:** Setting TLDs default padà gẹ́gẹ́ bí string dípò array tí a parsed
* **Yọ kúrò:** Ojú-ìwé admin Domain Management tó dá dúró lọ́tọ̀ — a ń ṣàkóso rẹ̀ báyìí nípasẹ̀ àwọn ojú-ìwé domain core

Ẹ̀yà 1.0.0 - Tu sílẹ̀ ní 2025-09-28

**Àtúnkọ Nlá fún Ultimate Multisite v2**

* **Tuntun:** Àtúnkọ pátápátá pẹ̀lú architecture PHP 7.4+ òde-òní
* **Tuntun:** Integration aláìní ìdènà pẹ̀lú system checkout Ultimate Multisite v2
* **Tuntun:** Ìṣàkóso ọjà domain pẹ̀lú àwọn àṣàyàn ìdíyelé tó rọrùn
* **Tuntun:** Architecture àtìlẹ́yìn provider domain púpọ̀
* **Tuntun:** Integration auto-renewal àti subscription
* **Tuntun:** Interface ìṣàkóso domain oníbàárà
* **Tuntun:** Àbojútó domain admin àti logs
* **Tuntun:** Àtìlẹ́yìn coupon fún àwọn ọjà domain
* **Tuntun:** Ìṣàkóso settings tó péye
* **Tuntun:** Codebase tó rọrùn fún developer láti faagun
* **Ṣe dára síi:** Ṣe àfikún provider OpenSRS pẹ̀lú àtìlẹ́yìn feature kíkún
* **Ṣe dára síi:** UI òde-òní tó bá Ultimate Multisite v2 mu
* **Ti túnṣe:** Gbogbo code v1 tí deprecated ti jẹ́ àfikún sí àwọn standard v2
* **Yọ kúrò:** Ìbámu legacy v1 (àyípadà tó ń fọ́ nkan)

### Àwọn Ẹ̀yà Tẹ́lẹ̀ (v1 Legacy) {#previous-versions-v1-legacy}

### Ẹ̀yà 0.0.3 - 20/08/2019 {#version-003---20082019}

* Ti túnṣe: Àìbámu pẹ̀lú Groundhogg CRM
* Àkíyèsí: Èyí ni release tó gbẹ̀yìn tó bá v1 mu

### Ẹ̀yà 0.0.2 - 07/12/2018 {#version-002---07122018}

* Ti túnṣe: Yọ field License Key kúrò
* Ti túnṣe: Àwọn tab plan sọnù nígbà tí feature plugin bá wà active
* Ṣe dára síi: Ṣafikun bọtìnì skip lórí field ìforúkọsílẹ̀

### Ẹ̀yà 0.0.1 - Release Àkọ́kọ́ {#version-001---initial-release}

* Integration OpenSRS ipilẹ fún WP Ultimo v1
* Ìwá àti ìforúkọsílẹ̀ domain tó rọrùn
* Àwọn ìyọ̀nda domain tí ó dá lórí plan
