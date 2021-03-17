export class ListTemplate {
    //buat constructor 
    //kmudian pasing instansiate list yg akan dibuat nah ini 
    //type data yg dipasing di typescrpt utk li ada dlm HTMLUListElement
    constructor(container) {
        this.container = container;
    }
    //method dari class
    render(item, heading, pos) {
        //li element
        const li = document.createElement('li');
        //h4 element
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        //p elemet
        const p = document.createElement('p');
        p.innerText = item.format(); //ambilmetode format dari class
        li.append(p);
        //utk naruh di ul aas atau bawah penempatan li -nya
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
/*jadi kit abuat create class ListTemplate utk type script
 object type tiap element sudah ada namnay defaultnya
 contoh ul /li element = HTMLULListElement
 class ListTemplate brisi contructor yg instansite sbuah list
 
 kemudian punya metode rnder yg utk tampilkan container tadi satu buah block UL/li
 yang isinya :
 -<p>  paragraf dimana passing paramternya diberi nama item yg dipasing dype data adalah hasFormater
 -heading yg nanti dipasing paramter berupa kata invoice/payment
          dari select combobox
 -post: dimana dipasing start atau end utk pemilihan
        tempat dimana di passing container HTMLUListelement
        apakah urutannya dari paling atas(prepend)  atau palign bawah (append)


*/ 
