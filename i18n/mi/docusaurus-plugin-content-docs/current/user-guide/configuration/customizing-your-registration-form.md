---
title: Whakawātea i tō fōme o te whakatakino
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Whakamahi i tō Tātai Whakawhanaungatanga (Registration Form)

Kia tino whakamua ahau i te wāhi o tō whānau i te ao, he pēnei i ngā SaaS (Software as a Service) katoa e ana i WordPress, ka taea e Ultimate Multisite i koe te whakamaoritanga i ngā manawa whakaahua (registration) me ngā manawa whakauru (login pages) mā te whakamahi i te āhuatanga **Checkout Forms** o tātou.

Mā te mea he tino ātaahua ana me tino whai tikanga, he pēnei i te whakamahinga mō te whakatū whakamārama i āhua hoki katoa i roto i te whakawhanaungatanga hou, he tino whakamahia ana ki te whakatō manawa whakaahua (registration forms) mā te whakamahi i āhuatanga mō te whai tikanga. Ko tēnei kōrero he pēnei i te whakaatu atu ki a koe i te mea i ka taea e koe te whakamahi i te āhuatanga o te whakaaro ahau.

## Ngā manawa whakauru me ngā manawa whakaahua (Login and registration pages):

I muri i te whakatū Ultimate Multisite, ka tino whakamahia ana ia i te whakamahi i ngā manawa whakauru me ngā manawa whakaahua mō tō wāhi nui. Ko taea ai koe te whakawhiti i ngā manawa pēnei i teinei e i runga i tō **Ultimate Multisite > Settings > Login & Registration** page.

![Login and Registration settings page](/img/config/settings-general.png)

He pēnei te whakaatu atu ki te whānui o te manawa whakauru me ngā manawa whakaahua:

![Login and Registration settings full page](/img/config/settings-login-registration-full.png)

Kia mau ahau i tētahi whakamārama mō ngā tuatahi o ngā āhuatanga e taea ai koe te whakamaoritanga ana i te **Login & Registration** page:

  * **Enable registration (Whakawhanaungatanga):** Ko tēnei option ka whakatika ahau ko te whakamahi i te whakaahua mō te whakahou (enable) he tino pēnei, he whakatika ahau ko te whakatika i te whakaahua mō te whakatika (disable). Ko te mea e whakatika ana ia, ka taea e ngā wāhi o koe te whakamahi i te whakataunga me te whai tikanga i ngā āhuatanga o koe.

  * **Enable email verification (Whakawhiti Email Verification):** Ko te mea e whakatika ahau ko te whakahou ia, ka ngā wāhi e whai i te whakataunga mō te plan mō te free (free plan) he tino pēnei, he ka whai i ngā email whakamārama (verification email) me ka whai i ngā link o whakamārama (verification link) kia taea ai ngā wāhi o koe te whakamaoritanga.

* **Pepeha Pāpeha (Registration Page) Default:** He pēpeha he nui ko te peapea mō te whakamārama i te registration. Ko tēnei peapea me te whai ake i te waka o te wera (registration form) – ko te waka he ka taea e ngā wāhi (clients) te piraki i ngā aua aua (products). Ko te tino nui, e taea ai koe te whakamaoritanga (create) i ngā peapea registration me ngā waka checkout e e hiahia atu. Engari he tino mōhio: kia puta te waka checkout mo te peapea registration, engari kia puta te waka checkout mo te peapea registration, engari kia puta te waka checkout mo te peapea registration, engari kia puta te waka checkout mo te peapea registration.

  * **Whai i peapea login (Use custom login page):** Ko tēnei option e hiahia ana ki te whakamahi i peapea login he tino whakahua (customized) he wae, he wae he hoki i te wp-login.php default. Ko te mea, ko i roto i te option **Default login page** (he pēpeha he titiro i runga i te option e hoki i te peapea registration), koe e whakaaro he peapea waiata (page) wai e whakamahia mō te login.

  * **Whakaahua/Whakamārama i te URL o te login (Obfuscate the original login url - wp-login.php):** Ko te mea, ko engari he tino nui ki te whakatika ngā URL o te login he tino whakamua (hide) te URL o te login hou (wp-login.php). He tino mārama ana tēnei mō te whakamaoritanga i ngā attack brute-force. Ko i roto i te option ko, Ultimate Multisite e whakaatu error 404 ki te wāhi he whai ake i te user e pēnei i te link o te wp-login.php hou.

  * **Whakaora/Whakawhanaungatanga site (Force synchronous site publication):** I roto i te whenua, i raro i te mea kei te piraki te customer i aua product he tino nui ana ki te site hou e hiahia ana ki te whakawhanaunga i te site o te whenua. Ko te whakatau (publishing) ko e rite ana ki Job Queue, he asynchronous. Whakaaro koe i tēnei option kia puta te whakatau (publication) i te wāhera o te signup.

