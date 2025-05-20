function Home() {
  return (
   <>
          <div className="grid md:grid-cols-3 md:grid-rows-none gap-0 overflow-hidden relative -top-18 xl:-top-0 grid-cols-2 grid-rows-2">
        <div className="md:h-[600px] h-[400px] max-h-[600px] m-0 cursor-pointer transition-transform duration-300 hover:scale-110">
            <img src="/img/portada1.jpg" alt="" className="w-full h-full object-cover object-top"/>
        </div>
        <div className="md:h-[600px] h-[400px] max-h-[600px] m-0 cursor-pointer transition-transform duration-300 hover:scale-110 order-3 md:order-2 col-span-full md:col-span-1">
            <img src="/img/portada3.jpg" alt="" className="w-full h-full object-cover object-top"/>
        </div>
        <div className="md:h-[600px] h-[400px] max-h-[600px] m-0 cursor-pointer transition-transform duration-300 hover:scale-110 order-2 md:order-3 ">
            <img src="/img/portada2.jpg" alt="" className="w-full h-full object-cover md:object-top object-left"/>
        </div>
    </div>

  
    <h1 className="md:mt-12 mt-6  mb-16 md:text-5xl text-4xl text-verdeBrillante font-bold text-center">Club Deportivo De Voleibol 🏐💚</h1>

   
    <div className="w-[95%] max-w-[1400px] mx-auto flex flex-col pb-20 text-xl space-y-8  text-center md:text-left">
        <p>
            En el Club Deportivo de Voleibol To Crown, nos enfocamos en más que solo enseñar un deporte. Nuestro objetivo es transformar vidas a través del voleibol, ofreciendo un proceso de desarrollo complementario que permita la formación integral de nuestros deportistas.
        </p>
        <p>
            Nos caracterizamos por ofrecer un enfoque integral que combina la práctica deportiva con la formación personal y social. Creemos que el deporte es una herramienta poderosa para el crecimiento y el desarrollo, y nos esforzamos por brindar a nuestros deportistas y familias una experiencia enriquecedora que les permita aprovechar al máximo su tiempo libre.
        </p>
        <p>
            Aspiramos posicionarnos como uno de los mejores clubes de voleibol de Cartagena y Bolívar, ofreciendo una experiencia deportiva y personal de alta calidad a nuestros deportistas y familias. Queremos ser un referente en la región y un modelo a seguir para otros clubes y organizaciones deportivas.
        </p>
    </div>
   </>
  )
}

export default Home;