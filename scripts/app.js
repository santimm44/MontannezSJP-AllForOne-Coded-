//Add2Numbers
const apiCallAdding2Numbers = async (FirstNumber, SecondNumber) => {
    const fetchData = await fetch(`https://lvl2allforoneapi-c6e3fbfzctccavhq.westus-01.azurewebsites.net/AddingTwoNumber/AddingTwoNumbers/${FirstNumber},${SecondNumber}`,{
        method: "POST"
    })
    const data = await fetchData.text()
    return data;
}

const btnAdd2Numbers = document.getElementById("btnAdd2Numbers");
const add2NumbersFirstNumber = document.getElementById("add2NumbersFirstNumber");
const add2NumbersSecondNumber = document.getElementById("add2NumbersSecondNumber");
const add2NumbersAPIResponse = document.getElementById("add2NumbersAPIResponse");

if(btnAdd2Numbers){
    btnAdd2Numbers.addEventListener("click", async () => {
        let FirstNumber = add2NumbersFirstNumber.value;
        let SecondNumber = add2NumbersSecondNumber.value;
    
        add2NumbersAPIResponse.innerText = await apiCallAdding2Numbers(FirstNumber, SecondNumber);
    })
}



//Asking Questions

const apiCallAskingQuestions = async(time,name)=>{
    const fetchData = await fetch(`https://lvl2allforoneapi-c6e3fbfzctccavhq.westus-01.azurewebsites.net/AskingQuestion/GoodMorning/${time},${name}`,{
        method: "POST"
    })
    const data = await fetchData.text()
    return data;
}

const btnAskingQuestions = document.getElementById("btnAskingQuestions")
const askingQuestionsName = document.getElementById("askingQuestionsName")
const askingQuestionsTime = document.getElementById("askingQuestionsTime")
const askingQuestionsAPIResponse = document.getElementById("askingQuestionsAPIResponse")

if(btnAskingQuestions){
    btnAskingQuestions.addEventListener("click", async ()=> {
        let time = askingQuestionsTime.value;
        let name = askingQuestionsName.value;
    
        askingQuestionsAPIResponse.innerText = await apiCallAskingQuestions(time,name)
    })
}

//Hello World
const apiCallHelloWorld= async(name)=>{
    const fetchData = await fetch(`https://lvl2allforoneapi-c6e3fbfzctccavhq.westus-01.azurewebsites.net/HelloWorld/HelloWorld/${name}`,{
        method: "POST"
    })
    const data = await fetchData.text()
    return data;
}

const btnHelloWorld = document.getElementById("btnHelloWorld")
const helloWorldName = document.getElementById("helloWorldName")
const helloWorldAPIResponse = document.getElementById("helloWorldAPIResponse")

if(btnHelloWorld){
    btnHelloWorld.addEventListener("click", async ()=>{
        let name = helloWorldName.value;
        console.log(await apiCallHelloWorld(name))
        helloWorldAPIResponse.innerText = await apiCallHelloWorld(name);
    })
}
//Mablib
const apiCallMadlib= async(monster,monsterAdjec,noun1,noun2,object1,object2,location,location2,userName,userNameAdjec)=>{
    const fetchData = await fetch(`https://lvl2allforoneapi-c6e3fbfzctccavhq.westus-01.azurewebsites.net/Madlib/Madlib/${monster},${monsterAdjec},${noun1},${noun2},${object1},${object2},${location},${location2},${userName},${userNameAdjec}`,{
        method: "POST"
    })
    const data = await fetchData.text()
    return data;
}

const btnMadlib = document.getElementById("btnMadlib")
const madlibMonster = document.getElementById("madlibMonster")
const madlibMonsterAdjective = document.getElementById("madlibMonsterAdjective")
const madlibNoun1 = document.getElementById("madlibNoun1")
const madlibNoun2 = document.getElementById("madlibNoun2")
const madlibObject1 = document.getElementById("madlibObject1")
const madlibObject2 = document.getElementById("madlibObject2")
const madlibLocation1 = document.getElementById("madlibLocation1")
const madlibLocation2 = document.getElementById("madlibLocation2")
const madlibUserName = document.getElementById("madlibUserName")
const madlibAdjective = document.getElementById("madlibAdjective")
const inputDiv = document.getElementById("inputDiv")
const madlibDiv = document.getElementById("madlibDiv")

