function Footer() {
  return (
   <>
   <footer className="w-full h-[42rem] ">
    <div className="md:h-[45%] h-[40%] bg-white flex items-center justify-center">
        <img src="/img/banner.jpg" alt="" className="w-full h-full object-cover transition-all duration-300 ease-in-out" />
    </div>

    <div className="md:h-[55%] h-[60%] bg-verdeOscuro">
        <div className="w-[95%] max-w-[1400px] mx-auto flex flex-col items-center h-full gap-3 md:flex-row md:justify-between">
            <a href="{{ route('home') }}" className="md:order-2">
                <img src="/logo.ico" alt="" className="w-[5rem] h-5rem] mt-[3rem]  md:w-[9rem] md:h-[9rem] md:mt-0 cursor-pointer" />
            </a>


            <div className="flex flex-col gap-4 mt-4 md:mt-0 text-center md:text-left ">
                <p className="text-blanco m-0 p-0 text-[1.1rem] font-bold tracking-[1px]">Club Deportivo TO Crown</p>
                <p className="text-blanco m-0 p-0 text-[1rem] font-normal">
                    Condiciones de uso y aviso legal | Protección de datos | Política de cookies | Configuración de cookies
                </p>
                <p className="text-blanco m-0 p-0 text-[1rem] font-normal">Copyright © 2025 Todos los derechos reservados.</p>

                <div className="flex gap-4 text-white justify-center md:justify-normal">
                    <a target="_blank" href="https://www.instagram.com/to_crown_voley/"><i className="bi bi-instagram text-base cursor-pointer"></i></a>
                    <a target="_blank"  href="https://www.facebook.com/people/TO-Crown-Voley/100063290051656/"><i className="bi bi-facebook text-base cursor-pointer"></i></a>
                    <a target="_blank" href="https://www.tiktok.com/@tocrownvoley?_t=ZS-8voMFf3wZQw&_r=1"><i className="bi bi-tiktok"></i></a>
                </div>
            </div>
        </div>
    </div>
</footer>
   </>
  )
}

export default Footer;