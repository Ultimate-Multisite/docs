---
title: Gestion des taxes
sidebar_position: 4
_i18n_hash: 087a366fc43cafff9e887f68e71e23fe
---
# Tax Handling

Ultimate Multisite dispose d'un module de collecte de taxes intégré à notre plugin principal, donc si vous avez besoin de collecter des taxes sur vos plans, packages et services, vous pouvez le faire facilement sans recourir à l'installation d'add-ons.

Pour les entreprises situées en Europe, nous proposons un **module complémentaire** qui ajoute des outils et des fonctionnalités pour mieux **supporter la TVA**.

Ultimate Multisite ne déclare ni ne reverse les taxes pour votre compte auprès du gouvernement ; nous vous aidons simplement à collecter les taxes appropriées au moment de la transaction. **Vous devrez toujours reverser les taxes vous-même.**

## Enabling Tax Collection

Tax collection is not enabled by default. To enable it, you need to go to **Ultimate Multisite > Settings > Taxes** and toggle to enable the Enable Taxes setting.

![Enable Taxes toggle in tax settings](/img/config/settings-taxes.png)

### Tax excluded vs. Tax included

Par défaut, tous les prix de vos produits sont hors taxes, ce qui signifie que les taxes **ne sont pas incluses** dans le prix du produit. Si nous déterminons qu'un client doit payer des taxes sur un achat donné, nous ajouterons les taxes **au-dessus** du sous-total.

If you prefer to have taxes included in your product's price, you can do so by enabling the **Taxe inclusive** setting.

Don't forget to **enregistrer** the changes you've made.

### 

## Creating Tax Rates

After you enable Tax Collection, you'll need to create tax rates for specific locations using our tax rates editor.

You can access the editor by clicking the **Manage Tax Rates** button on the sidebar of the Tax settings page.

![Inclusive Tax setting toggle](/img/config/settings-taxes.png)

On the tax rates editor page, you can add new Tax Rates by clicking the **Add new Row** button.

![Manage Tax Rates button on the sidebar](/img/config/settings-taxes.png)

You'll need to give each tax rate a **titre** (used on invoices). Then you can choose the **pays** (required), the **état**, and the **ville** (both optional) where this tax will be charged. Finally, add the **taux de taxe en pourcentage**.

### Tax Categories

You can also create multiple Tax Categories, to add different tax rates for different kinds of products.

Click to **Add new Tax Category** , then write your category's name and press **Create**.

![Tax rates editor with Add new Row button](/img/config/settings-taxes.png)

![Add new Tax Category button](/img/config/settings-taxes.png)

To browse through categories, click **Switch** and select the category to which you want to add new taxes.

![Creating a new tax category](/img/config/settings-taxes.png)

![Switch between tax categories](/img/config/settings-taxes.png)

You can set the tax category for a particular product by going to the **Product edit page** and then to the Taxes tab.

![Selecting a tax category to view](/img/config/settings-taxes.png)

On that same screen, you can toggle off the **Is Taxable?** toggle to let Ultimate Multisite know that it should not collect taxes on that given product.

## European VAT Support

As mentioned before, we have an add-on available for customer in the EU that have additional requirements due to European VAT regulations.

Our VAT tools help with a couple of important things:

  * Easy loading of EU VAT rates;

  * VAT Number collection and validation - and reverse charging for VAT exempt entities (such as companies with valid VAT numbers);

To install that add-on, go to **Ultimate Multisite > Settings** and then click on the **Check our Add-ons** sidebar link.

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

You'll be redirected to our add-ons page. There, you can search for the **Ultimate Multisite VAT add-on** and install it.

![Settings page with add-ons sidebar link](/img/config/settings-taxes.png)

![VAT add-on on the add-ons page](/img/config/settings-taxes.png)

Then, head to **Network Admin > Plugins** and activate that add-on network-wide.

![VAT add-on install dialog](/img/config/settings-taxes.png)

If you head back to the **Tax Settings tab**, you'll see new options available. Toggle the **Enable VAT Support** option to enable the new VAT tools. Don't forget to **enregistrer** your settings!

![Network Activate the VAT add-on](/img/config/settings-taxes.png)

### Pulling on VAT Tax Rates

One of the tools that our integration adds is the ability to load the tax rates for EU member states. That can be done by visiting the tax rates editor page after enabling EU VAT support.

At the bottom of the page, you'll see the VAT pulling options. Selecting a rate type and clicking the **Update EU VAT Rates** button will pull up and auto-populate the table with the tax rates for each EU member state. Then, you only need to save it.

![Enable VAT Support toggle in tax settings](/img/config/settings-taxes.png)

You can also edit the values after pulling them. To do it, simply edit the table line you need and click to save the new values.

### VAT Validation

When VAT support is enabled, Ultimate Multisite will add an additional field to the checkout form, bellow the billing address field. The field will only show up for customers located in the EU.

### ![VAT rates pulling options with Update EU VAT Rates button](/img/config/settings-taxes.png)

Ultimate Multisite will then validate the VAT Number and if it comes back as a valid one, the reverse charge mechanism is applied and the tax rate is set to 0% on that order.
