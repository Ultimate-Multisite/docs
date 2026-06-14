---
title: Konfiguracijas referance
sidebar_position: 11
_i18n_hash: 0259b88b319090b358483322ad97fc2d
---
# References uz iestatījumiem

Šajā lapā tiek sekoti iestatījumi, kas ietekmē ikdienas administrāciju un nesenās atsauksmes Ultimate Multisite.

## Citas opcijas

**Citas opcijas** sadaļa ir redzama ap **Ultimate Multisite > Settings > Login & Registration**.

| Iestatījums | Apraksts |
|---|---|
| **Enable Jumper** (Iespējot Jumper) | Parāda Jumper ātrās navigācijas rīku admināšanas joslā. Izmantojiet to, lai tieši pārcos uz Ultimate Multisite ekrānus, tīkla objekti un atbalstītos admina vietnes. Disabilitējiet to, ja neuzmanieties šo atslēgu redzēt. |

## Kļūdu ziņošanas un telemetry

Pirms šī ir izmantota kļūdu ziņošanas opcija ir noņemta no iestatījumu lapas. Anonīgie telemetry ir deaktivizēts, un nav UI pārlaušanu, lai to aktivizētu.

Ja jūs saglabājate iekšējās vadības grāmatas vai attēlus iestatījumu lapai, atņemiet references vecajai kļūdu ziņošanas opcijas laukus, lai administratoru nepieciešotu meklēt iestatījumu, kas vēl nav pieejams.

## Import/Eksporti iestatījumi

**Import/Eksporti** tab apraksta, kādi iestatījumi tas kontrole, un tie tieši saistīts ar **Ultimate Multisite > Site Export** vietnes un tīkla arhīvu eksportēšanai. Izmantojiet iestatījumu tabuli import/eksportu konfigurācijai, izmantojiet **Tools > Export & Import** vienas vietnes eksporta/importa veidarbūviem, un izmantojiet Site Export rīku, ja jums ir nepieciešams pilns Tīkla Eksporta arhīvs.

## AI sniedzēju savienojumu iestatījumi

AI sniedzēju savienojuma iestatījumi tagad atklāj tikai atbalstītos OAuth kontu pulkusu:

| Piegavinātājs | Iestatīšanas plūsma |
|---|---|
| **Anthropic Max** | Saistiet vienu vai vairākus Anthropic Max kontus ar OAuth pogu. Izmantojiet manuālo OAuth atbalstu, ja sandboksēts rammā nevar automātiski pabeigt redirekciju. |
| **OpenAI ChatGPT/Codex** | Saistiet ChatGPT kontus caur to pašu OAuth pulkverka (workflow). Konektora atbalstītas operācijas var izmantot ChatGPT Codex šķēršļus pēc konta saistīšanas. |
| **Google AI Pro** | Saistiet Google AI Pro kontus ar OAuth, pēc tam atsauciniet konektoru, ja kontu saraksts neaktualizējās neatkarīgi no laika. |

Cursor Pro vairs nav atbalstīts piegavinātājs. Tā eliminējiet senas internās attēlus, runbookus vai iestatīšanas soļus, kas minē Cursor Pro iestatīšanas laukus vai konektora ceļus.

Ja dodateji vai atņemiet piegavinātāju kontus, ievadiet pareizu e-pasta adresi tās konta, ko atsauciniet vai izslēgst, un saglabājiet piegavinātāja iestatījumus pirms tests konektora atbalstītās operācijām.
