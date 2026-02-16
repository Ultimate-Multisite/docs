---
title: WordPress Multisite શું છે?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# WordPress Multisite શું છે?

WordPress તેના core માં 'Multisite' નામની એક feature આપે છે જેની શરૂઆત 2010 માં WordPress 3.0 ના launch સાથે થઈ હતી. ત્યારથી તેમાં નવી features ઉમેરવા અને security મજબૂત કરવા માટે ઘણા સુધારા થયા છે.

સરળ શબ્દોમાં કહીએ તો, WordPress multisite ને આ રીતે સમજી શકાય: એક University WordPress ની એક જ installation રાખે છે પણ દરેક faculty પોતાની અલગ WordPress site સંભાળે છે.

## 

## WordPress Multisite ખરેખર શું છે?

Multisite એ WordPress ની એક feature છે જે અનેક sites ને એક જ WordPress installation share કરવાની મંજૂરી આપે છે. જ્યારે multisite activate થાય છે, ત્યારે original WordPress site ને **sites નું network** કહેવાય છે તે support કરવા માટે convert કરવામાં આવે છે.

આ network file system share કરે છે (એટલે કે **plugins અને themes પણ share થાય છે**), database, WordPress core files, wp-config.php, વગેરે.

આનો અર્થ એ છે કે WordPress, theme, અને plugin updates તમારી બધી network sites માટે માત્ર એક જ વાર કરવા પડે છે કારણ કે તેઓ filesystem પર એક જ files share કરે છે.

આ હકીકત multisite ના મુખ્ય ફાયદાઓમાંની એક છે, કારણ કે તે તમને તમારા customers ની sites maintain કરવા માટે જરૂરી tasks ની સંખ્યા સમાન રાખીને sites ની સંખ્યા વધારવાની મંજૂરી આપે છે.

## 

## Subdomain કે Subdirectory?

WordPress multisite ચલાવવાના બે modes છે – અને તમારી regular WordPress installation ને multisite installation માં convert કરતી વખતે તમારે એક પસંદ કરવો પડશે:

**Subdomain:** ઉદા.: [site.domain.com](http://site.domain.com)

…અથવા

**Subdirectory:** ઉદા.: [yourdomain.com/site](http://yourdomain.com/site)

દરેક mode ના ફાયદા અને ગેરફાયદા છે જે તમારે આ નિર્ણય લેતી વખતે ધ્યાનમાં લેવા જોઈએ.

એક વાત મહત્વની છે: એકવાર તમે નિર્ણય લઈ લો પછી, તમારા network ને subdirectory થી subdomain માં અથવા તેનાથી ઊલટું બદલવું ખરેખર મુશ્કેલ છે – ખાસ કરીને જો તમે પહેલેથી ઘણી sites બનાવી હોય.

આ નિર્ણય લેતા પહેલાં, અહીં કેટલીક બાબતો ધ્યાનમાં રાખવા જેવી છે:

**Subdirectory Mode** setup અને maintenance ની દ્રષ્ટિએ સૌથી સરળ mode છે. આ એટલા માટે છે કારણ કે બધી sites main domain સાથે જોડાયેલા paths છે (ઉદા. [yourdomain.com/subsite](http://yourdomain.com/subsite)). પરિણામે, તમને main domain માટે માત્ર **એક SSL certificate** ની જરૂર છે અને તે આખા network ને cover કરશે.

તે જ સમયે, તેના URL structure ને કારણે, Google અને મોટાભાગના અન્ય search engines તમારા subdirectory-based network પરની બધી subsites ને એક મોટી site તરીકે ગણશે. પરિણામે, તમારા end-customers દ્વારા subsites પર ઉમેરેલી content તમારી landing site ના SEO performance ને અસર કરી શકે છે, ઉદાહરણ તરીકે. અસરનું સ્તર ચર્ચાસ્પદ છે અને એવી દલીલ કરી શકાય છે કે આવી વ્યવસ્થા SEO performance માટે ફાયદાકારક પણ હોઈ શકે છે.

**Subdomain Mode** setup કરવામાં થોડો વધુ complex છે, પરંતુ તેનું URL structure (ઉદા. [subsite.yournetwork.com](http://subsite.yournetwork.com)) સામાન્ય રીતે "વધુ professional" લાગે છે.

Subdomain mode setup કરવામાં મુખ્ય પડકારોમાંથી એક આખા network માટે SSL coverage (HTTPS) છે. વાત એ છે કે browsers subdomains ને અલગ entities તરીકે ગણે છે. પરિણામે, તમારા network પરના દરેક subdomain માટે તમારે અલગ SSL certificate ની જરૂર પડશે, અથવા **Wildcard SSL certificate** નામના ખાસ પ્રકારના certificate ની. તાજેતરના વર્ષોમાં, hosting providers અને panels SSL provisioning ના સંદર્ભમાં તેમની game improve કરી રહ્યા છે અને કેટલાક એક button ના click પર wildcard certificates offer કરે છે, જે setup ની complexity ના સંદર્ભમાં બે modes વચ્ચેનું અંતર ઘટાડે છે.

Subdirectory mode થી વિપરીત, subdomain-based network પરની subsites ને search engines અલગ websites તરીકે ગણે છે, જેનો અર્થ છે કે એક subsite પર હાજર content અન્ય subsites ના SEO performance માં બિલકુલ દખલ કરતી નથી.

## Super Admin

Single-site WordPress installations તમને અમર્યાદિત users ઉમેરવાની અને તે users ને વિવિધ permissions સાથે વિવિધ user roles આપવાની મંજૂરી આપે છે.

WordPress Multisite માં, એક નવા પ્રકારના user unlock થાય છે: **super admin** – અને એક નવું admin panel unlock થાય છે: **network admin panel**.

જેમ નામ સૂચવે છે, super admin પાસે network પર superpowers હોય છે, જે તેની બધી subsites, plugins, themes, બધું manage કરવામાં સક્ષમ છે!

એકવાર તમે તમારી single-site WordPress installation ને multisite માં convert કરો, single site ના original admin આપોઆપ super admin માં upgrade થઈ જશે.

Plugins અને themes માત્ર network admin panel માંથી super admins દ્વારા install અથવા uninstall કરી શકાય છે. Subsite admins પછી તે plugins અથવા themes activate અથવા deactivate કરવાનું પસંદ કરી શકે છે સિવાય કે super admin plugin ને network activate કરે, જે તેને હંમેશા બધી subsites માટે active રહેવા દબાણ કરે છે.

_નોંધ: જેમ તમે જોઈ શકો છો, કોઈને તમારા network માં invite કરવું અને તેમને super admin status આપવું આ user ને તમારા network પર સંપૂર્ણ control આપે છે. ઉદાહરણ તરીકે, અન્ય super admins તમારો super admin status પણ દૂર કરી શકે છે, અસરકારક રીતે તમને તમારા પોતાના network admin panel માંથી lock out કરી શકે છે. Ultimate Multisite customers ને additional super admins શું કરી શકે છે તેના પર granular control રાખવા માટે, અમારી પાસે Support Agents નામનું add-on છે. આ add-on તમને હજુ એક બીજા પ્રકારના user – agent – બનાવવાની મંજૂરી આપે છે જેમની પાસે માત્ર network પર તેમના tasks કરવા માટે જરૂરી permissions હોય છે._

## Subsites વચ્ચે શું share થાય છે અને શું નથી

જેમ અમે પહેલાં ઉલ્લેખ કર્યો, WordPress multisite ના મુખ્ય ફાયદાઓમાંનો એક એ છે કે બધી subsites સમાન configurations, core files, themes, plugins, WordPress core files, વગેરે share કરે છે.

જોકે, એવા elements છે જે per-subsite basis પર સરસ રીતે scoped છે.

\- ઉદાહરણ તરીકે, દરેક subsite ને પોતાનું uploads folder મળે છે. પરિણામે, એક particular subsite ના users દ્વારા કરેલા uploads બીજી subsite પર access કરી શકાતા નથી.

\- દરેક subsite નું પોતાનું dedicated admin panel હોય છે અને plugins અથવા themes activate અથવા deactivate કરી શકે છે સિવાય કે તેઓ super admin દ્વારા network active કરવામાં આવ્યા હોય.

\- મોટાભાગના database tables દરેક subsite માટે બનાવવામાં આવે છે, એટલે કે posts, comments, pages, settings, અને વધુ દરેક subsite માટે scoped છે.

## WordPress Multisite પર User management

WordPress multisite પર એક નાજુક વિષય user management છે. WordPress user table એ થોડા tables માંથી એક છે જે બધી subsites વચ્ચે share થાય છે.

આ વ્યવસ્થા તમે તમારા network સાથે શું build કરવાની યોજના બનાવો છો તેના આધારે કેટલીક issues ઉત્પન્ન કરી શકે છે. નીચેનું ઉદાહરણ સૌથી pressing issue illustrate કરવામાં મદદ કરે છે.

નીચેની scenario ની કલ્પના કરો:

તમે WordPress multisite network બનાવો છો અને e-commerce store રાખવા માંગતા લોકોને monthly fee માટે subsites offer કરવાનું શરૂ કરો છો.

તમને તમારો પ્રથમ paying customer મળે છે – John. તમે તમારા network પર John માટે site બનાવો છો, બધા જરૂરી plugins install કરો છો, પછી John માટે user બનાવો છો જેથી તે પોતાનો store manage કરી શકે.

પછી બીજો customer આવે છે – Alice. તમે તેના માટે પણ એ જ કરો છો અને હવે તેનો પણ તમારા network પર store છે.

John અને Alice બંને તમારા customers છે, પણ તેઓ એકબીજાને ઓળખતા નથી. વધુ મહત્વનું, જો તેમાંથી કોઈ બીજાની store website visit કરે, તો જાણવાનો કોઈ રસ્તો નથી કે આ store sites ના એ જ network પર host થઈ રહ્યો છે.

એક દિવસ, John ને નવા shoes ની જરૂર છે અને તેને Alice ના store માં perfect shoes મળે છે. જ્યારે તે purchase પૂર્ણ કરવાનો પ્રયાસ કરે છે, ત્યારે તેને "email already in use" error message મળે છે, જે વિચિત્ર છે કારણ કે John ને 100% ખાતરી છે કે આ પહેલી વાર છે જ્યારે તેણે Alice ની website visit કરી છે.

અહીં જે થયું તે એ છે કે John નો user આખા network માં share થાય છે તેથી જ્યારે તે Alice ની site પર checkout માટે account બનાવવાનો પ્રયાસ કરે છે, WordPress detect કરશે કે સમાન email address ધરાવતો user પહેલેથી અસ્તિત્વમાં છે અને error throw કરશે.

_નોંધ: અમે સમજીએ છીએ કે તમારા use-case ના આધારે આ કેટલું ખરાબ હોઈ શકે છે, તેથી Ultimate Multisite પાસે એક option છે જે existing user માટેના regular checks ને bypass કરે છે, જે સમાન email address નો ઉપયોગ કરીને multiple accounts બનાવવાની મંજૂરી આપે છે. દરેક account subsite સાથે bound છે, તેથી collision નું risk minimum રહે છે. ઉપરના ઉદાહરણમાં, John ને error message ન મળત અને તે કોઈ issue વિના તે shoes ખરીદી શકત. આ option Enable Multiple Accounts કહેવાય છે, અને Ultimate Multisite → Settings → Login & Registration પર activate કરી શકાય છે._

User table share હોવા છતાં, users ને subsite admins અથવા super admin દ્વારા subsites માં add અને remove કરી શકાય છે, અને તેઓ different subsites પર different user roles પણ ધરાવી શકે છે.

## Performance બાબતો

WordPress multisite ખરેખર powerful છે જ્યારે વાત આવે છે sites ની સંખ્યાની જે તે support કરી શકે છે. આ હકીકત દ્વારા test કરી શકાય છે કે [WordPress.com](https://WordPress.com), Edublogs, અને Campuspress બધી multisite-based services છે અને દરેક હજારો sites host કરે છે.

Theory માં એક single WordPress multisite installation પર તમે host કરી શકો તેવી sites ની કોઈ maximum સંખ્યા નથી, practice માં તમે સંતોષકારક રીતે run કરી શકો તેવી sites ની સંખ્યા વિવિધ factors ના આધારે ઘણી vary થઈ શકે છે: sites કેટલી dynamic છે, subsites માટે કયા plugins ઉપલબ્ધ છે, વગેરે.

એક thumb rule તરીકે, તમારું network જેટલું simple, એટલું સારું. એવી sites ને favor કરવી જ્યાં content ખરેખર dynamic ન હોય (જે તેમને aggressive caching strategies માટે great candidates બનાવે છે) અને plugin stack ને શક્ય તેટલો light રાખવો (active plugins ની સંખ્યા જેટલી ઓછી એટલું સારું) તમે host કરી શકો તેવી subsites ની સંખ્યા ધરમૂળથી વધારી શકે છે.

શ્રેષ્ઠ ભાગ એ છે કે અહીં બધું WordPress છે, performance improvements માટે તમે પહેલેથી જાણો છો અને પસંદ કરો છો તે જ tools multisite network માટે પણ કામ કરશે.

Multisite માટે મુખ્ય bottleneck database છે પણ જો બાકી બધું યોગ્ય રીતે setup થયું હોય, તો તમારે તેની ચિંતા કરવાની જરૂર પડે તે પહેલાં થોડા હજાર sites લાગી શકે છે. ત્યારે પણ, એવા solutions છે જે તે point પર progressively ઉમેરી શકાય છે (જેમ કે database sharding solutions, ઉદાહરણ તરીકે).
