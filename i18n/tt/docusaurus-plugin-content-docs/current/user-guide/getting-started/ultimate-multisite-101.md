---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite, WordPress-in pluginidir ki siz müştərilərə WaaS və ya Vebsaytlar kimi xidmətlər təklif etməyə imkan verir. Bu mövzunu daha yaxşı başlamaq və Ultimate Multisite-ın biznesinizə və müştərilərinizə necə kömək edə biləcəyini öyrənməzdən əvvəl, bizə bəzi əsas biliklər lazımdır.

## WordPress Multisite {#the-wordpress-multisite}

Bizim çoxumuz standart WordPress quraşdırılması ilə tanışdığımız bir şeydir. Ya onu hosting provayderinizin nəzarət paneli vasitəsilə yaradırsınız və ya cəsar olanlar üçün yeni bir veb server və verilənlər bazası qurursunuz, əsas faylları yükləyirsiniz və quraşdırma prosesinə başlayırsınız.

Bu dünya üzrə milyonlarla WordPress saytı üçün işləyir, lakin bir agentlik və ya hosting provayderinin perspektivindən həcm haqqında bir az danışaq.

Bir WordPress saytını və ya yüz saytı avtomatlaşdırılmış nəzarət paneli vasitəsilə yaratmaq əla olsa da, bu saytların idarə edilməsinə gəldikdə problem çox tez ortaya çıxır. İdarə edilmədiyi halda siz malverilər üçün əsas hədəf olursunuz. İdarə etmək səy və resurs tələb edən bir işdir və WordPress saytlarının idarə edilməsini və administrasiyasını asanlaşdırmaq üçün xaricdə kömək edən alətlər və pluginlər olsa da, müştərilərin administrasiya girişinə sahib olması bu səylərin asanlıqla inkişaf etdirilməsinə mane ola bilər.

Əsasında WordPress-də sadəcə 'Multisite' adlanan bir funksiya var ki, kökləri 2010-cu ildə WordPress 3.0-ın lansmanına qədər dayanır. Ondan sonra yeni funksiyalar əlavə etmək və təhlükəsizliyi artırmaq məqsədi daşıyan bir sıra redaktələri qəbul etmişdir.

Əsasən, bir WordPress multisite belə düşünülə bilər: Bir universitet tək bir WordPress quraşdırılması saxlayır, lakin hər fakültə öz WordPress saytını idarə edir.

Bu ifadeyi anlamak için Ultimate Multisite'ın dokümantasyonunda değil, WordPress topluluğunun genelinde bulunan bazı temel terimleri inceleyelim.

### Ağ (The Network) {#the-network}

WordPress bağlamında, multisite ağı demek, tek bir kontrol panelinden birden fazla alt sitenin yönetilebildiği yer demektir. Multisite ağı oluşturma konusunda hosting sağlayıcılar arasında farklılıklar olsa da, sonuç genellikle WordPress'e bu özel modda çalıştığını bildirmek için wp-config.php dosyasında birkaç ek talimat anlamına gelir.

Multisite ağ ile bağımsız bir WordPress kurulumu arasında bazı belirgin farklar vardır ki bunları kısaca tartışacağız.

#### Alt Alan Adı (Subdomain) vs. Alt Dizin (Subdirectory) {#subdomain-vs-subdirectory}

Yapmanız gereken en acil kararlardan biri, multisite kurulumun _alt dizinler_ mi yoksa _alt alan adları_ mı ile çalışacağını belirlemektir. Ultimate Multisite her iki seçeneğe de eşit derecede iyi uyum sağlar ancak bu iki yapı arasında bazı mimari farklılıklar vardır.

_Alt dizinler_ konfigürasyonunda, ağ siteleri ana alan adına dayalı bir yol miras alır. Örneğin, 'site1' olarak etiketlenmiş bir ağ sitesinin tam URL'si https://domain.com/site1 olur. _Alt alan adları_ konfigürasyonunda ise ağ sitesinin ana alan adından türetilmiş kendi _alt alan adı_ olur. Böylece 'site1' olarak etiketlenmiş bir sitenin tam URL'si https://site1.domain.com/.

Her iki seçenek de tamamen geçerli seçimlerdir, ancak _alt alan adlarını_ kullanmak birçok avantaj sunsa da mimarisi açısından daha fazla düşünme ve planlama gerektirir.

