---
title: Céadtaíocht CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Intégráisiú CyberPanel

Is gníomh sé an t-eolas seo a chur ar fáil gur féidir leat a chuidaithe (agus a bhaint/a bhaint) domáin a bhaineann i gceolais chomh maidir le CyberPanel, mar virtual hosts ag cur isteach go mbeidh siad sa net. Is é sin ag cur isteach an t-eolas seo ar fáil, agus is féidir leis an t-eolas SSL authaite (auto-SSL) a bheith agat trí Let's Encrypt.

## Cad a Bhíonn sé Agairm {#what-it-does}

- Nuair a bhaineann domán i Ultimate Multisite, leann an t-eolas seo ar API CyberPanel chun virtual host a chur isteach do domáin sin.
- Nuair a bhaineann an fhaointeach domáin, leann an t-eolas seo ar API chun an virtual host a dhéanamh a bhaineann leis.
- Nuair a bheith auto-SSL ag fáil, leann an t-eolas seo an t-eolas cert a chur isteach trí Let's Encrypt go dtí an t-amach tar éis a chur isteach an virtual host.
- Ag cur isteach/a bhaint an alias `www.` mar gheall ar chuid "Auto-create www subdomain" ag cur isteach agat i curteacha Domán Bhaineann (Domain Mapping settings).

## Cad a Bhíonn sé Agairm {#prerequisites}

- An t-amach CyberPanel ag déanamh cinnte go bhfuil sé ag gníomh (v2.3 nó níos fearr ar aghaidh) agus go bhfuil sé ag fáil ó chuid server WordPress.
- Un website ag cur isteach i CyberPanel a bhaineann leat an net WordPress agat atá ag cur isteach virtual hosts sin ar an server.
- Is féidir é a bheith ag cur isteach API CyberPanel. Búedh an athbhreithniú (authentication) go leat an username agus an password de chuid admin CyberPanel.
- Is féidir leat a bheith ag cur isteach na record DNS do domáin a bhaineann i gceolais ar an IP de chuid server trí fhaointeach domáin chun cert a shonraithe a bheith ag cur isteach go héifeachtach.

## Cad a Bhíonn sé Agairm {#requirements}

Is gcurfadh na cúanta seo i do curteacha `wp-config.php`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Is féidir leat ag cur isteach an t-amach seo ag cur isteach:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — anail SSL a dhuit an domán a chur arís
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Used for contact with SSL certificate
```

## Instruction a Chúsaíocht {#setup-instructions}

### 1. Fáilte an API CyberPanel {#1-enable-the-cyberpanel-api}

1. Log in go cur do dashboard CyberPanel mar admin.
2. Go to **Security** > **SSL** agus féach ar an t-aistriú SSL ar an bhfó CyberPanel seo (is cinnte go bhfuil sé actív ar an fáil) (is cinnte leat é seo chun API a chur ar fáil).
3. Tá an API CyberPanel ar fáil ag `https://your-server-ip:8090/api/` mar chomhtháir. Níl aon cheiste eile ag cur arís chun é a chruinneadh — tá sé ar fáil go leor do chuid admin.

### 2. Add Constants ar wp-config.php {#2-add-constants-to-wp-configphp}

Add an cúanta seo ar fáil i bhfáile `wp-config.php` deara an línte "/* That's all, stop editing! */":

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

