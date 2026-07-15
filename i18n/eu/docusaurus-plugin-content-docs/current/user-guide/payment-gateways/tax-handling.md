---
title: Zergen kudeaketa
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Zergen kudeaketa

Ultimate Multisite-k zergak biltzeko modulu bat dauka gure core plugin-ean integratuta; beraz, zure plan, pakete eta zerbitzuetan salmenta-zergak bildu behar badituzu, erraz egin dezakezu hori inolako add-on instalatu beharrik gabe.

Europan kokatutako enpresentzat, **add-on** bat eskaintzen dugu, **BEZaren** betetzea hobeto laguntzeko tresnak eta eginbideak gehitzen dituena.

Ultimate Multisite-k ez ditu zergak zure izenean gobernuari aurkezten edo ordaintzen; transakzioaren unean dagozkion zergak biltzen laguntzen dizugu soilik. **Zergak zuk zeuk ordaindu beharko dituzu hala ere.**

## Zergen bilketa gaitzea {#enabling-tax-collection}

Zergen bilketa ez dago lehenespenez gaituta. Gaitzeko, **Ultimate Multisite > Ezarpenak > Zergak** atalera joan behar duzu eta Zergak gaitu ezarpena gaitzeko etengailua aktibatu.

![Zergak gaitu etengailua Zergen ezarpenen orriaren goialdean](/img/config/settings-taxes-enable.png)

Hona hemen zergen ezarpenen orriaren ikuspegi osoa:

![Zergen ezarpenen orri osoa](/img/config/settings-taxes-full.png)

Banakako produktuen zergen ezarpenak ere ikus ditzakezu:

![Produktuen zergen ezarpenak](/img/config/settings-taxes.png)

### Zerga kanpo vs. zerga barne {#tax-excluded-vs-tax-included}

Lehenespenez, zure produktu-prezio guztiek zergak kanpo dituzte; horrek esan nahi du zergak **ez daudela sartuta** produktuaren prezioan. Bezero batek erosketa jakin batean zergak ordaindu behar dituela zehazten badugu, zergak subtotalaren **gainetik** gehituko ditugu.

Zergak zure produktuaren prezioan sartuta egotea nahiago baduzu, hori egin dezakezu **Zerga barne** ezarpena gaituz.

![Zerga barne etengailu-lerroa Zergak gaitu ezarpenaren azpian](/img/config/settings-taxes-inclusive.png)

Ez ahaztu egin dituzun aldaketak **gordetzea**.

###

## Zerga-tasak sortzea {#creating-tax-rates}

Zergen bilketa gaitu ondoren, kokapen zehatzetarako zerga-tasak sortu beharko dituzu gure zerga-tasen editorea erabiliz.

Editorera sar zaitezke Zergen ezarpenen orriko alboko barran dagoen **Kudeatu zerga-tasak** botoian klik eginez.

![Kudeatu zerga-tasak esteka ezarpenen orriko Zerga-tasen panelean](/img/config/settings-taxes-manage-rates.png)

Zerga-tasen editorearen orrian, zerga-tasa berriak gehi ditzakezu **Gehitu errenkada berria** botoian klik eginez.

![Zerga-tasen editorearen taula, Gehitu errenkada berria botoia goialdean duela](/img/config/tax-rates-editor.png)

Zerga-tasa bakoitzari **izenburu** bat eman beharko diozu (fakturetan erabiltzen da). Ondoren, zerga hori kobratuko den **herrialdea** (nahitaezkoa), **estatua,** eta **hiria** (biak aukerakoak) hauta ditzakezu. Azkenik, gehitu **zerga-tasa ehunekotan**.

### Zerga-kategoriak {#tax-categories}

Zerga-kategoria anitz ere sor ditzakezu, produktu mota desberdinetarako zerga-tasa desberdinak gehitzeko.

Egin klik **Gehitu zerga-kategoria berria** aukeran, ondoren idatzi zure kategoriaren izena eta sakatu **Sortu**.

![Gehitu zerga-kategoria berria botoia zerga-tasen editorearen goialdean](/img/config/tax-categories-add.png)

![Zerga-kategoriaren izena sarrera-eremua kategoria sortzeko modalean](/img/config/tax-categories-create-modal.png)

Kategoriak arakatzeko, egin klik **Aldatu** aukeran eta hautatu zerga berriak gehitu nahi dizkiozun kategoria.

![Aldatu goitibeherako botoia zerga-kategorien artean aldatzeko](/img/config/tax-categories-switch.png)

