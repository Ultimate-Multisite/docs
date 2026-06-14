---
title: Assistente de Configuração Multissite
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Assistente de Configuração Multisite

O Ultimate Multisite inclui um assistente embutido que converte automaticamente uma instalação padrão do WordPress em uma rede WordPress Multisite. Isso elimina a necessidade de editar manualmente o `wp-config.php` ou executar comandos do banco de dados.

:::tip
Se sua instalação do WordPress já estiver rodando como uma rede Multisite, você pode pular esta etapa inteiramente. O assistente só aparece quando o Multisite ainda não está habilitado.
:::

## Quando o Assistente Aparece?

Ao ativar o Ultimate Multisite em uma instalação padrão (não-Multisite) do WordPress, o plugin detecta que o Multisite não está habilitado e automaticamente redireciona você para o Assistente de Configuração Multisite em vez do assistente de configuração normal.

Você também pode acessá-lo diretamente em **WP Admin > Ultimate Multisite > Multisite Setup**.

## Pré-requisitos

Antes de executar o assistente, certifique-se de que:

- Você tem **acesso de administrador** à sua instalação do WordPress
- O arquivo `wp-config.php` do seu servidor é **gravável** pelo servidor web
- Você tem um **backup recente** dos seus arquivos e banco de dados

:::warning
O assistente modifica o seu arquivo `wp-config.php` e cria novas tabelas no banco de dados. Sempre crie um backup antes de prosseguir.
:::

## Passo 1: Boas-vindas

A primeira tela explica o que é o WordPress Multisite e o que o assistente fará:

- Habilitar o recurso Multisite na sua configuração do WordPress
- Criar as tabelas de banco de dados da rede necessárias
- Adicionar as constantes multisite exigidas ao `wp-config.php`
- Ativar a Ultimate Multisite na rede

![Assistente de Configuração Multisite - Passo Boas-vindas](/img/installation/multisite-wizard/wizard-welcome.png)

Clique em **Continuar** para prosseguir.

## Passo 2: Configuração da Rede

Esta etapa pede para você configurar as configurações da sua rede.

### Estrutura do Site

Escolha como seus sites da rede serão organizados:

- **Subdomínios** (Recomendado) — Os sites terão seu próprio subdomínio, por exemplo, `site1.yourdomain.com`
- **Subdiretórios** — Os sites são criados como caminhos, por exemplo, `yourdomain.com/site1`

:::note
Se você escolher subdomínios, precisará configurar um **DNS curinga (wildcard DNS)** e um **certificado SSL curinga**. A maioria dos hosts WordPress gerenciados faz isso automaticamente. Consulte [Ultimate Multisite 101](./ultimate-multisite-101) para uma comparação detalhada.
:::

### Título da Rede

Insira um nome para sua rede. Por padrão, ele usa o título do seu site atual com "Network" anexado. Você pode mudar isso mais tarde nas configurações da rede.

### E-mail do Administrador da Rede

O endereço de e-mail usado para notificações de administração da rede. Por padrão, usa o endereço de e-mail do usuário atual.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Após preencher os campos, clique em **Continuar** para prosseguir.

## Passo 3: Instalação

Clique no botão **Instalar** para começar. O wizard realiza cinco etapas automatizadas em sequência, mostrando o progresso de cada uma delas em tempo real:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Passo | Descrição |
|------|-------------|
| **Habilitar Multisite** | Adiciona a constante `WP_ALLOW_MULTISITE` ao arquivo `wp-config.php` |
| **Criar Rede** | Cria as tabelas do banco de dados do multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, etc.) e preenche-as com a sua configuração da rede |
| **Atualizar Configuração** | Adiciona as constantes finais do multisite ao `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, etc.) |
| **Corrigir Cookies** | Garante que o URL do site esteja correto nos metadados da rede para evitar problemas de autenticação após a ativação |
| **Ativar Plugin de Rede** | Ativa o Ultimate Multisite para que ele funcione em toda a rede |

Cada passo exibe um destes status:

- **Pendente** — Aguardando ser processado
- **Instalando...** — Em execução atualmente
- **Sucesso!** — Concluído com sucesso
- **Mensagem de erro** — Ocorreu um erro (a mensagem descreverá o problema)

Assim que todos os passos forem concluídos com sucesso, você verá um status verde "Sucesso!" para cada item:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

O assistente (wizard) prosseguirá automaticamente para a tela de conclusão.

## Passo 4: Concluir

Após a instalação ser concluída, você verá uma mensagem de sucesso confirmando que o WordPress Multisite foi habilitado.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Agora você pode continuar com o assistente Ultimate Multisite para configurar sua plataforma WaaS (detalhes da empresa, conteúdo padrão, gateways de pagamento, etc.).

:::note
Após a conclusão da instalação do multisite, seu navegador será redirecionado através do novo administrador de rede habilitado. Você pode precisar fazer login novamente, pois os cookies de autenticação são atualizados para o ambiente multisite.
:::

## Plano B: Configuração Manual (Fallback)

Se o assistente não conseguir escrever no seu arquivo `wp-config.php` (devido a permissões de arquivo ou restrições do servidor), ele exibirá o código exato que você precisa adicionar manualmente:

1. As **constantes do wp-config.php** que precisam ser adicionadas acima da linha `/* Isso é tudo, pare de editar! */`.
2. As **regras de reescrita (.htaccess)** apropriadas para a estrutura do seu site escolhida (subdomínio ou subdiretório).

Após fazer as alterações manuais, atualize a página e o assistente detectará que o multisite está ativo.

## Solução de Problemas (Troubleshooting)

### O assistente diz que wp-config.php não é gravável

O processo do seu servidor web precisa de permissão de escrita no arquivo `wp-config.php`. Você pode:

- Mudar temporariamente as permissões do arquivo para `644` ou `666`.
- Usar as instruções de configuração manual fornecidas pelo assistente.
- Pedir ajuda ao seu provedor de hospedagem.

### Sites não estão acessíveis após a configuração (subdomínios)

Se você escolheu a estrutura de subdomínio, precisa configurar o **DNS curinga (wildcard DNS)** para o seu domínio. Adicione um registro DNS:

```
Tipo: A (ou CNAME)
Host: *
Valor: [seu IP do servidor]
```

Verifique com seu provedor de hospedagem se não tiver certeza de como configurar isso.

### Problemas de autenticação após a configuração

Se você estiver deslogado ou encontrar erros de cookie após a configuração do multisite:

1. Limpe os cookies do seu navegador para o site.
2. Faça login novamente em `seu-dominio.com/wp-login.php`.
3. Se o problema persistir, verifique se o seu `wp-config.php` não tem `COOKIE_DOMAIN` definido como `false` — este é um problema conhecido em instalações multisite com subdomínio.

### Uma etapa falhou durante a instalação

Se um dos passos da instalação mostrar um erro:

1. Anote a mensagem de erro exibida.
2. Volte para o passo de configuração e tente novamente.
3. Se o erro persistir, verifique o log de erros do PHP do seu servidor para obter mais detalhes.
4. Os passos que já foram concluídos serão ignorados em execuções subsequentes (o instalador é idempotente).
