// See JSON schema definition @ https://json-schema.org/learn/getting-started-step-by-step
export function getJsonSchema(): string | object {
    return {
        title: 'JSON Editor Sample',
        type: 'object',
        properties: {
            minMaxNumber: {
                title: 'Integer with minimum/maximum',
                type: 'integer',
                default: null,
                minimum: 10,
                maximum: 20,
            },
            decimalNumberWithDefault: {
                title: 'Decimal number with default',
                type: 'number',
                default: 1.467,
            },
            dropDown: {
                title: 'Drop down with options',
                type: 'string',
                enum: ['option-1', 'option-2', 'option-3'],
                options: {
                    enum_titles: [
                        'Friendly Text 1',
                        'Option 2',
                        'Option 3',
                    ],
                },
            },
            radioType: {
                title: 'Radio Type',
                type: 'string',
                format: 'radio',
                enum: ['option-1', 'option-2'],
            },
            datePicker: {
                title: 'Date picker (no time)',
                type: 'string',
                format: 'date',
            },
        },
    };
};

export function getCurrentValue1(): string | object | null {
    return null;
}

export function getCurrentValue2(): string | object | null {
    return {
        minMaxNumber: 120,
        decimalNumberWithDefault: 10.25,
        dropDown: "option-3",
        radioType: "option-2",
        datePicker: ""
    };
}