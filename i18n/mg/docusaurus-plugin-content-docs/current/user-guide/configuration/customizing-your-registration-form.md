---
title: Fanovana ny Endrika Fisoratana Anao
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Fanovana ny Fandefasana anareo

Mba hahatonga ny tambajotra anareo ho hafa sy manokana noho ireo SaaS rehetra vita amin'ny sehatry ny WordPress, ny Ultimate Multisite dia mamela anareo hanova ny pejy fandraisana (registration) sy famakiana (login) amin'ny alalan'ny fitaovana **Checkout Forms** anay.

Na dia fomba mora sy malalaka aza izy ireo mba hanandona fomba samihafa rehefa miezaka manova mpanjifa vaovao, dia ampiasaina betsaka ho fanamboarana forms fandraisana manokana (personalized registration forms) izy ireo. Io lahatsoratra io dia mikendry hampiseho anareo ny fomba azo atao izany.

## Pejy famakiana sy fandraisana:

Rehefa mametraka ny Ultimate Multisite, dia mamorona pejy famakiana sy fandraisana manokana ho an'ny toerana lehibenareo izy aho. Afaka manova ireo pejy fototra ireo amin'ny fotoana rehetra ianao amin'ny alalan'ny mandeha ao amin'ny pejy **Ultimate Multisite > Settings > Login & Registration**.

![Pejy famakiana sy fandraisana (Login and Registration settings page)](/img/config/settings-general.png)

Ity misy fomba fijery feno ny pejy fandrindrana famakiana sy fandraisana:

![Pejy feno famakiana sy fandraisana (Login and Registration settings full page)](/img/config/settings-login-registration-full.png)

Andao hijery tsirairay amin'ireo safidy azo ovainareo ao amin'ny pejy **Login & Registration**:

  * **Enable registration:** Ity safidy ity dia hanam-pahaizana na hanafaka ny fandraisana (registration) eo amin'ny tambajotra anareo. Raha voafaka ho tsy mandeha izany, dia tsy afaka mandraisa sy manao fandraisana (subscribe) ireo vokatra anareo ny mpanjifanao.

  * **Enable email verification:** Raha voafaka ho azo atao ity safidy ity, dia handray maila fanamarinana (verification email) ireo mpanjifa izay mandray toromarika ho amin'ny toromarika maimaim-poana na manana fotoana fanandramana (trial period), ary mila tsindrio ny rohy fanamarinana (verification link) mba hamoronana ny tranokalan'izy ireo.

* **Pejy fandraisana fototra (Default registration page):** Io no pejy fototra ho an'ny famarihana (registration). Mila apetraka ao amin'ny tranokala anareo ity pejy ity ary tokony hanana endrika famarihana (checkout form) koa - izay toerana ahitana ny mpanjifa anareo handefasana ny vokatra. Afaka mamorona pejy famarihana sy endrika checkout maro dia tianareo, fa tadidio fotsiny ny fametrahana ny shortcode ho an'ny endrika checkout eo amin'ny pejy famarihana, raha tsy izany dia tsy hiseho izy.

  * **Mampiasa pejy fandraisana an-tserasera manokana (Use custom login page):** Ity safidy ity dia ahafahanao mampiasa pejy fandraisana an-tserasera manokana, hafa noho ny pejy fototra wp-login.php. Raha voafidy io safidy io dia afaka misafidy izay pejy hampiasaina ho fandraisana an-tserasera amin'ny safidy **Pejy fandraisana an-tserasera fototra (Default login page)** (araka ny eo ambany).

  * **Manamboara ny URL fandraisana an-tserasera voalohany (Obfuscate the original login url (wp-login.php))**: Raha te-hamaritra ny URL fandraisana an-tserasera fototra ianao, afaka manao izany ianao amin'ny alalan'ny fanindriana ity safidy ity. Tena ilaina izany mba hisorohana ny fanafihana mampiasa be (brute-force attacks). Raha voafidy io safidy io dia haneho ny fahadisoana 404 i Ultimate Multisite rehefa miezaka miditra amin'ny link wp-login.php fototra ny mpampiasa iray.

  * **Manery ny famoahana an-tserasera mifanaraka (Force synchronous site publication)**: Aorian'ny mpanjifa iray handefasana vokatra ao anatin'ny tambajotra, dia mila ovaina ho tranokala tambajotra tena izy ilay pejy vaovao miandry. Ny fizotran'ny famoahana dia mitranga amin'ny alalan'ny Job Queue, tsy mifanaraka (asynchronously). Ampirisihina ity safidy ity mba hanery ny famoahana ho tonga ao anatin'ny fangatahana (request) mitovy amin'ny fandraisana an-tserasera.

Ity misy safidy hafa izay mbola mifandray amin'ny fandraisana an-tserasera sy famarihana. Ireo dia eo ambanin'ny **Safidy hafa (Other options)** eo amin'ny pejy Fandraisana an-tserasera sy Famarihana (Login & registration page):

  * **Anjara toerana fototra (Default role)**: Io no anjara toerana izay ho an'ny mpanjifa anareo ao amin'ny tranokala aorian'ny dingana famarihana.

