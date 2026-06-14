---
title: Mawuwozo wa Zikomo
sidebar_position: 11
_i18n_hash: 0259b88b319090b358483322ad97fc2d
---
# Settings Reference

Iziye ya lapansi liliipira zotsatira zoteteza ubatizo l'umunthu wosuku-suku ndi mabwiri osiyanasiyana m'Ultimate Multisite.

## Zina Zina Lina

Maka **Other Options** limapita pansi pa **Ultimate Multisite > Settings > Login & Registration**.

| Setting | Maonero |
|---|---|
| **Enable Jumper** | Limakwera chithandizo cha Jumper kwa mwayi wosangalatsa (admin area). Gumukira kuti muphindera m'Ultimate Multisite screens, network objects, ndi ma-destination osankha kwambiri a admin. Gumukira ngati simukufuna kukhala ndi luso lolimba lilo. |

## Kukhazikitsa mavuto ndi telemetry

Mwayi wosangalatsa wa kuwona mavuto uliweka m'settings page ulipo. Telemetry yosamakhala ndi malo osamakhala (anonymous) yali yomwe yali liweka m'settings page. Simakwera chithandizo cha UI lilo kuti muphindere.

Ngati muli ndi runbooks kapena screenshots za settings page, simukwera zotsatira kwa field ya kuwona mavuto yomwe yali yomwe yali liweka kuti administrators siye kukhala ndi setting lomwe liyenera.

## Zina Zina Loperekera/Kuperekera (Import/Export settings)

Tabu ya **Import/Export** imapangidwa kuti ipereke chonde chiyenera chomwe imaperekera ndipo imapita m'Ultimate Multisite > Site Export kuti mwayi wosangalatsa ndi network archives. Gumukira tabu ya settings kuti muphindera kuwerekera/kuperekera, gumukira **Tools > Export & Import** kuti muphindera workflow wa kuperekera/kuwerekera kwa site yomwe ndi lilo, ndipo gumukira Site Export tool pamene muli ndi chifukwa chomwe mukufuna full Network Export archive.

## Zina Zina Loperekera la AI provider (AI provider connector settings)

Zina zina za AI provider zili ndi malo osankha kwa OAuth account pools:

| Provider | Setup flow |
|---|---|
| **Anthropic Max** | Yendera aka Anthropic Max accounts ndi kukhala ndi OAuth button. Gumva kuti muli ndi manual OAuth fallback pamene browser yomwe si sandboxed imayenera kupereka redirect kwawo. |
| **OpenAI ChatGPT/Codex** | Gumva ChatGPT accounts monga m'moyo wosonyeza (OAuth pool workflow). Operations zomwe zikubwera ndi connector inalimbikira zina, zimene zikugwira tool calls za ChatGPT Codex ndipo muli ndi account imene imaperekedwa. |
| **Google AI Pro** | Gumva Google AI Pro accounts monga OAuth, ndipo muperekera connector monga m'moyo osiyanasiyana ngati list ya accounts si imaperekedwa mwachangu. |

Cursor Pro simukuti ndi provider imene imaperekedwa. Onse zikulu za screenshots za ndani, runbooks, kapena steps za kupeza kuti muli ndi Cursor Pro setup fields kapena connector paths, musamukutse.

Poyamba kapena kupereka accounts za provider, yendera email imene imene imaperekedwa kapena idetsedwa ndipo simene settings za provider monga m'moyo osonyeza operations zomwe zikugwira tool calls.
