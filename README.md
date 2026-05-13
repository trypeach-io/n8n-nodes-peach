# n8n-nodes-peach

This is an n8n community node for [Peach](https://trypeach.ai), the AI-powered WhatsApp platform for businesses.

Peach allows you to build native app-like experiences from your Official WhatsApp Business Accounts. You can build AI agents, launch broadcasts, and route chats to your sales or support teams so your customers can get all their help right from within WhatsApp. Peach is an official Meta Tech Partner, and works using WhatsApp's official APIs. This node enables you to integrate Peach into your n8n workflows.

## Features

- **Broadcasts**: Launch broadcast campaigns to your contacts.
- **Messages**: Send template messages with dynamic `liquid_values` support.
- **Contacts**: Manage contact communication preferences and metadata.
- **AI Handoff**: Connect a contact or customer with an AI agent to address a customer's query.

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n documentation to install this node.

1. Go to **Settings > Community Nodes**.
2. Click **Install a community node**.
3. Enter `n8n-nodes-peach`.
4. Agree to the risks and click **Install**.

## Credentials

To use this node, you'll need an API Key from your Peach dashboard.
1. Log in to [Peach](https://app.trypeach.ai).
2. Go to **Developers > API Keys**.
3. Copy your API Key and paste it into the n8n credential settings.

## License

[MIT](LICENSE.md)
