import { INodeProperties } from 'n8n-workflow';

export const conversationOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['conversation'],
			},
		},
		options: [
			{
				name: 'List',
				value: 'list',
				description: 'List conversations',
				action: 'List conversations',
				routing: {
					request: {
						method: 'GET',
						url: '/api/v1/conversations',
						qs: {
							status: '={{$parameter["status"]}}',
							escalated: '={{$parameter["escalated"]}}',
							activity_type: '={{$parameter["activityType"]}}',
							phone_number: '={{$parameter["phoneNumber"]}}',
							has_call_permission: '={{$parameter["hasCallPermission"]}}',
							updated_since: '={{$parameter["updatedSince"]}}',
							page: '={{$parameter["page"]}}',
						},
					},
				},
			},
			{
				name: 'Update Status',
				value: 'update',
				description: 'Update the status of a conversation',
				action: 'Update status',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/api/v1/conversations/{{$parameter["conversationId"]}}',
						body: {
							status: '={{$parameter["newStatus"]}}',
						},
					},
				},
			},
		],
		default: 'list',
	},
];

export const conversationFields: INodeProperties[] = [
	{
		displayName: 'Conversation ID',
		name: 'conversationId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['conversation'],
				operation: ['update'],
			},
		},
		default: '',
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['conversation'],
				operation: ['list'],
			},
		},
		options: [
			{
				name: 'All',
				value: '',
			},
			{
				name: 'Awaiting Customer Response',
				value: 'awaiting_customer_response',
			},
			{
				name: 'Closed',
				value: 'closed',
			},
			{
				name: 'Open',
				value: 'open',
			},
			{
				name: 'Pending',
				value: 'pending',
			},
		],
		default: '',
	},
	{
		displayName: 'New Status',
		name: 'newStatus',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['conversation'],
				operation: ['update'],
			},
		},
		options: [
			{
				name: 'Awaiting Customer Response',
				value: 'awaiting_customer_response',
			},
			{
				name: 'Closed',
				value: 'closed',
			},
			{
				name: 'Open',
				value: 'open',
			},
			{
				name: 'Pending',
				value: 'pending',
			},
		],
		default: 'closed',
	},
	{
		displayName: 'Phone Number',
		name: 'phoneNumber',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['conversation'],
				operation: ['list'],
			},
		},
		default: '',
		description: 'Filter by subscriber phone number',
	},
	{
		displayName: 'Has Call Permission',
		name: 'hasCallPermission',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['conversation'],
				operation: ['list'],
			},
		},
		default: false,
		description: 'Whether to filter conversations by call permission status',
	},
	{
		displayName: 'Updated Since',
		name: 'updatedSince',
		type: 'dateTime',
		displayOptions: {
			show: {
				resource: ['conversation'],
				operation: ['list'],
			},
		},
		default: '',
		description: 'Filter conversations updated after this date',
	},
	{
		displayName: 'Escalated',
		name: 'escalated',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['conversation'],
				operation: ['list'],
			},
		},
		default: false,
	},
	{
		displayName: 'Activity Type',
		name: 'activityType',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['conversation'],
				operation: ['list'],
			},
		},
		options: [
			{
				name: 'Any',
				value: '',
			},
			{
				name: 'Assignment',
				value: 'assignment',
			},
			{
				name: 'Escalation',
				value: 'escalation',
			},
			{
				name: 'Message',
				value: 'message',
			},
			{
				name: 'Status Change',
				value: 'status_change',
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
				resource: ['conversation'],
				operation: ['list'],
			},
		},
		default: 1,
	},
];
