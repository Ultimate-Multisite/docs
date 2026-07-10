---
title: Captcha izmaiņu žurnāls
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha izmaiņu žurnāls {#captcha-changelog}

Versija: 1.5.0 - Izlaista 2026-05-22
* Jauns: stingras apturēšanas ātruma ierobežotājs — uzskaita katru GET un POST uz captcha aizsargātajām virsmām (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) un atbild ar HTTP 429, `Retry-After` galveni un nejaušinātu tarpit aizturi (1–5 s, stingri ierobežota līdz 15 s).
* Jauns: `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` iestatījumi tarpit loga pielāgošanai.
* Jauns: `wu_cap_rate_limit_whitelist_ip` filtrs uzticamu IP diapazonu atbrīvošanai.
* Jauns: `wu_cap_rate_limit_will_block` darbība, kas tiek izpildīta tieši pirms stingras apturēšanas atbildes nosūtīšanas.
* Jauns: pret viltošanu noturīga klienta IP noteikšana. `Captcha_Core::get_client_ip()` (patiesības avots ātruma ierobežojuma segmentu atslēgām, captcha siteverify `remoteip` un statistikas IP jaucējvērtībām) tagad ievieš stingru uzticēšanās modeli: REMOTE_ADDR ir pamats, `CF-Connecting-IP` tiek ņemts vērā tikai tad, ja tiešais vienādranga mezgls ir pašreizējā Cloudflare IP diapazonā, un `X-Forwarded-For` tiek ņemts vērā tikai tad, ja tiešais vienādranga mezgls ir administratora konfigurētajā uzticamo starpniekserveru sarakstā, ar gājienu no labās uz kreiso, izlaižot uzticamos/CF posmus, pirms tiek noteikts apmeklētāja IP.
* Jauns: `cap_trust_cloudflare_headers` iestatījums (pēc noklusējuma IZSLĒGTS) — izvēlieties uzticēties `CF-Connecting-IP`, ja atrodaties aiz Cloudflare. Plugin komplektā ir iekļauts Cloudflare CIDR momentuzņēmums, un tas tiek atsvaidzināts ik nedēļu, izmantojot wp-cron, ar komplektā iekļautu rezerves variantu, ja atsvaidzināšana neizdodas.
* Jauns: `cap_trusted_proxies` iestatījums — teksta lauks ar CIDR vai vienkāršām IP adresēm (pa vienai rindā, atļauti `#` komentāri), kurā uzskaitīti jūsu pašu priekšējās līnijas starpniekserveri / slodzes balansētāji. Bez tā `X-Forwarded-For` tiek ignorēts pat tad, ja ātruma ierobežotājs ir iespējots.
* Jauns: pirmās iespējošanas automātiska iespējamas Cloudflare / starpniekservera pozīcijas noteikšana ar viena klikšķa "Lietot noteiktos iestatījumus" administratora paziņojumu. Plugin nekad nepārraksta jūsu saglabātās vērtības; ja turpmākā datplūsma liecina, ka jūsu konfigurācija vairs neatbilst realitātei (piem., Cloudflare mainīja CIDR diapazonus un jūsu starpniekservera CIDR tagad ir novecojis), tiek parādīts nenoraidāms neatbilstības paziņojums ar ieteikto atjauninājumu.
* Labots: neredzamais režīms vairs klusi nepazemina `cap_security_level` uz FAST — tiek ievērots administratora konfigurētais līmenis. Jauns `wu_cap_server_security_level` filtrs ir pieejams vietnēm, kas vēlas pielāgotu loģiku.
* Labots: statistikas `rate_limits_triggered` skaitītājs tagad palielinās pie katras bloķēšanas, ne tikai retajā pēcpanākumu rezerves ceļā.
* Labots: `Captcha_Core::get_client_ip()` tagad ir vienīgais patiesības avots apmeklētāja IP attiecināšanai visā ātruma ierobežotājā, captcha nodrošinātājos (reCAPTCHA + hCaptcha `siteverify`) un statistikā — aizverot viltošanas vektoru, kurā tiešie pieprasījumi uz izcelsmes serveri ar viltotu `CF-Connecting-IP` galveni tiktu piesaistīti viltotajam IP, nevis īstajam vienādranga mezglam.
* Labots: WooCommerce klasiskās norēķināšanās ātruma ierobežojuma vārti tagad tiek izpildīti uz `template_redirect` (prioritāte 1), nevis `woocommerce_before_checkout_form`. Formas līmeņa hook nekad netiek izpildīts, kad grozs ir tukšs, tāpēc plūdu datplūsma, kas nekad nepievieno produktu, pilnībā apgāja ierobežotāju.
* Labots: WooCommerce pay-for-order ātruma ierobežojuma vārti tagad tiek izpildīti uz `template_redirect`, nevis `woocommerce_before_pay_action`. Pēdējais tiek izpildīts tikai pēc tam, kad `wp_verify_nonce('woocommerce-pay')` ir veiksmīgs, kas nozīmē, ka neautentificēti uzbrucēji (faktiskais draudu modelis) nekad neaktivizēja ierobežotāju.
* Labots: WooCommerce Store API (bloku) norēķināšanās ātruma ierobežojuma vārti tagad tiek izpildīti uz `rest_pre_dispatch`, nevis `woocommerce_store_api_checkout_update_order_from_request`. Pēdējais tiek izpildīts tikai pēc tam, kad Store API validē groza un norēķinu laukus, tāpēc neautentificēti roboti saņēma 400 no validatora un nekad neaktivizēja ierobežotāju.
* Labots: Ultimate Multisite inline-login ātruma ierobežojuma vārti tagad tiek izpildīti uz `wu_ajax_nopriv_wu_inline_login` ar prioritāti 1 (un pieteikušos lietotāju spoguļā), nevis `wu_before_inline_login`. Pēdējais tiek izpildīts tikai pēc tam, kad `check_ajax_referer('wu_checkout')` ir veiksmīgs, tāpēc neautentificēti roboti bez derīga wu_checkout nonce saņēma 403 un nekad neaktivizēja ierobežotāju.
* Labots: `Rate_Limiter::enforce()` tagad piemēro vienreiz pieprasījumā aizsargu, kas atslēgots pēc `surface|ip`, tāpēc augšupējie hook, kas tiek izpildīti divreiz vienā renderēšanā (īpaši `wu_setup_checkout` Ultimate Multisite), vairs nesamazina efektīvo ātruma ierobežojuma slieksni uz pusi.
* Labots: ātruma ierobežojuma virsmas vārti vairs neizmanto `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filtrs). Šis filtrs norāda "captcha jau apstrādāta citā virsmā" un ir neatkarīgs no aizsardzības pret plūdiem — WooCommerce integrācija to izmantoja, lai izlaistu WordPress pieteikšanās captcha, kad bija klātesošs Woo nonce, kas ieplūda ātruma uzskaitē un ļāva Woo POST pieprasījumiem izvairīties no ierobežotāja. Ātruma ierobežojumam specifiskais `wu_cap_rate_limit_whitelist_ip` filtrs ir vienīgā apiešana, kas tagad tiek piemērota.

Versija: 1.3.2 - Izlaista 2026-01-27
* Labots: Cap logrīks netiek renderēts norēķināšanās formās, kas izmanto Elementor vai citus lapu veidotājus
* Labots: cap-widget pielāgotais elements tiek noņemts ar wp_kses() sanitizāciju
* Uzlabots: izmantot izsaucamu saturu norēķināšanās captcha laukam, lai apietu HTML filtrēšanu
* Uzlabots: vienkāršots JavaScript ar rezerves variantu robežgadījumiem

Versija: 1.3.1 - Izlaista 2026-01-26
* Labots: Cap Captcha neredzamais režīms automātiski neatrisinās dinamiskās Ultimate Multisite norēķināšanās formās
* Uzlabots: Cap norēķināšanās skripts tagad izmanto MutationObserver, lai noteiktu dinamiski ielādētus logrīkus
* Uzlabots: pievienota norēķināšanās pogas pārtveršana, lai pirms iesniegšanas gaidītu tokenu

Version: 1.3.0 - Izlaists 2026-01-27
* Jauns: WooCommerce Blocks norēķinu integrācija ar Store API fetch pārtveršanu
* Jauns: Neredzamā captcha atbalsts WooCommerce norēķiniem (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Jauns: Atsevišķa iestatījumu lapa lietošanai bez Ultimate Multisite
* Jauns: Jetpack Autoloader atkarību konfliktu novēršanai
* Labots: hCaptcha netika renderēts dinamiskajā Ultimate Multisite norēķinu lapā (ar AJAX ielādēts saturs)
* Labots: Captcha netika atsvaidzināts/atiestatīts, kad radās veidlapas validācijas kļūdas
* Labots: hCaptcha netika rādīts WooCommerce norēķinu lapā
* Labots: reCAPTCHA klases neatrašanas kļūda (pievienota google/recaptcha PHP bibliotēka)
* Uzlabots: Kļūdu noteikšana, izmantojot WordPress āķus, MutationObserver un AJAX pārtveršanu
* Uzlabots: Iestatījumu apraksti tagad ietver dashboard URL API atslēgām

Version: 1.2.2 - Izlaists 2026-01-24
* Labots: Captcha netika parādīts Ultimate Multisite Login Form Element (veidlapas filtra nosaukuma neatbilstība)
* Labots: Cap logrīka HTML tika noņemts ar wp_kses() sanitizāciju
* Labots: JavaScript selektori neatrada veidlapas ar slīpsvītrām elementu ID
* Pievienots: Filtra āķis `wu_kses_allowed_html` classaddons, lai paplašinātu atļautos HTML tagus
* Noņemts: Neizmantoti JavaScript faili, aizstāti ar pakalpojumu sniedzējiem specifiskiem skriptiem

Version: 1.2.1 - Izlaists 2026-01-23

* Labots: Cap Captcha token validācija neizdevās multisite vidēs (tagad izmanto tīkla mēroga transients)
* Labots: Captcha tagad konsekventi tiek renderēts visiem lietotājiem neatkarīgi no pieteikšanās statusa
* Labots: Neatbilstība starp captcha renderēšanu un validāciju, kas izraisīja norēķinu kļūmes

Version: 1.2.0 - Izlaists 2026-01-21

* Jauns: Cap Captcha — pašu mitināta proof-of-work captcha, pēc noklusējuma iespējota aktivizācijas brīdī
* Jauns: Nulles konfigurācijas aizsardzība — aktivizējiet addon, un jūs uzreiz esat aizsargāts
* Jauns: Polimorfiska captcha pakalpojumu sniedzēju arhitektūra ērtai paplašināmībai
* Jauns: WooCommerce Store API norēķinu aizsardzība pret karšu testēšanas uzbrukumiem
* Jauns: Statistikas izsekošanas dashboard, kurā redzami izaicinājumi, verifikācijas un bloķētie uzbrukumi
* Jauns: Drošības līmeņa sagataves (Fast, Medium, Max) Cap Captcha sarežģītībai
* Jauns: Abstraktas bāzes klases reCAPTCHA un hCaptcha pakalpojumu sniedzējiem
* Uzlabots: Koda bāze pārstrukturēta modulārās pakalpojumu sniedzēju klasēs
* Uzlabots: Labāka atbildību nodalīšana ar īpašu pārvaldnieka klasi
* Fixed: Security improvements for $_SERVER variable sanitization
* Labots: PHPUnit testa konfigurācija WordPress nosaukumdošanas konvencijām

Version: 1.0.1 - Izlaists 2025-09-28

* Pārdēvēt prefiksu uz ultimate-multisite; atjaunināt teksta domēnu; versijas paaugstinājums.
