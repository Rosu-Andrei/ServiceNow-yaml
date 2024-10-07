import {loadConfig} from '../config/config';
import {fetchServiceNowData} from "../fetcher/fetcher";
import {extractColumns} from "../extractor/extract";
import {saveContent} from "../storage/store";

export async function orchestrateServiceNow() {
    const config = loadConfig();
    const {servicenow, columns, ignoreColumns} = config;
    const {table} = servicenow;

    // Fetch data from ServiceNow
    const data = await fetchServiceNowData(table);

    // Extract only specified columns
    const extractedData = extractColumns(data, columns);

    // Save the extracted data to a JSON file
    await saveContent(extractedData, 'output/servicenow_data.json');
}
