const jovem_mistico = {
	nome: "Takeo",
	signo: "Virgem",
	idade: 31,
	louco: true,
	parentes: ["Eloá", "Tateyuki"],
}

console.log(jovem_mistico.nome, jovem_mistico.signo);
console.log(jovem_mistico);

const pessoa = ["Takeo", 32, "Desenvolvedor"];

console.log(pessoa[0], pessoa[1]);
console.log(pessoa);
console.log(jovem_mistico.parentes[0]);

pessoa.push(jovem_mistico);
console.log(`\n\n`, pessoa);
