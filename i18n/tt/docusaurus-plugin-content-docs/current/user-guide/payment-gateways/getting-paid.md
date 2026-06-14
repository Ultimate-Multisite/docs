---
title: Махсулет алу
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Ödeme Alma (v2)

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite sürüm 2.x'i referans almaktadır.**_

Ultimate Multisite'ta yerleşik üyelik ve faturalandırma sistemi bulunur. Faturalandırma sistemimizin çalışması için e-ticarette en yaygın kullanılan ödeme ağ geçitlerini entegre ettik. Ultimate Multisite'taki varsayılan ödeme ağ geçitleri _Stripe_, _PayPal_ ve Manuel Ödeme'dir. Ayrıca ilgili add-onları kurarak ödemeleri almak için _WooCommerce_, _GoCardless_ ve _Payfast_'ı da kullanabilirsiniz.

## Temel Ayarlar

Bu ödeme ağ geçitlerinden herhangi birini Ultimate Multisite ödeme ayarları altında yapılandırabilirsiniz. **Ultimate Multisite menüsü > Ayarlar > Ödemeler** yolunu izleyerek bulabilirsiniz.

![Ultimate Multisite'ta Ödeme ayarları sayfası, Ödemeler panelini gösteriyor](/img/config/payments-settings-page.png)

Ödeme ağ geçitinizi kurmadan önce yapılandırabileceğiniz temel ödeme ayarlarını inceleyin:

**Force auto-renew (Otomatik yenilemeyi zorla):** Bu ayar, kullanıcının seçtiği faturalandırma sıklığına bağlı olarak ödemenin her fatura döngüsünün sonunda otomatik olarak tekrarlanmasını sağlar.

<!-- Screenshot unavailable: Ödeme ayarları sayfasındaki Otomatik Yenilemeyi Zorla düğmesi ayarı -->

Ultimate Multisite v2.13.0, aktif ağ geçidinin yeniden kullanılabilir bir yenileme kimliğine sahip olup olmadığını kontrol eder ve otomatik yenilemenin etkinleştirildiği tekrarlayan üyelikleri kaydederken bunu yapar. Yenileme kimliği bir ağ geçidi aboneliği, faturalandırma anlaşması, kayıtlı kasa token'ı veya eşdeğer yeniden kullanılabilir ödeme yöntemi olabilir. Ağ geçidi kullanılamaz bir kimlik bilgisi olmadığını bildirirse, Ultimate Multisite üyeliği kaydeder ancak otomatik yenilemeyi kapatır ve eksik kimlik bilgisini kaydeder; böylece yönetici veya destek akışı, müşteriden yenileme tarihinden önce ödemeyi yeniden yetkilendirmesini isteyebilir.

**Обучение без оплаты разрешить** **способ:** Эта опция включена, и вашему клиенту не нужно будет вводить какую-либо финансовую информацию во время регистрации. Это потребуется только после окончания пробного периода.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Сформировать счет после подтверждения оплаты:** Этот вариант дает вам возможность решить, отправлять ли счет после оплаты. Обратите внимание, что пользователи смогут просматривать свою историю платежей в панели управления их субсайтом. Эта опция не применяется к Ручному шлюзу (Manual Gateway).

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Схема нумерации счетов:** Здесь вы можете выбрать либо код ссылки на платеж, либо последовательную схему номеров. Если вы выберете использовать код ссылки на платеж для ваших счетов, вам ничего настраивать не нужно. Если вы выберете последовательную схему номеров, вам нужно будет настроить **следующий номер счета** (этот номер будет использоваться как номер счета для следующего счета, генерируемого в системе. Он увеличивается на единицу каждый раз при создании нового счета. Вы можете изменить его и сохранить, чтобы сбросить последовательный номер счета до определенного значения) и **префикс номера счета**.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Payment gateway'leri nerede bulabilirsiniz:

Ödeme ağ geçitlerini aynı sayfada ayarlayabilirsiniz (**Ultimate Multisite > Settings > Payments**). **Aktif ödeme ağ geçitlerinin** hemen altında şunları görebilirsiniz: _Stripe_, _Stripe_ Checkout, _PayPal_ ve _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Her ödeme ağ geçidi için size kurulum adımlarını gösterecek özel bir makalemiz var; bu linklere ulaşabilirsiniz.

Ödeme detaylarını görüntüleyebilir ve düzenleyebilirsiniz:

![Payment edit interface](/img/admin/payment-edit.png)

İşte ödeme düzenleme sayfasının tam görünümü:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Ayrıca ödeme ağ geçidi ayarlarının tam görünümünü de aşağıda bulabilirsiniz:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Stripe ağ geçidini ayarlama**

**PayPal ağ geçidini ayarlama**** **

**Manuel ödemeleri ayarlama**

Şimdi, eğer _WooCommerce_, _GoCardless_ veya _Payfast_'ı ödeme ağ geçidi olarak kullanmak isterseniz, onların eklentilerini **kurmanız ve yapılandırmanız** gerekecektir.

### WooCommerce eklentisini nasıl kurarsınız:

Biliyoruz ki _Stripe_ ve _PayPal_, bazı ülkelerde mevcut değil ve bu durum Ultimate Multisite kullanıcılarının bizim eklentimizi etkili bir şekilde kullanmasını kısıtlayabilir veya zorlaştırabilir. Bu yüzden, çok popüler bir e-ticaret eklentisi olan _WooCommerce_'ı entegre etmek için bir eklenti (add-on) geliştirdik. Dünya genelindeki geliştiriciler de farklı ödeme ağ geçitlerini bu eklentiye entegre etmek için eklentiler oluşturmuşlardır. Biz de bunu kullanarak Ultimate Multisite faturalandırma sisteminizle kullanabileceğiniz ödeme ağ geçitlerini genişlettik.

**ВАЖНО:** Ultimate Multisite: WooCommerce интеграция для работы требует, чтобы WooCommerce был активирован как минимум на вашем основном сайте.

Сначала перейдите на страницу дополнений (add-ons). Вы можете найти ее, перейдя в **Ultimate Multisite > Settings**. Там вы увидите таблицу **Add-ons** (Дополнения). Нажмите на **Check our Add-ons** (Проверить наши дополнения).

<!-- Screenshot unavailable: Таблица дополнений в боковой панели настроек Ultimate Multisite с ссылкой Check our Add-ons -->

После нажатия на **Check our Add-ons** вас перенаправит на страницу дополнений. Здесь вы найдете все дополнения Ultimate Multisite. Нажмите на дополнение **Ultimate Multisite: WooCommerce Integration**.

![Страница дополнений, где перечислены дополнения Ultimate Multisite, включая WooCommerce Integration](/img/addons/addons-page.png)

Появится окно с деталями дополнения. Просто нажмите **Install Now** (Установить сейчас).

<!-- Screenshot unavailable: Диалоговое окно с деталями дополнения Ultimate Multisite WooCommerce Integration и кнопкой Install Now -->

После завершения установки вас перенаправит на страницу плагинов. Здесь просто нажмите **Network Activate** (Активировать сеть), и дополнение WooCommerce будет активировано в вашей сети.

<!-- Screenshot unavailable: Страница плагинов с ссылкой Network Activate для дополнения WooCommerce Integration -->

После активации, если у вас все еще не установлен и не активирован плагин WooCommerce на вашем сайте, вы получите напоминание.

<!-- Screenshot unavailable: Уведомление администратора, напоминающее администратору установить и активировать плагин WooCommerce -->

Чтобы узнать больше о дополнении WooCommerce Integration, **нажмите здесь**.

### Как установить дополнение GoCardless:

_GoCardless_ плагинын yükleme adımları _WooCommerce_ плагіniyle neredeyse aynıdır. Eklentiler sayfasına gidin ve **Ultimate Multisite: GoCardless Gateway** eklentisini seçin.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway eklentisinin vurgulandığı eklentiler sayfası -->

Eklenti penceresi açılacaktır. **Install Now** (Şimdi Kur) butonuna tıklayın.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway eklentisi detay penceresi ve Install Now butonu -->

Kurulum bittikten sonra, eklentiler sayfasına yönlendirileceksiniz. Burada sadece **Network Activate** (Ağ Etkinleştir) butonuna tıklayın ve _GoCardless_ eklentisi ağınızda etkinleşecektir.

<!-- Screenshot unavailable: GoCardless Gateway eklentisi için Network Activate bağlantısıyla eklentiler sayfası -->

_GoCardless_ gateway ile nasıl başlayacağınızı öğrenmek için **bu makaleyi okuyun**.

### Payfast eklentisini nasıl kurarsınız:

Eklentiler sayfasına gidin ve **Ultimate Multisite: Payfast Gateway** eklentisini seçin.

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway eklentisinin vurgulandığı eklentiler sayfası -->

Eklenti penceresi açılacaktır. **Install Now** (Şimdi Kur) butonuna tıklayın.

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway eklentisi detay penceresi ve Install Now butonu -->

Kurulum bittikten sonra, eklentiler sayfasına yönlendirileceksiniz. Burada sadece **Network Activate** (Ağ Etkinleştir) butonuna tıklayın ve _Payfast_ eklentisi ağınızda etkinleşecektir.

<!-- Screenshot unavailable: Payfast Gateway eklentisi için Network Activate bağlantısıyla eklentiler sayfası -->
