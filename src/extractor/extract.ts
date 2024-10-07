export function extractColumns(data: any[], columns: string[]): any[] {
    return data.map(record => {
        const extractedRecord: any = {};
        for (const column of columns) {
            if (column in record) {
                extractedRecord[column] = record[column];
            }
        }
        return extractedRecord;
    });
}
