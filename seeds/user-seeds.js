const { User } = require('../models');

const userData = [
    {
        username: "Anakin_Sky",
        twitter: "AnakinSky",
        github: "AnakinSky",
        email: "AnakinSky1@gmail.com",
        password: "!password1"
    },
    {
        username: "Luke_Sky",
        twitter: "LukeSky",
        github: "LukeSky",
        email: "LukeSky2@gmail.com",
        password: "!password2"
    },
    {
        username: "Han_Solo",
        twitter: "HanSolo",
        github: "HanSolo",
        email: "HanSolo3@gmail.com",
        password: "!password3"
    },
    {
        username: "leia_Sky",
        twitter: "leiaSky",
        github: "leiaSky",
        email: "leiaSky4@gmail.com",
        password: "!password4"
    },
    {
        username: "Obi_Ko",
        twitter: "ObiKo",
        github: "ObiKo",
        email: "ObiKo5@gmail.com",
        password: "!password5"
    },
    {
        username: "Chewy_B",
        twitter: "ChewyB",
        github: "ChewyB",
        email: "ChewyB6@gmail.com",
        password: "!password6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;