I te mea, he tino nui ngā option hou he hoki ana ki te login me te registration process. Ko i runga i **Other options** e hoki ana ki te Login & registration page:

  * **Tāpe/Rau (Default role):** Ko tēnei tāpe ko te tauira (role) he whai ake i ngā wāhi o te signup, he heke ai i te website o te customer.

* **Whakarite Jumper:** Whakarite i te shortcut Jumper i te arewa admin. E kitea ai ki ngā administrator ki te whakawhanake rā i Ultimate Multisite, ngā object o te wairua (network objects), me ngā wāhi e whai ake ana e tino whaiaro ana, i roto i te mea he pēnei i te whakatipu i te menu katoa. Whakarite ki te whakatika i tēnei whakatau kia whakaatu i tēnei taonga whakamahi rā i te interface admin.

  * **Whakawhanainga ngā wāhi ana i te site nui:** Whakarite i tēnei option e whaiaro ai te wāhi ana ki te site nui o tō network i runga i te whakataunga (signup) iho. Ko te mea, ko i roto i te whakatau koe, ka hoatu i tētahi option kia whakatika i te **default role** o ngā wāhi ana i runga i tō website.

  * **Whakarite mō ngā account mō ngā site:** Whakarite ki e taea ai ngā wāhi ana he account i ngā site hawha o tō network me te email address pēnei. Ko i roto i te whakatau koe, ka taea te whakamahi i tēnei option e kore ai ngā mea katoa e taea ai ngā mea o koe ki te whakawhanainga account i ngā website hawha o tō network me te email address pēnei.

Me tēnei te option katoa e whaiaro ana mō te login me te registration! Huia kia whakatika i ngā whakaritenga ahau i roto i te whakaora i ngā mea i roto i te editing ahau whai ora.

Kua taea e koe te pilihati taro nei optioni katoa mō te whakamārama i te kaha, mō te whakatū i roto i ngā mahi, he tino pai. He tino pai te whakatū i tēnei form, he tino pai te whakatū i tētahi form, he tino pai te whakatū i tētahi form. Kei te mea e koe, kia kliki ki **Go to the Editor**.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

He tino pai te whakaiti akorua i ngā forms kua whakatū koe eke ana, he tino pai te whakaiti akorua i ngā forms kua whakatū koe eke ana, he tino pai te whakaiti akorua i ngā forms kua whakatū koe eke ana. I tēnei wā, ka whai koe ki ngā optioni i runga i te ingoa o te form kia whakaiti i te shortcode o te form ahau, he tino pai te whakamahi i te shortcode o te form ahau, he tino pai te whakamahi i te shortcode o te form ahau. He tino pai te whakatika akorua i ngā forms kua whakatū koe eke ana, he tino pai te whakatika akorua i ngā forms kua whakatū koe eke ana.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Ko te tino pai i te single step ahau, he tino pai te whakamahi i te single step ahau, he tino pai te whakamahi i te single step ahau. Ko te form checkout eke ana he tino pai te whakatū i ngā apa basic mō tōna mahi. He tino pai te whakatika akorua i ngā steps extra ki ai.

### Whakawātea i te Checkout Form:

He tino pai te whakamahi i te forms mō whakamahinga katoa. I tēnei whakamārama, ka whakatika atu mātou ki te form registration.

I tēnei wā, he tino pai te whakatū i te ingoa (he whakamahinga ana akorua mō te whakamahi mō te whakamārama anake) me te slug (he whakamahinga ana mō te whakamaoritanga o ngā shortcode ahau).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Ko ngā forms he tino pai i ngā steps me ngā fields. Ko te tino pai i te whakatū i tētahi step hou eke ana i **Add New Checkout Step**.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

I te tab wāhi tūroa (first tab) o te modal window, whakatika i te mōhaka o tō step o te form. Give it an ID, a name and a description. He tino pai ngā mea heea he whakamahinga ana akorua.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step-content.png)

He tino pai te whakatika i te visibility o tō step. Ko te tino pai i te **Always show** , **Only show for logged in users** or **Only show for guests**.

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

Kua whakamutunga, whakarite i te style o te step (mehe). He āhuatanga hoki ahau ana.

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

I tēnei wā, he tino kitea atu ki te whai whakaaro i ngā field (whakamahi). Whakatipu i te **Add New Field** kia whiri i te wāhi (type) o te section (mehe) e tino pai ana ahau.

