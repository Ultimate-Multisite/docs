---
title: PayPal-инистрәгать
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# PayPal Ağ Geçidini Kurma (v2)

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite sürüm 2.x'i referans almaktadır.**_

Ödeme ayarları sayfamızda Stripe, Stripe Checkout, PayPal ve Manuel olmak üzere en fazla dört ödeme yöntemini etkinleştirebilirsiniz. Bu makalede **PayPal** ile nasıl entegre olacağımızı göreceğiz.

Stripe gibi, PayPal da özellikle WordPress siteleri üzerinde çevrimiçi ödemeler için yaygın olarak kullanılır. Bu makale, ağınızda mevcut bir ödeme yöntemi olarak PayPal'u nasıl kullanacağınızı size gösterecektir.

Bu entegrasyon için gerekli olan API kimlik bilgilerini almak adına bir **PayPal İş Hesabına** sahip olmanız gerektiğini unutmayın.

## Ağınızda PayPal'ı Etkinleştirme

PayPal'ı ağınızda mevcut bir ödeme yöntemi olarak etkinleştirmek için **Ultimate Multisite > Ayarlar > Ödemeler** sekmesine gidin ve yanındaki PayPal kutucuğunu işaretleyin.

![Aktif ödeme ağ geçitlerinde PayPal'ı etkinleştirme](/img/config/settings-payment-gateways.png)

## Rehberli Kurulum Sihirbazını Kullanma

Ultimate Multisite 2.10.0, ödeme ağ geçidi ayarlarında rehberli bir PayPal kurulum sihirbazı ekler. PayPal'ı etkinleştirdikten sonra, ağ geçidini nasıl bağlamak istediğinizi seçmek ve kaydetmeden önce hangi kimlik bilgilerinin hala gerekli olduğunu doğrulamak için **Ultimate Multisite > Ayarlar > Ödemeler** üzerinden sihirbazı kullanın.

Sihirbaz iki kurulum yolu destekler:

* **Ручное ввод учетных данных (Manual credential entry)**: Используйте этот путь, если у вас уже есть учетные данные PayPal API, когда настройка OAuth недоступна для вашей учетной записи или вы предпочитаете скопировать учетные данные из PayPal самостоятельно. Введите API Username (Имя пользователя API), API Password (Пароль API) и API Signature (Подпись API) в поля PayPal, а затем сохраните настройки платежей.
* **Шлюз подключения OAuth (OAuth connection gate)**: Используйте этот путь только тогда, когда опция OAuth доступна и включена для вашей установки. Мастер показывает процесс OAuth за флагом функции (feature flag), поэтому сети без этого флага продолжают использовать поля ручного ввода учетных данных.

Если вы не видите опцию OAuth в мастере, выполните процесс ручного ввода учетных данных ниже. Шлюз будет работать с теми же учетными данными PayPal Business API, что и предыдущие релизы Ultimate Multisite 2.x.

## Получение учетных данных PayPal API (Getting the PayPal API credentials)

Как только вы включите PayPal как платежный шлюз, вам нужно будет заполнить поля для **Username** (Имя пользователя), **Password** (Пароль) и **Signature** (Подпись) PayPal API.

Вы можете получить их, войдя в свою учетную запись [Live](https://www.paypal.com/home) или [Sandbox](https://www.sandbox.paypal.com/home).

(Помните, что вы можете использовать **режим sandbox** для тестирования платежей и проверки того, правильно ли настроен шлюз. Просто включите соответствующий раздел.)

![Поля учетных данных PayPal API и переключатель режима sandbox](/img/config/settings-payment-gateways.png)

Чтобы запросить API Signature или сертификаты для вашей учетной записи PayPal:

  1. Перейдите в [Настройки аккаунта](https://www.paypal.com/businessmanage/account/accountAccess).

  2. В разделе **API access** (Доступ к API) нажмите **Update** (Обновить).
![Настройки учетной записи PayPal с разделом доступа к API](/img/config/settings-payment-gateways.png)

3. **NVP/SOAP API интеграция (Классическая)** altında, **Manage API credentials**-аға басыңыз.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Егер сізде API Signature немесе Sertifikat алған болсаңыз, сіздің деректеріңізді таба алатын бетке аударыласыз.

     * _**Қателік:** Егер сізге PayPal hesabınızı растау қажет болса, онда экрандағы нұсқауларды орындаңыз._

  4. Төмендегі мүмкіндіктердің **бірін** таңдап, содан кейін **Agree and Submit**-а басыңыз.

     * **Request API Signature** – API Signature аутентификациясы үшін таңдаңыз.

     * **Request API Certificate** – API Sertifikat аутентификациясы үшін таңдаңыз.

  5. PayPal сіздің API деректеріңізді келесідей генерациялайды:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** मध्ये API İstifadəçi аты (Username), API Параметрі (Password) және Signature болады, ол мерзімі жоқ. Бәсекесімен қауіпсіздік үшін бұл мәндер әдетте жасырылған. Оларды қосу немесе өшіру үшін **Show/Hide**-а басыңыз. Біткенде **Done**-ға басыңыз.

     * **API Certificate credentials** मध्ये API İstifadəçi аты (Username), API Параметрі (Password) және Sertifikat болады, ол үш жылдан кейін автоматты түрде мерзімі өтеді. API Sertifikat-ын компьютерге сақтау үшін **Download Certificate**-а басыңыз.

Міне, сіздің PayPal төлем интеграцияңыз аяқталды!

PayPal параметрлеріне қатысты сұрақтарыңыз болса, сіз PayPal-дың [Help Center](https://www.paypal.com/br/smarthelp/home) сайтына қарап көре аласыз.
