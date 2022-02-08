import PropTypes from 'prop-types'
import {FaRegFilePdf} from 'react-icons/fa'

const DownloadableFile = ({File}) => {
    return (
        <div className='bg-gray-800 flex flex-col items-center w-52 h-fit rounded-3xl p-5 shadow-xl m-5'>
            <h1 className='text-xl font-bold text-gray-200 mb-5'>{File.charAt(0).toUpperCase() + File.slice(1)}</h1>
            <FaRegFilePdf className='text-8xl text-gray-200'/>
            <a href={require(`./../reports/${File}/main.pdf`)} download={`${File}.pdf`}>
                <button className='text-white bg-purple-600 font-bold rounded-full hover:bg-purple-800 px-3 py-1 mt-5'>
                    Last ned
                </button>
            </a>
        </div>
    )
}

DownloadableFile.propTypes = {
    File: PropTypes.string
}

export default DownloadableFile
