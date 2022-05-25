import PropTypes from 'prop-types'
import forprosjekt from './../reports/forprosjekt/main.pdf'
import DownloadableFile from './DownloadableFile'

const ReportPage = () => {
    return (
        <div className='flex flex-row flex-wrap justify-center items-center h-auto p-5 bg-gray-900'>
            <DownloadableFile Name='Status report' File='statusrapport'/>
            <DownloadableFile Name='Project draft' File='prosjektskisse'/>
            <DownloadableFile Name='Pre-project report' File='forprosjekt'/>
            <DownloadableFile Name='Final report' File='sluttrapport'/>
        </div>
    )
}

ReportPage.propTypes = {

}

export default ReportPage
