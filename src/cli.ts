#!/usr/bin/env node

import { promises as fsPromises } from 'fs';
import { argv } from 'yargs';
import SymmetricMorph from 'symmetricmorph';
import { basename, resolve } from 'path';

async function main() {
    const inputPath = (argv.input || argv.i) as string;
    const outputPath = (argv.output || argv.o) as string;
    const password = (argv.password || argv.p) as string;
    const action = argv._[0] as string;

    if (!inputPath || !outputPath || !password || !action) {
        console.error('Usage: symmorph <encrypt|decrypt> --input <input> --output <output> --password <password>');
        console.error('   or: symmorph <encrypt|decrypt> -i <input> -o <output> -p <password>');
        process.exit(1);
    }


    const inputFullPath = resolve(inputPath);
    const outputFullPath = resolve(outputPath);

    if (action === 'encrypt') {
        const inputBuffer = await fsPromises.readFile(inputFullPath);
        const cipher = SymmetricMorph.fromPassword(password);
        const salt = cipher.getSalt();
        const encrypted = cipher.encrypt(new Uint8Array(inputBuffer));

        const result = new Uint8Array(salt.length + encrypted.length);
        result.set(salt, 0);
        result.set(encrypted, salt.length);

        await fsPromises.writeFile(outputFullPath, result);

        console.log(`✅ Encrypted successfully to ${basename(outputFullPath)}`);
    } else if (action === 'decrypt') {
        const inputBuffer = await fsPromises.readFile(inputFullPath);
        const inputBytes = new Uint8Array(inputBuffer);

        const salt = inputBytes.slice(0, 24);
        const encrypted = inputBytes.slice(24);

        const cipher = SymmetricMorph.fromPasswordWithSalt(password, salt);
        const decrypted = cipher.decrypt(encrypted);

        await fsPromises.writeFile(outputFullPath, Buffer.from(decrypted));

        console.log(`✅ Decrypted successfully to ${basename(outputFullPath)}`);
    } else {
        console.error('Action must be either encrypt or decrypt.');
        process.exit(1);
    }
}

main().catch((error) => {
    console.error('❌ Error:', error.message || error);
    process.exit(1);
});
