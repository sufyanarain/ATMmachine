  const atmFunc = () => {
    let requiredAmount = document.getElementById('amountInp').value;
    let selectCurrency = document.getElementById("selectCurrency");
    selectCurrency = +selectCurrency.options[selectCurrency.selectedIndex].text;
    if (requiredAmount / (200 * selectCurrency) < 1 ) {
        alert('please enter correct amount')
        return null
    }
    let availableNotes = [500, 100, 50, 20, 10, 5, 1];
    const preferredNoteIndex = availableNotes.indexOf(selectCurrency); //finding prefered note's index
    requiredAmount = requiredAmount - (200 * selectCurrency); //decrease amount of preferred notes (200)
    availableNotes.splice(preferredNoteIndex, 1); // deleting value of reqNotesQuantity from array

    let resultArray = []; //array for generated notes
    for (let i = 0; i < availableNotes.length; i++) {
        resultArray.push(Math.floor(requiredAmount / availableNotes[i]));
        requiredAmount = requiredAmount % availableNotes[i]; // updating requiredAmount after minus 
    }
    resultArray.splice(preferredNoteIndex, 0, 200); // update array ,,added reqNotesQuantity value in the array
    if (requiredAmount > 0) {      //condition for fixing error on '1' preferred note 
        let bal = 5 - requiredAmount
        resultArray[6] = resultArray[6] - bal
        resultArray[5]++
    }
    renderFunc(resultArray)
}
const renderFunc = (resultArray) => {
    let notesUl = document.getElementById('notesUl');
    let notesNames = ['fiveHundred', 'hundred', 'fifty', 'twenty', 'ten', 'five', 'one']
    notesUl.innerHTML = ''
    for (let i = 0; i < resultArray.length; i++) {
        notesUl.innerHTML += `<li>${notesNames[i]} : ${resultArray[i]} </li>`
    }
}
