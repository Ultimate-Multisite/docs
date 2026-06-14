---
title: Pag-customize sa Imong Registration Form
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Pag-customize sa imong Registration Form

Para magpabilin nga unique ang imong network gikan sa tanang ubang SaaS nga gihimo sa WordPress platform, ang Ultimate Multisite nagtugot kanimo sa pag-customize sa imong registration ug login pages gamit ang among **Checkout Forms** feature.

Bisan pa nga dali ra ni ug flexible para mag-experiment sa lain-laing pamaagi kung gusto nimo ma-convert ang bag-ong mga customer, kini kadaghanan gigamit para makahimo og personalized nga registration forms. Kini nga article nagtumong sa pagpakita kanimo unsaon nimo kini pagbuhat.

## Login ug registration pages:

Pag-install sa Ultimate Multisite, awtomatikong maghimo kini og custom login ug registration pages sa imong main site. Mahimo nimong usbon kining default nga mga pages bisan kanus-a pinaagi sa pag-adto sa imong **Ultimate Multisite > Settings > Login & Registration** page.

![Login and Registration settings page](/img/config/settings-general.png)

Ania ang tibuok tan-aw sa login ug registration settings page:

![Login and Registration settings full page](/img/config/settings-login-registration-full.png)

Atong tan-awon ang matag option nga imong mahimo i-customize sa **Login & Registration** page:

  * **Enable registration:** Kini nga option mag-enable o mag-disable sa registration sa imong network. Kung kini gipatabong off, dili makarehistro ug magsubscribe ang imong mga customer sa imong mga produkto.

  * **Enable email verification:** Kung kining option gipatabong on, ang mga customer nga nag-subscribe para sa libreng plano o bayad nga plano nga adunay trial period makadawat og email verification ug kinahanglan silang i-click ang verification link aron mahimo ang ilang websites.

* **Default registration page:** Kini ni ang default nga pahina para sa pag-register. Kinahanglan kining i-publish sa imong website ug adunay registration form (gitatawag usab og checkout form) - diin ang imong mga kliyente mag-subscribe sa imong mga produkto. Mahimo kang maghimo og daghang registration pages ug checkout forms nga gusto nimo, pero hinumdumi lang nga ibutang ang checkout form shortcode sa registration page, kung dili kini modapad-on.

  * **Use custom login page:** Kini nga option nagtugot kanimo sa paggamit og customized nga login page, ubos pa sa default nga wp-login.php page. Kung i-toggle ni, pwede kang mopili unsa nga page ang gamiton para sa login sa **Default login page** option (sa tunga ra ni).

  * **Obfuscate the original login url (wp-login.php)** : Kung gusto nimo itago ang orihinal nga login URL, pwede nimong i-toggle kining option on. Makatabang kini aron mapugngan ang brute-force attacks. Kung gi-enable ni, ang Ultimate Multisite magpakita og 404 error kung ang usa ka user mosulay sa pag-access sa orihinal nga wp-login.php link.

  * **Force synchronous site publication:** Human nga ang usa ka customer mag-subscribe sa produkto sa usa ka network, ang bag-ong pending site kinahanglan ma-convert ngadto sa tinuod nga network site. Ang proseso sa pag-publish mahitabo pinaagi sa Job Queue, asynchronoso. I-enable kining option aron mapilit ang pag-publish sa parehas nga request sa signup.

Karon, tan-awa nato ang ubang mga option nga gihigugma pa sa login ug registration process. Kini naa sa ubos ni **Other options** sa parehas nga Login & registration page:

  * **Default role:** Kini mao ang role nga naay imong mga customer sa ilang website human sa signup process.

* **Enable Jumper:** Nagab-on ni Jumper shortcut sa admin area. Ang Jumper nagtugot sa mga administrator nga dali mobalhin ng Ultimate Multisite screens, network objects, ug uban pang suportadong destinasyon nga dili na kinahanglan mag-browse sa matag menu. Patya kini kung gusto nimo itago ang maong pamaagi sa mabilis nga paglihok gikan sa admin interface.

