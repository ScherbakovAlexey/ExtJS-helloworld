Ext.define("Classes.Manager", {
  extend: "Classes.Person",
  config: {
    department: "sales"
  },
  constructor: function(name, surname, department) {
    this.initConfig();
    if (department) {
      this.setDepartment(department);
    }
    this.callParent([name, surname]);
  },
  getInfo: function() {
    this.callParent();
    alert("Department: " + this.department);
  }
});
