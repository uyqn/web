import AccentureLogo from './../images/Accenture-name-logo.png'

const ClientPage = () => {
    return (
        <div className='bg-gray-900 h-auto flex flex-col items-center'>
            <div className='bg-gray-900 mt-10 p-5 w-4/5 flex items-center flex-col rounded-xl shadow-xl'>
                <img src={AccentureLogo} className='w-72 mb-5'/>
                <p className='text-gray-400 prose max-w-none'>
                    Accenture is an international IT firm that operates in 200 different countries worldwide.
                    They offer a wide range of services in many fields, like artificial intelligence, data analytics,
                    and cloud computing. The main office is in Dublin, and the Norwegian main office is in Fornebu.
                    Accenture has 674 thousand employees internationally, of which 1000 work in Norway
                    {' '}
                    <a className='text-gray-400 prose max-w-none'
                       target={'_blank'}
                       href={'https://newsroom.accenture.com/news/accenture-reports-very-strong-fourth-quarter-and-full-year-fiscal-2021-results.htm'}>
                        (Accenture, 2021)
                    </a>. In 2021, Accenture generated a revenue of approximately $50.3 billion
                    {' '}
                    <a className='text-gray-400 prose max-w-none'
                       target={'_blank'}
                       href={'https://www.accenture.com/no-en/about/company-index'}>
                        (Accenture, 2022)
                    </a>.
                </p>
                <a href='https://www.accenture.com/no-en' target='_blank'>
                    <button className='text-white bg-purple-600 font-bold rounded-full hover:bg-purple-800 px-3 py-1 my-10 prose max-w-none'>
                        Learn more
                    </button>
                </a>
            </div>
        </div>
    )
}

export default ClientPage
