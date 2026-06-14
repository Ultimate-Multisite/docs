---
title: Ultimate Multisite-ի տեղադրում
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Ultimate Multisite-ի տեղադրում

:::note
Այս ուղեցույցը ենթադրում է, որ Ձեզ արդեն տեղադրված և կազմաձևված WordPress Multisite-ը կա։ Ինչպես դա անելու մասին ավելին իմանալու համար՝ ստուգեք WP Beginner-ի [այս ուղեցույցը](https://www.wpbeginner.com/glossary/multisite/)։
:::

## Պլագինի տեղադրում

Ultimate Multisite-ը անվճար է [WordPress.org]-ում՝ [WordPress.org/plugins/ultimate-multisite/](https://wordpress.org/plugins/ultimate-multisite/)։

Ձեր **Network Admin Dashboard**-ից գնացեք **Plugins → Add New Plugin** (Պլագիններ → Ավելացնել նոր պլագին)։

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

Փնտրեք **"Ultimate Multisite"**-ը (ճշգրիտ համապատասխանման համար կենտանիշներով), և այն կհայտնվի առաջին արդյունքում։ Կտեղադրեք **Install Now** (Տեղադրել հիմա)։

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Տեղադրումից հետո, սեղմեք **Network Activate** (Ցանցը ակտիվացնել), որպեսզի պլագինը ակտիվացվի ձեր ամբողջ ցանցում։

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

Ակտիվացումից հետո, Ձեզ ավտոմատ կուղղեն Setup Wizard (Կազմաձևման ուղեցույցին)։

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Setup Wizard (Կազմաձևման ուղեցույց)

Setup Wizard-ը կգնացեք Ultimate Multisite-ի կազմաձևման համար մոտ 10 րոպեում։

### Բարի գալուստ

Սկսելու համար սեղմեք **Get Started** (Սկսել)։

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### Տեղադրման նախնական ստուգումներ

Այս քայլը ստուգում է ձեր համակարգի տեղեկությունները և WordPress-ի տեղադրումը՝ համոզվելու համար, որ այն բավարարում է Ultimate Multisite-ի պահանջներին։ Եթե ամեն ինչ լավ է, սեղմեք **Go to the Next Step** (Գնալ հաջորդ քայլ)։

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note Network Activate ღილაკი (v2.6.1+)
თუ Ultimate Multisite დაინსტალირებული გაქვთ, მაგრამ ** aún network-activated არ არის** — მაგალითად, თუ გressione დაចុპენ **Activate** (single-site) 대신 ქსელური პლაგინის ეკრანისგან **Network Activate**-ზე — Pre-install Checks ნაბიჯი ამას აღმოაჩენს და აჩვენებს **Network Activate** ღილაკს.

**Network Activate**-ზე დაჭერამ ავტომატურად გააქტიურებს პლაგინს თქვენს მთელ მულტი-საიტის ქსელში. გააქტიურების შემდეგ, ვიზარდი ნორმალურად გრძელდება ინსტალაციის ნაბიჯამდე. აქტივაციის სტატუსის შესწორებისთვის არ დაგჭირდებათ ვიზარდის დატოვება.
:::

### ინსტალაცია

ინსტალერი შექმნის საჭირო მონაცემთა ბაზის ცხრილებს და დაამატებს `sunrise.php` ფაილს, რომელიც Ultimate Multisite-ს ფუნქციონირებისთვის სჭირდება. გაგრძელებისთვის დააჭირეთ **Install**.

![ინსტალაციის ნაბიჯი მონაცემთა ბაზის ცხრილებსა და sunrise.php-ს აჩვენებს](/img/installation/wizard-installation.png)

### თქვენი კომპანია

შეავსეთ თქვენი კომპანიის ინფორმაცია და დაადგინეთ თქვენი დეფოლტური ვალუტა. ეს ინფორმაცია გამოყენებული იქნება WaaS პლატფორმაზე მთელი პროცესის განმავლობაში. დასრულების შემდეგ დააჭირეთ **Continue**.

![თქვენი კომპანიის კონფიგურაციის ნაბიჯი](/img/installation/wizard-your-company.png)

### დეფოლტური კონტენტი

ამ ნაბიჯით შეგიძლიათ დაინსტალირდეთ წინასწარ განსაზღვრული შაბლონები, პროდუქტები და სხვა საწყისი კონტენტი. ეს შესანიშნავი საშუალებაა Ultimate Multisite-ის ფუნქციების გაცნობისთვის. დეფოლტური კონტენტის დასამატებლად დააჭირეთ **Install**, ან გამოტოვეთ ეს ნაბიჯი, თუ გსურთ თავიდან დაწყება.

![დეფოლტური კონტენტის ინსტალაციის ნაბიჯი](/img/installation/wizard-default-content.png)

### რეკომენდებული პლაგინები

არასდროს არ არის საჭირო რეკომენდებული თანმხლებ პლაგინების დამატება, თუ გსურთ. დაამატეთ ისინი **Install**-ით ან გამოტოვეთ, რომ გაგრძელდეს.

![რეკომენდებული პლაგინების ნაბიჯი](/img/installation/wizard-recommended-plugins.png)

### მზად!

Այսքան է։ Ձեր Ultimate Multisite տեղադրումը պատրաստ է։ Հիմա կարող եք սկսել կառուցել ձեր Website as a Service (SaaS) պլատֆորմը՝ օգտվելով **Network Admin Dashboard**-ից։

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

Խաղացեք և տեսեք, թե ինչ կարող եք անել։
