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

// LESSON 07:
let age: number = 39;
//age = 'a';      // HATA
if(age < 50)
    age += 10;

console.log(age)

// LESSON 11: Fundamentals