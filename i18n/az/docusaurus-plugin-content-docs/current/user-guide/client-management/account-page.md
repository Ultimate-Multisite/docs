---
title: Müştəri Account səhifəsi
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Müştərinizin Account Səhifəsi (v2)

_**VACİB QEYD: Bu məqalə Ultimate Multisite 2.x versiyasına aiddir.**_

Müştərilər şəbəkənizdə bir plana abunə olduqda, onlar ödənişləri, üzvlükləri, domenləri, plan məhdudiyyətləri və s. haqqında vacib məlumatların olduğu bir vebsayta və onun Dashboard-ına giriş əldə edirlər...

Bu təlimatda sizi müştərinin Account səhifəsi ilə tanış edəcəyik və müştərilərinizin orada nə görə və nə edə bildiyini görəcəksiniz.

## Account Səhifəsi

Account səhifəsinə müştərinizin Dashboard-ında **Account** üzərinə klikləməklə daxil olmaq mümkündür.

![Müştəri Dashboard-ında Account menyusu](/img/account-page/account-menu.png)

Suveren icarəçi şəbəkələrində Ultimate Multisite v2.13.0 bu müştəri idarəetmə təcrübəsini əsas saytda saxlayır. Müştəri suveren icarəçidən Account, ödəniş, fakturalama, invoice, sayt idarəetməsi, şablon dəyişdirmə və ya domen xəritələmə əməliyyatlarını açarsa, əməliyyat əsas saytın müştəri panelinə yönəlir ki, şəbəkə fakturalaması və üzvlük qeydləri səlahiyyətli olaraq qalsın.

Müştəri suveren icarəçidən gəldikdə, əsas saytın müştəri paneli icarəçi sayta geri qayıdış linki daxil edə bilər. Qayıdış linki yalnız Ultimate Multisite qayıdış hədəfini müştərinin saytlarından biri kimi doğrulaya bildikdə göstərilir; bu, ixtiyari yönləndirmələrin qarşısını alır və icarəçi iş axınını qoruyur.

![Müştəri Account səhifəsinin ümumi görünüşü](/img/account-page/overview.png)

Müştəri buna kliklədikdən sonra üzvlüyünün, fakturalama ünvanının, invoice-lərin, domenlərin, sayt məhdudiyyətlərinin ümumi görünüşünü görəcək və həmçinin ****Sayt Şablonunu** (şəbəkənizdə buna icazə verilirsə)** dəyişə biləcək.

Onlar həmçinin üzvlüyü başqa plana dəyişə və ya təklif etdiyiniz başqa paket və ya xidməti satın ala bilərlər. Gəlin hər bölməyə ayrıca nəzər salaq.

### Üzvlüyünüzün Ümumi Görünüşü:

Müştərilərinizin vebsayt adının dərhal altındakı ilk blok onların cari planının və onunla birlikdə satın alınmış xidmətlərin/paketlərin ümumi görünüşünü göstərir. Blok həmçinin üzvlük nömrəsini, onun üçün ödənilmiş ilkin məbləği, planın və hər hansı xidmətin/paketin nə qədər başa gəldiyini və bu üzvlük üçün neçə dəfə faktura kəsildiyini göstərir. Onlar həmçinin üzvlüyün **Aktiv**, **Müddəti Bitmiş** və ya **Ləğv Edilmiş** olduğunu görə bilərlər.

![Plan, məbləğ və fakturalama detallarını göstərən üzvlük ümumi görünüşü](/img/account-page/membership-card.png)

Bu blokun dərhal altında müştəriləriniz **Bu Sayt Haqqında** və **Sayt Limitləri** bloklarını görə bilərlər. Bu bloklar onlara planlarına daxil olan bütün məhdudiyyətləri göstərir: disk sahəsi, yazılar, səhifələr, ziyarətlər və s... Bu limitlər hər plan səhifəsində **Ultimate Multisite > Məhsullar** bölməsində konfiqurasiya edilə bilər.

![Plan məhdudiyyətlərini göstərən Bu Sayt Haqqında və Sayt Limitləri blokları](/img/account-page/site-limits.png)

**Üzvlüyünüz** bölməsinin sağ tərəfində müştərilər **Dəyiş** üzərinə klikləyə bilərlər. Bu, onlara bütün mövcud planları və paketləri/xidmətləri göstərəcək. Əgər başqa plan seçsələr, üzvlüyün cari məhdudiyyətlərinin əvəzinə həmin planın məhdudiyyətləri tətbiq olunacaq — planı aşağı salmalarından və ya yüksəltmələrindən asılı olmayaraq.

