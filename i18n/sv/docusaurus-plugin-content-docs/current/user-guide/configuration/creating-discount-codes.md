---
title: Skapa rabattkoder
sidebar_position: 19
_i18n_hash: 66179a52645793d48bb6cb9a9e47c016
---
# Skapa rabattkoder (v2)

_**VIKTIGT: Denna artikel gäller Ultimate Multisite version 2.x.**_

Med Ultimate Multisite kan du skapa rabattkoder för att ge dina kunder rabatt på sina prenumerationer. Och det är enkelt att göra!

## Skapa och redigera rabattkoder

För att skapa eller redigera en rabattkod, gå till **Ultimate Multisite > Discount Codes**.

![](/img/config/discount-codes-list.png)

Där ser du en lista över de rabattkoder du redan har skapat.

Du kan klicka på **Add Discount** **Code** för att skapa en ny kupong, eller redigera befintliga genom att hålla muspekaren över dem och klicka på **Edit**.

![Lista med rabattkoder och hovringsalternativ](/img/config/discount-codes-list.png)

![Knappen Add Discount Code](/img/config/discount-codes-list.png)

Du kommer att skickas vidare till sidan där du skapar eller redigerar din kupongkod. I det här exemplet skapar vi en ny.

![Redigeringssida för rabattkod](/img/config/discount-codes-list.png)

Låt oss titta på de inställningar som finns här:

**Enter Discount Code:** Detta är helt enkelt namnet på din rabattkod. Det är inte koden som dina kunder behöver använda i kassan.

**Description:** Här kan du kort beskriva vad kupongen är till för.

![Fält för rabattkodens namn och beskrivning](/img/config/discount-codes-list.png)

**Coupon code:** Här anger du koden som dina kunder behöver skriva in vid betalningen.

![Fält för kupongkod](/img/config/discount-codes-list.png)

**Discount:** Här kan du ange antingen en **procentuell** rabatt eller ett **fast belopp** för din rabattkod.

![Inställning för procentuell eller fast rabatt](/img/config/discount-codes-list.png)

**Apply to renewals:** Om detta alternativ är avslaget gäller rabattkoden endast för den **första betalningen**. Alla efterföljande betalningar blir utan rabatt. Om alternativet är påslaget gäller rabattkoden för alla framtida betalningar.

**Setup fee discount:** Om detta alternativ är avslaget ger kupongkoden **ingen rabatt på startavgiften** för beställningen. Om alternativet är påslaget kan du ange rabatten (procentuell eller fast belopp) som kupongkoden ska ge på startavgiften för dina planer.

![Alternativ för Apply to renewals och Setup fee discount](/img/config/discount-codes-list.png)

**Active:** Aktivera eller inaktivera kupongkoden manuellt.

![Aktiveringsknapp för rabattkod](/img/config/discount-codes-list.png)

Under **Advanced Optio** **ns** hittar du följande inställningar:

**Limit uses:**

  * **Uses:** Här kan du se hur många gånger rabattkoden har använts.

  * **Max uses:** Detta begränsar hur många gånger användare kan använda rabattkoden. Om du till exempel anger 10 här kan kupongen endast användas 10 gånger. Efter denna gräns går kupongkoden inte längre att använda.

![Inställning för användningsbegränsning med fält för antal användningar och maxgräns](/img/config/discount-codes-list.png)**Start & expiration dates:** Här kan du lägga till ett startdatum och/eller ett utgångsdatum för din kupong.

![Fält för start- och utgångsdatum](/img/config/discount-codes-list.png)

**Limit products:** Om du slår på **Select products** visas alla dina produkter. Du kan manuellt välja (genom att slå på eller av) vilka produkter som ska acceptera kupongkoden. Produkter som är avslagna här påverkas inte om dina kunder försöker använda kupongkoden på dem.

![Val för produktbegränsning](/img/config/discount-codes-list.png)

När du har ställt in alla dessa alternativ klickar du på **Save Discount Code** för att spara din kupong – klart!

![Knappen Save Discount Code](/img/config/discount-codes-list.png)

Kupongen finns nu i din lista, och därifrån kan du klicka för att **redigera eller ta bort** den.

![Rabattkod i listan med alternativ för redigering och borttagning](/img/config/discount-codes-list.png)

### 

### Använda URL-parametrar:

Om du vill anpassa dina pristabeller eller skapa en snygg kupongsida på din webbplats och vill att en rabattkod ska tillämpas automatiskt i kassan, kan du göra detta via URL-parametrar.

Först behöver du hämta den delbara länken för din plan. Gå till **Ultimate Multisite > Products** och välj en plan.

Klicka på knappen **Click to Copy Shareable Link**. Detta ger dig den delbara länken till just denna plan. I vårt fall blev den delbara länken [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Produktsida med knapp för delbar länk](/img/config/products-list.png)

För att tillämpa din rabattkod på denna specifika plan lägger du bara till parametern **?discount_code=XXX** i URL:en, där **XXX** är kupongkoden.

I vårt exempel här tillämpar vi kupongkoden **50OFF** på denna specifika produkt.

URL:en för denna specifika plan med rabattkoden 50OFF tillämpad blir: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

### 
