export class Payment {
    //declare property mrupakan variable public
    // readonly client:string;
    // private details:string;
    // public amount:number;
    //kita gak peru tulis ulang property langsung di tulis 
    // di constructor
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
        //men-assign value dari instance lewat parameter ke 
        // property
        // this.client = c;
        // this.details = d;
        // this.amount = a;
        //note kalau uda shortcut di constructor gk perlu ditulis lagi 
        //assign parameter this udah mewakili
    }
    //buat method tampilkan hasil transaksi
    //dibawah ini format structure dari interface di gunakan oleh class
    // langsing di assign oleh kelass dgn kemblian return berupa string
    // note :ini structure di interface { format():string }
    format() {
        return `our client ${this.recipient} owe money $${this.amount} USD  for : ${this.details}`;
    }
}
