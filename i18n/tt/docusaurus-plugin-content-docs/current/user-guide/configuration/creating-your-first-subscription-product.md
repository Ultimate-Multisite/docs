---
title: Биринчи абонемент продуктын үсерергә
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# İlk Abonelik Ürününüzü Oluşturma (v2)

_**ÖNEMLİ NOT: Bu makale sadece Ultimate Multisite sürüm 2.x kullanıcıları içindir. Eğer sürüm 1.x kullanıyorsanız,**_ **_bu makaleye bakın.**_

Ağınızı çalıştırmaya ve hizmetlerinizi potansiyel kullanıcılara satmaya başlamak için farklı abonelik seçeneklerine ihtiyacınız var. Bu ürünleri nasıl oluşturursunuz? Hangi tür ürünleri sunabilirsiniz? Bu makalede, ürünlerle ilgili bilmeniz gereken her şeyi ele alacağız.

## Ürün Türü {#product-type}

Ultimate Multisite ile müşterilerinize iki kategori ürün sunabilirsiniz: **planlar** ve **eklentiler (Order Bump)**. Eklentiler iki türe ayrılabilir: **paketler** ve **hizmetler**. Bunların farklarını ve özel durumlarını bir sonraki bölümde göreceğiz.

  * **Planlar**: Ultimate Multisite'ın temel ürünüdür. Müşterinizin yalnızca bir plana bağlı olması mümkündür. Bir plan, müşterilerinize (planınızın yapılandırmasına bağlı olarak) ürün düzenleme sayfanızda belirlediğiniz kısıtlamalarla birlikte bir veya daha fazla site sağlar.

  * **Paketler**: Ultimate Multisite planlarının işlevselliğini doğrudan etkileyen eklentilerdir. Bunlar, müşterinizin satın aldığı orijinal plana kısıtlamaları değiştirir veya yeni kaynaklar, eklentiler veya temalar ekler. Örneğin, temel bir plan ayda 1.000 ziyarete izin verebilir ve bu sayıyı 10.000'e genişleten bir paket sunabilirsiniz.

  * **Hizmetler**: Ultimate Multisite'ın işlevselliğini değiştirmeyen eklentilerdir. Bunlar, müşteriniz satın aldığı planın yanı sıra sizin için gerçekleştireceğiniz görevlerdir. Örneğin, müşteriniz tek bir siteye izin veren bir plan satın alabilir ve bu sitenin tasarımını yapacak ek bir hizmet için de ödeme yapabilir.

## Ürünleri Yönetme {#managing-products}

Мәселеләрнең күпләре өчен Ultimate Multisite-дагы **Products** (Җыенлар) табы, традицион хостинг сый-сирдәге планнар белән тиештырыла ала.

Ultimate Multisite-да Products табында конкрет продукт өчен яратылган конструкциялар һәм чектәмеләр аны аны куллануга мөмкин булган хәзерлекле мәгълүматны (сырткы) күрсәтә. Бу конструкциялар продуктның тасвирлауы, артык сый-сирдәсе, намы, гемлекләр һәм уку правалар белән берләшә.

Бу бөтен махиналы Ultimate Multisite-дагы ашау өчен кирәк булган бәләнеүгә ярдәм итәчәк.

![Products list page](/img/config/products-list.png)

## Продуктлар Әтирү (Adding Products) {#adding-products}

Бу план, пакет яки хезмәт өчен янәшәләрнең жаңы элементны аны ашау өчен кирәк булган юл **Ultimate Multisite > Products > Add Product** аркылы ясала.

![Add Product button](/img/config/product-add-button.png)

Интерфейс елда ике голдош бөлүмдан турат. Соňкы (соňкы) ланкта продуктны аны ашау өчен кирәк булган мәгълүматны ясарга мөмкин булган бир хәзерлекле табылар бар, ал эми оң ланкта продуктның базасы намы, актив статы һәм продуктның суретне аны ясарга бөтенләп бөлүмләр.

