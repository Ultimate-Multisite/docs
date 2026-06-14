---
title: Għmli l-primuna tiegħek prodotta ta sħubba
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Kemmis l-Prodotto Abonament Ewlewwel (v2)

_**NOTA IMPORTANTI: Dan questa l-artikolu hija għall-utenti b'versjoni 2.x ta Ultimate Multisite. Jekk qed tista' użaw b'versjoni 1.x,**_ **_ħtieġ tkun qed użaw dan l-artikolu**_**.

Biex tibda tgħmli l-network tiegħek jifmu u tibda tiffaċċja is-servizzi tagħdak għall-utenti potenzjali, għandek opzioni abonament differenti. Come tgħmli dan il-prodotti? Mamm huma l-tipijiet ta prodotti li tista' toffri? F'dan l-artikolu, nġġib kollha l-informazzjoni li għandek تعرف dwar il-prodotti.

## Tip tal-Prodotto

Ma' Ultimate Multisite tista' toffri żewġ kategories ta prodotti lil kliemiet tagħhom: **plans** u **add-ons (Order Bump)**. L-add-ons tista' jitqsegwuna f 'tipijiet': **packages** u **services**. Nnaqsbux il-differenzi u l-partikolaritajiet tagħhom fil-qed.

  * **Plans**: Il-prodott fundamentali ta Ultimate Multisite. Il-kliemiet tiegħek tista' tkun membership biss jekk hija magħtieġ b'plan. Il-plan jipprovvidi lil kliemiet tiegħek waħda jew aktar siti (jistgħu jkun għalqa fuq konfigurat għall-plan tiegħek) mal-limitazzjonijiet li tsettti fuq pajjiċina ta editing tal-prodott tiegħek.

  * **Packages**: Add-ons li jaffettwaw direttament fuq l-funzjonalità tal-plans ta Ultimate Multisite. Hum jgħaddlu limitazzjonijiet jew jiddeħlu resurssi, plugins jew themes ġodda għall-plan oriġinali li il-kliemiet tiegħek qed tista'. Biex t-tqiegħed, plan bħal waħda biex jippoġġi 1,000 żiżżuri bil-misfaħħ, u tista' toffri package li jammilha dan l-num għal 10,000.

  * **Services**: Add-ons li ma jaffettwawx l-funzjonalità ta Ultimate Multisite. Hum it-taskijiet li tista' tgħmli lil kliemiet tiegħek għal għaddar mill-plan li qed tista'. Biex t-tqiegħed, il-customer tiegħek tista' jixgħel plan li jippoġġi sito waħda u jippagja għal servizio ekstra li jiddisegna dan is-sito.

## Iżgura tal-Prodotti

للكثيرين، يمكن مقارنة علامة التبويب **Products** في Ultimate Multisite **(Ultimate Multisite > Products)** مع الخطط (plans) في بيئة استضافة تقليدية.

داخل Ultimate Multisite، تحدد علامة التبويب Products البنية والقيود المطبقة على منتج أو خدمة محددة. تمتد هذه البنى لتشمل وصف المنتج أو الخدمة، والسعر، والضرائب، والأذونات.

سيوجهك هذا القسم لفهم حجر الزاوية الأساسي في Ultimate Multisite.

![Products list page](/img/config/products-list.png)

## إضافة منتجات (Adding Products)

سواء كان الخطة أو الحزمة أو الخدمة هي نقطة البداية لتحديد عنصر جديد، فذلك يتم عبر **Ultimate Multisite > Products > Add Product**.

![Add Product button](/img/config/product-add-button.png)

تحتوي الواجهة على قسمين رئيسيين. على اليسار توجد عدة علامات تبويب تساعد في تعريف المنتج، وعلى اليمين توجد بعض الأقسام لتحديد السعر الأساسي للمنتج، وحالته النشطة، وصورة المنتج.

![Product edit page overview](/img/config/product-edit-full.png)

### الوصف (Description)

يمكن تحديد معلومات المنتج الأساسية عن طريق إدخال اسم المنتج ووصفه. يتم عرض هذه المعرفات في أي مكان يتطلب معلومات المنتج مثل اختيار الخطة والتسعير، والفواتير، والترقيات، وما إلى ذلك.

![Product description section](/img/config/product-description.png)

