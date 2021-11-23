    //Тут напишу основные правила и синтаксис языка
    /* упражняться будем в консоли браузера а єтот файл будет лишь конспектом для пройденного
    материала */

// математичесские манипуляции:
(5-3)*(2+1)/2

// переменные задаются при помощи var:
var Nick;
var age = 12;
// мы можем менять значение переменной без "var";
age = 13;

// можно производить матем действия с переменными:
var Number1 = 1 + 3;
var Number2 = 8;
console.log(Number2 / Number1);
Number2 / Number1

// Инкрементирование и Декрементирование
// Мы можем увеличивать и уменьшать значение переменной при помощзи команд
var Colbasa = 1;
++Colbasa; // знак ++ увеличивает значение на один
--Colbasa; // знак -- уменьшает значение на один
// Если мы используем параметр -- после переменной, то будет отображенно 
// значение до добавления переменной, при том, что сама переменная измениться
// на + или - 1.

//Если мы используем += или -= мы можем увеличить или уменьшить переменную на какую то величину:
var Score = 10;
score += 7; // плюсуем 7 к значению Score (= 10);
score -= 3; // отнимаем 3 от значения Score;
score *= 2; // умножение;
score /= 2; // деление;

// Так же мы можем закладывать буквенные значения в переменные (ряды);
var myThing = "this is a string";
myThing = 5 //мы можем менять значения с буквенных на численные и наоборот;
//числа в рядах и числа без кавычек имеют разные значения для javascript;
var Number = 9; // это число;
var String = "9"; // а это ряд;
/* Если мы приплюсуем число к числу то получим "18"
А если приплюсуем рядок к рядку то получим "99" */

// Команда.length -определяет длинну ряда
"1234567890".length; // отобразит количество символов в кавычках
var One = "123456789";
One.length; //команда отобразит количество символов заложеных в переменной

// мы можем получить отдельный символ из ряда :
One[1]; // получаем второй символ из ряда( в данном случае второй символ равен значению "2");
// Так же мы можем плюсовать эти значения:
One[1] + myThing[2] + One[4] + myThing[3];

// мы можем извлекать диапазоны значений при помощи slice:
One.slice(1, 5); // Выбрать элементы в диапазоне 2-6;
One.slice(2); //  Выбрать элементы в диапазоне 3 и до конца ряда

//написание ряда с большой/маленькой буквы:
myThing.toUpperCase();
myThing.toLowerCase();

//переменные true & false:

var javascriptIsCool = true;
var javascriptIsCool = false;

// оператор && укажет нам значение TRUE  в случае если оба значения будут равны TRUE:
var hadShower = true;
var hasBackpack = false;
hadShower && hasBackpack; // значение будет равно FALSE поскольку мы имеем лишь 1 значение true из двух;

// оператор || укажет нам значение true если хотя бы одно из значений будет равно true:
var hasApple = true;
var hasOrange = false;
hasApple || hasOrange; // в данном случае значение будет true;

// "!" Оператор обращает значение в противоположное
var Sosiska = true;
var Kolbaska = !Sosiska;
Kolbaska // будет равно false.

// Cравнение:
var height = 65;
var heightRestriction = 60;
height > heightRestriction; // получим значение true;
height >= heightRestriction; // true;
height < heightRestriction; // false;

// равен "===" используется для сравнения значений переменных что бы проверить их идентичность;
var Secret = 5;
var Jopa = "Jopa";
var Piska = 5;
Secret === Jopa; // будет false
Secret === piska; //будет  true

// Оператор "==" показывает нам приблизительное равенство, например:
var Chislo = 1;
var Ryadok = "1";
Chislo == Ryadok // будет true хоть это два разных типа данных;

//значение "null":

var Zero = null // говорит нам что значение равно 0, то бишь пустое.

//масивы:
var dinosaurs = ["T-Rex", "Velociraptor", "Stegosaurus", "Triceratops"];
//или так:
var dinosaurs = [
    "T-Rex",
    "Velociraptor",
    "Stegosaurus",
    "Triceratops"
];
//чтобы вытащить конкретный элемент из массива:
dinosaurs[0];//первый элемент;
dinosaurs[3];//4-ый элемент;


//мы можем заменять отдельные элементы массива:
dinosaurs[0] = "Tyrannosaurus Rex";//Тем самым заменив значение на новое;

//Добавляем в массив новые элементы:
dinosaurs[4] ="Brachiosaurus";
dinosaurs[5] = "Pteranodon";

//масивы могут комбинировать разные типы данных:
var dinosaursAndNumbers = [3, "dinosaurs", ["triceratops", "stegosaurus", 3627.5], 10];
//мы можем обратиться к отдельным элементам массива, находящимся в другом массиве.
//например, что бы получить значение "3627.5":
dinosaursAndNumbers[2][2];

//что бы определить длинну массива:
var maniacs = ["Yakko", "Wakko", "Dot"];
maniacs.length
//таким образом мы можем получить доступ к последнему элементу массива
//поскольку положение последнего элемента массива равно "длинна минус 1"
maniacs[maniacs.lenght - 1]; //вуаля


