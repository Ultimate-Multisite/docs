---
title: Grundläggande koncept
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Grundläggande begrepp

För dig som är ny på WordPress Multisite och precis har börjat använda Ultimate Multisite kan det finnas en hel del nya ord och uttryck att lära sig i början. Att förstå dem är viktigt eftersom du behöver ha koll på plattformen och hur den fungerar i sin helhet.

I den här artikeln försöker vi definiera och förklara några av de viktigaste begreppen i WordPress. En del är mer relevanta för användare, andra för utvecklare, och vissa för båda.

## WordPress Multisite

WordPress **Multisite** är en typ av WordPress-installation som låter dig skapa och hantera ett nätverk med flera webbplatser från en enda WordPress-panel. Du kan hantera allt, inklusive antal webbplatser, funktioner, teman och användarroller. Det går att hantera hundratals, till och med tusentals webbplatser.

## Nätverk

Inom WordPress är ett multisite-nätverk en plats där ett antal **undersajter** kan hanteras från en enda panel. Hur man skapar ett multisite-nätverk varierar mellan olika hostingleverantörer, men slutresultatet brukar vara några extra direktiv i filen **wp-config.php** som talar om för WordPress att det körs i det här specifika läget.

Det finns ett antal tydliga skillnader mellan ett multisite-nätverk och en fristående WordPress-installation, som vi kort ska gå igenom.

## Databas

En databas är en strukturerad, organiserad samling av data. Inom dataterminologi syftar databas på programvara som används för att lagra och organisera data. Tänk på det som ett arkivskåp där du sparar data i olika avdelningar som kallas tabeller.

WordPress Multisite använder en databas och varje undersajt får sina egna tabeller med blogg-id i prefixet. Så när du har installerat ett nätverk och skapat en undersajt bör du ha dessa tabeller:

_wp_1_options_ \- inställningstabell för första undersajten

_wp_2_options_ \- inställningstabell för andra undersajten

## Hostingleverantör

En hostingleverantör är ett företag som gör det möjligt för företag och privatpersoner att göra sina webbplatser tillgängliga på internet. Tjänsterna som webbhotell erbjuder varierar, men brukar inkludera webbdesign, lagringsutrymme på en server och internetanslutning.

## Domän

