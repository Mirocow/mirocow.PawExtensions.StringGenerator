var StringGenerator = function() {
    this.evaluate = function(context) {
       return this.stringGenerator(this.size);
    };
		this.stringGenerator = function (length) {
		   var result           = '';
			 switch (this.algorithm) {
			   case '1':
			     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
			     break;
			   case '2':
			     var characters = 'abcdefghijklmnopqrstuvwxyz';
			     break;
			   case '3':
			     var characters = '0123456789';
			     break;
			   case '4':
			     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
			     break;
			   case '5':
			     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789{}[](),./\\:;?!*&@~`\'"';
			     break;
			   default:
			     var characters = this.characters;
			 }
		   var charactersLength = characters.length;
		   for ( var i = 0; i < length; i++ ) {
		      result += characters.charAt(Math.floor(Math.random() * charactersLength));
		   }
		   return result;
		}
};


StringGenerator.identifier = 'com.mirocow.PawExtensions.StringGenerator';
StringGenerator.title = 'String generator';
StringGenerator.help = 'https://github.com/mirocow/mirocow.PawExtensions.StringGenerator';
StringGenerator.inputs = [
    InputField('size', 'Size', 'String', {
			placeholder: 'input string length', 
			defaultValue: '32',
			persisted: true
		}),
	  InputField('algorithm', 'Algorithm', 'Select', {
	      choices: {
					'1': 'A-Z', 
					'2': 'a-z', 
					'3': '0-9',  
					'4': 'Default',
					'5': 'All',
					'6': 'Custom'
				},
			  defaultValue: 'all',  
	      persisted: true
	  }),
    InputField('characters', 'Characters', 'String'),
];

registerDynamicValueClass(StringGenerator);
