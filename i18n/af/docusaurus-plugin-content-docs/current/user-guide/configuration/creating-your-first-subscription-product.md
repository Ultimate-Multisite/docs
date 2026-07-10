---
title: Skep jou eerste abonnementsproduk
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Skep jou Eerste Abonnementsproduk (v2) {#creating-your-first-subscription-product-v2}

_**BELANGRIKIEKE OPMERKING: Hierdie artikel is slegs vir Ultimate Multisite weergawe 2.x gebruikers. As jy weergawe 1.x gebruik,**_ **_**kyk na hierdie artikel**_**.

Om jou netwerk te laat loop en begin om jou dienste aan potensiële gebruikers te verkoop, het jy verskillende abonnementsopsies nodig. Hoe skep jy hierdie produkte? Wat is die tipes produkte wat jy kan aanbied? In hierdie artikel gaan ons alles dek wat jy oor produkte moet weet.

## Produk Tipe {#product-type}

Met Ultimate Multisite kan jy twee kategorieë produkte aan jou kliënte aanbied: **planne** en **byvoegings** **(Add-ons)**. Byvoegings kan weer in twee tipes verdeel word: **pakkette** en **dienste**. Ons sal hul verskille en besonderhede volgende bespreek.

*   **Planne** : Die fundamentele produk van Ultimate Multisite. Jou kliënt kan slegs 'n lidmaatskap hê as dit aan 'n plan gekoppel is. 'n Plan voorsien jou kliënte van een of meer webwerwe (dit hang af van die konfigurasies van jou plan) met die beperkings wat jy op jou produkredigeerbladsy gestel het.

*   **Pakkette** : Byvoegings wat direk die funksionaliteite van Ultimate Multisite planne beïnvloed. Hulle verander beperkings of voeg nuwe hulpbronne, plugins of temas by tot die oorspronklike plan wat jou kliënt gekoop het. Byvoorbeeld, 'n basiese plan mag 1 000 besoeke per maand toelaat en jy kan 'n pakket beskikbaar stel wat hierdie nommer tot 10 000 uitbrei.

*   **Dienste:** Byvoegings wat nie die funksionaliteite van Ultimate Multisite verander nie. Dit is take wat jy vir jou kliënt sal uitvoer benewens die plan wat hulle gekoop het. Byvoorbeeld, jou klant mag 'n plan koop wat een webwerf toelaat en ook betaal vir 'n ekstra diens wat hierdie webwerf ontwerp sal.

## Bestuur van Produkte {#managing-products}

Vir baie kan die **Produkte** tab in Ultimate Multisite **(Ultimate Multisite > Products)** vergelyk word met planne in 'n tradisionele hostingomgewing.

Binne Ultimate Multisite definieer die Produkte tab die konstruksie en beperkings wat van toepassing is op 'n spesifieke produk of diens. Sulke konstruksies strek uit tot produk- of diensbeskrywing, prys, belasting en toestemming.

Hierdie afdeling sal jou begrip van hierdie noodsaaklike hoeksteen van Ultimate Multisite lei.

![Products list page](/img/config/products-list.png)

## Byvoeg van Produkte {#adding-products}

Of dit nou 'n plan, pakket of diens is, die beginpunt om 'n nuwe item te definieer, is via **Ultimate Multisite > Products > Add Product**.

![Add Product button](/img/config/product-add-button.png)

Die koppelvlak bevat twee dominante afdelings. Links is daar verskeie tabs wat help met die definisie van die produk en regs is daar 'n paar afdelings om die basisprys van die produk, sy aktiewe status en produkbeeld te definieer.

![Product edit page overview](/img/config/product-edit-full.png)

### Beskrywing {#description}

Die basisproduk-inligting kan word gedefinieer deur 'n produknaam en beskrywing te verskaf. Hierdie identifikators word oral vertoon waar produkinligting benodig word, soos plan- en prysekeuse, fakture, opgraderings, en dergelikes.

![Product description section](/img/config/product-description.png)

### Prys tipe {#pricing-type}

Aan die regterkant van die koppelvlak kan die basisprysing gedefinieer word.

![Pricing and save section](/img/config/product-pricing-save.png)

Ultimate Multisite ondersteun drie verskillende prys-tipes. Die **paid** opsie vra die netwerkbeheerder vir inligting oor die produk se prys en faktuureringsfrekwensie.

### Prysing {#pricing}

Die pryskomponent definieer die basisproduk-prys en faktuureringsinterval.

![Pricing and save section](/img/config/product-pricing-save.png)

sodoende sal 'n voorbeeldprys van $29.99 met 'n instelling van 1 maand elke maand $29.99 faktureer. Op soortgelyke wyse sal 'n prys van $89.97 met 'n instelling van 3 maande daardie bedrag elke kwartaal faktureer.

### Faktuureringssiklusse {#billing-cycles}

Die faktuureringssiklusse-afdeling spesifiseer die frekwensie van die genoemde faktuureringsinterval en word oor die algemeen verstaan in die lig van kontrakte of vaste terme.

![Pricing and save section](/img/config/product-pricing-save.png)

Byvoorbeeld, 'n produkprys van $29.99 met 'n interval van 1 maand en 12 faktuureringssiklusse sal $29.99 per maand vir die produk oor die volgende 12 maande faktureer. Met ander woorde sal so 'n instelling 'n vaste-prys termyn van $29.99 per maand vir 12 maande vestig en dan die fakturering staak.

### Proefperiode {#trial-period}

Die inskakeling van die proefperiode-toggle laat die netwerkbeheerder toe om 'n proefperiode vir die produk te definieer.

![Pricing and save section](/img/config/product-pricing-save.png)

Gedurende die proefperiode is kliënte vry om die produk te gebruik en sal nie gefaktureer word totdat die proefperiode uitgeput is nie.

### Opstelfooi {#setup-fee}

Jy kan ook 'n opstelfooi op jou plan toepas.

![Pricing and save section](/img/config/product-pricing-save.png)

Dit beteken dat jou kliënt 'n ekstra bedrag sal betaal by die eerste lading (benewens die planprys) wat ooreenstem met die fooi wat jy in hierdie afdeling gedefinieer het.

### Aktief {#active}

Die aktiewe toggle definieer effektief of die produk beskikbaar is vir kliënte vir nuwe registrasies.

![Active toggle](/img/config/product-active.png)

As daar bestaande kliënte op hierdie plan is, laat die instelling van die toggle na sy gedeaktiveerde status die plan effektief voortbestaan (grandfathers) deur dit uit toekomstige registrasies te verwyder. **Bestaande kliënte op die plan sal gefaktureer bly** totdat hulle na 'n nuwe plan oorgedra of van die plan verwyder word.

### Produkbeeld {#product-image}

Die **Upload Image** knoppie laat die netwerkbeheerder toe om die mediabiblioteek te gebruik om 'n produkbeeld te kies of te laai.

![Product image section](/img/config/product-image.png)

### Verwyder {#delete}

Die **Delete Product** knoppie verwyder die produk uit die stelsel. Dit verskyn sodra die produk gepubliseer is.

![Delete product section](/img/config/product-delete.png)

Verskillend van ander verwyderings, word die produk nie in enige rommelstatus geplaas nie. Sodoende is die aksie onomkeerbaar sodra dit verwyder is.

### Produkopsies {#product-options}

Sodra die basisvlak produkinligting gedefinieer is, help die produkopsies die netwerkbeheerder om die spesifieke eienskappe van die produk verder te definieer.

#### Algemeen {#general}

Die **General** tab definieer die algemene eienskappe van die produk wat nie op enige van die ander produk-spesifieke tabs van toepassing is nie.

![General tab](/img/config/product-general-tab.png)

Die selfverklarende **product slug** definieer die slug waarmee die produk in URL's en ander areas van Ultimate Multisite geïdentifiseer word.

Ultimate Multisite ondersteun verskeie produktipes, naamlik Plan, Package en Service. Die **Product Options** tabs word dinamies aangepas afhangende van die gespesifiseerde produktipe.

Die **Customer Role** spesifiseer die rol wat die kliënt toegewys word wanneer die webwerf geskep word. Tipies vir die meeste netwerkbeheerders sal dit die Ultimate Multisite standaard of Administrateur wees. Die Ultimate Multisite standaardrol kan in **Ultimate Multisite > Settings > Login & Registration** gestel word.

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Op- en Afgraderings {#up--downgrades}

Hierdie tab spesifiseer die opgraderings- en afgraderingspad wat beskikbaar is vir 'n kliënt binne hul spesifieke vlak.

Om hierdie konsep te verstaan, oorweeg 'n voorbeeld waar 'n nis Ultimate Multisite-installasie leerbestuur-oplossings aan sy kliënte bied. Om dit te bereik, word drie planne (Basies, Plus en Premium) gedefinieer en spesifieke plugins word vir elke plan geaktiveer (kyk later in hierdie afdeling vir instruksies oor hoe om plugins te aktiveer).

As die Ultimate Multisite-installasie ook besigheidswebwerwe of e-kommersiële webwerwe bedien, mag daardie planne verskillende plugins vereis om geïnstalleer en geaktiveer te word.

Tot hierdie mate, sou dit ongewens en problematies wees om e-leer kliënte toe te laat om na e-kommersiële planne oor te skakel, aangesien hierdie planne, pryse en beperkings miskien nie 'n gepaste pas is nie.

Om die pad van die kliënt te beperk en om voorvalle te voorkom, kan die netwerkbeheerder 'n plan-groep definieer en binne daardie groep die planne spesifiseer waarna die kliënt kan oorgedra.

![Up and Downgrades tab](/img/config/product-upgrades.png)

Om 'n plan-groep te definieer, spesifiseer die bietkomende planne binne die **plan group** lys. Die **product order** bepaal hoe die planne gerangskik en vertoon word van die laagste na die hoogste.

Ultimate Multisite sluit ook 'n **order bump** funksie in waar toepaslike byvoegingsprodukte en dienste aan planne bygevoeg kan word. Hierdie word aan die kliënt aangebied as bykomende items wat by planne by die kassa of tydens 'n opgradering bygevoeg kan word.

#### Prysvariasies {#price-variations}

Prysvariasies laat die netwerkbeheerder toe om alternatiewe prysniveaus te spesifiseer afhangende van duur. Hierdie instelling maak dit moontlik om maandelikse, kwartaallikse, jaarlikse, of enige ander faktuureringsperiode vir dieselfde produk aan te bied. Byvoorbeeld, jy kan 'n produk teen $29.99/maand opstel met 'n geraffelde jaarlikse opsie teen $249.99/jaar.

![Price Variations tab](/img/config/product-price-variations-tab.png)

Om prysvariasies te vestig, stel die **Enable Price Variations** toggle op aktief en klik op die **Add new Price Variation** knoppie.

![Product price variations](/img/config/product-price-variations.png)

Om 'n variasie in te voer, stel die duur, periode en prys van die variasie in. Bykomende variasies kan deur die knoppie weer te klik ingevoer word.

Byvoorbeeld, as jou basisprodukprys $29.99 per maand is, kan jy byvoeg:

*   **3 Maande** teen $79.99 ('n klein afslag)
*   **Uit die**

### **Belangrike Nota:** {#taxes}

*   **Die teks in die oorspronklike bron was onvolledig, maar die konteks dui op 'n opsomming van die vorige punt.**

---

### **Opsomming van die Funksionaliteit:** {#site-templates}

Die teks beskryf die proses om die prysstruktuur van 'n produk te verfyn deur verskillende tydperke aan te bied (bv. maandeliks, jaarliks).

**Kernfunksie:** Prysmodelering en verfynings.

**Doel:** Die kliënt die beste waarde te laat kies deur verskillende abonnementsopsies te bied.

**Opsomming van die Funksionaliteit:**

1.  **Prysvervaardiging:** Die vermoë om verskillende prysintervalle te definieer.
2.  **Waarde-aanpassing:** Die aanpassing van die prys om die waarde te weerspieël (bv. jaarliks is goedkoper per maand).
3.  **Gebruikerskeuse:** Die kliënt kan die opsie kies wat die beste by hul behoeftes pas.

**Kortom:** Dit is 'n funksie wat die **prysstruktuur** van 'n produk of diens verfyn om verskillende abonnementsmodelle te ondersteun.
