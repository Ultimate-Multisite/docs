---
title: Multilocação Hostinger
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Multi-Tenancy Hostinger {#hostinger-multi-tenancy}

Ultimate Multisite: Multi-Tenancy 1.2.0 adiciona uma funcionalidade de multi-tenancy da Hostinger, permitindo que domínios hospedados participem do provisionamento de inquilinos soberanos ao lado da integração existente de mapeamento de domínio da Hostinger.

Use esta funcionalidade quando os domínios dos inquilinos e a infraestrutura isolada dos inquilinos são gerenciados através do hPanel da Hostinger.

## Notas de configuração {#setup-notes}

1. Configure a integração principal da Hostinger em **Ultimate Multisite > Settings > Host Integrations**.
2. Confirme se o token da API da Hostinger pode gerenciar o domínio ou subdomínio alvo.
3. Habilite o addon Multi-Tenancy.
4. Configure a estratégia de isolamento do inquilino antes de publicar o inquilino.
5. Execute o fluxo de trabalho de verificação de migração antes de enviar tráfego de produção para o inquilino.

A funcionalidade da Hostinger usa a conexão compartilhada da Hostinger para operações no lado do host. O DNS ainda deve apontar para a conta correta da Hostinger, e os limites da conta do hPanel continuam aplicáveis.

## Mudanças específicas da funcionalidade {#capability-specific-changes}

- Inquilinos soberanos podem ser criados com operações de domínio conscientes do host.
- As strings de host de banco de dados na mesma máquina são normalizadas antes da verificação de permissão.
- Inquilinos gerenciados pela Hostinger devem usar o valor do host do banco de dados mostrado no hPanel, a menos que o runtime do WordPress exija uma sobrescrita local.
- Visitas SSO dependem do domínio do inquilino resolver para o inquilino hospedado pela Hostinger.

## Solução de problemas de inquilinos da Hostinger {#troubleshooting-hostinger-tenants}

- Se a instalação de um inquilino falhar, verifique se o domínio já está anexado à conta da Hostinger.
- Se a verificação do banco de dados falhar, compare o nome de usuário do DB do inquilino, o nome do banco de dados e a vinculação do host com o hPanel.
- Se **Visit (SSO)** falhar, confirme se o DNS e o SSL estão ativos para o domínio do inquilino.
- Se o desmonte deixar recursos do host para trás, remova quaisquer bancos de dados, usuários ou pastas restantes do hPanel após confirmar os backups.
