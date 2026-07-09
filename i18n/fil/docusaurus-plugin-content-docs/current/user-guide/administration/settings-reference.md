---
title: Sanggunian sa Mga Setting
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Sanggunian ng Mga Setting

Sinusubaybayan ng pahinang ito ang mga setting na nakaaapekto sa pang-araw-araw na administrasyon at mga kamakailang pagbabago sa gawi sa Ultimate Multisite.

## Iba Pang Opsyon

Ang bahaging **Iba Pang Opsyon** ay lumalabas sa ilalim ng **Ultimate Multisite > Settings > Login & Registration**.

| Setting | Paglalarawan |
|---|---|
| **Enable Jumper** | Ipinapakita ang Jumper na mabilisang tool sa nabigasyon sa admin area. Gamitin ito upang direktang pumunta sa mga screen ng Ultimate Multisite, mga network object, at mga suportadong admin destination. I-disable ito kung ayaw mong makita ang shortcut na ito. |

## Pag-uulat ng error at telemetry

Inalis na sa pahina ng mga setting ang dating setting para sa pag-opt in sa pag-uulat ng error. Naka-disable ang anonymous telemetry at walang UI toggle para i-enable ito.

Kung nagpapanatili ka ng mga internal runbook o screenshot para sa pahina ng mga setting, alisin ang mga sanggunian sa lumang field para sa pag-opt in sa pag-uulat ng error upang hindi hanapin ng mga administrator ang isang setting na wala na.

## Mga setting ng Import/Export

Inilalarawan ng tab ng mga setting na **Import/Export** kung aling mga setting ang kinokontrol nito at direktang nagli-link sa **Ultimate Multisite > Site Export** para sa mga archive ng site at network. Gamitin ang tab ng mga setting para sa configuration ng import/export, gamitin ang **Tools > Export & Import** para sa workflow ng export/import ng single-site, at gamitin ang tool na Site Export kapag kailangan mo ng buong archive ng Network Export.

## Babala sa balanse ng Domain Seller HostAfrica

Kapag nakakonekta ang Domain Seller addon sa HostAfrica, nakakakita na ngayon ang mga network administrator ng nadidismiss na babala sa mababang balanse kapag masyadong mababa ang balanse ng reseller account para sa maaasahang pagproseso ng pagpaparehistro o pag-renew ng domain.

Ituring ang abisong ito bilang babalang pang-operasyon: dagdagan ang balanse ng HostAfrica reseller bago tumanggap ng mas marami pang bayad na pagpaparehistro ng domain, pagkatapos ay bumalik sa mga setting ng Domain Seller o screen ng domain monitoring upang kumpirmahing maaaring magpatuloy nang normal ang mga pagpaparehistro at pag-renew.

## Mga setting ng connector ng AI provider

Ipinapakita na ngayon ng mga setting ng connector ng AI provider ang mga suportadong OAuth account pool lamang:

| Provider | Daloy ng setup |
|---|---|
| **Anthropic Max** | Ikonekta ang isa o higit pang Anthropic Max account gamit ang OAuth button. Gamitin ang manual OAuth fallback kapag hindi makumpleto ng sandboxed browser ang redirect nang awtomatiko. |
| **OpenAI ChatGPT/Codex** | Ikonekta ang mga ChatGPT account sa pamamagitan ng parehong workflow ng OAuth pool. Maaaring gamitin ng mga operasyong suportado ng connector ang mga ChatGPT Codex tool call matapos maikonekta ang account. |
| **Google AI Pro** | Ikonekta ang mga Google AI Pro account sa pamamagitan ng OAuth, pagkatapos ay i-refresh ang connector kung hindi agad nag-a-update ang listahan ng account. |

Hindi na suportadong provider ang Cursor Pro. Alisin ang mga lumang internal screenshot, runbook, o hakbang sa onboarding na bumabanggit sa mga field ng setup ng Cursor Pro o mga path ng connector.

Kapag nagdaragdag o nag-aalis ng mga provider account, maglagay ng wastong email address para sa account na nire-refresh o binubura at i-save ang mga setting ng provider bago subukan ang mga operasyong sinusuportahan ng connector.
