export const FICHAS =
[   
    {
    date: '06 de abril de 2017',
    type: "ficha",
    s_date: '06/04',
    doctor: 'Juan Salas',
    body: 'Peso: 14,3 Kg, Talla: 98 Dolor abdominal recurrente. Coxavalga con anteversión de cuellos femorales.',
    reco: [],
    med: [],
    ex: []
    },
    {
    date: '07 de abril de 2017',
    s_date: '07/04',
    type: "ficha",
    doctor: 'Juan Salas',
    body: 'Peso: 14,4 Kg, Talla: 97,7 Buena respuesta a tratamiento. Enteroparasitosis alta.',
    reco: [],
    med: [],
    ex: []
    },
    {
    date: '20 de mayo de 2017 ',
    s_date: '20/05',
    type: "ficha",
    doctor: 'Juan Salas',
    body: 'Faringitis aguda.',
    reco: ['Reposo relativo, líquido abundante, control de temperatura, aseo nasal, control con su pediatra'],
    med: ['Lertus 17 gotas cada 8 horas por 5 días',
    'Numosol 5 ml cada 6 horas por 7 días'],
    ex: []
    },
    {    
    date: '23 de mayo de 2017',
    s_date: '23/05',
    type: "ficha",
    doctor: 'Juan Salas',
    body: 'Peso: 16,9 Kg, Talla: 106 Hipertrofia adenoidea.',
    reco: [],
    med: ['Nastizol 5 ml cada 8 horas por 8 días'],
    ex: []
    },
    {
    date: '08 de septiembre de 2017',
    s_date: '08/09',
    type: "ficha",
    doctor: 'Juan Salas',
    body: 'Peso 19 Kg, Bronquitis.',
    reco: [],
    med: ['Remitex/Histex 3,5 en la noche, Numosol 5 ml cada 8 horas por 8 días, Cefamox 500 mg 5 ml cada 12 horas por 10 días, belomet 2 puf cada 4 horas por 3 días'],
    ex: []
    },
    {
    date: '21 de noviembre de 2017',
    s_date: '21/11',
    type: "ficha",
    doctor: 'Juan Salas',
    body: 'Peso: 19,8 Kg, Talla: 118 Sinusitis.',
    reco: [],
    med: ['Cefamox 500 mg cada 12 horas por 10 días, Rinomex 3 ml cada 12 horas por 10 días, belmet 2 puf cada  4 horas por 3 días, Numosol cada 8 horas por 7 días.'],
    ex: []
    },
    {
    date: '18 de marzo de 2018',
    s_date: '18/03',
    type: "ficha",
    doctor: 'Juan Salas',
    body: 'Peso: 22,4 Kg, Talla: 124, 5. Resfriado, rinitis.',
    reco: [],
    med: ['Bequium 4 ml cada 8 horas, Belmet 2 puff cada 4 horas'],
    ex: []
    },
    {
    date: '04 de mayo de 2018',
    s_date: '04/05',
    type: "ficha",
    doctor: 'Juan Salas',
    body: 'Bronquitis.',
    reco: [],
    med: ['Belmet 2 puf cada 4 horas, Alertop 5 ml cada noche por 15 días, Solvanol jarabe 5 ml cada 8 horas por 7 días'],
    ex: []
    }

];

