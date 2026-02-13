---
title: "Setting the Sunrise Constant on Closte"
sidebar_position: 16
---

# Setting the Sunrise constant to true on Closte

Some host providers lock the wp-config.php for security reasons. This means that Ultimate Multisite cannot automatically edit the file to include the necessary constants to get domain mapping and other features to work. Closte is one such host.

However, Closte offers a way to add constants to the wp-config.php in a secure manner. You just need to follow the steps below:

## On the Closte dashboard

First, [log into your Closte account](https://app.closte.com/), click on the Sites menu item, then click on the Dashboard link on the site you are currently working on:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

You be presented with a number of new menu items on the left side of the screen. Navigate to the **Settings** page using that menu:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Then, on the **Settings** , find the WP-Config tab, and then the "Additional wp-config.php content" field on that tab:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

In the context of installing Ultimate Multisite, you'll need to add the sunrise constant onto that field. Simply add a new line and paste the line below. After that, click the **Save All** button.

define('SUNRISE', true);

That's it, you're all set. Return to the Ultimate Multisite install wizard and refresh the page to continue the process.
