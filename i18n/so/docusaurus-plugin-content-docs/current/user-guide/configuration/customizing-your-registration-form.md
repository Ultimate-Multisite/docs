---
title: Wax-soo-gaarsiinta Foomka Diyaarintaada
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Wax-soo-qa barnaamistaaga

Si shabakadahaaga ay u muuqdaan gaar ah oo ka duwan dhammaan SaaS-yada kale ee ku dhisan platformka WordPress, Ultimate Multisite wuxuu kuu oggolaanayaa inaad si gaar ah ugu hagaajiso bogagga diiwaangelinta iyo galistaaga iyadoo la isticmaalayo astaanta **Checkout Forms** (Foomamka Lacag-bixinta).

In kasta oo ay yihiin hab fudud oo la badbaado ah oo aad ku isku dayi karto qaabab kala duwan marka aad isku dayayso inaad cusub macaamiil ka beddesho, haddana waxay ugu badan tahay in la isticmaalo si loo abuuro foomam diiwaangelin gaar ah. Maqaalkani wuxuu ujeedadaa inuu kuu muujiyo sida aad u samayn karto.

## Bogagga galista iyo diiwaangelinta:

Marka aad Ultimate Multisite ku rakibto, si toos ah ayay u abuureysaa bogagga galista iyo diiwaangelinta gaarka ah ee boggaaga ugu weyn. Waxaad beddeli kartaa bogagga asalka ah kuwaas oo kasta iyadoo aadan mar walba u socon **Ultimate Multisite > Settings > Login & Registration** boggaaga.

![Login and Registration settings page](/img/config/settings-general.png)

Halkan waa aragti buuxda ee bogga diiwaangelinta iyo galista:

![Login and Registration settings full page](/img/config/settings-login-registration-full.png)

Aan eegno mid kasta oo ka mid ah doorbada aad hagaajin karto bogga **Login & Registration**:

  * **Enable registration (Ficilista diiwaangelinta):** Tani doorbideed waxay furaysaa ama xirtaa diiwaangelinta shabakadahaaga. Haddii la xirto, macaamiishaadu ma heli doonaan fursad ay ku diiwaangeliyaan oo ay ku biiraan badeecadahaaga.

  * **Enable email verification (Ficilista xaqiijinta emailka):** Haddii doorbideeddu la furto, macaamiisha ku biiraya qorshe bilaash ah ama qorshe lacag-bixineed oo leh muddo isku day ah waxay helayaan email xaqiijin (verification) waxayna u baahan yihiin inay riixaan xiriirka xaqiijinta si bogga ay u noqdaan inay la shaqeeyaan.

* **Guryaha (Registration) Page-ka Macnaha Guud:** Tani waa bogga aasaasiga ah ee lagu diiwaangeliyo dadka cusub. Boggan wuxuu u baahan yahay in la soo bandhigo website-kaaga oo ay ku jirto foomka diiwaangelinta (oo sidoo kale loo yaqaan checkout form) - halkaas oo macaamiishaadu ay ku biirayaan badeecadahaaga. Waxaad samayn kartaa inta badan bogag diiwaangelin iyo foommo checkout ah, laakiin xusuusnow inaad ku dhigto shortcode-ka foomka checkout-ka bogga diiwaangelinta, haddii aadan, ma soo muuqan doona.

  * **Isticmaal Bog Diyaarinta (Login Page) Gaar ah:** Tani waxay kuu oggolaanaysaa inaad isticmaasho bog diiwaangelin gaar ah, oo ka duwan bogga asaasiga ah ee wp-login.php. Haddii aad furto fursadan, waxaad dooran kartaa bogga la isticmaali doono diiwaangelinta (Default login page) qaybta hoose (oo ku taal).

  * **Ka qabow URL-ka asaasiga ah ee diiwaangelinta (wp-login.php):** Haddii aad rabto inaad qariso URL-ka diiwaangelinta asaasiga ah, waxaad furtaa fursadan. Tani waxay caawisaa in la hor istaago weerarrada brute-force. Haddii fursadan la shidid, Ultimate Multisite wuxuu soo bandhigi doonaa qalad 404 marka isticmaaluhu isku dayo inuu helayo xiriirka asaasiga ah ee wp-login.php.

  * **Cilaysi soo bandhigga bogga si uu u noqdo mid dhab ah (Force synchronous site publication):** Marka macaamiil cusub ay ku biiraan badeecad oo ku jira shabakad, boggaga cusub ee la filayo waa in lagu beddelo mid shabakad dhab ah. Habka soo bandhigga ayaa dhaca iyadoo loo marayo Job Queue, si aan isdaba joog ahayn (asynchronously). Fur fursadan si aad u xoojiso in soo bandhiggu uu dhaco isla request-ka diiwaangelinta.

