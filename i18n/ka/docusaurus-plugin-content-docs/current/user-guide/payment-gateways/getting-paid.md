---
title: გადახდის მიღება
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# ფულის მიღება (v2)

_**მნიშვნელოვანი შენიშვნა: ეს სტატია Ultimate Multisite ვერსია 2.x-ის შესახებ.**_

Ultimate Multisite-ს აქვს ჩაშენებული წევრობისა და გადახდის სისტემა. იმისთვის, რომ ჩვენი გადახდის სისტემა მუშაობდეს, ინტეგრირებულია ელექტრონული კომერციაში ყველაზე გავრცელებული საკომუნიკაციო გზები (payment gateways). Ultimate Multisite-ის ნაგულისხმევი გადახდის გზებია _Stripe_, _PayPal_ და ხელით გადახდა. თქვენ ასევე შეგიძლიათ გამოიყენოთ _WooCommerce_, _GoCardless_ და _Payfast_ გადახდებისთვის, მათი შესაბამისი add-on-ების დანერგვით.

## ძირითადი პარამეტრები

თქვენ შეგიძლიათ დააყენოთ ნებისმიერი ამ გადახდის გზები Ultimate Multisite-ის გადახდის პარამეტრებში. შეგიძლიათ იპოვოთ ეს **Ultimate Multisite მენიუ > Settings > Payments**-ში.

![Payments settings page in Ultimate Multisite showing the Payments panel](/img/config/payments-settings-page.png)

გადახდის გზის დაყენებამდე, გთხოვთ, შეხედოთ ძირითად გადახდის პარამეტრებს, რომლებსაც შეგიძლიათ დააყენოთ:

**Force auto-renew (ავტომატური განახლების დანერგვა):** ეს უზრუნველყოფს, რომ გადახდა ავტომატურად განმეორდეს ყოველი ბილინგის ციკლის ბოლოს იმ freuqency-ის მიხედვით, რომელიც მომხმარებელმა აირჩია.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0-ზე ვამოწმებთ, აქვს თუ არა აქტიური გზა ხელახლა გამოყენებადი განახლების კრედენციალი (renewal credential), სანამ ავტომატური განახლებით დატვირთული წევრობის შენახვისას. განახლების კრედენციალი შეიძლება იყოს გზის გამოწერა, გადახდის შეთანხმება, შენახული vault ტოკენი ან შესაბამისი ხელახლა გამოყენებადი გადახდის მეთოდი. თუ გზა აცხადებს, რომ არ არსებობს გამოყენებადი კრედენციალი, Ultimate Multisite ინახავს წევრობას, მაგრამ გამორთავს ავტომატურ განახლებას და აღრიცხავს გამოტოვებულ კრედენციალის მდგომარეობას, რათა ადმინისტრატორმა ან მხარდაჭერმა მომხმარებელმა გადახდის ხელახლა ავტორიზაცია მოითხოვოს განახლების თარიღამდე.

ეს ხელს უშლის წევრობის ავტომატურად განახლებას, თუ გეითਵੇ (gateway) მხოლოდ ერთჯერადი გადახდების შეგროვებას იძლევა. გეითਵੇ Add-ons-მა უნდა დაადასტუროს, რომ განმეორებადი გადახდები ინახავს ხელახლა გამოყენებად მონაცემებს, განსაკუთრებით მაშინ, როდესაც გეითვე მხარს უჭერს როგორც ერთჯერად შეკავებას (one-time capture), ასევე ვარდებულების/სუბスクრიფციის გადახდის რეჟიმებს.

**გვერდების უფლება გადახდის მეთოდის გარეშე** **მეთოდი:** ამ ვარიანტის ჩართვის შემთხვევაში, თქვენ კლიენტს რეგისტრაციის პროცესში ფინანსური ინფორმაციის შეყვანა არ დასჭირდება. ეს საჭირო იქნება მხოლოდ იმ შემთხვევაში, თუ საპერიოდი (trial period) იწურება.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**ინვოისის გაგზავნა გადახდის დადასტურების შემდეგ:** ეს გთავაზობთ ვარიანტს, თუ გაგზავნით თუ არა ინვოისს გადახდის შემდეგ. ყურადღება მიაქციეთ, რომ მომხმარებლებმა შეძლებენ წვდომას თავიანთი გადახდების ისტორიაზე საკუთარ სუბსაიტის დაფაზე (dashboard). ეს ვარიანტი არ ვრცელდება Manual Gateway-ზე.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**ინვოისის ნომრის სქემა:** აქ შეგიძლიათ აირჩიოთ ან გადახდის საწყისი კოდი (payment reference code), ან თანმიმდევრული ნომრების სქემა. თუ ინვოისებისთვის გადახდის საწყისი კოდს ირჩევთ, არაფრის კონფიგურირება არ გჭირდებათ. თუ თანმიმდევრულ სქემას აირჩევთ, თქვენ დაგჭირდებათ კონფიგურაცია **შემდეგი ინვოისის ნომრის** (ეს ნომერი იქნება გამოყენებული შემდეგ სისტემაში გენერირებულ ინვოისზე. ის ერთი ერთეულით იზრდება ყოველ ახალი ინვოის შექმნისას. შეგიძლიათ შეცვალოთ და შეინახოთ, რათა გადახდეთ ინვოისების თანმიმდევრული ნომრის აღს Reset-ი კონკრეტულ მნიშვნელობაზე) და **ინვოისის ნომრის პრეፊქსი**.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## გეითვეების (gateways) პოვნა:

გადახდის გეითვეების დაყენება შეგიძლიათ იმავე გვერდზე (**Ultimate Multisite > Settings > Payments**). **აქტიური გადახდის გეითვეების** ქვემოთ, თქვენ შეძლებთ ნახოთ: _Stripe_, _Stripe_ Checkout, _PayPal_ და _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

