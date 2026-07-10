---
title: დეველოპერის დოკუმენტაცია
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# დეველოპერის დოკუმენტაცია {#developer-documentation}

ეს სახელმძღვანელო დეველოპერებს აწვდის ყველაფერს, რაც საჭიროა Ultimate Multisite-თან ინტეგრაციისთვის, მისი გაფართოებისთვის ან მისთვის დამატებების შესაქმნელად. Ultimate Multisite WordPress Multisite ქსელს Website-as-a-Service (WaaS) პლატფორმად გარდაქმნის.

## რა არის ხელმისაწვდომი {#whats-available}

- **[REST API](./rest-api/overview)** — სრული CRUD ოპერაციები ყველა ერთეულისთვის (მომხმარებლები, საიტები, წევრობები, გადახდები, პროდუქტები, დომენები) API გასაღებით ავტორიზაციით
- **[Hooks-ის ცნობარი](./hooks/guide)** — 200+ მოქმედების hook და 280+ ფილტრის hook სასიცოცხლო ციკლის მოვლენებისა და მორგებისთვის
- **[ინტეგრაციის სახელმძღვანელო](./integration-guide/)** — მაგალითები CRM ინტეგრაციისთვის, ანალიტიკისთვის, მორგებული გადახდის კარიბჭეებისა და webhooks-ისთვის
- **[კოდის მაგალითები](./code-examples/)** — გაფართოებული შაბლონები დინამიკური ფასდადებისთვის, საიტის უზრუნველყოფისთვის, მორგებული შეზღუდვებისთვის და მრავალკარიბჭიანი დამუშავებისთვის
- **[დამატების შემუშავება](./addon-development/getting-started)** — სტრუქტურირებული ჩარჩო დამატებითი plugin-ების შესაქმნელად

## მოთხოვნები {#requirements}

- WordPress Multisite-ის ინსტალაცია
- PHP 7.4 ან უფრო მაღალი
- გააქტიურებული Ultimate Multisite plugin

## Composer / Bedrock ინსტალაცია {#composer--bedrock-installation}

Ultimate Multisite ხელმისაწვდომია [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite)-ზე როგორც `ultimate-multisite/ultimate-multisite`. ეს არის რეკომენდებული ინსტალაციის მეთოდი [Bedrock](https://roots.io/bedrock/)-ზე დაფუძნებული WordPress კონფიგურაციებისა და სხვა Composer-ით მართვადი გარემოებისთვის.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note გადარქმეული პაკეტი (v2.6.1+)
Composer პაკეტს სახელი შეეცვალა `devstone/ultimate-multisite`-დან `ultimate-multisite/ultimate-multisite`-ზე v2.6.1-ში. თუ თქვენი `composer.json` ძველ მომწოდებლის სახელს მიუთითებს, განაახლეთ require ჩანაწერი და გაუშვით `composer update`.
:::

ინსტალაციის შემდეგ, plugin ქსელში გაააქტიურეთ Network Admin-იდან:

```bash
wp plugin activate ultimate-multisite --network
```

ან, თუ plugin-ს must-use plugin-ად ტვირთავთ Bedrock-ის autoloader-ის მეშვეობით, გამოიყენეთ `wp_ultimo_skip_network_active_check` ფილტრი აქტივაციის დამცავის გვერდის ასავლელად:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## სწრაფი დაწყება {#quick-start}

### გამოიყენეთ REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### ჩაერთეთ მოვლენებში {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### შექმენით დამატება {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

დეტალური დოკუმენტაციისა და მაგალითებისთვის იხილეთ თითოეული სექცია.
