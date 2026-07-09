---
title: Outomatiese Soek en Vervang in Werfsjablone
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Outomatiese soek en vervang in webwerf-sjablone (v2)

_**Hierdie handleiding vereis WP UItimo weergawe 2.x.**_

Een van die kragtigste kenmerke van Ultimate Multisite is die vermoë om arbitrêre teks-, kleur- en keusevelde by die registrasievorm te voeg. Sodra ons daardie data vasgelê het, kan ons dit gebruik om die inhoud in sekere dele van die gekose webwerf-sjabloon vooraf in te vul. Wanneer die nuwe webwerf dan gepubliseer word, sal Ultimate Multisite die plekhouers vervang met die werklike inligting wat tydens registrasie ingevoer is.

Jy kan byvoorbeeld jou sjabloonwebwerwe met plekhouers opstel. Plekhouers moet bygevoeg word omring deur dubbele krulhakies - {{placeholder_name}}.

Dan kan jy eenvoudig ’n ooreenstemmende registrasieveld byvoeg om daardie data vas te lê

Jou kliënt sal dan daardie veld tydens die registrasie kan invul.

Ultimate Multisite sal dan die plekhouers outomaties vervang met die data wat deur die kliënt verskaf is.

## **Los die “sjabloon vol plekhouers”-probleem op**

Dit alles is wonderlik, maar ons loop wel ’n lelike probleem raak: nou is ons webwerf-sjablone - wat deur ons kliënte besoek kan word - vol lelike plekhouers wat nie veel sê nie.

Om dit op te los, bied ons die opsie om vals waardes vir die plekhouers in te stel, en ons gebruik daardie waardes om hul inhoud op die sjabloonwebwerwe te soek en te vervang terwyl jou kliënte dit besoek.

Jy kan toegang tot die sjabloonplekhouer-redigeerder kry deur na **Ultimate Multisite > Instellings > Webwerwe** te gaan, af te rol na die Webwerf-sjabloonopsies-area, en dan op die **Wysig plekhouers**-skakel te klik.

![Webwerf-sjabloonopsies-area op die Webwerwe-instellingsbladsy](/img/config/settings-sites-templates-section.png)

Dit sal jou na die plekhouers se inhoudredigeerder neem, waar jy plekhouers en hul onderskeie inhoud kan byvoeg.

![Ingangspunt vir die sjabloonplekhouer-redigeerder](/img/config/settings-sites-templates-section.png)
