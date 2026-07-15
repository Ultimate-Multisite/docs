---
title: Amanqaku okukhutshwa
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Amanqaku okukhutshwa

## Inguqulelo 2.13.0 — Ikhutshwe nge-2026-06-05 {#version-2130--released-on-2026-06-05}

- Entsha: Kongezwe inkxaso ye-sovereign-tenant ye-account yomthengi, checkout, billing, isayithi, i-invoice, ukutshintsha itemplate, kunye neendlela ze-domain mapping ukuze iinethiwekhi ze-tenant zikwazi ukubuyisela abathengi kwisayithi ephambili ngezenzo ezilawulwayo.
- Entsha: Kongezwe uhlolo lweziqinisekiso zohlaziyo kumalungu aphindaphindwayo ukuze ii-gateway zikwazi ukukhubaza uhlaziyo oluzenzekelayo xa isivumelwano se-billing esigciniweyo, subscription, okanye vault token ingekho.
- Entsha: Kongezwe ukupapasha kwe-loopback okuqinisekiswe nge-HMAC kokudalwa kwesayithi okulindileyo ukuze ulungiselelo olusuka kwi-checkout luye kwisayithi luthembeke ngakumbi kwiihost apho imisebenzi yangasemva ilibaziseka.
- Entsha: Kongezwe iindawo zokwandisa zabaphuhlisi zee-URL ze-SSO, ii-domain ezisisiseko zeefom ze-checkout, kunye nokudalwa okuzenzekelayo kweerekhodi ze-domain.
- Lungiso: I-SSO ithembeke ngakumbi kuzo zonke ii-domain ezimapped, utyelelo lwe-broker olungaziwayo, logout, kunye neengxabano zokuxhomekeka phakathi kwee-plugin.
- Lungiso: Ukudalwa kwesayithi okulindileyo ngoku kuyazibuyisela kwiiflegi zokupapasha ezindala kwaye kuthintela ukushiya abathengi bebambekile kwisikrini sokudalwa kwesayithi.
- Lungiso: Iirekhodi ze-domain azisadalwa kwii-domain ezisisiseko zeefom ze-checkout ezabelwanayo, kwaye imisebenzi yangasemva ye-host-provider engasetyenziswayo iyatsitywa xa kungekho kudityaniswa kusebenzayo.
- Lungiso: Iimeko ezikhethekileyo ze-checkout, idilesi ye-billing, ukuseta kwakhona igama lokugqitha, ukuqinisekiswa kwe-imeyile, ukutshintsha itemplate, iitour, kunye ne-dashboard yomthengi azisathinteli iindlela eziqhelekileyo zabathengi.
- Lungiso: Ii-imeyile zokusasaza ngoku zigcina abafumanayo beyimfihlo ngelixa ziphepha iimpazamo ezibulalayo ze-SMTP/plugin xa uluhlu lwabafumanayo okanye uthutho lwemeyile lusilela.
- Lungiso: Uhlaziyo lobulungu, ukuboniswa kokuphelelwa lixesha, kunye neemeko ezikhethekileyo zokuqokelelwa kwentlawulo ngoku ziphepha ukuphelelwa lixesha kwangoko, ukuwa kwenkqubo, okanye iintlawulo ezifunekayo eziphosiweyo.
- Kuphuculwe: Ukuhambelana kwe-WordPress kuvavanywe ukuya ku-7.0, ii-assets ze-Vue zemveliso zakhiwe ngokutsha kwimithombo ye-npm, kwaye ukugubungela kwe-Cypress end-to-end ngoku kuvavanya iindlela ezininzi ze-checkout, setup, SSO, kunye nee-gateway.

## Inguqulelo 2.12.0 — Ikhutshwe nge-2026-05-15 {#version-2120--released-on-2026-05-15}

- Entsha: Kongezwe i-Hostinger (hPanel) njengomboneleli we-host oxhaswayo onodityaniso lwe-domain mapping
- Entsha: I-Site Exporter ngoku iphatha iipakethe zokungenisa zenethiwekhi ukuze kube lula ukubuyisela iisayithi kwinethiwekhi yonke
- Lungiso: Ii-imeyile zokusasaza ze-BCC ngoku zisebenzisa i-header yabafumanayo-abangachazwanga ukuthintela ukuvezwa kweedilesi zabafumanayo
- Lungiso: Umhla wokuphelelwa lixesha kobulungu awusonakaliswa xa kugcinwa ngexabiso elingengomhla
- Lungiso: Uhlaziyo lobulungu lwe-Stripe ngoku lucima izaphulelo ngokuchanekileyo ngaphandle kokubiza i-deleteDiscount API ephelelwe lixesha
- Lungiso: Ukubuyiselwa kwe-SSO kwiisayithi ezine-domain-mapped ngoku kunomda ukuthintela imijikelo yokubuyisela engapheliyo
- Lungiso: Ukhetho lwe-image picker lwe-setup wizard ngoku luhlaziya imodeli yedatha engaphantsi ngokuchanekileyo
- Lungiso: I-Site Exporter CLI ngoku igcina ukhetho oluchanekileyo lwesayithi yenethiwekhi engagqibekanga
- Kuphuculwe: Kususiwe i-wp-cli ebifakwe ngaphakathi kwipakethe ye-plugin, kuncitshiswa ubungakanani be-plugin