![Product edit page overview](/img/config/product-edit-full.png)

### Тасвирлау (Description) {#description}

База продуктын мәгълүматы продукт номы һәм тасвирлауны кирәкле булган жерле — мисалы планлар һәм намылар, инвойлар, артык сый-сирдәләр яки башкалар — берләштергә мөмкин. Бу идентификаторлар продукт мәгълүматы нионда күрсәтә.

![Product description section](/img/config/product-description.png)

### Намы (Pricing Type) {#pricing-type}

Интерфейс оң ланкта базасы намы аны ясарга мөмкин.

![Pricing and save section](/img/config/product-pricing-save.png)

Ultimate Multisite ар кандай үч намыны топтоплый. **paid** (төлөнгән) вариант сетьүк администратордан продуктнын баасы һәм төлөө жиктеп булган мезгил турында маалымат сурап келет.

### Баалау (Pricing) {#pricing}

Баа компонентси базасы продукт баасын һәм төлөө аралыгын аныктайт.

![Pricing and save section](/img/config/product-pricing-save.png)

демек, 29.99 долларлык bir narxla va 1 ay sozlama qoyilsa, her oyda 29.99 dollar to'lanadi. Shunga o'xshash tarzda, 89.97 dollar narxli va 3 oy davomida bo'lsa, har chorak oyda shu miqdor to'lanadi.

### Hisob-kitob sikllari (Billing Cycles) {#billing-cycles}

Hisob-kitob sikllari qismi yuqoridagi hisob-kitob oralig'ining chastotasini belgilaydi va bu odatda shartnomalar yoki aniq muddatlar ko'rsatilgan holda tushuniladi.

![Pricing and save section](/img/config/product-pricing-save.png)

Masalan, 29.99 dollar narxli va 1 oylik oralig'i bilan 12 ta hisob-kitob sikli bo'lgan mahsulot, keyingi 12 oy davomida har oyda bu mahsulot uchun 29.99 dollar to'lanadi. Boshqacha qilib aytganda, bunday sozlama 12 oylik vaqtinchalik narxni oyiga 29.99 dollar deb belgilaydi va keyin hisob-kitob tugaydi.

### Sinov muddati (Trial Period) {#trial-period}

Taklif sinovini yoqish orqali tarmo administrator mahsulot uchun sinov muddatini belgilashi mumkin.

![Pricing and save section](/img/config/product-pricing-save.png)

Sinov muddati davomida mijozlar mahsulotdan bepul foydalanishlari va sinov muddati tugaguncha hisob-kitob qilinmaydi.

### O'rnatish haq (Setup Fee) {#setup-fee}

Shuningdek, siz o'zingizning rejangizga o'rnatish haqini qo'llashingiz mumkin.

![Pricing and save section](/img/config/product-pricing-save.png)

Bu shuni anglatadiki, mijoz birinchi to'lovda (reja narxidan tashqari) ushbu qismda belgilagan haqga mos keladigan qo'shimcha miqdorni to'laydi.

### Faol (Active) {#active}

Faol tugmasi mahsulot yangi ro'yxatdan olinayotgan mijozlar uchun mavjudligini samarali belgilaydi.

![Active toggle](/img/config/product-active.png)

Эгерде этом планда существующие клиенты varsa, düğmenin devre dışı bırakılmış durumuna ayarlamak planı devre dışı bırakır ve gelecekteki kayıtlar için onu kaldırır. **Plan üzerindeki mevcut müşteriler yeni bir plana geçene veya plandan kaldırılana kadar faturalandırılmaya devam edilecek.**

### Ürün Resmi {#product-image}

**Upload Image** butonu ağ yöneticisine medya kütüphanesini kullanarak bir ürün resmi seçme veya yükleme imkanı verir.

![Product image section](/img/config/product-image.png)

### Silme {#delete}

