import PropTypes from 'prop-types'
import forprosjekt from './../reports/forprosjekt/main.pdf'
import DownloadableFile from './DownloadableFile'

const ReportPage = () => {
    return (
        <div className='flex flex-row flex-wrap justify-center items-center h-auto p-5 bg-gray-900'>
            <DownloadableFile File='statusrapport'/>
            <DownloadableFile File='prosjektskisse'/>
            <DownloadableFile File='forprosjekt'/>
            <DownloadableFile File='sluttrapport'/>
        </div>
    )
}

ReportPage.propTypes = {

}

export default ReportPage