ყოველი გადახდის გეითვეებისთვის განკუთვნილი ცალკე სტატია გაგზავნილია, რომელიც დაგეხმარება მათი დაყენების ნაბიჯებში. ეს ბმულებს შეგიძლიათ იპოვოთ ქვემოთ:

თქვენ შეგიძლიათ ნახოთ და შეცვალოთ გადახდის დეტალები:

![Payment edit interface](/img/admin/payment-edit.png)

აი, გადახდის რედაქტირების გვერდის სრული ხედვა:

![Payment edit full interface](/img/admin/payment-edit-full.png)

აი, ასევე გადახდის გეითვეების პარამეტრების სრული ხედვა:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Stripe გეითვების დაყენება**

**PayPal გეითვების დაყენება**** **

**მანუალური გადახდების დაყენება**

ახლა, თუ გსურთ გამოიყენოთ _WooCommerce_, _GoCardless_ ან _Payfast_ თქვენი გადახდის გეითვეებად, თქვენ დაგჭირდებათ მათ **add-ons-ის (დამატებითი ფუნქციონალის) ინსტალირება და კონფიგურირება**.

### როგორ დავინსტალიროთ WooCommerce add-on:

ჩვენ გვესმის, რომ ზოგიერთ ქვეყანაში _Stripe_ და _PayPal_ ხელმისაწვდომია, რაც შეზღუდავს ან აფერხებს Ultimate Multisite მომხმარებლებისთვის ჩვენი პლაგინის ეფექტურ გამოყენებას. ამიტომ, ჩვენ შევქმენით add-on, რომელიც ინტეგრირდება _WooCommerce_-თან, რომელიც ძალიან პოპულარული ელექტრონული კომერციის პლაგინი არის. მსოფლიოს დეველოპერებმა შექმნეს add-ons სხვადასხვა გადახდის გეითვეების ინტეგრირებისთვის ამ პლაგინთან. ჩვენ გამოვიყენეთ ეს, რომ გავაფართოოთ ის გადახდის გეითვეები, რომლებსაც შეგიძლიათ გამოიყენოთ Ultimate Multisite ბில்ინგ სისტემასთან ერთად.

**მნიშვნელოვანია:** Ultimate Multisite-ის დამატება WooCommerce-თან ინტეგრაციისთვის საჭიროებს, რომ WooCommerce იყოს აქტიური სულ მცირე თქვენს მთავარ საიტზე.

პირველ რიგში, გადადით add-ons გვერდზე. შეგიძლიათ იპოვოთ ის **Ultimate Multisite > Settings**-ის მეშვეობით. დაინახავთ Add-ons ცხრილს. დააწკაპუნეთ **Check our Add-ons**-ზე.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

**Check our Add-ons**-ზე დაწკაპუნების შემდეგ, გადაგითანებთ add-ons გვერდზე. აქ შეგიძლიათ იპოვოთ ყველა Ultimate Multisite add-on. დააწკაპუნეთ **Ultimate Multisite: WooCommerce Integration** add-on-ზე.

![Add-ons page listing Ultimate Multisite add-ons including WooCommerce Integration](/img/addons/addons-page.png)

გამო გამოჩნდება ფანჯარა add-on დეტალებით. უბრალოდ დააწკაპუნეთ **Install Now**-ზე.

<!-- Screenshot unavailable: Ultimate Multisite WooCommerce Integration add-on details dialog with Install Now button -->

ინსტალაციის დასრულების შემდეგ, გადაგითანებთ plugins გვერდზე. აქ უბრალოდ დააწკაპუნეთ **Network Activate**-ზე და WooCommerce add-on გააქტიურდება თქვენს ქსელში.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the WooCommerce Integration add-on -->

გააქტიურების შემდეგ, თუ თქვენს ვებსაიტზე ჯერ კიდევ არ არის დაინსტალირებული და გააქტიურილი WooCommerce პლაგინი, მიიღებთ შეხსენებას.

<!-- Screenshot unavailable: Admin notice reminding the administrator to install and activate the WooCommerce plugin -->

მეტი ინფორმაციის მისაღებად WooCommerce Integration add-on-ზე **დააწკაპუნეთ აქ**.

### GoCardless add-on-ის ინსტალირება:

_GoCardless_ add-on-ის ინსტალირების ნაბიჯები თითქმის იგივეა, რაც _WooCommerce_-ის add-on-ისთვის. გადადით add-ons გვერდზე და აირჩიეთ **Ultimate Multisite: GoCardless Gateway** add-on.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

გამო გამოჩნდება add-on-ის ფანჯარა. დააჭირეთ **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

ინსტალაციის დასრულების შემდეგ, თქვენ გადახვიდებით plugins გვერდზე. აქ უბრალოდ დააჭირეთ **Network Activate** და _GoCardless_ add-on გააქტიურდება თქვენს ქსელში.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

როგორ დაიწყოთ _GoCardless_ gateway-ის გამოყენება, **გაიკითხეთ ეს სტატია**.

### Payfast add-on-ის ინსტალირება:

გადადით add-ons გვერდზე და აირჩიეთ **Ultimate Multisite: Payfast Gateway** add-on.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

გამო გამოჩნდება add-on-ის ფანჯარა. დააჭირეთ **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

ინსტალაციის დასრულების შემდეგ, თქვენ გადახვიდებით plugins გვერდზე. აქ უბრალოდ დააჭირეთ **Network Activate** და _Payfast_ add-on გააქტიურდება თქვენს ქსელში.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the Payfast Gateway add-on -->
