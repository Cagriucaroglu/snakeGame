//Arrow function'lar, anonim olarak tanımlanırken yani isim verilmeden kullanılabilirken, normal fonksiyonlara isim verilebilir ve bu isimlerle çağrılabilirler.

//Anonim fonksiyonlar, yalnızca bir fonksiyon ifadesi olarak tanımlanır ve bir isimleri yoktur. Bu tür fonksiyonlar genellikle bir değişkene atanır veya başka bir fonksiyonun argümanı olarak kullanılır.
// Örneğin aşağıdaki fonksiyon anonim bir fonksiyondur.
const sum = (a , b) => a + b;
//Bu arrow function, sum adında bir değişkene atanır ve isim verilmez. Bu nedenle bu fonksiyonu, sadece sum değişkeni aracılığıyla çağırabilirsiniz.

//Normal fonksiyonlar ise bir isimle tanımlanır. İsim, fonksiyonun çağrılabilir bir kimliği olarak kullanılır. Bu isimle fonksiyonu doğrudan çağırabilir veya başka bir fonksiyonun argümanı olarak kullanabilirsiniz.
//Örneğin aşağıdaki normal fonksiyon bir isme sahiptir
function multiply(a , b){
    return a * b;
}
//Bu fonksiyon multiply ismiyle tanımlanmıştır ve bu isimle doğrudan çağrılabilir:
multiply(2 , 3); // 6
//Ayrıca bu fonksiyonu başka bir fonksiyonun argümanı olarak kullanabilirsiniz:
function calculate(operation , a , b){
    return operation(a , b);
}

calculate(multiply , 3 , 2); // 6
//Yukarıdaki örnekte, calculate fonksiyonuna multiply fonksiyonu argüman olarak verilmiştir. calculate fonksiyonu içerisinde operation(a, b) şeklinde multiply fonksiyonu çağrılmıştır.

//Bu şekilde normal fonksiyonlara isim vererek, onları daha kolay çağırabilir ve başka yerlerde kullanabilirsiniz.




// this bağlamı
// Arrow Function
const obj = {
    name: "John",
    arrowFunction: () => {
      console.log(this.name);
    },
    normalFunction: function() {
      console.log(this.name);
    }
  };
  
  obj.arrowFunction(); // Output: undefined
  obj.normalFunction(); // Output: John
  //Eğer arrowFunction içinde name özelliğine "John" değerini atamak istiyorsanız, bunun için ayrı bir adı olan name özelliğini kullanmalısınız. Örneğin:  
  const obj2 = {
    name: "John",
    arrowFunction: () => {
      obj2.name = "Smith";
      console.log(obj.name);
    },
    normalFunction: function() {
      console.log(this.name);
    }
  };
//Bu şekilde, arrowFunction içinde obj.name kullanarak name özelliğine erişip değer atayabilirsiniz. Ardından console.log(obj.name) ifadesi, "Smith" değerini ekrana yazdıracaktır.

//Dikkat edilmesi gereken nokta, arrow function'ın this değerini bağlamadığı için obj.name şeklinde doğrudan nesneye erişmeniz gerektiğidir.

name = "Henry"                                                                                                    
const obj3 = {
  name: "John",
  arrowFunction: () => {
const name = "John"    
console.log(this.name);
  },
  normalFunction: function() {
    console.log(this.name);
  }
};

obj.arrowFunction(); // Output: ?
obj.normalFunction(); // Output: John
//obj.arrowFunction() çağrısı yapıldığında, arrow function içinde name = "John" ifadesi kullanılarak name değişkenine "John" değeri atanır.

//Ancak arrow function, kendi kapsamında this değerini bağlamaz. Dolayısıyla this.name ifadesi arrow function içinde undefined değerini döndürür.

//Sonuç olarak, obj.arrowFunction() çağrısının çıktısı undefined olur. this.name ifadesi arrow function'ın kendi kapsamında name özelliğini bulamaz.

//obj.normalFunction() çağrısının çıktısı ise "John" olur. Çünkü normalFunction bir normal fonksiyondur ve this.name ifadesi, fonksiyonun çağrıldığı kapsamdaki name özelliğini temsil eder. Bu durumda obj nesnesinin name özelliği "John" olduğu için çıktı "John" olur.

