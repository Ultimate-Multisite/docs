---
title: Mga Garbo sa Settings
sidebar_position: 11
_i18n_hash: 0259b88b319090b358483322ad97fc2d
---
# Mga Reference sa Settings

Kining pahinong kini nagsuot sa mga setting nga makaapekto sa adlaw-adlaw nga pagdumala ug sa bag-o nga mga kausaban sa Ultimate Multisite.

## Uban pang mga Opsyon (Other Options)

Ang lugar nga **Other Options** makita ubos sa **Ultimate Multisite > Settings > Login & Registration**.

| Setting | Deskripsyon |
|---|---|
| **Enable Jumper** | Nagpakita kini sa Jumper quick navigation tool sa admin area. Gamita kini aron direkta maglakaw (jump) ngadto sa mga screen sa Ultimate Multisite, network objects, ug suportadong destinasyon sa admin. I-disable kini kung dili nimo gusto nga makita kining shortcut. |

## Pag-report og Error ug Telemetry

Ang naunang setting para sa pag-opt-in sa pag-report og error gipahimangno (error-reporting) gipahawa na gikan sa settings page. Ang anonymous telemetry gibiyaan (disabled) ug walay UI toggle aron ma-enable kini.

Kung nagpabilin ka og internal runbooks o screenshots para sa settings page, kuhaa ang mga reference sa daan nga error-reporting opt-in field aron dili mangita ang mga administrator og setting nga wala na anaa.

## Mga Setting sa Import/Export

Ang tab nga **Import/Export** naghulagway kung unsa ang mga setting nga gikontrolano niini ug direkta kining naglink sa **Ultimate Multisite > Site Export** para sa site ug network archives. Gamita ang settings tab alang sa import/export configuration, gamita ang **Tools > Export & Import** alang sa single-site export/import workflow, ug gamita ang Site Export tool kung kinahanglan nimo og full Network Export archive.

## Mga Setting sa AI provider connector

Ang mga setting para sa AI provider connector karon nagpakita lamang sa suportadong OAuth account pools:

| Provider | Setup flow |
|---|---|
| **Anthropic Max** | Konektar usa o daghang mga account sa Anthropic Max gamit ang OAuth button. Gamita ang manual OAuth fallback kung dili makompleto ang redirect sa sandboxed browser nga awtomatiko. |
| **OpenAI ChatGPT/Codex** | Konektar ang mga account sa ChatGPT pinaagi sa parehas nga workflow sa OAuth pool. Ang mga operasyong suportado sa Connector mahimong mogamit og ChatGPT Codex tool calls human ang account konektado. |
| **Google AI Pro** | Konektar ang mga account sa Google AI Pro pinaagi sa OAuth, dayon i-refresh ang connector kung dili dayon ma-update ang listahan sa mga account. |

Ang Cursor Pro dili na suportadong provider. Tangtangon ang daan nga internal screenshots, runbooks, o onboarding steps nga naghisgot bahin sa setup fields o connector paths sa Cursor Pro.

Sa pagdadagdag o pagtangtang sa mga provider accounts, isulod ang usa balido nga email address alang sa account nga gi-refresh o gitangtang ug i-save ang mga settings sa provider sa dili pa mag-test sa mga operasyong giproseso pinaagi sa connector.
