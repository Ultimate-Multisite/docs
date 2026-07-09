---
title: Captcha muudatuste logi
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha muudatuste logi

Versioon: 1.5.0 - Välja antud 2026-05-22
* Uus: range seiskamisega kiirusepiiraja — loendab iga GET- ja POST-päringu captcha’ga kaitstud pindadel (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) ning vastab HTTP 429, `Retry-After` päise ja juhuslikustatud tarpit-viivitusega (1–5 s, range ülempiir 15 s).
* Uus: `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` seaded tarpit-akna häälestamiseks.
* Uus: `wu_cap_rate_limit_whitelist_ip` filter usaldusväärsete IP-vahemike vabastamiseks.
* Uus: `wu_cap_rate_limit_will_block` toiming, mis käivitub vahetult enne range seiskamise vastuse saatmist.
* Uus: võltsimiskindel kliendi IP tuvastus. `Captcha_Core::get_client_ip()` (tõeallikas kiirusepiiraja bucket-võtmete, captcha siteverify `remoteip` ja statistika IP-räside jaoks) jõustab nüüd range usaldusmudeli: REMOTE_ADDR on lähtealus, `CF-Connecting-IP` arvestatakse ainult siis, kui vahetu vastaspool on praeguses Cloudflare IP-vahemikus, ning `X-Forwarded-For` arvestatakse ainult siis, kui vahetu vastaspool on administraatori seadistatud usaldusväärsete proxy’de loendis, läbides kirje paremalt vasakule ja jättes usaldusväärsed/CF hüpped vahele enne külastaja IP-le pidama jäämist.
* Uus: `cap_trust_cloudflare_headers` seade (vaikimisi VÄLJAS) — lülita sisse `CF-Connecting-IP` usaldamine, kui oled Cloudflare taga. Plugin tarnitakse komplektis oleva Cloudflare CIDR-tõmmisega ja värskendab seda kord nädalas wp-cron’i kaudu, kasutades komplektis olevat varuvarianti, kui värskendamine ebaõnnestub.
* Uus: `cap_trusted_proxies` seade — tekstiala CIDR-idele või liht-IP-dele (üks rea kohta, `#` kommentaarid lubatud), mis loetleb sinu enda eesliini proxy’d / koormusjaoturid. Ilma selleta eiratakse `X-Forwarded-For` väärtust isegi siis, kui kiirusepiiraja on lubatud.
* Uus: esmakordsel lubamisel tõenäolise Cloudflare’i / proxy seadistuse automaatne tuvastus koos ühe klõpsuga "Rakenda tuvastatud seaded" administraatori teatega. Plugin ei kirjuta kunagi sinu salvestatud väärtusi üle; kui hilisem liiklus viitab, et sinu konfiguratsioon ei vasta enam tegelikkusele (nt Cloudflare muutis CIDR-vahemikke ja sinu proxy CIDR on nüüd aegunud), kuvatakse mitte-eiratav mittevastavuse teade soovitatud uuendusega.
* Parandatud: nähtamatu režiim ei alanda enam vaikselt `cap_security_level` väärtust FAST-iks — administraatori seadistatud taset arvestatakse. Uus `wu_cap_server_security_level` filter on saadaval saitidele, mis soovivad eriloogikat.
* Parandatud: statistika `rate_limits_triggered` loendur suureneb nüüd iga blokeeringu korral, mitte ainult haruldasel õnnestumisjärgsel kaitserajal.
* Parandatud: `Captcha_Core::get_client_ip()` on nüüd ainus tõeallikas külastaja IP omistamiseks kogu kiirusepiirajas, captcha pakkujates (reCAPTCHA + hCaptcha `siteverify`) ja statistikas — sulgedes võltsimisvektori, kus otsesed origin-serveri päringud võltsitud `CF-Connecting-IP` päisega oleksid paigutatud bucket’isse võltsitud IP järgi, mitte tegeliku vastaspoole järgi.
* Parandatud: WooCommerce klassikalise checkout’i kiirusepiirangu värav käivitub nüüd `template_redirect` peal (prioriteet 1), mitte `woocommerce_before_checkout_form` peal. Vormi taseme hook ei käivitu kunagi, kui ostukorv on tühi, seega tulvaliiklus, mis ei lisa kunagi toodet, möödus piirajast täielikult.
* Parandatud: WooCommerce pay-for-order kiirusepiirangu värav käivitub nüüd `template_redirect` peal, mitte `woocommerce_before_pay_action` peal. Viimane käivitub alles pärast seda, kui `wp_verify_nonce('woocommerce-pay')` õnnestub, mis tähendab, et autentimata ründajad (tegelik ohumudel) ei käivitanud piirajat kunagi.
* Parandatud: WooCommerce Store API (plokid) checkout’i kiirusepiirangu värav käivitub nüüd `rest_pre_dispatch` peal, mitte `woocommerce_store_api_checkout_update_order_from_request` peal. Viimane käivitub alles pärast seda, kui Store API valideerib ostukorvi ja arveldusväljad, seega said autentimata botid validaatorilt 400 ja ei käivitanud piirajat kunagi.
* Parandatud: Ultimate Multisite inline-login’i kiirusepiirangu värav käivitub nüüd `wu_ajax_nopriv_wu_inline_login` prioriteedil 1 (ja sisselogitud kasutaja peegelversioonil), mitte `wu_before_inline_login` peal. Viimane käivitub alles pärast seda, kui `check_ajax_referer('wu_checkout')` õnnestub, seega said autentimata botid ilma kehtiva wu_checkout nonce’ita 403 ja ei käivitanud piirajat kunagi.
* Parandatud: `Rate_Limiter::enforce()` rakendab nüüd päringu kohta ühe korra kaitset võtmega `surface|ip`, nii et ülesvoolu hook’id, mis käivituvad renderduse kohta kaks korda (eriti `wu_setup_checkout` Ultimate Multisite’is), ei poolita enam tegelikku kiirusepiirangu lävendit.
* Parandatud: kiirusepiirangu pindade väravad ei konsulteeri enam `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter) funktsiooniga. See filter märgib "captcha on juba teise pinna poolt käsitletud" ja on tulvakaitse suhtes sõltumatu — WooCommerce’i integratsioon kasutas seda hook’ina WordPressi sisselogimise captcha vahelejätmiseks, kui Woo nonce oli olemas, mis kandus üle kiiruse loendamisse ja lasi Woo POST-idel piirajat vältida. Kiirusepiirangu-spetsiifiline `wu_cap_rate_limit_whitelist_ip` filter on nüüd ainus möödapääs, mida rakendatakse.

Versioon: 1.3.2 - Välja antud 2026-01-27
* Parandatud: Cap vidinat ei renderdatud checkout’i vormidel, mis kasutavad Elementorit või muid leheehitajaid
* Parandatud: cap-widget kohandatud element eemaldati wp_kses() sanitiseerimise käigus
* Täiustatud: checkout’i captcha välja jaoks kasutatakse väljakutsutavat sisu, et HTML-filtreerimisest mööda minna
* Täiustatud: lihtsustatud JavaScript koos varuvariandiga äärejuhtumite jaoks

Versioon: 1.3.1 - Välja antud 2026-01-26
* Parandatud: Cap Captcha nähtamatu režiim ei lahendanud end automaatselt dünaamilistel Ultimate Multisite checkout’i vormidel
* Täiustatud: Cap checkout’i skript kasutab nüüd MutationObserverit dünaamiliselt laaditud vidinate tuvastamiseks
* Täiustatud: lisatud checkout’i nupu pealtkuulamine, et oodata enne esitust token’it

Version: 1.3.0 - Välja antud 2026-01-27
* Uus: WooCommerce Blocks maksevormi integratsioon Store API fetch’i pealtkuulamisega
* Uus: Nähtamatu captcha tugi WooCommerce maksevormile (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Uus: Eraldiseisev seadete leht kasutamiseks ilma Ultimate Multisite’ita
* Uus: Jetpack Autoloader sõltuvuskonfliktide ennetamiseks
* Parandatud: hCaptcha ei renderdunud dünaamilisel Ultimate Multisite maksevormil (AJAX-iga laaditud sisu)
* Parandatud: Captcha ei värskenenud/lähtestunud, kui esinesid vormi valideerimisvead
* Parandatud: hCaptcha ei kuvatud WooCommerce maksevormi lehel
* Parandatud: reCAPTCHA klassi ei leitud viga (lisatud google/recaptcha PHP teek)
* Täiustatud: Vigade tuvastamine WordPress hookide, MutationObserveri ja AJAX-i pealtkuulamise kaudu
* Täiustatud: Seadete kirjeldused sisaldavad nüüd dashboard’i URL-e API võtmete jaoks

Version: 1.2.2 - Välja antud 2026-01-24
* Parandatud: Captcha ei kuvatud Ultimate Multisite Login Form Elementis (vormifiltri nime ebakõla)
* Parandatud: Cap widgeti HTML eemaldati wp_kses() sanitiseerimise käigus
* Parandatud: JavaScripti selektorid ei leidnud vorme, mille elemendi ID-des olid kaldkriipsud
* Lisatud: Filter hook `wu_kses_allowed_html` classaddonitele lubatud HTML-siltide laiendamiseks
* Eemaldatud: Surnud koodiga JavaScripti failid asendati teenusepakkujapõhiste skriptidega

Version: 1.2.1 - Välja antud 2026-01-23

* Parandatud: Cap Captcha tokeni valideerimine ebaõnnestus multisite-keskkondades (kasutab nüüd kogu võrgu üleseid transient’e)
* Parandatud: Captcha renderdub nüüd järjepidevalt kõigile kasutajatele, olenemata sisselogimise olekust
* Parandatud: Ebakõla captcha renderdamise ja valideerimise vahel, mis põhjustas maksevormi tõrkeid

Version: 1.2.0 - Välja antud 2026-01-21

* Uus: Cap Captcha – isehostitav proof-of-work captcha, aktiveerimisel vaikimisi lubatud
* Uus: Nullkonfiguratsiooniga kaitse – aktiveeri addon ja oled kohe kaitstud
* Uus: Polümorfne captcha teenusepakkuja arhitektuur lihtsaks laiendatavuseks
* Uus: WooCommerce Store API maksevormi kaitse kaarditestimise rünnakute vastu
* Uus: Statistika jälgimise dashboard, mis näitab väljakutseid, kinnitusi ja blokeeritud rünnakuid
* Uus: Turvataseme eelseaded (Fast, Medium, Max) Cap Captcha raskusastme jaoks
* Uus: Abstraktsed baasklassid reCAPTCHA ja hCaptcha teenusepakkujatele
* Täiustatud: Koodibaas refaktoriti modulaarseteks teenusepakkuja klassideks
* Täiustatud: Parem vastutusalade eraldamine spetsiaalse halduriklassiga
* Fixed: Security improvements for $_SERVER variable sanitization
* Parandatud: PHPUnit testikonfiguratsioon WordPressi nimetamisreeglite jaoks

Version: 1.0.1 - Välja antud 2025-09-28

* Nimeta prefiks ümber ultimate-multisite’iks; uuenda tekstidomeeni; versioonitõus.
