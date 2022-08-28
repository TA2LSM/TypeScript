// Proje için kaynak site: https://khalilstemmler.com/blogs/typescript/node-starter-project/
// npm run start:dev >> work with .ts file without compiling it to build\index.js file

// W3Schools
// --- (01) --------------------------------------------------------------------------
// // Implicit Type
// let firstName = "Semih";
// firstName = 33;       // HATA
// // Konsoldan "npx tsc" komutu ile derlemede hata verir.
// // Derlemeden önce daha kodu yazarken de hata olarak gösterilecektir.
// console.log(firstName);

// // Explict Type
// let lastName: string = "SENOL";
// lastName = 'TEST'   // OK
// // lastName = 23;   // HATA
// console.log(lastName);

// --- (02) --------------------------------------------------------------------------
// "json", tipi belirsiz bir değişken. Buna sonradan number ve string atanabilir.
// Editörde ve derlemede HATA alınmaz. JSON.parse genelde obje döner ama buradaki
// sayı da olabilir.
// let json = JSON.parse("55");    // json'a 55 sayısı atanır
// // json = 'TEST';       // json'a TEST string'i atanır tipi string olur
// console.log(typeof json);

// --- (03) --------------------------------------------------------------------------
// Special Types
// Type: any >> tip kontrolünü geçersiz kılar.
// let u = true;
// let a: boolean = true;
// a = 34;         // HATA
// u = "string";   // HATA: Type 'string' is not assignable to type 'boolean'.
// Math.round(u);  // HATA: Argument of type 'boolean' is not assignable to parameter of type 'number'.

// let v: any = true;
// v = "string";   // OK
// console.log(Math.round(v));  // OK. ÇIKTI >> NaN

// Type: unknown >> bir değişkene atanacak veri tipi bilinmiyorsa, örneğin runtime'da geliyorsa kullanılır
// let w: unknown = 1;
// w = "string"; // no error
// w = {
//   runANonExistentMethod: () => {
//     console.log("I think therefore I am");
//   }
// } as { runANonExistentMethod: () => void }

// // How can we avoid the error for the code commented out below when we don't know the type?
// //w.runANonExistentMethod(); // Error: Object is of type 'unknown'.

// if(typeof w === 'object' && w !== null) {
//   (w as { runANonExistentMethod: Function }).runANonExistentMethod();
// }
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting

// Type: never >> effectively throws an error whenever it is defined
// let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.

// Type: undefined & null
// let y: undefined = undefined;
// let z: null = null;

// console.log(y, z);

// --- (04) --------------------------------------------------------------------------
// https://www.w3schools.com/typescript/typescript_arrays.php

//***********************************************************************************/
// Mosh Hamedani - The Ultimate TypeScript                                  24.08.2022
//***********************************************************************************/
// JavaScript kısaca JS, TypeScript kısaca TS olarak geçecektir.
// JavaScript Compiler kısaca JSC, TypeScript compiler kısaca TSC olarak geçecektir.

//------------------------------------------------------------------------------------
// LESSON 07
//------------------------------------------------------------------------------------
// let age: number = 39;
// //age = 'a';      // HATA
// if(age < 50)
//     age += 10;
// console.log(age)

//------------------------------------------------------------------------------------
// LESSON 11: Built-in types
//------------------------------------------------------------------------------------
// JavaScript: number, string, boolean, null, undefined, object
// TypeScript: JS + any, unknown, never, enum, tuple

// let sales: number = 123_456_789;
// let sales2 = 123_456_789; //Inferring type from annocation (atanan değerden anlam çıkartma)
// //TSC, atanan değerden sales2'nin number olduğunu anlayacaktır.

// let course: string = 'TypeScript';
// let is_published: boolean = true;

// // Type: any (mümkün olduğunca KULLANMAMAK GEREKİYOR)
// let level; // TSC level'in type'ını any olarak görür
// level = 1;
// level = 'text'; // bu işlem, değişkeni aynı JS'deki gibi kullanmak demek. TS'nin mantığına ters

// //function render(document) {...} // HATA
// function render(document: string) {
//   console.log(document);
// }