### نوع التسعير (Pricing Type)

على الجانب الأيمن من الواجهة، يمكن تحديد التسعير الأساسي.

![Pricing and save section](/img/config/product-pricing-save.png)

يدعم Ultimate Multisite ثلاثة أنواع مختلفة من التسعير. الخيار **paid** يطلب من مسؤول الشبكة معلومات بخصوص سعر المنتج وتكرار الفوترة (billing frequency).

### التسعير (Pricing)

مكون السعر يحدد سعر المنتج الأساسي وفترة الفوترة.

![Pricing and save section](/img/config/product-pricing-save.png)

quddi, l-eżempju prezzu ta $29.99 ma impostazzjoni ta 1 msemmija, bilabbil biex jbillu $29.99 kull msemmija. Fl-mod blaw, prezz ta $89.97 ma jgħanduq qed 3 msemmijiet, bilabbil dak l-ammont kada kwartal.

### Cicli tal-Bill

Il-sezzjoni tal-Cicli tal-Bill tespella l-frequenza tal-intervall tal-bill menħtieġa u tiffaħħam b'mod ġeneral fil-kontrakti jew termini fixi.

![Pricing and save section](/img/config/product-pricing-save.png)

Bħal it-tostament, prezz ta prodott ta $29.99 ma jgħanduq qed msemmija ta 1 msemmija u 12 cicli tal-bill jbillu $29.99 kull msemmija għall-prodott għal sena li twil. B'mod ākrob, dan l-setting jista' jiffaċċja terminu ta prezz fix ta $29.99 kull msemmija għal 12 msemmijiet u poi jinterru l-bill.

### Perjodu Trial

Attivazzjoni tal-toggle tal-offerta trial tista' tiddifdef il-perjodu trial għall-prodott minn l-administrator ta' la rete.

![Pricing and save section](/img/config/product-pricing-save.png)

Intempu perjodu trial, il-klijenti huma aġġuttati biex jgħanduq l-prodott u ma jbillu għalhekk fin ma jintlaq il-perjodu trial.

### Fee ta Setup

Tista' tqappli skontu ta setup għall-plan tiegħek.

![Pricing and save section](/img/config/product-pricing-save.png)

Dan jkun significa li il-klijent tiegħek jbillu importanta quantità fuq l-primier bill (għadd il-prezz tal-plan) li tiffaċċja skontu li definitt għalnu f'dinja.

### Attiv
Il-toggle ta 'Active' definix kif jkun disponibbli l-prodott għall-klijenti biex jidħlu għall-new sign-up.

![Active toggle](/img/config/product-active.png)

אם għandhom kliemti esistenti fuq dan il-plan, impostare il toggle b'stato di disabilitat jgħin effettivamente li tixgħel il-plan u tiġi eliminati minn is-sigħba futuri. **Il-kliemti esistenti fuq il-plan jinettilju wkoll** fin ma jiġu trassiti għal plan ġdid jew jiġu eliminati mill-plan.

### Immagine tal-Produk

Il-button **Upload Image** jippermetta lill-administrator ta la rete u jista' jsegwja o jgħallma immaġini tal-produku minn il-media library.

![Product image section](/img/config/product-image.png)

### Elimina

Il-button **Delete Product** jelimina il-produku mill-sistema. Juri se l-produku jkun pubbliku.

![Delete product section](/img/config/product-delete.png)

Bħal li fil-eliminazzjonijiet oħra, il-produku ma jiġix posa f'stato tal-trash. Għalhe, min jiddeletx l-azione hija irreversibbli waqt li tidddelet.

### Opzjonijiet tal-Produk

Wara li jkun definit informazzjoni b'livell bbażi tal-produku, il-opzjonijiet tal-produku jgħinu lill-administrator ta la rete biex jiddefini aktar atributi speċifi tal-produku.

#### Generali

Il-tab **General** jiddefinisxi l-atributi generali tal-produku li ma jkunx applikabbli għal xogħol o tab speċifi oħra tal-produku.

![General tab](/img/config/product-general-tab.png)

Il-**product slug**, li huwa ssewqa b'mod iżjed, jiddefinisxi il-slug biex il-produku jitidentifikaw fil-URL u oħra aree tal-Ultimate Multisite.

