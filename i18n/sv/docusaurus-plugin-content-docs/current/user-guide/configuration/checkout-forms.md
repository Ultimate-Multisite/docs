---
title: Kassaformulär
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Kassformulär

Kassformulär är ett enkelt och flexibelt sätt att experimentera med olika metoder när du försöker konvertera nya kunder.

Ultimate Multisite 2.0 erbjuder en redigerare för kassformulär som låter dig skapa så många formulär du vill, med olika fält, produkter som erbjuds osv.

För att komma åt den här funktionen, gå till menyn Kassformulär i den vänstra sidopanelen.

![Lista över kassformulär](/img/config/checkout-forms-list.png)

På den här sidan kan du se alla kassformulär du har.

Listtabellen innehåller en kolumn för **Status** så att du kan bekräfta om varje formulär för närvarande är tillgängligt för kunder:

| Status | Betydelse |
|---|---|
| **Aktiv** | Formuläret kan användas var som helst där dess shortcode eller registreringssida är publicerad. |
| **Inaktiv** | Formuläret är sparat men inaktiverat. Kunder kan inte slutföra kassan med det förrän du aktiverar det igen. |

Använd statuskolumnen innan du redigerar ett offentligt registreringsflöde, särskilt när du har utkast eller säsongsbaserade kassformulär bredvid dina aktiva formulär.

Om du vill skapa ett nytt, klicka bara på Lägg till kassformulär högst upp på sidan.

Du kan välja ett av dessa tre alternativ som utgångspunkt: ett steg, flera steg eller tomt. Klicka sedan för att gå till redigeraren.

När du väljer **ett steg** eller **flera steg** som utgångspunkt innehåller formulärmallen nu som standard ett fält för **Mallval**. Detta fält låter dina kunder välja en webbplatsmall under registreringsprocessen. Du kan lämna det på plats, ta bort det eller flytta det som vilket annat fält som helst i redigeraren.

![Redigerare för kassformulär](/img/config/checkout-form-editor.png)

Alternativt kan du redigera eller duplicera de formulär du redan har genom att klicka på alternativen under dess namn. Där hittar du också alternativen för att kopiera formulärets shortcode eller ta bort formuläret.

![Åtgärder vid hovring över kassformulär](/img/config/checkout-form-hover-actions.png)

#### Översikt över redigeraren för kassformulär

Redigeraren för kassformulär tillhandahåller ett omfattande gränssnitt för att bygga dina registreringsformulär. Här är en översikt över redigerarens layout:

![Översikt över redigeraren för kassformulär](/img/config/checkout-form-editor-overview.png)

### Redigera ett kassformulär

Du kan skapa kassformulär för olika syften. I det här exemplet kommer vi att arbeta med ett registreringsformulär.

Efter att du har navigerat till redigeraren för kassformulär, ge ditt formulär ett namn (som endast kommer att användas för intern referens) och en slug (används till exempel för att skapa shortcodes).

![Redigerare för kassformulär](/img/config/checkout-form-editor.png)

Formulär består av steg och fält. Du kan lägga till ett nytt steg genom att klicka på Lägg till nytt kassasteg.

![Lägg till nytt kassasteg](/img/config/checkout-form-add-step.png)

På den första fliken i modalfönstret fyller du i innehållet för ditt formulärsteg. Ge det ett ID, ett namn och en beskrivning. Dessa objekt används mest internt.

![Fliken innehåll för steg i kassformulär](/img/config/checkout-form-step-content.png)

Ställ sedan in stegets synlighet. Du kan välja mellan "Visa alltid", "Visa endast för inloggade användare" eller "Visa endast för gäster".

![Fliken synlighet för steg i kassformulär](/img/config/checkout-form-step-visibility.png)

Slutligen konfigurerar du stegets stil. Dessa är valfria fält.

![Fliken stil för steg i kassformulär](/img/config/checkout-form-step-style.png)

Nu är det dags att lägga till fält i vårt första steg. Klicka bara på Lägg till nytt fält och välj den typ av avsnitt du vill ha.

![Steg i kassformulär med fält](/img/config/checkout-form-step-with-fields.png)

Varje fält har olika parametrar som ska fyllas i. För denna första inmatning väljer vi fältet "Användarnamn".

![Rullgardinsmeny för val av fälttyp](/img/config/checkout-form-field-type-dropdown.png)

![Innehållsinställningar för fältet Användarnamn](/img/config/checkout-form-username-content.png)

![Synlighetsinställningar för fältet Användarnamn](/img/config/checkout-form-username-visibility.png)

![Stilinställningar för fältet Användarnamn](/img/config/checkout-form-username-style.png)

