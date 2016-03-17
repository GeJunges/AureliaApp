import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class People {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.filmes = [];
        this.personagens = [];

    }

    activate() {
        this.httpClient.get('http://swapi.co/api/people/')
            .then(response => this.insiraPersonagens(response.content.results));
    }

    insiraPersonagens(personagens) {
        personagens.forEach(personagem => this.carregueFilmes(personagem))
        personagens.forEach(personagem => this.carregueEspecie(personagem))
        this.personagens = personagens;
    }

    carregueFilmes(personagem) {
        var filmesArray = personagem.films;
        personagem.films = [];

        filmesArray.forEach(filmeUrl => this.carregueFilme(personagem, filmeUrl));
    }

    carregueFilme(personagem, filmeUrl) {
        this.httpClient.get(filmeUrl)
            .then(response => personagem.films.push(response.content));
    }

    carregueEspecie(personagem) {
        var especieUrl = personagem.species;
        personagem.species = [];
        this.httpClient.get(especieUrl)
            .then(response => personagem.species.push(response.content));
    }
}