Ultimate Multisite jirriżwiva diversi tipi ta produku: Plan, Package, u Service. Il-tabs **Product Options** jiġu aġġustati dinamisament b'mod li jkun definit il-tip tal-produku.

Il-**Customer Role** jiddefinisxi l-ruolo li jkun attwalizzati għall-kliemti meta is-sajt jitcrea. B'mod tipiku għal magħrupin ta amministratori ta la rete, dan se jkollu il-default tal-Ultimate Multisite jew Administrator. Il-ruolo default tal-Ultimate Multisite jista' jiġi impostat f'**Ultimate Multisite > Settings > Login & Registration**.

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Upgrade & Downgrades

Dan tab huwa li definixxi l-trajecti ta upgrade u downgrade li jiduni lil customer f'tier speċifiku tiegħu.

Biex tifhem din il-konċett, ispetta un eżempju kien installazzjoni Ultimate Multisite nischja (niche) li fornisce soluzzjonijiet ta l-apprendiment (learning management solutions) lil isseħħi tagħhom. Biex tispjega dan t-tli, jiddefinisi dan t-tli ttal-planji (Basic, Plus, u Premium) u plugin speċifiku giċċettiv għal kada plan (qellir fil-post ta' l-istruzzjoni kif t-tġib aktiva il-plugin).

Jekk installazzjoni Ultimate Multisite tfattaha wkoll siti omer u siti eCommerce, dan t-planji jidprogrammu bżonn plugin differenti li jkunu giċċettiv.

F'dan l-konċett, ma jkun it-tajjeb u problemattiku li nħalli lil isseħħi ta eLearning jmur għal planji eCommerce, perchè dan t-planji, il-prezzijiet u l-limitazzjonijiet tal-meħtieġa ma jistgħu jkunu adatti.

Għal dak iż-żmien, biex nħasso l-traject ta' l-customer u nimpedixxi inċidenti, l-administrator ta' la rete jista' jiddefinixxi plan group u f'dawk il-group ispeċifika dan t-planji li l-customer jistax jmur għalihom.

![Up and Downgrades tab](/img/config/product-upgrades.png)

Biex tiddifini plan group, ispeċifika dan t-planji kompatibbli f'lista **plan group**. Il-**product order** huwa li jiddetermina kif il-planji jistgħu jiġu ordinati u tispjega mill-aktar baxxi għall-aħjar.

Ultimate Multisite jinkludi wkoll il-feature ta **order bump**, li f'postappropriat, prodotti u servizzi aggiemiet (add-on) jistgħu jiġu aḍiddat lil planji. Dan jofferta lil isseħħi bħala item aggiemiet li jistgħu jiġu aḍiddat lil planji fl-checkout jew klabbiex għall upgrade.

#### Price Variations

Itiġib il varijaturi tal-preċu jagħti lil amministratur ta' reġistrazzjoni l-possibilità ta li jipprogramma livelli preċużi alternativi dwar id-durata. Dan is-setting jippassiva l-possibbiltà li jkun offriti periodi tal-fatturament monthly, quarterly, annuali, jew qualsess waħda oħra għall-istess prodotto. Biex t-tħalli, tista' tgħatti prodot tal-preċu $29.99/mleju dwar l-mleju b'opzjoni annwali discounta dwar $249.99/annu.

![Price Variations tab](/img/config/product-price-variations-tab.png)

Biex tistabbilixxi varijaturi tal-preċu, għatti l-toggle **Enable Price Variations** b'attiva u għoss il-botton **Add new Price Variation**.

![Product price variations](/img/config/product-price-variations.png)

Biex tidħol varijatura, setta l-durata, periodu u preċu tal-varijatura. Possibbiltà aktar ta varijaturi tista' tidħol biex tgħatti l-botton għal-mela.

Biex t-tħalli, jekk il-preċu base tal-prodot tiegħek huwa $29.99 per mleju, tista' t-addissi:

  * **3 Mesi** b'79.99 (discounta kbira dwar l-mleju)
  * **1 Anni** b'249.99 (discounta signifikanti għall-immanessament annwali)

:::tip Displaying a Billing Period Toggle on the Frontend

Il-varijaturi tal-preċu mhux jgħaddaw toggle jew switch fuq il-checkout tal-frontend. Biex tista' t-ħalli bejn periodi tal-fatturament (meta l-mleju / annwali), għandek li t-addissi l-field **Period Selection** għall-form tal-checkout tiegħek. Applika [Checkout Forms: Adding a Period Selection Toggle](checkout-forms#adding-a-period-selection-toggle) biex tiġi direttiva step-by-step.
:::

#### Taxijiet

Il-tab **Taxes** jidher u jittienha mal-setting tal-taxijiet definit f'**Ultimate Multisite > Settings > Taxes** u, bejn ħaġa aktar, il-tax rates li huma definiti. Biex t-attiva l-taxijiet u t-definixxi tax-rates applikabbli, jekk jogħġbok għandu tipprovdi mill-dokumentazzjoni f **Ultimate Multisite: Settings**.

![Taxes tab](/img/config/product-taxes.png)

בי דוגמה קודמת, הגדרנו שיעור מס מקומי של 7.25% שחל על לקוחות בקליפורניה (ארצות הברית).

לאחר שהשיעור המס הוגדר ב-**Ultimate Multisite > Settings > Manage Tax Rates**, ניתן לבחור אותו ברמת המוצר.

![Taxes tab](/img/config/product-taxes.png)

כדי לציין שמוצר הוא מוצר חייב במס, הגדירו את המתג **Is Taxable** להיות פעיל ובחרו את שיעור המס הרלוונטי מתוך התפריט הנפתח של קטגוריית המס (Tax Category).

#### תבניות אתר (Site Templates)

במהותן, תבניות אתר הן אתרי WordPress שלמים שמועתקים לאתר של הלקוח בתחילת המנוי שלו.

![Site Templates tab](/img/config/product-site-templates.png)

מנהל הרשת יוצר ומגדיר את אתר התבנית כאתר WordPress רגיל עם תבניות (themes), פלאגינים ותוכן מופעלים ומותאמים. אתר התבנית מועתק בדיוק ללקוח.

טאב זה מאפשר למנהל הרשת לציין את ההתנהגות של תבניות אתר בעת מנוי חדש. כדי להשתמש בתבניות אתר עבור תוכנית זו, הגדירו את המתג **Allow Site Templates** להיות במצב פעיל (active).

כאשר **Allow Site Templates** מושבת, לקוחות בתוכנית לא יוכלו לבחור תבניות גם אם טופס קופה, קישור שניתן לשיתוף או פרמטר URL היו מאפשרים את התבניות. Ultimate Multisite כעת מחייב מגבלה זו באמצעות שרשרת גיבוי (fallback chain) דרך נקודות הכניסה הזמינות: הגדרות התוכנית נבדקות ראשונות, לאחר מכן הגדרות תבנית טופס הקופה, ואז התבניות שנבחרו מראש או שסופקו באמצעות URL. זה שומר על מגבלות התוכנית עקבי וממנע מהתבניות להופיע עבור מוצרים שלא אמורים להציע אותן.

**site template selection mode** מגדיר את ההתנהגות של תבניות אתר במהלך תהליך המנוי.

L- **D** **Definizzazzjoni** (Default) j segue l-istepji fil-form tal checkout. Jekk l-administrator tal-network għandu definita step tal-selezzjoni ta template f'proċess tal-checkout u il-step huwa definit b templates, dan is-setting jħalli l-direttivi estabbiliti fil-step tal-checkout.

Bisspeċifika **A** **Assign Site Template** (Issegna Template Tal-Site) jforza l-selezzjoni tal-template speċifiku. Għal meta dan, kull step ta selezzjoni template f'proċess tal-checkout jiġi eliminati.

F'aħħar, **C** **Choose Available Site Templates** (Iżżir Template Tal-Site Madjoj) jgħadd il-templates definiti fil-step tal-checkout b templates selejtu f'dan l-setting. Jidher li jista' definita template pre-selejtu biex tgħin il-customer fl-selezzjoni.

F'aħħar, jekk l-administrator tal-network jittieni li selezzjoni template tipprovdi fil-stepijiet tal-checkout, is-setting ta '_default_' huwa suffiċiente. Alternattiv biex elimini u tikkli l-selezzjoni tal-template u tgħallis il-selezzjoni għall-settings tal-plan, l-opzioni '_assign new template_' jew '_choose available site templates_' jista' jkunu merita.

#### Sites (Siti)

L-tab **Sites** (Siti) hija parte minn funksjonalità limitazzjoni ta Ultimate Multisite.

![Sites tab](/img/config/product-sites.png)

Dan is-setting jiddefinisxi l-num massimu tal-siti li l-customer jistax jieħu fil-membership tiegħu.

Biex tivveglah il-limitazzjoni, setta l-toggle **limit sites** (limit siti) għall-stato attiv tiegħu u speċifika l-num massimu tal-siti fil-field **site allowance** (permess siti).

#### Visits (Visite)

L-tab **Visits** (Visite) hija parte oħra minn sistema limitazzjoni ta Ultimate Multisite. Dan is-setting jippermettix l-kontabbju u il-throttling tal-unique visitors għas-siti tal-customer.

![Visits tab](/img/config/product-visits.png)

Minħabba perspektiva marketing, l-administratori tal-network jistgħu jutilizzaw dan issettimg bħala mod biex jżguraw il-klijenti jipprovvdu għal upgrade tal-plan tagħhom waqt li jintilqu l-limit. Dan issettimg jistabbilixxi wkoll l'administrator tal-network biex jipprevjeni u jippreżaw il-traffiku eccessiv biex jippreserva resorsi tal-sistema.

Biex tutilizzaw dan feature, setzu l-toggle **limit unique visits** għall-stato attivi u speċifika l-num massimu ta visitori uniku fil-field **unique visits quota**.

Mda jintilqu dan limit, Ultimate Multisite se tiffid isserva l-site tal-klijent invece ta li tispariċi missaġġ li jgħid li l-limit huwa superat.

#### Users

Il-limitazzjonijiet tal-Ultimate Multisite 'Users' jagħmlu lill-administrator tal-network biex japplika limitazzjonijiet fuq il-num ta utenti li jistgħu jiġu creati u giċċifikati għal ruoli.

![Users tab](/img/config/product-users.png)

Biex tivveglio l-feature tal-limitazzjoni, setzu l-toggle **limit user** għall-stato attivi biex tiġi ssegwija jolt fuq il-destra.

Mentre li jkun għal kada ruolo li jgħandu limitat, setzu l-toggle qabel tiegħu għall-stato attivi u definix il-limit massimu f'il-field appropriat.

#### Post Types

Il-tab **Post Types** jagħmlu lill-administrator tal-network biex japplika limitazzjonijiet granulari fuq l-array estensiv ta post types f WordPress.

![Post Types tab](/img/config/product-post-types.png)

Minħabba konstruzzjoni WordPress, posts u post types huma komponent signifikanti fil-funzjonalità primarja tiegħu, u għoli sistema limitazzjonijiet tal-Ultimate Multisite iddisa biex tgħin lill-administrator tal-network biex jistabbilixxi u jippreżaw il-limitazzjonijiet.

Biex tivveglio dan subsystem tal-limitazzjoni, setzu l-toggle **limit post types** għall-stato attivi biex tiġi ssegwija jolt fuq il-destra.

הבא, עבור כל סוג פוסט שברצונך להגביל, הפעל אותו על ידי גרירה ימינה והגדרת המקסימום העליון בשדה המתאים.

#### מרחב דיסק (Disk Space)

ללשונית **Disk Space** מאפשרים למנהלי רשת להגביל את המרחב שמשתמשים צורכים.

![Disk Space tab](/img/config/product-disk-space.png)

בדרך כלל ב-WordPress multisite הקבצים הליבה משותפים לכל האתרים, והתיקיות האישיות שנוצרו לקבצי מדיה והעלאות הן אלו שעליהן חלים הגדרות ומגבלות אלו.

כדי לאפשר את הגבלת השימוש בדיסק, הפעל את המתג **limit disk size per site** למצב פעיל על ידי גרירתו ימינה.

לאחר מכן, ציין את המקסימום העליון במגה-בייטים בשדה **disk space allowance**.

#### דומיין מותאם אישית (Custom Domain)

על ידי הפעלת אפשרות זו, תוכל לאפשר דומיינים מותאמים אישית רק עבור תוכנית זו.

![Custom Domains tab](/img/config/product-custom-domains.png)

#### תבניות (Themes)

ללשונית **Themes** בתוך אפשרויות המוצר, מאפשר למנהל הרשת להפוך את התבניות לזמינות עבור לקוחות לבחירה ולכפות באופן אופציונלי את מצב התבנית.

![Themes tab](/img/config/product-themes.png)

_**הערה: כדי שתוכלו להיות זמינים עבור הלקוחות, יש להפעיל אותם ברשת על ידי מנהל הרשת.**_

![Network themes page](/img/config/product-themes-network-enabled.png)

אפשרות **visibility** מגדירה אם תבנית זו נראית ללקוח כאשר הוא צופה בלשונית **Appearance > Themes** באתר שלו. הגדרת אפשרות זו ל-**Hidden** מסירה את התבנית מהמראה ולכן מגבילה את היכולת לבחור ולהפעיל אותה.

![Themes tab](/img/config/product-themes.png)

בחירת **behavior** מאפשר למנהל הרשת להגדיר את מצב התבנית עם יצירת האתר של הלקוח.

F'stato **A** **Disponibbli**, il tema è disponibile per l'attivazione autonoma da parte tal-neħħu. Kontra, lo stato **Mani Disponibbli** elimina dal neħħu l-possibilità ta attivaw il tema. L-terz, l-opzione **Forza Attiva** tqas il selezzjoni u l-attivazzjoni tal-tema, sabiex jista' definita come default fl-istruttura tal-sito meta l-kunsillta.

#### Plugins

F'modu mhux differenti mill-tab tal-Themes, Ultimate Multisite jippermettix lil l-administrator ta la rete definix l-visibilità tal-plugins għall il-kunsillti u l-stato tagħhom meta jitcrea un sito جديد.

![Plugins tab](/img/config/product-plugins.png)

Il-menu **visibility** (visibilità) jippermettix li il-plugin jkun visibbli jew mhux għall il-kunsillta meta jmur biex jure fuq is-sito tagħhom minn l-opzione menu tal-Plugins.

L-administrator ta la rete jista' tqassem aktar l-comportament tal-plugins bikriw l-opzioni fil-drop-down tal-behavior (comportament).

![Plugins tab](/img/config/product-plugins.png)

Il-selezzjoni **Default** tħtajj l-stato tal-plugin definitt fl-template tal-sito li soċċellta minn il-kunsillta. Għal meta plugins attivati f'dawk template se jgħandu biex jiġu attivati meta jitkopjja (clone) dawk template għas-sito tal-kunsillta, jinqasso l-attivazzjoni tagħhom.

L-opzione **Force Activate** tqas il-plugin f'stato attivo meta jitcrea s-sito u kontra, l-opzione **Force Inactivate** taqassil l-plugin meta jitcrea s-sito. F'kull is-situazzjoni, l-stato tal-plugin jista' jiġi modifikat manualment minn il-kunsillta minn menu tal-Plugins tal-WordPress tagħhom.

Il-setting **Force Activate & Lock** jopera bmodli, iżda impedisce li attwali tal-plugin minn il utente. Għalhe, l-setting ta Force Activate and Lock jforza il-plugin għall-stato attivo u impedix li l-utenti jgħattiattivawlo. Flis-istess ħaġa, l-setting **Force Inactivate & Lock** jforza l-plugin għall-stato inattivo u impedix mill-utenti jgħattiattivawlo.

Il-administrator tal-network jista' isir b'ħsieb li jħtieġu ssegwix il-setting Force Activate & Lock u Force Inactivate & Lock fitta mal-template tal-site bħala plugin, u l-stato tal-plugin f-fitta tiddarba minn dan is-setting jekk jiġi selezzjonat.

#### Reset Limitations

L-tab **Reset Limitations** tiffaċċja (resetta) kull limitazzjoni kustom definita fuq il-prodott. Għal resetta tal-limitazzjonijiet, għalfej l-botton **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

Għal konferma tal-azione, ssegwi (slide) il toggle **confirm reset** għall-stato attivo fuq il-destra u għattiċċja l-botton **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

## Edit, Duplicate, or Delete Product

Il-prodotti esistenti jistgħu jiġu emendati (edit), duplikat (duplicate) jew mal-delettu minn navigazzjoni għal **Ultimate Multisite > Products** u hover fuq ism il-prodott esistenti.

![Product hover actions](/img/config/product-hover-actions.png)
