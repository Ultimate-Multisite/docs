---
title: Konċetti Basi
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Konċetti Basi

Bħal utentji ġdid ta WordPress Multisite u qed jmurja biex jidħol f'użu tal-Ultimate Multisite, jista' tkun għandek ħafna parole u frasi ġodda biex ti tiffaħ. L-apprendien tagħhom huwa impurt, it-tlob li tfitteh l-platform u kif tiffaħ b'mod kollu.

F'dan l-artikolu, nħاwejn ne definaw u nispjegaw xi konċetti ewlieni fil-WordPress. Xogħol minnhom huma aktar rilevanti għall-utenti, oħra għall-developer, u xi ħlix għallhom iżda.

## WordPress Multisite

**Multisite** ta WordPress huwa tip installazzjoni ta WordPress li jippermettiklek tgħmli u tal-ġġestjoni reġjuta ta siti web multipli min dashboard waħda ta WordPress. Tista' tgħmli għall-ġestjoni kollha inkluż l-numa ta siti, il-funzjonijiet (features), temi (themes) u ruoli tal-utenti. Il-possibbiltà hija biex tgħmli għal-ġestjoni centina u migliaja ta siti.

## Rete (Network)

F'termini ta WordPress, retta multisite huwa l-post li fejn jista' jiġu giġestjoni ħafna **subsites** min dashboard waħda. Kif ma jkun il-istruttura biex tgħmli retta multisite tiffaħ bejn fornituri ta hosting, il-risultatu finali huwa tipiku li jkun xi direttivi aggiemali f'il-file **wp-config.php** biex tgħid lil WordPress li qed jopera f'din il-mod speċifiku.

Jistgħu jkun ħafna differenzi differenti bejn retta multisite u installazzjoni ta WordPress standalone, u nħاwejn ne diskussawhom b'mod qصير.

## Database

Il-database huwa set strutturat u organizzatu ta dati. F'terminolodżija tal-kompjuter, database jurfaha software li jippermettiklek tixxebba u tiorganizza dati. Iħseb għalih biex it-tħallina tiegħu bħal kabinet tal-file fejn tixxebba dati f xi sezzjonijiet msemmija tabelle (tables).

WordPress Multisite jista' jiddefendi fuq database waħda u kada subsite jista' jista' għandu proprija tabelle b'id del blog fil-prefix, sabiex min jiddefini l-installazzjoni ta retta multisite tiegħek u tgħmli subsite, dovien tkun għandek dan il-tabelle:

_wp_1_options_ \- tabellix opzioni għall-sott-sajt ewliem

_wp_2_options_ \- tabellix opzioni għall-sott-sajt sekond

## Fornitor ta hosting

Forfitor ta hosting huwa kumpagnia li tfilha l-negozji u l-individwi biex jgħatbo siti web tagħhom disponibbli fil-World Wide Web. Il-servizzi li joffru forfitorii ta hosting web jidduq, iżda tipikament inklużew disign ta siti web, spazzjiet għall-storage fuq l-host, u konnektività mal-Internet.

## Dominju