export const MEDICAMENTOS =
[   
    {
        name: "Salbutamol",
        img: "../../assets/imgs/2.jpg",
        s_date: "3:00",
        dosis: "2 puff cada 4 horas",
        type: "med",
        info:
        {
            com: 'Cada dosis media contiene: Salbutamol 100 mcg; Beclometasona Dipropionato 50 mcg.',
            acc: 'Corticosteroide-broncodilatador adrenérgico. Tratamiento del asma bronquial. Util para el alivio sintomático del broncoespasmo en pacientes con enfermedades obstructivas de las vías aéreas.',
            ind: "",
            pos: 'Según la indicación médica. Por lo general: Adultos: 2 inhalaciones 3 a 4 veces al día. Niños menores de 12 años: 1 ó 2 inhalaciones 2 a 3 veces al día.',
            con: 'Hipersensibilidad a alguno de los componentes de la formulación. Hipertensión. Insuficiencia cardíaca. Tuberculosis pulmonar. Embarazo y lactancia.',
            pres: 'Envase conteniendo 200 dosis.'
        }
    },
    {
        name: "Bequium",
        img: "../../assets/imgs/2.jpg",
        s_date: "7:00",
        dosis: "4 ml cada 8 horas",
        type: "med",
        info: 
        {
            comp: 'Cada 5 ml de jarabe (1 cucharadita) contiene: Clorfenamina Maleato 2 mg; Pseudoefedrina Clorhidrato 30 mg; Codeína 10 mg.',
            acc: 'Antitusígeno. Antihistamínico. Descongestionante.',
            ind: 'Está indicado en el tratamiento sintomático de la tos no productiva, de origen alérgico, irritativo, asociada a bronquitis y/o resfrío, además de congestión nasal.',
            pos: 'Se calcula en base a la codeína. En adultos y niños mayores de 12 años: 10-20 mg cada 4 o 6 horas (no exceder los 120 mg diarios). En niños de 6-12 años: 5-10 mg cada 8 horas (no exceder los 60 mg diarios). Su uso en menores de 2 años no es recomendado.',
            con: 'Su uso está contraindicado en recién nacidos y prematuros, en casos de hipersensibilidad a cualquiera de los componentes, y embarazo y lactancia. Tos del asmático, pacientes con hipertensión severa, enfermedades coronarias graves y en pacientes bajo tratamiento con inhibidores de la MAO.',
            pres: 'Envase conteniendo 120 ml'
        }
    },
    {
        name: "Salbutamol",
        img: "../../assets/imgs/2.jpg",
        s_date: "7:00",
        dosis: "2 puff cada 4 horas",
        type: "med",
        info:
        {
            com: 'Cada dosis media contiene: Salbutamol 100 mcg; Beclometasona Dipropionato 50 mcg.',
            acc: 'Corticosteroide-broncodilatador adrenérgico. Tratamiento del asma bronquial. Util para el alivio sintomático del broncoespasmo en pacientes con enfermedades obstructivas de las vías aéreas.',
            ind: "",
            pos: 'Según la indicación médica. Por lo general: Adultos: 2 inhalaciones 3 a 4 veces al día. Niños menores de 12 años: 1 ó 2 inhalaciones 2 a 3 veces al día.',
            con: 'Hipersensibilidad a alguno de los componentes de la formulación. Hipertensión. Insuficiencia cardíaca. Tuberculosis pulmonar. Embarazo y lactancia.',
            pres: 'Envase conteniendo 200 dosis.'
        }
    },
    {
        name: "Salbutamol",
        img: "../../assets/imgs/2.jpg",
        s_date: "11:00",
        dosis: "2 puff cada 4 horas",
        type: "med",
        info:
        {
            com: 'Cada dosis media contiene: Salbutamol 100 mcg; Beclometasona Dipropionato 50 mcg.',
            acc: 'Corticosteroide-broncodilatador adrenérgico. Tratamiento del asma bronquial. Util para el alivio sintomático del broncoespasmo en pacientes con enfermedades obstructivas de las vías aéreas.',
            ind: "",
            pos: 'Según la indicación médica. Por lo general: Adultos: 2 inhalaciones 3 a 4 veces al día. Niños menores de 12 años: 1 ó 2 inhalaciones 2 a 3 veces al día.',
            con: 'Hipersensibilidad a alguno de los componentes de la formulación. Hipertensión. Insuficiencia cardíaca. Tuberculosis pulmonar. Embarazo y lactancia.',
            pres: 'Envase conteniendo 200 dosis.'
        }
    },
    {
        name: "Salbutamol",
        img: "../../assets/imgs/3.jpg",
        s_date: "15:00",
        dosis: "2 puff cada 4 horas",
        type: "med",
        info:
        {
            com: 'Cada dosis media contiene: Salbutamol 100 mcg; Beclometasona Dipropionato 50 mcg.',
            acc: 'Corticosteroide-broncodilatador adrenérgico. Tratamiento del asma bronquial. Util para el alivio sintomático del broncoespasmo en pacientes con enfermedades obstructivas de las vías aéreas.',
            ind: "",
            pos: 'Según la indicación médica. Por lo general: Adultos: 2 inhalaciones 3 a 4 veces al día. Niños menores de 12 años: 1 ó 2 inhalaciones 2 a 3 veces al día.',
            con: 'Hipersensibilidad a alguno de los componentes de la formulación. Hipertensión. Insuficiencia cardíaca. Tuberculosis pulmonar. Embarazo y lactancia.',
            pres: 'Envase conteniendo 200 dosis.'
        }
    },
    {
        name: "Bequium",
        img: "../../assets/imgs/2.jpg",
        s_date: "15:00",
        dosis: "4 ml cada 8 horas",
        type: "med",
        info: 
        {
            comp: 'Cada 5 ml de jarabe (1 cucharadita) contiene: Clorfenamina Maleato 2 mg; Pseudoefedrina Clorhidrato 30 mg; Codeína 10 mg.',
            acc: 'Antitusígeno. Antihistamínico. Descongestionante.',
            ind: 'Está indicado en el tratamiento sintomático de la tos no productiva, de origen alérgico, irritativo, asociada a bronquitis y/o resfrío, además de congestión nasal.',
            pos: 'Se calcula en base a la codeína. En adultos y niños mayores de 12 años: 10-20 mg cada 4 o 6 horas (no exceder los 120 mg diarios). En niños de 6-12 años: 5-10 mg cada 8 horas (no exceder los 60 mg diarios). Su uso en menores de 2 años no es recomendado.',
            con: 'Su uso está contraindicado en recién nacidos y prematuros, en casos de hipersensibilidad a cualquiera de los componentes, y embarazo y lactancia. Tos del asmático, pacientes con hipertensión severa, enfermedades coronarias graves y en pacientes bajo tratamiento con inhibidores de la MAO.',
            pres: 'Envase conteniendo 120 ml'
        }
    },
    {
        name: "Salbutamol",
        img: "../../assets/imgs/2.jpg",
        s_date: "19:00",
        dosis: "2 puff cada 4 horas",
        type: "med",
        info:
        {
            com: 'Cada dosis media contiene: Salbutamol 100 mcg; Beclometasona Dipropionato 50 mcg.',
            acc: 'Corticosteroide-broncodilatador adrenérgico. Tratamiento del asma bronquial. Util para el alivio sintomático del broncoespasmo en pacientes con enfermedades obstructivas de las vías aéreas.',
            ind: "",
            pos: 'Según la indicación médica. Por lo general: Adultos: 2 inhalaciones 3 a 4 veces al día. Niños menores de 12 años: 1 ó 2 inhalaciones 2 a 3 veces al día.',
            con: 'Hipersensibilidad a alguno de los componentes de la formulación. Hipertensión. Insuficiencia cardíaca. Tuberculosis pulmonar. Embarazo y lactancia.',
            pres: 'Envase conteniendo 200 dosis.'
        }
    },
    {
        name: "Salbutamol",
        img: "../../assets/imgs/2.jpg",
        s_date: "23:00",
        dosis: "2 puff cada 4 horas",
        type: "med",
        info:
        {
            com: 'Cada dosis media contiene: Salbutamol 100 mcg; Beclometasona Dipropionato 50 mcg.',
            acc: 'Corticosteroide-broncodilatador adrenérgico. Tratamiento del asma bronquial. Util para el alivio sintomático del broncoespasmo en pacientes con enfermedades obstructivas de las vías aéreas.',
            ind: "",
            pos: 'Según la indicación médica. Por lo general: Adultos: 2 inhalaciones 3 a 4 veces al día. Niños menores de 12 años: 1 ó 2 inhalaciones 2 a 3 veces al día.',
            con: 'Hipersensibilidad a alguno de los componentes de la formulación. Hipertensión. Insuficiencia cardíaca. Tuberculosis pulmonar. Embarazo y lactancia.',
            pres: 'Envase conteniendo 200 dosis.'
        }
    },
    {
        name: "Bequium",
        img: "../../assets/imgs/2.jpg",
        s_date: "23:00",
        dosis: "4 ml cada 8 horas",
        type: "med",
        info: 
        {
            comp: 'Cada 5 ml de jarabe (1 cucharadita) contiene: Clorfenamina Maleato 2 mg; Pseudoefedrina Clorhidrato 30 mg; Codeína 10 mg.',
            acc: 'Antitusígeno. Antihistamínico. Descongestionante.',
            ind: 'Está indicado en el tratamiento sintomático de la tos no productiva, de origen alérgico, irritativo, asociada a bronquitis y/o resfrío, además de congestión nasal.',
            pos: 'Se calcula en base a la codeína. En adultos y niños mayores de 12 años: 10-20 mg cada 4 o 6 horas (no exceder los 120 mg diarios). En niños de 6-12 años: 5-10 mg cada 8 horas (no exceder los 60 mg diarios). Su uso en menores de 2 años no es recomendado.',
            con: 'Su uso está contraindicado en recién nacidos y prematuros, en casos de hipersensibilidad a cualquiera de los componentes, y embarazo y lactancia. Tos del asmático, pacientes con hipertensión severa, enfermedades coronarias graves y en pacientes bajo tratamiento con inhibidores de la MAO.',
            pres: 'Envase conteniendo 120 ml'
        }
    },
    
]

