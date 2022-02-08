const ProblemPage = () => {
    return (
        <div className='bg-gray-900 h-auto flex flex-col items-center'>
            <div className='bg-gray-900 my-10 p-5 w-4/5 flex items-center flex-col rounded-xl shadow-xl'>
                <h1 className="text-gray-100 text-5xl font-bold mb-5 prose"> 
                    Oppgaven 
                </h1>
                <hr className="my-2 w-full py-0.5 bg-gradient-to-r from-gray-900 via-purple-600 to-gray-900 border-none"/>
                <p className='text-gray-400 prose max-w-none'>
                Ifjor hadde en gruppe bachelorstudenter bygget to kjøretøy som benytter Raspberry Pi til å styre bilene på egenhånd. 
                I år ønsker Accenture å videreutvikle dette konseptet slik at kjøretøyene skal kunne kjøre på et sentralisert system. 
                Prosjektet krever derfor at man setter seg inn i tidligere skrevet kode og utvikle det sentraliserte systemet fra bunnen av. 
                Dette systemet skal kommunisere med IoT-bilene som er utstyrt med sensorer og kamera for å planlegge rutene til biler i et større nettverk.
                </p>
            </div>
        </div>
    )
}

export default ProblemPage
