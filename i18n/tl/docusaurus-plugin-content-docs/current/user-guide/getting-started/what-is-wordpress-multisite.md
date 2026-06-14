---
title: Ano ang WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Ano ang WordPress Multisite?

Sa loob ng core nito, nagbibigay ang WordPress ng feature na tinatawag na ‘Multisite’ na nagsimula noong 2010 sa paglulunsad ng WordPress 3.0. Mula noon, nakatanggap ito ng ilang mga bersyon para magpakilala ng mga bagong features at palakasin ang seguridad.

Sa madaling salita, ang isang WordPress multisite ay maaaring isipin na ganito: Isang Unibersidad ang nagpapanatili ng iisang instalasyon ng WordPress ngunit bawat kolehiyo naman ay may sariling site ng WordPress.

##

## Ano nga ba ang WordPress Multisite?

Ang Multisite ay isang feature ng WordPress na nagpapahintulot sa maraming site na magbahagi ng iisang instalasyon ng WordPress. Kapag na-activate ang multisite, ang orihinal na WordPress site ay ginagawang suporta ang tinatawag na **network ng mga site**.

Ang network na ito ay nagbabahagi ng file system (ibig sabihin, **pareho rin ang plugins at themes**), database, mga core files ng WordPress, ang wp-config.php, atbp.

Ibig sabihin nito, ang pag-update ng WordPress, theme, at plugin ay kailangang gawin nang isang beses para sa lahat ng site sa iyong network dahil pareho silang nagbabahagi ng parehong mga file sa filesystem.

Ang katotohanang ito ay isa sa pangunahing bentahe ng multisite, dahil pinapayagan ka nitong palaguin ang bilang ng mga site na iyong pinamamahalaan habang nananatiling pareho ang dami ng mga gawain na kailangan mong gawin para mapanatili ang mga site ng iyong mga customer.

##

## Subdomain o Subdirectory?

May dalawang paraan kung paano tumatakbo ang WordPress multisite – at kailangan mong pumili sa pagitan ng dalawa kapag ginagawa mo ang pag-convert ng iyong regular na instalasyon ng WordPress tungo sa isang multisite installation:

