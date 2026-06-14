---
title: Referentia Configuratio
sidebar_position: 11
_i18n_hash: 0259b88b319090b358483322ad97fc2d
---
# Referentia Configurativorum

Hae pagina tractat configurationes quae administrationem quotidianam et novas mutationes in comportamento in Ultimate Multisite affectantur.

## Aliae Optiones

Area **Aliae Optiones** apparit sub **Ultimate Multisite > Settings > Login & Registration**.

| Setting | Descripio |
|---|---|
| **Enable Jumper** | Instrumentum navigationis rapida Jumper in area admin ostendit. Hoc uti ad directam saltationem ad pantallas Ultimate Multisite, obiecta network, et destinationes adminicas suportas facias. Si hoc breviter visibile non habes, hoc disable. |

## Reporter errorum et telemetria

Primum setting opt-in reporter errorum est a pagina configurationum remsissum. Telemetria anônima est inoffica et nullo togglo UI ad eius activationem est.

Si runbooks interni vel capturas schi inpagina configurationum conservas, references ad antiquum field opt-in reporter errorum remove, ut administrationes non quaerent setting quod iam non est presentiae.

## Configuratio Import/Export

Tabula **Import/Export** descripit quae configurationes quae controlat et directam linket ad **Ultimate Multisite > Site Export** pro archivis situii et network. Tabulam configurationem import/export usus, workflow export/import solum situii **Tools > Export & Import** usus, et instrumentum Site Export usus si archivum Network completum exportandi necesse est.

## Configuratio connectoris provider AI

Configuratio connectoris provider AI nunc solum pooles account OAuth suportos exposit:

| Fornitor | Fluxus de configurare |
|---|---|
| **Anthropic Max** | Conecte una sau vel mai multă cont Anthropic Max cu butonul OAuth. Utilizati fallback manual OAuth quando un browser sandboxed nu poate finaliza la automat redirecționarea. |
| **OpenAI ChatGPT/Codex** | Conecteți conturile ChatGPT prin același flux de lavoro di pool OAuth. Operațiuni suportate dal connector pot folosi tool calls ChatGPT Codex dopo cărecontul è conectat. |
| **Google AI Pro** | Conecteți conturi Google AI Pro attraverso OAuth, poi rafinezite il connector se la lista dei conti non si aggiorna immediatamente. |

Cursor Pro nu è più un fornitor supportato. Rimuovete vecchi screenshot interni, runbook o passaggi di onboarding che menzionano i campi di configurazione Cursor Pro o i percorsi del connector.

Quando aggiungete o rimuovete account dei fornitori, inserite un indirizzo email valido per il conto che state rafine o eliminare e salvate le impostazioni del fornitore prima di testare le operazioni supportate dal connector.
