Package.describe({
  summary: "Meteor implementation of the glDatePicker plugin for jQuery."
});

Package.on_use(function(api){

  api.use('jquery', 'client');

  api.add_files([
    'lib/glDatePicker/styles/glDatePicker.darkneon.css',
    'lib/glDatePicker/styles/glDatePicker.default.css',
    'lib/glDatePicker/styles/glDatePicker.flatwhite.css',
    'lib/glDatePicker/glDatePicker.min.js'
  ], 'client');
  
});