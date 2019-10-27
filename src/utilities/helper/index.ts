
export class Helper {

    listYears() {
        const arrYears = [];
        arrYears.push('None');
        for (let i = 1970; i < 2030; i++) {
            arrYears.push(i);
        }
        return arrYears;
    }

    listStatus() {
        const arrStatus = ['None', 'In-use', 'New', 'Stopped'];
        return arrStatus;
    }

    /**
     * Function check is number
     * @param  {any} value
     */
    isNumber(value: any) {
        if (!isNaN(parseInt(value, 10))) {
            return true;
        }
        return false;
    }

    /**
     * Function reverse a string
     * @param  {string} str
     */
    reverseString(str: string) {
        return str.split('').reduce((ret, character) => (character + ret));
    }

    
    /**
     * Function replace character
     * @param  {string} str
     */
    replaceChar(str: string) {
        return str.replace(/,/g, '');
    }
    
    /**
     * Function add symbol to string
     * @param  {string} data
     * @param  {string} symbol
     */
    addSymbol(data: string, symbol: string) {

        const newData = this.replaceChar(data);
        const length = newData.length;

        if (length > 3) {

            const result = Math.floor(length / 3);
            const balance = length % 3;
            const numSymbol = (balance === 0) ? result - 1 : result;
            let str = '';
            let cnt = 0;
            let cntSymbol = 0;

            for (let i = length - 1; i >= 0; i--) {
                cnt++;
                str += newData.charAt(i);
                if (cnt === 3 && cntSymbol < numSymbol) {
                    cntSymbol++;
                    str += symbol;
                    cnt = 0;
                }
            }

            return this.reverseString(str);

        }

        return newData;

    }

}