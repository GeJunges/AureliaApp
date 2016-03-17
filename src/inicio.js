import {HttpClient} from 'aurelia-http-client';

export class Inicio {
    static inject() {
        return [HttpClient];
    }

    constructor(httpClient) {
        this.httpClient = httpClient;
        this.post = [];
        this.subreddit_url = "http://reddit.com/r/funny.json";
    }

    loadPosts() {
        return this.httpClient.jsonp(this.subreddit_url, 'jsonp')
            .then(r => {
                this.posts = r.response.data.children;
            });
    }

    activate() {
        return this.loadPosts();
    }
}