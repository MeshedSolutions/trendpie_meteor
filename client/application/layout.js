Template.layout.onRendered(function () {
  $(".SlideM .MenuLinks").eq(0).hide();

  $(".SlideM .menuBtn").click(function () {
    $(".SlideM .MenuLinks").slideToggle("fast");
  });

  $(".SlideM .closeBtn").click(function () {
    $(".SlideM .MenuLinks").slideToggle("fast");
  });
});

