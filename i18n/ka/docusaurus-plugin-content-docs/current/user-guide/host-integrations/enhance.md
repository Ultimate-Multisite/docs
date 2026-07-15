---
title: კონტროლის პანელის ინტეგრაციის გაუმჯობესება
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Control Panel-ის ინტეგრაციის გაუმჯობესება

## მიმოხილვა {#overview}
Enhance არის თანამედროვე კონტროლის პანელი, რომელიც გთავაზობთ ძლიერ ჰოსტინგ ავტომატიზაციისა და მართვის შესაძლებლობებს. ეს ინტეგრაცია უზრუნველყოფს დომეინების ავტომატურ სინქრონიზაციასა და SSL-ს სერტიფიკატის მართვას Ultimate Multisite-სა და Enhance Control Panel-ს შორის.

**დაკავშირებული განხილვა:** ნახეთ [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) საზოგადოების რჩევებისა და დამატებითი ინფორმაციისთვის.

## ფუნქციები {#features}
- დომეინების დამაპროექტირებისას ავტომატური დომეინის სინქრონიზაცია Ultimate Multisite-ში
- DNS-ის გარდა, LetsEncrypt-ის მეშვეობით ავტომატური SSL-ს სერტიფიკატის მიწოდება
- ქვედომეინების მხარდაჭერა ქსელებისთვის, რომლებიც მუშაობენ ქვედომეინის რეჟიმში
- დამაპროექტირების წაშლა დომეინის აღმოფხვრისას
- API-კრედენციალტების გადამოწმებისთვის კავშირის ტესტირება

## მოთხოვნები {#requirements}

### სისტემური მოთხოვნები {#system-requirements}
- Enhance Control Panel-ის დაყენება და ხელმისაწვდომობა
- WordPress Multisite-ის ინსტალაცია Enhance სერვერზე ან მასთან დაკავშირებულ სერვერზე
- Apache ვებ-სერვერი (Enhance მხარს უჭერს Apache კონფიგურაციებს; LiteSpeed Enterprise ხელმისაწვდომია შეზღუდული ღირებულებით)

### API-ზე წვდომა {#api-access}
უნდა გქონდეთ ადმინისტრატორის დონეზე წვდომა Enhance Control Panel-ზე API ტოკენების შესაქმნელად.

## თქვენი API კრედენციალტების მიღება {#getting-your-api-credentials}

### 1. API ტოკენის შექმნა {#1-create-an-api-token}

1. შეხვიდით თქვენს Enhance Control Panel-ში ადმინისტრატორის სახელით
2. გადადით მენიუს მეშვეობით **Settings**-ზე (პარამეტრები)
3. გადადით **Access Tokens**-ზე (წვდომის ტოკენები)
4. დააჭირეთ **Create Token**-ს (ტოკენის შექმნა)
5. მიანიჭეთ ტოკენს აღწერით სახელი (მაგალითად, "Ultimate Multisite Integration")
6. დანიშნეთ როლი **System Administrator** (სისტემის ადმინისტრატორი)
7. ვადის გასვლის თარიღისთვის:
   - დატოვეთ ცარიელი, თუ გსურთ ტოკენმა არასდროს გაითვალისწინოს ვადა
   - ან დააყენეთ კონკრეტული ვადის გასვლის თარიღი უსაფრთხოების მიზნებისთვის
8. დააჭირეთ **Create** (შექმნა)

შექმნის შემდეგ გამოჩნდება თქვენი **Access Token** და **Organization ID**. **დააკოპირეთ ისინი დაუყოვნებლივ**, რადგან ტოკენი მხოლოდ ერთხელ იქნება ნაჩვენები.

### 2. ორგანიზაციული ID-ის (Organization ID) მოძიება {#2-get-your-organization-id}

ორგანიზაციული ID გამოტანილია Access Tokens გვერდზე ლურჯ ბლოკში, რომელსაც აქვს წარწერა "Org ID: {your_id}".

ორგანიზაციული ID არის UUID ფორმატის სახით: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

თქვენ შეგიძლიათ მომხმარებლის ორგანიზაციული ID-ის პოვნა შემდეგი გზით:
1. გადადით **Customers** გვერდზე
2. დააჭირეთ **Manage customer** შესაბამისი მომხმარებლისთვის
3. შეამოწმეთ URL - ორგანიზაციული ID არის ალფანური სიმბოლოები `/customers/`-ის შემდეგ.

