---
title: Mga Pangunahing Konsepto
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Mga Pangunahing Konsepto {#basic-concepts}

Para sa isang bagong user ng WordPress Multisite at para sa sinumang nagsisimula pa lang gumamit ng Ultimate Multisite, maraming bagong salita at parirala ang kailangan mong matutunan sa simula. Mahalaga ito dahil kailangan mong maintindihan ang platform at kung paano ito gumagana nang buo.

Sa artikulong ito, susubukan nating tukuyin at ipaliwanag ang ilang mahahalagang konsepto sa WordPress. Ang ilan ay mas mahalaga para sa mga user, ang iba naman para sa mga developer, at mayroon ding pareho.

## WordPress Multisite {#wordpress-multisite}

Ang **Multisite** ng WordPress ay isang uri ng instalasyon ng WordPress na nagpapahintulot sa iyo na gumawa at pamahalaan ang isang network ng maraming website mula sa iisang WordPress dashboard. Maaari mong pangasiwaan ang lahat, kasama ang bilang ng mga site, features, themes, at user roles. Posible ring mag-manage ka ng daan-daan o libu-libong sites.

## Network {#network}

Sa konteksto ng WordPress, ang multisite network ay kung saan maraming **subsite** ang maaaring pamahalaan mula sa iisang dashboard. Bagama't nagkakaiba ang paggawa ng multisite network depende sa hosting provider, ang resulta ay karaniwang ilang dagdag na direksyon sa file na **wp-config.php** para sabihan si WordPress na ito ay gumagana sa partikular na mode na ito.

Mayroong iba't ibang pagkakaiba sa pagitan ng isang multisite network at isang stand-alone na instalasyon ng WordPress na maikli nating tatalakayin.

## Database {#database}

Ang database ay isang naka-istrukturado, organisadong hanay ng data. Sa terminolohiya ng kompyuter, ang database ay tumutukoy sa software na ginagamit upang mag-imbak at mag-organisa ng data. Isipin mo ito bilang isang filing cabinet kung saan nag-iimbak ka ng data sa iba't ibang seksyon na tinatawag na tables.

Ang WordPress Multisite ay gumagamit ng iisang database at ang bawat subsite ay may sariling mga table na may blog id sa prefix, kaya kapag nag-install ka ng network installation mo at lumikha ka ng subsite, dapat ay magkakaroon ka ng mga ganitong tables:

_wp_1_options_ \- options table para sa unang subsite

_wp_2_options_ \- options table para sa pangalawang subsite

## Tagapagbigay ng Hosting (Hosting provider) {#hosting-provider}

Ang hosting provider ay isang kumpanya na nagbibigay-daan sa mga negosyo at indibidwal na maging available ang kanilang mga website sa World Wide Web. Ang mga serbisyo na inaalok ng mga web hosting provider ay iba-iba pero karaniwan ay kasama ang disenyo ng website, espasyo para sa storage sa host, at koneksyon sa Internet.

## Domain {#domain}

Ang domain name ay isang address na ginagamit ng mga tao para bisitahin ang iyong site. Sinasabi nito sa web browser kung saan hahanapin ang iyong site. Katulad ng street address, ang domain ay kung paano binibisita ng mga tao ang iyong website online. At, parang may karatula sa harap ng iyong tindahan. Kung nais mong bisitahin ang aming website, kailangan mong i-type ang web address namin sa address bar ng browser mo na ito ay [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _, kung saan ang [**ultimatemultisite.com**](http://ultimatemultisite.com) ang domain name.

## Subdomain {#subdomain}

Ang subdomain ay isang uri ng hierarchy ng website sa ilalim ng pangunahing domain, pero sa halip na gumamit ng mga folder para ayusin ang nilalaman sa isang website, parang may sarili itong website. Ipinapakita ito bilang [**https://site1.domain.com/**](https://site1.domain.com/) kung saan ang _site1_ ay ang pangalan ng subdomain at [_domain.com_](http://domain.com) ang pangunahing domain.

## Subdirectory {#subdirectory}

Ang subdirectory ay isang uri ng hierarchy ng website sa ilalim ng root domain na gumagamit ng mga folder para ayusin ang nilalaman sa isang website. Ang subdirectory ay katulad ng subfolder at ang mga pangalan ay maaaring magkapalit. Ipinapakita ito bilang [**https://domain.com/site1**](https://domain.com/site1) kung saan ang _site1_ ay ang pangalan ng subdirectory at [_domain.com_](http://domain.com) ang pangunahing domain.

## Subsite {#subsite}

Ang Subsite ay isang child site na ginagawa mo sa isang Multisite network. Maaari itong maging **subdomain** o **subdirectory** depende sa kung paano naka-configure ang iyong WordPress Multisite installation.

## Super Admin {#super-admin}

Ang WordPress Super Admin ay isang user role na may buong kakayahan para pamahalaan ang lahat ng subsites sa isang Multisite network. Para sa mga gumagamit ng Multisite, ito ang **pinakamataas na antas ng access** na maaari mong ibigay sa iyong WordPress installation.

## Plugin {#plugin}

Sa pangkalahatan, ang plugin ay isang set ng code na nagdaragdag ng dagdag na functionality sa iyong WordPress site. Maaaring simple lang ito tulad ng pagpapalit ng login logo o kaya naman ay kumplikado gaya ng pagdaragdag ng e-commerce functionality. Ang _Woocommerce at Contact Form_ ay mga halimbawa ng plugin.

Sa isang WordPress Multisite, ang mga plugin ay maaari lamang i-install mula sa network admin dashboard ng Super Admin. Ang mga Subsite Admin ay maaari lamang mag-activate at mag-deactivate ng mga plugin sa loob ng kanilang subsite.

## Themes {#themes}

Ang WordPress theme ay isang grupo ng mga file (_graphics, style sheets, at code_) na nagdidikta sa pangkalahatang itsura ng site. Nagbibigay ito ng lahat ng front-end styling tulad ng font styling, layout ng pahina, kulay, atbp.

Pareho sa plugins, ang mga theme sa WordPress Multisite ay maaari lamang i-install ng Super Admin at maaaring i-activate sa level ng subsite ng mga subsite admin.

## Site Template {#site-template}

Ang **Site Template** ay isang boilerplate site na magagamit bilang base kapag gumagawa ka ng mga bagong site sa iyong network.

Ibig sabihin, maaari kang gumawa ng base site, mag-activate ng iba't ibang plugins, magtakda ng active theme, at i-customize ito sa kahit anong paraan mo gusto. Pagkatapos, kapag ang iyong customer ay gumawa ng bagong account, imbes na makakuha sila ng default WordPress site na walang kabuluhang nilalaman, makakakuha sila ng kopya ng iyong base site na may lahat ng customizations at nilalaman na naka-set na.

## Domain Mapping {#domain-mapping}

Ang **Domain mapping** sa WordPress ay paraan para i-redirect ang mga user papunta sa tamang host, gamit ang address ng website. Sa isang WordPress Multisite, ang mga subsite ay ginagawa gamit ang subdirectory o subdomain. Ang domain mapping naman ay nagpapahintulot sa mga user ng subsite na gumamit ng top-level domain tulad ng [**joesbikeshop.com**](http://joesbikeshop.com) para magmukhang mas propesyonal ang address ng kanilang site.

## SSL {#ssl}

Ang SSL ay nangangahulugang **Secure Sockets Layer**. Ito ay isang digital certificate na nagpapatunay sa pagkakakilanlan ng isang website at nagbibigay-daan para sa naka-encrypt na koneksyon. Sa kasalukuyan, ito ang standard technology para panatilihing ligtas ang internet connection at protektahan ang anumang sensitibong data na ipinapadala sa pagitan ng dalawang sistema, pinipigilan ang mga kriminal na basahin o baguhin ang anumang impormasyong ipinapadala, kasama na ang posibleng personal na detalye. Kinakailangan ito ng mga modernong browser kapag gumagawa at nagpapatakbo ng website.

## Media {#media}

Ang media ay mga imahe, audio, video, at iba pang mga file na bumubuo sa isang website.

Ang mga network site ay nagbabahagi ng iisang database sa WordPress Multisite, habang pinapanatili nila ang magkahiwalay na mga path sa filesystem para sa mga media file.

Nanatili ang standard na lokasyon ng WordPress (wp-content/uploads); gayunpaman, binabago nito ang path upang ipakita ang natatanging ID ng network site. Dahil dito, ang mga media file para sa isang network site ay lumilitaw bilang wp-contents/uploads/site/[id].

## Permalinks {#permalinks}

Ang Permalinks ay ang permanenteng URL ng iyong indibidwal na blog post o pahina sa loob ng iyong site. Ang Permalinks ay tinatawag ding **pretty links**. Sa default, gumagamit ang mga URL ng WordPress ng query string format na mukhang ganito:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite {#ultimate-multisite}

Ang Ultimate Multisite ay isang WordPress plugin na ginawa para sa mga WordPress Multisite install, na nagpapalit sa iyong WordPress install tungo sa isang premium na network ng mga site – parang [WordPress.com](https://WordPress.com) – na nagpapahintulot sa mga kliyente na gumawa ng mga site gamit ang buwanan, quarterly, o taunang bayad (maaari ka ring gumawa ng Free plans).

## Checkout Form {#checkout-form}

Ang Checkout Form ay isang order form na iisa lang o maraming hakbang na kinasasangkutan ng paggawa ng subsite, membership, at user accounts sa pamamagitan ng Ultimate Multisite registration. Ito ay binubuo ng iba't ibang fields at payment forms na dapat isumite ng user habang nag-sign up.

## Webhook {#webhook}

Ang webhook (tinatawag ding web callback o HTTP push API) ay isang paraan kung paano magbibigay ang isang app ng real-time na impormasyon sa ibang mga application. Ipinapadala ng webhook ang data sa ibang mga application habang nangyayari, ibig sabihin, agad kang makakatanggap ng data.

Ang Ultimate Multisite webhooks ay nagbubukas ng walang katapusang posibilidad, na nagpapahintulot sa mga network admin na gumawa ng iba't ibang malupit pero kapaki-pakinabang na integrations, lalo na kung gagamitin ito kasama ng mga serbisyo tulad ng _Zapier at IFTTT_.

## Events {#events}

Ang Event ay isang aksyon na nangyayari bilang resulta ng aksyon ng user o isa pang source, gaya ng mouse click. Itinatala ng Ultimate Multisite ang lahat ng events at logs na nangyayari sa buong network mo. Sinusubaybayan nito ang iba't ibang aktibidad na nangyayari sa iyong multisite, tulad ng pagbabago ng plano.
