---
title: Skapa rabattkoder
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Skapa rabattkoder (v2)

_**VIKTIGT: Den här artikeln avser Ultimate Multisite version 2.x.**_

Med Ultimate Multisite kan du skapa rabattkoder för att ge dina kunder rabatter på deras prenumerationer. Och det är enkelt att skapa dem!

## Skapa och redigera rabattkoder

För att skapa eller redigera en rabattkod, gå till **Ultimate Multisite > Rabattkoder**.

![Lista över rabattkoder — tomt läge innan några koder finns](/img/config/discount-codes-empty.png)

Där har du en lista över rabattkoderna du redan har skapat.

Du kan klicka på **Lägg till rabatt** **Kod** för att skapa en ny kupong, eller så kan du redigera dem du har genom att hålla muspekaren över dem och klicka på **Redigera**.

![Lista över rabattkoder med hovringsåtgärder som visar länkarna Redigera och Ta bort](/img/config/discount-codes-list-hover.png)

![Knappen Lägg till rabattkod i sidhuvudet](/img/config/discount-codes-add-button.png)

Du kommer att omdirigeras till sidan där du skapar eller redigerar din kupongkod. I det här exemplet skapar vi en ny.

![Redigeringssida för rabattkod med alla sektioner synliga](/img/config/discount-code-edit.png)

Låt oss ta en titt på inställningarna som finns här:

**Ange rabattkod:** Detta är bara namnet på din rabattkod. Detta är inte koden som dina kunder behöver använda i checkout-formuläret.

**Beskrivning:** Här kan du kort beskriva vad den här kupongen är till för.

![Fält för namn och beskrivning av rabattkod högst upp på redigeringssidan](/img/config/discount-code-description.png)

Du kan också visa rabattkoden som aktiv eller inaktiv:

![Aktiv status för rabattkod](/img/config/discount-code-active.png)

**Kupongkod:** Här definierar du koden som dina kunder behöver ange under checkout.

![Kupongkodsfält där kunder anger koden vid checkout](/img/config/discount-code-coupon-field.png)

**Rabatt:** Här kan du ställa in antingen en **procentandel** eller ett **fast belopp** pengar för din rabattkod.

![Inställning för rabattbelopp med rullgardinsmeny för procentandel eller fast belopp](/img/config/discount-code-amount.png)

**Tillämpa på förnyelser:** Om det här alternativet är avstängt tillämpas denna rabattkod endast på den **första betalningen**. Alla andra betalningar har ingen rabatt. Om det här alternativet är påslaget gäller rabattkoden för alla framtida betalningar.

**Rabatt på startavgift:** Om det här alternativet är avstängt ger kupongkoden **ingen rabatt på startavgiften** för beställningen. Om det här alternativet är påslaget kan du ställa in rabatten (procentandel eller fast belopp) som denna kupongkod ska tillämpa på startavgiften för dina planer.

![Alternativ för att tillämpa på förnyelser och rabatt på startavgift](/img/config/discount-code-renewals.png)

**Aktiv:** Aktivera eller inaktivera denna kupongkod manuellt.

![Aktiv-växel för att manuellt aktivera eller inaktivera rabattkoden](/img/config/discount-code-active.png)

Under **Avancerade alternativ** har vi följande inställningar:

![Avancerade alternativ för rabattkod](/img/config/discount-code-advanced.png)

**Begränsa användningar:**

  * **Användningar:** Här kan du se hur många gånger rabattkoden har använts.

  * **Max antal användningar:** Detta begränsar antalet gånger användare kan använda denna rabattkod. Om du till exempel anger 10 här kan kupongen bara användas 10 gånger. Efter denna gräns kan kupongkoden inte användas längre.

![Inställning för begränsade användningar med aktuellt antal användningar och fält för max antal användningar](/img/config/discount-code-limit-uses.png)

**Start- och utgångsdatum:** Här har du möjlighet att lägga till ett startdatum och/eller ett utgångsdatum för din kupong.

![Fält för start- och utgångsdatum för schemaläggning av rabattkoden](/img/config/discount-code-dates.png)

**Begränsa produkter:** Om du slår på **Välj produkter** visas alla dina produkter för dig. Du får möjlighet att manuellt välja (genom att slå på eller av) vilken produkt som kan acceptera denna kupongkod. Produkter som är avstängda här visar ingen förändring om dina kunder försöker använda denna kupongkod på dem.

![Sektion för begränsning av produkter med växlingsknappar per produkt](/img/config/discount-code-limit-products.png)

När du har konfigurerat alla dessa alternativ klickar du på **Spara rabattkod** för att spara din kupong, och sedan är det klart!

![Knappen Spara rabattkod längst ned på redigeringssidan](/img/config/discount-code-save.png)

Kupongen finns nu i din lista och därifrån kan du klicka för att **redigera eller ta bort** den.

![Rad för rabattkod i listan med hovringsåtgärderna Redigera och Ta bort](/img/config/discount-codes-list-hover.png)

###

### Använda URL-parametrar:

Om du vill anpassa dina pristabeller eller bygga en snygg sida för kupongkoder för din webbplats och vill tillämpa en rabattkod på ditt checkout-formulär automatiskt, kan du göra detta via URL-parametrar.

Först behöver du hämta den delbara länken för din plan. För att göra detta, gå till **Ultimate Multisite > Produkter** och välj en plan.

Klicka på knappen **Klicka för att kopiera delbar länk**. Detta ger dig den delbara länken till denna specifika plan. I vårt fall var den delbara länken som gavs [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Produktsida med knapp för delbar länk](/img/config/products-list.png)

För att tillämpa din rabattkod på denna specifika plan lägger du bara till parametern **?discount_code=XXX** i URL:en. Där **XXX** är kupongkoden.

I vårt exempel här kommer vi att tillämpa kupongkoden **50OFF** på denna specifika produkt.

URL:en för denna specifika plan och med rabattkoden 50OFF tillämpad kommer att se ut så här: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
