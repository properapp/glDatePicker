# glDatePicker for Meteor

Meteor implementation of [glDatePicker](https://github.com/glad/glDatePicker title="glDatePicker on Github") for jQuery.

## Usage

Install via [Meteorite](https://github.com/oortcloud/meteorite title="Meteorite on Github"): 

` mrt add gldatepicker `

Add to your template's rendered function:

' 
Template.[Template Name].rendered = function() {
  $(".datepicker").glDatePicker(); 
}
'