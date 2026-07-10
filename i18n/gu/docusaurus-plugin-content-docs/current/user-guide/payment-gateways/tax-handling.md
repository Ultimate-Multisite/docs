---
title: કર સંચાલન
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# કર સંભાળ {#tax-handling}

Ultimate Multisite માં અમારા મુખ્ય plugin માં જ કર વસૂલાત મોડ્યુલ બનાવેલું છે, તેથી જો તમને તમારા plans, packages અને સેવાઓ પર વેચાણ કર વસૂલવાની જરૂર હોય, તો તમે કોઈ add-ons ઇન્સ્ટોલ કર્યા વિના સરળતાથી તે કરી શકો છો.

યુરોપમાં સ્થિત કંપનીઓ માટે, અમે એક **add-on** પ્રદાન કરીએ છીએ જે **VAT** અનુપાલનને વધુ સારી રીતે **support** કરવા માટે ટૂલ્સ અને સુવિધાઓ ઉમેરે છે.

Ultimate Multisite તમારી તરફથી સરકારને કર ફાઇલ કરતું અથવા જમા કરાવતું નથી; અમે ફક્ત વ્યવહારના સમયે યોગ્ય કર વસૂલવામાં તમને મદદ કરીએ છીએ. **તમારે હજુ પણ તમારા પોતાના રીતે કર જમા કરાવવો પડશે.**

## કર વસૂલાત સક્ષમ કરવી {#enabling-tax-collection}

કર વસૂલાત મૂળભૂત રીતે સક્ષમ નથી. તેને સક્ષમ કરવા માટે, તમારે **Ultimate Multisite > Settings > Taxes** પર જવું અને Enable Taxes સેટિંગ સક્ષમ કરવા માટે toggle કરવું પડશે.

![કર સેટિંગ્સ પૃષ્ઠના ટોચે Enable Taxes toggle](/img/config/settings-taxes-enable.png)

અહીં કર સેટિંગ્સ પૃષ્ઠનો સંપૂર્ણ દૃશ્ય છે:

![કર સેટિંગ્સ સંપૂર્ણ પૃષ્ઠ](/img/config/settings-taxes-full.png)

તમે વ્યક્તિગત products માટે કર સેટિંગ્સ પણ જોઈ શકો છો:

![products માટે કર સેટિંગ્સ](/img/config/settings-taxes.png)

### કર બહાર vs. કર સહિત {#tax-excluded-vs-tax-included}

મૂળભૂત રીતે, તમારા બધા product ભાવોમાં કર સામેલ નથી, એટલે કે product ના ભાવમાં કર **સામેલ નથી**. જો અમે નક્કી કરીએ કે customer એ આપેલી ખરીદી પર કર ચૂકવવો જોઈએ, તો અમે subtotal **ઉપરથી** કર ઉમેરશું.

જો તમે તમારા product ના ભાવમાં કર સામેલ રાખવાનું પસંદ કરો છો, તો તમે **Inclusive Tax** સેટિંગ સક્ષમ કરીને તે કરી શકો છો.

![Enable Taxes સેટિંગની નીચે Inclusive Tax toggle row](/img/config/settings-taxes-inclusive.png)

તમે કરેલા ફેરફારો **save** કરવાનું ભૂલશો નહીં.

###

## કર દરો બનાવવું {#creating-tax-rates}

તમે Tax Collection સક્ષમ કર્યા પછી, તમારે અમારા કર દરો editor નો ઉપયોગ કરીને ચોક્કસ સ્થાનો માટે કર દરો બનાવવા પડશે.

તમે Tax settings પૃષ્ઠના sidebar પર **Manage Tax Rates** બટન પર ક્લિક કરીને editor ઍક્સેસ કરી શકો છો.

![settings પૃષ્ઠ પર Tax Rates પેનલમાં Manage Tax Rates link](/img/config/settings-taxes-manage-rates.png)

કર દરો editor પૃષ્ઠ પર, તમે **Add new Row** બટન પર ક્લિક કરીને નવા Tax Rates ઉમેરી શકો છો.

![ટોચે Add new Row બટન સાથે કર દરો editor table](/img/config/tax-rates-editor.png)

તમારે દરેક કર દરને **title** આપવું પડશે (invoices પર વપરાય છે). પછી તમે **country** (જરૂરી), **state,** અને **city** (બન્ને વૈકલ્પિક) પસંદ કરી શકો છો જ્યાં આ કર વસૂલવામાં આવશે. અંતે, **tax rate in percents** ઉમેરો.

### કર શ્રેણીઓ {#tax-categories}

તમે વિવિધ પ્રકારના products માટે અલગ કર દરો ઉમેરવા માટે અનેક Tax Categories પણ બનાવી શકો છો.

