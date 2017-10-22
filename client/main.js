Meteor.subscribe("sounds");
// $(document).ready(function(){
//     $('[data-toggle="tooltip"]').tooltip();   
// });


Template.header.rendered = function() {
   $('#languageSelector').tooltip(); //initialize all tooltips in this template
   // $("li").click(function(){
            // remove the class i.e. selectednav from all li
      // $('.nav li').removeClass("active");
            // apply selectednav class to the current item
	  // $(this).addClass("active");
    // });
   // $("#languageSelector").text("English");
   // $("#languageSelector").text("فارسی");
   // var language = $("#languageSelector").text();
   // pageLoadingLanguage(language);
   
   
   // $("#languageSelector").click();

};

Template.slug.rendered = function() {
// Template.slug.created = function() {
    // $(document).ready(function() {
  	// 	var language = Session.get("language");
  	// 	if (language =="english"){
   //  		$(".commentable-section").css("direction", "ltr");
   //  		console.log("english left to right");
   //  		console.log($(".commentable-section").length);
   //  	}
 		//  else{
 		//  	$(".commentable-section").css("direction", "rtl");
 		//  	$(".commentable-section").css("background-color", "#00FF00");
	  // 		// console.log("Farsi right to left");
	  // 		console.log($(".commentable-section"));
   //  		}
   //  	// var isAvail = document.getElementsByClassName('commentable-section');

  	$("#languageSelector").hide();
	// });
};
// };

Template.blog.rendered = function() {
	$("#blog").click();

   $("#languageSelector").show();
};


Template.header.events({
	"click .js-language-selector":function(event){
		var language = event.currentTarget.text;
		// change to farsi
		if (language == "فارسی"){
			// Session.set("language", "فارسی");
			$("#languageSelector").text("English");
			$("#couching").text("کوچینگ");
			$("#podcasts").text("پادکست");
			$("#blog").text("بلاگ");
			$("#languageSelector").attr("href", "/blog/tag/فارسی")
			// $(".commentable-section").removeClass("ltr");
	  		// $(".commentable-section").addClass("rtl");
		}
		// change to EN
		if (language == "English"){
			// Session.set("language", "english");
			$("#languageSelector").text("فارسی");
			$("#couching").text("Couching");
			$("#podcasts").text("Podcasts");
			$("#blog").text("Blog");
			$("#languageSelector").attr("href", "/blog/tag/english")
			// $(".commentable-section").removeClass("rtl");
  	  		// $(".commentable-section").addClass("ltr");
			
		}
		$('#languageSelector').tooltip('hide');

	},

	"click #blog": function(){
		var language = $("#languageSelector").text();
		console.log(language);
		if (language == "فارسی"){ 
			$("#blog").attr("href", "/blog/tag/english");
		}
		if (language == "English"){ 
			$("#blog").attr("href", "/blog/tag/فارسی");
		}
	},

});

Template.home.events({
	// "submit .js-add-sound":function(event){
	"submit .js-ryan": function(event){
		event.preventDefault();
		// var snd_src, img_alt;
		// snd_src = event.target.snd_src.value;
		// snd_title = event.target.snd_title.value;
		console.log("test");

		var name = event.target.inputName.value;
		var email = event.target.inputEmail.value;
		// return false;
		Meteor.call('sendEmail',{
    		to: email,
    		from: 'no-reply@BravingAcademy.com',
    		subject: 'Welcome to Braving Academy!',
    		text: 'Mailgun is totally awesome for sending emails!',
    		// html: 'With meteor it&apos;s easy to set up <strong>HTML</strong> <span style="color:red">emails</span> too.'
    		html: 'Thanks <strong>' + name + '</strong>. Someone from <strong>Braving Academy</strong> will contact you soon.'
  		});
	}, // js-load-doc event


	"click .js-show-modal-subscribe":function(event){
		$("#myModalSubscribe").modal("show");
	},



});

