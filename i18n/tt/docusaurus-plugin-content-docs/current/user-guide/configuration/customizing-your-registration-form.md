---
title: Регистрация формасын кастомизациялау
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Регистрация формы настраивать

Ваша сеть других SaaS-платформалардағы барлық басқа платформалармен ерекше көрінуі үшін Ultimate Multisite біздің **Checkout Forms** функциясы арқылы тіркелу және кіру беттерін өңдеуге мүмкізу береді.

Олар жаңа клиенттерді тартуға тырысқанда әртүрлі тәсілдермен эксперимент жасаудың оңай және икемді жолы болса да, оларды негізінен жеке тіркелу формаларын жасау үшін қолданады. Бұл мақала сізге бұл мүмкіндікті қалай іске асыруға болатынын көрсетуге арналған.

## Кіру және тіркелу беттері:

Ultimate Multisite орнатылған кезде, ол негізгі сайтта автоматты түрде жеке кіру және тіркелу беттерін жасайды. Бұл стандартты беттерді 언제든지 **Ultimate Multisite > Settings > Login & Registration** бетінен өзгертуге болады.

![Login and Registration settings page](/img/config/settings-general.png)

Кіру және тіркелу параметрлерінің толық көрінісі:

![Login and Registration settings full page](/img/config/settings-login-registration-full.png)

**Login & Registration** бетінде өңдей алатын әрбір нұсқаны қарастырайық:

  * **Registration enable (Тіркелуді қосу):** Бұл опция сіздің желіде тіркелуді іске қосады немесе өшіреді. Егер ол өшірілсе, клиенттер өнімдерге тіркеле алмайды және жазылуы мүмкін емес.

  * **Email verification enable (Электрондық посты растауды қосу):** Бұл опция қосылса, тегін планға немесе сынақ кезеңі бар төлемді планға жазылатын клиенттер растау электронды хабарламасын алады және олар сайттарын жасау үшін растау сілтемесіне басуы керек.

* **Стандартная страница регистрации (Default registration page):** Это стандартная страница для регистрации. Эту страницу нужно опубликовать на вашем сайте и добавить форму регистрации (также называемую формой оформления заказа) — куда ваши клиенты будут подписываться на ваши продукты. Вы можете создать столько страниц регистрации и форм оформления заказа, сколько вам нужно, но помните: обязательно добавьте шорткод формы оформления заказа на страницу регистрации, иначе она не появится.

* **Использовать пользовательскую страницу входа (Use custom login page):** Этот вариант позволяет использовать кастомную страницу входа вместо стандартной страницы wp-login.php. Если этот пункт включен, вы сможете выбрать, какая страница будет использоваться для входа в систему в настройках **Стандартная страница входа** (расположено прямо ниже).

* **Скрыть оригинальный URL входа (Obfuscate the original login url (wp-login.php))**: Если вы хотите скрыть оригинальную ссылку для входа, вы можете включить этот пункт. Это полезно для защиты от атак методом перебора (brute-force attacks). Если этот вариант активирован, Ultimate Multisite будет показывать ошибку 404, когда пользователь попытается зайти по оригинальной ссылке wp-login.php.

* **Принудительная синхронная публикация сайта (Force synchronous site publication):** После того как клиент подписывается на продукт в сети, новый ожидающий сайт должен быть преобразован в реальный сетевой сайт. Процесс публикации происходит асинхронно через Job Queue. Включите этот пункт, чтобы принудительно опубликовать сайт в том же запросе, что и регистрация.

Теперь давайте посмотрим на другие варианты, которые все еще актуальны для процесса входа и регистрации. Они находятся ниже **Другие опции** на той же странице Вход и регистрация:

* **Стандартная роль (Default role):** Это та роль, которую ваши клиенты получат на своем сайте после завершения процесса регистрации.

* **Jumper'ı Etkinleştirme:** Bu ayar, admin alanında Jumper kısayolunu etkinleştirir. Jumper sayesinde yöneticiler, her menüyü tek tek taramak zorunda kalmadan Ultimate Multisite ekranlarına, ağ nesnelerine ve diğer desteklenen yerlere hızlıca atlayabilirler. Eğer bu hızlı gezinme aracını admin arayüzünden gizlemek isterseniz, bunu kapatabilirsiniz.