Ett domännamn är adressen som besökare använder för att komma till din webbplats. Det talar om för webbläsaren var den ska leta efter din webbplats. Precis som en gatuadress är domänen det sätt som folk besöker din webbplats på nätet. Och ungefär som att ha en skylt framför din butik. Om du vill besöka vår webbplats måste du skriva vår webbadress i webbläsarens adressfält, vilket är [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _, där_ [**ultimatemultisite.com**](http://ultimatemultisite.com) är domännamnet.

## Subdomän

En subdomän är en typ av webbplatshierarki under huvuddomänen, men istället för att använda mappar för att organisera innehåll på en webbplats får den på sätt och vis en egen webbplats. Den presenteras som [**https://site1.domain.com/**](https://site1.domain.com/) där _site1_ är subdomännamnet och [_domain.com_](http://domain.com) är huvuddomänen.

## Underkatalog

En underkatalog är en typ av webbplatshierarki under en rotdomän som använder mappar för att organisera innehåll på en webbplats. En underkatalog är samma sak som en undermapp och namnen kan användas synonymt. Den presenteras som [**https://domain.com/site1**](https://domain.com/site1) där _site1_ är underkatalognamnet och [_domain.com_](http://domain.com) är huvuddomänen.

## Undersajt

En undersajt är en underordnad webbplats som du skapar i ett Multisite-nätverk. Den kan vara antingen en **subdomän** eller **underkatalog** beroende på hur din WordPress Multisite-installation är konfigurerad.

## Superadministratör

En WordPress Superadministratör är en användarroll med fullständiga rättigheter att hantera alla undersajter i ett Multisite-nätverk. För Multisite-användare är det den **högsta åtkomstnivån** du kan ge i din WordPress-installation.

## Plugin

Generellt sett är ett plugin en samling kod som lägger till extra funktionalitet på din WordPress-webbplats. Det kan vara så enkelt som att ändra logotypen vid inloggning eller så komplext som att lägga till e-handelsfunktionalitet. _Woocommerce och Contact Form_ är exempel på plugin.

I en WordPress Multisite kan plugin endast installeras från nätverksadminpanelen av Superadministratörer. Undersajtadministratörer kan bara aktivera och inaktivera plugin inom sin undersajt.

## Teman

Ett WordPress-tema är en samling filer (_grafik, stilmallar och kod_) som styr webbplatsens övergripande utseende. Det tillhandahåller all frontend-styling som typsnittsstyling, sidlayout, färger med mera.

Precis som plugin kan teman i WordPress Multisite endast installeras av Superadministratörer och kan aktiveras på undersajtnivå av undersajtadministratörer.

## Webbplatsmall

**Webbplatsmall** är en färdig grundwebbplats som kan användas som bas när du skapar nya webbplatser i ditt nätverk.

Det innebär att du kan skapa en baswebbplats, aktivera olika plugin, välja ett aktivt tema och anpassa det precis som du vill. När din kund sedan skapar ett nytt konto, istället för att få en standard WordPress-webbplats utan meningsfullt innehåll, får de en kopia av din baswebbplats med alla anpassningar och allt innehåll redan på plats.

## Domänmappning

**Domänmappning** i WordPress är ett sätt att dirigera användare till rätt värd via webbplatsens adress. I en WordPress Multisite skapas undersajter med antingen underkatalog eller subdomän. Domänmappning gör det möjligt för undersajtanvändare att använda en toppdomän som [**joesbikeshop.com**](http://joesbikeshop.com) för att få sin webbadress att se mer professionell ut.

## SSL

SSL står för **Secure Sockets Layer**. Det är ett digitalt certifikat som verifierar en webbplats identitet och möjliggör en krypterad anslutning. Numera används det som standardteknik för att hålla internetanslutningar säkra och skydda känslig data som skickas mellan två system, vilket förhindrar att brottslingar kan läsa och ändra överförd information, inklusive potentiella personuppgifter. Moderna webbläsare kräver SSL, vilket gör det nödvändigt när du skapar och driver en webbplats.

## Media

Media är bilder, ljud, video och andra filer som utgör en webbplats.

I en WordPress Multisite delar nätverkets webbplatser en gemensam databas, men de har separata sökvägar i filsystemet för mediefiler.

Den vanliga WordPress-platsen (wp-content/uploads) finns kvar, men sökvägen ändras för att återspegla nätverkswebbplatsens unika ID. Därför visas mediefiler för en nätverkswebbplats som wp-contents/uploads/site/[id].

## Permalänkar

Permalänkar är de permanenta webbadresserna till dina enskilda blogginlägg eller sidor på din webbplats. Permalänkar kallas också för **snygga länkar**. Som standard använder WordPress-webbadresser frågesträngsformat som ser ut ungefär så här:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite är ett WordPress-plugin, skapat för WordPress Multisite-installationer, som förvandlar din WordPress-installation till ett premiumnätverk av webbplatser – som [WordPress.com](https://WordPress.com) – där kunder kan skapa webbplatser via månads-, kvartals- eller årsavgifter (du kan också skapa gratisplaner).

## Utcheckningsformulär

Utcheckningsformulär är ett beställningsformulär i ett eller flera steg som innefattar skapandet av undersajt, medlemskap och användarkonton genom Ultimate Multisite-registrering. Det består av olika fält och betalningsformulär som en användare måste fylla i under registreringsprocessen.

## Webhook

En webhook (kallas även web callback eller HTTP push API) är ett sätt för en app att ge andra applikationer realtidsinformation. En webhook levererar data till andra applikationer när något händer, vilket innebär att du får data omedelbart.

**Ultimate Multisite webhooks** öppnar oändliga möjligheter och låter nätverksadministratörer göra alla möjliga galna men användbara integrationer, särskilt i kombination med tjänster som _Zapier och IFTTT_.

## Händelser

En händelse är en åtgärd som sker som ett resultat av användarens eller en annan källas åtgärd, till exempel ett musklick. Ultimate Multisite sparar en logg över alla händelser som sker i hela ditt nätverk. Det spårar olika aktiviteter som händer i din multisite, som planändringar.
