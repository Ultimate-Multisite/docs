---
title: Skattehantering
sidebar_position: 4
_i18n_hash: a50fddb07455f714128e042744ab5859
---
# Skattehantering

Ultimate Multisite har en inbyggd modul för skatteuppbörd i vårt huvudplugin, så om du behöver ta ut försäljningsskatt på dina planer, paket och tjänster kan du enkelt göra det utan att installera några tillägg.

För företag i Europa erbjuder vi ett **tillägg** som innehåller verktyg och funktioner för bättre **stöd för moms**.

Ultimate Multisite deklarerar eller betalar inte in skatter å dina vägnar till myndigheterna; vi hjälper dig bara att ta ut rätt skatt vid köptillfället. **Du måste fortfarande deklarera och betala in skatterna själv.**

## Aktivera skatteuppbörd

Skatteuppbörd är inte aktiverat som standard. För att aktivera det går du till **Ultimate Multisite > Inställningar > Skatter** och slår på inställningen Aktivera skatter.

![Aktivera skatter-reglaget i skatteinställningarna](/img/config/settings-taxes.png)

### Exklusive skatt vs. inklusive skatt

Som standard är alla dina produktpriser exklusive skatt, vilket innebär att skatter **inte ingår** i produktens pris. Om vi bedömer att en kund ska betala skatt på ett visst köp lägger vi till skatten **ovanpå** delsumman.

Om du föredrar att ha skatt inkluderat i dina produktpriser kan du göra det genom att aktivera inställningen **Inklusive skatt**.

![Reglaget för Inklusive skatt](/img/config/settings-taxes.png)

Glöm inte att **spara** dina ändringar.

### 

## Skapa skattesatser

När du har aktiverat skatteuppbörd behöver du skapa skattesatser för specifika platser med hjälp av vår skattesatsredigerare.

Du når redigeraren genom att klicka på knappen **Hantera skattesatser** i sidofältet på sidan för skatteinställningar.

![Knappen Hantera skattesatser i sidofältet](/img/config/settings-taxes.png)

På sidan för skattesatsredigeraren kan du lägga till nya skattesatser genom att klicka på knappen **Lägg till ny rad**.

![Skattesatsredigeraren med knappen Lägg till ny rad](/img/config/settings-taxes.png)

Du måste ge varje skattesats en **rubrik** (används på fakturor). Sedan kan du välja **land** (obligatoriskt), **delstat** och **stad** (båda valfria) där denna skatt ska tas ut. Slutligen anger du **skattesatsen i procent**.

### Skattekategorier

Du kan också skapa flera skattekategorier för att lägga till olika skattesatser för olika typer av produkter.

Klicka på **Lägg till ny skattekategori**, skriv in kategorinamnet och tryck på **Skapa**.

![Knappen Lägg till ny skattekategori](/img/config/settings-taxes.png)

![Skapa en ny skattekategori](/img/config/settings-taxes.png)

För att bläddra mellan kategorier klickar du på **Växla** och väljer den kategori där du vill lägga till nya skatter.

![Växla mellan skattekategorier](/img/config/settings-taxes.png)

![Välja en skattekategori att visa](/img/config/settings-taxes.png)

Du kan ange skattekategori för en specifik produkt genom att gå till **produktredigeringssidan** och sedan till fliken Skatter.

![Produktens skatteflik med skattekategori och skattepliktig-reglaget](/img/config/product-taxes.png)

På samma skärm kan du stänga av reglaget **Är skattepliktig?** för att låta Ultimate Multisite veta att skatt inte ska tas ut på den produkten.

## Stöd för europeisk moms

Som nämnts tidigare har vi ett tillägg tillgängligt för kunder inom EU som har särskilda krav på grund av europeiska momsregler.

Våra momsverktyg hjälper till med ett par viktiga saker:

  * Enkel inläsning av EU-momssatser;

  * Insamling och validering av momsnummer – och omvänd skattskyldighet för momsbefriade enheter (som företag med giltiga momsnummer);

För att installera tillägget går du till **Ultimate Multisite > Inställningar** och klickar sedan på länken **Kolla in våra tillägg** i sidofältet.

![Inställningssidan med länken till tillägg i sidofältet](/img/config/settings-taxes.png)

Du omdirigeras till vår tilläggssida. Där kan du söka efter **Ultimate Multisite VAT add-on** och installera det.

![VAT add-on på tilläggssidan](/img/config/settings-taxes.png)

![Installationsdialog för VAT add-on](/img/config/settings-taxes.png)

Gå sedan till **Nätverksadmin > Plugins** och aktivera tillägget nätverksomfattande.

![Nätverksaktivera VAT add-on](/img/config/settings-taxes.png)

Om du går tillbaka till **fliken Skatteinställningar** ser du nya alternativ. Slå på alternativet **Aktivera momsstöd** för att aktivera de nya momsverktygen. Glöm inte att **spara** dina inställningar!

![Reglaget Aktivera momsstöd i skatteinställningarna](/img/config/settings-taxes.png)

### Hämta momssatser

Ett av verktygen som vår integration lägger till är möjligheten att läsa in momssatser för EU:s medlemsländer. Det görs genom att besöka sidan för skattesatsredigeraren efter att du aktiverat EU-momsstöd.

Längst ned på sidan ser du alternativen för att hämta momssatser. Välj en satstyp och klicka på knappen **Uppdatera EU-momssatser** för att hämta och automatiskt fylla i tabellen med momssatser för varje EU-medlemsland. Sedan behöver du bara spara.

### ![Alternativ för att hämta momssatser med knappen Uppdatera EU-momssatser](/img/config/settings-taxes.png)

Du kan också redigera värdena efter att du hämtat dem. Redigera bara den tabellrad du behöver och klicka för att spara de nya värdena.

### Momsvalidering

När momsstöd är aktiverat lägger Ultimate Multisite till ett extra fält i kassaformuläret, under faktureringsadressfältet. Fältet visas bara för kunder inom EU.

![Momsnummerfält i kassaformuläret](/img/config/settings-taxes.png)

Ultimate Multisite validerar sedan momsnumret och om det är giltigt tillämpas omvänd skattskyldighet och momssatsen sätts till 0% på den beställningen.