Template.sound_add_form_btn.events({
	"click .js-show-fileinput":function(event){

		// bootbox.alert({
		//     message: "This is an alert with a callback!",
		//     callback: function () {
		//         console.log('This was logged in the callback!');
		//     },
		//     size: 'large',
		//     backdrop: true,
		//     // className: 'bb-alternate-modal'
		// });

		// bootbox.confirm({
		//     title: "Destroy planet?",
		//     message: "Do you want to activate the Deathstar now? This cannot be undone.",
		//     buttons: {
		//         cancel: {
		//             label: '<i class="fa fa-times"></i> Cancel'
		//         },
		//         confirm: {
		//             label: '<i class="fa fa-check"></i> Confirm'
		//         }
		//     },
		//     callback: function (result) {
		//         console.log('This was logged in the callback: ' + result);
		//     },
		//     backdrop: true,
		// });

		bootbox.dialog({ message: '<div class="text-center"><i class="fa fa-spin fa-spinner"></i> Loading...</div>' });


		// var dialog = bootbox.dialog({
		// title: 'A custom dialog with buttons and callbacks',
		// message: "<p>This dialog has buttons. Each button has it's own callback function.</p>",
		// buttons: {
		//     cancel: {
		//         label: "I'm a custom cancel button!",
		//         className: 'btn-danger',
		//         callback: function(){
		//             console.log('Custom cancel clicked');
		//         }
		//     },
		//     noclose: {
		//         label: "I'm a custom button, but I don't close the modal!",
		//         className: 'btn-warning',
		//         callback: function(){
		//             console.log('Custom button clicked');
		//             return false;
		//         }
		//     },
		//     ok: {
		//         label: "I'm a custom OK button!",
		//         className: 'btn-info',
		//         callback: function(){
		//             console.log('Custom OK clicked');
		//         }
		//     }
		// },
		// size: 'large',
		// });

	},

}); // Temp


Template.podcasts.events({
	"click .js-sendtotelegram": function(event){
		console.log(this);
		Meteor.call("insertMessage");
		// Session.set("docid", this._id);
	}, // js-load-doc event

	// "click .js-show-fileinput":function(event){
	// 	$("#myModal").modal("show");

	// },

	// "click .js-add-doc": function(event){
	// 	event.preventDefault();
	// 	console.log("Add a new doc!");
	// 	if (!Meteor.user()){ // no logged in user
	// 		alert("You need to log in first!");
	// 	}
	// 	else{ // they have logged in
	// 		var id = Meteor.call("addDoc", function(err, res){
	// 			if(!err){
	// 				console.log("2- event callback received id: "+res);
	// 				Session.set("docid", res);
	// 			}
	// 		});
	// 		console.log("3- event got and id back: "+id);
	// 	}
	// }, // js-add-doc event
}); // Temp


Template.podcasts.helpers({
	isAdminUser: function() {
		// return false;
		if(Meteor.user() && Meteor.user().roles != undefined){
			if(Meteor.user().roles[0] == "blogAdmin"){
				console.log("It is Admin");
				return true;
			} //if
			console.log("It is Not Admin");
			return false;
		}// if		
    }, // isAdminUser helper
    sounds: function(){
		return Sounds.find({});
		// if (Session.get("userFilter")){ //they set a filter
			// return Images.find({createdBy:Session.get("userFilter")},{sort:{createdOn:-1, rating:-1}});
		// }//if
		// else{
		// 	return Images.find({},{sort:{createdOn:-1, rating:-1}, limit:Session.get("imageLimit")});
		// }//else
		
	}, //helper
}); //helper

Template.header.helpers({
	blog: function(){
		var language = $("#languageSelector").text();
		console.log(language);
		// if (language == "فارسی"){ 
			return "/blog/tag/english";
		// }
		// if (language == "English"){ 
		// 	return "/blog/tag/فارسی";
		// }
	},
});

// Template.podcasts.helpers({
// 	sounds: function(){
// 		return Sounds.find({});
		// if (Session.get("userFilter")){ //they set a filter
			// return Images.find({createdBy:Session.get("userFilter")},{sort:{createdOn:-1, rating:-1}});
		// }//if
		// else{
		// 	return Images.find({},{sort:{createdOn:-1, rating:-1}, limit:Session.get("imageLimit")});
		// }//else
		
// 	}, //helper
// });

