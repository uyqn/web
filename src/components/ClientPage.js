import AccentureLogo from './../images/Accenture-name-logo.png'

const ClientPage = () => {
    return (
        <div className='bg-gray-900 h-auto flex flex-col items-center'>
            <div className='bg-gray-900 mt-10 p-5 w-4/5 flex items-center flex-col rounded-xl shadow-xl'>
                <img src={AccentureLogo} className='w-72'/>
                <p className='text-gray-400 prose max-w-none'>
                Accenture er en internasjonal konsern som spesialiserer seg innenfor IT og konsultasjon tjenester. 
                De har lang erfaring med å tilby studenter, per nå fra Høyskolen Kristiania og OsloMet, 
                å skrive bacheloroppgave innenfor relevante IT studier hos dem. I år har de lagt ut en rekke spennende 
                oppgaver for et bachelorprosjekt som de ønsker å utføre i 2022. Accenture har dermed tilbudt gruppen vår å løse deres IoT-oppgave.
                </p>
                <a href='https://www.accenture.com/no-en' target='_blank'>
                    <button className='text-white bg-purple-600 font-bold rounded-full hover:bg-purple-800 px-3 py-1 mt-5 prose max-w-none'>
                        Lær mer
                    </button>
                </a>
            </div>
        </div>
    )
}

export default ClientPage
