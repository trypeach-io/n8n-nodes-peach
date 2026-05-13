import { INodeProperties } from 'n8n-workflow';

export const messageOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['message'],
			},
		},
		options: [
			{
				name: 'Send Template Message',
				value: 'sendTemplate',
				description: 'Send a WhatsApp template message with liquid variable mapping',
				action: 'Send a template message',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v1/events',
						body: {
							event_type: 'send_template_message',
							contact: {
								phone_number: '={{$parameter["to"]}}',
								name: '={{$parameter["additionalFields"]["contactName"]}}',
							},
							template_message: {
								whats_app_template_id: '={{$parameter["templateId"]}}',
								liquid_values: '={{$parameter["liquidValues"]}}',
								business_phone_number: '={{$parameter["additionalFields"]["businessPhoneNumber"]}}',
								reply_automation: {
									ai_agent_id: '={{$parameter["additionalFields"]["aiAgentId"]}}',
								},
							},
						},
					},
				},
			},
			{
				name: 'List History',
				value: 'list',
				description: 'List message history',
				action: 'List message history',
				routing: {
					request: {
						method: 'GET',
						url: '/api/v1/messages',
						qs: {
							phone_number: '={{$parameter["to"]}}',
							conversation_id: '={{$parameter["conversationId"]}}',
							business_phone_number: '={{$parameter["businessPhoneNumber"]}}',
							direction: '={{$parameter["direction"]}}',
							page: '={{$parameter["page"]}}',
						},
					},
				},
			},
		],
		default: 'sendTemplate',
	},
];

export const messageFields: INodeProperties[] = [
	{
		displayName: 'To (Phone Number)',
		name: 'to',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendTemplate'],
			},
		},
		default: '',
		description: 'The recipient phone number (including country code)',
	},
	{
		displayName: 'Filter by Phone Number',
		name: 'to',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list'],
			},
		},
		default: '',
		description: 'Filter messages by the contact phone number',
	},
	{
		displayName: 'Conversation ID',
		name: 'conversationId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list'],
			},
		},
		default: '',
		description: 'Filter messages by conversation ID',
	},
	{
		displayName: 'Business Phone Number',
		name: 'businessPhoneNumber',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list'],
			},
		},
		default: '',
		description: 'Filter messages by the business (WABA) phone number',
	},
	{
		displayName: 'Template ID',
		name: 'templateId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendTemplate'],
			},
		},
		default: '',
		description: 'The ID of the WhatsApp template to send',
	},
	{
		displayName: 'Liquid Values',
		name: 'liquidValues',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendTemplate'],
			},
		},
		default: '{}',
		description: 'The variables for the template (e.g., {"name": "John"}) in JSON format',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendTemplate'],
			},
		},
		options: [
			{
				displayName: 'Contact Name',
				name: 'contactName',
				type: 'string',
				default: '',
				description: 'The name of the recipient contact',
			},
			{
				displayName: 'Business Phone Number',
				name: 'businessPhoneNumber',
				type: 'string',
				default: '',
				description: 'The WhatsApp Business phone number to use to send the template message from',
			},
			{
				displayName: 'AI Agent ID',
				name: 'aiAgentId',
				type: 'string',
				default: '',
				description: 'The ID of the AI Agent to handle replies',
			},
		],
	},
	{
		displayName: 'Direction',
		name: 'direction',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list'],
			},
		},
		options: [
			{
				name: 'All',
				value: '',
			},
			{
				name: 'Inbound',
				value: 'inbound',
			},
			{
				name: 'Outbound',
				value: 'outbound',
			},
		],
		default: '',
	},
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['list'],
			},
		},
		default: 1,
	},
];
