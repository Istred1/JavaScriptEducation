    //Тут напишу основные правила и синтаксис языка
    /* упражняться будем в консоли браузера а єтот ёайл будет лишь конспектом для пройденного
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

//мы можем соиденять ряды:
var greetings = "Hello ";
var name = "Nick";
greetings + name; // "Hello Nick"

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
maniacs[maniacs.length - 1]; //вуаля


//что бы добавить элемент в массив используем команду .push();
var animals = [];
animals.push("Cat");
animals.push("Dog");
animals.push("Llama");
//Каждый раз, когда мы добавляем новое значение в массив, на экран выводится значение .length;

//чтобы добавить элемент в начало массива используем метод .unshift();
animals.unshift("Monkey")//после добавления так же выводиться значение .length;
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

//что бы вложить script в html:
/* <script>
    var message = "hello world"
</script>  
*/

// if утверждение  так же как и в других языках:
// Если значение "true" значит условие выполняеться
if (condition) {
    console.log("Do something");
}

// if else:
if (condition) {
     console.log("Do something");
} else {
     console.log("Do something else");
} //если условие false = значит выполняется действие после else 

//часто нам нужно соиденить последовательность из условий. Делается это таким образом :
var lemonChiken = false;
var beefWithBlackBean = true;
var sweetAndSourPork = true;

if (lemonChiken) {
    console.log("Great! I'm having lemon chiken!");
} else if (beefWithBlackBean) {
    console.log("I'm having the beef.");
} else if (sweetAndSourPork) {
    console.log("OK, I'll have the pork.");
} else {
    console.log("Well, I guess I'll have rice then.");
}
// утверждение else необязательно, без него, если ни одно из условий не будет осуществленно, попросту ничего не произойдет 

//циклы
// цикл while :
while (condition) {
    console.log("Do something");
    i++;
}
//цикл выполняется пока его условие (condition) остается правильным, то есть сохраняет значение true
//цикл выполняется пока его условие не изменит значение на false
//например:
var sheepCounted = 0;
while (sheepCounted < 10) {
  console.log("I have counted " + sheepCounted + " sheep!");
  sheepCounted++;
}
console.log("Zzzzzzzz");
// если условие для false не наступит, цикл будет длиться бесконечно

// for цикл, в котором определенный параметр меняет свое значение от начального до конечного с некоторым шагом
// и для каждого значения этой переменной тело цикла выполняется один раз. 

for (setup; condition; increment) {
    console.log("Do something");
}
// setup- код который запускается перед началом цикла. В основном используеться для создания переменной, котороя будет считать кол-во
// кругов, которые прошёл цикл.
//condition- условие, которое проверяется перед каждым запуском тела цикла - если true - цикл выполняется , если false , то нет и
// цикл останавливается  
//increment - запускается после каждого выполнения кода тела цикла. В общем он используется для обновления цикличный переменный параметр.

// for циклы в основном используются для того, что бы исполнить определенную операцию определенное кол-во раз.
//например повторим наш while цикл при помощи цикла for
for (var sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
    console.log("I have counted " + sheepCounted + " sheep!")
}
// где сначала мы задаем переменную (var sheepCounted = 0; затем условие sheepCounted < 10, при значении true которого цикл будет выполняться и sheepCounted++ чтобы добавлять 1 к значению sheepCounted, каждый раз, когда запускается цикл.
//теперь трижды скажем Hello при помощи цикла for:
var timesToSayHello = 3;
for (var i = 0; i < timesToSayHello; i++) {
    console.log("Hello!");
}

//использование цикла for для массивов и рядов:
var animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];

for (var i = 0; i < animals.length; i++) {
    console.log("This zoo contains a " + animals[i] + ".");
}
//таким образом мы получили данные обо всех животных, которые живут в зоопарке

//вытягивание символов из имени по одному при помощи цикла for:
var name = "Nick";

for (var i = 0; i < name.length; i++) {
    console.log("My name contains the letter " + name[i] + ".");
}
// еще способ использования циклов:
for (var x = 2; x < 10000; x = x * 2) {
    console.log(x);
}
//таким образом мы указали все числа кратные двум в диапазоне до 10 000

//для кратных 3:
for (var x = 3; x < 10000; x = x * 3) {
    console.log(x);
}
//while цикл для подобного:

var x = 1;

while (x < 10000) {
    x = x * 3;
    console.log(x);
}
//но в данном цикле последним выводом будет число 19683, что показывает преимущество for циклов для данной задачи над циклами типа while

// при помощи данной програмы мы изменяем каждое значение массива добавляя к ним слово "Awesome";
var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"]

for ( var i = 0; i < animals.length; i++) {
  animals[i] = "Awesome " + animals[i];
  console.log(animals);
}
console.log(animals);

//генератор случайных рядов из букв алфавита при помощи циклов while и for:
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
var randomString = "";

while (randomString.length < alphabet.length) {
  randomString = randomString + alphabet[Math.floor(Math.random() * alphabet.length)];
}
 console.log(randomString);
//теперь for:
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];


for (randomString ="" ; randomString.length < alphabet.length; randomString += alphabet[Math.floor(Math.random() * alphabet.length)]) {
}
console.log(randomString);