**Subdomain:** halimbawa: [site.domain.com](http://site.domain.com)

…o

**Subdirectory:** halimbawa: [yourdomain.com/site](http://yourdomain.com/site)

Ang bawat paraan ay may mga kalamangan at disbentaha na kailangan mong isaalang-alang kapag gumagawa ng desisyong ito.

May tandaan mo ito: kapag nagdesisyon ka na, mahirap nang palitan ang network mula subdirectory patungong subdomain o vice-versa—lalo na kung mayroon ka nang ilang sites na ginawa.

Bago gumawa ng desisyong iyon, narito ang ilang punto na dapat mong isaalang-alang:

**Subdirectory Mode** ang pinakamadaling mode sa setup at maintenance. Nangyayari ito dahil lahat ng sites ay mga path lang na nakakabit sa pangunahing domain (halimbawa: [yourdomain.com/subsite](http://yourdomain.com/subsite)). Dahil dito, kailangan mo lang ng **isang SSL certificate** para sa main domain at sakop nito ang buong network.

Kasabay nito, dahil sa istruktura ng URL nito, ituturing ng Google at karamihan ng ibang search engine na iisang malaking site ang lahat ng subsites mo sa subdirectory-based network. Dahil dito, ang content na idadagdag sa mga subsites ng iyong end-customers ay maaaring makaapekto sa SEO performance ng landing site mo, halimbawa. Ang antas ng epekto ay pinagtatalunan at may argumento na ang ganitong arrangement ay maaaring maging kapaki-pakinabang pa para sa SEO performance.

**Subdomain Mode** ay medyo mas kumplikado i-set up, ngunit ang istruktura ng URL nito (halimbawa: [subsite.yournetwork.com](http://subsite.yournetwork.com)) ay karaniwang tinitingnan na "mas propesyonal" tingnan.

Isa sa mga pangunahing hamon sa pag-set up ng subdomain mode ang SSL coverage (HTTPS) para sa buong network. Ito ay dahil itinuturing ng mga browser na ang mga subdomain ay hiwalay na entidad. Dahil dito, kailangan mo ng ibang SSL certificate para sa bawat subdomain sa iyong network, o isang espesyal na uri ng certificate na tinatawag na **Wildcard SSL certificate**. Sa mga nakaraang taon, mas gumagaling ang mga hosting provider at panel sa pagbibigay ng SSL provisioning at may ilang nag-aalok ng wildcard certificates sa isang pindot lang, na nagsasara sa agwat sa pagitan ng dalawang mode tungkol sa kumplikasyon ng pag-set up nito.

Kabaligtaran ng subdirectory mode, ang mga subsites sa isang network batay sa subdomain ay itinuturing ng search engine bilang magkahiwalay na website, na nangangahulugang ang nilalaman na nasa isang subsite ay hindi nakakaapekto sa SEO performance ng ibang subsites.

## Ang Super Admin

Pinapayagan ka ng Single-site WordPress installations na magdagdag ng walang limitasyong dami ng mga user at bigyan ang mga user na iyon ng iba't ibang user roles na may iba't ibang permissions.

Sa WordPress Multisite, may bagong uri ng user na mabubuksan: **ang super admin** – at isang bagong admin panel na mabubuksan: **ang network admin panel**.

Gaya ng pangalan nito, ang super admin ay may mga superpower sa network, kaya kayang pamahalaan lahat ng subsites, plugins, themes, lahat!

Kapag ginawa mo nang convert ang iyong single-site WordPress installation tungo sa multisite, awtomatikong ina-upgrade ang orihinal na admin ng single site bilang super admin.

Ang mga plugin at theme ay maaari lamang i-install o tanggalin mula sa network admin panel ng mga super admin. Ang mga subsite admin ay maaaring pumili na i-activate o i-deactivate ang mga plugin o theme na iyon maliban kung mag-activate ang network super admin ng isang plugin, na nagpapilit dito na manatiling aktibo para sa lahat ng subsites palagi.

_Tanda: gaya mo makikita, ang pag-imbita ng isang tao sa iyong network at pagbibigay sa kanila ng super admin status ay nagbibigay sa user na kumpletong kontrol sa iyong network. Bilang halimbawa, ang ibang mga super admin ay maaaring magtanggal ng iyong super admin status, na epektibong naglalabas sa iyo mula sa admin panel ng sarili mong network. Upang payagan ang Ultimate Multisite customers na magkaroon ng detalyadong kontrol kung ano ang pwedeng gawin ng iba pang super admin, mayroon tayong add-on na tinatawag na Support Agents. Pinapayagan ka nitong gumawa ng isa pang uri ng user – isang agent – na may mga pahintulot lang na kailangan nila para gampanan ang kanilang mga gawain sa network._

## Ano ang pinagsasaluhan at hindi pinagsasama sa mga subsites

Gaya ng nabanggit natin dati, isa sa malaking bentahe ng WordPress multisite ay ang lahat ng subsites ay nagbabahagi ng parehong configuration, core files, themes, plugins, WordPress core files, atbp.

Gayunpaman, mayroon ding mga elemento na naka-scope nang maayos para sa bawat subsite.

\- Halimbawa, ang bawat subsite ay may sariling uploads folder. Dahil dito, ang mga upload na ginawa ng mga user ng isang partikular na subsite ay hindi maa-access sa ibang subsite.

\- Ang bawat subsite ay may sariling dedicated admin panel at pwedeng i-activate o i-deactivate ang mga plugin o theme maliban kung ito ay aktibo sa network ng isang super admin.

\- Karamihan sa database tables ay ginagawa para sa bawat subsite, ibig sabihin, ang posts, comments, pages, settings, at iba pa ay naka-scope para sa bawat subsite.

## Pamamahala ng User sa WordPress Multisite

Isang sensitibong paksa sa WordPress multisite ay ang pamamahala ng user. Ang WordPress user table ay isa sa iilang bagay na ibinabahagi sa lahat ng subsites.

Ang arrangement na ito ay maaaring magdulot ng ilang problema depende sa kung ano ang plano mong itayo gamit ang iyong network. Ang halimbawa sa ibaba ay tumutulong upang ipakita ang pinaka-urgent na isyu.

Isipin ang sumusunod na sitwasyon:

Gumawa ka ng WordPress multisite network at magsimulang mag-alok ng mga subsites para sa buwanang bayad sa mga taong gusto magkaroon ng e-commerce store.

Nakakuha ka na ng iyong unang customer – si John. Gumawa ka ng site para kay John sa iyong network, i-install ang lahat ng kinakailangang plugins, at gumawa ka ng user para kay John para ma-manage niya ang kanyang store.

Pagkatapos ay dumating ang pangalawang customer – si Alice. Ginawa mo rin ito para sa kanya at mayroon na siyang store sa iyong network din.

Si John at si Alice ay parehong mga customer mo, pero hindi sila magkakakilala. Higit pa rito, kung pumunta ang isa sa kanila sa website ng tindahan ng isa, walang paraan para malaman na ang tindahang ito ay naka-host sa parehong network ng mga site.

Isang araw, kailangan ni John bumili ng bagong pares ng sapatos at nakakita siya ng perpektong mga sapatos sa tindahan ni Alice. Nang subukan niyang tapusin ang pagbili, nakatanggap siya ng mensaheng “email already in use,” na kakaiba dahil 100% sigurado si John na ito ang unang beses niya sa website ni Alice.

Ang nangyari rito ay ang user ni John ay ibinabahagi sa buong network kaya kapag sinubukan niyang gumawa ng account para mag-checkout sa site ni Alice, madedetect ng WordPress na mayroon nang user na may parehong email address at maglalabas ito ng error.

_Tandaan: Napagtanto namin kung gaano ito kalala depende sa iyong sitwasyon, kaya ang Ultimate Multisite ay may opsyon na lumalampas sa regular na mga pag-check para sa umiiral na user, na nagpapahintulot na gumawa ng maraming account gamit ang parehong email address. Ang bawat account ay nakakabit sa isang subsite, kaya ang panganib ng pagbanggaan (collision) ay pinapanatili sa pinakamababa. Sa halimbawang ito, hindi makakatanggap si John ng error message at makakapagbili siya ng mga sapatos nang walang problema. Ang opsyong ito ay tinatawag na Enable Multiple Accounts, at maaaring i-activate sa Ultimate Multisite → Settings → Login & Registration._

Kahit na ang user table ay pinagsasaluhan, ang mga user ay maaaring idagdag o tanggalin sa mga subsites ng mga admin ng subsite o super admin, at maaari pa silang magkaroon ng iba't ibang user roles sa iba't ibang subsites.

## Mga konsiderasyon sa performance

Ang WordPress multisite ay talagang malakas pagdating sa dami ng sites na kaya nitong suportahan. Maaari itong subukan dahil ang [WordPress.com](https://WordPress.com), Edublogs, at Campuspress ay lahat ay mga serbisyo batay sa multisite at bawat host ay libo-libo ng sites.

Bagama't sa teorya ay walang limitadong bilang ng sites na maaari mong i-host sa isang WordPress multisite installation, sa praktika ang bilang ng sites na kaya mong patakbuhin nang maayos ay maaaring mag-iba nang malaki depende sa ilang iba't ibang salik: kung gaano ka-dynamic ang mga sites, aling mga plugin ang available sa mga subsites, atbp.

Bilang pangkalahatang tuntunin, mas simple ang iyong network, mas mabuti. Ang pagpili ng mga site kung saan ang nilalaman ay hindi gaanong dynamic (na ginagawa silang magagandang kandidato para sa agresibong caching strategies) at pananatiling magaan ang plugin stack (mas mababa ang bilang ng aktibong plugins, mas mabuti) ay maaaring malaki nang dagdagan ang bilang ng mga subsites na kaya mong i-host.

Ang pinakamaganda rito ay dahil lahat ito ay WordPress, kaya ang parehong tools na pamilyar ka at gusto mo para sa pagpapabuti ng performance ay gagana rin para sa isang multisite network.

Ang pangunahing bottleneck para sa multisite ay ang database ngunit kung tama ang setup ng lahat ng iba pa, maaari itong tumagal ng ilang libo ng sites bago mo ito kailangang alalahanin. Kahit noon, may mga solusyon na maaaring dahan-dahang idagdag sa puntong iyon (tulad ng mga database sharding solutions, halimbawa).
