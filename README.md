# Technologias
- Typescript 4.3.2
- Node 14.17.1
- Npm 6.14.13
- Mysql 2.2.5
- typorm 0.2.34
- express 4.17.1
# Setup
- configurar ruta a utilizar en .env
- ejecutar npm install en la termina ubicandose en   el  proyecto
- para configurar la bd llene los campos que estan en el .env
- para activar las migraciones vaya a la carpeta de:
    infractructure/database y en la parte de syncronice y esto hara automaticamente las migraciones (solo hagalo una vez) y luego pone en false.
- para correr test use npm run test

# Correr proyecto
- npm run start:dev