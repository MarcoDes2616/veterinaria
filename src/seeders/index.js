const sequelize = require('../utils/connection');
const Role = require('../models/Role');
const Shift = require('../models/Shift');
const Specialty = require('../models/Specialty');
const User = require('../models/User');
const AppointmentStatus = require('../models/AppointmentStatus');

const roles = [
    {name: "admin"}, {name: "vet"}, {name: "client"}
]
const shift = [{name: "Mañana"}, {name: "Tarde"}]

const specialities = [{name: "Medicina interna"}, {name: "Cirugía"}, 
    {name: "Dermatología"}, {name: "Oncología"}, {name: "Odontología"}, 
    {name: "Oftalmología"}, {name: "Cardiología "}, {name: "Neurología"},
    {name: "Emergencia y cuidados críticos"}]

const appointmentStatus = [{name: "active"}, {name: "completed"}, {name: "canceled"}]

const users = [
  { firstname: "Marco", lastname: 'Cardenas', email: 'john@example.com', password: "12345678", roleId: 3 }
];


async function seedCreate() {
    await Role.bulkCreate(roles)
    await Shift.bulkCreate(shift)
    await Specialty.bulkCreate(specialities)
    await User.bulkCreate(users);
    await AppointmentStatus.bulkCreate(appointmentStatus)
}


// agregar force: true a la configuración de Sequelize
sequelize.sync({ force: true }).then(async () => {
  await seedCreate();
  console.log('Seeding completed successfully.');
}).catch((error) => {
  console.error('Error seeding database:', error);
});