// замена символов в ряду внутри цикла при помощи if else:

var input = "javascript is awesome";
var output = "";

for (var i=0; i < input.length; i++) {
    if (input[i] == "a") {
    output += "4";
  }
  	else if (input[i] == "e") {	
      output += "3";
    }
  	else if (input[i] == "o") {
      output += "0"
    }
  	else {
      output += input[i];
    }
 }
 console.log(output);

// попробуем написать игру "виселица":
//сначала научимся взаимодействовать с игроком посредством диалоговых окон в барузере:
/* <script>  // таким образом мы указываем html коду , что начинается действие скрипта.
        //запрос на введение в браузере:
        var name = prompt("What's your name?");
        console.log("Hello " + name);

        // да или нет( булевое выражение):
        var likesCats = confirm("Do you like cats?");
        if (likesCats) {
            console.log("You're a cool cat!");
        } else {
            console.log("Yeah, that's fine. You're still cool!");
        }

        //сигнальный диалог
        alert("JavaScript is awesome");// в играх лучше использовать "сигнальное окно", так оно останавливает код, пока вы не нажмете "Ок"
    </script>
*/
/*
Для начала нам нужно определить структуру игры:
1. Игра выбирает случайное слово
2. Принимает варианты ответа игрока
3. Выходит из игры при желании игрока
4. Проверяет, есть в слове буква, названая игроком
5. Следит за буквами, которые уже отгаданы игроком
6. Будет показывать игроку его прогресс
7. Закончит игровой сеанс, когда игрок отгадает слово

Теперь преобразим это в псевдокод:

Pick a random word

While the word has not been guessed {
    Show the player their current progress
    Get a guess from the player
 
  if the player want to quit the game {
    Quit the game
  }
  Else if the guess is not a single letter {
    Tell the player to pick a single letter
}
  Else {
    if the guess is in the word {
      Update the player`s progress with the guess
    }
  }
}
Congratulate the player on guessing the word
*/

//кодируем игру:

// сначала задаем массив из слов для угадывания:
var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
];

//Затем переменную которая поможет определить нам случайное слово:
var word = words[Math.floor(Math.random() * words.length)];

//затем пустой массив answerArray для того, что бы заполнить его при помощи цикла for
var answerArray = [];
//в цикле for мы задаем переменную i зависимую от выбранного нами случайного слова в переменной word, а так же с условием , которое в конечном счете не дает нам ошибиться с длинной угадываемого слова
for (var i = 0; i < word.length; i++) {
    // по завершению же каждого цикла мы добавляем новый элемент в answersArray при помощи:
    answerArray[i] = "_"
}
//после цикла длинн параметра answerArray будет равна длинне пераметра word и будет иметь вид по типу : answerArray = ["_", "_", "_", "_"]
//затем мы создаем переменную remainingLetter, которая в будущем позволит игроку отслеживать количество оставшихся для угадывания букв :
var remainingLetters = word.length;
// каждый раз , когда игрок будет правильно угадывать одну букву, это число будет декрементировано на 1 столько раз, сколько таких букв есть в слове.

var livesDestroyer = remainingLetters;//доп переменная, чтобы при помощи нее в будущем отнимать жизни в случае если мы ошиблись
var lives = 5;// условно заданное количество попыток для угадывания слова

//игровой цикл:
//мы задаеём несколько параметров цикл длится равно до тех пор, пока один из них не изменит значение с true на false. То есть либо когда закончатся буквы для угадывания, либо когда пока не закончатся жизни.
while ((remainingLetters > 0) && (lives !== 0)) {
    //Game codes goes here
    //Show the player their progress

// Показываем игроку его прогресс
            // Показываем состояние игры
            alert("Lives: " + lives + "\n" + answerArray.join(" ") + "\n" + remainingLetters + " letters to go");
    
    //Take input from the player

    var guess = prompt("Guess a letter, or click Cancel to stop playing"); // мы получаем значение guess при помощи формы взаимодействия с игроком.
    if (guess === null) { // если он нажимает "отмена" - цикл останавливается и мы выходим из него при помощи команды:
        break;
    } else if (guess.length !== 1) { 
        alert("Please enter a single letter."); // так же если количество указаных пользователем букв (guess) больше или меньше(0 - ни одной) чем одна он получит предупреждение .
    } else { // если игрок вводит одну букву, дальше:
        // update the game state with the guess
        // Update unswerArray and remainingLetters
        // for every correct guess
        for (var j = 0; j < word.length; J++) { //мы создали новую циклическую переменную j, которая варьируется от нуля до длинны слова word
            if (answerArray[j] === guess) { // проверяем нет ли уже в массиве этой буквы
                alert("Sorry, this letter is already there...try again :|")
                break;
            }

            if (word[j] === guess) { // чтобы проверить сбегается ли буква, которую задал игрок с одной из букв слова , которое нужно угадать, если да, то :
                answerArray[j] = guess; // и в массив "ответов" встраивается загаданная игроком буква
                remainingLetters--; // от данного значения отнимается -1
                // когда игрок правильно отгадает все буквы значение remainingLetter будет равно 0
            }
        }
    }
    //проверяем, уменьшилось ли количество букв, которые нужно отгадать и если нет, то отнимаем жизнь
    if (remainingLetters===livesDestroyer) {
        lives--;
    }
    //Обновляем доп переменную согласно кол-ву оставшихся букв
    livesDestroyer= remainingLetters;
}

