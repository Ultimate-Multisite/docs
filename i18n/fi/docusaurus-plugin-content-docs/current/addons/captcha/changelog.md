---
title: Captcha-muutosloki
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha muutosloki {#captcha-changelog}

Versio: 1.5.0 - Julkaistu 2026-05-22
* Uutta: Kovan pysäytyksen nopeusrajoitin — laskee jokaisen GET- ja POST-pyynnön captcha-suojatuilla pinnoilla (wp-login / register / lost-password / kommentit, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) ja vastaa HTTP 429 -koodilla, `Retry-After` headerilla sekä satunnaistetulla tarpit-viiveellä (1–5 s, kova yläraja 15 s).
* Uutta: `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` asetukset tarpit-ikkunan säätämiseen.
* Uutta: `wu_cap_rate_limit_whitelist_ip` suodatin luotettujen IP-alueiden vapauttamiseen.
* Uutta: `wu_cap_rate_limit_will_block` toiminto, joka käynnistyy välittömästi ennen kuin kovan pysäytyksen vastaus lähetetään.
* Uutta: Huijauksenkestävä asiakas-IP:n tunnistus. `Captcha_Core::get_client_ip()` (totuuden lähde nopeusrajoituksen ämpäriavaimille, captcha siteverify `remoteip` -arvolle ja tilastojen IP-tiivisteille) pakottaa nyt tiukan luottamusmallin: REMOTE_ADDR on lähtötaso, `CF-Connecting-IP` hyväksytään vain, kun välitön vertaispalvelin on nykyisen Cloudflare-IP-alueen sisällä, ja `X-Forwarded-For` hyväksytään vain, kun välitön vertaispalvelin on ylläpitäjän määrittämässä luotettujen välityspalvelinten luettelossa, käyttäen oikealta vasemmalle etenevää läpikäyntiä, joka ohittaa luotetut/CF-hypyt ennen kävijän IP:n valitsemista.
* Uutta: `cap_trust_cloudflare_headers` asetus (oletuksena POIS) — ota `CF-Connecting-IP`-luottamus käyttöön, kun ollaan Cloudflaren takana. Plugin sisältää mukana toimitetun Cloudflare CIDR -tilannekuvan ja päivittää sen viikoittain wp-cronin kautta mukana toimitetulla varalla, jos päivitys epäonnistuu.
* Uutta: `cap_trusted_proxies` asetus — tekstialue CIDR-merkinnöille tai pelkille IP-osoitteille (yksi per rivi, `#` kommentit sallittu), jossa luetellaan omat etulinjan välityspalvelimesi / kuormantasaajasi. Ilman tätä `X-Forwarded-For` ohitetaan, vaikka nopeusrajoitin olisi käytössä.
* Uutta: Ensimmäisen käyttöönoton automaattinen todennäköisen Cloudflare-/välityspalvelinasetelman tunnistus yhden napsautuksen "Käytä tunnistettuja asetuksia" -ylläpitoilmoituksella. Plugin ei koskaan ylikirjoita tallennettuja arvojasi; jos myöhempi liikenne viittaa siihen, että määrityksesi ei enää vastaa todellisuutta (esim. Cloudflare muutti CIDR-alueita ja välityspalvelimesi CIDR on nyt vanhentunut), ei-suljettava ristiriitailmoitus näyttää suositellun päivityksen.
* Korjattu: Näkymätön tila ei enää hiljaisesti alenna `cap_security_level`-arvoa FAST-tasolle — ylläpitäjän määrittämää tasoa noudatetaan. Uusi `wu_cap_server_security_level` suodatin on saatavilla sivustoille, jotka haluavat räätälöityä logiikkaa.
* Korjattu: Tilastojen `rate_limits_triggered` laskuri kasvaa nyt jokaisesta estosta, ei vain harvinaisella onnistumisen jälkeisellä varmistuspolulla.
* Korjattu: `Captcha_Core::get_client_ip()` on nyt ainoa totuuden lähde kävijän IP:n määrittämiselle nopeusrajoittimessa, captcha-tarjoajissa (reCAPTCHA + hCaptcha `siteverify`) ja tilastoissa — tämä sulkee huijausvektorin, jossa suorat alkuperäispalvelimelle tehdyt pyynnöt, joissa oli väärennetty `CF-Connecting-IP` header, olisi sijoitettu väärennetyn IP:n mukaan todellisen vertaisosoitteen sijaan.
* Korjattu: WooCommerce classic checkout -nopeusrajoituksen portti käynnistyy nyt `template_redirect`-kohdassa (prioriteetti 1) eikä `woocommerce_before_checkout_form`-kohdassa. Lomaketason hook ei koskaan käynnisty, kun ostoskori on tyhjä, joten tulvaliikenne, joka ei koskaan lisää tuotetta, ohitti rajoittimen kokonaan.
* Korjattu: WooCommerce pay-for-order -nopeusrajoituksen portti käynnistyy nyt `template_redirect`-kohdassa eikä `woocommerce_before_pay_action`-kohdassa. Jälkimmäinen käynnistyy vasta, kun `wp_verify_nonce('woocommerce-pay')` onnistuu, mikä tarkoittaa, että kirjautumattomat hyökkääjät (todellinen uhkamalli) eivät koskaan laukaisseet rajoitinta.
* Korjattu: WooCommerce Store API (lohkot) checkout -nopeusrajoituksen portti käynnistyy nyt `rest_pre_dispatch`-kohdassa eikä `woocommerce_store_api_checkout_update_order_from_request`-kohdassa. Jälkimmäinen käynnistyy vasta, kun Store API validoi ostoskorin ja laskutuskentät, joten kirjautumattomat botit saivat validaattorilta 400-vastauksen eivätkä koskaan laukaisseet rajoitinta.
* Korjattu: Ultimate Multisite inline-login -nopeusrajoituksen portti käynnistyy nyt `wu_ajax_nopriv_wu_inline_login` prioriteetilla 1 (ja kirjautuneen peilissä) eikä `wu_before_inline_login`-kohdassa. Jälkimmäinen käynnistyy vasta, kun `check_ajax_referer('wu_checkout')` onnistuu, joten kirjautumattomat botit ilman kelvollista wu_checkout noncea saivat 403-vastauksen eivätkä koskaan laukaisseet rajoitinta.
* Korjattu: `Rate_Limiter::enforce()` käyttää nyt kerran pyyntöä kohden toimivaa suojaa, jonka avaimena on `surface|ip`, joten ylävirran hookit, jotka käynnistyvät kahdesti renderöintiä kohti (erityisesti `wu_setup_checkout` Ultimate Multisite -ympäristössä), eivät enää puolita tehokasta nopeusrajoituksen kynnystä.
* Korjattu: Nopeusrajoituspintojen portit eivät enää tarkista `Captcha_Core::is_whitelisted()`-toimintoa (`wu_captcha_whitelisted` suodatin). Tuo suodatin ilmoittaa "captcha on jo käsitelty toisella pinnalla" ja on erillinen tulvasuojauksesta — WooCommerce-integraatio käytti sitä ohittamaan WordPress-kirjautumisen captchan, kun Woo nonce oli läsnä, mikä vuoti nopeuslaskentaan ja antoi Woo POST -pyyntöjen välttää rajoittimen. Nopeusrajoituskohtainen `wu_cap_rate_limit_whitelist_ip` suodatin on ainoa ohitus, jota nyt sovelletaan.

Versio: 1.3.2 - Julkaistu 2026-01-27
* Korjattu: Cap-widget ei renderöitynyt checkout-lomakkeissa, jotka käyttivät Elementoria tai muita sivunrakentajia
* Korjattu: cap-widget mukautettu elementti poistettiin wp_kses()-sanitoinnissa
* Parannettu: Käytä kutsuttavaa sisältöä checkoutin captcha-kentälle HTML-suodatuksen ohittamiseksi
* Parannettu: Yksinkertaistettu JavaScript vararatkaisulla reunatapauksia varten

Versio: 1.3.1 - Julkaistu 2026-01-26
* Korjattu: Cap Captcha näkymätön tila ei ratkaissut itseään automaattisesti dynaamisissa Ultimate Multisite checkout -lomakkeissa
* Parannettu: Cap checkout -skripti käyttää nyt MutationObserveria dynaamisesti ladattujen widgettien tunnistamiseen
* Parannettu: Lisätty checkout-painikkeen sieppaus tokenin odottamiseksi ennen lähettämistä

Versio: 1.3.0 - Julkaistu 2026-01-27
* Uusi: WooCommerce Blocks kassan integraatio Store API -haun sieppauksella
* Uusi: Näkymättömän captchan tuki WooCommerce kassalle (hCaptcha näkymätön, reCAPTCHA v2 näkymätön, v3)
* Uusi: Erillinen asetussivu käyttöön ilman Ultimate Multisitea
* Uusi: Jetpack Autoloader riippuvuusristiriitojen ehkäisyyn
* Korjattu: hCaptcha ei renderöitynyt dynaamisessa Ultimate Multisite kassassa (AJAX-ladattu sisältö)
* Korjattu: Captcha ei päivittynyt/nollautunut, kun lomakkeen validointivirheitä ilmeni
* Korjattu: hCaptcha ei näkynyt WooCommerce kassasivulla
* Korjattu: reCAPTCHA-luokkaa ei löytynyt -virhe (lisätty google/recaptcha PHP -kirjasto)
* Parannettu: Virheiden tunnistus WordPress-koukkujen, MutationObserverin ja AJAX-sieppauksen kautta
* Parannettu: Asetusten kuvaukset sisältävät nyt Dashboard-URL-osoitteet API-avaimille

Versio: 1.2.2 - Julkaistu 2026-01-24
* Korjattu: Captcha ei näkynyt Ultimate Multisite Login Form Elementissä (lomakkeen suodattimen nimen ristiriita)
* Korjattu: Cap-widgetin HTML poistettiin wp_kses() -puhdistuksessa
* Korjattu: JavaScript-valitsimet eivät löytäneet lomakkeita, joiden elementtitunnuksissa on vinoviivoja
* Lisätty: Suodatinkoukku `wu_kses_allowed_html` classaddoneille sallittujen HTML-tagien laajentamiseen
* Poistettu: Kuolleen koodin JavaScript-tiedostot korvattu palveluntarjoajakohtaisilla skripteillä

Versio: 1.2.1 - Julkaistu 2026-01-23

* Korjattu: Cap Captcha -tokenin validointi epäonnistui multisite-ympäristöissä (käyttää nyt verkonlaajuisia transientteja)
* Korjattu: Captcha renderöityy nyt johdonmukaisesti kaikille käyttäjille kirjautumistilasta riippumatta
* Korjattu: Captchan renderöinnin ja validoinnin välinen ristiriita, joka aiheutti kassan epäonnistumisia

Versio: 1.2.0 - Julkaistu 2026-01-21

* Uusi: Cap Captcha - itse ylläpidetty proof-of-work-captcha, oletuksena käytössä aktivoinnin yhteydessä
* Uusi: Nollakonfiguraatiosuojaus - aktivoi lisäosa ja olet suojattu välittömästi
* Uusi: Polymorfinen captcha-palveluntarjoaja-arkkitehtuuri helppoa laajennettavuutta varten
* Uusi: WooCommerce Store API -kassasuojaus korttitestaushyökkäyksiä vastaan
* Uusi: Tilastojen seurannan dashboard, joka näyttää haasteet, varmennukset ja estetyt hyökkäykset
* Uusi: Turvatason esiasetukset (Nopea, Keskitaso, Maksimi) Cap Captchan vaikeustasolle
* Uusi: Abstraktit perusluokat reCAPTCHA- ja hCaptcha-palveluntarjoajille
* Parannettu: Koodipohja refaktoroitu modulaarisiksi palveluntarjoajaluokiksi
* Parannettu: Parempi vastuualueiden erottelu omistetulla hallintaluokalla
* Fixed: Security improvements for $_SERVER variable sanitization
* Korjattu: PHPUnit-testikonfiguraatio WordPressin nimeämiskäytännöille

Versio: 1.0.1 - Julkaistu 2025-09-28

* Nimeä etuliite uudelleen muotoon ultimate-multisite; päivitä text domain; version nosto.
