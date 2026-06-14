---
title: Ultimate Multisite-ის დაყენება
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Ultimate Multisite-ის დაყენება

:::note
ეს ტუტორიალი იმას ეფუძნება იმას, რომ თქვენ უკვე გაქვთ WordPress Multisite დაყენებული და კონფიგურირებული. თუ როგორ უნდა ისწავლოთ ეს, შეამოწმეთ [ეს ტუტორიალი](https://www.wpbeginner.com/glossary/multisite/) WP Beginner-ის მიერ.
:::

## პლაგინის დამატება

Ultimate Multisite უფასოდ ხელმისაწვდომია [WordPress.org]-ზე.

თქვენი **Network Admin Dashboard**-დან გადადით **Plugins → Add New Plugin**-ში.

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

მოძებნეთ **"Ultimate Multisite"** (სიტყვების ციტატებით ზუსტი შესაბამისობისთვის), და ის გამოჩნდება პირველი შედეგი. დააჭირეთ **Install Now**.

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

დაყენების შემდეგ, დააჭირეთ **Network Activate**-ს პლაგინის აქტივაციისთვის მთელ ქსელზე.

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

აქტივაციის შემდეგ, თქვენ ავტომატურად გადახрельდებით Setup Wizard-ზე.

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Setup Wizard (დაყენების მეგზური)

Setup Wizard დაგეხმარება Ultimate Multisite-ის კონფიგურაციაში დაახლოებით 10 წუთში.

### 환영 (Welcome)

დააჭირეთ **Get Started**-ს დასაწყებად.

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### წინასწარი შემოწმებები (Pre-install Checks)

ეს ნაბიჯი გამოწმებს თქვენს სისტემის ინფორმაციას და WordPress-ის ინსტალაციას, რომ დარწმუნდეთ, რომ ის აკმაყოფილებს Ultimate Multisite-ის მოთხოვნებს. თუ ყველაფერი რიგზეა, დააჭირეთ **Go to the Next Step**.

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note Network Activate ღილაკი (v2.6.1+)
თუ Ultimate Multisite დაინსტალირებულია, მაგრამ ** aún არ არის ქსელში აქტიური** — მაგალითად, თუ თქვენ დააჭირეთ **Activate** (ერთ-საიტზე) ნაცვლად **Network Activate**-ს ქსელის პლაგინების ეკრანისგან — Pre-install Checks ნაბიჯი ამას აღმოაჩენს და აჩვენებს **Network Activate** ღილაკს.

**Network Activate**-ის დაჭერით, პლაგინი ავტომატურად აქტიურდება თქვენს მთელ მულტი-საიტების ქსელში. აქტიური მას შემდეგ, ვიზარდი ნორმალურად გრძელდება ინსტალაციის ნაბიჯამდე. არ არის საჭირო ვიზარდის დატოვება activations სტატუსის შესწორებისთვის.
:::

### ინსტალაცია

ინსტალერი შექმნის საჭირო მონაცემთა ბაზის ცხრილებს და დაამონტაჟებს `sunrise.php` ფაილს, რომელიც Ultimate Multisite-ს ფუნქციონირებისთვის სჭირდება. გადასასვლელად დააჭირეთ **Install**.

![ინსტალაციის ნაბიჯი მონაცემთა ბაზის ცხრილებისა და sunrise.php-ის ჩვენებით](/img/installation/wizard-installation.png)

### თქვენი კომპანია

შეავსეთ თქვენი კომპანიის ინფორმაცია და დაადგინეთ თქვენი დეფულტური ვალუტა. ეს ინფორმაცია გამოყენებული იქნება WaaS პლატფორმაზე მთელი პერიოდის განმავლობაში. დასრულების შემდეგ დააჭირეთ **Continue**.

![თქვენი კომპანიის კონფიგურაციის ნაბიჯი](/img/installation/wizard-your-company.png)

### დეფულტური კონტენტი

ამ ნაბიჯით შეგიძლიათ დაინსტალიროთ წინასწარ განსაზღვრული შაბლონები, პროდუქტები და სხვა საწყისი კონტენტი. ეს შესანიშნავი საშუალებაა Ultimate Multisite-ის ფუნქციების გაცნობისთვის. დაამატეთ დეფულტური კონტენტით დამატებისას დააჭირეთ **Install**, ან გამოტოვეთ ეს ნაბიჯი, თუ გსურთ თავიდან დაწყება.

![დეფულტური კონტენტის ინსტალაციის ნაბიჯი](/img/installation/wizard-default-content.png)

### რეკომენდებული პლაგინები

არასდროს არ არის საჭირო, მაგრამ შეგიძლიათ დაამატოთ რეკომენდებული თანმხლები პლაგინები. დაამატეთ ისინი **Install**-ით ან გამოტოვეთ და გააგრძელეთ.

![რეკომენდებული პლაგინების ნაბიჯი](/img/installation/wizard-recommended-plugins.png)

### მზად!

Все готово! Ваша установка Ultimate Multisite завершена. Теперь вы можете начать создавать свою платформу как услугу (Website as a Service) из **Панели администратора сети** (Network Admin Dashboard).

![Настройка завершена - Экран готов к работе](/img/installation/wizard-ready.png)

![Панель администратора сети с активным Ultimate Multisite](/img/installation/network-dashboard.png)

Смело начинайте работу!
