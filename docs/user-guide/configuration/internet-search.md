---
title: "Internet Search"
sidebar_position: 26
---

# Internet Search

Gratis AI Agent v1.5.0 adds an **Internet Search** ability that lets the AI assistant retrieve up-to-date information from the web during a conversation. This is powered by the [Brave Search API](https://brave.com/search/api/) or the [Tavily API](https://tavily.com/).

## How It Works

When internet search is enabled, the assistant can automatically query your configured search provider when it determines that a question requires current or external information — for example, recent news, live pricing, or documentation that may have changed since the model's training cutoff.

Results are retrieved in real time and injected into the assistant's context before it generates a response. The assistant indicates when it has used search results to answer a question.

## Enabling Internet Search

Internet search requires an API key from your chosen search provider. To configure it:

1. Go to **Gratis AI Agent → Settings → Advanced**.
2. Locate the **Internet Search Provider** dropdown and select either **Brave Search** or **Tavily**.
3. Enter your API key in the corresponding field. Sign-up links are displayed next to each field.
4. Click **Save Settings**.

Once the key is saved, the Internet Search ability is automatically available to the assistant.

## Brave Search

### Obtaining a Brave Search API Key

1. Visit the [Brave Search API page](https://brave.com/search/api/).
2. Sign up for a plan. A free tier is available with a monthly request limit.
3. Copy your API key from the Brave Search developer dashboard.
4. Paste it into the **Brave Search API Key** field in Gratis AI Agent settings.

### Usage Limits

Usage is billed by Brave Search based on the number of queries made. Each AI response that triggers a search counts as one query. Monitor your usage in the [Brave Search developer dashboard](https://brave.com/search/api/) to avoid unexpected charges.

## Tavily

Superdav AI Agent v1.10.0 adds **Tavily** as an alternative internet search provider, offering richer search results and advanced research capabilities.

### Obtaining a Tavily API Key

1. Visit the [Tavily API page](https://tavily.com/).
2. Sign up for an account. A free tier is available with a monthly request limit.
3. Copy your API key from the Tavily dashboard.
4. Paste it into the **Tavily API Key** field in Gratis AI Agent settings.

### Usage Limits

Usage is billed by Tavily based on the number of API calls made. Each AI response that triggers a search counts as one call. Monitor your usage in the [Tavily dashboard](https://tavily.com/) to avoid unexpected charges.

## Disabling Internet Search

Remove the API key from the active search provider field and save. The Internet Search ability will no longer be offered to the assistant.

:::note
Internet search adds latency to responses because the assistant must wait for search results before generating an answer. For time-sensitive use cases, consider whether real-time search is necessary or whether the assistant's built-in knowledge is sufficient.
:::