* **Kullanıcıları ana siteye de ekleyin:** Bu seçeneği etkinleştirirseniz, kullanıcı kaydı işleminden sonra o kullanıcıyı ağınızın ana sitesine de eklersiniz. Bu seçeneği etkinleştirirseniz, hemen altında bu kullanıcıların web sitenizdeki **varsayılan rolünü** ayarlamanıza yarayan bir seçenek de görünecektir.

* **Birden fazla hesabı etkinleştirin:** Bu ayar sayesinde kullanıcılar ağınızdaki farklı sitelerde aynı e-posta adresiyle hesap açabilirler. Eğer bu seçenek kapalıysa, müşterileriniz ağınızda çalışan diğer web sitelerinde aynı e-posta adresiyle hesap oluşturamazlar.

Ve giriş ve kayıtla ilgili özelleştirebileceğiniz tüm seçenekler bunlar! Düzenlemeyi bitirdikten sonra ayarlarınızı kaydetmeyi unutmayın.

## Birden Fazla Kayıt Formu Kullanma:

Ultimate Multisite 2.0, istediğiniz kadar farklı alanlar, ürünler vb. ile birçok form oluşturmanıza olanak tanıyan bir ödeme formu düzenleyici sunar.

Hem giriş hem de kayıt sayfaları kısa kodlarla gömülüdür: giriş sayfasında **[wu_login_form]** ve kayıt sayfası için **[wu_checkout]**. Kayıt sayfasını, ödeme formları oluşturarak veya bunları tasarlayarak daha da özelleştirebilirsiniz.

Bu özelliğe erişmek için sol taraftaki yan menüden **Checkout Forms** (Ödeme Formları) menüsüne gidin.

