---
title: Integração WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integração WPMU DEV

## Visão geral
WPMU DEV é uma plataforma WordPress abrangente que oferece hospedagem, plugins e serviços para sites WordPress.  
Esta integração permite sincronização automática de domínios e gerenciamento de certificados SSL entre Ultimate Multisite e hospedagem WPMU DEV.

## Funcionalidades
- Sincronização automática de domínios
- Gerenciamento de certificados SSL
- Tentativas estendidas de verificação de certificado SSL

## Requisitos
A integração detecta automaticamente se você está hospedando no WPMU DEV e usa a API interna. Nenhuma configuração adicional é necessária se você estiver hospedando no WPMU DEV.  

A integração verifica a presença da constante `WPMUDEV_HOSTING_SITE_ID`, que é definida automaticamente ao hospedar no WPMU DEV.

## Instruções de Configuração

### 1. Verificar Hospedagem WPMU DEV
Se você está hospedando no WPMU DEV, as constantes necessárias já devem estar definidas. Verifique se:
1. A constante `WPMUDEV_HOSTING_SITE_ID` está definida em seu ambiente
2. Você tem uma assinatura ativa do WPMU DEV com acesso à API

### 2. Habilitar a Integração
1. No seu painel WordPress, vá para Ultimate Multisite > Configurações
2. Navegue até a aba **Mapeamento de Domínio**
3. Role para baixo até **Integrações de Hospedagem**
4. Habilite a integração WPMU DEV
5. Clique em **Salvar Alterações**

## Como Funciona

### Sincronização de Domínios
Quando um domínio é mapeado no Ultimate Multisite:
1. A integração usa a API WPMU DEV para adicionar o domínio à sua conta de hospedagem
2. Ela também adiciona automaticamente a versão www do domínio
3. O WPMU DEV lida com a configuração do domínio e a emissão do certificado SSL

### Gerenciamento de Certificado SSL
A integração está configurada para aumentar o número de tentativas de verificação de certificado SSL para hospedagem WPMU DEV, pois pode levar algum tempo para que os certificados SSL sejam emitidos e instalados. Por padrão, ela tentará até 10 vezes a verificação de certificado SSL, em comparação com os 5 tentativas padrão.

## Observações Importantes

### Remoção de Domínio
Atualmente, a API WPMU DEV não oferece uma maneira de remover domínios. Quando um mapeamento de domínio é removido no Ultimate Multisite, o domínio permanecerá em sua conta de hospedagem WPMU DEV. Você precisará removê-lo manualmente do painel de hospedagem WPMU DEV, se necessário.

### Autenticação da API
A integração usa a chave da API WPMU DEV que está armazenada em seu banco de dados WordPress como a opção `wpmudev_apikey`. Isso é configurado automaticamente quando você conecta seu site ao WPMU DEV.

## Solução de Problemas

### Problemas de Conexão da API
- Verifique se seu site está corretamente conectado ao WPMU DEV
- Verifique se a opção `wpmudev_apikey` está definida em seu banco de dados WordPress
- Certifique-se de que sua assinatura WPMU DEV está ativa

### Problemas de Certificado SSL
- O WPMU DEV pode levar algum tempo para emitir certificados SSL (geralmente 5-15 minutos)
- A integração está configurada para verificar até 10 vezes os certificados SSL
- Se os certificados SSL ainda não forem emitidos após várias tentativas, entre em contato com o suporte WPMU DEV

### Domínio Não Adicionado
- Verifique os logs do Ultimate Multisite em busca de mensagens de erro
- Verifique se o domínio já não está adicionado ao WPMU DEV
- Certifique-se de que seu plano de hospedagem WPMU DEV suporte o número de domínios que você está adicionando