//что бы добавить элемент в массив используем команду .push();
var animals = [];
animals.push("Cat");
animals.push("Dog");
animals.push("Llama");
//Каждый раз, когда мы добавляем новое значение в массив, на экран выводится значение .length;

//чтобы добавить элемент в начало массива используем метод .unshift();
animals.unshift("Monkey")//после добавления так же выводиться значение .lenght;
animals.unshift("Polar Vear");

//удаление Элементов
//при помощи команды .pop() мы можем удалять последний элемент массива
//метод .pop() очень полезен, так как позволяет одновременно с удалением из массива
//присвоить элемент массива новому значению:
animals;
var LastAnimal = animals.pop();
LastAnimal// это Llama
animals.pop();//просто удалили "Dog";
// наличие вышеперечисленных методов открывает интересные возможности:
animals.unshift(LastAnimal)//Таким образом мы добавили Ламу в начало списка.

//метод .shift() обратный методу .pop() , то есть мы можем извлечь элемент сначала массива
var FirstAnimal = animals.shift();//извлекаем значение "Llama";

//объединение массивов при помощи оператора .concat()
var furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];
var scalyAnimals = ["Boa Constrictor", "Godzilla"];
var furryAndScalyAnimals = [furryAnimals.concat(scalyAnimals)];
//так же мы можем объединить более чем два массива
var featheredAnimals = ["Macaw", "Dodo"];
var allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);

//мы можем узнать индекс элемента в массиве при помощи .indexOf(element);
var colors = ["red", "green", "blue"];
colors.indexOf("blue");//будет 2
colors.indexOf("green");//будет 1
//если елемента, позицию которого мы запрашиваем, нет в списке мы получим значение "-1";
//если елемент в массиве встречается несколько раз мы получим положение первого из них:
var insects = ["Bee", "Ant", "Bee", "Bee", "Ant"];
insects.indexOf("Bee");//получим значение "0";

//мы можем превратить массив в ряд при помощи .join()
var boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];
boringAnimals.join();//"Monkey,Cat,Fish,Lizard";
//Если мы не хотим , чтобы раздельными знаками выступали запятые
//можем задать их самостоятельно:
var boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];
boringAnimals.join(" - ")//разделение через "тире с пробелами";
boringAnimals.join("*")//разделение через звёздочку(без пробелов);
boringAnimals.join(" sees ")// пробел sees пробел
//если значения в массиве не есть рядами(например числа), javascript конвертирует их в ряды
//перед тем как соединить их
var ages = [11, 14, 79]
ages.join(" ");//получим "11 14 79"

//примеры использования массивов:
//например мы идём к дому другу, записывая ориентиры в массив
var landmarks = [];
landmarks.push("My house");
landmarks.push("Front path");
landmarks.push("Flickering streetlamp");
landmarks.push("Leaky fire hydrant");
landmarks.push("Fire station");
landmarks.push("Cat rescue center");
landmarks.push("My old school");
landmarks.push("My friend's house");
//на обратном пути возвращаемся по ориентирам, попутно вычеркивая из списка элементы
// при помощи .pop();
landmarks.pop();
landmarks.pop();
landmarks.pop();
landmarks.pop();
landmarks.pop();
landmarks.pop();
landmarks.pop();
landmarks.pop();// Последний элемент "My house" был только что изьят.

//продуцирование случайных чисел:
Math.random();//генерирует случайные числа в числовом диапазоне, между 0 или 1;
// Math.random();всегда возвращает число меньше единицы и никогда не вызовет 1;
//Если нам нужно сгенирировать число больше , чем 1, нам нужно умножить результат
//вызова Math.random();
Math.random() * 10 // чтобы получить случайное число между 0 и 10;

//при помощи math.floor() мы можем округять числа до целого, 
//ведь индексами масива могут быть только целые числа:
Math.floor(3.7463845) //будет 3
Math.floor(9.9999)//будет 9
//мы можем объеденить методы Math.random() и Math.floor
Math.floor(Math.random() * 4);//может быть 0,1,2,3
//пример использования:
var randomWords = ["Explosion", "Cave", "Princess", "Pen"];
var randomIndex = [Math.floor(Math.random() * 4)];
randomWords[randomIndex];
//можно ускорить метод:
randomWords[Math.floor(Math.random() * 4)];

//Примеры:
var phrases = ["That sounds good", "Yes, you should definitely do that", "I'm not sure that's a great idea", "Maybe not today?", "Computer says no"];
// Мені слід випити ще один мілкшейк?
phrases[Math.floor(Math.random() * 5)];
//Генератор оскорблений))
var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
//Выбираем случайные части и каждого из массивов
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
var randomWord = randomWords[Math.floor(Math.random() * 5)]; // var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)]
//Теперь соеденим все случайные рядки в предложение:
var randomInsult = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";
//или:
var randomInsult = ["Your", randomBodyPart, "is", "like", "a", randomAdjective, randomWord + "!!!"].join(" ");

