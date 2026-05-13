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
				name: 'Broadcast',
				value: 'broadcast',
			},
			{
				name: 'Contact',
				value: 'contact',
			},
			{
				name: 'Conversation',
				value: 'conversation',
			},
			{
				name: 'Media',
				value: 'media',
			},
			{
				name: 'Message',
				value: 'message',
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