Hadda, aan aragno fursado kale oo weli muhiim ah arrimaha diiwaangelinta iyo login-ka. Waxay ku jiraan hoos ka dambeeya **Other options** ee bogga Login & registration:

  * **Doorka Aasaasiga ah (Default role):** Tani waa doorka ay macaamiishaadu leeyihiin website-kaadkii ka dib markii la dhammeeyo habka diiwaangelinta.

* **Fashilinta Jumper (Enable Jumper):** Waxay furaysaa fariinta Jumper ee qaybta admin-ka. Jumper wuxuu u oggolaanaya maamulayaasha inay si degdeg ah u guuraan shabakadaha Ultimate Multisite, shayga shabakadda (network objects), iyo meel kale oo la taageero iyadoon in ay ku wareega dhammaan menu-yada. Haddii aad doorbidayso inaad ka hor istaagto qalabka fudud ee maarayntaas si aad u qariso, waa furaysi.

  * **Ku dar isticmaalayaasha qaybta ugu weyn:** Furitaanka fursaddaasi waxay sidoo kale ku dari doontaa isticmaalaha shabakaddaada qaybta ugu weyn ka dib markii la dhammeeyo habka kaydinta (signup process). Haddii aad furto fursadan, waxaad arki doontaa dooro lagu dejiyo **default role**-ka (role-ka asalka ah) isticmaalayaashani ee website-kaaga hoos ka dambeeya.

  * **Furista laba ama badan oo xisaabaha:** U oggolaanshaha fursadan waxay u oggolaanaysaa isticmaalayaasha inay leeyihiin xisaabooyin ku jira meelal kala duwan oo shabakaddaada ah iyagoo isticmaalaya isku-dhafka email-ka. Haddii furitaankaasi uu furan yahay, macaamiishaadu ma heli doonaan fursad ay u abuuraan xisaab ku website kale oo ka socda shabkaddaada iyagoo isticmaalaya isku-dhafka email-ka ah.

Waxaa ku dhammaaday dhammaan doorbiyada la xiriira galitaanka (login) iyo kaydinta (registration) ee aad u beddesho! Ha iloobin inaad kaydsato dejimahaaga ka dib markaad dhammaystirto wax kasta oo aad hagaajisay.

## Isticmaalka foomamka kaydinta badan:

Ultimate Multisite 2.0 wuxuu bixiyaa editor-ka foomamka checkout (checkout form) kaas oo kuu oggolaanaya inaad samayso inta badan foomamo aad rabto, iyadoo la isticmaalayo qaybo kala duwan, alaabaha la bixiyo, iwm.

Labada bogga galitaanka (login page) iyo kaydinta (registration page) waxaa lagu dhex qoray shortcodes: **[wu_login_form]** ee bogga galitaanka iyo **[wu_checkout]** ee bogga kaydinta. Waxaad si dheeri ah u hagaajin kartaa bogga kaydinta adiga oo dhisa ama samaynaya foomamka checkout-ka (checkout forms).

Si aad u hesho astaantaas, tag menu-ga **Checkout Forms** ee dhinaca bidixda.

![Checkout Forms menu in sidebar](/img/config/checkout-forms-list.png)

Boggan, waxaad arki doontaa dhammaan foomamka checkout-ka (checkout forms) ee aad samaysay.

Haddii aad rabto inaad samayso mid cusub, si fudud guji **Add Checkout Form** oo ku taal sare-dhiga bogga.

Waxaad isku dooran kartaa mid ka mid ah saddexda dooro ee aad u bilaabato: single step (tallaabo hal), multi-step (tallaabo badan) ama blank (boos). Ka dib, riix si aad **Tallaabadda Editor-ka ugu tagto**.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

Sida kale, waxaad wax ka beddeli kartaa ama ku dubbar kartaa foomamka aad horey u haysato adigoo riixaya doorooyinka ho magaca. Halkaas ayaad markaad hesho doorooyin lagu nuqul karo shortcode-ka foomamka ama laga saari karo foomamkaas.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Haddii aad doorato single step ama multi-step, foomamka checkout wuxuu horey u buuxinayaa tallaabooyinka asaasiga ah si uu shaqeeyo. Ka dib, haddii aad rabto, waxaad ku dari kartaa tallaabooyin dheeraad ah.