### 3. სერვერის ID-ის (Server ID) მოძიება {#3-get-your-server-id}

თქვენი სერვერის ID-ის (საჭიროა დომეინის ოპერაციებისთვის) მოსაძებნად:

1. Enhance Control Panel-ში გადადით **Servers**-ზე
2. დააწკაპუნეთ იმ სერვერზე, სადაც WordPress-ის ინსტალაცია მუშაობს
3. სერვერის ID (UUID ფორმატში) გამოჩნდება URL-ში ან სერვერის დეტალებში
4. ალტერნატიულად, შეგიძლიათ გამოიყენოთ API სერვერების ჩამოთvoorებისთვის:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

სერვერის ID-ის ფორმატი არის UUID: `00000000-0000-0000-0000-000000000000`

### 4. API მისამართის (API URL) მოძიება {#4-get-your-api-url}

თქვენი API მისამართი არის თქვენი Enhance Control Panel-ის URL, რომელზეც დამატებულია `/api/`:

```
https://your-enhance-panel.com/api/
```

**მნიშვნელოვანია:** საჭიროა `/api/` პათქეტი. გავრცელებული შეცდომები მოიცავს:
- მხოლოდ დომეინის გამოყენებას `/api/`-ის გარეშე
- HTTP-ის ნაცვლად HTTPS-ის გამოყენებას (უსაფრთხოებისთვის HTTPS აუცილებელია)

## კონფიგურაცია {#configuration}

### საჭირო კონსტანტები {#required-constants}

დაამატეთ შემდეგი конსტანტები თქვენს `wp-config.php` ფაილში:

// Control Panel ინტეგრაციის გაძლიერება
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');

### დაყენება ინტეგრაციის მანიპულატორის საშუალებით (Setup via Integration Wizard) {#setup-via-integration-wizard}

1. თქვენს WordPress ადმინში გადადით **Ultimate Multisite** > **Settings**-ზე
2. გადადით **Integrations** ტაბულზე
3. იპოვეთ **Enhance Control Panel Integration** და დააჭირეთ **Configuration**-ს
4. მანიპულატორი გიხელთfühავს დაყენების პროცესში:
   - **ნაბიჯი 1:** შესავალი და ფუნქციების მიმოხილვა
   - **ნაბიჯი 2:** შეიყვანეთ თქვენი API საკრედენტIALები (Token, API URL, Server ID)
   - **ნაბიჯი 3:** შეამოწმეთ კავშირი
   - **ნაბიჯი 4:** მიმოხილვა და გააქტიურება

შეგიძლიათ აირჩიოთ:
- მანიპულატორს დაუშვათ, რომ კონსტანტები ავტომატურად ჩაამატოს თქვენს `wp-config.php` ფაილში
- დააკოპიროთ კონსტანტების განმარტებები და დაამატოთ ისინი ხელით

## დამატებითი WordPress კონფიგურაცია (Additional WordPress Configuration) {#additional-wordpress-configuration}

კომუნიტეტის უკუკავშირის საფუძველზე ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), შესაძლოა დამატებითი პარამეტრების კონფიგურირება დაგჭირდეთ:

### .htaccess კონფიგურაცია (Configuration) {#htaccess-configuration}

თუ განიცდით პრობლემებს დომეინის მაცნებელთან დაკავშირებით:
1. წაშალეთ ორიგინალი Enhance `.htaccess` ფაილი
2. შეცვალეთ სტანდარტული WordPress Multisite `.htaccess` ფაილის ნაცვლად

### Cookie კონსტანტები (Cookie Constants) {#cookie-constants}

ამ კონსტანტებს დაამატეთ `wp-config.php`-ში, რათა უზრუნველყოთ სწორი ქუქიების დამუშავება მაცნებლით გაერთიანებულ დომეინებზე:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## როგორ მუშაობს (How It Works) {#how-it-works}

### როდესაც დომენი გაერთიანებულია (When a Domain is Mapped) {#when-a-domain-is-mapped}

