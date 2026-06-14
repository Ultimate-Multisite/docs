---
title: Налоговый учет
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Налоговый учет

Ultimate Multisite-амальimizde ana pluginimiz içine yerleşik bir vergi toplama modülü var. Bu yüzden planlarınızda, paketlerinizde ve hizmetlerinizde satış vergilerini toplamanız gerekiyorsa, herhangi bir eklenti kurmaya gerek kalmadan bunu kolayca yapabilirsiniz.

Avrupa'daki şirketler için, **KDV uyumluluğunu** daha iyi desteklemek için araçlar ve özellikleri ekleyen bir **eklenti** sunuyoruz.

Ultimate Multisite sizin adınıza hükümete vergi beyannamesi vermez veya ödeme yapmaz; biz sadece işlemi gerçekleştirdiğiniz anda uygun vergileri toplamanıza yardımcı oluruz. Vergi ödemesini yine kendiniz yapmanız gerekecek.

## Vergi Toplamayı Etkinleştirme

Vergi toplama varsayılan olarak etkin değildir. Bunu etkinleştirmek için **Ultimate Multisite > Ayarlar > Vergiler** bölümüne gitmeniz ve "Vergileri Etkinleştir" ayarını açmanız gerekir.

![Vergileri Etkinleştir düğmesi Vergi ayarları sayfasının en üstünde](/img/config/settings-taxes-enable.png)

İşte vergi ayarları sayfasının tam görünümü:

![Vergi ayarları tam sayfa](/img/config/settings-taxes-full.png)

Ayrıca ürünler için de vergi ayarlarını görüntüleyebilirsiniz:

![Ürünler için vergi ayarları](/img/config/settings-taxes.png)

### Vergi Dahil Olmayan vs. Vergi Dahil Olan

Varsayılan olarak, tüm ürün fiyatlarınız vergiden istisnadır, bu da vergilerin ürünün fiyatına **dahil olmadığı** anlamına gelir. Belirli bir satın alım için müşterinin vergi ödemesi gerektiğini belirlersek, vergileri toplam tutarın **üzerine** ekleyeceğiz.

Vergilerin ürün fiyatına dahil olmasını tercih ederseniz, **Dahil Vergi** ayarını etkinleştirerek bunu yapabilirsiniz.

![Vergileri Etkinleştir ayarının altındaki Dahil Vergi düğme satırı](/img/config/settings-taxes-inclusive.png)

Yaptığınız değişiklikleri **kaydetmeyi** unutmayın.

###

## Vergi Oranları Oluşturma

Vergi Toplamayı etkinleştirdikten sonra, vergi oranlarını belirli konumlar için vergi oranları düzenleyicimizi kullanarak oluşturmanız gerekecek.

Вы можете открыть редактор, нажав кнопку **Manage Tax Rates** (Управление ставками налогов) на боковой панели страницы настроек налогов.

![Manage Tax Rates link in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

На странице редактора ставок налогов вы можете добавить новые ставки налогов, нажав кнопку **Add new Row** (Добавить новую строку).

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

Вам нужно дать каждой ставке налога **title** (название), которое будет использоваться в счетах. Затем вы можете выбрать **country** (страну) (обязательно), а также **state** (штат) и **city** (город) (оба необязательны), где будет взиматься этот налог. Наконец, добавьте **tax rate in percents** (ставку налога в процентах).

### Категории налогов (Tax Categories)

Вы также можете создать несколько Категорий налогов, чтобы добавить разные ставки для разных видов товаров.

Нажмите **Add new Tax Category** (Добавить новую категорию налогов), затем напишите название вашей категории и нажмите **Create** (Создать).

![Add new Tax Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field in the create category modal](/img/config/tax-categories-create-modal.png)

Чтобы просмотреть категории, нажмите **Switch** (Переключить) и выберите категорию, к которой вы хотите добавить новые налоги.

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

Вы можете установить категорию налога для определенного продукта, перейдя на **Product edit page** (страницу редактирования продукта), а затем на вкладку Taxes (Налоги).

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

На том же экране вы можете включить или выключить переключатель **Is Taxable?** (Подлежит ли налогообложению?), чтобы сообщить Ultimate Multisite, что на этот конкретный продукт налоги не нужно собирать.

## Поддержка европейского НДС (European VAT Support)

Ещё раз упомянули, у нас есть дополнение для клиентов в ЕС, которым нужны дополнительные требования из-за европейских правил НДС (VAT).

Наши инструменты по НДС помогают с несколькими важными вещами:

  * Легкая загрузка ставок НДС для стран ЕС;

  * Сбор и проверка номера НДС — а также обратное начисление НДС для организаций, освобожденных от НДС (например, компаний с действующими номерами НДС).

Чтобы установить это дополнение, перейдите в **Ultimate Multisite > Settings** (Настройки) и затем нажмите на ссылку в боковой панели **Check our Add-ons** (Проверить наши дополнения).

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Вы будете перенаправлены на нашу страницу дополнений. Там вы сможете найти и установить **Ultimate Multisite VAT add-on** (дополнение Ultimate Multisite по НДС).

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Затем перейдите в **Network Admin > Plugins** (Администрирование сети > Плагины) и активируйте это дополнение для всей сети.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Если вы вернетесь на вкладку **Tax Settings** (Настройки налогов), вы увидите новые доступные опции. Переключите опцию **Enable VAT Support** (Включить поддержку НДС), чтобы активировать новые инструменты по НДС. Не забудьте **save** (сохранить) ваши настройки!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Загрузка ставок НДС

Один из инструментов, который добавляет наша интеграция, — это возможность загружать ставки налогов для стран-членов ЕС. Это можно сделать, посетив страницу редактора ставок налогов после включения поддержки НДС в ЕС.

Sayganın en altında KDV çekme seçeneklerini göreceksiniz. Bir oran türü seçip **Update EU VAT Rates** butonuna tıkladığınızda, her bir AB üye ülkesi için vergi oranlarını içeren tablo otomatik olarak açılır ve doldurulur. Sonra sadece kaydetmeniz yeterli olur.

![Vergi oranlarını güncelleme butonu en altta](/img/config/tax-rates-vat-pull.png)

Onları çektikten sonra değerleri de düzenleyebilirsiniz. Bunu yapmak için ihtiyacınız olan satırı düzenleyin ve yeni değerleri kaydetmek için tıklayın.

### KDV Doğrulama (VAT Validation)

KDV desteği etkinleştirildiğinde, Ultimate Multisite ödeme formuna fatura adresi alanının altına ek bir alan ekler. Bu alan sadece AB'de bulunan müşteriler için görünür olur.

<!-- Screenshot unavailable: Fatura adresi altındaki ön yüz ödeme formundaki KDV Numarası alanı -->

Ultimate Multisite daha sonra KDV Numarasını doğrular ve geçerli bir numara olarak dönerse, ters yükümlülük mekanizması uygulanır ve o sipariş için vergi oranı %0 olarak ayarlanır.
