---
title: Captcha pakeitimų žurnalas
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha pakeitimų žurnalas {#captcha-changelog}

Versija: 1.5.0 - Išleista 2026-05-22
* Nauja: griežtas rate limiter — skaičiuoja kiekvieną GET ir POST captcha apsaugotuose paviršiuose (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) ir atsako HTTP 429, `Retry-After` header bei atsitiktine tarpit delsa (1–5 s, griežta viršutinė riba 15 s).
* Nauja: `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` nustatymai tarpit langui reguliuoti.
* Nauja: `wu_cap_rate_limit_whitelist_ip` filter patikimiems IP intervalams atleisti nuo ribojimo.
* Nauja: `wu_cap_rate_limit_will_block` action, kuri suveikia prieš pat išsiunčiant griežto sustabdymo atsaką.
* Nauja: nuo klastojimo atspari kliento IP aptiktis. `Captcha_Core::get_client_ip()` (vienintelis patikimas šaltinis rate-limit segmentų raktams, captcha siteverify `remoteip` ir statistikos IP maišoms) dabar taiko griežtą pasitikėjimo modelį: REMOTE_ADDR yra pagrindas, `CF-Connecting-IP` pripažįstamas tik tada, kai tiesioginis lygiarangis yra dabartiniame Cloudflare IP intervale, o `X-Forwarded-For` pripažįstamas tik tada, kai tiesioginis lygiarangis yra administratoriaus sukonfigūruotame patikimų tarpinių serverių sąraše, einant iš dešinės į kairę ir praleidžiant patikimus / CF šuolius prieš nustatant lankytojo IP.
* Nauja: `cap_trust_cloudflare_headers` nustatymas (numatyta IŠJUNGTA) — pasirinktinai pasitikėkite `CF-Connecting-IP`, kai esate už Cloudflare. Plugin pateikiamas su įtrauktu Cloudflare CIDR momentiniu sąrašu ir atnaujina jį kas savaitę per wp-cron, naudodamas įtrauktą atsarginį variantą, jei atnaujinimas nepavyksta.
* Nauja: `cap_trusted_proxies` nustatymas — teksto sritis CIDR įrašams arba paprastiems IP (po vieną eilutėje, leidžiami `#` komentarai), nurodanti jūsų pačių priekinės linijos tarpinius serverius / apkrovos balansavimo priemones. Be to `X-Forwarded-For` ignoruojamas net tada, kai rate limiter įjungtas.
* Nauja: pirmo įjungimo automatinis tikėtinos Cloudflare / proxy padėties aptikimas su vieno paspaudimo „Taikyti aptiktus nustatymus“ administratoriaus pranešimu. Plugin niekada neperrašo jūsų išsaugotų reikšmių; jei vėlesnis srautas rodo, kad jūsų konfigūracija nebeatitinka tikrovės (pvz., Cloudflare pakeitė CIDR intervalus ir jūsų proxy CIDR dabar pasenęs), parodomas neatmetamas neatitikimo pranešimas su rekomenduojamu atnaujinimu.
* Pataisyta: nematomas režimas daugiau tyliai nesumažina `cap_security_level` iki FAST — paisoma administratoriaus sukonfigūruoto lygio. Svetainėms, norinčioms individualios logikos, prieinamas naujas `wu_cap_server_security_level` filter.
* Pataisyta: statistikos `rate_limits_triggered` skaitiklis dabar didėja kiekvieno blokavimo metu, ne tik retame po sėkmės veikiančio apsauginio kelio atvejyje.
* Pataisyta: `Captcha_Core::get_client_ip()` dabar yra vienintelis patikimas šaltinis lankytojo IP priskyrimui rate limiter, captcha teikėjams (reCAPTCHA + hCaptcha `siteverify`) ir statistikai — užveriamas klastojimo vektorius, kai tiesioginės užklausos į kilmės serverį su suklastotu `CF-Connecting-IP` header būtų buvusios priskirtos suklastotam IP, o ne tikrajam lygiarangiui.
* Pataisyta: WooCommerce klasikinio checkout rate-limit vartai dabar suveikia per `template_redirect` (prioritetas 1), o ne `woocommerce_before_checkout_form`. Formos lygio hook niekada nesuveikia, kai krepšelis tuščias, todėl flood srautas, kuris niekada neprideda produkto, visiškai apeidavo limiter.
* Pataisyta: WooCommerce pay-for-order rate-limit vartai dabar suveikia per `template_redirect`, o ne `woocommerce_before_pay_action`. Pastarasis suveikia tik po to, kai `wp_verify_nonce('woocommerce-pay')` pavyksta, o tai reiškia, kad neprisijungę užpuolikai (tikrasis grėsmės modelis) niekada nepaleisdavo limiter.
* Pataisyta: WooCommerce Store API (blokų) checkout rate-limit vartai dabar suveikia per `rest_pre_dispatch`, o ne `woocommerce_store_api_checkout_update_order_from_request`. Pastarasis suveikia tik po to, kai Store API patvirtina krepšelį ir atsiskaitymo laukus, todėl neprisijungę botai gaudavo 400 iš validatoriaus ir niekada neaktyvuodavo limiter.
* Pataisyta: Ultimate Multisite inline-login rate-limit vartai dabar suveikia per `wu_ajax_nopriv_wu_inline_login` prioritetu 1 (ir prisijungusio naudotojo atitikmenį), o ne `wu_before_inline_login`. Pastarasis suveikia tik po to, kai `check_ajax_referer('wu_checkout')` pavyksta, todėl neprisijungę botai be galiojančio wu_checkout nonce gaudavo 403 ir niekada neaktyvuodavo limiter.
* Pataisyta: `Rate_Limiter::enforce()` dabar taiko vieno karto per užklausą apsaugą, susietą su `surface|ip`, todėl aukštesnio lygio hook, kurie suveikia dukart per atvaizdavimą (ypač `wu_setup_checkout` Ultimate Multisite), daugiau nebeperpusina efektyvaus rate-limit slenksčio.
* Pataisyta: rate-limit paviršių vartai daugiau nebesikreipia į `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter). Tas filter reiškia „captcha jau apdorota kitame paviršiuje“ ir nėra susijęs su apsauga nuo flood — WooCommerce integracija jį naudojo, kad praleistų WordPress prisijungimo captcha, kai buvo Woo nonce, o tai persiduodavo į greičio skaičiavimą ir leisdavo Woo POST apeiti limiter. Tik rate-limit skirtas `wu_cap_rate_limit_whitelist_ip` filter dabar yra vienintelis taikomas apėjimas.

Versija: 1.3.2 - Išleista 2026-01-27
* Pataisyta: Cap valdiklis nebuvo atvaizduojamas checkout formose, naudojančiose Elementor ar kitus puslapių konstruktorius
* Pataisyta: cap-widget pasirinktinis elementas buvo pašalinamas per wp_kses() sanitarizavimą
* Patobulinta: checkout captcha laukui naudojamas callable turinys, kad būtų apeitas HTML filtravimas
* Patobulinta: supaprastintas JavaScript su atsarginiu variantu kraštiniams atvejams

Versija: 1.3.1 - Išleista 2026-01-26
* Pataisyta: Cap Captcha nematomas režimas automatiškai neišsispręsdavo dinaminėse Ultimate Multisite checkout formose
* Patobulinta: Cap checkout script dabar naudoja MutationObserver dinamiškai įkeltiems valdikliams aptikti
* Patobulinta: pridėtas checkout mygtuko perėmimas, kad prieš pateikiant būtų palaukta tokeno

Version: 1.3.0 - Išleista 2026-01-27
* Nauja: WooCommerce Blocks checkout integracija su Store API fetch perėmimu
* Nauja: Nematomo captcha palaikymas WooCommerce checkout (hCaptcha nematomas, reCAPTCHA v2 nematomas, v3)
* Nauja: Atskiras nustatymų puslapis naudojimui be Ultimate Multisite
* Nauja: Jetpack Autoloader priklausomybių konfliktų prevencijai
* Pataisyta: hCaptcha nebuvo atvaizduojamas dinaminiame Ultimate Multisite checkout (AJAX įkeliamas turinys)
* Pataisyta: Captcha neatsinaujino / nebuvo nustatomas iš naujo įvykus formos validavimo klaidoms
* Pataisyta: hCaptcha nebuvo rodomas WooCommerce checkout puslapyje
* Pataisyta: reCAPTCHA klasės neradimo klaida (pridėta google/recaptcha PHP biblioteka)
* Patobulinta: Klaidų aptikimas per WordPress hooks, MutationObserver ir AJAX perėmimą
* Patobulinta: Nustatymų aprašymuose dabar yra dashboard URL API raktams

Version: 1.2.2 - Išleista 2026-01-24
* Pataisyta: Captcha nebuvo rodomas Ultimate Multisite Login Form Element (formos filtro pavadinimo neatitikimas)
* Pataisyta: Cap valdiklio HTML buvo pašalinamas wp_kses() sanitizavimo metu
* Pataisyta: JavaScript selektoriai nerasdavo formų su pasviraisiais brūkšniais elementų ID
* Pridėta: Filtro hook `wu_kses_allowed_html`, kad classaddons galėtų išplėsti leidžiamas HTML žymas
* Pašalinta: Nebenaudojami JavaScript failai pakeisti tiekėjui specifiniais skriptais

Version: 1.2.1 - Išleista 2026-01-23

* Pataisyta: Cap Captcha token validacija strigo multisite aplinkose (dabar naudojami viso tinklo transientai)
* Pataisyta: Captcha dabar nuosekliai atvaizduojamas visiems naudotojams, nepriklausomai nuo prisijungimo būsenos
* Pataisyta: Neatitikimas tarp captcha atvaizdavimo ir validacijos, sukeldavęs checkout nesėkmes

Version: 1.2.0 - Išleista 2026-01-21

* Nauja: Cap Captcha – savarankiškai talpinamas proof-of-work captcha, pagal numatymą įjungiamas aktyvavus
* Nauja: Nulinės konfigūracijos apsauga – aktyvuokite addon ir iškart esate apsaugoti
* Nauja: Polimorfinė captcha tiekėjo architektūra lengvam išplečiamumui
* Nauja: WooCommerce Store API checkout apsauga nuo kortelių testavimo atakų
* Nauja: Statistikos stebėjimo dashboard, rodantis iššūkius, patvirtinimus ir užblokuotas atakas
* Nauja: Saugumo lygio parinktys (Fast, Medium, Max) Cap Captcha sudėtingumui
* Nauja: Abstrakčios bazinės klasės reCAPTCHA ir hCaptcha tiekėjams
* Patobulinta: Kodo bazė pertvarkyta į modulines tiekėjų klases
* Patobulinta: Geresnis atsakomybių atskyrimas naudojant dedikuotą valdiklio klasę
* Fixed: Security improvements for $_SERVER variable sanitization
* Pataisyta: PHPUnit testų konfigūracija WordPress pavadinimų konvencijoms

Version: 1.0.1 - Išleista 2025-09-28

* Pervadintas priešdėlis į ultimate-multisite; atnaujintas teksto domenas; versijos padidinimas.
