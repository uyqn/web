import PropTypes from 'prop-types'

const MemberCard = ({ProfilePicture, Name, StudentNumber}) => {
    return (
        <div className='bg-gray-800 rounded-xl flex flex-col items-center m-5 shadow-xl pb-2'>
            <div className='h-52 w-52 overflow-hidden'>
                <img src={ProfilePicture} className='rounded-xl'/>
            </div>
            <h1 className='text-gray-100 font-bold text-l prose'>{Name}</h1>
            <ul className='text-gray-500 prose'>
                <li>s{StudentNumber}</li>
            </ul>
        </div>
    )
}

MemberCard.propTypes = {

}

export default MemberCard
