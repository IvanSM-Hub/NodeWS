import { yarg } from "./config/plugins/yargs.plugin";
import fs from 'fs';

const { b:base, l:limit, s:showTable } = yarg;

let message = '';
const separations = '=';
const header = `
${separations.repeat(30)}\n
       Tabla del ${base}\n
${separations.repeat(30)}\n
`;

for (let i = 1; i <= limit; i++) {
    message += `${base} x ${i} = ${base * i}\n`;
}

message = header + message;

if ( showTable ) console.log(message);

const outputsPath = 'outputs';
fs.mkdirSync(outputsPath, { recursive: true });
fs.writeFileSync(`${outputsPath}/tabla-${base}.txt`, message);

