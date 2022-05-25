import PropTypes from 'prop-types'
import MemberCard from './MemberCard'
import andreas from './../images/andreasImg.jpg'
import anders from './../images/andersImg.jpg'
import uy from './../images/uyImg.jpg'

const MembersPage = () => {
    return (
        <div className='flex flex-col items-center bg-gray-800 w-full shadow-xl p-5'>
            <h1 className='text-2xl font-bold text-gray-100'>Students</h1>
            <div className='flex flex-row flex-wrap justify-center'>
                <MemberCard ProfilePicture={andreas} Name='Andreas Torres Hansen' StudentNumber={338851}/>
                <MemberCard ProfilePicture={uy} Name='Uy Quoc Nguyen' StudentNumber={341864}/>
                <MemberCard ProfilePicture={anders} Name='Anders Hagen Ottersland' StudentNumber={341883}/>
            </div>
        </div>
    )
}

MembersPage.propTypes = {

}

export default MembersPage
