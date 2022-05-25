import PropTypes from 'prop-types'
import {FaRegFilePdf} from 'react-icons/fa'

const DownloadableFile = ({File, Name}) => {
    return (
        <div className='bg-gray-800 flex flex-col items-center w-60 h-fit rounded-3xl p-5 shadow-xl m-5'>
            <h1 className='text-xl font-bold text-gray-200 mb-5'>{Name.charAt(0).toUpperCase() + Name.slice(1)}</h1>
            <FaRegFilePdf className='text-8xl text-gray-200'/>
            <a href={require(`./../reports/${File}/main.pdf`)} download={`${Name}.pdf`}>
                <button className='text-white bg-purple-600 font-bold rounded-full hover:bg-purple-800 px-3 py-1 mt-5'>
                    Download
                </button>
            </a>
        </div>
    )
}

DownloadableFile.propTypes = {
    Name: PropTypes.string,
    File: PropTypes.string
}

export default DownloadableFile
