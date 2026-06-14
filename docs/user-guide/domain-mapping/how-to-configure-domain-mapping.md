---
title: "How to Configure Domain Mapping"
sidebar_position: 6
---

# How to Configure Domain Mapping (v2)

_**IMPORTANT NOTE: This article refers to Ultimate Multisite version 2.x.**_

One of the most powerful features of a premium network is the ability to offer our clients a chance to attach a top-level domain to their sites. After all, which looks more professional: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) or [_**joesbikeshop.com**_](http://joesbikeshop.com)? That's why Ultimate Multisite offers that feature baked-in, without the need to use third-party plugins.

## What's domain mapping?

As the name suggests, domain mapping is the ability offered by Ultimate Multisite to take in a request for a custom domain and map that request to the corresponding site in the network with that particular domain attached.

### How to setup domain mapping on your Ultimate Multisite Network

Domain mapping requires some setting up on your part to work. Thankfully, Ultimate Multisite automates the hard work for you so you can easily meet the requirements.

During Ultimate Multisite installation, the wizard will automatically copy and install the **sunrise.php** to the designated folder. **The wizard won't allow you to proceed until this step is completed**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

This means that once the Ultimate Multisite installation wizard has completed setting up your network, you can start mapping the custom domain right away.

Note that domain mapping in Ultimate Multisite is not mandatory. You have an option to use WordPress Multisite native domain mapping function or any other domain mapping solution.

Should you need to disable Ultimate Multisite domain mapping to give way to other domain mapping solutions, you can disable this feature under **Ultimate Multisite > Settings > Domain Mapping**.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

Right below this option, you can also see the option **Force Admin Redirect**. This option allows you to control if your customers will be able to access their admin dashboard both on their custom domain and subdomain or only on one of them.

If you select **Force redirect to mapped domain** , your customers will only be able to access their admin dashboard on their custom domains.

The option **Force redirect to** **network domain** will do exactly the opposite - your customers will only be allowed to access their dashboards on their subdomain, even if trying to sign in on their custom domains.

And the option **Allow access to the admin by both mapped domain domain and network domain** allows them to access their admin dashboards both on the subdomain and the custom domain.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

There are two ways to map a custom domain. The first is by mapping the domain name from your network admin dashboard as the super adminand the second is through the subsite admin dashboard under the account page.

But before you start mapping the custom domain to one of the subsites in your network, you will need to make sure that the **DNS settings** of the domain name are properly configured.

###

### Making sure the domain DNS settings are properly configured

For a mapping to work, you need to make sure the domain you are planning to map is pointing to your Network's IP address. Note that you need the Network IP address - the IP address of the domain where Ultimate Multisite is installed - not the IP address of the custom domain you want to map. To search for the IP address of a specific domain, we suggest going to [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), for example.

To correctly map the domain, you need to add an **A RECORD** on your **DNS** configuration pointing to that **IP address**. DNS management varies greatly between different domain registrars, but there's plenty of tutorials online covering that if you search for " _Creating A Record on XXXX_ " where XXXX is your domain registrar (ex.: " _Creating A Record on_ _GoDaddy_ ").

If you find yourself having trouble getting this to work, **contact your domain registrar support** and they will be able to help you with this part.

If you plan to allow your clients to map their own domains, they will have to do the work on this part themselves. Point them towards their registrar support system if they find themselves unable to create the A Record.

### Mapping custom domain name as Super Admin

When you are logged in as super admin on your network, you can easily add and manage custom domain names by going under **Ultimate Multisite > Domains**.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Under this page, you can click on the **Add Domain** button on top and this will bring up a modal window where you can set and fill in the **custom domain name** , **the subsite** you wish to apply the custom domain name to, and decide whether you want to set it as the **primary domain** name or not (note that you can map **multiple domain names to one subsite**).

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

After putting all the information in, you can then click the **Add Existing Domain** button at the bottom.

This will start the process of verifying and fetching the DNS information of the custom domain. You will also see a log at the bottom of the page for you to follow the process it is going through. This process may take a few minutes to complete.

Ultimate Multisite v2.13.0 also creates the internal domain record automatically when a new site is created on a host that should be treated as a per-site domain. If the host is the network's primary domain, or one of the shared checkout-form base domains configured on a **Site URL** field, the automatic mapped-domain record is skipped so that shared base domain remains available to every site that uses it.

The **Stage** or the status should change from **Checking DNS** to **Ready** if everything is properly set up.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

If you click on the domain name, you will be able to see some options inside it. Lets take a quick look at them:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Stage:** This is the stage that the domain is at. When you first add the domain, it will probably be on the **Checking DNS** stage. The process will check for the DNS entries and confirm they are correct. Then, the domain will be put at the **Checking SSL** stage. Ultimate Multisite will check if the domain has SSL or not and will categorize your domain as **Ready** or **Ready (without SSL)**.

**Site:** The subdomain that is associated with this domain. The mapped domain will show the content of this specific site.

**Active:** You can toggle this option on or off to activate or deactivate the domain.

**Is Primary Domain?:** Your customers can have more than one mapped domain for each site. Use this option to select if this is the primary domain for the specific site.

**Is Secure?:** Even though Ultimate Multisite checks if the domain has a SSL certificate or not before enabling it, you can manually select to load the domain with or without a SSL certificate. Note that if the website does not have a SSL certificate and you try to force load it with SSL, it may give you errors.

### Mapping custom domain name as Subsite user

Subsite administrators can also map custom domain names from their subsite admin dashboard.

First, you need to make sure that you enable this option under the **Domain mapping** settings. See the screenshot below.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

You can also set or configure this option under the **Plan** level or product options on **Ultimate Multisite > Products**.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

When any of those options are enabled and a subsite user is allowed to map custom domain names, the subsite user should see a metabox under the **Account** page called **Domains**.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

The user can click the **Add Domain** button and it will bring up a modal window with some instructions.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

The user can then click **Next Step** and proceed to add the custom domain name. They can also choose if this will be the primary domain or not.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Click to **Add Domain** will start the process of verifying and fetching the DNS information of the custom domain.

### About Domain Syncing

Domain Syncing is a process where Ultimate Multisite adds the custom domain name to your hosting account as an add-on domain **for the domain mapping to work**.

Domain syncing automatically happens if your hosting provider has integration with the Ultimate Multisite domain mapping feature. Currently, these hosting providers are _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ and _Cpanel._

When a host-provider integration is active, Ultimate Multisite can also enqueue the provider-side DNS or subdomain creation task for newly created sites. If no integration is listening for that task, the background job is skipped to avoid no-op queue entries. DNS and SSL checks for mapped domains continue to run through the normal domain-stage process.

You will need to activate this integration on Ultimate Multisite settings under the **Integration** tab.

![Integrations tab in Ultimate Multisite settings showing hosting providers](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Note that if your hosting provider is not one of those providers mentioned above,**you will need to manually sync or add the domain name** to your hosting account._
