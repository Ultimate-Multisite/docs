---
title: Come tsetConfiga il mappatura del dominio
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# Comefaffilixix l-mappatura domini (v2)

_**NOTA IMPORTANTI: Dan dan l-artiklu huwa referenziat għall Ultimate Multisite bizzjoni 2.x.**_

Il-funzjoni aktar qawwija ta networks premium hija l-possibbiltà li noffru lill-clientiet il-virtu tal is-sitji tagħhom domini top-level. Wara kollha, li jkun aktar professionali: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) jew [_**joesbikeshop.com**_](http://joesbikeshop.com)? Għandu staqba Ultimate Multisite, biex jgħodha f'mod natriċi, b'mod li ma għandekx użaw plugin tal-terzji.

## X'ja l-mappatura domini?

Bħall-definita fl-isem tagħha, il-mappatura domini hija l-possibbiltà li joffri Ultimate Multisite biex jista' jista' riguża għal richiesta ta dominu kustom u jmappa dik il-richiesta għas-sitji correspondenti f'network ma' den dominu speċifiku aggrad.

### Come tsetup l-mappatura domini fuq Network Ultimate Multisite tiegħek

Il-mappatura domini tfittxi xi impostazzjonijiet minnkontak tiegħek biex tiġi attivit. Fortunat, Ultimate Multisite jidironixxi l-aġġuri għalik biex tgħmel l-aġġuri diftra b'mod qasir.

Dimandwar l-Ultimate Multisite installazzjoni, il-wizard jidironixxi u jinstallaw awtomatik l-**sunrise.php** f'il-folder designate. **Il-wizard ma jippoġġiċixxek li tmur għal proċediment jkun sejn dan l-istep.**

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Dan jkun significa li waqt li il-wizard ta installazzjoni tal-Ultimate Multisite jgħidu Network tiegħek, tista' tibda tmppa d-dominu kustom immedjat.

Nota li l-mappatura domini fil-Ultimate Multisite mhix obbligatorja. Għandek opzjoni biex użaw il-funzjoni nativa ta WordPress Multisite għall-mappatura tal-domini jew jid-direzzjoni o soluzzjoni oħra għall-mappatura domini.

إذا احتجت لإلغى (disable) il-mapping tal-domain ta Ultimate Multisite biex tista tiddabih għal soluzzjonijiet oħra ta mapping, tista tfattiva din il-feature ta qudd f **Ultimate Multisite > Settings > Domain Mapping**.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

Mogħġa qabel dan opzjoni, tista tqesser (see) l-opzjoni **Force Admin Redirect** (Forza Ridetirad tal-Admin). Dan l-opzjoni tista tivverrja biex tista tqabbru se jkun il-customer tiegħek qabel jidħol għall-dashboard tiegħu sia fuq id-domain personal tiegħu u subdomain, jew biss fuq waħad minnhom.

Jekk tagħmel selezjoni fuq **Force redirect to mapped domain** (Forza ridetirad għal id-domain mappat), il-customer tiegħek jista' jidħol lill-dashboard tiegħu biss fuq id-domain personal tiegħu.

L-opzjoni **Force redirect to network domain** (Forza ridetirad għall-network domain) tagħmel l-oppożizzjoni – il-customer tiegħek jista' jidħol lill-dashboard tiegħu biss fuq subdomain, kien dan meta jipprova jidħol fuq id-domain personal tiegħu.

U l-opzjoni **Allow access to the admin by both mapped domain domain and network domain** (Permetti l-akses għall-admin minn id-domain mappat u id-network domain) tista' tagħmel li jista' jidħol lill-dashboard tiegħu sia fuq subdomain sia fuq id-domain personal tiegħu.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

Jumha żewġ modi biex tista' tmappa id-domain personal. Il-awli huwa biex tmappa is-domain name mill-network admin dashboard come super admin u l-sekond huwa per id-subsite admin dashboard ta qudd fuq l-account page.

Imma qabel ma tibda tmappa id-domain personal għal waħad minn is-subsites fil-network tiegħek, għandek biex tsegwu li **DNS settings** (ipparament) tal-domain name huma konfigurat b'mod appropriat.

###

### Biex tiassigurah li l-DNS settings tal-domain huma konfigurat b'mod appropriat

Biex l-mapping jidfreti, għandek laħħark tista' assgurati li id-domain li qed tipplanifiki tmur għall-IP address tal-Network tiegħek. Nota li għandek l-IP address tal-Network – l-IP address tal-domain fejn huwa installat Ultimate Multisite – u ma laqtiex l-IP address tal-custom domain li tista' tmura. Biex tixegħt l-IP address ta domain speċifiku, nġihna biex tmur għal [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), biex iż-umpar.

Biex tmura l-domain b'mod korrett, għandek tista' tiġi aġixat **A RECORD** fuq konfigurat l-DNS tiegħek li jidirettaw għall dan **IP address**. Il-managament tal-DNS jista' jkun ħafnaختلف bejn differenti domain registrars, iżda jkun għalna ħafna tutorial online li jgħażlu aktar xi ħaġa biex tixegħt " _Creating A Record on XXXX_ ", fejn XXXX huwa domain registrar tiegħek (esempi: " _Creating A Record on_ _GoDaddy_ ").

Jekk tiġi l-problema biex tgħmli dan jgħinek, **kontattja is-support tal-domain registrar tiegħek** u huma jistgħu jgħinu'k bejn dan parte.

Jekk plannat li tista' ttiġi permess għall-clientijiet biex jidawwarom id-domain tagħhom, huma għandhom jiduruw dan l-l-aġixxi dwar dan parte. Iżgħarhom għal sistema is-support tal-registrar tagħhom meta jgfiru biex ma jistgħux jidawwarom l-A Record.

### Mapping domain custom come Super Admin

Meta tiġi loggati bħala super admin fuq la-network tiegħek, tista' tiġi aġixat u tmeneġġja id-domain kustom b'mod fasil minn dejjem għandek fuq **Ultimate Multisite > Domains**.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Ta dakin, sotto' sta descritta l-pagina. Sulla cima, puoi clicċa sul pulsant **Add Domain** (Aggiungi Dominju), li jkunfittja una finestra modali li tista setti u filli l-informazzjoni tal-**custom domain name** (dominju kustom), il **subsite** li tista applikaw l-custom domain name għalih, u tiqرر jew tista setti mhux bħala **primary domain name** (dominju primari) jew le. (Nota: tista mappi **molti domjuni għal subsite waħdhom**).

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

Dopo li għammett l-informazzjoni kollha, tista clicċa fuq il-pulsant **Add Existing Domain** (Aggiungi Dominju Eżistenti) f'il-post ta' l-bottom.

Dan jikkontrolla l-proċess ta verifika u is-sħiħ tal-DNS (Domain Name System) tal-custom domain. Tista tqabbilha log f'il-post ta' l-bottom tal-pagina biex tqabbli il-proċess li qed jmur. Dan il-proċess tista jieħu p'quddiem minutu biex jkomplettu.

Ultimate Multisite v2.13.0 jikunfittja wkoll il-rekord tal-dominju interni awtomatikament meta jkun creat subsite ġdid fuq host li għandu jiġi trattat bħala dominju per siti (per-site domain). Jekk l-host huwa domjunu primari tal-network, jew waħd minn il-domjuni bbażi ta forma checkout condivisa konfigurat fuq il-field **Site URL**, il rekord tal-dominju mappat awtomatikament jkun skippat biex il-domjunu bbażi condivisu jkun disponibbli għal kull subsite li jista' jografeh.

Il-**Stage** (Fase) jew il-status jgħandu jkun minn **Checking DNS** (Jiddaqqa' l-DNS) għal **Ready** (Jistajejar) jekk kollha hija setti b'mod proprju.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Jekk tista clicċa fuq il-dominju, tista tqabbilha xi opzjonijiet interni. Lettrabbilna l-eżemplu:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Stagħa:** Dan hija l-stadja li jista' tkun dominet. Meta tiddir biex tiddir il-domain flimkien, probabbli tkun fuq l-stadja **Checking DNS**. Il-proċess jikkontrolla l-entries tal-DNS u jkonferma li huma korretti. Imbagħad, id-domain jitpost fuq l-stadja **Checking SSL**. Ultimate Multisite jikkontrolla se l-domain għandha SSL jew le, u jklassifika d-dominet tiegħek bħala **Ready** jew **Ready (without SSL)**.

**Site:** Il-subdomain li huwa assoċjat mad-domain din. Id-domain maġġappat juri l-kontenut tal-site speċifiku dan.

**Active:** Tista' tivitalizza jew taqfiel dan l-opzjoni biex tivitalizza jew taqfiel d-domain.

**Is Primary Domain?:** Il-klijenti tiegħek jistgħu jawdominet maġġappata aktar min waħda għal ogni site. Uża dan l-opzjoni biex tsegwu jekk dan huwa d-domain primari għas-site speċifiku.

**Is Secure?:** Kif hija, peress li Ultimate Multisite jikkontrolla se d-domain għandha sertifikat SSL jew le qabel ma jattivaha, tista' tagħmel selezjoni manuali biex tiġi mġappata d-domain b'SSL jew mingħajr SSL. Nota li jekk il-website ma għandu sertifikat SSL u ttorri biex tforza l-load tiegħu b'SSL, itkunsidra li jista' jkun għandek errori.

### Mapping custom domain name as Subsite user

Il-administratori tal-subsite jistgħu jġappaw domini kustom min dashboard tal-admin tal-subsite tagħhom.

Firma l-primiera, għandek bżonn tasegur li tivitalizza dan l-opzjoni ta qudd fi sħiħha nħallat sottoċentri **Domain mapping** settings. Applika l-screenshot sott' dan.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Tista' tsetta jew tiskonfigura dan l-opzjoni sħiħha sottoċentri **Plan** level jew opzjonijiet tal-prodott fuq **Ultimate Multisite > Products**.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

מתי כל אחת מהאפשרויות האלה מופעלת וממשק משתמש של תת-אתר (subsite user) מאושר למפות שמות דומיין מותאמים אישית, המשתמש של התת-אתר יראה metabox מתחת לעמוד **Account** בשם **Domains**.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

המשתמש יכול ללחוץ על כפתור **Add Domain** (הוסף דומיין), והוא יפתח חלון מודאל עם הוראות מסוימות.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

לאחר מכן, המשמש יכול ללחוץ על **Next Step** (שלב הבא) ולהמשיך להוסיף את שם הדומיין המותאם אישית. הוא יכול גם לבחור אם זה יהיה הדומיין הראשי או לא.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

לחיצה על **Add Domain** תתחיל את התהליך של אימות ושליפת מידע ה-DNS של הדומיין המותאם אישית.

### אודות סינכרון דומיינים (About Domain Syncing)

סינכרון דומיינים הוא תהליך שבו Ultimate Multisite מוסיף את שם הדומיין המותאם אישית לחשבון האירוח שלך כדומיין נוסף **כדי שהמפת דומיינים תעבוד**.

סינכרון דומיינים קורה אוטומטית אם לספק האירוח שלך יש אינטגרציה עם תכונת מפת הדומיינים של Ultimate Multisite. כרגע, ספקי אירוח אלו הם _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ וגם _Cpanel._

כאשר אינטגרציה עם ספק האירוח פעילה, Ultimate Multisite יכולה גם להטעין (enqueue) את המשימה של יצירת DNS או תת-דומיין בצד הספק עבור אתרים שנוצרו לאחרונה. אם אין אינטגרציה שמקשיבה למשימה הזו, העבודה ברקע (background job) מושמטת כדי להימנע מרישומים של קואי (queue entries) שלא יתבצעו. בדיקות DNS ו-SSL עבור דומיינים ממפים ממשיכות לרוץ דרך תהליך השלב הרגיל של הדומיין.

تحتاج لتفعّل هاد الإنتغراسيون (integration) فإعدادات Ultimate Multisite تحت تبويب **Integration**.

![Integrations tab in Ultimate Multisite settings showing hosting providers](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_لاحظ إنّ إذا كان مزود الاستضافة (hosting provider) متاعك ماشي من ضمن هدول المذكورين فالموقع، **تحتاج تعمل مزامنة يدوية أو تضيف اسم النطاق (domain name)** لحساب الاستضافة تبعك._