DNS meselesine gelince, `_subdirectories_` (alt dizinler) kullanmak nispeten basit bir zorluktur. Ağ siteleri ana yolun sadece çocukları olduğu için, ana alan adı için tek bir alan adı kaydının bulunması yeterlidir. `_subdomains_` (alt alan adları) söz konusu olduğunda ise durum biraz daha karmaşıktır; ya her ağ sitesi için ayrı bir CNAME kaydı gerekir ya da DNS kayıtlarında joker karakter (\*) girişi kullanmanız gerekir.

SSL ve SSL sertifikalarının verilmesi ve kullanılması gibi başka bir düşünülmesi gereken alan daha var. `_subdirectory_` yapılandırmasında, ağ siteleri ana alan adının sadece yolları olduğu için tek bir alan adı sertifikası kullanılabilir. Böylece domain.com için bir sertifika, https://domain.com/site1, https://domain.com/site2 ve benzeri için SSL sağlayacaktır.

`_subdomain_` yapılandırmasında joker karakterli (wildcard) bir SSL sertifikası kullanmak en yaygın seçeneklerden biridir. Bu tür bir SSL sertifikası hem bir alan adını hem de onun `_subdomains_`'ini şifreler. Bu nedenle, joker karakterli bir SSL sertifikası https://site1.domain.com, https://site2.domain.com ve domain.com'un kendisi için şifreleme sağlayacaktır.

Diğer seçenekler mevcut olsa da, bunlar genellikle kapsam ve uygulama açısından sınırlıdır ve uygunluk konusunda ek yapılandırma ve düşünme gerektirir.

#### Eklentiler ve Temalar {#plugins-and-themes}

WordPress'in müşterinin bakış açısıyla ne verdiğini de alması gerekir. Bağımsız bir WordPress kurulumunda eğer site yöneticisi kötü bir eklenti kurarsa veya kurulumunu güncel tutmazsa, bu eylemin tek kurbanı kendisidir. Ancak, bir site yöneticisinin multisite kurulumuna kötü bir eklenti kurması, ağdaki her sitede bir kurban yaratır.

Шуңарыла, миксо-сайт WordPress-те конфигурацияләнгергәндә, сайт администраторларының плагиндар һәм темалар кулланып ясауга мөмкинлеклеген алар өчен алып китерә һәм бу мөмкинлекне танындалган сете администратор (network administrator) вакытында ясалган "супер администратор" ролына җибәрә. Бу өстәмә мөмкинлекле роль аның сете сайт администраторларының дашборсында плагиндар менюсын күрергә һәм алар өчен бу уку правалар активлау һәм алахдан чыгару белән берләшәмеми булгандыр, дип чеберләне иде.

Бу мәсьәгатьтән сораула, сете администратор сетькә плагиндар һәм темалар куллану өчен мөмкинлекләрне ясарга һәм аларны сете сайтлары өчен уку праваларын ыручы (delegate) итә. Сайт администраторлары аларның сайтына тиешмәгән плагиндар һәм темаларды ясала алмыйлар, төпнәчәлек.

#### Пользовалар һәм Администраторлар {#users-and-administrators}

WordPress Multisite-да барлык сете сайтлар ең соңгы базаны paylaşар һәм ул мөмкинлекләрне (users), ролларга һәм мөмкинлекләргә (capabilities) да paylaşар. Буны түгел, барлык пользовательларның бер конкрет сайтка мөмкинлекле булмаган, хәзергесе сетенең мүше булып торачак дип түшмик.

Бу түшмәнең өстендә, пользовательлар ясала алу өчен аларны сайт администраторларына ясауны ясау артык күп була, ул чакта WordPress Multisite-да этот мөмкинлек сайты администраторларынан алып китерә һәм сете администраторның мөмкинлегенә җибәрә. Шулай ук сете администратор алар өчен укы праваларын сайт администраторына ыручы (delegate) итә, сораула, алар өчен аларның сайт өчен пользовательлык хаталар ясарга булмасын.

<!-- Скриншот бар: WordPress Multisite сете пользовательлерене башкару интерфейсы -->

Мәсегатьтән сораула кайварга, пользователь хаталары аларның сайтына мөмкин булып китергә була, ләкин ул сеть өчен бөтенләп таллырга булган һәм ул сетегең беркечлеге булып торачак. Бу мәсьәгатьтән сораула, уазы名 (usernames) ясауга мөмкин булымаган вакыйгалар суще.