**Delete Product** butonu ürünü sistemden siler. Ürün yayınlandıktan sonra görünür hale gelir.

![Delete product section](/img/config/product-delete.png)

Diğer silme işlemlerinden farklı olarak, ürün herhangi bir çöp durumuna konulmaz. Bu yüzden silindikten sonra işlem geri alınamaz.

### Ürün Seçenekleri {#product-options}

Temel ürün bilgileri tanımlandıktan sonra, ürün seçenekleri ağ yöneticisine ürünün özel özelliklerini daha detaylı belirlemede yardımcı olur.

#### Genel {#general}

**General** sekmesi, diğer ürün özel sekmelerinin hiçbirine uygulanmayan ürünün genel özelliklerini tanımlar.

![General tab](/img/config/product-general-tab.png)

Açıklaması yeterli olan **product slug**, ürünün Ultimate Multisite'taki URL'lerde ve diğer alanlarda nasıl tanımlanacağını belirleyen slug'u ifade eder.

Ultimate Multisite Plan, Paket ve Hizmet olmak üzere çeşitli ürün türlerini destekler. **Product Options** sekmeleri belirtilen ürün türüne göre dinamik olarak ayarlanır.

**Customer Role**, site oluşturulduğunda müşteriye atanan rolü belirtir. Genellikle çoğu ağ yöneticisi için bu Ultimate Multisite varsayılanı veya Administrator olacaktır. Ultimate Multisite varsayılan rolü **Ultimate Multisite > Settings > Login & Registration** altında ayarlanabilir.

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Yükseltme ve Düşürme (Up & Downgrades) {#up--downgrades}

Bu sekme, bir müşterinin kendi özel seviyesi içindeki yükseltme ve düşürme yollarını belirtir.

Bu kavramı anlamak için, niş bir Ultimate Multisite kurulumunun müşterilerine öğrenme yönetim çözümleri sağladığı bir örnek düşünün. Bu üç planın (Temel, Plus ve Premium) tanımlandığı ve her plan için özel eklentilerin etkinleştirildiği (eklenti etkinleştirme talimatları için bu bölümün daha sonraki kısmına bakın) durumunu ele alalım.

Eğer Ultimate Multisite kurulumu aynı zamanda iş web sitelerine veya e-ticaret web sitelerine de hizmet veriyorsa, bu planlar farklı eklentilerin kurulmasını ve etkinleştirilmesini gerektirebilir.

Bu kapsamda, eLearning müşterilerinin e-ticaret planlarına geçiş yapmasına izin vermek istenmez ve sorunlu olabilir çünkü bu planların fiyatlandırması ve sınırlamaları uygun olmayabilir.

Böylece müşterinin yolunu kısıtlamak ve olayları önlemek için ağ yöneticisi bir plan grubu tanımlayabilir ve bu grupta müşterinin geçebileceği planları belirtebilir.

![Up and Downgrades tab](/img/config/product-upgrades.png)

Bir plan grubunu tanımlamak için **plan grubu** listesi içindeki uyumlu planları belirtin. **Ürün sırası (product order)**, planların en düşükten en yükseğe nasıl sıralanacağını ve gösterileceğini belirler.

Ultimate Multisite ayrıca uygun olduğunda ek ürünlerin ve hizmetlerin planlara eklenebileceği bir **order bump** özelliğini de içerir. Bunlar müşteriye ödeme sırasında veya yükseltme sırasında planlara eklenebilecek ek öğeler olarak sunulur.

#### Fiyat Değişiklikleri (Price Variations) {#price-variations}

Цена вариаций позволяет сетевому администратору указать альтернативные тарифные планы в зависимости от продолжительности. Эта настройка дает возможность предлагать один и тот же продукт на разные платежные периоды: ежемесячный, квартальный, годовой или любой другой. Например, вы можете настроить продукт по цене $29.99/месяц с опцией годового тарифа со скидкой по цене $249.99/год.

![Price Variations tab](/img/config/product-price-variations-tab.png)

Чтобы создать вариации цен, включите переключатель **Enable Price Variations** (Включить вариации цен) и нажмите кнопку **Add new Price Variation** (Добавить новую ценовую вариацию).

![Product price variations](/img/config/product-price-variations.png)

Чтобы ввести вариацию, установите продолжительность, период и цену этой вариации. Дополнительные вариации можно добавить, нажав кнопку еще раз.

Например, если цена вашего базового продукта составляет $29.99 в месяц, вы можете добавить:

  * **3 Месяца** по цене $79.99 (небольшая скидка по сравнению с ежемесячной)
  * **1 Год** по цене $249.99 (значительная скидка за годовую подписку)

:::tip Отображение переключателя Планового периода на фронтенде

Только вариации цен не добавляют переключатель или тумблер на страницу оформления заказа (фронтенд). Чтобы позволить клиентам переключаться между платежными периодами (например, Ежемесячный / Годовой), вам нужно добавить поле **Period Selection** (Выбор периода) в вашу форму оформления заказа. Пошаговые инструкции смотрите в [Checkout Forms: Adding a Period Selection Toggle](checkout-forms#adding-a-period-selection-toggle).
:::

#### Налоги {#taxes}

Вкладка **Taxes** (Налоги) соответствует настройкам налогов, указанным в **Ultimate Multisite > Settings > Taxes** и более конкретно определенным ставкам налогов. Чтобы включить налоги и определить применимые ставки налогов, пожалуйста, ознакомьтесь с документацией по **Ultimate Multisite: Settings**.

![Taxes tab](/img/config/product-taxes.png)

Өчрәктәге кабул ителгән 7,25% сыйаманы Калифорния (Соединён Штат) клиентлары өчен аны да кабул итүеңме дип аны кулланучылар уровсында мөмкин булды.

**Ultimate Multisite > Settings > Manage Tax Rates**-те сыйам тарифы определенгәндә, бу тариф продукция уровеньда да танланар.

![Taxes tab](/img/config/product-taxes.png)

Продукция сыйаманы барлыкка чыгарылачак дип белгир өчен **Is Taxable** туггачсын активгә җыена һәм Сыйам Категориясы (Tax Category) dérouлегендә мөмкин булган тарифны танлыйсыз.

#### Сайт Шаблондары (Site Templates) {#site-templates}

Əсен-асан, сайт шаблонлары — булган мәгълүмат белән клиентнең сайтына ачылачак планны башларганда көчрәктән көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көчрәктә көч

**D** **Default** sozlama, ödeme formundaki qadamlardan sonra gəlir. Əgər şəbəkə administratoru ödəniş prosesində şablon seçimi addımını müəyyən edib və bu addım şablonlarla təyin olunubsa, bu sozlama ödəniş addımında əsaslandırılmış direktivləri nəzərə alır.

**A** **Site Şablonu Təyin Etmək** seçimi müəyyən edilmiş şablona seçim etməyi məcburi edir. Nəticədə, ödəniş prosesindəki hər hansı bir şablon seçimi addımları aradan qaldırılır.

Son olaraq, **C** **Mövcud Site Şablonlarını Seçmək** ödəniş addımında göstərilən şablonları bu sozlamada seçilən şablonlarla əvəz edir. Müştərinin seçim etməsinə kömək etmək üçün əvvəlcədən seçilmiş bir şablon da təyin edilə bilər.

Ən əsası, əgər şəbəkə administratoru şablon seçiminin ödəniş addımlarında baş verməsini istəyirsə, ' _default_ ' sozlaması kifayətdir. Alternativ olaraq, şablon seçimini aradan qaldırmaq və seçimi plan ayarlarından qaytarmaq üçün ' _assign new template_ ' və ya ' _choose available site templates_ ' variantları istənilə bilər.

#### Saytlar (Sites) {#sites}

**Sites** tabı Ultimate Multisite-ın məhdudiyyətlər funksionallığının bir hissəsidir.

![Sites tab](/img/config/product-sites.png)

Bu sozlama müştərinin üzvlüyü çərçivəsində yarada biləcəyi maksimum sayt sayını göstərir.

Məhdudiyyəti aktiv etmək üçün **limit sites** düyməsini aktiv vəziyyətə qoyun və **site allowance** sahəsində maksimum sayt sayını belirtin.

#### Ziyarətlər (Visits) {#visits}

**Visits** tabı Ultimate Multisite-ın məhdudiyyətlər sisteminin daha bir hissəsidir. Bu sozlama müştərinin saytına gələn unikal ziyarətçiləri hesablamağa və sonradan onları kəsməyə (throttling) imkan verir.

![Visits tab](/img/config/product-visits.png)

Маркетинг точки зрения сеть администраторов этот параметр могут использовать как способ побудить клиентов обновить свой тарифный план после достижения лимитов. Этот параметр также может помочь сетевому администратору ограничить и предотвратить чрезмерный трафик на сайты для сохранения системных ресурсов.

Чтобы воспользоваться этой функцией, включите переключатель **limit unique visits** (ограничение уникальных посещений) и укажите максимальное количество уникальных посетителей в поле **unique visits quota** (квота уникальных посещений).

Как только этот лимит будет достигнут Ultimate Multisite перестанет обслуживать сайт клиента, вместо этого отображая сообщение о превышении лимитов.

#### Пользователи {#users}

Ограничения 'Users' (Пользователи) в Ultimate Multisite позволяют сетевому администратору устанавливать лимиты на количество пользователей, которые могут быть созданы и назначены ролям.

![Users tab](/img/config/product-users.png)

Чтобы включить функцию ограничений, переведите переключатель **limit user** (ограничение пользователя) в активное состояние, сдвинув его вправо.

Затем для каждой роли, которую нужно ограничить, включите соответствующий переключатель рядом с ней и определите максимальный верхний предел в соответствующем поле.

#### Типы записей (Post Types) {#post-types}

Вкладка **Post Types** (Типы записей) позволяет сетевому администратору устанавливать детальные лимиты на обширный набор типов записей в WordPress.

![Post Types tab](/img/config/product-post-types.png)

Из-за структуры WordPress записи и типы записей являются важной частью его основной функциональности, поэтому система ограничений Ultimate Multisite разработана для помощи сетевому администратору в установлении и поддержании лимитов.

Чтобы включить эту подсистему ограничений, переведите переключатель **limit post types** (ограничение типов записей) в активное состояние, сдвинув его вправо.

След наступным, для каждого типа записи, который нужно ограничить, включите его, перетащив ползунок вправо и указав максимальный верхний лимит в соответствующем поле.

#### Дисковое пространство (Disk Space) {#disk-space}

Вкладка **Disk Space** позволяет сетевым администраторам ограничивать место, которое занимают клиенты.

![Disk Space tab](/img/config/product-disk-space.png)

Обычно в WordPress multisite основные файлы общие для всех сайтов, а отдельные директории, созданные для медиафайлов и загрузок, подпадают под эти настройки и ограничения.

Чтобы включить ограничение использования дискового пространства, установите переключатель **limit disk size per site** в активное состояние, перетащив его вправо.

Затем укажите максимальный верхний лимит в мегабайтах в поле **disk space allowance**.

#### Пользовательский домен (Custom Domain) {#custom-domain}

Переключив этот параметр, вы можете разрешить использование пользовательских доменов именно на этом тарифе.

![Custom Domains tab](/img/config/product-custom-domains.png)

#### Темы (Themes) {#themes}

Вкладка **Themes** в настройках продукта позволяет сетевому администратору сделать темы доступными для выбора клиентами и опционально принудительно установить состояние темы.

![Themes tab](/img/config/product-themes.png)

_**Примечание: Чтобы темы стали доступны клиентам, они должны быть включены в сети сетевым администратором.**_

![Network themes page](/img/config/product-themes-network-enabled.png)

Параметр **visibility** определяет, будет ли эта тема видна клиенту при просмотре вкладки **Appearance > Themes** на его сайте. Установка этого параметра в **Hidden** убирает тему с виду и, следовательно, ограничивает возможность ее выбора и активации.

![Themes tab](/img/config/product-themes.png)

Выбор **behavior** позволяет сетевому администратору определить состояние темы при создании сайта клиента.

Mevcut durumda tema müşteriye kendi kendine aktivasyon için sunulur. Öte yandan, Mevcut Olmayan durumda temayı müşterinin aktive etme yeteneği kaldırılır. Son olarak, Zorla Aktif Et (Force Activate) seçeneği temayı zorla seçer ve aktive eder, böylece site oluşturulduğunda varsayılan hale getirir.

#### Pluginler {#plugins}

Tema sekmesindeki gibi Ultimate Multisite, ağ yöneticisinin hem pluginlerin müşterilere görünürlüğünü hem de yeni bir site oluşturulurken durumunu belirlemesine olanak tanır.

![Plugins tab](/img/config/product-plugins.png)

**Görünürlük (visibility)** açılır menüsü, pluginin Pluginler menüsündeki seçeneği aracılığıyla müşterinin kendi sitesinde görüntülenirken ya görünür olmasını ya da gizlenmesini sağlar.

Ağ yöneticisi, davranış (behavior) açılır menüsündeki seçenekleri kullanarak pluginlerin davranışını daha da değiştirebilir.

![Plugins tab](/img/config/product-plugins.png)

**Varsayılan (Default)** seçim, müşterinin seçtiği site şablonunda tanımlanan plugin durumunu korur. Böylece şablona aktive edilen pluginler, şablon müşterinin sitesine klonlandığında aktif kalır.

**Zorla Aktif Et (Force Activate)**, site oluşturulduğunda pluginin aktif durumda olmasını sağlarken, **Zorla Devre Dışı Bırak (Force Inactivate)** ise site oluşturulduğunda pluginin devre dışı bırakılmasını sağlar. Her iki durumda da pluginin durumu, müşterinin WordPress Pluginler menüsü aracılığıyla manuel olarak değiştirilebilir.

**Force Activate & Lock** ay aynı şekilde çalışır ama müşterinin eklentinin durumunu değiştirmesini engeller. Bu yüzden Force Activate ve Lock ayarı, eklentiyi aktif duruma zorlar ve müşterinin onu devre dışı bırakmasını engeller. Benzer şekilde, **Force Inactivate & Lock** ayarı, eklentiyi pasif duruma zorlar ve kullanıcının eklentiyi etkinleştirmesini engeller.

Ağ yöneticisi Force Activate & Lock ve Force Inactivate & Lock ayarlarını site şablonları ile birlikte düşünmek isteyebilir; bu ayarlar seçildiğinde şablonlardaki eklenti durumları etkilenebilir.

#### Sıfırlama Sınırlamaları {#reset-limitations}

**Reset Limitations** sekmesi, üründe tanımlanan tüm özel limitleri sıfırlar. Limitleri sıfırlamak için **reset limitations** düğmesine tıklayın.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

İşlemi onaylamak için sağdaki **confirm reset** anahtarını aktif duruma kaydırın ve **reset limitations** düğmesine tıklayın.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

## Ürünü Düzenleme, Çoğaltma veya Silme {#edit-duplicate-or-delete-product}

Mevcut ürünler, **Ultimate Multisite > Products** yoluna gidip mevcut ürün adına fareyle gelerek düzenlenebilir, çoğaltılabilir veya silinebilir.

![Product hover actions](/img/config/product-hover-actions.png)
