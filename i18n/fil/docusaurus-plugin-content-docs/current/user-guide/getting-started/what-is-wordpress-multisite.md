---
title: Ano ang WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Ano ang WordPress Multisite?

Sa core nito, may feature ang WordPress na tinatawag na 'Multisite' na nagsimula noong 2010 nang ilabas ang WordPress 3.0. Mula noon, marami na itong naging revision para magdagdag ng mga bagong feature at palakasin ang security.

Sa madaling salita, ganito ang WordPress multisite: Isang Unibersidad ang may iisang installation ng WordPress pero ang bawat faculty ay may kanya-kanyang WordPress site.

## 

## Ano ba Talaga ang WordPress Multisite?

Ang Multisite ay isang feature ng WordPress na nagpapahintulot sa maraming site na gumamit ng iisang WordPress installation. Kapag na-activate ang multisite, ang orihinal na WordPress site ay mako-convert para suportahan ang karaniwang tinatawag na **network of sites**.

Ang network na ito ay nagbabahagi ng file system (ibig sabihin, **naka-share din ang mga plugin at theme**), database, WordPress core files, wp-config.php, atbp.

Nangangahulugan ito na ang mga update sa WordPress, theme, at plugin ay isang beses lang kailangang gawin para sa lahat ng iyong network site dahil pare-pareho silang file sa filesystem.

Ito ang isa sa pangunahing bentahe ng multisite, dahil pinapayagan ka nitong dagdagan ang bilang ng mga site na minamanage mo habang pareho lang ang dami ng trabaho na kailangan mong gawin para ma-maintain ang mga site ng iyong mga customer.

## 

## Subdomain o Subdirectory?

Dalawang mode ang pagpapatakbo ng WordPress multisite – at kailangan mong pumili ng isa kapag kino-convert mo ang regular na WordPress installation sa multisite installation:

