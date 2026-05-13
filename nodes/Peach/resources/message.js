"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageFields = exports.messageOperations = void 0;
exports.messageOperations = [
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
                description: 'Send a WhatsApp template message with full component control',
                action: 'Send a template message',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/api/v1/template_messages',
                        body: {
                            to: '={{$parameter["to"]}}',
                            template_name: '={{$parameter["templateName"]}}',
                            components: '={{$parameter["components"]}}',
                        },
                    },
                },
            },
            {
                name: 'Send Transactional Message',
                value: 'sendTransactional',
                description: 'Send a simplified template message (transactional style)',
                action: 'Send a transactional message',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/api/v1/transactional_messages',
                        body: {
                            template_name: '={{$parameter["templateName"]}}',
                            to: {
                                phone_number: '={{$parameter["to"]}}',
                                name: '={{$parameter["name"]}}',
                            },
                            arguments: '={{$parameter["arguments"]}}',
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
exports.messageFields = [
    {
        displayName: 'To (Phone Number)',
        name: 'to',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['message'],
                operation: ['sendTemplate', 'sendTransactional'],
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
        displayName: 'Template Name',
        name: 'templateName',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['message'],
                operation: ['sendTemplate', 'sendTransactional'],
            },
        },
        default: '',
        description: 'The name of the WhatsApp template to send',
    },
    {
        displayName: 'Components',
        name: 'components',
        type: 'json',
        displayOptions: {
            show: {
                resource: ['message'],
                operation: ['sendTemplate'],
            },
        },
        default: '[]',
        description: 'The components for the template message (Header, Body, Buttons) in JSON format',
    },
    {
        displayName: 'Recipient Name',
        name: 'name',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['message'],
                operation: ['sendTransactional'],
            },
        },
        default: '',
        description: 'The name of the recipient (optional)',
    },
    {
        displayName: 'Arguments',
        name: 'arguments',
        type: 'json',
        displayOptions: {
            show: {
                resource: ['message'],
                operation: ['sendTransactional'],
            },
        },
        default: '{}',
        description: 'The arguments (variables) for the transactional template in JSON format',
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
//# sourceMappingURL=message.js.map