"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resourceFields = exports.resourceOperations = void 0;
const contact_1 = require("./contact");
const message_1 = require("./message");
const broadcast_1 = require("./broadcast");
const conversation_1 = require("./conversation");
const media_1 = require("./media");
exports.resourceOperations = [
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
    ...contact_1.contactOperations,
    ...message_1.messageOperations,
    ...broadcast_1.broadcastOperations,
    ...conversation_1.conversationOperations,
    ...media_1.mediaOperations,
];
exports.resourceFields = [
    ...contact_1.contactFields,
    ...message_1.messageFields,
    ...broadcast_1.broadcastFields,
    ...conversation_1.conversationFields,
    ...media_1.mediaFields,
];
//# sourceMappingURL=index.js.map