İndi, əgər müştəriləriniz bu cari üzvlük üçün daha çox disk sahəsi və ya ziyarət kimi paketlər və ya xidmətlər almağı seçsələr, cari üzvlük dəyişdirilməyəcək, yalnız yeni paketlər ona əlavə olunacaq.

Qeyd edin ki, kupon kodları bu üzvlük dəyişdirmə səhifəsində əlavə edilə bilməz. Müştəri ilk üzvlük alışında kupon kodundan istifadə edibsə, kod bu yeni üzvlüyə də tətbiq olunacaq.

### Fakturalama Ünvanının Yenilənməsi:

Account səhifəsində müştəriləriniz fakturalama ünvanlarını da yeniləyə bilərlər. Onlar sadəcə _Fakturalama Ünvanı_ yanında **Yenilə** üzərinə klikləməlidirlər.

![Yenilə düyməsi olan Fakturalama Ünvanı bölməsi](/img/account-page/billing-address.png)

Müştəriniz üçün yeni pəncərə görünəcək. Onun etməli olduğu tək şey yeni ünvanı doldurmaq və _Dəyişiklikləri Saxla_ üzərinə klikləməkdir.

![Fakturalama ünvanını yeniləmə forması](/img/account-page/billing-address-form.png)

### Sayt Şablonunun Dəyişdirilməsi:

Müştərilərinizə sayt şablonlarını dəyişməyə icazə vermək üçün **Ultimate Multisite > Parametrlər > Saytlar** bölməsinə keçməli və **Şablon Dəyişdirməyə İcazə Ver** seçimini aktiv etməlisiniz.

Həmçinin, **Ultimate Multisite > Məhsullar** bölməsində planlarınızı seçin və **Sayt Şablonları** tabına keçin. **Sayt Şablonlarına İcazə Ver** seçiminin aktiv olduğundan və **Sayt Şablonu Seçim Rejimi** bölməsində **Mövcud Sayt Şablonlarını Seç** seçiminin seçildiyindən əmin olun.

![Şablon seçim rejimi olan məhsul sayt şablonları tabı](/img/config/product-site-templates.png)

Vebsaytınızdakı bütün mövcud sayt şablonlarını görə biləcəksiniz. Hansılarını əlçatan etmək istədiyinizi və bu plan altında abunə olmuş müştəriləriniz üçün hansılarını əlçatan etməmək istədiyinizi seçin. Qeyd edin ki, bu seçimlər ödəniş formasına da təsir edir, buna görə **Əlçatan Deyil** kimi seçilmiş istənilən şablon bu plan üçün qeydiyyat səhifəsində görünməyəcək.

İndi müştəriləriniz Account səhifəsində **Sayt Şablonunu Dəyiş** üzərinə klikləyə bilərlər.

