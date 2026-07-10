---
title: An Cúram Dé Chuid Multisite
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Anailís an Déan Multisite {#multisite-setup-wizard}

Inaugúir Ultimate Multisite áit an t-aonach (built-in wizard) a bhfaidh sé athrú go WordPress Multisite network ar chuid dearsnach WordPress. Is é seo ag cur isteach an t-aonach a bheith agat, rud a bhíonn ag fáil amach le gníomhartha a dhéanamh ar `wp-config.php` nó ar chuid deimhneacha database.

:::tip
Má tá an t-aonach WordPress agat atá ag déanamh mar Multisite network, is féidir leat an áit seo a léamh go hiomlán. Tá an t-aonach ag déanamh cur isteach beag ach níl sé ag déanamh ar Multisite ag fáil amach.
:::

## Cad a bhíonn an t-aonach agat? {#when-does-the-wizard-appear}

Nuair a chur in áit Ultimate Multisite ar chuid WordPress atá ag déanamh mar standard (non-Multisite), leonaidh an plugin go bhfuil Multisite níl ag déanamh agus a chur idir tú go hiomlán go cur isteach an t-aonach Setup Wizard deAth instead of an t-aonach setup ar fáil.

Is féidir leat sé hefyd a léamh go díreach ar **WP Admin > Ultimate Multisite > Multisite Setup**.

## Príobháidí {#prerequisites}

Ar chuid dearsnach a dhéanamh ar an t-aonach, déan cinnte go bhfuil:

- Bhainn agat **access administrator** ar an WordPress atá ag déanamh
- Tá an cur `wp-config.php` ar do server **writable** (cóir) le chéile le an web server
- Tá tú **backup níos nua** de do chuid fáil agus deimhneacha

:::warning
Tá an t-aonach ag athrú ar do `wp-config.php` agus ag cur tábla deimhneacha nua. Déan sempre backup primaidha primaidh ár gníomhartha a dhéanamh.
:::

## Step 1: Féileadh {#step-1-welcome}

An áit céanna leonaidh a chur in áit an t-aonach a bhíonn ar an t-aonach WordPress Multisite agus a bhfuil ag déanamh an t-aonach:

- Fáilte ar feidhm Multisite i do cur WordPress
- Creoliú na tábla deimhneacha network a bheidh ag déanamh
- Add an chuntas constants multisite ag cur in áit `wp-config.php`
- Activate Ultimate Multisite ar fáil ar an t-aonach

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Cliceáil ar **Continue** chun é a dhéanamh.

## Step 2: Cuidistiona Network {#step-2-network-configuration}

íonn an áit seo ag iarraidh agat cur isteach do chuid cuidistiona network.

### Site Structure {#site-structure}

Déanann conas a bheith do siti ngrúpaí ar an t-aonlaíocht:

- **Sub-domains** (Ráinntaigh is féidir é seo) — Bheitheanna gairm do chuid sub-domain, achais, e.g. `site1.yourdomain.com`
- **Sub-directories** — Bheitheanna a chur ar fáil mar páth, e.g. `yourdomain.com/site1`

:::note
Má thug tú sub-domains ar fáil, leat labhairt le **wildcard DNS** agus **wildcard SSL certificate** do domain. Tá an tairgseán na hothairí WordPress a chuidíonn leis seo go mbeola. Déan cinnte go léir do chuid féachana ar [Ultimate Multisite 101](./ultimate-multisite-101) chun a bheith ag iarraidh foirmeadh leat.
:::

### Tairgseán Ngrúpaí (Network Title) {#network-title}

Gabháil ainm do ngrúpa. Tá sé ag cur isteach an tairgseán atá agat ar an sinte le "Network" a chluainteach go dtí. Is féidir leat é seo athrú leater mar gheall ar na curteacha ngrúpaí.

### Email Admin Ngrúpaí (Network Admin Email) {#network-admin-email}

An email a bheith ag úsáid chun na iontaí rialtair admin ngrúpaí a chur ar fáil. Tá sé ag cur isteach an email atá agat ar an chuid úsáideach.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Tar éifeachtar na feidirm, cliceáil ar **Continue** chun cur isteach.

## Step 3: Installation (An tAonlaíocht) {#step-3-installation}

Cliceáil ar an nútair **Install** chun an tAonlaíocht a fhágáil. Déanann an feidirm ceadach na chuid stópanna atá ag cur isteach go mbeola, agus tá sé ag léamh an t-amach ar an amach:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Step | Onde a descriçã |
|------|-------------|
| **Ativá Multisite** | Adiciona a constante `WP_ALLOW_MULTISITE` ao ficheiro `wp-config.php` |
| **Criar Rede** | Cria as tabelas de base de dados do multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, etc.) e preenche-as com a tua configuração da rede |
| **Atualizar Configuração** | Adiciona as constantes finais do multisite ao `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, etc.) |
| **Corrigir Cookies** | Garante que a URL do site está correta na metadados da rede para evitar problemas de autenticação depois da ativação |
| **Ativar Plugin de Rede** | Ativa o Ultimate Multisite para que funcione em toda a rede |

Cada passo mostra um destes estados:

- **Pending (Pendente)** — À espera de ser processado
- **Installing... (A instalar...)** — A correr no momento
- **Success! (Sucesso!)** — Concluído com sucesso
- **Error message (Mensagem de erro)** — Ocorreu um erro (a mensagem descreverá o problema)

Assim que todos os passos terminarem com sucesso, verás um estado verde "Success!" para cada item:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

O wizard irá depois avançar automaticamente para a ecrã de conclusão.

## Passo 4: Concluir {#step-4-complete}

Depois de terminar a instalação, verás uma mensagem de sucesso que confirma que o WordPress Multisite foi ativado.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Podes agora continuar com o wizard de configuração do Ultimate Multisite para configurar a tua plataforma WaaS (detalhes da empresa, conteúdo padrão, gateways de pagamento, etc.).

:::note
Tar é an cur síllte multisite leatach go leim, bead féin do chroí (browser) ag cur isteach trí admin netwerc atá nua. Beartaithe agat go mbeartú ar fad againn mar a bhfáthú na cúilte athrúcháin (authentication cookies) chun an chuid multisite.
:::

## Fallback Manual Setup {#manual-setup-fallback}

Má tá an fáil (wizard) ag cur isteach i do `wp-config.php` (nuair a bhíonn tráchtálaí féin nó restrictrúidí ar an server), beidh sé ag tairiscint an cod ar fháil atá agat:

1. An **constants de wp-config.php** a bhí ag cur isteach ar an chuid seo, leat é a chur ar fáil ar an línte sin: `/* That's all, stop editing! */`
2. An **rewrite rules .htaccess** atá ag cur isteach iad atá ag tairiscint do struchtúr site atá agat (subdomain nó subdirectory).

Tar éifeachtach leat an tharrathú manual, agus an cur síllte ag cur isteach, beidh sé ag féachaint go bhfuil multisite ag teacht ar fáil anois.

## Troubleshooting {#troubleshooting}

### Tá wp-config.php gan cur isteach (not writable) {#the-wizard-says-wp-configphp-is-not-writable}

Tá an chroí web atá ag cur isteach le feidhm cur isteach ar an fáil `wp-config.php`. Beidh tú ag cur isteach:

- Athrú féin an cur isteach ar `644` nó `666` go dtí an t-am.
- Aistriú iad an cur síllte fallback manual a chur ar fáil leat de do chroí.
- Aistriú leis an t-áirítear (hosting provider) chun cabhrú.

### Níl na siteanna ag cur isteach tar éifeachtach (subdomains) {#sites-are-not-accessible-after-setup-subdomains}

Má bhí tú ag cur isteach struchtúr subdomain, leat tú a chur ar fáil **wildcard DNS** do do domain. Adhrainn cur record DNS:

```
Type: A (or CNAME)
Host: *
Value: [your server IP]
```

Chrau leis an t-áirítear agat má níl tú cinnte go bhfuil sé ag cur isteach seo.

### Probleanna cúilte tar éifeachtach tar éifeachtach {#authentication-issues-after-setup}

Má tá tú ag cur isteach nó ag iarraidh cúilte (cookie) errors tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éife

Má tá aon cheann de na stópais oibríochta ag teacht ar an t-earráid:

1. Note an meán ar an t-earráid a bhféadfadh é a bheith ag tairbheallt.
2. Bhéal seachaint go dtí an stópais de chuid fhearchnaí agus ansin isteach againn.
3. Má tá an t-earráid ag teacht arís, léigh an log éarráid PHP de do chuid server chun níos mó curtha iad.
4. Beidh na stópais a bhonraithe déanaithe ar athchláir eile (is é an installer idom).