**Subdomain:** hal.: [site.domain.com](http://site.domain.com)

…o kaya

**Subdirectory:** hal.: [yourdomain.com/site](http://yourdomain.com/site)

Bawat mode ay may mga bentahe at disbentahe na kailangan mong isaalang-alang sa pagdedesisyon.

Isang mahalagang bagay na dapat tandaan: kapag nakapagdesisyon ka na, napakahirap baguhin ang iyong network mula subdirectory patungong subdomain o vice-versa – lalo na kung marami ka nang mga site na nagawa.

Bago magdesisyon, narito ang ilang punto na dapat isaisip:

Ang **Subdirectory Mode** ang pinakamadaling mode pagdating sa setup at maintenance. Nangyayari ito dahil ang lahat ng site ay mga path lang na nakakabit sa main domain (hal. [yourdomain.com/subsite](http://yourdomain.com/subsite)). Bilang resulta, **isang SSL certificate** lang ang kailangan mo para sa main domain at sasakupin na nito ang buong network.

Gayunpaman, dahil sa URL structure nito, itinuturing ng Google at karamihan sa ibang search engine na isang malaking site ang lahat ng subsite sa iyong subdirectory-based network. Bilang resulta, ang content na idinagdag sa mga subsite ng iyong mga end-customer ay maaaring makaapekto sa SEO performance ng iyong landing site, halimbawa. Pinagdedebatihan pa rin ang level ng impact at may argumento na ang ganitong arrangement ay maaaring maging kapaki-pakinabang pa nga sa SEO performance.

Ang **Subdomain Mode** ay medyo mas komplikado i-setup, pero ang URL structure nito (hal. [subsite.yournetwork.com](http://subsite.yournetwork.com)) ay karaniwang tinitingnan na "mas professional".

Isa sa mga pangunahing hamon sa pag-setup ng subdomain mode ay ang SSL coverage (HTTPS) para sa buong network. Ito ay dahil itinuturing ng mga browser ang mga subdomain bilang mga hiwalay na entity. Bilang resulta, kakailanganin mo ng magkakaibang SSL certificate para sa bawat subdomain sa iyong network, o isang espesyal na uri ng certificate na tinatawag na **Wildcard SSL certificate**. Sa mga nagdaang taon, pinapaganda ng mga hosting provider at panel ang kanilang SSL provisioning at ang ilan ay nag-aalok ng wildcard certificate sa isang click lang, na nagpapaliit sa pagitan ng dalawang mode pagdating sa complexity ng setup.

Kabaligtaran ng subdirectory mode, ang mga subsite sa subdomain-based network ay itinuturing ng mga search engine bilang magkakahiwalay na website, ibig sabihin ang content sa isang subsite ay hindi nakakasagabal sa SEO performance ng ibang subsite.

## Ang Super Admin

Ang single-site na WordPress installation ay nagpapahintulot sa iyo na magdagdag ng walang limitasyong bilang ng mga user at bigyan sila ng iba't ibang user role na may iba't ibang permission.

Sa WordPress Multisite, may bagong uri ng user na maa-unlock: **ang super admin** – at may bagong admin panel na maa-unlock: **ang network admin panel**.

Gaya ng ipinahihiwatig ng pangalan, ang super admin ay may superpower sa buong network, kayang pamahalaan ang lahat ng subsite, plugin, theme, lahat!

Kapag na-convert mo ang iyong single-site WordPress installation sa multisite, ang orihinal na admin ng single site ay awtomatikong magiging super admin.

Ang mga plugin at theme ay maaari lang i-install o i-uninstall mula sa network admin panel ng mga super admin. Ang mga subsite admin ay maaaring pumili na i-activate o i-deactivate ang mga plugin o theme na iyon maliban kung i-network activate ng super admin ang isang plugin, na nagpipilit na maging active ito sa lahat ng subsite sa lahat ng oras.

_Paalala: gaya ng nakikita mo, ang pag-imbita sa isang tao sa iyong network at pagbigay sa kanila ng super admin status ay nagbibigay sa user na ito ng kabuuang kontrol sa iyong network. Bilang halimbawa, ang ibang super admin ay maaari ring tanggalin ang iyong super admin status, na epektibong nagla-lock sa iyo mula sa sarili mong network admin panel. Para mapayagan ang mga customer ng Ultimate Multisite na magkaroon ng granular control sa kung ano ang magagawa ng mga dagdag na super admin, mayroon kaming add-on na tinatawag na Support Agents. Ang add-on na ito ay nagpapahintulot sa iyo na lumikha ng isa pang uri ng user – isang agent – na may mga permission lang na kailangan nila para magawa ang kanilang mga task sa network._

## Ano ang naka-share sa mga subsite at ano ang hindi

Gaya ng nabanggit natin kanina, isa sa mga pangunahing bentahe ng WordPress multisite ay ang lahat ng subsite ay nagbabahagi ng parehong configuration, core files, theme, plugin, WordPress core files, atbp.

Gayunpaman, may mga elemento na maayos na naka-scope sa bawat subsite.

\- Halimbawa, ang bawat subsite ay may sariling uploads folder. Bilang resulta, ang mga upload na ginawa ng mga user ng isang partikular na subsite ay hindi maa-access sa ibang subsite.

\- Ang bawat subsite ay may sariling dedicated admin panel at maaaring mag-activate o mag-deactivate ng mga plugin o theme maliban kung naka-network activate ang mga ito ng super admin.

\- Karamihan sa mga database table ay nililikha para sa bawat subsite, ibig sabihin ang mga post, comment, page, setting, at iba pa ay naka-scope para sa bawat subsite.

## User management sa WordPress Multisite

Isang delikadong paksa sa WordPress multisite ang user management. Ang WordPress user table ay isa sa iilang table na naka-share sa lahat ng subsite.

Ang arrangement na ito ay maaaring magdulot ng ilang isyu depende sa kung ano ang plano mong i-build sa iyong network. Ang halimbawa sa ibaba ay nakakatulong na ilarawan ang pinaka-pressing na isyu.

Isipin ang sumusunod na scenario:

Gumawa ka ng WordPress multisite network at nagsimulang mag-alok ng mga subsite sa buwanang bayad sa mga taong gustong magkaroon ng e-commerce store.

Nakuha mo ang iyong unang nagbabayad na customer – si John. Gumawa ka ng site para kay John sa iyong network, nag-install ng lahat ng kinakailangang plugin, pagkatapos ay gumawa ng user para kay John para mapamahalaan niya ang kanyang store.

Pagkatapos ay dumating ang pangalawang customer – si Alice. Ginawa mo rin ang pareho para sa kanya at mayroon na rin siyang store sa iyong network.

Sina John at Alice ay parehong customer mo, pero hindi sila magkakilala. Mas mahalaga, kung bisitahin ng isa sa kanila ang store website ng isa pa, walang paraan para malaman na ang store na ito ay naka-host sa parehong network ng mga site.

Isang araw, kailangan ni John bumili ng bagong pares ng sapatos at nakita niya ang perpektong sapatos sa store ni Alice. Nang subukan niyang tapusin ang pagbili, nakakuha siya ng "email already in use" na error message, na kakaiba dahil 100% sigurado si John na ito ang unang beses niyang binisita ang website ni Alice.

Ang nangyari dito ay ang user ni John ay naka-share sa buong network kaya nang subukan niyang gumawa ng account para mag-checkout sa site ni Alice, na-detect ng WordPress na may umiiral nang user na may parehong email address at nag-throw ng error.

_Paalala: Naiintindihan namin kung gaano ito kasama depende sa iyong use-case, kaya ang Ultimate Multisite ay may option na lumalampas sa mga regular na check para sa umiiral na user, na nagpapahintulot sa maraming account na magawa gamit ang parehong email address. Ang bawat account ay nakatali sa isang subsite, kaya ang panganib ng collision ay nananatiling minimal. Sa halimbawa sa itaas, hindi makakakuha si John ng error message at makakabili siya ng mga sapatos na iyon nang walang problema. Ang option na ito ay tinatawag na Enable Multiple Accounts, at maaaring i-activate sa Ultimate Multisite → Settings → Login & Registration._

Kahit naka-share ang user table, ang mga user ay maaaring idagdag at tanggalin mula sa mga subsite ng mga subsite admin o ng super admin, at maaari pa silang magkaroon ng iba't ibang user role sa iba't ibang subsite.

## Mga performance consideration

Napakalakas ng WordPress multisite pagdating sa bilang ng mga site na kaya nitong suportahan. Ito ay maaaring patunayan ng katotohanan na ang [WordPress.com](https://WordPress.com), Edublogs, at Campuspress ay lahat multisite-based na serbisyo at bawat isa ay nagho-host ng libu-libong site.

Bagama't sa teorya ay walang maximum na bilang ng mga site na maaari mong i-host sa isang WordPress multisite installation, sa praktika ang bilang ng mga site na maaari mong maayos na patakbuhin ay maaaring mag-iba-iba depende sa iba't ibang factor: kung gaano ka-dynamic ang mga site, kung aling mga plugin ang available sa mga subsite, atbp.

Bilang pangkalahatang tuntunin, mas simple ang iyong network, mas mabuti. Ang pagpabor sa mga site kung saan ang content ay hindi talaga dynamic (na ginagawa silang magandang kandidato para sa aggressive caching strategy) at ang pagpapanatiling magaan ng plugin stack hangga't maaari (mas mababa ang bilang ng active plugin, mas mabuti) ay maaaring drastically na madagdagan ang bilang ng mga subsite na maaari mong i-host.

Ang pinakamagandang bahagi ay dahil WordPress ang lahat dito, ang mga parehong tool na kilala at gusto mo na para sa performance improvement ay gagana rin para sa multisite network.

Ang pangunahing bottleneck para sa multisite ay ang database pero kung tama ang setup ng lahat ng iba pa, maaaring umabot ng ilang libong site bago mo kailanganing mag-alala tungkol dito. Kahit noon pa, may mga solution na maaaring unti-unting idagdag sa puntong iyon (tulad ng database sharding solution, halimbawa).
