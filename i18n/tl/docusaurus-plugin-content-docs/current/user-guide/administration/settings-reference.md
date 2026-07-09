---
title: Sanggunian ng mga Setting
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Sanggunian ng Settings {#settings-reference}

Sinusubaybayan ng pahinang ito ang settings na nakaaapekto sa pang-araw-araw na pangangasiwa at mga kamakailang pagbabago sa gawi sa Ultimate Multisite.

## Iba Pang Opsyon {#other-options}

Ang bahagi ng **Iba Pang Opsyon** ay lumilitaw sa ilalim ng **Ultimate Multisite > Settings > Login & Registration**.

| Setting | Paglalarawan |
|---|---|
| **Enable Jumper** | Ipinapakita ang mabilisang kasangkapan sa nabigasyon na Jumper sa bahagi ng admin. Gamitin ito upang direktang lumipat sa mga screen ng Ultimate Multisite, mga object ng network, at mga sinusuportahang destinasyon ng admin. I-disable ito kung ayaw mong makita ang shortcut na ito. |

## Pag-uulat ng error at telemetry {#error-reporting-and-telemetry}

Ang dating setting para sa pag-opt in sa pag-uulat ng error ay inalis na sa pahina ng settings. Naka-disable ang anonymous telemetry at walang UI toggle para i-enable ito.

Kung nagpapanatili ka ng mga internal runbook o screenshot para sa pahina ng settings, alisin ang mga sanggunian sa lumang field ng pag-opt in sa pag-uulat ng error upang hindi hanapin ng mga administrator ang setting na wala na.

## Settings ng Import/Export {#importexport-settings}

Inilalarawan ng tab ng settings na **Import/Export** kung aling settings ang kinokontrol nito at direktang nagli-link sa **Ultimate Multisite > Site Export** para sa mga archive ng site at network. Gamitin ang tab ng settings para sa configuration ng import/export, gamitin ang **Tools > Export & Import** para sa workflow ng export/import ng iisang site, at gamitin ang kasangkapan na Site Export kapag kailangan mo ng kumpletong archive ng Network Export.

## Babala sa balanse ng Domain Seller HostAfrica {#domain-seller-hostafrica-balance-warning}

Kapag nakakonekta ang addon na Domain Seller sa HostAfrica, makakakita na ngayon ang mga administrator ng network ng babala sa mababang balanse na maaaring i-dismiss kapag masyadong mababa ang balanse ng reseller account para sa maaasahang pagproseso ng pagpaparehistro o pag-renew ng domain.

Ituring ang abisong ito bilang operational na babala: dagdagan ang balanse ng HostAfrica reseller bago tumanggap ng mas marami pang bayad na pagpaparehistro ng domain, pagkatapos ay bumalik sa settings ng Domain Seller o screen ng pagsubaybay ng domain upang kumpirmahing maaaring magpatuloy nang normal ang mga pagpaparehistro at pag-renew.

## Settings ng connector ng AI provider {#ai-provider-connector-settings}

Ipinapakita na ngayon ng settings ng connector ng AI provider ang mga sinusuportahan lamang na OAuth account pool:

| Provider | Daloy ng setup |
|---|---|
| **Anthropic Max** | Ikonekta ang isa o higit pang Anthropic Max account gamit ang OAuth button. Gamitin ang manual na OAuth fallback kapag hindi makumpleto ng sandboxed browser ang redirect nang awtomatiko. |
| **OpenAI ChatGPT/Codex** | Ikonekta ang mga ChatGPT account sa pamamagitan ng parehong OAuth pool workflow. Maaaring gamitin ng mga operasyong sinusuportahan ng connector ang mga ChatGPT Codex tool call pagkatapos maikonekta ang account. |
| **Google AI Pro** | Ikonekta ang mga Google AI Pro account sa pamamagitan ng OAuth, pagkatapos ay i-refresh ang connector kung hindi agad naa-update ang listahan ng account. |

Hindi na sinusuportahang provider ang Cursor Pro. Alisin ang mga lumang internal screenshot, runbook, o hakbang sa onboarding na bumabanggit sa mga setup field o connector path ng Cursor Pro.

Kapag nagdaragdag o nag-aalis ng mga provider account, maglagay ng balidong email address para sa account na nire-refresh o dine-delete at i-save ang settings ng provider bago subukan ang mga operasyong sinusuportahan ng connector.
