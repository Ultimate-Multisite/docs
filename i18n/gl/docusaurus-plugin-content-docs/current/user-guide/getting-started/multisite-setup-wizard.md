---
title: Asistente de configuración de multisite
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Guía de Configuración Multisite

Ultimate Multisite trae un asistente incorporado que convierte automáticamente una instalación estándar de WordPress en una red de WordPress Multisite. Isto elimina a necesidade de editar manualmente o `wp-config.php` ou executar comandos do banco de datos.

:::tip
Se a súa instalación de WordPress ya está funcionando como unha rede Multisite, podes saltar este paso por completo. O asistente só aparece se Multisite non está habilitado todavía.
:::

## ¿Quando aparece o asistente? {#when-does-the-wizard-appear}

Cando activates Ultimate Multisite en unha instalación estándar (non-Multisite) de WordPress, o plugin detecta que Multisite non está habilitado e te redireixa automáticamente ao Asistente de Configuración Multisite en lugar do asistente de configuración habitual.

Tamén podes acceder directamente a ele en **WP Admin > Ultimate Multisite > Multisite Setup**.

## Pré-requisitos {#prerequisites}

Antes de executar o asistente, asegúrate de que:

- Tens **acceso de administrador** á túa instalación de WordPress
- O ficheiro `wp-config.php` do teu servidor é **modificable** para o servidor web
- Tens un **backup recente** dos teus ficheiros e do banco de datos

:::warning
O asistente modifica o teu ficheiro `wp-config.php` e crea novas tabelas do banco de datos. Sempre crea un backup antes de continuar.
:::

## Passo 1: Boas vindas {#step-1-welcome}

A primeira pantalla explica o que é WordPress Multisite e o que fará o asistente:

- Habilitar a característica Multisite na configuración do teu WordPress
- Crear as necesarias tabelas do banco de datos da rede
- Añadir as constantes multisite necesarias a `wp-config.php`
- Activar Ultimate Multisite en toda a rede

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Pulsa **Continuar** para continuar.

## Passo 2: Configuración da Rede {#step-2-network-configuration}

Este paso te pedirá que configures as tes configuración da rede.

### Estrutura do Sitio {#site-structure}

Escolbase como organizar os seus sites da rede:

- **Subdomínios** (Recomendado) — Cada site terá o seu próprio subdomínio, por exemplo, `site1.yourdomain.com`
- **Subdiretórios** — Os sites são criados como caminhos, por exemplo, `yourdomain.com/site1`

:::note
Se escolher subdomínios, terá de configurar um **DNS wildcard** e um **certificado SSL wildcard** para o seu domínio. A maioria dos hosts WordPress geridos faz isto automaticamente. Consulte [Ultimate Multisite 101](./ultimate-multisite-101) para uma comparação detalhada.
:::

### Título da Rede {#network-title}

Introduza um nome para a sua rede. Por padrão, usa o título do seu site atual com "Network" acrescentado. Pode mudar isto mais tarde nas configurações da rede.

### Email de Administração da Rede {#network-admin-email}

O endereço de email usado para notificações de administração da rede. Por padrão, usa o endereço de email do utilizador atual.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Depois de preencher os campos, clique em **Continuar** para avançar.

## Passo 3: Instalação {#step-3-installation}

Clique no botão **Instalar** para começar. O wizard realiza cinco passos automáticos em sequência, mostrando o progresso de cada um em tempo real:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Passo | Descrição |
|------|-------------|
| **Ativar Multisite** | Adiciona a constante `WP_ALLOW_MULTISITE` ao arquivo `wp-config.php` |
| **Criar Rede** | Cria as tabelas de banco de dados do multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, etc.) e preenche-as com a sua configuração da rede |
| **Atualizar Configuração** | Adiciona as constantes finais do multisite ao `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, etc.) |
| **Corrigir Cookies** | Garante que o URL do site está correto nos metadados da rede para evitar problemas de autenticação após a ativação |
| **Ativar Plugin de Rede** | Ativa Ultimate Multisite para que funcione em toda a rede |

Cada passo exibe um destes status:

- **Pendente** — Aguardando ser processado
- **Instalando...** — A execução está em curso
- **Sucesso!** — Concluído com sucesso
- **Mensagem de erro** — Ocorreu um erro (a mensagem descreverá o problema)

Assim que todos os passos forem concluídos com sucesso, verá um status verde "Sucesso!" para cada item:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

O assistente irá então avançar automaticamente para o ecrã de conclusão.

## Passo 4: Concluir {#step-4-complete}

Depois da instalação estar completa, verá uma mensagem de sucesso a confirmar que o WordPress Multisite foi ativado.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Agora pode continuar com o assistente de configuração do Ultimate Multisite para configurar a sua plataforma WaaS (detalhes da empresa, conteúdo padrão, gateways de pagamento, etc.).

:::note
Despois de completar a instalación do multisite, o seu navegador será redireixido para o administrador da rede que acabou de activar. Pode ser necesario iniciar sesión de novo, porque os cookies de autenticación son actualizados para o ambiente multisite.
:::

## Fallback de Configuración Manual {#manual-setup-fallback}

Se o asistente non poder escribir no no seu ficheiro `wp-config.php` (debido a permisos do ficheiro ou restricións do servidor), ele mostrará o código exacto que necesita añadir manualmente:

1. As **constantes wp-config.php** que deben ser añadidas arriba da línea `/* Que é todo, pare de editar! */`
2. As **regras de reescrita .htaccess** apropiadas para a súa estutura de sitio elegida (subdomínio ou subdirectorio)

Despois de realizar as modificacións manuais, recarregue a página e o asistente detectará que o multisite está agora activo.

## Solución de Problemas {#troubleshooting}

### O asistente di que wp-config.php non é escribible {#the-wizard-says-wp-configphp-is-not-writable}

O proceso do seu servidor web necesita permiso de escrita no ficheiro `wp-config.php`. Pode:

- Modificar temporariamente os permisos do ficheiro para `644` ou `666`
- Usar as instrucións de fallback de configuración manual proporcionadas polo asistente
- Pedir axuda ao seu proveedor de alojamiento

### Os sitios non son accesibles despois da configuración (subdominios) {#sites-are-not-accessible-after-setup-subdomains}

Se escolleu a estutura de subdomínio, necesita configurar o **DNS wildcard** para o seu dominio. Añada un registro DNS:

```
Type: A (ou CNAME)
Host: *
Value: [o IP do seu servidor]
```

Verifique co seu proveedor de alojamiento se non está seguro de como configurar isto.

### Problemas de autenticación despois da configuración {#authentication-issues-after-setup}

Se está saído ou experimenta erros de cookies despois da configuración multisite:

1. Limpe os cookies do seu navegador para o sitio
2. Inicie sesión de novo en `yourdomain.com/wp-login.php`
3. Se o problema persiste, verifique que o seu `wp-config.php` non ten `COOKIE_DOMAIN` establecido como `false` — esta é unha situación conhecida nas instalacións multisite con subdomínio

### Un paso fallou durante a instalación {#a-step-failed-during-installation}

Se unha das fases da instalación mostra un erro:

1. Anote a mensaxe de erro que aparece.
2. Vaa de volta á fase de configuración e inténtalle de novo.
3. Se o erro persiste, verifique o log de erros do PHP do seu servidor para obter máis detalles.
4. As fases que ya se completaron serán saltadas nas réxitas seguintes (o instalador é idempotente).
