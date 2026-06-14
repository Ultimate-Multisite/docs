---
title: Mga Batakang Konsepto
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Mga Batakang Konsepto

Para sa bag-o nga user sa WordPress Multisite ug kinsa nagsugod pa lang gamiton ang Ultimate Multisite, daghan gyud og bag-ong mga pulong ug phrase nga kinahanglan imong masagutan una. Importante ni kay kinahanglan nimo masabtan kung unsaon paggana ang platform ug unsaon kini sa tibuok.

Niining article, atong sugo kon unsaon paghatag ug ipasabot ang pipila ka importanteng konsepto sa WordPress. Ang uban ni mas importante para sa mga user, uban para sa mga developer, ug uban para sa duha.

## WordPress Multisite

Ang **Multisite** sa WordPress kay usa ka klase sa instalasyon sa WordPress nga nagtugot kanimo sa paghimo ug pagdumala og network sa daghang websites gikan sa usa lang ka WordPress dashboard. Mahimo nimong i-manage ang tanan, lakip na ang gidaghanon sa mga site, features, themes, ug user roles. Mahimo nimong i-manage ang mga cientos ug libo ka sites.

## Network

Sa termino sa WordPress, ang multisite network kay diin ang pipila ka **subsites** mahimong ma-manage gikan sa usa lang ka dashboard. Bisan tuod nagkalain-lain ang paghimo og multisite network depende sa hosting provider, ang resulta kasagaran kay gamay ra nga mga direksyon sa file nga **wp-config.php** aron ipahibalo sa WordPress nga nag-operate kini sa espesyal nga mode.

Aduna'y pipila ka lahi nga mga kalainan tali sa usa ka multisite network ug usa ka stand-alone WordPress installation nga atong mubo nga hisgutan.

## Database

Ang database kay usa ka estruktura, organisado nga set sa data. Sa terminolohiya sa computing, ang database nagtumong sa software nga gigamit sa pag-store ug pag-organisa sa data. Hunahunaa kini isip file cabinet diin imong gipahimutang ang data sa lain-laing seksyon nga gitawag og tables.

Ang WordPress Multisite naggamit og usa ka database ug ang matag subsite makahatag sa iyang kaugalingon nga mga tables uban ang blog id sa prefix, busa kung mag-install ka og network installation imong database ug maghimo og subsite, kinahanglan naa kay kining mga tables:

_wp_1_options_ \- options table para sa unang subsite

_wp_2_options_ \- options table para sa ikalawang subsite

## Hosting provider

Ang hosting provider ay isang kumpanya na nagbibigay-daan sa mga negosyo at indibidwal na gawing available ang kanilang mga website sa World Wide Web. Ang mga serbisyo na inaalok ng web hosting providers ay iba-iba pero karaniwan ay kasama ang disenyo ng website, espasyo para sa storage sa host, at koneksyon sa Internet.

## Domain

