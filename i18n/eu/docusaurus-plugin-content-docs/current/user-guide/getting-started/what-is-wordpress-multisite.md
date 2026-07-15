---
title: Zer da WordPress Multisite-ak?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Zer da WordPress Multisite-ak?

WordPress-en bestearen bateneko funtazioa da 'Multisite', eta hori bere lehen erabilera 2010an, WordPress 3.0 iradokizunean dagoela. Horrek indaritzak batzuk hartu du, nahiz eta horiek berri funtazioak introduzi dezaten eta segurtasunaren jarduera hobetzeko.

Espeziatik, WordPress Multisite-a irudi ez da hau: Unikuntza bat du WordPress instalazio bat, baina jakariak (faculty) guztiak bere WordPress webguneak hartzen dute.

##

## Zer da WordPress Multisite-ak? {#what-exactly-is-wordpress-multisite}

Multisite-ak da WordPress funtazio bat, eta horrek asko webgunei iruditzen duen WordPress instalazio batzuk irudi egiteko ematen du. Multisite aktibatu denean, orihala WordPress webgunea iruditzen du "webgunei network" (network of sites) gisa ematutako funtazioa suportatzeko.

Hau network-ek file systema (galera-sistema) irudi egiten du (galertan **plugins eta themes ere iruditzen dira**), databasea, WordPress core fileak, wp-config.php, eta horiek.

Hau da, WordPress, theme eta plugin mga aktualizazioak guztietako network webgunei batenean egin behar dira, nahiz eta bere fileak file systeman irudi egiten du.

Hau da multisitearen garrantzitsuena bat, honerek ematen du zerbait webguneiak gehiago eskaintzen dituz, baina kliente-ek webguneiak mantentzeko egin behar duten jardueraren kopurua ez dago.

##

## Subdomain edo Subdirectory? {#subdomain-or-subdirectory}

WordPress Multisite-ak erabilera ikiak dira – eta bere instalazio normala multisite-ra iruditzen duenean, bat ere elezio behar duzu:

