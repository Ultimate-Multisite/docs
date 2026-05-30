---
title: "Webhooks"
sidebar_position: 15
---

# A First Look on Webhooks (v2)

_**ATTENTION: Note that this feature or article is for advanced users.**_

A **webhook** is a way for an app or software like Ultimate Multisite to provide other applications with real-time information. A webhook delivers data or payloads to other applications as it happens, meaning you **get data immediately.**

This is helpful should you need to integrate or pass certain data from Ultimate Multisite going to another CRM or system each time an event is triggered. For example, you need to send the user's name and email address to a mailing list each time a new user account is created.

## How to create a webhook

To create a webhook, go to your network admin dashboard. Click on **Ultimate Multisite > Webhooks > Add New Webhook.**

![Empty Webhooks list page with Add New Webhook button](/img/admin/webhooks-list-empty.png)

You can then edit the webhook configuration:

![Add New Webhook form with Name, Event, and URL fields](/img/admin/webhook-add-modal.png)

When creating a new webhook you will be asked for information like **Name, URL,** and **Event**. You can use any name you want for your webhook. The most important fields are the URL and Event.

![Webhook edit interface showing the URL field and payload preview](/img/admin/webhook-url-field.png)

URL is the **endpoint or the destination** to which Ultimate Multisite will send the **payload or data**. This is the application that will receive the data.

Zapier is the most common solution that user uses to make integration with 3rd party application easier. Without a platform like Zapier, you will need to manually create a custom function that will catch the data and process it. See this article on **how to use Ultimate Multisite webhook with Zapier.**

In this article, we will be looking at the basic concept of how a webhook works and the events available in Ultimate Multisite. We will be using a 3rd party site called [requestbin.com](https://requestbin.com/). This site will allow us to create an endpoint and catch the payload without doing any coding. _**Disclaimer: all it will do is show us that the data has been received.**_ There will be no processing or any kind of action done to the payload.

Go to [requestbin.com](https://requestbin.com/) and click Create Request Bin.

After clicking that button, it will ask you to log in if you already have an account or sign up. If you already have an account it will lead you right to their dashboard. On their dashboard, you will immediately see the endpoint or URL you can use in creating your Ultimate Multisite webhook.

Go ahead and copy the URL and go back to Ultimate Multisite. Place the endpoint on the URL field and select an event from the dropdown. In this example, we will be selecting **Payment Received**.

This event is triggered whenever a user makes a payment. All the events available, their description, and payloads are listed at the bottom of the page. Click the **Add New Webhook** button to save the webhook.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

We can now send a test event to the endpoint for us to see if the webhook we created is working. We can do this by clicking **Send Test Event** under the webhook we created.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

This shows a confirmation window saying that the test was successful.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

Now if we go back to the _Requestbin_ site we will see that the payload has been received containing some test data.

This is the basic principle of how webhook and endpoints work. If you are to create a custom endpoint, you will need to create a custom function to process the data your receive from Ultimate Multisite.
