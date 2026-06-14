---
title: "Ho Iketsetsa Foromo ea Ngoliso"
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---

# Ho Iketsetsa Foromo ea Ngoliso ea Hao

Ho etsa hore netweke ea hau e bonahale ka tsela e ikhethang har’a li-SaaS tse ngata tse hahiloeng ho WordPress, Ultimate Multisite e u lumella ho iketsetsa maqephe a ngoliso le login ka tšobotsi ea rona ea **Checkout Forms**.

Leha li le tsela e bonolo le e tenyetsehang ea ho leka mekhoa e fapaneng ea ho fetola baeti hore e be bareki ba bacha, tšobotsi ena e sebelisoa haholo-holo ho bopa liforomo tsa ngoliso tse ikhethileng. Sehlooho sena se hlalosa ka botlalo kamoo u ka se etsang kateng.

## Maqephe a Login le Ngoliso:

Hang ha Ultimate Multisite e kentsoe, e iketsetsa maqephe a login le ngoliso a ikhethileng ho site e kholo. U ka fetola maqephe ao a kamehla ka nako efe kapa efe ka ho ea ho **Ultimate Multisite > Settings > Login & Registration**.

![Leqephe la maemo a Login le Registration](/img/config/settings-general.png)

Mona ke pono e felletseng ea leqephe la litlhophiso tsa Login and Registration:

![Leqephe le felletseng la Login and Registration settings](/img/config/settings-login-registration-full.png)

A re hlahlobeng likhetho tsohle tseo u ka li ikamahanyang le tsona ho **Login & Registration**:

  * **Enable registration:** Kgetho ena e bulela kapa e koala ngoliso ho netweke ea hau. Ha e timiloe, bareki ba hao ba ke ke ba khona ho ingolisa le ho subscribe ho lihlahisoa tsa hau.

  * **Enable email verification:** Ha o kenya kgetho ena, bareki ba ngolisang plan e sa lefelloeng kapa plan e lefshuoang e nang le nako ea teko ba fumana lengolo-tsoibila la netefatso 'me ba tlameha ho tobetsa khokahano ea netefatso hore libaka tsa bona li bōptjoe.

  * **Default registration page:** Ena ke leqephe la kamehla bakeng sa ngoliso. Leqephe lena le lokela ho phatlalatsoa ho webosaete ea hau 'me le be le foromo ea ngoliso (e tsejoang hape e le checkout form) -- moo bareki ba tla subscribe ho lihlahisoa tsa hau. O ka bopa maqephe a mang a ngoliso le checkout forms kamoo u batlang kateng; hopola feela hore shortcode ea checkout form e lokela ho kenngoa leqepeng la ngoliso, ho seng joalo e ke ke ea hlaha.

  * **Use custom login page:** Kgetho ena e lumella ho sebelisa leqephe la login le iketsetsoang, ho fapana le leqephe le tloaelehileng la `wp-login.php`. Ha e buletsoe, o ka khetha leqephe leo `Default login page` e tla le sebelisa (ka tlase ho eona).

  * **Obfuscate the original login url (wp-login.php):** Ha o batla ho pata URL ea login ea pele, kenya kgetho ena. Sena se thusa ho fokotsa litlhaselo tsa brute-force. Ha e buletsoe, Ultimate Multisite e bontša phoso ea 404 ha mosebelisi a leka ho kena ka sehokelo sa pele sa `wp-login.php`.

  * **Force synchronous site publication:** Kamora hore moreki a subscribe ho sehlahisoa sa netweke, sebaka se secha se emetseng se lokela ho fetoloa hore e be sebaka sa netweke se sebetsang. Ts'ebetso ena e etsahala ka Job Queue, ka tsela e sa tobang. Bulela kgetho ena ho qobella hore publication e etsahale ka kopo e tšoanang le signup.

