const mongoose = require('mongoose');

const permissionSetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  permissions: {
    users: {
      add: { Admin: Boolean, Accountant: Boolean, Manager: Boolean, EndUser: Boolean },
      delete: { Admin: Boolean, Accountant: Boolean, Manager: Boolean, EndUser: Boolean },
      update: { Admin: Boolean, Accountant: Boolean, Manager: Boolean, EndUser: Boolean },
      modify: { Admin: Boolean, Accountant: Boolean, Manager: Boolean, EndUser: Boolean }
    },
    bookings: {
      add: { Admin: Boolean, Accountant: Boolean, Manager: Boolean, EndUser: Boolean },
      delete: { Admin: Boolean, Accountant: Boolean, Manager: Boolean, EndUser: Boolean },
      update: { Admin: Boolean, Accountant: Boolean, Manager: Boolean, EndUser: Boolean },
      modify: { Admin: Boolean, Accountant: Boolean, Manager: Boolean, EndUser: Boolean }
    },
    invoices: {
      add: { Admin: Boolean, Accountant: Boolean, Manager: Boolean, EndUser: Boolean },
      delete: { Admin: Boolean, Accountant: Boolean, Manager: Boolean, EndUser: Boolean },
      update: { Admin: Boolean, Accountant: Boolean, Manager: Boolean, EndUser: Boolean },
      modify: { Admin: Boolean, Accountant: Boolean, Manager: Boolean, EndUser: Boolean }
    },
    reports: {
      view: { Admin: Boolean, Accountant: Boolean, Manager: Boolean, EndUser: Boolean },
      generate: { Admin: Boolean, Accountant: Boolean, Manager: Boolean, EndUser: Boolean },
      download: { Admin: Boolean, Accountant: Boolean, Manager: Boolean, EndUser: Boolean }
    },
    settings: {
      access: { Admin: Boolean, Accountant: Boolean, Manager: Boolean, EndUser: Boolean },
      modify: { Admin: Boolean, Accountant: Boolean, Manager: Boolean, EndUser: Boolean }
    }
  }
});

module.exports = mongoose.model('PermissionSet', permissionSetSchema);




// const mongoose = require('mongoose');

// const permissionSchema = new mongoose.Schema({
//   resource: { type: String, required: true },
//   actions: {
//     add: { type: Boolean, default: false },
//     delete: { type: Boolean, default: false },
//     update: { type: Boolean, default: false },
//     modify: { type: Boolean, default: false },
//     view: { type: Boolean, default: false },
//     generate: { type: Boolean, default: false },
//     download: { type: Boolean, default: false }
//   }
// });

// module.exports = mongoose.model('Permission', permissionSchema);