![Account səhifəsində Sayt Şablonunu Dəyiş düyməsi](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 yenidən dizayn edilmiş şablon dəyişdirmə panelini göstərir. Panel **cari şablon kartı** ilə başlayır ki, müştərilər əvəzləyici seçməzdən əvvəl hansı şablonun aktiv olduğunu görə bilsinlər.

Müştərilər seçimlərini nəzərdən keçirərkən mövcud sayt şablonlarının daimi şəbəkəsi görünən qalır. Bu, onlara cari seçimi gözdən itirmədən planları üçün icazə verilən şablonları müqayisə etməyə kömək edir.

![Plan üçün mövcud sayt şablonları siyahısı](/img/config/site-templates-list.png)

Dəyişmək istədikləri şablonu seçdikdən sonra onlardan dəyişikliyi təsdiqləmələri istənəcək.

![Sayt şablonu dəyişdirmə təsdiq dialoqu](/img/account-page/template-switch-confirm.png)

Təsdiqi aktiv etdikdən və **Dəyişdirməni İcra Et** üzərinə kliklədikdən sonra yeni sayt şablonu müştərinizin vebsaytında istifadə olunacaq.

Müştərilər həmçinin saytı hazırda təyin edilmiş şablona geri sıfırlamalı olduqda bu paneldən **Reset current template** istifadə edə bilərlər. Başqa şablona keçmək kimi, şablonu sıfırlamaq da sayt məzmununun üzərinə yaza bilər, buna görə müştərilər bunu yalnız sıfırlama əməliyyatını başa düşdükdə təsdiqləməlidirlər.

### Fərdi Domenlərin Əlavə Edilməsi:

Müştəriləriniz həmçinin hesab səhifələrində bu plan üçün fərdi domen əlavə etmək seçiminə malik olacaqlar. Müştərilərinizə fərdi domenlərdən istifadə etməyə icazə vermək üçün **Ultimate Multisite > Settings >** **Domain Mapping** bölməsinə keçin.

**Enable Domain Mapping** seçimini aktiv edin. Bu, müştərilərinizə şəbəkə səviyyəsində fərdi domenlərdən istifadə etməyə imkan verəcək.

Domen xəritələməsinin məhsul əsasında aktiv olub-olmadığını da yoxlamağı unutmayın - çünki siz bir məhsulu müştərilərinizin fərdi domenlərdən istifadə etməsinə icazə verməyəcək şəkildə məhdudlaşdıra bilərsiniz.

**Ultimate Multisite > Products** bölməsinə keçin. Seçdiyiniz planı seçin və **Custom Domains** vərəqinə keçin. **Allow Custom Domains** seçimini aktiv edin.

![Allow Custom Domains keçidi olan Custom Domains vərəqi](/img/config/product-custom-domains.png)

Bu, bu xüsusi plana abunə olan bütün müştərilərə fərdi domenlərdən istifadə etməyə imkan verəcək. İndi Account səhifəsində müştəriləriniz **Add Domain** üzərinə klikləməklə fərdi domen əlavə edə bilərlər.

![Account səhifəsində Add Domain düyməsi](/img/account-page/add-domain-button.png)

Açılan ilk pəncərə müştərilərinizə bu fərdi domenin şəbəkənizdə işləməsi üçün DNS qeydlərini necə yeniləmək barədə təlimat verən mesaj göstərəcək.

![Fərdi domen əlavə edərkən göstərilən DNS təlimatları](/img/account-page/add-domain-dns.png)

Bu mesaj **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions** bölməsində (sizin tərəfinizdən) redaktə edilə bilər.

![Domain Mapping-də Add New Domain Instructions ayarı](/img/config/settings-domain-mapping.png)

Domen xəritələməsi ayarları səhifəsinin tam görünüşü budur:

![Domen xəritələməsi ayarlarının tam səhifəsi](/img/config/settings-domain-mapping-full.png)

**Next Step** üzərinə kliklədikdən sonra müştəriləriniz fərdi domen adını əlavə edə və bu fərdi domenin əsas domen olub-olmayacağını seçə bilərlər. Qeyd edin ki, müştəriləriniz veb-saytları üçün birdən çox fərdi domendən istifadə edə bilərlər, buna görə hansının əsas domen olacağını seçə bilərlər.

![Əsas domen seçimi ilə fərdi domen adı daxil edilməsi](/img/account-page/add-domain-primary.png)

**Add Domain** üzərinə kliklədikdən sonra domen müştərinizin hesabına əlavə ediləcək. İndi etməli olduqları tək şey domen qeydiyyatçısında bu fərdi domenin DNS qeydlərini dəyişdirməkdir.

### Parolun Dəyişdirilməsi:

Account dashboard daxilində müştəriləriniz **Change Password** üzərinə klikləməklə parollarını da dəyişə bilərlər.

![Account səhifəsində Change Password düyməsi](/img/account-page/change-password-button.png)

Bu, müştərilərinizin cari parollarını doldurmalı və sonra istifadə etmək istədikləri yeni parolu daxil etməli olduqları yeni pəncərə göstərəcək.

![Cari və yeni parol sahələri olan parol dəyişdirmə forması](/img/account-page/change-password-form.png)

### Təhlükə Zonası:

**Danger Zone** hissəsində göstərilən iki seçimimiz də var: **Delete Site** və **Delete Account**. Onların hər ikisi Danger Zone hissəsindədir, çünki bu iki əməliyyat geri qaytarılmazdır. Müştəriləriniz veb-saytlarını və ya hesablarını silsələr, onları geri bərpa edə bilməzlər.

![Delete Site və Delete Account seçimləri olan Danger Zone](/img/account-page/danger-zone.png)

Müştəriləriniz bu iki seçimdən hər hansı birinə klikləsələr, onlara veb-saytı və ya hesabı silmək seçimini aktiv etməli olduqları pəncərə göstəriləcək və bu əməliyyatın geri qaytarıla bilməyəcəyi barədə xəbərdarlıq ediləcək.

![Delete Site təsdiq dialoqu](/img/account-page/delete-site-confirm.png)

![Delete Account təsdiq dialoqu](/img/account-page/delete-account-confirm.png)

Əgər onlar veb-saytlarını silsələr, hesabları və üzvlükləri yenə də toxunulmaz qalacaq. Onlar sadəcə veb-saytlarındakı bütün məzmunu itirəcəklər. Əgər hesablarını silsələr, bu hesabla bağlı bütün veb-saytlar, üzvlüklər və məlumatlar itiriləcək.
