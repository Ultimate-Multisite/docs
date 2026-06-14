---
title: Sanggunian ng mga Setting
sidebar_position: 11
_i18n_hash: 0259b88b319090b358483322ad97fc2d
---
# Sanggunian ng mga Setting

Ang pahinang ito ay nagtatala ng mga setting na nakakaapekto sa pang-araw-araw na pamamahala at mga kamakailang pagbabago sa Ultimate Multisite.

## Iba Pang Opsyon

Ang lugar na **Other Options** ay lumalabas sa ilalim ng **Ultimate Multisite > Settings > Login & Registration**.

| Setting | Deskripsyon |
|---|---|
| **Enable Jumper** | Ipinapakita nito ang tool na Jumper quick navigation sa admin area. Gamitin ito para direktang pumunta sa mga screen ng Ultimate Multisite, network objects, at mga sinusuportahang destinasyon ng admin. Patayin ito kung ayaw mong makita ang shortcut na ito. |

## Pag-uulat ng error at telemetry

Ang dating setting para sa pagpili (opt-in) ng pag-uulat ng error ay tinanggal na mula sa settings page. Ang anonymous telemetry ay naka-off at walang UI toggle para i-enable ito.

Kung nagpapanatili ka ng mga internal runbook o screenshots para sa settings page, tanggalin ang mga sanggunian sa lumang field para hindi maghanap ang mga administrator ng setting na wala na.

## Mga setting para sa Import/Export

Inilalarawan ng tab na **Import/Export** kung aling mga setting ang kinokontrol nito at direktang nag-uugnay ito sa **Ultimate Multisite > Site Export** para sa site at network archives. Gamitin ang settings tab para sa configuration ng import/export, gamitin ang **Tools > Export & Import** para sa workflow ng single-site export/import, at gamitin ang Site Export tool kapag kailangan mo ng buong Network Export archive.

## Mga setting para sa AI provider connector

Ang mga setting para sa AI provider connector ay nagpapakita na lamang ng mga sinusuportahang OAuth account pools:

| Provider | Setup flow |
|---|---|
| **Anthropic Max** | Ikonekta ang isa o higit pang Anthropic Max account gamit ang OAuth button. Gumamit ng manual na OAuth fallback kapag hindi matapos ang redirect nang awtomatiko sa isang sandboxed browser. |
| **OpenAI ChatGPT/Codex** | Ikonekta ang mga account ng ChatGPT sa pamamagitan ng parehong workflow ng OAuth pool. Ang mga operasyong sinusuportahan ng Connector ay maaaring gumamit ng ChatGPT Codex tool calls pagkatapos ma-connect ang account. |
| **Google AI Pro** | Ikonekta ang mga Google AI Pro account sa pamamagitan ng OAuth, at pagkatapos ay i-refresh ang connector kung hindi agad nag-update ang listahan ng mga account. |

Ang Cursor Pro ay hindi na sinusuportahang provider. Tanggalin ang mga lumang internal screenshot, runbook, o onboarding steps na tumutukoy sa setup fields o connector paths ng Cursor Pro.

Kapag nagdaragdag o nagtatanggal ng mga account ng provider, ilagay ang isang balidong email address para sa account na i-refresh o buburahin at i-save ang mga setting ng provider bago subukan ang mga operasyong umaasa sa connector.
