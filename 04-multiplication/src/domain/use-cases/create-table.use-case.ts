
export interface CreateTableUserCase {
    execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
    base: number;
    limit?: number;
}


export class CreateTable implements CreateTableUserCase {

    constructor(
        // Inyección de dependencias
    ) {}

    execute({ base, limit = 10 }: CreateTableOptions): string {

        let outputMessage = '';

        for (let i = 1; i <= limit; i++) {
            outputMessage += `${base} x ${i} = ${base * i}`;
            if ( i < limit ) outputMessage += '\n';
        }
        
        return outputMessage;
    
    }

}
