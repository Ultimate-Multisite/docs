---
title: Клиентский аккаунт страницы
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Клиента Hesap Sayfası (v2)

_**ВАЖНОЕ ПРИМЕЧАНИЕ: Эта статья относится к Ultimate Multisite версии 2.x.**_

Когда клиенты подписываются на план в вашей сети, им предоставляется доступ к веб-сайту и его панели управления с важной информацией о платежах, членстве, доменах, ограничениях плана и т.д...

В этом туториале мы проведем вас по странице учетной записи клиента, и вы увидите, что ваши клиенты могут видеть и делать внутри нее.

## Страница Учетной Записи

Страницу учетной записи можно открыть, нажав на **Account** (Учетная запись) в панели управления вашего клиента.

![Меню учетной записи в панели управления клиента](/img/account-page/account-menu.png)

В сетях суверенных арендаторов Ultimate Multisite v2.13.0 сохраняет этот опыт управления клиентами на основном сайте. Если клиент открывает действия вроде checkout (оформление заказа), billing (счет), invoice (инвойс), site-management (управление сайтом), template-switching (переключение шаблона) или domain-mapping (сопоставление домена) из суверенного арендатора, эти действия возвращаются на панель клиента основного сайта, чтобы записи о биллинге и членстве сети оставались авторитетными.

Когда клиент приходит с суверенного арендатора, на панели клиента основного сайта может быть включена ссылка для возврата на сайт арендатора. Эта ссылка показывается только тогда, когда Ultimate Multisite может проверить целевой адрес возврата как один из сайтов клиента, что предотвращает произвольные перенаправления и сохраняет рабочий процесс арендатора.

![Обзор страницы учетной записи клиента](/img/account-page/overview.png)

После того как клиент нажмет на нее, он увидит общий обзор своего членства, адреса выставления счетов, инвойсов, доменов, ограничений сайта и сможет также изменить ****Site Template** (Шаблон сайта) (если это разрешено в вашей сети).

Они также могут изменить план членства на другой или приобрести другой пакет или услугу, которую вы предлагаете. Давайте посмотрим на каждый раздел отдельно.

### Sizin Üyeliğinizin Genel Bakışı:

Müşterilerinizin web sitesi adının hemen altındaki ilk blok, mevcut planınızı ve bu planla birlikte satın alınan hizmetleri/paketleri gösteren bir genel bakış sunar. Bu blok ayrıca üyelik numarasını, başlangıçta ödenen tutarı, planın ve herhangi bir hizmetin/paketin maliyetini ve bu üyelik için kaç kez fatura kesildiğini de gösterirler. Ayrıca üyeliğin **Aktif** mı, **Süresi Dolmuş** mu yoksa **İptal Edilmiş** mi olduğunu da görebilirler.

![Planı, tutarı ve faturalandırma ayrıntılarını gösteren üyelik genel bakışı](/img/account-page/membership-card.png)

Bu bloğun hemen altında müşteriler **Bu Site Hakkında** ve **Site Limitleri** bloklarını görebilirler. Bu bloklar onlara planlarıyla ilgili tüm kısıtlamaları gösterir: disk alanı, gönderi sayısı, sayfa sayısı, ziyaretçi sayısı vb... Bu limitler **Ultimate Multisite > Ürünler** sayfasındaki her plan sayfasında yapılandırılabilir.

![Plan kısıtlamalarını gösteren Bu Site Hakkında ve Site Limitleri blokları](/img/account-page/site-limits.png)

**Üyeliğinizin** sağ tarafında müşteriler **Değiştir** seçeneğine tıklayabilirler. Bu, onlara mevcut tüm planları ve paketleri/hizmetleri gösterecektir. Başka bir plan seçerlerse, üyelik için geçerli olan kısıtlamalar, üyeliğin mevcut kısıtlamaları yerine o yeni plana ait kısıtlamalarla geçer; ister aşağı yükseltme (downgrade) yapsınlar ister yukarı yükseltme (upgrade).

