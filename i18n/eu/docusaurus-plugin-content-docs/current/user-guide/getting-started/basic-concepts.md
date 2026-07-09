---
title: Konseputu batzak
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Baser Konseputuak {#basic-concepts}

WordPress-en leku bat newUser bati eta bat erabiltzaile guztia Ultimate Multisitea erabiltzen hasten duenari, hasieran oso argi eta irudiak daude adierazten dituzten. Horren jakinarazpena ezberdina importante garrantzi dira, koska plataforma eta ondo jakin nahi duzu funtzionatzen mundua gabelitzen.

Hau artikuluan, WordPress-en parte bat konseptuak definizatu eta hasterpen da. Batziak erabiltzaileek jasotzen dituz, batziak desarrolladorrak, eta batziak oso bietara.

## WordPress Multisite {#wordpress-multisite}

WordPress **Multisite** hori da WordPress instalazio baten testia, zehandiz WordPress dashboard batdan website asko bat networka dezake eta jartzen. Website-ak, funtunaldeak, themes-ak eta user roles-ek barne jardutzea gestionatu ditzake. Website asko eta miliaren gestionatzea posible da.

## Network {#network}

WordPress-en terminoetan, multisite network bat da, hori da aholku batzuekin **subsites** asko bat management egin dezake dashboard batdan. Hosting providerrak ondorioa honek handiagoak egiten du, baina aurreko jarduera da, **wp-config.php** filean direkta batzuk jartzen duen WordPress-i informatzeko, hori zehat moduan dagoela.

Multisite network bat eta stand-alone WordPress instalazio batean aukera batzuk oso ezberdina dira, hauek garrantzitsua gurekin brevement adierazteko da.

## Database {#database}

Database bat datuen estruktura da, organisatuta da. Informatika terminoetan, database bat da softwarea datuak ematu eta organisatzea erabiltzeko. Datuan estelako sektionak dagoen file cabinet batean datuak jartzen duzu.

WordPress Multisite bat database bat erabiltzen du eta subsite baten tables-ek bere oneskiak ditu blog idarekin prefixa, gertatzen da, network instalazio bat instalatu eta subsite bat sortu duzu, hauek tables-ek izango duzu:

_wp_1_options_ \- opciónakizunari subsitearen opsioak taldeak

_wp_2_options_ \- optionakizunari subsitearen opsioak taldeak

## Hosting provider {#hosting-provider}

Hosting provider bat azerkatu da, hori negozio eta pertsonalak irudiak interneten (World Wide Web) arraldirarekin aurkitzen dituzten. Hosting provider hauek eskaintzen duten serbisuak ondo jartzen dira, baina badirekin jarraitzen du, adibidez, webstei designa, host-eko espazio eta Internetre konektatzea.

## Domainak {#domain}

Domain name bat da, hori pertsonalak irudiari joan nahi duten lekua ematen adres bat. Web browserra eskeritzeko lekua informatzen du. Erreguntzak adresa batera jartzen dituzile, domain bat da erreguntzak internete joan nahi duten lekua. Bestetik, negozioaren atxian leku bat dutela. Zerbiari joan nahi baduzu, browserra eskeritzeko web-adresa ematen duzu, hori da [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _,_ eta [**ultimatemultisite.com**](http://ultimatemultisite.com) da domain-na.

## Subdomainak {#subdomain}

Subdomain bat da, itzultik domain nagusia duen webstei hierarkiaren bideak, baina websteian kontentua organizatzeko folderak jartzen ez du, horrek bere websteia bere ona ematen du. Horra [**https://site1.domain.com/**](https://site1.domain.com/) bezala ematen da, hori da _site1_ subdomain-aren naizul eta [_domain.com_](http://domain.com) da domain nagusia.

## Subdirectoryak {#subdirectory}

Subdirectory bat da, root domain batean webstei hierarkiaren bideak, baina kontentua organizatzeko folderak erabiltzen du. Subdirectory bat da subfolder bati bezala eta irakurri-dira irudiak jartzen dituzile. Horra [**https://domain.com/site1**](https://domain.com/site1) bezala ematen da, hori da _site1_ subdirectory-aren naizul eta [_domain.com_](http://domain.com) da domain nagusia.

## Subsite {#subsite}

Subsitea child site da daura da sizkio da salditu du talde Multisite networkan. WordPress Multisite instalazioa on **subdomain** edo **subdirectory** izan daite, den zerren irudiari WordPress Multisite instalazioa konfiguratatu duen garrantziaren arabera.

## Super Admin {#super-admin}

WordPress Super Admin bat erabiltzailearen rola da bere Multisite network-eko subsitak guztietan administrazio egiteko burok dituzten funtunalitatea du. Multisite erabiltzaileekin, hori da WordPress instalazioa sizkio emateko **hauterren nivel** zehandiagoa.

## Plugin {#plugin}

Geralta, plugin bat da kodearen bat paketea dena bere WordPress webgunean ezberdin funtunalitatea hobetzeko. Horra login logoa aldatzeko lehen beste gertu edo e-commerce funtunalitate gehiago hobetzeko kompleksa izan ditzake. _Woocommerce_ eta _Contact Form_ pluginak da erabilgarriak.

WordPress Multisitean, pluginak Super Adminaren bat eskoldearen dashboard-etik instalatu daite. Subsite Adminsak bere subsituan pluginak aktiboa edo deaktiboa egin dezak.

## Themes {#themes}

WordPress theme bat daileko file-gailu bat paketea dena (grafika, style sheets eta kodea) bere webgunearen irudiari erabilizten. Font styling, lapurtuare diseinu, coloreak, etc., garrantzitsu front-end stylings guztietan ematen du.

Pluginak baten artean besteak bezala, WordPress Multisitean themesak Super Adminaren eskoldearen instalatu daite eta subsite adminsarrek bere subsituan aktiboa egin dezak.

## Site Template {#site-template}

**Site Template** bat da boilerplate webgune bat da, bere networkan lehi subsitak lehi dituenean basea gisa erabilera daitezke.

Hau da, base webgune bat ezartu, pluginrak ondiarekin aktiboa, theme bat aktiboa eta bere modifikazioak jakinarazten dezake. Horrek, taldearen erabiltzaile berri kontua lehi dituenean, esan nahi duzu WordPress webgune bat erabiliz, baina ez du inupurren kontuentu edo ideiak aurrera, bere base webgunearen kopia izango da, guztietako modifikazio eta kontuentuak aldatuta.

## Domain Mapping {#domain-mapping}

**Domain mapping**-ek WordPress-ekin erabiltzailea irudien lehiak (redirect) egiteko modua da, erabiltzaileak web-aren aparezioa bidez zuzen hosti zehatzera irekitzen du. WordPress Multisite batean, subsiteak direktori bat edo subdomain batekin sortzen dira. Domain mapping-ek da horrek subsite erabiltzaileei [**joesbikeshop.com**](http://joesbikeshop.com) garrantzitsu domain bat erabilten aldeko, web-aren aparezioa gehiago profesional egiteko izin ematen du.

## SSL {#ssl}

SSL da **Secure Sockets Layer** (Lehiak Segura Konektua). Digital biltzarra da web-aren identifikazioa autentikatu egiten du eta konektazio seguratu bat erabilizten ematen du. Iragatik, hori internet konektazioa seguru egotean mantentzeko eta bi sistema artean aurkitzen dituen edozein informazio sensitiboa laguntzeko standard teknologia da, kriminalak informazio edozein irudien lekatu eta modifikatu egiten ez dute, pertsonal datuak osasun-dago. Modern browserrak SSL eskatzen du, zehatz webstei bat sortzeko eta erabilizten aurreratuta beharrezkoa da.

## Media {#media}

Media hauek websteia ematen irudiak, audioak, videoak eta beste fileak dira.

Network websteiak WordPress Multisite batean database bat badago, media file-ek jasotzen dituen filesystem-eko bidez (path) zehatzak mantentzen du.

Standard WordPress lekuak (wp-content/uploads) jarraitzen du; baina horiaren patha network site-aren identifikazio berezia errezki aldatzen da. Gainaria, network site-aren media file-ek wp-contents/uploads/site/[id] bezala erakusten dira.

## Permalinks {#permalinks}

Permalinks hauek situailearen zehat blog post edo estalea permanente URL-ek dira. Permalinks-ek **pretty links** (lehiak aguri) nehan ere ematen daitezke. Default batean, WordPress URL-ek query string format bat erabiltzen du, hori irudien bezala erakusten da:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite {#ultimate-multisite}

Ultimate Multisite da WordPress plugin bat, den WordPress Multisite instalazioetara esan dituz, zein irudiak transformatzen duzu WordPress instalazioa premium eta aukera bat izango dira – [WordPress.com](https://WordPress.com) bezala –, zein irudien arteko client-ek erabilizten dute lekuak (monthly, quarterly edo yearly beste mugikorrakarekin), eta gurean ez da plan merkatuak (Free plans ere ez da).

## Checkout Form (Ordenaren Formulazioa) {#checkout-form}

Checkout Formak da ordenaren formulazio bat edo irudien arteko formulazio bat dena, den Ultimate Multisite registro batean subsite-ak, membership-ak eta user accounts-ek sortzeko eskatzen du. Irudiak ezberdideko lekuak eta mugikorrakariak sortzen du, zein irudia erabiltzaileak inscrepsio prozesuaren aurrera egiten dutenean emate behar dute.

## Webhook (Webhook) {#webhook}

Webhook bat (web callback edo HTTP push API gisa ere anitzen da) aplikazio bat erabilizten duen beste aplikazio berekin real-time informazioa emateko modua da. Webhook bat datu hauek beste aplikazioetara horren jakin artean ematen du, non datuak hemen egiten dira, yani datuak hemen hartzen duzu.

**Ultimate Multisite webhooks** infinitea posibilitateak aukeratzen dute, zein irudien administrazio-administratorrak guztiz ezberdideko integrazioak egin dezatile dituz, batez ere Zapier eta IFTTT bezala serbisioekarekin erabilten denean.

## Events (Gertailuak) {#events}

Event bat da aksiuna bat, erabiltzailearen edo beste eskaera batren aksiuna gisa sortzen du, adibidez, mouse-ak klik egin jakin duen aksiuna. Ultimate Multisite irudien guztiakin aukeratu duten guztiak event eta logiak emateke ditu. Irudiak multisitean ezberdideko jarduerak, adibidez, plan-ak aldatzeko jarduerak, erakusten du.
