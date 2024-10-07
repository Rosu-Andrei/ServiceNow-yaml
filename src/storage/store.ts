import * as fs from 'fs';
import * as path from 'path';

// Save extracted content to a JSON file
export async function saveContent(data: any[], filePath: string) {
    const dir = path.dirname(filePath);
    await fs.promises.mkdir(dir, {recursive: true});
    await fs.promises.writeFile(filePath, JSON.stringify(data, null, 2));
}
