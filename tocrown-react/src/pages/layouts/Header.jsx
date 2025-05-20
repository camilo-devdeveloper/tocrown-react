import { useState } from "react";

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  // Para simplificar, aquí defino las rutas como strings.
  // Cambia las URLs a las correctas o usa React Router si quieres.
  const routes = {
    home: "/",
    historia: "/historia",
    organigrama: "/organigrama",
    logros: "/logros",
    contacto: "/contacto",
    equipos: "/equipos",
    competiciones: "/competiciones",
    partidos: "/partidos",
    clasificaciones: "/clasificaciones",
    entrenamientos: "/entrenamientos",
    documentos: "/documentos",
    comunicados: "/comunicados",
    horarios: "/horarios",
    fotos: "/fotos",
    tienda: "/tienda",
    inscripciones: "/inscripciones",
  };

  // Maneja el toggle de submenú
  const toggleSubmenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  return (
    <>
      {/* Sticky Navbar */}
      <div className="relative z-50">
        <div className="sticky top-0 h-40 w-full z-40">
          {/* Desktop logo */}
          <div className="hidden xl:block absolute top-4 left-5">
            <a href={routes.home}>
              <img
                className="w-28 h-28 cursor-pointer"
                src="/img/logo.png"
                alt="Logo"
              />
            </a>
          </div>

          {/* Top bar */}
          <div className="bg-verdeOscuro h-[55%] w-full">
            {/* Desktop top content */}
            <div className="hidden xl:flex h-full justify-end items-center mr-12">
              <div className="h-full w-[88%] flex justify-between items-center">
                <h1 className="text-blanco font-bold text-3xl">
                  Club Deportivo TO CROWN
                </h1>
                <i className="bi bi-person-circle text-blanco text-3xl cursor-pointer"></i>
              </div>
            </div>

            {/* Mobile top bar */}
            <div className="xl:hidden w-[95%] mx-auto flex justify-between items-center h-full">
              <i
                className="bi bi-list text-blanco text-4xl cursor-pointer"
                onClick={() => setMenuVisible(true)}
              ></i>
              <a href={routes.home}>
                <img
                  className="w-14 h-14 cursor-pointer"
                  src="/img/logo.png"
                  alt="Logo"
                />
              </a>
              <i className="bi bi-person-circle text-blanco text-4xl cursor-pointer"></i>
            </div>
          </div>

          {/* Desktop bottom nav */}
          <div className="hidden xl:block bg-amarillo h-[45%] w-full">
            <div className="h-full flex justify-end items-center mr-12">
              <div className="h-full w-[88%] flex items-center relative">
                <ul className="flex h-full">
                  <li className="font-bold text-lg px-4 cursor-pointer hover:bg-amarilloMedio flex justify-center items-center">
                    <a href={routes.home}>Inicio</a>
                  </li>

                  {/* Dropdown menus desktop */}
                  {[
                    {
                      title: "Club Deportivo",
                      submenu: [
                        { label: "Historia", link: routes.historia },
                        { label: "Organigrama", link: routes.organigrama },
                        { label: "Logros", link: routes.logros },
                        { label: "Contacto", link: routes.contacto },
                      ],
                    },
                    {
                      title: "Área Deportiva",
                      submenu: [
                        { label: "Equipos", link: routes.equipos },
                        { label: "Competiciones", link: routes.competiciones },
                        { label: "Partidos", link: routes.partidos },
                        { label: "Clasificaciones", link: routes.clasificaciones },
                        { label: "Entrenamientos", link: routes.entrenamientos },
                        { label: "Documentos e información", link: routes.documentos },
                      ],
                    },
                    {
                      title: "Comunicación",
                      submenu: [
                        { label: "Comunicados", link: routes.comunicados },
                        { label: "Horarios de entrenamiento", link: routes.horarios },
                        { label: "Fotos", link: routes.fotos },
                      ],
                    },
                    {
                      title: "Tienda",
                      submenu: [
                        { label: "Tienda online", link: routes.tienda },
                      ],
                    },
                    {
                      title: "Inscríbete",
                      submenu: [
                        { label: "Proceso de inscripción", link: routes.inscripciones },
                      ],
                    },
                  ].map(({ title, submenu }, i) => (
                    <li
                      key={title}
                      className="font-bold text-lg px-4 cursor-pointer hover:bg-amarilloMedio flex justify-center items-center gap-2 group relative"
                    >
                      <p>{title}</p>
                      <i className="bi bi-chevron-down text-lg text-negro"></i>
                      <ul className="absolute hidden group-hover:block bg-amarillo text-negro w-full top-full">
                        {submenu.map(({ label, link }) => (
                          <li key={label}>
                            <a
                              href={link}
                              className="block px-4 py-4 hover:bg-amarilloMedio font-semibold text-base transition-all"
                            >
                              {label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>

                {/* Redes sociales */}
                <div className="flex gap-4 absolute right-0">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/to_crown_voley/"
                  >
                    <i className="bi bi-instagram text-base cursor-pointer"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/people/TO-Crown-Voley/100063290051656/"
                  >
                    <i className="bi bi-facebook text-base cursor-pointer"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.tiktok.com/@tocrownvoley?_t=ZS-8voMFf3wZQw&_r=1"
                  >
                    <i className="bi bi-tiktok"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile side menu */}
        <div
          className={`fixed top-0 left-0 h-full w-[85%] max-w-sm bg-amarillo z-50 transition-transform duration-300 ease-in-out ${
            menuVisible ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close button */}
          <div className="flex justify-end p-4">
            <i
              className="bi bi-x-lg text-negro text-xl cursor-pointer"
              onClick={() => setMenuVisible(false)}
            ></i>
          </div>

          {/* Navigation */}
          <ul className="flex flex-col space-y-2 px-6 text-negro text-lg font-semibold">
            <li>
              <a href={routes.home} className="block py-2">
                Inicio
              </a>
            </li>

            {[
              {
                title: "Club Deportivo",
                submenu: [
                  { label: "Historia", link: routes.historia },
                  { label: "Organigrama", link: routes.organigrama },
                  { label: "Logros", link: routes.logros },
                  { label: "Contacto", link: routes.contacto },
                ],
              },
              {
                title: "Área Deportiva",
                submenu: [
                  { label: "Equipos", link: routes.equipos },
                  { label: "Competiciones", link: routes.competiciones },
                  { label: "Partidos", link: routes.partidos },
                  { label: "Clasificaciones", link: routes.clasificaciones },
                  { label: "Entrenamientos", link: routes.entrenamientos },
                  { label: "Documentos e información", link: routes.documentos },
                ],
              },
              {
                title: "Comunicación",
                submenu: [
                  { label: "Comunicados", link: routes.comunicados },
                  { label: "Horarios de entrenamiento", link: routes.horarios },
                  { label: "Fotos", link: routes.fotos },
                ],
              },
              {
                title: "Tienda",
                submenu: [{ label: "Tienda online", link: routes.tienda }],
              },
              {
                title: "Inscríbete",
                submenu: [{ label: "Proceso de inscripción", link: routes.inscripciones }],
              },
            ].map(({ title, submenu }, i) => (
              <li key={title}>
                <div
                  onClick={() => toggleSubmenu(i)}
                  className="flex justify-between items-center cursor-pointer py-2"
                >
                  <span>{title}</span>
                  <i
                    className={`bi bi-chevron-down transition-transform duration-200 ${
                      openMenu === i ? "rotate-180" : ""
                    }`}
                  ></i>
                </div>

                <ul
                  className={`pl-4 space-y-2 text-lg font-normal overflow-hidden transition-[max-height] duration-300 ${
                    openMenu === i ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {submenu.map(({ label, link }) => (
                    <li key={label} className="py-2">
                      <a href={link}>{label}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          {/* Redes sociales */}
          <div className="flex ml-7 space-x-4 text-xl mt-10 text-negro">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/to_crown_voley/"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/people/TO-Crown-Voley/100063290051656/"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tiktok.com/@tocrownvoley?_t=ZS-8voMFf3wZQw&_r=1"
            >
              <i className="bi bi-tiktok"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;