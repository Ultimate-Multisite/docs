---
title: Aħjar tal-tax
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Aħmli Tax

Il-Ultimate Multisite għandu modulu ta kollazzjoni tal-tax mhux bidiċini fl-plugin primarju tagħna, quindi jekk għandek bżonn tkollazzja t-tax tal-venditajiet fuq il-planijiet, il-package u is-servizzi tiegħek, tmur b'mod fasil mill-installazzjoni ta add-ons.

L-kompaniji li qed fil-Eropa, noffru **add-on** li jiddeħħol strumenti u funzjonijiet biex jipprogramu b'mod aħjar l-kumpljenza tal-VAT (Value Added Tax).

L-Ultimate Multisite ma jiffilax jew ma tikkollazzja taxxi għalik mill-governament; isse jgħinok biex tkollazzja t-tax appropjatu fl-istagħħar ta l-transazzjoni. **Tidħħol t-tax għalik xiem.**

## Tgħallil il-Kollazzjoni tal-Tax

Il-kollazzjoni tal-tax mhux attivat b'default. Biex tiattiva, għandek li tmur għand **Ultimate Multisite > Settings > Taxes** u ttaqgħed (toggle) biex ttaqgħed il impost Enable Taxes.

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Hawn huwa l-vista kollu tal-pajs ta impostijiet tal-tax:

![Tax settings full page](/img/config/settings-taxes-full.png)

Tista' tqiegħed ukoll il impostijiet tal-tax għal prodotti individuwali:

![Tax settings for products](/img/config/settings-taxes.png)

### Tax eskludut vs. Tax inkluż

B'default, kull prezz ta prodott tiegħek huwa eskludut tal-tax, li jkun ma **inkluż** taxxi fil-prezz tal-prodott. Jekk nifhmu li l-klijenti għandhom jippagwhu t-tax fuq xi pastu speċifiku, naddispoq il-tax **fuq** subtotal.

Jekk tista' tkun taxxi inkluż fil-prezz tal-prodott tiegħek, tista' tfarmiha biex taqgħed (enable) l-impost Inclusive Tax.

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Ma t-għalbax **taqiegħed** il-modifikazzjonijiet li għamti.

###

## Kreawli Rates tal-Tax

Wara li taqiegħed il-Kollazzjoni tal-Tax, għandek li tkun kreawli rates tal-tax għal postijiet speċifi b'użu tal-editor tal-rates tal-tax tagħna.

Possirri aċċess mill-editor biex tikkliq fuq il pulsant **Manage Tax Rates** (Iżegħtax Rate) fuq il sidebar talna taċ-tast setting page.

![Link Manage Tax Rates fil-panel Tax Rates fuq il settings page](/img/config/settings-taxes-manage-rates.png)

Fuq il pagina editor tal-tax rates, puoi tiddispo tax rates ġoddi biex tikkliq fuq il pulsant **Add new Row** (Aggiungi fila).

![Tabela editor tax rates مع pulsant Add new Row fuq l-top](/img/config/tax-rates-editor.png)

Trebigħ għal kada tax rate **title** (jiegħtieġ fuq il fatturi). Mizwien, puoi tagħżel il **country** (obligatorju), il **state**, u l-**city** (kollhom opzjonali) li hija dwin se tiddir din it-tax. Fl-aħħar, aċċetta l-**tax rate in percents**.

### Tax Categories (Kategoriji Tax)

Tista' tfarra' kategoriji tax biex tiddir tax rates differenti għal tipi differenti ta prodotti.

Iċċekkja fuq **Add new Tax Category** (Aggiungi nuova Kategoria Tax), poi iwwrit issemu tal-kategoria tiegħek u tikkliq fuq **Create** (Crea).

![Pulsant Add new Tax Category fuq l-top ta tax rates editor](/img/config/tax-categories-add.png)

![Input field Tax Category Name fil-modal create category](/img/config/tax-categories-create-modal.png)

Biex tikkura flim kategoriji, iċċekkja fuq **Switch** u tagħżel il-kategoria li tista' tiddir tax rates ġoddi.

![Pulsant Switch dropdown biex tgħmli bix-xogħol bejn kategoriji tax](/img/config/tax-categories-switch.png)

![Dropdown selector Tax category qed juri il-kategoriji disponibili](/img/config/tax-categories-select.png)

Tista' tsetta l-tax category għal prodott speċifiku biex tmur għall-**Product edit page** u poi għall-tab **Taxes**.

![Tab Product taxes مع tax category u toggle taxable](/img/config/product-taxes.png)

Fuq is-sena hija, tista' tixgħel il-toggle **Is Taxable?** (Il-taxxizzabbli?) biex tgħti għall-Ultimate Multisite biex ma jikkolleta tax rates fuq dawk il-prodott speċifiku.

## European VAT Support (Support VAT Ewropew)

Kifforra minnu, l-add-on disponibbli għall-klijenti fil-UE li għandhom esigimenti aggiemmalii minħabba regolamenti l-VAT Ewropea.

Il-tools ta' VAT tagħna jgħinu b żewġ ħjat importanti:

  * Caricament fasil tal-rates ta' VAT tal-UE;

  * Kolezzjoni u validazzjoni tal-Numru ta' VAT - u l-reverse charging għall-entitajiet exempta min il-VAT (meta kumpaniji b numri ta' VAT validi);

Biex tinstalla dan l-add-on, għandi tmur għand **Ultimate Multisite > Settings** u poi tikkjaq fuq is-sidebar link ta "**Check our Add-ons**".

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Tiridirixxi għas-pajs tagħna tal-add-ons. Għandek lìda biex tixebba l-**Ultimate Multisite VAT add-on** u tinstalla.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Imkien, tmur għand **Network Admin > Plugins** u attiva dan l-add-on fuq l-netwerk kollu.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Meta tirriżi għall-tab ta' **Tax Settings**, turlar opzioni ġedda disponibbli. Attiva l-opzjoni **Enable VAT Support** biex tivveglio il-tools ta' VAT ġeddi. Ma t-għaflaxiex biex **save** is-settings tiegħek!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Tirtribba rates ta' VAT

Il-oħra tool li jiddeħħol il-integrazzjoni tagħna huwa l-abbli tal-caricament tal-rates ta' taxxi għall-istati membieda tal-UE. Dan jista' maġġiegħ biex tvisiti l-tax rates editor page wara li attivat il-EU VAT support.

Alla fondo pàgina, trubbi le opzioni per tirare i tassi IVA (VAT). Se selezioni un tipo di tasso e clicchi sul pulsante **Update EU VAT Rates**, la tabella si aprirà e si riempirà automaticamente con i tassi fiscali per ogni stato membro dell'UE. Poi, ti basterà salvare.

![Pulsante Update EU VAT Rates in fondo all'editor dei tassi fiscali](/img/config/tax-rates-vat-pull.png)

Puoi anche modificare i valori dopo averli tirati fuori. Per farlo, modifica semplicemente la riga della tabella di cui hai bisogno e clicca per salvare i nuovi valori.

### Validazione IVA (VAT Validation)

Quando il supporto IVA è abilitato, Ultimate Multisite aggiungerà un campo in più al modulo di checkout, sotto il campo dell'indirizzo di fatturazione. Questo campo apparirà solo per i clienti che si trovano nell'UE.

<!-- Screenshot unavailable: Campo Numero IVA sul modulo di checkout frontend sotto l'indirizzo di fatturazione -->

Ultimate Multisite poi validerà il Numero IVA e se viene restituito come valido, verrà applicato il meccanismo del rimborso inverso (reverse charge mechanism) e il tasso fiscale sarà impostato a 0% per quell'ordine.
