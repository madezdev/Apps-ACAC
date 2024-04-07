const services = [
    {
        title: "Investicación de mercado",
        description: "Realización de campañas para estudios “ad hoc”, reconocimiento de marca, impacto de campañas publicitarias, test de productos y servicios.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32" {...props}><path fill="currentColor" d="M8 10h8v2H8zm0-4h12v2H8zm0-4h12v2H8z"/><path fill="currentColor" d="m4.711 28l5.631-9.996l7.434 6.49a2 2 0 0 0 3.084-.534l6.97-10.403l-1.661-1.114l-7 10.448l-.07.103l-7.435-6.49a2.003 2.003 0 0 0-3.08.53L4 25.183V2H2v26a2.002 2.002 0 0 0 2 2h26v-2Z"/></svg>`,
    },
    {
        title: "Atención al Cliente",
        description: "Ofrecemos resultados confiables sobre la percepción general en torno a los asuntos que ocupan a la opinión pública. Con estas herramientas, tanto empresas como partidos políticos u otro tipo de organizaciones, podrán descubrir las preferencias de su público objetivo.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 14 14" {...props}><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 6h1a.5.5 0 0 1 .5.5V9a.5.5 0 0 1-.5.5h-1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm11 3.5h-1A.5.5 0 0 1 11 9V6.5a.5.5 0 0 1 .5-.5h1a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1Zm-3 2.75a2 2 0 0 0 2-2h0V9.5"/><path d="M8.25 11a1.25 1.25 0 0 1 0 2.5h-1.5a1.25 1.25 0 0 1 0-2.5ZM2.5 6V5a4.5 4.5 0 0 1 9 0v1m-6-2v1.5m3-1.5v1.5m-3 2c0 1.33 3 1.33 3 0"/></g></svg>
       `,
    },
    {
        title: "Asistencia Técnica",
        description: "Help Desk de distintos niveles, acordes a sus necesidades. Proveemos a sus usuarios de un recurso central para obtener asistencia técnica en el momento. Seguimiento y resolución de problemas del usuario. Integración de herramientas digitales para garantizar una mejor experiencia de uso.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12.003 21c-.732.001-1.465-.438-1.678-1.317a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c.886.215 1.325.957 1.318 1.694"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m8.001 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2-3.5V17m0 4v1.5m3.031-5.25l-1.299.75m-3.463 2l-1.3.75m0-3.5l1.3.75m3.463 2l1.3.75"/></g></svg>`,
    },
    {
        title: "Sondeos y Encuestas",
        description: "Ofrecemos resultados confiables sobre la percepción general en torno a los asuntos que ocupan a la opinión pública. Con estas herramientas, tanto empresas como partidos políticos u otro tipo de organizaciones, podrán descubrir las preferencias de su público objetivo.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26" {...props}><path fill="currentColor" d="M8.813 0A1 1 0 0 0 8 1v1H4.406C3.606 2 3 2.606 3 3.406V24.5c0 .9.606 1.5 1.406 1.5H21.5c.8 0 1.406-.606 1.406-1.406V3.406c.1-.8-.512-1.406-1.312-1.406H18V1a1 1 0 0 0-1-1H9a1 1 0 0 0-.094 0a1 1 0 0 0-.094 0zM10 2h6v2h-6zM5 4h3v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4h3v20H5zm2 5v4h4V9zm1 1h2v2H8zm5 0v2h6v-2zm-6 5v4h4v-4zm6 1v2h6v-2z"/></svg>`,
    },
    {
        title: "Publicidad y Campañas",
        description: "Generación de campañas publicitarias, encuestas privadas, públicas y políticas. Servicios de e-marketing a través del envío de mensajes de texto y/o locuciones a la red de telefonía fija. Clasificación de respuestas y reportes estadísticos",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16" {...props}><path fill="currentColor" d="M14.25 2.1a1.25 1.25 0 0 0-1.17-.1L6.91 4.43a1.22 1.22 0 0 1-.46.09H2.5a1.25 1.25 0 0 0-1.25 1.25v.1H0v3h1.25V9a1.25 1.25 0 0 0 1.25 1.22L4 13.4a1.26 1.26 0 0 0 1.13.72h.63A1.25 1.25 0 0 0 7 12.87v-2.53l6.08 2.43a1.27 1.27 0 0 0 .47.09a1.29 1.29 0 0 0 .7-.22a1.25 1.25 0 0 0 .55-1V3.13a1.25 1.25 0 0 0-.55-1.03m-8.5 3.67V9H2.5V5.77zm0 7.1h-.63l-1.23-2.65h1.86zm1.62-3.72A2.29 2.29 0 0 0 7 9V5.7a2.26 2.26 0 0 0 .37-.11l6.18-2.46v8.48zm7.46-3.03v2.5a1.25 1.25 0 0 0 0-2.5"/></svg>`,
    },
    {
        title: "Retención y fidelización de clientes",
        description: "y  Realizamos concreción de entrevistas, incremento de la facturación por cliente, renovación de productos o servicios que ya hayan contratado,  programas de afinidad y reducción de bajas.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" {...props}><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M11 13c.447 0 .887.024 1.316.07a1 1 0 0 1-.211 1.989C11.745 15.02 11.375 15 11 15c-2.023 0-3.843.59-5.136 1.379c-.647.394-1.135.822-1.45 1.222c-.324.41-.414.72-.414.899c0 .122.037.251.255.426c.249.2.682.407 1.344.582C6.917 19.858 8.811 20 11 20l.658-.005a1 1 0 0 1 .027 2L11 22c-2.229 0-4.335-.14-5.913-.558c-.785-.208-1.524-.506-2.084-.956C2.41 20.01 2 19.345 2 18.5c0-.787.358-1.523.844-2.139c.494-.625 1.177-1.2 1.978-1.69C6.425 13.695 8.605 13 11 13m7.5 0a2.5 2.5 0 0 1 2.495 2.336L21 15.5v.585c.538.19.935.678.993 1.266L22 17.5v3a1.5 1.5 0 0 1-1.356 1.493L20.5 22h-4a1.5 1.5 0 0 1-1.493-1.356L15 20.5v-3a1.5 1.5 0 0 1 .869-1.361l.131-.054V15.5a2.5 2.5 0 0 1 2.5-2.5m1.5 5h-3v2h3zm-1.5-3a.5.5 0 0 0-.5.5v.5h1v-.5a.5.5 0 0 0-.5-.5M11 2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6"/></g></svg>`,
    },
]

export { services }