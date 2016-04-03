$(function() {
	$(".js-load-books").on('click', function() {
		$.ajax({
				url: "http://localhost:8080/livros",
				type: "get",
				headers: {
				    "Content-Type" : "application/json;charset=UTF-8",
					"Authorization" : "Basic YWRtaW46MTIzNDU2"
				},
				success: function(response) {
					desenhaTabela(response);
				}
		});
	})
});

function desenhaTabela(dados) {
	$(".js-books-table-body tr").remove();
	for(var i=0; i < dados.length; i++) {
		desenhaLinha(dados[i]);
	}
}

function desenhaLinha(linha) {
	var linhaTabela = $("<tr/>");
	$(".js-books-table-body").append(linhaTabela);
	linhaTabela.append("<td>" + linha.id + "</td>");
	linhaTabela.append("<td>" + linha.nome + "</td>");
	linhaTabela.append("<td>" + linha.editora + "</td>");
	linhaTabela.append("<td>" + linha.publicacao + "</td>");
	linhaTabela.append("<td>" + linha.resumo + "</td>");
}