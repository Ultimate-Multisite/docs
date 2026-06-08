---
title: Outomatiese Soek en Vervang in Siteskanke
sidebar_position: 8
_i18n_hash: ae72baba9155f43f2ca762880ece1e5c
---
# Outomatiese Soek en Vervang in Witwebwerf-sjabloons (v2)

_**Hierdie lesing vereis WP UItimo weergawe 2.x.**_

Een van die kragtigste kenmerke van Ultimate Multisite is die vermoë om willekeurige teks, kleur en keusevelde by die registrasieformulier by te voeg. Sodra ons daardie data vasgevang het, kan ons dit gebruik om die inhoud in sekere dele van die geselekteerde witwebwerf-sjabloon vooraf te vul. Daarna, wanneer die nuwe witwebwerf gepubliseer word, sal Ultimate Multisite die plekhouers vervang met die werklike inligting wat tydens die registrasie ingevoer is.

Byvoorbeeld, jy kan jou sjabloonwitwebwerwe met plekhouers ontwerp. Plekhouers moet omring word deur dubbele kurleëls – {{naam_van_plekhouer}}.

Dan kan jy eenvoudig 'n ooreenstemmende registrasieveld byvoeg om daardie data vas te vang.

Jou kliënt sal dan daardie veld tydens die registrasie kan invul.

Ultimate Multisite sal dan die plekhouers outomaties vervang met die data wat deur die kliënt verskaf is.

## **Oplos van die "sjabloon vol plekhouers" probleem**

Dit alles is wonderlik, maar ons kom wel teë 'n lelike probleem: nou is ons witwebwerf-sjabloons – wat deur ons kliënte besoek kan word – vol lelike plekhouers wat nie veel vertel nie.

Om dit op te los, bied ons die opsie om valse waardes vir die plekhouers te stel, en ons gebruik daardie waardes om die inhoud daarvan op die sjabloonwitwebwerwe te soek en te vervang terwyl jou kliënte besoek.

Jy kan toegang tot die plekhouers-inhoudredigeerder kry deur na **Ultimate Multisite > Settings > Sites** te gaan, en dan, op die sybalk, die Edit Placeholders-skakel te klik.

![Edit Placeholders link in the Sites settings sidebar](/img/config/settings-sites.png)

Dit neem jou na die plekhouers se inhoudredigeerder, waar jy plekhouers en hul ooreenstemmende inhoud kan byvoeg.

![Placeholders content editor with placeholder names and values](/img/config/settings-sites.png)
