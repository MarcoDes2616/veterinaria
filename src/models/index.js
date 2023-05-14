const Appointment = require("./Appointment");
const AppointmentStatus = require("./AppointmentStatus");
const ClinicHistory = require("./ClinicHistory");
const ClinicalNote = require("./ClinicalNotes");
const Pet = require("./Pet");
const Role = require("./Role");
const Shift = require("./Shift");
const Specialty = require("./Specialty");
const TimeAssignment = require("./TimeAssignment");
const User = require("./User");
const Vet = require("./Vet");


User.hasMany(Pet)
Pet.belongsTo(User)

Role.hasMany(User)
User.belongsTo(Role)

Shift.hasMany(TimeAssignment)
TimeAssignment.belongsTo(Shift)

User.hasMany(Vet, {foreignKey: "userId"})
Vet.belongsTo(User, {foreignKey: "userId"})

Specialty.hasMany(Vet, {foreignKey: "specialtyId"})
Vet.belongsTo(Specialty, {foreignKey: "specialtyId"})

Vet.hasMany(TimeAssignment)
TimeAssignment.belongsTo(Vet)

Pet.hasMany(Appointment)
Appointment.belongsTo(Pet)

AppointmentStatus.hasMany(Appointment)
Appointment.belongsTo(AppointmentStatus)

Vet.hasMany(Appointment)
Appointment.belongsTo(Vet)

Pet.hasOne(ClinicHistory)
ClinicHistory.belongsTo(Pet)

ClinicHistory.hasMany(ClinicalNote)
ClinicalNote.belongsTo(ClinicHistory)

Vet.hasMany(ClinicalNote)
ClinicalNote.belongsTo(Vet)