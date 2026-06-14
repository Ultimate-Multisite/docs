---
title: Ödenmek
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Ödeme Alma (v2)

_**ÖNEMLİ QAYDAMA: Bu makale Ultimate Multisite versiya 2.x-iňizi görkezýär.**_

Ultimate Multisite-da özü bilen üpjünlenmiş üje (membership) we hasaplaşma ulgam bar. Bizim hasaplaşma ulgamymyz işlemek üçin, e-ticaretde iň köp ulanylýan ödeme portalaryny goşdurmaga mümkinçilik berdik. Ultimate Multisite-da standart ödeme portalary _Stripe_, _PayPal_ we Manual Payment (Manual Ödeme) hasaplanýar. Siz şolara başga dogry addonlary (add-ons) kurmagy bilen hem _WooCommerce_, _GoCardless_ we _Payfast_-dan ödeme almak üçin ulanyp bilersiňiz.

## Esasy Täsirişler (Basic Settings)

Bu ödeme portalaryny Ultimate Multisite hasaplaşma täsirişlerinde özüňiz görkezip bilersiňiz. Bu ýere gitmek üçin **Ultimate Multisite menýüsü > Settings (Täsirişler) > Payments (Ödemeler)** bilen barlanyp bilersiňiz.

![Payments settings page in Ultimate Multisite showing the Payments panel](/img/config/payments-settings-page.png)

Ödeme portalyny sozlamagyňdan öň, size sozlamaga mümkin bolan esasy ödeme täsirişlerini görkezmek üçin aşakdaky zatlary barlap geçiň:

**Force auto-rene (Otomatik beriji täzelenme güýjüni zorlamak):** Bu, hasaplaşma oralaryny we ulanyjynyň saýladan hasaplaşma ýörelgesine görä her bir hasaplaşma döwründäki ödemeni awtomatiki ýa-da täzelenip biljekdigini üpjün edýär.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0, hasaplaşma döwrüni awtomatiki täzelenme bilen saklamak üçin aktif portalda täzelenip biljek beriji (renewal credential) barçaly bolup baýlanýanmy ýa-da dälini barlap geçýär. Täzelenip biljek beriji bolsa, portal subskripsiyasy, hasaplaşma kesloty, saklanan vault tokeni ýa-da deň derejeli täzelenip biljek ödeme usulydyr. Portal bu portalda ulanylan täzelenip biljek berijini tapyp bilmese diýse, Ultimate Multisite hasaby saklaýar, ýöne awtomatiki täzelenme güjüni üzeýär we eksik beriji döwrenini saklaýar. Bu bolsa administrator ýa-da goldaw ulgamynyň täzelenme tarapyndan täzelenme maglumatlaryny hasaplaşma sanawdan öň müşderini täzelenmek üçin soraýan ýagdaýy wezipesini görkezmegi mümkin.

**Ön ötemsiz denemeleri izin verin** **metodu:** Bu seçeneği etkinleştirdiğinizde, müştäri sizden qeydiyyat prosesi awşynda hiç mali maglumat bermek zorunda kalmaz. Bu diňe deneme süresini geçip geçse bir gezek talap edilmektir.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Ödeme tasdiqianda hasylname göndermek:** Bu, ödenmeden soňra hasylname göndermegi we göndermegi mümkinçilikini berýär. Käbir ýalňyşlyk: Userlar öz subsite dashboardynda ödeme taryhyna girip biljekdigini ýatlasaň. Bu opsuna Manual Gateway (Manual Geçirici) üçin laýyk gelmez.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Hasylname nömrələndirmesi skemasy:** Bu ýerde siz ödeme referensini kod ýa-da ardyn nömreler skemasyny saýla bilersiňiz. Eger hasylnamalar üçin ödeme referensini koddan ulanyp biljekdigiňizi saýlansaňyz, hiç zat goşmak gerek däl. Eger siz ardyn nömreler skemasyny ulanyp biljekdigiňizi saýlaňsaňyz, size **soňky hasylname nömrəsi** (Bu nömrä sistemde dörediljek soňky hasylnama üçin hasylnama nömrəsi hökmünde ulanylýar. Her soň yeni hasylnama döredilende birden artdyrylýar. Siz ony üýtgedip, hasylnama ardyn nömrüsini belli bir derejä göreç etmek üçin saklap bilersiňiz) we **hasylnama nömrəsi öňüsi** (invoice number prefix) goşmak gerek biler.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Sequential Number seçildiğinde nöbetli fatura numarası ve fatura numarası ön eki alanları gösterilir -->

## Gateway'leri nerede bulursunuz:

Ödeme gateway'lerini aynı sayfada kurabilirsiniz (**Ultimate Multisite > Settings > Payments**). **Active payment gateways** (Aktif ödeme gateway'leri) başlığının hemen altında şunları görebilirsiniz: _Stripe_, _Stripe_ Checkout, _PayPal_ ve _Manual_.

