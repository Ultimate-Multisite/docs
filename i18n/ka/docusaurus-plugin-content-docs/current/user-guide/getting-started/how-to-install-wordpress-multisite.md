---
title: როგორ დავინსტალიროთ WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# როგორ დავაყენო WordPress Multisite? {#how-do-i-install-wordpress-multisite}

WordPress Multisite-ს საშუალებას გაძლევთ, ერთი ინსტალაციის ქვეშ გქონდეთ რამდენიმე ვებსაიტი. ეს არის ჩაშენებული ფუნქცია, მაგრამ ნაგულისხმევად არ არის აქტიური.

:::tip
Ultimate Multisite მოიცავს **[built-in Multisite Setup Wizard](./multisite-setup-wizard)**-ს, რომელიც მთელ ამ პროცესს ავტომატიზებს. თუ Ultimate Multisite გაქვთ დაინსტალირებული, გირჩევთ, გამოიყენოთ ეს ვიზარდი ქვემოთ მოცემული მითითებული ნაბიჯების yerine.
:::

რადგან Ultimate Multisite არის მხოლოდ ქსელზე მომუშავე plugin, ამ ტუტორიაში თქვენ ისწავლით WordPress Multisite-ის ხელით ინსტალირებასა და კონფიგურაციას. ეს ტექსტი ეფუძნება [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), WPBeginner-ისგან.

**რამდენიმე რამ, რაც უნდა გაითვალისწინოთ multisite ქსელის შექმნის წინ:**

  * მიიღეთ კარგი WordPress ჰოსტინგი! ქსელზე არსებულ ვებსაიტებზე ერთი და იგივე სერვერის რესურსები იზიარება.

  * თუ მხოლოდ რამდენიმე ვებსაიტი გაქვთ დაბალი ტრაფიკით, condiviso (shared) ჰოსტინგი შეიძლება თქვენთვის საკმარისი იყოს.

  * უმეტესი **Managed WordPress hosting providers** გთავაზობენ Multisite-ს წინასწარ დაყენებულ მდგომარეობაში (ის ინსტალირებს WordPress-ს უკვე ჩართული და კონფიგურირებული Multisite-ით). ეს არის WP Engine, Closte, Cloudways და ა.შ.-ისთვის. თუ დარწმუნებული არ ხართ, არის თუ არა ეს თქვენი ჰოსტინგის პროვაიდერის შემთხვევაში, სანამ ტუტორიას გააგრძელებთ, დაუკავშირდით მათ მხარდაჭერას.

  * ასევე კარგი იქნება, რომ შეგეუფლოთ WordPress-ის ინსტალირებასა და ფაილების რედაქტირებას FTP-ითაც.

_**მნიშვნელოვანია**_: **:** თუ არსებულ WordPress ვებსაიტზე multisite ქსელის დაყენებას აპირებთ, არ დაგავიწყდეთ:

  * თქვენი WordPress საიტის სრული ბექაპის შექმნა

  * ყველა plugin-ის დეაქტივა (Deactivate) თქვენს plugin-ების გვერდზე გადასვლით bulk actions-დან და შემდეგ Apply-ის დაჭერით.

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Multisite-ს ჩართვისთვის, პირველ რიგში, დაუკავშირდით თქვენს საიტს FTP კლიენტს ან cPanel ფაილების მენეჯერს და გახსენით თქვენი wp-config.php ფაილი რედაქტირებისთვის.

_Before the _*That’s all, stop editing! Happy blogging.*_ სტრიქონის წინ დაამატეთ შემდეგი კოდის ნაწილი:

define('WP_ALLOW_MULTISITE', true);

შეინახეთ და ატვირთეთ თქვენი wp-config.php ფაილი სერვერზე.

თქვენს საიტზე Multisite ფუნქციის ჩართვის შემდეგ, ახლა დროა ქსელის დაყენება.

გადადით **Tools » Network Setup**-ში (ინструменты » ქსელის დაყენება).

ახლა თქვენ უნდა ა\*\*WordPress-ს\*\* მიამბოთ, თუ რა სახის დომენის სტრუქტურას გამოიყენებთ ქსელის საიტებისთვის: ქვედომეინებს თუ ქვედირექტორიებს.

