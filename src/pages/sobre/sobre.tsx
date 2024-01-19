import homeLogo from '../../assets/sustentabilidade.png'

function Sobre() {
    return (
        <>
            <div className="bg-indigo-900 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>Saiba um pouco mais sobre nós!</h2>
                        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, tempora! Saepe porro et libero molestiae consequuntur quod, ad necessitatibus corrupti cumque id! Eos, nesciunt rerum! Qui ducimus voluptatibus quae perspiciatis.</p>

                        <div className="flex justify-around gap-4">

                            <button className='rounded bg-white text-blue-800 py-2 px-4'>Github</button>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img src={homeLogo} alt="" className='w-2/3' />

                    </div>
                </div>
            </div>

        </>
    );
}

export default Sobre