name = "Henry"                                                                                                    
const obj4 = {
  name: "John",
  arrowFunction: () => {
    console.log(name);
  },
  normalFunction: function() {
    console.log(this.name);
  }
};

obj.arrowFunction(); // Henry
obj.normalFunction(); // John




//Argümanlar: Arrow function'lar, argümanları açıkça belirtmek için parantez gerektirmez (tek bir argüman durumunda). Normal fonksiyonlarda argümanlar için parantez kullanılması gerekmektedir:
// Arrow Function
const arrowFunction = arg => {
    console.log(arg);
  };
  
  // Normal Fonksiyon
  function normalFunction(arg) {
    console.log(arg);
  }
  
  arrowFunction("Arrow Function"); // Output: Arrow Function
  normalFunction("Normal Fonksiyon"); // Output: Normal Fonksiyon
  



// Constructor fonksiyonu olamaz: Arrow function'lar, new anahtar kelimesiyle çağrıldığında bir constructor fonksiyonu olarak kullanılamaz. Normal fonksiyonlar ise constructor olarak kullanılabilir
const ArrowConstructor = () => {
    this.name = "John";
  };
  
  // Normal Fonksiyon
  function NormalConstructor() {
    this.name = "John";
  }
  
  const arrowObj = new ArrowConstructor(); // TypeError: ArrowConstructor is not a constructor
  const normalObj = new NormalConstructor(); // NormalConstructor { name: "John" }
// Yukarıdaki kodda, Arrow Function ve Normal Fonksiyon ile iki farklı constructor fonksiyon tanımlanmıştır.

//Arrow Function (ArrowConstructor) bir constructor fonksiyon olarak kullanılmak istenmiştir. Ancak, Arrow Function'lar constructor olarak kullanılmak için uygun değildir. Bu nedenle, new ArrowConstructor() çağrısı yapılırken bir hata meydana gelir ve "TypeError: ArrowConstructor is not a constructor" hatası alınır.

//Normal Fonksiyon (NormalConstructor) ise constructor olarak kullanılabilir. new NormalConstructor() çağrısı ile bir obje oluşturulur ve bu objenin name özelliği "John" olarak atanır. Dolayısıyla, normalObj değişkeni NormalConstructor tarafından oluşturulan objeyi temsil eder.

//Bu durumda, arrowObj değişkeni oluşturulamadığı için bir değer almaz ve undefined olurken, normalObj değişkeni NormalConstructor tarafından oluşturulan objeyi temsil eder.
//Bir fonksiyonun "constructor" olarak kullanılması, o fonksiyonun bir yapılandırıcı olarak kullanılması anlamına gelir. Yani, o fonksiyonu new anahtar kelimesiyle çağırarak bir obje oluşturabiliriz.
//Constructor fonksiyonları, objelerin prototipini ve özelliklerini tanımlamak için kullanılır. Bir constructor fonksiyonu kullanarak oluşturulan objeler, o fonksiyonun prototipinde tanımlanan özelliklere ve metotlara erişebilir.
//Constructor fonksiyonlarında genellikle this anahtar kelimesi kullanılır. this, yeni oluşturulan objeyi temsil eder ve constructor fonksiyonu içindeki özelliklere ve metotlara erişmek için kullanılır. this ile atanılan değerler, constructor fonksiyonuyla oluşturulan objenin özellikleri haline gelir.
//Örneğin, aşağıdaki örnekte Person constructor fonksiyonu kullanılarak bir obje oluşturulur:
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  const person1 = new Person("John", 25);
  console.log(person1.name); // Output: John
  console.log(person1.age); // Output: 25 
//Person constructor fonksiyonu, name ve age özelliklerini objeye atar. new Person("John", 25) ifadesiyle bir Person objesi oluşturulur ve person1 değişkeni bu objeyi temsil eder. Oluşturulan objenin name ve age özelliklerine erişilebilir.





// Arrow Function
const arrowFunction2 = () => {
    console.log("Arrow Function");
  };
  
  // Normal Fonksiyon
  function normalFunction2() {
    console.log("Normal Fonksiyon");
  }
  
  const arrowNamed = arrowFunction;
  const normalNamed = normalFunction2;
  
  arrowNamed(); // Output: Arrow Function
  normalNamed(); // Output: Normal Fonksiyon
//arrowNamed ve normalNamed adında iki değişken tanımlanır. Bu değişkenler, arrowFunction ve normalFunction fonksiyonlarının referanslarını tutar.

