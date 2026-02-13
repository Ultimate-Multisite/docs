---
title: "Upgrading a Plan"
sidebar_position: 11
---

# Upgrading a Plan (v2)

_**IMPORTANT NOTE: This article refers to Ultimate Multisite version 2.x.**_

Your customers are able to upgrade their plans at any time. They can either upgrade to another plan or purchase any additional services or packages that you offer on your network.

In this tutorial we will cover how they can upgrade their plan and what happens after the upgrade process.

To upgrade their plan, your customers should access their dashboard and go to the **Account** page.

![Customer dashboard with Account page link](/img/admin/memberships-list.png)

On the Account page, they will be shown their current membership and the plan associated with it. To upgrade to another plan, they must click on **Change** on the top-right corner of **Your Membership** section.

![Your Membership section with Change button](/img/admin/memberships-list.png)

They will be redirected to a checkout form where all the available plans will be displayed.

They will also be able to see the **services and packages available for their current plan** , in case they just want to purchase a specific service or package (like unlimited visits or disk space in our example here), and not upgrade the plan.

![Checkout form showing available plans and packages](/img/admin/memberships-list.png)

After they choose the product they want to purchase, they will see how much they will need to pay right now - excluding any existing credit - and how much they will be charged on the next billing date.

Usually, if the product is another plan and the payment is going to be made between a membership charge, they will receive a credit for the amount paid on the first plan.

![Upgrade payment summary with credit and next billing amount](/img/admin/memberships-list.png)

If they select a plan or package that will not change anything from the current subscription, they will see a message explaining that.

![Message when selected plan does not change the subscription](/img/admin/memberships-list.png)

After the checkout is completed, the new product(s) will be added to your customers' account and all the limits or features of the new product(s) will be instantly added to it: visits, disk space, posts, etc...

## 

## 

## Upgrade and Downgrade Paths

On each of your products, you'll have an **Up & Downgrades** tab. The first option on that tab is a field called **Plan Group**.

**Plan groups** is what allows you to let Ultimate Multisite know that certain plans belong to the same "family", and therefore should be used to construct upgrade/downgrade path options.

![Up and Downgrades tab with Plan Group field](/img/config/product-upgrades.png)

For example, you have a **Free plan** , a **Basic Plan** and a **Premium Plan** available. You want users subscribed under the **Free Plan** to be able to upgrade only to the **Premium Plan** and you do not want them to see the "Basic Plan" as an upgrade option. All you need to do is assign the same plan group name for both Free and Premium plans as shown in the screenshots below.

![Free Plan with High End plan group assigned](/img/config/product-upgrades.png)

![Premium Plan with High End plan group assigned](/img/config/product-upgrades.png)

What this should do is tell Ultimate Multisite that there is a "family" of plans in the network called **High End**. When offering upgrades or downgrades, only plans from the same family will be presented as an option for the user.
