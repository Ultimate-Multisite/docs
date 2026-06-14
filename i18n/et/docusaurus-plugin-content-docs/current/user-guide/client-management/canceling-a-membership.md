---
title: Liikmembershipestlikkumise tühistamine
sidebar_position: 2
_i18n_hash: a34353ea4630d9815bde4ca7bcfeb95d
---
# Liikuse korraldamise tühistamine (v2)

_**TÄHTISIKU MÄÄRKUS: See artikli viitab Ultimate Multisite versioonile 2.x.**_

Liikuse korraldamise tühistamine teie kliendi poolest on suhteeltult lihtne.

Kui kasutaja soovib oma liiklust tühistada, peab ta esmalt pääsemise **Account** lehel.

Seal peab klõpsama otsustamise **Ohtlikku piiri (Danger Zone)** ja klikkima **Konto eemaldamiseks**.

![Account page Danger Zone with Delete Account button](/img/account-page/danger-zone.png)

Avaneb modul, mis küsib kinnitust. Peab ta sisse lülitada **Konto eemaldamise kinnitus** välja ja klikkima **Konto eemaldamiseks**.

![Confirm Account Deletion dialog](/img/account-page/delete-account-confirm.png)

See logib neid veebist ja tühistab nende liiklust teie võrku, samuti eemaldab nende lehe teie võrkust.

![Logged out after account deletion](/img/account-page/logged-out-after-delete.png)

![Membership canceled confirmation](/img/account-page/membership-canceled.png)

**Tähtis:** Pärustage, et see toiming ei eksklüdi kliendit teie võrkust, kuna kliendil võib olla rohkem kui üks liiklus või mitte ühegi liikluse seotud.

![Customer still exists in the network after cancellation](/img/admin/customer-after-cancel.png)

![Customer with no active memberships](/img/admin/memberships-customer-empty.png)
