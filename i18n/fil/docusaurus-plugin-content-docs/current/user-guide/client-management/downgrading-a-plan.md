---
title: Pag-downgrade ng Plano
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Pag-downgrade ng plan (v2) {#downgrading-a-plan-v2}

_**MAHALAGANG TANDAAN: Tumutukoy ang artikulong ito sa Ultimate Multisite bersyon 2.x.**_

Ang pag-downgrade ng plan o subscription ay karaniwang aksyon na maaaring gawin ng iyong mga client kung may limitado silang badyet o napagpasyahan nilang hindi nila kakailanganin ng maraming resource para patakbuhin ang kanilang subsite.

## Paano mag-downgrade ng plan {#how-to-downgrade-a-plan}

Maaaring i-downgrade ng iyong mga client ang kanilang plan anumang oras sa pamamagitan ng pag-log in sa kanilang subsite admin dashboard at pag-click sa **Change** sa ilalim ng kanilang Account page.

![Account page ng customer na may Your Membership card at Change button](/img/account-page/membership-change-button.png)

Pagkatapos i-click ang **Change** button, ire-redirect ang user/client sa checkout page kung saan maaari nilang piliin ang plan na gusto nilang pagpalitan para sa kanilang subscription.

![Page ng mga opsyon sa pag-downgrade ng plan sa panig ng customer](/img/account-page/downgrade-picker.png)

Sa halimbawang ito, dina-downgrade natin ang plan mula **Premium** patungong **Free**.

Para magpatuloy, kailangan lang ng user na i-click ang **Complete Checkout** button. Pagkatapos, ibabalik sila nito sa Account page na nagpapakita ng mensahe tungkol sa nakabinbing pagbabago para sa membership. Magkakabisa ang mga pagbabago sa **susunod na billing cycle** ng customer.

![Account page na nagpapakita ng banner ng nakabinbing pagbabago sa membership](/img/account-page/pending-change.png)

### Ano ang mangyayari kapag nag-downgrade ng plan ang isang user {#what-happens-when-a-user-downgrades-their-plan}

Mahalagang tandaan na ang pag-downgrade ng plan ay hindi nagbabago sa kasalukuyang configuration sa subsite ng user.

Hindi nito awtomatikong binabago ang site template dahil ang pagbabago ng site template ay ganap na bubura at magre-reset sa subsite. Ito ay para maiwasan ang hindi kinakailangang pagkawala ng data. Kaya mananatiling buo ang disk space, mga theme, mga plugin, atbp., maliban sa mga post.

Nauunawaan namin na ang pangunahing alalahanin mo ay ang mga limitasyon at quota na itinakda mo sa ilalim ng bawat plan, pero kailangan naming isaalang-alang ang pinsalang magagawa nito sa subsite ng user kung buburahin o babaguhin namin ang alinman sa mga configuration nito.

Para sa mga post na lumalampas sa limitasyong itinakda sa plan, mayroon kang 3 magkakaibang opsyon: **Panatilihin ang mga post gaya nito** *,* **Ilipat ang mga post sa trash** *,* o **Ilipat ang mga post sa draft** *.* Maaari mo itong i-configure sa ilalim ng mga setting ng Ultimate Multisite.

![Page ng Network Admin Settings Sites na nagpapakita ng mga opsyon sa kilos kapag lumampas sa limitasyon ng post](/img/account-page/settings-sites-post-limit.png)

### Ano ang mangyayari sa pagbabayad {#what-happens-to-the-payment}

Sa bersyon 2.0, hindi na ito nangangailangan ng anumang adjustment sa pagbabayad pagdating sa proration.

Ito ay dahil hihintayin ng system na **makumpleto muna ang billing cycle** ng kasalukuyang membership bago magkabisa ang bagong plan/membership. Awtomatikong ilalapat at sisingilin sa susunod na billing cycle ang bagong halaga ng bayad para sa bagong membership.
