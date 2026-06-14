---
title: API-ის终ოს登録
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# The Ultimate Multisite Register API конектоრი (endpoint)

ამ ტუტორიაში გეცოდინება, როგორ გამოვიყენოთ Ultimate Multisite /register API конектоრი ახალი მომხმარებლის მთელი ინტეგრაციის პროცესის შესაქმნელად თქვენს ქსელში და როგორ გავაკეთოთ ეს Zapier-ით.

ეს конектор იყენებს POST მეთოდს და அழைக்கப்படுகிறது URL-ით _**https://yoursite.com/wp-json/wu/v2/register**_. ამ გამოძახებისას თქვენს ქსელში 4 პროცესი შესრულდება:

  * შეიქმნება ახალი WordPress მომხმარებელი ან მისი იდენტიფიცირება მომხმარებლის ID-ით.

  * შეიქმნება ახალი Customer Ultimate Multisite-ში ან მისი იდენტიფიცირება კლიენტის ID-ით.

  * შეიქმნება ახალი საიტი WordPress ქსელში.

  * ბოლოს, შეიქმნება ახალი Membership Ultimate Multisite-ში.

ამ პროცესისთვის დაგჭირდებათ თქვენი API საკრედენციალები. მათ მისაღებად, გადადით თქვენი ქსელის ადმინისტრატორის პანელზე, გადადით **Ultimate Multisite > Settings** > **API & Webhooks**, და იპოვეთ API Settings განყოფილება.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

აი, API პარამეტრების გვერდის სრული ხედვა:

![API settings full page](/img/config/settings-api-full.png)

აირჩიეთ **Enable API** და მიიღეთ თქვენი API საკრედენციალები.

ახლა კი, გამოვვიყოთ конеექტზე და შემდეგ შევქმნათ რეგისტრაციის მოქმედება Zapier-ში.

## Endpoinტი სხეულის პარამეტრები (Endpoint body parameters)

მოდით მიმოვიხილოთ მინიმალური ინფორმაცია, რომელიც საჭიროა конеექტზე გაგზავნისთვის. ამ სტატიის ბოლოს იპな შენს სრულ გამოძახებას.

### Customer

ეს არის ინფორმაცია, რომელიც საჭიროა მომხმარებლისა და Ultimate Multisite-ის კლიენტის შექმნის პროცესისთვის:

"customer_id" : integer

შეიძლება თუ არა თქვენს ქსელში შექმნილი მომხმარებლის ID გაგზავნა. თუ არ გააგზავნით, ქვემოთ მოცემული ინფორმაცია გამოიყენება ახალი მომხმარებლისა და ახალი WordPress მომხმარებლის შესაქმნელად. მომხმარებლის ID-ს ასევე შეიძლება გაგზავნოთ იმავე გზით, რაც მომხმარებლის ID-ს.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **წევრიანობა (Membership)**

ამ ობიექტში ჩვენ მხოლოდ წევრიანობის სტატუსის ინფორმაცია გვჭირდება.

