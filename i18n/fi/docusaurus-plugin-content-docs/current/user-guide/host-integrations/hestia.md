---
title: Hestian hallintapaneelin integrointi
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel -Integraatio

Tämä opas selittää, miten konfiguroidaan Ultimate Multisite Hestia -integraation siten, että verkossasi kartoitettuja domeeneja lisätään (ja poistetaan) automaattisesti Web Domain Aliaseiksi Hestiassa.

- Hestian CLI:n viittaukset: / v-add-web-domain-alias / v-delete-web-domain-alias
- Virallinen REST API -dokumentaatio: https://hestiacp.com/docs/server-administration/rest-api.html

## Mitä se tekee {#what-it-does}
- Kun domeeni kartoitetaan Ultimate Multisite -ympäristössä, integraatio kutsuu Hestia API:ta suorittamaan seuraavan toiminnon:
  - `v-add-web-domain-alias <KÄYTTÄJÄ> <DOMAINI> <ALIAS> [RESTART]`
- Kun domeenin kartoitusta poistetaan, se suorittaa:
  - `v-delete-web-domain-alias <KÄYTTÄJÄ> <DOMAINI> <ALIAS> [RESTART]`
- Mahdollistaa valinnaisesti `www.` -aliasin lisäämisen tai poistamisen riippuen "Auto-create www subdomain" -asetuksestasi Domain Mapping -asetuksissa.

## Edellytykset {#prerequisites}
- Olemassa oleva Hestia Web Domain, joka osoittaa jo WordPress-asennukseesi. Integraatio liittää aliasit tähän perusdomeeniin.
- Hestian API-pääsyn aktivoitu. Voit tunnistautua joko salasanalla tai API-hashilla/tokenilla.

Katso Hestian REST API -dokumentaatiota API-pääsyn ja tunnistautumistietojen aktivointiin:
https://hestiacp.com/docs/server-administration/rest-api.html

## Konfigurointi (Wizard → Integrations → Hestia) {#configuration-wizard--integrations--hestia}
Anna seuraavat arvot:

- `WU_HESTIA_API_URL` (vaadittu)
  - Perus API-päätepiste, tyypillisesti `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (vaadittu)
  - Hestian käyttäjä, jota käytetään API-komentoihin (usein `admin`).
- `WU_HESTIA_API_PASSWORD` tai `WU_HESTIA_API_HASH` (vähintään yksi)
  - Valitse yksi tunnistautumistapa: salasana tai API-hash/token.
- `WU_HESTIA_ACCOUNT` (vaadittu)
  - Web-domeenin tili (omistaja) Hestian yllä; tämä on ensimmäinen argumentti CLI:lle.
- `WU_HESTIA_WEB_DOMAIN` (vaadittu)
  - Olemassa oleva Hestia Web Domain, joka palvelee WordPressiäsi (aliasit liitetään tähän).
- `WU_HESTIA_RESTART` (valinnainen; oletus `yes`)
  - Päättelekö palvelut käynnistettävä/ladata uudelleen aliasmuutosten jälkeen.

Voit antaa nämä vakioiden injektoitavaksi `wp-config.php`-tiedostoon tai määritellä ne manuaalisesti.

## Asetuksen varmistaminen {#verifying-setup}
- Wizardin "Testaus"-vaiheessa plugin kutsuu API:n kautta `v-list-web-domains <WU_HESTIA_ACCOUNT> json` -komentoa. Onnistunut vastaus vahvistaa yhteyden ja tunnistautumisen.
- Domen mappauksen jälkeen tarkista Hestia: Web > perusdomeeni > Aliasit. Sinun pitäisi nähdä uuden aliasin lisätty olevan.

## Huomiot & vinkit {#notes--tips}
- Varmista, että `WU_HESTIA_WEB_DOMAIN` on jo olemassa ja omistettu `WU_HESTIA_ACCOUNT`-tille.
- Jos SSL on vaadittu, hallitse sertifikaatteja Hestian kautta. Tämä integraatio hoitaa tällä hetkellä vain aliasit.
- Plugin voi lisätä/poistaa myös `www.<domain>` riippuen Domen Mappauksen "www subdomain" -asetuksistasi.

## Esimerkki API-kutsusta (cURL) {#example-api-call-curl}
Tässä on konseptiellinen esimerkki (muokkaa ympäristösi mukaan). Viittaa viralliseen dokumentaatioon tarkkoihin parametreihin.

POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (tai &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias to add)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes

Poistamiseen luodaan käyttämällä `cmd=v-add-web-domain-alias` ja samoja argumentteja. Poiston poistamiseen käytetään komentoa `cmd=v-delete-web-domain-alias` ja niitä samoja argumentteja.

## Ongelmanratkaisu {#troubleshooting}
- API:sta tuleva HTTP-virhe: varmista, että `WU_HESTIA_API_URL` on saavutettavissa ja sisältää `/api`.
- Autentikointivirheet: vahvista `WU_HESTIA_API_USER` sekä joko `WU_HESTIA_API_PASSWORD` tai `WU_HESTIA_API_HASH`.
- "Missing account/base domain" -viestit logeissa: varmista, että `WU_HESTIA_ACCOUNT` ja `WU_HESTIA_WEB_DOMAIN` on asetettu ja ne ovat kelvollisia Hestian kautta.

## Viittaukset {#references}
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI -viite (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
