import {ServiceNowConfig} from "../types/service.now";
import * as fs from "fs";
import * as yaml from 'js-yaml'

export function loadConfig(): ServiceNowConfig {
    const fileContents = fs.readFileSync('../serviceNow.yaml', 'utf8');
    return yaml.load(fileContents) as ServiceNowConfig;
}