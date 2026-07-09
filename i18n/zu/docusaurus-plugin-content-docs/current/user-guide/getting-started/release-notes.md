---
title: Amanothi Okukhishwa
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Amanothi Okukhishwa

## Inguqulo 2.13.0 — Ikhishwe ngo-2026-06-05

- Okusha: Kwengezwe ukusekelwa kwe-sovereign-tenant kwekhasimende Account, checkout, billing, isayithi, invoice, ukushintsha template, nokugeleza kwe-domain mapping ukuze amanethiwekhi ama-tenant akwazi ukuqondisa amakhasimende abuyele kusayithi eliyinhloko ngezenzo eziphethwe.
- Okusha: Kwengezwe ukuhlolwa kwe-renewal-credential kwama-membership aphindaphindayo ukuze ama-gateway akwazi ukukhubaza i-auto-renewal lapho i-billing agreement egciniwe, subscription, noma vault token ingekho.
- Okusha: Kwengezwe i-loopback publishing eqinisekiswe nge-HMAC yokudala isayithi elisalindile ukuze i-checkout-to-site provisioning ithembeke kakhudlwana kuma-host lapho imisebenzi yangemuva ibambezelekile.
- Okusha: Kwengezwe amaphuzu okunweba abathuthukisi ama-SSO URLs, ama-checkout-form base domains, nokudala okuzenzakalelayo kwama-domain-record.
- Ukulungisa: I-SSO ithembeke kakhudlwana kuwo wonke ama-domain mapped, ukuvakashela kwe-anonymous broker, logout, nokungqubuzana kokuncikana kwama-plugin ahlukene.
- Ukulungisa: Ukudala isayithi elisalindile manje kuyabuyela esimeni kusuka kuma-publish flags amadala futhi kugwema ukushiya amakhasimende ebambekile esikrinini sokudala isayithi.
- Ukulungisa: Ama-domain records awasadaliwanga kuma-checkout-form base domains abiwe, futhi imisebenzi yangemuva ye-host-provider engasetshenzisiwe iyeqiwa lapho kungekho integration esebenzayo.
- Ukulungisa: I-checkout, ikheli le-billing, password reset, email verification, ukushintsha template, tours, nezimo ezisemaphethelweni ze-customer dashboard akusavimbi ukugeleza okujwayelekile kwamakhasimende.
- Ukulungisa: Ama-imeyili e-broadcast manje agcina abamukeli beyimfihlo kuyilapho kugwenywa amaphutha abulalayo e-SMTP/plugin lapho uhlu lwabamukeli noma ukuthuthwa kwemeyili kwehluleka.
- Ukulungisa: Ukuvuselelwa kwama-membership, ukuboniswa kokuphelelwa yisikhathi, nezimo ezisemaphethelweni zokuqoqwa kwezinkokhelo manje kugwema ukuphelelwa yisikhathi ngokushesha, ukuphahlazeka, noma izinkokhelo ezidingekayo eziphuthelwe.
- Kuthuthukisiwe: Ukuhambisana kwe-WordPress kuhlolwe kuze kufike ku-7.0, ama-production Vue assets akhiwa kabusha kusuka emithonjeni ye-npm, futhi ukuhlanganisa kwe-Cypress end-to-end manje kuhlola ukugeleza okuningi kwe-checkout, setup, SSO, ne-gateway.

## Inguqulo 2.12.0 — Ikhishwe ngo-2026-05-15

- Okusha: Kwengezwe i-Hostinger (hPanel) njengomhlinzeki we-host osekelwayo one-domain mapping integration
- Okusha: I-Site Exporter manje iphatha ama-network import bundles ukuze kubuyiselwe amasayithi kalula kunethiwekhi yonke
- Ukulungisa: Ama-imeyili e-BCC broadcast manje asebenzisa i-header yabamukeli abangadalulwanga ukuvimbela ukuveza amakheli abamukeli
- Ukulungisa: Usuku lokuphelelwa yisikhathi kwe-membership alusonakali lapho kulondolozwa ngenani elingelona usuku
- Ukulungisa: Izibuyekezo ze-Stripe membership manje zisusa kahle izaphulelo ngaphandle kokubiza i-deleteDiscount API eseyekisiwe
- Ukulungisa: Ama-SSO redirects kumasayithi ane-domain-mapped manje anqunyelwe ukuvimbela ama-redirect loops angenamkhawulo
- Ukulungisa: Ukukhetha kwe-setup wizard image picker manje kubuyekeza kahle imodeli yedatha engaphansi
- Ukulungisa: I-Site Exporter CLI manje igcina ukukhethwa kwesayithi lenethiwekhi elizenzakalelayo elifanele
- Kuthuthukisiwe: Kususiwe i-wp-cli ebihlanganisiwe ephaketheni le-plugin, kunciphisa usayizi we-plugin