* **Idagdag usab ang mga user sa main site:** Ang pag-enable ni option kay idadagdag usab ang user sa main site sa imong network human sa proseso sa signup. Kung i-enable nimo kining option, adunay option nga mag-set sa **default role** niini nga mga user sa imong website nga moabot dayon sa ubos.

* **Enable multiple accounts:** Tugotan kini nga adunay mga account ang mga user sa lain-laing sites sa imong network gamit ang parehas nga email address. Kung off kini, dili makakagamit ang imong mga customer og account sa ubang websites nga nagpadagan sa imong network nga may parehas nga email address.

Ug mao na lang ni ang mga option nga may kalabotan sa login ug registration nga pwede nimo i-customize! Ayaw kalimot i-save ang imong settings human matapos nimo i-edit kini.

## Paggamit og dagkong mga registration form:

Ang Ultimate Multisite 2.0 nagtanyag og checkout form editor nga nagtugot kanimo sa paghimo og bisan pila pa ka forms, nga adunay lain-laing fields, products nga gitanyag, ug uban pa.

Ang login page ug ang registration page parehas nga gipangita gamit ang shortcodes: **[wu_login_form]** sa login page ug **[wu_checkout]** para sa registration page. Mahimo nimo dugang i-customize ang registration page pinaagi sa paghimo o pag-create og checkout forms.

Aron ma-access kini nga feature, pumunta sa menu nga **Checkout Forms**, sa left side-bar.

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

Sa pahinang ni, makita nimo ang tanan nimong checkout forms.

Kung gusto ka maghimo og bag-o, i-click lang ang **Add Checkout Form** sa taas sa page.

Pwede nimo pilion ang usa niining tulo ka opsyon isip nagsugod: single step, multi-step o blank. Unya, i-click para **Moadto sa Editor**.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

Alternatibo, pwede nimo i-edit o i-duplicate ang mga form nga naa na ninyo pinaagi sa pag-click sa mga opsyon ubos sa ngalan niini. Didto pud ninyo makita ang mga opsyon para kopyahon ang shortcode sa form o para ma-delete ang form.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Kung mopili mo og single step o multi-step, ang checkout form kay pre-populated na sa basic steps aron molihok kini. Unya, kung gusto ninyo, pwede ninyong dugangan og extra steps kaniya.

### Pag-edit sa Checkout Form:

Ingon sa among gihisgutan kaniadto, pwede mo maghimo og checkout forms para sa lain-laing mga katuyoan. Sa panigunting niini nga example, magtrabaho kita sa usa ka registration form.

Human moadto sa checkout form editor, hatagi ang inyong form og ngalan (nga gamiton lang para sa internal reference) ug slug (gamit para makahimo og shortcodes, pananglitan).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Ang mga form gihimo sa mga steps ug fields. Pwede mo magdugang og bag-ong step pinaagi sa pag-click sa **Add New Checkout Step**.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

Sa unang tab sa modal window, pun-on ang content sa inyong step sa form. Hatagi kini og ID, ngalan ug description. Kini nga mga butang kadaghanan gamiton sa sulod lang.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step-content.png)

Sunod, i-set ang visibility sa step. Pwede mo mopili tali sa **Always show** (Kanunay ipakita), **Only show for logged in users** (Ipakita lang para sa mga naka-login nga user), o **Only show for guests** (Ipakita lang para sa mga bisita).

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

Sa katapusan, i-configure ang style sa matag-usa nga step. Kini mga optional nga field.

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

Karon, panahon na aron magdugang og fields sa atong unang step. I-click lang para sa **Add New Field** ug piliha ang klase sa section nga gusto nimo.