Ang domain name ay isang address na ginagamit ng mga tao para bisitahin ang iyong site. Sinasabi nito sa web browser kung saan hahanapin ang iyong site. Katulad ng street address, ang domain ay kung paano binibisita ng mga tao ang iyong website online. At, parang may sign sa harap ng iyong tindahan. Kung gusto mong bisitahin ang aming website, kailangan mong i-type ang web address namin sa address bar ng browser mo na ito ay [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _, kung saan ang [**ultimatemultisite.com**](http://ultimatemultisite.com) ang domain name.

## Subdomain

Ang subdomain ay isang uri ng hierarchy ng website sa ilalim ng pangunahing domain, pero imbes na gumamit ng mga folder para ayusin ang content sa isang website, parang may sarili itong website. Ipinapakita ito bilang [**https://site1.domain.com/**](https://site1.domain.com/) kung saan ang _site1_ ay ang pangalan ng subdomain at [_domain.com_](http://domain.com) ang pangunahing domain.

## Subdirectory

Ang subdirectory ay isang uri ng hierarchy ng website sa ilalim ng root domain na gumagamit ng mga folder para ayusin ang content sa isang website. Ang subdirectory ay katulad ng subfolder at maaari itong gamitin nang palitan ang pangalan. Ipinapakita ito bilang [**https://domain.com/site1**](https://domain.com/site1) kung saan ang _site1_ ay ang pangalan ng subdirectory at [_domain.com_](http://domain.com) ang pangunahing domain.

## Subsite

Ang Subsite kay usa ka child site nga imong gihimo sa Multisite network. Mahimong **subdomain** o **subdirectory** kini depende kung unsaon pag-configure sa imong WordPress Multisite installation.

## Super Admin

Ang WordPress Super Admin kay usa ka user role nga adunay bug-os nga gahum aron ma-manage ang tanang subsites sa usa ka Multisite network. Para sa mga Super Admin sa Multisite, kini ang **pinakataas nga lebel sa access** nga imong mahatag sa imong WordPress installation.

## Plugin

Sa kinatibuk-an, ang plugin kay usa ka set sa code nga nagdadagdag og dugang functionality sa imong WordPress site. Mahimong gamay lang kini sama sa pag-usab sa login logo o komplikado sama sa pagdugang og e-commerce functionality. Ang _Woocommerce_ ug _Contact Form_ mga pananglitan sa plugin.

Sa usa ka WordPress Multisite, ang mga plugin mahimong i-install lamang gikan sa network admin dashboard pinaagi sa Super Admin. Ang mga Subsite Admin makapabukod (activate) ug makapatay (deactivate) og plugins sulod sa ilang subsites lang.

## Themes

Ang WordPress theme kay usa ka grupo sa mga files (_graphics, style sheets, ug code_) nga nag-uhat sa kinatibuk-ang hitsura sa site. Naghatag kini sa tanang front-end styling sama sa font styling, page layout, kolor, etc.

Pareho sa plugins, ang mga theme sa WordPress Multisite mahimong i-install lamang sa Super Admin ug mahimong ma-activate sa lebel sa subsites sa mga subsite admin.

## Site Template

Ang **Site Template** kay usa ka boilerplate site nga mahimong gamiton isip base kung maghimo og bag-ong sites sa imong network.

Nagpasabot kini nga pwede kang maghimo og base site, mag-activate og lain-laing plugins, mag-set og active theme, ug i-customize kini sa bisan unsang paagi nga gusto nimo. Unya, kung ang imong customer maghimo og bag-ong account, imbes nga makakuha sila og default WordPress site nga walay makahuluganon nga sulod niini, makakuha sila og kopya sa imong base site nga naay tanang customizations ug content na anaa na.

## Domain Mapping

Ang **Domain mapping** sa WordPress kay usa ka paagi para i-redirect ang mga user ngadto sa husto nga host pinaagi sa address sa website. Sa WordPress Multisite, ang mga subsites gi-create gamit ang subdirectory o subdomain. Ang domain mapping nagtugot niini sa mga user sa subsite nga mogamit og top-level domain sama sa [**joesbikeshop.com**](http://joesbikeshop.com) aron mas magporma ang ilang site address ug magpakita kini nga mas propesyonal.

## SSL

Ang SSL nagpasabot sa **Secure Sockets Layer**. Kini usa ka digital certificate nga nagpamatuod sa pagkatawo sa usa ka website ug nagtugot og encrypted connection. Karon, gigamit kini isip standard technology para sa pagpadayon sa koneksyon sa internet nga luwas ug pagpanalipod sa bisan unsang sensitibong data nga gihatag tali sa duha ka sistema, nga makapugong sa mga kriminal nga magbasa o mag-modify sa bisan unsang impormasyon nga gitransfer, lakip ang posibleng personal nga detalye. Kinahanglan kini sa modernong browser ug importante kini kung maghimo ug magpadagan og website.

## Media

Ang media mao ang mga hulagway (images), audio, video, ug uban pang mga file nga nagporma sa usa ka website.

Ang network sites nag-share og usa lang ka database sa WordPress Multisite, apan nagpabilin sila og lahi nga mga path sa filesystem para sa mga media files.

Ang standard na lokasyon sa WordPress (wp-content/uploads) nagpabilin; apan ang iyang path giusab aron ipakita ang unique ID sa network site. Tungod niini, ang mga media file alang sa usa ka network site modaghan isip wp-contents/uploads/site/[id].

## Permalinks

Ang Permalinks mao ang permanente nga URLs sa imong indibidwal nga blog post o page sulod sa imong site. Ang Permalinks gihimong **pretty links** usab. Sa default, ang mga URL sa WordPress naggamit og query string format nga morag kini:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ang Ultimate Multisite kay usa ka WordPress plugin, gihimo para sa mga WordPress Multisite install, nga nag-convert sa imong WordPress install ngadto sa usa ka premium network sa mga site – sama ni [WordPress.com](https://WordPress.com) – nga nagtugot sa mga kliyente sa paghimo og mga site pinaagi sa monthly, quarterly, o yearly fees (pwede pud kang maghimo og Free plans).

## Checkout Form

Ang Checkout Form kay usa ka single or multi-step order form nga naglakip sa paghimo og subsite, membership, ug user accounts pinaagi sa Ultimate Multisite registration. Kini adunay lain-laing mga field ug payment forms nga kinahanglan i-submit sa usa ka user panahon sa sign-up process.

## Webhook

Ang webhook (gitawag usab og web callback o HTTP push API) kay pamaagi aron ang usa ka app makahatag og real-time nga impormasyon sa ubang mga application. Ang webhook naghatag og data sa ubang mga application samtang kini nangabag, meaning makuha nimo dayon ang data.

**Ultimate Multisite webhooks** nagbukas og walay katapusan nga mga posibilidad, nga nagtugot sa mga network admin sa pagbuhat og tanang klase sa bali-balina apan mapuslanon nga integrations, ilabi na kung gigamit kini uban sa mga serbisyo sama ni _Zapier ug IFTTT_.

## Events

Ang Event kay usa ka aksyon nga mahitabo isip resulta sa aksyon sa user o laing source, sama sa mouse click. Ang Ultimate Multisite nagpabilin og rekord sa tanang events ug logs nga nangabag sulod sa imong tibuok network. Nag-track kini sa lain-laing mga kalihokan nga nahitabo sa imong multisite, sama sa pagbag-o sa plano.
