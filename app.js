Ext.application({
  name: "HelloExt",
  launch: function() {
    Ext.create("Ext.container.Viewport", {
      layout: "fit",
      items: [
        {
          title: "ExtJS Application",
          html: "<h3>Hello world ExtJS!</h3>"
        }
      ]
    });
  }
});
