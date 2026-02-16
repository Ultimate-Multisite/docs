---
title: Pag-upgrade ng isang Plan
sidebar_position: 11
_i18n_hash: 83ee30a9547c0ea02bd1338ab7ec3f69
---
# Pag-upgrade ng Plan (v2)

_**MAHALAGANG PAALALA: Ang artikulong ito ay tumutukoy sa Ultimate Multisite bersyon 2.x.**_

Maaaring mag-upgrade ng kanilang mga plan ang iyong mga customer anumang oras. Maaari silang mag-upgrade sa ibang plan o bumili ng anumang karagdagang mga serbisyo o package na iniaalok mo sa iyong network.

Sa tutorial na ito, tatalakayin natin kung paano sila makakapag-upgrade ng kanilang plan at kung ano ang mangyayari pagkatapos ng proseso ng pag-upgrade.

Para ma-upgrade ang kanilang plan, dapat puntahan ng iyong mga customer ang kanilang dashboard at pumunta sa pahina ng **Account**.

![Customer dashboard na may link sa pahina ng Account](/img/admin/memberships-list.png)

Sa pahina ng Account, ipapakita sa kanila ang kanilang kasalukuyang membership at ang plan na nakaugnay dito. Para mag-upgrade sa ibang plan, kailangan nilang i-click ang **Change** sa kanang sulok sa itaas ng seksyon ng **Your Membership**.

![Seksyon ng Your Membership na may Change button](/img/admin/memberships-list.png)

Ire-redirect sila sa isang checkout form kung saan ipapakita ang lahat ng available na mga plan.

Makikita rin nila ang **mga serbisyo at package na available para sa kanilang kasalukuyang plan**, kung sakaling gusto lang nilang bumili ng partikular na serbisyo o package (tulad ng unlimited visits o disk space sa ating halimbawa dito), at hindi mag-upgrade ng plan.

![Checkout form na nagpapakita ng mga available na plan at package](/img/admin/memberships-list.png)

Pagkatapos nilang piliin ang produktong gusto nilang bilhin, makikita nila kung magkano ang kailangang bayaran ngayon - hindi kasama ang anumang existing na credit - at kung magkano ang sisingilin sa kanila sa susunod na billing date.

Karaniwan, kung ang produkto ay ibang plan at ang bayad ay gagawin sa pagitan ng membership charge, makakatanggap sila ng credit para sa halagang binayad sa unang plan.

![Buod ng pag-upgrade na may credit at susunod na halaga ng billing](/img/admin/memberships-list.png)

Kung pipili sila ng plan o package na hindi magbabago ng anuman sa kasalukuyang subscription, makakakita sila ng mensaheng nagpapaliwanag nito.

![Mensahe kapag ang napiling plan ay hindi nagbabago sa subscription](/img/admin/memberships-list.png)

Pagkatapos makumpleto ang checkout, ang bagong (mga) produkto ay idadagdag sa account ng iyong mga customer at lahat ng mga limit o feature ng bagong (mga) produkto ay agad na idadagdag dito: visits, disk space, posts, atbp...

## 

## 

## Mga Path ng Upgrade at Downgrade

Sa bawat isa sa iyong mga produkto, magkakaroon ka ng tab na **Up & Downgrades**. Ang unang opsyon sa tab na iyon ay isang field na tinatawag na **Plan Group**.

Ang **Plan groups** ang nagpapahintulot sa iyo na ipaalam sa Ultimate Multisite na ang ilang mga plan ay nabibilang sa parehong "pamilya", at samakatuwid ay dapat gamitin para makabuo ng mga opsyon ng upgrade/downgrade path.

![Tab ng Up and Downgrades na may field ng Plan Group](/img/config/product-upgrades.png)

Halimbawa, mayroon kang available na **Free plan**, isang **Basic Plan** at isang **Premium Plan**. Gusto mong ang mga user na naka-subscribe sa **Free Plan** ay makakapag-upgrade lamang sa **Premium Plan** at ayaw mong makita nila ang "Basic Plan" bilang opsyon sa pag-upgrade. Ang kailangan mo lang gawin ay magtalaga ng parehong pangalan ng plan group para sa parehong Free at Premium plan gaya ng ipinapakita sa mga screenshot sa ibaba.

![Free Plan na may nakatalaga na High End plan group](/img/config/product-upgrades.png)

![Premium Plan na may nakatalaga na High End plan group](/img/config/product-upgrades.png)

Ang dapat nitong gawin ay sabihin sa Ultimate Multisite na may "pamilya" ng mga plan sa network na tinatawag na **High End**. Kapag nag-aalok ng mga upgrade o downgrade, tanging ang mga plan mula sa parehong pamilya ang ipapakita bilang opsyon para sa user.
