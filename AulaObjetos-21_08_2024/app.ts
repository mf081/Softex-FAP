class Post {
    private _userName: string;
    private _titulo: string;
    private _dataPostagem: Date;
    private _numeroCurtidas: number;


    constructor(userName: string, titulo: string){
        this._userName = userName;
        this._titulo = titulo;
        this._dataPostagem = new Date();
        this._numeroCurtidas = 0;
    }

    incremetarCurtida(){
          this._numeroCurtidas +=1;

    }

    get userName() {
        return this._userName;
    }
}

let post1 = new Post("Mateus", "Foto 1");
console.log(post1.userName);

post1.incremetarCurtida();
console.log(post1);



