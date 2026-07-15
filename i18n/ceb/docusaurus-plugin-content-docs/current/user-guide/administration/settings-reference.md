---
title: Reperensiya sa mga Setting
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Reperensiya sa Settings

Kini nga panid nagsubay sa settings nga nakaapekto sa adlaw-adlaw nga pagdumala ug bag-ong mga kausaban sa kinaiya sa Ultimate Multisite.

## Ubang Opsyon {#other-options}

Ang **Ubang Opsyon** nga lugar makita ubos sa **Ultimate Multisite > Settings > Login & Registration**.

| Setting | Deskripsyon |
|---|---|
| **Enable Jumper** | Nagpakita sa Jumper nga paspas nga himan sa nabigasyon sa admin area. Gamita kini aron direkta nga molukso ngadto sa mga screen sa Ultimate Multisite, mga object sa network, ug gisuportahang mga destinasyon sa admin. I-disable kini kung dili nimo gusto nga makita kini nga shortcut. |

## Pagreport sa sayop ug telemetry {#error-reporting-and-telemetry}

Ang kanhing opt-in setting sa pagreport sa sayop gikuha na gikan sa panid sa settings. Ang anonymous telemetry gi-disable ug walay UI toggle aron i-enable kini.

Kung nagmintinar ka og internal nga runbooks o screenshots para sa panid sa settings, kuhaa ang mga reperensiya sa daang opt-in field sa pagreport sa sayop aron dili mangita ang mga administrator og setting nga wala na.

## Import/Export settings {#importexport-settings}

Ang **Import/Export** nga tab sa settings naghulagway kung unsang settings ang gikontrol niini ug direktang nag-link ngadto sa **Ultimate Multisite > Site Export** para sa mga archive sa site ug network. Gamita ang tab sa settings para sa configuration sa import/export, gamita ang **Tools > Export & Import** para sa workflow sa export/import sa single-site, ug gamita ang Site Export nga himan kung kinahanglan nimo og bug-os nga Network Export nga archive.

## Pasidaan sa balanse sa Domain Seller HostAfrica {#domain-seller-hostafrica-balance-warning}

Kung ang Domain Seller addon nakakonekta sa HostAfrica, ang mga administrator sa network karon makakita og dismissible nga pasidaan nga ubos ang balanse kung ang balanse sa reseller account ubos kaayo para sa kasaligang pagproseso sa pagrehistro o pag-renew sa domain.

Tagda kini nga pahibalo isip operational nga pasidaan: pun-i ang balanse sa HostAfrica reseller sa dili pa modawat og dugang bayad nga mga pagrehistro sa domain, dayon balik sa Domain Seller settings o screen sa pagmonitor sa domain aron kumpirmahon nga ang mga pagrehistro ug pag-renew makapadayon sa normal.

## AI provider connector settings {#ai-provider-connector-settings}

Ang AI provider connector settings karon nagpakita lamang sa gisuportahang OAuth account pools:

| Provider | Setup flow |
|---|---|
| **Anthropic Max** | Ikonekta ang usa o daghang Anthropic Max accounts gamit ang OAuth button. Gamita ang manual OAuth fallback kung ang sandboxed browser dili makakompleto sa redirect awtomatiko. |
| **OpenAI ChatGPT/Codex** | Ikonekta ang ChatGPT accounts pinaagi sa parehas nga OAuth pool workflow. Ang mga operasyon nga gisuportahan sa connector makagamit sa ChatGPT Codex tool calls human makonekta ang account. |
| **Google AI Pro** | Ikonekta ang Google AI Pro accounts pinaagi sa OAuth, dayon i-refresh ang connector kung ang listahan sa account dili dayon ma-update. |

Ang Cursor Pro dili na gisuportahang provider. Kuhaa ang daang internal screenshots, runbooks, o onboarding steps nga naghisgot sa Cursor Pro setup fields o connector paths.

Kung magdugang o magkuha og provider accounts, isulod ang balidong email address para sa account nga gi-refresh o gi-delete ug i-save ang provider settings sa dili pa mosulay sa mga operasyon nga gisuportahan sa connector.
