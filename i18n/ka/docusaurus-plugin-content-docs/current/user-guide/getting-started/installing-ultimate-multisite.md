---
title: ულტიმატ მულტისაიტის ინსტალაცია
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Ultimate Multisite-ის დაყენება

:::note
ეს სახელმძღვანელო გ assumes, რომ თქვენ უკვე დაინსტალირებული და კონფიგურირებული გაქვთ WordPress Multisite. თუ როგორ უნდა გააკეთოთ ეს, გადახედეთ WP Beginner-ის [ამ სახელმძღვანელოს](https://www.wpbeginner.com/glossary/multisite/).
:::

## პლაგინის დაყენება

Ultimate Multisite უფასოდ ხელმისაწვდომია [WordPress.org]-ზე ([https://wordpress.org/plugins/ultimate-multisite/](https://wordpress.org/plugins/ultimate-multisite/)).

**Network Admin Dashboard-დან** გადადით **Plugins → Add New Plugin**.

![Network Admin Add New Plugin გვერდი](/img/installation/add-new-plugin.png)

მოძებნეთ **"Ultimate Multisite"** (ციტატებში, ზუსტი შეხამებისთვის) და ის გამოჩნდება პირველ შედეგად. დააწკაპუნეთ **Install Now**.

![საძიებო შედეგები, რომელშიც Ultimate Multisite არის ნაჩვენები](/img/installation/search-ultimate-multisite.png)

დაინსტალირების შემდეგ, დააწკაპუნეთ **Network Activate**, რათა პლაგინი აქტიური იყოს თქვენი მთელი ქსელის მასშტაბით.

![დაინსტალირებული პლაგინი Network Activate ღილაკით](/img/installation/plugin-installed.png)

აქტივაციის შემდეგ, ავტომატურად გადაამისამართებთ Setup Wizard-ში.

![პლაგინი აქტივირებულია და გადამისამართებულია ვიზარდზე](/img/installation/plugin-activated.png)

## Setup Wizard

Setup Wizard დაგეხმარებათ Ultimate Multisite-ის კონფიგურაციაში დაახლოებით 10 წუთში.

### კეთილი იყოს თქვენი მობრძანება

დააწკაპუნეთ **Get Started**, რათა დაიწყოთ.

![Setup Wizard-ის შესასვლელი ეკრანი](/img/installation/wizard-welcome.png)

### წინასწარი შემოწმება

ეს ნაბიჯი გადაამოწმებს თქვენს სისტემის ინფორმაციას და WordPress-ის ინსტალაციას, რათა დარწმუნდეს, რომ ის აკმაყოფილებს Ultimate Multisite-ის მოთხოვნებს. თუ ყველაფერი კარგად არის, დააწკაპუნეთ **Go to the Next Step**.

![წინასწარი შემოწმება, რომელიც აჩვენებს სისტემის მოთხოვნებს](/img/installation/wizard-pre-install-checks.png)

:::note Network Activate ღილაკი (v2.6.1+)
თუ Ultimate Multisite დაინსტალირებულია, მაგრამ **ჯერ არ არის ქსელურად აქტივირებული** — მაგალითად, თუ თქვენ დააწკაპუნეთ **Activate** (ერთმომხმარებლიანი ვერსია), ნაცვლად იმისა, რომ დაეწკაპუნათ **Network Activate** ქსელის პლაგინების ეკრანზე — წინასწარი შემოწმის ნაბიჯი ამას აღმოაჩენს და აჩვენებს **Network Activate** ღილაკს.

დააწკაპუნეთ **Network Activate**, რათა პლაგინი ავტომატურად აქტიური იყოს თქვენი მთელი მულტისაიტული ქსელის მასშტაბით. აქტივაციის შემდეგ, ვიზარდი ჩვეულებრივად გაგრძელდება ინსტალაციის ნაბიჯზე. არ არის საჭირო, რომ ვიზარი დატოვოთ, რათა გამოსწორდეს აქტივაციის სტატუსი.
:::

### ინსტალაცია

ინსტალატორი შექმნის საჭირო ბაზის მონაცემების ცხრილებს და დაასხამს `sunrise.php` ფაილს, რომელიც Ultimate Multisite-ს ფუნქციონირებისთვის ესაჭიროება. პროცედურის გასაგრძელებლად დააწკაპუნეთ **Install**.

![ინსტალაციის ნაბიჯი, რომელიც აჩვენებს ბაზის მონაცემების ცხრილებს და sunrise.php-ს](/img/installation/wizard-installation.png)

### თქვენი კომპანია

შეავსეთ თქვენი კომპანიის ინფორმაცია და დააყენეთ თქვენი სტანდარტული ვალუტა. ეს ინფორმაცია გამოყენებული იქნება თქვენს WaaS პლატფორმაში. როდესაც დასრულდება, დააწკაპუნეთ **Continue**.

![თქვენი კომპანიის კონფიგურაციის ნაბიჯი](/img/installation/wizard-your-company.png)

### სტანდარტული შინაარსი

ეს ნაბიჯი საშუალებას გაძლევთ, დააინსტალიროთ წინასწარ განსაზღვრული თემები, პროდუქტები და სხვა საწყისი შინაარსი. ეს შესანიშნავი გზაა Ultimate Multisite-ის ფუნქციების გასაცნობად. დააწკაპუნეთ **Install**, რათა დაამატოთ სტანდარტული შინაარსი, ან გადაახვიეთ ეს ნაბიჯი, თუ ამჯობინებთ, რომ თავიდან დაიწყოთ.

![სტანდარტული შინაარსის ინსტალაციის ნაბიჯი](/img/installation/wizard-default-content.png)

### რეკომენდებული პლაგინები

შეგიძლიათ დააინსტალიროთ რეკომენდებული დამხმარე პლაგინები. მათი დასამატებლად დააწკაპუნეთ **Install** ან გადაახვიეთ, რომ გააგრძელოთ.

![რეკომენდებული პლაგინების ნაბიჯი](/img/installation/wizard-recommended-plugins.png)

### მზადა ხართ!

ეს არის! თქვენი Ultimate Multisite ინსტალაცია დასრულებულია. ახლა შეგიძლიათ დაიწყოთ თქვენი Website as a Service პლატფორმის შექმნა **Network Admin Dashboard-დან**.

![ინსტალაცია დასრულდა - მზად ეკრანი](/img/installation/wizard-ready.png)

![Network Admin Dashboard, რომელშიც Ultimate Multisite აქტიურია](/img/installation/network-dashboard.png)

გაერთეთ!
