import { INodeType, INodeTypeDescription, NodeConnectionTypes } from 'n8n-workflow';
import { resourceFields, resourceOperations } from './resources';

export class Peach implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Peach',
		name: 'peach',
		icon: 'file:peach.png',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Peach WhatsApp Platform API',
		defaults: {
			name: 'Peach',
		},
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'peachApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://app.trypeach.ai',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			...resourceOperations,
			...resourceFields,
		],
		usableAsTool: true,
	};
}
