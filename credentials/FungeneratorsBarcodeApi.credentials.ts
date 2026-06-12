import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class FungeneratorsBarcodeApi implements ICredentialType {
        name = 'N8nDevFungeneratorsBarcodeApi';

        displayName = 'Fungenerators Barcode API';

        icon: Icon = { light: 'file:../nodes/FungeneratorsBarcode/fungenerators-barcode.svg', dark: 'file:../nodes/FungeneratorsBarcode/fungenerators-barcode.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'http://api.fungenerators.com',
                        required: true,
                        placeholder: 'http://api.fungenerators.com',
                        description: 'The base URL of your Fungenerators Barcode API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-Fungenerators-Api-Secret': '={{$credentials.apiKey}}',
                        },
                },
        };


}
