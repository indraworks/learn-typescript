/*
pada bab sebelumnya kita sudah declare initialisasi variable dgn cara
men-assign variable dgn nilai
shingga utk selanjutnya aktu ngisi variable /edit,
 maka nilai variable mengikuti dari type data yg sudah ada berdasarkan
 typedata valueyg telah diiisikan
nah dibawah ini beda jadi kita ekplicit artinya kita declare inisialisasi
dgn meng-assign type datanya bukan nilai


*/
//explicit types
var character; // diinisialisasi string 
var age;
var isLoggedIn;
//stlah diinisialisasi atau explicit type maka nilai 
//variable yg diisikan harus sseusia dgn type yg dininislaisasi atay expl
age = 30; // ok benar
//age ='30' salah akan warning garis merah
isLoggedIn = true;
//explicit array
// let varArray:typeDataArray[]= []; // [] array kosong
//cara inisialisasi array harus ditulis type_array[]= inisialsasi array kosong[] ini dikasih saa dengan 
// dan kotak kosong array tanpa ini maka nanti gak bisa di push isi data
///// explicit arrays
var ninjas = [];
//isi data harus jenis type string kalau tidak error
//ditolak oleh compiler ts
ninjas.push('indra');
ninjas.push('lucky');
ninjas.push('teguh');
ninjas.push('yenni');
console.log('hasil isi ninjas', ninjas);
/// union explicit types pada aarray 
//ini brari bisa mendeclarre inisialisasi 
//bahwa type data dari array tsb bisa memiliki elenet2
//yg bermacam3 data >1 type data mis mix dari boolean|string|number
//dan diberi tanda kurung ()
//contoh : let arrayMix:(string|number|boolean )[]:[]
//inisialisasi harus dgn tandaurung(typearray1 |tryaray2|type array n)[]=[];
var arrayMix = [];
//isi arryaMixnya
arrayMix.unshift('tetangga1');
arrayMix.unshift(true);
arrayMix.unshift(98.5);
arrayMix.unshift(103);
arrayMix.unshift('71');
console.log('hasil ararayMix isi typdata mix :', arrayMix);
//union types non array
//bisa utk yg bukan array misalkan 
//sebuah varaible boleh diisi 2 jenis type data
// contoh uuid boleh disii nilai angka bentuk number atau 
//agnka bentuk string
var uuid;
uuid = "12";
console.log(typeof ("" + uuid));
console.log('uuid dgn string =', uuid);
uuid = 34;
console.log(typeof ("" + uuid));
console.log('uuid dgn integer =', uuid);
//type data object  
var myObj; //sbaiknya dinisialisasi kosong dulu 
//empty objetc
//atau sprti ini 
var myobj2;
myObj = {
    name: 'indra',
    id: '37350779602',
    address: 'jl.patimura 3'
};
//atau bisa langsung declare inisialisasi 
var objDeclareLangsung;
//nah jika mau edit atau tambah scara structure sudah 
//tidak bisa sebab utk object stelah inisialisasi
//maka harus disesiakan dgn structure dari object yg sudah di definiskan
//tipe data daro propertynya yg sudah fixpada saat diinisialisasi
//dibawah ini akan error jika didefiniskan beda 
//baik value atau keynya  obj= { key:value}
//kita declare object array dan setting array koosng dulu 
var siswa = [];
//kita masukan objdeclarelangsung segai aray dari ckumpulan object
objDeclareLangsung = {
    name: 'indra',
    status: 'single',
    skills: ['php', 'english', 'nodejs', 'typescript', 'MERN']
};
//nah kita isikan objec kita sekatang
siswa.push({ objDeclareLangsung: objDeclareLangsung });
//buat lagi assign nilai ke variable objke-2
objDeclareLangsung = {
    name: 'papi',
    status: 'married',
    skills: ['cooker', 'french', 'java', '3d vis', 'MERN']
};
//nah isikan lagi 
//nah kita isikan objec kita sekatang
siswa.push({ objDeclareLangsung: objDeclareLangsung });
//buat lagi ke-3
objDeclareLangsung = {
    name: 'tuti',
    status: 'single',
    skills: ['MUA', 'english', 'perl', 'C#', 'MERN']
};
//nah kita isikan objec kita sekatang
siswa.push({ objDeclareLangsung: objDeclareLangsung });
console.log('siswa =', siswa);
