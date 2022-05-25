const ProblemPage = () => {
    return (
        <div className='bg-gray-900 h-auto flex flex-col items-center'>
            <div className='bg-gray-900 my-10 p-5 w-4/5 flex items-center flex-col rounded-xl shadow-xl'>
                <h1 className="text-gray-100 text-5xl font-bold mb-5 prose"> 
                    Abstract
                </h1>
                <hr className="my-2 w-full py-0.5 bg-gradient-to-r from-gray-900 via-purple-600 to-gray-900 border-none"/>
                <p className='text-gray-400 prose max-w-none mb-10'>
                    In 2020 a group of students from Høyskolen Kristiania developed self-driving cars with Raspberry Pi
                    for Accenture. This year, our group was tasked to extend their project by combining it with a
                    centralized communication system. We consider how traffic flow can be improved with autonomous cars
                    and a server managing the traffic. Consequently, our group developed a client-server program where
                    the existing Raspberry Pi vehicles communicate with a server to improve traffic flow at an
                    intersection.
                </p>

                <p className='text-gray-400 prose max-w-none'>
                    Traffic lights control intersections today to prevent accidents. However, stop- ping and
                    accelerating vehicles lead to traffic congestion{' '}
                    <a className='text-gray-400 prose max-w-none'
                       target={'_blank'}
                       href={'https://eng.libretexts.org/Bookshelves/Civil_Engineering/Fundamentals_of_Transportation/06%3A_Traffice_Control/6.01%3A_Shockwaves'}>
                        (Levinson et al., 2021)
                    </a>.
                    Hence, this project
                    concludes, through demonstrations, shows that a centralized server can indeed improve traffic flow
                    by adjusting the vehicles’ speed accordingly.
                </p>
            </div>
        </div>
    )
}

export default ProblemPage
