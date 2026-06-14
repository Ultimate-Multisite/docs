---
title: Referenca na nastavitve
sidebar_position: 11
_i18n_hash: 0259b88b319090b358483322ad97fc2d
---
# Reference nastavitve

Ta stran sledi nastavitvam, ki vplivajo na vsakodnevno upravljanje in zadnje spremembe vedenja v Ultimate Multisite.

## Druge možnosti

Območje **Druge možnosti** se nahaja pod **Ultimate Multisite > Settings > Login & Registration**.

| Nastavitev | Opis |
|---|---|
| **Enable Jumper** (Omogoči Jumper) | Prikazuje orodje hitre navigacije Jumper v adminni strani. Uporabite ga, da se neposredno preskačete na ekrane Ultimate Multisite, mrežne objekte in podporne destinacije za admin. Omogočite ga, če želite ta prihodnji povezavo videti. Omogočite ga, če ne želite tega skrajšanja videti. |

## Obveščanje o napakahih in telemetri

Nastavitev za vključenje obveščanja o napakahih je odstranjena z strani za nastavitve. Anonimna telemetrija ni vklopljena in na UI ni možnost, da jo omogočite.

Če imate interne runbooks ali snimke zaslona za stran za nastavitve, odstranite reference do starega polja za vključenje obveščanja o napakahih, tako da administratorji ne iščejo nastavitve, ki ni več prisotna.

## Nastavitve za import/export

Tab **Import/Export** opisuje, kakšne nastavitve upravlja in je neposredno povezana z **Ultimate Multisite > Site Export** za arhiviranje strani in mreže. Uporabite tab za nastavitve za konfiguracijo importiranja/eksportiranja, uporabite **Tools > Export & Import** za delovni tok exportiranja/importiranja za eno stran, in uporabite orodje Site Export, če potrebujete celotno arhiviranje mreže.

## Nastavitve konektora AI ponudnika

Nastavitve konektora AI ponudnika prikazujejo zdaj le podporne OAuth računske baz:

| Dostavitelj | Postopek nastavitve |
|---|---|
| **Anthropic Max** | Povežite eno ali več računov Anthropic Max z gumbom OAuth. Uporabite ručno povezavo (manual OAuth fallback), če sandboxed browser ne more samodejno dokončati preusmerjanje. |
| **OpenAI ChatGPT/Codex** | Povežite račune ChatGPT skozi isti workflow s OAuth-om. Operacije, ki jih podpirajo konektorji, lahko uporablja ChatGPT Codex tool calls po povezavi računa. |
| **Google AI Pro** | Povežite račune Google AI Pro skozi OAuth, nato pa osvežite konektor, če se seznam računov ne obredi takoj. |

Cursor Pro ni več podprt dostavitelj. Odstranite stare interne snimke zaslona (screenshots), runbooks ali korake za vključitev, ki omenjajo nastavitve Cursor Pro ali poti konektorjev.

Ob dodajan ali odstranjevanje računov dostaviteljev vnesite validno e-poštno naslov za račun, ki ga osvežite ali odstranite, in shranite nastavitve dostavitelja pred preizkušanjem operacij, ki se oslanjajo na konektorje.