// Показываем ответ и поздравляем игрока или сообщает о поражении, так же        
    if (lives === 0) {
        alert("Ooooohh, noooo! Your lives are over :( The hidden word was: " + word);
    } else if (remainigLetters === 0) {
        alert("Yeeeeeahhh, great!!! The hidden word was: " + word);
    } else {
        alert("Hhhmmmm.... okay, bye.. (-_-) ");
    }

//тело данного цикла должно обновлять значение remainingLetter , каждый раз , когда игрок угадывает букву, аж пока значение не достигнет 0 и цикл завершится 

//Функции

//Функция - это способ составления кода, который позволяет его потворное использование. При помощи функций один и тот же участок кода можно повторно запускать с разных частей кода и при этому його не нужно повторно копировать и вставлять.

/*Анатомия:
function () {
    console.log("Do something");
}
*/
var ourFirstFunction = function () {
    console.log("Hello world!");
};
//Вызываем функцию:
our.ourFirstFunction;

/* Передаем аргументы функциям:
function (argument) {
    console.log("My argument was: " + argument)
} */

var sayHelloTo = function (name) {
    console.log("Hello " + name + "!");
};

// Чтобы вызвать функцию с аргументом :
sayHelloTo("Nick");
sayHelloTo("Lyra");

// аргумент howManyTimes:

var drawCats = function (howManyTimes) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + "=^.^=")
    }
};

//тело функции - это цикл, который пробегает количество кругов, установленых аргументом howManyTimes (поскольку переменный параметр i начинается со значения 0 и постепенно инкрементируется аж пока значение  аргумента howManyTimes не станет минус 1), каждый круг функция регистрирует ряд i + "=^.^=";
drawCats(5); // что бы запустить функцию 5 раз

/* Несколько аргументов для функции

function (argument1, argument2) {
    console.log("My first argument was: " + argument1);
    console,log("My second argument was " + argument2);  
}

*/

var printMultipleTimes = function (howManyTimes, whatToDraw) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + " " + whatToDraw);
    }
}
//при помощи первого аргумента мы задаем кол-во раз, которое нам нужно вывести второй аргумент(текст).
//пример :

printMultipleTimes(5, "=^.^=");
printMultipleTimes(4, "^_^");
printMultipleTimes(2, "(>_<)");

// возвращаем значение функции:

var double = function (number) {
    return number * 2;
};
//затем если мы пишем 
double(3) // получаем значение 6
//хотя функции могут принимать по несколько аргументов за раз, возвращают они лишь одно значение. Если вы не укажете функции значение для "возврата"/ return , по умолчанию она будет возвращать значение undefined

//возможные манипуляции:
double(5) + double(6); //получим 22

// так же мы можем передать вызов одной функции, как аргумент в другую функции:
double(double(3)) //получим 

//функция для выбора случайного слова:

randomWords[Math.floor(Math.random() * randomWords.length)];
//а вот как могла бы выглядеть функция для того, что бы выбрать случайное слово:
var pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * randomWords.length)]
};
//всё что мы делаем - это вставляем предыдущий код в рамки функции. Теперь же мы можем создавать наш массив случайных слов randomWords;
var randomWords = ["Planet", "Worm", "Flower", "Computer"];
// Выбираем случайное слово с этого массива, используя функцию:
pickRandomWord(randomWords);
//эту же функцию мы можем применить к массивам любого типа. Например мы можем выбрать случайное имя из массива имён:
pickRandomWord(["Charlie", "Raj", "Nicole", "Kate", "Sandy"])

//Заново создадим генератор оскорблений при помощи функции
var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
// Выбираем случайную часть тела из масива randomBodyParts
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
// Выбираем случайное прилагательное из массива randomAdjectives
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
// и случайное слово из массива randomWords:
var randomWord = randomWords[Math.floor(Math.random() * 5)];

//соеденим все случайные рядки в предложение c использованием функции pickRandomWord:
var randomString = "Your " + pickRandomWord(randomBodyParts) + " is like a " + pickRandomWord(randomBodyParts) + " is like a " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";
//и вызываем ряд:
randomString;

// можем зайти ещё дальше и зашить весь код в функцию ещё бтольшего размера:
generateRandomInsult = function () {
    var randomBodyParts = ["Face", "Nose", "Hair"];
    var randomAdjectives = ["Smelly", "Boring", "Stupid"];
    var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
    
    // соиденяем всё в предложение:
    var randomString = "Your " + pickRandomWord(randomBodyParts) + " is like a " + pickRandomWord(randomBodyParts) + " is like a " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";

    return randomString;
}

//наша новая функция generateRandomInsult - это использованый нами ранее код , который встроен в функцию без использования аргументов

//функции удобны тем, что вместо того, что бы каждый раз заново вводить повторяющийся код , мы можем просто использовать функцию

