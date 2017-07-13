$("document").ready(function() {
  $("button").click(function() {
  })
});

(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

const MenupullAPI = "https://galvanize-eats-api.herokuapp.com/menu"
var $SetSelect = $('#gEatsMenu')

$.get(MenupullAPI)
  .then(function(data){
    console.log(data);
for (let i = 0; i < data.menu.length; i++) {
  $SetSelect.append("<option><p>" + data.menu[i].name + "</p></option>")
}
})

$(".menuContainer").empty();
for (let i = 0; i < menu.length; i++) {
       var menui = menu[i];
       var menupulldown = menui.name + menui.price;
       $(menuContainer).append(name + price)

$.get(gEatsMenu.then(function(data) {
    var cards = data.menu[i].price;
    for (let i = 0; i < menu.length; i++) {
      updatePage(menu[i]);

      }
  }