//arrowNamed() çağrısı, arrowFunction fonksiyonunu çalıştırır ve "Arrow Function" çıktısını verir.

//normalNamed() çağrısı ise, normalFunction fonksiyonunu çalıştırır ve "Normal Fonksiyon" çıktısını verir.

//Bu şekilde, fonksiyonların referanslarını başka değişkenlere atayabilir ve bu değişkenleri kullanarak fonksiyonları çağırabilirsiniz. Böylece aynı fonksiyonu birden fazla kez çağırmak veya başka bir yerde kullanmak istediğinizde daha kolay erişebilirsiniz.
//arrowNamed ve normalNamed değişkenlerinin fonksiyon gibi kullanılabilmesi, JavaScript'teki fonksiyonların birinci sınıf nesneler olması sayesinde mümkündür.

//JavaScript'te fonksiyonlar, diğer değerler gibi davranır ve değişkenlere atanabilir. Bu, fonksiyonları referans olarak kullanmanıza olanak tanır. Bir fonksiyonu bir değişkene atadığınızda, o değişken fonksiyonun referansını tutar.

//arrowNamed ve normalNamed değişkenlerine atanmış olan arrowFunction ve normalFunction fonksiyonlarının referansları, aynı zamanda bu değişkenleri çağırmak için kullanılabilir. Değişken adını takip eden parantezlerle birlikte çağrıldığında, o değişkenin tuttuğu fonksiyon çalıştırılır.




const handleKeyDown = ({ key }) => {
    console.log(key);
  };
 // Yukarıdaki örnekte, handleKeyDown fonksiyonu bir nesne parametresi alır ve içindeki key özelliğini doğrudan alır. Bu sayede, event nesnesini ayrı bir değişkene atamak yerine doğrudan key özelliği kullanılabilir.

 //  Destructuring olmadan aynı işlemi yapmak için ise event nesnesini almak ve ardından event.key şeklinde key özelliğine erişmek gerekebilir:
 const handleKeyDown2 = (event) => {
    console.log(event.key);
  };
 // Bu durumda, destructuring kullanarak sadece ilgilenilen özelliği doğrudan almak daha pratik olabilir ve kodun daha temiz ve anlaşılır olmasını sağlayabilir.




//myArray.push([10, 20]) kodunu kullanarak bir diziye başka bir dizi ekleyebilirsiniz. Bu durumda, myArray dizisi içinde tek bir öğe olacaktır ve bu öğe [10, 20] şeklinde bir alt dizi olacaktır.
// Örneğin:
let myArray = [];
myArray.push([10, 20]);

console.log(myArray); // [[10, 20]]
console.log(myArray.length); // 1

//Burada, myArray içindeki ilk ve tek öğe [10, 20] olan bir dizi olacaktır. myArray.length ifadesi 1 döndürür, çünkü dizi yalnızca bir öğe içerir.

//Eğer [10, 20] alt dizisini ayrı ayrı elemanlar olarak eklemek isterseniz, .push() yöntemini kullanmadan doğrudan elemanları ekleyebilirsiniz:
let myArray2 = [];
myArray2.push(10);
myArray2.push(20);

console.log(myArray2); // [10, 20]
console.log(myArray2.length); // 2

//Kare parantezler kullanarak elle dizi oluşturmak:
let myArray3 = [1, 2, 3, 4, 5];

//Array constructor'ını kullanmak:
let myArray4 = new Array(1, 2, 3, 4, 5);

//Boş bir dizi oluşturup sonra elemanları eklemek:
let myArray5 = [];
myArray.push(1);
myArray.push(2);
myArray.push(3);




const gameOverFunc = () =>{
  initialState.score = 0,
  initialState.tail = [],
  initialState.static = 0,
  initialState.snakeX = 0,
  initialState.snakeY = 0,
  initialState.velX = 0,
  initialState.velY = 0,
  initialState.gameOver = true
}  
//Bu JavaScript kod parçası, gameOverFunc adında bir fonksiyon tanımlar. Fonksiyonun içindeki satırlar, bir nesnenin özelliklerini (state) sıfırlamak için kullanılır. Virgüllerle ayrılan ifadeler, JavaScript'te bir dizi işlemi aynı satırda gerçekleştirmek için kullanılır.