1. მომხმარებელი ქსელში (Ultimate Multisite) აკავშირებს საკუთარ დომეინს (ან ახალი საიტის შექმნა ქვედომეინის რეჟიმში).
2. ინტეგრაცია აგზავნის POST მოთხოვნას Enhance-ის API-ს: `/servers/{server_id}/domains`
3. Enhance ამ დომე인을 თქვენს სერვერის კონფიგურაციაში დამატებს.
4. როდესაც DNS-ი თქვენს სერვერთან მიდის, Enhance ავტომატურად უზრუნველყოფს SSL სერტიﬁኬტს LetsEncrypt-ის საშუალებით.
5. დომენი აქტიური ხდება HTTPS-ით.

### როდესაც დომენი მოიხსნება {#when-a-domain-is-removed}

1. Ultimate Multisite-ში იშლება დომენის მაცნობა (domain mapping).
2. ინტეგრაცია დაეკვებება Enhance-ს, რათა იპოვოს დომენის ID.
3. გაგზავნილია DELETE მოთხოვნა შემდეგ მისამართზე: `/servers/{server_id}/domains/{domain_id}`
4. Enhance დომენს თქვენს სერვერის კონფიგურაციიდან აშლის.

### DNS-ისა და SSL-ის შემოწმება {#dns-and-ssl-checking}

Ultimate Multisite-ში ჩაშენებულია DNS-ის და SSL-ის შემოწმების ფუნქციები:
- შეგიძლიათ დააყენოთ შემოწმების ინტერვალი **Domain Mapping Settings**-ში (ნაგულისხმევი: 300 წამი/5 წუთი).
- სისტემა დომენის აქტიურად აღნიშვნამდე DNS-ის გავრცელებას (propagation) აკონტროლებს.
- SSL სერტიﬁኬტის ვალიდურობა ავტომატურად იმოწმება.
- Enhance ავტომატურად მართავს SSL-ის მომსახურებას, ამიტომ ხელით SSL-ის კონფიგურირება არ არის საჭირო.

## დაყენების გადამოწმება {#verifying-setup}

### კავშირის ტესტირება {#test-the-connection}

1. Integration Wizard-ში გამოიყენეთ **Test Connection** ნაბიჯი.
2. პლაგინი ცდილობს თქვენს სერვერზე დომენების გამოტანას.
3. წარმატების შეტყობინება ადასტურებს:
   - API საკრედენტIALები სწორია
   - API მისამართია ხელმისაწვდომი
   - Server ID ვალიდურია
   - უფლებები სწორად არის დაყენებული

### დომენის მაცნობის შემდეგ {#after-mapping-a-domain}

1. Ultimate Multisite-ში დააკავშირეთ ტესტის დომენი.
2. შეამოწმეთ Ultimate Multisite-ის лоgs (**Ultimate Multisite** > **Logs** > **integration-enhance**).
3. დაადასტურეთ Enhance Control Panel-ში, რომ დომენი დაემატა:
   - გადადით **Servers** > **Your Server** > **Domains**-ზე.
   - ახალი დომენი უნდა გამოჩნდეს სიაში.
4. როგორც კი DNS გავრცელდება, შეამოწმეთ, რომ SSL ავტომატურად არის მომსახურებული.

## პრობლემების მოგვარება (Troubleshooting) {#troubleshooting}

### API კავშირის პრობლემები {#api-connection-issues}

**შეცდომა: "Enhance API-სთან დაკავშირება ვერ მოხერხდა"**
- შეამოწმეთ, შეიცავს თუ არა `WU_ENHANCE_API_URL` ბოლოს `/api/`-ს.
- დარწმუნდით, რომ იყენებთ HTTPS-ს და არა HTTP-ს.
- შეამოწმეთ, ხელმისაწვდომია თუ არა Enhance პანელი თქვენი WordPress სერვერისგან.
- გადაამოწმეთ, არ არსებობს თუ არა ფაირვოლის წესები, რომლებიც ბლოკავს კავშირს.

**შეცდომა: "Enhance API ტოკენი აღარ არის ნაპოვნი"**
- დარწმუნდით, რომ `WU_ENHANCE_API_TOKEN` განსაზღვრულია `wp-config.php`-ში.
- შეამოწმეთ, არ არის თუ არა ტოკენი წაშლილი ან ვადაგასული Enhance-ში.
- გადაამოწმეთ ტოკენის მნიშვნელობაში წერტილების შეცდომები (typos).