// при помощи слова return мы можем заблаговременно выходить из функции , даже если в ее теле ещё остаётся непрочитаный код
//ещё одним из наиболее распостраненных использований функций является выход из функции при условии, если хотя бы один рагумент в ней есть недействительный , то есть, если это не те аргументы , которых функция требует для продолжения безпрерывной работы. 
//Например функция дальше - возвращает нам рядок, в называя пятый печатный элемент Вашего имени, но если имя переданное функции есть короче, чем 5 символов, функция использует return чтобы немедленно выйти из этой функции. Это означает, что конечное ключевое слово return, которое и должно возвращать нам 5 букву вашего имени, никогда не выполняется:
var fifthLetter = function (name) {
    if (name.length < 5) { // проверяем условие : меньше ли длинна слова чем 5 символов
        return; // если "да" - выходим из функции
    }// если "нет" :
    return "The fifth letter of your name is " + name[4] + ".";
};

// использование функции return вместо if...else - утверждений:
//Мы можем использовать ключевое слово return в рамках разных if утверждений в теле функции, что бы функция вернула нам значение, которое будет зависеть от введенных данных.
// Например игра, в которой в зависимости от того, сколько очков наберёт игрок ему будет присвоена медаль. Больше 3 - бронза, больше 7 - серебро, больше 8 - золото. Воспользуемся для этого следующей функцией:
var medalForScore = function (score) {
    if (score < 3) {
        return "Bronze";
    }
    if (score < 7) {
        return "Silver";
    }
    return "Gold";
}

// хотя мы и проверяем не одно условие , нет потребности использовоать соидененные if...else-утверждения . Мы пользуемся ими, чтобы удостовериться, что лишь одно из условий будет запущено. Но когда каждая из этих опций имеет свое собственное ключевое слово return, это так же делает невозможным запуск более , чем одной из них (поскольку функции способны возврщать лишь одно значение)

// 2 типа написаний функций:

//долгий (оглашение функции) :
var double = function (number) {
    return number * 2;
};

//короткий (віражение функции):
function double(number) {
    return number * 2;
}

// считаем при помощи функций:

    var add = function (argument1, argument2) {
        return argument1 + argument2;
    }

var multiply = function (argument3, argument4) {
    return argument3 * argument4;
}

add(multiply(36325, 9824), 777);// другими словами : 36325 * 9824 + 777;

//одинаковы ли эти массивы:
//преврещаем массивы в рядки и сравниваем.
var areArraySame = function (arg1, arg2) {
  var arg3 = arg1.join() == arg2.join();  
  return arg3;
}

console.log(areArraySame([1, 2, 3],[1, 2, 3]));
console.log(areArraySame([1, 2, 3],[4, 5, 6]));
console.log(areArraySame([1, 2, 3], [1, 2, 3, 4]));

// теперь попробуем при помощи for цикла :
var areArraySame = function (arg1, arg2) {
    for (i = 0; i < arg1.length; i++) {
      if(arg1.length !== arg2.length) {
        return false;
      } //мы добавили условие в функцию, для того, что бы в случае, когда второй массив короче или длинее первого , мы получали значение false.
       return arg1[i] === arg2[i];
    }
}
console.log(areArraySame([1, 2, 3], [1, 2, 3]));
console.log(areArraySame([1, 2, 3], [4, 5, 6]));
console.log(areArraySame([1, 2, 3], [1, 2, 3, 4]));
console.log(areArraySame([1, 2, 3], [1, 2]));

// создаем массив из слов
    var words = [
            "javascript",
            "monkey",
            "amazing",
            "pancake",
            "bitcoin",
            "soup",
            "rust",
            "mother",
            "cheese",
            "apple",
            "building",
            "book",
            "challenge"
        ];

// выбираем случайное слово
    var pickWord = function () {
       return words[Math.floor(Math.random() * words.length)];
    }
    var word = pickWord();

    var setupAnswerArray = function(word) {
        var Penis = [];
        for (var i = 0; i < word.length; i++) {
            Penis[i] = "_";
        }
        return Penis;
    }

// Устанавливаем массив ответов
        var answerArray = setupAnswerArray(word)
        var remainingLetters = word.length;
        var livesDestroyer = remainingLetters;
        var lives = 5;
        var showPlayerProgress = function (answerArray) {
                alert("Lives: " + lives + "\n" + answerArray.join(" ") + "\n" + remainingLetters + " letters to go");
            }

// Игровой цикл        
        while ((remainingLetters > 0) && (lives !== 0)) {
// Показываем игроку его прогресс
            // Показываем состояние игры
            showPlayerProgress(answerArray);

// Получаем варианты ответа от игрока
            var guess = getGuess();
            if (guess === null) { 
                //Выходим из игрового цикла
                break;
            } else if (guess.length !== 1) {
                alert("Please enter a single letter."); 
            } else { 
// Обновляем состояние игры при помощи переменного параметра guess
                for (var j = 0; j < word.length; j++) { 
                    // проверяем есть ли наша буква среди уже отгаданых
                    if (answerArray[j] === guess) {
                        alert("Sorry, this letter is already there...try again :|")
                        break;
                    }
                    if (word[j] === guess) { 
                        answerArray[j] = guess; 
                        remainingLetters--; 
                    }
                }
            }
            //проверяем, уменьшилось ли количество букв, которые нужно отгадать и если нет, то отнимаем жизнь
            if (remainingLetters===livesDestroyer) {
                lives--;
            }
            //Обновляем доп переменную согласно кол-ву оставшихся букв
            livesDestroyer = remainingLetters;
            
// Конец игрового цикла
        }

