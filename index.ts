export default function split_non_numeric(str: string): string[] {
    let nonNumericValue: string = '';
    let numericValue: string = '';
    const intValue: number = parseInt(str, 10);
    const matchPattern = str.match(new RegExp(intValue.toString()));

    if (matchPattern === null) {
        numericValue = '';
        nonNumericValue = str;
    } else {
        if (matchPattern.index && matchPattern.index > 0) {
            numericValue = str.substr(0, matchPattern.index + matchPattern[0].length);
            nonNumericValue = str.substr(matchPattern.index + matchPattern[0].length);
        } else {
            numericValue = str.slice(matchPattern.index, matchPattern[0].length);
            nonNumericValue = str.substr(matchPattern[0].length);
        }
    }

    return [numericValue, nonNumericValue];
}
