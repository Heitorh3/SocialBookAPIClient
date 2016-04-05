package br.com.socialbook.client.aplicacao;

import br.com.socialbook.client.LivrosClient;
import br.com.socialbook.client.domanin.Livro;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

/**
 * Created by Heitor on 02/04/2016.
 */
public class Aplicacao {

    public static void main(String[] args) throws ParseException {
        LivrosClient livrosClient = new LivrosClient("http://localhost:8080","heitor","admin");


        Livro livro = new Livro();
        livro.setNome("AmazonWS");
        livro.setEditora("Amazon");

        SimpleDateFormat publicacao = new SimpleDateFormat("dd/MM/yyyy");
        livro.setPublicacao(publicacao.parse("01/08/2001"));
        livro.setResumo("Infra da melhor forma");


        String localizacao = livrosClient.salvar(livro);

        System.out.println("URI do livro salvo " + localizacao);
        List<Livro>listaLivros = livrosClient.listar();

        for(Livro livros : listaLivros) {
            System.out.println("Id: " + livros.getId() +" Nome: " + livros.getNome());
        }

        Livro livroBuscado = livrosClient.buscar(localizacao);

        System.out.println("Livro buscado " + "Id: " + livroBuscado.getId() + " Nome: " + livroBuscado.getNome() );
    }
}
