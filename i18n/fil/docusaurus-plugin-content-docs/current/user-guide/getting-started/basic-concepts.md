---
title: Mga Pangunahing Konsepto
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Mga Pangunahing Konsepto

Para sa bagong gumagamit ng WordPress Multisite at sa mga kakasimula pa lang gumamit ng Ultimate Multisite, maraming bagong salita at termino ang kailangang matutunan sa simula. Mahalagang aralin ang mga ito dahil kailangan mong maintindihan ang platform at kung paano ito gumagana sa kabuuan.

Sa artikulong ito, ipapaliwanag namin ang ilan sa mga mahahalagang konsepto sa WordPress. May mga mas angkop para sa mga user, may iba para sa mga developer, at may ilan na para sa pareho.

## WordPress Multisite

Ang WordPress **Multisite** ay isang uri ng WordPress installation na nagbibigay-daan sa iyong gumawa at mamahala ng maraming website mula sa iisang WordPress dashboard. Maaari mong pamahalaan ang lahat — mula sa bilang ng mga site, mga feature, theme, hanggang sa mga user role. Posibleng mamahala ng daan-daan o kahit libo-libong site.

## Network

Sa konteksto ng WordPress, ang multisite network ay kung saan ang maraming **subsite** ay maaaring pamahalaan mula sa iisang dashboard. Kahit magkakaiba ang proseso ng paggawa ng multisite network depende sa hosting provider, ang resulta ay karaniwang ilang karagdagang directive sa **wp-config.php** file para ipaalam sa WordPress na gumagana ito sa ganitong mode.

May ilang malinaw na pagkakaiba ang multisite network sa isang stand-alone na WordPress installation na tatalakayin natin nang maikli.

## Database

Ang database ay isang organisado at nakaayos na koleksyon ng datos. Sa terminolohiya ng computing, ang database ay tumutukoy sa software na ginagamit para mag-imbak at mag-ayos ng datos. Isipin mo itong parang filing cabinet kung saan iniimbak mo ang datos sa iba't ibang seksyon na tinatawag na mga table.

Ang WordPress Multisite ay gumagamit ng isang database at bawat subsite ay may sariling mga table na may blog id sa prefix. Kaya kapag nag-install ka ng network installation at gumawa ng subsite, dapat ay magkaroon ka ng mga table na ito:

_wp_1_options_ \- options table para sa unang subsite

_wp_2_options_ \- options table para sa pangalawang subsite

## Hosting provider

Ang hosting provider ay isang kompanyang nagbibigay-daan sa mga negosyo at indibidwal na ma-access ang kanilang website sa World Wide Web. Magkakaiba ang mga serbisyong iniaalok ng mga web hosting provider, pero kadalasang kasama dito ang website design, storage space sa isang host, at koneksyon sa Internet.

## Domain

