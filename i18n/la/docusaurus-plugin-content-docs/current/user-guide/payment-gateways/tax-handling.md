---
title: Administratio vectigalium
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Administratio Tributorum {#tax-handling}

Ultimate Multisite modulum collectionis tributorum in nostro modulo principali inclusum habet; itaque, si tributa venditionis in rationibus, fasciculis et ministeriis tuis colligere debes, id facile facere potes sine ulla additamenta instituenda.

Societatibus in Europa sitis, **additamentum** offerimus quod instrumenta et facultates addit ad obsequium **VAT** melius sustentandum.

Ultimate Multisite tributa tuo nomine apud regimen non declarat neque persolvit; nos tantum adiuvamus ut tributa idonea tempore transactionis colligas. **Tributa tamen ipse persolvere debebis.**

## Collectio Tributorum Activanda {#enabling-tax-collection}

Collectio tributorum per defaltam non est activa. Ut eam actives, debes ire ad **Ultimate Multisite > Settings > Taxes** et commutare ut occasum Enable Taxes actives.

![Commutator Enable Taxes in summo paginae occasuum Tributorum](/img/config/settings-taxes-enable.png)

Ecce plena conspectio paginae occasuum tributorum:

![Plena pagina occasuum tributorum](/img/config/settings-taxes-full.png)

Etiam occasus tributorum singulorum productorum videre potes:

![Occasus tributorum pro productis](/img/config/settings-taxes.png)

### Tributum exclusum vs. Tributum inclusum {#tax-excluded-vs-tax-included}

Per defaltam, omnia pretia productorum tuorum tributo excluso sunt, quod significat tributa **non includi** in pretio producti. Si statuimus emptorem tributa in certa emptione solvere debere, tributa **super** summam partialem addemus.

Si mavis tributa in pretio producti tui inclusa habere, id facere potes activando occasum **Inclusive Tax**.

![Ordo commutatoris Inclusive Tax infra occasum Enable Taxes](/img/config/settings-taxes-inclusive.png)

Noli oblivisci mutationes quas fecisti **servare**.

###

## Rationes Tributarias Creare {#creating-tax-rates}

Postquam Collectionem Tributorum activaveris, rationes tributarias pro locis specificis creare debebis utens nostro editore rationum tributariarum.

Editorem accedere potes premendo bullam **Manage Tax Rates** in barra laterali paginae occasuum Tributorum.

![Vinculum Manage Tax Rates in tabula Tax Rates in pagina occasuum](/img/config/settings-taxes-manage-rates.png)

In pagina editoris rationum tributariarum, novas Rationes Tributarias addere potes premendo bullam **Add new Row**.

![Tabula editoris rationum tributariarum cum bulla Add new Row in summo](/img/config/tax-rates-editor.png)

Cuique rationi tributariae **titulum** dare debebis (in facturis adhibitum). Deinde eligere potes **patriam** (necessariam), **statum,** et **urbem** (utrumque optionale) ubi hoc tributum exigetur. Denique adde **rationem tributariam in centesimis**.

### Categoriae Tributorum {#tax-categories}

Etiam plures Categorias Tributorum creare potes, ut diversas rationes tributarias diversis generibus productorum addas.

Preme ut **Add new Tax Category** addas, deinde nomen categoriae tuae scribe et **Create** preme.

![Bulla Add new Tax Category in summo editoris rationum tributariarum](/img/config/tax-categories-add.png)

![Ager input Tax Category Name in modali categoriae creandae](/img/config/tax-categories-create-modal.png)

Ut per categorias naviges, preme **Switch** et elige categoriam cui nova tributa addere vis.

![Bulla dropdown Switch ad mutandum inter categorias tributorum](/img/config/tax-categories-switch.png)

![Dropdown selector categoriae tributorum categorias praesto ostendens](/img/config/tax-categories-select.png)

Categoriam tributorum pro certo producto constituere potes eundo ad **Product edit page** et deinde ad tabulam Taxes.

![Tabula tributorum producti cum categoria tributorum et commutatore taxable](/img/config/product-taxes.png)

In eodem illo scrinio, commutatorem **Is Taxable?** deactivare potes ut Ultimate Multisite sciat se tributa in illo certo producto colligere non debere.

## Sustentatio VAT Europaea {#european-vat-support}

Ut ante dictum est, additamentum praesto habemus pro emptoribus in EU qui requisita addita habent propter normas VAT Europaeas.

Instrumenta nostra VAT adiuvant in duobus rebus magni momenti:

  * Facilis oneratio rationum VAT EU;

  * Collectio et validatio Numeri VAT - atque imputatio inversa pro entibus a VAT exemptis (ut societatibus cum numeris VAT validis);

Ut illud additamentum instituas, vade ad **Ultimate Multisite > Settings** et deinde preme vinculum laterale **Check our Add-ons**.

![Barra lateralis paginae occasuum cum vinculo Check our Add-ons](/img/config/settings-taxes-addons-link.png)

Redirectus eris ad paginam nostram additamentorum. Ibi, quaerere potes **Ultimate Multisite VAT add-on** et illud instituere.

<!-- Imago non praesto: tessera VAT add-on in pagina Add-ons -->

<!-- Imago non praesto: dialogus Install Now pro VAT add-on -->

Deinde, perge ad **Network Admin > Plugins** et illud additamentum per totam retis latitudinem activa.

<!-- Imago non praesto: actio Network Activate pro VAT add-on in pagina Plugins -->

Si redieris ad **Tax Settings tab** , novas optiones praesto videbis. Optionem **Enable VAT Support** commuta ut nova instrumenta VAT actives. Noli oblivisci occasus tuos **servare**!

<!-- Imago non praesto: commutator Enable VAT Support in occasibus Tributorum post activationem additamenti -->

### Rationes Tributarias VAT Importare {#pulling-on-vat-tax-rates}

Unum ex instrumentis quae integratio nostra addit est facultas onerandi rationes tributarias pro civitatibus membris EU. Id fieri potest visitando paginam editoris rationum tributariarum post sustentationem EU VAT activatam.

In imo paginae, optiones importationis VAT videbis. Genere rationis selecto et bulla **Update EU VAT Rates** pressa, tabula cum rationibus tributariis cuiusque civitatis membri EU accersetur et automatice complebitur. Deinde, tantum servare debes.

![Bulla Update EU VAT Rates in imo editoris rationum tributariarum](/img/config/tax-rates-vat-pull.png)

Etiam valores postquam importati sunt recensere potes. Ut id facias, simpliciter lineam tabulae quam debes recense et preme ut novos valores serves.

### Validatio VAT {#vat-validation}

Cum sustentatio VAT activa est, Ultimate Multisite agrum additum formae checkout addet, infra agrum inscriptionis ad rationem faciendam. Ager solum apparebit emptoribus in EU sitis.

<!-- Imago non praesto: ager VAT Number in forma checkout frontend infra inscriptionem ad rationem faciendam -->

Ultimate Multisite deinde numerum VAT comprobabit et, si validus reperitur, mechanismus oneris inversi applicatur atque rata tributaria in illo ordine ad 0% statuitur.
