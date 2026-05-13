import { INodeProperties } from 'n8n-workflow';

export const broadcastOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['broadcast'],
			},
		},
		options: [
			{
				name: 'Archive',
				value: 'archive',
				description: 'Archive a completed broadcast',
				action: 'Archive a broadcast',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/api/v1/broadcasts/{{$parameter["broadcastId"]}}/archive',
					},
				},
			},
			{
				name: 'Cancel',
				value: 'cancel',
				description: 'Cancel an active broadcast',
				action: 'Cancel a broadcast',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/api/v1/broadcasts/{{$parameter["broadcastId"]}}/cancel',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a broadcast by ID',
				action: 'Get a broadcast',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/broadcasts/{{$parameter["broadcastId"]}}',
					},
				},
			},
			{
				name: 'Get Event Status',
				value: 'getEventStatus',
				description: 'Get the status of a broadcast launch event',
				action: 'Get event status',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/events/{{$parameter["eventId"]}}',
					},
				},
			},
			{
				name: 'Launch',
				value: 'launch',
				description: 'Launch a new broadcast campaign',
				action: 'Launch a broadcast',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v1/events',
						body: {
							event_type: 'send_broadcast',
							broadcast: {
								name: '={{$parameter["name"]}}',
								whats_app_template_id: '={{$parameter["templateId"]}}',
								delivery_mode: '={{$parameter["deliveryMode"]}}',
								audience_id: '={{$parameter["audienceId"]}}',
								business_phone_number: '={{$parameter["additionalFields"]["businessPhoneNumber"]}}',
								scheduled_launch_time: '={{$parameter["additionalFields"]["scheduledLaunchTime"]}}',
								liquid_values: '={{$parameter["liquidValues"]}}',
								contacts: '={{$parameter["contacts"]}}',
							},
							skip_phone_validation: '={{$parameter["additionalFields"]["skipPhoneValidation"]}}',
							skip_liquid_values_validation: '={{$parameter["additionalFields"]["skipLiquidValuesValidation"]}}',
						},
					},
				},
			},
			{
				name: 'List',
				value: 'list',
				description: 'List all broadcasts',
				action: 'List broadcasts',
				routing: {
					request: {
						method: 'GET',
						url: '/api/v1/broadcasts',
						qs: {
							status: '={{$parameter["status"]}}',
							page: '={{$parameter["page"]}}',
						},
					},
				},
			},
		],
		default: 'list',
	},
];

export const broadcastFields: INodeProperties[] = [
	{
		displayName: 'Broadcast ID',
		name: 'broadcastId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['broadcast'],
				operation: ['get', 'cancel', 'archive'],
			},
		},
		default: '',
		description: 'The unique ID of the broadcast',
	},
	{
		displayName: 'Event ID',
		name: 'eventId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['broadcast'],
				operation: ['getEventStatus'],
			},
		},
		default: '',
		description: 'The unique ID of the launch event',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['broadcast'],
				operation: ['launch'],
			},
		},
		default: '',
		description: 'The name of the broadcast campaign',
	},
	{
		displayName: 'Template ID',
		name: 'templateId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['broadcast'],
				operation: ['launch'],
			},
		},
		default: '',
		description: 'The ID of the WhatsApp template to use',
	},
	{
		displayName: 'Delivery Mode',
		name: 'deliveryMode',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['broadcast'],
				operation: ['launch'],
			},
		},
		options: [
			{
				name: 'Instant',
				value: 'instant',
			},
			{
				name: 'Gradual',
				value: 'gradual',
			},
		],
		default: 'instant',
		description: 'How the messages should be delivered',
	},
	{
		displayName: 'Audience ID',
		name: 'audienceId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['broadcast'],
				operation: ['launch'],
			},
		},
		default: '',
		description: 'The ID of the audience list to target',
	},
	{
		displayName: 'Contacts',
		name: 'contacts',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['broadcast'],
				operation: ['launch'],
			},
		},
		default: '[]',
		description: 'Manual list of contacts to target in JSON format',
	},
	{
		displayName: 'Liquid Values',
		name: 'liquidValues',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['broadcast'],
				operation: ['launch'],
			},
		},
		default: '{}',
		description: 'Global liquid values for template personalization in JSON format',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['broadcast'],
				operation: ['launch'],
			},
		},
		options: [
			{
				displayName: 'Business Phone Number',
				name: 'businessPhoneNumber',
				type: 'string',
				default: '',
				description: 'The phone number to send messages from',
			},
			{
				displayName: 'Scheduled Launch Time',
				name: 'scheduledLaunchTime',
				type: 'dateTime',
				default: '',
				description: 'When the broadcast should be launched',
			},
			{
				displayName: 'Skip Phone Validation',
				name: 'skipPhoneValidation',
				type: 'boolean',
				default: false,
				description: 'Whether to skip phone number format validation',
			},
			{
				displayName: 'Skip Liquid Values Validation',
				name: 'skipLiquidValuesValidation',
				type: 'boolean',
				default: false,
				description: 'Whether to skip liquid values validation',
			},
		],
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['broadcast'],
				operation: ['list'],
			},
		},
		options: [
			{
				name: 'All',
				value: '',
			},
			{
				name: 'Draft',
				value: 'draft',
			},
			{
				name: 'Queued',
				value: 'queued',
			},
			{
				name: 'Sending',
				value: 'sending',
			},
			{
				name: 'Sent',
				value: 'sent',
			},
			{
				name: 'Archived',
				value: 'archived',
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
				resource: ['broadcast'],
				operation: ['list'],
			},
		},
		default: 1,
	},
];
