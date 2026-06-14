---
title: Vergi İşleme
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Vergüç İşleme (Tax Handling)

Ultimate Multisite ana eklentimizde vergi toplama modülü var. Bu yüzden planlarınız, paketleriniz ve hizmetleriniz için satış vergilerini toplamanız gerekiyorsa, herhangi bir ek eklenti kurmaya gerek kalmadan bunu kolayca yapabilirsiniz.

Avrupa'da bulunan şirketler için, **KDV (VAT)** uyumluluğunu daha iyi desteklemek için araçlar ve özellikler ekleyen bir **ek eklenti** sunuyoruz.

Ultimate Multisite sizin adınıza hükümete vergi beyannamesi vermez veya ödemez; biz sadece işlem anında uygun vergileri toplamanıza yardımcı oluruz. Vergi ödemesini yine kendiniz yapmanız gerekecek.

## Vergi Toplamayı Etkinleştirme (Enabling Tax Collection)

Vergi toplama varsayılan olarak açık değildir. Bunu etkinleştirmek için **Ultimate Multisite > Ayarlar > Vergiler** yoluna gitmeniz ve "Enable Taxes" ayarını açmanız gerekir.

![Tax settings enable toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Vergi ayarlarının tam görünüm şöyledir:

![Tax settings full page](/img/config/settings-taxes-full.png)

Ayrıca ürünler için vergi ayarlarını da görebilirsiniz:

![Tax settings for products](/img/config/settings-taxes.png)

### Vergi Dahil Olmayan vs. Vergi Dahil Olan (Tax excluded vs. Tax included)

Varsayılan olarak, tüm ürün fiyatlarınız vergiden muaf kabul edilir, bu da verginin ürüne fiyatın **dahil edilmediği** anlamına gelir. Bir müşterinin belirli bir alışveriş için vergi ödemesi gerektiğini belirlersek, vergileri toplam tutarın **üzerine** ekleyeceğiz.

Eğer verginin ürün fiyatına dahil olmasını tercih ederseniz, **Inclusive Tax** ayarını etkinleştirerek bunu yapabilirsiniz.

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Yaptığınız değişiklikleri **kaydetmeyi** unutmayın.

###

## Vergi Oranları Oluşturma (Creating Tax Rates)

Vergi Toplamayı etkinleştirdikten sonra, vergi oranlarını belirli yerler için kendi vergi oranları düzenleyicimizi kullanarak oluşturmanız gerekecek.

আপনি সাইডবারে ট্যাক্স সেটিংস পেজের **Manage Tax Rates** বোতামে ক্লিক করে এডিটর অ্যাক্সেস করতে পারেন।

![Tax Rates panel-এ Manage Tax Rates লিঙ্ক](/img/config/settings-taxes-manage-rates.png)

ট্যাক্স রেটস এডিটর পেজে, আপনি **Add new Row** বোতামে ক্লিক করে নতুন ট্যাক্স রেট যোগ করতে পারবেন।

![উপরে Add new Row বোতাম সহ ট্যাক্স রেটস এডিটর টেবিল](/img/config/tax-rates-editor.png)

আপনাকে প্রতিটি ট্যাক্স রেটের জন্য একটি **title** (ইনভয়েসে ব্যবহৃত হয়) দিতে হবে। তারপর আপনি **country** (প্রয়োজনীয়), **state**, এবং **city** (উভয় ঐচ্ছিক) বেছে নিতে পারবেন যেখানে এই ট্যাক্সটি চার্জ করা হবে। সবশেষে, **tax rate in percents** যোগ করুন।

### Tax Categories

আপনি বিভিন্ন ধরণের পণ্যের জন্য বিভিন্ন ট্যাক্স রেট যোগ করতে একাধিক ট্যাক্স ক্যাটাগরি তৈরি করতে পারেন।

**Add new Tax Category**-তে ক্লিক করুন, তারপর আপনার ক্যাটাগরির নাম লিখুন এবং **Create** চাপুন।

![ট্যাক্স রেটস এডিটর-এর উপরে Add new Tax Category বোতাম](/img/config/tax-categories-add.png)

ক্যাটাগরিগুলো দেখতে চাইলে, **Switch**-এ ক্লিক করুন এবং আপনি নতুন ট্যাক্স যোগ করতে চান এমন ক্যাটাগরিটি নির্বাচন করুন।

![ট্যাক্স ক্যাটাগরি নির্বাচনের ড্রপডাউন যা উপলব্ধ ক্যাটাগরি দেখায়](/img/config/tax-categories-select.png)

আপনি **Product edit page**-এ গিয়ে তারপর Taxes ট্যাবে গিয়ে নির্দিষ্ট পণ্যের জন্য ট্যাক্স ক্যাটাগরি সেট করতে পারেন।

![ট্যাক্স ক্যাটাগরি এবং ট্যাক্সযোগ্য টগল সহ প্রোডাক্ট ট্যাক্স ট্যাব](/img/config/product-taxes.png)

সেই একই স্ক্রিনে, আপনি **Is Taxable?** টগলটি বন্ধ করে দিতে পারেন যাতে Ultimate Multisite বুঝতে পারে যে এই নির্দিষ্ট পণ্যের উপর কোনো ট্যাক্স সংগ্রহ করা উচিত নয়।

## European VAT Support

Önceki söylediklerimiz gibi, Avrupa KDV (VAT) yönetmelikleri nedeniyle ek gereksinimleri olan AB müşterileri için bir eklenti mevcut.

KDV araçlarımız size birkaç önemli konuda yardımcı olur:

*   AB KDV oranlarını kolayca yükleme;
*   KDV Numarası toplama ve doğrulama - ayrıca KDV'den muaf kuruluşlar (geçerli KDV numarasına sahip şirketler gibi) için ters yükümlülük (reverse charging).

Bu eklentiyi kurmak için **Ultimate Multisite > Settings** bölümüne gidin ve ardından yan menüdeki **Check our Add-ons** bağlantısına tıklayın.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Eklentiler sayfamıza yönlendirileceksiniz. Orada **Ultimate Multisite VAT add-on**'u arayıp kurabilirsiniz.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Sonra **Network Admin > Plugins** bölümüne gidin ve bu eklentiyi ağ genelinde etkinleştirin.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

**Tax Settings tab**'ına geri döndüğünüzde, yeni seçenekler göreceksiniz. Yeni KDV araçlarını etkinleştirmek için **Enable VAT Support** seçeneğini açın. Ayarlarınızı **kaydetmeyi** unutmayın!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### KDV Oranlarını Çekme (Pulling on VAT Tax Rates)

Entegrasyonumuzun eklediği araçlardan biri, AB üye devletlerinin vergi oranlarını yükleme yeteneğidir. Bunu, AB KDV desteğini etkinleştirdikten sonra vergi oranları düzenleyici sayfasına giderek yapabilirsiniz.

صفحenin en altında KDV çekme seçeneklerini göreceksiniz. Bir oran türünü seçip **Update EU VAT Rates** butonuna tıkladığınızda, her bir AB üye ülkesi için vergi oranlarını içeren tablo otomatik olarak açılacak ve doldurulacaktır. Daha sonra sadece kaydetmeniz yeterli.

![Vergi oranlarını güncelleme butonu en altta vergi oranı düzenleyicisinde](/img/config/tax-rates-vat-pull.png)

Çekildikten sonra değerleri de düzenleyebilirsiniz. Bunu yapmak için ihtiyacınız olan tablo satırını düzenleyin ve yeni değerleri kaydetmek için tıklayın.

### KDV Doğrulama (VAT Validation)

KDV desteği etkinleştirildiğinde, Ultimate Multisite ödeme formunun fatura adresi alanının altında ek bir alan ekler. Bu alan yalnızca AB'de bulunan müşteriler için görünür olacaktır.

<!-- Screenshot unavailable: Fatura adresi altındaki ön yüz ödeme formundaki KDV Numarası alanı -->

Ultimate Multisite daha sonra KDV Numarasını doğrulayacak ve geçerli bir numara olarak dönerse, ters yükümlülük mekanizması uygulanacak ve o sipariş için vergi oranı %0 olarak ayarlanacaktır.
