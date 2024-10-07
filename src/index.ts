import {orchestrateServiceNow} from "./controller/orchestrate";


async function main() {
    try {
        await orchestrateServiceNow();
        console.log('Data extraction completed successfully.');
    } catch (error) {
        console.error('Error in ServiceNow data extraction workflow:', error);
    }
}

main();
