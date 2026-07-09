---
title: PayPal-ის დაყენება
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# PayPal გეითვwejის დაყენება (v2) {#setting-up-the-paypal-gateway-v2}

_**მნიშვნელოვანი შენიშვნა: ეს სტატია მომზადებული Ultimate Multisite-ის ვერსია 2.x-ისთვის.**_

ჩვენს გადახდის პარამეტრების გვერდზე თქვენ შეგიძლიათ ჩართოთ გადახდის მეთოდები: Stripe, Stripe Checkout, PayPal და მექანიკური (Manual). ამ სტატიაში განვიხილავთ როგორ გავაკეთოთ ინტეგრაცია **PayPal**-თან.

როგორც Stripe-ის შემთხვევაში, PayPal ფართოდ გამოიყენება ონლაინ გადახდებისთვის, განსაკუთრებით WordPress ვებსაიტებზე. ეს სტატია გიგებთ, თუ როგორ გამოვიყენოთ PayPal როგორც თქვენს ქსელში ხელმისაწვდომი გადახდის მეთოდი.

შეგახსენებთ, რომ ამ ინტეგრაციისთვის საჭირო API კრედენციალების მისაღებად თქვენ უნდა გქონდეთ **PayPal Business account**.

## PayPal-ის ჩართვა თქვენს ქსელში {#enabling-paypal-on-your-network}

იმისათვის, რომ PayPal ხელმისაწვდომი გადახდის მეთოდი გახადოთ თქვენს ქსელში, გადადით **Ultimate Multisite > Settings > Payments** ტაბულზე და გააქტიურეთ ყუთი PayPal-ის გვერდით.

![PayPal-ის ჩართვა აქტიური გადახდის გეითვwejებში](/img/config/settings-payment-gateways.png)

## ხელმძღვანელობით დაყენების ვიზარდის გამოყენება {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0-ს აქვს PayPal-ისთვის ხელმძღვანელობით დაყენების ვიზარდი გადახდის გეითვwejის პარამეტრებში. როდესაც PayPal-ს ჩართავთ, გამოიყენეთ ვიზარდი **Ultimate Multisite > Settings > Payments**-ში იმის შესახებაჩევად, თუ როგორ გსურთ გეითვwejთან დაკავშირება და შეამოწმებისთვის, თუ რომელი კრედენციალები ჯერ კიდევ საჭიროა შენახვის წინ.

ვიზარდი მხარს უჭერს ორ დაყენების გზას:

* **Ручное введение учетных данных (Manual credential entry)**: Используйте этот путь, если у вас уже есть учетные данные PayPal API, когда настройка OAuth недоступна для вашей учетной записи или вы предпочитаете скопировать учетные данные из PayPal самостоятельно. Введите API Username, API Password и API Signature в поля PayPal, а затем сохраните настройки платежей.
* **Шлюз подключения через OAuth (OAuth connection gate)**: Используйте этот путь только тогда, когда опция OAuth доступна и включена для вашей установки. Мастер показывает процесс OAuth за флажком функции (feature flag), поэтому сети без этого флага продолжают использовать поля ручного ввода учетных данных.

Если вы не видите опцию OAuth в мастере, выполните процесс ручного ввода учетных данных ниже. Шлюз работает с теми же учетными данными PayPal Business API, что и предыдущие релизы Ultimate Multisite 2.x.

## Получение учетных данных PayPal API (Getting the PayPal API credentials) {#getting-the-paypal-api-credentials}

Как только вы включите PayPal как платежный шлюз, вам нужно будет заполнить поля для **API Username** PayPal, **API Password** PayPal и **API Signature** PayPal.

Вы можете получить их, войдя в свою учетную запись [Live](https://www.paypal.com/home) или [Sandbox](https://www.sandbox.paypal.com/home).

(Помните, что вы можете использовать **режим sandbox** для тестирования платежей и проверки правильности настройки шлюза. Просто включите соответствующий раздел.)

![Поля учетных данных PayPal API и переключатель режима sandbox](/img/config/settings-payment-gateways.png)

Чтобы запросить API Signature или сертификаты учетных данных для вашей учетной записи PayPal:

  1. Перейдите в [Настройки учетной записи (Account Settings)](https://www.paypal.com/businessmanage/account/accountAccess).

  2. В разделе **Доступ к API (API access)** нажмите **Обновить (Update)**.
![Настройки учетной записи PayPal с разделом доступа к API](/img/config/settings-payment-gateways.png)

3. **NVP/SOAP API ინტეგრაციაში (Classic)**, დააჭირეთ **Manage API credentials**-ს.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * თუ უკვე გექნებათ API Signature ან სერტიფიკატი, გადაგითანებთ გვერდზე, სადაც შეგიძლიათ იპოვოთ თქვენი მონაცემები.

     * _**შენიშვნა:** თუ მოგთხოვთ თქვენი PayPal ანგარიშის ვერიფიკაცია, მაშინ მიჰყევით ეკრანზე დანახულ ინსტრუქციებს._

  4. აირჩიეთ ქვემოთ ჩამოთვლილი ოფციებიდან **ერთი**, შემდეგ დააჭირეთ **Agree and Submit**-ს.

     * **Request API Signature** – აირჩიეთ API Signature аутентификаციისთვის.

     * **Request API Certificate** – აირჩიეთ API Certificate аутентификаციისთვის.

  5. PayPal გენერირებს თქვენს API მონაცემებს შემდეგნაირად:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature მონაცემები** მოიცავს API მომხმარებლის სახელს (Username), API პაროლს (Password) და ხელმოწერას (Signature), რომელიც არ იწურება. ეს მნიშვნელობები ნაგულისხმევად დამალულია უსაფრთხოებისთვის. ჩატვირთეთ **Show/Hide**, რომ მათ ამოქმედოთ ან გამორთოთ. დასრულების შემდეგ, დააჭირეთ **Done**.

     * **API Certificate მონაცემები** მოიცავს API მომხმარებლის სახელს (Username), API პაროლს (Password) და სერტიფიკატს (Certificate), რომელიც ავტომატურად იწურება სამი წლის შემდეგ. ჩატვირთეთ **Download Certificate**, რომ API სერტიფიკატი თქვენს დესკტოპზე შეინახოთ.

ეს არის ყველაფერი, თქვენი PayPal-ის გადახდის ინტეგრაცია დასრულებულია!

თუ გაქვთ რაიმე შეკითხვა PayPal-ის პარამეტრებთან დაკავშირებით, შეგიძლიათ მიმართოთ PayPal-ის [Help Center](https://www.paypal.com/br/smarthelp/home).
