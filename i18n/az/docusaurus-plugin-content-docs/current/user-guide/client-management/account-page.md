---
title: Müştəri Hesabı Səhifəsi
sidebar_position: 14
_i18n_hash: 5eabf7a1ac4c1e867c6e627bbf1f2954
---
# Müştərinizin Hesab Səhifəsi (v2)

_**MÜHİM QEYD: Bu məqalə Ultimate Multisite 2.x versiyasına aiddir.**_

Müştərilər şəbəkənizdə bir plana abunə olduqda, onlar öz ödənişləri, üzvlükləri, domenləri, plan məhdudiyyətləri və s. barədə vacib məlumatlara malik bir veb sayt və onun dashboard-una daxil olurlar.

Bu dərslikdə, sizə müştərinin hesab səhifəsində gəzəcəyik və müştərilərin bu səhifənin içində nə görə biləcəyini və nə edə biləcəyini öyrənəcəksiniz.

## Hesab Səhifəsi

Hesab səhifəsinə müştərinin dashboard-u içində **Account** düyməsinə klikləməklə daxil olmaq mümkündür.

![Account menu in the customer dashboard](/img/account-page/account-menu.png)

![Customer account page overview](/img/account-page/overview.png)

Müştəri bu səhifəyə daxil olduqdan sonra, üzvlüyü, ödəniş ünvanını, fakturaları, domenləri, sayt məhdudiyyətlərini görəcək və həmçinin **Site Template**-i dəyişdirməyə (əgər şəbəkənizdə icazə verilibsə) nail olacaq.

Onlar həmçinin üzvlüyü başqa bir plana dəyişdirə və ya siz təklif etdiyiniz başqa bir paket və ya xidmət ala bilərlər. Gəlin hər bir bölməyə ayrı-ayrılıqda nəzər salaq.

### Üzvlükünüzün Ümumi Baxışı:

Müştərilərin veb sayt adının hemen altında yerləşən ilk blok, onların cari planının və onunla birlikdə alınmış xidmətlər/paketlərin ümumi baxışını göstərir. Bu blok həm də üzvlük nömrəsini, ona görə ödənilən ilkin məbləği, planın və hər hansı bir xidmət/paketin qiymətini və bu üzvlük üçün neçə dəfə ödəniş edildiyini göstərir. Onlar həmçinin üzvlüyün **Active** (Aktiv), **Expired** (Məhdudiyyəti bitmiş) və ya **Canceled** (Ləğv edilmiş) olub-olmadığını görə bilərlər.

![Membership overview showing plan, amount, and billing details](/img/account-page/membership-card.png)

Bu blokun hemen altında, müştərilər **About This Site** və **Site Limits** bloklarını görə bilərlər. Bu bloklar onlara planlarına gələn bütün məhdudiyyətləri göstərir: disk sahəsi, yazı, səhifə, ziyarətçi sayı və s. Bu məhdudiyyətlər **Ultimate Multisite > Products**-da hər bir plan səhifəsində konfiqurasiya edilə bilər.

![About This Site and Site Limits blocks showing plan limitations](/img/account-page/site-limits.png)

**Your Membership**-un sağ tərəfində müştərilər **Change** düyməsinə klikləyə bilərlər. Bu, onlara mövcud bütün planları və paketləri/xidmətləri göstərəcək. Əgər onlar başqa bir plan seçsələr, planın məhdudiyyətləri üzvlüyün cari məhdudiyyətləri əvəzinə tətbiq olunacaq – bu, aşağı düşmə (downgrading) və ya yuxarı qalxma (upgrading) olmasından asılı deyil.

İndi, əgər müştərilər bu cari üzvlük üçün paket və ya xidmətlər (məsələn, daha çox disk sahəsi və ya ziyarətçi sayı) almağa qərar versələr – cari üzvlük dəyişməyəcək, lakin yalnız yeni paketlər ona əlavə ediləcək.

