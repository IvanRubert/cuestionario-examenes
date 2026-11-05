(() => {
  QuizBank.register({
    id: 'daw',
    name: QuizBank.textTranslation(`Despliegue de aplicaciones web`, `Desplegament d'aplicacions web`),
    units: [

      /* ══════════════ Ud1 · CONTROL DE VERSIONES ══════════════ */
      {
        id: 'ud1', name: QuizBank.textTranslation(`Ud1 · Control de versiones`, `Ud1 · Control de versions`),
        topics: [
          { id: 't1_2', name: QuizBank.textTranslation(`1.2 Sistemas de control de versiones`, `1.2 Sistemes de control de versions`), questions: [
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué caracteriza a un sistema de control de versiones distribuido?`, `Què caracteritza un sistema de control de versions distribuït?`), [
              QuizBank.textTranslation(`Hay un único repositorio central del que es responsable un solo usuario`, `Hi ha un únic repositori central del qual és responsable un sol usuari`),
              QuizBank.textTranslation(`Cada usuario tiene su propio repositorio y pueden intercambiar y mezclar revisiones entre ellos`, `Cada usuari té el seu propi repositori i poden intercanviar i barrejar revisions entre ells`),
              QuizBank.textTranslation(`Los cambios se guardan solo en local y no se comparten con nadie`, `Els canvis es guarden només en local i no es comparteixen amb ningú`),
              QuizBank.textTranslation(`Es obligatorio estar conectado para guardar cambios`, `És obligatori estar connectat per a guardar canvis`)], [1]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Cuáles son ejemplos de sistemas de control de versiones centralizados?`, `Quins són exemples de sistemes de control de versions centralitzats?`),
              [`CVS`, `Apache Subversion`, `Git`, `Mercurial`], [0, 1]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué ventajas tienen los sistemas distribuidos?`, `Quins avantatges tenen els sistemes distribuïts?`), [
              QuizBank.textTranslation(`No hace falta conexión para guardar cambios`, `No cal connexió per a guardar canvis`),
              QuizBank.textTranslation(`Se puede seguir trabajando si el repositorio remoto no está accesible`, `Es pot continuar treballant si el repositori remot no està accessible`),
              QuizBank.textTranslation(`Toda decisión importante necesita la aprobación de un único responsable`, `Tota decisió important necessita l'aprovació d'un únic responsable`),
              QuizBank.textTranslation(`Se necesitan menos recursos en el repositorio remoto`, `Calen menys recursos al repositori remot`)], [0, 1, 3])
          ]},

          { id: 't1_3', name: QuizBank.textTranslation(`1.3 Introducción a git`, `1.3 Introducció a git`), questions: [
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Cómo modela Git sus datos?`, `Com modela Git les seues dades?`), [
              QuizBank.textTranslation(`Como una lista de cambios en cada archivo`, `Com una llista de canvis en cada arxiu`),
              QuizBank.textTranslation(`Como un conjunto de instantáneas de un mini sistema de archivos`, `Com un conjunt d'instantànies d'un mini sistema d'arxius`),
              QuizBank.textTranslation(`Como un único archivo comprimido`, `Com un únic arxiu comprimit`),
              QuizBank.textTranslation(`Como una base de datos relacional`, `Com una base de dades relacional`)], [1]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Cuáles son los tres estados principales de un archivo en Git?`, `Quins són els tres estats principals d'un arxiu en Git?`), [
              QuizBank.textTranslation(`Confirmado (committed)`, `Confirmat (committed)`), QuizBank.textTranslation(`Modificado (modified)`, `Modificat (modified)`),
              QuizBank.textTranslation(`Preparado (staged)`, `Preparat (staged)`), QuizBank.textTranslation(`Publicado (published)`, `Publicat (published)`)], [0, 1, 2]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué flujo de trabajo se usa en proyectos con cientos de colaboradores, como el kernel de Linux?`, `Quin flux de treball s'usa en projectes amb centenars de col·laboradors, com el nucli de Linux?`), [
              QuizBank.textTranslation(`Dictador y tenientes`, `Dictador i tinents`), QuizBank.textTranslation(`Centralizado`, `Centralitzat`),
              QuizBank.textTranslation(`Gestor de integraciones`, `Gestor d'integracions`), `Peer-to-peer`], [0])
          ]},

          { id: 't1_4', name: QuizBank.textTranslation(`1.4 Instalación y configuración de Git`, `1.4 Instal·lació i configuració de Git`), questions: [
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué comando muestra la versión de Git instalada?`, `Quina ordre mostra la versió de Git instal·lada?`),
              [`git --version`, `git config --version`, `git status --version`, `git init --version`], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué órdenes forman parte de la configuración inicial recomendada de Git?`, `Quines ordres formen part de la configuració inicial recomanada de Git?`), [
              `git config --global user.name "John Doe"`, `git config --global user.email johndoe@example.com`,
              `git config --global push.default simple`, `git commit --amend`], [0, 1, 2]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué comando instala Git en una distribución basada en Debian, según los apuntes?`, `Quina ordre instal·la Git en una distribució basada en Debian, segons els apunts?`),
              [`apt-get install git-all`, `yum install git-core`, `brew install git`, `git install --debian`], [0],
              QuizBank.textTranslation(`yum es para Fedora y brew para MacOS.`, `yum és per a Fedora i brew per a MacOS.`))
          ]},

          { id: 't1_5', name: QuizBank.textTranslation(`1.5 Uso básico de Git`, `1.5 Ús bàsic de Git`), questions: [
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué orden crea un nuevo repositorio en el directorio actual?`, `Quina ordre crea un nou repositori al directori actual?`),
              [`git init`, `git start`, `git new`, `git create`], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué orden pasa un archivo modificado del Working Directory a la Staging Area?`, `Quina ordre passa un arxiu modificat del Working Directory a la Staging Area?`),
              [`git add`, `git commit`, `git status`, `git log`], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Cuáles son las secciones principales de un repositorio git?`, `Quines són les seccions principals d'un repositori git?`),
              [`Workspace`, `Staging area`, `Local repository`, `Remote repository`, `Docker registry`], [0, 1, 2, 3]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué afirmaciones sobre .gitignore son correctas?`, `Quines afirmacions sobre .gitignore són correctes?`), [
              QuizBank.textTranslation(`*.o ignora todos los archivos con extensión .o en todos los directorios`, `*.o ignora tots els arxius amb extensió .o en tots els directoris`),
              QuizBank.textTranslation(`!dir1/info.txt excluye ese archivo del ignore de dir1/`, `!dir1/info.txt exclou eixe arxiu de l'ignore de dir1/`),
              QuizBank.textTranslation(`dir2/*.txt ignora los archivos txt que hay en dir2`, `dir2/*.txt ignora els arxius txt que hi ha a dir2`),
              QuizBank.textTranslation(`Una línea que empieza por # fuerza la inclusión del archivo`, `Una línia que comença per # força la inclusió de l'arxiu`)], [0, 1, 2],
              QuizBank.textTranslation(`Una línea que empieza por # es un comentario.`, `Una línia que comença per # és un comentari.`)),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué comando muestra el historial con un commit por línea?`, `Quina ordre mostra l'historial amb un commit per línia?`),
              [`git log --oneline`, `git log --all-lines`, `git history`, `git show --short`], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué orden crea una etiqueta v1 sobre el commit actual?`, `Quina ordre crea una etiqueta v1 sobre el commit actual?`),
              [`git tag v1`, `git label v1`, `git tag -d v1`, `git checkout v1`], [0])
          ]},

          { id: 't1_6', name: QuizBank.textTranslation(`1.6 Uso avanzado de Git`, `1.6 Ús avançat de Git`), questions: [
            QuizBank.createQuestion(QuizBank.textTranslation(`Has modificado hola.php pero aún no lo has añadido a staging. ¿Qué orden descarta esos cambios?`, `Has modificat hola.php però encara no l'has afegit a staging. Quina ordre descarta eixos canvis?`),
              [`git restore hola.php`, `git restore --staged hola.php`, `git revert HEAD`, `git commit --amend`], [0],
              QuizBank.textTranslation(`git restore --staged solo saca el archivo de la Staging Area; no descarta los cambios del Working Directory.`, `git restore --staged només trau l'arxiu de la Staging Area; no descarta els canvis del Working Directory.`)),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué hace git revert HEAD?`, `Què fa git revert HEAD?`), [
              QuizBank.textTranslation(`Crea un nuevo commit que deshace los cambios del último commit`, `Crea un nou commit que desfà els canvis de l'últim commit`),
              QuizBank.textTranslation(`Elimina el último commit sin dejar rastro en el historial`, `Elimina l'últim commit sense deixar rastre a l'historial`),
              QuizBank.textTranslation(`Mueve HEAD al primer commit del repositorio`, `Mou HEAD al primer commit del repositori`),
              QuizBank.textTranslation(`Modifica el mensaje del último commit`, `Modifica el missatge de l'últim commit`)], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué orden permite modificar el último commit, por ejemplo para añadir un cambio olvidado?`, `Quina ordre permet modificar l'últim commit, per exemple per a afegir un canvi oblidat?`),
              [`git commit --amend`, `git revert --amend`, `git restore --amend`, `git commit --new`], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué advertencias hacen los apuntes sobre estos comandos?`, `Quines advertències fan els apunts sobre aquestes ordres?`), [
              QuizBank.textTranslation(`git reset es delicado, sobre todo en repositorios compartidos`, `git reset és delicat, sobretot en repositoris compartits`),
              QuizBank.textTranslation(`Nunca hay que modificar un commit ya sincronizado con otro repositorio`, `Mai no s'ha de modificar un commit ja sincronitzat amb un altre repositori`),
              QuizBank.textTranslation(`git revert borra los commits del historial`, `git revert esborra els commits de l'historial`),
              QuizBank.textTranslation(`git mv solo funciona dentro del mismo directorio`, `git mv només funciona dins del mateix directori`)], [0, 1]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué orden mueve un archivo a otro directorio dejando el cambio ya preparado en staging?`, `Quina ordre mou un arxiu a un altre directori deixant el canvi ja preparat en staging?`),
              [`git mv`, `git move`, `git rename --stage`, `git cp`], [0])
          ]},

          { id: 't1_7', name: QuizBank.textTranslation(`1.7 Ramas`, `1.7 Branques`), questions: [
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué orden crea una rama y cambia a ella en un solo paso?`, `Quina ordre crea una branca i canvia a ella en un sol pas?`),
              [`git checkout -b hola`, `git branch hola`, `git checkout hola`, `git merge hola`], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué orden incorpora a la rama actual los cambios de otra rama?`, `Quina ordre incorpora a la branca actual els canvis d'una altra branca?`),
              [`git merge nombrerama`, `git fork nombrerama`, `git clone nombrerama`, `git tag nombrerama`], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué indican las marcas <<<<<<< HEAD, ======= y >>>>>>> dentro de un archivo?`, `Què indiquen les marques <<<<<<< HEAD, ======= i >>>>>>> dins d'un arxiu?`), [
              QuizBank.textTranslation(`Un conflicto de fusión: el código de la rama actual y el de la rama que se fusiona`, `Un conflicte de fusió: el codi de la branca actual i el de la branca que es fusiona`),
              QuizBank.textTranslation(`Que el archivo está ignorado por .gitignore`, `Que l'arxiu està ignorat per .gitignore`),
              QuizBank.textTranslation(`Que el archivo ha sido borrado`, `Que l'arxiu ha sigut esborrat`),
              QuizBank.textTranslation(`Que el archivo está en la Staging Area`, `Que l'arxiu està a la Staging Area`)], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué afirmaciones sobre git rebase son correctas?`, `Quines afirmacions sobre git rebase són correctes?`), [
              QuizBank.textTranslation(`Reaplica los cambios de la rama sobre el último commit de otra, dejando un historial lineal`, `Reaplica els canvis de la branca sobre l'últim commit d'una altra, deixant un historial lineal`),
              QuizBank.textTranslation(`Modifica el orden o la historia de creación de los cambios`, `Modifica l'ordre o la història de creació dels canvis`),
              QuizBank.textTranslation(`Es recomendable usarlo en ramas compartidas`, `És recomanable usar-lo en branques compartides`),
              QuizBank.textTranslation(`Si hay conflictos, se resuelven y se continúa con git rebase --continue`, `Si hi ha conflictes, es resolen i es continua amb git rebase --continue`)], [0, 1, 3]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Para qué sirve --no-ff en git merge?`, `Per a què serveix --no-ff en git merge?`), [
              QuizBank.textTranslation(`Para dejar constancia de la fusión evitando el fast-forward`, `Per a deixar constància de la fusió evitant el fast-forward`),
              QuizBank.textTranslation(`Para forzar la resolución automática de conflictos`, `Per a forçar la resolució automàtica de conflictes`),
              QuizBank.textTranslation(`Para borrar la rama tras fusionarla`, `Per a esborrar la branca després de fusionar-la`),
              QuizBank.textTranslation(`Para impedir que se creen conflictos`, `Per a impedir que es creen conflictes`)], [0])
          ]},

          { id: 't1_8', name: QuizBank.textTranslation(`1.8 Github`, `1.8 GitHub`), questions: [
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué comando genera un par de claves SSH para identificarte en GitHub?`, `Quina ordre genera un parell de claus SSH per a identificar-te a GitHub?`),
              [`ssh-keygen -t rsa -C "Cuenta GitHub"`, `git keygen --ssh`, `git config --global ssh.key`, `ssh-copy-id github.com`], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué hace git fetch?`, `Què fa git fetch?`), [
              QuizBank.textTranslation(`Trae la información de los cambios del remoto, pero no los incorpora a tu directorio de trabajo`, `Porta la informació dels canvis del remot, però no els incorpora al teu directori de treball`),
              QuizBank.textTranslation(`Envía tus commits al repositorio remoto`, `Envia els teus commits al repositori remot`),
              QuizBank.textTranslation(`Clona un repositorio en un nuevo directorio`, `Clona un repositori en un nou directori`),
              QuizBank.textTranslation(`Descarta los cambios locales sin confirmar`, `Descarta els canvis locals sense confirmar`)], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué efecto tiene el parámetro -u en git push -u origin main?`, `Quin efecte té el paràmetre -u en git push -u origin main?`), [
              QuizBank.textTranslation(`Vincula la rama local con la remota para no tener que indicar los parámetros en los siguientes push`, `Vincula la branca local amb la remota per a no haver d'indicar els paràmetres en els següents push`),
              QuizBank.textTranslation(`Fuerza el envío aunque haya conflictos`, `Força l'enviament encara que hi haja conflictes`),
              QuizBank.textTranslation(`Actualiza la rama local desde el remoto`, `Actualitza la branca local des del remot`),
              QuizBank.textTranslation(`Deshace el último push`, `Desfà l'últim push`)], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`Tienes cambios sin confirmar y quieres sincronizar con el remoto. ¿Qué órdenes forman la solución con stash?`, `Tens canvis sense confirmar i vols sincronitzar amb el remot. Quines ordres formen la solució amb stash?`),
              [`git stash save`, `git pull`, `git stash pop`, `git reset --hard`], [0, 1, 2],
              QuizBank.textTranslation(`También puedes hacerlo de una vez con git pull --autostash.`, `També pots fer-ho d'una vegada amb git pull --autostash.`))
          ]},

          { id: 't1_9', name: QuizBank.textTranslation(`1.9 Flujo de trabajo en GitHub`, `1.9 Flux de treball a GitHub`), questions: [
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué texto en la descripción de un Pull Request cierra automáticamente la issue 1 al hacer el merge?`, `Quin text en la descripció d'un Pull Request tanca automàticament la issue 1 en fer el merge?`),
              [`Closes #1`, `Merge #1`, `Delete issue 1`, `Close-after-merge 1`], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué es un Pull Request (PR)?`, `Què és un Pull Request (PR)?`), [
              QuizBank.textTranslation(`Una solicitud para fusionar los cambios de una rama en otra, normalmente la principal`, `Una sol·licitud per a fusionar els canvis d'una branca en una altra, normalment la principal`),
              QuizBank.textTranslation(`Un comando para descargar el repositorio remoto`, `Una ordre per a descarregar el repositori remot`),
              QuizBank.textTranslation(`Una etiqueta que marca una versión estable`, `Una etiqueta que marca una versió estable`),
              QuizBank.textTranslation(`Un archivo de configuración de GitHub`, `Un arxiu de configuració de GitHub`)], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué opciones ofrece GitHub para cerrar un Pull Request?`, `Quines opcions ofereix GitHub per a tancar un Pull Request?`), [
              QuizBank.textTranslation(`Crear un merge commit`, `Crear un merge commit`), QuizBank.textTranslation(`Rebase y merge`, `Rebase i merge`),
              QuizBank.textTranslation(`Squash y merge`, `Squash i merge`), QuizBank.textTranslation(`Fast-forward sin commit de fusión`, `Fast-forward sense commit de fusió`)], [0, 1, 2],
              QuizBank.textTranslation(`GitHub siempre desactiva el fast-forward.`, `GitHub sempre desactiva el fast-forward.`)),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué hace «squash and merge»?`, `Què fa «squash and merge»?`), [
              QuizBank.textTranslation(`Crea un solo commit con los cambios de todos los commits de la rama`, `Crea un sol commit amb els canvis de tots els commits de la branca`),
              QuizBank.textTranslation(`Aplica cada commit de la rama por separado en main`, `Aplica cada commit de la branca per separat a main`),
              QuizBank.textTranslation(`Borra la rama sin incorporar sus cambios`, `Esborra la branca sense incorporar els seus canvis`),
              QuizBank.textTranslation(`Reescribe el historial de main desde el primer commit`, `Reescriu l'historial de main des del primer commit`)], [0])
          ]}
        ]
      },

      /* ══════════════ Ud2 · CONTENEDORES ══════════════ */
      {
        id: 'ud2', name: QuizBank.textTranslation(`Ud2 · Contenedores`, `Ud2 · Contenidors`),
        topics: [
          { id: 't2_1', name: QuizBank.textTranslation(`1 Introducción`, `1 Introducció`), questions: [
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué es un hipervisor?`, `Què és un hipervisor?`), [
              QuizBank.textTranslation(`Software que permite crear y ejecutar máquinas virtuales sobre un mismo hardware`, `Programari que permet crear i executar màquines virtuals sobre un mateix maquinari`),
              QuizBank.textTranslation(`Un gestor de imágenes de Docker`, `Un gestor d'imatges de Docker`),
              QuizBank.textTranslation(`Un servidor web de alto rendimiento`, `Un servidor web d'alt rendiment`),
              QuizBank.textTranslation(`Un sistema de control de versiones`, `Un sistema de control de versions`)], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿En qué tecnología de contenedores se centra la unidad?`, `En quina tecnologia de contenidors es centra la unitat?`), [
              QuizBank.textTranslation(`Docker sobre contenedores Linux`, `Docker sobre contenidors Linux`),
              QuizBank.textTranslation(`Contenedores de Windows Server Core`, `Contenidors de Windows Server Core`),
              QuizBank.textTranslation(`Máquinas virtuales de proceso (JVM)`, `Màquines virtuals de procés (JVM)`), `Solaris Zones`], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué ventajas se atribuyen a los contenedores frente a las máquinas virtuales?`, `Quins avantatges s'atribueixen als contenidors enfront de les màquines virtuals?`), [
              QuizBank.textTranslation(`Son más ligeros porque comparten el kernel del anfitrión`, `Són més lleugers perquè comparteixen el nucli de l'amfitrió`),
              QuizBank.textTranslation(`Arrancan rápidamente`, `Arrenquen ràpidament`),
              QuizBank.textTranslation(`Cada contenedor incluye un sistema operativo completo con su propio kernel`, `Cada contenidor inclou un sistema operatiu complet amb el seu propi nucli`),
              QuizBank.textTranslation(`Facilitan la portabilidad de las aplicaciones entre entornos`, `Faciliten la portabilitat de les aplicacions entre entorns`)], [0, 1, 3])
          ]},

          { id: 't2_2', name: QuizBank.textTranslation(`2 Instalación`, `2 Instal·lació`), questions: [
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué edición de Docker se estudia en el curso?`, `Quina edició de Docker s'estudia en el curs?`),
              [`Docker CE (Community Edition)`, `Docker EE (Enterprise Edition)`, `Docker Desktop Business`, `Docker Hub Pro`], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué comando comprueba que Docker funciona ejecutando un contenedor de ejemplo?`, `Quina ordre comprova que Docker funciona executant un contenidor d'exemple?`),
              [`sudo docker run hello-world`, `sudo docker test`, `sudo docker ps --check`, `sudo docker hello`], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué comando permite a tu usuario administrar Docker sin usar sudo?`, `Quina ordre permet al teu usuari administrar Docker sense usar sudo?`),
              [`sudo usermod -aG docker $USER`, `sudo docker --no-root`, `sudo chmod 777 /usr/bin/docker`, `sudo apt install docker-nosudo`], [0],
              QuizBank.textTranslation(`Después hay que cerrar y volver a abrir la sesión.`, `Després cal tancar i tornar a obrir la sessió.`)),
            QuizBank.createQuestion(QuizBank.textTranslation(`Al ejecutar docker run hello-world por primera vez, ¿qué ocurre?`, `En executar docker run hello-world per primera vegada, què passa?`), [
              QuizBank.textTranslation(`El cliente contacta con el daemon de Docker`, `El client contacta amb el daemon de Docker`),
              QuizBank.textTranslation(`Si la imagen no está en local, se descarga del registro público`, `Si la imatge no està en local, es descarrega del registre públic`),
              QuizBank.textTranslation(`Se crea y ejecuta un contenedor a partir de la imagen`, `Es crea i executa un contenidor a partir de la imatge`),
              QuizBank.textTranslation(`Se instala automáticamente Docker Compose`, `S'instal·la automàticament Docker Compose`)], [0, 1, 2])
          ]},

          { id: 't2_3', name: QuizBank.textTranslation(`3 Principales acciones con Docker`, `3 Principals accions amb Docker`), questions: [
            QuizBank.createQuestion(QuizBank.textTranslation(`En docker exec -d ubuntu_pruebas touch /tmp/prueba, ¿qué efecto tiene el parámetro -d?`, `A docker exec -d ubuntu_pruebas touch /tmp/prueba, quin efecte té el paràmetre -d?`), [
              QuizBank.textTranslation(`Ejecuta el comando en segundo plano (background)`, `Executa l'ordre en segon pla (background)`),
              QuizBank.textTranslation(`Borra el contenedor al terminar`, `Esborra el contenidor en acabar`),
              QuizBank.textTranslation(`Abre una terminal interactiva`, `Obri un terminal interactiu`),
              QuizBank.textTranslation(`Muestra los logs del contenedor`, `Mostra els logs del contenidor`)], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué comando abre una shell bash en el contenedor en ejecución ubuntu_pruebas?`, `Quina ordre obri una shell bash al contenidor en execució ubuntu_pruebas?`),
              [`docker exec -it ubuntu_pruebas bash`, `docker run -it ubuntu_pruebas`, `docker logs -it ubuntu_pruebas`, `docker cp ubuntu_pruebas bash`], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué comando enlaza la salida estándar de un contenedor en ejecución con tu terminal?`, `Quina ordre enllaça l'eixida estàndard d'un contenidor en execució amb el teu terminal?`),
              [`docker attach`, `docker exec`, `docker cp`, `docker inspect`], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué comandos sirven para interactuar con un contenedor en ejecución?`, `Quines ordres serveixen per a interactuar amb un contenidor en execució?`),
              [`docker exec`, `docker cp`, `docker logs`, `docker build`], [0, 1, 2])
          ]},

          { id: 't2_4', name: QuizBank.textTranslation(`4 Imágenes`, `4 Imatges`), questions: [
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué es una imagen de Docker?`, `Què és una imatge de Docker?`), [
              QuizBank.textTranslation(`Una plantilla de solo lectura a partir de la cual se inician los contenedores`, `Una plantilla de només lectura a partir de la qual s'inicien els contenidors`),
              QuizBank.textTranslation(`Un contenedor que se está ejecutando`, `Un contenidor que s'està executant`),
              QuizBank.textTranslation(`Un volumen para guardar datos`, `Un volum per a guardar dades`),
              QuizBank.textTranslation(`Una captura de pantalla del servidor`, `Una captura de pantalla del servidor`)], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué instrucción de un Dockerfile copia un archivo del anfitrión al sistema de archivos de la imagen?`, `Quina instrucció d'un Dockerfile copia un arxiu de l'amfitrió al sistema d'arxius de la imatge?`),
              [`ADD`, `EXPOSE`, `RUN`, `FROM`], [0], QuizBank.textTranslation(`Ejemplo de los apuntes: ADD ./start.sh /start.sh`, `Exemple dels apunts: ADD ./start.sh /start.sh`)),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué comando lanza la imagen alpineapache enlazando el puerto 8080 del anfitrión con el 80 del contenedor?`, `Quina ordre llança la imatge alpineapache enllaçant el port 8080 de l'amfitrió amb el 80 del contenidor?`),
              [`docker run -d -p 8080:80 alpineapache`, `docker run -d -p 80:8080 alpineapache`, `docker run -d -P 8080 alpineapache`, `docker run -d --expose 8080:80 alpineapache`], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`Trabajas en una máquina virtual de AWS y lanzas el contenedor en el puerto 8080. ¿Qué debes hacer para acceder desde tu navegador?`, `Treballes en una màquina virtual d'AWS i llances el contenidor al port 8080. Què has de fer per a accedir des del teu navegador?`), [
              QuizBank.textTranslation(`Abrir el puerto 8080 en el grupo de seguridad y usar la IP pública en lugar de localhost`, `Obrir el port 8080 al grup de seguretat i usar la IP pública en lloc de localhost`),
              QuizBank.textTranslation(`Nada: localhost funciona siempre`, `Res: localhost funciona sempre`),
              QuizBank.textTranslation(`Reinstalar Docker`, `Reinstal·lar Docker`),
              QuizBank.textTranslation(`Cambiar el puerto a 22`, `Canviar el port a 22`)], [0])
          ]},

          { id: 't2_5', name: QuizBank.textTranslation(`5 Volúmenes`, `5 Volums`), questions: [
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué maneras ofrece Docker de almacenar datos de un contenedor?`, `Quines maneres ofereix Docker d'emmagatzemar dades d'un contenidor?`), [
              QuizBank.textTranslation(`Volúmenes`, `Volums`), QuizBank.textTranslation(`Montar un directorio de la máquina anfitrión`, `Muntar un directori de la màquina amfitriona`),
              QuizBank.textTranslation(`La memoria del sistema (se pierde al reiniciar)`, `La memòria del sistema (es perd en reiniciar)`),
              QuizBank.textTranslation(`Guardarlos siempre en la imagen`, `Guardar-los sempre a la imatge`)], [0, 1, 2]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué comando crea un volumen llamado wordpress-db?`, `Quina ordre crea un volum anomenat wordpress-db?`),
              [`docker volume create wordpress-db`, `docker create volume wordpress-db`, `docker volume new wordpress-db`, `docker mkvolume wordpress-db`], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué ocurre con los datos de un volumen cuando se borra el contenedor que lo usaba?`, `Què passa amb les dades d'un volum quan s'esborra el contenidor que l'usava?`), [
              QuizBank.textTranslation(`Se conservan: solo se pierden si se borra explícitamente el volumen`, `Es conserven: només es perden si s'esborra explícitament el volum`),
              QuizBank.textTranslation(`Se borran siempre junto con el contenedor`, `S'esborren sempre junt amb el contenidor`),
              QuizBank.textTranslation(`Se mueven a la imagen`, `Es mouen a la imatge`),
              QuizBank.textTranslation(`Se copian automáticamente al anfitrión`, `Es copien automàticament a l'amfitrió`)], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`Según los apuntes, ¿qué conviene usar para guardar los datos de una base de datos?`, `Segons els apunts, què convé usar per a guardar les dades d'una base de dades?`), [
              QuizBank.textTranslation(`Un volumen`, `Un volum`), QuizBank.textTranslation(`Un directorio montado del anfitrión`, `Un directori muntat de l'amfitrió`),
              QuizBank.textTranslation(`La memoria del sistema`, `La memòria del sistema`), QuizBank.textTranslation(`docker cp`, `docker cp`)], [0],
              QuizBank.textTranslation(`El directorio montado se reserva para el código fuente, que debe ser accesible desde el entorno de desarrollo.`, `El directori muntat es reserva per al codi font, que ha de ser accessible des de l'entorn de desenvolupament.`))
          ]},

          { id: 't2_6', name: QuizBank.textTranslation(`6 Integrar contenedores y volúmenes`, `6 Integrar contenidors i volums`), questions: [
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué hace --mount source=vol-wordpress-db,target=/var/lib/mysql?`, `Què fa --mount source=vol-wordpress-db,target=/var/lib/mysql?`), [
              QuizBank.textTranslation(`Enlaza el volumen con el directorio donde MariaDB guarda sus datos`, `Enllaça el volum amb el directori on MariaDB guarda les seues dades`),
              QuizBank.textTranslation(`Copia la base de datos al anfitrión una sola vez`, `Copia la base de dades a l'amfitrió una sola vegada`),
              QuizBank.textTranslation(`Crea una red entre dos contenedores`, `Crea una xarxa entre dos contenidors`),
              QuizBank.textTranslation(`Descarga la imagen de MariaDB`, `Descarrega la imatge de MariaDB`)], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué hace -p 8080:80 en docker run?`, `Què fa -p 8080:80 en docker run?`), [
              QuizBank.textTranslation(`Enlaza el puerto 8080 del anfitrión con el puerto 80 del contenedor`, `Enllaça el port 8080 de l'amfitrió amb el port 80 del contenidor`),
              QuizBank.textTranslation(`Enlaza el puerto 80 del anfitrión con el 8080 del contenedor`, `Enllaça el port 80 de l'amfitrió amb el 8080 del contenidor`),
              QuizBank.textTranslation(`Limita el contenedor a 8080 procesos`, `Limita el contenidor a 8080 processos`),
              QuizBank.textTranslation(`Expone el puerto 8080 solo a otros contenedores`, `Exposa el port 8080 només a altres contenidors`)], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué parámetro vincula un contenedor con otro usando un alias?`, `Quin paràmetre vincula un contenidor amb un altre usant un àlies?`),
              [`--link`, `--mount`, `--restart`, `--name`], [0],
              QuizBank.textTranslation(`Está desaconsejado desde Docker 1.13 en favor de las redes.`, `Està desaconsellat des de Docker 1.13 a favor de les xarxes.`))
          ]},

          { id: 't2_7', name: QuizBank.textTranslation(`7 Docker Compose`, `7 Docker Compose`), questions: [
            QuizBank.createQuestion(QuizBank.textTranslation(`¿En qué fichero se define una aplicación multicontenedor con Docker Compose?`, `En quin fitxer es defineix una aplicació multicontenidor amb Docker Compose?`),
              [`docker-compose.yml`, `Dockerfile`, `compose.json`, `docker.conf`], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué secciones tiene un fichero de Compose?`, `Quines seccions té un fitxer de Compose?`),
              [`services`, `volumes`, `networks`, `images`], [0, 1, 2]),
            QuizBank.createQuestion(QuizBank.textTranslation(`Según la actualización de noviembre de 2025, ¿cuál es la forma actual de arrancar los servicios en segundo plano?`, `Segons l'actualització de novembre de 2025, quina és la forma actual d'arrancar els serveis en segon pla?`),
              [`docker compose up -d`, `docker-compose up -d`, `docker compose launch`, `docker-compose build -d`], [0],
              QuizBank.textTranslation(`El formato con guion (docker-compose) está en desuso.`, `El format amb guió (docker-compose) està en desús.`)),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué borra docker-compose down -v?`, `Què esborra docker-compose down -v?`), [
              QuizBank.textTranslation(`Los contenedores y también los volúmenes`, `Els contenidors i també els volums`),
              QuizBank.textTranslation(`Solo los contenedores`, `Només els contenidors`),
              QuizBank.textTranslation(`Solo los volúmenes`, `Només els volums`),
              QuizBank.textTranslation(`Las imágenes descargadas`, `Les imatges descarregades`)], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿A qué parámetro de Compose equivale -e de docker run?`, `A quin paràmetre de Compose equival -e de docker run?`),
              [`environment`, `ports`, `volumes`, `depends_on`], [0])
          ]},

          { id: 't2_9', name: QuizBank.textTranslation(`9 Trucos`, `9 Trucs`), questions: [
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué es Portainer?`, `Què és Portainer?`), [
              QuizBank.textTranslation(`Un gestor de contenedores e imágenes con interfaz web`, `Un gestor de contenidors i imatges amb interfície web`),
              QuizBank.textTranslation(`Un registro público de imágenes`, `Un registre públic d'imatges`),
              QuizBank.textTranslation(`Un sistema de control de versiones`, `Un sistema de control de versions`),
              QuizBank.textTranslation(`Un servidor de bases de datos`, `Un servidor de bases de dades`)], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué comando borra los objetos de Docker que no están en uso?`, `Quina ordre esborra els objectes de Docker que no estan en ús?`),
              [`docker system prune`, `docker rm --all`, `docker clean`, `docker volume prune --images`], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Cuál es la imagen base más ligera de la lista de los apuntes?`, `Quina és la imatge base més lleugera de la llista dels apunts?`),
              [`busybox`, `alpine`, `debian`, `ubuntu`], [0], QuizBank.textTranslation(`busybox (1,16 MB) frente a alpine (4,4 MB).`, `busybox (1,16 MB) enfront d'alpine (4,4 MB).`))
          ]}
        ]
      },

      /* ══════════════ Ud3 · SERVIDORES WEB ══════════════ */
      {
        id: 'ud3', name: QuizBank.textTranslation(`Ud3 · Servidores web`, `Ud3 · Servidors web`),
        topics: [
          { id: 't3_1', name: QuizBank.textTranslation(`3.1 Implantación de arquitecturas web`, `3.1 Implantació d'arquitectures web`), questions: [
            QuizBank.createQuestion(QuizBank.textTranslation(`En el modelo cliente-servidor, ¿quién suele iniciar la comunicación?`, `En el model client-servidor, qui sol iniciar la comunicació?`), [
              QuizBank.textTranslation(`El cliente`, `El client`), QuizBank.textTranslation(`El servidor`, `El servidor`),
              QuizBank.textTranslation(`El balanceador de carga`, `El balancejador de càrrega`), QuizBank.textTranslation(`El servidor de base de datos`, `El servidor de base de dades`)], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué componentes forman la plataforma LAMP?`, `Quins components formen la plataforma LAMP?`),
              [`Linux`, `Apache`, `MySQL`, `PHP`, `Nginx`], [0, 1, 2, 3]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué plataforma está basada en tecnologías de Microsoft (Windows, IIS, SQL Server, ASP.NET)?`, `Quina plataforma està basada en tecnologies de Microsoft (Windows, IIS, SQL Server, ASP.NET)?`),
              [`WISA`, `LAMP`, `LNMP`, `XAMPP`], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`En un modelo multinivel (N-tier), ¿cómo se ejecuta cada nivel?`, `En un model multinivell (N-tier), com s'executa cada nivell?`), [
              QuizBank.textTranslation(`En un hardware diferente al del resto de niveles`, `En un maquinari diferent del de la resta de nivells`),
              QuizBank.textTranslation(`Siempre en la misma computadora`, `Sempre en el mateix ordinador`),
              QuizBank.textTranslation(`Dentro del navegador del cliente`, `Dins del navegador del client`),
              QuizBank.textTranslation(`En el mismo proceso que la base de datos`, `En el mateix procés que la base de dades`)], [0],
              QuizBank.textTranslation(`En el modelo multicapa (N-layer), varias capas pueden ejecutarse en la misma máquina.`, `En el model multicapa (N-layer), diverses capes poden executar-se en la mateixa màquina.`)),
            QuizBank.createQuestion(QuizBank.textTranslation(`En la arquitectura MVC, ¿qué elemento contiene los datos y las reglas de negocio?`, `En l'arquitectura MVC, quin element conté les dades i les regles de negoci?`), [
              QuizBank.textTranslation(`El Modelo`, `El Model`), QuizBank.textTranslation(`La Vista`, `La Vista`), QuizBank.textTranslation(`El Controlador`, `El Controlador`), QuizBank.textTranslation(`El Descriptor de despliegue`, `El Descriptor de desplegament`)], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Cómo se llama la escalabilidad que consiste en aumentar el número de nodos y balancear la carga entre ellos?`, `Com es diu l'escalabilitat que consisteix a augmentar el nombre de nodes i balancejar la càrrega entre ells?`), [
              QuizBank.textTranslation(`Escalabilidad horizontal`, `Escalabilitat horitzontal`), QuizBank.textTranslation(`Escalabilidad vertical`, `Escalabilitat vertical`),
              QuizBank.textTranslation(`Escalabilidad lineal`, `Escalabilitat lineal`), QuizBank.textTranslation(`Escalabilidad estática`, `Escalabilitat estàtica`)], [0])
          ]},

          { id: 't3_2', name: QuizBank.textTranslation(`3.2 Arquitectura web. Implantación y administración de servidores web`, `3.2 Arquitectura web. Implantació i administració de servidors web`), questions: [
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Por qué se dice que el consumo de recursos de un servidor web tiene forma de «diente de sierra»?`, `Per què es diu que el consum de recursos d'un servidor web té forma de «dent de serra»?`), [
              QuizBank.textTranslation(`Porque puede pasar de un consumo muy bajo a una avalancha puntual de peticiones`, `Perquè pot passar d'un consum molt baix a una allau puntual de peticions`),
              QuizBank.textTranslation(`Porque siempre consume la misma cantidad de memoria`, `Perquè sempre consumeix la mateixa quantitat de memòria`),
              QuizBank.textTranslation(`Porque solo funciona por las noches`, `Perquè només funciona a les nits`),
              QuizBank.textTranslation(`Porque depende del sistema operativo`, `Perquè depén del sistema operatiu`)], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué contenidos consumen más recursos en un servidor web?`, `Quins continguts consumeixen més recursos en un servidor web?`), [
              QuizBank.textTranslation(`Los dinámicos y los servidos con cifrado HTTPS`, `Els dinàmics i els servits amb xifratge HTTPS`),
              QuizBank.textTranslation(`Las páginas HTML estáticas sin cifrar`, `Les pàgines HTML estàtiques sense xifrar`),
              QuizBank.textTranslation(`Los archivos CSS pequeños`, `Els arxius CSS xicotets`),
              QuizBank.textTranslation(`Todos consumen exactamente lo mismo`, `Tots consumeixen exactament el mateix`)], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué funciones adicionales ofrecen muchos servidores web además de servir contenido?`, `Quines funcions addicionals ofereixen molts servidors web a més de servir contingut?`), [
              QuizBank.textTranslation(`Cifrado de la comunicación vía HTTPS`, `Xifratge de la comunicació via HTTPS`),
              QuizBank.textTranslation(`Autenticación HTTP para áreas concretas`, `Autenticació HTTP per a àrees concretes`),
              QuizBank.textTranslation(`Redirección de peticiones (Rewrite Engine)`, `Redirecció de peticions (Rewrite Engine)`),
              QuizBank.textTranslation(`Caché de documentos dinámicos`, `Caché de documents dinàmics`),
              QuizBank.textTranslation(`Compilar el código fuente de la aplicación`, `Compilar el codi font de l'aplicació`)], [0, 1, 2, 3]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿En qué protocolos de red se basa HTTP (y su variante HTTPS) para la transmisión?`, `En quins protocols de xarxa es basa HTTP (i la seua variant HTTPS) per a la transmissió?`),
              [`IP y TCP`, `IPX y SPX`, `FTP y SMTP`, `ARP y ICMP`], [0])
          ]},

          { id: 't3_3', name: QuizBank.textTranslation(`3.3 Los protocolos HTTP y HTTPS`, `3.3 Els protocols HTTP i HTTPS`), questions: [
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Cuál es el puerto por defecto de HTTP?`, `Quin és el port per defecte d'HTTP?`), [`80`, `21`, `22`, `443`], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué métodos recoge el estándar HTTP/1.0?`, `Quins mètodes arreplega l'estàndard HTTP/1.0?`),
              [`GET`, `HEAD`, `POST`, `PUT`, `DELETE`], [0, 1, 2], QuizBank.textTranslation(`PUT, DELETE, OPTIONS, TRACE y CONNECT llegan con HTTP/1.1.`, `PUT, DELETE, OPTIONS, TRACE i CONNECT arriben amb HTTP/1.1.`)),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué grupo de códigos de estado indica un error generado en el servidor?`, `Quin grup de codis d'estat indica un error generat al servidor?`), [
              QuizBank.textTranslation(`5xx`, `5xx`), QuizBank.textTranslation(`4xx`, `4xx`), QuizBank.textTranslation(`3xx`, `3xx`), QuizBank.textTranslation(`2xx`, `2xx`)], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué cabecera de HTTP/1.1 permitió alojar varios dominios en la misma dirección IP?`, `Quina capçalera d'HTTP/1.1 va permetre allotjar diversos dominis en la mateixa adreça IP?`),
              [`Host`, `Accept`, `User-Agent`, `Content-Type`], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Sobre qué protocolo de transporte funciona HTTP/3?`, `Sobre quin protocol de transport funciona HTTP/3?`), [
              QuizBank.textTranslation(`QUIC, que se apoya en UDP`, `QUIC, que es basa en UDP`), QuizBank.textTranslation(`TCP, igual que las versiones anteriores`, `TCP, igual que les versions anteriors`),
              QuizBank.textTranslation(`FTP`, `FTP`), QuizBank.textTranslation(`SMTP`, `SMTP`)], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué protocolo de cifrado emplea hoy HTTPS?`, `Quin protocol de xifratge empra hui HTTPS?`),
              [`TLS`, `SSL`, `SSH`, `IPsec`], [0], QuizBank.textTranslation(`SSL está obsoleto y fue sustituido por TLS.`, `SSL està obsolet i va ser substituït per TLS.`)),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Cuál es un identificador de tipo MIME válido para una página web HTML?`, `Quin és un identificador de tipus MIME vàlid per a una pàgina web HTML?`),
              [`text/html`, `html/text`, `page/html`, `text.html`], [0], QuizBank.textTranslation(`El formato es tipo/subtipo.`, `El format és tipus/subtipus.`))
          ]},

          { id: 't3_4', name: QuizBank.textTranslation(`3.4 Servidores web: Nginx vs Apache`, `3.4 Servidors web: Nginx vs Apache`), questions: [
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué problema busca resolver con más eficiencia Nginx?`, `Quin problema busca resoldre amb més eficiència Nginx?`), [
              QuizBank.textTranslation(`El problema C10K: atender muchísimas conexiones simultáneas`, `El problema C10K: atendre moltíssimes connexions simultànies`),
              QuizBank.textTranslation(`La compilación de código PHP`, `La compilació de codi PHP`),
              QuizBank.textTranslation(`El control de versiones`, `El control de versions`),
              QuizBank.textTranslation(`La gestión de bases de datos`, `La gestió de bases de dades`)], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué razones se dan para usar Nginx?`, `Quines raons es donen per a usar Nginx?`), [
              QuizBank.textTranslation(`Es ligero y reduce el consumo de RAM`, `És lleuger i reduïx el consum de RAM`),
              QuizBank.textTranslation(`Puede usarse como caché`, `Pot usar-se com a caché`),
              QuizBank.textTranslation(`Puede funcionar como balanceador de carga`, `Pot funcionar com a balancejador de càrrega`),
              QuizBank.textTranslation(`Solo funciona en Windows`, `Només funciona en Windows`)], [0, 1, 2]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Cómo pueden combinarse Nginx y Apache en una misma instalación?`, `Com poden combinar-se Nginx i Apache en una mateixa instal·lació?`), [
              QuizBank.textTranslation(`Nginx sirve el contenido estático y Apache el dinámico`, `Nginx servix el contingut estàtic i Apache el dinàmic`),
              QuizBank.textTranslation(`No pueden coexistir`, `No poden coexistir`),
              QuizBank.textTranslation(`Apache sirve estático y Nginx compila PHP`, `Apache servix l'estàtic i Nginx compila PHP`),
              QuizBank.textTranslation(`Solo pueden usarse juntos en Windows`, `Només poden usar-se junts en Windows`)], [0]),
            QuizBank.createQuestion(QuizBank.textTranslation(`¿Qué porcentaje de uso suman aproximadamente Apache y Nginx entre los servidores web?`, `Quin percentatge d'ús sumen aproximadament Apache i Nginx entre els servidors web?`), [
              QuizBank.textTranslation(`Más del 85 %`, `Més del 85 %`), QuizBank.textTranslation(`Alrededor del 40 %`, `Al voltant del 40 %`),
              QuizBank.textTranslation(`Menos del 10 %`, `Menys del 10 %`), QuizBank.textTranslation(`Exactamente el 100 %`, `Exactament el 100 %`)], [0])
          ]}
        ]
      }
    ]
  });
})();
