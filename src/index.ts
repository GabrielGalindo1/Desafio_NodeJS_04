/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { rawListeners } from "process";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */
	class Aluno{
		nome = '';
		idade = 0;
		nota = 0;
	}
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05
	
	const readline = require('readline-sync')

	const qntAlunos = 3;

	let i =0;
	let listaDeAlunos: Aluno [] = [];
		
	for(i= 0; i < qntAlunos; i++){
	const aluno = new Aluno();
		 aluno.nome = readline.question('Nome do Aluno?\n')
		 aluno.idade = readline.question('Idade do Aluno?\n')
		 aluno.nota = parseInt (readline.question('Nota do Aluno?\n'))
		 listaDeAlunos.push(aluno)
		 console.log(listaDeAlunos)	
	}
	const sumall = listaDeAlunos.map(item => item.nota).reduce((prev, curr) => prev + curr, 0);
	console.log('A soma das notas e:',sumall);
});