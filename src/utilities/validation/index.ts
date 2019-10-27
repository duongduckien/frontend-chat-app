// Languages
import i18n from '../i18n';

export class Validation {

    public truckRules: any;

    constructor() {
        this.setTruckRules();
    }

    /**
     * Function set rules for truck
     */
    setTruckRules() {
        this.truckRules = {
            truckPlate: {
                required: {
                    message: i18n.t('TRUCK_PLATE_REQUIRED'),
                },
                format: {
                    pattern: /^[1-9][0-9][A-Z]{1}-[0-9]{5}/,
                    message: i18n.t('TRUCK_PLATE_FORMAT'),
                },
            },
            cargoType: {
                required: {
                    message: i18n.t('CARGO_TYPE_REQUIRED'),
                },
                isAnArray: {
                    message: i18n.t('CARGO_TYPE_REQUIRED'),
                },
                arrayLengthMax: {
                    value: 10,
                    message:  i18n.t('CARGO_TYPE_MAXIMUM', { number: '10' }),
                },
                arrayLengthMin: {
                    value: 1,
                    message:  i18n.t('CARGO_TYPE_REQUIRED'),
                },
            },
            driver: {},
            truckType: {
                number: {
                    pattern: /[0-9]/,
                    message: i18n.t('PRICE_NUMBER'),
                },
            },
            price: {
                required: {
                    message: i18n.t('PRICE_REQUIRED'),
                },
                number: {
                    pattern: /[0-9]/,
                    message: i18n.t('PRICE_NUMBER'),
                },
            },
            dimension: {},
            parkingAddress: {
                textLength: {
                    value: 500,
                    message: i18n.t('PARKING_ADDRESS_MAX_LENGTH', { number: '500' }),
                },
            },
            productionYear: {},
            status: {
                required: {
                    message: i18n.t('STATUS_REQUIRED'),
                },
            },
            description: {
                textLength: {
                    value: 200,
                    message: i18n.t('DESCRIPTION_MAX_LENGTH', { number: '200' }),
                },
            },
        };
    }

    validate(rules: any, value: any) {

        // value = {
        //     cargoType: [1, 8, 7],
        //     description: "dasdsafasf",
        //     dimension: {l: 4, w: 3, h: 5},
        //     parkingAddress: "sadsadas",
        //     price: 187878758,
        //     productionYear: 1970,
        //     status: 2,
        //     truckPlate: "30A-50493",
        //     truckType: 4,
        // };

        const errorMsg = {};

        for (const key in rules) {

            if (rules.hasOwnProperty(key)) {

                // console.log(key);

                const rule = rules[key];

                

                if (rule['required']) {
                    if (Array.isArray(value[key]) && value[key].length === 0) {
                        errorMsg[key] = rule['required']['message'];
                    } else if (!value[key] || value[key] === '' || value[key] === undefined)  {
                        errorMsg[key] = rule['required']['message'];
                    } else {
                        if (this.validateRulesWithOutRequired(rule, value, key)) {
                            errorMsg[key] = this.validateRulesWithOutRequired(rule, value, key);
                        }
                    }
                } else {
                    if (value[key] || value[key] !== undefined) {
                        if (this.validateRulesWithOutRequired(rule, value, key)) {
                            errorMsg[key] = this.validateRulesWithOutRequired(rule, value, key);
                        }
                    }
                }

            }

        }

        return errorMsg;

    }

    private validateRulesWithOutRequired(rule: any, value: any, key: string) {
        if (rule['format'] && !rule['format']['pattern'].test(value[key])) {
            return rule['format']['message'];
        } else if (rule['isAnArray'] && !Array.isArray(value[key])) {
            return rule['isAnArray']['message'];
        } else if (rule['arrayLengthMax'] && Array.isArray(value[key]) && value[key].length > rule['arrayLengthMax']['value']) {
            return rule['arrayLengthMax']['message'];
        } else if (rule['arrayLengthMin'] && Array.isArray(value[key]) && value[key].length < rule['arrayLengthMin']['value']) {
            return rule['arrayLengthMin']['message'];
        } else if (rule['number'] && !rule['number']['pattern'].test(value[key])) {
            return rule['number']['message'];
        } else if (rule['textLength'] && value[key]) {
            if (value[key].trim() !== '' && value[key].length > rule['textLength']['value']) {
                return rule['textLength']['message'];
            }
        }
        return false;
    }

    /**
     * Function validate fields
     * @param  {any} nameField
     * @param  {any} value
     */
    /*validate(rules: any, nameField: any, value: any, compareValue?: any) {

        if (rules.hasOwnProperty(nameField)) {

            const v = rules[nameField];

            if (v.hasOwnProperty('required') && (value === '' || value === null)) {

                return { isErr: true, msgErr: v.required.message };

            } else if (v.hasOwnProperty('format') && !v.format.pattern.test(value)) {

                return { isErr: true, msgErr: v.format.message };

            } else if (v.hasOwnProperty('number') && !v.number.pattern.test(value)) {

                return { isErr: true, msgErr: v.number.message };

            } else if (v.hasOwnProperty('arrayLength') && !v.upperCase.pattern.test(value)) {

                return { isErr: true, msgErr: v.upperCase.message };

            } else if (v.hasOwnProperty('lowerCase') && !v.lowerCase.pattern.test(value)) {

                return { isErr: true, msgErr: v.lowerCase.message };

            } else if (v.hasOwnProperty('minLength') && value.length < v.minLength.value) {

                return { isErr: true, msgErr: v.minLength.message };

            } else if (v.hasOwnProperty('maxLength') && value.length > v.maxLength.value) {

                return { isErr: true, msgErr: v.maxLength.message };

            } else if (v.hasOwnProperty('match') && value !== compareValue) {

                return { isErr: true, msgErr: v.match.message };

            } else {

                return { isErr: false, msgErr: '' };

            }

        } else {

            return { isErr: false, msgErr: '' };

        }

    }*/

}