Qeyd edək ki, kupon kodları bu üzvlük dəyişmə səhifəsinə əlavə edilə bilməz. Əgər müştəri ilk üzvlük alışında kupon kodu istifadə edibsə, bu kod yeni üzvlüyə də tətbiq olunacaq.

### Ödəniş Ünvanını Yeniləmək:

Hesab səhifəsində müştərilər öz ödəniş ünvanlarını da yeniləyə bilərlər. Onlar sadəcə _Billing Address_ yanındakı **Update** düyməsinə klikləməlidirlər.

![Billing Address section with Update button](/img/account-page/billing-address.png)

Müştəriniz üçün yeni bir pəncərə açılacaq. Onun etməli olduğu yeganə şey yeni ünvanı doldurmaq və _Save Changes_ düyməsinə klikləməkdir.

![Update billing address form](/img/account-page/billing-address-form.png)

### Sayt Şablonunu Dəyişmək:

Müştərilərin öz sayt şablonlarını dəyişməsinə icazə vermək üçün **Ultimate Multisite > Settings > Sites** yoluna getməli və **Allow Template Switching** seçimini aktivləşdirməlisiniz.

Bundan əlavə, **Ultimate Multisite > Products**-da planlarınızı seçin və **Site Templates** tabına keçin. **Allow Site Templates** seçiminin aktiv olduğundan və **Site Template Selection Mode**-da **Choose Available Site Templates** seçiminin seçildiyindən əmin olun.

![Product site templates tab with template selection mode](/img/config/product-site-templates.png)

Saytınızda mövcud bütün sayt şablonlarını görə biləcəksiniz. Hansılarını mövcud etmək və hansılarını isə bu plan altında abunə olan müştərilərin görməməsini istədiyinizi seçin. Qeyd edək ki, bu seçim checkout formasına da təsir edir, buna görə də **Not Available** olaraq seçilən hər hansı bir şablon bu plan üçün qeydiyyat səhifəsində görünməyəcək.

İndi müştərilər öz hesab səhifələrində **Change Site Template** düyməsinə klikləyə bilərlər.