### Wax ka beddelid Foomam Checkout:

Sida aan hore u sheegnay, waxaad samayn kartaa foomamyo checkout oo loo isticmaalo ujeedo kala duwan. Tusaale ahaan, halkan waxaan diiradda saari doonaa foomam diiwaangelinta (registration form).

Ka dib markaad tagto editor-ka foomamka checkout, siin magac foomamkaaga (oo loo isticmaali doono ujeeddo gudaha ah oo kaliya) iyo slug (oo loo isticmaalo in la abuuro shortcodes, tusaale ahaan).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Foomamku wuxuu ka kooban yahay tallaabooyin iyo meelo lagu qoro macluumaadka (fields). Waxaad ku dari kartaa tallaabo cusub adigoo riixaya **Add New Checkout Step**.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

Marka aad hesho tabka ugu horreeya ee modal window-ga, buuxiso macluumaadka tallaabada foomamkaaga. Siin ID, magac iyo sharaxaad. Waxay inta badan loo isticmaalaa gudaha.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step-content.png)

Markaas, qeex visibility (waxa uu muuqdo). Waxaad dooran kartaa inta u dhaxaysa **Always show** (mar kasta oo ay muuqato), **Only show for logged in users** (oo kaliya isticmaalaya kuwa galay/logged in) ama **Only show for guests** (oo kaliya isticmaalaya dadka aan galayn).

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

Uguun, hagaajinta qaabka (step style) waa waqtigaas. Kuwaas waa meelo aan la qorsayn.

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

Hadda, wuxuu yahay wakhtiga inaan ku darno meelal (fields) qaybta ugu horreysa. Si aad u samayso, kaliya guji **Add New Field** oo dooro nooca qaybta aad rabto inaad isticmaasho.

