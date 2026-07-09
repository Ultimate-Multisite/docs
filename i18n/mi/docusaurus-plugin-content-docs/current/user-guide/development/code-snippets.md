---
title: Kōrero Kōrero
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Kōrero Kōrua mō v2 {#code-snippets-for-v2}

E tino, ngā code snippets mō **WordPress** he whakamahinga ki te whakamaoritanga i mahi-a-tahi e taea te whai anga i plugin iti. Ko ngā code snippets ei whakaaturia i tētahi file core of WordPress ana, ko theme, ahau (generally the functions.php file of your theme) ana, he taea ai whakamahinga i tehi mō MU plugin.

I tēnei article, ka whakaatu atu ahau i tētahi code snippet toru e taea te whakamahi ana me **Ultimate Multisite v2**:

  * [**Whakaorero te wāhi o te menu Account**](#changing-the-position-of-the-account-menu-item)

  * [**He aha te mea hei whakamārama mō te whakahaupū i te user he hoki ana ki te plan tino tika me/ata he subscription active**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Whakamutunga ngā CORS issues mō Font-Icons i mga domain whakahou**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Whakaorero te wāhi o te menu Account {#changing-the-position-of-the-account-menu-item}

Kia whakaorero te wāhi o te menu Account mo te Dashboard o tō client, he taea ai koe te whai i te code snippet berikut i te functions.php o te theme ana o tō site ana. He taea ai hoki te whae i te snippet i tētahi mu-plugin ana ko custom plugin.

add_filter('wu_my_account_menu_position', function() { return 10; // Whakaorero tēnei value ki te whai i te wāhi e tika ana o te menu.

Ki te whakamārama ki te whakaahua i te whaiako ana ko te subscription e active ana, koe e taea ai te whakamahi i te funktiwhi:

`wu_is_active_subscriber($user_id)`

I tēnei, he whakamārama iti (snippet) hei whakaatu ahau i te whakaaro ana mō te mea e hoki ana ko te user i runga i te plan-a tino tika (_Plan ID 50_) me te whaiako o te subscription o te user.

`$user_id = get_current_user_id(); $plan_id = 50; if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USER IS MEMBER OF PLAN AND HIS SUBSCRIPTION IS ACTIVE, DO STUFF} else { // USER IS NOT A MEMBER OF PLAN -- OR -- HIS SUBSCRIPTION IS NOT ACTIVE, DO OTHER STUFF} // end if;`

He tino nui te mea e hiahia ana ko **wu_has_plan** he "Plan ID" hei i hoatu i tō mahi.

Hei apa i te ID o te plan, koe e taea ai te pahi ki **Ultimate Multisite > Products**. Ko te ID o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te puta mai o te

Kua e hoki i roto i te whakamārama mō te mea nui: He pūmanawa (code snippets) mō te whakamaoritanga o te onua, he tino whai whakaaro nui ki te whakamahi i ngā whakamāramatanga o te server. Kei te mea, he tino pai ana ahau ki te hoki i te whakamārama mō te mea nui: He pūmanawa (code snippets) mō te whakamaoritanga o te onua, he tino whai whakaaro nui ki te whakamahi i ngā whakamāramatanga o te server.

### Apache {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}

I tō .htaccess file, whero i te mea:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#fixing-cors-issues-with-font-icons-in-mapped-domains}

I tō config file o te server (he wāhi e hoki mai i server ki server), whero i te mea:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