Энтерпрайз системаларда бу хориж понятие булмаса, бик теңелдемесез бул юнәлеу һәм идентификация өчен берничә юл (single source) – бу авыр тема була, хәзерге вакытта яки обыкашкан WordPress инсталлациялары белән таныш булырга мөмкин. Учрашалар өчен ул бик кыен түгел.

#### Media (Медиа файллары) {#media}

WordPress Multisite-та сете сайты бир бер база данныхннан исәпләнә, алар медиа файллары өчен файлын системада атайын юллар саклай калдырырга мөмкин.

Стандарт WordPress юлы (wp-content/uploads) өзок ярайында калдырыла, әмма ул юлы сете сайтның еке уникаль ID-сына яраша өзгөртәләнгән. Соңгы нәтиҗәсе: сете сайт өчен медиа файллары wp-contents/uploads/site/[id] формасында görә калат.

#### Permalinks (Уламышлар) {#permalinks}

Мин мунда өчнән торғанча, _subdomain_ конфигурациясы _subdirectory_ конфигурациясенннан яхшырак булган юллар турында сөйләгән идем, һәм инде ул юллар:

_Subdirectory_ конфигурациясында, сеть турылган вакытта ясалган елда (birinci site) һәм сете сайтка китәчәк сайтка域名дан китәчәк бер генә шулай юлы булган. Бу бик очрак конфликтлар ясарга мөмкин.

Постлар өчен, сете сайтлар белән чигемелек булмасы өчен елда /blog/ юлы голдурүләмәләрне китәчәк бер генә сайтка кулланыла. Бу аерӘнә ‘Post name’ булып калган уламышлар domain.name/blog/post-name/ формасында күрсәтеләчәк диме.

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

