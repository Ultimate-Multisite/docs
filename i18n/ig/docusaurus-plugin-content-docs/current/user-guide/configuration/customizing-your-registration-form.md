---
title: Ịhazigharị fọm ndebanye aha gị
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Ịhazigharị Registration Form gị

Iji mee ka network gị dị iche na SaaS ndị ọzọ niile e wuru n’elu WordPress platform, Ultimate Multisite na-enye gị ohere ịhazi registration na login peeji gị site na njirimara **Checkout Forms** anyị.

Ọ bụ ezie na ha bụ ụzọ dị mfe ma na-agbanwe agbanwe iji nwalee usoro dị iche iche mgbe ị na-agbalị ịtụgharị ndị ahịa ọhụrụ, a na-ejikarị ha mepụta registration forms ahaziri onwe. Edemede a bu n’obi igosi gị otu ị ga-esi mee ya.

## Login na registration peeji: {#login-and-registration-pages}

Mgbe etinyere Ultimate Multisite, ọ na-emepụta login na registration peeji ahaziri iche na main site gị na-akpaghị aka. Ị nwere ike ịgbanwe peeji ndabara ndị a n’oge ọ bụla site n’ịga na peeji **Ultimate Multisite > Settings > Login & Registration** gị.

![Peeji ntọala Login na Registration](/img/config/settings-general.png)

Nke a bụ nlele zuru ezu nke peeji ntọala login na registration:

![Peeji zuru ezu nke ntọala Login na Registration](/img/config/settings-login-registration-full.png)

Ka anyị leba anya na nke ọ bụla n’ime nhọrọ ị nwere ike ịhazi na peeji **Login & Registration**:

  * **Kwado registration:** Nhọrọ a ga-akwado ma ọ bụ gbanyụọ registration na network gị. Ọ bụrụ na agbanyụrụ ya, ndị ahịa gị agaghị enwe ike ịdebanye aha ma subscribe na ngwaahịa gị.

  * **Kwado nkwenye email:** Ọ bụrụ na agbanyere nhọrọ a, ndị ahịa na-subscribe maka plan efu ma ọ bụ plan akwụ ụgwọ nwere oge trial ga-enweta email nkwenye ma ga-achọ ịpị verification link ka e wee mepụta website ha.

  * **Peeji registration ndabara:** Nke a bụ peeji ndabara maka registration. Peeji a kwesịrị ka e bipụta ya na website gị ma nwee registration form (a makwaara dị ka checkout form) - ebe ndị client gị ga-subscribe na ngwaahịa gị. Ị nwere ike ịmepụta registration peeji na checkout forms ole ịchọrọ, cheta naanị itinye checkout form shortcode na registration page, ma ọ bụghị ya ọ gaghị apụta.

  * **Jiri login page ahaziri iche:** Nhọrọ a na-enye gị ohere iji login page ahaziri, karịa peeji wp-login.php ndabara. Ọ bụrụ na agbanyere nhọrọ a, ị nwere ike ịhọrọ peeji a ga-eji maka login na nhọrọ **Default login page** (nke dị n’okpuru ozugbo).

  * **Zoo original login url (wp-login.php)** : Ọ bụrụ na ịchọrọ izochi original login URL, ị nwere ike ịgbanye nhọrọ a. Nke a bara uru iji gbochie mwakpo brute-force. Ọ bụrụ na agbanyere nhọrọ a, Ultimate Multisite ga-egosi njehie 404 mgbe onye ọrụ na-agbalị ịbanye na njikọ wp-login.php mbụ

  * **Manye mbipụta site ka ọ bụrụ synchronous:** Mgbe onye ahịa subscribe na ngwaahịa na network, pending site ọhụrụ ahụ kwesịrị ịgbanwe bụrụ ezigbo network site. Usoro mbipụta na-eme site na Job Queue, n'ụzọ asynchronous. Gbanye nhọrọ a iji manye mbipụta ahụ ime n'otu request ahụ dịka signup.