Du kan lägga till så många steg och fält som du behöver. För att visa dina produkter så att dina kunder kan välja en, använd fältet Pristabell. Om du vill låta dina kunder välja en mall, lägg till fältet Mallval. Och så vidare.

![Dialogrutan Lägg till nytt fält](/img/config/checkout-form-add-field-dialog.png)

_**Obs:** användarnamn, e-post, lösenord, webbplatsrubrik, webbplats-URL, ordersammanfattning, betalning och skicka-knapp är obligatoriska fält för att skapa ett kassformulär._

Medan du arbetar med ditt kassformulär kan du alltid använda knappen Förhandsgranska för att se hur dina kunder kommer att se formuläret. Du kan också växla mellan att visa som en befintlig användare eller en besökare

![Förhandsgranskningsknapp för kassformulär](/img/config/checkout-form-preview-button.png)

![Förhandsgranskningsmodal för kassformulär](/img/config/checkout-form-preview-modal.png)

Slutligen kan du under Avancerade alternativ konfigurera meddelandet för sidan "Tack", lägga till snippets för att spåra konverteringar, lägga till anpassad CSS i ditt kassformulär eller begränsa det till vissa länder.

![Avancerade alternativ](/img/config/checkout-form-advanced.png)

Du kan också manuellt aktivera eller inaktivera ditt kassformulär genom att växla detta alternativ i den högra kolumnen, eller ta bort formuläret permanent.

![Aktiv-reglage](/img/config/checkout-form-active.png)

För att ta bort ett formulär, klicka på borttagningsalternativet i formuläråtgärderna:

![Borttagningsalternativ för kassformulär](/img/config/checkout-form-delete.png)

Glöm inte att spara ditt kassformulär!

![Spara-knapp](/img/config/checkout-form-save.png)

För att få ditt formulärs shortcode, klicka på Generera shortcode och kopiera resultatet som visas i modalfönstret.

![Spara-knapp med shortcode](/img/config/checkout-form-save.png)

### Fältet Pristabell

Fältet **Pristabell** visar dina produkter i kassformuläret så att kunder kan välja en plan. När du redigerar detta fält kan du konfigurera flera alternativ:

![Inställningar för fältet Pristabell](/img/config/pricing-table-field-settings.png)

Så här visas pristabellen i registreringsformuläret på frontend:

![Frontend checkout-pristabell](/img/config/frontend-checkout-pricing-table.png)

  * **Produkter**: Välj vilka produkter som ska visas och i vilken ordning de visas.
  * **Tvinga olika varaktigheter**: När detta är aktiverat visas alla produkter oavsett om de har en matchande prisvariation för den för närvarande valda faktureringsperioden. När det är inaktiverat (standard) döljs produkter utan en variation för den valda perioden.
    ![Alternativ för att tvinga varaktigheter i pristabell](/img/config/pricing-table-force-durations.png)
  * **Dölj när förvalt**: Döljer pristabellen när en plan redan har valts via URL:en (t.ex. `/register/premium`).
  * **Mall för pristabell**: Välj den visuella mallen för pristabellen (Enkel lista, Äldre osv.).

Om du lägger till en produkt i pristabellen innan formuläret innehåller de fält som krävs för att slutföra den produktens checkout-flöde visar redigeraren nu en varning. Använd varningen för att lägga till det saknade obligatoriska fältet innan du publicerar eller sparar ändringar för ett aktivt registreringsformulär.

### Lägga till en växlare för periodval

