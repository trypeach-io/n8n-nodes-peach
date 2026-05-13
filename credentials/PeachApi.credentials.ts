import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	Icon,
	INodeProperties,
} from 'n8n-workflow';

export class PeachApi implements ICredentialType {
	name = 'peachApi';

	displayName = 'Peach API';
	icon: Icon = 'file:peach.svg';

	documentationUrl = 'https://docs.trypeach.ai/api-reference/authentication';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Your Peach account API key',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '={{$credentials?.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://app.trypeach.ai',
			url: '/api/v1/conversations',
			method: 'GET',
		},
	};
}
