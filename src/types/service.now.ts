export type ServiceNowConfig = {
    servicenow: {
        url: string;
        table: string;
    };
    columns: string[];
    ignoreColumns: string[];
};