![Add New Field button](/img/config/checkout-form-step-with-fields.png)![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

Kaori i roto i roto i ngā field, he mea nui (parameters) tino whakahirahika kia whakatipu. Mo te whakatūatanga tēnei, ka whiri i te field **Username** (Tāwhiri).

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

Ka taea e koe te whero ngā step me ngā field e tino pai ana ahau. Mo te whakaatu i ngā product (taonga) mo ngā mea e tika ana ki te whiri mai, whakamahi i te field **Pricing Table** (Te Whakamahi Pākehā). Ko te mea e tino pai ana ahau ko, he tino pai ana ahau ki te whero i te template (form) mo ngā waka (clients), whakamahi i te field **Template Selection**. Me pēhea?

_**He Whakamārama:** Ko i roto i te wā e whero koe i te checkout form, ka taea e koe te whakamahi i te button **Preview** kia whakaahua i te mea he kitea ahau ngā form (form) mo ngā waka. Ka taea hoki koe te whakawhiti i te whakaaro he heke (existing user) ahau ki te heke (visitor).

_**He Whakamārama 2:** Ko username, email, password, site title, site URL, order summary, payment, me te button submit (whakaaro) he mea tino nui kia whero i te checkout form._

![Preview button on the checkout form editor](/img/config/checkout-form-preview-button.png)![Checkout form preview as visitor or existing user](/img/config/checkout-form-preview-modal.png)

Kuaheke, i **Advanced Options** (Opshio Whakamahi Whakamahi), kua taea e koe te whakarite te pūrākau mō te puta mai o te **Thank You** page (Pāpā i te Whakawhanaungatanga), ā, nui ki te whaiaro (snippets) mō te whakamahi te whakahaere (tracking conversions), CSS mō te form checkout mo te whaikōrero, au te whakatū i ai mō ngā wāhi-ā-au.

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

Kua taea hoki koe te whakamahi manu (toggle) ki te whakaroa ana au te form checkout mo te whaikōrero, ā, kua taea hoki i te whakatū i ai mō ngā wāhi-ā-au, ka taea hoki i te whakatū i ai mō ngā wāhi-ā-au.

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

He tino nui: kia whaiaro (save) i tō form checkout!

![Save Checkout Form button](/img/config/checkout-form-save.png)

Kia pēnei te pēpēke o tō form mō te shortcode, whakatipu i **Generate Shortcode** ā, whakakaha i te whakamahi i te whaiaro (copy) i te whakatū i te modal window.

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**He whakamārama:** Kia tino nui ki te whaiaro (add) tēnei shortcode ki tō registration page kia taea ai koe te whaiaro i tēnei form checkout i tona. _

## Whakawhiti i au ngā au URL (URL parameters) mō te whiri i mga au me template:

Kia tino pai ahau i te whakatō mga au au mō tō mga tauira mo tō mga au, ā, kia whiri i te au he pēnei i te whiri o tō koutou customer i tō au pricing table (table o te whakaingo) ka taea e koe te whakamahi i au URL parameters mō tēnei.

### **Mō ngā plans:**

Pāinga ki **Ultimate Multisite > Products > Select a plan**. Kia kaha, kia whakaatu i tō **Click to copy Shareable Link** (Whakawhiti ki te copy Link Whakawhanaungatanga) button i te whakatū i te pēke. He au he taea ai koe te whakamahi i tēnei link mō te whiri i tēnei plan-ā-au mo tō checkout form.

![Product page with shareable link button](/img/config/products-list.png)

He whakamārama: Ko te link e taea te share he tino tika ana mō **Plans** (Plana). Kei te mea, ka taea e koe te whakamahi i ngā link e taea te share mō mga package (package) me mga service (service) nei.

### Mō mga template:

Kia tino pai ahau ki te whai whakaaro mō mga site templates (template) mo te checkout form o koe, ka taea e koe te whakamahi i te parameter: **?template_id=X** i runga i te URL o te manawa (registration page) o koe. Ka pēnei te whakamahi ana i te "X" – ka taea e koe te whakaiti i te "X" ki te **site template ID number**. Kei te mea, kia pēnei te whai whakaaro i tēnei number, pono ki te **Ultimate Multisite > Sites**.

Whakatipu i **Manage** i runga i te site template o koe e hiahia ana ki te whakamahi. Ka taea e koe te whakaahua i te SITE ID number. Kia kaha, ka whakamahi i tēnei number mo tēnei site template-specific kia tika ai ia pre-selected (whakawātea) mo te checkout form o koe. I tēnei wā, ko te parameter URL he pēnei: **?template_id=2**.

![Sites list showing site template ID](/img/config/site-templates-list.png)

Kia kaha ahau ki te whai whakaaro i te website o te whānau (network website) o koe, he [**www.mynetwork.com**](http://www.mynetwork.com) me te manawa o koe e hiahia ana mo te checkout form o koe he tūnga mo te site template pre-selected, ka pēnei te whakamahi i te URL katoa: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Me pēnei ahau ki te whai whakaaro mō mga product me templates mo te checkout form o koe. Ko te mea katoa e hiahia ana i te whakamahi, he whakakanga (copy) i te shareable link o te plan me te whai whakaaro template (template parameter) i te pētaki (end). Ka pēnei te whakamahinga: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
