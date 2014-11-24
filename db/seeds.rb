# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Monumento.create([{
  nombre: 'Catedral de Santa María de Toledo',
  descripcion: "La catedral de Santa María de Toledo, (España), llamada también Catedral Primada de España, sede de la Archidiócesis de Toledo, es un edificio de arquitectura gótica, considerado por algunos como la opera magna1 del estilo gótico en España. Su construcción comenzó en 1226 bajo el reinado de Fernando III el Santo y las últimas aportaciones góticas se dieron en el siglo XV cuando en 1493 se cerraron las bóvedas de los pies de la nave central, en tiempos de los Reyes Católicos.",
  precio_entrada: 8,
  tiempo_visita: 50,
  imagen: 'fotitos/Catedral1.jpg'
}, 
{
  nombre: 'Álcazar',
  descripcion: 'El Alcázar de Toledo es una fortificación sobre rocas, ubicada en la parte más alta de la ciudad de Toledo, España, y que domina toda la ciudad. Su privilegiada situación ha hecho de él un lugar de gran valor estratégico militar y así lo intuyeron los diversos pueblos que se asentaron en él. Su nombre se debe a uno de esos dominadores: los árabes, que lo llamaron Al Qasar que significa «fortaleza», nombre acortado del que era habitual: Al-Quasaba cuyo significado era el lugar de la verdadera residencia principesca.',
  precio_entrada: 5,
  tiempo_visita: 30,
  imagen: 'fotitos/Alcazar1.jpg'
}, 
{
  nombre: 'Mezquita del Cristo de la Luz',
  descripcion: 'La ermita o iglesia del Cristo de la Luz, anteriormente mezquita de Bab al-Mardum es un edificio de la ciudad de Toledo, en el barrio de San Nicolás.De las diez mezquitas que llegó a tener la ciudad, es la mejor conservada. En época musulmana era un pequeño oratorio ligado a una puerta de acceso a la ciudad (Bab al-Mardum) para uso de los recién llegados a Toledo o para la preparación a la salida. Fue construida en el año 999, la época de esplendor del Califato de Córdoba, tal y como reza la franja epigráfica de su fachada de acceso.',
  precio_entrada: 2,
  tiempo_visita: 25,
  imagen: 'fotitos/Mezquita1.jpg'
}, 
{
  nombre: 'Museo de Santa Cruz',
  descripcion: 'El Museo de Santa Cruz se sitúa en un antiguo hospital que data de finales del siglo XV y primeros años del siglo XVI,  es una de las obras maestras del Renacimiento español. Su portada o su escalera del claustro, obra del arquitecto Alonso de Covarrubias, justifica por si mismo su visita.',
  precio_entrada: 6,
  tiempo_visita: 120,
  imagen: 'fotitos/Museo1.jpg'
}, 
{
  nombre: 'Sinagoga del Tránsito',
  descripcion: 'La Sinagoga del Tránsito, o Sinagoga de Samuel ha-Leví, situada en la ciudad de Toledo, es un edificio del siglo XIV erigido bajo el mecenazgo de Samuel ha-Levi en tiempos del rey Pedro I. Es una sinagoga construida en estilo mudéjar en la que destaca una armadura de par y nudillo , la Gran Sala de oración ornamentada con arquillos que permiten la entrada de luz exterior y frisos policromados en yeso decorados con motivos vegetales, geométricos y epigráficos, además de motivos heráldicos de la corona de Castilla.',
  precio_entrada: 3,
  tiempo_visita: 20,
  imagen: 'fotitos/Sinagoga.jpg'
}, 
{
  nombre: 'Palacio de Galiana',
  descripcion: 'El edificio actual, situado en lo que tradicionalmente se llama la Huerta del Rey, se reconstruyó en el siglo XIV sobre e el palacio de recreo del rey taifa Al-Mamún.Sería un espléndido jardín botánico y finca de recreo en le siglo XI, ya que se conservan descripciones contemporáneas del lujoso palacio de verano y su alberca, en cuyo centro se levantaba un fantasioso kiosco con vidrios de colores.',
  precio_entrada: 4,
  tiempo_visita: 45,
  imagen: 'fotitos/Galiana1.jpg'
}, 
{
  nombre: 'Puerta de Bisagra',
  descripcion: 'La Puerta de Bisagra o Puerta Nueva de Bisagra es una puerta monumental situada en las murallas de la ciudad española de Toledo, Castilla-La Mancha. Es conocida con el título de «Nueva» debido a que existe otra puerta en las inmediaciones —de menor tamaño— llamada Puerta Antigua de Bisagra o Puerta de Alfonso VI. Su nombre musulmán era bab al Shaqra.',
  precio_entrada: 0,
  tiempo_visita: 10,
  imagen: 'fotitos/Bisagra1.jpg'
}])
