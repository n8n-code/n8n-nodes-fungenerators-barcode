import type { INodeProperties } from 'n8n-workflow';

export const barcodeDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Barcode"
					]
				}
			},
			"options": [
				{
					"name": "POST Barcode Decode",
					"value": "POST Barcode Decode",
					"action": "POST Barcode Decode",
					"description": "Decode a Barcode image and return the cotents if successful",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/barcode/decode"
						}
					}
				},
				{
					"name": "GET Barcode Decode Types",
					"value": "GET Barcode Decode Types",
					"action": "GET Barcode Decode Types",
					"description": "Get the supported barcode types for the decoding process.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/barcode/decode/types"
						}
					}
				},
				{
					"name": "GET Barcode Encode",
					"value": "GET Barcode Encode",
					"action": "GET Barcode Encode",
					"description": "Get a Bar Code image for the given barcode number",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/barcode/encode"
						}
					}
				},
				{
					"name": "GET Barcode Encode Types",
					"value": "GET Barcode Encode Types",
					"action": "GET Barcode Encode Types",
					"description": "Get the supported barcode types for encoding / image generation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/barcode/encode/types"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /barcode/decode",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Barcode"
					],
					"operation": [
						"POST Barcode Decode"
					]
				}
			}
		},
		{
			"displayName": "POST /barcode/decode<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Barcode"
					],
					"operation": [
						"POST Barcode Decode"
					]
				}
			}
		},
		{
			"displayName": "X Fungenerators API Secret (Header)",
			"name": "security_x_fungenerators_api_secret",
			"type": "string",
			"default": "",
			"description": "API key for X-Fungenerators-Api-Secret (header: X-Fungenerators-Api-Secret)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Fungenerators-Api-Secret": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Barcode"
					],
					"operation": [
						"POST Barcode Decode"
					]
				}
			}
		},
		{
			"displayName": "GET /barcode/decode/types",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Barcode"
					],
					"operation": [
						"GET Barcode Decode Types"
					]
				}
			}
		},
		{
			"displayName": "X Fungenerators API Secret (Header)",
			"name": "security_x_fungenerators_api_secret",
			"type": "string",
			"default": "",
			"description": "API key for X-Fungenerators-Api-Secret (header: X-Fungenerators-Api-Secret)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Fungenerators-Api-Secret": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Barcode"
					],
					"operation": [
						"GET Barcode Decode Types"
					]
				}
			}
		},
		{
			"displayName": "GET /barcode/encode",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Barcode"
					],
					"operation": [
						"GET Barcode Encode"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"required": true,
			"description": "Barcode number",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "number",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Barcode"
					],
					"operation": [
						"GET Barcode Encode"
					]
				}
			}
		},
		{
			"displayName": "Barcodeformat",
			"name": "barcodeformat",
			"description": "Barcode format default C39. Valid values are the keys to those returned from /barcode/encode/types.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "barcodeformat",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Barcode"
					],
					"operation": [
						"GET Barcode Encode"
					]
				}
			}
		},
		{
			"displayName": "Outputformat",
			"name": "outputformat",
			"description": "Output image format. Must be one of png/html/jpg/svg",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "outputformat",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Barcode"
					],
					"operation": [
						"GET Barcode Encode"
					]
				}
			}
		},
		{
			"displayName": "Widthfactor",
			"name": "widthfactor",
			"description": "Width factor of the image",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "widthfactor",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Barcode"
					],
					"operation": [
						"GET Barcode Encode"
					]
				}
			}
		},
		{
			"displayName": "Totalheight",
			"name": "totalheight",
			"description": "Total height of the image",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "totalheight",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Barcode"
					],
					"operation": [
						"GET Barcode Encode"
					]
				}
			}
		},
		{
			"displayName": "X Fungenerators API Secret (Header)",
			"name": "security_x_fungenerators_api_secret",
			"type": "string",
			"default": "",
			"description": "API key for X-Fungenerators-Api-Secret (header: X-Fungenerators-Api-Secret)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Fungenerators-Api-Secret": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Barcode"
					],
					"operation": [
						"GET Barcode Encode"
					]
				}
			}
		},
		{
			"displayName": "GET /barcode/encode/types",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Barcode"
					],
					"operation": [
						"GET Barcode Encode Types"
					]
				}
			}
		},
		{
			"displayName": "X Fungenerators API Secret (Header)",
			"name": "security_x_fungenerators_api_secret",
			"type": "string",
			"default": "",
			"description": "API key for X-Fungenerators-Api-Secret (header: X-Fungenerators-Api-Secret)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Fungenerators-Api-Secret": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Barcode"
					],
					"operation": [
						"GET Barcode Encode Types"
					]
				}
			}
		},
];