## Inguqulo 2.11.0 — Ikhishwe ngo-2026-05-11

- Okusha: Ama-export esayithi manje afaka i-`index.php` ezivulelayo ukuze i-ZIP ifakwe ku-host entsha ngaphandle kokufaka i-plugin ehlukile.
- Okusha: I-network export ivumela abaphathi ukuthi bakhiphe wonke ama-subsites ku-archive eyodwa kusuka ekhasini lokuphatha le-Site Export.
- Okusha: I-Allow Site Templates plan toggle manje iphoqelelwa nge-fallback chain, ivimbela kahle ukutholakala kwama-template ngokwemikhawulo ye-plan.
- Okusha: I-checkout form editor ixwayisa lapho umkhiqizo wengezwa ngaphandle kwe-field edingekayo emisiwe.
- Okusha: I-tab yezilungiselelo ze-Import/Export manje ichaza ngokucacile ububanzi bayo futhi ixhuma ngqo ethuluzini le-Site Export.

## Inguqulo 2.10.0 — Ikhishwe ngo-2026-05-05

- Okusha: I-PayPal guided setup wizard yokufaka credential ngesandla nge-OAuth flag gate ukuze kube nokumiswa kwe-gateway okungenazihibe.
- Okusha: I-template switch customer panel iklanywe kabusha ngekhadi le-current-template, igridi engaguquki, nenkinobho ethi **Setha kabusha i-template yamanje**.
- Ukulungisa: Ukushintsha template akusabambi i-UI lapho i-AJAX yehluleka.
- Ukulungisa: Izimo zemvume zokushintsha template zivikelwe ekufinyeleleni okungagunyaziwe.
- Ukulungisa: Okokufaka kwe-site override kuqinisekisiwe ngaphambi kokulondoloza.
- Ukulungisa: Isaziso sekheli le-billing manje siyaboniswa lapho ikheli lingenalutho.
- Ukulungisa: Izaziso zokuyekiswa kwe-PHP 8.1 null-to-string zixazululiwe.
- Ukulungisa: Ama-Currents alayishwe ngokuvilapha ngaphambi kwe-init hook ukuvimbela izinkinga zesikhathi.
- Ukulungisa: Indlela ye-SSO ehlungiwe ihlonishwa kukho konke ukugeleza kokungena.
- Ukulungisa: Izinketho zobunikazi besayithi ezingenalutho zigcinwa lapho kulondolozwa.

## Inguqulo 2.9.0 — Ikhishwe ngo-2026-04-30

- Okusha: I-single-site export ne-import kwengezwe ngaphansi kokuthi **Amathuluzi > Export & Import**.
- Ukulungisa: Amafayela e-Export ZIP manje ahanjiswa nge-endpoint yokulanda eqinisekisiwe.
- Ukulungisa: Ingozi ye-SQL injection nezinkinga zemibuzo kuma-query e-export/import asalindile kulungisiwe.
- Ukulungisa: Isayithi elisalindile alishicilelwa lapho admin eqinisekisa ngesandla i-imeyili yekhasimende.
- Ukulungisa: Amarekhodi e-pending_site ayizintandane ayahlanzwa lapho membership ingekho.
- Ukulungisa: I-padding ye-settings nav nokuzulazula kwe-search anchor kulungisiwe.
- Ukulungisa: Amasayithi asalindile manje aboniswa kuqala ekubukeni kwe-All Sites.
- Ukulungisa: Kwengezwe i-Screenshot provider (mShots) User-Agent header ukuvimbela amaphutha angu-403.
- Ukulungisa: Ukuncikana okuyindilinga kweshejuli ye-import cron kuxazululiwe.
- Ukulungisa: Ama-Tour IDs enziwe ajwayelekile abe ama-underscore kuma-user settings keys.
- Kuthuthukisiwe: I-ZipArchive manje isetshenziswa esikhundleni se-Alchemy/Zippy ukuze kube nokuhambisana okungcono.

