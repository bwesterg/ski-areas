# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Area.destroy_all

Area.create([
    {
        name: "Vail",
        state: "Colorado",
        logo: "https://p.kindpng.com/picc/s/438-4386178_sponsor-logos-vail-vail-graphic-design-hd-png.png",
        ski: true,
        snowboard: true
    },
    {
        name: "Alta",
        state: "Utah",
        logo: "https://res.cloudinary.com/altaskiarea/image/upload/v1567876882/resources/Media/logos/altabluedot.jpg",
        ski: true,
        snowboard: false
    },
    {
        name: "Taos",
        state: "New Mexico",
        logo: "https://skinewmexico.com/wp-content/uploads/2019/09/Taos-Ski-Valley-300x300.png",
        ski: true,
        snowboard: false
    },
    {
        name: "Silverton",
        state: "Colorado",
        logo: "https://silvertonmountain.com/wp-content/themes/silvertonmountain/images/logo-vert-lrg.png",
        ski: true,
        snowboard: true
    },
])