---
title: Integração com WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Integração WP Engine

## Visão geral
WP Engine é uma plataforma premium de hospedagem gerenciada WordPress que oferece desempenho otimizado, segurança e escalabilidade para sites WordPress. Esta integração permite a sincronização automática de domínios entre Ultimate Multisite e WP Engine.

## Funcionalidades
- Sincronização automática de domínios
- Suporte a subdomínios para instalações multisite
- Integração perfeita com os sistemas existentes do WP Engine

## Requisitos
A integração detecta automaticamente se você está hospedando no WP Engine e utiliza a API interna do WP Engine. Nenhuma configuração adicional é necessária se o plugin WP Engine estiver ativo e configurado corretamente.

No entanto, se você precisar configurar a integração manualmente, pode definir uma dessas constantes no seu arquivo `wp-config.php`:

```php
define('WPE_APIKEY', 'your_api_key'); // Preferred method
// OR
define('WPE_API', 'your_api_key'); // Alternative method
```

## Instruções de Configuração

### 1. Verificar o Plugin WP Engine
Se você está hospedando no WP Engine, o plugin WP Engine já deve estar instalado e ativado. Verifique se:
1. O plugin WP Engine está ativo
2. O arquivo `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` existe

### 2. Habilitar a Integração
1. No seu painel WordPress, vá para Ultimate Multisite > Configurações
2. Navegue até a aba "Mapeamento de Domínio"
3. Role para baixo até "Integrações de Host"
4. Habilite a integração WP Engine
5. Clique em "Salvar Alterações"

## Como Funciona

### Sincronização de Domínios
Quando um domínio é mapeado no Ultimate Multisite:
1. A integração utiliza a API do WP Engine para adicionar o domínio à sua instalação WP Engine
2. WP Engine lida com a configuração do domínio e a emissão do certificado SSL
3. Quando um mapeamento de domínio é removido, a integração removerá o domínio do WP Engine

### Suporte a Subdomínios
Para instalações multisite com subdomínios:
1. A integração adiciona cada subdomínio ao WP Engine quando um novo site é criado
2. WP Engine lida com a configuração do subdomínio
3. Quando um site é excluído, a integração removerá o subdomínio do WP Engine

## Observações Importantes

### Domínios Coringa
Para instalações multisite com subdomínios, recomenda-se entrar em contato com o suporte WP Engine para solicitar uma configuração de domínio coringa. Isso permite que todos os subdomínios funcionem automaticamente sem precisar adicionar cada um individualmente.

### Certificados SSL
WP Engine lida automaticamente com a emissão e renovação de certificados SSL para todos os domínios adicionados por meio desta integração. Nenhuma configuração adicional é necessária.

## Solução de Problemas

### Problemas de Conexão com a API
- Verifique se o plugin WP Engine está ativo e configurado corretamente
- Se você definiu a chave da API manualmente, verifique se está correta
- Entre em contato com o suporte WP Engine se estiver tendo problemas com a API

### Domínio Não Adicionado
- Verifique os logs do Ultimate Multisite em busca de mensagens de erro
- Verifique se o domínio ainda não foi adicionado ao WP Engine
- Certifique-se de que seu plano WP Engine suporte o número de domínios que você está adicionando

### Problemas com Subdomínios
- Se os subdomínios não estiverem funcionando, entre em contato com o suporte WP Engine para solicitar uma configuração de domínio coringa
- Verifique se as configurações de DNS estão corretamente configuradas para o domínio principal e os subdomínios