Om du har konfigurerat [Prisvariationer](creating-your-first-subscription-product#price-variations) på dina produkter (t.ex. månads- och årspris) kan du lägga till ett **Periodval**-fält i ditt checkout-formulär. Det här fältet visar en växlare som låter kunder växla mellan faktureringsperioder, och pristabellen uppdateras dynamiskt i realtid.

#### Steg 1: Konfigurera prisvariationer på dina produkter

Innan du lägger till fältet Periodval, se till att dina produkter har prisvariationer konfigurerade. Gå till **Ultimate Multisite > Produkter**, redigera en produkt och navigera till fliken **Prisvariationer** för att lägga till alternativa faktureringsperioder (t.ex. Årligen till ett rabatterat pris).

![Fliken Prisvariationer på en produkt](/img/config/product-price-variations-tab.png)

#### Steg 2: Lägg till fältet Periodval i ditt checkout-formulär

1. Gå till **Ultimate Multisite > Checkout-formulär** och redigera ditt checkout-formulär.

2. Rulla ned till steget som innehåller ditt **Pristabell**-fält och klicka på **Lägg till nytt fält**.

3. Klicka på **Period Select** i dialogrutan för val av fälttyp.

![Dialogrutan Lägg till nytt fält som visar Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Konfigurera periodalternativen. Varje alternativ behöver:
   * **Varaktighet**: Talet (t.ex. `1`)
   * **Varaktighetsenhet**: Periodtypen (dagar, veckor, månader eller år)
   * **Etikett**: Texten som kunderna kommer att se (t.ex. "Månadsvis", "Årligen")

5. Klicka på **+ Lägg till alternativ** för att lägga till fler periodval. Dessa alternativ måste matcha prisvariationerna som du konfigurerade på dina produkter.

![Inställningar för fältet Periodval](/img/config/period-selection-field-settings.png)

6. Välj en **Mall för periodväljare** (Clean är standard, vilket renderar en enkel formgiven väljare redo för anpassad CSS).

7. Klicka på **Spara fält**.

#### Steg 3: Placera fältet ovanför pristabellen

För bästa användarupplevelse, se till att fältet Periodval visas **före** fältet Pristabell i ditt checkout-steg. Du kan dra fält för att ändra ordningen på dem i redigeraren för checkout-formulär. På så sätt väljer kunderna först en faktureringsperiod och ser sedan priserna för den perioden.

![Redigerare för checkout-formulär som visar fältordning](/img/config/checkout-form-editor-with-fields.png)

#### Så fungerar det på Frontend

När det är konfigurerat kommer kunder som besöker din registreringssida att se periodväljaren ovanför pristabellen. När de klickar på en annan faktureringsperiod:

  * Pristabellen uppdateras omedelbart för att visa priser för den valda perioden (ingen sidladdning krävs).
  * Om **Tvinga olika varaktigheter** är inaktiverat på fältet Pristabell, döljs produkter utan en prisvariation för den valda perioden.
  * Om **Tvinga olika varaktigheter** är aktiverat förblir alla produkter synliga även om de inte har en variation för den valda perioden (de visar sitt standardpris).

#### Förvälja en faktureringsperiod via URL

Du kan också förvälja en produkt och faktureringsperiod via URL:en. Ultimate Multisite stöder dessa URL-mönster:

  * `/register/premium` — Förväljer endast produkten "Premium"
  * `/register/premium/12` — Förväljer produkten och en varaktighet på 12 månader
  * `/register/premium/1/year` — Förväljer produkten med en varaktighet på 1 år

### Fältet för mallval

Fältet **Mallval** låter kunder välja en webbplatsmall under checkout. Det ingår nu som standard i formulärmallarna för checkout med **ett steg** och **flera steg** som lades till i Ultimate Multisite v2.6.1.

#### Lägga till fältet manuellt

Om du arbetar med ett formulär som skapades före v2.6.1, eller började från en tom mall:

1. Gå till **Ultimate Multisite > Checkout-formulär** och redigera ditt checkout-formulär.
2. I steget där webbplatsuppgifter samlas in klickar du på **Lägg till nytt fält**.
3. Välj **Mallval** i dialogrutan för fälttyp.
4. Konfigurera fältet:
   - **Etikett** — Rubriken som kunder ser ovanför mallrutnätet (t.ex. "Välj en webbplatsmall").
   - **Obligatoriskt** — Om kunder måste välja en mall innan de fortsätter.

#### Så fungerar det

När en kund väljer en mall under checkout använder Ultimate Multisite den när deras nya webbplats provisioneras. Mallarna som visas kommer från din **lista över webbplatsmallar** (**Ultimate Multisite > Webbplatsmallar**). Endast mallar markerade som tillgängliga för kunder visas här.

### Basdomäner för checkout-formulär

Ultimate Multisite v2.13.0 behandlar domäner som konfigurerats i checkout-formulärens **Webbplats-URL**-fält som nätverkets basdomäner. Använd fältets inställningar för tillgängliga domäner när du vill att kunder ska skapa webbplatser under en eller flera delade registreringsdomäner, såsom `example.com` och `sites.example.com`.

Delade basdomäner för checkout-form behandlas inte som anpassade domänmappningar per webbplats. När en kund skapar en underkatalogswebbplats på en av dessa baser skapar Ultimate Multisite inte en mappad domänpost som skulle göra att den delade hosten tillhör endast den webbplatsen. Den delade hosten förblir tillgänglig för syskonwebbplatser som använder samma checkout-form-bas.

Behåll anpassade domäner för kundspecifika mappade hostar, såsom `customer-example.com`. Behåll basdomäner för checkout-form för delade registreringshostar som många webbplatser kan använda.

#### Ta bort fältet

Om du inte erbjuder webbplatsmallar, ta bort fältet Mallval från ditt formulär. Kunder får då den standardmall som har konfigurerats under **Ultimate Multisite > Settings > Site Templates**.