//------------------------------------------------------------------------------------
// LESSON 13: Arrays
//------------------------------------------------------------------------------------
// let numbers = [1, 2, '3']; //JS
// let numbers2: number[] = [1, 2, 3]; //TS
// // infer özelliğinden dolayı ": number[]" kısmı olmasa da TSC tipi anlar. Buraya numbers'daki gibi
// // '3' elemanı geçilemez.

// // Tip bildirimini kaldırmak sakıncalı olabilir. Boş bir array oluştururken bu array'de sadece sayı
// // olması isteniyorsa tip bildirimi koyulmadığında TSC bu array'i "any type" olarak alacaktır.
// // Bu nedenle boş dizi tanımlamalarında dizideki elemanların tipleri istenen değer dışında
// // atanamasın diye aşağıdaki gibi tipini belirtmek gerekir.
// let numbers3: number[] = []; // number[] tipinden olur
// numbers3[0] = 1; //OK
// // numbers3[1] = '1'; //HATA

// // numbers2 dizisi sadece sayılardan oluştuğu için . erişiminde sadece sayılarla ilgili metotlar
// // listelenir. Bu da TS'nin bir avantajıdır. Bir sürü metotla kafa karıştırmaz.
// const numbers4: string[] = numbers2.map(e => e.toString());
// console.log(numbers4);

//------------------------------------------------------------------------------------
// LESSON 14: Tuples
//------------------------------------------------------------------------------------
// Uzunluğu ve her elemanının tipi belli olan dizi tanımlamak için kullanılır.

// let user: [number, string] = [1, 'TA2LSM'];
// ilk eleman number, ikincisi string olan dizi tanımlama. 3. elemanı yazarsak
// hata verir. Dizi elemanlarına tek tek erişilirse ve . notasyonu ile metotlara
// bakılırsa number ve string için ayrı metotlar görülebilr. Oldukça güzel bir
// özellik. TSC ile derlediğimizde klasik JS array olarak derlenir.

// Genelde 2'den fazla elemanlı dizi oluşturmada kullanılmazlar. Nedeni de
// let user: [number, string, boolean, number] = [1, 'TA2LSM', true, 0];
// şeklinde tanımlı bir dizide eleman sayısı arttıkça eklenen elemanların
// ne anlama geldiği, neden kullanıldığı çok açık olmayacaktır.

// Aşağıdaki özelliğin normalde hata vermesi lazım.
// Henüz çözülmemiş bir sorun bu. (25.08.2022)
// user.push(1);

// let user2: [number, string];
// user2[0] = 1;   // HATA

//------------------------------------------------------------------------------------
// LESSON 15: Enums
//------------------------------------------------------------------------------------
// Enum tanımlamasında PascalCase kullanılır
// const enum Sizes {
//   Small = 1,
//   Medium,
//   Large,
//   ExtraLarge = 10,
// }

// buraya "const" yazmazsak TSC'nin derlediği js dosyasında çok gereksiz hatta "var" kullanılan
// kodlar türetilir. konsola "tsc" yazıp iki durumu da derleyip görebilirsiniz.
// const enum Sizes {
//   Small = 'S',
//   Medium = 'M',
//   Large = 'L',
//   ExtraLarge = 'XL',
// }

// // console.log(Sizes.ExtraLarge);
// let mySize: Sizes = Sizes.ExtraLarge;
// console.log('My size is,', mySize);

//------------------------------------------------------------------------------------
// LESSON 16: Functions
//------------------------------------------------------------------------------------
// // // return type void
// // function calculateTax0(income: number) {
// //   //...
// // }

// // // return type number olarak otomatik şekilde görülür ama fonksiyon içinde NaN değer
// // // dönme şansı da var. Bu nedenle aşağıdaki gibi yazılmalı
// // function calculateTax1(income: number) {
// //   return 0;
// // }

// function calculateTax(income: number, taxYear: number): number {
//   //   let x = 23;
//   //   // aşağıdaki gibi kullanılmazsa hata verir (local variable ile ilgili ayardan dolayı)
//   //   console.log(x);

