---
title: Cúpla Clios Code
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Code Snippets para v2

An gcuid code snippets ar used chun eol chuid áiteann atá fáil ag cur isteach, a bhphiú mar atá ag iarraidh plugin eile a bheith ar fáil. Is gcinneann code snippets a chur iad sa chuid core WordPress nó an t-theme (goinnte functions.php dearg), nó is féidir a úsáid mar MU plugin.

Agus seo, beidh mé a chur chun cinn trí chuid code snippets a bhí ag cur isteach le **Ultimate Multisite v2**:

  * [**Changadh an áit ar an meán Account menu item**](#changing-the-position-of-the-account-menu-item)

  * [**Conas a fheiceáil má tá an úsáid ag cur iad ar plan a gnácha agus/nó bhfuil sé ag cur iad ar subscription activ**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**An t-amhasadh CORS issues le Font-Icons i ddomáina a bhfáthaithe**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Changadh an áit ar an meán Account menu item {#changing-the-position-of-the-account-menu-item}

Leat a bheith ag cur isteach an áit ar an meán Account menu item ar Dashboard na chliant, anseo, cur an t-amhasadh code seo i functions.php dearg an theme bunaithe dearg do site bunaithe. Is féidir leat hefyd a chur an t-amhasadh snippet seo sa chuid mu-plugins nó plugin custom.

add_filter('wu_my_account_menu_position', function() { return 10; // Tweak this value to place the menu in the desired position.

Leat a chomhartha chun an scroinn a bheith actív, leat a bheith ag úsáid an fhoint:

`wu_is_active_subscriber($user_id)`

Anseo tá sin é an t-amásán atá a chosaint ar an chuid is fearr. Tá an t-amásán seo ag déanamh cinnte go bhfuil an chuid actív ar an plan a bhfuil sé ag cur chun cinn (Plan ID 50) agus go bhfuil an scroinn a bheith actív.

`$user_id = get_current_user_id(); $plan_id = 50; if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // AN CHUID IS MEMBER DEAR AN PLAN LEA IS ACTÍV, DÁR AN TÁIN} else { // AN CHUID IS CHUAN MEMBER DEAR AN PLAN -- ORA -- NAIS ACTÍV SEO A CHUID, DÁR AN TÁIN} // end if;`

Is é an t-amásán **wu_has_plan** ag iarraidh "Plan ID" chun é a cheannach.

Leat a fháil ar ID plan, leat a ghuradh go dtí **Ultimate Multisite > Products**. Beidh ID de chomhthéacs chúac an t-amásán ar an chuid de chéadta.

Is é an t-amásán: is féidir leis na chuid a bheith ag cur chun cinn ar **Plan**, níl aon Package nó Service, mar is é sin add-ons do **Plan**.

![Products list showing plan IDs](/img/admin/products-list.png)

## Cuimhneachais CORS le Font-Icons i domáin a chomhtháirta {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}
## Cuimhneachais CORS le Font-Icons i domáin a chomhtháirta {#fixing-cors-issues-with-font-icons-in-mapped-domains}

Tar comhtháir an domáin ar scroinn, is féidir leat a bheith ag iarraidh go bhfuil an scroinn ag cur isteach font chúac. Is é sin ag cur isteach bloc cross-origin ar do chuid rathúil.

Mar go bhfuil na fáil fonta ag cur isteach go dtí CSS de dhuit, ní féidir leis an plugin a chomhtháir an domáin a líonadh an URL-a chun úsáid an domán a chomhtháirta instead of an domán ormhacha. Mar sin, chun an t-amásán a díriú, leat a bheith ag athrú ar do chuid curteáil rathúil.

An seo a chomh tábhachtach é an tairiscintí code seo chun an t-éifeadúcth a cheartadh le Apache agus NGINX. Is gcurraíonn an thabhairtanna seo do chuid fada chuid eolais ar na cur síosail oifigréid (na .htaccess files agus na config files de NGINX). Má tá tú gan fáil samhla leis an t-éifeadúcth a dhéanamh go dtí, cúise an cur síosail seo do chuid agents support an chéad a bhfaidh tú le cabhrú.

### Apache {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

Ar do .htaccess file, add an seo:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#apache}

Ar do config file de server (an t-amhlaigh cur síosail seo ó server go server), add an seo:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