Şimdi, müşteriler bu mevcut üyelik için paketler veya hizmetler satın almak isterlerse - örneğin daha fazla disk alanı veya ziyaretçi sayısı gibi - mevcut üyelikte bir değişiklik olmaz, sadece yeni paketler ona eklenir.

Not: Kupon kodları bu üyelik değiştirme sayfasında eklenemez. Müşteri ilk üyelik alımında bir kupon kodu kullandıysa, bu kod bu yeni üyeliğe de uygulanacaktır.

### Fatura Adresini Güncelleme:

Учет (аккаунт) sayfada müşteriler fatura adreslerini de güncelleyebilirler. Sadece _Billing Address_ yanındaki **Update** butonuna tıklamaları yeterli.

![Billing Address section with Update button](/img/account-page/billing-address.png)

Müşterinizin önünde yeni bir pencere açılacak. Yapması gereken tek şey, yeni adresi doldurmak ve _Save Changes_ (Değişiklikleri Kaydet) butonuna tıklamak.

![Update billing address form](/img/account-page/billing-address-form.png)

### Site Şablonunu Değiştirme:

Müşterilerinizin site şablonlarını değiştirmesine izin vermek için **Ultimate Multisite > Settings > Sites** bölümüne gitmeniz ve **Allow Template Switching** (Şablon Değiştirmeye İzin Ver) seçeneğini etkinleştirmeniz gerekiyor.

Ayrıca, **Ultimate Multisite > Products** kısmına gidin, planlarınızı seçin ve **Site Templates** sekmesine geçin. **Allow Site Templates** (Site Şablonlarına İzin Ver) seçeneğinin açık olduğundan emin olun ve **Site Template Selection Mode** (Site Şablon Seçim Modu) altında **Choose Available Site Templates** (Mevcut Site Şablonlarını Seç) seçeneğinin işaretli olduğundan emin olun.

![Product site templates tab with template selection mode](/img/config/product-site-templates.png)

Web sitenizdeki tüm mevcut site şablonlarını görebileceksiniz. Hangi şablonları kullanıma sunmak istediğinizi ve hangi şablonların bu planla abone olan müşterileriniz için müsait olmamasını istediğinizi seçebilirsiniz. Bu seçeneklerin ödeme formunu da etkilediğini unutmayın; **Not Available** (Mevcut Değil) olarak seçilen herhangi bir şablon, bu plana ait kayıt sayfasında görünmeyecektir.

Artık müşterileriniz hesap sayfalarındaki **Change Site Template** (Site Şablonunu Değiştir) butonuna tıklayabilirler.

