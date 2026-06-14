---
title: Pagbaba ng Plano
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Pagbaba ng plano (v2)

_**MAHALAGANG PAUNAWA: Ang artikulong ito ay tumutukoy sa Ultimate Multisite version 2.x.**_

Ang pagbababa o downgrade ng plano o subscription ay isang karaniwang ginagawa ng mga kliyente mo kung mayroon silang limitadong budget o kung nagpasya na hindi nila kailangan ng maraming resources para patakbuhin ang kanilang subsite.

## Paano mag-downgrade ng plano

Maaaring ibaba ng iyong mga kliyente ang kanilang plano anumang oras sa pamamagitan ng pag-log in sa admin dashboard ng kanilang subsite at pagpindot sa **Change** sa ilalim ng kanilang account page.

![Customer account page with Your Membership card and Change button](/img/account-page/membership-change-button.png)

Pagkatapos pindutin ang **Change** button, ang user/client ay ire-redirect sa checkout page kung saan maaari nilang piliin ang plano na gusto nilang baguhin para sa kanilang subscription.

![Downgrade plan options page on the customer side](/img/account-page/downgrade-picker.png)

Sa halimbawang ito, binababa natin ang plano mula **Premium** patungong **Free**.

Para magpatuloy ang user, kailangan lang nilang pindutin ang **Complete Checkout** button. Ibabalik din ito sa kanila sa account page na nagpapakita ng mensahe tungkol sa nakabinbing pagbabago para sa membership. Ang mga pagbabago ay magkakabisa sa susunod na **billing cycle** ng customer.

![Account page showing pending membership change banner](/img/account-page/pending-change.png)

### Ano ang nangyayari kapag nag-downgrade ang isang user ng kanilang plano

Mahalagang tandaan na ang pagbababa ng plano ay hindi magpapalit sa kasalukuyang configuration sa subsite ng user.

Hindi nito awtomatikong babaguhin ang site template dahil ang pagbabago sa site template ay lubusang magbubura at magre-reset ng subsite. Ginagawa ito upang maiwasan ang hindi kinakailangang pagkawala ng data. Kaya, mananatiling buo ang disk space, themes, plugins, atbp., maliban sa mga posts.

Naiintindihan namin na ang pangunahing alalahanin mo ay ang mga limit at quota na itinakda sa ilalim ng bawat plano, pero kailangan nating isaalang-alang ang pinsalang idudulot nito sa subsite ng user kung buburahin o babaguhin natin ang alinman sa mga configuration nito.

Para sa mga post na lumalampas sa limit na itinakda sa plano, mayroon kang 3 opsyon: **Panatilihin ang mga post** *,* **Ilipat ang mga post sa trash** *,* o **Ilipat ang mga post sa draft** *.* Maaari mong i-configure ito sa ilalim ng Ultimate Multisite settings.

![Network Admin Settings Sites page showing post-limit-exceeded behaviour options](/img/account-page/settings-sites-post-limit.png)

### Ano ang mangyayari sa bayad

Sa bersyon 2.0, hindi na kailangan ng anumang pag-aayos tungkol sa proration sa bayad.

Ito ay dahil aabutin ng sistema ang kasalukuyang membership upang **matapos ang billing cycle bago** magkabisa ang bagong plano/membership. Ang bagong halaga ng bayad para sa bagong membership ay awtomatikong ia-apply at i-charge sa susunod na billing cycle.
