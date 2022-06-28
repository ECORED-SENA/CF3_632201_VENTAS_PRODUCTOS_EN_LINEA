<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 3
      h1 Tratamiento de datos personales

    .row.justify-content-center.mb-5
      .col-8.col-lg-4.z_top
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema3/t3_01.png", alt="alt")
      .col-lg-8(data-aos="fade-in")
        .gray--right
          .row.mb-4
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/recursos/square_02.svg", alt="alt")
            .col-lg
              p.txt--blue.mb-0 Se puede decir que el tratamiento de datos se enfoca en la forma de manipular cualquier procedimiento técnico, automatizado o no, esto le permite recopilar, registrar, guardar, procesar, modificar, consultar, usar, eliminar, bloquear o borrar cualquier tipo de información.

          p.mb-0 Sin seguridad no hay debido Tratamiento de Datos Personales. Por eso, la Ley 1581 de 2012 establece lo siguiente: #[span.hg--purple02 “La información sujeta a tratamiento por el responsable del Tratamiento o Encargado del Tratamiento a que se refiere la presente ley, se deberá manejar con las medidas técnicas, humanas y administrativas que sean necesarias para otorgar seguridad a los registros evitando su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento. En desarrollo de lo anterior, la Ley impone a los responsables y encargados del tratamiento los siguientes deberes: Conservar la información bajo las condiciones de seguridad necesarias para impedir su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento, Informar a la autoridad de protección de datos cuando se presenten violaciones a los códigos de seguridad y existan riesgos en la administración de la información de los Titulares”] #[span.txt--purple (SIC, 2020).]

     
    .bg_img_02 
      .bloque-texto-a.clr--01A(data-aos="fade-in").p-4.p-md-5.mb-5 
        .row.m-0.align-items-center.justify-content-between        
          .col-lg-8.mb-4.mb-lg-0
            .bloque-texto-a__texto.p-4
              p.mb-0 #[strong Los principios y obligaciones de seguridad tienen un estándar preventivo que obliga al responsable del tratamiento a tomar las medidas necesarias para evitar el posible impacto en la seguridad de los datos.]  Sin embargo, si las medidas de seguridad fallan, se debe estar preparado para aminorar los posibles riesgos y daños que puedan plantear los derechos y libertades básicos del propietario y la organización.
          .col-lg-4
            figure
              img(src="@/assets/curso/temas/tema3/t3_02.svg", alt="alt")

      .cajon.cjn--yellow.p-4(data-aos="zoom-in")
        p.mb-0 #[strong Estos riesgos y daños pueden ser de gravedad y probabilidad variables, materiales o inmateriales, en particular, si esos incidentes generan situaciones de discriminación, divulgación de información o aspectos íntimos de los titulares o daños a su dignidad, buen nombre o reputación y afectación de datos de carácter sensible de niños, niñas y adolescentes o de personas con algún grado de discapacidad, grupos de personas en situación de especial vulnerabilidad, o en riesgo de exclusión social, o de seguridad], o cualquier otro perjuicio económico o social, dichos riesgos o daños varían y pueden llegar a ser muy graves, especialmente si estos casos conducen a una situación de discriminación, divulgación o aspectos íntimos de la información de alguna persona, causando algún tipo de daño inclinado a la dignidad, o reputación, de igual forma puede ser para un bien, servicio o producto. Poner en riesgo datos sensibles en colectivos de niños, niñas y adolescentes, personas con alguna discapacidad, o situación vulnerabilidad, exclusión social, seguridad u otro perjuicio económico o social.

      separador

      #t_3_1.titulo-segundo.color-acento-contenido
        h2 3.1 Principios 

      .bloque-texto-a.clr--03(data-aos="zoom-in").p-4.p-md-5.mb-5 
        .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema3/t3_03.png", alt="alt")
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p.mb-0 Cualquier acción realizada sobre cualquier tipo de datos personales tal como, indagación, registro, estructuración, organización, siempre tendrá que ver con los principios de protección de datos y su aplicación, a continuación, se mencionarán los principios bases para el tratamiento de datos personales. #[span.txt--blue A continuación se presentan los principios expuestos por la SIC (s.f.):]

    .row.justify-content-center.align-items-center
      .col-lg-7
        .slyderB_bg.p-4
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center.my-lg-4
              .col-lg-10.pt-5.position-relative 
                .number.num--left(data-number="01")   
                  h4.ps-4 Principio de legalidad en materia de tratamiento de datos               
                  p.ps-4.mb-0 El tratamiento de datos personales es una actividad reglada que debe sujetarse a lo establecido en la ley y en las demás disposiciones que la desarrollen. 

            .row.justify-content-center.align-items-center.my-lg-4
              .col-lg-10.position-relative 
                .number.num--left(data-number="02")   
                  h4.ps-4 Principio de finalidad               
                  p.ps-4.mb-0 El tratamiento de datos personales debe obedecer a una finalidad legítima de acuerdo con la constitución y la ley, la cual debe ser informada al titular.     

            .row.justify-content-center.align-items-center.my-lg-4
              .col-lg-10.pt-0.position-relative 
                .number.num--left(data-number="03")   
                  h4.ps-4 Principio de libertad               
                  p.ps-4.mb-0 El tratamiento de datos personales solo puede ejercerse con el consentimiento previo, expreso e informado del titular. Los datos personales no podrán ser obtenidos o divulgados sin previa autorización, o en ausencia de mandato legal o judicial que releve el consentimiento.   

            .row.justify-content-center.align-items-center.my-lg-4
              .col-lg-10.position-relative 
                .number.num--left(data-number="04")   
                  h4.ps-4 Principio de veracidad o calidad               
                  p.ps-4.mb-0 La información personal sujeta a tratamiento debe ser veraz, completa, exacta, actualizada, comprobable y comprensible, en este sentido, se prohíbe el tratamiento de datos parciales, incompletos, fraccionados o que induzcan a error.   

            .row.justify-content-center.align-items-center.my-lg-4
              .col-lg-10.position-relative 
                .number.num--left(data-number="05")   
                  h4.ps-4 Principio de transparencia               
                  p.ps-4.mb-0 En el tratamiento de datos personales debe garantizarse el derecho del titular a obtener del responsable del tratamiento o del encargado del tratamiento, en cualquier momento y sin restricciones, información acerca de la existencia de datos que le conciernan.   

            .row.justify-content-center.align-items-center.my-lg-4
              .col-lg-10.pt-5.position-relative 
                .number.num--left(data-number="06")   
                  h4.ps-4 Principio de acceso y circulación restringida              
                  p.ps-4.mb-0 El tratamiento de datos personales está sujeto a los límites que se derivan de la naturaleza de los mismos, de las disposiciones de ley y la constitución. En este sentido, su tratamiento solo podrá hacerse por personas autorizadas por el titular y/o por las personas previstas en ley. En este sentido, los datos personales, salvo la información pública, no podrán estar disponibles en Internet u otros medios de divulgación o comunicación masiva, salvo que el acceso sea técnicamente controlable para brindar un conocimiento restringido solo a los titulares o terceros autorizados conforme a la ley.   

            .row.justify-content-center.align-items-center.my-lg-4
              .col-lg-10.pt-0.position-relative 
                .number.num--left(data-number="07")   
                  h4.ps-4 Principio de seguridad             
                  p.ps-4.mb-0 La información personal sujeta a tratamiento por el responsable del Tratamiento o Encargado del Tratamiento a que se refiere la ley, se deberá manejar con las medidas técnicas, humanas y administrativas que sean necesarias para otorgar seguridad a los registros evitando su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento. 

            .row.justify-content-center.align-items-center.my-lg-4
              .col-lg-10.pt-0.position-relative 
                .number.num--left(data-number="08")   
                  h4.ps-4 Principio de seguridad             
                  p.ps-4.mb-0 Todas las personas que intervengan en el tratamiento de datos personales que no tengan la naturaleza de públicos están obligadas a garantizar la reserva de la información, inclusive después de finalizada su relación con alguna de las labores que comprende el tratamiento, pudiendo solo realizar suministro o comunicación de datos personales cuando ello corresponda al desarrollo de las actividades autorizadas en la ley y en los términos de la misma.             

      .col-lg-5.d-none.d-lg-flex
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema3/t3_04.svg", alt="alt")

    separador

    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Registro y base de datos

    .row.justify-content-center
      .col-lg-8
        p El registro de datos se encarga de inspeccionar eventos con los cuales se pueden monitorear datos en tiempo real, específicamente datos con precisión los cuales permitan detectar anomalías y tomar decisiones de forma rápida para mitigar algún tipo de problema que pueda presentar una organización.
        .row
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/recursos/square_06.svg", alt="alt").img30
          .col
            p #[span.txt--purple Un registro (también conocido como fila) simboliza un solo objeto de datos expresamente estructurados en una tabla.] En pocas palabras, puede pensar en una tabla de base de datos compuestas por filas, campos y columnas. Dejando claro que cada fila de la tabla hace parte de un conjunto de datos relacionados y las filas de una misma tabla poseen la misma organización, de igual forma un registro hace referencia al conjunto de espacios asignados que contienen. Se les asigna automáticamente un número de serie (número de registro). #[strong Esto a veces se usa como un índice, pero generalmente es conveniente asignar un campo clave para buscar en cada registro.]
      .col-8.col-lg-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema3/t3_05.png", alt="alt")

    .cajon.cjn--yellow.p-4.mb-5
      p.mb-0 #[span.txt--purple Una base de datos personales es una colección de información personal organizada en medios físicos o electrónicos.] En general, la gran mayoría de empresas tienen una base de datos de empleados, clientes y proveedores, un dato personal es información que está o puede estar vinculada a una o más personas naturales. #[strong Estos datos casi siempre pueden ser públicos o privados, cuando se habla de tratamiento de datos personales, se hace referencia a todas las actividades realizadas con cualquier tipo de información personal, tales como, recopilar, almacenar, consultar, actualizar o compartir estos datos.] Lo anterior con base en el propósito planteado por la empresa teniendo claro el para qué de la base de datos.

    .row.justify-content-center.mb-4
      .col-8.col-lg-4.mb-4.mb-lg-0
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema3/t3_06.svg", alt="alt")
      .col-lg-8
        p #[strong Conservar los registros de datos es una manera adecuada para que las organizaciones supervisen la utilidad y el rendimiento de todas las aplicaciones de una infraestructura independientemente su oficio.] Los registros de datos pueden representar una gran cantidad de información, sin embargo, servirán al momento de evidenciar cualquier tipo de contingencia el registro extenso de datos puede ser importante para solucionar problemas en ciertas situaciones, optimizando tiempo, dinero y recursos tanto físicos como económicos.
        .cajon.cjn--purpura.p-4
          p.mb-0 Cuando se usan correctamente, los datos de registro estos se podrán transformar en inteligencia operativa, dicho registro le permite monitorear cuidadosamente los procesos comerciales de una compra, las transacciones y las suscripciones, como en las tiendas de comercio electrónico. #[strong Los mecanismos eficientes de registro de datos le permiten monitorear mejor un negocio.]

    p.mb-4 #[strong Existen muchas formas de recopilar datos, y debe encontrar la que mejor se adapte al tipo de investigación y análisis que se desea realizar. En primer lugar, se debe decidir si se desea que el estudio sea cualitativo, cuantitativo o combinado.] De cualquier manera, se puede profundizar más en el tema, una indagación cuantitativa involucra siempre la recopilación de datos numéricos. Si no necesita números, su estudio es cualitativo. Los métodos de selección de datos cuantitativos siempre utilizan datos que puedan ser medibles.

    .bg_img_01
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-7.mb-4.mb-lg-0
          .cajon.cjn--azul.p-4
            p.mb-0 #[strong Cuando se trata de una investigación cuantitativa lo primero que se debe realizar es un diseño de recolección de datos para generar un muestreo aquí se podrá tomar como referencia los formatos de encuestas], y sus metodologías las cuales pueden ser en persona, via telefónica o en línea, se debe tener en cuenta que las preguntas deben estar bien definidas para analizarlas posteriormente, de igual forma si cuenta con una dato secundario no se  debe olvidar de dónde proviene la información ya por lo general son fuentes secundarias.
        .col-8.col-lg-5 
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema3/t3_07.svg", alt="alt")

      p.mb-5 #[strong Al momento de hablar de una investigación cualitativa se hace referencia a un tema netamente exploratorio el cual es utilizado para comprender razones y motivos sobre temas específicos y ayudan a formular hipótesis para posibles indagaciones cuantitativas.] Se debe tener en cuenta que los métodos de recopilación de datos cualitativos analizan los motivos de la decisión y los siguientes son los tipos frecuentes de hacerlo:

      .row.justify-content-center.mb-5

        .col-xl-6.mb-4.mb-xl-0(data-aos="flip-left")
          .crd.crd-avatarH_Blue
            .row.p-4
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema3/t3_08.svg", alt="alt").img90
              .col
                h4.text-white Formatos abiertos y cerrdos
                p.text-white.mb-5 Un formato es “la estructura interna y la codificación de un objeto digital que le permite manipularlo y hacerlo accesible”. Por ejemplo, hay formatos comunes como texto, imágenes y audio, que a menudo se usan solo dentro de una disciplina o comunidad de investigación en particular.

        .col-xl-6.mb-4.mb-xl-0(data-aos="flip-left")
          .crd.crd-avatarH_Blue
            .row.p-4
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema3/t3_09.svg", alt="alt").img90
              .col
                h4.text-white Tipos de formatos abiertos y cerrados
                p.text-white.mb-5 Un formato abierto es aquel donde las especificaciones del <i>software</i> están disponibles para cualquier persona, de forma gratuita, así cualquiera puede usar dichas especificaciones en su propio <i>software</i> sin ninguna limitación en su reutilización que fuere impuesta por derechos de propiedad intelectual. Si el formato de archivo es cerrado podría utilizarse, independientemente que este formato cuente con un propietario el cual puede restringir su uso y no permite ser manipulado.      
            
            

    .bloque-texto-a.clr--02.p-4.p-md-5.mb-5(data-aos="fade-in").mb-5
      .row.m-0.align-items-center.justify-content-between        
        .col-12
          .bloque-texto-a__texto.p-4
            p.mb-0 #[strong Al crear, procesar y administrar datos investigativos, se debe comprender con qué formato está trabajando. Los formatos por lo general están vinculados a #[i software] y #[i hardware] específicos, por lo que la reutilización futura depende de la disponibilidad a mediano y largo plazo. Por lo tanto, al usar un formato cerrado, se debe recordar el obtener el #[i software] apropiado que se necesita para poder actualizarlo y acceder a este en el momento que se requiera sin que tenga algún limitante.]

    separador

    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Normatividad 

    .row.justify-content-center
      .col-8.col-lg-4.z_top.mb-4.mb-lg-0
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema3/t3_10.png", alt="alt")
      .col-lg-8(data-aos="fade-in")
        .gray--right
          .row.mb-4
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/recursos/square_02.svg", alt="alt")
            .col-lg
              p La recopilación y obtención de datos personales es primordial para cualquier tipo de empresa o instituciones sin importar su oficio. No es sorprendente que #[i Big Data] esté marcando una gran diferencia en el entorno de la economía digital. Por lo tanto, es muy importante saber qué se debe realizar para crear una base de datos legalmente y esta pueda ser tratada de la forma adecuada en un entorno económico, empresarial, para pymes entre otros. #[span.hg--purple #[strong “La información de los colombianos está protegida en rigor de la Ley 1581 de 2012 y el Decreto 1377/2013. Esta legislación es aplicable a datos personales que se encuentren registrados en cualquier base de datos que los haga susceptibles de tratamiento en territorio colombiano por entidades públicas o privadas”]] #[span.txt--purple Abogados.com.co (2018).] Esto también aplica cuando al responsable o encargado del tratamiento no establecido en territorio nacional le sea aplicable la legislación colombiana en virtud de normas y tratados internacionales.
              .row
                .col-auto.d-none.d-lg-flex
                  figure
                    img(src="@/assets/curso/recursos/square_02.svg", alt="alt").img30
                .col
                  p.mb-0 #[span.txt--blue Para obtener y utilizar legalmente la base de datos, debe cumplir con el Reglamento Europeo de Protección de Datos (RGPD siglas en ingles) de mayo del 2018, que tiene algunas implicaciones en territorio colombiano debido a que, por sus características, afecta a personas tanto jurídicas como naturales que tengan contacto con entidades, empresas o ciudadanos de la UE ya sea ofreciendo sus servicios o teniendo alguna filial en dicha región.]

    .cajon.cjn--yellow.p-4(data-aos="zoom-in")
      p.mb-0 Esta ley garantiza un alto grado de protección. Esto significa que las personas pueden tener más control sobre sus datos personales y que las normas de protección de datos serán coherentes en los distintos países de la Unión Europea. Las empresas que operan en esta región deben cumplir con esta regla, independientemente de donde se encuentre. 

    separador

    #t_3_4.titulo-segundo.color-acento-contenido
      h2 3.4 Aplicación de la norma

    p Por ejemplo, las empresas que brindan servicios a través de Internet deben justificar cómo y para qué usan y almacenan sus datos. Esto se aplica no solo a las redes sociales, sino también a las aerolíneas y otros servicios similares. Estas empresas deben informar cómo manejar la información y aceptar su uso, sobre el procesamiento de esa información seleccionando una firma digital o marcando una casilla de verificación.

    .row.justify-content-center.mb-4
      .col-lg-8.mb-4.mb-lg-0
        .cajon.cjn--yellow.p-4(data-aos="zoom-in").mb-4
          p.mb-0 #[strong Las empresas que deseen hacer negocios con clientes europeos deben primero revisar las políticas y ordenamientos internos para cumplir con las disposiciones del nuevo] #[span.txt--purple Reglamento Europeo de Protección de Datos.] Pero, aunque la empresa no haga negocios directamente con Europa, la normatividad colombiana será el principal ente regulatorio internacional para el manejo de datos personales, por lo que no solo es conocer la norma, es muy importante tenerla presente para poder aplicarla dentro del marco de la ley.

        .row
          .col-auto
            figure
              img(src="@/assets/curso/recursos/square_07.svg", alt="alt").img30
          .col
            p.mb-0.txt--blue La Ley 1581/2012 y la Ley 1377/2013 son las encargadas de la protección de los datos personales de los ciudadanos, entre las leyes colombianas y los elementos distintivos se hallan el derecho al olvido y el derecho a ser fácilmente eliminado de la base de datos a voluntad propia sin que esto le genere algún tipo de costo, de igual forma poder implementar procedimientos y obligaciones para reportar errores de seguridad de la indagación corporativa.

      .col-8.col-lg-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema3/t3_11.png", alt="alt")

    p.mb-5 Sin embargo, no solo es necesario cumplir con las normas anteriores. Los datos personales también necesitan ser procesados, es decir, los datos de los clientes, empleados, proveedores, dicha información igualmente debe cumplir con todos los requisitos especificados.

    .row.justify-content-center.align-items-center.mb-3
      .col-8.col-lg-4.z_top.mb-5.mb-lg-0
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema3/t3_12.svg", alt="alt")
      .col-lg-8(data-aos="fade-in")
        .gray--right          
          p #[strong Con respecto a los datos personales del cliente (la persona que compró/adquirió el producto o recibió el servicio), podrán ser tratados para relacionarse y posteriormente comunicarse con el cliente, o simplemente para hacer la entrega del producto, de igual forma también se proporcionara el servicio postventa y envío de recordatorios de citas y reuniones.] Las opciones de contacto son diversas, por el solo motivo de ser clientes no se podrá enviarles publicidad y #[i marketing] sin su consentimiento previo, sin embargo, se debe tener en cuenta que solo se podrá enviar los servicios ofertados o productos del sector en el que hay un desempeño. #[strong Cuando se obtienen los datos de un cliente es muy importante tener un soporte de que en algún momento hubo un contacto para informarles que se les enviará publicidad o #[i marketing] de un servicio, bien o producto, no importa cómo se les envíe la información comercial, siempre debe se proporcionada de una manera clara y fácil.] Se debe tener presente que la base de datos no se puede transferir a otra empresa.

    p.mb-4 Para poder enviar anuncios de un producto o servicio a una persona vía SMS y que esta no sea un cliente se debe tener un consentimiento explícito y claro. Además, para poder probar más adelante que efectivamente se obtuvo de esa manera. En cualquiera de los casos, se deberá informar de lo dispuesto en las dos reglas anteriores antes de que los interesados se pongan de acuerdo. Por lo tanto, primero se debe notificar y luego buscar el consentimiento.

    .bloque-texto-a.clr--01.p-4.p-md-5.mb-5(data-aos="fade-in").mb-5
      .row.m-0.align-items-center.justify-content-between        
        .col-12
          .bloque-texto-a__texto.p-4
            p.mb-0 Hay que evitar cualquier tipo de problema legal por tener datos de personas que no  han sido clientes y hay que deshacerse de esas bases de datos. Por eso se invita a ver el siguiente video desde donde se enfrenta la realidad empresarial referente al uso de los datos personales:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/jHv91xnA8IM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)        

    p #[strong Con esta información se da por concluida la parte teórica del componente formativo Métricas y reportes para ventas en línea.]


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