//   //return 0; >> burası yazılmazsa yukardaki ...): number kısmı hata gösterir
//   //return 'a'; >> number hariç veri dönerse bu kısım hata gösterir

//   if (taxYear < 2022) console.log('Old tax year');
//   else console.log('New tax year');

//   if (income < 50_000) return income * 1.2;
//   // alttaki return olmasa yine yukardaki ...): number kısmı hata gösterir
//   // nedeni de eğer koşul gerçekleşmezse "undefined" dönme ihtimalidir.
//   return income * 1.3;
// }

// // Yukarıdaki tanımlamaya göre fonksiyona iki parametre de geçilmelidir.
// // yoksa hata alınır. Ne eksik ne de fazla parametre geçilemez.
// calculateTax(65_000, 2021);

// // taxYear burada optional oldu. Ama kullanıldığı yerde undefined olarak gelirse
// // hata almayalım diye tanımlıysa ya da 2000 değerini kullan dedik. Bu yaklaşım
// // yerine alttaki tercih ediliyor
// // function calculateTax2(income: number, taxYear?: number): number {
// //   if ((taxYear || 2000) < 2022) console.log('Old tax year');
// //   else console.log('New tax year');

// //   if (income < 50_000) return income * 1.2;
// //   return income * 1.3;
// // }

// // BEST PRACTISE
// function calculateTax2(income: number, taxYear = 2000): number {
//   if (taxYear < 2022) console.log('Old tax year');
//   else console.log('New tax year');

//   if (income < 50_000) return income * 1.2;
//   return income * 1.3;
// }

// calculateTax2(65_000);
// calculateTax2(65_000, 2023);

//------------------------------------------------------------------------------------
// LESSON 17: Objects
//------------------------------------------------------------------------------------
// let employee = { id: 1 };
// employee.name = 'Semih'; // HATA

// Her kullanıcının adı olmak zorunda bu parametre optional geçilemez.
// ama isAdmin parametresi optional geçilebilir.
// let employee: {
//   readonly id: number;
//   name: string;
//   isAdmin?: boolean;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: '',
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// employee.name = 'Semih';
// employee.isAdmin = true;
// // employee.id = 1; // HATA: id is readonly
// console.log(employee);

//------------------------------------------------------------------------------------
// LESSON 18: Advanced Types
//------------------------------------------------------------------------------------
// Type aliases, Unions and intersections, Type narrowing, Nullable types,
// The unknown type, The never type

// Type Aliases (Tip tanımlaması)
// Aşağıdaki tanımlamada bazı sıkıntılar var:
// (1): Yeni bir employee yaratmak istediğimizde tanımlamayı tekrar etmemiz gerekiyor
// employee: {...} kısmını tekrar etmek DRY prensibine aykırı (Don't Repeat Yourself)
// (2): Yeni bir employee oluşturulduğunda bazı farklı özellikleri farklı olabilir.
// (3): Tanımlamayı okuması ve anlaması biraz zor.

// Yeni tip tanımlamada PascalCase kullanılıyor.
// type Employee = {
//   readonly id: number;
//   name: string;
//   isAdmin?: boolean;
//   retire: (date: Date) => void;
// };

// let employee: Employee = {
//   id: 1,
//   name: 'Semih',
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// // Union Type
// // weight: number | string kısmı union
// // weight. yapılırsa SADECE number ve string için ortak metotlar görülür
// function kgToLbs(weight: number | string): number {
//   // Narrowing
//   // Burada TSC weight'in number olduğunu biliyor
//   // . erişimi ile ona göre metotlar çıkaracaktır
//   if (typeof weight === 'number') {
//     return weight * 2.2;
//   } else return parseInt(weight) * 2.2;
// }

// console.log(kgToLbs(10));
// console.log(kgToLbs('10kg'));

// Intersection Types
// hem number hem de string olan bir obje
// let weight: number & string;
// type Draggable = {
//   drag: () => void;
// };

// type Resizable = {
//   resize: () => void;
// };

// // Taşınabilen ve boyutu değiştirilebilen bir tip (UIWidget)
// type UIWidget = Draggable & Resizable; // Intersection Type

