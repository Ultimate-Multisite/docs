---
title: Isolamento Multi-Tenant
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Isolamento Multi-Tenant

Ultimate Multisite: Multi-Tenancy 1.2.0 suporta isolamento de banco de dados e sistema de arquivos por subsite para inquilinos soberanos. Isso mantém os dados do inquilino separados, preservando o provisionamento de nível de rede, faturamento e administração.

## Estratégia de Isolamento {#isolation-strategy}

Use o isolamento soberano para clientes que necessitem de separação de dados mais forte, armazenamento de sistema de arquivos dedicado ou um limite de host separado.

Cada inquilino soberano deve ter:

- Um banco de dados dedicado ao inquilino ou uma estratégia de prefixo de banco de dados aprovada para o host.
- Uma raiz de sistema de arquivos dedicada ao inquilino.
- Uma entrada no registro do inquilino que mapeia o site para seu banco de dados, caminho raiz, nome de host e modelo de isolamento.
- Um resultado de verificação de migração antes que o inquilino seja considerado ativo.

## Vinculação do Host do Banco de Dados {#database-host-binding}

A Versão 1.2.0 altera o comportamento padrão de vinculação de host na mesma máquina para instalações soberanas. Valores na mesma máquina, como `localhost`, são normalizados para que Bedrock, FrankenPHP e instalações do WordPress conteinerizadas possam conceder e verificar permissões contra a string de host que o MySQL realmente vê.

Ao configurar um inquilino soberano:

1. Defina o host do banco de dados para o valor exigido pelo runtime do inquilino.
2. Use `localhost` para instalações locais de socket quando o host espera conexões locais.
3. Use `127.0.0.1` ou um nome de host de serviço apenas quando o servidor de banco de dados conceder privilégios a esse host.
4. Execute a verificação de migração após alterar a vinculação do host.

Se a verificação relatar falhas na concessão, compare as concessões do usuário do DB do inquilino com a vinculação do host configurada. Um usuário concedido para `user@localhost` é diferente de `user@127.0.0.1` ou `user@%`.

## Raiz do Sistema de Arquivos {#filesystem-root}

La root del tenant deve essere stabile durante i riavvii e i deploy. Evita percorsi di mount temporanei. Per installazioni in stile Bedrock, conferma che la root del tenant punti alla web root di WordPress attesa dal bootstrap del tenant, non solo alla root del progetto.

## Ordine di provisioning {#provisioning-order}

Per i nuovi tenant sovrani, usa questo ordine:

1. Crea l'entry del registro del tenant.
2 Crea il database e l'utente del database del tenant.
3 Bootstrap dello schema del tenant.
4 Provisiona gli utenti del tenant.
5 Configura i percorsi del filesystem del tenant.
6 Esegui la verifica della migrazione.
7 Cambia il routing o il DNS dopo che la verifica è andata a buon fine.

Questo ordine impedisce ai tenant parzialmente isolati di ricevere traffico prima che il database writer, gli utenti e il filesystem siano pronti.

## Flussi di gestione dei clienti sovrani {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 mantiene le azioni di gestione dei clienti sul sito principale quando è abilitato il modo sovrano. Un tenant può comunque funzionare come installazione WordPress isolata, ma le azioni rivolte ai clienti che dipendono dalla fatturazione di rete, dall'adesione o dai dati dell'account condiviso dovrebbero reindirizzare il cliente al sito principale invece di tentare di completare l'azione all'interno del runtime del tenant.

Il flusso del sito principale si applica a:

- Checkout e modifiche al piano.
- Panoramica dell'account e azioni del profilo cliente.
- Aggiornamenti dell'indirizzo di fatturazione e schermate di gestione dei pagamenti.
- Visualizzazioni delle fatture e della cronologia dei pagamenti.
- Azioni di gestione del sito come l'aggiunta o la cancellazione di un sito.
- Cambio template.
- Mappatura del dominio e modifiche al dominio principale.

Quando un cliente inizia una di queste azioni da un tenant sovrano, Ultimate Multisite crea l'URL del sito principale corrispondente e conserva il tenant sorgente come destinazione di ritorno quando è sicuro farlo. Questo permette ai clienti di completare l'azione gestita rispetto ai record della rete e poi tornare al contesto del tenant senza duplicare lo stato di fatturazione o iscrizione nel database sovrano.

Per gli operatori, la regola pratica è: mantenere le pagine di fatturazione, account, checkout, fattura, template e gestione del dominio disponibili sul sito principale per le reti sovrane. Le dashboard dei tenant possono linkare a quelle pagine, ma il sito principale rimane la fonte della verità per l'azione.
