import { INodeProperties } from 'n8n-workflow';
import { contactFields, contactOperations } from './contact';
import { messageFields, messageOperations } from './message';
import { broadcastFields, broadcastOperations } from './broadcast';
import { conversationFields, conversationOperations } from './conversation';
import { mediaFields, mediaOperations } from './media';

export const resourceOperations: INodeProperties[] = [
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		options: [
			{
				name: 'Contact',
				value: 'contact',
			},
			{
				name: 'Message',
				value: 'message',
			},
			{
				name: 'Broadcast',
				value: 'broadcast',
			},
			{
				name: 'Conversation',
				value: 'conversation',
			},
			{
				name: 'Media',
				value: 'media',
			},
		],
		default: 'contact',
	},
	...contactOperations,
	...messageOperations,
	...broadcastOperations,
	...conversationOperations,
	...mediaOperations,
];

export const resourceFields: INodeProperties[] = [
	...contactFields,
	...messageFields,
	...broadcastFields,
	...conversationFields,
	...mediaFields,
];