![Add New Field button](/img/config/checkout-form-step-with-fields.png)![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

Qayb kasta waxay leedahay faahfaahin kala duwan oo aad buuxin karto. Marka aan ku bilaabno, waxaan dooran doonaa qaybta **Username** (Magaca Isticmaalaha).

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

Waxaad ku dari kartaa inta aad u rabto meelal iyo qaybo. Si aad u soo bandhigidada alaabtaada si macaamiisha ay iibiyaan mid ka mid ah, isticmaal qaybta **Pricing Table** (Miisaaniyadda Qiimaha). Haddii aad rabto inaad u oggolaato macaamiisha inay dooradaan template-yo, ku dari qaybta **Template Selection**. Iloobkaas iyo kuwa kale.

_**Fiiro:** Haddii aad samayso alaab ka dib markaad samaysato qaabka checkout-kaaga, waxaad u baahan doontaa inaad alaabtaas ku darto qaybta Pricing Table. Haddii aadan ku dariin, alaabtu ma soo muuqan doonto macaamiishaada bogga diiwaangelinta._

_**Fiiro 2:** username, email, password, site title (Magaca Website-ka), site URL (Link-ka Website-ka), order summary (Soomaaadda Dalabka), payment (Lacagta Bixinta), iyo submit button (Badhanka Soo Gudbinta) waa qaybo waajib ah si loo abuuro qaabka checkout-ka._

Inta aad ka shaqaynayso qaabka checkout-kaaga, waxaad mar kasta isticmaali kartaa badhanka **Preview** (Soo Bandhigidda) si aad u aragto sida macaamiishu ay qaabkaas u arki doonaan. Waxaad sidoo kale isbeddeli kartaa in aad aragto sidii isticmaalay hay'n ama sidii martiqaad ah (visitor).

![Badhankaada qaybta la soo bandhigay ee foomka checkout editor-ka](/img/config/checkout-form-preview-button.png)![Foomka checkout-ka oo la soo bandhigay sida muuqaalka macmiilka ama isticmaalaha hore](/img/config/checkout-form-preview-modal.png)

Ugu dambayn, **Advanced Options** (Qalabka Sare) kaaga beddelaysid fariinta ee bogga **Thank You** (Mahadsanid), ku dar qoraallo lagu la socdo isbeddellada (conversions), ku dari CSS gaar ah oo aad u samaysato foomka checkout-kaaga ama aad si xaddidan uga dhigto wadamada cayiman.

![Advanced Options iyadoo la isticmaalayo bogga Thank You, la socodka isbeddellada, iyo CSS gaar ah](/img/config/checkout-form-advanced.png)

Waxaad sidoo kale si gacanta u fulin kartaa ama u xirfad (disable) foomka checkout-kaaga iyadoo aad dib u samaynayso qeybta (toggle) ee dhanka midig, ama aad si joogto ah uga saarto foomka.

![Toggle-ka socda iyo doorista ka saarista foomka checkout-ka](/img/config/checkout-form-active.png)

Ha ilaawin inaad kaydsato foomka checkout-kaaga!

![Badhanka Kaydinta Foomka Checkout-ka](/img/config/checkout-form-save.png)

Si aad u hesho shortcode-ka (shortcode) foomkaaga, guji **Generate Shortcode** (Abuur Shortcode) oo ku noqoto natiijada ee muuqata qaybta modal-ka ah.

![Modal-ka Abuurista Shortcode-ka isagoo la soo koobaya shortcode-ka lagu copyayo](/img/config/checkout-form-editor.png)

_**Fiiro Gaar Ah:** Waxaad u baahan doontaa inaad shortcode-kan ku dari lahayd bogga diiwaangelinta (registration page) si foomka checkout-kaaga uu ku lagu daro._

## Soo xirnaanta alaabaha iyo template-yada iyadoo la isticmaalayo URL parameters:

Haddii aad rabto inaad samayso jadwalka qiimaha gaarka ah ee alaabahaaga (customized pricing tables) oo aad hore u doorato foomka checkout-kaaga template ama alaabta ay macmiilku ka doorto jadwalka qiimaha ama bogga template-yadaaga, waxaad isticmaali kartaa URL parameters.

### **Haddii ay yihiin qorsheyaal (plans):**

Tag **Ultimate Multisite > Products > Select a plan**. Waxaad arki doontaa badhanka **Click to copy Shareable Link** (Guji si aad u nuquldo Xiriir la wadaagayo) oo ku yaalla sare ee bogga. Tani waa xiriirka aad isticmaali karto si aad hore u doorato qorsheyaalka gaarka ah ee foomka checkout-kaaga.

![Bogga alaabta isagoo leh badhanka xiriirka la wadaagayo](/img/config/products-list.png)

Fadlan xiriirka la wadaagga ah (shareable link) ma shaqeeyo haddii aanu ku qiyaasno **Plans** (Qorshayaasha). Ma isticmaali kartid xiriirrada la wadaagga ah si aad u bixiso badeecooyin ama adeegyo.

### Ku saabsan template-yada:

Haddii aad rabto inaad hore u doorato template-yada website-kaaga marka aad ku meelaysid foomka lacagta (checkout form), waxaad isticmaali kartaa parameter-ka ah: **?template_id=X** oo ku jira URL-ka bogga diiwaangelintaada. Waxaad u baahan tahay inaad badbaadiso "X" inta badan **lambarka ID-ga template-ka website-ka**. Si aad hesho lambarkaas, tag **Ultimate Multisite > Sites**.

Marka hore ku riix **Manage** (Maamul) oo hoos ka dambeeya template-ka website-ka ah ee aad rabto inaad isticmaasho. Waxaad arki doontid lambarka SITE ID. Si kastaba ha isticmaalin lambarkaas si loo dooro template-kan gaarka ah inuu hore u lahayd foomka lacagtaada. Tusaale ahaan, URL parameter-ka wuxuu noqonayaa **?template_id=2**.

![Sites list showing site template ID](/img/config/site-templates-list.png)

U malaynno in website-ka shirkadda aanu leenahay uu yahay [**www.mynetwork.com**](http://www.mynetwork.com) oo bogga diiwaangelintaada iyo foomka lacagta (checkout form) ay ku yaal qaybta **/register**. URL-ka oo dhan oo leh template-ka website-ka hore u dooranayaa wuxuu noqon doonaa sida [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Haddii aad rabto, waxaad hore u dooran kartaa labada badeecada iyo template-yada foomka lacagtaada. Waxa kaliya inaad qabato xiriirka la wadaagga ah ee plan-ka (plan) oo aad ku dhejiso parameter-ka template-ka dhammaadka. Wuxuu noqon doonaa sida [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