// let textBox: UIWidget = {
//   drag: () => {},
//   resize: () => {},
// };

// Literal (exact or specific value) Types
// let quantity: 50 = 51;  // HATA sadce 50 olabilir
// let quantity: 50 | 100 = 101; // HATA sadce 50 ya da 100 olabilir
// Union kullanarak aşağıdaki gibi tanımlanabilir
// type Quantity = 50 | 100;
// let quantity: Quantity = 100;

// type Metric = 'cm' | 'inch';
// let lenght: Metric = 'cm';

// Nullable Types
// function great(name: string) {
//   if (name) console.log(name.toUpperCase());
//   else console.log('Hello');
// }

//great('semih');
// great(null); // HATA
// great(undefined); // HATA
// name: string | null | undefined olarak yazılırsa hata alınmaz.
// Ama bu TSC mantığına ters

// Optional Chaining
// type Customer = {
//   birthday: Date;
// };

// function getCustomer(id: number): Customer | null | undefined {
//   return id === 0 ? null : { birthday: new Date() };
// }

// let customer = getCustomer(0);
// // if (customer !== null && customer !== undefined) console.log(customer.birthday);
// // Optional Property Access Parameter (OBJE'ler için)
// console.log(customer?.birthday);

// type Customer2 = {
//   birthday?: Date;
// };

// let customer2 = getCustomer(0);
// console.log(customer2?.birthday?.getFullYear());

// // Optional Element Access Parameter (ARRAY'ler için)
// // console.log(customers?.[0].birthday);

// // Optional call
// // let log: any = (message: string) => console.log(message);
// // değilde şöyle tanımlansa:
// let log: any = null;
// // log('a'); // HATA
// log?.('a'); // log gerçek bir fonksiyonu referans gösterirse yani yukardaki gibiyse çalışır

// Nullish Coaelscing Operator
// let speed: number | null = null;
// let ride = {
//   //Falsy (undefined, null, '', false, 0)
//   //   speed: speed || 30, // speed 0 ise sıkıntı olur aşağıdaki gibi olmalı
//   //   speed: speed !== null ? speed : 30,   // standard JavaScript
//   speed: speed ?? 30, // TypeScript (Nullish Coaelscing Operator)
//   // speed, null ya da undefined değilse o değeri kullan, aksi durumda 30 değerini kullan
// };

// Type Assertions
// document, JS'de bir döküman ya da web sayfasına erişim için kullanılıyor.

// let message = document.getElementById('message');
// bu şekilde tanımlanırsa message'ın tipi HTMLElement ya da null olur.
// message.value() değerine burada erişilemez !!!
// daha kesin bir atama için aşağıdaki gibi yapılmalıdır.

// HTMLElement, javascript class'ı. Her tür HTML element'ini barındırıyor
// HTMLInputElement ...vs element tipleri daha kesin tip tanımlamalarıdır

// let message = document.getElementById('message') as HTMLInputElement;
// Veri tipi belirleme. Bu tipten veri alınmazsa hata alınır, program göçer

// let message = <HTMLInputElement>document.getElementById('message');
// // Veri tipi dönüştüme (casting)

// console.log(message.value);

// The unknown type
// eğer document'in aşağıdaki metotları yoksa program göçer
// function render (document: any) {
//     document.move();
//     document.fly();
//     document.whateverWeWant();
// }

// type Person = {
//   name: string;
//   phone: number;
// };

// function render(document: unknown) {
//   // Aşağıdaki gibi bir tip kontrolü yapıp (Type Narrowing) ona göre işlem yaptığımız an

//   // TSC document tipini number olarak varsayar ve toString() işlevi için hata vermez
//   if (typeof document === 'number') document.toString();
//   // TSC document tipini number olarak varsayar ve toUpperCase() işlevi için hata vermez
//   if (typeof document === 'string') document.toUpperCase();

//   // document.toString(); // burada .toString() için öneri verilmez. Tip unknown hatası verir

//   // "typeof" sadece "primitive" tiplerde tip kontrolü için kullanılabilir.
//   // Custom type'lar için "instanceof" kullanılmalıdır.
//   //   if (document instanceof Person) {
//   //     //...
//   //   }
// }

