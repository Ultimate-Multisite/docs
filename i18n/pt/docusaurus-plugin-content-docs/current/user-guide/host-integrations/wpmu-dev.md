---
title: Integração WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integração WPMU DEV

## Visão Geral {#overview}
O WPMU DEV é uma plataforma completa para WordPress que oferece hospedagem, plugins e serviços para sites WordPress. Esta integração permite a sincronização automática de domínio e o gerenciamento de certificados SSL entre Ultimate Multisite e a hospedagem do WPMU DEV.

## Recursos {#features}
- Sincronização automática de domínio
- Gerenciamento de certificado SSL
- Tentativas estendidas de verificação de certificado SSL

## Requisitos {#requirements}
A integração detecta automaticamente se você está hospedando no WPMU DEV e usa a API embutida. Não é necessária nenhuma configuração adicional se você estiver hospedando no WPMU DEV.

A integração verifica a presença da constante `WPMUDEV_HOSTING_SITE_ID`, que é definida automaticamente ao hospedar no WPMU DEV.

## Instruções de Configuração {#setup-instructions}

### 1. Verificar a Hospedagem WPMU DEV {#1-verify-wpmu-dev-hosting}

Se você está hospedando no WPMU DEV, as constantes necessárias já devem estar definidas. Verifique se:

1. A constante `WPMUDEV_HOSTING_SITE_ID` está definida no seu ambiente
2. Você tem uma assinatura ativa do WPMU DEV com acesso à API

### 2. Habilitar a Integração {#2-enable-the-integration}

1. No painel de administração do WordPress, vá para Ultimate Multisite > Settings (Configurações)
2. Navegue até a aba "Domain Mapping" (Mapeamento de Domínio)
3. Role para baixo até "Host Integrations" (Integrações de Hospedagem)
4. Habilite a integração WPMU DEV
5. Clique em "Save Changes" (Salvar Alterações)

## Como Funciona {#how-it-works}

### Sincronização de Domínio {#domain-syncing}

Quando um domínio é mapeado no Ultimate Multisite:

1. A integração usa a API do WPMU DEV para adicionar o domínio à sua conta de hospedagem
2. Ela também adiciona automaticamente a versão www do domínio
3. O WPMU DEV cuida da configuração do domínio e da emissão do certificado SSL

### Gerenciamento de Certificado SSL {#ssl-certificate-management}

A integração está configurada para aumentar o número de tentativas de verificação do certificado SSL para a hospedagem da WPMU DEV, pois pode levar algum tempo para os certificados SSL serem emitidos e instalados. Por padrão, ela tentará até 10 vezes para a verificação do certificado SSL, em comparação com as 5 tentativas padrão.

## Observações Importantes {#important-notes}

### Remoção de Domínio {#domain-removal}

Atualmente, a API da WPMU DEV não oferece uma maneira de remover domínios. Quando um mapeamento de domínio é removido no Ultimate Multisite, o domínio permanecerá na sua conta de hospedagem da WPMU DEV. Você precisará removê-lo manualmente do painel de controle da hospedagem da WPMU DEV, se necessário.

### Autenticação da API {#api-authentication}

A integração usa a chave de API da WPMU DEV que está armazenada no seu banco de dados WordPress como a opção `wpmudev_apikey`. Isso é configurado automaticamente quando você conecta o seu site à WPMU DEV.

## Solução de Problemas {#troubleshooting}

### Problemas de Conexão da API {#api-connection-issues}
- Verifique se o seu site está corretamente conectado à WPMU DEV
- Confirme se a opção `wpmudev_apikey` está definida no seu banco de dados WordPress
- Certifique-se de que sua assinatura na WPMU DEV esteja ativa

### Problemas com o Certificado SSL {#ssl-certificate-issues}
- A WPMU DEV pode levar algum tempo para emitir certificados SSL (geralmente de 5 a 15 minutos)
- A integração está configurada para verificar até 10 vezes os certificados SSL
- Se os certificados SSL ainda não estiverem sendo emitidos após várias tentativas, entre em contato com o suporte da WPMU DEV

### Domínio Não Adicionado {#domain-not-added}
- Verifique os logs do Ultimate Multisite em busca de quaisquer mensagens de erro
- Confirme se o domínio ainda não foi adicionado à WPMU DEV
- Certifique-se de que seu plano de hospedagem na WPMU DEV suporta o número de domínios que você está adicionando
