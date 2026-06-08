---
title: Dobivanje plaće
sidebar_position: 15
_i18n_hash: 4d43609c920fa8085a3cea69343ad2fa
---
# Naplata (v2)

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Ultimate Multisite ima ugrađen sistem članstva i naplate. Da bi naš sistem naplate funkcionisao, integrisali smo najčešće kapije za plaćanje koje se koriste u e-trgovini. Podrazumevane kapije za plaćanje u Ultimate Multisite su _Stripe_, _PayPal_ i Ručno plaćanje. Takođe možete koristiti _WooCommerce_, _GoCardless_ i _Payfast_ za primanje plaćanja instaliranjem njihovih odgovarajućih add-on-a.

## Osnovna podešavanja

Možete konfigurisati bilo koju od ovih kapija za plaćanje u podešavanjima Ultimate Multisite naplate. Pronaći ćete ih tako što ćete otići na **Ultimate Multisite meni > Podešavanja > Naplata (Payments)**.

![Payments settings page in Ultimate Multisite showing the Payments panel](/img/config/payments-settings-page.png)

Prije nego što postavite svoju kapiju za plaćanje, molimo vas da pogledate osnovna podešavanja naplate koja možete konfigurisati:

**Force auto-renew (Obavezno automatsko obnavljanje):** Ovo osigurava da će plaćanje automatski ponoviti na kraju svakog ciklusa naplate, u zavisnosti od učestalosti naplate koju je korisnik odabrao.

![Force Auto-Renew toggle setting on the Payments settings page](/img/config/payments-force-auto-renew.png)

**Allow trials without payment method (Dozvoliti probne periode bez metode plaćanja):** Omogućavanjem ove opcije, vaš klijent neće morati da unosi nikakve finansijske podatke tokom procesa registracije. Ovo će biti potrebno tek nakon isteka probnog perioda.

![Allow Trials Without Payment Method toggle on the Payments settings page](/img/config/payments-allow-trials.png)

**Send invoice on payment confirmation (Slanje računa uz potvrdu plaćanja):** Ovo vam daje opciju da odlučite da li želite ili ne želite da pošaljete račun nakon plaćanja. Imajte na umu da će korisnici imati pristup istoriji plaćanja na svom subsite dashboardu. Ova opcija ne važi za Ručnu kapiju (Manual Gateway).

![Send Invoice on Payment Confirmation toggle on the Payments settings page](/img/config/payments-send-invoice.png)

**Invoice numbering scheme (Shema brojanja računa):** Ovde možete odabrati ili referentni kod plaćanja ili sekvencijalni broj. Ako odlučite da koristite referentni kod plaćanja za svoje račune, ne morate ništa konfigurisati. Ako odaberete sekvencijalni broj, moraćete da konfigurišete **sljedeći broj računa** (Ovaj broj će se koristiti kao broj računa za sljedeći račun generisan u sistemu. Povećava se za jedan svaki put kada se kreira novi račun. Možete ga promijeniti i sačuvati kako biste resetovali sekvencijalni broj računa na određenu vrijednost) i **prefiks broja računa.**

![Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options](/img/config/payments-invoice-scheme.png)

![Next invoice number and invoice number prefix fields shown when Sequential Number is selected](/img/config/payments-invoice-sequential.png)

## Gdje pronaći kapije:

Možete postaviti kapije za plaćanje na istoj stranici (**Ultimate Multisite > Podešavanja > Naplata (Payments)**). Ispod **aktivnih kapija za plaćanje (active payment gateways)**, bit će vam vidljivo: _Stripe_, _Stripe_ _Checkout_, _PayPal_ i _Ručno_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Imamo posvećen članak za svaku kapiju za plaćanje koji će vas voditi kroz korake postavljanja, a koji možete pronaći na linkovima ispod.

Možete pregledati i uređivati detalje plaćanja:

![Payment edit interface](/img/admin/payment-edit.png)

Evo punog prikaza stranice za uređivanje plaćanja:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Evo takođe punog prikaza podešavanja kapija za plaćanje:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Postavljanje Stripe kapije**

**Postavljanje PayPal kapije**

**Postavljanje ručnih plaćanja**

