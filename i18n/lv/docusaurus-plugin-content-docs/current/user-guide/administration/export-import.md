---
title: Izpilde un ievadi
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Izvēles un Importeri

Ultimate Multisite 2.9.0 ieviesta vienu vietnes **Izvēles un Importeru** (Export & Import) rīku, kas atrodas menu **Tools > Export & Import**. Izmantojiet to, ja jums ir nepieciešams pakaļpakot WordPress vietni ZIP failā, atkārtoti šo ZIP failu vai pārvietot vietni starp saistītiem Ultimate Multisite un vienotas WordPress instalācijām.

## Nepieciešamās atļaupas

Jums jāiekļauj kā administrator, kuram ir piekļuve WordPress **Tools** menu apkārt vietnei, no kuru tiek izveidots vai importēts fail. Multites tīklā, pievienoties tīkla administratora kontu, ja jūs izveidat vai importējat subvietas ar tīkla līmeņa Ultimate Multisite rīkiem.

Izvēles ZIP manholi tiek sniegti caur autentikētu lejupielādi, tāpēc turējiet admin sesiju aktīvu līdz lejupielāde beidzjas un neizplatiet generēto lejupielādes URL-us publiski.

## Vietnes izveide ZIP failā

1. WordPress admina vietnē, no kuras vēlaties kopēt, pārvietojiet uz **Tools > Export & Import**.
2. Atveriet izveides lauku un izvēlieties vietni, ko vēlaties pakaļpakot.
3. Izvēlieties opcionā saturu, ko vēlaties ietvert, piemēram, lejupielādētus, pluginus un tēmas, ja šie opcijas ir pieejami.
4. Sākiet izveidi un gaidiet procesu beigties. Lielām vietnēm var būt nepieciešams pabeigties fonā pirms ZIP faila būs sagatavots.
5. Lejupielādējiet gatavo ZIP failu no izveides saraksta.

Turējiet ZIP failu drošā vietā. Tas var ietvert vietnes saturu, iestatījumus, mediju failus un izvēlētos kodu resursus.

## Ko iekļauj izveide

Izveides ZIP faila var ietvert:

- Izvēlēto vietnes datubāzes saturu un konfigurāciju.
- Lejupielādētus mediju failus, ja tie ir ietverts.
- Pluginus un tēmas, ja šie opcijas ir izvēlētas.
- Importu metadatus, ko Izveides un Importeru rīks izmanto vietnes atjaunošanai mērķa instalācijā.

Tiecasu ZIP faila izvēles lieluma ir atkarīgs no mediju daudzuma, izvēlēto pluginu un temām, kā arī vietnes databāzes tabulu izmēra.

## Vietnes  importešana no ZIP failas

1. Atgriezties uz **Tools > Export & Import** (Rīki > Izpilde un ieviešana) saimniekmet WordPress vietnē.
2. Atveriet importu lauku un uzlabojiet ZIP failu, ko izveidoji "Export & Import" rīka ar ātrākās izpildes.
3. Ievadiet atjauno URL (replacement URL), ja vietnei jāizmanto jauns adrese, vai atstājiet lauku tukšu, lai saglabātu oriģinālu URL.
4. Izvēlieties, vai vēlaties izslēgt uzlabotu ZIP failu pēc importas pabeigšanas.
5. Nospiediet **Begin Import** (Sākt importu).
6. Uzraudziet nepiegādāto importu līdz viņa pabeigšanai. Izmantojiet **Cancel Import** (Atcel importu) tikai tad, ja jums ir nepieciešams pārtraukt procesu pirms pabeigšanas.
7. Pārskatiet ieviegtajai vietnei, pirms atļaujat normālu trafiku vai klientiem piekļuvi.

V vienasvietas WordPress instalācijā ZIP faila importēšana aizstāj pašreizējās vietnes ar importētu vietni. Pirms sākat, izveidi pilnu rezerves kopiju (backup) mērķa vietnei un izvairieties sākāt vairākus importus vienlaikus par to pašu vietni.

## ierobežojumi un pielāgošanas atzīmes

* Visi ļoti lielie uzlādes direktorijumi vai mediju bibliotējas var radīt liels ZIP failu. Pirms izveidotu vai ievadītu lielus vietnes, pārliecinieties, ka ir noteikti PHP uzlādes ierobežojumi, izpildes ierobežojumi, diskas vietas, memory un servera laika laika iestatījumi.
* ļoti lielām mediju bibliotēm var būt nepieciešams pārvietoties laikā ar zema trafika apkopes laiku.
* Mērķa WordPress instalācija jāveic ar saderīgu WordPress, PHP, Ultimate Multisite, pluginu un tēmas versijām.
* Vienkārša vietnes ievade aizstāj mērķa vietni. Tas nav apvienošanas rīks.
* Multisite-no-viena-vietne un viena-vietne-multisite pārvietošanas ir atbalstītas tikai tad, ja mērķa vidi var veikt izveidotas vietnes pluginus, tēmas, URL-us un nepieciešamos Ultimate Multisite komponentes.
* Saglabājiet ZIP failu privātu. Tas var ietvert datubāzes saturu, uzlādētus failus un konfigurācijas detaļas no izveidotas vietnes.

Lai saglabātu vecākus tīkla līmeņa izveide veidiem, skatieties [Site Export](/user-guide/administration/site-export).
