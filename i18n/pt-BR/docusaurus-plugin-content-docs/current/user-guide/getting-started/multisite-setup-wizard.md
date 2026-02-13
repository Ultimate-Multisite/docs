---
title: Assistente de Configuração Multisite
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Assistente de Configuração Multisite

O Ultimate Multisite inclui um assistente integrado que converte automaticamente uma instalação padrão do WordPress em uma rede Multisite do WordPress. Isso elimina a necessidade de editar manualmente `wp-config.php` ou executar comandos no banco de dados.

:::tip
Se sua instalação do WordPress já estiver funcionando como uma rede Multisite, você pode pular esta etapa completamente. O assistente só aparece quando o Multisite ainda não está habilitado.
:::

## Quando o Assistente Aparece?

Quando você ativa o Ultimate Multisite em uma instalação padrão (não Multisite) do WordPress, o plugin detecta que o Multisite não está habilitado e redireciona automaticamente você para o Assistente de Configuração Multisite em vez do assistente de configuração regular.

Você também pode acessá-lo diretamente em **WP Admin > Ultimate Multisite > Configuração Multisite**.

## Pré-requisitos

Antes de executar o assistente, certifique-se de que:

- Você tem **acesso de administrador** à sua instalação do WordPress
- O arquivo `wp-config.php` do seu servidor é **gravável** pelo servidor web
- Você tem um **backup recente** dos seus arquivos e banco de dados

:::warning
O assistente modifica seu arquivo `wp-config.php` e cria novas tabelas no banco de dados. Sempre crie um backup antes de prosseguir.
:::

## Etapa 1: Boas-vindas

A primeira tela explica o que é o WordPress Multisite e o que o assistente fará:

- Habilitar o recurso Multisite na sua configuração do WordPress
- Criar as tabelas de banco de dados necessárias para a rede
- Adicionar as constantes multisite necessárias ao `wp-config.php`
- Ativar em rede o Ultimate Multisite em toda a rede

![Assistente de Configuração Multisite - Etapa de Boas-vindas](/img/installation/multisite-wizard/wizard-welcome.png)

Clique em **Continuar** para prosseguir.

## Etapa 2: Configuração da Rede

Esta etapa pede que você configure as configurações da sua rede.

### Estrutura do Site

Escolha como os sites da sua rede serão organizados:

- **Subdomínios** (Recomendado) — Sites recebem seu próprio subdomínio, por exemplo, `site1.seudominio.com`
- **Subdiretórios** — Sites são criados como caminhos, por exemplo, `seudominio.com/site1`

:::note
Se você escolher subdomínios, precisará configurar **DNS wildcard** e um **certificado SSL wildcard** para seu domínio. A maioria dos hosts WordPress gerenciados lida com isso automaticamente. Veja [Ultimate Multisite 101](./ultimate-multisite-101) para uma comparação detalhada.
:::

### Título da Rede

Digite um nome para sua rede. O padrão é o título atual do seu site com "Rede" adicionado. Você pode alterar isso mais tarde nas configurações da rede.

### E-mail do Administrador da Rede

O endereço de e-mail usado para notificações de administração da rede. O padrão é o endereço de e-mail do usuário atual.

![Assistente de Configuração Multisite - Configuração da Rede](/img/installation/multisite-wizard/wizard-network-configuration.png)

Depois de preencher os campos, clique em **Continuar** para prosseguir.

## Etapa 3: Instalação

Clique no botão **Instalar** para começar. O assistente executa cinco etapas automatizadas em sequência, cada uma mostrando seu progresso em tempo real:

![Assistente de Configuração Multisite - Instalação pendente](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Etapa | Descrição |
|------|-------------|
| **Enable Multisite** | Adiciona a constante `WP_ALLOW_MULTISITE` ao `wp-config.php` |
| **Create Network** | Cria as tabelas de banco de dados multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, etc.) e as preenche com a configuração da sua rede |
| **Update Configuration** | Adiciona as constantes finais multisite ao `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, etc.) |
| **Fix Cookies** | Garante que a URL do site esteja correta nos metadados da rede para evitar problemas de autenticação após a ativação |
| **Network Activate Plugin** | Ativa em rede o Ultimate Multisite para que ele funcione em toda a rede |

Cada etapa exibe um desses status:

- Pendente — Aguardando ser processado
- Instalando... — Em execução
- Sucesso! — Concluído com sucesso
- Mensagem de erro — Ocorreu um erro (a mensagem descreverá o problema)

Quando todas as etapas forem concluídas com sucesso, você verá um status verde "Sucesso!" para cada item:

![Assistente de Configuração Multisite - Instalação concluída](/img/installation/multisite-wizard/wizard-installation-complete.png)

O assistente então prosseguirá automaticamente para a tela de conclusão.

## Etapa 4: Concluído

Quando a instalação estiver concluída, você verá uma mensagem de sucesso confirmando que o WordPress Multisite foi habilitado.

![Assistente de Configuração Multisite - Configuração Concluída](/img/installation/multisite-wizard/wizard-complete.png)

Você pode agora continuar com o assistente de configuração do Ultimate Multisite para configurar sua plataforma WaaS (detalhes da empresa, conteúdo padrão, gateways de pagamento, etc.).

:::note
Após a conclusão da instalação multisite, seu navegador será redirecionado através do novo administrador de rede. Você pode precisar fazer login novamente, pois os cookies de autenticação são atualizados para o ambiente multisite.
:::

## Configuração Manual de Reserva

Se o assistente não puder escrever no seu arquivo `wp-config.php` (devido a permissões de arquivo ou restrições do servidor), ele exibirá o código exato que você precisa adicionar manualmente:

1. As **constantes do wp-config.php** que precisam ser adicionadas acima da linha `/* That's all, stop editing! */`
2. As **regras de reescrita do .htaccess** apropriadas para a estrutura de site escolhida (subdomínio ou subdiretório)

Depois de fazer as alterações manuais, atualize a página e o assistente detectará que o multisite agora está ativo.

## Solução de Problemas

### O assistente diz que wp-config.php não é gravável

O processo do seu servidor web precisa de permissão de gravação no arquivo `wp-config.php`. Você pode:

- Alterar temporariamente as permissões do arquivo para `644` ou `666`
- Usar as instruções de configuração manual de reserva fornecidas pelo assistente
- Pedir assistência ao seu provedor de hospedagem

### Sites não são acessíveis após a configuração (subdomínios)

Se você escolheu a estrutura de subdomínio, precisa configurar o **DNS wildcard** para seu domínio. Adicione um registro DNS:

```
Type: A (or CNAME)
Host: *
Value: [your server IP]
```

Verifique com seu provedor de hospedagem se você não tem certeza de como configurar isso.

### Problemas de autenticação após a configuração

Se você foi desconectado ou está experimentando erros de cookie após a configuração multisite:

1. Limpe os cookies do seu navegador para o site
2. Faça login novamente em `seudominio.com/wp-login.php`
3. Se o problema persistir, verifique se seu `wp-config.php` não tem `COOKIE_DOMAIN` definido como `false` — isso é um problema conhecido em instalações multisite de subdomínio

### Uma etapa falhou durante a instalação

Se uma das etapas de instalação exibir um erro:

1. Anote a mensagem de erro exibida
2. Volte para a etapa de configuração e tente novamente
3. Se o erro persistir, verifique o log de erros PHP do seu servidor para mais detalhes
4. Etapas que já foram concluídas serão ignoradas em execuções subsequentes (o instalador é idempotente)
