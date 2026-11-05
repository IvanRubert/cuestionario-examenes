QuizBank.register({
    id: 'introduccion_nube',
    name: QuizBank.textTranslation('Introducción a la nube', 'Introducció al nuvol'),
    units: [
        {
            id: 'u1',
            name: QuizBank.textTranslation('Unidad 1: Conceptos Fundamentales de Cloud Computing', 'Unitat 1: Conceptes Fonamentals de Cloud Computing'),
            topics: [
                {
                    id: 'u1_t1',
                    name: QuizBank.textTranslation('Definición de Cloud Computing y Comparativa On-Premise', 'Definició de Cloud Computing i Comparativa On-Premise'),
                    questions: [
                        QuizBank.createQuestion(QuizBank.textTranslation('¿Qué es la computación en la nube (cloud computing)?', 'Què és la computació al núvol (cloud computing)?'), [
                                QuizBank.textTranslation('La distribución de servicios informáticos (servidores, almacenamiento, redes, etc.) a través de Internet bajo demanda y pago por uso.', 'La distribució de serveis informàtics (servidors, emmagatzematge, xarxes, etc.) a través d\'Internet sota demanda i pagament per ús.'),
                                QuizBank.textTranslation('La compra obligatoria de servidores físicos locales para las oficinas de la empresa.', 'La compra obligatòria de servidors físics locals per a les oficines de l\'empresa.'),
                                QuizBank.textTranslation('Un modelo de software que solo funciona sin conexión a la red.', 'Un model de programari que només funciona sense connexió a la xarxa.'),
                                QuizBank.textTranslation('Una red privada exclusiva para copias de seguridad locales.', 'Una xarxa privada exclusiva per a còpies de seguretat locals.')
                            ], [0], QuizBank.textTranslation('La computación en la nube permite acceder de manera remota a recursos informáticos a través de Internet, pagando únicamente por lo que se utiliza.', 'La computació al núvol permet accedir de manera remota a recursos informàtics a través d\'Internet, pagant únicament pel que s\'utilitza.')),
                        QuizBank.createQuestion(QuizBank.textTranslation('¿Cuál es una diferencia principal entre el modelo tradicional (on-premise) y el modelo en la nube?', 'Quina és una diferència principal entre el model tradicional (on-premise) i el model al núvol?'), [
                                QuizBank.textTranslation('En el modelo en la nube la empresa debe comprar hardware y gestionar el mantenimiento físico.', 'En el model al núvol l\'empresa ha de comprar maquinari i gestionar el manteniment físic.'),
                                QuizBank.textTranslation('En on-premise se pagan los recursos como un alquiler mensual según el consumo de agua o luz.', 'En on-premise es paguen els recursos com un lloguer mensual segons el consum d\'aigua o llum.'),
                                QuizBank.textTranslation('En el modelo tradicional hay altos costes iniciales de infraestructura y licencias; en la nube se paga por uso y el proveedor gestiona el mantenimiento físico.', 'En el model tradicional hi ha alts costos inicials d\'infraestructura i llicències; al núvol es paga per ús i el proveïdor gestiona el manteniment físic.'),
                                QuizBank.textTranslation('En el modelo on-premise la implementación es más rápida y económica.', 'En el model on-premise la implementació és més ràpida i econòmica.')
                            ], [2], QuizBank.textTranslation('El modelo on-premise requiere una alta inversión inicial y gestión física, mientras que el núvol elimina la necesidad de mantenimiento físico y reduce costes iniciales.', 'El model on-premise requereix una alta inversió inicial i gestió física, mentre que el núvol elimina la necessitat de manteniment físic i redueix costos inicials.'))
                    ]
                },
                {
                    id: 'u1_t2',
                    name: QuizBank.textTranslation('Características Clave del Núvol', 'Característiques Clau del Núvol'),
                    questions: [
                        QuizBank.createQuestion(QuizBank.textTranslation('¿Cómo se definen y diferencian la Escalabilidad y la Elasticidad en la nube?', 'Com es defineixen i diferencien l\'Escalabilitat i l\'Elasticitat al núvol?'), [
                                QuizBank.textTranslation('La escalabilidad permite hacer crecer o reducir recursos (vertical u horizontalmente); la elasticidad es la capacidad de adaptarse en tiempo real y de forma automática a los cambios de demanda.', 'L\'escalabilitat permet fer créixer o reduir recursos (vertical o horitzontalment); l\'elasticitat és la capacitat d\'adaptar-se en temps real i de forma automàtica als canvis de demanda.'),
                                QuizBank.textTranslation('La elasticidad se refiere solo a bases de datos y la escalabilidad a redes virtuales.', 'L\'elasticitat es refereix només a bases de dades i l\'escalabilitat a xarxes virtuals.'),
                                QuizBank.textTranslation('Son dos términos completamente idénticos que significan lo mismo sin matices.', 'Són dos termes completament idèntics que signifiquen el mateix sense matisos.'),
                                QuizBank.textTranslation('La escalabilidad exige apagar los servidores manualmente para aumentar la memoria RAM.', 'L\'escalabilitat exigeix apagar els servidors manualment per augmentar la memòria RAM.')
                            ], [0], QuizBank.textTranslation('La escalabilidad puede ser vertical o horizontal. La elasticidad es temporal y automática, ajustando la capacidad en tiempo real ante picos de tráfico.', 'L\'escalabilitat pot ser vertical o horitzontal. L\'elasticitat és temporal i automàtica, ajustant la capacitat en temps real davant pics de trànsit.')),
                        QuizBank.createQuestion(QuizBank.textTranslation('¿Cuáles de los siguientes puntos son características fundamentales de la computación en la nube? (Selecciona todas las correctas)', 'Quins dels següents punts són característiques fonamentals de la computació al núvol? (Selecciona totes les correctes)'), [
                                QuizBank.textTranslation('Alta disponibilidad mediante la distribución entre múltiples ubicaciones físicas.', 'Alta disponibilitat mitjançant la distribució entre múltiples ubicacions físiques.'),
                                QuizBank.textTranslation('Model de pago por uso (horas de cómputo, GB de almacenamiento, etc.).', 'Model de pagament per ús (hores de còmput, GB d\'emmagatzematge, etc.).'),
                                QuizBank.textTranslation('Acceso global a través de Internet desde cualquier parte del mundo.', 'Accés global a través d\'Internet des de qualsevol lloc del món.'),
                                QuizBank.textTranslation('Gestión delegada donde el proveedor se encarga del mantenimiento y la seguridad física.', 'Gestió delegada on el proveïdor s\'encarrega del manteniment i la seguretat física.')
                            ], [0, 1, 2, 3], QuizBank.textTranslation('Todas son características clave mencionadas en el documento: alta disponibilidad, pago por uso, acceso global y gestión delegada en el proveedor.', 'Totes són característiques clau mencionades al document: alta disponibilitat, pagament per ús, accés global i gestió delegada en el proveïdor.'))
                    ]
                },
                {
                    id: 'u1_t3',
                    name: QuizBank.textTranslation('Modelos de Servicio: IaaS, PaaS y SaaS', 'Models de Servei: IaaS, PaaS i SaaS'),
                    questions: [
                        QuizBank.createQuestion(QuizBank.textTranslation('¿Qué ofrece el modelo IaaS (Infrastructure as a Service) y qué parte controla el usuario?', 'Què ofereix el model IaaS (Infrastructure as a Service) i quina part controla l\'usuari?'), [
                                QuizBank.textTranslation('Ofrece aplicaciones web empaquetadas donde el usuario solo gestiona los datos de entrada.', 'Ofereix aplicacions web empaquetades on l\'usuari només gestiona les dades d\'entrada.'),
                                QuizBank.textTranslation('Ofrece infraestructura virtualizada (servidores, discos, redes); el usuario controla el sistema operativo, aplicaciones y configuraciones.', 'Ofereix infraestructura virtualitzada (servidors, discos, xarxes); l\'usuari controla el sistema operatiu, aplicacions i configuracions.'),
                                QuizBank.textTranslation('Ofrece una plataforma lista para ejecutar código sin posibilidad de configurar el sistema operativo.', 'Ofereix una plataforma preparada per executar codi sense possibilitat de configurar el sistema operatiu.'),
                                QuizBank.textTranslation('Es un modelo exclusivo para enviar correos electrónicos.', 'És un model exclusiu per enviar correus electrònics.')
                            ], [1], QuizBank.textTranslation('En IaaS (como Amazon EC2 o VPC), el proveedor entrega la infraestructura básica y el usuario administra el SO, parches y aplicaciones.', 'En IaaS (com Amazon EC2 o VPC), el proveïdor lliura la infraestructura bàsica i l\'usuari administra el SO, parxs i aplicacions.')),
                        QuizBank.createQuestion(QuizBank.textTranslation('¿En qué se diferencia el modelo PaaS (Platform as a Service) de IaaS y SaaS?', 'En què es diferencia el model PaaS (Platform as a Service) d\'IaaS i SaaS?'), [
                                QuizBank.textTranslation('En PaaS el usuario debe comprar e instalar el servidor físico en su centro de datos.', 'En PaaS l\'usuari ha de comprar i instal·lar el servidor físic al seu centre de dades.'),
                                QuizBank.textTranslation('En PaaS el proveedor ofrece una plataforma optimizada; el usuario solo controla el código y la configuración de su aplicación sin preocuparse de la infraestructura.', 'En PaaS el proveïdor ofereix una plataforma optimitzada; l\'usuari només controla el codi i la configuració de la seua aplicació sense preocupar-se de la infraestructura.'),
                                QuizBank.textTranslation('En PaaS el usuario no tiene acceso ni siquiera al código fuente de su aplicación.', 'En PaaS l\'usuari no té accés ni tan sols al codi font de la seua aplicació.'),
                                QuizBank.textTranslation('PaaS solo incluye almacenamiento en disco duro pero no permite ejecutar software.', 'PaaS només inclou emmagatzematge en disc dur però no permet executar programari.')
                            ], [1], QuizBank.textTranslation('PaaS (ej. AWS Elastic Beanstalk o AWS Lambda) permite a los desarrolladores centrarse exclusivamente en el código sin gestionar el sistema operativo subyacente.', 'PaaS (ex. AWS Elastic Beanstalk o AWS Lambda) permet als desenvolupadors centrar-se exclusivament en el codi sense gestionar el sistema operatiu subjacenta.')),
                        QuizBank.createQuestion(QuizBank.textTranslation('¿Cuáles de los siguientes son ejemplos del modelo SaaS (Software as a Service)? (Selecciona todas las correctas)', 'Quins dels següents són exemples del model SaaS (Software as a Service)? (Selecciona totes les correctes)'), [
                                QuizBank.textTranslation('Amazon WorkMail y Amazon Chime.', 'Amazon WorkMail i Amazon Chime.'),
                                QuizBank.textTranslation('Google Docs y Dropbox.', 'Google Docs i Dropbox.'),
                                QuizBank.textTranslation('Amazon EC2 e instancias de máquinas virtuales.', 'Amazon EC2 i instàncies de màquines virtuals.'),
                                QuizBank.textTranslation('Servidores físicos dedicados sin sistema operativo.', 'Servidors físics dedicats sense sistema operatiu.')
                            ], [1], QuizBank.textTranslation('SaaS ofrece aplicaciones finales listas para su uso en Internet (WorkMail, Google Docs, Dropbox). EC2 es un ejemplo de IaaS.', 'SaaS ofereix aplicacions finals llestes per utilitzar a Internet (WorkMail, Google Docs, Dropbox). EC2 és un exemple d\'IaaS.'))
                    ]
                },
                {
                    id: 'u1_t4',
                    name: QuizBank.textTranslation('Models de Despliegue e Introducción a AWS', 'Models de Desplegament i Introducció a AWS'),
                    questions: [
                        QuizBank.createQuestion(QuizBank.textTranslation('¿Qué caracteriza a un modelo de Nube Híbrida?', 'Què caracteritza a un model de Núvol Híbrid?'), [
                                QuizBank.textTranslation('Combina nube privada y nube pública, permitiendo por ejemplo mantener datos sensibles en la parte privada y usar la pública para cargas temporales.', 'Combina núvol privat i núvol públic, permetent per exemple mantindre dades sensibles a la part privada i utilitzar la pública per a càrregues temporals.'),
                                QuizBank.textTranslation('Consiste en usar dos proveedores de internet diferentes en la misma oficina.', 'Consisteix en utilitzar dos proveïdors d\'internet diferents a la mateixa oficina.'),
                                QuizBank.textTranslation('Es un centro de datos que sólo abre durante el día.', 'És un centre de dades que només obri durant el dia.'),
                                QuizBank.textTranslation('Exige eliminar completamente el uso de redes públicas.', 'Exigeix eliminar completament l\'ús de xarxes públiques.')
                            ], [0], QuizBank.textTranslation('La nube híbrida combina la seguridad del entorno privado con la flexibilidad y potencia del entorno público.', 'El núvol híbrid combina la seguretat de l\'entorn privat amb la flexibilitat i potència de l\'entorn públic.')),
                        QuizBank.createQuestion(QuizBank.textTranslation('Relaciona los siguientes servicios fundamentales de AWS con su función principal según el documento: (Selecciona todas las opciones correctas)', 'Relaciona els següents serveis fonamentals d\'AWS amb la seua funció principal segons el document: (Selecciona totes les opcions correctes)'), [
                                QuizBank.textTranslation('EC2 → Servidores Virtuales.', 'EC2 → Servidors Virtuals.'),
                                QuizBank.textTranslation('S3 → Almacenamiento de objetos.', 'S3 → Emmagatzematge d\'objectes.'),
                                QuizBank.textTranslation('IAM → Gestión de usuarios y permisos.', 'IAM → Gestió d\'usuaris i permisos.'),
                                QuizBank.textTranslation('Lambda → Ejecución de código sin servidor (serverless).', 'Lambda → Execució de codi sense servidor (serverless).')
                            ], [0, 1, 2, 3], QuizBank.textTranslation('Todas las asociaciones son correctas según la tabla de servicios fundamentales presentada en la Unidad 1 (EC2: Servidores, S3: Objetos, IAM: Usuarios/Permisos, RDS: BD Relacionales, Lambda: Cómputo serverless).', 'Totes les associacions són correctes segons la taula de serveis fonamentals presentada en la Unitat 1 (EC2: Servidors, S3: Objectes, IAM: Usuaris/Permisos, RDS: BD Relacionals, Lambda: Còmput serverless).'))
                    ]
                }
            ]
        },
        {
            id: 'u2',
            name: QuizBank.textTranslation('Unidad 2: AWS, EC2, IAM y Seguridad de Red (Security Groups y NACLs)', 'Unitat 2: Infraestructura Global, EC2, IAM i Seguretat de Xarxa (Security Groups i NACLs)'),
            topics: [
                {
                    id: 'u2_t1',
                    name: QuizBank.textTranslation('Infraestructura Global de AWS (Regiones y AZs)', 'Infraestructura Global d\'AWS (Regions i AZs)'),
                    questions: [
                        QuizBank.createQuestion(QuizBank.textTranslation('¿Qué es una Región en la infraestructura global de AWS?', 'Què és una Regió en la infraestructura global d\'AWS?'), [
                                QuizBank.textTranslation('Un centro de datos único equipado con un servidor físico principal.', 'Un centre de dades únic equipat amb un servidor físic principal.'),
                                QuizBank.textTranslation('Una zona geográfica grande que contiene múltiples centros de datos independientes (Zonas de Disponibilidad).', 'Una zona geogràfica gran que conté múltiples centres de dades independents (Zones de Disponibilitat).'),
                                QuizBank.textTranslation('Una red privada virtual exclusiva para conectar dos VPCs en diferentes países.', 'Una xarxa privada virtual exclusiva per a connectar dues VPCs en diferents països.'),
                                QuizBank.textTranslation('Un grupo de usuarios de IAM asignados a la misma área geográfica.', 'Un grup d\'usuaris d\'IAM assignats a la mateixa àrea geogràfica.')
                            ], [1], QuizBank.textTranslation('Una Región de AWS es una zona geográfica grande que alberga múltiples centros de datos (Zonas de Disponibilidad), como eu-west-1 (Irlanda) o us-east-1 (N. Virginia).', 'Una Regió d\'AWS és una zona geogràfica gran que alberga múltiples centres de dades (Zones de Disponibilitat), com ara eu-west-1 (Irlanda) o us-east-1 (N. Virgínia).')),
                        QuizBank.createQuestion(QuizBank.textTranslation('¿Cuántas Zonas de Disponibilidad (AZs) suele contener cada Región de AWS?', 'Quantes Zones de Disponibilitat (AZs) sol contindre cada Regió d\'AWS?'), [
                                QuizBank.textTranslation('Exactamente 1 AZ por región.', 'Exactament 1 AZ per regió.'),
                                QuizBank.textTranslation('Entre 2 y 6 AZs por región.', 'Entre 2 i 6 AZs per regió.'),
                                QuizBank.textTranslation('Siempre más de 10 AZs por región.', 'Sempre més de 10 AZs per regió.'),
                                QuizBank.textTranslation('Un número ilimitado según la demanda de la red.', 'Un número il·limitat segons la demanda de la xarxa.')
                            ], [1], QuizBank.textTranslation('Cada región de AWS contiene entre 2 y 6 Zonas de Disponibilidad (AZs), las cuales son centros de datos independientes con suministro eléctrico y red redundante.', 'Cada regió d\'AWS conté entre 2 i 6 Zones de Disponibilitat (AZs), les quals són centres de dades independents amb subministrament elèctric i xarxa redundant.')),
                        QuizBank.createQuestion(QuizBank.textTranslation('¿Cuáles de los siguientes factores se deben considerar al elegir una Región de AWS? (Selecciona todas las correctas)', 'Quins dels següents factors s\'han de considerar en triar una Regió d\'AWS? (Selecciona totes les correctes)'), [
                                QuizBank.textTranslation('Latencia y proximidad a los usuarios finales.', 'Latència i proximitat als usuaris finals.'),
                                QuizBank.textTranslation('Cumplimiento normativo y legal (ej. RGPD en Europa).', 'Compliment normatiu i legal (ex. RGPD a Europa).'),
                                QuizBank.textTranslation('Diferencia de costes entre regiones (us-east-1 suele ser más barata).', 'Diferència de costos entre regions (us-east-1 sol ser més barata).'),
                                QuizBank.textTranslation('Disponibilidad de servicios específicos en la región.', 'Disponibilitat de serveis específics a la regió.')
                            ], [0, 1, 2, 3], QuizBank.textTranslation('La elección de la región depende de la latencia, el cumplimiento normativo (RGPD), los costes regionales, la disponibilidad de servicios y la estrategia de negocio.', 'La tria de la regió depén de la latència, el compliment normatiu (RGPD), els costos regionals, la disponibilitat de serveis i l\'estratègia de negoci.'))
                    ]
                },
                {
                    id: 'u2_t2',
                    name: QuizBank.textTranslation('Modelo de Responsabilidad Compartida e IAM', 'Model de Responsabilitat Compartida i IAM'),
                    questions: [
                        QuizBank.createQuestion(QuizBank.textTranslation('Según el Modelo de Responsabilidad Compartida de AWS, ¿de qué es responsable AWS?', 'Segons el Model de Responsabilitat Compartida d\'AWS, de què és responsable AWS?'), [
                                QuizBank.textTranslation('De la gestión de usuarios e identidades IAM.', 'De la gestió d\'usuaris i identitats IAM.'),
                                QuizBank.textTranslation('De la seguridad de la nube (infraestructura física, centros de datos, red global e hipervisor).', 'De la seguretat del núvol (infraestructura física, centres de dades, xarxa global i hipervisor).'),
                                QuizBank.textTranslation('De la configuración de los Security Groups de las instancias.', 'De la configuració dels Security Groups de les instàncies.'),
                                QuizBank.textTranslation('De la instalación de parches en el sistema operativo huésped.', 'De la instal·lació de parxs en el sistema operatiu hoste.')
                            ], [1], QuizBank.textTranslation('AWS se encarga de la seguridad DE la nube (maquinaria, datacenters y virtualización), mientras que el cliente es responsable de la seguridad EN la nube (datos, usuarios, parches y firewalls).', 'AWS s\'encarrega de la seguretat DE la núvol (maquinari, centres de dades i virtualització), mentre que el client és responsable de la seguretat EN la núvol (dades, usuaris, parxs i firewalls).')),
                        QuizBank.createQuestion(QuizBank.textTranslation('¿Cuál es la función principal de un Rol en IAM?', 'Quina és la funció principal d\'un Rol en IAM?'), [
                                QuizBank.textTranslation('Asignar credenciales permanentes de inicio de sesión a usuarios administradores.', 'Assignar credencials permanents d\'inici de sessió a usuaris administradors.'),
                                QuizBank.textTranslation('Otorgar permisos temporales automáticos a servicios o aplicaciones (como una instancia EC2) sin guardar claves permanentes.', 'Atorgar permisos temporals automàtics a serveis o aplicacions (com una instància EC2) sense guardar claus permanents.'),
                                QuizBank.textTranslation('Reemplazar la contraseña del usuario root.', 'Reemplaçar la contrasenya de l\'usuari root.'),
                                QuizBank.textTranslation('Limitar el tráfico entrante a una subred específica.', 'Limitar el tràfic d\'entrada a una subxarxa específica.')
                            ], [1], QuizBank.textTranslation('Los roles asignan credenciales temporales gestionadas automáticamente a servicios (ej. EC2 accediendo a S3 o CloudWatch) evitando el riesgo de claves almacenadas en ficheros.', 'Els rols assignen credencials temporals gestionades automàticament a serveis (ex. EC2 accedint a S3 o CloudWatch) evitant el risc de claus emmagatzemades en fitxers.')),
                        QuizBank.createQuestion(QuizBank.textTranslation('¿Qué buenas prácticas de seguridad se recomiendan para AWS IAM? (Selecciona todas las correctas)', 'Quines bones pràctiques de seguretat es recomanen per a AWS IAM? (Selecciona totes les correctes)'), [
                                QuizBank.textTranslation('No utilizar nunca la cuenta root para el trabajo diario.', 'No utilitzar mai el compte root per al dia a dia.'),
                                QuizBank.textTranslation('Activar MFA (Autenticación de Múltiples Factores) en usuarios importantes.', 'Activar MFA (Autenticació de Múltiples Factors) en usuaris importants.'),
                                QuizBank.textTranslation('Aplicar el principio de mínimo privilegio.', 'Aplicar el principi de mínim privilegi.'),
                                QuizBank.textTranslation('Revisar y rotar las claves de acceso de manera periódica.', 'Revisar i rotar les claus d\'accés de manera periòdica.')
                            ], [0, 1, 2, 3], QuizBank.textTranslation('Todas son prácticas fundamentales en IAM: evitar la cuenta root, activar MFA, aplicar el mínimo privilegio y rotar credenciales periódicamente.', 'Totes són pràctiques fonamentals en IAM: evitar el compte root, activar MFA, aplicar el mínim privilegi i rotar credencials periòdicament.'))
                    ]
                },
                {
                    id: 'u2_t3',
                    name: QuizBank.textTranslation('Amazon EC2 y Autenticación con Key Pairs', 'Amazon EC2 i Autenticació amb Key Pairs'),
                    questions: [
                        QuizBank.createQuestion(QuizBank.textTranslation('¿Qué es una AMI (Amazon Machine Image) en el contexto de EC2?', 'Què és una AMI (Amazon Machine Image) en el context d\'EC2?'), [
                                QuizBank.textTranslation('Un volumen de almacenamiento virtual que se conecta por red.', 'Un volum d\'emmagatzematge virtual que es connecta per xarxa.'),
                                QuizBank.textTranslation('La plantilla inicial que define el sistema operativo y el software de la instancia.', 'La plantilla inicial que defineix el sistema operatiu i el programari de la instància.'),
                                QuizBank.textTranslation('Una regla de firewall que bloquea el tráfico de entrada.', 'Una regla de firewall que bloqueja el tràfic d\'entrada.'),
                                QuizBank.textTranslation('El identificador único de un centro de datos de AWS.', 'L\'identificador únic d\'un centre de dades d\'AWS.')
                            ], [1], QuizBank.textTranslation('Una AMI es la plantilla de la que parte una instancia EC2 con el sistema operativo (Ubuntu, Windows Server, etc.) y la configuración inicial.', 'Una AMI és la plantilla de la qual part una instància EC2 amb el sistema operatiu (Ubuntu, Windows Server, etc.) i la configuració inicial.')),
                        QuizBank.createQuestion(QuizBank.textTranslation('¿Cómo funciona la autenticación mediante pares de claves (Key Pairs) al acceder a EC2?', 'Com funciona l\'autenticació mitjançant parells de claus (Key Pairs) en accedir a EC2?'), [
                                QuizBank.textTranslation('AWS almacena la clave privada en la instancia y el usuario conserva la clave pública.', 'AWS emmagatzema la clau privada a la instància i l\'usuari conserva la clau pública.'),
                                QuizBank.textTranslation('La clave pública se guarda en la instancia EC2 y el usuario descarga/conserva la clave privada para autenticarse por SSH o RDP.', 'La clau pública es guarda a la instància EC2 i l\'usuari descarrega/conserva la clau privada per autenticar-se per SSH o RDP.'),
                                QuizBank.textTranslation('Ambas claves se guardan en el panel público de AWS de manera accesible.', 'Aptes dues claus es guarden al panell públic d\'AWS de manera accessible.'),
                                QuizBank.textTranslation('Genera una contraseña en texto plano común a todas las instancias.', 'Genera una contrasenya en text pla comuna a totes les instàncies.')
                            ], [1], QuizBank.textTranslation('Basado en criptografía asimétrica, la clave pública reside en la instancia y la clave privada la guarda el usuario. Si se pierde la clave privada, no se puede acceder a la instancia.', 'Basat en criptografia asimètrica, la clau pública resideix a la instància i la clau privada la guarda l\'usuari. Si es perd la clau privada, no es pot accedir a la instància.'))
                    ]
                },
                {
                    id: 'u2_t4',
                    name: QuizBank.textTranslation('Security Groups (SG)', 'Security Groups (SG)'),
                    questions: [
                        QuizBank.createQuestion(QuizBank.textTranslation('¿A qué nivel actúa un Security Group en AWS?', 'A quin nivell actua un Security Group en AWS?'), [
                                QuizBank.textTranslation('A nivel de subred (subnet).', 'A nivell de subxarxa (subnet).'),
                                QuizBank.textTranslation('A nivel de recurso / interfaz de red de la instancia EC2.', 'A nivell de recurs / interfície de xarxa de la instància EC2.'),
                                QuizBank.textTranslation('A nivel de región geográfica.', 'A nivell de regió geogràfica.'),
                                QuizBank.textTranslation('A nivel de cuenta de facturación.', 'A nivell de compte de facturació.')
                            ], [1], QuizBank.textTranslation('Un Security Group es un firewall virtual que se asocia directamente a la interfaz de red de los recursos como las instancias EC2.', 'Un Security Group és un firewall virtual que s\'associa directament a la interfície de xarxa dels recursos com les instàncies EC2.')),
                        QuizBank.createQuestion(QuizBank.textTranslation('¿Qué significa que un Security Group sea "stateful"?', 'Què significa que un Security Group siga "stateful"?'), [
                                QuizBank.textTranslation('Que guarda un registro histórico de archivos descargados.', 'Que guarda un registre històric de fitxers descarregats.'),
                                QuizBank.textTranslation('Que si se permite una conexión de entrada (inbound), la respuesta saliente correspondiente se permite automáticamente.', 'Que si es permet una connexió d\'entrada (inbound), la resposta eixint corresponent es permet automàticament.'),
                                QuizBank.textTranslation('Que requiere una regla de salida idéntica para cada regla de entrada.', 'Que requereix una regla d\'eixida idèntica per a cada regla d\'entrada.'),
                                QuizBank.textTranslation('Que sus reglas se evalúan en estricto orden numérico.', 'Que les seues regles s\'avaluen en estricte orde numèric.')
                            ], [1], QuizBank.textTranslation('Los SGs son stateful: al autorizar el tráfico de entrada (ej. HTTP puerto 80), el tráfico de respuesta puede salir de vuelta hacia el cliente sin necesidad de una regla saliente explícita.', 'Els SGs són stateful: en autoritzar el tràfic d\'entrada (ex. HTTP port 80), el tràfic de resposta pot eixir de retorn cap al client sense necessitat d\'una regla d\'eixida explícita.')),
                        QuizBank.createQuestion(QuizBank.textTranslation('¿Admiten los Security Groups reglas de denegación explícita (DENY)?', 'Admeten els Security Groups regles de denegació explícita (DENY)?'), [
                                QuizBank.textTranslation('Sí, mediante reglas de prioridad numérica negativa.', 'Sí, mitjançant regles de prioritat numèrica negativa.'),
                                QuizBank.textTranslation('No, los Security Groups solo contienen reglas de autorización (ALLOW). Lo no permitido explícitamente se deniega implícitamente.', 'No, els Security Groups només contenen regles d\'autorització (ALLOW). El que no està permés explícitament es denega implícitament.'),
                                QuizBank.textTranslation('Sí, pero únicamente en las reglas de salida (outbound).', 'Sí, però únicament en les regles d\'eixida (outbound).'),
                                QuizBank.textTranslation('Únicamente si la instancia pertenece a una VPC pública.', 'Únicament si la instància pertany a una VPC pública.')
                            ], [1], QuizBank.textTranslation('En los Security Groups no existen reglas DENY. Solo se crean reglas ALLOW, y cualquier tráfico no contemplado queda bloqueado.', 'En els Security Groups no existeixen regles DENY. Només es creen regles ALLOW, i qualsevol tràfic no contemplat queda bloquejat.')),
                        QuizBank.createQuestion(QuizBank.textTranslation('¿Cuál es el comportamiento por defecto de un Security Group nuevo?', 'Quin és el comportament per defecte d\'un Security Group nou?'), [
                                QuizBank.textTranslation('Permite todo el tráfico entrante y saliente.', 'Permet tot el tràfic d\'entrada i d\'eixida.'),
                                QuizBank.textTranslation('No permite ningún tráfico entrante hasta definir reglas, y por defecto permite todo el tráfico saliente.', 'No permet cap tràfic d\'entrada fins definir regles, i per defecte permet tot el tràfic d\'eixida.'),
                                QuizBank.textTranslation('Bloquea todo el tráfico saliente pero abre el puerto 22 SSH a todo Internet.', 'Bloqueja tot el tràfic d\'eixida però obri el port 22 SSH a tot Internet.'),
                                QuizBank.textTranslation('Se asocia automáticamente a todas las subredes de la VPC.', 'S\'associa automàticament a totes les subxarxes de la VPC.')
                            ], [1], QuizBank.textTranslation('Un SG nuevo bloquea todo el tráfico de entrada hasta añadir Inbound Rules. Por defecto, sus Outbound Rules permiten todo el tráfico saliente.', 'Un SG nou bloqueja tot el tràfic d\'entrada fins afegir Inbound Rules. Per defecte, les seues Outbound Rules permeten tot el tràfic d\'eixida.'))
                    ]
                },
                {
                    id: 'u2_t5',
                    name: QuizBank.textTranslation('Network Access Control Lists (NACL)', 'Network Access Control Lists (NACL)'),
                    questions: [
                        QuizBank.createQuestion(QuizBank.textTranslation('¿A qué nivel actúa una Network ACL (NACL)?', 'A quin nivell actua una Network ACL (NACL)?'), [
                                QuizBank.textTranslation('A nivel de instancia EC2.', 'A nivell de instància EC2.'),
                                QuizBank.textTranslation('A nivel de subred (subnet) de la VPC.', 'A nivell de subxarxa (subnet) de la VPC.'),
                                QuizBank.textTranslation('A nivel de usuario IAM.', 'A nivell d\'usuari IAM.'),
                                QuizBank.textTranslation('A nivel de bucket S3.', 'A nivell de bucket S3.')
                            ], [1], QuizBank.textTranslation('Una Network ACL se asocia a nivel de subred (subnet) y afecta a todo el tráfico que cruza el límite de dicha subred.', 'Una Network ACL s\'associa a nivell de subxarxa (subnet) i afecta a tot el tràfic que creua el límit d\'aquesta subxarxa.')),
                        QuizBank.createQuestion(QuizBank.textTranslation('¿Qué implica que una NACL sea "stateless"?', 'Què implica que una NACL siga "stateless"?'), [
                                QuizBank.textTranslation('Que la respuesta saliente a una conexión autorizada se permite automáticamente.', 'Que la resposta eixint a una connexió autoritzada es permet automàticament.'),
                                QuizBank.textTranslation('Que no guarda estado de las conexiones: deben configurarse explícitamente tanto las reglas de entrada como las de salida (incluidos los puertos efímeros del cliente).', 'Que no guarda estat de les connexions: s\'han de configurar explícitament tant les regles d\'entrada com les d\'eixida (inclosos els ports efímers del client).'),
                                QuizBank.textTranslation('Que no permite usar el protocolo TCP.', 'Que no permet utilitzar el protocol TCP.'),
                                QuizBank.textTranslation('Que sus reglas no tienen número de orden.', 'Que les seues regles no tenen número d\'orde.')
                            ], [1], QuizBank.textTranslation('Al ser stateless, la NACL evalúa la entrada y la salida de forma independiente. Para permitir el tráfico de retorno hay que configurar explícitamente las reglas de salida abriendo los puertos efímeros correspondientes.', 'En ser stateless, la NACL avalua l\'entrada i l\'eixida de forma independent. Per permetre el tràfic de retorn cal configurar explícitament les regles d\'eixida obrint els ports efímers corresponents.')),
                        QuizBank.createQuestion(QuizBank.textTranslation('¿Cómo se evalúan las reglas dentro de una Network ACL?', 'Com s\'avaluen les regles dins d\'una Network ACL?'), [
                                QuizBank.textTranslation('Todas las reglas juntas simultáneamente sin prioridad.', 'Totes les regles juntes simultàniament sense prioritat.'),
                                QuizBank.textTranslation('En orden ascendente según su número de regla (el número más bajo primero); en cuanto coincide una regla, se aplica y finaliza la evaluación.', 'En orde ascendent segons el seu número de regla (el número més baix primer); en quant coincideix una regla, s\'aplica i finalitza l\'avaluació.'),
                                QuizBank.textTranslation('En orden descendente comenzando por la regla 32767.', 'En orde descendent començant per la regla 32767.'),
                                QuizBank.textTranslation('Se evalúan primero las reglas DENY y después las ALLOW.', 'S\'avaluen primer les regles DENY i després les ALLOW.')
                            ], [1], QuizBank.textTranslation('Las reglas de una NACL tienen un número de orden y se evalúan de menor a mayor. La primera regla que coincide con el paquete determina la acción (ALLOW/DENY) y se detiene la evaluación.', 'Les regles d\'una NACL tenen un número d\'orde i s\'avaluen de menor a major. La primera regla que coincideix amb el paquet determina l\'acció (ALLOW/DENY) i es deté l\'avaluació.')),
                        QuizBank.createQuestion(QuizBank.textTranslation('¿Cuál es la relación de asociación entre Subredes y NACLs en AWS?', 'Quina és la relació d\'associació entre Subxarxes i NACLs en AWS?'), [
                                QuizBank.textTranslation('Una subred puede tener varias NACLs asociadas al mismo tiempo.', 'Una subxarxa pot tindre diverses NACLs associades al mateix temps.'),
                                QuizBank.textTranslation('Cada subred debe estar asociada a una sola NACL a la vez, aunque una misma NACL puede asociarse a varias subredes.', 'Cada subxarxa ha de tindre assignada una sola NACL a la vegada, tot i que una mateixa NACL pot associar-se a diverses subxarxes.'),
                                QuizBank.textTranslation('Las subredes públicas no pueden llevar NACLs.', 'Les subxarxes públiques no poden portar NACLs.'),
                                QuizBank.textTranslation('Las NACLs solo se asocian a nivel de interfaz de red de la instancia.', 'Les NACLs només s\'associen a nivell d\'interfície de xarxa de la instància.')
                            ], [1], QuizBank.textTranslation('Cada subred pertenece a una única NACL simultáneamente (la predeterminada si no se asigna una personalizada), pero una misma NACL se puede reutilizar en múltiples subredes.', 'Cada subxarxa pertany a una única NACL simultàniament (la predeterminada si no s\'assigna una personalitzada), però una mateixa NACL es pot reutilitzar en múltiples subxarxes.'))
                    ]
                },
                {
                    id: 'u2_t6',
                    name: QuizBank.textTranslation('Comparativa y Evaluación Conjunta (SG vs NACL)', 'Comparativa i Avaluació Conjunta (SG vs NACL)'),
                    questions: [
                        QuizBank.createQuestion(QuizBank.textTranslation('Si un Security Group permite el tráfico HTTP (puerto 80) pero la NACL de la subred contiene una regla DENY para ese puerto, ¿qué ocurre?', 'Si un Security Group permet el tràfic HTTP (port 80) però la NACL de la subxarxa conté una regla DENY per a eixe port, què passa?'), [
                                QuizBank.textTranslation('El tráfico llega con normalidad porque el Security Group prevalece.', 'El tràfic arriba amb normalitat perquè el Security Group preval.'),
                                QuizBank.textTranslation('El tráfico es bloqueado por la NACL a nivel de subred y no llega al Security Group ni a la instancia.', 'El tràfic és bloquejat per la NACL a nivell de subxarxa i no arriba al Security Group ni a la instància.'),
                                QuizBank.textTranslation('El paquete entra pero no se permite la respuesta.', 'El paquet entra però no es permet la resposta.'),
                                QuizBank.textTranslation('AWS elimina automáticamente la regla de la NACL al haber conflicto.', 'AWS elimina automàticament la regla de la NACL en haver conflicte.')
                            ], [1], QuizBank.textTranslation('El SG y la NACL actúan como capas complementarias de seguridad. El tráfico entrante debe ser permitido obligatoriamente por AMBOS filtros. Si la NACL bloquea la conexión, esta no alcanza la instancia.', 'El SG i la NACL actuen com a capes complementàries de seguretat. El tràfic d\'entrada ha de ser permés obligatòriament per AMBDÓS filtres. Si la NACL bloqueja la connexió, aquesta no aconsegueix la instància.')),
                        QuizBank.createQuestion(QuizBank.textTranslation('Compara las características clave de un Security Group frente a una Network ACL: (Selecciona todas las afirmaciones verdaderas)', 'Compara les característiques clau d\'un Security Group enfront d\'una Network ACL: (Selecciona totes les afirmacions verdaderes)'), [
                                QuizBank.textTranslation('El Security Group es stateful, mientras que la NACL es stateless.', 'El Security Group és stateful, mentre que la NACL és stateless.'),
                                QuizBank.textTranslation('El Security Group actúa a nivel de recurso/instancia; la NACL actúa a nivel de subred.', 'El Security Group actua a nivell de recurs/instància; la NACL actua a nivell de subxarxa.'),
                                QuizBank.textTranslation('Los Security Groups solo admiten reglas ALLOW; las NACLs permiten reglas ALLOW y DENY.', 'Els Security Groups només admeten regles ALLOW; les NACLs permeten regles ALLOW i DENY.'),
                                QuizBank.textTranslation('Las NACLs evalúan sus reglas por orden numérico ascendente; los Security Groups no usan prioridad numérica.', 'Les NACLs avaluen les seues regles per orde numèric ascendent; els Security Groups no utilitzen prioritat numèrica.')
                            ], [0, 1, 2, 3], QuizBank.textTranslation('Todas las afirmaciones son correctas y recogen las diferencias principales entre Security Groups (stateful, instancia, solo ALLOW) y NACLs (stateless, subred, ALLOW/DENY, orden numérico).', 'Totes les afirmacions són correctes i arrepleguen les diferències principals entre Security Groups (stateful, instància, només ALLOW) i NACLs (stateless, subxarxa, ALLOW/DENY, orde numèric).'))
                    ]
                }
            ]
        }
    ]
});
