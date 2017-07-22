Sounds = new Mongo.Collection("sounds");

Sounds.allow({
  insert: function(userId,doc){
    return true;
  },
});

// Images.allow({
//   insert: function(userId,doc){
//     // console.log(userId);
//     // console.log(doc);
//     return verifyUser(userId,doc);
//   },
//   remove: function(userId,doc){
//     return verifyUser(userId,doc);
//   },
//   update: function(){
//     if (Meteor.user()){
//       return true;
//     }
//     else{
//       return false;
//     }
//   },
// });