_Subdomain_ конфигурациясында бу әсе булмаган, чөнки сете сайтларның хәзерге domainны толунган аерӘнәллек өчен бер генә юлга ияне булмаса, алар өзок _subdomain_-ларына яраша атайын юллар саклай калдырырга мөмкин.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Static Pages (Статикалык бетләр) {#static-pages}

_subdirectory_ конфигурацииде имя конфликти потенциал статика страниц, как основного сайта и сетевых сайтов одинаковый путь имеют.

Это избежать для этого WordPress предоставляет способ заблокировать определенные имена сайтов, чтобы они не конфликтовали с именами первого сайта. Обычно администратор сети вводит корневые пути страниц основного сайта.

<!-- Скриншот недоступен: настройки сети WordPress, показывающие заблокированные имена сайтов для предотвращения конфликтов -->

В _subdomain_ конфигурации возможность именных конфликтов снижается благодаря _subdomain_, так как он уникален для сетевого сайта и никак не связан с основным сайтом.

### Регистрация {#registration}

В настройках сети WordPress Multisite доступно несколько новых опций регистрации пользователей, которые позволяют новым и существующим пользователям создавать сайты.

<!-- Скриншот недоступен: настройки сети WordPress Multisite, показывающие опции регистрации -->

В отличие от автономных установок WordPress, сетевые сайты не сохраняют привычные опции для разрешения регистрации пользователей или назначения этих регистраций ролям.

<!-- Скриншот недоступен: настройки регистрации пользователей на автономном сайте WordPress, показывающие ограниченные опции -->

Когда создаются учетные записи пользователей, эти учетные записи генерируются на уровне сети. Таким образом, вместо того чтобы принадлежать какому-либо конкретному сайту, они принадлежат всей сети. Это имеет некоторые отличительные преимущества и недостатки.

Например, предположим, что ваш WordPress Multisite новостей и информации занимается. Вы создадите мультисайт, а затем создадите сетевые сайты для финансов, технологий, развлечений и других областей интереса, сохраняя общий контроль над плагинами и темами. Каждый сетевой сайт будет иметь гораздо больший уровень контроля над внешним видом и пользовательским опытом своего сетевого сайта, чем у кастомных типов записей или обычных категорий постов.

В такой степени, когда пользователь входит в систему, он входит в сеть и в конечном итоге входит на каждый сетевой сайт, чтобы обеспечить бесшовный опыт. Если ваш новый сайт основан на подписке, это будет идеальное решение и результат.

Однако, если предполагаемое назначение мультисайта — предложить разрозненные сетевые сайты, не имеющие друг с другом никакой связи, то почти всегда требуются внешние или дополнительные плагины для управления ролями пользователей.

### Домен и SSL {#domain-and-ssl}

Давайте поговорим об установке WordPress Multisite, на которую мы почти не обращаем внимания — о Wordpress.com. Это самый обширный пример WordPress multisite и демонстрирует его широкие возможности по настройке и приспособлению под определенную цель.

Сегодня в современном интернете использование SSL практически обязательно, и администраторы сетей WordPress multisite скоро сталкиваются с этими проблемами.

В конфигурации _поддомен_ сайты создаются на основе корневого доменного имени. Таким образом, сайт с названием «site1» будет создан как «site1.domain.com». Используя поддоменный SSL-сертификат (wildcard SSL certificate), сетевой администратор может успешно решить эту проблему и предоставить возможности шифрования SSL для всей сети.

WordPress Multisite'ta bir alan adı eşleştirme işlevi bulunur. Bu özellik, ağ sitelerinin özel alan adlarıyla veya ağın ana alan adından farklı alan adlarıyla ilişkilendirilmesine olanak tanır.

Ağ yöneticileri için bu durum hem alan adı yapılandırması hem de SSL sertifikalarının düzenlenmesi ve bakımı açısından ek bir karmaşıklık yaratır.

Bu kapsamda, WordPress Multisite'ın [www.anotherdomain.com](http://www.anotherdomain.com) gibi bir adresi 'site1' ile eşleştirmeye olanak tanıması sağlansa da, ağ yöneticisi dışarıdan DNS kayıtlarını yönetme ve SSL sertifikalarını uygulama zorluğuyla karşı karşıyadır.

## Ultimate Multisite {#ultimate-multisite}

Tek başına çalışan bir WordPress kurulumu ile Multisite kurulumu arasındaki farkları anladığımızda, Ultimate Multisite'ın Web Sitesi Hizmeti (Website as a Service - WaaS) sunmak için en iyi çözüm olduğunu görelim.

### Giriş {#introduction}

Ultimate Multisite, bir Website as a Service (WaaS) oluşturma konusunda sizin çok yönlü çakmağınızdır. Wix.com, Squarespace ve WordPress.com'u düşünün; sonra kendi hizmetinizi sahip olmayı düşünün.

Arka planda Ultimate Multisite, WordPress Multisite'ı kullanır ancak bunu, ağ yöneticilerinin multisite kurulumlarıyla karşılaştığı sayısız zorluğu çözmenin yanı sıra, desteklenebilecek çok çeşitli kullanım durumlarına olan yetenekleri artıran bir şekilde yapar.

Aşağıdaki bölümlerde bu durumları desteklemek için gereken bazı yaygın kullanım durumlarını ve dikkate alınması gereken noktaları inceleyeceğiz.

### Kullanım Senaryoları {#use-cases}

#### Durum 1: Bir Ajans {#case-1-an-agency}

Genellikle bir ajansın temel becerileri, web sitelerinin tasarımında yatar; bu tasarımlara barındırma veya pazarlamanın ek hizmetler olarak listelenmesi gibi yönleri de içerir.

Agencyalar Ultimate Multisite platformada bir nevi inanılmaz değer sunar, çünkü birden fazla web sitesini tek bir platformda barındırma ve yönetme imkanı sağlar. Özellikle GeneratePress, Astra veya OceanWP gibi belirli temalarda tasarımlarını standartlaştıran ajanslar için, Ultimate Multisite'ın bu temaları her yeni sitede otomatik olarak etkinleştirebilme yeteneklerinden faydalanabilirler.

Aynı şekilde, ajans fiyatlandırması için yaygın ve popüler eklentilerdeki indirimlerin bolluğu gibi, Ultimate Multisite kullanımı da ajansların mevcut yatırımlarından yararlanmasını sağlar; çünkü eklentilerin kurulabileceği, bakılabileceği ve kullanılabilmesi için ortak bir platform sunar.

Büyük ihtimalle yapılandırma (configuration) kullanmak istenir ve neyse ki Ultimate Multisite, birçok popüler hosting sağlayıcısı ile Cloudflare ve cPanel gibi hizmetler için entegrasyonları sayesinde alan adı eşleştirmeyi (domain mapping) ve SSL sertifikalarını inanılmaz derecede kolaylaştırır.

Böylece bu sağlayıcılardan birini kullanarak veya Ultimate Multisite'ı Cloudflare arkasına koyarak alan adlarının yönetimi ve SSL sertifikaları gibi konular biraz zahmetsiz hale gelir.

Sitelerin oluşturulması üzerinde sıkı kontrol tutmak isteyen ajanslar, Ultimate Multisite'ın sadeleştirilmiş arayüzü aracılığıyla siteleri oluşturmanın ve siteleri müşterilerle ve planlarla ilişkilendirmenin kolaylığını takdir edeceklerdir.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Eklentiler ve temalar üzerinde ürün bazında sıkı kontrol, Ultimate Multisite'ın sezgisel arayüzleri aracılığıyla korunur; bu sayede eklentiler ve temalar yeni bir site için örneklendiğinde kullanılabilir veya gizlenebilir durumları da yönetilebilir.

![Product plugin limitations interface](/img/config/product-plugins.png)

Темы похожую функциональность предоставляют, позволяя активировать или скрывать определенные темы при создании сайта.

![Product theme limitations interface](/img/config/product-themes.png)

Агентства получат спокойствие с Ultimate Multisite, позволяющим им делать то, в чем они лучшие — создавать исключительные веб-сайты.

#### Случай 2: Нишевый поставщик {#case-2-niche-provider}

Есть старая поговорка, которая гласит: «Делай одно дело и делай его хорошо». Для многих специалистов это означает создание продукта или услуги вокруг одной основной идеи.

Возможно, вы заядлый гольфист, продвигающий сайты для клубов, или вы можете быть заядлым геймером в киберспорте, предоставляющим сайты для кланов. А может быть, вы продвигаете услугу бронирования для ресторанов?

По многим причинам вам захочется предоставлять услуги на основе общей структуры и платформы. Возможно, вы разработали или инвестировали в специальные плагины для предоставления необходимой функциональности, или же может быть так, что отраслевые лучшие практики требуют некоторого стандартизированного подхода к дизайну.

Одной из инновационных функций Ultimate Multisite является использование шаблонных сайтов (template sites). Шаблонный сайт — это такой, где установлена и активирована тема, установлены и активированы необходимые плагины, а также созданы образцы постов или страниц. Когда клиент создает новый сайт на основе шаблона, содержимое и настройки шаблона копируются на этот новосозданный сайт.

Для поставщика нишевых сайтов и услуг это дает несравненное преимущество в способности мгновенно создать готовый к работе сайт с пользовательскими плагинами и дизайном. Клиенту нужно предоставить только минимальный ввод для завершения услуги.

Talebe etiketlerine bağlı olarak hem _subdirectory_ (alt klasör) hem de _subdomain_ (alt alan adı) yapıları uygun olabilir, bu durumda mimari seçimler _subdirectories_ için basit bir SSL sertifikası veya _subdomains_ için joker karakterli (wildcard) bir SSL sertifikası arasında olacaktır.

#### Durum 3: WordPress Web Hosting {#case-3-wordpress-web-hosting}

WordPress sitelerini barındırmanın pek çok yolu olsa da, bir müşteriye önceden kurulu WordPress sürümüyle web alanı sağlamak bu kadar basit değildir. Bunun nedeni anlamlı bir hizmet sunmak için bir dizi karar ve dikkate alınması gereken hususun bir araya gelmesi gerektiğidir.

Ultimate Multisite, WordPress sitelerini barındırmak için kapsamlı bir hazır çözüm sunarak bu alanda başarılı olur. Çözüme abonelik hizmetleri, ödeme toplama, ödeme formları, indirim kuponları ve müşteri iletişimleri sağlayan temel mekanizmalar dahildir.

Bir WordPress Multisite'ı doğru şekilde kurmak, yapılandırmak ve sürdürmek için gereken büyük işin çoğu, Ultimate Multisite tarafından kolaylaştırılır; bu sayede ağ yöneticilerinin yalnızca ürün katmanları, fiyatlandırma ve hizmet teklifleri gibi hizmetleriyle veya nişleriyle ilgili yönleri düşünmeleri yeterlidir.

Ultimate Multisite ile entegre olmak isteyen geliştiriciler için çözüm ayrıca kapsamlı bir RESTful API ve olay bildirimleri için Webhooks sunar.

Bir dizi harici eklentiye ve lisansa bağımlı olmadan, Ultimate Multisite Wix, Squarespace, WordPress.com ve diğerlerine rakip özelliklerle zengin ve karşılaştırılabilir bir çözüm sunar.

### Mimari Hususlar {#architecture-considerations}

Bu kapsamlı bir rehber olmasa da, Ultimate Multisite kurulumunu desteklemek için doğru teknolojileri seçmeye yardımcı olacak aşağıdaki maddeler yol gösterici olabilir.

#### Paylaşımlı vs. Özel Hosting {#shared-vs-dedicated-hosting}

К сожалению, не все хостинг провайдеры одинаковы, и некоторые практикуют экстремальную плотность серверов. Низкобюджетные провайдеры обычно зарабатывают деньги за счет максимизации плотности сервера. Поэтому ваша установка Ultimate Multisite может быть всего лишь одним из нескольких сотен сайтов на одном сервере.

Без надлежащих защит от провайдера сайты на общем сервере сталкиваются с проблемой «шумного соседа». Это когда сайт на том же сервере потребляет столько ресурсов, что другие сайты вынуждены конкурировать за оставшиеся ресурсы. Часто это проявляется в виде сайтов, которые медленно работают или не отвечают вовремя.

Будучи сами провайдером веб-хостинга, вы понимаете, что последствия этого означают, что ваши клиенты сталкиваются с плохой скоростью, низким рейтингом страниц и высоким процентом отказов, что часто приводит к оттоку клиентов, которые ищут услуги в другом месте.

Короче говоря, дешево не значит хорошо.

Ultimate Multisite известен тем, что работает с рядом хороших хостинг-провайдеров и хорошо интегрируется в их среду, предоставляя такие функции, как отображение доменов (domain mapping) и автоматический SSL. Эти провайдеры ценят производительность и предоставляют более высокий уровень обслуживания, чем общий хостинг.

Для списка совместимых провайдеров и полных инструкций по настройке для каждого, пожалуйста, ознакомьтесь с документацией о Совместимых Провайдерах (Compatible Providers).

#### Соображения по производительности {#performance-considerations}

Ultimate Multisite — это не медленное приложение, а удивительно быстрое. Однако оно работает только настолько хорошо, насколько хороше основное приложение и инфраструктура, и может использовать только то, к чему у него есть доступ.

Подумайте вот о чем: вы являетесь сетевым администратором установки Ultimate Multisite с 100 сайтами. Некоторые из этих сайтов работают хорошо и привлекают определенное количество посетителей веб-сайтов каждый день.

Bu senaryo daha küçük ölçekte, örneğin bir ila beş site için farklı olurdu ama büyük ölçek sorunları uzun zaman sonra ortaya çıkardı.

İhmal edilirse, tek bir Ultimate Multisite sitesi tüm ziyaretçilerin isteklerini yerine getirmekten sorumlu olurdu. Bu istekler dinamik PHP sayfaları veya stil dosyaları, JavaScript veya medya dosyaları gibi statik varlıklar için olabilir. Bir site olsun ya yüz site, bu görevler tekrarlayıcı, monoton ve israf edici hale gelir. Çıktı her istekte aynı statik bilgi olduğu bir PHP dosyasını işlemek için CPU gücü ve belleği kullanmak gereksizdir.

Benzer şekilde, bir PHP veya HTML sayfası için yapılan tek bir istek, ardından betikler, stil dosyaları ve resim dosyaları için birden fazla sonraki isteği tetikler. Bu istekler doğrudan Ultimate Multisite sunucunuza yöneliktir.

Bu sorunu sunucuyu yükselterek kolayca çözebilirsiniz ancak ikincil bir problemi - coğrafi gecikmeleri (geographic latencies) - düzeltmezsiniz. Bu problemi doğru bir şekilde ele alabilmek için birden fazla konumda birden fazla sunucuya ihtiyacınız vardır.

Bu nedenle çoğu ağ yöneticisi, statik sayfalar için istekleri karşılamak amacıyla ön uç önbellekleme çözümlerinden (front-end caching solutions) ve içerik dağıtım ağlarından (CDN) yararlanır. Bu istekleri yerine getirmek ve varlıkları sunucuya ulaşmadan önce sağlamak işlem kaynaklarını kurtarır, gecikmeleri ortadan kaldırır, gereksiz yükseltmelerden kaçınır ve teknoloji yatırımlarını en üst düzeye çıkarır.

Ultimate Multisite, ağ yöneticilerinin kurulumlarını Cloudflare arkasına koymalarına ve sadece önbellekleme yeteneklerini değil, aynı zamanda DNS barındırmayı, SSL sertifikalarını ve güvenlik mekanizmalarını da kullanmalarına olanak tanıyan gelişmiş bir Cloudflare add-on içerir.

#### Yedeklemeler (Backups) {#backups}

Yedeklemeler hakkında 50 kişiden tavsiye isteyebilirsiniz ve yedekleme stratejileri hakkında 50 farklı görüş alabilirsiniz. Cevap, bu duruma bağlıdır.

Дегерей бул усулдан дингерле хәлендәге мәсьәләләр бар: бэкаплар мөмкин, һәм буны провайдер тарафыннан ярдмасы белән тәэмин итүнең артык ышамлы. Әйтәбез, хәзерге вакытта буны башкаручы администраторга күтәрү мәсьәләсе башка тема.

Бу бөтен бөгет өчен, бэкап – системаның бер конкрет вакыттагы (бэкап ясалган вакытта) җыенды көчле сыздыру дигәнне әйтәбез. Әнәсе, бэкап ясалган вакытта системаның ничек булганнары, ошо вакыттагы булышы тора һәм бэкапта сакланырга тиеш.

Бу түшмәнең авырлык белән, бэкаплар ничек ясалазна һәм иң яхшысы нинди срендәге өчен булган, бу сиздернең мөрәҗәгатьләрегезгә һәм хостинг провайдереннән ошо мөрәҗәгатьләрне кабул итү чагылышына зависише. Ганәчә, эң күп мөрәҗәгатьчедан ең төп мәсьәләдән ең аз мөрәҗәгатьчегә артык булган вариантлар ары тик анда була.

#### Снапшотлар (Snapshots) {#snapshots}

Снапшотлар бэкаплар өчен сурәти тәкъдимнәр диләр, чөнки олар җиңел, күп тагый кагыйдәсез (җыенды кайталау мөрәҗәгать иткәч), һәм "җанда булмаган" (just work) булып тора. Бу өчен провайдереннән ярдәм кирәк, һәм ул, әлбәттә, хәзерге вакытта VPS (Virtual Private Server) ва миңа шулай яшьлек серверлар белән тиеше. "Согласулы Провайдерләр" документациясеңдә булган берничә провайдер бэкапларны башкара өчен администраторның кайгырлашын чикләп калдырырга кирәксез бэкаплар тәкъдим итә.

Традиционные бэкапы нацелены на файлы и базы данных, а снимок (snapshot) нацелен на весь диск. Это означает, что в снимок попадает не только данные сайта, но и операционная система, и конфигурация. Для многих это явное преимущество, потому что новую систему можно почти мгновенно создать из снимка и запустить для замены неисправного экземпляра. Аналогично, процесс восстановления файлов требует только прикрепления образа снимка в качестве диска к существующему экземпляру, чтобы файлы можно было получить и скопировать.

Снимки могут повлечь дополнительные расходы от хостинг-провайдера, но это страховка от несчастных случаев.

#### Внешние скрипты {#external-scripts}

Кажется, внешних скриптов и решений для резервного копирования ресурсов WordPress и MySQL не хватает, и они отлично подойдут для Ultimate Multisite, так как это плагин на WordPress, который использует файловую систему и базу данных WordPress. Таким образом, решение, которое делает бэкапы сайтов WordPress, адекватно покроет потребности Ultimate Multisite.

Мы не можем рекомендовать один скрипт вместо другого, но наш общий совет — проводить несколько тестов на резервное копирование и восстановление, чтобы убедиться, что результаты вам нужны, и «убедитесь в этом», постоянно оценивая скрипт и его функциональность, особенно там, где применяется какая-либо стратегия дифференциального бэкапа.

Следует отметить, что во время работы этих скриптов нагрузка на систему увеличится, что нужно учитывать.

#### Плагины {#plugins}

В WordPress почти нет проблем, которые нельзя решить с помощью плагина, и если управление внешними скриптами не ваше, возможно, следующий лучший вариант — это плагин.

Плагины seçenekler ve özellikler açısından farklılık gösterse de, çoğu aynı işlevi yerine getirir: WordPress dosyalarının ve veritabanı içeriğinin bir kopyasını oluşturmak. Bundan sonra işlevsellik değişir; bazı eklentiler yedekleri Google Drive veya Dropbox gibi harici servislere ya da S3, Wasabi gibi uyumlu nesne depolama servislerine gönderebilir. Daha kapsamlı eklentiler ise harici depolama maliyetlerini düşürmek için yalnızca değiştirilmiş verileri yedekleme stratejisi veya farklı bir yöntem sunar.

Eklenti seçerken, bunun çoklu site (multisite) uyumlu olup olmadığını kontrol etmeye özen gösterin. İşleyiş doğası gereği, yedekleme çalışırken sunucuda geçici bir yük bekleyebilirsiniz, süreç tamamlanana kadar.

#### Alan Adı ve SSL {#domain-and-ssl-1}

Çoklu site alt alan adı (_subdomain_) modunda alan adları hakkında zaten çok konuşuldu. Ağ yöneticileri için neredeyse evrensel bir çözüm, joker karakter DNS kayıtlarından yararlanmaktır.

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

Bu tür bir DNS kaydı, ‘site1.domain.com’ ve ‘site2.domain.com’ gibi alt alan adlarını 1.2.3.4 IP adresine başarıyla yönlendirir ve bu da Ultimate Multisite'ı ve daha geniş ölçüde WordPress Multisite'ı _subdomain_ modu kullanarak destekler.

Bu, HTTP için mükemmel çalışabilir çünkü hedef sunucu HTTP başlıklarından okunur, ancak günümüzde güvenli HTTPS işlemlerinin neredeyse zorunlu olduğu kadar basit web siteleri nadirdir.

Шукарно, у вас є прості варіанти для SSL-сертифікатів. У режимі _subdirectory_ можна використовувати звичайний доменний сертифікат. Ці сертифікати легко та безкоштовно доступні від хостинг-провайдерів, які можуть використовувати безкоштовний сервіс LetsEncrypt або інший джерело. В іншому випадку вони комерційно доступні від уповноважених органів, якщо ви зможете згенерувати запит на підписання сертифіката (CSR).

Для режиму _subdomain_ використання дикого SSL-сертифіката ідеально поєднується з диким доменом і дозволяє зробити цей сертифікат авторитетним для кореневого домену та всіх _subdomains_ без зайвих налаштувань.

Однак слід зазначити, що дикі SSL-сертифікати можуть не працювати з такими сервісами, як Cloudflare, якщо ви не використовуєте план для підприємств (enterprise plan) або не встановите вхідний режим лише у DNS, у такому випадку всі кешування та оптимізація будуть пропущені.

Готове рішення Ultimate Multisite вирішує цю проблему, демонструючи наш великий досвід з потребами WordPress multisites. Увімкнення цього простого плагіна дозволить Ultimate Multisite використовувати ваші облікові дані Cloudflare для автоматичного додавання записів DNS для мережевих сайтів у Cloudflare та встановлення їх режиму як ‘proxied’ (проксі). Таким чином, кожен підсайт мережі, коли він створюється, матиме повний захист і переваги Cloudflare, включаючи SSL.

Залежно від характеру та призначення вашої інсталяції Ultimate Multisite, клієнтам може знадобитися використовувати власні домени. У цьому випадку мережевий адміністратор відповідає за вирішення двох проблем: розміщення доменного імені та сертифікатів SSL для цього домену.

Көпчүлүк үчүн Cloudflare колдонуу оң жол болуп саналат. Клиенттер жөн гана домендерін Cloudflare-ге коюп, Ultimate Multisite'тын түпкү доменына CNAME көрсөтүп, домендерін Ultimate Multisite'та маплай баштасалар өзүнүн кастомный домен атынан пайдаланууну баштай алышат.

Булдан тышкары, альтернативдүү чечимдерди издөө керек, ошондуктан Ultimate Multisite Коопсуз Провайдерлер тизмесин сунуштайт. Себеби DNS жана SSL-ди орнотуу процесси өтө татаал болушу мүмкүн. Бирок, Ultimate Multisite бул провайдерлер менен интеграциясы аркылуу татаалдыгы көп кыскарылат жана процедура автоматталат.

#### Плагиндер (Plugins) {#plugins-1}

Клиенттериңиз же тармак сайттары үчүн функцияларды камсыз кылууга кошумча плагинтерге муктаж болушу мүмкүн. Бардык плагиндер WordPress Multisite жана Ultimate Multisite менен иштешеби? Бул аткарылышына көзделген.

Көпчүлүк плагиндер WordPress Multisite'та орнотулушу мүмкүн, бирок аларды активдештирүү жана лицензиялоо автордон авторго ар кандай болот.

Чыгарылган маселе — кээ бир плагиндер лицензияны домен боюнча талап кылганда, лицензия кантип колдонулганы. Бул ошол плагиндер үчүн тармак администратору ар бир жаңы сайтта ар бир плагин үчүн лицензияны колдонулушу керек дегенди билдирет.

Демек, плагин авторсу менен алардын плагини WordPress Multisite менен кантип иштээри жана аны лицензиялоо үчүн кандай өзгөчө талаптар же процедуралар бар экенин текшерүү эң жакшы болушу мүмкүн.
