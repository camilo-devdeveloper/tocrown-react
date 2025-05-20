function Contacto() {
  return (
    <div className="w-full">
      <h1 className="md:text-5xl text-4xl text-center text-verdeBrillante font-bold md:mt-10 mt-0 mb-16">
        Ponte en Contacto con el club 🏐💚
      </h1>

      <div className="w-[90%] mx-auto md:flex md:justify-center md:gap-48">
        {/* Datos del club */}
        <div className="md:order-2">
          <h2 className="text-3xl text-negro font-bold text-center mb-8">
            Contacta con Nosotros
          </h2>
          <div className="space-y-4">
            <div className="flex gap-2">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="#38ac49"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <p>
                <span className="font-bold">Nombre:</span> To Crown Voley
              </p>
            </div>
            <div className="flex gap-2">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="yellow"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <p>
                <span className="font-bold">Correo Electrónico:</span>{" "}
                voleyclub.tocrown@hotmail.com
              </p>
            </div>
            <div className="flex gap-2">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="#ff4d29"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
              <p>
                <span className="font-bold">Teléfono:</span> 3165740245 -
                3161050389
              </p>
            </div>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div className="md:order-1">
          <h2 className="text-3xl text-negro font-bold text-center mt-10 mb-10 md:mt-0">
            Datos Personales y Contacto
          </h2>
          <form className="mb-16">
            <div className="mb-5">
              <label className="mb-2 block uppercase text-grisOscuro font-bold">
                Tu nombre
              </label>
              <input
                type="text"
                name="nombre"
                required
                placeholder="Tu nombre"
                className="border p-3 w-full rounded-lg"
              />
            </div>

            <div className="mb-5">
              <label className="mb-2 block uppercase text-grisOscuro font-bold">
                Tu número
              </label>
              <input
                type="tel"
                name="numero"
                required
                placeholder="Tu número"
                className="border p-3 w-full rounded-lg"
              />
            </div>

            <div className="mb-5">
              <label className="mb-2 block uppercase text-grisOscuro font-bold">
                Tu correo
              </label>
              <input
                type="email"
                name="correo"
                required
                placeholder="Tu correo electrónico"
                className="border p-3 w-full rounded-lg"
              />
            </div>

            <div className="mb-5">
              <label className="mb-2 block uppercase text-grisOscuro font-bold">
                Asunto
              </label>
              <input
                type="text"
                name="asunto"
                required
                placeholder="Motivo del mensaje"
                className="border p-3 w-full rounded-lg"
              />
            </div>

            <div className="mb-5">
              <label className="mb-2 block uppercase text-grisOscuro font-bold">
                Mensaje
              </label>
              <textarea
                rows="4"
                name="mensaje"
                required
                placeholder="Déjanos un mensaje..."
                className="border p-3 w-full rounded-lg"
              />
            </div>

            <div className="mb-5">
              <label className="flex items-start gap-2 text-sm text-grisOscuro">
                <input type="checkbox" required className="mt-1 cursor-pointer" />
                <span>
                  Acepto que usen mis datos para responder este mensaje.
                </span>
              </label>
            </div>

            <input
              type="submit"
              value="Enviar"
              className="bg-orange-600 hover:bg-orange-700 transition-colors uppercase font-bold w-full p-3 text-white rounded-lg cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
