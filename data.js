const jugadores = [
    {
        "id": 1,
        "name": "Marcos Acuña",
        "image": "https://i.postimg.cc/t70GHJ9Y/Acu-a.png",
        "type": "Defensor",
        "information": "Club: Sevilla FC - Liga: La Liga (España) - Dorsal: 19 - Lugar de nacimiento: Zapala, Argentina - Fecha de nacimiento: 28 de octubre de 1991 - Estatura: 1.72 metros"
    },
    {
        "id": 2,
        "name": "Thiago Almada",
        "image": "https://i.postimg.cc/J03CMm0x/Almada.png",
        "type": "Centrocampista",
        "information": "Club: Atlanta United - Liga: Major League Soccer - Dorsal: 23 - Lugar de nacimiento: Buenos Aires, Argentina - Fecha de nacimiento: 26 de abril de 2001 - Estatura: 1.71 metros"
    },
    {
        "id": 3,
        "name": "Franco Armani",
        "image": "https://i.postimg.cc/Y2QH1NRF/Armani.png",
        "type": "Arquero",
        "information": "Club: Club Atlético River Plate - Liga: Liga Profesional de Fútbol de Argentina - Dorsal: 1 - Lugar de nacimiento: Casilda, Argentina - Fecha de nacimiento: 16 de octubre de 1986 - Estatura: 1.89 metros"
    },
    {
        "id": 4,
        "name": "Angel Correa",
        "image": "https://i.postimg.cc/4x2kJWfD/Correa.png",
        "type": "Delantero",
        "information": "Club: Atlético Madrid - Liga: La Liga (España) - Dorsal: 10 - Lugar de nacimiento: Rosario, Argentina - Fecha de nacimiento: 9 de marzo de 1995 - Estatura: 1.71 metros"
    },
    {
        "id": 5,
        "name": "Rodrigo De Paul",
        "image": "https://i.postimg.cc/zGGYZsrw/DePaul.png",
        "type": "Centrocampista",
        "information": "Club: Atlético Madrid - Liga: La Liga (España) - Dorsal: 5 - Lugar de nacimiento: Sarandí, Argentina - Fecha de nacimiento: 24 de mayo de 1994 - Estatura: 1.76 metros"
    },
    {
        "id": 6,
        "name": "Damian Martinez",
        "image": "https://i.postimg.cc/FKft1017/Dibu-Martinez.png",
        "type": "Arquero",
        "information": "Club: Aston Villa - Liga: Premier League (Inglaterra) - Dorsal: 26 - Lugar de nacimiento: Mar del Plata, Argentina - Fecha de nacimiento: 2 de febrero de 1992 - Estatura: 1.94 metros"
    },
    {
        "id": 7,
        "name": "Angel Di Maria",
        "image": "https://i.postimg.cc/BQsGN87V/DiMaria.png",
        "type": "Delantero",
        "information": "Club: Juventus - Liga: Serie A (Italia) - Dorsal: 22 - Lugar de nacimiento: Rosario, Argentina - Fecha de nacimiento: 14 de febrero de 1988 - Estatura: 1.80 metros"
    },
    {
        "id": 8,
        "name": "Paulo Dybala",
        "image": "https://i.postimg.cc/tC5GcXLC/Dybala.png",
        "type": "Delantero",
        "information": "Club: Juventus FC - Liga: Serie A (Italia) - Dorsal: 10 - Lugar de nacimiento: Córdoba, Argentina - Fecha de nacimiento: 15 de noviembre de 1993 - Estatura: 1.77 metros"
    },
    {
        "id": 9,
        "name": "Enzo Fernandez",
        "image": "https://i.postimg.cc/43jDcnhw/Enzo-Fernandez.png",
        "type": "Centrocampista",
        "information": "Club: Chelsea - Liga: Premier League (Inglaterra) - Dorsal: 5 - Lugar de nacimiento: 	San Martín, Argentina - Fecha de nacimiento: 17 de enero de 2001 - Estatura: 1.78 metros"
    },
    {
        "id": 10,
        "name": "Juan Foyth",
        "image": "https://i.postimg.cc/pXPgzwpN/Foyth.png",
        "type": "Defensor",
        "information": "Club: Villarreal CF - Liga: La Liga (España) - Dorsal: 8 - Lugar de nacimiento: La Plata, Argentina - Fecha de nacimiento: 12 de enero de 1998 - Estatura: 1.87 metros"
    },
    {
        "id": 11,
        "name": "Alejandro Gomez",
        "image": "https://i.postimg.cc/pVJSWsks/Gomez.png",
        "type": "Centrocampista",
        "information": "Club: Sevilla FC - Liga: La Liga (España) - Dorsal: 24 - Lugar de nacimiento: Río Tercero, Argentina - Fecha de nacimiento: 15 de febrero de 1988 - Estatura: 1.68 metros"
    },
    {
        "id": 12,
        "name": "Guido Rodriguez",
        "image": "https://i.postimg.cc/50cr0GZR/Guido-Rodriguez.png",
        "type": "Defensor",
        "information": "Club: Real Betis Balompié - Liga: La Liga (España) - Dorsal: 5 - Lugar de nacimiento: Ciudadela, Argentina - Fecha de nacimiento: 12 de abril de 1994 - Estatura: 1.84 metros"
    },
    {
        "id": 13,
        "name": "Julian Alvarez",
        "image": "https://i.postimg.cc/Y0RDdSj5/Julian-Alvarez.png",
        "type": "Delantero",
        "information": "Club: Manchester City - Liga: Premier League (Inglaterra) - Dorsal: 19 - Lugar de nacimiento: Cordoba, Argentina - Fecha de nacimiento: 31 de enero de 2000 - Estatura: 1.70 metros"
    },
    {
        "id": 14,
        "name": "Lautaro Martinez",
        "image": "https://i.postimg.cc/264KBGY8/Lautaro-Martinez.png",
        "type": "Delantero",
        "information": "Club: Inter de Milán - Liga: Serie A (Italia) - Dorsal: 10 - Lugar de nacimiento: Bahía Blanca, Argentina - Fecha de nacimiento: 22 de agosto de 1997 - Estatura: 1.74 metros"
    },
    {
        "id": 15,
        "name": "Lisandro Martinez",
        "image": "https://i.postimg.cc/j2tk6fq6/Lisandro-Martinez.png",
        "type": "Defensor",
        "information": "Club: Ajax - Liga: Eredivisie (Países Bajos) - Dorsal: 21 - Lugar de nacimiento: Gualeguay, Argentina - Fecha de nacimiento: 18 de enero de 1998 - Estatura: 1.80 metros"
    },
    {
        "id": 16,
        "name": "Alexis Mac Allister",
        "image": "https://i.postimg.cc/m2Z5t75B/Mc-Alister.png",
        "type": "Centrocampista",
        "information": "Club: Brighton - Liga: Premier League (Inglaterra) - Dorsal: 10 - Lugar de nacimiento: La Pampa, Argentina - Fecha de nacimiento: 24 de diciembre de 1998 - Estatura: 1.74 metros"
    },
    {
        "id": 17,
        "name": "Lionel Messi",
        "image": "https://i.postimg.cc/3JLbpWsp/Messi.png",
        "type": "Delantero",
        "information": "Club: Inter de Miami - Liga: Major League Soccer (USA) - Dorsal: 30 - Lugar de nacimiento: Rosario, Argentina - Fecha de nacimiento: 24 de junio de 1987 - Estatura: 1.70 metros"
    },
    {
        "id": 18,
        "name": "Nahuel Molina",
        "image": "https://i.postimg.cc/k4dj9SSr/Molina.png",
        "type": "Defensor",
        "information": "Club: Udinese Calcio - Liga: Serie A (Italia) - Dorsal: 2 - Lugar de nacimiento: Buenos Aires, Argentina - Fecha de nacimiento: 26 de enero de 1998 - Estatura: 1.77 metros"
    },
    {
        "id": 19,
        "name": "Gonzalo Montiel",
        "image": "https://i.postimg.cc/vmnPphcL/Montiel.png",
        "type": "Defensor",
        "information": "Club: Sevilla - Liga: La Liga (España) - Dorsal: 2 - Lugar de nacimiento: Buenos Aires, Argentina - Fecha de nacimiento: 1 de enero de 1997 - Estatura: 1.75 metros"
    },
    {
        "id": 20,
        "name": "Nicolas Otamendi",
        "image": "https://i.postimg.cc/m268kJ9y/Otamendi.png",
        "type": "Defensor",
        "information": "Club: Benfica - Liga: Liga de Portugal - Dorsal: 30 - Lugar de nacimiento: Buenos Aires, Argentina - Fecha de nacimiento: 12 de febrero de 1988 - Estatura: 1.83 metros"
    },
    {
        "id": 21,
        "name": "Exequiel Palacios",
        "image": "https://i.postimg.cc/RhgGcbD9/Palacios.png",
        "type": "Centrocampista",
        "information": "Club: Bayer Leverkusen - Liga: Bundesliga (Alemania) - Dorsal: 20 - Lugar de nacimiento: Famaillá, Argentina - Fecha de nacimiento: 5 de octubre de 1998 - Estatura: 1.78 metros"
    },
    {
        "id": 22,
        "name": "Leandro Paredes",
        "image": "https://i.postimg.cc/QC80KrS0/Paredes.png",
        "type": "Centrocampista",
        "information": "Club: París Sanit Germain - Liga: Ligue 1 (Francia) - Dorsal: 5 - Lugar de nacimiento: San Justo, Argentina - Fecha de nacimiento: 29 de octubre de 1994 - Estatura: 1.82 metros"
    },
    {
        "id": 23,
        "name": "German Pezzella",
        "image": "https://i.postimg.cc/xTd60nXd/Pezella.png",
        "type": "Defensor",
        "information": "Club: Fiorentina - Liga: Serie A (Italia) - Dorsal: 2 - Lugar de nacimiento: Bahía Blanca, Argentina - Fecha de nacimiento: 27 de junio de 1991 - Estatura: 1.88 metros"
    },
    {
        "id": 24,
        "name": "Cristian Romero",
        "image": "https://i.postimg.cc/T3LQD0qM/Romero.png",
        "type": "Defensor",
        "information": "Club: Tottenham Hotspur - Liga: Premier League (Inglaterra) - Dorsal: 4 - Lugar de nacimiento: Córdoba, Argentina - Fecha de nacimiento: 27 de abril de 1998 - Estatura: 1.87 metros"
    },
    {
        "id": 25,
        "name": "Geronimo Rulli",
        "image": "https://i.postimg.cc/wx2W87TP/Rulli.png",
        "type": "Arquero",
        "information": "Club: Villarreal CF - Liga: La Liga (España) - Dorsal: 13 - Lugar de nacimiento: La Plata, Argentina - Fecha de nacimiento: 20 de mayo de 1992 - Estatura: 1.89 metros"
    },
    {
        "id": 26,
        "name": "Nicolas Tagliafico",
        "image": "https://i.postimg.cc/13kBcFJg/Tagliafico.png",
        "type": "Defensor",
        "information": "Club: Olympique de Lyon - Liga: Ligue 1 (Francia) - Dorsal: 3 - Lugar de nacimiento: Buenos Aires, Argentina - Fecha de nacimiento: 31 de agosto de 1992 - Estatura: 1.72 metros"
    }
]