![Change Site Template button on account page](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 yenilənmiş şablon dəyişmə panelini göstərir. Panel **current-template card** ilə başlayır, beləliklə müştərilər əvəzini seçməzdən əvvəl hansı şablonun aktiv olduğunu görə bilərlər.

Müştərilər öz seçimlərini nəzərdən keçirərkən mövcud seçimdən gözləri ayrılmaması üçün mövcud sayt şablonlarının da daimi bir şüşəyə yerləşdirilmiş şəkildə görünməsi vacibdir.

![Available site templates list for the plan](/img/config/site-templates-list.png)

Dəyişmək istədikləri şablonu seçdikdən sonra, dəyişikliyi təsdiqləməyə çağırılacaqlar.

![Site template switch confirmation dialog](/img/account-page/template-switch-confirm.png)

Təsdiq düyməsini aktivləşdirib **Process Switch** düyməsinə kliklədikdən sonra, yeni sayt şablonu müştərinizin veb saytında istifadə olunacaq.

Müştərilər həmçinin saytı hazırkı təyin edilmiş şablona qaytarmaq lazım olduqda bu paneldən **Reset current template** istifadə edə bilərlər. Başqa bir şablona keçmək kimi, şablonu sıfırlamaq sayt məzmununu dəyişdirə biləcəyi üçün, müştərilər yalnız sıfırlama hərəkətini başa düşdükdə təsdiq etməlidirlər.

### Xüsusi Domenlər Əlavə Etmək:

Müştərilərin öz hesab səhifələrində bu plan üçün xüsusi domen əlavə etmək imkanı olacaq. Müştərilərin xüsusi domenlərdən istifadəsinə icazə vermək üçün **Ultimate Multisite > Settings > Domain Mapping** yoluna gedin.

**Enable Domain Mapping** seçimini aktivləşdirin. Bu, müştərilərin şəbəkə səviyyəsində xüsusi domenlərdən istifadəsinə imkan verəcək.

Məhsul bazasında da domen xəritələşdirmənin aktiv olub-olmadığını yoxlamağı unutmayın – çünki bir məhsulu müştərilərin xüsusi domenlərdən istifadəsinə məhdudlaşdıra bilərsiniz.

**Ultimate Multisite > Products**-a gedin. İstədiyiniz planı seçin və **Custom Domains** tabına keçin. **Allow Custom Domains** seçimini aktivləşdirin.

![Custom Domains tab with Allow Custom Domains toggle](/img/config/product-custom-domains.png)

Bu, bu müəyyən plana abunə olan bütün müştərilərin xüsusi domenlərdən istifadəsinə icazə verəcək. İndi, Hesab səhifəsində müştərilər **Add Domain** düyməsinə klikləyərək xüsusi domen əlavə edə bilərlər.

![Add Domain button on the account page](/img/account-page/add-domain-button.png)

Açılan ilk pəncərə müştərilərin bu xüsusi domenləri şəbəkənizdə işlək etdirmək üçün DNS rekordlarını necə yeniləmələri barədə göstəriş verən bir mesaj göstərəcək.

![DNS instructions shown when adding a custom domain](/img/account-page/add-domain-dns.png)

Bu mesaj **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**-da (siz tərəfindən) redaktə edilə bilər.

![Add New Domain Instructions setting in Domain Mapping](/img/config/settings-domain-mapping.png)

Domen xəritələşdirmə ayarları səhifəsinin tam görünüşü budur:

![Domain mapping settings full page](/img/config/settings-domain-mapping-full.png)

**Next Step** düyməsinə kliklədikdən sonra, müştərilər öz xüsusi domen adlarını əlavə edə və bu xüsusi domenün əsas (primary) olub-olmayacağını seçə bilərlər. Qeyd edək ki, müştərilər veb saytları üçün bir neçə xüsusi domen istifadə edə bilərlər, ona görə də hansının əsas olacağını seçə bilərlər.

![Custom domain name entry with primary domain option](/img/account-page/add-domain-primary.png)

**Add Domain** düyməsinə kliklədikdən sonra, domen müştərinizin hesabına əlavə ediləcək. İndi onların etməli olduğu yeganə şey bu xüsusi domenün DNS rekordlarını öz domen qeydiyyatçısında dəyişməkdir.

### Şifrəni Dəyişmək:

Hesab dashboard-u içində müştərilər **Change Password** düyməsinə klikləməklə şifrələrini dəyişə bilərlər.

![Change Password button on account page](/img/account-page/change-password-button.png)

Bu, müştərilərin cari şifrələrini və sonra istifadə etmək istədikləri yeni şifrələri doldurması lazım olan yeni bir pəncərə göstərəcək.

![Change password form with current and new password fields](/img/account-page/change-password-form.png)

### Təhlükəli Zona (Danger Zone):

Həmçinin **Danger Zone** hissəsində iki seçim var: **Delete Site** və **Delete Account**. Hər ikisi də Təhlükəli Zona hissəsindədir, çünki bu iki hərəkət geri döndərilməzdir. Əgər müştərilər veb saytlarını və ya hesablarını silərsə, onları bərpa edə bilməyəcəklər.

![Danger Zone with Delete Site and Delete Account options](/img/account-page/danger-zone.png)

Əgər müştərilər bu iki seçimdən hər hansı birinə klikləsələr, onlara veb saytı və ya hesabı silmək üçün seçimi aktivləşdirmələri lazım olan və bu hərəkətin geri alınmaması barədə xəbərdar ediləcəyi bir pəncərə göstəriləcək.

![Delete Site confirmation dialog](/img/account-page/delete-site-confirm.png)

![Delete Account confirmation dialog](/img/account-page/delete-account-confirm.png)

Əgər veb saytlarını silərlərsə, onların hesabı və üzvlüyü hələ də toxunulmamış olacaq. Onlar sadəcə veb saytlarındakı bütün məzmunu itirəcəklər. Əgər hesablarını silərlərsə, bütün veb saytlar, üzvlüyü və bu hesabla bağlı bütün məlumatlar itiriləcək.
