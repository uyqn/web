import supervisor from './../images/InternalSupervisor.jpg'

const InternalSupervisor = () => {
    return (
        <div className='bg-gray-900 w-full flex flex-row justify-center py-10'>
            <div className='flex flex-row w-4/5 items-start'>
                <img src={supervisor} className='w-80 object-contain rounded-full'/>
                <div className='mx-10 flex flex-col items-center'>
                    <h1 className='text-gray-100 text-3xl prose'>Veileder hos OsloMet</h1>
                    <h1 className='text-gray-200 text-xl prose max-w-none my-1'>Jianhua Zhang</h1>
                    <p className='text-gray-400 prose max-w-none'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
                        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default InternalSupervisor