"membership" { "status" : "string", // ერთ-ერთი: "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **პროდუქტები (Products)**

პროდუქტებს მიენიჭება მასში 1 ან მეტი პროდუქტის ID-ების მასივი თქვენს ქსელში. ყურადღება მიაქციეთ, რომ ეს endpoinტი პროდუქტებს არ ქმნის. უფრო დეტალურად გაიგებისთვის პროდუქტების შექმნის endpoint-ზე Ultimate Multisite-ის დოკუმენტაციას შეამოწმეთ.

**"products" : [1,2],**

### **გადახდა (Payment)**

წევრიანობის მსგავსად, ჩვენ მხოლოდ სტატუსი გვჭირდება.

**"payment" { "status" : "string", // ერთ-ერთი: "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### **საიტი (Site)**

და სხეულის დახურვისთვის გვჭირდება საიტის URL და სათაური, ორივე Site ობიექტში.

**"site" : { "site_url" : "string", "site_title" : "string" }**

რეგისტრირების endpoint-ის დაბრუნება იქნება მასივი ახლად შექმნილი წევრიანობის ინფორმაციით.

## ქმედების (action) შექმნა Zapier-ში

ამ ახალი და უფრო ძლიერი ანგარიშის შექმნის endpoint-ის გამოჩენით, თქვენ ასევე მიიღებთ ახალ ქმედებას Zapier-ში.

იცნობთ თუ არა, როგორ გამოიყენოთ და ისიამოვნოთ ყველაფრით, რასაც Zapier-ის ახალი ვერსია გთავაზობთ? მეტი ინფორმაციისთვის აქ ნახეთ. (link?)

### ქმედების შექმნა

გამოვიყენოთ Google Forms-ის ინტეგრაცია Zapier-თან, რათა უკეთ დავინახოთ, როგორ გამოვიყენოთ რეგისტრაციის конечная წერტილი (registration endpoint). ყოველ ჯერზე, როდესაც ეს ფორმა შევსდება და ინფორმაცია შენახული იქნება ფორმის პასუხების ცხრილში, Ultimate Multisite ქსელში ახალი წევრობა შეიქმნება.

Google Forms-ში შექმენით ფორმა მინიმალური ველით, რომელიც საჭიროა ქსელში ახალი წევრობის შესაქმნელად.

<!-- სკრინშო არ არის ხელმისაწვდომი: Google Forms ფორმა, რომელსაც აქვს ველი ახალი წევრობის შესაქმნელად -->

ახლა Zapier-ში შექმენით ახალი Zap და დააკავშირეთ შექმნილი ფორმა Google-თან იმ ცხრილს მეშვეობით, სადაც მონაცემები ინახება.

<!-- სკრინშო არ არის ხელმისაწვდომი: Zapier ტრიგერის კონფიგურაციის სკრინშო, რომელიც აკავშირებს Google Forms-ის ცხრილს -->

დავასრულეთ! Google Forms ფორმა დაკავშირებულია Zapier-თან და მზადაა ქსელთან ინტეგრირებისთვის. ახლა გადავიდეთ ამოცანაზე (Action), რომელიც გამოჩნდება იმ ტრიგერის შედეგად, რომელსაც Google Forms ყოველ ჯერზე იჭერს შევსებისას.

იპოვეთ ახალი Ultimate Multisite აპლიკაცია და აირჩიეთ ის. ამ ტიპის Zap-ისთვის აირჩიეთ Register (რეგისტრაციის) ოფცია.

<!-- სკრინშო არ არის ხელმისაწვდომი: Zapier-ის 액션ების შერჩევის სკრინშო, სადაც Ultimate Multisite აპლიკაცია და Register ოფციას აჩვენებს -->

ამ პირველი ნაბიჯის შემდეგ, აირჩიეთ ის ანგარიში, რომელთანაც ეს Zap-ი უნდა იყოს დაკავშირებული.<!-- სკრინშო არ არის ხელმისაწვდომი: Ultimate Multisite-ისთვის Zapier-ის ანგარიშის კავშირის ნაბიჯი -->

ეს ყველაზე მგრძნობიარე ნაწილი მთელი პროცესის. ჩვენ უნდა დავაბალანსოთ Google Forms-იდან მიღებული ველი ისეთი ველით, რომელიც არის მინიმალური საჭიროების დასაკმაყოფილებლად რეგისტრაციის конечной წერტილისთვის, როგორც წინა სექციაშია ნაჩვენები.

ამ მაგალითში, ჩვენ მხოლოდ უნდა დავაყენოთ მომხმარებლის სახელი (username), ელფოსტა (email), პაროლი (password), სახელი (name) და ვებსაიტის URL. ကျန် everything წინასწარ განსაზღვრულია, რათა ამ Google Forms-ით გენერირებული ყველა წევრობა ერთსა და იმავე პროდუქტის და სტატუსის შაბლონს მიჰყვეს.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Informatsja podesena, pradėkite galutinį testą. Maistoje ekrane pakaite matyti visus laukus, kurie bus siuntiama į endpoint'ą, jų atitinkamą informaciją ir laukus, kuriuos siuntami tuščia.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Testuokite savo naują Zap – jis turi sėkmingai pabaigti. Jei pasirodys koks nors klaida, patikrinkite visus laukus ir patikrinkite, ar jie siunami teisingai. Kadangi informacijos daug, kai kuriuos dalykus gali būti neįvykiantiems.

### Visos endpoint parametrai

Štai visas skaitinimas ir visi laukų galimybės, kurios gali būti siuntamos:

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // vienas iš "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // vienas iš "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