To enable auto-SSL (is cinnte leat é seo):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Fáil an Iompair {#3-enable-the-integration}

1. Ag do network admin WordPress, go cur **Ultimate Multisite** > **Settings**.
2. Go leat ar an tab **Domain Mapping**.
3. Scroll go cur leat ar **Host Integrations**.
4. Enable an iompair CyberPanel.
5. Click **Save Changes**.

### 4. Fáil an Connáir {#4-verify-connectivity}

Use an test connáir a bhí ar fáil i d'fháil:

1. Róg go **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Click **Test Connection**.
3. A meánasán féin a fáilteann aistíonn sé go bhfuil an plugin ag fáil ar an API de CyberPanel agus ag teachtáil go ceart.

## Conas Tá É seo Ag Réiteach {#how-it-works}

### Domain Mapping (Mapeadh Domáina) {#domain-mapping}

Nuair a bhíonn domáin ag mapeadh i Ultimate Multisite:

1. Taispeann an isteach (integration) rithrigh `POST` ar `/api/createWebsite` ar do host CyberPanel.
2. Críonn CyberPanel host nua virtual host chun an domáin leat ar chuid deacairt.
3. Isíonn an root document a bheith ag cur isteach (set) chun an rialachán WordPress leat a bheith ag cur isteach.
4. Nuair a bhíonn an mapeadh domáina ag tsláth, tá an isteach ag ceann ar `/api/deleteWebsite` chun an virtual host a glanadh.

### Auto-SSL (Auto-SSL) {#auto-ssl}

Nuair atá `WU_CYBERPANEL_AUTO_SSL` ag teachtáil:

1 Tar éis lá mór an virtual host, tá an isteach ag ceann ar `/api/issueSSL` do domáin.
2 Tá CyberPanel ag iarraidh cert Let's Encrypt a bheith ag cur isteach ag an chiall ACME HTTP-01.
3 Buidíonn CyberPanel leathrú cert go hiomlán beag tar éis an t-amhas.

> **Important:** Is féidir leis Let's Encrypt domáin a sholáir go ceart tar éis a bhaint amach ar an chuid IP de do server chun an domáin a sholáir. Má tá an t-amhas SSL ag fáil go léir tar éis an mapeadh, cuir i gceart an t-amhas DNS a bheith ag cur isteach agus réiteach an SSL ó dháiríre CyberPanel ar an bhfoghlaigh **SSL** > **Manage SSL**.

### www Subdomain (Subdomain www) {#www-subdomain}

Má tá **Auto-create www subdomain** ag teachtáil i do chuid ríomhpháirtí Domain Mapping, tá an isteach ag críochnaigh hefyd alias virtual host chun `www.<domáin>` agus, nuair atá Auto-SSL ag teachtáil, tá cert a bheith ag cur isteach ar an bhfoghlaigh agus ar na fáil (apex) agus www.

### Email Forwarders (Foirmeanna E-mail) {#email-forwarders}

Nuair an [addon: Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) atá ar fáil, leat a bheith ag CyberPanel ag cur isteach féachracha e-mail chun éifeachtach do chuidiste. Bidh na féachracha seo ag cur an t-aonáid (messages) ó chuid domáin go sin éifeachtach gan creideamh cabhrúil (full mailbox), a bhfuil siad ag éifeachtach le aliasí mar `info@customer-domain.test` nó `support@customer-domain.test`.

Ar primaill an t-aonáid féachraí do chuidiste:

1. Cuir ar fáil an t-aonáid CyberPanel seo a bhaineann leat agus féachraíonn an teastáil (connection test) go díreach.
2. Fáil ar an cungóla e-mail CyberPanel i ardán na rathacha an t-aonáid Emails.
3. Cuir ar fáil an domán chuidiste ag CyberPanel primaill go sin primaill a chur isteach.
4. Creoliad féachr a testáil agus cur an t-aonáid (message) tríd é, leathanach an t-aonáid seo a chur ar fáil ar na pléan prodruit.

Má tá an creoliad féachraí ag déanamh go hiomlán, léigh an logaí activiteat (activity logs) de Ultimate Multisite ar an áit ar an chéad, agus féach ar CyberPanel chun a fháil ar an domán sin atá ag tairiscint agus ar an úsáid API (API user) chun rathacha e-mail a dhéanamh.

## Cúram Fhinn (Configuration Reference) {#configuration-reference}

| Constant | Aistriú | Deiridh | Príomhscéal |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Is | — | URL lúthán go hiomlán do do chuid CyberPanel, mar example: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Is | — | Úsáid admin de CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Is | — | Cúram admin de CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Is | `Default` | Pack an chuid CyberPanel a chur ar fáil do nua hostaí virtual |
| `WU_CYBERPANEL_AUTO_SSL` | Níl | `true` | Déan cert SSL Let's Encrypt tar éis an creoliad domáin |
| `WU_CYBERPANEL_PHP_VERSION` | Níl | `PHP 8.2` | Versiún PHP do nua hostaí virtual (rá thuairt ag cur isteach i CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Níl | — | E-mail contact chun an cert SSL a chur ar fáil |

## Note Dáta {#important-notes}

(Níl aon rud eile a bhaint amach.)

Nú a bhfeic an API de CyberPanel usa athbhreithne token-based ar seisiún. Bheann an cur chuim (integration) a laighinn an t-token go dtí ar chuid each API call.
Is féidir le do chontó admin de CyberPanel teachtanna (websites) a creóna agus a déanamh.
Rinntear CyberPanel ar port `8090` go dtí. Má tá an seirbhís tú ag úsáid firewall, cuir ar athrú an t-port seo chun é a bheith faisnéis ó chuid server WordPress.
Níl an cur chuim ag teachtanna DNS a bhaint amach. Is féidir leat a chur i bhfeic an DNS de do domain ar IP de do server prima ar bhealach a bhaineann in Ultimate Multisite.
Má a úsáid OpenLiteSpeed (OLS), bfeidmheas athrú go mhaith (graceful restart) ag teacht go dtí go dtí an t-host virtual changes. Níl aon fáil a dhéanamh ar an chéad.

## Treoicí {#troubleshooting}

### API Connection Refused {#api-connection-refused}

- Déan cinnte go bhfuil an port `8090` open ar do firewall de server.
- Féach ar an chuid `WU_CYBERPANEL_HOST` go bhfuil an protocóil (protocol) agus an port cuimhneachaithe ag cur chuim (https://).
- Déan cinnte go bhfuil an cert SSL de CyberPanel cuimhneachaithe; is féidir leis na cert self-signed a bheith ag teacht ar feadh TLS verification failures. Déan `WU_CYBERPANEL_VERIFY_SSL` ar `false` ach i ardán na ngrúpa private trusted.

### Authentication Errors {#authentication-errors}

- Déan cinnte go bhfuil do `WU_CYBERPANEL_USERNAME` agus `WU_CYBERPANEL_PASSWORD` cuimhneachaithe ag cur chuim (login) díreach ar CyberPanel.
- Laighíonn CyberPanel chonta pocha tar éifeachtach tar éifeachtach ar chuid athchláir login. Féach ar **Security** > **Brute Force Monitor** i CyberPanel má thá fáil ar na pocha.

### Domain Not Created {#domain-not-created}

- Féach ar an log cur chuim (activity log) de Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) ar meán leis an t-api error messages.
- Déan cinnte go bhfuil an package a chur i bhfeic i `WU_CYBERPANEL_PACKAGE` ag teacht ar CyberPanel (**Packages** > **List Packages**).
- Déan cinnte go bhfuil an domain ag bheith ag cur chuim (registered) mar website i CyberPanel — is féidir leat éiríse a creóna website, rud a thaispeánann error.

### SSL Certificate Not Issued {#ssl-certificate-not-issued}

- Confirme go bhfuil an DNS déanaithe go léir: seo `dig +short your-domain.com` ar fáil ar IP de do server.
- Tá Let's Encrypt ag cur leat méidí ar chuid rath. Má tá tú ag cur certs go mbeara níos lán domáin anois, lean an taitneamh go léir primaite.
- Déan ar anailís na log SSL de CyberPanel oir **Logs** > **Error Logs** chun cinn áit faoi ghlúnaí a chur i gceart ar chuid certs.
- Mar chuid fáilte, leat ormhaid SSL go mbeara manualmente ó CyberPanel: **SSL** > **Manage SSL** > déan chun domáin > **Issue SSL**.

## Cionnaithe {#references}

- Documentation API de CyberPanel: https://docs.cyberpanel.net/docs/category/api
- Déan an t-amhairc SSL de CyberPanel: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Méidí rath Let's Encrypt: https://letsencrypt.org/docs/rate-limits/