![Change Site Template button on account page](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0, yeniden tasarlanmış bir şablon değiştirme paneli gösteriyor. Panel, müşterilerin değiştirmeden önce hangi şablonun aktif olduğunu görebilmesi için **current-template card** (mevcut şablon kartı) ile başlıyor.

Müşteriler seçeneklerini incelerken mevcut şablonların sürekli bir ızgarı görünmeye devam eder. Bu, planları için izin verilen şablonları seçtikten sonra mevcut seçimi kaybetmeden karşılaştırmalarına yardımcı olur.

![Plan için mevcut site şablonları listesi](/img/config/site-templates-list.png)

Değiştirmek istedikleri şablonu seçtikten sonra, değişikliği onaylamaları istenecektir.

![Site şablonu değiştirme onayı diyalogu](/img/account-page/template-switch-confirm.png)

Onay özelliğini açıp **Switch Process**'e tıkladıktan sonra, yeni site şablonu müşterinizin web sitesinde kullanılacaktır.

Müşteriler ayrıca sitenin mevcut şablona geri sıfırlanması gerektiğinde bu panelden **Current template'i sıfırla** seçeneğini de kullanabilirler. Başka bir şablona geçmek gibi, bir şablonu sıfırlamak site içeriğini üzerine yazabileceği için müşteriler yalnızca sıfırlama işlemini anladıklarında onaylamalıdırlar.

### Özel Alan Adları Ekleme:

Müşterileriniz de bu plan için hesap sayfalarında özel alan adı ekleme seçeneğine sahip olacaklar. Müşterilerinizin özel alan adlarını kullanmasına izin vermek için **Ultimate Multisite > Ayarlar >** **Domain Mapping** bölümüne gidin.

**Enable Domain Mapping** seçeneğini açın. Bu, müşterilerinizin ağ düzeyinde özel alan adları kullanmasına olanak tanıyacaktır.

Ayrıca alan eşlemesinin ürün bazında etkin olup olmadığını kontrol etmeyi unutmayın; çünkü bir ürünü müşterilerinizin özel alan adlarını kullanmasını engellemek için sınırlayabilirsiniz.

**Ultimate Multisite > Ürünler** bölümüne gidin. Seçtiğiniz planı seçin ve **Custom Domains** sekmesine gidin. **Allow Custom Domains** seçeneğini açın.

![Allow Custom Domains anahtarlı Özel Alan Adları sekmesi](/img/config/product-custom-domains.png)

Это позволит всем клиентам, подписанным на этот конкретный план, использовать собственные домены. Теперь на странице Аккаунта ваши клиенты могут добавить собственный домен, нажав на **Добавить домен** (Add Domain).

![Кнопка Добавить домен на странице аккаунта](/img/account-page/add-domain-button.png)

Первое окно, которое откроется, покажет вашим клиентам сообщение с инструкциями о том, как обновить их DNS-записи, чтобы этот собственный домен заработал в вашей сети.

![Инструкции по DNS при добавлении собственного домена](/img/account-page/add-domain-dns.png)

Это сообщение можно отредактировать (вами) в **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Настройка Добавить новые инструкции по доменному отображению в Domain Mapping](/img/config/settings-domain-mapping.png)

Вот полный вид страницы настроек отображения доменов:

![Полная страница настроек отображения доменов](/img/config/settings-domain-mapping-full.png)

После нажатия **Далее** (Next Step) ваши клиенты смогут добавить имя своего собственного домена и выбрать, будет ли этот собственный домен основным. Обратите внимание, что ваши клиенты могут использовать более одного собственного домена для своих сайтов, поэтому они смогут выбрать тот, который будет основным.

![Ввод имени собственного домена с опцией основного домена](/img/account-page/add-domain-primary.png)

После нажатия **Добавить домен** (Add Domain), домен будет добавлен в аккаунт вашего клиента. Всё, что им нужно сделать сейчас, это изменить DNS-записи этого собственного домена у своего регистратора доменов.

### Смена пароля:

Внутри панели управления аккаунтом ваши клиенты также могут сменить свой пароль, нажав на **Сменить пароль** (Change Password).

![Кнопка Сменить пароль на странице аккаунта](/img/account-page/change-password-button.png)

Это покажет новое окно, где ваши клиенты должны введут свой текущий пароль, а затем новый пароль, который они хотят использовать.

![Форма смены пароля с полями для текущего и нового пароля](/img/account-page/change-password-form.png)

### Опасная зона:

У нас также есть два варианта, которые показаны в части **Опасной зоны**: **Удалить сайт** и **Удалить аккаунт**. Они оба находятся в Опасной зоне, потому что эти действия необратимы. Если ваши клиенты удалят свой веб-сайт или свой аккаунт, они не смогут их восстановить.

![Опасная зона с опциями Удалить сайт и Удалить аккаунт](/img/account-page/danger-zone.png)

Если ваши клиенты нажмут на любой из этих двух вариантов, им будет показано окно, где им нужно включить опцию удаления сайта или аккаунта, и им будет предупреждено, что это действие нельзя отменить.

![Диалог подтверждения удаления сайта](/img/account-page/delete-site-confirm.png)

![Диалог подтверждения удаления аккаунта](/img/account-page/delete-account-confirm.png)

Если они удалят свой веб-сайт, их аккаунт и членство останутся нетронутыми. Они просто потеряют весь контент на своем сайте. Если они удалят свой аккаунт, будут утеряны все сайты, членства и информация, относящаяся к этому аккаунту.