// Показываем ответ и поздравляем игрока или сообщает о поражении, так же        
    if (lives === 0) {
        alert("Ooooohh, noooo! Your lives are over :( The hidden word was: " + word);
    } else if (remainingLetters === 0) {
        alert("Yeeeeeahhh, great!!! The hidden word was: " + word);
    } else {
        alert("Hhhmmmm.... okay, bye.. (-_-) ");
    }
    
// переписал всё до 925 ряда где начинается вариант else, заебался. Не могу подобрать правильную последовательность кода, на днях попробую переписать .


// поработаем с dom и jquery:
//dom -объектная модель документа - то за счёт чего javascript получает доступ к контенту веб страницы. Веб обозреватели используют dom чтобы отслеживать элементы на страницы и javascript способен манипулировать dom елементами разными способами.
//jquery - упрощает работу с dom , обогащает нас набором функций , которые можно использовать, чтобы определить, какой именно элемент подлежит изменению и соответсвенно имплементировать их.

// чтобы взаимодействовать с html элементами нам нужно присвоить им id:
<h1 id="main-heading">Hello world!</h1>
//это позволит нам идентифицировать и в следствии изменить этот конкретный заголовок, не трогая другие элементы

//чтобы предварительно идентифицировать элемент при помощи id мы можем воспользоваться dom-методом document.getElementById чтобы вернуть элемент "main-heading"
var headingElement = document.getElementById("main-heading");
//мы как бы говорим "поищи элемент с id атрибутом "main-heading" и мы сохраняем этот dom объект к переменному параметру headingElement , теперь мы можем манипилировать им при помощи javascript

//что бы добыть и изменить текст внутри выбраного элемента мы можем воспользоваться свойством .innerHTML:
headingElement.innerHTML;
//этот код возвращает html значение переменной headingElement . В данном случае контент этого элемента - это текст "Hello world!", который мы ввели между тегов <h1>

// Заменим текст заголовка , используя DOM:
/* < !DOCTYPE html >
<html>
    <head>
        <title>Playing with the Dom</title>
    </head>
    <body>
        <h1 id="main-heading">Hello world!<h1>

        <script>
        var headingElement = document.getElementById("main-heading");
        console.log(headingElement.innerHTML);
        var newHeadingText = prompt("Please provide a new heading:");
        headingElement.innerHTML = newHeadingText;
        </script>
    </body>
</html>
*/

// Мы использовали запрос на введения данных, которые вследствии заменили на новый заголовок введенный пользователем.
// Используя свойством innerHTML мы можем менять контент любого dom элемента при помощи javascript

//JQuery - это javascript библиотека, набор инструментов, в основном функций,которые упрощают работу с dom элементам, им пользуется много разработчиков.

//что бы воспользоватся сначала мы говорим нашему веб-обозревателю загрузить её с помощью такого HTML рядка:
<script src="https://code.jquery.com/jquery-2.1.0.js"></script>

// Заменим текст заголовка , используя jquery:
/* < !DOCTYPE html >
<html>
    <head>
        <title>Playing with the Dom</title>
    </head>
    <body>
        <h1 id="main-heading">Hello world!<h1>
   
        <script src="https://code.jquery.com/jquery-2.1.0.js"></script>
   
        <script>
        var newHeadingText = prompt("Please provide a new heading:");
        $("#main-heading").text(newHeadingText);
        </script>
    </body>
</html>
*/


// когда jquery загрузился мы пользуемся jquery функцией $ чтобы выбрать HTML элемент.

//функция $ принимает один аргумент, который зовётся селекторним рядком и указывает JQuery какой элемент или элементы выбрать из dom дерева. В нашем случае "#main-heading", где # означает id . А при помощи метода text мы можем модифицировать текст, передавая этому элементу новый текст , которые ввёл пользователь и которые сохранены в переменной newHeadingText. В диалоговом акне должен появиться запрос на текст, которым нужно заменить старый текст в элементе h1.

// Мы можем добавлять новые элементы в dom дерево при помощи jquery и метода append:
// Для этого мы вызываем метод append до jquery объекта вместе с рядком, который содержит HTML . Метод конвертирует рядок у dom элемент( используя HTML теги в рядке) и добавляет новый элемент до окончания предыдущего.
// Например, чтобы добавить элемент "p" в конец страницы, мы можем добавить к нашему javascript коду следующее:
$("body").append("<p>This is a new paragraph</p>");

//чтобі выбрать тело нашего HTML документа , первая часть этого утверждения использует функцию $ вместе с селекторным рядком "body". Селекторный рядок -это не обязательно id. Код $("body") выбирает элемент "body". Так же мы можем воспользоваться $("p") чтобы выбрать все элементы p.
// Дальше мы вызываем метод append к объекту, что вернулся нам при помощи кода $("body"). Ряд, что передан к append, превращается в dom элемент и добавляется к элементу body, располагаясь прямо перед конечным тегом.