* **Aktivizanao ny Jumper:** Itse dia mamela anao hampiasa ny fomba fidirana haingana (Jumper shortcut) ao amin'ny faritra admin. Ny Jumper dia ahafahanao mifindra haingana mankany amin'ny efijery Ultimate Multisite, zavatra hafa eo amin'ny tambajotra (network objects), ary toerana hafa ananana azy tsy mila mandeha amin'ny menu rehetra ianao. Apetraho ho tsy miasa izy raha tianao hidiana io fitaovana fidirana haingana io avy ao amin'ny interface admin ianao.

* **Ampidiro mpampiasa amin'ny tranokala lehibe koa:** Ny fanatanterahana ity safidy ity dia hampiditra ny mpampiasa ho an'ny tranokala lehiben'ny tambajotranareo aorian'ny dingana fametrahana (signup). Raha manao izany ianao, hisy safidy ahafahanao mametraka ny **default role** ireo mpampiasa ireo eo amin'ny website-nao koa dia hiseho eo ambanin'izay.

* **Aktivizanao ny kaonty maromaro:** Avelao ho afaka manana kaonty mpampiasa samihafa ao anaty tranokala hafa ao amin'ny tambajotranareo ianao, nefa mitovy ny adiresy mailaka (email address). Raha tsy voafidy ity safidy ity, dia tsy ho afaka mamorona kaonty ny mpanjifa anao ireo website hafa ao amin'ny tambajotranareo izay manana adiresy mailaka mitovy.

Ary ireo no safidy rehetra mifandraika amin'ny fidirana sy fametrahana (login and registration) izay azonao ovaina! Aza adino ny hitsaverina ny setinginao rehefa vita ny fanovana azy.

## Fampiasana endrika fametrahana maromaro:

Ny Ultimate Multisite 2.0 dia manolotra editor ho an'ny checkout form (fomba fametrahana fividianana) izay ahafahanao mamorona endrika maro tianao, misy sehatra samihafa, vokatra azo atao, sns.

Ny pejy fidirana (login page) sy ny pejy fametrahana (registration page) dia voafidy amin'ny shortcode: **[wu_login_form]** eo amin'ny pejy fidirana ary **[wu_checkout]** ho an'ny pejy fametrahana. Afaka manova azy bebe kokoa ianao amin'ny alalan'ny fanamboarana na famoronana checkout forms (endrika fametrahana fividianana).

Mba hahazoana ity fitaovana ity, mandehin'ny menu **Checkout Forms** eo an-dakiana (left side-bar).

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

Ao amin'ity pejy ity ianao dia afaka mahita ny checkout forms rehetra anananao.

Raha te-hamorona vaovao ianao, tsindrio fotsiny ny **Add Checkout Form** eo ambony pejy.

Mba afaka safidy iray amin'ire telo ireo ho fanombohanao: single step (dingana iray), multi-step (dingana maromaro), na blank (tsy misy). Avy eo, tsindrio mba **Hafahana any amin'ny Editor**.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

Na dia afaka manova na mamerina ireo forms efa anananao aza ianao amin'ny alalan'ny tsindriana eo ambanin'ny anarany ny safidy. Eo koa, hahita safidy hamerenana ny shortcode an'ilay form na hanesorana ilay form.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Raha misafidy single step na multi-step ianao, dia efa voaomana (pre-populated) ny checkout form amin'ny dingana fototra mba hahafahany miasa. Avy eo, raha tianao, afaka manampy dingana fanampiny ianao.

### Fanovana Checkout Form:

Efa nolazainay teo aloha, afaka mamorona checkout forms isan-karazany ho an'ny antony samihafa. Amin'ity ohatra ity dia hiasa amin'ny registration form isika.

Aorian'ny miditra ao amin'ny checkout form editor, omeo anarana ny form (izay hampiasaina ho fanondroana anatiny ihany) sy slug (ampiasaina mba hamoronana shortcodes, ohatra).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Ny forms dia vita amin'ny dingana sy champs (fields). Afaka manampy dingana vaovao ianao amin'ny alalan'ny tsindriana **Add New Checkout Step**.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

Amin'ny tabilao voalohany an'ilay modal window, voasoratra ny votoatin'ny dingan'ilay form. Ampio azy ID iray, anarana sy famaritana (description). Ireo zavatra ireo dia matetika ampiasaina anatiny fotsiny.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step-content.png)

Avy eo, voatsangana ny fahitana (visibility) an'ilay dingana. Afaka misafidy ianao eo amin'ny **Always show** (mampiseho foana), **Only show for logged in users** (mampiseho ho mpampiasa efa miditra ihany) na **Only show for guests** (mampiseho ho mpanjifa tsy afaka miditra).

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

Farany, ataovy ny fomba fiasa (style) an'ilay dingana. Ireo dia safidy afaka atao fa tsy voatery.

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

Ity no fotoana hanampiana champs amin'ny dingana voalohany. Tsindrio fotsiny ny **Add New Field** ary safidio ny karazana section tianao.