// The never type
// Fonksiyon dönüş tipi never olarak tanımlanırsa aşağıdaki console.log() kısmı
// soluk olarak gözükür. Editör o satıra asla gelinemeyeceğini bildirir.
// function processEvents(): never {
//   while (true) {
//     // Read a message from a queue
//   }
// }

// // Hata fırlatıldığında uygulama göçer ve kod yürütülmeyeceği için dönüş tipi
// // olarak never koyulmalıdır.
// function reject(message: string): never {
//   throw new Error(message);
// }

// // processEvents();
// reject('...');
// console.log('System message');

// ------------------------------------------------------------------------------------
// Object-oriented Programming
// Classes, Constructors, Properties and methods, Access control keywords,
// getters and setters, static members, Index signatures, Inheritance,
// Polymorphism, Abstract classes

// Creating Class
// class Account {
//   //   readonly id: number; // id never changes
//   //   owner: string;
//   //   private _balance: number;
//   //   nickname?: string; // optional parameter

//   //   // Account class' constructor
//   //   constructor(id: number, owner: string, balance: number) {
//   //     this.id = id;
//   //     this.owner = owner;
//   //     this._balance = balance;
//   //     // class içinde private olarak tanımlı değişkenlerin başına _(underscore) konur.
//   //   }

//   // Yukarıdaki tanımlamanın kısa yolu aşağıdaki şekilde yazılabilir
//   // Class içinde private olarak tanımlı değişkenlerin başına _(underscore) konur.
//   // Account class' constructor
//   constructor(public readonly id: number, public owner: string, private _balance: number) {}

//   deposit(amount: number): void {
//     const val = this._balance + amount;
//     if (val < 0) {
//       console.log('Not enough amount!');
//       // throw new Error('Invalid amount');
//       return;
//     }

//     let tax: number = 0;
//     if (amount > 0) {
//       tax = this.calculateTax(amount);
//     }

//     this._balance += amount - tax;

//     // Record a transaction
//     //...
//   }

//   private calculateTax(amount: number): number {
//     return amount * 0.01;
//   }

//   // getBalance METHOD
//   //   getBalance(): number {
//   //     return this._balance;
//   //   }

//   // GETTER
//   get balance() {
//     return this._balance;
//   }

//   // SETTER
//   //   set balance(value: number) {
//   //     if (value < 0) throw new Error('Invalid balance!');
//   //     this._balance = value;
//   //   }
// }

// // Creating Object from Class
// let account = new Account(1, 'Semih', 0); // object
// // account.id = 34; // HATA (readonly)

// account.deposit(100);
// account.deposit(-10);

// // account.balance = 0; // private olduğu için hatayla değiştirilemez.
// // bu işlemi direkt olarak yapamamamız lazım. deposit() metodu üzerinden yapıp
// // her işlemde transaction kaydı tutumak istiyoruz. Bu nedenle ACCESS MODIFIERS
// // kullanılır. 3 çeşit access modifier var. Public, private, protected

// // console.log('Balance:', account._balance);  // burası artık private tanımlamadan dolayı hata verir
// // console.log(account.getBalance()); // bu şekilde çözüm üretilebilir ya da getter/setter kullanılır.
// console.log(account.balance); // getter

// // console.log(typeof account); // object
// console.log(account); // object
// console.log(account instanceof Account); // true (objelerle uğraşırken HER ZAMAN instanceof kullanılır)

// Index Signatures
// Bir objeye dinamik olarak veri eklemek için kullanılır
// class SeatAssignment {
//   // A1, A2, ...
//   // Ali, Ayşe, Hasan, ...
//   // Index Signature Property
//   [seatNumber: string]: string;
// }

// let seats = new SeatAssignment();
// // Aşağıdaki gibi de yazılabiliyor.
// // (seats.A1 = 'Ali'), (seats.A2 = 'Ayse'), (seats.A3 = 'Hasan');
// seats.A1 = 'Ali'; // seats['A1'] = Ali; ile aynı
// seats.A2 = 'Ayse';
// seats.A3 = 'Hasan';
// console.log(seats);