## Inguqulelo 2.11.0 — Ikhutshwe nge-2026-05-11 {#version-2110--released-on-2026-05-11}

- Entsha: Ukuthunyelwa ngaphandle kweesayithi ngoku kupakisha i-`index.php` eziqalisa ngokwayo ukuze i-ZIP ifakelwe kwi-host entsha ngaphandle kofakelo olwahlukileyo lwe-plugin.
- Entsha: Ukuthunyelwa ngaphandle kwenethiwekhi kuvumela abalawuli ukuba bathumele ngaphandle zonke ii-subsite kwindawo enye yogcino ukusuka kwiphepha lolawulo le-Site Export.
- Entsha: I-toggle yesicwangciso se-Allow Site Templates ngoku inyanzeliswa ngekhonkco le-fallback, ithintela ngokuchanekileyo ukufumaneka kweetemplate ngokwemida yesicwangciso.
- Entsha: Umhleli wefom ye-checkout uyazisa xa imveliso yongezwa ngaphandle kokuba kukho intsimi efunekayo emiseliweyo.
- Entsha: I-tab yezicwangciso ze-Import/Export ngoku ichaza ngokucacileyo umda wayo kwaye iqhagamshela ngqo kwisixhobo se-Site Export.

## Inguqulelo 2.10.0 — Ikhutshwe nge-2026-05-05 {#version-2100--released-on-2026-05-05}

- Entsha: I-wizard ekhokelwayo yokuseta ye-PayPal yokungenisa iziqinisekiso ngesandla kunye nesango leflegi ye-OAuth ukuze kube lula ukumiselwa kwe-gateway.
- Entsha: Iphaneli yomthengi yokutshintsha itemplate iyilwe ngokutsha ngekhadi letemplate yangoku, igridi eqhubekayo, kunye neqhosha elithi **Seta kwakhona itemplate yangoku**.
- Lungiso: Ukutshintsha itemplate akusabambisi i-UI xa i-AJAX isilela.
- Lungiso: Iimeko zeemvume zokutshintsha itemplate zikhuselwe ekufikeleleni okungagunyaziswanga.
- Lungiso: Iigalelo zokugqithisa isayithi ziqinisekisiwe phambi kokugcina.
- Lungiso: Isikhumbuzi sedilesi ye-billing ngoku siboniswa xa idilesi ingenanto.
- Lungiso: Izaziso zokuphelelwa lixesha kwe-PHP 8.1 null-to-string zisonjululwe.
- Lungiso: Ii-Currents zilayishwe ngokulibaziseka phambi kwe-init hook ukuthintela iingxaki zexesha.
- Lungiso: Indlela ye-SSO ehluziweyo iyahlonitshwa kuzo zonke iindlela zokungena.
- Lungiso: Iinketho zesazisi sesayithi esingenanto zigcinwa xa kugcinwa.

## Inguqulelo 2.9.0 — Ikhutshwe nge-2026-04-30 {#version-290--released-on-2026-04-30}

- Entsha: Ukuthunyelwa ngaphandle nokungenisa kwesayithi enye kongezwe phantsi kwe-**Izixhobo > Thumela ngaphandle & Ngenisa**.
- Lungiso: Iifayile ze-ZIP ezithunyelwe ngaphandle ngoku zinikezelwa nge-endpoint yokukhuphela eqinisekisiweyo.
- Lungiso: Umngcipheko we-SQL injection kunye neengxaki zemibuzo kwimibuzo yokuthumela ngaphandle/ukungenisa elindileyo zilungisiwe.
- Lungiso: Isayithi elindileyo ayipapashwa xa umlawuli eqinisekisa ngesandla i-imeyile yomthengi.
- Lungiso: Iirekhodi ze-pending_site ezishiyekileyo zicociwe xa ubulungu bungekho.
- Lungiso: I-padding ye-nav yezicwangciso kunye nokukhangela nge-anchor yokukhangela kulungisiwe.
- Lungiso: Iisayithi ezilindileyo ngoku ziboniswa kuqala kumbono we-All Sites.
- Lungiso: I-header ye-User-Agent yomboneleli wesikrini (mShots) yongezwe ukuthintela iimpazamo ze-403.
- Lungiso: Ukuxhomekeka okujikelezayo kweshedyuli ye-cron yokungenisa kusonjululwe.
- Lungiso: Ii-ID ze-tour zenziwe zafana zibe nee-underscore kwizitshixo zezicwangciso zomsebenzisi.
- Kuphuculwe: I-ZipArchive ngoku isetyenziswa endaweni ye-Alchemy/Zippy ukuze kube nokuhambelana okungcono.