![Add New Field button](/img/config/checkout-form-step-with-fields.png)![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

Ny champ tsirairay dia manana parameters samihafa tokony ho voasoratra. Ho an'ity fidirana voalohany ity, safidio ny champ **Username**.

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

Afaka manampy dingana sy champs betsaka dia ilainao ianao. Mba haneho ny vokatrao ho an'ny mpanjifa mba hisafidianany iray, dia ampiasao ny champ Pricing Table. Raha te hampiasana template ho safidin'ny mpanjifanao ianao, ampiana ny champ Template Selection. Ary izao koa.

_**Fanamarihana:** Raha mamorona vokatra ianao aorian'ny famoronana ny checkout form-nao, dia mila ampiana ilay vokatra ao amin'ny section Pricing table ianao. Raha tsy ampiana, dia tsy ho hita eo anatrehan'ny mpanjifanao ny vokatra eo amin'ny pejy fandraisana (registration page)._

_**Fanamarihana 2:** Ny username, email, password, site title, site URL, order summary, payment ary submit button dia champs tsy azo ialana mba hamoronana checkout form._

Raha miasa amin'ny checkout form-nao ianao, afaka mampiasa ny Preview button ianao mba hijerena hoe ahoana no ho hitan'ny mpanjifanao ilay form. Afaka manova eo anelanelan'ny fomba fijery ho mpampiasa efa misy (existing user) sy mpitsidika (visitor) koa ianao.

![Preview button on the checkout form editor](/img/config/checkout-form-preview-button.png)![Checkout form preview as visitor or existing user](/img/config/checkout-form-preview-modal.png)

Farany, eo amin'ny **Advanced Options** dia afaka manova ny hafatra ho an'ny pejy **Thank You**, afaka manampy zavatra fampahafantarana (snippets) mba hanaraha-maso ny fiovan'ny varotra, afaka manampy CSS manokana ho an'ny checkout form anao na manakana azy amin'ny firenena sasany.

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

Afaka manao ny checkout form anao ianao amin'ny alalan'ny fanindriana (toggling) ity safidy ity eo amin'ny lafiny ankavanana, na dia afaka manasana azy tanteraka aza ianao.

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

Aza adino ny hitsavina (save) ny checkout form anao!

![Save Checkout Form button](/img/config/checkout-form-save.png)

Mba hahazoana ny shortcode an'ny form anao, tsindrio ny **Generate Shortcode** ary kopio ilay vokatra haseho ao amin'ilay modal window.

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**Fanamarihana:** Mila asiana ity shortcode ity eo amin'ny pejy fandraisana (registration page) anao ianao mba hanampiana an'ity checkout form ity azy._

## Famintinana ny vokatra sy ny template mialoha amin'ny alalan'ny URL parameters:

Raha te-hamorona tabilao vidiny manokana ho an'ny vokatrao ary manafatra mialoha eo amin'ny checkout form ilay vokatra na template izay safidin'ilay mpanjifa avy amin'ny pejy vidin'ny vokatra na template anao, dia afaka mampiasa URL parameters ianao.

### **Ho an'ny plan (plans):**

Mandehana any amin'ny **Ultimate Multisite > Products > Select a plan**. Tokony hahita ny bokotra **Click to copy Shareable Link** eo ambony pejy. Io no link azona ampiasaina mba hanafatanana mialoha ity plan manokana ity eo amin'ny checkout form anao.

![Product page with shareable link button](/img/config/products-list.png)

Ny link azo zaraina dia ho an'ny **Plans** ihany no mandeha. Tsy azo ampiasaina ny link azo zaraina ho an'ny packages na services.

### Ho an'ny templates:

Raha te-handamina mialoha ireo site template amin'ny fomba fandraisana (checkout form) ianao, dia afaka mampiasa ilay parameter hoe: **?template_id=X** ao amin'ny URL an'ny pejy fanisana (registration page) ianao. Ilay "X" dia mila ovaina ho **laharana ID an'ilay site template**. Raha hahazo an'io laharana io ianao, mandehin'ny **Ultimate Multisite > Sites**.

Tsindrio ny **Manage** eo ambanin'ilay site template tianao hampiasaina. Ho hitanao ny laharana SITE ID. Ampiasao an'io laharana io ho an'ity site template manokana ity mba ho voafidy mialoha amin'ny checkout form-nao. Amin'izay tranga eto, ilay parameter ao amin'ny URL dia ho **?template_id=2**.

![Sites list showing site template ID](/img/config/site-templates-list.png)

Raha toa ka ny tranokalan'ny tambajotra (network website) dia [**www.mynetwork.com**](http://www.mynetwork.com) ary ny pejy fandraisana misy ilay checkout form dia eo amin'ny pejy **/register**. Ny URL manontolo miaraka amin'ity site template voafidy mialoha ity dia hitovy amin'izao: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Ary raha tianao, afaka voafidy mialoha ny vokatra (products) sy ny templates ho an'ny checkout form-nao ianao. Ny tokony hataonao dia ny kopiana ilay link azo zaraina ho an'ilay plan ary apetaho eo amin'ny farany ilay parameter template. Ho hitany izao: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