if(btnMadlib){
    btnMadlib.addEventListener("click", async() =>{
        let monster = madlibMonster.value;
        let monsterAdjective = madlibMonsterAdjective.value;
        let noun1 = madlibNoun1.value;
        let noun2 = madlibNoun2.value;
        let object1 = madlibObject1.value;
        let object2 = madlibObject2.value;
        let location1 = madlibLocation1.value;
        let location2 = madlibLocation2.value;
        let userName = madlibUserName.value;
        let userNameAdjec = madlibAdjective.value;

        let message = await apiCallMadlib(monster,monsterAdjective,noun1,noun2,object1,object2,location1,location2,userName,userNameAdjec);

        madlibDiv.removeChild(inputDiv)

        let newDiv = document.createElement("div");
        let innerh2 = document.createElement("h2")
        madlibDiv.appendChild(newDiv);
        newDiv.appendChild(innerh2);

        innerh2.className = "text-[2rem] mt-16 ps-16";
        innerh2.innerText = message;
    })
}
//magic 8 ball
const apiCallMagic8Ball= async(question)=>{
    const fetchData = await fetch(`https://lvl2allforoneapi-c6e3fbfzctccavhq.westus-01.azurewebsites.net/Magic8Ball/Magic8Ball/${question}`,{
        method: "GET"
    })
    const data = await fetchData.text()
    return data;
}
const btnMagic8Ball = document.getElementById("btnMagic8Ball");
const magic8BallQuestion = document.getElementById("magic8BallQuestion")
const magic8BallAPIResponse = document.getElementById("magic8BallAPIResponse")
if(btnMagic8Ball){
    btnMagic8Ball.addEventListener("click", async()=>{
        let question = magic8BallQuestion.value;

        magic8BallAPIResponse.innerText = "The Magic 8 Ball Says: " + await apiCallMagic8Ball(question);
    })
}
//odd or even
const apiCallOddOrEven= async(number)=>{
    const fetchData = await fetch(`https://lvl2allforoneapi-c6e3fbfzctccavhq.westus-01.azurewebsites.net/OddOrEven/OddOrEven/${number}`,{
        method: "POST"
    })
    const data = await fetchData.text()
    return data;
}
const btnOddOrEven = document.getElementById("btnOddOrEven")
const oddOrEvenNumber = document.getElementById("oddOrEvenNumber")
const oddOrEvenAPIResponse = document.getElementById("oddOrEvenAPIResponse")

if(btnOddOrEven){
    btnOddOrEven.addEventListener("click", async()=>{
        let number = oddOrEvenNumber.value;
        oddOrEvenNumber.value=""
        oddOrEvenAPIResponse.innerText=await apiCallOddOrEven(number) + ` Number ${number}`;
    })
}
// restaurant picker
const apiCallRestaurantPicker= async(PickMexicanItalianOrChinese)=>{
    const fetchData = await fetch(`https://lvl2allforoneapi-c6e3fbfzctccavhq.westus-01.azurewebsites.net/RestaurantPicker/RestaurantPicker/${PickMexicanItalianOrChinese}`,{
        method: "GET"
    })
    const data = await fetchData.text()
    return data;
}
const btnRestaurantPicker = document.getElementById("btnRestaurantPicker")
const restaurantPickerChoice = document.getElementById("restaurantPickerChoice")
const restaurantPickerAPIResponse = document.getElementById("restaurantPickerAPIResponse")

if(btnRestaurantPicker){
    btnRestaurantPicker.addEventListener("click", async()=>{
        let choice = restaurantPickerChoice.value;

        restaurantPickerAPIResponse.innerText= await apiCallRestaurantPicker(choice);

        restaurantPickerChoice.value=""
    })
}

//reverse alphanumeric
const apiCallReverseAlphanumeric= async(userInput)=>{
    const fetchData = await fetch(`https://lvl2allforoneapi-c6e3fbfzctccavhq.westus-01.azurewebsites.net/ReverseItAlphanumeric/ReverseIt/${userInput}`,{
        method: "POST"
    })
    const data = await fetchData.text()
    return data;
}

const btnReverseAlphanumeric = document.getElementById("btnReverseAlphanumeric")
const alphaNumericString = document.getElementById("alphaNumericString")
const alphaNumericAPIResponse = document.getElementById("alphaNumericAPIResponse")

if(btnReverseAlphanumeric){
    btnReverseAlphanumeric.addEventListener("click", async()=>{
        let userInput = alphaNumericString.value;

        alphaNumericAPIResponse.innerText= await apiCallReverseAlphanumeric(userInput);
        alphaNumericString.value=""
    })
}
//reverse numbers
const apiCallReverseNumbers= async(number)=>{
    const fetchData = await fetch(`https://lvl2allforoneapi-c6e3fbfzctccavhq.westus-01.azurewebsites.net/ReverseItNumbersOnly/ReverseNumbers/${number}`,{
        method: "POST"
    })
    const data = await fetchData.text()
    return data;
}

const btnReverseNumbers = document.getElementById("btnReverseNumbers")
const reverseNumbersString = document.getElementById("reverseNumbersString")
const reverseNumbersAPIResponse = document.getElementById("reverseNumbersAPIResponse")

if(btnReverseNumbers){
    btnReverseNumbers.addEventListener("click", async()=>{
        let number = reverseNumbersString.value;

        reverseNumbersAPIResponse.innerText = await apiCallReverseNumbers(number)
    })
}

//Greater or Less Than
const apiCallGreaterOrLessThan= async(userFirstNumber,userSecondNumber)=>{
    const fetchData = await fetch(`https://lvl2allforoneapi-c6e3fbfzctccavhq.westus-01.azurewebsites.net/GreaterThanOrLessThan/GreaterOrLessThan/${userFirstNumber}/${userSecondNumber}`,{
        method: "POST"
    })
    const data = await fetchData.text()
    return data;
}

const btnGreaterThanOrLessThan = document.getElementById("btnGreaterThanOrLessThan")
const greaterThanOrLessThanNumber1 = document.getElementById("GreaterThanOrLessThanNumber1")
const greaterThanOrLessThanNumber2 = document.getElementById("GreaterThanOrLessThanNumber2")
const greaterThanOrLessThanAPIResponse = document.getElementById("greaterThanOrLessThanAPIResponse")

if(btnGreaterThanOrLessThan){
    btnGreaterThanOrLessThan.addEventListener("click", async()=>{
        let number1 = greaterThanOrLessThanNumber1.value;
        let number2 = greaterThanOrLessThanNumber2.value;

        greaterThanOrLessThanAPIResponse.innerText = await apiCallGreaterOrLessThan(number1, number2)
    })
}