Ugbu a, ka anyị hụ nhọrọ ndị ọzọ ka dị mkpa n’usoro login na registration. Ha dị ozugbo n’okpuru **Nhọrọ ndị ọzọ** na otu peeji Login & registration ahụ:

  * **Role ndabara:** Nke a bụ role ndị ahịa gị ga-enwe na website ha mgbe usoro signup gasịrị.

  * **Kwado Jumper:** Na-akwado shortcut Jumper n’ebe admin. Jumper na-enye ndị administrators ohere ịgafe ngwa ngwa gaa na ihuenyo Ultimate Multisite, ihe network, na ebe ndị ọzọ akwadoro na-enweghị ịgagharị menu ọ bụla. Gbanyụọ ya ma ọ bụrụ na ịchọrọ izochi ngwa ngwa navigation ahụ site na interface admin.

  * **Tinye ndị ọrụ na main site kwa:** Ịgbanye nhọrọ a ga-etinyekwa onye ọrụ na main site nke network gị mgbe usoro signup gasịrị. Ọ bụrụ na ịgbanye nhọrọ a, nhọrọ iji tọọ **role ndabara** nke ndị ọrụ ndị a na website gị ga-apụtakwa ozugbo n’okpuru.

  * **Kwado ọtụtụ accounts:** Nye ndị ọrụ ohere inwe accounts na site dị iche iche nke network gị site na iji otu email address. Ọ bụrụ na nhọrọ a agbanyụrụ, ndị ahịa gị agaghị enwe ike ịmepụta Account na website ndị ọzọ na-agba ọsọ na network gị site na iji otu email address.

Nke ahụ bụkwa nhọrọ niile metụtara login na registration ị nwere ike ịhazi! Echefukwala ichekwa ntọala gị mgbe ị mechara idezi ha.

## Iji ọtụtụ registration forms: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 na-enye checkout form editor nke na-enye gị ohere ịmepụta forms ole ịchọrọ, nwere fields dị iche iche, ngwaahịa a na-enye, wdg.

A na-etinye ma login ma registration peeji site na shortcodes: **[wu_login_form]** na login page na**[wu_checkout]** maka registration page. Ị nwere ike ịhazi registration page ọzọ site n’ịrụ ma ọ bụ imepụta checkout forms.

Iji nweta njirimara a, gaa na menu **Checkout Forms**, n’akụkụ aka ekpe side-bar.

![Menu Checkout Forms n’ime sidebar](/img/config/checkout-forms-list.png)

Na peeji a, ị nwere ike ịhụ checkout forms niile ị nwere.

Ọ bụrụ na ịchọrọ ịmepụta nke ọhụrụ, pịa naanị **Tinye Checkout Form** n’elu peeji ahụ.

Ị nwere ike ịhọrọ otu n’ime nhọrọ atọ ndị a dịka ebe ị ga-amalite: otu nzọụkwụ, ọtụtụ nzọụkwụ ma ọ bụ efu. Mgbe ahụ, pịa **Gaa na Editor**.

![Tinye Checkout Form nwere nhọrọ otu nzọụkwụ, ọtụtụ nzọụkwụ, ma ọ bụ efu](/img/config/checkout-forms-list.png)

N’ụzọ ọzọ, ị nwere ike idezi ma ọ bụ mepụta oyiri forms ị nwere ugbu a site n’ịpị nhọrọ ndị dị n’okpuru aha ya. N’ebe ahụ, ị ga-ahụkwa nhọrọ iji detuo shortcode nke form ahụ ma ọ bụ hichapụ form ahụ.

![Omume hover nke checkout form nwere idezi, mepụta oyiri, na hichapụ](/img/config/checkout-form-hover-actions.png)

Ọ bụrụ na ị họrọ otu nzọụkwụ ma ọ bụ ọtụtụ nzọụkwụ, checkout form ahụ ga-adịlarị juputara na nzọụkwụ bụ isi ka ọ rụọ ọrụ. Mgbe ahụ, ọ bụrụ na ịchọrọ, ị nwere ike itinye nzọụkwụ ndị ọzọ na ya.

### Idezi Checkout Form: {#editing-a-checkout-form}

Dị ka anyị kwuburu, ị nwere ike ịmepụta checkout forms maka ebumnuche dị iche iche. N’ihe atụ a anyị ga-arụ ọrụ na registration form.

Mgbe ị gara na checkout form editor, nye form gị aha (a ga-eji ya naanị maka ntụaka ime) na slug (e ji emepụta shortcodes, dịka ọmụmaatụ).

![Onye ndezi fọm ịkwụ ụgwọ nwere mpaghara aha na slug](/img/config/checkout-form-name-slug.png)

A na-eme fọm site na nzọụkwụ na mpaghara. Ị nwere ike ịgbakwunye nzọụkwụ ọhụrụ site n'ịpị **Tinye Nzọụkwụ Ịkwụ Ụgwọ Ọhụrụ**.