![Zerga-kategorien hautatzaile goitibeherakoa, erabilgarri dauden kategoriak erakutsiz](/img/config/tax-categories-select.png)

Produktu jakin baterako zerga-kategoria ezar dezakezu **Produktuaren edizio-orrira** joanez eta gero Zergak fitxara sartuz.

![Produktuaren zergen fitxa, zerga-kategoria eta zergapekoa etengailuarekin](/img/config/product-taxes.png)

Pantaila berean, **Zergapekoa da?** etengailua desaktiba dezakezu, Ultimate Multisite-ri produktu jakin horretan zergarik bildu behar ez duela jakinarazteko.

## Europako BEZaren euskarria {#european-vat-support}

Lehen aipatu bezala, EBko bezeroentzat add-on bat dugu eskuragarri, Europako BEZaren araudiaren ondorioz betekizun gehigarriak dituztenentzat.

Gure BEZ tresnek pare bat gauza garrantzitsutan laguntzen dute:

  * EBko BEZ tasak erraz kargatzea;

  * BEZ zenbakiaren bilketa eta balioztatzea - eta BEZetik salbuetsitako entitateentzako alderantzizko kargatzea (adibidez, BEZ zenbaki baliozkoak dituzten enpresentzat);

Add-on hori instalatzeko, joan **Ultimate Multisite > Ezarpenak** atalera eta egin klik alboko barrako **Begiratu gure Add-on-ak** estekan.

![Ezarpenen orriko alboko barra, Begiratu gure Add-on-ak estekarekin](/img/config/settings-taxes-addons-link.png)

Gure add-on-en orrira birbideratuko zaituzte. Han, **Ultimate Multisite VAT add-on** bila dezakezu eta instalatu.

<!-- Pantaila-argazkia ez dago eskuragarri: VAT add-on lauza Add-on-en orrian -->

<!-- Pantaila-argazkia ez dago eskuragarri: VAT add-on Instalatu orain elkarrizketa-koadroa -->

Ondoren, joan **Sareko administrazioa > Pluginak** atalera eta aktibatu add-on hori sare osoan.

<!-- Pantaila-argazkia ez dago eskuragarri: Sarean aktibatu ekintza VAT add-on-erako Pluginen orrian -->

**Zergen ezarpenen fitxara** itzultzen bazara, aukera berriak ikusiko dituzu eskuragarri. Aktibatu **Gaitu BEZ euskarria** aukera BEZ tresna berriak gaitzeko. Ez ahaztu zure ezarpenak **gordetzea**!

<!-- Pantaila-argazkia ez dago eskuragarri: Gaitu BEZ euskarria etengailua Zergen ezarpenetan add-on-a aktibatu ondoren -->

### BEZaren zerga-tasak eskuratzea {#pulling-on-vat-tax-rates}

Gure integrazioak gehitzen duen tresnetako bat EBko estatu kideen zerga-tasak kargatzeko gaitasuna da. Hori egin daiteke zerga-tasen editorearen orria bisitatuz EBko BEZ euskarria gaitu ondoren.

Orriaren behealdean, BEZ tasak eskuratzeko aukerak ikusiko dituzu. Tasa mota bat hautatuz eta **Eguneratu EBko BEZ tasak** botoian klik eginez, taula EBko estatu kide bakoitzeko zerga-tasekin eskuratu eta automatikoki beteko da. Ondoren, gordetzea besterik ez duzu egin behar.

![Eguneratu EBko BEZ tasak botoia zerga-tasen editorearen behealdean](/img/config/tax-rates-vat-pull.png)

Balioak eskuratu ondoren ere edita ditzakezu. Horretarako, editatu behar duzun taularen lerroa eta egin klik balio berriak gordetzeko.

### BEZaren balioztatzea {#vat-validation}

BEZ euskarria gaituta dagoenean, Ultimate Multisite-k eremu gehigarri bat gehituko dio checkout inprimakiari, fakturazio-helbidearen eremuaren azpian. Eremua EBn kokatutako bezeroentzat soilik agertuko da.

<!-- Pantaila-argazkia ez dago eskuragarri: BEZ zenbakiaren eremua frontend checkout inprimakian fakturazio-helbidearen azpian -->

Ultimate Multisite-k BEZ zenbakia balioztatuko du, eta baliozkoa dela itzultzen bada, reverse charge mekanismoa aplikatuko da eta zerga-tasa %0 gisa ezarriko da eskaera horretan.
