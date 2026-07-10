---
title: Dîroka guhertinên Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Guhertinên Captcha {#captcha-changelog}

Guhertoy: 1.5.0 - Di 2026-05-22 de hat weşandin
* Nû: Sînordarkerê rêjeyê yê rawestana hişk — her GET û POST li ser rûyên bi captcha-parastî (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) dihejêre û bi HTTP 429, sernivîseke `Retry-After`, û razana tarpit a tesadufî (1–5s, bi sînora hişk 15s) bersiv dide.
* Nû: Mîhengên `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` ji bo eyarkirina pencereya tarpit.
* Nû: Parzûna `wu_cap_rate_limit_whitelist_ip` ji bo derxistina rêzeyên IP yên pêbawer.
* Nû: Çalakiya `wu_cap_rate_limit_will_block` ku rast berî şandina bersiva rawestana hişk tê xebitandin.
* Nû: Dîtina IP-ya client a li dijî sextekirinê xurt. `Captcha_Core::get_client_ip()` (çavkaniya rastiyê ji bo kilîtên boketa sînordarkirina rêjeyê, captcha siteverify `remoteip`, û hashên IP yên statîstîkan) niha modela pêbaweriyê ya hişk ferz dike: REMOTE_ADDR bingeh e, `CF-Connecting-IP` tenê dema hevalê yekser di nav rêzeke IP ya Cloudflare a heyî de be tê qebûlkirin, û `X-Forwarded-For` tenê dema hevalê yekser di lîsteya proxy ya pêbawer a ji hêla admin ve mîhengkirî de be tê qebûlkirin, bi meşeke ji rastê ber bi çepê ku hopên pêbawer/CF derbas dike berî ku li ser IP-ya serdanker bisekine.
* Nû: Mîhenga `cap_trust_cloudflare_headers` (wekî standard OFF) — dema li pişt Cloudflare bin, xwe têxin pêbaweriya `CF-Connecting-IP`. Plugin snapshoteke Cloudflare CIDR a têkel tîne û hefteyane bi wp-cron wê nû dike; heke nûkirin bi ser nekeve, fallback a têkel bi kar tîne.
* Nû: Mîhenga `cap_trusted_proxies` — textarea ya CIDR an IP-yên sade (yek li her rêzê, şîroveyên `#` destûr in) ku proxy / load-balancerên xwe yên rêza pêşîn navnîş dike. Bê vê, `X-Forwarded-For` tê piştguhkirin heta dema sînordarkerê rêjeyê çalak be jî.
* Nû: Di yekem-çalakirinê de dîtina xweber a rewşa muhtemel a Cloudflare / proxy bi agahdariyeke admin a yek-klîk "Mîhengên hatine dîtin bicîh bîne". Plugin tu carî nirxên we yên tomarkirî nasernivîse; heke trafîka paşê nîşan bide ku config a we êdî bi rastiyê re nagunce (mînak Cloudflare rêzeyên CIDR guherandine û CIDR-ya proxy ya we niha kevn bûye), agahdariyeke negirtinbar a neguncînê nûkirina pêşniyarkirî nîşan dide.
* Serast kirin: Moda nedîtbar êdî bêdengî `cap_security_level` naxîne FAST — asta ku admin mîheng kiriye tê rêzgirtin. Parzûneke nû ya `wu_cap_server_security_level` ji bo malperên ku lojiya taybet dixwazin amade ye.
* Serast kirin: Hejmaroka statîstîkê ya `rate_limits_triggered` niha li ser her astengkirinê zêde dibe, ne tenê li ser riya paşgir a kêm-car piştî serkeftinê.
* Serast kirin: `Captcha_Core::get_client_ip()` niha tenê çavkaniya rastiyê ye ji bo veqetandina IP-ya serdanker li seranserê sînordarkerê rêjeyê, dabînkerên captcha (reCAPTCHA + hCaptcha `siteverify`), û statîstîkan — rêyekî sextekirinê digire ku daxwazên rasterast ên servera resen bi sernivîseke `CF-Connecting-IP` a sexte ve dê li gorî IP-ya sexte bihatana boketkirin, ne li gorî hevalê rast.
* Serast kirin: Deriyê sînordarkirina rêjeyê ya checkout-a klasîk a WooCommerce niha li ser `template_redirect` (pêşîtiya 1) tê xebitandin, ne li ser `woocommerce_before_checkout_form`. Hook-a asta formê dema kart vala be qet naxebite, ji ber vê trafîka lehiyê ku qet ti product zêde nedike bi tevahî sînordarker derbas dikir.
* Serast kirin: Deriyê sînordarkirina rêjeyê ya pay-for-order a WooCommerce niha li ser `template_redirect` tê xebitandin, ne li ser `woocommerce_before_pay_action`. Ya duyem tenê piştî serkeftina `wp_verify_nonce('woocommerce-pay')` dixebite, ku ev tê wateya ku êrîşkarên bê-auth (modela gefê ya rastîn) qet sînordarker nedidan xebitandin.
* Serast kirin: Deriyê sînordarkirina rêjeyê ya checkout-a WooCommerce Store API (blocks) niha li ser `rest_pre_dispatch` tê xebitandin, ne li ser `woocommerce_store_api_checkout_update_order_from_request`. Ya duyem tenê piştî ku Store API kart û qadên fatûreyê piştrast dike dixebite, ji ber vê botên bê-auth ji piştrastker 400 werdigirtin û qet sînordarker nedidan destpêkirin.
* Serast kirin: Deriyê sînordarkirina rêjeyê ya inline-login a Ultimate Multisite niha li ser `wu_ajax_nopriv_wu_inline_login` bi pêşîtiya 1 (û neynika logged-in) tê xebitandin, ne li ser `wu_before_inline_login`. Ya duyem tenê piştî serkeftina `check_ajax_referer('wu_checkout')` dixebite, ji ber vê botên bê-auth bê nonce ya derbasdar a wu_checkout 403 werdigirtin û qet sînordarker nedidan destpêkirin.
* Serast kirin: `Rate_Limiter::enforce()` niha parastineke carek-ji-bo-her-daxwazê ku bi `surface|ip` tê kilîtkirin bi kar tîne, ji ber vê hookên upstream ku di her renderê de du caran dixebitin (bi taybetî `wu_setup_checkout` di Ultimate Multisite de) êdî sînora sînordarkirina rêjeyê ya bi bandor nîv nakin.
* Serast kirin: Deriyên rûyên sînordarkirina rêjeyê êdî li `Captcha_Core::is_whitelisted()` (parzûna `wu_captcha_whitelisted`) nanêrin. Ew parzûn nîşan dide "captcha jixwe ji hêla rûyekî din ve hatiye çareserkirin" û ji parastina li dijî lehiyê cuda ye — yekbûna WooCommerce wê girê dida da ku dema Woo nonce amade be, captcha ya têketina WordPress were derbaskirin, ku ev di hejmartina rêjeyê de belav bû û hişt POST-ên Woo ji sînordarkerê dûr bikevin. Tenê parzûna taybet a sînordarkirina rêjeyê `wu_cap_rate_limit_whitelist_ip` derbaskirina niha tê sepandin e.

Guhertoy: 1.3.2 - Di 2026-01-27 de hat weşandin
* Serast kirin: Widget-a Cap li ser formên checkout ku Elementor an çêkerên din ên rûpelê bi kar tînin xuyanebû
* Serast kirin: Hêmana xwerû ya cap-widget ji hêla paqijkirina wp_kses() ve dihat jêbirin
* Başkirin: Naveroka callable ji bo qada captcha ya checkout bi kar tîne da ku parzûnkirina HTML derbas bike
* Başkirin: JavaScript hate sade kirin bi fallback ji bo rewşên keviyê

Guhertoy: 1.3.1 - Di 2026-01-26 de hat weşandin
* Serast kirin: Moda nedîtbar a Cap Captcha li ser formên checkout a Ultimate Multisite yên dînamîk bi xweberî çareser nedibû
* Başkirin: Skrîpta checkout a Cap niha MutationObserver bi kar tîne da ku widgetên bi awayê dînamîk barkirî bibîne
* Başkirin: Girtina bişkoka checkout hate zêdekirin da ku berî şandinê li benda token bimîne

Versiyon: 1.3.0 - Di 2026-01-27 de hat berdan
* Nû: Yekbûna qedandina kirînê ya WooCommerce Blocks bi destwerdana fetch a Store API
* Nû: Piştgiriya captcha ya nedîtbar ji bo qedandina kirînê ya WooCommerce (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Nû: Rûpela mîhengan a serbixwe ji bo bikaranîna bê Ultimate Multisite
* Nû: Jetpack Autoloader ji bo pêşîlêgirtina nakokiyên girêdanan
* Hat sererastkirin: hCaptcha li ser qedandina kirînê ya dînamîk a Ultimate Multisite xuya nedibû (naveroka bi AJAX barkirî)
* Hat sererastkirin: Dema çewtiyên rastandina formê çêdibin captcha nû nabe/ji nû ve nayê sazkirin
* Hat sererastkirin: hCaptcha li ser rûpela qedandina kirînê ya WooCommerce xuya nedibû
* Hat sererastkirin: Çewtiya ku pola reCAPTCHA nehat dîtin (pirtûkxaneya google/recaptcha ya PHP hate zêdekirin)
* Başkirin: Dîtina çewtiyan bi rêya girêkên WordPress, MutationObserver, û destwerdana AJAX
* Başkirin: Danasînên mîhengan niha URLên dashboardê ji bo mifteyên API dihewînin

Versiyon: 1.2.2 - Di 2026-01-24 de hat berdan
* Hat sererastkirin: Captcha li ser Hêmana Forma Têketinê ya Ultimate Multisite xuya nedibû (navê fîltra formê li hev nedihat)
* Hat sererastkirin: HTML ya widgeta Cap bi paqijkirina wp_kses() dihat jêbirin
* Hat sererastkirin: Hilbijêrên JavaScript formên ku di nasnameyên hêmanan de xetên tewandî hene nedîtin
* Hate zêdekirin: Girêka fîltrê `wu_kses_allowed_html` ji bo classaddons ku tagên HTML yên destûrdayî fireh bikin
* Hate rakirin: Pelên JavaScript yên kodên mirî bi skrîptên taybetî yên peydakaran hatin guherandin

Versiyon: 1.2.1 - Di 2026-01-23 de hat berdan

* Hat sererastkirin: Rastandina tokena Cap Captcha di hawîrdorên multisite de têk diçû (niha transientsên li seranserê torê bikar tîne)
* Hat sererastkirin: Captcha niha ji bo hemû bikarhêneran, bê girêdan bi rewşa têketinê, bi awayekî yekgirtî tê xuyakirin
* Hat sererastkirin: Nehevhatina di navbera xuyakirina captcha û rastandinê de ku dibû sedema têkçûna qedandina kirînê

Versiyon: 1.2.0 - Di 2026-01-21 de hat berdan

* Nû: Cap Captcha - captcha ya proof-of-work ya xwe-hostkirî, bi xwerû di çalakirinê de tê çalak kirin
* Nû: Parastina bê-konfîgurasyon - pêvekê çalak bike û tu yekser tê parastin
* Nû: Avahiya peydakerên captcha ya polymorphic ji bo firehkirina hêsan
* Nû: Parastina qedandina kirînê ya WooCommerce Store API li dijî êrîşên ceribandina kartê
* Nû: Dashboarda şopandina statîstîkan ku astengî, piştrastkirin, û êrîşên hatine astengkirin nîşan dide
* Nû: Pêşmîhengên asta ewlehiyê (Fast, Medium, Max) ji bo dijwariya Cap Captcha
* Nû: Polên bingehîn ên abstract ji bo peydakerên reCAPTCHA û hCaptcha
* Başkirin: Bingeha kodê ji nû ve wek polên peydaker ên modular hate rêkxistin
* Başkirin: Veqetandina berpirsiyariyan bi pola rêveber a taybetî çêtir bû
* Fixed: Security improvements for $_SERVER variable sanitization
* Hat sererastkirin: Konfîgurasyona testa PHPUnit ji bo peymanên navdanê yên WordPress

Versiyon: 1.0.1 - Di 2025-09-28 de hat berdan

* Pêşgir biguherîne bo ultimate-multisite; domaina nivîsê rojane bike; versiyonê bilind bike.
