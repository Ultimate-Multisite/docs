---
title: Zapier ინტეგრაცია
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ultimate Multisite-ის ინტეგრირება Zapier-თან

ერთ記事ში განვიხილეთ [Webhooks](webhooks.md) და როგორ შეიძლება მათი გამოყენება მესამე მხარის აპლიკაციებთან ინტეგრაციისთვის.

Webhooks-ის გამოყენება ცოტა რთულია, რადგან ის მოითხოვს კოდირების და პეი load-ების აღების გააზრებულ ცოდნას. **Zapier** არის გზა ამ პრობლემის გადალახვისთვის.

Zapier-ს აქვს ინტეგრაცია 5000-ზე მეტი აპლიკაცით, რაც სხვადასხვა აპლიკაციებს შორის კომუნიკაციას გაცილებით მარტივს ხდის.

შეგიძლიათ შექმნათ **Triggers** (საწვანები), რომლებიც გააქტიურდება თქვენს ქსელში მოვლენების დროს (მაგალითად, ანგარიშის შექმნა და ეს გამოიწვიოს `account_create` მოვლენა) ან შექმნათ **Actions** (მოქმედებები) თქვენს ქსელში გარე მოვლენებზე რეაგირებისთვის (მაგალითად, ახალი წევრობის შექმნა თქვენს Ultimate Multisite ქსელში).