Joale, a re shebe dikgetho tse ling tse ntseng li amana le ts'ebetso ea login le ngoliso. Li ka tlase ho **Other options** leqepheng le tšoanang la Login & Registration:

  * **Default role:** Ena ke karolo eo bareki ba hao ba tla e fumana webosaeteng ea bona ka mor’a ho qeta ts'ebetso ea signup.

  * **Enable Jumper:** E kenya tsela e kgutshortane ea Jumper sebakeng sa admin. Jumper e lumella ba-admin ho tlolela ka potlako ho maqephe a Ultimate Multisite, lintho tsa netweke, le libaka tse ling tse tšehetsitsoeng ntle le ho sheba menyetla eohle ea menu. E tima sena haeba u khetha ho pata sesebelisoa sena sa ho tsamaea ka potlako.

  * **Add users to the main site as well:** Ha u kenya kgetho ena, mosebelisi o tla eketsoa hape ho webosaete ea mantlha ea netweke ka mor’a signup. Ha kgetho ena e buletsoe, khetho ea **default role** ea basebelisi bana webosaeteng ea hau e tla hlaha hang ka tlase.

  * **Enable multiple accounts:** Lumella basebelisi hore ba be le li-account liwebosaeteng tse fapaneng tsa netweke ka lengolo-tsoibila le le leng. Ha kgetho ena e tima, bareki ba hao ha ba khone ho bopa account e 'ngoe webosaeteng e 'ngoe ea netweke ka lengolo-tsoibila le tšoanang.

Ke tsona tsohle likarolo tse amanang le login le ngoliso tseo u ka li ikamahanyang! O seke oa lebala ho boloka liphetoho tsa hau ka mor'a ho li etsa.

## Ho Sebelisa liforomo tsa ngoliso tse ngata:

Ultimate Multisite 2.0 e fana ka **checkout form editor** e lumellang ho bopa liforomo tse ngata kamoo u batlang, ka masimo a fapaneng, lihlahisoa tse fanoang, jj.

Maqephe a login le ngoliso ka bobeli a kenngoa ka shortcodes: **[wu_login_form]** leqepheng la login le **[wu_checkout]** bakeng sa leqephe la ngoliso. O ka tsoela pele ho ikamahanya le leqephe la ngoliso ka ho bopa kapa ho aha checkout forms.

Ho kena tšobotsing ena, eya ho menu **Checkout Forms** ka lehlakoreng le letšehali.

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

Leqepheng lena o ka bona checkout forms tsohle tseo u seng u li na.

Haeba u batla ho bopa e ncha, tobetsa **Add Checkout Form** kaholimo ho leqephe.

U ka khetha e 'ngoe ea dikgetho tsena tsa ho qala: mohato o le mong, mohato o nang le likarolo tse ngata, kapa e se nang letho. Ebe o tobetsa **Go to the Editor**.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

Ka tsela e 'ngoe, u ka lokisa kapa oa etsisa liforomo tseo u seng u li na ka ho tobetsa dikgetho tse ka tlase ho lebitso la tsona. Moo hape ho na le likhetho tsa ho kopitsa shortcode ea foromo kapa ho e hlakola.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Haeba u khetha **single step** kapa **multi-step**, checkout form e tla se e tletse ka mehato ea mantlha eo e e hlokang hore e sebetse. Haeba ho hlokahala, o ka eketsa mehato e meng.

### Ho lokisa Checkout Form:

Joalokaha re boletse ka holimo, u ka bopa checkout forms bakeng sa mesebetsi e fapaneng. Mohlaleng ona re tla sebetsa ho foromo ea ngoliso.

Ka mor’a ho kena ho checkout form editor, fa foromo ea hau lebitso (le sebelisoang bakeng sa referense ea ka hare feela) le slug (e sebelisoang ho etsa shortcodes, ka mohlala).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Liforomo li entsoe ka mehato le masimo. U ka eketsa mohato o mocha ka ho tobetsa **Add New Checkout Step**.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

Tabo ea pele ea modal window e bontša litaba tsa mohato oa foromo ea hau. Fana ka ID, lebitso le tlhaloso. Lintho tsena li sebelisoa haholo-holo ka hare.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step-content.png)

Ka mor'a moo, beha ponahalo ea mohato. U ka khetha **Always show**, **Only show for logged in users**, kapa **Only show for guests**.

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

Qetellong, hlophisa setaele sa mohato. Likarolo tsena ke tsa boikhethelo.

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

Joale nako e fihlile ea ho kenya masimo mohato oa pele. Tobetsa feela **Add New Field** mme u khethe mofuta oa karolo eo u e batlang.