// Так же мы можем использовать метод append чтобы добавлять большое количество элементов в рамках for-цикла, следующим образом:
for (var i = 0; i < 3; i++) {
    var hobby = prompt("Tell me one of your hobbies!");
    $("body").append("<p>" + hobby + "</p>");
}

// Анимируем элементы при помощи JQuery:
// Например, чтобы элемент исчезал постепенно, мы можем воспользоваться методом fadeOut.
$("h1").fadeOut(3000);
// Применяя метод мы заставляем заголовок исчезать постепенно на протяжении 3 секунд до полного исчезновения(Аргумент метода fadeOut задаётся в милисекундах, то есть вводя значение 3000 мы создаём анимацию длительностью 3 секунды.)
// Когда вы вызываете метод до JQuery объекта , этот метод , обычно, возвращает оригинальный объект ,к которому он вызывался. Например $("h1") возвращает JQuery-объект, что представляет все h1 элементы. Чтобы поменяmь текст элемента h1 та заставить его постепенно исчезать, можете ввести:
$("h1").text("This will fade out").fadeOut(3000);
//Такой вызов нескольких методов подряд зовется последовательным соединением. Мы можем соединить последовательно многочисленные анимации для одного и того же элемента. Например, вот как можем последовательно соединить выщов методов fadeOut и fadeIn, чтобы элемент постепенно пропал, а потом появился:
$("h1").fadeOut(3000).fadeIn(2000);
//Элемент последовательно исчезнет за 3 секунды, а потом появится в течении 2 секунд.

//JQuery даёт нам возможность пользоваться ещё двумя дополнительными методами анимации, что подобны к fadeOut и fadeIn и зовутся slideUp и slideDown. Метод slideUP сдвигает элементы с экрана так, что они скользят вверх, а slideDown опять возвращает их на экран так, что они скользят сверху вниз.
$("h1").slideUp(1000).slideDown(1000);

// при помощи метода fadeTo() мы можем управлять прозрачностью элемента, он имеет 2 параметра, первый - за сколько времени элемент будет "опрозрачен" и второй - степень прозрачности. Например: fadeTo(2000, 0.5).


//Интерактивное програмирование:
/* что бы задать время задержки перед выполнением JS мы можем воспользоваться функцикей setTimeout(func, timeout) где func - это функция, которая вызывается , когда избежит время таймаута, а timeout - время ожидания функции в милисекундах
*/
//Пример:
var timeUp = function () {
    alert("Time's up!");
};

setTimeout(timeUp, 3000);
// на первой позиции мы создали функцию timeUp, который открывает сигнальный диалог с текстом на экран
//Позиция номер 2 - мы вызываем функцию setTime (timeUp, 3000), візівается впервіе, ничего не происходит, но черех 3 секунды вызывается timeUp - и на экране появляется сигнальный диалог.

// Обратите внимание, что функция setTimeout возвращает нам 1. Это возвращенное значение называется ID времени ожидания. Это число, которое используется для идентификации чётко определенного времени ожидания. То бишь конкретного вызова функции, который должен задержатся. Число , которое возвращается , может быть любым. Это лишь идентификатор. Вызовите функцию снова и она вернёт вам уже другое ID. Вы можете исопльзоваться этот идентификатор вместе с функцией clearTimeout, что бы отменить конкретно заданые хронологические рамки времени ожидания.

// Бывают случаи, когда нам нужно отменить паузу. Мы можем сделать это при помощи функции setTimeout ,пример:
var doHomeworkAlarm = function () {
    alert("Hey! You need to do your homework!");
};
var timeoutId = setTimeout(doHomeworkAlarm, 60000);

//alert вызываеться после того, как пройдёт 60 000 милисекунд. Так же мы сохраняем ID времени ожидания в переменную timeoutID;
//Что бы отменить время ожидания передайте его ID в функцию clearTimeout следующим образом:
clearTimeout(timeoutId);
//теперь setTimeout вообще не будет вызывать функцию doHomeworkAlarm.

// функция SetInterval:
//при помощи данной функции , мы можем задать повторяемую паузу, то есть функция будет повторятся через разные промежутки времени, то есть интервалы.
setInterval(func, interval);
// где первый аргумент - функция , которая вызывается каждых interval-милисекунд, второй аргумент - количество милисекунд, заданых для ожидания между каждым вызовом.

//Пример:
var counter = 1;
var printMessage = function () {
    console.log("You have been starting at your console for " + counter + " seconds.");
    counter++;
};

var IntervalID = setInterval(printMessage, 1000);
/*В консоли мы увидим следующее:
You have been starting at your console for 1 seconds;
You have been starting at your console for 2 seconds;
You have been starting at your console for 3 seconds;
You have been starting at your console for 4 seconds;
You have been starting at your console for 5 seconds;
You have been starting at your console for 6 seconds;
*/
clearInterval(IntervalID);
// Тоже самое только с интервалом 5 секунд.
var counter = 5;
var printMessage = function () {
    console.log("You have been starting at your console for " + counter + " seconds.");
    counter +=5;
};
var IntervalID = setInterval(printMessage, 5000);
clearInterval(IntervalID);