Template.slug.helpers({
	// blog: function(){
	// 	return "hiiiiiiiiiiiiiiiiiiiiiii";
	// 	var language = Session.get("language");
	// 	if (language =="english"){
 //    		$(".commentable-section").css("direction", "ltr");
 //    		console.log("english left to right");
 //    	}
 // 		 else{
 // 		 	$(".commentable-section").css("direction", "rtl");
	//   		console.log("Farsi right to left");	
	//     }
	// 	return "test";
	// },

	getUser: function(user_id){
		// console.log(user_id);
		// return user_id;
		var user = Meteor.users.findOne({_id:user_id});
		// console.log("user");
		console.log(user);
		if(user){
			return user.emails[0].address;
		}//if
		else{
			return "anonymous";
		}//else
	},//helper
	// sort: function(get_body){
		// console.log(get_body);
		// document.body.innerHTML = get_body;
		// var y = $(get_body);
		// console.log(get_body);
		// console.log(y.length);
		// return y[0].textContent;
		// return y;
	// },
	english: function(id){
		var englishTag = Blog.Post.find({$and:
			[{_id:id},
			{tags:"english"}]
			}).fetch()[0];
		if(englishTag){
			return true;
		}
		return false;

		// if (Session.get("language") == "english"){
		// 	console.log("true");
		// 	return true;
		// }
		// console.log("false");
		// return false;
	},

});

Template.blog.helpers({
	// console.log("hiii");

	mehdi: function(){
		var language = Session.get("language");
		console.log(language);
		// return Blog.Post.find({_id : "K2TemzuLnQTXhipR4"});
		return Blog.Post.find({tags : language});
	},
	english: function(id){
		var englishTag = Blog.Post.find({$and:
			[{_id:id},
			{tags:"english"}]
			}).fetch()[0];
		if(englishTag){
			return true;
		}
		return false;
	},
	// posts: function(){

		// var t = Blog.Post.find({_id : "K2TemzuLnQTXhipR4"});
		// console.log(t);
		// return t;
	// },
});//helpers function


// Template.sound_add_form.events({
// 	// "click .js-add-image":function(event){
// 	"submit .js-add-sound":function(event){
// 		console.log("hiiiiiiiiiiiiiiiiiiiiiiii");
// 		var snd_src, img_alt;
// 		snd_src = event.target.snd_src.value;
// 		snd_title = event.target.snd_title.value;
// 		// img_src = $("#img_src").val();
// 		// img_alt = $("#img_alt").val();
// 		console.log(snd_src);
// 		console.log(snd_title);
// 				// return false;

// 		if (Meteor.user()){
// 			Sounds.insert({
// 				snd_src:snd_src,
// 				title:snd_title,
// 				createdOn: new Date(),
// 				createdBy: Meteor.user()._id
// 			}); //Image.insert
// 		}// if
// 		// console.log(Meteor.User());
// 		$("#exampleModal").modal("hide");
// 		return false;

// 	},

// 	// "click .js-show-image-form":function(event){
// 	// 	$("#exampleModal").modal("show");		
// 	// 	return false;
// 	// },
// });


function pageLoadingLanguage(language){
	console.log(language);
	if (language == "فارسی"){
		// Session.set("language", "فارسی");
		$("#languageSelector").text("English");
		// $("#news").text("اخبار");
		// $("#blog").text("بلاگ");
		// $("#languageSelector").attr("href", "/blog/tag/فارسی")
	} // if
	// change to EN
	if (language == "English"){
		$("#languageSelector").text("فارسی");
		// $("#news").text("News");
		// $("#blog").text("Blog");
		// $("#languageSelector").attr("href", "/blog/tag/english")		
	} // if
	$("#languageSelector").click();
} // function

$(function() {
$(document).on('change', ':file', function() {
	console.log($(this));
    var input = $(this),
        numFiles = input.get(0).files ? input.get(0).files.length : 1,
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [numFiles, label]);
    console.log(input);
  });

$(document).ready( function() {
      $(':file').on('fileselect', function(event, numFiles, label) {

          var input = $(this).parents('.input-group').find(':text'),
              log = numFiles > 1 ? numFiles + ' files selected' : label;

          if( input.length ) {
              input.val(log);
          } else {
              if( log ) alert(log);
          }

      });
  });
});