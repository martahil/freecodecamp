function checkbtn() {

  /*4*/
  var textInput = document.getElementById('text-input');
  if (textInput.value === "") {
    console.log(`/*4*/ The input field is empty. The textInput variable length is ${textInput.value.length}.`)
    alert("Please input a value");
  }

  /*5*/ /*6*/
  var cleanedInput = textInput.value.replace(/[^a-zA-Z0-9 ]/g, '');
  cleanedInput = cleanedInput.toUpperCase();
  var reversedString = cleanedInput.split('').reverse().join('');
  if (!cleanedInput.includes(" ") && cleanedInput === reversedString && textInput.value != "") {
    result.innerHTML = `<strong>${textInput.value}</strong> is a palindrome`
    console.log(`Item 6) Just one word (without space). The variable cleanedInput is ${cleanedInput}. The variable reversedString is ${reversedString}. The textInput.value is ${textInput.value}`);
  }

  /*7*/
  /* The item 7 means that the result.innerHTML should include the textInput.value in the result text.*/

  /*8*/ /*10*/ /*11*/ /*14*/ /*16*/
  var cleanedInputNew = textInput.value.replace(/[^a-zA-Z0-9]/g, '');
  cleanedInputNew = cleanedInputNew.toUpperCase();
  var reversedStringNew = cleanedInputNew.split('').reverse().join('');
  if (cleanedInput.includes(" ") && cleanedInputNew === reversedStringNew) {
    result.innerHTML = `<strong>${textInput.value}</strong> is a palindrome`
    console.log(`Item 8) More than two words. The variable cleanedInput is ${cleanedInputNew}. The variable reversedString is ${reversedStringNew}. The textInput.value is ${textInput.value}`)
  }

  /*9*/ /*12*/ /*13*/ /*15*/ /*17*/
  else {
    if (cleanedInput != reversedString) {
      result.innerHTML = `<strong>${textInput.value}</strong> is not a palindrome`
      console.log(`Item 9) It's NOT a palindrome case (else). The variable cleanedInput is ${cleanedInput}. The variable reversedString is ${reversedString}. The textInput.value is ${textInput.value}.`)
    }
  }

}


