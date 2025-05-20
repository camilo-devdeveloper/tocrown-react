function Organigrama() {
  return (
   <>

    
    <h1 className="lg:mt-10 mt-0  mb-16 md:text-5xl text-4xl text-verdeBrillante font-bold text-center">Organigrama del Club To Crown 🏐💚</h1>

   
    <div className="w-[95%] max-w-[1400px] mx-auto flex flex-col pb-20 text-xl space-y-8 text-center md:text-left">
        
        <h2 className="text-3xl text-negro font-bold">Misión</h2>
        <p>
            Somos un club deportivo de voleibol llamado To Crown. Nuestra misión principal es formar niños y jóvenes a través del deporte para que tengan un mejor desarrollo a nivel físico y mental. Procuramos la excelencia y su fortalecimiento mientras a la vez promovemos el área deportiva del voleibol. Pretendemos ayudar a que posean una buena fraternidad y comprendan la importancia del trabajo en equipo como medio de superación personal respecto al desarrollo integral.
        </p>

        <h2 className="text-3xl text-negro font-bold">Visión</h2>
        <p>
            Nos enfocamos en ser un club destacado por su desempeño y virtudes. Pretendemos que nuestro club se encuentre entre los mejores de voleibol del departamento, y que se mantenga siempre la esencia de un equipo integrado de niños y jóvenes formados bajo los principios de respeto, trascendencia y liderazgo. Aspiramos ser una gran comunidad voleibolista que vale por el desarrollo integral de la juventud colombiana.
        </p>

      
        <h2 className="text-3xl text-negro font-bold">Proyección Deportiva</h2>
        <p>
            Como equipo tenemos la intención de apoyar la parte competitiva de los clubes, refiriéndonos a nuestra participación en los representativos de organizaciones al deporte de voleibol en Bolívar y en competencias como juegos distritales, nacionales y regionales de clubes por el departamento de Bolívar.
        </p>

        
        <p className="text-center mt-10">Foto del escudo oficial de To Crown</p>
        <div className="mx-auto mt-12">
            <img src="/img/escudo_nuevo.png" alt="Escudo Club To Crown" className="w-[300px] h-[400px] object-contain" />
        </div>
    </div>

   </>
  )
}

export default Organigrama;