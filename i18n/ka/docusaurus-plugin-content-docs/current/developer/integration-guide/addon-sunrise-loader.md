---
title: დამატების Sunrise ფაილის ჩამტვირთავი
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise ფაილის ჩამტვირთავი

Ultimate Multisite 2.8.0 ამატებს sunrise გაფართოების ჩამტვირთავს დამატებებისთვის და მორგებული MU-plugin ინტეგრაციებისთვის, რომლებსაც WordPress sunrise ჩატვირთვისას გაშვება სჭირდებათ, გენერირებული `wp-content/sunrise.php` ფაილის რედაქტირების გარეშე.

## როდის გამოიყენოთ {#when-to-use-it}

გამოიყენეთ sunrise გაფართოება, როდესაც თქვენი ინტეგრაცია უნდა გაეშვას ჩვეულებრივი plugin-ების ჩატვირთვამდე, მაგალითად, მორგებული დომენის მარშრუტიზაცია, ჰოსტზე დამოკიდებული მოთხოვნის დამუშავება ან ქსელის ადრეული ჩატვირთვის კორექტირებები.

ჩვეულებრივი ინტეგრაციებისთვის უპირატესობა მიანიჭეთ სტანდარტულ WordPress plugin-ებს, MU-plugin-ებს და დოკუმენტირებულ Ultimate Multisite hook-ებს. Sunrise კოდი ძალიან ადრე ეშვება და უნდა დარჩეს მცირე, თავდაცვითი და დამოკიდებულებებისგან თავისუფალი.

## ფაილის დასახელების წესი {#file-naming-convention}

შექმენით PHP ფაილი სახელად `sunrise.php` addon დირექტორიაში, რომლის სახელიც იწყება `ultimate-multisite-`-ით:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

ჩამტვირთავი ამ ნიმუშისთვის ასკანერებს plugins დირექტორიას:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

შესაბამისი ფაილები იტვირთება ანბანური თანმიმდევრობით addon path-ის მიხედვით.

## სად განათავსოთ ფაილი {#where-to-place-the-file}

განათავსეთ ფაილი იმ addon-ის root დირექტორიაში, რომელსაც sunrise ქცევა ეკუთვნის:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

სკანირება წყდება `WP_CONTENT_DIR`-თან მიმართებით, და არა `WP_PLUGIN_DIR`-ის მიმდინარე მნიშვნელობასთან. ეს აღმოჩენას სტაბილურს ტოვებს, როდესაც multi-tenancy ან სხვა ადრეული ჩატვირთვის კოდი sunrise-ის დროს plugin დირექტორიის მუდმივებს ცვლის.

არ დაარედაქტიროთ გენერირებული `wp-content/sunrise.php` ფაილი პირდაპირ. ჩამტვირთავი მორგებულ კოდს აძლევს საშუალებას, გააფართოოს sunrise ქცევა core sunrise ფაილის fork-ის გარეშე, რომელსაც Ultimate Multisite აყენებს და აახლებს.

## ხელმისაწვდომი hook-ები და filter-ები {#hooks-and-filters-available}

Addon sunrise ფაილები ეშვება მას შემდეგ, რაც Ultimate Multisite დომენის mapping ჩაიტვირთება და სანამ WordPress გაუშვებს `ms_loaded`-ს. ამ ეტაპზე sunrise ფაილს შეუძლია:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- საჭიროებისას განსაზღვროს sunrise-time მუდმივები, როგორიცაა `BLOG_ID_CURRENT_SITE`;
- წაიკითხოს Ultimate Multisite sunrise დამხმარე მდგომარეობა, მათ შორის მარშრუტიზაციის მდგომარეობა, რომელსაც multi-tenancy ინტეგრაციები იყენებს.

Ultimate Multisite უშვებს `wu_sunrise_loaded`-ს მას შემდეგ, რაც მისი sunrise ჩამტვირთავი დასრულდება. გამოიყენეთ ეს action კოდისთვის, რომელიც უნდა გაეშვას sunrise ჩატვირთვის დასრულების შემდეგ, მაგრამ მაინც sunrise სასიცოცხლო ციკლს ეკუთვნის.

გამოიძახეთ მხოლოდ ის functions, რომლებიც sunrise ფაზაში უკვე ჩატვირთულია. მოერიდეთ database-heavy სამუშაოს, template rendering-ს, HTTP requests-ს და კოდს, რომელიც ვარაუდობს, რომ ნორმალური plugin-ების ჩატვირთვის თანმიმდევრობა დასრულებულია.

## მინიმალური მაგალითი {#minimal-example}

```php
<?php
/**
 * Sunrise extension for a custom host integration.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // Adjust early routing or constants before ms_loaded.
}
```

ფაილის განთავსების შემდეგ ჩატვირთეთ მიბმული დომენი და unmapped main-site URL, რათა დაადასტუროთ, რომ ორივე path კვლავ სწორად იტვირთება.
