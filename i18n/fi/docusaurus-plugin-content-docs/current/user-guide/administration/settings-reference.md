---
title: Asetusten viittaukset
sidebar_position: 11
_i18n_hash: 0259b88b319090b358483322ad97fc2d
---
# Asetukset viittaukset

Tämä sivu seuraa asetuksia, jotka vaikuttavat päivittäiseen hallintaan ja viimeaikaisiin käyttäytymisen muutoksiin Ultimate Multisite -järjestelmässä.

## Muut vaihtoehdot

**Muut vaihtoehdot** -osio löytyy **Ultimate Multisite > Settings > Login & Registration** -osiosta.

| Asetus | Kuvaus |
|---|---|
| **Enable Jumper** (Ota käyttöön Jumper) | Näyttää Jumper-nopea navigointityökalun hallintapaneelissa. Käytä sitä siirtyä suoraan Ultimate Multisite -sivuihin, verkkoobjekteihin ja tuetuille hallintatavoille. Poista se käytöstä, jos et halua tätä lyhyttä reittiä näkyvän. |

## Virhetiedottaminen ja telemetria

Aiempi virhetiedottamiseen liittyvä valinta on poistettu asetussivulta. Anonyymi telemetria on poistettu käytöstä eikä käyttöliittymässä ole painiketta sen aktivoimiseksi.

Jos ylläpidätte sisäisiä ohjeita tai kuvakaappauksia asetussivusta, poistakaa viittaukset vanhaan virhetiedottamiseen liittyvään valintakenttään, jotta ylläpitäjät eivät etsi asetusta, joka ei ole enää olemassa.

## Tuonti/Vienti -asetukset

**Import/Export** (Tuonti/Vienti) -välilehti kuvaa, mitkä asetuksia se hallitsee ja linkittää suoraan **Ultimate Multisite > Site Export** -sivulle sivujen ja verkkojen arkistoille. Käytä asetusten välilehteä tuonnin/vientiasetuksiin, käytä **Tools > Export & Import** (Työkalut > Vienti ja tuonti) yksittäisen sivuston vienti-/tuontiprosessia varten ja käytä Site Export -työkalua, kun tarvitset koko verkkoarkiston viennin.

## AI-palveluntarjoajan liittymän asetukset

AI-palveluntarjoajan liittymän asetuksissa näytetään nyt vain tuetut OAuth-tunnusjoukot:

| Tarjoaja | Asetusvirta |
|---|---|
| **Anthropic Max** | Yhdistä yksi tai useampi Anthropic Max -tili OAuth-painikkeen avulla. Käytä manuaalista OAuth-vaihtoehtoa, jos sandboxed browser ei pysty suorittamaan ohjausta automaattisesti. |
| **OpenAI ChatGPT/Codex** | Yhdistä ChatGPT-tilit samalla OAuth-poolin työnkulun kautta. Tili yhdistetty sen jälkeen mahdollistaa konektorilla tuettujen operaatioiden käyttämisen ChatGPT Codex -työkutsuilla. |
| **Google AI Pro** | Yhdistä Google AI Pro -tilit OAuth:lla, ja päivitä konektorin asetukset uudelleen, jos tili-lista ei päivitä välittömästi. |

Cursor Pro ei ole enää tuettu tarjoaja. Poista vanhat sisäiset kuvakaappaukset, runebokit tai onboarding-askeleet, jotka mainitsevat Cursor Pro -asetusten tai konektoripolut.

Kun lisäät tai poistat tarjoajan tilin, syötä kelvollinen sähköpostiosoite siirtyvän tai poistetun tilin kohdalle ja tallenna tarjoajan asetukset ennen kuin testaat konektorilla tukemia operaatioita.