// Static Members
// Uber gibi düşünülürse
// class Ride {
//   //   activeRides: number = 0;
//   //   // constructor olmadan burada direkt değer atandı (initialize)

//   //   start() {
//   //     ++this.activeRides;
//   //   }

//   //   stop() {
//   //     if (this.activeRides > 0) --this.activeRides;
//   //   }

//   //------------------------------------------
//   private static _activeRides: number = 0;
//   // static ile activeRides sadece Ride class'ına ait oldu. Aşağıda
//   // tanımlanacak ride objelerine ait değil. Bu nedenle direk Ride
//   // class'ı üzerinden erişmemiz lazım

//   start() {
//     ++Ride._activeRides;
//   }

//   stop() {
//     if (Ride._activeRides > 0) --Ride._activeRides;
//   }

//   // bu getter ride objesine ait olmasın Ride class'ına ait olsun diye
//   // başına static yazılmalıdır
//   static get activeRides() {
//     return Ride._activeRides;
//   }
// }

// // aşağıda 2 ayrı obje yaratılıyor ve ikisi de farklı hafıza alanlarında olduğundan
// // global olarak kaç aktif sürüş var görülemez. Bu sorunu çözmek için static keyword
// // kullanılır. Yukarısı buna göre düzenlendi. Ayrıca her sürüşün başlangıç konumu,
// // başlangıç saati, hedef konumu ...vs olabilir.
// let ride1 = new Ride();
// ride1.start();

// let ride2 = new Ride();
// ride2.start();

// // Ride.activeRides = 10; // yanlışlıkla böyle erişilemesin diye private yapıldı

// // console.log(ride1.activeRides, ride2.activeRides);
// console.log(Ride.activeRides);

// Inheritance: Ortak kullanılacak class'ları diğer class'lar
// içine dahil etme ve bunlardan obje türetme
// Parent / Base ya da Super Class deniyor
// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   get fullname() {
//     return this.firstName + ' ' + this.lastName;
//   }

//   walk() {
//     console.log('walking...');
//   }

//   talk() {
//     console.log('talking...');
//   }
// }

// // let person = new Person('Semih', 'SENOL'); // person object
// // console.log(person.fullname);

// // Child / Derived ya da Sub Class deniyor
// class Student extends Person {
//   // Parent class'ı çağırmamız lazım. Çünkü orada bir Person oluşturulacak
//   // Buraya girilen bilgilerden diğer class'ı ilgilendirenler super(...) içine
//   // parametre olarak verilmelidir. firstName ve lastName, Person class'ında
//   // public olarak tanımlı olduğu için buraya public yazmaya gerek yok.
//   constructor(public studentId: number, firstName: string, lastName: string) {
//     super(firstName, lastName);
//   }

//   takeTest() {
//     console.log('taking a test...');
//   }
// }

// let student = new Student(1764, 'Ali', 'Poyraz'); // student object
// console.log(student);

// class Teacher extends Person {
//   constructor(public phoneNumber: string, firstName: string, lastName: string, public expertise: string) {
//     super(firstName, lastName);
//   }

//   teach() {
//     console.log('teaching...');
//   }
// }

// let teacher = new Teacher('1234567', 'John', 'Smith', 'English');
// console.log(teacher);
// console.log(teacher.fullname);

// Method Overriding: Mesela Teacher class'ında öğretmen isimlerinin önüne
// ünvan yazmak istesek ne olacak?
// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   get fullname() {
//     return this.firstName + ' ' + this.lastName;
//   }

//   walk() {
//     console.log('walking...');
//   }

//   talk() {
//     console.log('talking...');
//   }
// }

// class Student extends Person {
//   constructor(public studentId: number, firstName: string, lastName: string) {
//     super(firstName, lastName);
//   }

//   takeTest() {
//     console.log('taking a test...');
//   }
// }

// class Teacher extends Person {
//   constructor(
//     public phoneNumber: string,
//     firstName: string,
//     lastName: string,
//     public expertise: string,
//     public academicTitle: string,
//   ) {
//     super(firstName, lastName);
//   }