![Bọtịnụ Tinye Nzọụkwụ Ịkwụ Ụgwọ Ọhụrụ](/img/config/checkout-form-add-step.png)

Na taabụ mbụ nke windo modal, dejupụta ọdịnaya nke nzọụkwụ fọm gị. Nye ya ID, aha na nkọwa. A na-ejikarị ihe ndị a eme ihe n'ime sistemụ.

![Taabụ ọdịnaya nzọụkwụ ịkwụ ụgwọ nwere ID, aha, na nkọwa](/img/config/checkout-form-step-content.png)

Ọzọ, hazie ịdị-ahụ anya nke nzọụkwụ ahụ. Ị nwere ike ịhọrọ n'etiti **Gosi mgbe niile** , **Gosi naanị maka ndị ọrụ banyere** ma ọ bụ **Gosi naanị maka ndị ọbịa**.

![Nhọrọ ịdị-ahụ anya nke nzọụkwụ ịkwụ ụgwọ](/img/config/checkout-form-step-visibility.png)

N'ikpeazụ, hazie ụdị nzọụkwụ ahụ. Ndị a bụ mpaghara nhọrọ.

![Nhazi ụdị nzọụkwụ ịkwụ ụgwọ](/img/config/checkout-form-step-style.png)

Ugbu a, oge eruola ịgbakwunye mpaghara na nzọụkwụ mbụ anyị. Pịa naanị **Tinye Mpaghara Ọhụrụ** ma họrọ ụdị ngalaba ịchọrọ.

![Bọtịnụ Tinye Mpaghara Ọhụrụ](/img/config/checkout-form-add-field-button.png)![Dropdown nhọrọ ụdị mpaghara](/img/config/checkout-form-field-type-dropdown.png)

Mpaghara ọ bụla nwere parameters dị iche iche a ga-ejupụta. Maka ntinye mbụ a, anyị ga-ahọrọ mpaghara **Aha njirimara**.

![Nhazi mpaghara aha njirimara](/img/config/checkout-form-username-content.png)![Parameters mpaghara aha njirimara](/img/config/checkout-form-username-visibility.png)![Ntọala mgbakwunye mpaghara aha njirimara](/img/config/checkout-form-username-style.png)

Ị nwere ike ịgbakwunye nzọụkwụ na mpaghara ole ọ bụla ị chọrọ. Iji gosipụta ngwaahịa gị ka ndị ahịa gị họrọ otu, jiri mpaghara Tebụl Ọnụahịa. Ọ bụrụ na ịchọrọ ikwe ka ndị ahịa gị họrọ ndebiri, tinye mpaghara Nhọrọ Ndebiri. Na ihe ndị ọzọ.

![Onye ndezi fọm ịkwụ ụgwọ nwere mpaghara nhọrọ ndebiri](/img/config/checkout-form-with-template-field.png)

_**Rịba ama:** Ọ bụrụ na ị mepụta ngwaahịa mgbe ị mepụtara fọm ịkwụ ụgwọ gị, ị ga-achọ ịgbakwunye ngwaahịa ahụ na ngalaba Tebụl Ọnụahịa. Ọ bụrụ na ị tinyeghị ya, ngwaahịa ahụ agaghị apụta nye ndị ahịa gị na ibe ndebanye aha._

_**Rịba ama 2:** aha njirimara, email, password, aha saịtị, URL saịtị, nchịkọta iwu, ịkwụ ụgwọ, na bọtịnụ izipu bụ mpaghara iwu ji iji mepụta fọm ịkwụ ụgwọ._

Mgbe ị na-arụ ọrụ na fọm ịkwụ ụgwọ gị, ị nwere ike iji bọtịnụ Nhụchalụ mgbe niile iji hụ otú ndị ahịa gị ga-esi hụ fọm ahụ. Ị nwekwara ike ịgbanwe n'etiti ile ya dị ka onye ọrụ dị adị ma ọ bụ onye ọbịa.

![Bọtịnụ Nhụchalụ na onye ndezi fọm ịkwụ ụgwọ](/img/config/checkout-form-preview-button.png)![Nhụchalụ fọm ịkwụ ụgwọ dị ka onye ọbịa ma ọ bụ onye ọrụ dị adị](/img/config/checkout-form-preview-modal.png)

N'ikpeazụ, na **Nhọrọ Dị Elu** ị nwere ike ịhazi ozi maka ibe **Daalụ**, tinye snippets iji soro conversions, tinye CSS ahaziri iche na fọm ịkwụ ụgwọ gị ma ọ bụ gbochie ya ka ọ bụrụ naanị mba ụfọdụ.