**Add new Tax Category** માટે ક્લિક કરો, પછી તમારી category નું નામ લખો અને **Create** દબાવો.

![કર દરો editor ના ટોચે Add new Tax Category બટન](/img/config/tax-categories-add.png)

![category બનાવવાના modal માં Tax Category Name input field](/img/config/tax-categories-create-modal.png)

categories માં બ્રાઉઝ કરવા માટે, **Switch** પર ક્લિક કરો અને તે category પસંદ કરો જેમાં તમે નવા કર ઉમેરવા માંગો છો.

![કર categories વચ્ચે બદલવા માટે Switch dropdown બટન](/img/config/tax-categories-switch.png)

![ઉપલબ્ધ categories દર્શાવતું કર category selector dropdown](/img/config/tax-categories-select.png)

તમે **Product edit page** પર જઈને અને પછી Taxes tab પર જઈને કોઈ ચોક્કસ product માટે કર category સેટ કરી શકો છો.

![કર category અને taxable toggle સાથે product taxes tab](/img/config/product-taxes.png)

એ જ screen પર, તમે **Is Taxable?** toggle બંધ કરી શકો છો જેથી Ultimate Multisite ને ખબર પડે કે તે આપેલા product પર કર વસૂલવો ન જોઈએ.

## યુરોપિયન VAT Support {#european-vat-support}

પહેલાં જણાવ્યા મુજબ, EU માં રહેલા customers માટે અમારે પાસે add-on ઉપલબ્ધ છે, જેમને European VAT નિયમોને કારણે વધારાની આવશ્યકતાઓ છે.

અમારા VAT ટૂલ્સ કેટલીક મહત્વપૂર્ણ બાબતોમાં મદદ કરે છે:

  * EU VAT દરોનું સરળ લોડિંગ;

  * VAT Number સંગ્રહ અને માન્યકરણ - અને VAT exempt entities માટે reverse charging (જેમ કે માન્ય VAT numbers ધરાવતી કંપનીઓ);

તે add-on ઇન્સ્ટોલ કરવા માટે, **Ultimate Multisite > Settings** પર જાઓ અને પછી **Check our Add-ons** sidebar link પર ક્લિક કરો.

![Check our Add-ons link સાથે Settings પૃષ્ઠ sidebar](/img/config/settings-taxes-addons-link.png)

તમને અમારા add-ons પૃષ્ઠ પર redirect કરવામાં આવશે. ત્યાં, તમે **Ultimate Multisite VAT add-on** માટે શોધી શકો છો અને તેને ઇન્સ્ટોલ કરી શકો છો.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

પછી, **Network Admin > Plugins** પર જાઓ અને તે add-on ને network-wide સક્રિય કરો.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

જો તમે **Tax Settings tab** પર પાછા જશો, તો તમને નવા વિકલ્પો ઉપલબ્ધ દેખાશે. નવા VAT ટૂલ્સ સક્ષમ કરવા માટે **Enable VAT Support** વિકલ્પ toggle કરો. તમારી settings **save** કરવાનું ભૂલશો નહીં!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### VAT કર દરો ખેંચવા {#pulling-on-vat-tax-rates}

અમારી integration ઉમેરતી ટૂલ્સમાંથી એક EU member states માટે કર દરો લોડ કરવાની ક્ષમતા છે. EU VAT support સક્ષમ કર્યા પછી tax rates editor પૃષ્ઠની મુલાકાત લઈને તે કરી શકાય છે.

પૃષ્ઠના તળિયે, તમને VAT pulling વિકલ્પો દેખાશે. rate type પસંદ કરીને અને **Update EU VAT Rates** બટન પર ક્લિક કરવાથી દરેક EU member state માટે કર દરો સાથે table ખેંચાશે અને આપમેળે ભરી દેશે. પછી, તમારે ફક્ત તેને save કરવું છે.

![કર દરો editor ના તળિયે Update EU VAT Rates બટન](/img/config/tax-rates-vat-pull.png)

તમે તેમને ખેંચ્યા પછી મૂલ્યો પણ edit કરી શકો છો. તે કરવા માટે, તમને જરૂરી table line સરળતાથી edit કરો અને નવા મૂલ્યો save કરવા ક્લિક કરો.

### VAT Validation {#vat-validation}

જ્યારે VAT support સક્ષમ હોય, ત્યારે Ultimate Multisite checkout form માં billing address field ની નીચે એક વધારાનું field ઉમેરશે. આ field ફક્ત EU માં સ્થિત customers માટે જ દેખાશે.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite પછી VAT Numberને માન્ય કરશે અને જો તે માન્ય તરીકે પાછું આવે, તો reverse charge mechanism લાગુ કરવામાં આવે છે અને તે order પર tax rate 0% પર સેટ કરવામાં આવે છે.