![Sidebar'daki Checkout Forms menüsü](/img/config/checkout-forms-list.png)

Bu sayfada sahip olduğunuz tüm ödeme formlarını görebilirsiniz.

Yeni bir tane oluşturmak isterseniz, sayfanın en üstündeki **Add Checkout Form** (Ödeme Formu Ekle) butonuna tıklamanız yeterlidir.

Вы можете выбрать один из этих трех вариантов в качестве отправной точки: одиночный шаг (single step), многошаговый (multi-step) или пустой (blank). Затем нажмите, чтобы **Перейти к редактору**.

![Добавление формы оформления заказа с опциями одиночного шага, многошагового или пустого](/img/config/checkout-forms-list.png)

В качестве альтернативы вы можете отредактировать или скопировать формы, которые у вас уже есть, нажав на соответствующие опции под их названием. Там вы также найдете опции для копирования шорткода формы или для удаления формы.

![Действия при наведении на форму оформления заказа с редактированием, дублированием и удалением](/img/config/checkout-form-hover-actions.png)

Если вы выберете одиночный шаг или многошаговый, форма оформления заказа уже будет предварительно заполнена базовыми шагами для ее работы. Затем, если захотите, вы можете добавить дополнительные шаги.

### Редактирование формы оформления заказа:

Как мы уже упоминали, можно создавать формы оформления заказа для разных целей. В этом примере мы будем работать с формой регистрации.

После перехода в редактор формы оформления заказа дайте вашей форме имя (которое будет использоваться только для внутреннего обращения) и slug (который используется для создания шорткодов, например).

![Редактор формы оформления заказа с полями имени и slug](/img/config/checkout-form-editor.png)

Формы состоят из шагов и полей. Вы можете добавить новый шаг, нажав на **Добавить новый шаг оформления заказа** (Add New Checkout Step).

![Кнопка Добавить новый шаг оформления заказа](/img/config/checkout-form-add-step.png)

На первой вкладке модального окна заполните содержимое шага вашей формы. Дайте ему ID, имя и описание. Эти элементы в основном используются внутри системы.

![Вкладка содержимого шага оформления заказа с ID, именем и описанием](/img/config/checkout-form-step-content.png)

Далее установите видимость шага. Вы можете выбрать между **Всегда показывать** (Always show), **Показывать только для вошедших пользователей** (Only show for logged in users) или **Показывать только для гостей** (Only show for guests).

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

Наконец, настройте стиль шага. Это необязательные поля.

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

Теперь пора добавить поля на наш первый шаг. Просто нажмите **Add New Field** (Новое поле) и выберите тип секции, который вам нужен.

![Add New Field button](/img/config/checkout-form-step-with-fields.png)![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

Каждое поле имеет разные параметры для заполнения. Для этого первого входа мы выберем поле **Username** (Имя пользователя).

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

Вы можете добавить столько шагов и полей, сколько вам нужно. Чтобы показать ваши товары, чтобы клиенты могли выбрать один, используйте поле **Pricing Table** (Таблица цен). Если вы хотите, чтобы ваши клиенты выбирали шаблон, добавьте поле **Template Selection** (Выбор шаблона). И так далее.

_**Примечание:** Если вы создадите продукт после создания вашей формы оформления заказа, вам нужно будет добавить этот продукт в раздел Таблицы цен. Если вы его не добавите, продукт не появится у ваших клиентов на странице регистрации._

_**Примечание 2:** username (имя пользователя), email (электронная почта), password (пароль), site title (название сайта), site URL (URL сайта), order summary (краткое описание заказа), payment (оплата) и submit button (кнопка отправки) — это обязательные поля для создания формы оформления заказа._

Пока вы работаете над своей формой оформления заказа, вы всегда можете использовать кнопку **Preview** (Предпросмотр), чтобы увидеть, как ваши клиенты увидят форму. Вы также можете переключаться между просмотром как существующего пользователя и просмотра как посетителя.

![Checkout form preview button on the checkout form editor](/img/config/checkout-form-preview-button.png)![Checkout form preview as visitor or existing user](/img/config/checkout-form-preview-modal.png)

Наконец, в **Расширенных настройках** вы можете настроить сообщение для страницы **Спасибо**, добавить фрагменты для отслеживания конверсий, добавить пользовательский CSS к вашей форме оформления заказа или ограничить ее определенными странами.

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

Вы также можете вручную включить или отключить свою форму оформления заказа, переключая этот вариант в правой колонке, или полностью удалить форму.

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

Не забудьте сохранить вашу форму оформления заказа!

![Save Checkout Form button](/img/config/checkout-form-save.png)

Чтобы получить шорткод вашей формы, нажмите **Сгенерировать шорткод** и скопируйте результат, который отображается в модальном окне.

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**Примечание:** Вам нужно добавить этот шорткод на вашу страницу регистрации, чтобы эта форма оформления заказа была добавлена к ней._

## Предварительный выбор продуктов и шаблонов через параметры URL:

Если вы хотите создать индивидуальные таблицы цен для ваших продуктов и заранее выбрать в форме оформления заказа продукт или шаблон, который клиент выбирает из вашей страницы с ценами или шаблонами, вы можете использовать параметры URL для этого.

### **Для планов:**

Перейдите в **Ultimate Multisite > Products > Select a plan**. Вверху страницы вам будет видна кнопка **Нажмите, чтобы скопировать ссылку для обмена** (Click to copy Shareable Link). Это ссылка, которую вы можете использовать для предварительного выбора этого конкретного плана на вашей форме оформления заказа.

![Product page with shareable link button](/img/config/products-list.png)

Эзол, этот общий ссылка только для **Плана** действителен. Общие ссылки нельзя использовать для пакетов или услуг.

### Шаблоны (templates) для:

Если вы хотите заранее выбрать шаблоны сайтов на вашей форме оформления заказа, вы можете использовать параметр: **?template_id=X** в URL вашей страницы регистрации. Буква "X" нужно заменить на **номер ID сайта-шаблона**. Чтобы получить это число, перейдите в **Ultimate Multisite > Sites**.

Нажмите **Manage** (Управление) прямо под тем шаблоном сайта, который вы хотите использовать. Вы увидите номер SITE ID. Просто используйте это число для этого конкретного шаблона сайта, чтобы он был предварительно выбран на вашей форме оформления заказа. В нашем случае параметр URL будет выглядеть как **?template_id=2**.

![Список сайтов с ID шаблона сайта](/img/config/site-templates-list.png)

Допустим, наш сетевой сайт — [**www.mynetwork.com**](http://www.mynetwork.com), а наша страница регистрации с формой оформления заказа находится на странице **/register**. Весь URL с предварительно выбранным шаблоном сайта будет выглядеть как [**www.mynetwork.com/register/?template_id=2**](http://www.mynetwork.com/register/?template)**_id=2**.

И если хотите, вы можете предварительно выбрать и продукты, и шаблоны на вашей форме оформления заказа. Все, что вам нужно сделать, это скопировать общую ссылку плана и вставить параметр шаблона в конец. Она будет выглядеть как [**www.mynetwork.com/register/premium-plan/?template_id=2**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
