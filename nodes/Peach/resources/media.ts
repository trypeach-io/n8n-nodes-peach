import { INodeProperties } from 'n8n-workflow';

export const mediaOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['media'],
			},
		},
		options: [
			{
				name: 'Upload',
				value: 'upload',
				description: 'Upload a media file',
				action: 'Upload a file',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v1/medias',
						body: {
							media: {
								data: '={{$parameter["data"]}}',
								filename: '={{$parameter["filename"]}}',
								content_type: '={{$parameter["contentType"]}}',
							},
						},
					},
				},
			},
			{
				name: 'List',
				value: 'list',
				description: 'List uploaded media',
				action: 'List media',
				routing: {
					request: {
						method: 'GET',
						url: '/api/v1/medias',
						qs: {
							page: '={{$parameter["page"]}}',
						},
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a media file',
				action: 'Delete media',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/v1/medias/{{$parameter["mediaId"]}}',
					},
				},
			},
		],
		default: 'upload',
	},
];

export const mediaFields: INodeProperties[] = [
	{
		displayName: 'Binary Property',
		name: 'binaryPropertyName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['media'],
				operation: ['upload'],
			},
		},
		default: 'data',
		description: 'The name of the binary property which contains the data for the file to be uploaded',
	},
	{
		displayName: 'Media ID',
		name: 'mediaId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['media'],
				operation: ['delete'],
			},
		},
		default: '',
		description: 'The ID of the media to delete',
	},
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['media'],
				operation: ['list'],
			},
		},
		default: 1,
	},
];