export const VACUNAS =
[

];

export const EXAMENES =
[
    {
        name: 'Ecotomografía de hombro izquierdo',
        img: '../../assets/imgs/4.jpg',
        date : '10 de marzo de 2017', 
        s_date: '10/03',
        body: 'Antecedentes Clinicos: Tendinitos del supraespinoso. Hallazgos: Tendón de la porcion larga del biceps bien ubicado en la corredera bicipital, de patrón fibrilar conservado y sin aumento del líquido en su vaina'

    },
    {
        name: 'Ecografía Doppler Venoso EE II Bilateral',
        img: '../../assets/imgs/5.png',
        date: '15 de enero de 2014',
        s_date: '15/01',
        body: 'Hallazgos: Ambos ejes venosos femoropoplíteos presentan trayetcto y calibre conservado con ausencia de materia ecogénico endoluminal, dichas venas no evidencian insudiciencia ante maniobra de Valsalva.'
        
    },
    {
        name: 'RX de Muñecas',
        img: '../../assets/imgs/6.jpg',
        date: '11 de julio de 2012',
        s_date: '11/07',
        body: 'Hallazgos: Densidad ósea y alineamiento dentro de rangos normales. Partes blandas sin alteración. En las proyecciones visualizadas no evidencio signos de lesión ósea traumática o destructiva.'
        
    },
    {
        name: 'Mamografía Bilateral',
        img: '../../assets/imgs/7.jpg',
        date: '11 de febrero de 2016',
        s_date: '11/02',
        body: 'Hallazgos: Cuerpos mamarios densos con pequeña imagen modular retroareolar derecha. No observo microcalcificaciones sospechosas ni lesión espiculada. Linfonodos axilares bilaterales.'
        
    },
];