---
title: "Customer Feedback & Issue Reporting"
sidebar_position: 25
---

# Customer Feedback & Issue Reporting

Gratis AI Agent v1.5.0 introduces a built-in feedback and issue reporting system that lets end users flag unhelpful responses and report problems directly from the chat interface. This system includes consent management, an automated reporting command, and AI-assisted triage on the backend.

## Thumbs-Down Button

Every message sent by the AI assistant displays a **thumbs-down** (👎) button. When a user clicks it, they can mark a response as unhelpful or incorrect.

- The button appears on hover next to each assistant message.
- Clicking it opens the **Feedback Consent Modal**.
- The feedback is associated with the conversation thread and the specific message.

## Feedback Consent Modal

When a user clicks the thumbs-down button, a consent modal appears before any data is sent. The modal:

- Explains what information will be collected (conversation excerpt, browser context).
- Asks the user to confirm they consent to sharing this data.
- Provides a free-text field for the user to describe what went wrong.
- Offers a **Cancel** option to dismiss without submitting.

No feedback is recorded until the user explicitly confirms.

## Auto-Prompt Feedback Banner

At the end of a conversation, the assistant may display an **auto-prompt feedback banner** — a non-intrusive message asking whether the session was helpful.

This banner appears automatically based on conversation length and outcome heuristics. It links to the same feedback flow as the thumbs-down button. Users can dismiss the banner without providing feedback.

## /report-issue Slash Command

Users can trigger the feedback flow directly by typing `/report-issue` in the chat input. This command:

- Opens the Feedback Consent Modal immediately.
- Pre-populates the description field with context about the current conversation.
- Allows users to add additional detail before submitting.

The `/report-issue` command is available in all chat modes (inline, floating widget, full-screen).

## AI-Assisted Triage

Submitted feedback is routed to an AI triage layer that:

- Categorises the report (factual error, unhelpful answer, inappropriate content, etc.).
- Attaches relevant conversation metadata.
- Forwards the triage summary to the configured **Feedback Endpoint** (see [Settings > Advanced](#settings-advanced)).

This reduces manual review time by surfacing the most critical issues first.

## Settings > Advanced {#settings-advanced}

To enable the feedback backend, configure the following fields under **Gratis AI Agent → Settings → Advanced**:

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | The URL that receives POST requests with feedback payloads (JSON). |
| **Feedback API Key** | Bearer token sent in the `Authorization` header for authenticating feedback submissions. |

Leave both fields blank to disable feedback collection. Individual feedback buttons remain visible to users, but submissions will not be forwarded.

:::tip
The feedback endpoint must accept a JSON body with at least `message_id`, `conversation_id`, `feedback_text`, and `triage_category` fields. See your endpoint provider's documentation for the expected schema.
:::
