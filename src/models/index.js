const Appointment = require("./Appointment");
const AppointmentStatus = require("./AppointmentStatus");
const Pet = require("./Pets");
const Shift = require("./Shift");
const Specialty = require("./Specialty");
const TimeAssignment = require("./TimeAssignment");
const User = require("./User");
const Vet = require("./Vet");


User.hasMany(Pet)
Pet.belongsTo(User)

Shift.hasMany(TimeAssignment)
TimeAssignment.belongsTo(Shift)

Specialty.hasMany(Vet)
Vet.belongsTo(Specialty)

Vet.hasMany(TimeAssignment)
TimeAssignment.belongsTo(Vet)

Pet.hasMany(Appointment)
Appointment.belongsTo(Pet)

AppointmentStatus.hasMany(Appointment)
Appointment.belongsTo(AppointmentStatus)

Vet.hasMany(Appointment)
Appointment.belongsTo(Vet)