Sada, ako želite da koristite _WooCommerce_, _GoCardless_ ili _Payfast_ kao svoju kapiju za plaćanje, morat ćete **instalirati i konfigurirati njihove add-on-e**.

### Kako instalirati WooCommerce add-on:

Razumijemo da _Stripe_ i _PayPal_ nisu dostupni u nekim zemljama, što ograničava ili otežava korisnicima Ultimate Multisite efikasno korištenje našeg plugin-a. Zato smo kreirali add-on za integraciju _WooCommerce_, koji je vrlo popularan e-commerce plugin. Programeri širom svijeta kreirali su add-on-e za integraciju različitih kapija za plaćanje u njega. Iskoristili smo to kako bismo proširili kapije za plaćanje koje možete koristiti sa Ultimate Multisite sistemom naplate.

_**VAŽNO:** Ultimate Multisite: WooCommerce Integration zahtijeva da je WooCommerce aktiviran barem na vašoj glavnoj stranici._

Prvo, molimo vas da idete na stranicu add-on-a. Pronaći ćete je tako što ćete otići na **Ultimate Multisite > Podešavanja (Settings)**. Trebali biste vidjeti tabelu **Add-ons**. Kliknite na **Check our Add-ons**.

![Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link](/img/config/settings-addons-table.png)

Nakon klika na **Check our Add-ons**, bit ćete preusmjereni na stranicu add-on-a. Ovdje možete pronaći sve Ultimate Multisite add-on-e. Kliknite na add-on **Ultimate Multisite: WooCommerce Integration**.

![Add-ons page listing Ultimate Multisite add-ons including WooCommerce Integration](/img/addons/addons-page.png)

Pojaviće se prozor sa detaljima add-on-a. Samo kliknite na **Install Now**.

![Ultimate Multisite WooCommerce Integration add-on details dialog with Install Now button](/img/addons/addon-install-woocommerce.png)

Nakon instalacije, bit ćete preusmjereni na stranicu plugin-a. Ovdje, samo kliknite na **Network Activate** i WooCommerce add-on će biti aktiviran na vašoj mreži.

![Plugins page with the Network Activate link for the WooCommerce Integration add-on](/img/addons/addon-network-activate-woocommerce.png)

Nakon aktivacije, ako i dalje nemate instaliran i aktiviran WooCommerce plugin na vašoj web stranici, dobit ćete podsjetnik.

![Admin notice reminding the administrator to install and activate the WooCommerce plugin](/img/addons/addon-woocommerce-reminder.png)

Da saznate više o add-on-u WooCommerce Integration, **kliknite ovdje**.

### Kako instalirati GoCardless add-on:

Koraci za instalaciju _GoCardless_ add-on-a vrlo su slični kao za _WooCommerce_ add-on. Molimo vas da idete na stranicu add-on-a i odaberete add-on **Ultimate Multisite: GoCardless Gateway**.

![Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted](/img/addons/addons-page-gocardless.png)

Pojaviće se prozor add-on-a. Kliknite na **Install Now**.

![Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button](/img/addons/addon-install-gocardless.png)

Nakon instalacije, bit ćete preusmjereni na stranicu plugin-a. Ovdje, samo kliknite na **Network Activate** i _GoCardless_ add-on će biti aktiviran na vašoj mreži.

![Plugins page with the Network Activate link for the GoCardless Gateway add-on](/img/addons/addon-network-activate-gocardless.png)

Da biste saznali kako početi sa _GoCardless_ kapijom, **pročitajte ovaj članak**.

### Kako instalirati Payfast add-on:

Idite na stranicu add-on-a i odaberite add-on **Ultimate Multisite: Payfast Gateway**.

![Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted](/img/addons/addons-page-payfast.png)

Pojaviće se prozor add-on-a. Kliknite na **Install Now.**

![Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button](/img/addons/addon-install-payfast.png)

Nakon instalacije, bit ćete preusmjereni na stranicu plugin-a. Ovdje, samo kliknite na **Network Activate** i _Payfast_ add-on će biti aktiviran na vašoj mreži.

![Plugins page with the Network Activate link for the Payfast Gateway add-on](/img/addons/addon-network-activate-payfast.png)