**შეცდომა: "서버 ID დაყენებული არ არის" (Server ID is not configured)**
- შეამოწმეთ, განსაზღვრულია თუ არა `WU_ENHANCE_SERVER_ID` `wp-config.php`-ში.
- დარწმუნდით, რომ Server ID-ს აქვს ვალიდური UUID ფორმატი.
- დაადასტურეთ, რომ სერვერი არსებობს თქვენს Enhance პანელში.

### დომეინის დამატება არ არის შესრულებული (Domain Not Added) {#domain-not-added}

**ლოგების შემოწმება:**
1. გადადით **Ultimate Multisite** > **Logs**-ზე.
2. გაფილტვრეთ `integration-enhance`-ით.
3. იპოვეთ შეცდომის შეტყობინებები, რომლებიც პრობლემას მიუთითებს.

**საერთო მიზეზები:**
- არასწორი დომეინის სახელი ფორმატი.
- დომენი უკვე არსებობს Enhance-ში.
- API-ს საკმარისი უფლებების არქონა (დარწმუნდით, რომ ტოკენს System Administrator როლი აქვს).
- Server ID-ს არ ემთხვევა დანამდვილ სერვერს Enhance-ში.

### SSL სერტიფიკატის პრობლემები {#ssl-certificate-issues}

**SSL-ის განხორციელება ვერ ხდება (SSL not provisioning):**
- შეამოწმეთ, მიუთითებს თუ არა DNS თქვენი სერვერის IP მისამართზე.
- გადაამოწმეთ, სწორად არის დადგენილი დომენი: `nslookup yourdomain.com`
- Enhance-ს სჭირდება DNS-ის რეზოლუცია SSL-ის განხორციელებამდე.
- SSL-ის განხორციელება ტიპიურად გრძელდება 5-10 წუთი DNS-ის გავრცელების შემდეგ.
- შეამოწმეთ Enhance Control Panel-ის ლოგები SSL-თან დაკავშირებული შეცდომებისთვის.

**Enhance-ში მექანიკური SSL პრობლემების მოგვარება:**
1. გადადით **Servers** > **Your Server** > **Domains**-ზე.
2. იპოვეთ თქვენი დომენი და შეამოწმეთ მისი SSL სტატუსი.
3. საჭიროების შემთხვევაში, შეგიძლიათ ხელით დაწყოთ SSL-ის განხორციელება (provisioning).

### DNS-ის შემოწმების ინტერვალი {#dns-check-interval}

თუ დომეინებს ან SSL სერტიifikატებს დიდხანს აადვილებენ აქტივაციისთვის:
1. გადადით **Ultimate Multisite** > **Settings** > **Domain Mapping**-ში
2. იპოვეთ პარამეტრი **DNS Check Interval**
3. შეცვალეთ ნაგულისხმევი 300 წამიდან უფრო დაბალი მნიშვნელობით (მინიმუმი: 10 წამი)
4. **შენიშვნა:** დაბალი ინტერვალები ნიშნავს უფრო ხშირ შემოწმებებს, მაგრამ სერვერის დატვირთვა იზრდება

### ავთენტიფიკაციის შეცდომები {#authentication-errors}

**HTTP 401/403 შეცდომები:**
- ხელახლა შექმენით თქვენი API ტოკენი Enhance-ში
- გადაამოწმეთ, რომ ტოკენს აქვს **System Administrator** როლი
- დარწმუნდით, რომ ტოკენი არ არის ვადის გასვლის პერიოდში
- დააკვირდით სწორ ორგანიზაციულ ID-ს (მიუხედავად იმისა, რომ URL-ში ის ჩვეულებრივ საჭირო არ არის)

### ლოგების ანალიზი {#log-analysis}

