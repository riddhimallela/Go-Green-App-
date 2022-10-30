  setScreen("accountScreen");



// Collect favorite food data from friends and store it in a table.

onEvent("createAccount", "click", function() {
  var nameData={};
  nameData.name = getText("name");
  nameData.password = getText("password");
  
  
  
  
  
  var i=0;
    var nameArray = getColumn("Accounts","name");
    while(i != nameArray.length){
      i++;
      if(nameArray[i] === nameData.name){
           console.log("its same ");
           setText("rewardsScreen",nameData.name);
           
            readRecords("Accounts", {}, function(records) {
        if (records.length>0) {
            for (var i =0; i < records.length; i++) {
             // write("id: " + records[i].id + " Age:" + records[i].age + " Food: " + records[i].food);
             
            }
        }
        else {
              write("No records to read");
        }      
    });
           
           
           
           
         //  setText("rewardsScreen", get .recycle-points);
         //  setText("rewardsScreen",nameData.reuse-points);
         // setText("rewardsScreen",nameData.greenpoints);

            setScreen("screen4");
            }
      else {
              createRecord("Accounts", nameData, function(record) {
               console.log("Record created with id:" + record.id);
               console.log("Name:" + record.name + " Password: ******" );
              setText("name3",nameData.name);

            setScreen("screen4");

            });
            break;
      }
    } 
  
});



function UserAction() {
   //request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

//request.onload = function () {
  //startWebRequest("https://api.opencagedata.com/geocode/v1/json?q=LAT+LNG&key=c9da930bad9649f2bef395c4176bf5f0",function(status, type, content) {
/* startWebRequest("https://api.opencagedata.com/geocode/v1/json?key=c9da930bad9649f2bef395c4176bf5f0&q=52.3877830%2C9.7334394&pretty=1",function(status, type, content){
  var jsonContent = JSON.parse(content);
      console.log(content+status+type);

  for(var i = 0; i< jsonContent.length; i++){
    console.log(jsonContent[i]);
  }  
});*/
  ///}


// Send request
//request.send();
}

  


setText("label3","Where you headed ? I can help you with choosing green options !!");
UserAction();
  
 
createCanvas("greencanvas");

onEvent("dropdown3", "change", function( ) {

	console.log("Selected option: " + getText("dropdown3"));
	
	getKeyValue(getText("dropdown3"), function (value) {
  console.log("value: " + value);
  setText("label3","Great you can do these when you are heading to " +getText("dropdown3")+"   "+ value);
  
  
  //geolocation code
  
});

});
onEvent("label3", "click", function( ) {
	console.log("label3 clicked!");
});
onEvent("button1", "click", function( ) {
	console.log("button1 clicked!");
	setScreen("rewardsScreen");
	getKeyValue("recycler", function (value) {
  console.log("value: " + value);
  setText("message", value);
  
});
});

setText("GreenPoints", "text");



