---
title: RunCloud ინტეგრაცია
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud ინტეგრაცია

## მიმოხილვა {#overview}
RunCloud არის ღრუბლზე დაფუძნებული სერვერის მართვის პლატფორმა, რომელიც საშუალებას გაძლევთ მარტივად განათავსოთ და აკონტროლოთ ვებ აპლიკაციები საკუთარ ღრუბლზე. ეს ინტეგრაცია უზრუნველყოფს დომეინის ავტომატურ სინქრონიზაციასა და SSL სერტიფიკატების მართვას Ultimate Multisite-სა და RunCloud-ს შორის.

## ფუნქციები {#features}
- დომეინის ავტომატური სინქრონიზაცია
- SSL სერტიფიკატების მართვა
- დომეინის წაშლა მეპარვის (mappings) წაშლისას

## მოთხოვნები {#requirements}
ქვემოთ მოცემული კონსტანტები უნდა განისაზღვროს თქვენს `wp-config.php` ფაილში:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## დაყენების ინსტრუქციები {#setup-instructions}

### 1. მიიღეთ RunCloud API საკრედენტები {#1-get-your-runcloud-api-credentials}

1. შეხვიდით თქვენს RunCloud დეშბორტში
2. გადადით "User Profile"-ზე (დააწკაპუნეთ თქვენს პროფილის ილუსტრაციაზე ზედა მარჯვენა კუთხეში)
3. მენიუდან აირჩიეთ "API"
4. დააჭირეთ "Generate API Key"-ს, თუ ჯერ არ გაქვთ
5. დააკოპირეთ თქვენი API Key და API Secret

### 2. მიიღეთ თქვენი სერვერის და აპლიკაციის ID-ები {#2-get-your-server-and-app-ids}

1. RunCloud დეშბორტში გადადით "Servers"-ზე
2. აირჩიეთ სერვერი, სადაც განთავსებულია თქვენი WordPress multisite
3. სერვერის ID-ს შეგიძლიათ ნახოთ URL-ში: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. გადადით "Web Applications"-ზე და აირჩიეთ თქვენი WordPress აპლიკაცია
5. აპლიკაციის ID-ს შეგიძლიათ ნახოთ URL-ში: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. დაამატეთ კონსტანტები wp-config.php-ში {#3-add-constants-to-wp-configphp}

დაამატეთ შემდეგი კონსტანტები თქვენს `wp-config.php` ფაილში:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. გააქტიურეთ ინტეგრაცია {#4-enable-the-integration}

1. WordPress ადმინში, გადადით Ultimate Multisite > Settings-ზე
2. "Domain Mapping" ტაბაში გადადით
3. დაწევთ ქვემოთ "Host Integrations"-ზე
4. ჩართეთ RunCloud ინტეგრაცია
5. დააჭირეთ "Save Changes"-ს

## როგორ მუშაობს {#how-it-works}

როდესაც დომენი Ultimate Multisite-ში იმაპდება:

1. ინტეგრაცია აგზავნის მოთხოვნას RunCloud-ის API-ს, რომ დომენი დაამატოს თქვენს აპლიკაციაში
2. თუ დომენი წარმატებით დაემატება, ინტეგრაცია ასევე გადაიტანს SSL სერტიფიკატებს
3. როდესაც დომეინის მაპინგი მოიხსნება, ინტეგრაცია დომენს RunCloud-დან წაშლის

ქვ드시ნების (subdomain) დაყენებისთვის, ინტეგრაცია ავტომატურად გააკეთებს ქვ드시ნების შექმნის პროცესს RunCloud-ში თქვენს ქსელში ახალი საიტების დამატებისას.

## პრობლემების მოგვარება {#troubleshooting}

### API-ის კავშირის პრობლემები {#api-connection-issues}
- გადაამოწმეთ, სწორია თუ არა თქვენი API საკრედენციალები
- შეამოწმეთ, სწორია თუ არა თქვენი სერვერის და აპლიკაციის ID-ები
- დარწმუნდით, რომ RunCloud-ის ანგარიშს აქვს საჭირო უფლებები

### SSL სერტიფიკატების პრობლემები {#ssl-certificate-issues}
- RunCloud-ს შეიძლება დასჭირდეს დრო SSL სერტიფიკატების გამოცემისას
- გადაამოწმეთ, სწორად მიუთითებს თუ არა თქვენი დომენები თქვენი სერვერის IP მისამართზე
- შეამოწმეთ RunCloud-ის SSL პარამეტრები თქვენი აპლიკაციისთვის

### დომენი დამატებული არ არის {#domain-not-added}
- გადაამოწმეთ Ultimate Multisite-ის лоgs (ლოგები) შეცდომის შეტყობინებების მიხედვით
- დაადასტურეთ, რომ დომენი უკვე არ არის დამატებული RunCloud-ში
- დარწმუნდით, რომ თქვენი RunCloud პლანი მხარს უჭერს მრავალ დომენს