## Inguqulelo 2.8.0 — Ikhutshwe nge-2026-04-29 {#version-280--released-on-2026-04-29}

- Entsha: I-toggle ye-Enable Jumper yongezwe kwi-UI yeesethingi ze-Other Options.
- Entsha: Ikholam ye-Status yongezwe kwitheyibhile yoluhlu lweefom ze-checkout.
- Entsha: I-loader yefayile ye-addon sunrise ye-custom MU-plugin sunrise extensions.
- Iphuculwe: Kususiwe isethingi ye-opt-in yokunika ingxelo yeempazamo kwiphepha leesethingi.
- Ulungiso: Ikhadi lesayithi lephepha le-thank-you — umfanekiso ngoku uvalelwe kakuhle kwaye amakhonkco anesitayile esichanekileyo.
- Ulungiso: Umboneleli we-screenshot utshintshiwe ukusuka ku-thum.io waya kwi-WordPress.com mShots.
- Ulungiso: i-Enable Registration kunye ne-Default Role ngoku ziseta amaxabiso angagqibekanga achanekileyo kufakelo olutsha.
- Ulungiso: `get_site_url()` ayisabuyisi nto ingenanto xa idomain iquka i-port.
- Ulungiso: Iifayile zemidiya ze-clone ngoku zikopishwa ngokuchanekileyo xa isethingi ye-`copy_media` ibingenanto.
- Ulungiso: I-cache ye-object yenziwe invalidated ngokuchanekileyo emva kokubhalwa kwe-sitemeta ye-network-activate.
- Ulungiso: Idomain yesiko inyuselwe ngokuzenzekelayo yaba yeyona iphambili ekuqinisekisweni kwe-DNS yeedomain ezinamacandelo ama-3.
- Ulungiso: Ubulungu obulindileyo burhoxisiwe xa intlawulo ephelelweyo icocwa.
- Ulungiso: Isikhangeli samandla e-password sibotshelelwe kwakhona emva kokuba i-prompt ye-inline login ivaliwe.
- Ulungiso: Ukulayishwa kwakhona kwephepha okungapheliyo kumisiwe kwiphepha le-thank-you xa isayithi sele yenziwe.
- Ulungiso: Ukhetho lobhaliso lwe-WP core lungqamanisiwe xa i-plugin ivuliwe naxa kugcinwa iisethingi.
- Ulungiso: I-guard yokuphelelwa lixesha ye-null yongezwe kwi-`calculate_expiration` ukuze ihambelane ne-PHP 8.4.
- Ulungiso: Ukubhalisa okuphindaphindiweyo kuthintelwe xa umthengi sele enobulungu obusebenzayo.
- Ulungiso: I-check ye-null yongezwe kwi-`date_expiration` kwi-checkout.
- Ulungiso: Ukubonelelwa kwesayithi kuqinisiwe — imida, ukuqikelelwa kobulungu, ukunyuswa kwedomain.
- Ulungiso: Ileyibhile yesimo sokujonga ngaphambi kofakelo ilungisiwe yaba yi-NOT Activated xa ujongo lusilela.
- Ulungiso: Idomain ye-checkout isetyenziswe kwii-URL zokuqinisekisa i-imeyile.
- Ulungiso: Ukungena ngokuzenzekelayo emva kwe-checkout xa kungekho ntsimi ye-password ikhoyo.
- Ulungiso: Ubulungu basimahla abusaphelelwa lixesha — buphathwa njengobobomi bonke.
- Ulungiso: Isango lokuqinisekisa i-imeyile libamba ukupapashwa kwesayithi de umthengi aqinisekise i-imeyile.
- Ulungiso: Isiseko sendlela ye-endpoint ye-SES v2 API kunye nendlela ye-identity zilungisiwe.
- Ulungiso: I-hook ye-`wu_inline_login_error` ikhutshwe kwi-block yokubamba ye-pre-submit.
