function Documentos() {
  const documentos = [
    { nombre: "Formato de Inscripción", archivo: "formato_inscripcion.pdf" },
    { nombre: "Compromiso Deportivo", archivo: "compromiso_deportivo.pdf" },
    { nombre: "Autorización de Imagen", archivo: "autorizacion_imagen.pdf" },
  ];

  return (
    <div>
      <h1 className="md:text-5xl text-4xl text-center text-verdeBrillante font-bold lg:mt-10 mt-0 mb-16">
        Documentos e Información 🏐💚
      </h1>

      <div className="mt-20 mb-20 grid md:grid-cols-3 gap-8 w-[90%] mx-auto">
        {documentos.map((doc, index) => (
          <a
            key={index}
            href={`/docs/${doc.archivo}`}
            download
            className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-6 hover:bg-green-50 transition"
          >
            <svg
              className="w-12 h-12 text-green-700 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span className="text-green-900 text-xl font-semibold text-center">
              {doc.nombre}
            </span>
            <p className="text-gray-400 text-sm mt-2">
              Presiona para descargar
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Documentos;