## Inguqulo 2.8.0 — Ikhishwe ngo-2026-04-29

- Okusha: I-toggle ye-Enable Jumper yengezwe ku-UI yezilungiselelo ze-Other Options.
- Okusha: Ikholomu ye-Status yengezwe kuthebula lohlu lwamafomu e-checkout.
- Okusha: Isilayishi sefayela le-addon sunrise sezandiso ze-sunrise ze-MU-plugin ezenziwe ngokwezifiso.
- Kuthuthukisiwe: Kususwe isilungiselelo sokuvuma ukubikwa kwamaphutha ekhasini lezilungiselelo.
- Ukulungisa: Ikhadi lesayithi lekhasi lokubonga — isithombe manje sikhawulelwe futhi izixhumanisi zifakwe isitayela ngendlela efanele.
- Ukulungisa: Umhlinzeki wesithombe-skrini ushintshiwe kusukela ku-thum.io waya ku-WordPress.com mShots.
- Ukulungisa: Enable Registration kanye ne-Default Role manje kusetha okuzenzakalelayo okulungile ekufakweni okusha.
- Ukulungisa: `get_site_url()` ayisabuyisi okungenalutho lapho isizinda sifaka i-port.
- Ukulungisa: Amafayela emidiya e-clone manje akopishwa kahle lapho isilungiselelo se-`copy_media` besingenalutho.
- Ukulungisa: I-object cache yenziwe ingasebenzi kahle ngemva kokubhalwa kwe-sitemeta ye-network-activate.
- Ukulungisa: Isizinda esenziwe ngokwezifiso sikhushulelwa ngokuzenzakalelayo ekubeni esiyinhloko ekuqinisekisweni kwe-DNS kwezizinda ezinezingxenye ezi-3.
- Ukulungisa: Ubulungu obusalindile bukhanseliwe lapho inkokhelo ephelelwe yisikhathi ihlanzwa.
- Ukulungisa: Isihloli samandla ephasiwedi siboshwe kabusha ngemva kokuthi isaziso sokungena se-inline sichithiwe.
- Ukulungisa: Ukulayishwa kabusha kwekhasi okungapheli kumisiwe ekhasini lokubonga lapho isayithi selivele lidaliwe.
- Ukulungisa: Inketho yokubhalisa ye-WP core ivumelaniswe ekusebenzeni kwe-plugin nasekulondolozweni kwezilungiselelo.
- Ukulungisa: Unogada wokuphelelwa yisikhathi okungu-null wengezwe ku-`calculate_expiration` ukuze kuhambisane ne-PHP 8.4.
- Ukulungisa: Ukubhalisa okuphindwe kabili kuvinjiwe lapho ikhasimende selivele linobulungu obusebenzayo.
- Ukulungisa: Ukuhlolwa kwe-null kwengezwe ku-`date_expiration` ku-checkout.
- Ukulungisa: Ukuhlinzekwa kwesayithi kuqinisiwe — imikhawulo, ukuqagela ubulungu, ukukhushulwa kwesizinda.
- Ukulungisa: Ilebula yesimo sokuhlolwa ngaphambi kokufaka ilungiswe yaba NOT Activated lapho ukuhlolwa kwehluleka.
- Ukulungisa: Isizinda se-checkout sisetshenziselwe ama-URL okuqinisekisa i-imeyili.
- Ukulungisa: Ukungena ngokuzenzakalelayo ngemva kwe-checkout lapho kungekho nkambu yephasiwedi ekhona.
- Ukulungisa: Ubulungu bamahhala abusaphelelwa yisikhathi — buphathwa njengobempilo yonke.
- Ukulungisa: Isango lokuqinisekisa i-imeyili libamba ukushicilelwa kwesayithi kuze kube ikhasimende liqinisekisa i-imeyili.
- Ukulungisa: Indlela eyisisekelo ye-SES v2 API endpoint kanye nomzila we-identity kulungisiwe.
- Ukulungisa: I-hook ye-`wu_inline_login_error` ikhishwe kubhulokhi yokubamba ye-pre-submit.