// Использование  setInterval для анимации:
/*
<!DOCTYPE html>
<html>
    <head>
        <title>Interactive programming</title>
    </head>

    <body>
        <h1 id="heading">Hello-world!</h1>

        <script src="https://code.jquery.com/jquery-2.1.0.js"></script>

        <script>
            var leftOffset = 0;

            var moveHeading = function () {
                $("#heading").offset({ left: leftOffset });

                leftOffset++;

                if (leftOffset > 200) {
                    leftOffset = 0;
                }
            };

            setInterval(moveHeading, 30);
        </script>
    </body>
*/

// Сначала мы создаем переменную leftOffset, для того чтобы в будущем отпозиционировать наш заголовок. Его изначальное значение 0, что означает, что заголовок в выходной позиции находится впритул к левой стороне страницы.
//дальше мы используем функцию moveHeading  которую вызовем позже при помощи setInterval. В середине функции мы выбираем наш заголовок и используем метод offset чтобы выставить левый сдвиг заголовка, то есть разместить его максимально по левой стороне экрана.
// Метдо offset работает с объектами, который способны содержать свойство left и свойство top, которое определяет верхний сдвиг элемента.
// Тут мы используем свойство left и задаём ему leftOffset.Если бы нам был нужен статический офсет, то есть офсет, который не меняется, мы могли бы выставить числовое значение.Например вызвав:
$("#heading").offset({ left: 100 }); // мы переместим заголовок на 100 пикселей вправо4
// Далее мы инкрементируем переменную leftOffset для того, чтобы убедится , заголовок не сдвинется слишком далеко.
// Потом задаём условие, что когда заголовок окажется на позиции 200 , мы сбрасываем его на 0;
// И в конце-концов мы вызываем функцию setInterval и как её аргументы передаём ей функцию moveHeading и число 30(30 милисекунд)
// Этот код вызывает функцию moveHeading каждые 30 милисекунд или же 33 раза в секунду, каждый раз , когда она вызывается , переменная leftOffset инкрементируется и её значение используется, чтобы расположить заглавный элемент. Так, как эта функция вызывается постоянно, а leftOffset инкрементируется постоянно на 1, заголовок постепенно движется вдоль экрана со скоростью 1 пиксель в 30 милисекунд.

// События:

/*
<!DOCTYPE html>
<html>

<head>
    <title>Interactive programming</title>
</head>

<body>
    <h1 id="heading">Hello-world!</h1>

    <script src="https://code.jquery.com/jquery-2.1.0.js"></script>

    <script>
        var clickHandler = function (event) {
            console.log("Click! " + event.pageX + " " + event.pageY);
        };

        $("h1").click(clickHandler);
    </script>
</body>

</html>
*/

//мы создаем функцию , которая содержит единственный аргумент event . Когда вызывается эта функция, аргумент event будет объектом, который содержит информацию про клик событие - где именно "кликнул" пользователь.
//console.log сообщает нам координаты X и Y из объёкта event, они сообщают нам где именно произошло событие.

//Слудющий пример о том, что бы заголовок двигался за курсором:

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Mousemove</title>
</head>

<body>
    <h1 id="heading">Hello world</h1>
    
    <script src="https://code.jquery.com/jquery-2.1.0.js"></script>

    <script>
        $("html").mousemove(function (event) {
            $("#heading").offset({
                left: event.pageX,
                top: event.pageY
            });
        });
    </script>
</body>
*/

// Тут мы создаём обработчик событий для движения мыши "$("html").mousemove(function (event)" и каждый раз, когда мы двигаем курсором , заголовок следует за ним, так как объект переданый методу offset может содержать свойства left и top.

// Если мы изменим mousemove на click - то заголовок будет перемещаться вслед за кликом.

$("html").click(function (event) {
            $("#heading").offset({
                left: event.pageX,
                top: event.pageY
            });
        });
        
//Игра карта сокровищ. Каждый раз , когда мы будем кликать мышкой по карте, игра будет нам сообщать насколько близко сокровище

/* Сформируем общую структуру игры :
1. Создадим страницу, которая будет содержать изображения (карту сокровищ) и место для вывода сообщений игрокам.
2. Выбрать случайное место на изображении карты, где будет спрятано скоровище.
3. Создать обработчик кликов. Каждый раз, когда игрок нажмёт мышкой по карте, обработчик кликов исполнит следующие действия:
а) Будет добавлять 1 к счётчику кликов.
б) Будет высчитывать , как далеко от сокровища находится то место, где кликнул игрок.
с) Будет показывать сообщение на веб странице, чтобы информировать игрока "горячо" или "холодно", то есть близко или далеко игрок от сокровища.
д) Будет поздравлять игрока , если он кликнет по месту нахождения сокровища или очень близко к нему и будет оповещать его сколько кликов понадобится игроку, чтобы найти сокровище.

Первоначальный код будущей страницы игры:

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Find the buried treasure!</title>
</head>

<body>
  <h1 id="heading">Find the buried treasure!</h1>
  
  <img id="map" width=400 height=400 src="http://nostarch.com/images/treasuremap.png">

  <p id="distance"></p>

  <script src="https://code.jquery.com/jquery-2.1.0.js"></script>;

  <script>
      //Тут начинается код игры
  </script>

</body>
</html>
*/