ჩართეთ დეტალური ლოგირება:
```php
// დაამატეთ wp-config.php-ში გაუმჯობესებული დებიგინგისთვის
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

შემდეგ შეამოწმეთ ლოგები შემდეგ ადგილებში:
- Ultimate Multisite ლოგები: **Ultimate Multisite** > **Logs**
- WordPress დებიგის ლოგი: `wp-content/debug.log`
- Enhance პანელის ლოგები: ხელმისაწვდომია Enhance-ის ადმინისტრაციულ ინტერფეისში

## API მითითებები (API Reference) {#api-reference}

### ავთენტიფიკაცია {#authentication}
ყველა API მოთხოვნა იყენებს Bearer ტოკენის ავთენტიფიკაციას:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### ხშირად გამოყენებული ენდპოინტები (Common Endpoints Used) {#common-endpoints-used}

**სერვერების სია:**
```
GET /servers
```

**დომეინების სია სერვერზე:**
```
GET /servers/{server_id}/domains
```

**დომეინის დამატება:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**დომეინის წაშლა:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### სრული API დოკუმენტაცია {#full-api-documentation}
სრული API დოკუმენტაცია: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## საუკეთესო პრაქტიკები (Best Practices) {#best-practices}

### უსაფრთხოება (Security) {#security}
- **API ტოკენებს არასოდეს ჩაატვირთოთ version control-ში**
- ტოკენები შეინახეთ `wp-config.php`-ში, რომელიც Git-დან გამორიცხული უნდა იყოს
- გამოიყენეთ ტოკენები შესაბამისი უფლებებით (System Administrator სრული ინტეგრაციისთვის)
- დაადგინეთ ტოკენების ვადები პროდუქციური გარემოსთვის
- პერიოდულად შეცვალეთ ტოკენები

### производительность (Performance) {#performance}
- გამოიყენეთ დეഫോल्ट DNS შემოწმების ინტერვალი (300 წამი), რათა თავიდან აიცილოთ ზედმეტი API მოთხოვნები
- მონიტორინ செய்யுங்கள் Enhance სერვერის რესურსებს დიდი მასშტაბის დომენის ოპერაციების დროს
- დაფიქრდით დომენების დამატების შეფერხების შესახებ, თუ ერთდროულად ბევრ დომენს აუკავშირებთ

### მონიტორინგი (Monitoring) {#monitoring}
- რეგულარულად შეამოწმეთ Ultimate Multisite-ის логები ინტეგრაციის შეცდომებისთვის
- დაამონტორ하세요 სერვერის მიერ წარუმატებელი დომენების დამატებების შესახებ
- გადაამოწმეთ SSL სერტიფიკატების სწორი პრო비ჯენინგი (provisioning)
- ყურადღება მიაქციეთ Enhance სერვერის შესაძლებლობებსა და დომენის ლიმიტებს

## დამატებითი რესურსები (Additional Resources) {#additional-resources}

- **Enhance ოფიციალური დოკუმენტაცია:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API დოკუმენტაცია:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance საზოგადოების ფორუმი:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub დისკუსია:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite დომენების დამაკავშირებელი გზამი:** იხილეთ ვიკიპედია გვერდი "How to Configure Domain Mapping v2"

## მხარდაჭერა (Support) {#support}

თუ პრობლემებს შეხვდებით:
1. შეამოწმეთ ზემოთ მოცემული Troubleshooting განყოფილება
2. გადახედეთ Ultimate Multisite-ის логებს
3. მიმართეთ [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. დაუკავშირდით Enhance მხარდაჭერას პანელ-სპეციფიკური საკითხებისთვის
5. შექმენით ახალი დისკუსია დეტალური შეცდომის лоგებით საზოგადოების დახმარებისთვის

## შენიშვნები (Notes) {#notes}

ეს ინტეგრაცია მხოლოდ დომეინის ალIASებს (domain aliases) უმკლავდება; Enhance ავტომატურად მართავს SSL-ს.
ინტეგრაცია მხარს უჭერს როგორც საკუთარი დომეინების დამაპასუხებელ მითითებებს, ასევე ქვე-დომენებზე დაფუძნებულ საიტებს.
ავტომატური www ქვე-დომენის შექმნა შეიძლება კონფიგურირდეს Domain Mapping პარამეტრებში.
Enhance ამ ეტაპზე მხარს უჭერს Apache კონფიგურაციებს (ხელით ხელმისაწვდომია LiteSpeed Enterprise).
Ultimate Multisite-დან დომეინის წაშლისას, ის Enhance-დან დომეინს მოიხდის, მაგრამ დაკავშირებული SSL სერტიფიკატების დაუყოვნებლივ წაშლა შესაძლოა არ მოხდეს.
