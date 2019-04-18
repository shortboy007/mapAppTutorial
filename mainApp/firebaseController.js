var locationsRef = firebase.database().ref('locationData/');
var locationsDataArray = [];

locationsRef.on('value', function(snapshot){
    
    snapShotToArray(snapshot);
    updateLocations();
    
} );

function snapshotToArray(snapshot){
    var locationArray = [];
    snapshot.forEach(function(childSnapshot){
        
        var item = childSnapshot.val();
        locationArray.push(item);
    });
    
   locationArray = locationsDataArray;
    
}