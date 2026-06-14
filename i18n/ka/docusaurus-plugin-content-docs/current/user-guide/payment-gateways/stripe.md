---
title: Stripe-ის დაყენება
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe გეითის დაყენება (v2)

_**მნიშვნელოვანი შენიშვნა: ეს სტატია მომზადებული Ultimate Multisite-ის ვერსია 2.x-ისთვის.**_

ჩვენს გადახდის პარამეტრების გვერდზე თქვენ შეგიძლიათ აქტიური გააკეთოთ გადახდის მეთოდები: Stripe, Stripe Checkout, PayPal და მექანიკური (Manual). ამ სტატიაში განვიხილავთ ინტეგრაციას **Stripe**-თან.

## Stripe-ის ჩართვა

იმისათვის, რომ Stripe გახადოთ ხელმისაწვდომი გადახდის გეითი თქვენს ქსელზე, გადადით **Ultimate Multisite > Settings > Payments**-ში და დააჭირეთ გადამრთველს **Stripe**-ის ან **Stripe Checkout**-ის გვერდით Active Payment Gateways განყოფილებაში.

![Stripe-ის ჩართვა აქტიურ გადახდის გეითებში](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** ეს მეთოდი აჩვენებს სივრცეს საკრედიტო ბარათის ნომრის შეყვანისთვის გადახდის პროცესში.

![Stripe-ის ინლაინ საკრედიტო ბარათის ველი გადახდის დროს](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** ეს მეთოდი მომხმარებელს გადაამისამართებს Stripe Checkout გვერდზე გადახდის პროცესში.

![Stripe Checkout-ის გადამისამართების გვერდი გადახდის დროს](/img/config/settings-payment-gateways.png)

Stripe API გასაღებების მიღება

მას შემდეგ, რაც Stripe გახდება ხელმისაწვდომი გადახდის გეითი, თქვენ დაგჭირდებათ **Stripe Publishable Key** და **Stripe Secret Key**-ის ველი შევსება. ეს შეგიძლიათ მიიღოთ თქვენი Stripe ანგარიშზე შესვლით.

_**შენიშვნა:** შეგიძლიათ ჩართოთ **Sandbox mode**, რათა შეამოწმოთ, მუშაობს თუ არა გადახდის მეთოდი._

![Stripe API გასაღებების ველი და Sandbox-ის რეჟიმის გადამრთველი](/img/config/settings-payment-gateways.png)

თქვენს Stripe Dashboard-ზე, დააწკაპუნეთ **Developers**-ზე ზედა მარჯვენა კუთხეში და შემდეგ **API Keys**-ზე მარცხენა მენიუდან.

![Stripe dashboard Developers განყოფილება API გასაღებებით](/img/config/settings-payment-gateways.png)

თქვენ შეგიძლიათ გამოიყენოთ **Test Data** (იმის შესამოწმებლად, რომ ინტეგრაცია მუშაობს თქვენს პროდუქციულ სೈტზე) ან არ გამოიყენოთ. ამის შეცვლა შეგიძლიათ გადახვიდეთ **Viewing test data** გადამრთველის (toggle) ღილაკზე.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

გააკეთეთ მნიშვნელობის დაკოპირება **Publishable key**-დან და **Secret key**-დან, **Token** სვეტიდან და ჩასვით Ultimate Multisite Stripe Gateway-ის ველით. შემდეგ დააწექით **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Stripe Webhook-ის დაყენება

Stripe აგზავნის Webhook მოვლენებს, რომლებიც Ultimate Multisite-ს აცნობებს ყოველ ჯერზე, როდესაც **თქვენს stripe ანგარიშზე** რაიმე მოვლენა ხდება.

დააწექით **Developers** და შემდეგ მარცხენა მენიუდან აირჩიეთ **Webhooks**. შემდეგ მარჯვენა მხარეს დააწექით **Add endpoint** (*).

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

გჭირდებათ **Endpoint URL** (*). Ultimate Multisite ავტომატურად აგენერირებს Endpoint URL-ს, რომლის ნახვა შეგიძლიათ **Ultimate Multisite Stripe Gateway** განყოფილების **Webhook Listener URL** ველიდან immediately ქვემოთ.

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

დააკოპირეთ endpoint URL და ჩასვით Stripe-ის **Endpoint URL** ვადში.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

შემდეგი ნაბიჯია მოვლენის (Event) შერჩევა (*). ამ ვარიანტის ქვეშ, უბრალოდ დააკლიკეთ **Select all events** ყუთზე და შემდეგ დააწექით **Add events**. ამის შემდეგ დააწექით **Add Endpoint**, რომ ცვლილებები შეინახოთ.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

ეს არის თქვენი Stripe გადახდის ინტეგრაცია დასრულებული!