//объекты:
var cat = {
    "legs": 3,
    "name": "Harmony",
    "color": "Tortoiseshell"
}; // Ключ "legs", "name" и т.д. - всегда есть рядом, а значения могут быть разных видов;
//мы можем не использовать кавычки "" для ключей, ведь javaScript и так понимает, что это ряды
var cat = {
    legs: 3,
    name: "Harmony",
    color: "Tortoiseshell"
};
//но благодаря кавычкам мы можем поставить пробелы в ключах, ведь без кавычек ключи будут соответствовать
//тем же правилам, что и именна переменных:
var cat = {
    legs: 3,
    "full-name": "Harmony",
    color: "Tortoiseshell"
};
//Добываем значение :
cat["name"];
//или:
cat.name;
//такой способ работает в случае только если ключ не будет содержать никаких специальных символов - таких как пробел.

//мы можем добыть все ключи объекта при помощи команды Object.keys("Название объекта")
var dog = { name: "Pancake", age: 6, color: "white", bark: "Yip yap yip!" };
Object.keys(dog);

//добавление в объект:
var cat = {};
cat["legs"] = 3;
cat["name"] = "Harmony";
cat["color"] = "Tortoiseshell";
// Ключи в массивах не имеют конкретной последовательности в отличии от рядов!
// То есть обращаться к ключам массива мы можем только по имени ключа, не по номеру.

//Так же мы можем доавлять ключи в массив через точку:
var cat = {};
cat.legs = 3;
cat.name = "Harmony";
cat.color = "Tortoiseshell";

//если мы обратимся к ключу, которого нет в объекте получим определение "undefined";

// Мы можем использовать объекты как состовляющие массивов и наоборот:

var dinosaurs = [
    { name: "Tyrannosaurus Rex", period: "Late Cretaceous" },
    { name: "Stegosaurus", period: "Late Jurassic" },
    { name: "Plateosaurus", period: "Triassic" }
];
// что бы достать всю информацию про первого динозавтра нам достаточно прописать:
dinosaurs[0];
// что бы получить только его имя:
dinosaurs[0]["name"];
//или так:
dinosaurs[0].name; // Запись через точку можно использовать только с объектами, но не с массивами.

// Объекты в массиве и массив в объекте:
var anna = { name: "Anna", age: 11, luckyNumbers: [2, 4, 8, 16] };
var dave = { name: "Dave", age: 5, luckyNumbers: [3, 9, 40 ] };
var kate = { name: "Kate", age: 9, luckyNumbers: [1, 2, 3] };
var friends = [anna, dave, kate];

friends[1]//получим {name: "Dave", age: 5, luckyNumbers: Array[3] };
// Array[3] значит - этот массив содержит 3 элемента.
// Мы можем обратиться к конкретному ключу посредством:
friends[2].name; // Получим "Kate"
friends[0].luckyNumbers; // получим [2, 4, 8, 16]
friends[0].luckyNumbers[1];// получим "4"

// Немного поупражняемся:
//Представим что мы создали банк и хотим видеть сколько денег кто нам должен. Добавим ряды ,они будут именами наших товарищей, а значение будет суммой;
var owedMoney = {};
owedMoney["Jimmy"] = 5;
owedMoney["Anna"] = 7;
console.log(owedMoney["Jimmy"])
console.log(owedMoney["Jinen"])
//Jinen undefined ,потому что мы не внесли его в наш объект
// Джимми решил одолжить ещё 3 доллара:
owedMoney["Jimmy"] += 3;
console.log(owedMoney["Jimmy"])
console.log(owedMoney)//общая картина кто сколько должен

//Допустим мы хотим создать коллекцию фильмов с информацией про них:
//Мы создали объект, внутри которого каждый фильм - это ключ, в котором значение - это ещё один объект.
//Значение в объектах сами могут быть значениями!
var movies = {
  "Finding Nemo": {
  realaseDate: 2003,
  duration: 100,
  actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
  format: "DVD"
 },
   "Star Wars: Episode VI - Return of the Jedi": {
  realaseDate: 1983,
  duration: 134,
  actors: ["Mark Hammil", "Harrison Ford", "Carrie Fisher"],
  format: "DVD"
 },  
  "Harry Potter and the Goblet of Fire": {
  realaseDate: 2005,
  duration: 157,
  actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
  format: "Blue-ray"
 }
}
//Теперь мы легко можем вытащить информацию про интересующий нас фильм:
var findingNemo = movies["Finding Nemo"];//Задаем переменную что бы глянуть на его свойства
findingNemo.duration;
findingNemo.format;
//Так же мы легко можем добавить в коллекцию новые фильмы:
var cars = {
  realaseDate: 2006,
  duration: 117,
  actors: ["Owen Wilson", "Bonnie Hunt", "Paul Newman"],
  format: "Blue-ray"
}
movies["Cars"] = cars;
//Конечно же мы можем сделать это и более упорядоченно, имея возможность обращаться к фильмам по "номерам",создав ряд "movies", а не объект,
// но смысл данного примера состоит в том, чтобы показать, что мы можем использовать объекты внутри объектов.
// Так же мы можем получить список всех фильмов в нашем объекте при помощи:
Object.keys(movies);

