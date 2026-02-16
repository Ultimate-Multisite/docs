---
title: Pagbababa ng Plano
sidebar_position: 7
_i18n_hash: dc3ac67048002b04bfb952a01cf289c9
---
# Pag-downgrade ng plan (v2)

_**MAHALAGANG PAALALA: Ang artikulong ito ay tumutukoy sa Ultimate Multisite version 2.x.**_

Ang pag-downgrade ng plan o subscription ay karaniwang ginagawa ng iyong mga kliyente kung limitado ang kanilang budget o kung napagdesisyunan nilang hindi nila kailangan ng maraming resources para patakbuhin ang kanilang subsite.

## Paano mag-downgrade ng plan

Maaaring i-downgrade ng iyong mga kliyente ang kanilang plan anumang oras sa pamamagitan ng pag-login sa admin dashboard ng kanilang subsite at pag-click sa **Change** sa ilalim ng kanilang account page.

![Account page na may Change button sa ilalim ng membership](/img/admin/memberships-list.png)

Kapag na-click ang **Change** button, ididirekta ang user/kliyente sa checkout page kung saan maaari nilang piliin ang plan na gusto nilang palitan sa kanilang subscription.

![Checkout page na nagpapakita ng mga plan option para sa downgrade](/img/admin/memberships-list.png)

Sa halimbawang ito, dina-downgrade natin ang plan mula **Premium** patungong **Free**.

Para magpatuloy, kailangan lang ng user na i-click ang **Complete Checkout** button. Ibabalik sila nito sa account page na may mensahe tungkol sa pending na pagbabago sa membership. Ang mga pagbabago ay magkakabisa sa **susunod na billing cycle** ng customer.

![Account page na nagpapakita ng mensahe tungkol sa pending membership change](/img/admin/memberships-list.png)

### Ano ang nangyayari kapag nag-downgrade ng plan ang isang user

Mahalagang tandaan na ang pag-downgrade ng plan ay hindi nagbabago sa kasalukuyang configuration ng subsite ng user.

Hindi nito awtomatikong binabago ang site template dahil ang pagpapalit ng site template ay ganap na magbubura at magri-reset ng subsite. Ito ay para maiwasan ang hindi kinakailangang pagkawala ng data. Kaya mananatiling buo ang disk space, themes, plugins atbp. maliban sa mga posts.

Nauunawaan namin na ang pangunahing alalahanin mo ay ang mga limits at quotas na itinakda mo sa bawat plan, ngunit kailangan naming isaalang-alang ang pinsalang magagawa sa subsite ng user kung tatanggalin o babaguhin namin ang alinman sa mga configuration nito.

Para sa mga posts na lumampas sa limit na itinakda sa plan, mayroon kang 3 magkakaibang opsyon: **Keep the posts as it** *,* **Move the posts to trash** *,* o **Move the posts to draft** *.* Maaari mong i-configure ito sa ilalim ng Ultimate Multisite settings.

![Mga opsyon kapag lumampas sa post limit sa Ultimate Multisite settings](/img/config/settings-sites.png)

### Ano ang nangyayari sa bayarin

Sa version 2.0, hindi na kailangan ng anumang adjustments sa bayarin pagdating sa proration.

Ito ay dahil maghihintay ang sistema na **makumpleto ng kasalukuyang membership ang billing cycle nito bago** magkabisa ang bagong plan/membership. Ang bagong halaga ng billing para sa bagong membership ay awtomatikong ilalapat at sisingilin sa susunod na billing cycle.