ეს შესაძლებელია იმის გამო, რომ **Ultimate Multisite-ის Zapier-ის triggers** და actions მუშაობს [REST API](https://developer.ultimatemultisite.com/api/docs/) საშუალებით.

## როგორ დავიწყოთ {#how-to-start}

პირველ რიგში, მოძებნეთ Ultimate Multisite Zapier აპლიკაციების სიაში. ალტერნატიულად, შეგიძლიათ დააწკაპუნოთ [ამ ბმულზე](https://zapier.com/apps/wp-ultimo/integrations).

წექეცით თქვენს dashboard-ზე და მარცხენა საპირისპირო პანელზე **+** **Create Zap** ღილაკს, ახალი Zap-ის დასაყენებლად.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

გაიგებთ გადამისამართებას Zap-ის შექმნის გვერდზე.

ძებნის ყუთში ჩაწერეთ "wp ultimo". დააწკაპუნეთ **Beta** ვერსიის ოფციონზე.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

ჩვენს აპლიკაცი ამის შერჩევის შემდეგ, აირჩიეთ ხელმისაწვდომი მოვლენა: **New Ultimate Multisite Event**.

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

ახლა საჭიროა Zapier-ს მივცეთ წვდომა **თქვენს ქსელზე**. **Sign in**-ის დაჭერით გაიხსნება ახალი ფანჯარა, რომელიც მოითხოვს **API credentials**.

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

გადადით თქვენს ქსელის ადმინისტრატორის პანელში და გადადით **Ultimate Multisite > Settings** > **API & Webhooks**-ზე და იპოვეთ API Settings განყოფილება.

აირჩიეთ **Enable API** (API-ის გააქტიურების) ვარიანტი, რადგან ეს საჭიროა ამ კავშირის დასამუშავებლად.

![API and Webhooks settings with API Settings and Enable API options](/img/admin/settings-api-webhooks.png)

გამოიყენეთ **Copy to Clipboard** (კლიპბორტში დაკოპირება) ხატულა API Key-სა და API Secret ველიდან და ჩასვით ეს მნიშვნელობები ინტეგრაციის ეკრანზე.

URL-ის ველიდან შეიყვანეთ თქვენი ქსელის სრული URL, მათ შორის პროტოკოლი (HTTP ან HTTPS).

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

დააჭირეთ ღილაკს **Yes, Continue** (დიახ, გავაგრძელოთ), რომ შემდეგ ეტაპზე გადახვიდეთ. თუ ყველაფერი სწორად იმუშავებს, თქვენ ახალი დაკავშირებული ანგარიში გაგიხვდებათ! დააწკაპუნეთ **Continue**-ზე ახალი ტრიგერის შესაქმნელად.

## როგორ შევქმნათ ახალი Trigger (სამოქმედო) {#how-to-create-a-new-trigger}

ახლა, როდესაც თქვენი ანგარიში დაკავშირებულია, შეგიძლიათ ნახოთ ხელმისაწვდომი მოვლენები (events). ამ მაგალითისთვის გამოვიტანოთ **payment_received** (გადახდის მიღება) მოვლენა.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

მას შემდეგ, რაც მოვლენა არჩეული იქნება და დააჭერთ **continue**-ს, გამოჩნდება **test step** (ტესტის ნაბიჯი).

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

ამ ეტაპზე Zapier შეამოწმებს, შეუძლია თუ არა თქვენს Zap-ს ამ მოვლენისთვის საჭირო **specific payload** (კონკრეტული მონაცემების ნაკადი) მიღება. იმავე ტიპის მომავალ მოვლენებშიც იგივე სტრუქტურის ინფორმაცია გაიგზავნება.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

ჩვენს ტუტორიალში ტესტი წარმატებით დასრულდა და დაბრუნდა პაკეტის მაგალითი ინფორმაცია. ეს მაგალითი ინფორმაცია სასარგებლო იქნება ჩვენთვის, როდესაც ქმნით actions-ებს (მოქმედებებს). თქვენი trigger უკვე შექმნილია და მზადაა დაკავშირებისთვის სხვა აპლიკაციებთან.

## Actions-ის შექმნა {#how-to-create-actions}

Actions იყენებენ სხვა triggers-ებიდან მიღებულ ინფორმაციას, რათა ქსელში ახალი ჩანაწერები შექმნან.

**Action step-ის შექმნისას** თქვენ აირჩევთ Ultimate Multisite **Beta**-ს და **Create Items on Ultimate Multisite**-ს ვარიანტს.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

შემდეგ ნაბიჯში თქვენ ან ქმნით თქვენს аутентификаციას, როგორც **How to start**-ში გავაკეთეთ, თუ აირჩევთ უკვე შექმნილ аутентификаციას. ამ ტუტორიალში ჩვენ გამოვიყენებთ ადრე შექმნილ ერთსა და იმავე аутентификаციას.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Actions-ის კონფიგურირება (Setting up the Action) {#setting-up-the-action}

ეს არის **actions-ის ძირითადი ნაბიჯი** და აქ ყველაფერი ცოტა განსხვავებულია. პირველი ინფორმაცია, რომელსაც აირჩევთ, არის **Item**. Item არის თქვენი ქსელის **ინფორმაციის მოდელი**, მაგალითად: **Customers (კლიენტები), Payments (გადახდები), Sites (საიტები), Emails (ელფოსტები)** და სხვა.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Item-ის არჩევისას, ფორმა **შეიცვლება იმ ველით**, რომელიც საჭიროა ან არ არის სავალდებულო თქვენთვის შერჩეული Item-ისთვის.

მაგალითად, როდესაც აირჩევთ Item-ს **Customer (კლიენტი)**, ფორმის ველი შეიცავს ყველაფერს, რაც საჭიროა ახალი კლიენტის შექმნისთვის ქსელში.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

ყველა **საჭირო** (required) აღნიშნული ველი დამატების შემდეგ და "continue"-ზე დაჭერის შემდეგ, ბოლო ეკრანზე გამოჩნდება შევსებული ველი და ის ველი, რომელიც ჯერ არ არის შევსებული.

![Zapier ქმედების ტესტის დადასტურება, სადაც შევსებული და ცარიელი ველი ჩანს](/img/admin/webhooks-list.png)

როგორც კი თქვენი ტესტი დასრულდება და წარმატებით შესრულდება, თქვენი ქმედება კონფიგურირებულია. ასევე მნიშვნელოვანია შეამოწმოთ თქვენს ქსელში, არის თუ არა ნივთის შექმნა თქვენი ქმედების ტესტის გამოყენებით.
