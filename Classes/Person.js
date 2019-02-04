Ext.define("Classes.Person", {
  config: {
    name: "Eugene",
    surname: "Popov"
  },
  constructor: function(name, surname) {
    this.initConfig();
    if (name) {
      this.setName(name);
    }
    if (surname) {
      this.setSurname(surname);
    }
  },
  getInfo: function() {
    alert("Full name: " + this.name + " " + this.surname);
  }
});