// Мы размещаем на странице изображение карты , по которой будут кликать игроки и пустой элемент p в который при помощи javascript мы будем выводить текст, чтобы информировать игрока о том, как близко он к сокровищу.

//Зададим случайное точку координат в рамках карты сокровищ. Мы выбираем случайное число между 0 и 399 для значения x и такое же для y, поскольку размеры картинки 400х400.
// Для этого мы создаём функцию:
var getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};
//Этот код генерирует случайное число при помощи math.random умноженом на значение аргумента size , затем используем Math.floor чтобы округлить полученое число к наименьшему целому.
// Далее мы выводим результат как значение , возвращённое функцией. Вызов getRandomNumber(400) вернёт нам случайное число в диапазоне от 0 до 399, это то , что нам нужно .

//Теперь зададим координаты сокровища:
var width = 400;
var height = 400;

var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};
// Теперь создаём манипулятор кликов. Это функция , что вызывается , когда игрок будет кликать по карте сокровищ.

$("#map").click(function (event) {
//сюда вносим содержимое функции.
});

//сначала мы выбираем карту сокровищ при помощи $("#map"), а потом переходим к функции обработчика кликов. Информация про клики передаётся телу функции как объект через аргумент event.

//считаем клики. Нужно создать переменный параметр, в самом начале програмы ( вне обработчики кликов):
var clicks = 0;

// Затем вкладываем:
clicks++ // ... внутрь обработчика кликов, так, что бы мы инкрементировали clicks на 1 каждый раз, когда игрок будет кликать по карте.

//Высчитываем расстояние между кликом и сокровищем при помощи функции:
var getDistance = function (event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

// функция getDistance принимает в роли аргументов два объекта: event - событие и target - цель.
// Объект event - это объект , что передается обработчику кликов и сопровождается информацией о клике, который сделал игрок. В том числе он содержит два свойства offsetX и offsetY, которые указывают нам x и y координаты клика и это именно та информация, которая нам нужна.
// В рамках функции переменній параметр diffX сохраняет горизонтальное расстояние между локацией клика и целью , расстояние , которое мы высчитываем путем отнимания target.x (точки координат x клика). Мы высчитываем вертикальное расстояние между точками таким же способом и сохраняем результат как diffY.

//далее функция getDistance использует теорему пифагора, чтобы высчитать расстояние между двумя точками. Эта теорема твердит, что в правильном треугольнике, в котором a и b - это длинна двоих сторон, которые граничат из прямым углом, а сторона c являет собой длинну диагональной стороны (гипотенузы), a2 +b2 = c2; Учитывая длинну сторон a и b мы можем высчитать длинну гипотенузы, применяя в расчётах квадраты сторон - a2 + b2.

// Чтобы высчитать расстояние между событием и целью мы трактуем две точки так, как буд то они есть частью правильного треугольника.

// в Функции getDistance переменный параметр diffX - это длинна нижней горизонтали треугольника, а diffY - это длинна верхней вертикальной точки треугольника.

// ЧТобы высчитать расстояние между кликом и сокровищем, нам необходимо высчитать длинну гипотенузы, базируясь на длиннах diffX и diffY

// Чтобы получить длинну гипотенузы , мы сперва должны поднести diffX и diffY к квадрату . Потом мы плюсуем эти поднесённые к квадрату значения и получаем корень квадратный, пользуясь javascript-функцей Math.sqrt.
// Функция getDistance подсчитывает всё это и возвращает результат.

//Оповещаем игрока, как близко он подошёл:

// Когда мы знаем расстояние между кликом и сокровищем, нам нужно сообщить игроку насколько близко он подошёл к сокровищу, при этом не указывая ему точного расстояния.

//Для этого мы используем функцию getDistanceHint:

var getDistanceHint = function (distance) {
    if (distance < 10) {
        return "Boiling hot!";
    } else if (distance < 20) {
        return "Really hot";
    } else if (distance < 40) {
        return "Hot";
    } else if (distance < 80) {
        return "Warm";
    } else if (distance < 160) {
        return "Cold";
    } else if (distance < 320) {
        return "Really cold";
    } else {
        return "Freezing!";
    }
};

// Эта функция возвращает нам разные рядки в зависимости от высчитанного расстояния к сокровищу.
// Мы выводим сообщения на жкран игрока, добавляя его как текст в p-элемент веб страницы:
var distance = getDistance(event, target);
var distanceHint = getDistanceHint(distance);
$("#distance").text(distanceHint);
// Сначала мы вызываем функцию getDistance и потом сохраняем её результат как переменный параметр distance.
// Потом ми передаём это расстояние функции getDistanceHint, чтобы выбрать полагающийся рядок и зберечь его как distanceHint.
// код $("#distance").text(distanceHint); выбирает элемент id которого - "distance", в нашем случае элемент p, и задаёт его текст в distanceHint, чтобы каждый раз, когда игрок кликает по карте, на веб странице было сообщение о том, насколько игрок близко или далеко к цели.