---
title: Referenza tal-għażliet
sidebar_position: 11
_i18n_hash: 0259b88b319090b358483322ad97fc2d
---
# Referenza Setting

Questa pagina traccia i setting (impostazioni) che influenzano l'amministrazione quotidiana e le recenti modifiche di comportamento in Ultimate Multisite.

## Altre Opzioni

L'area **Other Options** (Altre Opzioni) appare sotto **Ultimate Multisite > Settings > Login & Registration**.

| Setting | Descrizione |
|---|---|
| **Enable Jumper** (Abilita Jumper) | Mostra lo strumento di navigazione rapida Jumper nell'area admin. Usalo per saltare direttamente alle schermate di Ultimate Multisite, agli oggetti della rete e alle destinazioni admin supportate. Disabilitalo se non vuoi che questo collegamento sia visibile. |

## Reporting d'errore e telemetria

L'impostazione precedente per l'iscrizione al reporting degli errori è stata rimossa dalla pagina delle impostazioni. La telemetria anonima è disabilitata e non c'è un interruttore nell'interfaccia utente per attivarla.

Se mantieni runbook interni o screenshot per la pagina delle impostazioni, rimuovi i riferimenti al vecchio campo di iscrizione al reporting degli errori in modo che gli amministratori non cerchino una impostazione che non è più presente.

## Impostazioni Import/Export

La scheda **Import/Export** descrive quali setting controlla e collega direttamente a **Ultimate Multisite > Site Export** per gli archivi del sito e della rete. Usa la scheda delle impostazioni per la configurazione import/export, usa **Tools > Export & Import** per il flusso di lavoro di export/import del singolo sito, e usa lo strumento Site Export quando hai bisogno di un archivio completo di Network Export.

## Impostazioni con connettori AI provider

Le impostazioni dei connettori AI provider espongono ora solo le pool di account OAuth supportate:

| Provider | Setup flow |
|---|---|
| **Anthropic Max** | Iconnect una o aktar konti Anthropic Max b'attrapassa l-puls għall-OAuth. Uża l-fallback manual OAuth meta browser sandboxed ma jkun qabel jkompletta l-redirect awtomatikament. |
| **OpenAI ChatGPT/Codex** | Iconnecti konti ChatGPT permezz tal-workflow pool OAuth isiem. Operazzjonijiet supportati minn il-connector jistgħu użaw tool calls ta ChatGPT Codex dopo li jkunu konetti l-konti. |
| **Google AI Pro** | Iconnecti konti Google AI Pro permezz OAuth, u poi refresh il-connector meta l-lista tal-konti ma tħallix jgħatti minnna immediatament. |

Cursor Pro m'għodda x-provider supportati. Elimina screenshot interni qad huma vecchi, runbooks, jew passaggi ta onboarding li jgħandu fuq feidijiet ta setup Cursor Pro jew l-connector paths.

Meta tgħaddi jew tixleb konti provider, iġibrat indirizz email valido għall-konti li qed jiġu refreshati jew tixleb u savwa s-setting tal-provider qabel ma tiġi testati l-operazzjonijiet li jiddejjih il-connector.