**Subdomain:** ex.: [site.domain.com](http://site.domain.com)

…edo

**Subdirectory:** ex.: [yourdomain.com/site](http://yourdomain.com/site)

Lehen moduak eta ondorioak oso garrantzitsuak dira, hori erabaki egiten duenean.

Bestea da ez dago eskatzen, baina: erabaki egin ondoren, network-a subdirectory-tatik subdomain-era edo berrihala, eta horrek erabilera, oso adiol dago zorroak, batez ere zure situak gehiago sitiak ezartu dutenean.

Horrak egindian aurretik, gure mentean duten batzuk da:

**Subdirectory Modua** da estaltzeko eta mantentzeko eragiketa eskatzen lehen modua. Hau da horrek, situak guztiz main domain-eko bideak (path) dela (adibidez: [yourdomain.com/subsite](http://yourdomain.com/subsite)). Horrek, main domain-eko SSL sertifikatua bat behar duzu eta horrek network guztia lan egiten du.

Beraz, URL-aren itxaropena erabilera, Google eta gehiago ezagututako search engine-ek zure subdirectory-baztea network-eko situak guztiz bat situa (one giant site) gisa ikusten dute. Horrek, zure client-ek (end-customers) subsite-etan gehitu dituzten kontuentuak zure landing situa SEO performantia erabilera erabiliekin eskaintzen da, adibidez. Epegiakaren eraginkortasuna debatzailea da eta hori bezala konponbidea hartzea SEO performansan benetako ondo errondu dezakeko argument bat dago.

**Subdomain Modua** estaltzeko ahazialagoa da, baina bere URL-aren itxaropena (adibidez: [subsite.yournetwork.com](http://subsite.yournetwork.com)) irudiz "masagailu" edo "profesional" bakarrik ikusten da.

WordPress-en subdomain modua kon konprobitzailearen bat da SSL cobertura (HTTPS) oso nettorekinari buruz. Horrek da hori iragatik, browserrak subdomeniak aisialdunak jartzen dituzte. Horrek ondorioz, nettorekinarik subdomeniu baten bitarte SSL sertifikat batekin behar duzu, edo **Wildcard SSL sertifikat** dela gitzeko bat. Irrendabeak, hostea eta panelak SSL provisionamenduan horretan iragatik ditu, eta batzuk wildcard sertifikatuak da bere botontzean, horrek erreguntzen dituzte modu batetan konplikatudun daingoa ematen.

Subdirektori modua kontrako, subsiteak subdomeniu-baziko nettorekinari erreguntzen dira gixona webgailuak, zehatz, eta horrek bere subsitearen kontuerdia SEO performantia ez eskaintzen duela euskarri da.

## Super Admina {#the-super-admin}

WordPress-en bat-web instalazioak leku bat pertsonalak gehiago ematean eta hori pertsonalek erabilera eta berri bertsegina ondira ematean aukeratzen dute.

WordPress Multisitean, erabiltzaile bide berri batekin desbloeatu da: **super admina** – eta panel administrazio bide berria desbloeatu da: **network admin panel**.

Euskal irakurri duzuna, super adminak nettorekinari pertsupurrak ditu, horrek bere subsite guztiek, pluginak, tema hauek, guztia eskaintzeko aukera ematen du!

Bat-web WordPress instalazioa multisitean konvertatu ondoren, bat-webaren orihala administrazioak otomatikoki super admina bati gehiago da.

Pluginak eta temak network admin panelaren bat super adminek dira instalatzeko edo desinstalatzeko. Subsite administrazioak hori pluginak edo temak aktiboa edo deaktibo egin dezakete, jwennu nahi du ondoren, super adminak nettorekinari plugin batekin aktiboa ematen denean, horrek guztiz subsite guztietan aktiboa jarraitzen dio.

_Nota: oler ez da, batzuk ir network-a emate eta super admin status ematen dio erabiltzaileari lehen kontrol guztia ematen dio. Adibidez, beste super adminak ere eskatzen dituzteko zure super admin statusa hartzea, eta horrek zure propio network admin panel-a itxarri ezarri du. Ultimate Multisite klientak erabiliziek bere super adminak zer egin dezatatzen duen guztia kontrolatzeko, "Support Agents" (Agente Ofizioko) dela gitzeko add-on bat da. Horrek erabiltzaile batekin beste baten kindu lehiak emate du – agente bat – eta hori lehen network-an bere jarduerak egin behar dituzten espezialitate edo permiños ez duten.

## Zer joan irki eta zer ez joan subsites-ean {#what-is-shared-among-subsites-and-what-is-not}

Lehen aipatutakoaren bezala, WordPress multisite-aren garrantzitsuena bat da hori guztietako subsites-ek beste konfigurasioak, core fileak, themes, plugins, WordPress core fileak, eta beste batzuk irki egiten dute.

Honek baina, per subsite-ari espeziatu dezakeko elementuak dira.

\- Adibidez, lehen subsite-ei propio uploads folder bat da. Horrek, bat subsitearen erabiltzaileek egin behartutako irkideak beste subsite batean erabil ez dituzte.

\- Lehen subsiteak bere admin panel egon dute eta plugin edo themes aktiboa edo deaktibo dezake dira, jwennu nahi duzu super admin bat ez dutenean.

\- Beste database tables-ek lehen subsitearen bitartean ematen dira, zehandriak, comments, pages, settings eta beste batzuk subsite guztietako espeziatua da.

## Erabilgarriari emateko gestiona WordPress Multisite-an {#user-management-on-wordpress-multisite}

WordPress multisite-aren garrantzitsuena bat da erabiltzailearen gestiona. WordPress user table-ak subsites guztietan irki egiten diren oso txiki bat da.

Hauzketa hori, network-an zer egin nahi duzu ondorioztatzen duenari dependentzen, problema batzuk sortuedu dezake. Asteako erabilera irekitzen duen batezkin adierazten duen eskasarra da.

WordPress multisite network bat sortu eta pertsonalak mensual abonazioa bayaratu dituzteko subsaitak emateko negozioa hasi duzu.

Lehen merkatu bizitzarenak, John-a, hartzen dut – network-ean bere webgune bat jartzen duzu, beharrezko pluginak instalatzen duzu eta John-eko kontua sortzen duzu nahiz bere dakarren negozioa eskaintzeko gestionatu ere.

Gero, Alice-a, ikustea iritu duzu. Bere dela ere berri webgune bat network-ean duzu.

John eta Alice artean merkatu bizitzak dira, baina ez dakiziek. Ondoago, batek bestearen negozio webgunean bisitatzen denean, hori beste network-eko webgunean dagoela ez jakiteko bidea ez daiko.

Egun bat John-ek zapate jartzea behar du eta Alice-ren negozioan bere zapateak aurkitzen du. Erabiltzen duzu erabilgarrakarekin iradokizuna egiten duenean, "email aldatuta dago" (email already in use) errora hartzen du, baina ez da pazientzia, John-ek Alice-ren webgunean bisitatzea lehen aldiz dela 100% seguratu du.

Arau hori da John-eko kontua network guztia irekituta dagoela, gertatzen da bere kontua sortzen eta Alice-ren webgunean checkout egin beharko duenean WordPress-ek email berria jakin duen kontua ez daiko dela detectatzen du eta errora ematen du.

_Nota: Zer garrantzitsuagoa hori da zer garrantzitsua izan daiteke uso-kasuaren arabera, Ultimate Multisite-ek kontua ez dagoela ikus edo kontuak sortzeko ordaindian (bypass) duen opszio bat du, eta horrek email berria beste kontuak sortzeko aukera ematen du. Kontua leku bat subsitearekin erlazionatuta dago, gertatzen da zer aurrera egin dezakeko riskua minimizatu egiten da. Abaluaren ondorioz, John-ek errora ez hartuko da eta zapateak bezala aurkitu dezake._

_Horren opszioa "Enable Multiple Accounts" (Kontuak Ez Aurreratzea) nezu den, eta Ultimate Multisite → Settings → Login & Registration-ean aktibatu egin da._

Bestea da, baino da, user-ak dira irikusten daukatu, baina subsite admin edo super adminak ez dute erabiltzeko eta eliminatzeko. Bestatik, subsites arlaitzian erabilera ondo izango du, eta subsites batean bestelako user roles (rolak) izan dezake.

## Errendimendu-gaindoko iragailuak {#performance-considerations}

WordPress multisitea site guztietu ez daitezkeen kopurua eskatzen duen oso potentziala du. Horrek [WordPress.com](https://WordPress.com), Edublogs eta Campuspress garrantzitsia da, horiek guztiz multisite-baziko serbisioak dira eta lehen hostea site pertsona urte bat zuzen juta siteak dut.

Teoria erantzun du, baina WordPress multisite instalazio batean site kopurua ez dago maximuma edo bestelako. Praktikoki, zer kopuru siteak ondo iruditzen ditzake, horrek erdiffuntzak askorekin aldatzen da: site hauek nola dinamiko dira, subsites-ek aurkituta jakin dituzten pluginak, eta beste batzuk.

Erregiaren arabera, networka lehenago bada, hor nehiago izango da. Kontentua ez dinamikoa izan zenbait siteetan (horrek hasiera gaineko caching estrategiak erabiliz superproiezio dira) eta plugin stack-a gurean legetzailea mantentzea (aktibo plugin kopurua handiago bada, hor nehiago da) subsites kopuru handiago iruditzen ditzake.

Best parte hori da, zenbait WordPress dela, errendimendu hobetzeko gehiago ezagututa eta gustura dituzten beste toolak multisite network-eko ere funtzionatzen dira.

Multisitearen garrantzitsuaa database-ak dira, baina gure guztia ondo konpondu dutenean, hori ez du interesik izango site kopuru handiago iruditzen ditzake. Bestetik, horren ondorioz, progresiboa gehiago beste soluzioak (adibidez, database sharding soluzioak) jodeko daiteke.
