---
title: ხელით გადახდების დაყენება
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# ხელით გადახდების დაყენება (v2)

_**მნიშვნელოვანი შენიშვნა: ეს სტატია Ultimate Multisite ვერსია 2.x-ის შესახებ.**_

ხელით გადახდები არის გზა, რომ თქვენ შემოგთავაზოთ სხვა გადახდის მეთოდები, თუ მომხმარებლებისთვის **Stripe** ან **PayPal** ხელმისაწვდომი არ არის. ეს შეიძლება იყოს ელექტრონული გადარიცხვა (wire), საბანკო გადარიცხვა ან ნებისმიერი სხვა გადახდის მეთოდი, რომელიც თქვენს მომხმარებლებს ადგილობრივად სჭირდებათ.

## როგორ ჩავრთოთ ხელით გადახდები

ხელით გადახდების დაყენება ძალიან მარტივია. თქვენ უბრალოდ უნდა გაააქტიუროთ ის "Payment Gateways"-ის ქვეშ და მიუთითოთ დეტალური ინსტრუქციები, თუ როგორ უნდა გააკეთოს მომხმარებელმა გადახდა.

პირველ რიგში, გადადით **Ultimate Multisite > Settings > Payments**-ზე. "Payment Gateways"-ის ქვემოთ ჩართეთ **Manual**. დაინახავთ, რომ თქვენთვის გამოჩნდება **Payment Instructions** (გადახდის ინსტრუქციების) ყუთი.

ამ ყუთში დაამატეთ ინფორმაცია, რომელიც თქვენს მომხმარებელს დასჭირდება გადახდის განსახორციელებლად. ეს შეიძლება იყოს თქვენი საბანკო ანგარიშის დეტალები და თქვენი ელფოსტა, რათა მომხმარებელს შეძლოს თქვენთან გადახდის დადასტურების გაგზავნა, მაგალითად.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

აი, ხელით გადახდების პარამეტრების ინტერფეისი:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

დაყენების შემდეგ, უბრალოდ დააწექით **Save Settings** (პარამეტრების შენახვა), და ყველაფერი დასრულებულია. როდესაც მომხმარებლები თქვენს ქსელში დარეგისტრირდებიან, მათ მიიღებენ შეტყობინებას, რომ თქვენი ინსტრუქციები მიიღებენ შესყიდვის დასასრულებლად.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

და მათ ასევე მიიღებენ შეტყობინებას თქვენს **Thank You** (გმადლობთ) გვერდზე გადახდის ინსტრუქციებით.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## ხელით გადახდების დადასტურება

მანუალური გადახდის დადასტურებისთვის, გადადით მარცხენა ზოლის **Payments** მენიუში. იქ თქვენ დაინახავთ თქვენი ქსელის ყველა გადახდას და მათ დეტალებს, მათ შორის მათი **status**. მანამ, სანამ თქვენ მას ხელით არ შეცვლით, ნებისმიერი მანუალური გადახდა ყოველთვის **Pending** სტატუსით იქნება.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

შეიყვანეთ გადახდის გვერდი და დააჭირეთ **reference code**-ს. ამ გვერდზე გაქვთ ყველა დეტალი პენდინგ გადახდის შესახებ, როგორიცაა reference ID, პროდუქტები, დროის შტამპები და სხვა.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

მარჯვენა სვეტში შეგიძლიათ შეცვალოთ გადახდის სტატუსი. მისი **Completed**-ად შეცვლა და **Activate Membership** ოფციონის ჩართვა გააქტიურებს თქვენი მომხმარებლის საიტს და მათი წევრობა გახდება აქტიური.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
