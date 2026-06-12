import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { barcodeDescription } from './resources/barcode';

export class FungeneratorsBarcode implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Fungenerators Barcode',
                name: 'N8nDevFungeneratorsBarcode',
                icon: { light: 'file:./fungenerators-barcode.svg', dark: 'file:./fungenerators-barcode.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Generate and decode barcodes in multiple industry-standard formats.',
                defaults: { name: 'Fungenerators Barcode' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevFungeneratorsBarcodeApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Barcode",
					"value": "Barcode",
					"description": "Barcode API"
				}
			],
			"default": ""
		},
		...barcodeDescription
                ],
        };
}
