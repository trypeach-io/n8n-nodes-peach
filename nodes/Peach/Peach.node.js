"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Peach = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const resources_1 = require("./resources");
class Peach {
    constructor() {
        this.description = {
            displayName: 'Peach',
            name: 'peach',
            icon: 'file:peach_logo.svg',
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Interact with the Peach WhatsApp Platform API',
            defaults: {
                name: 'Peach',
            },
            inputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            outputs: [n8n_workflow_1.NodeConnectionTypes.Main],
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
                ...resources_1.resourceOperations,
                ...resources_1.resourceFields,
            ],
        };
    }
}
exports.Peach = Peach;
//# sourceMappingURL=Peach.node.js.map