![Add New Field button](/img/config/checkout-form-step-with-fields.png)![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

Ang matag field adunay lain-laing parameters nga iapil. Para niining unang pagpasulod, pilion nato ang **Username** field.

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

Mahimo kang magdugang og daghang steps ug fields kutob sa imong kinahanglanon. Aron ipakita ang imong mga produkto para mapili kini sa imong mga customer, gamiton ang Pricing Table field. Kung gusto nimo tugotan ang imong mga kliyente nga mopili og template, dugangi ang Template Selection field. Ug mao na usab.

_**Note:** Kung maghimo ka og product human nahimong checkout form, kinahanglan nimong idugang ang product sa pricing table section. Kung wala nimo kini idugang, dili makita sa imong mga customer ang product sa registration page._

_**Note 2:** Ang username, email, password, site title, site URL, order summary, payment, ug submit button kay mandatory nga fields aron makabuo og checkout form._

Samtang nagtrabaho ka sa imong checkout form, pwede gihapon gamiton ang Preview button para makita kung unsaon makita sa imong mga kliyente ang form. Mahimo usab kang mag-alternate tali sa pagtan-aw isip usa ka existing user o usa ka visitor.

Sa katapusan, sa **Advanced Options** pwede nimo i-configure ang mensahe para sa pahina nga **Thank You**, magdugang og mga snippet para ma-track ang conversions, magdugang og custom CSS para sa imong checkout form o maglimpyo kini sa pipila ka nasud.

Pwede pud nimo manu-manan o i-disable ang imong checkout form pinaagi sa pag-toggle ni option sa tuig nga column, o permanenteng burahin ang form.

Ayaw kalimti nga i-save ang imong checkout form!

Para makuha ang shortcode sa imong form, i-click ang **Generate Shortcode** ug kopya ang resulta nga gipakita sa modal window.

_**Note:** Kinahanglan nimo i-add kining shortcode sa imong registration page aron mahimong ma-add kini nga checkout form._

## Pagpili og mga produkto ug templates pinaagi sa URL parameters:

Kung gusto nimo maghimo og customized nga pricing tables para sa imong mga produkto ug pre-select sa checkout form ang produkto o template nga gusto sa imong customer gikan sa imong pricing table o templates page, pwede nimo gamiton ang URL parameters para niini.

### **Para sa mga plano (plans):**

Punta sa **Ultimate Multisite > Products > Select a plan**. Makita nimo ang button nga **Click to copy Shareable Link** sa taas sa pahina. Kini ang link nga pwede nimong gamiton aron pre-select kining piho nga plano sa imong checkout form.

![Product page with shareable link button](/img/config/products-list.png)

Ang link nga kini shareable kay para lang sa mga **Plans**. Dili nimo magamit ang shareable links para sa mga packages o services.

### Para sa templates:

Kung gusto nimo i-pre-select ang site templates sa imong checkout form, pwede nimong gamiton ang parameter nga: **?template_id=X** sa URL sa imong registration page. Ang "X" kinahanglan pinalitan sa **site template ID number**. Aron makuha niini nga numero, pumunta sa **Ultimate Multisite > Sites**.

I-click ang **Manage** diayo sa ubos sa site template nga gusto nimong gamiton. Makita nimo ang SITE ID number. Gamita lang kini nga numero para anang specific site template aron ma-pre-select sa imong checkout form. Sa among kaso diri, ang URL parameter kay **?template_id=2**.

![Sites list showing site template ID](/img/config/site-templates-list.png)

Ingon tuis, ang atong network website kay [**www.mynetwork.com**](http://www.mynetwork.com) ug ang atong registration page nga naa sa checkout form kay anang **/register** page. Ang tibuok URL uban ni pre-selected site template kay moabot sama ni [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Ug kung gusto nimo, pwede nimong i-pre-select ang parehong products ug templates sa imong checkout form. Ang kinahanglan nimo buhaton kay kopyahon lang ang shareable link sa plan ug i-paste ang template parameter sa katapusan. Moabot kini sama ni [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