Dominju huwa indirizzji li jgħandu l-bniedri biex ivisittaw is-sajt tiegħek. Jgħid il-browser web fejn irriżwali is-sajt tiegħek. Fl-mod li indirizz address tal-stratta, id-dominju huwa kif jidħol l-bniedri is-sajt tiegħek online. U, bħal iżjed għandek sign fuq qabel tal-store tiegħek. Jekk tixtieq ivisittaw is-sajt tiegħene, għandek gidħol indirizz web tiegħek fil-address fejn huwa [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _, _ li [**ultimatemultisite.com**](http://ultimatemultisite.com) huwa l-dominju.

## Subdomjenu

Subdomjenu huwa tip jerarkija ta siti web ta quddiem ld-dominju ta primarja, iżda invece tal-użu tal-folder biex jorganizzaw is-sostej, huwa biss siti web tiegħu. Jiddisponi bħala [**https://site1.domain.com/**](https://site1.domain.com/) li _site1_ huwa l-subdomjenu u [_domain.com_](http://domain.com) huwa ld-dominju ta primarja.

## Subdirettori

Subdirettori huwa tip jerarkija ta siti web ta quddiem ld-dominju ta rad li jiddefli b'folder biex jorganizzaw is-sostej fuq is-sajt. Subdirettori huwa l-istess bħal folder sott, u l-nomi jistintu it-tista. Jiddisponi bħala [**https://domain.com/site1**](https://domain.com/site1) li _site1_ huwa is-subdirettori u [_domain.com_](http://domain.com) huwa ld-dominju ta primarja.

## Sott-sajt

Subsite huwa sito figliu li tapp tista' creati fuq una rete Multisite. Ilie li tista' jkun **subdomain** o **subdirectory**, dipende min kif hija configurata la tua installazzjoni WordPress Multisite.

## Super Admin

Un utente WordPress Super Admin huwa un ruolo li għandu tutte l-kapacità biex jidabbir kull siti figliu fuq una rete Multisite. B'mod kif jgħidu, huwa l-**livell aħjar tal-akses** li tista' tipprovvidi lill-installazzjoni WordPress tiegħek.

## Plugin

B'mod ġenerali, plugin huwa set ta codice li jiddeħħol funzjonalità ekstra għas-sito tiegħek WordPress. Dan jista' jkollu biex tghajjem l-logo tal-login jew biex ikunu kumpless biex tiddir funzjonalità e-commerce. _Woocommerce u Contact Form_ huma esempi ta plugin.

Fuq WordPress Multisite, il-plugin jistgħu jiġu installati biss mill-dashboard tal-admin n-network minn Super Admin. Il-Admin siti figliu jista' jattivaw u disattivaw pluginijiet b'mod li jkun f-sito tiegħu.

## Themes

Tema WordPress huwa gruppu ta filem (_grafika, style sheets, u codice_) li jiddeċiedu l-apparenza kollha tal-sito. Jihajjem kull stil front-end bħal styling font, layout tal-paggji, colori, ecc.

F'mod ikum ma pluginijiet, il-theme f WordPress Multisite jistgħu jiġu installati biss minn Super Admin u jattivaw fuq livell siti figliu minn l-Admin siti figliu.

## Site Template

**Site Template** huwa sito bħal template (boilerplate) li tista' ittuża bħala base meta tgħmli siti ġoddi f'network tiegħek.

Dan jkun significa li tista' tgħmli sit base, tiattivaw pluginijiet differenti, tsetti tema aktiva u tista' tippersonalizzawuha kif tħseb. Immen l-klijenti jieħdu kont ġdid, invece ta li jgħandu sito WordPress diġà ma' content mhux b'signifikanza fih, jgħandu kopja tal-sito base tiegħek mal-kull il-customizzazzjoni u l-content immin.

## Domain Mapping

**Domain mapping** ma WordPress hija mod kif tista' i reindirizza l-utenti għall host korrett, peress l-indirizzju tal-sit. F WordPress Multisite, is-siti sottili (subsites) jitcreaw b'attra subdirettori jew subdomain. Il-domain mapping jippermettix li l-utenti tas-siti sottili jgħandu u jgħandu domini ta top-level bħal [**joesbikeshop.com**](http://joesbikeshop.com) biex indirizzju tal-sit xirja aktar professionali.

## SSL

SSL jifforma **Secure Sockets Layer**. Huwa sertifikat digitali li jauthentifika l-identità ta' sit web u jippermettix konnessjoni ekreta (encrypted). Oggi jinkludi bħala teknoloġija standard għalla li tħalli konnessjoni internet sicura u tgħaqqad dati sensibili li jmarr biex ttraxxu bejn sistemi, u tappjiedi l-criminali min ilqriji u modifiki informazzjoni li ttraxxa, inklu dejati personali potenzjali. Il-browser moderni jħtieġ SSL, li jgħandu bħala essenzjal meta tgħmli u tgħanni sit web.

## Media

Media huma immaġini, audio, video u l-file oħra li jgħandu sit web.

Is-siti network jagħallu database waħd hu f WordPress Multisite, iżom jinħtieġo percorsi separati fuq il-filesystem għal file ta media.

Il-lokazzjoni standard tal-WordPress (wp-content/uploads) tistabbil, iżda l-perċa tal-liha jitbdel biex turi l-ID uniku tas-siti network. Għalfe, file ta media għas-siti network jappari bħala wp-contents/uploads/site/[id].

## Permalinks

Permalinks huma l-URL permanenti tal-post o l-pagina blog tiegħek f'sit tiegħek. Permalinks jinqaslu wkoll bħala **pretty links**. B'default, l-URL ta WordPress jista' jgħandu format query string li jappari xi ħaġa bħal dan:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite huwa plugin ta WordPress, iddiseg għall-installazzjonijiet WordPress Multisite, li jgħatti l-installazzjoni tiegħek b'netwerk premium ta siti – kif [WordPress.com](https://WordPress.com) – li jippermettix lil klijenzi biex ikunu siti tramite fee mensili, kwartali jew annwali (tista wkoll toħlo planijiet Free).

## Checkout Form

Checkout Form huwa form ordina waħda o multi-step li jinkludi biex tiġi creat il-subsite, membership u konti tal-utenti hi minn registrazzjoni ta Ultimate Multisite. Huwa kompost mill-field differenti u formijiet tal-pagament li l'utenti għandhom isottili durante il proses ta sign-up.

## Webhook

Webhook (jistem bil-istess dejjem web callback jew HTTP push API) huwa mod biex app jgħaddi informazzjoni reġa'a lil app oħra. Il-webhook jiffri data lil app oħra meta hi qed tippass, li significa li tieħlo data immediatament.

**Ultimate Multisite webhooks** jiftħu possibilitajiet infiniti, li jippermettilix amministratori ta networks biex jgħidu tutti i tipi ta integrazzjonijiet mpreċidi-ma-tufih, speċjalment meta jintuq użati b'konjoinment ma' servizzi bħal _Zapier u IFTTT_.

## Events

Event huwa azzjoni li qed tipprovdi minn l-utenti jew minn azzjoni oħra, bħal klik fuq mouse. Ultimate Multisite jippreserva rekord ta tutti l-events u loggijiet li qed jiġu xierfu f'netwerk tiegħek kollu. Jiddegja aktività differenti li qed tiffur f'multisite tiegħek, bħal bidżi mill-planijiet.