![Add New Field button](/img/config/checkout-form-step-with-fields.png)![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

Field e 'ngoe le e 'ngoe e na le diparamethara tse fapaneng tse lokelang ho tlatsoa. Bakeng sa mohato ona oa pele re tla khetha field ea **Username**.

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

U ka eketsa mehato le masimo a mangata kamoo u hlokang. Ho bonts'a lihlahisoa tsa hau hore bareki ba li khethe, sebelisa field ea **Pricing Table**. Haeba u batla ho lumella bareki ho khetha template, eketsa field ea **Template Selection**. Jalo-joalo.

_**Tlhokomeliso:** Haeba u bopa sehlahisoa kamora hore u bope checkout form, u lokela ho eketsa sehlahisoa karolong ea **Pricing table**. Haeba u sa se kenye, bareki ba hau ba ke ke ba se bona leqepheng la ngoliso._

_**Tlhokomeliso 2:** **username**, **email**, **password**, **site title**, **site URL**, **order summary**, **payment**, le **submit button** ke likarolo tse tlamang ha u etsa checkout form._

Ha o sebetsa ho checkout form ea hau, u ka sebelisa khokahano ea **Preview** ho bona ka nako efe kapa efe hore bareki ba tla e bona joang. U ka boela oa fetola pakeng tsa pono ea mosebelisi ea seng a ntse a le teng kapa ea moeti.

![Preview button on the checkout form editor](/img/config/checkout-form-preview-button.png)![Checkout form preview as visitor or existing user](/img/config/checkout-form-preview-modal.png)

Qetellong, ho **Advanced Options** u ka hlophisa molaetsa oa leqephe la **Thank You**, ua kenya snippets tsa ho lekanya conversions, ua kenya CSS e ikhethileng ho checkout form ea hau, kapa ua e lekanyetsa linaheng tse itseng.

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

U ka boela ua bulela kapa ua tima checkout form ka ho tobetsa toggle kholomong e ka ho le letona, kapa oa e hlakola ka ho felletseng.

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

Se lebale ho boloka checkout form ea hau!

![Save Checkout Form button](/img/config/checkout-form-save.png)

Ho fumana shortcode ea foromo ea hao, tobetsa **Generate Shortcode** ebe u kopitsa sephetho se bontšitsoeng modal window.

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**Tlhokomeliso:** O tla hloka ho kenya shortcode ena leqepheng la ngoliso hore checkout form ena e hlahe moo._

## Ho khetha lihlahisoa le templates esale pele ka URL parameters:

Haeba u batla ho bopa lihlopha tsa **pricing table** tsa lihlahisoa tsa hau le ho khetha esale pele sehlahisoa kapa template ho checkout form ka parameter e tsoang leqepheng la bareki, u ka sebelisa URL parameters bakeng sa sena.

### **Bakeng sa Litshebeletso tsa plan:**

Eya ho **Ultimate Multisite > Products > Select a plan**. U lokela ho bona konopo ea **Click to copy Shareable Link** ka holimo ho leqephe. Ena ke link eo u ka e sebelisang ho khetha plan ena esale pele ho checkout form.

![Product page with shareable link button](/img/config/products-list.png)

Hlokomela hore link ena e sebetsa feela bakeng sa **Plans**. Ha e sebelisoe bakeng sa lipakete kapa lits'ebeletso.

### Bakeng sa lihlooho tsa template:

Haeba u batla ho khetha li-template tsa sebaka esale pele ho checkout form, u ka sebelisa parameter ena: **?template_id=X** ho URL ea leqephe la ngoliso. `X` e lokela ho nkeloa sebaka ke **nomoro ea site template ID**. Ho fumana nomoro ena, eya ho **Ultimate Multisite > Sites**.

Tobetsa **Manage** ka tlase ho template eo u e batlang. O tla bona nomoro ea **SITE ID**. Sebelisa nomoro ena bakeng sa template eo u e batlang hore e khethoe ho checkout form. Mohlala mona URL parameter e ka ba **?template_id=2**.

![Sites list showing site template ID](/img/config/site-templates-list.png)

Ha re nkeng hore webosaete ea rona ea netweke ke [**www.mynetwork.com**](http://www.mynetwork.com), 'me leqephe la ngoliso le nang le checkout form le le ho **/register**. URL eohle e nang le template ena e khethiloeng esale pele e tla shebahala joalo ka [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

'Me haeba u batla, u ka khetha ka nako e le 'ngoe lihlahisoa le templates ho checkout form ea hau. Seo u lokelang ho se etsa feela ke ho kopitsa link ea ho arolelana plan le ho kenya parameter ea template qetellong. Sena se tla shebahala joalo ka [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
