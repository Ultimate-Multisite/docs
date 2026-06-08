---
title: Domain Mappingu Necə Konfiqurasiya Edilir
sidebar_position: 6
_i18n_hash: 70b0ea1fd4e24e701978329f52843452
---
# Domain Mapping Necə Qurulur (v2)

_**MÜHİM QEYD: Bu məqalə Ultimate Multisite-ın 2.x versiyasına aiddir.**_

Premium bir network-in ən güclü xüsusiyyətlərindən biri də müştərilərimizə öz saytlarına bir üst səviyyə domen (top-level domain) bağlama imkanı verməsidir. Nə ki, hansı daha peşəkar görünür: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) yoxsa [_**joesbikeshop.com**_](http://joesbikeshop.com)? Məhz buna görə də Ultimate Multisite bu funksiyanı üçüncü tərəf plugin-lərindən istifadə etməyə ehtiyac olmadan özündə birləşdirir.

## Domain mapping nədir?

Adından da göründüyü kimi, domain mapping, Ultimate Multisite-ın istifadəçiyə özəl bir domen tələbini qəbul edib, bu tələbi həmin domenlə əlaqəli müvafiq sayta xəritələmə (map) imkanı verməsidir.

### Ultimate Multisite Network-inizdə domain mapping necə qurulur

Domain mapping işləməsi üçün sizin tərəfinizdən bəzi qurulmalar tələb edir. Nə vaxt ki, Ultimate Multisite bu çətin işi sizin yerinizə avtomatik yerinə yetirir, bu da tələbləri asanlıqla yerinə yetirməyinizi təmin edir.

Ultimate Multisite quraşdırılması zamanı, wizard avtomatik olaraq **sunrise.php** faylını müəyyən edilmiş qovluğa kopyalayıb quraşdıracaq. **Wizard bu addım tamamlanana qədər davam etməyə icazə verməyəcək**.

![Ultimate Multisite installation wizard with sunrise.php step](/img/installation/install-wizard.png)

Bu o deməkdir ki, Ultimate Multisite quraşdırma wizard-i network-inizi qurmağa bitirdikdən sonra, dərhal özəl domenləri xəritələməyə başlaya bilərsiniz.

Qeyd edin ki, Ultimate Multisite-dakı domain mapping məcburi deyil. Siz WordPress Multisite-ın yerli domain mapping funksiyasından və ya istənilən başqa domain mapping həllindən istifadə etmək imkanınız var.

Əgər başqa domain mapping həllinlərinin yolunu açmaq üçün Ultimate Multisite domain mapping funksiyasını deaktiv etmək lazım gəlirsə, bunu **Ultimate Multisite > Settings > Domain Mapping** altında edə bilərsiniz.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

Bu seçimin birbaşa altında **Force Admin Redirect** seçimi də görünür. Bu seçim müştərilərin özəllər domenləri və ya alt domenləri üzərindən admin dashboard-larına daxil olub-olmayacağını nəzarət etməyinizə imkan verir.

Əgər **Force redirect to mapped domain** seçsəniz, müştərilərin öz admin dashboard-larına yalnız özəllər domenləri üzərindən daxil olmaları mümkün olacaq.

**Force redirect to network domain** seçimi isə tam əksini edəcək – müştərilər özəllər domenlərində daxil olmağa çalışsalar belə, yalnız alt domenləri üzərindən dashboard-larına daxil olacaqlar.

Və **Allow access to the admin by both mapped domain domain and network domain** seçimi isə onlara həm alt domen, həm də özəllər domenləri üzərindən admin dashboard-larına daxil olmağa icazə verir.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

Özəl domenləri xəritələməyin iki yolu var. Birincisi, network admin dashboard-unuzdan super admin kimi domen adını xəritələməkdir, ikincisi isə subsite admin dashboard-u altındakı account səhifəsidir.

Ancaq network-inizdəki subsite-lardan birinə özəl domen xəritələməyə başlamazdan əvvəl, domen adının **DNS settings**-lərinin düzgün qurulduğundan əmin olmalısınız.

###

### Domen DNS ayarlarının düzgün qurulduğundan əmin olmaq

Bir xəritələmənin işləməsi üçün, xəritələməyi planlaşdırdığınız domen, Network-inizin IP ünvaninə işarə etməlidir. Qeyd edin ki, siz xəritələmək istədiyiniz özəl domenin IP ünvanını deyil, Ultimate Multisite-ın quraşdırıldığı domenin Network IP ünvanına ehtiyacınız var. Müəyyən bir domenin IP ünvanını axtarmaq üçün, məsələn, [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) saytına getməyi təklif edirik.

Domeni düzgün xəritələmək üçün, **DNS** konfiqurasiyanızda həmin **IP ünvaninə** işarə edən bir **A RECORD** əlavə etməlisiniz. DNS idarəetməsi fərqli domen registratorları arasında çox fərqlənir, lakin " _Creating A Record on XXXX_ " axtarışını edərək, burada XXXX sizin domen registratorunuzdur (məsələn: " _Creating A Record on_ _GoDaddy_ ") kimi, onlayn çoxlu tutorial mövcuddur.

Əgər bunu işlətməkdə çətinlik çəkirsinizsə, **domen registratorunuzun dəstəyinə müraciət edin** və onlar bu hissədə sizə kömək edə biləcəklər.

Əgər müştərilərin öz domenlərini xəritələməsinə icazə vermək planlaşdırırsınızsa, onlar bu hissədə öz işlərini görməlidirlər. Əgər A Record yaratmaqda çətinlik çəkirlərsə, onları öz registrator dəstək sistemlərinə yönləndirin.

### Super Admin kimi özəl domen adını xəritələmək

Network-inizdə super admin kimi daxil olarkən, **Ultimate Multisite > Domains** bölməsinə getməklə özəl domen adlarını asanlıqla əlavə edə və idarə edə bilərsiniz.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Bu səhifə altında, yuxarıdakı **Add Domain** düyməsinə klik edə bilərsiniz və bu, özəl domen adını təyin edib doldura biləcəyiniz, özəl domen adını tətbiq etmək istədiyiniz **subsite**-ı seçə biləcəyiniz və bunu **primary domain** adı olaraq təyin edib-etməyəcəyinizi qərarlaşdıra biləcəyiniz bir modal pəncərə açacaq (qeyd edin ki, **bir subsite-a bir neçə domen adı xəritələyə bilərsiniz**).

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

Bütün məlumatları daxil etdikdən sonra, aşağıdakı **Add Existing Domain** düyməsinə klik edə bilərsiniz.

Bu, özəl domenin DNS məlumatlarını yoxlama və alma prosesini başlatacaq. Həmçinin, prosesin keçdiyi mərhələləri izləyə biləcəyiniz bir log da səhifənin altında görünəcək. Bu prosesin tamamlanması bir neçə dəqiqə çəkə bilər.

Hər şey düzgün qurulubsa, **Stage** və ya status **Checking DNS**-dən **Ready**-yə keçməlidir.

![Domain row showing the Checking DNS stage in the domains list](/img/admin/domain-stage-checking.png)

![Domain row showing the Ready stage with the green status indicator](/img/admin/domain-stage-ready.png)

Domen adına klik etsəniz, onun içində bəzi seçimlər görmək mümkün olacaq. Onlara bir baxaq:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Stage:** Bu, domenün hazırkı mərhələsidir. Domeni ilk dəfə əlavə etdiyiniz zaman, ehtimal ki, **Checking DNS** mərhələsində olacaq. Proses DNS girişlərini yoxlayacaq və onların düzgünlüyünü təsdiqləyəcək. Sonra, domen **Checking SSL** mərhələsinə keçəcək. Ultimate Multisite domenin SSL-i olub-olmadığını yoxlayacaq və domeninizi **Ready** və ya **Ready (without SSL)** olaraq təsnif edəcək.

**Site:** Bu domenə qoşulmuş alt domen. Xəritələnmiş domen bu müəyyən saytın məzmununu göstərəcək.

**Active:** Domeni aktivləşdirmək və ya deaktiv etmək üçün bu seçimi açılıb-bağlı edə bilərsiniz.

**Is Primary Domain?:** Müştərilərin hər sayt üçün bir neçə xəritələnmiş domen ola bilər. Bu seçimi, bu sayt üçün əsas domen olub-olmadığını seçmək üçün istifadə edin.

**Is Secure?:** Ultimate Multisite domen aktivləşdirməzdən əvvəl SSL sertifikatı olub-olmadığını yoxlasa da, siz domenə SSL sertifikatı ilə və ya onun olmadan yükləməyi əl ilə seçə bilərsiniz. Qeyd edin ki, veb saytın SSL sertifikatı yoxdursa və siz onu SSL ilə yükləməyə məcbur qoysanız, səhvlər verə bilər.

### Subsite istifadəçisi kimi özəl domen adını xəritələmək

Subsite administratorları öz subsite admin dashboard-larından da özəl domen adlarını xəritələyə bilərlər.

Əvvəlcə, **Domain mapping** ayarları altında bu seçimi aktivləşdirməli olduğunuzdan əmin olun. Aşağıdakı skrinşota baxın.

![Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle](/img/config/domain-mapping-customer-dns.png)

Bu seçimi **Ultimate Multisite > Products** altında **Plan** səviyyəsində və ya məhsul seçimlərində də təyin edə və ya konfiqurasiya edə bilərsiniz.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

Bu seçimlərdən hər hansı biri aktivləşdirildiyi və subsite istifadəçisinə özəl domen adlarını xəritələməyə icazə verildiyi zaman, subsite istifadəçisi **Account** səhifəsi altında **Domains** adlı bir metabox görməlidir.

![Domains metabox on the subsite Account page with Add Domain button](/img/account-page/domains-metabox.png)

İstifadəçi **Add Domain** düyməsinə klik edə bilər və bu, bəzi təlimatlar olan bir modal pəncərə açacaq.

![Add Domain modal showing DNS A-record instructions for subsite users](/img/account-page/domain-add-instructions.png)

İstifadəçi sonra **Next Step** düyməsinə klik edib özəl domen adını əlavə etmək prosesinə davam edə bilər. Həmçinin, bunun əsas domen olub-olmayacağını da seçə bilər.

![Add Domain form with custom domain name field and primary domain toggle](/img/account-page/domain-add-form.png)

![Add Domain confirmation step that triggers DNS verification](/img/account-page/domain-add-confirm.png)

**Add Domain** düyməsinə klik etmək, özəl domenin DNS məlumatlarını yoxlama və alma prosesini başlatacaq.

### Domain Syncing haqqında

Domain Syncing, Ultimate Multisite-ın domain mapping-in işləməsi üçün özəl domen adını hosting hesabınıza əlavə etdiyi bir prosesdir (add-on domain kimi).

Hosting provayderiniz Ultimate Multisite domain mapping funksiyası ilə inteqrasiyaya malikdirsə, domain syncing avtomatik baş verir. Hazırda bu hosting provayderləri _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways_ və _Cpanel_ -dir.

Bu inteqrasiyanı Ultimate Multisite ayarları altında **Integration** tabında aktivləşdirməlisiniz.

![Integrations tab in Ultimate Multisite settings showing hosting providers](/img/config/integrations-tab.png)

![Hosting provider Configuration links on the Integrations settings tab](/img/config/integrations-providers.png)

_Qeyd edin ki, əgər hosting provayderiniz yuxarıda qeyd olunan provayderlərdən biri deyilsə,**domen adını əl ilə sinxronizasiya etməli və ya əlavə etməlisiniz**._
