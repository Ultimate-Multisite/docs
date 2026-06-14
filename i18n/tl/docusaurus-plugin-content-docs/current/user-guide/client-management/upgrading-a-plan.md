---
title: Pag-upgrade ng Plano
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Pag-upgrade ng Plano (v2)

_**MAHALAGANG PAUNAWA: Ang artikulong ito ay tumutukoy sa Ultimate Multisite version 2.x.**_

Ang inyong mga customer ay may kakayahang mag-upgrade ng kanilang mga plano anumang oras. Maaari silang mag-upgrade sa ibang plano o bumili ng anumang karagdagang serbisyo o package na inaalok ninyo sa inyong network.

Sa tutorial na ito, tatalakayin natin kung paano nila ma-a-upgrade ang kanilang plano at ano ang mangyayari pagkatapos ng proseso ng upgrade.

Para mag-upgrade ng kanilang plano, dapat i-access ng inyong mga customer ang kanilang dashboard at pumunta sa pahina **Account**.

![Customer subsite dashboard with Account menu link visible](/img/account-page/account-menu.png)

Sa pahinang Account, ipapakita sa kanila ang kanilang kasalukuyang membership at ang plan na nauugnay dito. Upang mag-upgrade sa ibang plano, kailangan nilang i-click ang **Change** sa kanang itaas ng seksyong **Your Membership**.

![Account page Your Membership card with Change button](/img/account-page/membership-change-button.png)

Magsasagawa sila ng redirect patungo sa isang checkout form kung saan ipapakita ang lahat ng mga available na plano.

Makikita rin nila ang mga **services at packages na available para sa kanilang kasalukuyang plano**, sakaling gusto lang nilang bumili ng partikular na serbisyo o package (tulad ng unlimited visits o disk space sa ating halimbawa dito), at hindi mag-upgrade ng plano.

![Upgrade picker showing available plans and packages on the customer side](/img/account-page/upgrade-picker.png)

Pagkatapos nilang piliin ang produktong gusto nilang bilhin, makikita nila kung magkano ang kailangang bayaran nila ngayon—hindi kasama ang anumang umiiral na credit—at kung magkano ang mababawas sa kanila sa susunod na petsa ng pag-bill.

Karaniwan, kung ang produktong pinili ay isa pang plano at ang bayad ay gagawin sa pagitan ng membership charge, makakatanggap sila ng credit para sa halagang nabayaran sa unang plano.

![Upgrade payment summary showing credit applied and next billing amount](/img/account-page/upgrade-summary.png)

Kung pipiliin nila ang isang plano o package na walang magbabago sa kasalukuyang subscription, makakakita sila ng mensahe na nagpapaliwanag nito.

![Notice when the selected plan does not change the subscription](/img/account-page/upgrade-no-change.png)

Pagkatapos matapos ang checkout, ang mga bagong produkto ay idadagdag sa account ng iyong mga customer at lahat ng limitasyon o features ng mga bagong produkto ay agad na idadagdag dito: visits, disk space, posts, atbp...

##

## Mga Daanan para Mag-upgrade at Mag-downgrade (Upgrade and Downgrade Paths)

Sa bawat produkto mo, magkakaroon ka ng tab na **Up & Downgrades**. Ang unang opsyon sa tab na iyan ay isang field na tinatawag na **Plan Group**.

Ang mga **plan group** ang nagpapahintulot sa Ultimate Multisite na malaman na ang ilang mga plano ay kabilang sa iisang "pamilya", at samakatuwid, dapat itong gamitin para bumuo ng mga opsyon para sa pag-upgrade/downgrade path.

![Product edit Up and Downgrades tab with Plan Group field](/img/config/product-upgrades-plan-group.png)

Halimbawa, mayroon kang **Free plan**, isang **Basic Plan**, at isang **Premium Plan** na available. Gusto mong ang mga user na naka-subscribe sa **Free Plan** ay makapag-upgrade lamang sa **Premium Plan** at hindi mo sila gustong makita ang "Basic Plan" bilang opsyon para mag-upgrade. Ang kailangan mo lang gawin ay italaga ang parehong pangalan ng plan group para sa Free at Premium plans gaya ng ipinapakita sa mga screenshot sa ibaba.

![Free Plan product page with High End plan group assigned](/img/config/product-upgrades-free.png)

![Premium Plan product page with High End plan group assigned](/img/config/product-upgrades-premium.png)

Ito ay para sabihin sa Ultimate Multisite na mayroon tayong isang "pamilya" ng mga plano sa network na tinatawag na **High End**. Kapag nag-aalok tayo ng mga upgrade o downgrade, ang mga plan mula sa parehong pamilya lang ang ipapakita bilang opsyon para sa user.