//   // Parent class'taki fullname metodu işlevsiz. Buradaki onun yerine yürütülür.
//   // Fakat override yazılmasa da burada aynı sonucu alıyoruz çünkü super.fullname
//   // kısmını da kullandık. Tamamen farklı birşeyler yapsaydık -örneğin aşağıdaki
//   // yorum olarak bırakılmış kısımda soy isim önce geliyor- o zaman override
//   // unutulduğu için sıkıntı olacaktı. tsconfig.json içinden bu ayarı açabiliriz.
//   override get fullname() {
//     // return this.academicTitle + '. ' + this.lastName.toUpperCase() + ' ' + this.firstName;
//     return this.academicTitle + '. ' + super.fullname;
//   }

//   teach() {
//     console.log('teaching...');
//   }
// }

// let teacher = new Teacher('1234567', 'John', 'Smith', 'English', 'Prof');
// // console.log(teacher);
// console.log(teacher.fullname);

// Polymorphism: Many Form anlamına geliyor
// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   get fullName() {
//     return this.firstName + ' ' + this.lastName;
//   }

//   walk() {
//     console.log('walking...');
//   }

//   talk() {
//     console.log('talking...');
//   }
// }

// class Student extends Person {
//   constructor(public studentId: number, firstName: string, lastName: string) {
//     super(firstName, lastName);
//   }

//   takeTest() {
//     console.log('taking a test...');
//   }
// }

// class Teacher extends Person {
//   constructor(
//     public phoneNumber: string,
//     firstName: string,
//     lastName: string,
//     public expertise: string,
//     public academicTitle: string,
//   ) {
//     super(firstName, lastName);
//   }

//   override get fullName() {
//     // return this.academicTitle + '. ' + this.lastName.toUpperCase() + ' ' + this.firstName;
//     return this.academicTitle + '. ' + super.fullName;
//   }

//   teach() {
//     console.log('teaching...');
//   }
// }

// class Principal extends Person {
//   override get fullName() {
//     // return this.academicTitle + '. ' + this.lastName.toUpperCase() + ' ' + this.firstName;
//     return 'Principal ' + super.fullName;
//   }
// }

// function printNames(people: Person[]) {
//   // her iterasyonda person objesi farklı bir obje formuna geçiyor (polymorhism)
//   for (let person of people) console.log(person.fullName);
// }

// // let teacher = new Teacher('1234567', 'John', 'Smith', 'English', 'Prof');
// // console.log(teacher);
// // console.log(teacher.fullName);

// printNames([
//   new Student(1, 'Mary', 'Alexander'),
//   new Teacher('1234567', 'John', 'Smith', 'English', 'Prof'),
//   new Principal('Semih', 'Senol'),
// ]);

// Private vs Protected members
// protected keyword'ünün kullanılması pek önerilmez.
// İleri seviye yazılımcılar için bir özellik
// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   get fullName() {
//     return this.firstName + ' ' + this.lastName;
//   }

//   protected walk() {
//     console.log('walking...');
//   }

//   talk() {
//     console.log('talking...');
//   }
// }

// class Student extends Person {
//   constructor(public studentId: number, firstName: string, lastName: string) {
//     super(firstName, lastName);
//   }

//   public takeTest() {
//     this.walk(); //  super.walk(); ile de erişilebiliyor

//     // this.talk();
//     // yukarda talk için private kullanırsak burada erişemeyiz ama private
//     // yazıp bir yerden erişmeyince de hata veriyor

//     console.log('taking a test...');
//   }
// }

// class Teacher extends Person {
//   constructor(
//     public phoneNumber: string,
//     firstName: string,
//     lastName: string,
//     public expertise: string,
//     public academicTitle: string,
//   ) {
//     super(firstName, lastName);
//   }

//   override get fullName() {
//     // return this.academicTitle + '. ' + this.lastName.toUpperCase() + ' ' + this.firstName;
//     return this.academicTitle + '. ' + super.fullName;
//   }

//   teach() {
//     console.log('teaching...');
//   }
// }

// let student = new Student(1764, 'Ali', 'Poyraz');
// student.takeTest();

//Abstract Classes and Methods
