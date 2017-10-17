
Meteor.startup(function(){
//     console.log("*".repeat(40));
		
// 	TelegramBot.token = '297440951:AAFmSEvtKksGrbMy7KfxnFaqxqydyilJu6g';
// 	TelegramBot.start(); // start the bot
	

//     TelegramBot.addListener('/id', function(command, username, original) {

//     // TelegramBot.method('sendLocation',{
//         // chat_id: original.chat.id,
//         // latitude: 59.329323,
//         // longitude: 18.068581
//     // });
//     var telegramObj = new Object();
//     telegramObj = original;
//     telegramId = telegramObj.chat.id;
//     var telegramFirstName = telegramObj.chat.first_name;
//     var telegramLastName = telegramObj.chat.last_name;
//     console.log(telegramId);
//     TelegramBot.send("Thanks *" + telegramFirstName + " " + telegramLastName + 
//         "*. Now you would be able to request our contents to be delivered into your Telegram.", telegramId, true);
// });

    Meteor.Mailgun.config({
      username: 'postmaster@sandbox16ca40978c4c4a7a94484fe7380f645b.mailgun.org',
      password: '6e87457e3b97d1d6336922c638dcdbd6'
    });

    
	
	Meteor.methods({
		insertMessage: function(){
        // console.log(schemaObj);
        // if (this.userId){
            // schemaObj.createdOn = new Date();
            // schemaObj.userId = this.userId;
            // var t = Messages.insert(schemaObj);
            // console.log(t);
            // var chatId = "RyanBraving";
            // var chatId = "224570095"; // Ariana
            var chatId = "105209237"; // Ryan
            // console.log(chatId);
            // var messageObj = new Object();
            // messageObj.chat_id = chatId;
            // messageObj.text = "hiiiiiiiii";
            // console.log(messageObj);
            var audioObj = new Object();
            audioObj.chat_id = telegramId;
            audioObj.audio = "https://dl.dropboxusercontent.com/s/cbiz1kgu5b9uigv/apple1.mp3?dl=0";
            TelegramBot.method('sendAudio', audioObj);
            // TelegramBot.send("hiiiiiiiii", chatId);
            // t = TelegramBot.method(getMe);
            // console.log(t);
        // }
        // return;

    	},
}); // /Methods function


}); // startup

Meteor.methods({
    sendEmail: function (mailFields) {
        console.log("about to send email...");
        check([mailFields.to, mailFields.from, mailFields.subject, mailFields.text, mailFields.html], [String]);

        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete.
        this.unblock();

        Meteor.Mailgun.send({
            to: mailFields.to,
            from: mailFields.from,
            subject: mailFields.subject,
            text: mailFields.text,
            html: mailFields.html
        });
        console.log("email sent!");
    }
  });


Meteor.publish("sounds", function(){
    return Sounds.find();
});

