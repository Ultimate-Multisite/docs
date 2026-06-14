---
title: Konfigurazioaren referentzia
sidebar_position: 11
_i18n_hash: 0259b88b319090b358483322ad97fc2d
---
# Konfigurazioa Errekontzat

Hau lapuak erregistro egiten du konfiguratura hauek dira, zein iragailu-egun administrazioan eta Ultimate Multisite-aren lehen erregistroetan (recent behaviour changes) erabil daitezkeen.

## Beste Opzioak

**Beste Opzioak** (Other Options) lekuak eratu da **Ultimate Multisite > Settings > Login & Registration**-aren ondorioz.

| Konfigurazioa | Deskribapena |
|---|---|
| **Enable Jumper** | Erakunde administrazioan Jumper quick navigation aletia erakusten du. Ultimate Multisite-ren ekranetara, network object-etara eta suportatutako admin bide-etara direktu zuzenean iragailu dituzte. Hau ez badute nahi baizik lehen bidea (shortcut) erakusteko. Hau ez badute nahi baizik. |

## Erreur reporting eta telemetrya

Lehen erregistroan dagoen error reporting opt-in konfiguraturaa konfigurazioa lapuanaren ondorioz arau da. Anonimo telemetrya ez daiteke erabiltzea eta hori aktiboa egiteko UI toggle bat ez da.

Konfigurazioa lapuanako internal runbooks edo screenshot-ek du, lehen error reporting opt-in lekuak erregistroak aldatu, administrazioak ez badute konfiguratura bat bilatzen duen.

## Import/Export konfiguratura hauek

**Import/Export** (Import/Export) tab-ek deskribatzen du zein konfigurazioak kontrolatzen ditu eta site eta network arkiduak (archives) beste Ultimate Multisite > Site Export-era direktu egiten du. Import/export konfiguratura egiteko konfiguratura tab-ek eratu, single-site export/import workflow-eko **Tools > Export & Import**-a erabiltu, eta Network Export arkidu bat behar dutenean Site Export aletia erabiltu.

## AI provider connector konfigurazioak

AI provider connector konfigurazioak orain suportatutako OAuth account pools-ek diartzen du:

| Provedor | Konfigurazioa |
|---|---|
| **Anthropic Max** | Konektatu bat edo gehiago Anthropic Max kontuak OAuth botoi erabiliz. Sandboxed browserra automatikoki redirekta ez duenean, manual OAuth alternatiboa eratu. |
| **OpenAI ChatGPT/Codex** | ChatGPT kontuak OAuth pool workflow-a bestela konektatu. Kontu konektatuta gabe operazioakaren bitartean, ChatGPT Codex tool calls-ek erabiliko da connector-ek suportatzen duen operazioak. |
| **Google AI Pro** | Google AI Pro kontuak OAuth botoi erabiliz konektatu, eta kontu listak hemen ez update dira, connector-a refresh egin behar duzu. |

Cursor Pro a lasa suportatutako provedor bat ez da. Cursor Pro setup field edo connector path-ek referentzia duen batzuak, runbook-ak edo onboarding etapak ezberdinetan hartu.

Provedor kontuak gehitu edo lekuitzea, refresh egin behar duguna edo hartu kontuari email adresa bat eratu eta connector-backed operazioak jarteliac baino lehen konfiguratura hauek salduzu.
