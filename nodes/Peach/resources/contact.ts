import { INodeProperties } from 'n8n-workflow';

export const contactOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['contact'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Get a contact by phone number',
				action: 'Get a contact',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/contacts/{{$parameter["phoneNumber"]}}',
					},
				},
			},
			{
				name: 'Create or Update',
				value: 'upsert',
				description: 'Create a new record, or update the current one if it already exists (upsert)',
				action: 'Create or update a contact',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v1/contacts',
						body: {
							phone_number: '={{$parameter["phoneNumber"]}}',
							name: '={{$parameter["name"]}}',
							email: '={{$parameter["email"]}}',
							timezone: '={{$parameter["timezone"]}}',
							opted_out: '={{$parameter["optedOut"]}}',
							communication_preference: '={{$parameter["communicationPreference"]}}',
							metadata: '={{$parameter["metadata"]}}',
							tags: '={{$parameter["tags"].split(",")}}',
						},
					},
				},
			},
			{
				name: 'Bulk Update Preferences',
				value: 'bulkUpdatePreferences',
				description: 'Update communication preferences for multiple contacts',
				action: 'Bulk update preferences',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v1/contacts/bulk_update_communication_preferences',
						body: {
							phone_numbers: '={{$parameter["phoneNumbers"].split(",")}}',
							communication_preference: '={{$parameter["communicationPreference"]}}',
						},
					},
				},
			},
		],
		default: 'get',
	},
];

export const contactFields: INodeProperties[] = [
	{
		displayName: 'Phone Number',
		name: 'phoneNumber',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['get', 'upsert'],
			},
		},
		default: '',
		description: 'The phone number of the contact (including country code)',
	},
	{
		displayName: 'Phone Numbers (Comma Separated)',
		name: 'phoneNumbers',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['bulkUpdatePreferences'],
			},
		},
		default: '',
		description: 'List of phone numbers to update, separated by commas',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['upsert'],
			},
		},
		default: '',
		description: 'The name of the contact',
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		placeholder: 'name@email.com',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['upsert'],
			},
		},
		default: '',
		description: 'The email address of the contact',
	},
	{
		displayName: 'Timezone',
		name: 'timezone',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['upsert'],
			},
		},
		default: '',
		description: 'The timezone of the contact (e.g. Asia/Kolkata)',
	},
	{
		displayName: 'Opted Out',
		name: 'optedOut',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['upsert'],
			},
		},
		default: false,
		description: 'Whether the contact has opted out of messages',
	},
	{
		displayName: 'Communication Preference',
		name: 'communicationPreference',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['upsert', 'bulkUpdatePreferences'],
			},
		},
		options: [
			{
				name: 'Allow Everything',
				value: 'allow_everything',
			},
			{
				name: 'Disallow Marketing',
				value: 'disallow_marketing',
			},
			{
				name: 'Disallow Automated Messaging',
				value: 'disallow_automated_messaging',
			},
			{
				name: 'Mute All',
				value: 'mute_all',
			},
		],
		default: 'allow_everything',
		description: 'The communication preference for the contact',
	},
	{
		displayName: 'Metadata',
		name: 'metadata',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['upsert'],
			},
		},
		default: '{}',
		description: 'Additional metadata for the contact in JSON format',
	},
	{
		displayName: 'Tags (Comma Separated)',
		name: 'tags',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['upsert'],
			},
		},
		default: '',
		description: 'List of tags to associate with the contact, separated by commas',
	},
];