თუ ქვედომეინებს ირჩევთ, თქვენ უნდა შეცვალოთ DNS პარამეტრები დომენის 맵ინგისთვის და დარწმუნდეთ, რომ ჩართული იყოს _**wildcard subdomains**_ (ვილდაკ-ქვედომეინები) თქვენი Multisite ქსელის აღქმისთვის.

დაუბრუნდით Network Setup-ს, მიანიჭეთ სახელი თქვენს ქსელს და დარწმუნდით, რომ Network admin email-ში არსებული ელფოსტის მისამართი სწორია. დააჭირეთ _Install_-ს გაგრძელებისთვის.

Add this code, provided by WordPress, to your _**wp-config.php**_:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

და ეს კოდი, რომელიც ასევე მოწოდებულია WordPress-ის მიერ, თქვენს _**.htaccess**_ ფაილში:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin {#add-a-trailing-slash-to-wp-admin}

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

გამოიყენეთ FTP კლიენტი ან ფაილის მენეჯერი (თუ იყენებთ რაღაცას, მაგალითად cPanel-ს), რომ நகლოთ და ჩასვათ ეს კოდი ამ ორ ფაილში.

და ბოლოს, შეხვიდით თქვენი WordPress საიტზე ხელახლა შეს logarithmicために, რომ მიიღოთ წვდომა თქვენს მულტი-საიტის ქსელზე.

**მნიშვნელოვანია, რომ ტესტი გააკეთოთ და დარწმუნდეთ, რომ შეგიძლიათ შექმნათ სუბსაიტი თქვენს WordPress Multisite ინსტალაციაზე Ultimate Multisite-ის დაყენებამდე.**

სუბსაიტის შესაქმნელად:

  1. გახსენით თქვენი საიტების wp-admin

  2. გადადით My Sites > Sites (/wp-admin/network/sites.php)

  3. დააჭირეთ Add New-ს ზედა ნაწილში

  4. შეავსეთ ყველა ველი:

  * Site Address — არასოდეს გამოიყენოთ „www“

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — საიტის სათაური, შეგეძლებათ მისი შეცვლა მოგვიანებით

  * Admin Email — დაასწარით როგორც სუბსაიტისთვის პირველ ადმინ მომხმარებელს

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

ველების შევსების შემდეგ, დააჭირეთ "Add site" ღილაკს. ახალი სუბსაიტის შექმნის შემდეგ, გადადით მასზე წვდომისთვის, რომ დარწმუნდეთ, რომ სუბსაიტი მუშაობს.

## გავრცელებული პრობლემები: {#common-problems}

### 1. შემიძლია ახალი საიტების შექმნა, მაგრამ მათ ვერ ვხედავ. {#1-i-can-create-new-sites-but-they-are-not-accessible}

თუ თქვენ აირჩიეთ სუბდომენები, ასევე საჭიროა Wildcard subdomains-ის დაყენება თქვენს მულტი-საიტის ქსელისთვის.

ამის გაკეთებისთვის გადადით თქვენი ვებგვერდის ჰოსტინგის ანგარიშის კონტროლის პანელზე (მაგალითად cPanel/Plesk/Direct Admin, რაც დამოკიდებულია თქვენს ჰოსტინგ პროვაიდერთან).

იპოვეთ ვარიანტი „Domains“ ან „Subdomains“. ზოგიერთ კონტროლის პანელში ეს არის აღნიშნული როგორც „Domain administration“.

ქვედა დომეინის (subdomain) ველში ჩაწერეთ ვარსკვლავი (*). შემდეგ სისტემა გთხოვთ, აირჩიოთ დომენი, რომელ ქვე-დომაზეც გსურთ ამ სუბდომის დამატება.

შერჩეული დომენის დოკუმენტური ფესვი ავტომატურად იქნება აღმოჩენილი. დააჭირეთ ღილაკს _Create_ (შექმნა) ან _Save_ (შენახვა), რომ დაამატოთ თქვენი ვულკაირებული სუბდომინი. შეყვანა უნდა გამოიყურებოდეს როგორც „*.[mydomain.com](http://mydomain.com)“.
