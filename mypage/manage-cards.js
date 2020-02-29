/*//DRAKE MORLEY 3308
 @Return void
 @Param cardID - The ID of the card being added to
 The methods adds an additional card (to store a tweet) to the body of the card whose ID was passed in
*/
function addCard(cardID)
{
  console.log("hello");
    // Find the card referenced
    editCard = document.getElementById(cardID);

    // Create a new tweet card
    var tweet = document.createElement("div");
    tweet.className = "card";
    tweet.innerHTML = `
        <div class="text-right">
            <button type="button" class="btn btn-danger" onClick="removeCard(editCard)">Remove</button>
        </div>
        <img class="card-img-top" src="./download.png">
        <div class="card-body">
            <h9 class="card-title text-right">tweet</h9>
        </div>
        `;
    editCard.appendChild(tweet);
}


/*
 @Return void
 @Param cardID - The ID of the card being added to
 The methods adds an additional card (to store a tweet) to the body of the card whose ID was passed in
*/
function removeCard(cardID)
{
  console.log(cardID);
  cardID.removeChild(cardID.lastChild);
}
