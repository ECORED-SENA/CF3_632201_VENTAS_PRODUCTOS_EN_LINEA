<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Métricas clave

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/t2_01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[span.txt--purple Según Ambit (2020)], #[span.hg--purple02 “las métricas de negocio son aquellos valores expresados numéricamente que sirven para analizar el rendimiento de una determinada acción o proceso dentro de una empresa. Cualquier cosa que se realice dentro del ámbito empresarial y sea medible, es una métrica”.] Dichas métricas se suelen expresar utilizando unidades o porcentajes y se obtienen a partir de una herramienta de medición ya establecida que muestra un valor que puede considerarse como global. Su interpretación requiere conocer el proceso o el uso de la herramienta de medición. Una métrica muestra un valor sencillo que mide una actividad o proceso, pero no permite evaluar las acciones de la empresa sobre ella.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Indicadores

    
    .row.justify-content-center.mb-5
      .col-lg-8
        .gray--left
          p Para comprender qué es un indicador, lo primero que se debe hacer es conocer la publicidad digital en el entorno de #[i marketing]. #[span.hg--purple02 “La Publicidad Digital son las acciones o técnicas de #[i marketing] dirigidas a captar la atención de un usuario, las cuales se realizan por intermedio de canales digitales, como referencia los display o los social ADS”]  #[span.txt--purple (Cuartin, 2020)], sin embargo, estas estrategias deben ser medidas y revisadas para validar si están alcanzando los objetivos.
          .row
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/recursos/square_06.svg", alt="alt").img30
            .col-lg
              p Todas las mediciones se hacen por medio de los indicadores que toman acción en el plan de #[i marketing] digital de la empresa. Como lo dice #[span.txt--purple Florido (2014),] #[span.hg--purple02 “los indicadores, también conocidos como indicadores clave de rendimiento (KPI), le permiten monitorear constantemente cada una de las operaciones realizadas como parte de una campaña publicitaria”.] 

      .col-8.col-lg-4.position-relative
        figure(data-aos="fade-in")
          img(src="@/assets/curso/temas/tema2/t2_02.png", alt="alt")

    .bg_img_01
      .bloque-texto-a.clr--02.p-4.p-md-5.mb-5(data-aos="fade-in").mb-5
        .row.m-0.align-items-center.justify-content-between        
          .col-12
            .bloque-texto-a__texto.p-4
              p.mb-0 El indicador es un conjunto de métricas que se encargan de cuantificar los rendimientos de una operación. Los ejemplos de métricas de #[i marketing] digital incluyen el retorno de la inversión (ROI), el crecimiento de seguidores, las tasas de conversión y el compromiso, entre otras.

      .row.justify-content-center.mb-5
        .col-lg-10
          .row.justify-content-center(data-aos="fade-in")
            .col-auto.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema2/t2_03.png", alt="alt").img150
            .col-lg
              p Es muy importante aprender a seleccionar qué tipo de indicadores serán los correctos para el objetivo buscado, en este aparte se mencionarán algunos indicadores y sus características, los cuales están apoyados en la #[span.txt--purple metodología SMART, es decir, que son indicadores específicos, medibles, alcanzables, realistas y medidos por tiempo como se ve a continuación:]

      .row.justify-content-center
        .col-auto(data-aos="flip-left").mb-4
          .ctn_01
            figure.mb-4
              img(src="@/assets/curso/temas/tema2/t2_04.png", alt="alt").img180
            p Los indicadores deben ser específicos, es decir se debe precisar lo que se va a medir, dónde y el cómo lo va a realizar, se recomienda dar un detalle completo al momento de realizar la acción.

        .col-auto(data-aos="flip-left").mb-4
          .ctn_01
            figure.mb-4
              img(src="@/assets/curso/temas/tema2/t2_05.png", alt="alt").img180
            p Los indicadores deben ser medibles, haciendo referencia al KPI con el que se desarrolle la acción y permita ser cuantificable.

        .col-auto(data-aos="flip-left").mb-4
          .ctn_01
            figure.mb-4
              img(src="@/assets/curso/temas/tema2/t2_06.png", alt="alt").img180
            p Los indicadores deben ser alcanzables, se deben tener en cuenta los recursos con lo que cuentan y que son posibles de conseguir. 

        .col-auto(data-aos="flip-left").mb-4
          .ctn_01
            figure.mb-4
              img(src="@/assets/curso/temas/tema2/t2_07.png", alt="alt").img180
            p Los indicadores deben ser realistas, orientados al objetivo principalmente de la campaña, aquí es importante determinar los indicadores adecuados para realizar la medición.

        .col-auto(data-aos="flip-left").mb-4
          .ctn_01
            figure.mb-4
              img(src="@/assets/curso/temas/tema2/t2_08.png", alt="alt").img180
            p Los indicadores deben contar con un tiempo limitado, es decir que se adapte a un tiempo determinado y a un periodo concreto.

      .bloque-texto-a.clr--01.p-4.p-md-5.mb-5(data-aos="fade-in").mb-5
        .row.m-0.align-items-center.justify-content-between        
          .col-12
            .bloque-texto-a__texto.p-4
              p.mb-0 Los indicadores de #[i marketing] digital que son monitoreados necesitan brindar información útil y precisa para la toma de decisiones, con el fin de saber con claridad cual es el rendimiento del equipo de #[i marketing] en todas las áreas. Al momento de realizar un seguimiento de resultados y de acuerdo con estos se podrá exigir un presupuesto adecuado para realizar nuevos estudios métricos de una organización (Lipinski, 2022).

    separador

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Mediciones de indicadores

    .row.justify-content-center.mb-5

      .col-8.col-lg-4.z_top.mb-4.mb-lg-0
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema2/t2_09.png", alt="alt")
      .col-lg-8(data-aos="fade-in")
        .gray--right
          h3.cstm_H3_01 ¿Qué es un KPI?
          p Los indicadores clave de desempeño o #[span.txt--purple KPI (#[i key performance indicator])] son valores medibles que representan la efectividad de los procesos o acciones de una empresa para lograr un objetivo, en particular tal como lo comparte #[span.txt--purple Coutinho (2015):] #[span.hg--purple02 “KPI viene de la sigla en inglés para #[i Key Performance Indicator], o sea, Indicador Clave de Actuación. Son aquellas métricas más relevantes para tu estrategia, que determinan tu éxito o no”.] Los KPI son utilizados para monitorear y confirmar que se ha logrado un objetivo establecido permitiendo tomar de forma adecuada y rápida una decisión de corrección si se desvía del objetivo establecido. Los indicadores clave de desempeño no solo hacen referencia a los valores financieros, sino que se aplican a todas las áreas de la empresa. #[strong Por ejemplo, un cuadro de mando empresarial necesita recopilar KPI de diferentes áreas de la empresa que muestren valores que midan la efectividad de las estrategias implementadas.] Usando esta información en tiempo real proporcionada por los KPI, un gerente de la empresa puede redirigir las desviaciones de objetivos y tomar decisiones de corrección para planificar nuevas estrategias competitivas.

    .cajon.cjn--yellow.p-4.mb-5(data-aos="fade-in")
      p.mb-0 De igual forma es importante saber elegir los KPI apropiados para monitorear la estrategia de #[i marketing] digital, como primera medida a considerar a la hora del establecimiento de los indicadores se debe tener en cuenta los objetivos principales de la empresa. Las métricas que se elijan deben proporcionar la información necesaria para estar al tanto si está en camino de alcanzar esos objetivos, también se deben considerar las estrategias adecuadas para incorporar en campañas de publicidad digital.

    .row.justify-content-center.mb-5
      .col-lg-10
        .row.justify-content-center.align-items-center(data-aos="fade-in")
          .col-auto.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema2/t2_03.png", alt="alt").img150
          .col-lg
            p.mb-0 Conociendo qué es un indicador y cuáles son los más relevantes, se pueden tener en cuenta las siguientes pautas para que los datos obtenidos en esos indicadores sean de valor para la empresa:

    .slyderB_bg_01.px-4.px-lg-5.py-3
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center.my-lg-4
          .col-lg-6.mb-4.mb-lg-0.pt-5.pt-0.position-relative 
            .number(data-number="01")                  
              p.ps-4.mb-0 Comparar los resultados obtenidos con los objetivos; es decir, si el objetivo es aumentar el número de seguidores de la red social en un 40%, lo que debe comparar es el número de seguidores actuales con el número de seguidores del mes pasado o de la última medición.                  
          .col-lg-4.col-6
            figure
              img(src='@/assets/curso/temas/tema2/t2_10.svg')  

        .row.justify-content-around.align-items-center.my-lg-4
          .col-lg-4.col-6.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/tema2/t2_11.svg')
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0.pt-5.pt-0.position-relative 
            .number(data-number="02")                 
              p.ps-4.mb-0 Tener presente y determinar las fuentes de tráfico; hace referencia a cómo los seguidores llegan a la página web, si es por páginas pagas, redes sociales, búsqueda frecuente, o por referidos, de esta forma podrá saber cuál es medio de tráfico adecuado para una próxima eventualidad o campaña y cuál le arrojará mejores resultados.

        .row.justify-content-around.align-items-center.my-lg-4
          .col-lg-6.mb-4.mb-lg-0.pt-5.pt-0.position-relative 
            .number(data-number="03")                  
              p.ps-4.mb-0 Observar y analizar la interacción del consumidor con el sitio web o publicación, se debe generar la siguiente pregunta ¿qué hacen los usuarios que visitan el sitio web? Es transcendental saberlo porque puede ver qué tan bien está funcionando su estrategia de #[i marketing] digital. De igual forma, se debe prestar atención a los comentarios que deja el público en general en las redes sociales. Estos comentarios son información de alto valor, puesto que ayudan a mejorar las estrategias de negocio y captación de seguidores y compradores.                
          .col-lg-4.col-6
            figure
              img(src='@/assets/curso/temas/tema2/t2_12.svg')  

        .row.justify-content-around.align-items-center.my-lg-4
          .col-lg-4.col-6.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/tema2/t2_13.svg')
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0.pt-5.pt-0.position-relative 
            .number(data-number="04")                 
              p.ps-4.mb-0 Tener en cuenta la demografía de la audiencia, conocer y estar al tanto del target o público objetivo, prestar mucha atención a los datos que muestran los indicadores. Esto permite perfilar a los usuarios y crear mejores campañas con una mayor probabilidad de éxito.

    separador

    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Alcances de métricas de ventas en línea

    .row.justify-content-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema2/t2_14.svg", alt="alt")
      .col-lg-8(data-aos="fade-in")
        p #[strong Las métricas con mayor impacto e influencia en el entorno del #[i marketing] en redes sociales son los alcances.] Como ejemplo se pueden mencionar las redes sociales Instagram, Facebook y Twitter; es transcendental estar al tanto del alcance de cada publicación, ya sea un post, un reel o una story. Pero #[span.txt--purple ¿qué significa puntualmente un alcance?] Alcance es el número de usuarios que han visto una publicación en una de plataformas de redes sociales. Cabe resaltar que, si el mismo usuario ve esta publicación varias veces, solo se contará una.
        .cajon.cjn--purpura.p-4
          p.mb-0 #[strong El alcance es el número superior al de seguidores o suscriptores], por ejemplo, Instagram también cuenta las visitas que se realizan desde el área de explorar y las vistas alcanzadas por otros usuarios al compartir, por lo que el rango suele ser uno más grande que la cantidad de seguidores o suscriptores. 

    h3.cstm_H3_02.mb-5 Existen dos tipos de alcance: orgánico y pago. 

    .row.justify-content-center
      .col-12.col-lg-10.mb-5
        .crd.crd-avatarH(data-aos="zoom-in")
          .row.p-4
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema2/t2_15.svg", alt="alt").img125
            .col
              h4 Alcance organico
              p.mb-0 Es el alcance logrado sin el uso de herramientas pagas como los anuncios de la red social Facebook y los anuncios de Instagram, es decir, los temas llegan a los diferentes usuarios de forma natural, por intermedio de la página de inicio o temas compartidos. Este tipo de alcance distingue entre dos tipos, viral, hace énfasis a los alcances que se obtienen por intermedio de las compartidas de información por parte de los usuarios y el no viral son las visualizaciones que se consiguen sin necesidad de que el contenido haya sido compartido por algún usuario determinado. 
      .col-12.col-lg-10
        .crd.crd-avatarH(data-aos="zoom-in")
          .row.p-4
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema2/t2_16.svg", alt="alt").img125
            .col
              h4 Alcance pago
              p.mb-0 Es el alcance que se logra como resultado de una campaña publicitaria después de realizar un pago en una de las plataformas. Cuanto más alcance se tenga, más conciencia de marca tendrá. Sin embargo, para que ese alcance sea recompensado, debe interactuar con la audiencia y realizar un seguimiento de sus interacciones para encontrar clientes potenciales.

    separador

    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4 tráfico

    p #[strong Para el comercio electrónico, es importante comprender el tráfico, es decir, monitorear la cantidad de visitantes a una tienda en línea y saber de dónde provienen o cuántos visitantes] son; elementos como el anterior son muy importantes porque brindan información sobre dónde navegan los usuarios y cómo encontraron el sitio. Este tipo de información es muy útil en la planificación y desarrollo de las campañas de #[i marketing] y publicidad.

    .bg_img_01 
      .row.justify-content-center.mb-5
        .col-lg-8(data-aos="fade-in").mb-4.mb-lg-0
          .cajon.cjn--yellow.p-4
            p.mb-0 Una vez que obtenga la cantidad de visitantes que necesita para clasificar su sitio web en un motor de búsqueda, generará más visitantes (esto se conoce como tráfico web en #[i marketing] digital). Es muy importante que ese tráfico sea rentable. Esto debería incluir a los visitantes de mercados potenciales que necesitan o desean comprar los servicios y productos que se ofrecen en Internet, por ejemplo, si un visitante busca asesoramiento contable en lugar de asesoramiento sobre estrategia comercial, difícilmente vale la pena convencerlo de dirigir una gran cantidad de tráfico al sitio web. Esto se logra seleccionando y administrando las palabras clave adecuadas.
        .col-8.col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema2/t2_17.svg", alt="alt")

      h3.cstm_H3_02.mb-5 Por lo general el tráfico web puede referenciarse de cinco (5) formas diferentes:

      .row.justify-content-center
        .col-8.col-lg-4.mb-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema2/t2_18.svg", alt="alt")
        .col-8.col-lg-4.mb-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema2/t2_19.svg", alt="alt")
        .col-8.col-lg-4.mb-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema2/t2_20.svg", alt="alt")
        .col-8.col-lg-4.mb-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema2/t2_21.svg", alt="alt")
        .col-8.col-lg-4.mb-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema2/t2_22.svg", alt="alt")

      h3.cstm_H3_01.mb-5 Para entender este importante concepto se hace la siguiente explicación con un ejemplo:

      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador

    #t_2_5.titulo-segundo.color-acento-contenido
      h2 2.5 Conversiones

    .bg_img_01
      .row.justify-content-center.align-items-center
        .col-lg-8(data-aos="fade-in")
          .white--left
            p Como se sabe, esta métrica se trata de si un visitante es un cliente, o si un visitante hace lo que quiere la campaña, por ejemplo, que se vuelva un seguidor de redes sociales. #[strong Para hacer esto, es importante considerar tres secciones diferentes que lo ayudarán a determinar si se necesita optimización.] Estas secciones son la cantidad de visitantes que agregaron artículos a su carrito de compras, la cantidad de progresos para finalizar la compra y la cantidad de compras. Cada sección contiene información importante sobre el rendimiento de su tienda en línea.
            .row
              .col-auto.d-none.d-lg-flex
                figure
                  img(src="@/assets/curso/recursos/square_06.svg", alt="alt").img30
              .col-lg
                p.mb-4 #[span.txt--purple Las estrategias de #[i marketing] para el entorno digital deben centrarse en crear cierto tipo de conversión], desde el propio sitio web hasta una determinada acción y para eso se deben orientar algunas acciones como se puede ver a continuación:

        .col-8.col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema2/t2_23.png", alt="alt")

      .row.justify-content-center
        .col-lg-11.g-0
          .crd.crd--cyan(data-aos="zoom-in").mb-4
            .row.align-items-lg-center
              .col-auto
                .crd.crd--CapLetter
                  p A
              .col.py-3.pe-4         
                p.mb-0 Determinar cuál es el objetivo final de la acción, el cual no necesariamente tiene que ser el elemento de conversión final.
        
          .crd.crd--cyan(data-aos="zoom-in").mb-4
            .row.align-items-lg-center
              .col-auto
                .crd.crd--CapLetter
                  p B
              .col.py-3.pe-4             
                p.mb-0 Determinar cuáles son indicadores de conversión, todas las acciones de #[i marketing] online significan interacciones, por lo que debe definir cuáles serán sus conversiones, y precisar las acciones que los usuarios están interesados en realizar, desde dejar información de contacto hasta compartir contenido, completar ventas o abrir correos electrónicos.
    
          .crd.crd--cyan(data-aos="zoom-in").mb-4
            .row.align-items-lg-center
              .col-auto
                .crd.crd--CapLetter
                  p C
              .col.py-3.pe-4                
                p.mb-0 Precisar la medición y seguimiento, es una tarea básica en #[i marketing] digital, puesto que realizar la medición de los resultados finales y el objetivo principal de los indicadores de conversión para poder valorar, evaluar y extraer conclusiones.
       
          .crd.crd--cyan(data-aos="zoom-in").mb-4
            .row.align-items-lg-center
              .col-auto
                .crd.crd--CapLetter
                  p D
              .col.py-3.pe-4               
                p.mb-0 Optimizar de los resultados y análisis obtenidos optimizarán futuras campañas, mejorarán y minimizarán errores, y aumentarán futuras tasas de conversión.

      p Se debe recordar que en un entorno digital, siempre se debe buscar el entorno de mejora continua, en este caso optimizar acciones claras y puntuales, sitios <i>web</i>, redes sociales. Si se desea transformar la estrategia de <i>marketing</i> se debe tener en cuenta las cuatro alternativas anteriormente mencionadas.

      separador

    #t_2_6.titulo-segundo.color-acento-contenido
      h2 2.6 Medición de ventas 

    .row.justify-content-center.align-items-center.mb-5
      .col-7.col-lg-4.mb-4.mb-lg-0.z_top
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema2/t2_24.svg", alt="alt")
      .col-lg-8
        .gray--right
          p.mb-0 Teniendo una base sólida de medición de ventas, fácilmente se conducirá a orientar mejores resultados de negocios y por supuesto de ingresos, rentabilidad día a día y una mejor rotación de clientes con mejores resultados de estrategias de intervención y para esto se debe medir como lo dice #[span.txt--purple Bello (2021)], #[span.hg--purple02 “la gran mayoría de las organizaciones calculan las actividades de las estrategias de #[i marketing], por supuestos, y no por datos de medición de ventas reales, con demasiada periodicidad, y no aprovechan al máximo todos los escenarios que les permitan realizar mejores mediciones de acuerdo a las ventas”,] por ejemplo, estas mediciones no conducen a operaciones útiles, no se comparten entre equipos y no permiten indicar disposiciones estratégicas importantes, es decir si los equipos de trabajo se dividen, unos optimizando el tráfico del portal web y otro equipo el tráfico peatonal de una tienda en línea pero no tienen comunicación alguna, aquí la organización no cuenta con una estrategia clara y aplicará todas las métricas de forma inadecuada. En cambio, #[strong los líderes de #[i marketing] movilizan a los equipos para que trabajen de manera más colaborativa entre canales y departamentos, brindando la experiencia adecuada a los clientes correctos en el momento correcto.]

    .cajon.cjn--yellow.p-4.mb-5
      p.mb-0 En #[i marketing], los lideres empresariales comprenden que los clientes son el mayor valor de por vida para un negocio, por ello crean todo el contenido apropiado para el desarrollo de las campañas encaminadas a esos clientes. #[strong Las acciones de #[i marketing] que se generan están vinculadas a los objetivos comerciales y conducen a mejores resultados para la organización.] Por esto, la medición juega un papel importante en la construcción de una ciencia orientada para el cliente que adopta un enfoque de aprendizajes constantes y pruebas. 

    .row.justify-content-center.mb-5
      .col-lg-10
        .row.justify-content-center.align-items-center(data-aos="fade-in")
          .col-auto.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema2/t2_03.png", alt="alt").img150
          .col-lg
            p.mb-0 #[strong Las empresas que han logrado los beneficios de la medición de ventas dedican un tiempo adecuado y esfuerzo notorio en demostrar sus capacidades, las cuales se enfocan en tres áreas de intervención principalmente:]

    .bg_img_01
      .row.justify-content-center.mb-5
        .col-lg-4.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tema2/t2_25.png", alt="alt").img90.m-auto
            h4.text-center La medición
            p.text-center.mb-0 Los lideres del #[i marketing] se encargan de caracterizar todos los puntos de contacto de un cliente determinado y sus principales datos, conociendo los comportamientos y las prioridades de cada cliente con el fin de enlazar las acciones de #[i marketing] con los resultados comerciales.
        .col-lg-4.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tema2/t2_26.png", alt="alt").img90.m-auto
            h4.text-center Activación
            p.text-center.mb-0 Se enfoca en la toma asertiva de decisiones por intermedio de instrumentos de automatización con el fin de poder conectarse con los posibles clientes a gran escala, teniendo en cuenta que la estrategia será personalizada, dando respuesta a lo requerido por el cliente.
        .col-lg-4.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tema2/t2_26.png", alt="alt").img90.m-auto
            h4.text-center Formas de trabajar
            p.text-center.mb-0 Se centran en estructurar equipos agiles y de respuesta a oportuna, exclusivamente para los clientes, haciendo referencia a las tendencias de #[i marketing], teniendo en cuenta las perspectivas de medición y los canales en los que desarrollan.

      .cajon.cjn--purpura.p-4(data-aos="zoom-in")
        p.mb-0 Se espera cada vez más que los gerentes y/o directores de #[i marketing] sean garantes de demostrar la tasa de recuperación de las inversiones de #[i marketing] que impactan directamente en el rendimiento. Depende de ellos engrandecer el nivel apoyando las mejores prácticas, inclinando a los equipos para que articulen acciones juntos. De esta manera, el método de medición estará en capacidad de dar a una empresa una ventaja decisiva en la lucha por mantener a los clientes y hacer que regresen en busca de más.

      separador

    #t_2_7.titulo-segundo.color-acento-contenido
      h2 2.7 Herramientas y plataformas disponibles

    .row.justify-content-center
      .col-lg-8
        p Las herramientas de #[i marketing] digital son esenciales para cualquier estrategia, ya sea una pequeña empresa, una empresa nueva o una gran empresa, gracias a las herramientas de #[i marketing] digital, puede mecanizar tareas y operaciones, optimizar los flujos de entrega y centralizar una variedad de actividades. La herramienta de #[i marketing] digital es un ejemplo de una solución que las empresas han buscado para reducir los costos de adquisición de clientes (CAC). Estos se utilizan en muchos tipos de negocios, ya sea que activen estrategias avanzadas o básicas.
        .row
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/recursos/square_06.svg", alt="alt").img30
          .col
            p.mb-0 #[strong Las empresas se están enfocando cada vez más en el #[i marketing] digital como opción primordial para crear mejores negocios, dando como resultado, la creación de contenidos de forma ágil y precisa, buscando la generación de clientes potenciales y las relaciones con los mismos. Con las herramientas que ofrece el #[i marketing] digital podrán procesar grandes cantidades de información, agilizar procesos y mejorar resultados.]
      .col-8.col-lg-4
        figure(data-aos="fade-in")
          img(src="@/assets/curso/temas/tema2/t2_28.png", alt="alt")

    .cajon.cjn--yellow.p-4.mb-5
      p.mb-0 De hecho, las herramientas de #[i marketing] digital son un ejemplo de una solución que las empresas están buscando para reducir los costos de adquisición de clientes (CAC), ya sea que implemente técnicas, básicas o avanzadas, son manejadas por la gran mayoría de empresas.  A continuación, se hablará de los diferentes tipos de herramientas de #[i marketing]:

    .row.justify-content-center
      .col-lg-5.col-7(data-aos="zoom-in").mb-5.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema2/t2_29.png", alt="alt")
      .col-lg-7
        LineaTiempoD.color-primario
          .row.justify-content-center(numero="1" titulo="Herramienta de automatización de <i>marketing</i>")
            .col-auto.pt-2.mb-3
              figure
                img(src="@/assets/curso/temas/tema2/t2_30.svg", alt="alt").img90
            .col-lg
              p.mb-0 Abarcan muchos canales, tales como, página de destino, #[i marketing] por correo electrónico y flujo de automatización de correo electrónico. Esto simplifica y amplía la gestión de leads en su embudo de comercialización, esto es simplemente la ampliación en el volumen de leads que estén listos para realizar para la compra, y el cual será direccionado al equipo de ventas. 

          .row.justify-content-center(numero="2" titulo="Herramienta de <i>Email Marketing</i>")
            .col-auto.pt-2.mb-3
              figure
                img(src="@/assets/curso/temas/tema2/t2_31.svg", alt="alt").img90
            .col-lg
              p.mb-0 Podría decirse que es principal canal de comunicación y de relaciones con el cliente, porque después del primer contacto tiene con la organización, este se convierte en lead. 

          .row.justify-content-center(numero="3" titulo="Herramienta para creación de <i>landing pages</i>")
            .col-auto.pt-2.mb-3
              figure
                img(src="@/assets/curso/temas/tema2/t2_32.svg", alt="alt").img90
            .col-lg
              p.mb-0 Las páginas de destino son páginas diseñadas para aceptar visitantes y volverlos clientes potenciales, posterior a esto, el visitante será un contacto u oportunidad de negocio, de igual forma a través de las <i>landing</i> se podrán ofertar contenidos importantes con el fin de poder enrolar al visitante a que permita obtener sus datos personales, y crear una relación con el cliente y de esta forma poder enviarle los contenidos adecuados de acuerdo su perfil y preferencias.

          .row.justify-content-center(numero="4" titulo="Plataforma de <i>marketing</i> de contenidos")
            .col-auto.pt-2.mb-3
              figure
                img(src="@/assets/curso/temas/tema2/t2_37.svg", alt="alt").img90
            .col-lg
              p.mb-0 La mayoría de las organizaciones aún no han utilizado la plataforma adecuada para registrar y documentar cuáles serían las estrategias de planificación y elaboración de contenido adecuadas. Estas herramientas de contenidos podrán agilizar los procesos. Desde la gestión de blogs hasta la creación de publicaciones, lo que le permitirá ahorrar tiempo y aumentar la eficiencia.

          .row.justify-content-center(numero="5" titulo="Herramienta de SEO (<i>Search Engine Optimization</i>)")
            .col-auto.pt-2.mb-3
              figure
                img(src="@/assets/curso/temas/tema2/t2_33.svg", alt="alt").img90
            .col.pt-2.mb-3
              p.mb-0 Contemplan como objetivo principal el ayudar a las organizaciones a mejorar la posición en los buscadores más comunes como Mozilla o Google, dichas plataformas cuentan con diversas funciones las cuales podrán optimizar los sitios por intermedio de análisis y plugins.

          .row.justify-content-center(numero="6" titulo="Herramienta de <i>Analytics</i>")
            .col-auto.pt-2.mb-3
              figure
                img(src="@/assets/curso/temas/tema2/t2_34.svg", alt="alt").img90
            .col-lg
              p.mb-0 Medir el resultado del comportamiento en línea es fundamental para lograr los principales datos de un negocio. Esto se puede hacer utilizando la plataforma de análisis para campañas de #[i marketing] digital. Los beneficios de usar este tipo de plataforma incluyen evaluar y comprender el interés del visitante en el sitio web.

          .row.justify-content-center(numero="7" titulo="CMS (Sistema de Gestión de Contenidos)")
            .col-auto.pt-2.mb-3
              figure
                img(src="@/assets/curso/temas/tema2/t2_35.svg", alt="alt").img90
            .col-lg
              p.mb-0 Son indispensables para crear blogs y sitios, porque permiten diseñar, editar y publicar diferentes tipos de contenidos, de igual forma permite añadir contenidos divulgados en otras plataformas, como podcasts o videos de YouTube.              

          .row.justify-content-center(numero="8" titulo="Herramienta de monitorización de redes sociales")
            .col-auto.pt-2.mb-3
              figure
                img(src="@/assets/curso/temas/tema2/t2_36.svg", alt="alt").img90
            .col-lg
              p.mb-0 El <i>software</i> de monitoreo de redes sociales ayuda a optimizar las acciones de construcción de comunidades. Estas herramientas ayudarán a logar mayor productividad al momento de programar lanzamientos de contenido, permitiendo realizar un seguimiento adecuado de las menciones de una marca, producto o servicio de una organización, de igual forma se podrá valorar los intereses de una audiencia y la capacidad de respuesta a las publicaciones.

    separador

    #t_2_8.titulo-segundo.color-acento-contenido
      h2 2.8 Metodologías de ventas en línea 

    p #[strong La metodología de venta es la forma de vender descrita en un paso a paso.] Las metodologías de ventas toman sus objetivos y los convierten en pasos viables. A diferencia del proceso de ventas, las metodologías de ventas generalmente no se aplican a todo el ciclo de ventas. 

    .bg_img_01
      .row.justify-content-center.mb-4
        .col-lg-8(data-aos="fade-in")
          .cajon.cjn--yellow.p-4.mb-4.mb-lg-0
            p.mb-0 Se debe tener en cuenta que existen varias diferencias entre el proceso y la metodología de ventas. Como ya se mencionó, cada negocio es diferente, por lo que cada organización necesita diseñar su propia metodología. #[strong El proceso de ventas cuenta con una serie de etapas específicas las cuales por lo general se repiten entre sí, es muy importante que un equipo capacitado de ventas siga para convertir un prospecto en un cliente y realizar una venta.] Se encuadra cualquier proceso de las mismas, y está más relacionado con la visión de ventas, dentro de la cual se crean los procesos y planes. Existen metodologías que se podrán compartir, pero también hay metodologías de venta opuestas que tienen una visión radicalmente diferente de las ventas. #[strong Por esta razón, siempre es una buena idea determinar un método de venta (o al menos un método compatible) para que pueda crear un plan de ventas acerado y de buenos resultados.]
        .col-8.col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema2/t2_38.png", alt="alt")

      h5.cstm_H3_03.mb-4 En este punto se mencionarán brevemente las metodologías de ventas comunes en el sector de ventas en línea:

      TabsA.mb-5    
        .crd.crd--tabs.p-4(titulo="La venta consultiva")
          h4 La venta consultiva
          .row.justify-content-center
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/tema2/t2_40.svg", alt="alt").img150
            .col-lg
              p El agente comercial se transforma en el asesor del cliente, puesto que su estrategia le permite estar en el lugar adecuado, allí por lo general escucha a los clientes durante un largo período de tiempo. Por intermedio de esta habilidad, los vendedores conocen a los clientes, les brindan lo que necesitan y ganan autoridad como asesores.

        .crd.crd--tabs.p-4(titulo="Ventas <i>Inbound</i>")
          h4 Ventas <i>Inbound</i>
          .row.justify-content-center
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/tema2/t2_39.svg", alt="alt").img150
            .col-lg
              p Es excelente para cautivar clientes brindándoles contenido que sea selecto para ellos, en lugar de brindarles noticias que por lo general no son de interés. Los clientes y consumidores de hoy en día buscan información (en Internet) antes de ponerse en contacto con un vendedor. Los compradores están en capacidad de bloquear mensajes y métodos de venta que no son relevantes para ellos (teléfonos, anuncios de televisión, etc.). Los clientes tienen el control total de la experiencia, por lo que los vendedores deben acoger un enfoque más humano en las ventas y obtener más apoyo.

        .crd.crd--tabs.p-4(titulo="El enfoque de <i>DataBranding</i> es el de <i>Inbound</i>")
          h4 El enfoque de <i>DataBranding</i> es el de <i>Inbound</i>
          .row.justify-content-center
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/tema2/t2_41.svg", alt="alt").img150
            .col-lg
              p Es un enfoque inbound, para todo el entorno de #[i marketing] y para ventas, la gran mayoría de consumidores y compradores buscan la información de un producto o servicio que les interese a través de una web, Ellos son los que buscan sus necesidades y obtienen la información, y solo contactan con el vendedor cuando tienen la información que necesitan. Por lo tanto, es importante brindarles contenido de alta calidad que sea selecto para ellos y que realmente los apoye a solucionar la dificultad que presenten al momento de hacer una compra.

    .cajon.cjn--azul.p-4.mb-4
      p.mb-0 Por ejemplo, suponga que la variable aleatoria X registra el puntaje de un estudiante seleccionado al azar en una prueba nacional, donde la distribución de la población para el puntaje es normal con una media de 70 y una desviación estándar de 5 (N (70,5)). Dada una muestra aleatoria simple (SRS) de 200 estudiantes, la distribución de la puntuación media de la muestra  tiene una media de 70 y una desviación estándar de 5 / sqrt (200) = 5 / 14,14 = 0,35.

    p Al momento de crear una metodología de venta es importante tener claro cuál será el proceso para utilizar, independientemente que las metodologías sean compatibles, se debe determinar cuál y cómo será el proceso de venta de acuerdo con su cliente objetivo.

    separador

    #t_2_9.titulo-segundo.color-acento-contenido
      h2 2.9 Impacto y resultados

    .bloque-texto-a.clr--01(data-aos="fade-in").p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/temas/tema2/t2_42.svg", alt="alt")
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p #[span.txt--purple Antes de la contingencia sanitaria que hace unos años sacudió al mundo por el Covid-19, las herramientas digitales ya eran un hábito entre los consumidores, convirtiéndose en una actividad clave para el desarrollo de muchas de las tareas diarias.] Por lo tanto, las organizaciones necesitan invertir en medios digitales para cumplir con esta realidad y llegar a sus clientes. Esto significa que necesitan invertir en #[i #[strong marketing digital]]. Además, el #[i marketing] incluye una variedad de acciones cuyo propósito primordial es promocionar un producto, servicio o empresa a través de una variedad de plataformas digitales. De igual forma, representa una buena alternativa para aumentar las oportunidades de negocio y, en consecuencia, aumentar los ingresos.

    p.mb-5 #[strong De tal forma que se hablará de cuáles son los segmentos que se manejan en una estrategia que busca tener impacto en un mercado digital por medio de las siguientes recomendaciones:]

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Segmentación apropiada" :icono="require('@/assets/curso/temas/tema2/icon_01.svg')")
        .row.justify-content-center.align-items-center
          .col-md-7.mb-4.mb-md-0
            h4 Segmentación apropiada
            p La mayoría de organizaciones cuentan con un sin número de clientes con los que interactúan vía internet, es decir encuestas en línea o más comúnmente por redes sociales, esto permite que una campaña genere un impacto óptimo el cual se puede orientar de una forma determinada, permitiendo crear estrategias de #[i marketing] encaminadas a públicos objetivos.        
          .col-8.col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/t2_43.svg', alt='')

      .py-4.py-md-5(titulo="Mejores resultados con menos inversión" :icono="require('@/assets/curso/temas/tema2/icon_02.svg')")
        .row.justify-content-center.align-items-center
          .col-md-7.mb-4.mb-md-0
            h4 Mejores resultados con menos inversión
            p Permiten llevar un negocio y cualquier acción digital es mucho más económica que un medio tradicional. Además, el hecho de que estas acciones puedan dirigirse a un grupo objetivo evita recursos consumibles y, a su vez, mejora los resultados, es una estrategia demasiado rentable.        
          .col-8.col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/t2_44.svg', alt='')

      .py-4.py-md-5(titulo="Consolidación de marca" :icono="require('@/assets/curso/temas/tema2/icon_03.svg')")
        .row.justify-content-center.align-items-center
          .col-md-7.mb-4.mb-md-0
            h4 Consolidación de marca
            p Fortalecer la marca de una empresa es uno de los mayores beneficios de utilizar los canales digitales para la autopromoción. El #[i marketing] digital significa una estrategia que ofrece resultados a largo plazo. Esto significa un oficio continuo y progresivo dentro de un período establecido, con el paso de los días, la marca se volverá más sobresaliente en el entorno online y su presencia en la red aumentará. De igual forma le otorga autoridad en el mercado y gana gradualmente familiaridad de un público objetivo.        
          .col-8.col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/t2_45.svg', alt='')

      .py-4.py-md-5(titulo="Seguimiento y medición de resultados" :icono="require('@/assets/curso/temas/tema2/icon_04.svg')")
        .row.justify-content-center.align-items-center
          .col-md-7.mb-4.mb-md-0
            h4 Seguimiento y medición de resultados
            p El #[i marketing] digital tiene diversas herramientas que le permiten ver un resultado en tiempo real, lo cual es una muy buena ventaja para cualquier organización. Cada labor realizada se puede analizar de forma rápida con el fin de establecer su eficacia.  El sistema CRM (<i>Customer Relationship Management</i>) facilita mucho este tipo de tareas, ya que está en capacidad de realizar un rastreo de varios indicadores, los cuales dependen de los objetivos que se persigan en el desarrollo de cada campaña.        
          .col-8.col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/t2_46.svg', alt='')

      .py-4.py-md-5(titulo="La marca digital" :icono="require('@/assets/curso/temas/tema2/icon_05.svg')")
        .row.justify-content-center.align-items-center
          .col-md-7.mb-4.mb-md-0
            h4 La marca digital
            p Se crea por intermedio de la correlación directa de una organización y su público objetivo por intermedio de los diversos canales digitales que existen en el mercado, aquí es donde se hace importante el #[i marketing] digital. El reconocimiento de una marca en el escenario digital crece con todo el acompañamiento y las nuevas experiencias que comúnmente se ofrecen a través de este medio (organización – cliente y viceversa). Se debe a que una organización aumenta su proximidad con los clientes haciendo que la marca crezca en el día a día, de acuerdo con su impacto en el mercado.        
          .col-8.col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/t2_47.svg', alt='')

    .bloque-texto-a.clr--02.p-4.p-md-5.mb-5(data-aos="fade-in").mb-5
      .row.m-0.align-items-center.justify-content-between        
        .col-12
          .bloque-texto-a__texto.p-4
            p.mb-0 #[strong El #[i marketing] digital maneja diversas herramientas que suministran la medición de los resultados en tiempo presente, estas herramientas proporcionan resultados óptimos y de precisión por la variedad de métricas que desarrollan.]








    

</template>

<script>
export default {
  name: 'Tema2',
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