![Stripe, Stripe Checkout, PayPal ve Manual'u listeliyän Active Payment Gateways bölümü](/img/config/payments-active-gateways.png)

Her ödeme gateway'ini kurma adımlarını size göstermek için ayrı bir makalemiz var, bu linklere ulaşabilirsiniz.

Ödeme detaylarını görüntüleyebilir ve düzenleyebilirsiniz:

![Payment edit interface](/img/admin/payment-edit.png)

Ödeme düzenleme sayfasının tam görünümü şudur:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Ayrıca ödeme gateway'leri ayarlarının tam görünümünü de aşağıda bulabilirsiniz:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Stripe gateway'ini kurma**

**PayPal gateway'ini kurma**** **

**Manual ödemeleri kurma**

Şimdi, _WooCommerce_, _GoCardless_ veya _Payfast_'ı ödeme gateway'iniz olarak kullanmak istiyorsanız, onlara ait eklentileri **kurup yapılandırmanız** gerekir.

### WooCommerce eklentisini nasıl kurarsınız:

Bazı ülkelerde _Stripe_ ve _PayPal_'ın Ultimate Multisite kullanıcılarının bizim eklentimizi etkili bir şekilde kullanmasını kısıtlayan veya zorlaştıran yerlerde mevcut olmadığını anlıyoruz. Bu yüzden, çok popüler bir e-ticaret eklentisi olan _WooCommerce_'ı entegre etmek için bir eklenti (add-on) oluşturduk. Dünya genelindeki geliştiriciler, farklı ödeme gateway'lerini ona entegre etmek için eklentiler yapmışlardır. Biz de bu imkanlardan yararlanarak Ultimate Multisite faturalandırma sisteminizle kullanabileceğiniz ödeme gateway'lerini genişlettik.

**IMPORTANT:** Ultimate Multisite: WooCommerce entegratsy üçin sizde esasy saytınızda WooCommerce'i en az bir kez aktarmaniz gerekýär.

Ilki, size add-ons (ek) sahypasyna gitmäge çalyşyň. Bu sahypa **Ultimate Multisite > Settings** bilen gitmek arkaly tapyp bilersiňiz. Sizde **Add-ons** tabagy görkeziljekdir. **Check our Add-ons** diýlip klikleň.

<!-- Screenshot unavailable: Ultimate Multisite Settings sidebar-da Add-ons tabagy we Check our Add-ons linki -->

**Check our Add-ons** diýlip klikledikten soň, siz add-ons sahypasyna yöneltilip bilersiňiz. Bu ýerde ähli Ultimate Multisite add-onsyny tapyp bilersiňiz. **Ultimate Multisite: WooCommerce Integration** add-onuna klikleň.

![WooCommerce Integration bilen birlikde Ultimate Multisite add-onsy listlenýän add-ons sahypasy](/img/addons/addons-page.png)

Add-on barada maglumatlar açylýan bir pencere açyljakdyr. Diňe **Install Now** diýlip klikleň.

<!-- Screenshot unavailable: Ultimate Multisite WooCommerce Integration add-on maglumatlary dialogynda Install Now düwmesi -->

Kurulmagyndan soň, siz plugins sahypasyna yöneltilip bilersiňiz. Bu ýerde diňe **Network Activate** diýlip klikleň we WooCommerce add-onuny ulgamyňyzda aktiwleşdirip bilersiňiz.

<!-- Screenshot unavailable: WooCommerce Integration add-on üçin Network Activate linki bilen plugins sahypasy -->

Onu aktiwleşdirip bilendsiz, eger siz web saytınızda WooCommerce pluginini halla kurmagyňyz we aktiwleşdirmegiňiz ýok bolsa, size habar beriljekdir.

<!-- Screenshot unavailable: Administratora WooCommerce pluginini kurmagyny we aktiwleşdirmegini hatdat bilen bildiren administrator habary -->

WooCommerce Integration add-on barada has maglumat almak üçin **burdan klikleň**.

### GoCardless add-onuny nire kurmagy?

_GoCardless_ add-onu nirekleme kademeleri _WooCommerce_ add-onu bilençli kademelerle birleşdirilendir. Add-ons saygyna çykalyň we **Ultimate Multisite: GoCardless Gateway** add-onunu saýlaň.

<!-- Screenshot unavailable: Add-ons sayfası Ultimate Multisite GoCardless Gateway add-onu bilen ýerlendirilip görkezilen resminiz -->

Add-on penceresi açylmaga başlar. **Install Now** (Şolary Kurmak) düwmenine basyň.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-onu detaller dialogaty Install Now düwmeni bilen görkezilen resminiz -->

Kurmak tamamlanandan soň, siz pluginler saygyna yöneltilip geçersiňiz. Bu ýerde diňe **Network Activate** (Ulanyşyklary Aktiw etmek) düwmenine basyň we _GoCardless_ add-onu ulanyşyklaryňyzda aktiwde bolmaly.

<!-- Screenshot unavailable: Plugins sayfası GoCardless Gateway add-onu üçin Network Activate linki bilen görkezilen resminiz -->

_GoCardless_ gateway bilen nädip başlap biljekdigini öwrenmek üçin, **bu makalany okap geçiň**.

### Payfast add-onu nirekleme:

Add-ons saygyna çykaly we **Ultimate Multisite: Payfast Gateway** add-onunu saýlaň.

<!-- Screenshot unavailable: Add-ons sayfası Ultimate Multisite Payfast Gateway add-onu bilen ýerlendirilip görkezilen resminiz -->

Add-on penceresi açylmaga başlar. **Install Now** (Şolary Kurmak) düwmenine basyň.

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-onu detaller dialogaty Install Now düwmeni bilen görkezilen resminiz -->

Kurmak tamamlanandan soň, siz pluginler saygyna yöneltilip geçersiňiz. Bu ýerde diňe **Network Activate** (Ulanyşyklary Aktiw etmek) düwmenine basyň we _Payfast_ add-onu ulanyşyklaryňyzda aktiwde bolmaly.

<!-- Screenshot unavailable: Plugins sayfası Payfast Gateway add-onu üçin Network Activate linki bilen görkezilen resminiz -->
