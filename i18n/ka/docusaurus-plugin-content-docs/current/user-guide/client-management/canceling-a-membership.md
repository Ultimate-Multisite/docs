---
title: წევრობის გაუქმება
sidebar_position: 2
_i18n_hash: a34353ea4630d9815bde4ca7bcfeb95d
---
# წევრობის გაუქმება (v2) {#canceling-a-membership-v2}

_**მნიშვნელოვანი შენიშვნა: ეს სტატია Ultimate Multisite ვერსია 2.x-სთვის.**_

თქვენი მომხმარებლის მხრიდან წევრობის გაუქმება საკმაოდ მარტივია.

თუ თქვენს მომხმარებელს სურს თავისი წევრობის გაუქმება, მან პირველ რიგში უნდა შევიდეს თავის ****Account**** გვერდზე.

იქ, მან უნდა დააწკაპუნოს **Danger Zone**-ზე და შემდეგ **Delete Account**-ზე.

![Account page Danger Zone with Delete Account button](/img/account-page/danger-zone.png)

გამოვა მოდული, რომელიც მოითხოვს მათ დადასტურებას. მათ უნდა ჩართონ **Confirm Account Deletion** ოფცია და დააწკაპუნონ **Delete Account**-ზე.

![Confirm Account Deletion dialog](/img/account-page/delete-account-confirm.png)

ეს გამოაცილებთ საიტის სისტემიდან და ვეღარ გექნება წევრობა თქვენს ქსელში, ასევე წავშლით მათ საიტს თქვენი ქსელიდან.

![Logged out after account deletion](/img/account-page/logged-out-after-delete.png)

![Membership canceled confirmation](/img/account-page/membership-canceled.png)

**მნიშვნელოვანია:** გაითვალისწინეთ, რომ ეს მოქმედება არ გამორიცხავს მომხმარებელს თქვენი ქსლიდან, რადგან მომხმარებელს შეიძლება ჰქონდეს ერთზე მეტი წევრობა ან საერთოდ არცერთი წევრი იყოს დაკავშირებული მასთან.

![Customer still exists in the network after cancellation](/img/admin/customer-after-cancel.png)

![Customer with no active memberships](/img/admin/memberships-customer-empty.png)