Ang domain name ay ang address na ginagamit ng mga tao para bisitahin ang iyong site. Sinasabi nito sa web browser kung saan hahanapin ang iyong site. Tulad ng street address, ganito nakikita ng mga tao ang iyong website online. At parang may karatula sa harap ng iyong tindahan. Kung gusto mong bisitahin ang aming website, kailangan mong i-type ang aming web address sa address bar ng iyong browser na [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com)_,_ kung saan ang [**ultimatemultisite.com**](http://ultimatemultisite.com) ang domain name.

## Subdomain

Ang subdomain ay isang uri ng website hierarchy sa ilalim ng main domain, pero sa halip na gumamit ng mga folder para mag-organisa ng content sa website, parang nagkakaroon ito ng sarili nitong website. Ipinapakita ito bilang [**https://site1.domain.com/**](https://site1.domain.com/) kung saan ang _site1_ ang subdomain name at ang [_domain.com_](http://domain.com) ang main domain.

## Subdirectory

Ang subdirectory ay isang uri ng website hierarchy sa ilalim ng root domain na gumagamit ng mga folder para mag-organisa ng content sa website. Ang subdirectory ay kapareho ng subfolder at maaaring gamitin ang mga pangalan na ito nang palitan. Ipinapakita ito bilang [**https://domain.com/site1**](https://domain.com/site1) kung saan ang _site1_ ang subdirectory name at ang [_domain.com_](http://domain.com) ang main domain.

## Subsite

Ang subsite ay isang child site na ginagawa mo sa isang Multisite network. Maaari itong maging **subdomain** o **subdirectory** depende sa kung paano naka-configure ang iyong WordPress Multisite installation.

## Super Admin

Ang WordPress Super Admin ay isang user role na may buong kakayahan na pamahalaan ang lahat ng subsite sa isang Multisite network. Para sa mga Multisite user, ito ang **pinakamataas na antas ng access** na maaari mong ibigay sa iyong WordPress installation.

## Plugin

Sa pangkalahatan, ang plugin ay isang hanay ng code na nagdadagdag ng karagdagang functionality sa iyong WordPress site. Maaari itong kasing-simple ng pagpapalit ng login logo o kasing-kumplikado ng pagdagdag ng e-commerce functionality. Ang _Woocommerce at Contact Form_ ay mga halimbawa ng plugin.

Sa WordPress Multisite, ang mga plugin ay maaari lamang ma-install mula sa network admin dashboard ng Super Admin. Ang mga Subsite Admin ay maaari lamang mag-activate at mag-deactivate ng mga plugin sa loob ng kanilang subsite.

## Themes

Ang WordPress theme ay isang grupo ng mga file (_graphics, style sheets, at code_) na nagdidikta ng kabuuang hitsura ng site. Nagbibigay ito ng lahat ng front-end styling tulad ng font styling, page layout, kulay, at iba pa.

Katulad ng mga plugin, ang mga theme sa WordPress Multisite ay maaari lamang i-install ng Super Admin at maaaring i-activate sa antas ng subsite ng mga subsite admin.

## Site Template

Ang **Site Template** ay isang boilerplate site na maaaring gamitin bilang batayan sa paggawa ng mga bagong site sa iyong network.

Ibig sabihin, maaari kang gumawa ng base site, mag-activate ng iba't ibang plugin, magtakda ng active theme, at i-customize ito sa anumang paraan na gusto mo. Pagkatapos, kapag gumawa ng bagong account ang iyong customer, sa halip na makuha nila ang default na WordPress site na walang makabuluhang content, makakakuha sila ng kopya ng iyong base site na may lahat ng customization at content na handa na.

## Domain Mapping

Ang **domain mapping** sa WordPress ay isang paraan para i-redirect ang mga user sa tamang host sa pamamagitan ng address ng website. Sa WordPress Multisite, ang mga subsite ay ginagawa gamit ang subdirectory o subdomain. Ang ginagawa ng domain mapping ay pinapayagan nito ang mga subsite user na gumamit ng top-level domain tulad ng [**joesbikeshop.com**](http://joesbikeshop.com) para mas mukhang propesyonal ang kanilang site address.

## SSL

Ang SSL ay nangangahulugang **Secure Sockets Layer**. Ito ay isang digital certificate na nag-a-authenticate ng identity ng website at nagbibigay-daan sa encrypted na koneksyon. Ngayon, ginagamit ito bilang standard na teknolohiya para panatilihing secure ang internet connection at protektahan ang anumang sensitibong datos na ipinapadala sa pagitan ng dalawang sistema, na pumipigil sa mga kriminal na mabasa at mabago ang anumang impormasyong inililipat, kasama na ang mga posibleng personal na detalye. Ang mga modernong browser ay nangangailangan ng SSL kaya mahalaga ito sa paggawa at pagpapatakbo ng website.

## Media

Ang media ay mga imahe, audio, video, at iba pang mga file na bumubuo sa isang website.

Ang mga network site ay nagbabahagi ng iisang database sa WordPress Multisite, pero nagpapanatili sila ng magkakahiwalay na path sa filesystem para sa mga media file.

Ang standard na WordPress location (wp-content/uploads) ay nananatili; gayunpaman, binabago ang path nito para ipakita ang unique ID ng network site. Kaya ang mga media file para sa isang network site ay lumalabas bilang wp-contents/uploads/site/[id].

## Permalinks

Ang permalinks ay ang mga permanenteng URL ng iyong indibidwal na blog post o page sa loob ng iyong site. Ang permalinks ay tinatawag ding **pretty links**. Bilang default, ang mga WordPress URL ay gumagamit ng query string format na mukhang ganito:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ang Ultimate Multisite ay isang WordPress plugin, na ginawa para sa mga WordPress Multisite install, na ginagawang premium network ng mga site ang iyong WordPress install – tulad ng [WordPress.com](https://WordPress.com) – na nagpapahintulot sa mga kliyente na gumawa ng mga site sa pamamagitan ng buwanan, quarterly, o taunang bayad (maaari ka ring gumawa ng mga Free plan).

## Checkout Form

Ang Checkout Form ay isang single o multi-step na order form na kinabibilangan ng paggawa ng subsite, membership, at user account sa pamamagitan ng Ultimate Multisite registration. Binubuo ito ng iba't ibang field at payment form na kailangang i-submit ng user sa proseso ng pag-sign-up.

## Webhook

Ang webhook (tinatawag din na web callback o HTTP push API) ay isang paraan para magbigay ang isang app ng real-time na impormasyon sa ibang mga application. Naghahatid ang webhook ng datos sa ibang application habang nangyayari ito, ibig sabihin ay nakukuha mo kaagad ang datos.

Ang **Ultimate Multisite webhooks** ay nagbubukas ng walang hanggang posibilidad, na nagpapahintulot sa mga network admin na gumawa ng lahat ng uri ng kakaiba-pero-kapaki-pakinabang na integration, lalo na kung ginagamit kasabay ng mga serbisyo tulad ng _Zapier at IFTTT_.

## Events

Ang Event ay isang aksyon na nangyayari bilang resulta ng aksyon ng user o ibang source, tulad ng pag-click ng mouse. Nagtatago ang Ultimate Multisite ng record ng lahat ng event at log na nangyayari sa buong network mo. Sinusubaybayan nito ang iba't ibang aktibidad na nangyayari sa iyong multisite, tulad ng mga pagbabago sa plan.