![Nhọrọ Dị Elu nwere ibe Daalụ, nsuso conversion, na CSS ahaziri iche](/img/config/checkout-form-advanced.png)

Ị nwekwara ike iji aka gị mee ka fọm ịkwụ ụgwọ gị rụọ ọrụ ma ọ bụ kwụsị ya site n'ịgbanwe nhọrọ a na kọlụm aka nri, ma ọ bụ hichapụ fọm ahụ kpamkpam.

![Toggle arụ ọrụ na nhọrọ ihichapụ maka fọm ịkwụ ụgwọ](/img/config/checkout-form-active.png)

Echefukwala ịchekwa fọm ịkwụ ụgwọ gị!

![Bọtịnụ Chekwaa Fọm Ịkwụ Ụgwọ](/img/config/checkout-form-save.png)

Iji nweta shortcode nke fọm gị, pịa **Mepụta Shortcode** ma detuo nsonaazụ egosiri na windo modal.

![Modal Mepụta Shortcode nwere shortcode a ga-edetu](/img/config/checkout-form-editor.png)

_**Rịba ama:** Ị ga-achọ ịgbakwunye shortcode a na ibe ndebanye aha gị ka etinye fọm ịkwụ ụgwọ a na ya._

## Ịhọrọ ngwaahịa na ndebiri tupu oge eruo site na parameters URL: {#pre-selecting-products-and-templates-via-url-parameters}

Ọ bụrụ na ịchọrọ imepụta tebụl ọnụahịa ahaziri iche maka ngwaahịa gị ma họrọ tupu oge eruo na fọm ịkwụ ụgwọ ngwaahịa ma ọ bụ ndebiri onye ahịa gị họrọ site na tebụl ọnụahịa gị ma ọ bụ ibe ndebiri, ị nwere ike iji parameters URL maka nke a.

### **Maka atụmatụ:** {#for-plans}

Gaa na **Ultimate Multisite > Ngwaahịa > Họrọ atụmatụ**. Ị kwesịrị ịhụ bọtịnụ **Pịa iji detuo Njikọ A Pụrụ Ịkekọrịta** n'elu ibe ahụ. Nke a bụ njikọ ị nwere ike iji họrọ atụmatụ a kpọmkwem tupu oge eruo na fọm ịkwụ ụgwọ gị.

![Ibe ngwaahịa nwere bọtịnụ njikọ a pụrụ ịkekọrịta](/img/config/products-list.png)

Rịba ama na njikọ a pụrụ ịkekọrịta a bara uru naanị maka **Atụmatụ**. Ị nweghị ike iji njikọ a pụrụ ịkekọrịta maka ngwugwu ma ọ bụ ọrụ.

### Maka ndebiri: {#for-templates}

Ọ bụrụ na ịchọrọ ịhọrọ ndebiri saịtị tupu oge eruo na fọm ịkwụ ụgwọ gị, ị nwere ike iji parameter: **?template_id=X** na URL ibe ndebanye aha gị. A ga-eji **nọmba ID ndebiri saịtị** dochie "X". Iji nweta nọmba a, gaa na **Ultimate Multisite > Saịtị**.

Pịa **Jikwaa** ozugbo n'okpuru ndebiri saịtị ịchọrọ iji. Ị ga-ahụ nọmba SITE ID. Jiri naanị nọmba a maka ndebiri saịtị a kpọmkwem ka ahọrọ ya tupu oge eruo na fọm ịkwụ ụgwọ gị. N'ọnọdụ anyị ebe a, parameter URL ga-abụ **?template_id=2**.

![Ndepụta saịtị na-egosi ID ndebiri saịtị](/img/config/site-templates-list.png)

Ka anyị kwuo na webụsaịtị netwọkụ anyị bụ [**www.mynetwork.com**](http://www.mynetwork.com) na ibe ndebanye aha anyị nwere fọm ịkwụ ụgwọ anyị dị na ibe **/register**. URL zuru ezu nwere ndebiri saịtị a ahọpụtara tupu oge eruo ga-adị ka [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Ma ọ bụrụ na ịchọrọ, ị nwere ike ịhọrọ ma ngwaahịa ma ndebiri tupu oge eruo na fọm ịkwụ ụgwọ gị. Ihe niile ị ga-eme bụ idetuo njikọ a pụrụ ịkekọrịta nke atụmatụ ahụ ma tinye parameter ndebiri na njedebe. Ọ ga-adị ka [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
